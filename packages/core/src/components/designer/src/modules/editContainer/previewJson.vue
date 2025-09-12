<script lang="ts" setup>
import type { PageSchema } from '@epic-designer/types';

import { inject, ref, watchEffect } from 'vue';

import { pluginManager } from '@epic-designer/manager';
import { useClipboard } from '@vueuse/core';

const Modal = pluginManager.getComponent('modal');
const MonacoEditor = pluginManager.getComponent('monacoEditor');
const MonacoEditorConfig = {
  minimap: {
    enabled: false,
  },
  readOnly: true,
  selectOnLineNumbers: true,
  theme: 'vs-light',
};
const monacoEditorRef = ref<any>(null);
const visible = ref(false);
const pageSchema = inject('pageSchema') as PageSchema;
const { copied, copy } = useClipboard();
watchEffect(() => {
  if (copied.value) {
    pluginManager.global.$message.success('节点ID复制成功');
  }
});

function handleClose() {
  // visible.value = false;
  const content = JSON.stringify(pageSchema, null, 2);
  copy(content);
}

// 打开预览页面
function handleOpen() {
  visible.value = true;
  if (monacoEditorRef.value) {
    monacoEditorRef.value.setValue(JSON.stringify(pageSchema, null, 2));
  } else {
    // 编辑器组件未加载,延时重新调用函数
    setTimeout(() => {
      handleOpen();
    }, 300);
  }
}

/**
 * 导出数据
 */
function handleExportData(fileName = `epic-data.json`) {
  const content = JSON.stringify(pageSchema, null, 2);
  const encodedUri = `data:text/json;charset=utf-8,${encodeURIComponent(content)}`;
  const actions = document.createElement('a');
  actions.setAttribute('href', encodedUri);
  actions.setAttribute('download', fileName);
  actions.click();
}

defineExpose({
  handleOpen,
});
</script>
<template>
  <Modal
    v-model="visible"
    title="查看数据"
    class="w-900px"
    width="900px"
    ok-text="导出数据"
    cancel-text="一键复制"
    @close="handleClose"
    @ok="handleExportData"
  >
    <div class="min-w-750px h-full rounded">
      <MonacoEditor
        ref="monacoEditorRef"
        class="editor h-full"
        auto-toggle-theme
        read-only
        :config="MonacoEditorConfig"
        language="json"
      />
    </div>
  </Modal>
</template>
