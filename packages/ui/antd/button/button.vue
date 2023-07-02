<template>
  <Button v-bind="props.record?.componentProps">
    <slot>{{ props.record?.label }}</slot>
  </Button>
</template>
<script lang="ts" setup>
import { PropType } from 'vue'
import type { NodeItem } from '@k-designer/core/packages/types/kDesigner'
import { loadAsyncComponent } from '@k-designer/utils'
const Button = loadAsyncComponent(async () => (await import('ant-design-vue/lib/button')).default)
const props = defineProps({
  record: {
    type: Object as PropType<NodeItem>,
    require: true,
    default: () => ({})
  }
})
</script>
