import type { ComponentSchema } from '@epic-designer/types';

import type { AsyncComponentLoader, Component, ShallowRef } from 'vue';

import { ref, shallowRef } from 'vue';

import { loadAsyncComponent } from '../common';

// 定义 ComponentType 类型
export type ComponentType = AsyncComponentLoader | Component | string;

type Attr = 'id' | 'title';

export interface ActivitybarModel {
  component: ComponentType;
  icon: string;
  id: string;
  title: string;
  visible?: boolean;
}

export interface RightSidebarModel {
  component: ComponentType;
  id: string;
  title: string;
  visible?: boolean;
}

export interface ViewsContainersModel {
  activitybars: ShallowRef<ActivitybarModel[]>;
  rightSidebars: ShallowRef<RightSidebarModel[]>;
}

export type Components = Record<string, ComponentType>;

export interface EventModel {
  description: string; 
  type: string;
  
  /**
   * @deprecated 此属性用于兼容旧版，后期可能会移除，请避免使用。
   */
  describe?: string;
}

export interface ActionModel extends EventModel {
  args?: unknown[];
  argsConfigs?: ComponentSchema[];
}

export interface EditConstraintsModel {
  // 子节点是否固定不可拖动,只控制下一级，可选
  childImmovable?: boolean;
  // 表单字段是否固定 不添加随机UUID
  fixedField?: boolean;
  // 当前组件是否固定不可拖动，可选
  immovable?: boolean;
}

export interface ComponentConfigModel {
  // 输入表单组件v-model绑定变量名称 默认 modelValue
  bindModel?: string;
  // 组件
  component: ComponentType;
  // 配置
  config: {
    // 可执行函数
    action?: ActionModel[];
    // 属性编辑列表
    attribute?: ComponentSchema[];
    // 可触发事件
    event?: EventModel[];
    // 样式编辑组件列表
    style?: ComponentSchema[];
  };
  // 默认组件结构数据
  defaultSchema: ComponentSchema;
  // 设计编辑约束
  editConstraints?: EditConstraintsModel;
  // 分组名称（组件分组），不设置分组时仅注册，但不会显示在组件列表中，可选
  groupName?: string;
  // 组件图标
  icon?: string;
  // 用于组件排序，可选 默认值1000, 值越小，组件越靠前
  sort?: number;
}

export type ComponentConfigModelRecords = Record<string, ComponentConfigModel>;

export interface PublicMethodModel {
  name: string;
  description?: string; 
  handler: Function;

  /**
   * @deprecated 此属性用于兼容旧版，后期可能会移除，请避免使用。
   */
  describe?: string; 


  /**
   * @deprecated 此属性用于兼容旧版，后期可能会移除，请避免使用。
   */
  method?: Function; 

  /**
   * @deprecated 此属性用于兼容旧版，后期可能会移除，请避免使用。
   */
  methodName?: string; 
}

export type PublicMethodsModel = Record<string, PublicMethodModel>;

export interface ComponentGroup {
  list: ComponentSchema[];
  title: string;
}

export type ComponentSchemaGroups = ComponentGroup[];

// 插件管理器类
export class PluginManager {
  // 基础组件type，切换ui时，可先移除该数组记录的type
  baseComponentTypes: string[] = [];

  // 组件配置记录字典，key 为组件type，value 为组件配置
  componentConfigs: ComponentConfigModelRecords = {};

  // 组件分组名称映射，key 为组件原名称，value 为组件分组映射名称
  componentGroupNameMap: Record<string, string> = {};

  // 组件对象字典，key 为组件type，value 为组件
  components: Components = {};

  // 组件模式分组，使用 Vue Composition API 的 ref 进行响应式处理
  componentSchemaGroups = ref<ComponentSchemaGroups>([]);

  // 表单模式默认schema数据
  formSchemas: ComponentSchema[] = [
    {
      componentProps: {
        colon: true,
        labelAlign: 'right',
        labelCol: {
          span: 5,
        },
        labelLayout: 'fixed',
        labelPlacement: 'left',
        labelWidth: 100,
        layout: 'horizontal',
        name: 'default',
        wrapperCol: {
          span: 19,
        },
      },
      id: 'root',
      label: '表单',
      type: 'form',
      children: [],
    },
  ];

  // 隐藏的组件列表，存储需要隐藏的组件名称
  hiddenComponents: string[] = [];

  // 已初始化基础UI
  initialized = ref(false);

