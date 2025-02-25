<script lang="ts" setup>
import { ref } from 'vue';

import { EBuilder, PageSchema } from '@epic-designer/core';

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
          icon: 'epic-icon-daibanshixiang',
          componentProps: {
            colon: true,
            hideRequiredMark: false,
            labelAlign: 'right',
            labelCol: {
              span: 5,
            },
            labelLayout: 'fixed',
            labelWidth: 100,
            layout: 'horizontal',
            name: 'default',
            size: 'middle',
            style: {
              width: '600px',
            },
            wrapperCol: {
              span: 19,
            },
          },
          children: [
            {
              label: '栅格布局',
              type: 'row',
              icon: 'epic-icon-zhage',
              children: [
                {
                  type: 'col',
                  children: [
                    {
                      label: '姓名',
                      type: 'input',
                      field: 'input_2drzm924',
                      icon: 'epic-icon-write',
                      input: true,
                      componentProps: {
                        bordered: true,
                        placeholder: '请输入',
                      },
                      id: 'input_2drzm924',
                    },
                  ],
                  componentProps: {
                    span: 12,
                  },
                  id: 'col_m17ttkgz',
                },
                {
                  type: 'col',
                  children: [
                    {
                      label: '年龄',
                      type: 'number',
                      icon: 'epic-icon-number',
                      field: 'number_x4t431jb',
                      input: true,
                      componentProps: {
                        placeholder: '请输入',
                        style: {
                          width: '100%',
                        },
                      },
                      id: 'number_x4t431jb',
                    },
                  ],
                  componentProps: {
                    span: 12,
                  },
                  id: 'col_6uvxdrme',
                },
              ],
              id: 'row_fpuoo21a',
            },
            {
              label: '性别',
              type: 'radio',
              icon: 'epic-icon-danxuan-cuxiantiao',
              field: 'radio_shndnr9b',
              input: true,
              componentProps: {
                defaultValue: '男',
                options: [
                  {
                    label: '男',
                    value: '男',
                  },
                  {
                    label: '女',
                    value: '女',
                  },
                ],
                optionType: 'default',
              },
              id: 'radio_shndnr9b',
            },
            {
              label: '兴趣',
              type: 'checkbox',
              icon: 'epic-icon-duoxuan1',
              field: 'checkbox_1l91io8k',
              input: true,
              componentProps: {
                options: [
                  {
                    label: '唱',
                    value: '唱',
                  },
                  {
                    label: '跳',
                    value: '跳',
                  },
                  {
                    label: 'rap',
                    value: 'rap',
                  },
                  {
                    label: '篮球',
                    value: '篮球',
                  },
                ],
              },
              id: 'checkbox_1l91io8k',
            },
            {
              label: '个人简介',
              type: 'textarea',
              field: 'textarea_1ihmowjl',
              icon: 'epic-icon-edit',
              input: true,
              componentProps: {
                autoSize: {
                  minRows: 4,
                },
                placeholder: '请输入',
              },
              id: 'textarea_1ihmowjl',
            },
          ],
          id: 'form_eifo73no',
        },
      ],
    },
  ],
  script:
    "const { defineExpose, find } = epic;\n\nfunction test (){\n    console.log('test')\n}\n\n// 通过defineExpose暴露的函数或者属性\ndefineExpose({\n test \n})",
});

const formData = ref({
  checkbox_1l91io8k: ['唱', '跳', 'rap', '篮球'],
  input_2drzm924: '芷音',
  number_x4t431jb: 18,
  radio_shndnr9b: '女',
  textarea_1ihmowjl: 'Two and a half years of practice as a programmer',
});
</script>

<template>
  <EBuilder :page-schema="pageSchema" :form-data="formData" />
</template>
