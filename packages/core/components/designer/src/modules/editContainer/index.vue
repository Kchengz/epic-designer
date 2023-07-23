<template>
    <section class="epic-edit-canvas">
        <KEditScreenContainer :root-schema="rootSchema">
            <div class="epic-edit-range rounded-md overflow-auto relative" :style="getEditRangestyle">
                <ENodeItem :schema="rootSchema" />
                <KPreviewWidgets />
            </div>
        </KEditScreenContainer>
    </section>
</template>
<script lang="ts" setup>
import { PageSchema } from '../../../../../types/epic-designer'
import KPreviewWidgets from './previewWidgets.vue'
import ENodeItem from './nodeItem.vue'
import KEditScreenContainer from './editScreenContainer.vue'
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
  