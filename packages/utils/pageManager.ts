import { ref, type Ref } from 'vue'
export interface ActionModel {
  componentId?: string
  args: string
  methodName: any
}
export interface PageManager {
  componentInstances: Ref<Record<string, any>>
  funcs: Ref<Record<string, any>>
  getComponentInstance: (id: string) => any
  addComponentInstance: (id: string, instance: any) => any
  setMethods: (scriptStr: string) => void
  doActions: (actions: ActionModel[]) => void
}

export function usePageManager (): PageManager {
  const componentInstances = ref<Record<string, any>>({})
  const funcs = ref<Record<string, any>>({})
  /**
   * 获取组件实例
   * @param id
   * @returns
   */
  function getComponentInstance (id: string): any {
    return componentInstances.value[id]
  }

  /**
   * 添加组件实例
   * @param id
   * @param instance
   * @returns
   */
  function addComponentInstance (id: string, instance: any): any {
    return (componentInstances.value[id] = instance)
  }

  /**
   * 动态创建函数
   * @param scriptStr
   */
  function setMethods (scriptStr: string): void {
    new Function(`${scriptStr}`).bind({
      getComponent: getComponentInstance,
      defineExpose
    })()
  }

  /**
   *  存储自定义脚本暴露的函数及属性
   * @param exposed
   */
  function defineExpose (exposed?: Record<string, any> | undefined): void {
    if (exposed != null) {
      funcs.value = exposed
    }
  }

  /**
   * 执行一组操作
   * @param actions 操作数组
   */
  function doActions (actions: ActionModel[]): void {
    actions?.forEach((action) => {
      const component = (action.componentId != null) && getComponentInstance(action.componentId)

      if (Boolean(component) && typeof component[action.methodName] === 'function') {
        component[action.methodName](action.args)
        console.log(component[action.methodName])
        return
      }

      funcs.value[action.methodName]?.(action.args)
      // pluginManager.publicMethods[action.methodName]?.method(action.args);
    })
  }

  return {
    componentInstances,
    funcs,
    getComponentInstance,
    addComponentInstance,
    setMethods,
    doActions
  }
}
