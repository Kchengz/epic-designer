export class PageManager {
  componentInstances: { [id: string]: any } = {};

  /**
   * 获取组件实例
   * @param id 
   * @returns 
   */
  getComponent(id: string) {
    return this.componentInstances[id];
  }

  /**
   * 记录组件实例
   * @param id 
   * @param instance 
   * @returns 
   */
  setComponent(id: string, instance: any) {
    console.log(this.componentInstances)
    return (this.componentInstances[id] = instance);
  }


}

export const pageManager = new PageManager();
