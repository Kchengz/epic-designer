import { reactive } from 'vue';

// pluginManager.state.$message = {
//   error: message.error,
//   info: message.info,
//   loading: message.loading,
//   success: message.success,
//   warning: message.warning,
// };

// 定义MessageApi 类型
export interface MessageApi {
  error: (text: string) => void;
  info: (text: string) => void;
  success: (text: string) => void;
  warning: (text: string) => void;
}

export interface State {
  $message: MessageApi;
  // 扩展属性
  [key: string]: any;
}

// 默认提示函数
const defaultMessage = (text: string) => {
  console.warn(`[Epic]全局提示函数未注册 提示信息：'${text}'`);
};

const defaultState = {
  $message: {
    error: defaultMessage,
    info: defaultMessage,
    success: defaultMessage,
    warning: defaultMessage,
  },
};

export function useState(initialState: State = defaultState) {
  // 全局状态对象
  const state = reactive<State>(initialState);

  /**
   * 获取全局状态
   * @param key 状态键名，如果不传返回整个状态对象
   */
  function getState(key?: string): any {
    if (key) {
      return state[key];
    }
    return state;
  }

  /**
   * 设置全局状态
   * @param key 状态键名
   * @param value 状态值
   */
  function setState(key: string, value: any): void {
    state[key] = value;
  }

  /**
   * 批量设置全局状态
   * @param state 状态对象
   */
  function setStates(state: Record<string, any>): void {
    Object.assign(state, state);
  }

  /**
   * 删除全局状态中的某个属性
   * @param key 状态键名
   */
  function removeState(key: string): void {
    delete state[key];
  }

  /**
   * 清空全局状态
   */
  function clearState(): void {
    Object.keys(state).forEach((key) => {
      delete state[key];
    });
  }

  /**
   * 重置全局状态到默认值
   */
  function resetState(): void {
    clearState();
  }

  return {
    clearState,
    getState,
    removeState,
    resetState,
    setState,
    setStates,
    state,
  };
}
