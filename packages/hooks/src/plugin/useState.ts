import { reactive } from 'vue';

export interface State {
  // 扩展属性
  [key: string]: any;
}

export function useState(defaultState: State = {}) {
  // 全局状态对象
  const state = reactive<State>(defaultState);

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
