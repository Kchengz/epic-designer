<template>
  <div class="epic-loading-box" v-if="!pluginManager.initialized.value">
    <!-- <EAsyncLoader /> -->
  </div>
  <Suspense v-else @resolve="handleReady">
    <template #default>
      <div class="epic-designer-main epic-scoped" @wheel="handleWheel">
        <div class="epic-header-container">
          <slot name="header">
            <EHeader
              @preview="handlePreview"
              v-if="!props.hiddenHeader"
              @save="handleSave"
            >
              <template #header>
                <slot name="header-prefix"></slot>
              </template>

              <template #prefix>
                <slot name="header-prefix"></slot>
              </template>
              <template #title>
                <slot name="header-title"></slot>
              </template>
              <template #right-prefix>
                <slot name="header-right-prefix"></slot>
              </template>
              <template #right-action>
                <slot name="header-right-action"></slot>
              </template>
              <template #right-suffix>
                <slot name="header-right-suffix"></slot>
              </template>
            </EHeader>
          </slot>
        </div>
        <div class="epic-split-view-container" :class="{ 'hidden-header': hiddenHeader }">
          <EActivityBar />
          <EEditContainer />
          <ERightSidebar />
        </div>
        <EPreview :hideConfirm="props.hidePreviewConfirm" ref="previewRef" />
      </div>
    </template>
    <template #fallback>
      <div class="epic-loading-box">
        <EAsyncLoader />
      </div>
    </template>
  </Suspense>
</template>
<script lang="ts" setup>
import { ref, provide, reactive, toRaw, nextTick, computed, watchEffect } from "vue";
import { DesignerState, ComponentSchema, PageSchema } from "../../../types/epic-designer";
import {
  getMatchedById,
  loadAsyncComponent,
  useRevoke,
  usePageManager,
  pluginManager,
  deepCompareAndModify,
  deepEqual,
  deepClone,
} from "@epic-designer/utils";
import { DesignerProps } from "./types";
import { useStore } from "@epic-designer/hooks";
import EPreview from "./modules/preview/index.vue";

const EHeader = loadAsyncComponent(() => import("./modules/header/index.vue"));
const EActivityBar = loadAsyncComponent(() => import("./modules/activityBar/index.vue"));
const EEditContainer = loadAsyncComponent(
  () => import("./modules/editContainer/index.vue")
);
const ERightSidebar = loadAsyncComponent(
  () => import("./modules/rightSidebar/index.vue")
);
const EAsyncLoader = loadAsyncComponent(() => import("../../asyncLoader/index.vue"));
const pageManager = usePageManager();
const revoke = useRevoke();

const props = withDefaults(defineProps<DesignerProps>(), {
  draggable: true,
  disabledZoom: false,
  hiddenHeader: false,
  lockDefaultSchemaEdit: false,
  formMode: false,
  title: "EpicDesigner默认项目",
});

// 内部默认页面数据
let innerDefaultSchema: PageSchema = {
  schemas: [
    {
      type: "page",
      id: "root",
      label: "页面",
      children: [],
      componentProps: {
        style: {
          padding: "16px",
        },
      },
    },
  ],
  script: `const { defineExpose, find } = epic;

function test (){
    console.log('test')
}

// 通过defineExpose暴露的函数或者属性
defineExpose({
 test
})`,
};

// 更新初始化数据
watchEffect(() => {
  // 如果props.defaultSchema有值，则优先使用props.defaultSchema
  if (props.defaultSchema) {
    innerDefaultSchema = props.defaultSchema;
  } else {
    // 切换表单模式默认schema数据
    if (props.formMode) {
      innerDefaultSchema.schemas = pluginManager.formSchemas;
    }
  }
  // 记录默认组件id
  pageManager.setDefaultComponentIds(innerDefaultSchema.schemas);
});

// 设计模式
pageManager.setDesignMode();

const emits = defineEmits(["ready", "save", "reset", "imported", "toggleDeviceMode"]);

const previewRef = ref<InstanceType<typeof EPreview> | null>(null);

