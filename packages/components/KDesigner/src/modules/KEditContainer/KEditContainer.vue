<template>
  <section class="k-edit-container">
    <div class="k-edit-range rounded-md">
      <KNodeItem :element="schema" />
      <KPreviewWidgets />
    </div>
  </section>
</template>
<script lang="ts" setup>
import { PageSchema } from '../../../../../types/kDesigner'
import KPreviewWidgets from './KPreviewWidgets.vue'
import KNodeItem from './KNodeItem.vue'
import { inject, computed } from 'vue'

const pageSchema = inject('pageSchema') as PageSchema
const schema = computed(() => {
  return pageSchema.schemas[0]
})

</script>
