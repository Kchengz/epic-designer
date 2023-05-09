<template>
  <div ref="editContainer" class="code-editor"></div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import * as monaco from 'monaco-editor'
// import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js'
// import 'monaco-editor/esm/vs/language/json/monaco.contribution'
// import 'monaco-editor/esm/vs/language/typescript/monaco.contribution'
// @ts-ignore
import EditorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker'
// @ts-ignore
import JsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker'
// @ts-ignore
import CssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker'
// @ts-ignore
import HtmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker'
// @ts-ignore
import TsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker'

// 解决vite Monaco提示错误
self.MonacoEnvironment = {
  getWorker (_: string, label: string) {
    if (label === 'json') {
      return new JsonWorker()
    }
    if (label === 'css' || label === 'scss' || label === 'less') {
      return new CssWorker()
    }
    if (label === 'html' || label === 'handlebars' || label === 'razor') {
      return new HtmlWorker()
    }
    if (label === 'typescript' || label === 'javascript') {
      return new TsWorker()
    }
    return new EditorWorker()
  }
}

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  language: {
    type: String,
    default: 'json'
  },
  readOnly: {
    type: Boolean,
    default: false
  },
  config: {
    type: Object,
    default: () => ({
      theme: 'vs-light',
      selectOnLineNumbers: true,
      minimap: {
        enabled: false
      },
      lineNumbers: 'off'
    })
  }
})

const editContainer = ref<HTMLElement | null>(null)

let monacoEditor: monaco.editor.IStandaloneCodeEditor | null = null
const emit = defineEmits(['update:modelValue'])

/**
 * 设置文本
 * @param text
 */
function setValue (text: string) {
  monacoEditor?.setValue(text || '')
}

/**
 * 光标处插入文本
 * @param text
 */
function insertText (text: string) {
  // 获取光标位置
  const position = monacoEditor?.getPosition()
  // 未获取到光标位置信息
  if (!position) {
    return
  }
  // 插入
  monacoEditor?.executeEdits('', [
    {
      range: new monaco.Range(position.lineNumber,
        position.column,
        position.lineNumber,
        position.column),
      text
    }
  ])
  // 设置新的光标位置
  monacoEditor?.setPosition({ ...position, column: position.column + text.length })
  // 重新聚焦
  monacoEditor?.focus()
}

onMounted(() => {
  monacoEditor = monaco.editor.create(editContainer.value as HTMLElement, {
    value: props.modelValue,
    language: props.language,
    readOnly: props.readOnly,
    ...props.config,
    automaticLayout: true
  })
  // 监听值变化
  monacoEditor.onDidChangeModelContent(() => {
    const currenValue = monacoEditor?.getValue()
    emit('update:modelValue', currenValue)
  })
})

defineExpose({
  setValue,
  insertText
})
</script>
<style lang="less" scoped>
.code-editor {
  width: 100%;
  min-height: 150px;

  :deep(.monaco-editor) {
    height: 100%;
  }
}
</style>
