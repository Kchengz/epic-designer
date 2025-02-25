<script lang="ts" setup>
import { computed, onMounted, ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';

import { pluginManager } from '@epic-designer/utils';
import { useClipboard } from '@vueuse/core';
import { Button, message } from 'ant-design-vue';

// 加载所有 builder 目录下的 Vue 文件，作为代码片段资源
const files: Record<string, { default: string }> = import.meta.glob(
  '@/views/builder/**/*.vue',
  { eager: true, query: '?raw' },
);
// 从插件管理器获取 Monaco 编辑器组件
const MonacoEditor = pluginManager.getComponent('monacoEditor');
const route = useRoute();
const monacoEditorRef = ref<any>(null);

// 获取当前页面的代码片段
const pageSFC = computed(() => {
  const path = route.fullPath.split('/').pop();
  return files[`/src/views/builder/${path}/index.vue`]?.default;
});

const { copy, isSupported } = useClipboard({ source: pageSFC.value });
const copyCode = async (content: string) => {
  if (!isSupported) {
    message.error('当前浏览器不支持复制功能！');
    return;
  }
  // 调用剪贴板复制函数
  copy(content);
  message.success('代码已复制到剪贴板！');
};

// 监听 pageSFC 的变化，实时更新 Monaco 编辑器内容
watchEffect(() => {
  monacoEditorRef.value?.setValue(pageSFC.value);
});

onMounted(() => {
  import('./highlight').then((r) => r.registerHighlighter());
});
</script>
<template>
  <div class="epic-page-main flex h-full">
    <div class="flex-1 p-2">
      <h2 class="text-24px block pl-8 pt-4">
        {{ route.meta.title }}
      </h2>
      <router-view />
    </div>
    <div class="relative w-0 flex-1">
      <MonacoEditor
        ref="monacoEditorRef"
        class="h-full"
        theme="vs-dark"
        language="vue"
        read-only
      />
      <Button
        type="primary"
        class="absolute bottom-3 right-4"
        @click="copyCode(pageSFC)"
      >
        一键复制
      </Button>
    </div>
  </div>
</template>
