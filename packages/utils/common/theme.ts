import { useToggle } from "@vueuse/core";
import { useShareStore } from "../shareStore";
import { watch, ref, onMounted, onUnmounted } from "vue";
export function useTheme() {
  const { isDark } = useShareStore();
  const toggleDark = useToggle(isDark);
  return {
    isDark,
    toggleDark,
  };
}

export function useDark() {
  const isDark = ref(false);
  onMounted(() => {
    getDarkState(isDark);
    monitorHtml(isDark);
  });

  watch(
    () => isDark.value,
    () => {
      if (isDark.value) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  );
  return {
    isDark,
  };
}

/**
 * 获取dark初始化状态
 * @param isDark
 */
export function getDarkState(isDark) {
  var targetNode = document.documentElement;
  if (!targetNode) return;
  if (targetNode.classList.contains("dark")) {
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
