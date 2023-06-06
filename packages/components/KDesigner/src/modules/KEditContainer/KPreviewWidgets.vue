<template>
  <div v-show="designer.state.checkedNode?.id !== 'root'">
    <div
      ref="selectorRef"
      class="item checked absolute transition-all pointer-events-none z-1200"
    >
      <div class="action-box">
        <div class="action-item">
          {{ pluginManager.getComponentConfingByType(designer.state.checkedNode?.type ?? '')?.defaultSchema.label }}
        </div>
        <div
          title="复制"
          class="action-item pointer-events-auto"
          @click="handleCopy"
        >
          <span class="iconfont icon-fuzhi3" />
        </div>
        <div
          title="删除"
          class="action-item pointer-events-auto"
          @click="handleDelete"
        >
          <span class="iconfont icon-shanchu1" />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { PageSchema, Designer } from '../../../../../types/kDesigner'
import { inject, computed, ref, onMounted, watch, type ComponentPublicInstance } from 'vue'
import { pluginManager, getUUID, deepClone, revoke, findSchemaById, type PageManager } from '../../../../../utils/index'

const pageManager = inject('pageManager', {}) as PageManager
const pageSchema = inject('pageSchema') as PageSchema
const designer = inject('designer') as Designer

const selectorRef = ref()
let rangeTop = 0; let rangeLeft = 0; let rangeDom: HTMLBaseElement | null = null
onMounted(() => {
  rangeDom = document.querySelector('.k-edit-range')

  if (rangeDom) {
    const { top, left } = rangeDom.getBoundingClientRect()
    rangeTop = top
    rangeLeft = left
  }
})

/**
 * 设置选择部件 样式 定位 宽高
 */
function setSeletorStyle () {
  const element = getComponentElement.value
  let scrollTop = 0
  let scrollLeft = 0
  let isScroll = false

  if (!element) return

  // 判断rangeDom是否存在，存在则获取相应属性
  if (rangeDom) {
    scrollTop = rangeDom.scrollTop
    scrollLeft = rangeDom.scrollLeft
    isScroll = rangeDom.scrollHeight > rangeDom.clientHeight
  }
  const { top, left, width, height } = element.getBoundingClientRect?.() ?? element.nextElementSibling?.getBoundingClientRect()

  // 计算选择器部件位置
  let selectorTop = top - rangeTop + scrollTop
  const selectorLeft = left - rangeLeft + scrollLeft
  // 判断是否出现滚动条，出现滚动条则需要增加15px
  if (isScroll) {
    selectorTop += 15
  }
  selectorRef.value.style = `width:${width}px;height:${height}px;top:${selectorTop}px;left:${selectorLeft}px;`
}

/**
 * 获取组件dom元素
 */
const getComponentElement = computed<HTMLBaseElement | null>(() => {
  const componentInstances = pageManager.componentInstances.value
  const id = designer.state.checkedNode?.id
  const componentConfing = pluginManager.getComponentConfingByType(designer.state.checkedNode?.type!) ?? null
  if (!id || !componentInstances?.[id]) {
    return null
  }
  if (componentConfing?.defaultSchema.input && designer.state.checkedNode?.noFormItem !== true) {
    return componentInstances[id + 'formItem']?.$el
  }
  const componentInstance = componentInstances[id]
  return componentInstance?.$el
})

const MutationObserver = window.MutationObserver
const ResizeObserver = window.ResizeObserver

const DocumentObserverConfig = {
  childList: true,
  attributes: true,
  subtree: true
}

// 初始化观察者实例
const mutationObserver = new MutationObserver(setSeletorStyle)
const resizeObserver = new ResizeObserver(setSeletorStyle)

watch(() => getComponentElement.value, (e) => {
  if (e) {
    // 监听dom元素及子元素的变化
    mutationObserver.observe(e, DocumentObserverConfig)
    // 监听元素视窗变化
    resizeObserver.observe(e)
    setSeletorStyle()
  }
})

/**
 * 复制选中节点元素
 */
function handleCopy () {
  const data = findSchemaById(pageSchema.schemas, designer.state.checkedNode?.id ?? 'root')
  if (!data) {
    return false
  }
  const { list, schema, index } = data
  const node = deepClone({
    ...schema,
    id: getUUID()
  })
  list.splice(index + 1, 0, node)
  const nodeArray = node.children ? [...node.children] : []
  // 存在子节点时，需要遍历修改子节点id
  while (nodeArray.length > 0) {
    const item = nodeArray.pop()
    item.id = getUUID()
    if (item.children?.length > 0) {
      nodeArray.push(...item.children)
    }
  }
  designer.setCheckedNode(node)

  revoke.push(pageSchema.schemas, '复制组件')
}

/**
 * 删除元素
 */
function handleDelete () {
  const data = findSchemaById(pageSchema.schemas, designer.state.checkedNode?.id ?? 'root')
  if (!data) {
    return false
  }
  let { list, schema: _schema, index } = data
  list.splice(index, 1)
  if (index === list.length) {
    index--
  }
  designer.setCheckedNode(list[index])
  revoke.push(pageSchema.schemas, '删除组件')
}

</script>
