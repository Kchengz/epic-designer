<template>
  <Suspense @resolve="handleReady">
    <template #default>
      <div class="epic-designer-main">
        <EHeader @save="handleSave">
          <template #prefix>
            <slot name="header-prefix"></slot>
          </template>
          <template #title>
            <slot name="header-title"></slot>
          </template>
          <template #suffix>
            <slot name="header-suffix"></slot>
          </template>
        </EHeader>
        <div class="epic-split-view-container">
          <EActionBar />
          <EEditContainer />
          <ERightSidebar />
        </div>
      </div>
    </template>
    <template #fallback>
      <div class="loading-box">
        <EAsyncLoader />
      </div>
    </template>
  </Suspense>
</template>
<script lang="ts" setup>
import { provide, reactive, toRaw, watch, nextTick } from 'vue'
import { DesignerState, NodeItem, FormDataModel, PageSchema } from '../../../types/epic-designer'
import { getMatchedById, loadAsyncComponent, revoke, usePageManager, deepCompareAndModify, deepClone } from '@epic-designer/utils'

const EHeader = loadAsyncComponent(() => import('./modules/header/index.vue'))
const EActionBar = loadAsyncComponent(() => import('./modules/actionBar/index.vue'))
const EEditContainer = loadAsyncComponent(() => import('./modules/editContainer/index.vue'))
const ERightSidebar = loadAsyncComponent(() => import('./modules/rightSidebar/index.vue'))
const EAsyncLoader = loadAsyncComponent(() => import('../../asyncLoader/index.vue'))
const pageManager = usePageManager()
const emit = defineEmits(['ready', 'save'])

const state = reactive<DesignerState>({
  checkedNode: null,
  hoverNode: null,
  disableHover: false,
  matched: []
})

const pageSchema = reactive<PageSchema>({
  schemas: [],
  script: ''
})
const formData = reactive<FormDataModel>({})

watch(() => pageSchema.script, e => {
  if (e && e !== '') {
    pageManager.setMethods(e)
  }
})

const defaultSchemas = [{
  type: 'page',
  id: 'root',
  children: [],
  componentProps: {
    style: {
      padding: '16px'
    }
  }
}]

const defaultScript = `const { defineExpose, getComponent } = this;

function test (){
    console.log('test')
}

// 通过defineExpose暴露的函数或者属性
defineExpose({
 test 
})`

pageSchema.script = defaultScript

provide('pageSchema', pageSchema)
provide('formData', formData)
provide('pageManager', pageManager)

function init() {
  // 初始化默认节点
  pageSchema.schemas = deepClone(defaultSchemas)

  // 选中根节点
  setCheckedNode(pageSchema.schemas[0])
  revoke.push(pageSchema.schemas, '初始化撤销功能')
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
async function setCheckedNode(schema: NodeItem = pageSchema.schemas[0]) {
  state.checkedNode = schema
  state.matched = getMatchedById(pageSchema.schemas, schema.id!)
}

/**
 * 设置悬停节点
 * @param schema
 */
async function setHoverNode(schema: NodeItem | null = null) {
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
function handleReady() {
  // 等待DOM更新循环结束后
  nextTick(() => {
    emit('ready', { pageManager })
  })
}

/**
 * 设置hover状态
 * @param disableHover
 */
async function setDisableHover(disableHover = false) {
  state.disableHover = disableHover
}

/**
 * 接受一个PageSchema对象作为参数。根据传入的schemas和script属性，更新页面对应的数据
 * @param pageSchema
 */
function setData(schema: PageSchema) {
  // 调用 deepCompareAndModify 函数比较 pageSchema 和传入的 schema，进行修改
  deepCompareAndModify(pageSchema, schema)
}

/**
 * 返回当前页面数据的 PageSchema 对象，包含页面当前的 schemas 和 script 数据。
 */
function getData(): PageSchema {
  // 返回一个对象，包含当前 schemas 对象的普通对象表示和当前 script 的值
  return toRaw(pageSchema)
}

/**
 * 重置页面数据为默认数据。
 */
function reset() {
  // 调用 deepCompareAndModify 函数比较 pageSchema.schemas 和 defaultSchemas，进行修改

  deepCompareAndModify(pageSchema.schemas, defaultSchemas)
  // 更新 script.value
  pageSchema.script = defaultScript
  // 选中根节点
  setCheckedNode(pageSchema.schemas[0])
  revoke.push(pageSchema.schemas, '重置操作')
}

/**
 * 保存数据
 */
function handleSave() {
  emit('save', toRaw(pageSchema))
}

init()

defineExpose({
  setData,
  getData,
  reset
})
</script>