  // 公共方法模型，存储插件的公共方法
  publicMethods: PublicMethodsModel = {
    // 示例数据
    // publicTest: {
    //   describe: "测试函数",
    //   name: "test",
    //   handler: (e) => {
    //     console.log(e)
    //     // alert("测试函数弹出");
    //   },
    // },
  };

  // 组件分组排序列表(设置之后，按该数组下标排序)
  sortedGroups: string[] = ['表单', '布局'];

  // 视图容器模型，包含活动栏和右侧边栏的配置
  viewsContainers: ViewsContainersModel = {
    activitybars: shallowRef([]), // 活动栏配置列表
    rightSidebars: shallowRef([]), // 右侧边栏配置列表
  };

  /**
   * 添加基础组件类型
   * @param baseComponentType 基础组件类型
   */
  addBaseComponentTypes(baseComponentType: string) {
    this.baseComponentTypes.push(baseComponentType);
  }

  /**
   * 添加公共方法
   * @param publicMethod
   */
  addPublicMethod(publicMethod: PublicMethodModel): void {
    // 兼容旧公共函数注册，后期可能移除该判断
    // methodName 变量改成 name
    // method 变量改成 handler
    const name = publicMethod.methodName ?? publicMethod.name;
    const handler = publicMethod.method ?? publicMethod.handler;
    const description = publicMethod.describe ?? publicMethod.description;

    this.publicMethods[name] = {
      description,
      handler,
      name,
    };
  }

  /**
   * 清空组件分组名称到映射名称的关系
   */
  clearComponentGroupNameMap() {
    this.componentGroupNameMap = {};
  }

  /**
   * 清空组件分组的排序
   */
  clearSortedGroups() {
    this.sortedGroups = [];
    this.computedComponentSchemaGroups();
  }

  /**
   * 添加组件到插件管理器中
   * @param componentType 组件类型
   * @param component 组件
   */
  component(componentType: string, component: ComponentType): void {
    if (typeof component === 'function') {
      component = loadAsyncComponent(component as AsyncComponentLoader);
    }
    // 注册组件
    this.components[componentType] = component;
  }

  /**
   * 计算componentSchemaGroups
   */
  computedComponentSchemaGroups() {
    const componentSchemaGroups: ComponentSchemaGroups = [];

    // 遍历组件配置字典的值
    Object.values(this.componentConfigs).forEach((componentConfig) => {
      // 如果组件的默认模式的类型在隐藏组件列表中，则跳过
      if (this.hiddenComponents.includes(componentConfig.defaultSchema.type)) {
        // 跳过当前循环，继续下一个组件
        return;
      }

      // 如果组件配置中有分组名
      if (componentConfig.groupName) {
        // 查找当前分组在列表中的索引

        const groupName =
          this.componentGroupNameMap[componentConfig.groupName] ??
          componentConfig.groupName;

        let groupIndex = componentSchemaGroups.findIndex(
          (item) => item.title === groupName,
        );

        // 如果找不到分组，表示该分组还未添加过，需要新建一个分组
        if (groupIndex === -1) {
          // 创建新的分组，并将其添加到分组列表中
          componentSchemaGroups.push({
            title: groupName,
            list: [],
          });
          // 获取新添加的分组的索引
          groupIndex = componentSchemaGroups.length - 1;
        }

        // 查找当前组件在分组的列表中的索引
        const componentIndex = componentSchemaGroups[groupIndex].list.findIndex(
          (item) => item.type === componentConfig.defaultSchema.type,
        );

        // 如果找到相同类型的组件，则更新该组件结构数据
        if (componentIndex === -1) {
          // 否则将新的组件结构数据添加到相应的分组中
          componentSchemaGroups[groupIndex].list.push(
            componentConfig.defaultSchema,
          );
        } else {
          componentSchemaGroups[groupIndex].list[componentIndex] =
            componentConfig.defaultSchema;
        }
      }
    });

    // 调整分组排序
    componentSchemaGroups.sort((a: ComponentGroup, b: ComponentGroup) => {
      const indexA = this.sortedGroups.indexOf(a.title);
      const indexB = this.sortedGroups.indexOf(b.title);
      if (indexA === -1) {
        return 1; // a.title 不在 orderArray 中，排在后面
      }
      if (indexB === -1) {
        return -1; // b.title 不在 orderArray 中，排在前面
      }
      return indexA - indexB; // 按照 orderArray 中的顺序排序
    });

    // 对每个分组内部的组件按照 componentConfig.sort 字段排序
    componentSchemaGroups.forEach((group) => {
      group.list.sort((a, b) => {
        const sortA = this.componentConfigs[a.type]?.sort ?? 1000;
        const sortB = this.componentConfigs[b.type]?.sort ?? 1000;
        return sortA - sortB;
      });
    });

    this.componentSchemaGroups.value = componentSchemaGroups;
  }

