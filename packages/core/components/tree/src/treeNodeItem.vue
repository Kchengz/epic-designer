<template>
  <li class="epic-tree-node"
    :class="{ expanded: props.schema.children?.length, 'level-1': props.schema.type === 'page' }">
    <a>
      <span v-if="props.schema.children?.length && props.schema.type !== 'page'" class="icon-expanded"
        :class="{ expanded }" @click="handleExpanded">
        <EIcon name="icon-youjiantou" />
      </span>
      <TreeNodeText />
    </a>
    <ETreeNodes v-if="props.schema.children?.length" class="epic-tree-sublist" :class="{ expanded }"
      v-model:schemas="props.schema.children" :parentSchema="props.schema"  />
  </li>
</template>
<script lang="ts" setup>
import { NodeItem } from '../../../types/epic-designer'
import EIcon from '../../icon'
import { inject, computed, Ref, h, defineComponent, Slots } from 'vue'
import { pluginManager } from '@epic-designer/utils'
import ETreeNodes from './treeNodes.vue'
defineOptions({
  name: 'ETreeNodeItem'
})

const props = defineProps<{
  schema: NodeItem
}>()


const slots = inject('slots', {}) as Slots

const expandedKeys = inject('expandedKeys') as Ref<string[]>
const treeProps = inject('treeProps') as any
const selectedKeys = inject('selectedKeys') as Ref<string[]>

const handleSelect = inject('handleSelect') as (id: string, record: NodeItem) => {}

const expanded = computed(() => {
  return expandedKeys.value.includes(props.schema.id ?? '')
})


const TreeNodeText = defineComponent({
  setup() {
    return () => h('span', {
      class: {
        text: true,
        hover: treeProps.hoverKey === props.schema.id,
        checked: selectedKeys.value.includes(props.schema.id!)
      },
      onClick: () => handleSelect(props.schema.id!, props.schema)
    },
      slots['tree-node']?.(props) ??
      h('span', { class: 'text-padding' },
        {
          default: () => [
            props.schema.label ?? pluginManager.getComponentConfingByType(props.schema.type)?.defaultSchema.label,
            h('span', { class: 'epic-node-type-text' }, props.schema.type)
          ]
        }
      )
    )
  }
})

function handleExpanded() {
  const id = props.schema.id
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
  const id = props.schema.id
  if (!id || !props.schema.children?.length) {
    return false
  }
  expandedKeys.value.push(id)
}
init()
</script>
