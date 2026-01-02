<script lang="ts" setup>
import type { PageSchema } from '@epic-designer/types';

import { ref } from 'vue';

import { EBuilder } from '@epic-designer/core';
import { pluginManager } from '@epic-designer/manager';

const ebRef = ref<InstanceType<typeof EBuilder>>();
const Button = pluginManager.component.get('button');

const pageSchema = ref<PageSchema>({
  canvas: {
    mode: 'desktop',
  },
  schemas: [
    {
      id: 'root',
      label: '表单',
      props: {
        colon: true,
        labelAlign: 'right',
        labelCol: {
          span: 5,
        },
        labelLayout: 'fixed',
        labelPlacement: 'left',
        labelWidth: 100,
        layout: 'horizontal',
        name: 'default',
        style: {
          padding: '16px',
        },
        wrapperCol: {
          span: 19,
        },
      },
      type: 'form',
      children: [
        {
          field: 'input_9583',
          input: true,
          label: '输入框',
          props: {
            defaultValue: 'ttt',
            placeholder: '请输入',
            type: 'text',
          },
          type: 'input',
          id: 'input_9583',
        },
        {
          field: 'number_8587',
          input: true,
          label: '数字输入框',
          props: {
            defaultValue: 8,
            placeholder: '请输入',
          },
          type: 'number',
          id: 'number_8587',
          rules: [
            {
              message: '必填项',
              required: true,
              trigger: ['change'],
              type: 'number',
            },
          ],
        },
        {
          field: 'date_2908',
          input: true,
          label: '日期选择器',
          props: {
            format: 'yyyy-MM-dd',
            placeholder: '请选择',
            type: 'date',
            valueFormat: 'yyyy-MM-dd',
          },
          type: 'date',
          id: 'date_2908',
          rules: [
            {
              message: '必填项',
              required: true,
              trigger: ['change'],
              type: 'string',
            },
          ],
        },
        {
          field: 'input_4142',
          input: true,
          label: '输入框',
          props: {
            defaultValue: '43434',
            placeholder: '请输入',
            type: 'text',
          },
          type: 'input',
          id: 'input_4142',
          rules: [
            {
              message: '必填项',
              required: true,
              trigger: ['change'],
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
  script:
    "const { defineExpose, find } = epic;\n  \n  function test (){\n      console.log('test')\n  }\n  \n  // 通过defineExpose暴露的函数或者属性\n  defineExpose({\n   test\n  })",
});

const onValidate = () => {
  ebRef.value?.validate();
};

const onReset = () => {
  ebRef.value?.resetData();
};
</script>

<template>
  <div>
    <Button @click="onValidate">校验</Button>
    <Button @click="onReset">重置表单</Button>
    <EBuilder ref="ebRef" :page-schema="pageSchema" />
  </div>
</template>
