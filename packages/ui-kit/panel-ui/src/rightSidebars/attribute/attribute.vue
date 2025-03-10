<script lang="ts" setup>
import type {
  ComponentSchema,
  Designer,
  PageSchema,
} from '@epic-designer/types';
import type { Revoke } from '@epic-designer/utils';

import { computed, inject, nextTick } from 'vue';

import { EpicNode } from '@epic-designer/base-ui';
import {
  getValueByPath,
  pluginManager,
  setValueByPath,
} from '@epic-designer/utils';

const designer = inject('designer') as Designer;
const pageSchema = inject('pageSchema') as PageSchema;
const revoke = inject('revoke') as Revoke;

const componentConfings = pluginManager.getComponentConfings();
const selectedNode = computed(() => {
  return designer.state.selectedNode;
});

function isShow(item: ComponentSchema) {
  // show属性为boolean类型则直接返回
  if (typeof item.show === 'boolean') {
    return item.show;
  }

  // show属性为function类型则执行
  if (typeof item.show === 'function') {
    return item.show?.({ values: selectedNode.value! });
  }

  return true;
}

// 获取组件属性配置
const componentAttributes = computed(() => {
  if (!selectedNode.value || !selectedNode.value.type) {
    return [];
  }

  const attribute =
    componentConfings[selectedNode.value.type]?.config.attribute ?? [];
  const attributes = [
    {
      componentProps: {
        disabled: true,
      },
      field: 'id',
      label: '组件ID',
      type: 'input',
    },
    ...attribute,
  ];

  if (selectedNode.value.id === pageSchema.schemas[0]?.id) {
    attributes.push(
      {
        editData: pageSchema,
        field: 'canvas.width',
        label: '画布宽度',
        type: 'EInputSize',
      },
      {
        editData: pageSchema,
        field: 'canvas.height',
        label: '画布高度',
        type: 'EInputSize',
      },
    );
  }

  return attributes;
});

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
    item.onChange({ componentAttributes, value, values: editData! });
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
  revoke.push(pageSchema.schemas, '编辑组件属性');
}
</script>
<template>
  <div :key="selectedNode?.id" class="epic-attribute-view">
    <div v-for="item in componentAttributes" :key="item.field">
      <div v-if="isShow(item)" class="epic-attr-item" :class="item.layout">
        <div v-if="item.label" class="epic-attr-label" :title="item.label">
          {{ item.label }}
        </div>
        <div
          class="epic-attr-input"
          :class="{ 'block!': item.layout === 'vertical' }"
        >
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
