<template>
  <section class="k-edit-container">
    <div class="k-edit-range rounded-md">
      <!-- <KEditNodeItem v-model:schemas="schemas" /> -->
      <KNodeItem :element="pageSchema" />
    </div>
  </section>
</template>
<script lang="ts" setup>
import { NodeItem } from '../../../../../types/kDesigner'
// import KEditNodeItem from './KEditNodeItem.vue'
import KNodeItem from './KNodeItem.vue'
import { inject, Ref, computed } from 'vue'

const schemas = inject('schemas') as Ref<NodeItem[]>

const pageSchema = computed(() => {
  return schemas.value[0]
})

</script>
