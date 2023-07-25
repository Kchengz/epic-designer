<template>
  <ul class="epic-tree-main">
    <ETreeNode v-for="(item) in props.options" :key="item.id" :record="item" />
  </ul>
</template>
<script lang="ts" setup>
import { NodeItem } from '../../../types/epic-designer'
import type { PropType } from 'vue'
import { ref, provide, computed, useSlots } from 'vue'
import ETreeNode from './treeNode.vue'
defineOptions({
  name: 'ETree'
})
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
  },
  selectedKeys: {
    type: Array,
    default: () => []
  },
})

const emit = defineEmits(['update:selectedKeys', 'node-click'])
const selectedKeysComputed = computed({
  get() {
    return props.selectedKeys
  },
  set(value) {
    emit('update:selectedKeys', value)
  }
})


function handleSelect(id: string, record: NodeItem) {
  selectedKeysComputed.value = [id]
  emit('node-click', { id, record })
}

provide('expandedKeys', expandedKeys)
provide('selectedKeys', selectedKeysComputed)
provide('treeProps', props)
provide('handleSelect', handleSelect)

</script>
