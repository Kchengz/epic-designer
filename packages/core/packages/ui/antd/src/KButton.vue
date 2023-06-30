<template>
  <Button v-bind="props.record?.componentProps">
    <slot>{{ props.record?.label }}</slot>
  </Button>
</template>
<script lang="ts" setup>
import { PropType } from 'vue'
import { NodeItem } from '../../../types/kDesigner'
import { loadAsyncComponent } from '../../../utils/index'
const Button = loadAsyncComponent(async () => (await import('ant-design-vue/lib/button')).default)
const props = defineProps({
  record: {
    type: Object as PropType<NodeItem>,
    require: true,
    default: () => ({})
  }
})
</script>
