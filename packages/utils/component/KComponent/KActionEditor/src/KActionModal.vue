<template>
  <Modal
    v-model:visible="visible"
    v-model="visible"
    width="850px"
    :footer="null"
  >
    <Tabs
      v-model="activeTab"
      v-model:activeKey="activeTab"
    >
      <TabPane
        key="动作配置"
        title="动作配置"
        tab="动作配置"
        label="动作配置"
        name="动作配置"
      >
        <div class="k-modal-action-main">
          <div class="k-modal-left-panel">
            <div
              class="fun-btn"
              :class="{ checked: state.actionItem.componentId === null }"
              @click="toggleMethod"
            >
              函数
            </div>
            组件
            <KTree
              v-model:selectedKeys="selectedKeys"
              :options="schemas"
              @node-click="handleNodeClick"
            />
          </div>
          <div class="k-modal-right-panel">
            <div class="select-box">
              <span>动作选择</span>
              <Select
                v-model="state.actionItem.methodName"
                v-model:value="state.actionItem.methodName"
                class="action-select"
                placeholder="请选择动作"
                :options="methodOptions"
              />
              <Button
                v-if="state.actionItem.componentId === null"
                @click="handleAddMethod"
              >
                编辑函数
              </Button>
            </div>
          </div>
        </div>
      </TabPane>
      <TabPane
        key="脚本编辑"
        title="脚本编辑"
        tab="脚本编辑"
        label="脚本编辑"
        name="脚本编辑"
      >
        <KScriptEdit />
      </TabPane>
    </Tabs>
    <div class="k-modal-footer">
      <Button @click="handleClose">
        关闭
      </Button>
      <Button
        type="primary"
        :disabled="!state.actionItem.methodName"
        @click="handleSave"
      >
        保存
      </Button>
    </div>
  </Modal>
</template>
<script lang="ts" setup>
import { pluginManager, PageManager, deepClone } from '../../../../index'
import { ref, Ref, inject, toRaw, reactive, computed, nextTick } from 'vue'
import KTree from '../../../../../components/KTree'
import KScriptEdit from './KScriptEdit.vue'
import { NodeItem, FormDataModel } from '../../../../../types/kDesigner'
const Modal = pluginManager.getComponent('Modal')
const Select = pluginManager.getComponent('select')
const Button = pluginManager.getComponent('button')
const Tabs = pluginManager.getComponent('Tabs')
const TabPane = pluginManager.getComponent('TabPane')
const schemas = inject('schemas') as Ref<NodeItem[]>
const pageManager = inject('pageManager', {}) as PageManager
const visible = ref(false)
const selectedKeys = ref([])
const nodeItem = ref<NodeItem | null>(null)
const activeTab = ref('动作配置')

const emit = defineEmits(['add'])

const methodOptions = computed(() => {
  if (nodeItem.value) {
    return pluginManager.getComponentConfings()[nodeItem.value!.type].config.action?.map(item => ({ label: item.describe, value: item.type }))
  }

  return Object.entries(pageManager.funcs.value)
    .filter(([key, value]) => typeof value === 'function')
    .map(([label]) => ({ label, value: label }))
})

const state = reactive({
  actionItem: {
    methodName: null,
    componentId: null
  } as FormDataModel
})

function handleOpen () {
  visible.value = true
  nextTick(() => {
    state.actionItem.methodName = null
    state.actionItem.componentId = null
    nodeItem.value = null
  })
}

function handleSave () {
  if (!state.actionItem.methodName) {
    alert('请先选择动作方法')
    return
  }
  emit('add', deepClone(toRaw(state.actionItem)))
  handleClose()
}

function handleClose () {
  visible.value = false
  selectedKeys.value = []
}

function toggleMethod () {
  state.actionItem.componentId = null
  state.actionItem.methodName = null
  nodeItem.value = null
  selectedKeys.value = []
}
function handleNodeClick (e: any) {
  state.actionItem.componentId = e.id
  nodeItem.value = e.record
  state.actionItem.methodName = null
}

function handleAddMethod () {
  activeTab.value = '脚本编辑'
}

defineExpose({
  handleOpen
})

</script>
