<template>
  <Suspense>
    <template #default>
      <div class="k-designer-main">
        <KHeader />
        <div class="k-split-view-container">
          <!-- <ALoading /> -->
          <KActionBar />
          <KEditContainer />
          <KRightSidebar />
        </div>
        <KFooter />
      </div>
    </template>
    <template #fallback>
      <div class="loading">222222222</div>
    </template>
  </Suspense>
</template>
<script lang="ts" setup>
// import KHeader from './modules/KHeader/KHeader.vue'
// import KFooter from './modules/KFooter/KFooter.vue'
// import KRightSidebar from './modules/KAttributeView/KAttributeView.vue'
// import KEditContainer from './modules/KEditContainer/KEditContainer.vue'
// import KActionBar from './modules/KActionBar/KActionBar.vue'
import { provide, reactive, ref } from 'vue'
import { DesignerState, NodeItem, FormDataModel } from '../../../types/kDesigner'
import { getMatchedById, loadAsyncComponent, revoke } from '../../../utils/index'

const KHeader = loadAsyncComponent(() => import('./modules/KHeader/KHeader.vue'))
const KActionBar = loadAsyncComponent(() => import('./modules/KActionBar/KActionBar.vue'))
const KEditContainer = loadAsyncComponent(() => import('./modules/KEditContainer/KEditContainer.vue'))
const KRightSidebar = loadAsyncComponent(() => import('./modules/KRightSidebar/KRightSidebar.vue'))
// const KRightSidebar = loadAsyncComponent(() => import('./modules/KAttributeView/KAttributeView.vue'))
const KFooter = loadAsyncComponent(() => import('./modules/KFooter/KFooter.vue'))

const state = reactive<DesignerState>({
  checkedNode: null,
  hoverNode: null,
  disableHover: false,
  matched: []
})
const schemas = ref<NodeItem[]>([])

const formData = reactive<FormDataModel>({})
provide('schemas', schemas)
provide('formData', formData)
const rootSchema = {
  type: 'page',
  id: 'root',
  children: []
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
  console.log(schema?.id)
  state.hoverNode = schema
}

/**
 * 设置hover状态
 * @param disableHover
 */
async function setDisableHover (disableHover = false) {
  state.disableHover = disableHover
}

init()
</script>

<style lang="less">
@import './KDesigner.less';
</style>
