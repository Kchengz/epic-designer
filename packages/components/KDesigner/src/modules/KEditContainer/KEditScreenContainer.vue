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
import { watchOnce, useElementSize } from '@vueuse/core'
import type { NodeItem } from '../../../../../types/kDesigner'
import { useShareKeyPress, useElementDrag, useElementZoom } from '../../../../../utils/index'
import { ref, nextTick, watch } from 'vue'
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

// 初始化页面样式
watchOnce(width, () => {
  const { rootSchemaWidth, rootSchemaHeight } = updateScrollBoxStyle()
  nextTick(() => {
    const scrollTop = rootSchemaHeight / 2
    const scrollLeft = rootSchemaWidth / 2
    editScreenContainerRef.value!.scrollTo(scrollLeft, scrollTop)
  })
})

// 动态适配设计区域宽度
watch(() => props.rootSchema.componentProps.style.width, updateScrollBoxStyle)

function updateScrollBoxStyle () {
  let rootSchemaWidth = parseFloat(props.rootSchema.componentProps.style.width)
  let rootSchemaHeight = parseFloat(props.rootSchema.componentProps.style.height)
  if (Number.isNaN(rootSchemaWidth) || rootSchemaWidth < width.value) {
    rootSchemaWidth = width.value
  }

  if (Number.isNaN(rootSchemaHeight) || rootSchemaWidth < height.value) {
    rootSchemaHeight = height.value
  }
  scrollBoxStyle.value = { width: width.value + rootSchemaWidth + 'px', height: height.value + rootSchemaHeight + 'px' }
  return { rootSchemaWidth, rootSchemaHeight }
}

function handleClick () {
  canvasScale.value = 1
  draggableElRef.value!.style.transform = `scale(${canvasScale.value})`
}

</script>
