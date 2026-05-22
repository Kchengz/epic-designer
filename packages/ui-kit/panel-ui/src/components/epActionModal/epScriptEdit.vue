<script lang="ts" setup>
import { computed } from 'vue';

import { useDesignerContext, usePageManager } from '@epic-designer/hooks';
import { pluginManager } from '@epic-designer/manager';

const MonacoEditor = pluginManager.component.get('monacoEditor');
const MonacoEditorConfig = {
  minimap: {
    enabled: false,
  },
  selectOnLineNumbers: true,
  theme: 'vs-light',
};
const pageManager = usePageManager();
const { pageSchema } = useDesignerContext();

const hasScriptError = computed(() => pageManager.scriptError.value !== null);
</script>
<template>
  <div class="flex h-full flex-col">
    <div class="pb-2">
      <span>自定义函数编辑</span>
    </div>
    <MonacoEditor
      v-model="pageSchema.script"
      auto-toggle-theme
      class="ep-editor flex-1"
      :config="MonacoEditorConfig"
      language="javascript"
    />
    <div v-if="hasScriptError" class="pt-2 text-left">
      <span class="text-xs text-red-500">
        脚本异常 {{ pageManager.scriptError }}
      </span>
    </div>
  </div>
</template>
