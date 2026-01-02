<script lang="ts" setup>
import type { PageSchema } from '@epic-designer/types';

import { ref } from 'vue';

import { EBuilder } from '@epic-designer/core';

const ebRef = ref<InstanceType<typeof EBuilder>>();
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
          field: 'switch_8372',
          input: true,
          label: '禁用姓名',
          props: {
            defaultValue: false,
            round: true,
          },
          type: 'switch',
          id: 'switch_8372',
          on: {
            change: [
              {
                componentId: null,
                methodName: 'setDisabled',
                type: 'custom',
              },
            ],
          },
        },
        {
          field: 'switch_3569',
          input: true,
          label: '隐藏姓名',
          props: {
            defaultValue: false,
            round: true,
          },
          type: 'switch',
          id: 'switch_3569',
          on: {
            change: [
              {
                componentId: null,
                methodName: 'test',
                type: 'custom',
              },
            ],
          },
        },
        {
          field: 'input_4606',
          input: true,
          label: '姓名',
          props: {
            defaultValue: '',
            placeholder: '请输入',
            type: 'text',
          },
          type: 'input',
          id: 'input_4606',
        },
      ],
    },
  ],
  script:
    "const { defineExpose, find } = this;\n\nfunction test (e){\n    find('input_4606').setAttr('hidden',e)\n}\n\nfunction setDisabled (e){\n    find('input_4606').setAttr('disabled',e)\n}\n\n// 通过defineExpose暴露的函数或者属性\ndefineExpose({\n test,\n setDisabled\n})",
});
</script>

<template>
  <EBuilder ref="ebRef" :page-schema="pageSchema" />
</template>
