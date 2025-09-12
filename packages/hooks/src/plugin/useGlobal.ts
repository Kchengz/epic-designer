import { reactive } from 'vue';

// 定义MessageApi 类型
export interface MessageApi {
  error: (text: string) => void;
  info: (text: string) => void;
  success: (text: string) => void;
  warning: (text: string) => void;
}

export interface Global {
  $message: MessageApi;
  // 扩展属性
  [key: string]: any;
}

// 默认提示函数
const defaultMessage = (text: string) => {
  console.warn(`[Epic]全局提示函数未注册 提示信息：'${text}'`);
};

const defaultGlobal = {
  $message: {
    error: defaultMessage,
    info: defaultMessage,
    success: defaultMessage,
    warning: defaultMessage,
  },
};

export function useGlobal(initialGlobal: Global = defaultGlobal) {
  // 全局状态对象
  const global = reactive<Global>(initialGlobal);

  /**
   * 获取全局状态
   * @param key 状态键名，如果不传返回整个状态对象
   */
  function getGlobal(key?: string): any {
    if (key) {
      return global[key];
    }
    return global;
  }

  /**
   * 设置全局状态
   * @param key 状态键名
   * @param value 状态值
   */
  function setGlobal(key: string, value: any): void {
    global[key] = value;
  }

  return {
    getGlobal,
    global,
    setGlobal,
  };
}
