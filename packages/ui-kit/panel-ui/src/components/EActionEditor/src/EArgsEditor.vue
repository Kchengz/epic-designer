<script lang="ts" setup>
import type { ComponentSchema } from '@epic-designer/types';

import { computed } from 'vue';

import { EpicNode } from '@epic-designer/base-ui';

const props = defineProps<{
  actionArgsConfigs: ComponentSchema[];
  modelValue: null | string | undefined;
}>();
const emits = defineEmits(['update:modelValue']);

const valueRef = computed<any>(() => {
  if (props.modelValue) {
    return JSON.parse(props.modelValue);
  }
  return [];
});

function isShow(item: ComponentSchema) {
  // show属性为boolean类型则直接返回
  if (typeof item.show === 'boolean') {
    return item.show;
  }

  // show属性为function类型则执行
  if (typeof item.show === 'function') {
    return item.show?.({ values: valueRef.value! });
  }
  return true;
}

/**
 * 设置属性值
 */
function handleSetValue(value: any, field: string) {
  const values = [...JSON.parse(props.modelValue ?? '[]')];
  values[field] = value;
  emits('update:modelValue', JSON.stringify(values));
  // 将修改过的组件属性推入撤销操作的栈中
}
</script>
<template>
  <div class="epic-attribute-view">
    <div v-for="item in props.actionArgsConfigs" :key="item.id">
      <div v-show="isShow(item)" class="epic-attr-item" :class="item.layout">
        <div class="epic-attr-label" :title="item.label">
          {{ item.label }}
        </div>
        <div class="epic-attr-input">
          <EpicNode
            :component-schema="{
              ...item,
              componentProps: {
                ...item.componentProps,
                input: false,
                field: undefined,
                hidden: false,
              },
              show: true,
              noFormItem: true,
            }"
            :model-value="valueRef[item.field!]"
            @update:model-value="handleSetValue($event, item.field!)"
          />
        </div>
      </div>
    </div>
  </div>
</template>
