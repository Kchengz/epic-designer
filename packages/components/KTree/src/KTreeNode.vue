<template>
  <li class="k-tree-node">
    <a>
      <span @click="handleExpanded" v-if="props.record.children?.length" class="icon-expanded" :class="{ expanded }"><span
          class="iconfont icon-zhankai"></span></span>
      <TreeNodeText />
    </a>
    <ul class="k-tree-sublist" v-if="props.record.children?.length" :class="{ expanded }">
      <KTreeNode v-for="(item) in props.record.children" :record="item" :key="item.id" />
    </ul>
  </li>
</template>
<script lang="ts" setup>
import { NodeItem } from '../../../types/kDesigner'
import type { PropType } from 'vue'
import { inject, computed, Ref, h, defineComponent, Slots } from 'vue'
import { pluginManager } from '../../../utils/index'
const slots = inject('slots', {}) as Slots

const expandedKeys = inject('expandedKeys') as Ref<string[]>
const treeProps = inject('treeProps') as any
const handleSelect = inject('handleSelect') as (id: string, record: NodeItem) => {}

const expanded = computed(() => {
  return expandedKeys.value.includes(props.record.id ?? '')
})
const props = defineProps({
  record: {
    type: Object as PropType<NodeItem>,
    required: true
  }
})

const selectedKeys = computed(() => {
  return treeProps.selectedKeys.value ?? treeProps.selectedKeys
})

const TreeNodeText = defineComponent({
  setup () {
    return () => h('span', { class: { text: true, hover: treeProps.hoverKey === props.record.id, checked: selectedKeys.value.includes(props.record.id!) }, onClick: () => handleSelect(props.record.id!, props.record) }, slots['tree-node']?.(props) ?? h('span', { class: { 'text-padding': true } }, pluginManager.getComponentConfingByType(props.record.type)?.defaultSchema.label))
  }
})

function handleExpanded () {
  const id = props.record.id
  if (!id) {
    return false
  }

  if (expandedKeys.value.includes(id)) {
    expandedKeys.value = expandedKeys.value.filter(item => item !== id)
  } else {
    expandedKeys.value.push(id)
  }
}

function init () {
  const id = props.record.id
  if (!id || !props.record.children?.length) {
    return false
  }
  expandedKeys.value.push(id)
}
init()
</script>
