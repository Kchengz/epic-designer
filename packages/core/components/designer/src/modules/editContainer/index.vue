<template>
  <section class="epic-edit-canvas">
    <KEditScreenContainer>
      <div
        ref="epicEditRangeRef"
        class="epic-edit-range rounded-md overflow-auto relative"
        :style="getEditRangestyle"
      >
        <ENodeItem :schema="rootSchema" />
        <EPreviewWidgets ref="ePreviewWidgetsRef" />
      </div>
    </KEditScreenContainer>
  </section>
</template>
<script lang="ts" setup>
import { PageSchema } from '../../../../../types/epic-designer'
import EPreviewWidgets from './previewWidgets.vue'
import ENodeItem from './nodeItem.vue'
import KEditScreenContainer from './editScreenContainer.vue'
import { ref, inject, computed, onMounted } from 'vue'

const epicEditRangeRef = ref<HTMLDivElement | null>(null)
const ePreviewWidgetsRef = ref<typeof EPreviewWidgets | null>(null)

const pageSchema = inject('pageSchema') as PageSchema
const rootSchema = computed(() => {
    return pageSchema.schemas[0]
})

const getEditRangestyle = computed(() => {
    return {
        width: '100%',
        height: '100%'
    }
})

onMounted(() => {
    ePreviewWidgetsRef.value?.handleInit(epicEditRangeRef.value)
})
</script>