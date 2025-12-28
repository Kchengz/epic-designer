<script lang="ts" setup>
import type { FieldStates, PageSchema } from '@epic-designer/types';

import { onMounted, ref } from 'vue';

import { EBuilder } from '@epic-designer/core';
import { Alert } from 'ant-design-vue';

const ebRef = ref<InstanceType<typeof EBuilder>>();

const fieldStates = ref<FieldStates>([
  {
    condition: (formData) => {
      return formData.number_x4t431jb === 16;
    },
    field: 'input_2drzm924',
    required: false,
    state: 'DISABLED',
  },
  {
    condition: (formData) => {
      return formData.radio_shndnr9b === '男';
    },
    field: 'checkbox_1l91io8k',
    required: true,
    state: 'DISABLED',
  },
]);

const pageSchema = ref<PageSchema>({
  schemas: [
    {
      props: {
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
          props: {
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
                      props: {
                        bordered: true,
                        placeholder: '请输入',
                      },
                      id: 'input_2drzm924',
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
                  props: {
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
                      props: {
                        placeholder: '请输入',
                        style: {
                          width: '100%',
                        },
                      },
                      id: 'number_x4t431jb',
                      rules: [
                        {
                          message: '必填项',
                          required: true,
                          trigger: ['change'],
                          type: 'number',
                        },
                      ],
                    },
                  ],
                  props: {
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
              props: {
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
              props: {
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
              props: {
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

onMounted(() => {
  ebRef.value?.setData({
    checkbox_1l91io8k: ['唱', '跳', 'rap', '篮球'],
    input_2drzm924: '芷音',
    number_x4t431jb: 18,
    radio_shndnr9b: '女',
    textarea_1ihmowjl: 'Two and a half years of practice as a programmer',
  });

  setTimeout(() => {
    ebRef.value?.setData({
      input_2drzm924: '妮泰梅',
    });
  }, 3000);
});
</script>

<template>
  <div>
    <div class="mt-4 pl-8">
      <Alert message="试试将年龄修改为16岁或者性别设置为男" type="info" />
    </div>
    <EBuilder
      ref="ebRef"
      :page-schema="pageSchema"
      :field-states="fieldStates"
    />
  </div>
</template>
