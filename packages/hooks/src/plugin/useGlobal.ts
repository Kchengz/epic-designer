import { reactive } from 'vue';

// 定义MessageApi 类型
export interface MessageApi {
  error: (text: string) => void;
  info: (text: string) => void;
  success: (text: string) => void;
  warning: (text: string) => void;
}

export interface InitialGlobal {
  // 扩展属性
  [key: string]: any;
}

export interface Global extends InitialGlobal {
  $message: MessageApi;
}

// 创建默认全局对象的函数，避免在模块加载时立即执行
function createDefaultGlobal(initialGlobal?: InitialGlobal): Global {
  // 默认提示函数
  const defaultMessage = (text: string) => {
    console.warn(`[Epic]全局提示函数未注册 提示信息：'${text}'`);
  };
  return {
    $message: {
      error: defaultMessage,
      info: defaultMessage,
      success: defaultMessage,
      warning: defaultMessage,
    },
    ...initialGlobal,
  };
}

export function useGlobal(initialGlobal?: InitialGlobal) {
  // 如果没有提供初始值，则使用默认全局对象
  const finalInitialGlobal = createDefaultGlobal(initialGlobal);
  // 全局状态对象
  const global = reactive<Global>(finalInitialGlobal);

  return {
    global,
  };
}
