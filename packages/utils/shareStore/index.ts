import { createSharedComposable } from '@vueuse/core'
import { ref } from 'vue'

/**
 * 创建状态
 */
export function useStore () {
  // 设计区域画布缩放
  const canvasScale = ref(1)
  return {
    canvasScale
  }
}

// 创建共享状态
export const useShareStore = createSharedComposable(useStore)
