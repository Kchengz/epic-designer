import { ref, type Ref, type ComponentPublicInstance } from "vue";
import { pluginManager } from "./pluginManager";
export interface ActionModel {
  componentId?: string;
  args: string;
  methodName: string;
  type: "component" | "public" | "custom";
}
export interface PageManager {
  componentInstances: Ref<Record<string, ComponentPublicInstance>>;
  funcs: Ref<Record<string, any>>;
  getComponentInstance: (id: string) => ComponentPublicInstance;
  addComponentInstance: (id: string, instance: ComponentPublicInstance) => void;
  removeComponentInstance: (id: string) => void;
  setMethods: (scriptStr: string) => void;
  doActions: (actions: ActionModel[], ...args: any) => void;
}

export function usePageManager(): PageManager {
  const componentInstances = ref<Record<string, ComponentPublicInstance>>({});
  const funcs = ref<Record<string, any>>({});
  /**
   * 获取组件实例
   * @param id
   * @returns
   */
  function getComponentInstance(id: string): ComponentPublicInstance {
    return componentInstances.value[id];
  }

  /**
   * 添加组件实例
   * @param id
   * @param instance
   * @returns
   */
  function addComponentInstance(id: string, instance: ComponentPublicInstance) {
    componentInstances.value[id] = instance;
  }
  /**
   * 移除组件实例
   * @param id
   * @returns
   */
  function removeComponentInstance(id: string): void {
    delete componentInstances.value[id];
  }

  /**
   * 动态创建函数
   * @param scriptStr
   */
  function setMethods(scriptStr: string): void {
    // 将PublicMethodsModel 映射为 Record<string, () => any>
    const publicMethods: Record<string, () => any> = Object.entries(
      pluginManager.publicMethods
    ).reduce((acc: any, [key, value]) => {
      acc[key] = value.method;
      return acc;
    }, {});

    new Function(`${scriptStr}`).bind({
      getComponent: getComponentInstance,
      defineExpose,
      ...publicMethods,
    })();
  }

  /**
   *  存储自定义脚本暴露的函数及属性
   * @param exposed
   */
  function defineExpose(exposed?: Record<string, any> | undefined): void {
    if (exposed != null) {
      funcs.value = exposed;
    }
  }

  /**
   * 执行一组操作
   * @param actions 操作数组
   */
  function doActions(actions: ActionModel[], ...args: any): void {
    actions?.forEach((action) => {
      if (action.type === "public") {
        pluginManager.publicMethods[action.methodName]?.method(action.args);
      }

      if (action.type === "custom") {
        funcs.value[action.methodName]?.(...args);
      }

      if (action.type === "component") {
        const component =
          action.componentId != null &&
          (getComponentInstance(action.componentId) as any);
        // component[action.methodName](action.args, ...args)
        component[action.methodName](...args);
        return;
      }
    });
  }

  return {
    componentInstances,
    funcs,
    getComponentInstance,
    addComponentInstance,
    removeComponentInstance,
    setMethods,
    doActions,
  };
}
