<template>
  <Button v-bind="props.record?.componentProps">
    <slot>{{ props.record?.label }}</slot>
  </Button>
</template>
<script lang="ts" setup>
import { PropType } from 'vue'
import type { NodeItem } from '@epic-designer/core/types/epic-designer'
import Button from 'ant-design-vue/lib/button'
const props = defineProps({
  record: {
    type: Object as PropType<NodeItem>,
    require: true,
    default: () => ({})
  }
})
</script>
