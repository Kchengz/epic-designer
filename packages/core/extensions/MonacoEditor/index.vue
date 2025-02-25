<script setup lang="ts">
import type { editor } from 'monaco-editor';

import { nextTick, onMounted, ref, watch } from 'vue';

import { useTheme } from '@epic-designer/hooks';
import * as monaco from 'monaco-editor';

const props = withDefaults(
  defineProps<{
    autoToggleTheme?: boolean;
    config?: editor.IStandaloneEditorConstructionOptions;
    language?: string;
    lineNumbers?: 'off' | 'on';
    modelValue?: any;
    readOnly?: boolean;
    theme?: 'hc-black' | 'vs-dark' | 'vs-light';
    valueFormat?: string;
  }>(),
  {
    config: () => ({
      minimap: {
        enabled: false,
      },
      selectOnLineNumbers: true,
    }),
    language: 'json',
    lineNumbers: 'on',
    modelValue: '',
    readOnly: false,
    theme: 'vs-light',
    valueFormat: 'string',
  },
);

const emit = defineEmits(['update:modelValue']);

const editContainer = ref<HTMLElement | null>(null);

let monacoEditor: monaco.editor.IStandaloneCodeEditor | null = null;
const { isDark } = useTheme();

function handleToggleTheme() {
  if (isDark.value) {
    monaco.editor.setTheme('vs-dark');
  } else {
    monaco.editor.setTheme('vs-light');
  }
}

/**
 * 设置文本
 * @param text
 */
function setValue(text: string) {
  monacoEditor?.setValue(text || '');
}

/**
 * 光标处插入文本
 * @param text
 */
function insertText(text: string) {
  // 获取光标位置
  const position = monacoEditor?.getPosition();
  // 未获取到光标位置信息
  if (!position) {
    return;
  }
  // 插入
  monacoEditor?.executeEdits('', [
    {
      range: new monaco.Range(
        position.lineNumber,
        position.column,
        position.lineNumber,
        position.column,
      ),
      text,
    },
  ]);
  // 设置新的光标位置
  monacoEditor?.setPosition({
    ...position,
    column: position.column + text.length,
  });
  // 重新聚焦
  monacoEditor?.focus();
}

onMounted(() => {
  monacoEditor = monaco.editor.create(editContainer.value as HTMLElement, {
    value: getValue(),
    ...props.config,
    automaticLayout: true,
    language: props.language,
    lineNumbers: props.lineNumbers,
    readOnly: props.readOnly,
    scrollbar: {
      horizontalScrollbarSize: 10,
      verticalScrollbarSize: 10,
    },
    scrollBeyondLastLine: false,
    theme: props.theme,
  });

  // 自动切换主题
  if (props.autoToggleTheme) {
    watch(
      () => isDark.value,
      () => {
        nextTick(() => handleToggleTheme());
      },
      {
        immediate: true,
      },
    );
  }

  // 获取值
  function getValue() {
    // valueFormat 为json 格式，需要转换处理
    if (props.valueFormat === 'json' && props.modelValue) {
      return JSON.stringify(props.modelValue, null, 2);
    }
    return props.modelValue ?? '';
  }

  // 监听值变化
  monacoEditor.onDidChangeModelContent(() => {
    const currenValue = monacoEditor?.getValue();

    // valueFormat 为json 格式，需要转换处理
    if (props.valueFormat === 'json' && currenValue) {
      emit('update:modelValue', JSON.parse(currenValue));
      return;
    }

    emit('update:modelValue', currenValue ?? '');
  });
});

defineExpose({
  insertText,
  setValue,
});
</script>
<template>
  <div ref="editContainer" class="epic-code-editor"></div>
</template>
<style lang="less" scoped>
.epic-code-editor {
  width: 100%;
  min-height: 150px;

  :deep(.monaco-editor) {
    height: 100%;
  }
}
</style>
