<script lang="ts" setup>
import type { ComponentSchema } from '@epic-designer/types';

import { computed, inject, onMounted, ref } from 'vue';

import { useDesignerContext, usePageManager } from '@epic-designer/hooks';

import EpicEditScreenContainer from './editScreenContainer.vue';
import EpNodeItem from './nodeItem.vue';
import EpPreviewWidgets from './previewWidgets.vue';

const epicEditRangeRef = ref<HTMLDivElement | null>(null);
const epicPreviewWidgetsRef = ref<null | typeof EpPreviewWidgets>(null);

const { pageSchema, props, setSelectedNode } = useDesignerContext();
const pageManager = usePageManager();
const contextMenu = inject('contextMenu', {
  close: () => {},
  open: (_event: Event, _schema: ComponentSchema) => {},
});
const rootSchema = computed(() => {
  return pageSchema.schemas[0];
});

const getEditRangestyle = computed(() => {
  const padding =
    typeof props.canvasPadding === 'number'
      ? `${props.canvasPadding}px`
      : props.canvasPadding;
  return {
    height: '100%',
    padding,
    width: '100%',
  };
});

/**
 * 根据epicId获取schema的辅助函数
 * @param {string} epicId
 */
function getSchemaByEpicId(epicId) {
  const instance = pageManager.findInstance(epicId);
  return instance?.exposed?.schema || null;
}

function setSelectedNodeById(epicId) {
  const schema = getSchemaByEpicId(epicId);
  setSelectedNode(schema);
  contextMenu.close();
}

onMounted(() => {
  epicPreviewWidgetsRef.value?.handleInit(epicEditRangeRef.value);

  // 监听 epicEditRangeRef 点击事件
  epicEditRangeRef.value?.addEventListener('click', (event: any) => {
    event.stopPropagation();
    let epicId = event.target.dataset?.epicId;
    console.log(event.target);
    if (!epicId) {
      // 查询其父级的 epicId
      let parent = event.target.parentElement;
      while (parent) {
        if (parent.dataset?.epicId) {
          epicId = parent.dataset.epicId;
          break;
        }
        parent = parent.parentElement;

        // 如果是点击操作栏，不处理
        if (parent.classList.contains('ep-selected-widget')) {
          return;
        }
      }
    }
    setSelectedNodeById(epicId);
  });
});
</script>
<template>
  <section class="ep-edit-canvas">
    <EpicEditScreenContainer>
      <div
        ref="epicEditRangeRef"
        class="ep-edit-range relative overflow-auto rounded-md"
        :style="getEditRangestyle"
      >
        <EpNodeItem :schema="rootSchema" />
        <EpPreviewWidgets ref="epicPreviewWidgetsRef" />
      </div>
    </EpicEditScreenContainer>
  </section>
</template>
