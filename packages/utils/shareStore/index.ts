import { createSharedComposable } from "@vueuse/core";
import { ref } from "vue";
import { useKeyPress } from "../common/element";

/**
 * 创建状态
 */
export function useStore() {
  // 设计区域画布缩放
  const canvasScale = ref(1);
  // 画布缩放启用状态
  const enabledZoom = ref(false);

  // 获取键盘状态
  const { pressSpace, pressShift, pressCtrl } = useKeyPress();
  return {
    canvasScale,
    pressSpace,
    pressShift,
    pressCtrl,
    enabledZoom,
  };
}

// 创建共享状态
export const useShareStore = createSharedComposable(useStore);
