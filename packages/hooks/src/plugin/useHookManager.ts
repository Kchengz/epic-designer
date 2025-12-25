import type { Ref } from 'vue';

import { ref } from 'vue';

export type HookCallback = (context: any) => Promise<void> | void;

export interface Hooks {
  nodeRender: HookCallback[];
}

export interface HookManager {
  // 清除钩子
  clear: (hookName?: keyof Hooks) => void;

  // 执行钩子
  execute: (hookName: keyof Hooks, context: any) => Promise<void>;

  // 获取钩子数量
  getCount: (hookName: keyof Hooks) => number;

  // 注册钩子
  register: (hookName: keyof Hooks, callback: HookCallback) => () => void;
}

export function useHookManager() {
  // 使用 ref 来存储钩子，使其响应式
  const hooks: Ref<Hooks> = ref({
    nodeRender: [],
  });

  // 钩子统计（可选，用于监控）
  const hookCounts = ref({
    nodeRender: 0,
  });

  /**
   * 注册钩子函数
   * @param hookName 钩子名称
   * @param callback 钩子回调函数
   * @returns 取消注册的函数
   */
  const register = (
    hookName: keyof Hooks,
    callback: HookCallback,
  ): (() => void) => {
    hooks.value[hookName].push(callback);
    hookCounts.value[hookName]++;

    // 返回取消注册的函数
    return () => {
      const index = hooks.value[hookName].indexOf(callback);
      if (index !== -1) {
        hooks.value[hookName].splice(index, 1);
        hookCounts.value[hookName]--;
      }
    };
  };

  /**
   * 执行钩子链
   * @param hookName 钩子名称
   * @param context 钩子上下文
   */
  const execute = async (
    hookName: keyof Hooks,
    context: any,
  ): Promise<void> => {
    // 创建上下文的响应式副本，确保钩子之间的数据传递
    const hookContext = { ...context };

    // 按注册顺序执行所有钩子
    for (const hook of hooks.value[hookName]) {
      try {
        await hook(hookContext);

        // 更新组件引用（因为钩子可能修改了组件）
        if (hookName === 'nodeRender') {
          context.component = { ...hookContext.component };
        }
      } catch (error) {
        console.error(`执行钩子 ${hookName} 时出错:`, error);
        // 可以选择是否继续执行后续钩子
        // throw error; // 如果要中断执行
      }
    }
  };

  /**
   * 清除钩子
   * @param hookName 可选的钩子名称，不传则清除所有钩子
   */
  const clear = (hookName?: keyof Hooks): void => {
    if (hookName) {
      hooks.value[hookName] = [];
      hookCounts.value[hookName] = 0;
    } else {
      Object.keys(hooks.value).forEach((key) => {
        const hookKey = key as keyof Hooks;
        hooks.value[hookKey] = [];
        hookCounts.value[hookKey] = 0;
      });
    }
  };

  /**
   * 获取钩子数量
   * @param hookName 钩子名称
   */
  const getCount = (hookName: keyof Hooks): number => {
    return hookCounts.value[hookName];
  };

  return {
    clear,
    execute,
    getCount,
    register,
  };
}
