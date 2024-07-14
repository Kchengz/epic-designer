import { createSharedComposable } from "@vueuse/core";
import { ref } from "vue";
import { useKeyPress } from "../common/element";
import { useDark } from "../common/theme";

/**
 * 创建状态
 */
export function useStore() {
  // 设计区域画布缩放
  const canvasScale = ref(1);
  // 画布缩放启用状态
  const disabledZoom = ref(false);

  const { isDark } = useDark();

  // 获取键盘状态
  const { pressSpace, pressShift, pressCtrl } = useKeyPress();
  return {
    canvasScale,
    pressSpace,
    pressShift,
    pressCtrl,
    disabledZoom,
    isDark,
  };
}

// 创建共享状态
export const useShareStore = createSharedComposable(useStore);
