<template>
  <ul class="k-tree-main">
    <KTreeNode v-for="(item) in props.options" :key="item.id" :record="item" />
  </ul>
</template>
<script lang="ts" setup>
import { NodeItem } from '../../../types/kDesigner'
import type { PropType } from 'vue'
import { ref, provide, useSlots } from 'vue'
import KTreeNode from './KTreeNode.vue'
const slots = useSlots()
provide('slots', slots)

const expandedKeys = ref([])
const props = defineProps({
  options: {
    type: Array as PropType<NodeItem[]>,
    default: () => []
  },
  hoverKey: {
    type: String,
    default: ''
  }
})
const selectedKeys = defineModel<string[]>("selectedKeys")

const emit = defineEmits(['node-click'])

function handleSelect(id: string, record: NodeItem) {
  selectedKeys.value = [id]
  emit('node-click', { id, record })
}

provide('expandedKeys', expandedKeys)
provide('selectedKeys', selectedKeys)
provide('treeProps', props)
provide('handleSelect', handleSelect)

</script>
