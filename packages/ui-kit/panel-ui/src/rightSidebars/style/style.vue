<script lang="ts" setup>
import { computed, inject } from 'vue';

import { pluginManager } from '@epic-designer/manager';
import { ComponentSchema, Designer } from '@epic-designer/types';

import EAttributeItem from '../attribute/modules/attributeItem.vue';

const designer = inject('designer') as Designer;
const componentConfigs = pluginManager.component.getComponentConfigs();

const selectedNode = computed(() => {
  return designer.state.selectedNode;
});

const defaultStyle = [
  {
    field: 'props.style.width',
    label: '宽度',
    type: 'EInputSize',
  },
  {
    field: 'props.style.height',
    label: '高度',
    type: 'EInputSize',
  },
  {
    field: 'props.style.padding',
    label: '内边距',
    type: 'EInputSize',
  },
  {
    field: 'props.style.margin',
    label: '外边距',
    type: 'EInputSize',
  },
  {
    props: {
      style: {
        // width: '60px'
      },
      type: 'color',
    },
    field: 'props.style.backgroundColor',
    label: '背景色',
    type: 'color-picker',
  },
  {
    props: {
      style: {},
      type: 'color',
    },
    field: 'props.style.color',
    label: '字体颜色',
    type: 'color-picker',
  },
];

// 获取组件样式配置
const componentStyles = computed<ComponentSchema[]>(() => {
  if (!selectedNode.value || !selectedNode.value.type) {
    return [];
  }
  const style = componentConfigs[selectedNode.value.type]?.config?.style ?? [];
  return [...defaultStyle, ...style];
});
</script>
<template>
  <div :key="selectedNode?.id" class="epic-style-view">
    <div v-for="item in componentStyles" :key="item.field">
      <EAttributeItem :schema="item" />
    </div>
  </div>
</template>
