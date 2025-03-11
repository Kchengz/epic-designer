<script lang="ts" setup>
import type { PageSchema } from '@epic-designer/types';

import { ref } from 'vue';

import { EBuilder } from '@epic-designer/core';

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
          id: '3543akxhdum00',
          name: 'default',
          children: [
            {
              label: '栅格布局',
              type: 'row',
              icon: 'icon-zhage',
              children: [
                {
                  type: 'col',
                  children: [
                    {
                      label: '禁用姓名',
                      type: 'switch',
                      icon: 'icon-kaiguan3',
                      field: 'switch_vhzz40mc',
                      input: true,
                      componentProps: {
                        disabled: false,
                      },
                      id: 'switch_vhzz40mc',
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
                  ],
                  componentProps: {
                    span: 12,
                  },
                  id: 'col_fmqw6vre',
                },
                {
                  type: 'col',
                  children: [
                    {
                      label: '隐藏姓名',
                      type: 'switch',
                      icon: 'icon-kaiguan3',
                      field: 'switch_k561x18z',
                      input: true,
                      componentProps: {},
                      id: 'switch_k561x18z',
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
                  ],
                  componentProps: {
                    span: 12,
                  },
                  id: 'col_i5q4prg6',
                },
              ],
              id: 'row_w2fw9pkw',
            },
            {
              label: '姓名',
              type: 'input',
              icon: 'icon-write',
              field: 'input_ho0tpt7i7tc00',
              input: true,
              componentProps: {
                defaultValue: '',
                disabled: false,
                hidden: false,
                placeholder: '请输入',
                size: 'default',
                type: 'text',
              },
              id: 'ho0tpt7i7tc00',
              on: {
                input: [
                  {
                    componentId: null,
                    methodName: 'test',
                    type: 'custom',
                  },
                ],
              },
            },
          ],
        },
      ],
    },
  ],
  script:
    "const { defineExpose, getComponent } = this;\n\nfunction test (e){\n    getComponent('ho0tpt7i7tc00').setAttr('hidden',e)\n}\n\nfunction setDisabled (e){\n    getComponent('ho0tpt7i7tc00').setAttr('disabled',e)\n}\n\n// 通过defineExpose暴露的函数或者属性\ndefineExpose({\n test,\n setDisabled\n})",
});
</script>

<template>
  <EBuilder ref="ebRef" :page-schema="pageSchema" />
</template>
