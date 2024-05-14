<template>
  <!-- 选中高亮 start  -->
  <div v-show="showSelector && designer.state.checkedNode?.id !== 'root'" ref="selectorRef"
    class="epic-checked-widget absolute pointer-events-none z-20"
    :class="selectorPosition + ' ' + (selectorTransition ? 'transition-all' : '')">
    <div class="epic-widget-action-box" ref="actionBoxRef">
      <div class="epic-widget-action-item whitespace-nowrap">
        <!-- {{ designer.state.checkedNode?.type }} -->
        {{ pluginManager.getComponentConfingByType(designer.state.checkedNode?.type
          ?? '')?.defaultSchema.label }}
      </div>
      <!-- 操作按钮 start  -->
      <div class="flex" v-if="isRemovableAndDraggable">
        <div title="复制" class="epic-widget-action-item pointer-events-auto" @click="handleCopy">
          <EIcon name="icon-fuzhi3" />
        </div>
        <div title="删除" class="epic-widget-action-item pointer-events-auto" @click="handleDelete">
          <EIcon name="icon-shanchu1" />
        </div>
      </div>
      <!-- 操作按钮 end  -->
    </div>
  </div>
  <!-- 选中高亮 end  -->
  <!-- 悬停效果 start  -->
  <div v-show="showHover && designer.state.checkedNode?.id !== designer.state.hoverNode?.id" ref="hoverWidgetRef"
    class="epic-hover-widget absolute transition-all pointer-events-none z-998" />
  <!-- 悬停效果 end  -->
</template>
<script lang="ts" setup>
import { DesignerProps } from '../../types'
import { PageSchema, Designer } from '../../../../../types/epic-designer'
import { inject, computed, ref, watch, type Ref } from 'vue'
import { pluginManager, generateNewSchema, revoke, findSchemaInfoById, useShareStore, useTimedQuery, type PageManager } from '@epic-designer/utils'
import { useResizeObserver } from '@vueuse/core'
import EIcon from '../../../../icon'
const pageManager = inject('pageManager', {}) as PageManager
const pageSchema = inject('pageSchema') as PageSchema
const designer = inject('designer') as Designer
const designerProps = inject('designerProps') as Ref<DesignerProps>


const selectorRef = ref<HTMLDivElement | null>(null)
const hoverWidgetRef = ref<HTMLDivElement | null>(null)
const actionBoxRef = ref<HTMLDivElement | null>(null)

const showSelector = ref(false)
const showHover = ref(false)
const selectorTransition = ref(true)


const selectorPosition = ref<'top' | 'center' | 'bottom'>('top')

const { canvasScale, disabledZoom } = useShareStore()

let kEditRange: HTMLDivElement | null = null

/**
 * 判断组件是否可移动和可拖拽删除
 */
const isRemovableAndDraggable = computed(() => {
  const schemas = designer.state.checkedNode
  // 没有id不可编辑
  if (!schemas?.id) return false
  // 判断当前节点类型是否允许拖拽删除
  if (designerProps.value.lockDefaultSchemaEdit && pageManager.defaultComponentIds.value.includes(schemas?.id)) {
    // 禁止拖拽删除
    return false
  }
  return true
})


/**
 * 获取选中组件dom元素
 */
