import { onMounted, onUnmounted, ref, watch } from 'vue';

import { useToggle } from '@vueuse/core';

import { useStore } from '../store';

export function useTheme() {
  const { isDark } = useStore();
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
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    },
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
  const targetNode = document.documentElement;
  if (!targetNode) return;
  isDark.value = !!targetNode.classList.contains('dark');
}

/**
 * 监听html元素
 * @param isDark
 */
function monitorHtml(isDark) {
  // 选择需要监听的元素
  const targetNode = document.querySelector('html');

  // 创建MutationObserver对象
  const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
      if (
        mutation.type === 'attributes' &&
        mutation.attributeName === 'class'
      ) {
        const target = mutation.target as any;
        isDark.value = [...target.classList].includes('dark');
      }
    }
  });

  // 开始监听
  targetNode &&
    observer.observe(targetNode, {
      attributeFilter: ['class'],
      attributes: true,
    });

  // 销毁监听
  onUnmounted(() => {
    observer.disconnect();
  });
}
