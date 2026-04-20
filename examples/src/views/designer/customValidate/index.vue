<script lang="ts" setup>
import type { PageSchema } from '@epic-designer/types';

import {
  onActivated,
  onBeforeUnmount,
  onDeactivated,
  onMounted,
  ref,
} from 'vue';

import { EDesigner } from '@epic-designer/core';

import {
  hideCustomValidateComponent,
  showCustomValidateComponent,
} from './registerCustomValidateComponent';

const designerRef = ref<InstanceType<typeof EDesigner>>();

const pageSchema: PageSchema = {
  canvas: {
    mode: 'desktop',
  },
  schemas: [
    {
      id: 'root',
      label: '页面',
      props: {
        style: {
          padding: '16px',
        },
      },
      type: 'page',
      children: [
        {
          label: '表单',
          type: 'form',
          children: [
            {
              field: 'customCheck',
              id: 'custom_validate_1',
              input: true,
              label: '自定义校验组件',
              props: {
                placeholder: '输入 ok 则校验通过',
              },
              rules: [
                {
                  isValidator: true,
                  message: '请输入 ok，其他内容 check 不通过',
                  trigger: ['change', 'blur'],
                  validator: 'validateCustomCheck',
                },
              ],
              type: 'custom-validate-input',
            },
          ],
          id: 'form_custom_validate',
          props: {
            labelCol: {
              span: 5,
            },
            labelLayout: 'fixed',
            labelWidth: '120px',
            name: 'default',
            wrapperCol: {
              span: 19,
            },
          },
        },
      ],
    },
  ],
  script: `const { defineExpose } = epic;

function validateCustomCheck(_rule, value, callback) {
  if (value === 'ok') {
    callback?.();
    return Promise.resolve();
  }

  const error = new Error('请输入 ok，其他内容 check 不通过');
  callback?.(error);
  return Promise.reject(error);
}

defineExpose({
  validateCustomCheck,
});`,
};

function syncMaterialVisible(visible: boolean) {
  if (visible) {
    showCustomValidateComponent();
    return;
  }

  hideCustomValidateComponent();
}

onMounted(() => {
  syncMaterialVisible(true);
  designerRef.value?.setData(pageSchema);
});

onActivated(() => {
  syncMaterialVisible(true);
});

onDeactivated(() => {
  syncMaterialVisible(false);
});

onBeforeUnmount(() => {
  syncMaterialVisible(false);
});

function handleSubmit(e: PageSchema) {
  console.log(e);
}
</script>
<template>
  <EDesigner ref="designerRef" title="自定义校验组件示例" @save="handleSubmit">
    <template #header-prefix>
      <div>欢迎使用EpicDesigner设计器</div>
    </template>
  </EDesigner>
</template>
