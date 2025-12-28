<script lang="ts" setup>
import type { PageManager } from '@epic-designer/manager';
import type { FormItemRule } from '@epic-designer/types';

import { computed, inject } from 'vue';

import { EpicIcon, EpicNode } from '@epic-designer/base-ui';

import { lenTypeOptions, triggerOptions, typeOptions } from './data';

const props = defineProps<{
  rule: FormItemRule;
}>();
const emit = defineEmits(['change', 'delete', 'update:rule']);
const modelRule = computed({
  get() {
    return props.rule;
  },
  set(value) {
    emit('update:rule', value);
  },
});

const pageManager = inject('pageManager', {}) as PageManager;

const methodOptions = computed(() => {
  return Object.entries(pageManager.funcs.value)
    .filter(([_key, value]) => typeof value === 'function')
    .map(([label]) => ({ label, value: label }));
});

const ruleItemSchemas = [
  {
    label: '校验时机',
    model: 'trigger',
    props: {
      mode: 'multiple',
      multiple: true,
      options: triggerOptions,
      placeholder: '校验时机',
    },
    type: 'select',
  },
  {
    label: '自定义规则',
    model: 'isValidator',
    type: 'switch',
  },
  {
    label: '校验函数',
    model: 'validator',
    props: { options: methodOptions.value, placeholder: '校验函数' },
    show() {
      return Boolean(modelRule.value.isValidator);
    },
    type: 'select',
  },
  {
    label: '类型',
    model: 'type',
    props: { options: typeOptions, placeholder: '类型' },
    show() {
      return !modelRule.value.isValidator;
    },
    type: 'select',
  },
  {
    label: '正则校验',
    model: 'pattern',
    props: { placeholder: '正则校验' },
    show() {
      return !modelRule.value.isValidator;
    },
    type: 'input',
  },
  {
    label: '字段长度',
    model: 'len',
    props: { min: 0, placeholder: '字段长度' },
    show() {
      return lenTypeOptions.includes(modelRule.value.type ?? '');
    },
    type: 'number',
  },
  {
    label: '最小长度',
    model: 'min',
    props: { min: 0, placeholder: '最小长度' },
    show() {
      return lenTypeOptions.includes(modelRule.value.type ?? '');
    },
    type: 'number',
  },
  {
    label: '最大长度',
    model: 'max',
    props: { min: 0, placeholder: '最大长度' },
    show() {
      return lenTypeOptions.includes(modelRule.value.type ?? '');
    },
    type: 'number',
  },
  {
    label: '校验信息',
    model: 'message',
    props: { placeholder: '校验信息' },
    type: 'input',
  },
];

/**
 * 更新校验规则
 */
function handleUpdate() {
  const v = modelRule.value;
  if (v.isValidator) {
    delete v.type;
    delete v.pattern;
    delete v.len;
    delete v.min;
    delete v.max;
  } else {
    delete v.validator;
  }
  emit('change', v);
}

/**
 * 删除校验规则
 */
function handleDelete() {
  emit('delete');
}
</script>
<template>
  <div
    class="rule-item-main m-t-2 hover:border-primary relative rounded border border-solid p-2 transition-all"
  >
    <template v-for="(componentSchema, index) in ruleItemSchemas" :key="index">
      <div
        v-if="componentSchema.show ? componentSchema.show() : true"
        class="m-t-2 flex first:m-0"
      >
        <div class="epic-attr-label" title="校验时机">
          {{ componentSchema.label }}
        </div>
        <div class="epic-attr-input">
          <EpicNode
            is-property
            v-model="modelRule[componentSchema.model]"
            :component-schema="{ ...componentSchema, noFormItem: true }"
            @change="handleUpdate"
          />
        </div>
      </div>
    </template>
    <div
      class="rule-btn-delete text-md w-24px h-24px rounded-bl-2 color-white absolute right-0 top-0 flex cursor-pointer items-center justify-center transition-all"
      @click="handleDelete"
    >
      <EpicIcon name="icon--epic--delete-outline-rounded" />
    </div>
  </div>
</template>
