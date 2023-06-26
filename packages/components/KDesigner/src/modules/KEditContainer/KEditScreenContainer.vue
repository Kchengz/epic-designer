<template>
  <div class="h-full flex flex-col">
    <div
      ref="editScreenContainerRef"
      class="flex-1 overflow-auto k-edit-screen-container"
      @wheel="handleZoom"
    >
      <div
        id="canvasContainer"
        class="flex items-center justify-center"
        :style="scrollBoxStyle"
      >
        <div
          ref="draggableElRef"
          class="transition-all"
          :class="{ 'cursor-grab': pressSpace }"
          :draggable="pressSpace"
          @dragstart="handleElementDragStart"
          @dragend="handleElementDragEnd"
          @drag="handleElementDrag"
        >
          <div :class="{ 'pointer-events-none': pressSpace }">
            <slot />
          </div>
        </div>
      </div>
    </div>
    <div
      class="h-30px flex items-center justify-end bg-gray-100 border-l-3 border-r-3 border-t-0 border-b-0 border-white border-solid"
    >
      <div
        class="mr-4"
        @click="handleClick"
      >
        {{ (canvasScale * 100).toFixed(0) }}%
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { watchOnce, useElementSize, useResizeObserver } from '@vueuse/core'
import type { NodeItem } from '../../../../../types/kDesigner'
import { useShareKeyPress, useElementDrag, useElementZoom } from '../../../../../utils/index'
import { ref, nextTick, watch, computed } from 'vue'

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
  const width = parseFloat(props.rootSchema.componentProps.style.width)
  const height = parseFloat(props.rootSchema.componentProps.style.height)
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

function handleClick () {
  canvasScale.value = 1
  draggableElRef.value!.style.transform = `scale(${canvasScale.value})`
}

</script>
