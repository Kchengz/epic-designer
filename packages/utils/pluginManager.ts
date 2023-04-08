import { NodeItem, SchemaGroupItem } from "../types/kDesigner.d";
import { loadAsyncComponent } from "./utils";
import { getUUID } from "./index";

export interface ActivitybarModel {
  id?: string;
  title: string;
  icon: string;
  component: any;
}

export interface RightSidebarModel {
  id?: string;
  title: string;
  component: any;
}

export interface ViewsContainersModel {
  activitybars: ActivitybarModel[];
  rightSidebars: RightSidebarModel[];
}

export interface Components {
  [type: string]: any;
}

export interface EventModel {
  type: string;
  describe: string;
}

export interface ComponentConfigModel {
  component: any;
  defaultSchema: NodeItem;
  config: {
    attribute?: NodeItem[];
    style?: NodeItem[];
    event?: EventModel[];
    action?: EventModel[];
  };
  bindModel?: string;
}

export interface ComponentConfigsModel {
  [type: string]: ComponentConfigModel;
}

export interface MethodModel {
  describe: string;
  methodName: string;
  method: Function;
}

export interface PublicMethodsModel {
  [methodName: string]: MethodModel;
}

export class PluginManager {
  components: Components = {};
  componentConfigs: ComponentConfigsModel = {};
  schemaGroup: SchemaGroupItem[] = [
    {
      title: "基础组件",
      list: ["input"],
    },
  ];
  viewsContainers: ViewsContainersModel = {
    activitybars: [],
    rightSidebars: [],
  };
  publicMethods: PublicMethodsModel = {
    test: {
      describe: "测试函数",
      methodName: "test",
      method: () => {
        alert("测试函数弹出");
      },
    },
  };

  constructor() {}
  /**
   * 添加组件到插件管理器中
   * @param componentName 组件名称
   * @param component 组件
   */
  component(componentName: string, component: any) {
    // 检查是否已注册组件
    if (this.components[componentName]) {
      console.warn(`${componentName}组件已在pluginManager中注册`);
      return false;
    }
    if (typeof component === "function") {
      component = loadAsyncComponent(component);
    }
    // 注册组件
    this.components[componentName] = component;
  }

  /**
   * 注册组件到插件管理器中
   * @param component 组件
   * @param schema 组件结构
   * @param attrSchemas 属性结构
   * @param bindModel 双向绑定value
   */
  registerComponent(componentConfig: ComponentConfigModel) {
    // 添加组件
    this.component(
      componentConfig.defaultSchema.type,
      componentConfig.component
    );
    // 添加组件配置
    this.componentConfigs[componentConfig.defaultSchema.type] = componentConfig;
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
   * 注册活动栏
   */
  registerActivitybar(activitybar: ActivitybarModel) {
    if (typeof activitybar.component === "function") {
      activitybar.component = loadAsyncComponent(activitybar.component);
    }
    this.viewsContainers.activitybars.push(activitybar);
  }

  /**
   * 获取所有activitybars
   * @returns activitybars
   */
  getActivitybars() {
    return this.viewsContainers.activitybars;
  }

  /**
   * 注册右侧栏
   */
  registerRightSidebar(rightSidebar: RightSidebarModel) {
    if (typeof rightSidebar.component === "function") {
      rightSidebar.component = loadAsyncComponent(rightSidebar.component);
    }
    this.viewsContainers.rightSidebars.push(rightSidebar);
  }

  /**
   * 获取所有rightSidebars
   * @returns rightSidebars
   */
  getRightSidebars() {
    return this.viewsContainers.rightSidebars;
  }

  /**
   * 获取所有插件管理中的所有组件配置
   * @returns componentAttrs
   */
  getComponentConfings() {
    return this.componentConfigs;
  }

  /**
   * 通过type获取ComponentConfing
   * @returns
   */
  getComponentConfingByType(type: string) {
    const componentConfig = this.componentConfigs[type];
    return componentConfig;
  }

  /**
   * 设置分组,这个操作将会覆盖原来的数据
   * @param {*} schemaGroup
   * @returns
   */
  setSchemaGroup(schemaGroup: SchemaGroupItem[]) {
    this.schemaGroup = schemaGroup;
  }

  /**
   * 添加分组
   * @param {*} schemaGroupItem
   * @returns
   */
  addSchemaGroup(schemaGroupItem: SchemaGroupItem) {
    this.schemaGroup.push(schemaGroupItem);
  }

  /**
   * 按照分组获取schemaGroupList
   * @returns schemaGroupList
   */
  getSchemaByGroup() {
    const schemaGroupList = this.schemaGroup.map((item) => {
      // 映射defaultSchema,并过滤未查询到的组件
      const list = item.list
        .map((type) => {
          const schema = this.componentConfigs[type]?.defaultSchema;
          if (!schema) {
            console.warn(`${type} 组件未注册到pluginManager中`);
            return false;
          }
          return {
            ...schema,
            id: getUUID(),
          };
        })
        .filter((e) => e) as NodeItem[];
      return {
        ...item,
        list,
      };
    });
    return schemaGroupList;
  }

  /**
   * 添加公共方法
   * @param method
   */
  addPublicMethod(method: MethodModel) {
    this.publicMethods[method.methodName] = method;
  }
}

export const pluginManager = new PluginManager();
