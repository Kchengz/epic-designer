<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue';

import { useDesigner } from '@epic-designer/hooks';

import EpicEditScreenContainer from './editScreenContainer.vue';
import EpicNodeItem from './nodeItem.vue';
import EpicPreviewWidgets from './previewWidgets.vue';

const epicEditRangeRef = ref<HTMLDivElement | null>(null);
const epicPreviewWidgetsRef = ref<null | typeof EpicPreviewWidgets>(null);

const { pageSchema } = useDesigner();
const rootSchema = computed(() => {
  return pageSchema.schemas[0];
});

const getEditRangestyle = computed(() => {
  return {
    height: '100%',
    width: '100%',
  };
});

onMounted(() => {
  epicPreviewWidgetsRef.value?.handleInit(epicEditRangeRef.value);
});
</script>
<template>
  <section class="epic-edit-canvas">
    <EpicEditScreenContainer>
      <div
        ref="epicEditRangeRef"
        class="epic-edit-range relative overflow-auto rounded-md"
        :style="getEditRangestyle"
      >
        <EpicNodeItem :schema="rootSchema" />
        <EpicPreviewWidgets ref="epicPreviewWidgetsRef" />
      </div>
    </EpicEditScreenContainer>
  </section>
</template>
