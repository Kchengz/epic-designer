<template>
  <div style="withd: 350px;background:#ff889966;padding:20px;">
    <div style="text-align: center">
      {{ record.label }}
    </div>
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
const props = defineProps({
  record: {
    type: Object as any,
    require: true,
    default: () => ({})
  }
})
const children = computed(() => {
  return props.record.children ?? []
})
</script>