const state = reactive<DesignerState>({
  checkedNode: null,
  hoverNode: null,
  disableHover: false,
  matched: [],
});

const pageSchema = pageManager.pageSchema;

// 记录缩放状态 start
const { disabledZoom } = useStore();
watchEffect(() => {
  disabledZoom.value = props.disabledZoom;
});
// 记录缩放状态 end

// 提供依赖注入的上下文
provide("pageSchema", pageSchema);
provide("revoke", revoke);
provide("pageManager", pageManager);
provide(
  "designerProps",
  computed(() => props)
);

provide("designer", {
  setCheckedNode,
  setHoverNode,
  setDisableHover,
  handleToggleDeviceMode,
  reset,
  preview: handlePreview,
  save: handleSave,
  handleImported,
  state,
});

function init() {
  // 初始化默认节点
  pageSchema.schemas = deepClone(innerDefaultSchema.schemas);

  // 选中根节点
  setCheckedNode(pageSchema.schemas[0]);
  revoke.push(pageSchema.schemas, "初始化");
}

/**
 * 选中节点
 * @param schema
 */
async function setCheckedNode(schema: ComponentSchema = pageSchema.schemas[0]) {
  state.checkedNode = schema;
  state.matched = getMatchedById(pageSchema.schemas, schema.id!);
}

/**
 * 设置悬停节点
 * @param schema
 */
async function setHoverNode(schema: ComponentSchema | null = null) {
  if (!schema || state.disableHover) {
    state.hoverNode = null;
    return false;
  }
  if (schema?.id === state.hoverNode?.id) {
    return false;
  }
  // console.log(schema?.id)
  state.hoverNode = schema;
}

/**
 * 组件（包含异步组件）加载完成后
 */
function handleReady() {
  // 等待DOM更新循环结束后
  nextTick(() => {
    emits("ready", { pageManager });
  });
}

/**
 * 设置hover状态
 * @param disableHover
 */
async function setDisableHover(disableHover = false) {
  state.disableHover = disableHover;
}

/**
 * 接受一个PageSchema对象作为参数。根据传入的schemas和script属性，更新页面对应的数据
 * @param pageSchema
 */
function setData(schema: PageSchema) {
  pageManager.setPageSchema(schema);
  revoke.push(pageSchema.schemas, "加载数据");
}

/**
 * 返回当前页面数据的 PageSchema 对象，包含页面当前的 schemas 和 script 数据。
 */
function getData(): PageSchema {
  // 返回一个对象，包含当前 schemas 对象的普通对象表示和当前 script 的值
  return deepClone(pageSchema);
}

/**
 * 重置页面数据为默认数据。
 */
function reset() {
  // 判断数据是否已修改，如果未修改，则取消重置操作
  if (
    deepEqual(pageSchema.schemas, innerDefaultSchema.schemas) &&
    pageSchema.script === innerDefaultSchema.script
  )
    return;

  // 调用 deepCompareAndModify 函数比较 pageSchema.schemas 和 innerDefaultSchema.schemas，进行修改
  deepCompareAndModify(pageSchema.schemas, innerDefaultSchema.schemas);
  // 更新 script.value
  pageSchema.script = innerDefaultSchema.script;
  // 选中根节点
  setCheckedNode(pageSchema.schemas[0]);
  revoke.push(pageSchema.schemas, "重置操作");

  emits("reset", pageSchema);
}

/**
 * 保存数据
 */
function handleSave() {
  emits("save", getData());
}

function handleToggleDeviceMode(mode: string) {
  emits("toggleDeviceMode", mode);
}

/**
 * 导入数据事件
 * @param data
 */
function handleImported(data: PageSchema) {
    emits("imported", data);
}

/**
 * 预览
 */
function handlePreview() {
  previewRef.value!.handleOpen();
}

function handleWheel(event: WheelEvent) {
  if (event.ctrlKey) {
    // 按下ctrl键时，禁止浏览器默认操作
    event.preventDefault();
  }
}

init();

defineExpose({
  revoke,
  setData,
  getData,
  reset,
  preview: handlePreview,
  save: handleSave,
});
</script>
