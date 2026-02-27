<script lang="ts" setup>
import { ref } from 'vue';

import { useDesigner } from '@epic-designer/hooks';
import { pluginManager } from '@epic-designer/manager';

const MonacoEditor = pluginManager.component.get('monacoEditor');
const MonacoEditorConfig = {
  minimap: {
    enabled: false,
  },
  selectOnLineNumbers: true,
  theme: 'vs-light',
};
const monacoEditorRef = ref<any>(null);
const { pageSchema } = useDesigner();
</script>
<template>
  <div class="flex h-full flex-col">
    <div class="pb-2">自定义函数编辑</div>
    <MonacoEditor
      ref="monacoEditorRef"
      v-model="pageSchema.script"
      auto-toggle-theme
      class="epic-editor flex-1"
      :config="MonacoEditorConfig"
      language="javascript"
    />
  </div>
</template>
