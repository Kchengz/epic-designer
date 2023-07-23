<template>
  <div v-show="showSelector && designer.state.checkedNode?.id !== 'root'" ref="selectorRef"
    class="checked-widget absolute pointer-events-none z-20" :class="{ 'transition-all': selectorTransition }">
    <div class="action-box" ref="actionBoxRef">
      <div class="action-item whitespace-nowrap">
        {{ designer.state.checkedNode?.type }}
        {{ designer.state.checkedNode?.label ?? pluginManager.getComponentConfingByType(designer.state.checkedNode?.type
          ?? '')?.defaultSchema.label }}
      </div>
      <div title="复制" class="action-item pointer-events-auto" @click="handleCopy">
        <span class="iconfont icon-fuzhi3" />
      </div>
      <div title="删除" class="action-item pointer-events-auto" @click="handleDelete">
        <span class="iconfont icon-shanchu1" />
      </div>
    </div>
  </div>
  <div v-show="showHover" ref="hoverWidgetRef" class="hover-widget absolute transition-all pointer-events-none z-998" />
</template>
<script lang="ts" setup>
import { PageSchema, Designer } from '../../../../../types/epic-designer'
import { inject, computed, ref, onMounted, watch } from 'vue'
import { pluginManager, getUUID, deepClone, revoke, findSchemaById, useShareStore, useTimedQuery, type PageManager } from '@epic-designer/utils'
import { useResizeObserver } from '@vueuse/core'

const pageManager = inject('pageManager', {}) as PageManager
const pageSchema = inject('pageSchema') as PageSchema
const designer = inject('designer') as Designer

const selectorRef = ref<HTMLDivElement | null>(null)
const hoverWidgetRef = ref<HTMLDivElement | null>(null)
const actionBoxRef = ref<HTMLDivElement | null>(null)

const showSelector = ref(false)
const showHover = ref(false)
const selectorTransition = ref(true)

const { canvasScale } = useShareStore()

let kEditRange: HTMLDivElement | null = null

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
  if (componentInstance?.$el?.nodeName === '#text') {
    return null
  }
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
  if (componentInstance?.$el.nodeName === '#text') {
    return null
  }
  return componentInstance?.$el
})

const { mutationObserver, observerConfig: DocumentObserverConfig } = initObserve(setSeletorStyle)

const { startTimedQuery, stopTimedQuery } = useTimedQuery(setSeletorStyle)

// 监听选中dom元素变化
watch(() => getSelectComponentElement.value, (selectComponentElement) => {
  if (selectComponentElement) {
    showSelector.value = true
    // 监听dom元素及子元素的变化
    mutationObserver.observe(selectComponentElement, DocumentObserverConfig)


    const parentNode = selectComponentElement.parentNode as HTMLBaseElement

    if (parentNode) {
      parentNode.ondragstart = () => {
        selectorTransition.value = false
        startTimedQuery()
      }
      parentNode.ondragend = () => {
        selectorTransition.value = true
        stopTimedQuery()
      }

    }
    setSeletorStyle()
  } else {
    showSelector.value = false
  }
})


const { mutationObserver: hoverMutationObserver, observerConfig: hoverObserverConfig } = initObserve(setHoverStyle)

// 监听悬停dom元素变化
watch(() => getHoverComponentElement.value, (hoverComponentElement) => {
  if (hoverComponentElement) {
    // 监听dom元素及子元素的变化
    hoverMutationObserver.observe(hoverComponentElement, hoverObserverConfig)
    setHoverStyle()
  }
})


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
function setSeletorStyle() {
  const element = getSelectComponentElement.value
  if (!element) return

  const { top: offsetY, left: offsetX } = kEditRange?.getBoundingClientRect() ?? { top: 0, left: 0 }

  const { top, left, width, height } = element.getBoundingClientRect()

  // 计算选择器部件位置
  const selectorTop = top - offsetY + (kEditRange?.scrollTop ?? 0) * canvasScale.value
  const selectorLeft = left - offsetX + (kEditRange?.scrollLeft ?? 0) * canvasScale.value

  const selectorRefHeight = height / canvasScale.value

  if (selectorRef.value) {
    selectorRef.value.style.width = `${width / canvasScale.value}px`
    selectorRef.value.style.height = `${selectorRefHeight}px`
    selectorRef.value.style.top = `${selectorTop / canvasScale.value}px`
    selectorRef.value.style.left = `${selectorLeft / canvasScale.value}px`
  }

  // 调整操作调位置 start
  // 判断actionBoxRef是否有值
  if (!actionBoxRef.value) {
    return
  }

  // 判断actionBoxRef位置是否置于底部
  if (selectorTop < 45 && selectorRefHeight < 100) {
    actionBoxRef.value.style.top = ''
    actionBoxRef.value.style.bottom = '-30px'
    actionBoxRef.value.style['border-radius'] = '0px 0px 4px 4px'

  } else if (selectorTop < 45) {
    // 判断actionBoxRef位置置于中间
    actionBoxRef.value.style.top = '0px'
    actionBoxRef.value.style['border-radius'] = '0px 0px 4px 0'
  } else {
    // actionBoxRef位置置于顶部
    actionBoxRef.value.style.top = '-30px'
    actionBoxRef.value.style['border-radius'] = '4px 4px 0px 0px'
  }
  // 调整操作调位置 end


}

/**
 * 设置悬停部件 样式 定位 宽高
 */
function setHoverStyle() {
  const element = getHoverComponentElement.value

  if (!element) return
  const { top: offsetY, left: offsetX } = kEditRange?.getBoundingClientRect() ?? { top: 0, left: 0 }
  const { top, left, width, height } = element.getBoundingClientRect?.() ?? element.nextElementSibling?.getBoundingClientRect()

  // 计算选择器部件位置
  const hoverTop = top - offsetY + (kEditRange?.scrollTop ?? 0) * canvasScale.value
  const hoverLeft = left - offsetX + (kEditRange?.scrollLeft ?? 0) * canvasScale.value

  if (hoverWidgetRef.value) {
    hoverWidgetRef.value.style.width = `${width / canvasScale.value}px`
    hoverWidgetRef.value.style.height = `${height / canvasScale.value}px`
    hoverWidgetRef.value.style.top = `${hoverTop / canvasScale.value}px`
    hoverWidgetRef.value.style.left = `${hoverLeft / canvasScale.value}px`
  }
}

/**
 * 实例化观察者对象
 */
function initObserve(func: () => void) {
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
function handleCopy() {
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
function handleDelete() {
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

onMounted(() => {
  kEditRange = document.querySelector('.epic-edit-range')

  kEditRange?.addEventListener('scroll', () => {
    setSeletorStyle()
  })

  // 监听选中元素视窗变化
  useResizeObserver(getSelectComponentElement, setSeletorStyle)
  // 监听悬停元素视窗变化
  useResizeObserver(getHoverComponentElement, setSeletorStyle)
})

</script>
