<template>
  <div class="h-full flex flex-col relative">
    <div
      ref="editScreenContainerRef"
      class="flex-1 overflow-auto k-edit-screen-container"
      :class="{ 'cursor-grab': pressSpace }"
      :draggable="pressSpace"
      @wheel="handleZoom"
      @dragstart="handleElementDragStart"
      @dragend="handleElementDragEnd"
      @drag="handleElementDrag"
    >
      <div
        id="canvasContainer"
        class="flex items-center justify-center"
        :style="scrollBoxStyle"
      >
        <div
          ref="draggableElRef"
          class="transition-all"
        >
          <div :class="{ 'pointer-events-none': pressSpace }">
            <slot />
          </div>
        </div>
      </div>
    </div>
    <!-- 工具栏 start -->
    <div
      class="h-48px px-24px rounded-full flex items-center justify-end bg-white text-gray-500 shadow-xl absolute bottom-6 right-8"
    >
      <div
        title="导出"
        class="pr-16px cursor-pointer"
      >
        <span class="icon iconfont">&#xe60b;</span>
      </div>
      <div
        title="导入"
        class="pr-16px cursor-pointer"
      >
        <span class="icon iconfont">&#xe60c;</span>
      </div>
      <div
        title="编辑事件"
        class="pr-16px cursor-pointer"
      >
        <span class="icon iconfont">&#xe612;</span>
      </div>
      <div
        class="w-40px cursor-pointer"
        @click="handleClick"
      >
        {{ (canvasScale * 100).toFixed(0) }}%
      </div>
    </div>
    <!-- 工具栏 end -->
  </div>
</template>
<script lang="ts" setup>
import { watchOnce, useElementSize, useResizeObserver } from '@vueuse/core'
import type { NodeItem } from '../../../../../types/kDesigner'
import { useShareKeyPress, useElementDrag, useElementZoom } from '../../../../../utils/index'
import { ref, nextTick, watch, computed, onMounted } from 'vue'

const props = defineProps<{
  rootSchema: NodeItem
}>()
const editScreenContainerRef = ref<HTMLDivElement | null>(null)
const draggableElRef = ref<HTMLDivElement | null>(null)

const { pressSpace } = useShareKeyPress()
const { handleElementDragStart, handleElementDrag, handleElementDragEnd } = useElementDrag(editScreenContainerRef)
const { width, height } = useElementSize(editScreenContainerRef)
const { canvasScale, handleZoom } = useElementZoom(draggableElRef)
const scrollBoxStyle = ref<{
  width?: string,
  height?: string,
}>({})

const getCanvasAttribute = computed(() => {
  const width = parseFloat(props.rootSchema.componentProps.style?.width ?? 1320)
  const height = parseFloat(props.rootSchema.componentProps.style?.height ?? 800)
  return { width, height }
})

// 初始化页面样式
watchOnce(width, () => {
  updateScrollBoxStyle()
  setScroll()
})

// 动态适配设计区域宽度
watch(() => props.rootSchema.componentProps.style.width, updateScrollBoxStyle)

function updateScrollBoxStyle () {
  let canvasWidth = getCanvasAttribute.value.width
  let canvasHeight = getCanvasAttribute.value.height
  if (Number.isNaN(canvasWidth) || canvasWidth < width.value) {
    canvasWidth = width.value
  }

  if (Number.isNaN(canvasHeight) || canvasWidth < height.value) {
    canvasHeight = height.value
  }

  scrollBoxStyle.value = { width: width.value + canvasWidth + 'px', height: height.value + canvasHeight + 'px' }
}

function setScroll () {
  nextTick(() => {
    let canvasWidth = getCanvasAttribute.value.width
    let canvasHeight = getCanvasAttribute.value.height
    if (Number.isNaN(canvasWidth) || canvasWidth < width.value) {
      canvasWidth = width.value
    }

    if (Number.isNaN(canvasHeight) || canvasWidth < height.value) {
      canvasHeight = height.value
    }
    const scrollTop = canvasHeight / 2
    const scrollLeft = canvasWidth / 2
    editScreenContainerRef.value!.scrollTo(scrollLeft, scrollTop)
  })
}

/**
 * editScreenContainerRef 宽度变化，重置缩放
 */
useResizeObserver(editScreenContainerRef, ([{ contentRect }]) => {
  const scale = (contentRect.width - 20) / getCanvasAttribute.value.width
  // 超过1.2倍不自动缩放
  if (scale < 1.2) {
    canvasScale.value = scale
  }
  updateScrollBoxStyle()
  setScroll()
})

onMounted(() => {
  /**
   * editScreenContainerRef 宽度变化，重置缩放
   */
  useResizeObserver(editScreenContainerRef, ([{ contentRect }]) => {
    const scale = (contentRect.width - 20) / getCanvasAttribute.value.width
    // 超过1.2倍不自动缩放
    if (scale < 1.2) {
      canvasScale.value = scale
    }
    updateScrollBoxStyle()
    setScroll()
  })
})

function handleClick () {
  canvasScale.value = 1
  draggableElRef.value!.style.transform = `scale(${canvasScale.value})`
}

</script>
