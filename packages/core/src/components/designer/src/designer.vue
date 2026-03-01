<script lang="ts" setup>
import type { DesignerProps, PageSchema } from '@epic-designer/types';

import { nextTick, onUnmounted, provide, ref, watchEffect } from 'vue';

import { EpDesignerLoader } from '@epic-designer/base-ui';
import {
  DESIGNER_CONTEXT_KEY,
  PAGE_MANAGER_KEY,
  useEventBus,
  useStore,
} from '@epic-designer/hooks';
import { pluginManager } from '@epic-designer/manager';
import { setupPanel } from '@epic-designer/panel-ui';
import {
  deepClone,
  loadAsyncComponent,
  migrateComponentProps,
} from '@epic-designer/utils';

import { useDesigner } from '../hooks/useDesigner';
import { useHotkeys } from '../hooks/useHotkeys';
import EpicPreview from './modules/preview/index.vue';

const props = withDefaults(defineProps<DesignerProps>(), {
  canvasMode: 'desktop',
  disabledZoom: false,
  draggable: true,
  formMode: false,
  hiddenHeader: false,
  lockDefaultSchemaEdit: false,
  showHiddenItems: true,
  title: 'EpicDesigner默认项目',
});
const emit = defineEmits([
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
const epBuilderSlot = pluginManager.component.get('epBuilderSlot');

const previewRef = ref<InstanceType<typeof EpicPreview> | null>(null);

const {
  handleDelete,
  handleDuplicate,
  pageManager,
  pageSchema,
  ready,
  reset,
  revoke,
  setHoverNode,
  setSelectedNode,
  state,
} = useDesigner(props, emit);

const { setTarget } = useHotkeys({
  emit,
  handleDelete,
  pageSchema,
  revoke,
  setSelectedNode,
  state,
});

// 记录缩放状态 start
const { disabledZoom } = useStore();
watchEffect(() => {
  disabledZoom.value = props.disabledZoom;
});
// 记录缩放状态 end
const eventBus = useEventBus();

// 提供依赖注入的上下文
provide('eventBus', eventBus);

provide(DESIGNER_CONTEXT_KEY, {
  handleDelete,
  handleDuplicate,
  handleImported,
  handleToggleDeviceMode,
  pageSchema,
  preview: handlePreview,
  props,
  reset,
  revoke,
  save: handleSave,
  setDisabledHover,
  setHoverNode,
  setSelectedNode,
  state,
});
provide(PAGE_MANAGER_KEY, pageManager);
const designerRef = ref<HTMLElement | null>(null);

/**
 * 组件（包含异步组件）加载完成后
 */
function handleReady() {
  nextTick(() => {
    ready.value = true;
    designerRef.value && setTarget(designerRef.value);

    designerRef.value?.addEventListener('wheel', handleWheel, {
      passive: false,
    });
    emit('ready', { pageManager });
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
  // 迁移 componentProps 到 props
  migrateComponentProps(schema);
  pageManager.setPageSchema(schema);
  setSelectedNode();
  revoke.push('加载数据');
}

/**
 * 返回当前页面数据的 PageSchema 对象，包含页面当前的 schemas 和 script 数据。
 */
function getData(): PageSchema {
  // 返回一个对象，包含当前 schemas 对象的普通对象表示和当前 script 的值
  return deepClone(pageSchema);
}

/**
 * 保存数据
 */
function handleSave() {
  emit('save', getData());
}

function handleToggleDeviceMode(mode: string) {
  emit('toggleDeviceMode', mode);
}

/**
 * 导入数据事件
 * @param data
 */
function handleImported(data: PageSchema) {
  emit('imported', data);
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

onUnmounted(() => {
  designerRef.value?.removeEventListener('wheel', handleWheel);
});

defineExpose({
  exportHistory: revoke.exportHistory,
  getData,
  importHistory: revoke.importHistory,
  preview: handlePreview,
  reset,
  revoke,
  save: handleSave,
  setData,
});
</script>
<template>
  <div
    v-if="!pluginManager.designer.initialized.value"
    class="epic-loading-box"
  >
    <EpDesignerLoader />
  </div>
  <Suspense v-else @resolve="handleReady">
    <template #default>
      <div
        class="epic-designer-main epic-scoped"
        @mouseover="setHoverNode()"
        ref="designerRef"
        tabindex="0"
      >
        <div class="epic-header-container" v-if="!props.hiddenHeader">
          <slot name="header">
            <EHeader @preview="handlePreview" @save="handleSave">
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
        <component v-if="epBuilderSlot" :is="epBuilderSlot" />
      </div>
    </template>
    <template #fallback>
      <div class="epic-loading-box">
        <EpDesignerLoader />
      </div>
    </template>
  </Suspense>
</template>
