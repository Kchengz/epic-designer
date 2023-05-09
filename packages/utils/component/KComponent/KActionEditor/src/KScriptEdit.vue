<template>
  <div class="k-script-edit">
    <div class="k-script-left-panel">
      <div class="k-tree-select">
        <KTree :options="schemas" v-model:selectedKeys="selectedKeys" @node-click="handleNodeClick">
          <template #tree-node="{ record }">
            <div class="tree-node-item">
              <span>{{ pluginManager.getComponentConfingByType(record.type)?.defaultSchema.label }}</span>
              <span class="action" @click="handleGetComponent(record)">get</span>
            </div>
          </template>
        </KTree>
      </div>
      <div class="k-action-select">
        <div class="action-item" v-for="item in methodOptions" :key="item.value">
          <span>{{ item.label }}</span>
          <span class="action" @click="handleGetAttr(item)">get</span>
        </div>
      </div>
    </div>
    <div class="k-script-right-panel">
      <MonacoEditor ref="monacoEditorRef" class="editor" :config="MonacoEditorConfig" language="javascript"
        v-model="script" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { pluginManager, PageManager } from '../../../../index'
import { ref, Ref, inject, computed } from 'vue'
import KTree from '../../../../../components/KTree'
import { NodeItem } from '../../../../../types/kDesigner'
const MonacoEditor = pluginManager.getComponent('monacoEditor')
const MonacoEditorConfig = {
  theme: 'vs-light',
  selectOnLineNumbers: true,
  minimap: {
    enabled: false
  }
}
const monacoEditorRef = ref<any>(null)
const pageManager = inject('pageManager', {}) as PageManager
const schemas = inject('schemas') as Ref<NodeItem[]>
const script = inject('script') as Ref<string>
const selectedKeys = ref([])
const nodeItem = ref<NodeItem | null>(null)
const methodOptions = computed(() => {
  if (nodeItem.value) {
    return pluginManager.getComponentConfings()[nodeItem.value!.type].config.action?.map(item => ({ label: item.describe, value: item.type }))
  }
  ;
  return Object.entries(pageManager.funcs.value)
    .filter(([key, value]) => typeof value === 'function')
    .map(([label]) => ({ label, value: label }))
})

function handleNodeClick (e: any) {
  nodeItem.value = e.record
}

/**
 * 获取组件
 * @param e
 */
function handleGetComponent (e: any) {
  monacoEditorRef.value?.insertText(`getComponent('${e.id}')`)
}

/**
 * 获取组件或者事件
 * @param e
 */
function handleGetAttr (e: any) {
  monacoEditorRef.value?.insertText(`getComponent('${nodeItem.value!.id}').${e.value}()`)
}

</script>
