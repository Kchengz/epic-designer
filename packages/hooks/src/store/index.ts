import { ref } from 'vue';

import { createSharedComposable } from '@vueuse/core';

import { useKeyPress } from '../common/element';
import { useDark } from '../common/theme';

/**
 * 初始化共享存储
 */
export function initStore() {
  // 设计区域画布缩放
  const canvasScale = ref(1);
  // 画布缩放启用状态
  const disabledZoom = ref(false);

  const { isDark } = useDark();

  // 获取键盘状态
  const { pressCtrl, pressShift, pressSpace } = useKeyPress();
  return {
    canvasScale,
    disabledZoom,
    isDark,
    pressCtrl,
    pressShift,
    pressSpace,
  };
}

// 使用共享状态
export const useStore = createSharedComposable(initStore);
