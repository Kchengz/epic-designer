<script lang="ts" setup>
import { ref } from 'vue';

import { EBuilder, PageSchema } from '@epic-designer/core';

const ebRef = ref<InstanceType<typeof EBuilder>>();
const pageSchema = ref<PageSchema>({
  schemas: [
    {
      componentProps: {
        style: {
          padding: '16px',
        },
      },
      id: 'root',
      label: '页面',
      type: 'page',
      children: [
        {
          label: '表单',
          type: 'form',
          icon: 'icon-daibanshixiang',
          name: 'default',
          componentProps: {
            hideRequiredMark: false,
            labelCol: {
              span: 5,
            },
            labelLayout: 'fixed',
            labelPosition: 'right',
            labelWidth: 100,
            requireAsteriskPosition: 'left',
            size: 'default',
            style: {
              width: '600px',
            },
            wrapperCol: {
              span: 19,
            },
          },
          children: [
            {
              label: '数值1',
              type: 'number',
              icon: 'icon-number',
              field: 'number_9m5zzib6',
              input: true,
              componentProps: {
                placeholder: '请输入',
                style: {
                  width: '100%',
                },
              },
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
              label: '数值2',
              type: 'number',
              icon: 'icon-number',
              field: 'number_szitefkr',
              input: true,
              componentProps: {
                placeholder: '请输入',
                style: {
                  width: '100%',
                },
              },
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
              label: '总值',
              type: 'number',
              icon: 'icon-number',
              field: 'number_bs7n1wpv',
              input: true,
              componentProps: {
                placeholder: '请输入',
                style: {
                  width: '100%',
                },
              },
              id: '3',
            },
          ],
          id: '3543akxhdum00',
        },
      ],
    },
  ],
  script:
    "const { defineExpose, getComponent } = this;\n\nfunction test (e){\n    const sum = (getComponent('1').getValue()??0)+ (getComponent('2').getValue()??0)\n    getComponent('3').setValue(sum)\n    \n}\n\n// 通过defineExpose暴露的函数或者属性\ndefineExpose({\n test \n})",
});
</script>

<template>
  <EBuilder ref="ebRef" :page-schema="pageSchema" />
</template>
