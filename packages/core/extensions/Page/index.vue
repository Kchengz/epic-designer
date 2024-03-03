<template>
  <div
    class="h-full box-border bg-white wh-full!"
  >
    <slot name="edit-node">
      <slot
        v-for="item in children"
        name="node"
        :record="item"
      />
    </slot>
  </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { ComponentSchema } from '../../types/epic-designer'

const props = defineProps<{
  record:ComponentSchema
}>()


const children = computed(() => {
  return props.record.children ?? []
})

</script>
