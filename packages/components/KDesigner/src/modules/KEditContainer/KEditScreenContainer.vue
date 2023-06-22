<template>
  <div
    ref="editScreenContainerRef"
    class="wh-full overflow-auto"
  >
    <div
      class="flex items-center justify-center"
      :style="scrollBoxStyle"
    >
      <div
        ref="draggableElRef"
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
</template>
<script lang="ts" setup>
import { onKeyUp, onKeyDown, watchOnce, useElementSize } from '@vueuse/core'
import type { NodeItem } from '../../../../../types/kDesigner'
import { ref, nextTick } from 'vue'
const props = defineProps<{
  rootSchema: NodeItem
}>()
const editScreenContainerRef = ref<HTMLDivElement | null>(null)
const draggableElRef = ref<HTMLDivElement | null>(null)

const pressSpace = ref(false)
onKeyDown(' ', (e) => {
  e.preventDefault()
  pressSpace.value = true
})
onKeyUp(' ', () => {
  pressSpace.value = false
})

const { width, height } = useElementSize(editScreenContainerRef)

const scrollBoxStyle = ref<{
  width?: string,
  height?: string,
}>({})

watchOnce(width, () => {
  let rootSchemaWidth = parseFloat(props.rootSchema.componentProps.style.width)
  let rootSchemaHeight = parseFloat(props.rootSchema.componentProps.style.height)
  if (Number.isNaN(rootSchemaWidth) || rootSchemaWidth < 100) {
    rootSchemaWidth = 100
  }
  if (Number.isNaN(rootSchemaHeight) || rootSchemaWidth < 100) {
    rootSchemaHeight = 100
  }
  scrollBoxStyle.value = { width: width.value + rootSchemaWidth + 'px', height: height.value + rootSchemaHeight + 'px' }

  nextTick(() => {
    const scrollTop = rootSchemaHeight / 2
    const scrollLeft = rootSchemaWidth / 2
    editScreenContainerRef.value!.scrollTo(scrollLeft, scrollTop)
  })
})

let startX = 0
let startY = 0
function handleElementDragStart (e) {
  startX = e.x
  startY = e.y
  e.dataTransfer.setDragImage(
    document.createElement('div'), 0, 0
  )
}
/**
 * 拖拽设计区域
 * @param e
 */
function handleElementDrag (e) {
  e.preventDefault()
  // 计算新的光标位置：
  if (!e.x || !e.y || !pressSpace.value) {
    return
  }
  const offsetX = e.x - startX
  const offsetY = e.y - startY
  startX = e.x
  startY = e.y
  editScreenContainerRef.value!.scrollTop -= offsetY
  editScreenContainerRef.value!.scrollLeft -= offsetX
}

function handleElementDragEnd () {
  pressSpace.value = false
}

</script>
