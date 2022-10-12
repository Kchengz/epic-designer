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
}

const pm = new PluginManager();

export const pluginManager = pm;
