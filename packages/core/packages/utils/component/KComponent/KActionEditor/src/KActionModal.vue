<template>
  <Modal v-model="visible" class="w-1000px" width="1000px" @close="handleClose" @ok="handleSave" title="动作配置">
    <div class="rounded bg-white k-modal-action-main">
      <div class="k-modal-left-panel h-full flex flex-col">
        <!-- 动作所属对象 start -->
        <div class="flex-1">
          <div class="fun-btn" :class="{ checked: state.actionItem.type === 'public' }" @click="toggleMethod('public')">
            公共函数
          </div>
          <div class="fun-btn" :class="{ checked: state.actionItem.type === 'custom' }" @click="toggleMethod('custom')">
            自定义函数
          </div>
          组件
          <div class="h-360px overflow-auto">
            <KTree v-model:selectedKeys="selectedKeys" :options="pageSchema.schemas" @node-click="handleNodeClick" />
          </div>
        </div>
        <!-- 动作选择 start -->
        <div class="k-action-select h-240px flex flex-col">
          <div class="mb-2">动作选择</div>
          <div class="flex-1 overflow-auto">
            <div v-for="item in methodOptions" :class="{ checked: item.value === state.actionItem.methodName }"
              @click="handleCheckedMethod(item.value)" :key="item.value" class="action-item">
              <span>{{ item.label }}</span>
            </div>
          </div>
        </div>
        <!-- 动作所属对象 end -->
        <!-- 动作选择 end -->
      </div>
      <!-- 动作配置 start -->
      <div class="k-modal-right-panel">
        <div class="select-box">
          <!-- <span>动作选择</span>
          <Select v-model="state.actionItem.methodName" v-model:value="state.actionItem.methodName" class="action-select"
            placeholder="请选择动作" :options="methodOptions" /> -->
          <!-- <Button v-if="state.actionItem.componentId === null" @click="handleAddMethod">
            编辑函数
          </Button> -->
        </div>
      </div>
      <!-- 动作配置 end -->

    </div>
  </Modal>
</template>
<script lang="ts" setup>
import { pluginManager, PageManager, deepClone } from '@k-designer/utils'
import { ref, inject, toRaw, reactive, computed, nextTick } from 'vue'
import KTree from '../../../../../components/KTree'
import { NodeItem, PageSchema, FormDataModel } from '../../../../../types/kDesigner'
const Modal = pluginManager.getComponent('modal')
// const Select = pluginManager.getComponent('select')
// const Button = pluginManager.getComponent('button')
const isAdd = ref(true)

const pageSchema = inject('pageSchema') as PageSchema
const pageManager = inject('pageManager', {}) as PageManager
const visible = ref(false)
const selectedKeys = ref([])
const nodeItem = ref<NodeItem | null>(null)
// const activeTab = ref('动作配置')

const emit = defineEmits(['add', 'edit'])

const methodOptions = computed(() => {

  // 组件动作列表
  if (state.actionItem.type === 'component') {
    return pluginManager.getComponentConfings()[nodeItem.value!.type].config.action?.map(item => ({ label: item.describe, value: item.type }))
  }

  // 自定义函数列表
  if (state.actionItem.type === 'custom') {
    return Object.entries(pageManager.funcs.value)
      .filter(([_key, value]) => typeof value === 'function')
      .map(([label]) => ({ label, value: label }))
  }

  // 公共函数列表
  if (state.actionItem.type === 'public') {
    return Object.entries(pluginManager.publicMethods)
      .map(([label]) => ({ label, value: label }))
  }

  return []
})

const state = reactive({
  actionItem: {
    type: 'public',
    methodName: 'test',
    componentId: null,
  } as FormDataModel
})

function handleOpen() {
  visible.value = true
  isAdd.value = true
  state.actionItem.type = 'public'
  state.actionItem.componentId = null
  if (methodOptions.value?.length) {
    handleCheckedMethod(methodOptions.value[0].value)
  }

}
function handleOpenEdit(action: any) {
  visible.value = true
  isAdd.value = false
  nextTick(() => {
    state.actionItem.methodName = action.methodName
    state.actionItem.componentId = action.componentId
    state.actionItem.type = action.type
    nodeItem.value = null
  })
}
function handleSave() {
  if (!state.actionItem.methodName) {
    alert('请先选择动作方法')
    return
  }
  emit(isAdd.value ? 'add' : 'edit', deepClone(toRaw(state.actionItem)))
  handleClose()
}

function handleClose() {
  visible.value = false
  selectedKeys.value = []
}

function toggleMethod(type: string) {
  state.actionItem.componentId = null
  state.actionItem.type = type
  nodeItem.value = null
  state.actionItem.methodName = null

  selectedKeys.value = []
  if (methodOptions.value?.length) {
    handleCheckedMethod(methodOptions.value[0].value)
  }
}
function handleNodeClick(e: any) {
  state.actionItem.componentId = e.id
  state.actionItem.type = 'component'
  state.actionItem.methodName = null
  nodeItem.value = e.record
  if (methodOptions.value?.length) {
    handleCheckedMethod(methodOptions.value[0].value)
  }
}

function handleCheckedMethod(value: string) {
  // activeTab.value = '脚本编辑'
  state.actionItem.methodName = value
}

defineExpose({
  handleOpen,
  handleOpenEdit
})

</script>
