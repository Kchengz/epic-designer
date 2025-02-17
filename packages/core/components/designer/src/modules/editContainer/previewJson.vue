<template>
  <Modal
    v-model="visible"
    title="查看数据"
    class="w-900px"
    width="900px"
    ok-text="导出数据"
    @close="handleClose"
    @ok="handleExportData"
  >
    <div class="min-w-750px rounded h-full">
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
<script lang="ts" setup>
import { pluginManager } from '@epic-designer/utils'
import { ref, inject } from 'vue'
import { PageSchema } from '../../../../../types/epic-designer'

const Modal = pluginManager.getComponent('modal')
const MonacoEditor = pluginManager.getComponent('monacoEditor')
const MonacoEditorConfig = {
  theme: 'vs-light',
  selectOnLineNumbers: true,
  minimap: {
    enabled: false
  },
  readOnly: true
}
const monacoEditorRef = ref<any>(null)
const visible = ref(false)
const pageSchema = inject('pageSchema') as PageSchema
function handleClose() {
  visible.value = false
}

// 打开预览页面
function handleOpen() {
  visible.value = true
  if (monacoEditorRef.value) {
    monacoEditorRef.value.setValue(JSON.stringify(pageSchema, null, 2))
  } else {
    // 编辑器组件未加载,延时重新调用函数
    setTimeout(() => {
      handleOpen()
    }, 300)
  }
}


/**
 * 导出数据
 */
function handleExportData(fileName = `epic-data.json`) {
  const content = JSON.stringify(pageSchema, null, 2);
  var encodedUri = `data:text/json;charset=utf-8,${encodeURIComponent(content)}`;
  var actions = document.createElement("a");
  actions.setAttribute("href", encodedUri);
  actions.setAttribute("download", fileName);
  actions.click();
}

defineExpose({
  handleOpen
})
</script>
