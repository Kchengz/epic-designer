<template>
  <ul class="k-tree-main">
    <KTreeNode v-for="(item) in props.options" :record="item" :key="item.id" />
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
    type: Array as PropType<NodeItem[]>
  },
  selectedKeys: {
    type: Array as PropType<string[]>
  },
  hoverKey: {
    type: String
  }
})

const emit = defineEmits(['update:selectedKeys', 'node-click'])

function handleSelect (id: string, record: NodeItem) {
  emit('update:selectedKeys', [id])
  emit('node-click', { id, record })
}

provide('expandedKeys', expandedKeys)
provide('treeProps', props)
provide('handleSelect', handleSelect)

</script>
