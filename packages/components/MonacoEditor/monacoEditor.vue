<template>
  <div ref="editContainer" class="code-editor"></div>
</template>
<script setup lang="ts">
import { ref, onMounted, watch, defineEmits } from 'vue';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js';
// @ts-ignore
// import JsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker'
// 解决vite Monaco提示错误
// (self as any).MonacoEnvironment = {
//   getWorker() {
//     return new JsonWorker();
//   },
// };

const props = defineProps({
  value: {
    type: String
  },  
})

const editContainer = ref<HTMLElement | null>(null)

let monacoEditor: monaco.editor.IStandaloneCodeEditor | null = null;
const emit = defineEmits(['update:value'])
watch(
  () => props.value,
  (value) => {
    // 防止改变编辑器内容时光标重定向
    if (value !== monacoEditor?.getValue()) {
      monacoEditor?.setValue(value || '');
    }
  },
);

onMounted(() => {
  monacoEditor = monaco.editor.create(editContainer.value as HTMLElement, {
    value: props.value,
    readOnly: false,
    language: 'json',
    theme: 'vs-dark',
    selectOnLineNumbers: true,
  });
  // 监听值变化
  monacoEditor.onDidChangeModelContent(() => {
    const currenValue = monacoEditor?.getValue();
    emit('update:value', currenValue);
  });
});
</script>
<style scoped>
.code-editor {
  width: 100%;
  min-height: 200px;
}
</style>
