import { pluginManager } from "./index";
export interface ActionModel {
  componentId?: string;
  args: string;
  methodName: any;
}

export class PageManager {
  componentInstances: { [id: string]: any } = {};

  /**
   * 获取组件实例
   * @param id 
   * @returns 
   */
  getComponentInstance(id: string) {
    return this.componentInstances[id];
  }

  /**
   * 添加组件实例
   * @param id 
   * @param instance 
   * @returns 
   */
  addComponentInstance(id: string, instance: any) {
    return (this.componentInstances[id] = instance);
  }

  /**
 * 执行一组操作
 * @param actions 操作数组
 */
  doActions(actions: ActionModel[]): void {
    actions.forEach((action) => {
      const component = action.componentId && this.getComponentInstance(action.componentId);

      if (component && typeof component[action.methodName] === "function") {
        component[action.methodName](action.args);
        console.log(component[action.methodName])
        return
      }

      pluginManager.publicMethods[action.methodName]?.method(action.args)
    });
  }
}

