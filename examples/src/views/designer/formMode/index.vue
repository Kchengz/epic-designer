<script lang="ts" setup>
import type { PageSchema } from '@epic-designer/types';

import { ref } from 'vue';

import { EDesigner } from '@epic-designer/core';

const designerRef = ref<InstanceType<typeof EDesigner>>();
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
    form-mode
    title="表单模式示例"
    @save="handleSubmit"
  >
    <template #header-prefix>
      <div>欢迎使用EpicDesigner设计器</div>
    </template>
  </EDesigner>
</template>
