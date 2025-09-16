<script lang="ts" setup>
import type { Revoke } from '@epic-designer/manager';

import { computed, inject, nextTick } from 'vue';

import { EpicNode } from '@epic-designer/base-ui';
import { pluginManager } from '@epic-designer/manager';
import { ComponentSchema, Designer } from '@epic-designer/types';
import { getValueByPath, setValueByPath } from '@epic-designer/utils';

const designer = inject('designer') as Designer;
const revoke = inject('revoke') as Revoke;
const componentConfigs = pluginManager.getComponentConfigs();

// const componentStyles: ComponentSchema[] =

const selectedNode = computed(() => {
  return designer.state.selectedNode;
});

const defaultStyle = [
  {
    field: 'componentProps.style.width',
    label: '宽度',
    type: 'EInputSize',
  },
  {
    field: 'componentProps.style.height',
    label: '高度',
    type: 'EInputSize',
  },
  {
    field: 'componentProps.style.padding',
    label: '内边距',
    type: 'EInputSize',
  },
  {
    field: 'componentProps.style.margin',
    label: '外边距',
    type: 'EInputSize',
  },
  {
    componentProps: {
      style: {
        // width: '60px'
      },
      type: 'color',
    },
    field: 'componentProps.style.backgroundColor',
    label: '背景色',
    type: 'color-picker',
  },
  {
    componentProps: {
      style: {},
      type: 'color',
    },
    field: 'componentProps.style.color',
    label: '字体颜色',
    type: 'color-picker',
  },
];

// 获取组件样式配置
const componentStyles = computed<ComponentSchema[]>(() => {
  if (!selectedNode.value || !selectedNode.value.type) {
    return [];
  }
  const style = componentConfigs[selectedNode.value.type]?.config.style ?? [];
  return [...defaultStyle, ...style];
});

function isShow(item: ComponentSchema) {
  // show属性为boolean类型则直接返回
  if (typeof item.show === 'boolean') {
    return item.show;
  }
  return item.show?.({ values: selectedNode.value! }) ?? true;
}

/**
 * 设置属性值
 */
function handleSetValue(
  value: any,
  field: string,
  item: ComponentSchema,
  editData: null | object = selectedNode.value,
) {
  if (typeof item.onChange === 'function') {
    item.onChange({ componentStyles, value, values: editData! });
  }
  // 判断是否同步修改属性值
  if (item.changeSync) {
    setValueByPath(editData!, field, value);
  } else {
    nextTick(() => {
      setValueByPath(editData!, field, value);
    });
  }
  // 将修改过的组件属性推入撤销操作的栈中
  revoke.push('属性编辑');
}
</script>
<template>
  <div :key="selectedNode?.id" class="epic-style-view">
    <div v-for="item in componentStyles" :key="item.field">
      <div v-if="isShow(item)" class="epic-attr-item" :class="item.layout">
        <div v-if="item.label" class="epic-attr-label" :title="item.label">
          {{ item.label }}
        </div>
        <div class="epic-attr-input">
          <EpicNode
            :component-schema="{
              ...item,
              componentProps: {
                ...item.componentProps,
                ...(item.field === 'componentProps.defaultValue'
                  ? selectedNode?.componentProps
                  : {}),
                input: false,
                field: undefined,
                hidden: false,
              },
              show: true,
              noFormItem: true,
            }"
            :model-value="
              getValueByPath(item.editData ?? selectedNode!, item.field!)
            "
            @update:model-value="
              handleSetValue($event, item.field!, item, item.editData)
            "
          />
        </div>
      </div>
    </div>
  </div>
</template>
