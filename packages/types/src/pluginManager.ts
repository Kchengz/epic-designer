import type { AsyncComponentLoader, Component, ShallowRef } from 'vue';

import type { ComponentSchema } from './epic-designer';
// 定义 ComponentType 类型
export type ComponentType = AsyncComponentLoader | Component | string;

export type Attr = 'id' | 'title';

export interface ActivitybarModel {
  component: ComponentType;
  icon: string;
  id: string;
  sort?: number;
  title: string;
  visible?: boolean;
}

export interface RightSidebarModel {
  component: ComponentType;
  id: string;
  sort?: number;
  title: string;
  visible?: boolean;
}

export interface ViewsContainersModel {
  activitybars: ShallowRef<ActivitybarModel[]>;
  rightSidebars: ShallowRef<RightSidebarModel[]>;
}

export type Components = Record<string, ComponentType>;

export interface EventModel {
  /**
   * @deprecated 此属性用于兼容旧版，后期可能会移除，请使用description属性代替。
   */
  describe?: string;
  description: string;

  type: string;
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
  /**
   * @deprecated 此属性用于兼容旧版，后期可能会移除，请使用description属性代替。
   */
  describe?: string;
  description?: string;
  handler: Function;

  /**
   * @deprecated 此属性用于兼容旧版，后期可能会移除，请使用handler属性代替。
   */
  method?: Function;

  /**
   * @deprecated 此属性用于兼容旧版，后期可能会移除，请使用name属性代替。
   */
  methodName?: string;

  name: string;
}

export type PublicMethodsModel = Record<string, PublicMethodModel>;

export interface ComponentGroup {
  list: ComponentSchema[];
  title: string;
}

export type ComponentSchemaGroups = ComponentGroup[];
