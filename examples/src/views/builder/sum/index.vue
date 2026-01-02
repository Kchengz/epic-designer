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
          field: '1',
          input: true,
          label: '数值1',
          props: {
            placeholder: '请输入',
          },
          type: 'number',
          id: '1',
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
          field: '2',
          input: true,
          label: '数值2',
          props: {
            placeholder: '请输入',
          },
          type: 'number',
          id: '2',
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
          field: '3',
          input: true,
          label: '总量',
          props: {
            placeholder: '请输入',
          },
          type: 'number',
          id: '3',
        },
      ],
    },
  ],
  script:
    "const { defineExpose, find } = this;\n\nfunction test (e){\n    setTimeout(()=>{\n        const sum = (find('1').getValue()??0)+ (find('2').getValue()??0)\n         find('3').setValue(sum)\n    },1)\n}\n\n// 通过defineExpose暴露的函数或者属性\ndefineExpose({\n test \n})",
});
</script>

<template>
  <EBuilder ref="ebRef" :page-schema="pageSchema" />
</template>
