<template>
  <Modal title="动作配置" v-model:visible="visible" v-model="visible" width="700px" :footer="null">
    <div class="k-modal-action-main">
      <div class="k-modal-left-panel">
        <div class="fun-btn" :class="{ checked: actionItem.componentId === null }" @click="toggleMethod">函数</div>
        组件
        <KTree :options="schemas" v-model:selectedKeys="selectedKeys" @node-click="handleNodeClick" />
      </div>
      <div class="k-modal-right-panel">
        <div class="select-box">
          <span>动作选择</span>
          <Select class="action-select" v-model="actionItem.methodName" v-model:value="actionItem.methodName"
            :options="methodOptions" />
          <Button v-if="actionItem.componentId === null" @click="handleAddMethod">自定义函数</Button>
        </div>
        <MonacoEditor @vnodeMounted="handeldd" class="editor" :config="MonacoEditorConfig"
          language="javascript" v-model="script" />
      </div>
    </div>
    <div class="k-modal-footer">
      <Button @click="handleClose">取消</Button>
      <Button type="primary" @click="handleSave">保存</Button>
    </div>
  </Modal>
</template>
<script lang="ts" setup>
import { pluginManager, PageManager } from '../../../index'
import { ref, Ref, inject, toRaw, reactive, computed } from 'vue'
import KTree from '../../../../components/KTree'
import { NodeItem, FormDataModel } from '../../../../types/kDesigner'
const Modal = pluginManager.getComponent('Modal')
const Select = pluginManager.getComponent('select')
const Button = pluginManager.getComponent('button')
const MonacoEditor = pluginManager.getComponent('monacoEditor')
const schemas = inject('schemas') as Ref<NodeItem[]>
const script = inject('script') as Ref<string>
const pageManager = inject('pageManager', {}) as PageManager
const visible = ref(false)
const selectedKeys = ref([])
const nodeItem = ref<NodeItem | null>(null)
const MonacoEditorConfig = {
  theme: 'vs-light',
  selectOnLineNumbers: true,
  minimap: {
    enabled: false
  }
}

function handeldd () {
  console.log(4545)
}
const emit = defineEmits(['add'])

const methodOptions = computed(() => {
  if (nodeItem.value) {
    return pluginManager.getComponentConfings()[nodeItem.value!.type].config.action?.map(item => ({ label: item.describe, value: item.type }))
  }
  ;
  return Object.entries(pageManager.funcs.value)
    .filter(([key, value]) => typeof value === 'function')
    .map(([label]) => ({ label, value: label }))
})

let actionItem = reactive<FormDataModel>({
  methodName: null,
  componentId: null
})

function handleOpen () {
  visible.value = true
  actionItem = reactive<FormDataModel>({
    methodName: null,
    componentId: null
  })
}

function handleSave () {
  if (!actionItem.methodName) {
    alert('请先选择动作方法')
    return
  }
  emit('add', toRaw(actionItem))
  handleClose()
}

function handleClose () {
  visible.value = false
  selectedKeys.value = []
}

function toggleMethod () {
  actionItem.componentId = null
  actionItem.methodName = null
  nodeItem.value = null
  selectedKeys.value = []
}
function handleNodeClick (e: any) {
  actionItem.componentId = e.id
  nodeItem.value = e.record
  actionItem.methodName = null
}

function handleAddMethod () {

}

defineExpose({
  handleOpen
})

</script>
