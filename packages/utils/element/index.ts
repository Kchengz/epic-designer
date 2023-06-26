import { createSharedComposable } from '@vueuse/core'
import { useKeyPress } from './keyboard'
import { useShareStore } from '../shareStore'
import { type Ref, watch } from 'vue'

// 将按键状态hooks共享
export const useShareKeyPress = createSharedComposable(useKeyPress)

/**
 * 拖拽元素
 * @param editScreenContainer
 * @returns
 */
export function useElementDrag (
  editScreenContainer: Ref<HTMLDivElement | null>
) {
  const { pressSpace } = useShareKeyPress()

  let startX = 0
  let startY = 0
  function handleElementDragStart (e) {
    startX = e.x
    startY = e.y
    e.dataTransfer.setDragImage(document.createElement('div'), 0, 0)
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
    if (editScreenContainer.value) {
      editScreenContainer.value.scrollTop -= offsetY
      editScreenContainer.value.scrollLeft -= offsetX
    }
  }

  function handleElementDragEnd () {
    pressSpace.value = false
  }

  return { handleElementDragStart, handleElementDrag, handleElementDragEnd }
}

/**
 * 缩放元素
 * @param draggableElRef
 * @returns
 */
export function useElementZoom (draggableElRef: Ref<HTMLDivElement | null>) {
  const { pressCtrl } = useShareKeyPress()
  const { canvasScale } = useShareStore()
  /**
   * 缩放操作
   * @param e
   * @returns
   */
  function handleZoom (e) {
    if (!pressCtrl.value) {
      return
    }
    e.preventDefault()

    let newScale = 0
    if (e.wheelDelta > 0) {
      newScale = canvasScale.value + 0.05
    } else {
      newScale = canvasScale.value - 0.05
    }
    // 限制缩放范围
    if (newScale > 2 || newScale < 0.2) {
      return
    }

    canvasScale.value = newScale
  }

  watch(() => canvasScale.value, (e) => {
    if (draggableElRef.value) {
      draggableElRef.value.style.transform = `scale(${e})`
    }
  })

  return { handleZoom, canvasScale }
}
