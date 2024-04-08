<template>
  <div class="loading-box" v-if="!pluginManager.initialized.value">
    <!-- <EAsyncLoader /> -->
  </div>
  <Suspense v-else @resolve="handleReady">
    <template #default>
      <div class="epic-designer-main">
        <div class="epic-header-container">
          <slot name="header">
            <EHeader v-if="!props.hiddenHeader" @save="handleSave">
              <template #header>
                <slot name="header-prefix"></slot>
              </template>

              <template #prefix>
                <slot name="header-prefix"></slot>
              </template>
              <template #title>
                <slot name="header-title"></slot>
              </template>
              <template #right-prefix>
                <slot name="header-right-prefix"></slot>
              </template>
              <template #right-action>
                <slot name="header-right-action"></slot>
              </template>
              <template #right-suffix>
                <slot name="header-right-suffix"></slot>
              </template>
            </EHeader>
          </slot>
        </div>
        <div class="epic-split-view-container" :class="{ 'hidden-header': hiddenHeader }">
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
import { DesignerState, ComponentSchema, PageSchema } from '../../../types/epic-designer'
import { getMatchedById, loadAsyncComponent, revoke, usePageManager, pluginManager, deepCompareAndModify, deepEqual, deepClone } from '@epic-designer/utils'
import { DesignerProps } from './types'
import { useShareStore } from '@epic-designer/utils'


const EHeader = loadAsyncComponent(() => import('./modules/header/index.vue'))
const EActionBar = loadAsyncComponent(() => import('./modules/actionBar/index.vue'))
const EEditContainer = loadAsyncComponent(() => import('./modules/editContainer/index.vue'))
const ERightSidebar = loadAsyncComponent(() => import('./modules/rightSidebar/index.vue'))
const EAsyncLoader = loadAsyncComponent(() => import('../../asyncLoader/index.vue'))
const pageManager = usePageManager()
// 设置为设计模式
pageManager.setDesignMode()

const props = withDefaults(defineProps<DesignerProps>(), {
  disabledZoom: false,
  hiddenHeader: false,
  defaultSchema: () => ({
    schemas: [{
      type: 'page',
      id: 'root',
      label: '页面',
      children: [],
      componentProps: {
        style: {
          padding: '16px'
        }
      }
    }],
    script: `const { defineExpose, find } = epic;

function test (){
    console.log('test')
}

// 通过defineExpose暴露的函数或者属性
defineExpose({
 test 
})`
  })
})

const emits = defineEmits(['ready', 'save', 'reset'])

const state = reactive<DesignerState>({
  checkedNode: null,
  hoverNode: null,
  disableHover: false,
  matched: []
})

const pageSchema = reactive<PageSchema>({
  schemas: [],
  script: props.defaultSchema.script
})

// 记录缩放状态 start
const { disabledZoom } = useShareStore()
watch(() => props.disabledZoom, newVal => {
  disabledZoom.value = newVal
}, {
  immediate: true
})
// 记录缩放状态 end

watch(() => pageSchema.script, e => {
  if (e && e !== '') {
    pageManager.setMethods(e)
  }
})

provide('pageSchema', pageSchema)
provide('pageManager', pageManager)
provide('designerProps', props)


provide('designer', {
  setCheckedNode,
  setHoverNode,
  setDisableHover,
  reset,
  state
})

function init() {
  // 初始化默认节点
  pageSchema.schemas = deepClone(props.defaultSchema.schemas)

  // 选中根节点
  setCheckedNode(pageSchema.schemas[0])
  revoke.push(pageSchema.schemas, '初始化撤销功能')
}


/**
 * 选中节点
 * @param schema
 */
async function setCheckedNode(schema: ComponentSchema = pageSchema.schemas[0]) {
  state.checkedNode = schema
  state.matched = getMatchedById(pageSchema.schemas, schema.id!)
}

/**
 * 设置悬停节点
 * @param schema
 */
async function setHoverNode(schema: ComponentSchema | null = null) {
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
    emits('ready', { pageManager })
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
  // 判断数据是否已修改，如果未修改，则取消重置操作
  if (deepEqual(pageSchema.schemas, props.defaultSchema.schemas) && pageSchema.script === props.defaultSchema.script) return
  
  // 调用 deepCompareAndModify 函数比较 pageSchema.schemas 和 props.defaultSchema.schemas，进行修改
  deepCompareAndModify(pageSchema.schemas, props.defaultSchema.schemas)
  // 更新 script.value
  pageSchema.script = props.defaultSchema.script
  // 选中根节点
  setCheckedNode(pageSchema.schemas[0])
  revoke.push(pageSchema.schemas, '重置操作')
  
  emits('reset', pageSchema)
}

/**
 * 保存数据
 */
function handleSave() {
  emits('save', toRaw(pageSchema))
}

init()

defineExpose({
  setData,
  getData,
  reset
})
</script>
