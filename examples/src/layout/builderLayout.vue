<template>
  <div class="epic-page-main h-full flex">
    <div class="flex-1 w-0 relative">
      <MonacoEditor
        ref="monacoEditorRef"
        class="h-full"
        theme="vs-dark"
        readOnly
        language="html"
      />
      <Button type="primary" class="absolute bottom-3 right-4" @click="copyCode(pageSFC)"
        >一键复制</Button
      >
    </div>
    <div class="flex-1 p-2">
      <h2 class="pt-4 pl-8 text-24px block">{{ route.meta.title }}</h2>
      <router-view></router-view>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, computed, watchEffect } from "vue";
import { Button, message } from "ant-design-vue";
import { pluginManager } from "@epic-designer/utils";
import { useRoute } from "vue-router";
import { useClipboard } from "@vueuse/core";

// 加载所有 builder 目录下的 Vue 文件，作为代码片段资源
const files = import.meta.glob("@/views/builder/**/*.vue", { eager: true, as: "raw" });

// 从插件管理器获取 Monaco 编辑器组件
const MonacoEditor = pluginManager.getComponent("monacoEditor");
const route = useRoute();
const monacoEditorRef = ref<any>(null);

// 获取当前页面的代码片段
const pageSFC = computed(() => {
  const path = route.fullPath.split("/").pop();
  return files[`/src/views/builder/${path}/index.vue`];
});

const { copy, isSupported } = useClipboard({ source: pageSFC.value });
const copyCode = async (content: string) => {
  if (!isSupported) {
    message.error("当前浏览器不支持复制功能！");
    return;
  }
  // 调用剪贴板复制函数
  copy(content);
  message.success("代码已复制到剪贴板！");
};

// 监听 pageSFC 的变化，实时更新 Monaco 编辑器内容
watchEffect(() => {
  monacoEditorRef.value?.setValue(pageSFC.value);
});
</script>
