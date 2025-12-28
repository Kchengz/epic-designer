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
    props: {
      mode: 'multiple',
      multiple: true,
      options: triggerOptions,
      placeholder: '校验时机',
    },
    label: '校验时机',
    model: 'trigger',
    type: 'select',
  },
  {
    label: '自定义规则',
    model: 'isValidator',
    type: 'switch',
  },
  {
    props: { options: methodOptions.value, placeholder: '校验函数' },
    label: '校验函数',
    model: 'validator',
    show() {
      return Boolean(modelRule.value.isValidator);
    },
    type: 'select',
  },
  {
    props: { options: typeOptions, placeholder: '类型' },
    label: '类型',
    model: 'type',
    show() {
      return !modelRule.value.isValidator;
    },
    type: 'select',
  },
  {
    props: { placeholder: '正则校验' },
    label: '正则校验',
    model: 'pattern',
    show() {
      return !modelRule.value.isValidator;
    },
    type: 'input',
  },
  {
    props: { min: 0, placeholder: '字段长度' },
    label: '字段长度',
    model: 'len',
    show() {
      return lenTypeOptions.includes(modelRule.value.type ?? '');
    },
    type: 'number',
  },
  {
    props: { min: 0, placeholder: '最小长度' },
    label: '最小长度',
    model: 'min',
    show() {
      return lenTypeOptions.includes(modelRule.value.type ?? '');
    },
    type: 'number',
  },
  {
    props: { min: 0, placeholder: '最大长度' },
    label: '最大长度',
    model: 'max',
    show() {
      return lenTypeOptions.includes(modelRule.value.type ?? '');
    },
    type: 'number',
  },
  {
    props: { placeholder: '校验信息' },
    label: '校验信息',
    model: 'message',
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
