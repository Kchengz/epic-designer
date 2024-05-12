import { createSharedComposable, useDark } from "@vueuse/core";
import { ref, onMounted, onUnmounted } from "vue";
import { useKeyPress } from "../common/element";

/**
 * 创建状态
 */
export function useStore() {
  // 设计区域画布缩放
  const canvasScale = ref(1);
  // 画布缩放启用状态
  const disabledZoom = ref(false);

  const isDark = useDark();
  onMounted(() => {
    getDarkState(isDark);
    monitorHtml(isDark);
  });

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

/**
 * 获取dark初始化状态
 * @param isDark
 */
export function getDarkState(isDark) {
  var targetNode = document.querySelector("html") as any;
  if (new Array(...targetNode.classList).includes("dark")) {
    isDark.value = true;
  } else {
    isDark.value = false;
  }
}

/**
 * 监听html元素
 * @param isDark
 */
function monitorHtml(isDark) {
  // 选择需要监听的元素
  var targetNode = document.querySelector("html");

  // 创建MutationObserver对象
  var observer = new MutationObserver(function (mutationsList) {
    for (var mutation of mutationsList) {
      if (
        mutation.type === "attributes" &&
        mutation.attributeName === "class"
      ) {
        const target = mutation.target as any;
        if (new Array(...target.classList).includes("dark")) {
          isDark.value = true;
        } else {
          isDark.value = false;
        }
      }
    }
  });

  // 开始监听
  observer.observe(targetNode!, {
    attributes: true,
    attributeFilter: ["class"],
  });

  // 销毁监听
  onUnmounted(() => {
    observer.disconnect();
  });
}

// 创建共享状态
export const useShareStore = createSharedComposable(useStore);
