<template>
  <div class="h-full box-border bg-white">
    <slot name="edit-node">
      <slot name="node" :record="item" v-for="item in children"></slot>
    </slot>
  </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
const props = defineProps({
  record: {
    type: Object as any,
    require: true
  }
})

const children = computed(() => {
  return props.record.children ?? []
})

</script>
