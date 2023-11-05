<template>
    <section class="epic-edit-canvas">
        <KEditScreenContainer>
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
        width: pageSchema.canvas?.width ?? '100%',
        height: pageSchema.canvas?.height ?? '100%'
    }
})
</script>
  