  /**
   * 获取所有activitybars
   * @returns activitybars
   */
  getActivitybars(): ActivitybarModel[] {
    return this.viewsContainers.activitybars.value;
  }

  /**
   * 通过type 查询相应的组件
   * @returns components
   */
  getComponent(type: string) {
    return this.components[type];
  }

  /**
   * 通过type获取ComponentConfing
   */
  getComponentConfingByType(type: string): ComponentConfigModel {
    const componentConfig = this.componentConfigs[type];
    return componentConfig;
  }

  /**
   * 获取所有插件管理中的所有组件配置
   * @returns componentAttrs
   */
  getComponentConfings(): ComponentConfigModelRecords {
    return this.componentConfigs;
  }

  /**
   * 获取所有插件管理中的所有组件
   * @returns components
   */
  getComponents(): Components {
    return this.components;
  }
  /**
   * 按照分组获取componentSchemaGroups 暂时没啥用
   * @returns componentSchemaGroups
   */
  getComponentSchemaGroups() {
    return this.componentSchemaGroups;
  }

  /**
   * 获取所有rightSidebars
   * @returns rightSidebars
   */
  getRightSidebars(): RightSidebarModel[] {
    return this.viewsContainers.rightSidebars.value;
  }

  /**
   * 隐藏活动栏
   * @param value 属性
   * @param attr 匹配字段 title | id 默认值 title
   */
  hideActivitybar(value: string, attr: Attr= 'title') {
    this.viewsContainers.activitybars.value =
      this.viewsContainers.activitybars.value.map((activitybar) => {
        // 查找具有指定属性和值的活动栏
        if (activitybar[attr] === value) {
          // 如果找到匹配的活动栏, 将匹配的活动栏的 'visible' 属性设置为 false
          activitybar.visible = false;
        }
        return activitybar;
      });
  }

  /**
   * 添加需要隐藏的组件类型
   * @param {*} type
   */
  hideComponent(type: string) {
    this.hiddenComponents.push(type);
    this.computedComponentSchemaGroups();
  }

  /**
   * 隐藏右侧边栏
   * @param value 属性
   * @param attr 查询字段 默认值 title
   */
  hideRightSidebar(value: string, attr: Attr = 'title') {
    this.viewsContainers.rightSidebars.value =
      this.viewsContainers.rightSidebars.value.map((rightSidebar) => {
        // 查找具有指定属性和值的右侧边栏
        if (rightSidebar[attr] === value) {
          // 如果找到匹配的右侧边栏, 将匹配的右侧边栏的 'visible' 属性设置为 false
          rightSidebar.visible = false;
        }
        return rightSidebar;
      });
  }

  /**
   * 注册或更新活动栏（Activitybar）模型。
   * 如果模型中的组件是一个函数，则异步加载该组件。
   * @param activitybar 要注册或更新的活动栏模型
   */
  registerActivitybar(activitybar: ActivitybarModel): void {
    // 如果组件是一个函数，则异步加载该组件
    if (typeof activitybar.component === 'function') {
      activitybar.component = loadAsyncComponent(
        activitybar.component as AsyncComponentLoader,
      );
    }

    // 默认visible为true
    if (activitybar.visible === undefined) {
      activitybar.visible = true;
    }

    // 查找活动栏在列表中的索引
    const index = this.viewsContainers.activitybars.value.findIndex(
      (item) => item.id === activitybar.id,
    );

    // 如果找到相同 id 的活动栏，则更新该活动栏模型
    if (index === -1) {
      // 否则将新的活动栏模型添加到活动栏列表中
      this.viewsContainers.activitybars.value.push(activitybar);
    } else {
      this.viewsContainers.activitybars.value[index] = activitybar;
    }
  }

  /**
   * 注册组件到插件管理器中
   * @param componentConfig 组件配置
   */
  registerComponent(componentConfig: ComponentConfigModel): void {
    // 添加组件
    this.component(
      componentConfig.defaultSchema.type,
      componentConfig.component,
    );

    // 输入组件增加动作配置
    if (componentConfig.defaultSchema.input) {
      if (!componentConfig.config.action) {
        componentConfig.config.action = [];
      }

      // 补充组件可用方法
      componentConfig.config.action.unshift(
        {
          // 参数配置
          argsConfigs: [
            {
              ...componentConfig.defaultSchema,
              field: '0',
              label: '设置数据',
            },
          ],
          description: '设置值',
          type: 'setValue',
        },
        {
          description: '获取值',
          type: 'getValue',
        },
      );
    }

    // 添加组件配置
    this.componentConfigs[componentConfig.defaultSchema.type] = componentConfig;

    this.computedComponentSchemaGroups();
  }

