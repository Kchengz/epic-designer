<script lang="ts" setup>
import type { FormItemRule } from '@epic-designer/types';

import type { PropType } from 'vue';

import { ref, watch } from 'vue';

import { EpicNode } from '@epic-designer/base-ui';
import { pluginManager } from '@epic-designer/manager';
import { deepClone, deepEqual } from '@epic-designer/utils';
import { useVModel } from '@vueuse/core';

import { triggerOptions, typeOptions } from './data';
import ERuleItem from './ERuleItem.vue';

const props = defineProps({
  modelValue: {
    default: undefined,
    type: Array as PropType<FormItemRule[] | undefined>,
  },
  ruleType: {
    default: 'string',
    type: String,
  },
});
const emit = defineEmits(['update:modelValue']);
const Button = pluginManager.component.get('button');
const innerValue = useVModel(props, 'modelValue', emit);
const requiredRule = ref<FormItemRule>({
  message: '必填项',
  required: false,
  trigger: ['change'],
  type: props.ruleType,
});

const requiredRuleSchemas = [
  {
    label: '必填项',
    model: 'required',
    type: 'switch',
  },
  {
    props: {
      mode: 'multiple',
      multiple: true,
      options: triggerOptions,
      placeholder: '校验时机',
    },
    label: '校验时机',
    model: 'trigger',
    show() {
      return Boolean(requiredRule.value.required);
    },
    type: 'select',
  },
  {
    props: { options: typeOptions, placeholder: '类型' },
    label: '类型',
    model: 'type',
    show() {
      return Boolean(requiredRule.value.required);
    },
    type: 'select',
  },
  {
    props: { placeholder: '校验信息' },
    label: '校验信息',
    model: 'message',
    show() {
      return Boolean(requiredRule.value.required);
    },
    type: 'input',
  },
];

const rules = ref<FormItemRule[]>([]);

watch(
  () => innerValue.value,
  (newValue, oldValue) => {
    if (!newValue) return;
    if (deepEqual(newValue, oldValue ?? [])) return;
    rules.value = [];
    newValue.forEach((item) => {
      // 必填项单独存储
      if (item.required === undefined) {
        rules.value.push(item);
      } else {
        requiredRule.value = item;
      }
    });
  },
  {
    immediate: true,
  },
);

/**
 * 新增检验规则
 */
function handleAdd() {
  rules.value.push({
    message: '',
    trigger: ['change'],
    type: props.ruleType,
  });
  handleUpdate();
}

/**
 * 更新校验规则
 */
function handleUpdate() {
  // 存在必填项时,合并其他规则
  if (requiredRule.value.required) {
    innerValue.value = deepClone([...rules.value, requiredRule.value]);
    return;
  }

  // 存在其他规则
  if (rules.value.length > 0) {
    innerValue.value = deepClone(rules.value);
    return;
  }

  // 没有任何校验规则
  innerValue.value = undefined;
}

/**
 * 通过下标删除校验规则项
 * @param index
 */
function handleDelete(index: number) {
  rules.value.splice(index, 1);
  handleUpdate();
}
</script>
<template>
  <div>
    <!-- 必填项 start -->
    <div
      class="rule-item-main m-t-2 relative rounded border border-solid p-2 transition-all"
    >
      <template
        v-for="(componentSchema, index) in requiredRuleSchemas"
        :key="index"
      >
        <div
          v-if="componentSchema.show ? componentSchema.show() : true"
          class="m-t-2 flex first:m-0"
        >
          <div class="epic-attr-label">
            {{ componentSchema.label }}
          </div>
          <div class="flex-1">
            <EpicNode
              is-property
              v-model="requiredRule[componentSchema.model]"
              :component-schema="{ ...componentSchema, noFormItem: true }"
              @change="handleUpdate"
            />
          </div>
        </div>
      </template>
    </div>
    <!-- 必填项 end -->

    <!-- 其他校验规则 start -->
    <ERuleItem
      v-for="(item, index) in rules"
      :key="index"
      v-model:rule="rules[index]"
      @delete="handleDelete(index)"
      @change="handleUpdate"
    />
    <!-- 其他校验规则 end -->
    <Button class="m-t-2" @click="handleAdd"> 添加规则 </Button>
  </div>
</template>
