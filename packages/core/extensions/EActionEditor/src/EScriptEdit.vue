<template>
  <div class="h-full flex flex-col">
    <div class="pb-2">
      自定义函数编辑
    </div>
    <MonacoEditor ref="monacoEditorRef" v-model="pageSchema.script" class="editor flex-1" :config="MonacoEditorConfig"
      language="javascript" />
  </div>
</template>
<script lang="ts" setup>
import { pluginManager } from '@epic-designer/utils'
import { ref, inject } from 'vue'
import { PageSchema } from '../../../types/epic-designer'
const MonacoEditor = pluginManager.getComponent('monacoEditor')
const MonacoEditorConfig = {
  theme: 'vs-light',
  selectOnLineNumbers: true,
  minimap: {
    enabled: false
  }
}
const monacoEditorRef = ref<any>(null)
const pageSchema = inject('pageSchema') as PageSchema


</script>
