<template>
  <div class="epic-script-edit">
    <div class="epic-script-left-panel">
      <div class="epic-tree-select">
        <ETree
          v-model:selectedKeys="selectedKeys"
          :options="pageSchema.schemas"
          @node-click="handleNodeClick"
        >
          <template #tree-node="{ record }">
            <div class="tree-node-item">
              <span>
                {{ record.label ?? pluginManager.getComponentConfingByType(record.type)?.defaultSchema.label }}<span
                  class="epic-node-type-text"
                >
                  {{ record.type }}
                </span>
              </span>
              <span
                class="action"
                @click="handleGetComponent(record)"
              >get</span>
            </div>
          </template>
        </ETree>
      </div>
      <div class="epic-action-select">
        <div
          v-for="item in methodOptions"
          :key="item.value"
          class="action-item"
        >
          <span>{{ item.label }}</span>
          <span
            class="action"
            @click="handleGetAttr(item)"
          >get</span>
        </div>
      </div>
    </div>
    <div class="epic-script-right-panel">
      <MonacoEditor
        ref="monacoEditorRef"
        v-model="pageSchema.script"
        class="editor"
        :config="MonacoEditorConfig"
        language="javascript"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { pluginManager, PageManager } from '@epic-designer/utils'
import { ref, inject, computed } from 'vue'
import ETree from '../../../components/tree'
import { NodeItem, PageSchema } from '../../../types/epic-designer'
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
const pageSchema = inject('pageSchema') as PageSchema
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
