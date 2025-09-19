<script lang="ts" setup>
import { computed } from 'vue';

import { EpicNode } from '@epic-designer/base-ui';
import {
  ActionItem,
  ComponentConfigModel,
  ComponentSchema,
} from '@epic-designer/types';
import { deepClone } from '@epic-designer/utils';

const props = defineProps<{
  actionArgsConfigs: ComponentSchema[];
  actionItem: ActionItem;
  componentConfigModel: ComponentConfigModel | null;
  modelValue: null | string | undefined;
}>();
const emits = defineEmits(['update:modelValue']);

const valueRef = computed<any>(() => {
  if (props.modelValue) {
    return JSON.parse(props.modelValue);
  }
  return [];
});

const isSetAttr = computed(() => {
  const { componentId, methodName } = props.actionItem;
  return (
    methodName === 'setAttr' &&
    componentId &&
    props.actionArgsConfigs.some(({ label }) => label === '选择属性')
  );
});

const innerActionArgsConfigs = computed(() => {
  const actionArgsConfigs = deepClone(props.actionArgsConfigs);
  if (isSetAttr.value) {
    actionArgsConfigs.forEach((item) => {
      if (item.field === '1') {
        const attribute = props.componentConfigModel?.config?.attribute?.find(
          ({ field }) => field === `componentProps.${valueRef.value['0']}`,
        );
        if (attribute) {
          item.componentProps = attribute.componentProps;
          item.type = attribute.type || 'input';
        }
      }
    });
  }
  return actionArgsConfigs;
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
  if (isSetAttr.value && field === '0') {
    values['1'] = undefined;
  }
  emits('update:modelValue', JSON.stringify(values));
  // 将修改过的组件属性推入撤销操作的栈中
}
</script>
<template>
  <div class="epic-attribute-view">
    <div v-for="item in innerActionArgsConfigs" :key="item.id">
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
