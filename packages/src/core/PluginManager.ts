class PluginManager {
  components: Record<string, any> = {};

  /**
   * 添加组件到插件管理器中
   * @param componentName 组件名称
   * @param component 组件
   */
  addComponent(componentName: string, component: any) {
    this.components[componentName] = component;
  }

  /**
   * 获取所有插件管理中的所有组件
   * @returns components
   */
  getComponents() {
    return this.components;
  }

  /**
   * 通过name 查询相应的组件
   * @returns components
   */
  getComponent(name: string) {
    return this.components[name];
  }

  /**
   * 加载antd UI
   * @param antd antd ui
   */
  useAntd(antd: any) {
    const { Form, FormItem } = antd;
    this.addComponent("Form", Form);
    this.addComponent("FormItem", FormItem);
  }
}

const pm = new PluginManager();

export const pluginManager = pm;