const getSelectComponentElement = computed<HTMLBaseElement | null>(() => {
  const componentInstances = pageManager.componentInstances.value
  const id = designer.state.checkedNode?.id

  // 组件隐藏状态
  if (designer.state.checkedNode?.componentProps?.hidden) {
    return null
  }
  const componentConfing = pluginManager.getComponentConfingByType(designer.state.checkedNode?.type!) ?? null
  if (!id || !componentInstances?.[id]) {
    return null
  }
  if (componentConfing?.defaultSchema.input && designer.state.checkedNode?.noFormItem !== true) {
    return componentInstances[id + 'formItem']?.$el
  }
  const componentInstance = componentInstances[id]
  if (!componentInstance?.$el || componentInstance?.$el.nodeName === '#text' || !componentInstance?.$el.getBoundingClientRect) {
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
  if (e) {
    showHover.value = true
    clearTimeout(hideTimer)
    return
  }

  hideTimer = setTimeout(() => {
    showHover.value = false
  }, 300)
})



let oldScrollTop = 0
let oldScrollLeft = 0
/**
 * 设置选择部件 样式 定位 宽高
 */
function setSeletorStyle() {
  const element = getSelectComponentElement.value
  if (!element || !kEditRange) return

  const { top: offsetY, left: offsetX } = kEditRange?.getBoundingClientRect()

  const { top, left, width, height } = element.getBoundingClientRect()


  const scale = !disabledZoom.value ? canvasScale.value : 1
  // 计算选择器部件位置
  const selectorTop = top - offsetY + (kEditRange?.scrollTop ?? 0) * scale
  const selectorLeft = left - offsetX + (kEditRange?.scrollLeft ?? 0) * scale

  const selectorRefHeight = height / scale

  if (selectorRef.value) {
    selectorRef.value.style.width = `${width / scale}px`
    selectorRef.value.style.height = `${selectorRefHeight}px`
    selectorRef.value.style.top = `${selectorTop / scale}px`
    selectorRef.value.style.left = `${selectorLeft / scale}px`
    scrollIntoView(selectorTop, selectorLeft)

  }

  // 调整操作调位置 start
  // 判断actionBoxRef是否有值
  if (!actionBoxRef.value) {
    return
  }

  // 判断actionBoxRef位置是否应该置于底部 距离顶部45px 高度100px
  if (selectorTop < 45 && selectorRefHeight < 100) {
    actionBoxRef.value.style.top = ''
    actionBoxRef.value.style.bottom = '-30px'
    actionBoxRef.value.style['border-radius'] = '0px 0px 4px 4px'
    selectorPosition.value = 'bottom'

  } else if (selectorTop < 45) {
    // 判断actionBoxRef位置置于中间
    actionBoxRef.value.style.top = '0px'
    actionBoxRef.value.style['border-radius'] = '0px 0px 4px 0'
    selectorPosition.value = 'center'

  } else {
    // actionBoxRef位置置于顶部
    actionBoxRef.value.style.top = '-30px'
    actionBoxRef.value.style['border-radius'] = '4px 4px 0px 0px'
    selectorPosition.value = 'top'
  }
  // 调整操作调位置 end



}

/**
 * 滚动进入可视区
 */
function scrollIntoView(selectorTop: number, selectorLeft: number) {
  // 自动滚动到元素可视区域 start
  const element = getSelectComponentElement.value
  if (!kEditRange || !element) return
  // 获取两个元素的边界框信息
  const rect2 = kEditRange.getBoundingClientRect();
  const { width } = element.getBoundingClientRect()

  const scale = !disabledZoom.value ? canvasScale.value : 1

  // 使selectComponentElement位于可见区域内
  const newScrollTop = selectorTop / scale - rect2.top
  let newScrollLeft = selectorLeft / scale - rect2.left + width / scale
  newScrollLeft < rect2.width && (newScrollLeft = 0)
  const yMin = kEditRange.scrollTop - rect2.height / 3 + 60
  const yMax = kEditRange.scrollTop + rect2.height / 3 * 2
  const xMin = kEditRange.scrollLeft - rect2.width + 200
  const xMax = kEditRange.scrollLeft + rect2.width - 200

  // 判断定位误差是否小于10px，小于则不处理
  if (Math.abs(newScrollTop - oldScrollTop) < 10 && Math.abs(newScrollLeft - oldScrollLeft) < 10) return
  oldScrollTop = newScrollTop
  oldScrollLeft = newScrollLeft
  if (newScrollTop > yMin && newScrollTop < yMax && newScrollLeft > xMin && newScrollLeft < xMax) return

  kEditRange.scrollTop = newScrollTop;
  kEditRange.scrollLeft = newScrollLeft;
  // 自动滚动到元素可视区域 end
}

/**
 * 设置悬停部件 样式 定位 宽高
 */
function setHoverStyle() {
  const element = getHoverComponentElement.value

  if (!element) return
  const { top: offsetY, left: offsetX } = kEditRange?.getBoundingClientRect() ?? { top: 0, left: 0 }
  const { top, left, width, height } = element.getBoundingClientRect?.() ?? element.nextElementSibling?.getBoundingClientRect()
  const scale = !disabledZoom.value ? canvasScale.value : 1

  // 计算选择器部件位置
  const hoverTop = top - offsetY + (kEditRange?.scrollTop ?? 0) * scale
  const hoverLeft = left - offsetX + (kEditRange?.scrollLeft ?? 0) * scale

  if (hoverWidgetRef.value) {
    hoverWidgetRef.value.style.width = `${width / scale}px`
    hoverWidgetRef.value.style.height = `${height / scale}px`
    hoverWidgetRef.value.style.top = `${hoverTop / scale}px`
    hoverWidgetRef.value.style.left = `${hoverLeft / scale}px`
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
  const data = findSchemaInfoById(pageSchema.schemas, designer.state.checkedNode?.id ?? 'root')
  if (!data) {
    return false
  }
  const { list, schema, index } = data
  const node = generateNewSchema(schema)
  list.splice(index + 1, 0, node)
  designer.setCheckedNode(node)

  revoke.push(pageSchema.schemas, '复制组件')
}

/**
 * 删除元素
 */
function handleDelete() {
  const data = findSchemaInfoById(pageSchema.schemas, designer.state.checkedNode?.id ?? 'root')
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

// 初始化函数，传入一个指向 Epic 编辑范围的引用
function handleInit(epicEditRangeRef) {
  kEditRange = epicEditRangeRef
  kEditRange?.addEventListener('scroll', () => {
    setSeletorStyle()
  })

  // 监听选中元素视窗变化
  useResizeObserver(getSelectComponentElement, setSeletorStyle)
  // 监听悬停元素视窗变化
  useResizeObserver(getHoverComponentElement, setHoverStyle)
}


defineExpose({
  handleInit
})

</script>
