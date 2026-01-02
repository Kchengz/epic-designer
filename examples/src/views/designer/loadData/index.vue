<script lang="ts" setup>
import type { PageSchema } from '@epic-designer/types';

import { onMounted, ref } from 'vue';

import { EDesigner } from '@epic-designer/core';

const designerRef = ref<InstanceType<typeof EDesigner>>();

const pageSchema = {
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
          label: '栅格布局',
          type: 'row',
          children: [
            {
              type: 'col',
              children: [
                {
                  field: 'name',
                  input: true,
                  label: '姓名',
                  props: {
                    defaultValue: '',
                    placeholder: '请输入',
                    type: 'text',
                  },
                  type: 'input',
                  id: 'input_9620',
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
              id: 'col_3000',
            },
            {
              type: 'col',
              children: [
                {
                  field: 'age',
                  input: true,
                  label: '年龄',
                  props: {
                    defaultValue: null,
                    placeholder: '请输入',
                    style: {
                      width: '100%',
                    },
                  },
                  type: 'number',
                  id: 'number_9353',
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
              id: 'col_9258',
            },
          ],
          id: 'row_5000',
        },
        {
          field: 'gender',
          input: true,
          label: '性别',
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
          },
          type: 'radio',
          id: 'radio_5723',
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
          field: 'interests',
          input: true,
          label: '兴趣',
          props: {
            defaultValue: ['跳', '唱'],
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
          type: 'checkbox',
          id: 'checkbox_8622',
          rules: [
            {
              message: '必填项',
              required: true,
              trigger: ['change'],
              type: 'array',
            },
          ],
        },
        {
          field: 'about',
          input: true,
          label: '个人简介',
          props: {
            defaultValue: '',
            placeholder: '请输入',
          },
          type: 'textarea',
          id: 'textarea_6128',
        },
      ],
    },
  ],
  script:
    "const { defineExpose, find } = epic;\n\nfunction test (){\n    console.log('test')\n}\n\n// 通过defineExpose暴露的函数或者属性\ndefineExpose({\n test\n})",
};

onMounted(() => {
  designerRef.value?.setData(pageSchema);
});

/**
 * 点击保存按钮操作
 * @param e
 */
function handleSubmit(e: PageSchema) {
  console.log(e);
}
</script>
<template>
  <EDesigner
    ref="designerRef"
    title="EpicDesigner数据回显示例"
    @save="handleSubmit"
  >
    <template #header-prefix>
      <div>欢迎使用EpicDesigner设计器</div>
    </template>
  </EDesigner>
</template>
