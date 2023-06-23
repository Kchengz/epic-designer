<template>
  <section class="k-edit-canvas">
    <KEditScreenContainer :root-schema="rootSchema">
      <div
        class="k-edit-range rounded-md overflow-hidden relative"
        :style="{
          width: rootSchema.componentProps.style.width,
          height: rootSchema.componentProps.style.height,
        }"
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

</script>
