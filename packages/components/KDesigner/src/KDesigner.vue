<template>
  <Suspense @resolve="handleReady">
    <template #default>
      <div class="k-designer-main">
        <KHeader @save="handleSave" />
        <div class="k-split-view-container">
          <KActionBar />
          <KEditContainer />
          <KRightSidebar />
        </div>
        <KFooter />
      </div>
    </template>
    <template #fallback>
      <div class="loading-box">
        <KAsyncLoader />
      </div>
    </template>
  </Suspense>
</template>
<script lang="ts" setup>
import { provide, reactive, toRaw, ref, watch, nextTick } from 'vue'
import { DesignerState, NodeItem, FormDataModel, PageSchema } from '../../../types/kDesigner'
import { getMatchedById, loadAsyncComponent, revoke, usePageManager, deepCompareAndModify } from '../../../utils/index'

const KHeader = loadAsyncComponent(() => import('./modules/KHeader/KHeader.vue'))
const KActionBar = loadAsyncComponent(() => import('./modules/KActionBar/KActionBar.vue'))
const KEditContainer = loadAsyncComponent(() => import('./modules/KEditContainer/KEditContainer.vue'))
const KRightSidebar = loadAsyncComponent(() => import('./modules/KRightSidebar/KRightSidebar.vue'))
const KFooter = loadAsyncComponent(() => import('./modules/KFooter/KFooter.vue'))
const KAsyncLoader = loadAsyncComponent(() => import('../../KAsyncLoader/KAsyncLoader.vue'))
const pageManager = usePageManager()
const emit = defineEmits(['ready', 'save'])

const state = reactive<DesignerState>({
  checkedNode: null,
  hoverNode: null,
  disableHover: false,
  matched: []
})
const schemas = ref<NodeItem[]>([])
const script = ref('')
const formData = reactive<FormDataModel>({})

watch(() => script.value, e => {
  pageManager.setMethods(e)
})
script.value =
  `const { defineExpose, getComponent } = this;

function test (){
    console.log('test')
}

// 通过defineExpose暴露的函数或者属性
defineExpose({
 test 
})`

provide('schemas', schemas)
provide('script', script)
provide('formData', formData)
provide('pageManager', pageManager)

const rootSchema = {
  type: 'page',
  id: 'root',
  children: [],
  componentProps: {
    style: {
      padding: '16px'
    }
  }
}

function init () {
  // 添加根节点
  schemas.value.push(rootSchema)
  // 选中根节点
  setCheckedNode(rootSchema)
  revoke.push(schemas.value, '初始化撤销功能')
}

provide('designer', {
  setCheckedNode,
  setHoverNode,
  setDisableHover,
  state
})

/**
 * 选中节点
 * @param schema
 */
async function setCheckedNode (schema: NodeItem = rootSchema) {
  state.checkedNode = schema
  state.matched = getMatchedById(schemas.value, schema.id!)
}

/**
 * 设置悬停节点
 * @param schema
 */
async function setHoverNode (schema: NodeItem | null = null) {
  if (!schema || state.disableHover) {
    state.hoverNode = null
    return false
  }
  if (schema?.id === state.hoverNode?.id) {
    return false
  }
  // console.log(schema?.id)
  state.hoverNode = schema
}

/**
 * 组件（包含异步组件）加载完成后
 */
function handleReady () {
  // 等待DOM更新循环结束后
  nextTick(() => {
    emit('ready', { pageManager })
  })
}

/**
 * 设置hover状态
 * @param disableHover
 */
async function setDisableHover (disableHover = false) {
  state.disableHover = disableHover
}

/**
 * 接受一个PageSchema对象作为参数。根据传入的schemas和script属性，更新页面对应的数据
 * @param pageSchema
 */
function setData (pageSchema: PageSchema) {
  // 调用 deepCompareAndModify 函数比较 schemas.value 和传入的 schemas，进行修改
  deepCompareAndModify(schemas.value, pageSchema.schemas)

  // 更新 script.value
  script.value = pageSchema.script
}

/**
 * 返回当前页面数据的 PageSchema 对象，包含页面当前的 schemas 和 script 数据。
 */
function getData (): PageSchema {
  // 返回一个对象，包含当前 schemas 对象的普通对象表示和当前 script 的值
  return {
    schemas: toRaw(schemas.value), // 将响应式对象 schemas 转换为普通对象
    script: script.value // 返回脚本的值
  }
}

/**
 * 保存数据
 */
function handleSave () {
  emit('save', { schemas: toRaw(schemas.value), script: script.value })
}

init()

defineExpose({
  setData,
  getData
})
</script>
