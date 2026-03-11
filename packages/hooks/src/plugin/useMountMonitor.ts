import { computed, ref } from 'vue';

export function useMountMonitor() {
  const pendingCount = ref(0);

  // 使用 computed 确保状态是响应式的
  const isAllMounted = computed(() => pendingCount.value === 0);

  /**
   * 注册待加载项
   */
  function push() {
    pendingCount.value++;
  }

  /**
   * 标记加载完成
   */
  function pop() {
    if (pendingCount.value > 0) {
      pendingCount.value--;
    }
  }

  return {
    isAllMounted,
    pendingCount,
    pop,
    push,
  };
}

export type MountMonitor = ReturnType<typeof useMountMonitor>;
