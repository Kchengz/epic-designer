<script lang="ts" setup>
import type {
  ComponentSchema,
  DesignerProps,
  DesignerState,
  PageSchema,
} from '@epic-designer/types';

import { computed, nextTick, provide, reactive, ref, watchEffect } from 'vue';

import { EpicBaseLoader } from '@epic-designer/base-ui';
import { useStore } from '@epic-designer/hooks';
import { setupPanel } from '@epic-designer/panel-ui';
import {
  deepClone,
  deepCompareAndModify,
  deepEqual,
  getMatchedById,
  loadAsyncComponent,
  pluginManager,
  usePageManager,
  useRevoke,
} from '@epic-designer/utils';

import EpicPreview from './modules/preview/index.vue';

const props = withDefaults(defineProps<DesignerProps>(), {
  disabledZoom: false,
  draggable: true,
  formMode: false,
  hiddenHeader: false,
  lockDefaultSchemaEdit: false,
  title: 'EpicDesigner默认项目',
});
const emits = defineEmits([
  'ready',
  'save',
  'reset',
  'imported',
  'toggleDeviceMode',
]);

setupPanel(pluginManager);
const EHeader = loadAsyncComponent(() => import('./modules/header/index.vue'));
const EActivityBar = loadAsyncComponent(
  () => import('./modules/activityBar/index.vue'),
);
const EEditContainer = loadAsyncComponent(
  () => import('./modules/editContainer/index.vue'),
);
const ERightSidebar = loadAsyncComponent(
  () => import('./modules/rightSidebar/index.vue'),
);

const pageManager = usePageManager();
const revoke = useRevoke();

// 内部默认页面数据
let innerDefaultSchema: PageSchema = {
  schemas: [
    {
      componentProps: {
        style: {
          padding: '16px',
        },
      },
      id: 'root',
      label: '页面',
      type: 'page',
      children: [],
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
      innerDefaultSchema.schemas = pluginManager.formSchema;
    }
  }
  // 记录默认组件id
  pageManager.setDefaultComponentIds(innerDefaultSchema.schemas);
});

// 设计模式
pageManager.setDesignMode();

const previewRef = ref<InstanceType<typeof EpicPreview> | null>(null);

const state = reactive<DesignerState>({
  disabledHover: false,
  hoverNode: null,
  matched: [],
  selectedNode: null,
});

const pageSchema = pageManager.pageSchema;

// 记录缩放状态 start
const { disabledZoom } = useStore();
watchEffect(() => {
  disabledZoom.value = props.disabledZoom;
});
// 记录缩放状态 end

// 提供依赖注入的上下文
provide('pageSchema', pageSchema);
provide('revoke', revoke);
provide('pageManager', pageManager);
provide(
  'designerProps',
  computed(() => props),
);

provide('designer', {
  handleImported,
  handleToggleDeviceMode,
  preview: handlePreview,
  reset,
  save: handleSave,
  setDisabledHover,
  setHoverNode,
  setSelectedNode,
  state,
});

function init() {
  // 初始化默认节点
  pageSchema.schemas = deepClone(innerDefaultSchema.schemas);

  // 选中根节点
  setSelectedNode(pageSchema.schemas[0]);
  revoke.push(pageSchema.schemas, '初始化');
}

/**
 * 选中节点
 * @param schema
 */
async function setSelectedNode(
  schema: ComponentSchema = pageSchema.schemas[0],
) {
  state.selectedNode = schema;
  state.matched = getMatchedById(pageSchema.schemas, schema.id!);
}

/**
 * 设置悬停节点
 * @param schema
 */
async function setHoverNode(schema: ComponentSchema | null = null) {
  if (!schema || state.disabledHover) {
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
    emits('ready', { pageManager });
  });
}

/**
 * 设置hover状态
 * @param disabledHover
 */
async function setDisabledHover(disabledHover = false) {
  state.disabledHover = disabledHover;
}

/**
 * 接受一个PageSchema对象作为参数。根据传入的schemas和script属性，更新页面对应的数据
 */
function setData(schema: PageSchema) {
  pageManager.setPageSchema(schema);
  revoke.push(pageSchema.schemas, '加载数据');
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
  setSelectedNode(pageSchema.schemas[0]);
  revoke.push(pageSchema.schemas, '重置操作');

  emits('reset', pageSchema);
}

/**
 * 保存数据
 */
function handleSave() {
  emits('save', getData());
}

function handleToggleDeviceMode(mode: string) {
  emits('toggleDeviceMode', mode);
}

/**
 * 导入数据事件
 * @param data
 */
function handleImported(data: PageSchema) {
  emits('imported', data);
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
  getData,
  preview: handlePreview,
  reset,
  revoke,
  save: handleSave,
  setData,
});
</script>
<template>
  <div v-if="!pluginManager.initialized.value" class="epic-loading-box">
    <!-- <EpicBaseLoader /> -->
  </div>
  <Suspense v-else @resolve="handleReady">
    <template #default>
      <div
        class="epic-designer-main epic-scoped"
        @wheel="handleWheel"
        @mouseover="setHoverNode()"
      >
        <div class="epic-header-container">
          <slot name="header">
            <EHeader
              v-if="!props.hiddenHeader"
              @preview="handlePreview"
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
        <div
          class="epic-split-view-container"
          :class="{ 'hidden-header': hiddenHeader }"
        >
          <EActivityBar />
          <EEditContainer />
          <ERightSidebar />
        </div>
        <EpicPreview
          ref="previewRef"
          :hide-confirm="props.hidePreviewConfirm"
        />
      </div>
    </template>
    <template #fallback>
      <div class="epic-loading-box">
        <EpicBaseLoader />
      </div>
    </template>
  </Suspense>
</template>
