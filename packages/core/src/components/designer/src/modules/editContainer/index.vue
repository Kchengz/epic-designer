<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue';

import { useDesignerContext } from '@epic-designer/hooks';

import EpicEditScreenContainer from './editScreenContainer.vue';
import EpNodeItem from './nodeItem.vue';
import EpPreviewWidgets from './previewWidgets.vue';

const epicEditRangeRef = ref<HTMLDivElement | null>(null);
const epicPreviewWidgetsRef = ref<null | typeof EpPreviewWidgets>(null);

const { pageSchema, props } = useDesignerContext();
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

onMounted(() => {
  epicPreviewWidgetsRef.value?.handleInit(epicEditRangeRef.value);
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
