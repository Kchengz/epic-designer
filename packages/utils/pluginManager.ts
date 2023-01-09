import { NodeItem } from "../types/kDesigner.d";
import { nodeSchema } from "./index";
import { loadAsyncComponent } from "./utils";

export interface ComponentInfo {
  bindModel: string;
  component: any;
}

export interface ActivitybarModel {
  id?: string;
  title: string;
  icon: string;
  component: any;
}
export interface ViewsContainersModel {
  activitybars: ActivitybarModel[];
}

export interface Components {
  [type: string]: ComponentInfo;
}

export interface ComponentAttr {
  attrIndex: string;
  type: string;
  label: string;
  title?: string;
  defaultValue?: any;
  [attr: string]: any;
  show?: (renderCallbackParams: NodeItem) => boolean;
}

export interface ComponentAttrs {
  [type: string]: ComponentAttr[];
}


class PluginManager {
  components: Components = {};
  componentAttrs: ComponentAttrs = {};
  viewsContainers: ViewsContainersModel = {
    activitybars: [],
  };

  constructor() {}
  /**
   * 注册组件到插件管理器中
   * @param componentName 组件名称
   * @param component 组件
   * @param bindModel v-model 绑定的属性名,兼容不同ui差异
   */
  registerComponent(
    componentName: string,
    component: any,
    bindModel: string = "value"
  ) {
    if (typeof component === "function") {
      component = loadAsyncComponent(component);
    }
    // 注册组件
    this.components[componentName] = {
      component,
      bindModel,
    };
  }

  /**
   * 添加组件
   * @param component 组件
   * @param schema 组件结构
   * @param attrSchemas 属性结构
   * @param bindModel 双向绑定value
   */
  addComponent(
    component: any,
    schema: NodeItem,
    attrSchemas: ComponentAttr[],
    bindModel: string = "value"
  ) {
    // 添加组件
    this.registerComponent(schema.type, component, bindModel);
    // 添加组件属性
    this.componentAttrs[schema.type] = attrSchemas;
    nodeSchema.addSchema(schema);
  }

  /**
   * 获取所有插件管理中的所有组件
   * @returns components
   */
  getComponents() {
    return this.components;
  }

  /**
   * 通过type 查询相应的组件
   * @returns components
   */
  getComponent(type: string) {
    return this.components[type];
  }

  /**
   * 获取所有插件管理中的所有组件属性
   * @returns componentAttrs
   */
  getComponentAttrs() {
    return this.componentAttrs;
  }

  /**
   * 注册活动栏
   */
  registerActivitybar(activitybar: ActivitybarModel) {
    this.viewsContainers.activitybars.push(activitybar);
  }

  /**
   * 获取所有activitybars
   * @returns activitybars
   */
  getActivitybars() {
    return this.viewsContainers.activitybars;
  }
}

export const pluginManager = new PluginManager();
