<template>
  <section class="k-edit-canvas">
    <KEditScreenContainer :root-schema="rootSchema">
      <div
        class="k-edit-range rounded-md overflow-auto relative"
        :style="getEditRangestyle"
      >
        <KNodeItem :schema="rootSchema" />
        <KPreviewWidgets />
      </div>
    </KEditScreenContainer>
  </section>
</template>
<script lang="ts" setup>
import { PageSchema } from '../../../../../types/kDesigner'
import KPreviewWidgets from './KPreviewWidgets.vue'
import KNodeItem from './KNodeItem.vue'
import KEditScreenContainer from './KEditScreenContainer.vue'
import { inject, computed } from 'vue'

const pageSchema = inject('pageSchema') as PageSchema
const rootSchema = computed(() => {
  return pageSchema.schemas[0]
})

const getEditRangestyle = computed(() => {
  return {
    width: rootSchema.value.componentProps.style?.width ?? '1320px',
    height: rootSchema.value.componentProps.style?.height ?? '800px'
  }
})
</script>
