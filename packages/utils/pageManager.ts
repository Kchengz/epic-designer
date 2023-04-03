import { pluginManager } from "./index";
import { ref } from "vue";
export interface ActionModel {
  componentId?: string;
  args: string;
  methodName: any;
}
export interface PageManager {
  componentInstances: import("vue").Ref<{ [id: string]: any }>;
  funcs: import("vue").Ref<{ [id: string]: any }>;
  getComponentInstance: (id: string) => any;
  addComponentInstance: (id: string, instance: any) => any;
  setMethods: (scriptStr: string) => void;
  doActions: (actions: ActionModel[]) => void;
}

export function usePageManager(): PageManager {
  const componentInstances = ref<{ [id: string]: any }>({});
  const funcs = ref<{ [id: string]: any }>({});
  /**
   * 获取组件实例
   * @param id
   * @returns
   */
  function getComponentInstance(id: string) {
    return componentInstances.value[id];
  }

  /**
   * 添加组件实例
   * @param id
   * @param instance
   * @returns
   */
  function addComponentInstance(id: string, instance: any) {
    console.log(instance)
    return (componentInstances.value[id] = instance);
  }

  /**
   * 动态创建函数
   * @param scriptStr
   */
  function setMethods(scriptStr: string) {
    const customFuncs = new Function(
      `const page = {};${scriptStr}; return page;`
    ).bind({ getComponent: getComponentInstance })();
    funcs.value = customFuncs;
  }

  /**
   * 执行一组操作
   * @param actions 操作数组
   */
  function doActions(actions: ActionModel[]): void {
    actions?.forEach((action) => {
      const component =
        action.componentId && getComponentInstance(action.componentId);

      if (component && typeof component[action.methodName] === "function") {
        component[action.methodName](action.args);
        console.log(component[action.methodName]);
        return;
      }

      funcs.value[action.methodName]?.(action.args);
      // pluginManager.publicMethods[action.methodName]?.method(action.args);
    });
  }

  return {
    componentInstances,
    funcs,
    getComponentInstance,
    addComponentInstance,
    setMethods,
    doActions,
  };
}
