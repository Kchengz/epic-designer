<template>
  <li class="epic-tree-node">
    <a>
      <span v-if="props.record.children?.length" class="icon-expanded" :class="{ expanded }" @click="handleExpanded"><span
          class="iconfont icon-zhankai" /></span>
      <TreeNodeText />
    </a>
    <ul v-if="props.record.children?.length" class="epic-tree-sublist" :class="{ expanded }">
      <ETreeNode v-for="(item) in props.record.children" :key="item.id" :record="item" />
    </ul>
  </li>
</template>
<script lang="ts" setup>
import { NodeItem } from '../../../types/epic-designer'
import type { PropType } from 'vue'
import { inject, computed, Ref, h, defineComponent, Slots } from 'vue'
import { pluginManager } from '@epic-designer/utils'
defineOptions({
  name: 'ETreeNode'
})
const slots = inject('slots', {}) as Slots

const expandedKeys = inject('expandedKeys') as Ref<string[]>
const treeProps = inject('treeProps') as any
const selectedKeys = inject('selectedKeys') as Ref<string[]>

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


const TreeNodeText = defineComponent({
  setup() {
    return () => h('span', {
      class: {
        text: true,
        hover: treeProps.hoverKey === props.record.id,
        checked: selectedKeys.value.includes(props.record.id!)
      },
      onClick: () => handleSelect(props.record.id!, props.record)
    },
      slots['tree-node']?.(props) ??
      h('span', { class: 'text-padding' },
        {
          default: () => [
            props.record.label ?? pluginManager.getComponentConfingByType(props.record.type)?.defaultSchema.label,
            h('span', { class: 'epic-node-type-text' }, props.record.type)
          ]
        }
      )
    )
  }
})

function handleExpanded() {
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

function init() {
  const id = props.record.id
  if (!id || !props.record.children?.length) {
    return false
  }
  expandedKeys.value.push(id)
}
init()
</script>
