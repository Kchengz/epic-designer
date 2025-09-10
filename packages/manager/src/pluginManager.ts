import type {
  ComponentConfigModel,
  ComponentConfigModelRecords,
  ComponentGroup,
  Components,
  ComponentSchemaGroups,
  ComponentType,
  PublicMethodModel,
  PublicMethodsModel,
} from '@epic-designer/types';

import type { AsyncComponentLoader } from 'vue';

import { ref } from 'vue';

import { useFormSchema, usePanel, useState } from '@epic-designer/hooks';
import { loadAsyncComponent } from '@epic-designer/utils';

// 插件管理器类
export function usePluginManager() {
  // 基础组件type，切换ui时，可先移除该数组记录的type
  let baseComponentTypes: string[] = [];

  // 组件配置记录字典，key 为组件type，value 为组件配置
  const componentConfigs: ComponentConfigModelRecords = {};

  // 组件分组名称映射，key 为组件原名称，value 为组件分组映射名称
  let componentGroupNameMap: Record<string, string> = {};

  // 组件对象字典，key 为组件type，value 为组件
  const components: Components = {};

  // 组件模式分组，使用 Vue Composition API 的 ref 进行响应式处理
  const componentSchemaGroups = ref<ComponentSchemaGroups>([]);

  const { formSchema, setFormSchema } = useFormSchema();

  // 隐藏的组件列表，存储需要隐藏的组件名称
  let hiddenComponents: string[] = [];

  // 已初始化基础UI
  const initialized = ref(false);

  // 公共方法模型，存储插件的公共方法
  const publicMethods: PublicMethodsModel = {
    // 示例数据
    // publicTest: {
    //   description: '测试函数',
    //   handler: (e) => {
    //     console.log(e);
    //     // alert("测试函数弹出");
    //   },
    //   name: 'test',
    // },
  };

  // 组件分组排序列表(设置之后，按该数组下标排序)
  let sortedGroups: string[] = ['表单', '布局'];

  const {
    getActivitybars,
    getRightSidebars,
    hideActivitybar,
    hideRightSidebar,
    registerActivitybar,
    registerRightSidebar,
    showActivitybar,
    showRightSidebar,
    viewsContainers,
  } = usePanel();

  // 全局状态管理
  const {
    clearState,
    getState,
    removeState,
    resetState,
    setState,
    setStates,
    state,
  } = useState();

  /**
   * 添加基础组件类型
   * @param baseComponentType 基础组件类型
   */
  function addBaseComponentTypes(baseComponentType: string) {
    baseComponentTypes.push(baseComponentType);
  }

  /**
   * 添加公共方法
   * @param publicMethod
   */
  function addPublicMethod(publicMethod: PublicMethodModel): void {
    if (publicMethod.methodName) {
      console.warn(
        `[Epic:公共函数]注册配置'methodName'属性已弃用,请使用'name'代替`,
      );
    }

    if (publicMethod.method) {
      console.warn(
        `[Epic:公共函数]注册配置'method'属性已弃用,请使用'handler'代替`,
      );
    }

    if (publicMethod.describe) {
      console.warn(
        `[Epic:公共函数]注册配置'describe'属性已弃用,请使用'description'代替`,
      );
    }

    // 兼容旧公共函数注册，后期可能移除该判断
    const name = publicMethod.methodName ?? publicMethod.name;
    const handler = publicMethod.method ?? publicMethod.handler;
    const description = publicMethod.describe ?? publicMethod.description;

    publicMethods[name] = {
      description,
      handler,
      name,
    };
  }

  /**
   * 清空组件分组名称到映射名称的关系
   */
  function clearComponentGroupNameMap() {
    componentGroupNameMap = {};
  }

  /**
   * 清空组件分组的排序
   */
  function clearSortedGroups() {
    sortedGroups = [];
    computedComponentSchemaGroups();
  }

  /**
   * 添加组件到插件管理器中
   * @param componentType 组件类型
   * @param component 组件
   */
  function component(componentType: string, component: ComponentType): void {
    if (typeof component === 'function') {
      component = loadAsyncComponent(component as AsyncComponentLoader);
    }
    // 注册组件
    components[componentType] = component;
  }

  /**
   * 计算componentSchemaGroups
   */
  function computedComponentSchemaGroups() {
    const componentGroups: ComponentSchemaGroups = [];

    // 遍历组件配置字典的值
    Object.values(componentConfigs).forEach((componentConfig) => {
      // 如果组件的默认模式的类型在隐藏组件列表中，则跳过
      if (hiddenComponents.includes(componentConfig.defaultSchema.type)) {
        // 跳过当前循环，继续下一个组件
        return;
      }

      // 如果组件配置中有分组名
      if (componentConfig.groupName) {
        // 查找当前分组在列表中的索引

        const groupName =
          componentGroupNameMap[componentConfig.groupName] ??
          componentConfig.groupName;

        let groupIndex = componentGroups.findIndex(
          (item) => item.title === groupName,
        );

        // 如果找不到分组，表示该分组还未添加过，需要新建一个分组
        if (groupIndex === -1) {
          // 创建新的分组，并将其添加到分组列表中
          componentGroups.push({
            title: groupName,
            list: [],
          });
          // 获取新添加的分组的索引
          groupIndex = componentGroups.length - 1;
        }

        // 查找当前组件在分组的列表中的索引
        const componentIndex = componentGroups[groupIndex].list.findIndex(
          (item) => item.type === componentConfig.defaultSchema.type,
        );

        // 如果找到相同类型的组件，则更新该组件结构数据
        if (componentIndex === -1) {
          // 否则将新的组件结构数据添加到相应的分组中
          componentGroups[groupIndex].list.push(componentConfig.defaultSchema);
        } else {
          componentGroups[groupIndex].list[componentIndex] =
            componentConfig.defaultSchema;
        }
      }
    });

    // 调整分组排序
    componentGroups.sort((a: ComponentGroup, b: ComponentGroup) => {
      const indexA = sortedGroups.indexOf(a.title);
      const indexB = sortedGroups.indexOf(b.title);
      if (indexA === -1) {
        return 1; // a.title 不在 orderArray 中，排在后面
      }
      if (indexB === -1) {
        return -1; // b.title 不在 orderArray 中，排在前面
      }
      return indexA - indexB; // 按照 orderArray 中的顺序排序
    });

    // 对每个分组内部的组件按照 componentConfig.sort 字段排序
    componentGroups.forEach((group) => {
      group.list.sort((a, b) => {
        const sortA = componentConfigs[a.type]?.sort ?? 1000;
        const sortB = componentConfigs[b.type]?.sort ?? 1000;
        return sortA - sortB;
      });
    });

    componentSchemaGroups.value = componentGroups;
  }

  /**
   * 通过type 查询相应的组件
   * @returns components
   */
  function getComponent(type: string) {
    return components[type];
  }

  /**
   * 获取
   * @param type
   * @returns label
   */
  function getLabel(type: string) {
    return getComponentConfigByType(type)?.defaultSchema.label ?? '';
  }

  /**
   * 获取图标
   * @param type
   * @returns icon
   */
  function getIcon(type: string) {
    return getComponentConfigByType(type)?.icon ?? 'icon--epic--component';
  }

  /**
   * 通过type获取ComponentConfig
   */
  function getComponentConfigByType(type: string): ComponentConfigModel {
    const componentConfig = componentConfigs[type];
    return componentConfig;
  }

  /**
   * 获取所有插件管理中的所有组件配置
   * @returns componentAttrs
   */
  function getComponentConfigs(): ComponentConfigModelRecords {
    return componentConfigs;
  }

  /**
   * 获取所有插件管理中的所有组件
   * @returns components
   */
  function getComponents(): Components {
    return components;
  }
  /**
   * 按照分组获取componentSchemaGroups 暂时没啥用
   * @returns componentSchemaGroups
   */
  function getComponentSchemaGroups() {
    return componentSchemaGroups;
  }

  /**
   * 添加需要隐藏的组件类型
   * @param {*} type
   */
  function hideComponent(type: string) {
    hiddenComponents.push(type);
    computedComponentSchemaGroups();
  }

  /**
   * 注册组件到插件管理器中
   * @param componentConfig 组件配置
   */
  function registerComponent(componentConfig: ComponentConfigModel): void {
    // 添加组件
    component(componentConfig.defaultSchema.type, componentConfig.component);

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
    componentConfigs[componentConfig.defaultSchema.type] = componentConfig;

    computedComponentSchemaGroups();
  }

  /**
   * 移除已记录的基础组件类型
   */
  function removeBaseComponents() {
    baseComponentTypes.forEach((componentType) => {
      removeComponent(componentType);
    });
    setBaseComponentTypes([]);

    computedComponentSchemaGroups();
  }

  /**
   * 从已记录的基础组件类型中移除特定类型的组件
   * @param componentType 要移除的组件类型
   */
  function removeComponent(componentType: string) {
    // 在数组中查找要移除的组件类型的索引
    delete componentConfigs[componentType];
    delete components[componentType];
  }

  /**
   * 移除公共方法
   * @param methodName
   */
  function removePublicMethod(methodName: string): void {
    delete publicMethods[methodName];
  }

  /**
   * 记录基础组件类型
   * @param baseTypes 基础组件类型数组
   */
  function setBaseComponentTypes(baseTypes: string[]) {
    baseComponentTypes = baseTypes;
  }

  /**
   * 设置组件分组名称到映射名称的关系
   * @param groupName 组件分组名称
   * @param mapName 映射的名称
   */
  function setComponentGroupNameMap(groupName: string, mapName: string) {
    componentGroupNameMap[groupName] = mapName;
  }

  /**
   * 设置需要隐藏的组件类型数组
   * @param types 组件类型数组
   */
  function setHideComponents(types: string[]) {
    hiddenComponents = types;
    computedComponentSchemaGroups();
  }

  /**
   * 设置initialized的状态。
   *
   * @param value 要设置的布尔值。
   */
  function setInitialized(value: boolean): void {
    initialized.value = value;
  }

  /**
   * 设置组件分组的排序
   * @param groups 包含组名和排序字段的对象数组
   */
  function setSortedGroups(groups: string[]) {
    sortedGroups = groups;
    computedComponentSchemaGroups();
  }

  /**
   * 移除需要隐藏的组件类型
   * @param {*} type
   */
  function showComponent(type: string) {
    hiddenComponents = hiddenComponents.filter((item) => item !== type);
    computedComponentSchemaGroups();
  }

  return {
    addBaseComponentTypes,
    addPublicMethod,
    baseComponentTypes,
    clearComponentGroupNameMap,
    clearSortedGroups,
    clearState,
    component,
    componentConfigs,
    componentGroupNameMap,
    components,
    componentSchemaGroups,
    formSchema,
    getActivitybars,
    getComponent,
    getComponentConfigByType,
    getComponentConfigs,
    getComponents,
    getComponentSchemaGroups,
    getIcon,
    getLabel,
    getRightSidebars,
    getState,
    hiddenComponents,
    hideActivitybar,
    hideComponent,
    hideRightSidebar,
    initialized,
    publicMethods,
    registerActivitybar,
    registerComponent,
    registerRightSidebar,
    removeBaseComponents,
    removeComponent,
    removePublicMethod,
    removeState,
    resetState,
    setBaseComponentTypes,
    setComponentGroupNameMap,
    setFormSchema,
    setHideComponents,
    setInitialized,
    setSortedGroups,
    setState,
    setStates,
    showActivitybar,
    showComponent,
    showRightSidebar,
    sortedGroups,
    state,
    viewsContainers,
  };
}

export const pluginManager = usePluginManager();

export type PluginManager = ReturnType<typeof usePluginManager>;
