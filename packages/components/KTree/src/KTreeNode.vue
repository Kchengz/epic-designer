<template>
  <li class="k-tree-node">
    <a>
      <span @click="handleExpanded" v-if="props.record.children?.length" class="icon-expanded" :class="{ expanded }"><span class="iconfont icon-zhankai"></span></span>
      <span class="text"
        :class="{ checked: treeProps.selectedKeys.includes(props.record.id!), hover: designer.state.hoverNode?.id === props.record.id }"
        @click="handleSelect(props.record.id!, props.record)" @mouseenter.stop="designer.setHoverNode(props.record)"
        @mouseleave.stop="designer.setHoverNode(null)"> {{ nodeSchema.getSchemaByType(props.record.type)?.label }}</span>
    </a>
    <ul class="k-tree-sublist" v-if="props.record.children?.length"
      :class="{ expanded }">
      <KTreeNode v-for="(item) in props.record.children" :record="item" :key="item.id" />
    </ul>
  </li>
</template>
<script lang="ts" setup>
import { NodeItem, Designer } from '../../../types/kDesigner'
import type { PropType } from 'vue'
import { inject, computed, Ref } from 'vue'
import { nodeSchema } from '../../../utils/index'

// const schemas = inject('schemas') as Ref<NodeItem[]>
const designer = inject('designer') as Designer

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
