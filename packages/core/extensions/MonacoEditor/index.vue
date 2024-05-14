<template>
  <div ref="editContainer" class="epic-code-editor" />
</template>
<script setup lang="ts">
import { ref, watch, nextTick, onMounted } from 'vue'
import * as monaco from 'monaco-editor'
import type { editor } from 'monaco-editor'
import { useTheme } from '@epic-designer/utils'
const props = withDefaults(defineProps<{
  language?: string,
  readOnly?: boolean,
  valueFormat?: string,
  modelValue?: any,
  config?: editor.IStandaloneEditorConstructionOptions,
  lineNumbers?: 'on' | 'off',
  autoToggleTheme?: boolean,
  theme?: 'vs-light' | 'vs-dark' | 'hc-black'
}>(), {
  language: 'json',
  readOnly: false,
  valueFormat: 'string',
  lineNumbers: 'on',
  theme: 'vs-light',
  config: () => ({
    selectOnLineNumbers: true,
    minimap: {
      enabled: false
    },
  })
})

const emit = defineEmits(['update:modelValue'])

const editContainer = ref<HTMLElement | null>(null)

let monacoEditor: monaco.editor.IStandaloneCodeEditor | null = null
const { isDark } = useTheme()



function handleToggleTheme() {
  if (isDark.value) {
    monaco.editor.setTheme('vs-dark')
  } else {
    monaco.editor.setTheme('vs-light')
  }
}



/**
 * 设置文本
 * @param text
 */
function setValue(text: string) {
  monacoEditor?.setValue(text || '')
}

/**
 * 光标处插入文本
 * @param text
 */
function insertText(text: string) {
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
    value: getValue(),
    ...props.config,
    language: props.language,
    readOnly: props.readOnly,
    lineNumbers: props.lineNumbers,
    theme: props.theme,
    automaticLayout: true
  })

  // 自动切换主题
  if (props.autoToggleTheme) {
    watch(() => isDark.value, () => {
      nextTick(() => handleToggleTheme())
    }, {
      immediate: true
    })
  }

  // 获取值
  function getValue() {
    // valueFormat 为json 格式，需要转换处理
    if (props.valueFormat === 'json') {
      if (props.modelValue) {
        return JSON.stringify(props.modelValue, null, 2)
      }
    }
    return props.modelValue ?? ''
  }


  // 监听值变化
  monacoEditor.onDidChangeModelContent(() => {
    const currenValue = monacoEditor?.getValue()

    // valueFormat 为json 格式，需要转换处理
    if (props.valueFormat === 'json' && currenValue) {
      emit('update:modelValue', JSON.parse(currenValue))
      return
    }

    emit('update:modelValue', currenValue ?? '')

  })
})

defineExpose({
  setValue,
  insertText
})
</script>
<style lang="less" scoped>
.epic-code-editor {
  width: 100%;
  min-height: 150px;

  :deep(.monaco-editor) {
    height: 100%;
  }
}
</style>
