<script lang="ts" setup>
import type { PageSchema } from '@epic-designer/types';

import { ref } from 'vue';

import { EDesigner } from '@epic-designer/core';
import { Button } from 'ant-design-vue';

const designerRef = ref<InstanceType<typeof EDesigner>>();
/**
 * 点击保存按钮操作
 * @param e
 */
function handleSubmit(e: PageSchema) {
  console.log(e);
}

/**
 * 导出撤销记录
 */
function exportUndoHistory() {
  const undoHistory = designerRef.value?.exportHistory();
  if (undoHistory) {
    const blob = new Blob([JSON.stringify(undoHistory)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'undoHistory.json';
    a.click();
    URL.revokeObjectURL(url);
  }
}

/**
 * 导入撤销记录
 */
function importUndoHistory() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.json';
  input.click();
  input.addEventListener('change', (e) => {
    const file = (e.target as HTMLInputElement)?.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsText(file, 'utf8');
      reader.addEventListener('load', () => {
        const undoHistory = JSON.parse(reader.result as string);
        designerRef.value?.importHistory(undoHistory);
      });
    }
  });
}
</script>
<template>
  <EDesigner
    ref="designerRef"
    title="EpicDesigner基础用法示例"
    @save="handleSubmit"
  >
    <template #header-prefix>
      <div>欢迎使用EpicDesigner设计器</div>
    </template>
    <template #header-right-suffix>
      <Button
        type="primary"
        style="margin-left: 8px"
        size="small"
        @click="exportUndoHistory"
      >
        导出撤销记录
      </Button>
      <Button style="margin-left: 8px" size="small" @click="importUndoHistory">
        导入撤销记录
      </Button>
    </template>
  </EDesigner>
</template>
