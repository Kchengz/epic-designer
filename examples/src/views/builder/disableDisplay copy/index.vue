<script lang="ts" setup>
import type { PageSchema } from '@epic-designer/types';
import type { PageManager } from '@epic-designer/utils';

import { onMounted, ref } from 'vue';

import { EBuilder } from '@epic-designer/core';

const ebRef = ref<any>(null);
const data = ref({});
async function handleGetData() {
  const values = await ebRef.value?.getData();
  data.value = values;
}
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
            hideRequiredMark: false,
            labelAlign: 'right',
            labelCol: {
              span: 5,
            },
            labelPlacement: 'left',
            labelWidth: 100,
            name: 'default',
            requireMarkPlacement: 'right',
            size: 'medium',
            wrapperCol: {
              span: 19,
            },
          },
          children: [
            {
              label: '输入框22',
              type: 'input',
              field: 'input_sb6jhfb8',
              icon: 'epic-icon-write',
              input: true,
              componentProps: {
                defaultValue: '',
                disabled: false,
                placeholder: '请输入',
                size: 'medium',
                type: 'text',
              },
              id: 'input_sb6jhfb8',
            },
            {
              label: '按钮',
              type: 'button',
              field: 'button_ks9jbmym',
              icon: 'epic-icon-button-remove',
              input: false,
              componentProps: {
                bordered: true,
                size: 'medium',
                type: 'default',
              },
              id: 'button_ks9jbmym',
              on: {
                click: [
                  {
                    componentId: null,
                    methodName: 'test',
                    type: 'custom',
                  },
                ],
              },
            },
          ],
          id: 'form_18vemlk8',
        },
      ],
    },
  ],
  script:
    "const { defineExpose, find } = epic;\n\nfunction test (){\n    console.log('test')\n    find('input_sb6jhfb8').setAttr('disabled',!find('input_sb6jhfb8').getAttr('disabled'))\n}\n\n// 通过defineExpose暴露的函数或者属性\ndefineExpose({\n test \n})",
});

function handleReady(pageManager: PageManager) {
  console.log(pageManager);
}
// 表单赋值
onMounted(async () => {
  const data = await ebRef.value?.validate();
  console.log(data);
});
</script>

<template>
  <div class="epic-page-main p-2">
    <EBuilder ref="ebRef" :page-schema="pageSchema" @ready="handleReady" />
    <div @click="handleGetData">获取数据</div>
    {{ data }}
  </div>
</template>