  /**
   * 注册右侧栏
   */
  registerRightSidebar(rightSidebar: RightSidebarModel): void {
    if (typeof rightSidebar.component === 'function') {
      rightSidebar.component = loadAsyncComponent(
        rightSidebar.component as AsyncComponentLoader,
      );
    }

    // 默认visible为true
    if (rightSidebar.visible === undefined) {
      rightSidebar.visible = true;
    }

    const index = this.viewsContainers.rightSidebars.value.findIndex(
      (sidebar) => sidebar.id === rightSidebar.id,
    );

    if (index === -1) {
      this.viewsContainers.rightSidebars.value.push(rightSidebar);
    } else {
      this.viewsContainers.rightSidebars.value[index] = rightSidebar;
    }
  }

  /**
   * 移除已记录的基础组件类型
   */
  removeBaseComponents() {
    this.baseComponentTypes.forEach((componentType) => {
      this.removeComponent(componentType);
    });
    this.setBaseComponentTypes([]);

    this.computedComponentSchemaGroups();
  }

  /**
   * 从已记录的基础组件类型中移除特定类型的组件
   * @param componentType 要移除的组件类型
   */
  removeComponent(componentType: string) {
    // 在数组中查找要移除的组件类型的索引
    delete this.componentConfigs[componentType];
    delete this.components[componentType];
  }

  /**
   * 移除公共方法
   * @param methodName
   */
  removePublicMethod(methodName: string): void {
    delete this.publicMethods[methodName];
  }

  /**
   * 记录基础组件类型
   * @param baseComponentTypes 基础组件类型数组
   */
  setBaseComponentTypes(baseComponentTypes: string[]) {
    this.baseComponentTypes = baseComponentTypes;
  }

  /**
   * 设置组件分组名称到映射名称的关系
   * @param groupName 组件分组名称
   * @param mapName 映射的名称
   */
  setComponentGroupNameMap(groupName: string, mapName: string) {
    this.componentGroupNameMap[groupName] = mapName;
  }

  /**
   * 设置需要隐藏的组件类型数组
   * @param types 组件类型数组
   */
  setHideComponents(types: string[]) {
    this.hiddenComponents = types;
    this.computedComponentSchemaGroups();
  }

  /**
   * 设置initialized的状态。
   *
   * @param value 要设置的布尔值。
   */
  setInitialized(value: boolean): void {
    this.initialized.value = value;
  }

  /**
   * 设置组件分组的排序
   * @param sortedGroups 包含组名和排序字段的对象数组
   */
  setSortedGroups(sortedGroups: string[]) {
    this.sortedGroups = sortedGroups;
    this.computedComponentSchemaGroups();
  }

  /**
   * 显示活动栏
   * @param value 属性
   * @param attr 匹配字段 title | id 默认值 title
   */
  showActivitybar(value: string, attr: Attr= 'title') {
    this.viewsContainers.activitybars.value =
      this.viewsContainers.activitybars.value.map((activitybar) => {
        // 查找具有指定属性和值的活动栏
        if (activitybar[attr] === value) {
          // 如果找到匹配的活动栏, 将匹配的活动栏的 'visible' 属性设置为 true
          activitybar.visible = true;
        }
        return activitybar;
      });
  }

  /**
   * 移除需要隐藏的组件类型
   * @param {*} type
   */
  showComponent(type: string) {
    this.hiddenComponents = this.hiddenComponents.filter(
      (item) => item !== type,
    );
    this.computedComponentSchemaGroups();
  }

  /**
   * 显示右侧边栏
   * @param value 属性
   * @param attr 查询字段 默认值 title
   */
  showRightSidebar(value: string, attr: Attr = 'title') {
    this.viewsContainers.rightSidebars.value =
      this.viewsContainers.rightSidebars.value.map((rightSidebar) => {
        // 查找具有指定属性和值的右侧边栏
        if (rightSidebar[attr] === value) {
          // 如果找到匹配的右侧边栏, 将匹配的右侧边栏的 'visible' 属性设置为 true
          rightSidebar.visible = true;
        }
        return rightSidebar;
      });
  }
}

export const pluginManager = new PluginManager();
