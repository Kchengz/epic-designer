import { computed, ref } from 'vue';

export function useMountMonitor() {
  // 存储待加载项的id列表
  const pendingIds = ref<string[]>([]);

  // 使用 computed 确保状态是响应式的
  const isAllMounted = computed(() => pendingIds.value.length === 0);

  /**
   * 注册待加载项
   */
  function push(id: string) {
    pendingIds.value.push(id);
  }

  /**
   * 移除待加载项
   */
  function pop(id: string) {
    pendingIds.value = pendingIds.value.filter((item) => item !== id);
  }

  /**
   * 重置待加载项
   */
  function reset() {
    pendingIds.value = [];
  }

  return {
    isAllMounted,
    pendingIds,
    pop,
    push,
    reset,
  };
}

export type MountMonitor = ReturnType<typeof useMountMonitor>;
