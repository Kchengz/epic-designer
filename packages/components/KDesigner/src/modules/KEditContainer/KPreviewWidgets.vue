<template>
  <div
    v-show="showSelector && designer.state.checkedNode?.id !== 'root'"
    ref="selectorRef"
    class="checked-widget absolute transition-all pointer-events-none z-1000"
  >
    <div class="action-box">
      <div class="action-item">
        {{ designer.state.checkedNode?.type }}
        {{ designer.state.checkedNode?.label ?? pluginManager.getComponentConfingByType(designer.state.checkedNode?.type ?? '')?.defaultSchema.label }}
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
  <div
    v-show="showHover"
    ref="hoverWidgetRef"
    class="hover-widget absolute transition-all pointer-events-none z-998"
  />
</template>
<script lang="ts" setup>
import { PageSchema, Designer } from '../../../../../types/kDesigner'
import { inject, computed, ref, onMounted, watch } from 'vue'
import { pluginManager, getUUID, deepClone, revoke, findSchemaById, type PageManager } from '../../../../../utils/index'
import { useResizeObserver } from '@vueuse/core'

const pageManager = inject('pageManager', {}) as PageManager
const pageSchema = inject('pageSchema') as PageSchema
const designer = inject('designer') as Designer

const selectorRef = ref()
const hoverWidgetRef = ref()
const showSelector = ref(false)
const showHover = ref(false)

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
 * 获取选中组件dom元素
 */
const getSelectComponentElement = computed<HTMLBaseElement | null>(() => {
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

/**
 * 获取悬停组件dom元素
 */
const getHoverComponentElement = computed<HTMLBaseElement | null>(() => {
  const componentInstances = pageManager.componentInstances.value
  const id = designer.state.hoverNode?.id
  const componentConfing = pluginManager.getComponentConfingByType(designer.state.hoverNode?.type!) ?? null
  if (!id || !componentInstances?.[id]) {
    return null
  }
  if (componentConfing?.defaultSchema.input && designer.state.hoverNode?.noFormItem !== true) {
    return componentInstances[id + 'formItem']?.$el
  }
  const componentInstance = componentInstances[id]
  return componentInstance?.$el
})

const { mutationObserver, observerConfig: DocumentObserverConfig } = initObserve(setSeletorStyle)

// 监听选中dom元素变化
watch(() => getSelectComponentElement.value, (selectComponentElement) => {
  if (selectComponentElement) {
    showSelector.value = true
    // 监听dom元素及子元素的变化
    mutationObserver.observe(selectComponentElement, DocumentObserverConfig)
    setSeletorStyle()
  } else {
    showSelector.value = false
  }
})
// 监听选中元素视窗变化
useResizeObserver(getSelectComponentElement, setSeletorStyle)

const { mutationObserver: hoverMutationObserver, observerConfig: hoverObserverConfig } = initObserve(setHoverStyle)

// 监听悬停dom元素变化
watch(() => getHoverComponentElement.value, (hoverComponentElement) => {
  if (hoverComponentElement) {
    // 监听dom元素及子元素的变化
    hoverMutationObserver.observe(hoverComponentElement, hoverObserverConfig)
    setHoverStyle()
  }
})
// 监听悬停元素视窗变化
useResizeObserver(getHoverComponentElement, setSeletorStyle)
// 添加悬停节点监听，当悬停节点消失超过300ms,则隐藏悬停部件
let hideTimer: NodeJS.Timeout | number = 0
watch(() => designer.state.hoverNode?.id, e => {
  showHover.value = true
  clearTimeout(hideTimer)
  if (e) return
  hideTimer = setTimeout(() => {
    showHover.value = false
  }, 300)
})

/**
 * 设置选择部件 样式 定位 宽高
 */
function setSeletorStyle () {
  const element = getSelectComponentElement.value
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

  if (selectorRef.value) {
    selectorRef.value.style.width = `${width}px`
    selectorRef.value.style.height = `${height}px`
    selectorRef.value.style.top = `${selectorTop}px`
    selectorRef.value.style.left = `${selectorLeft}px`
  }
}

/**
 * 设置悬停部件 样式 定位 宽高
 */
function setHoverStyle () {
  const element = getHoverComponentElement.value
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

  if (hoverWidgetRef.value) {
    hoverWidgetRef.value.style.width = `${width}px`
    hoverWidgetRef.value.style.height = `${height}px`
    hoverWidgetRef.value.style.top = `${selectorTop}px`
    hoverWidgetRef.value.style.left = `${selectorLeft}px`
  }
}

/**
 * 实例化观察者对象
 */
function initObserve (func: () => void) {
  const MutationObserver = window.MutationObserver

  const observerConfig = {
    childList: true,
    attributes: true,
    subtree: true
  }

  // 初始化观察者实例
  const mutationObserver = new MutationObserver(func)

  return {
    mutationObserver,
    observerConfig
  }
}

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
