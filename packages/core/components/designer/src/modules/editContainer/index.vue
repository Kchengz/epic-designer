<script lang="ts" setup>
import { computed, inject, onMounted, ref } from 'vue';

import { PageSchema } from '@epic-designer/types';

import KEditScreenContainer from './editScreenContainer.vue';
import ENodeItem from './nodeItem.vue';
import EPreviewWidgets from './previewWidgets.vue';

const epicEditRangeRef = ref<HTMLDivElement | null>(null);
const ePreviewWidgetsRef = ref<null | typeof EPreviewWidgets>(null);

const pageSchema = inject('pageSchema') as PageSchema;
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
  ePreviewWidgetsRef.value?.handleInit(epicEditRangeRef.value);
});
</script>
<template>
  <section class="epic-edit-canvas">
    <KEditScreenContainer>
      <div
        ref="epicEditRangeRef"
        class="epic-edit-range relative overflow-auto rounded-md"
        :style="getEditRangestyle"
      >
        <ENodeItem :schema="rootSchema" />
        <EPreviewWidgets ref="ePreviewWidgetsRef" />
      </div>
    </KEditScreenContainer>
  </section>
</template>
