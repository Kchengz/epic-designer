<template>
  <div class="epic-tree">
    <!-- 搜素框 start -->
    <div class="search-box px-10px py-6px">
      <Input placeholder="请输入标题" v-model="keyword" v-model:value="keyword">
      <template #prefix>
        <EIcon name="icon-chaxun" />
      </template>
      </Input>
    </div>
    <!-- 搜素框 end -->
    <div class="epic-tree-main">
      <ul>
        <ETreeNode class="level-1" v-for="(item) in getTreeData" :key="item.id" :record="item" />
      </ul>
      <div v-show="!getTreeData.length" class="text-center pt-42px text-gray-400">没有查询到的数据</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { NodeItem } from '../../../types/epic-designer'
import type { PropType } from 'vue'
import { ref, provide, computed, useSlots } from 'vue'
import ETreeNode from './treeNode.vue'
import EIcon from '../../icon'
import { pluginManager } from '@epic-designer/utils'

defineOptions({
  name: 'ETree'
})
const slots = useSlots()
provide('slots', slots)

const Input = pluginManager.getComponent('input')

const keyword = ref("")
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


const getTreeData = computed(() => {
  return filterTreeByLabel(props.options, keyword.value)
})

function filterTreeByLabel(tree, labelToFilter) {
  const filteredTree: NodeItem[] = [];

  tree.forEach((item: NodeItem) => {
    if (item.label?.includes(labelToFilter)) {
      filteredTree.push(item);
    } else if (item.children) {
      const filteredChildren = filterTreeByLabel(item.children, labelToFilter);
      if (filteredChildren.length > 0) {
        // Clone the item and replace its children
        const clonedItem = { ...item };
        clonedItem.children = filteredChildren;
        filteredTree.push(clonedItem);
      }
    }
  });

  return filteredTree;
}


function handleSelect(id: string, record: NodeItem) {
  selectedKeysComputed.value = [id]
  emit('node-click', { id, record })
}

provide('expandedKeys', expandedKeys)
provide('selectedKeys', selectedKeysComputed)
provide('treeProps', props)
provide('handleSelect', handleSelect)

</script>
