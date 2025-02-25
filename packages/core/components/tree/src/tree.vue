<script lang="ts" setup>
import type { PropType } from 'vue';

import { computed, provide, ref, useSlots } from 'vue';

import { pluginManager } from '@epic-designer/utils';

import { ComponentSchema } from '../../../types/epic-designer';
import EIcon from '../../icon';
import ETreeNodes from './treeNodes.vue';

defineOptions({
  name: 'ETree',
});
const props = defineProps({
  draggable: {
    default: false,
    type: Boolean,
  },
  hoverKey: {
    default: '',
    type: String,
  },
  options: {
    default: () => [],
    type: Array as PropType<ComponentSchema[]>,
  },
  selectedKeys: {
    default: () => [],
    type: Array,
  },
});
const emits = defineEmits(['update:selectedKeys', 'nodeClick']);
const slots = useSlots();
provide('slots', slots);

const Input = pluginManager.getComponent('input');

const keyword = ref('');
const expandedKeys = ref([]);
const selectedKeysComputed = computed({
  get() {
    return props.selectedKeys;
  },
  set(value) {
    emits('update:selectedKeys', value);
  },
});

const getTreeData = computed({
  get() {
    return filterTreeByLabel(props.options, keyword.value);
  },
  set() {
    // console.log(e);
  },
});

/**
 * 通过label 过滤节点
 * @param tree 节点树
 * @param labelToFilter 过滤关键字
 */
function filterTreeByLabel(tree, labelToFilter) {
  const filteredTree: ComponentSchema[] = [];

  tree.forEach((item: ComponentSchema) => {
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

function handleSelect(id: string, componentSchema: ComponentSchema) {
  selectedKeysComputed.value = [id];
  emits('nodeClick', { componentSchema, id });
}

provide('expandedKeys', expandedKeys);
provide('selectedKeys', selectedKeysComputed);
provide('treeProps', props);
provide('handleSelect', handleSelect);
</script>
<template>
  <div class="epic-tree flex h-full flex-col">
    <!-- 搜素框 start -->
    <div class="epic-search-box px-10px py-6px">
      <Input
        v-model="keyword"
        v-model:value="keyword"
        placeholder="搜索节点"
        clearable
        allow-clear
      >
        <template #prefix>
          <EIcon name="icon--epic--search-rounded" />
        </template>
      </Input>
    </div>
    <!-- 搜素框 end -->
    <div class="epic-tree-main h-0 flex-1 overflow-auto">
      <ul>
        <ETreeNodes v-model:schemas="getTreeData" />
      </ul>
      <div
        v-show="getTreeData.length === 0"
        class="pt-42px text-center text-gray-400"
      >
        没有查询到的数据
      </div>
    </div>
  </div>
</template>
