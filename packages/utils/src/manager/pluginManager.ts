import type {
  ActivitybarModel,
  Attr,
  ComponentConfigModel,
  ComponentConfigModelRecords,
  ComponentGroup,
  Components,
  ComponentSchemaGroups,
  ComponentType,
  PublicMethodModel,
  PublicMethodsModel,
  RightSidebarModel,
  ViewsContainersModel,
} from '@epic-designer/types';

import type { AsyncComponentLoader } from 'vue';

import { ref, shallowRef } from 'vue';

import { loadAsyncComponent } from '../common';

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

  // 表单模式默认schema数据
  // const formSchemas: ComponentSchema[] = [
  //   {
  //     componentProps: {
  //       colon: true,
  //       labelAlign: 'right',
  //       labelCol: {
  //         span: 5,
  //       },
  //       labelLayout: 'fixed',
  //       labelPlacement: 'left',
  //       labelWidth: 100,
  //       layout: 'horizontal',
  //       name: 'default',
  //       wrapperCol: {
  //         span: 19,
  //       },
  //     },
  //     id: 'root',
  //     label: '表单',
  //     type: 'form',
  //     children: [],
  //   },
  // ];

  // 隐藏的组件列表，存储需要隐藏的组件名称
  let hiddenComponents: string[] = [];

  // 已初始化基础UI
  const initialized = ref(false);

  // 公共方法模型，存储插件的公共方法
  const publicMethods: PublicMethodsModel = {
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
  let sortedGroups: string[] = ['表单', '布局'];

  // 视图容器模型，包含活动栏和右侧边栏的配置
  const viewsContainers: ViewsContainersModel = {
    activitybars: shallowRef([]), // 活动栏配置列表
    rightSidebars: shallowRef([]), // 右侧边栏配置列表
  };

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
   * 获取所有activitybars
   * @returns activitybars
   */
  function getActivitybars(): ActivitybarModel[] {
    return viewsContainers.activitybars.value;
  }

  /**
   * 通过type 查询相应的组件
   * @returns components
   */
  function getComponent(type: string) {
    return components[type];
  }

  /**
   * 通过type获取ComponentConfing
   */
  function getComponentConfingByType(type: string): ComponentConfigModel {
    const componentConfig = componentConfigs[type];
    return componentConfig;
  }

  /**
   * 获取所有插件管理中的所有组件配置
   * @returns componentAttrs
   */
  function getComponentConfings(): ComponentConfigModelRecords {
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
   * 获取所有rightSidebars
   * @returns rightSidebars
   */
  function getRightSidebars(): RightSidebarModel[] {
    return viewsContainers.rightSidebars.value;
  }

  /**
   * 隐藏活动栏
   * @param value 属性
   * @param attr 匹配字段 title | id 默认值 title
   */
  function hideActivitybar(value: string, attr: Attr = 'title') {
    viewsContainers.activitybars.value = viewsContainers.activitybars.value.map(
      (activitybar) => {
        // 查找具有指定属性和值的活动栏
        if (activitybar[attr] === value) {
          // 如果找到匹配的活动栏, 将匹配的活动栏的 'visible' 属性设置为 false
          activitybar.visible = false;
        }
        return activitybar;
      },
    );

    console.log(viewsContainers.activitybars.value);
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
   * 隐藏右侧边栏
   * @param value 属性
   * @param attr 查询字段 默认值 title
   */
  function hideRightSidebar(value: string, attr: Attr = 'title') {
    viewsContainers.rightSidebars.value =
      viewsContainers.rightSidebars.value.map((rightSidebar) => {
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
  function registerActivitybar(activitybar: ActivitybarModel): void {
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

    // 默认sort设置为1000
    if (activitybar.sort === undefined) {
      activitybar.sort = 1000;
    }

    // 查找活动栏在列表中的索引
    const index = viewsContainers.activitybars.value.findIndex(
      (item) => item.id === activitybar.id,
    );

    // 如果找到相同 id 的活动栏，则更新该活动栏模型
    if (index === -1) {
      // 否则将新的活动栏模型添加到活动栏列表中
      viewsContainers.activitybars.value.push(activitybar);
    } else {
      viewsContainers.activitybars.value[index] = activitybar;
    }
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
   * 注册右侧栏
   */
  function registerRightSidebar(rightSidebar: RightSidebarModel): void {
    if (typeof rightSidebar.component === 'function') {
      rightSidebar.component = loadAsyncComponent(
        rightSidebar.component as AsyncComponentLoader,
      );
    }

    // 默认visible为true
    if (rightSidebar.visible === undefined) {
      rightSidebar.visible = true;
    }

    // 默认sort设置为1000
    if (rightSidebar.sort === undefined) {
      rightSidebar.sort = 1000;
    }

    const index = viewsContainers.rightSidebars.value.findIndex(
      (sidebar) => sidebar.id === rightSidebar.id,
    );

    if (index === -1) {
      viewsContainers.rightSidebars.value.push(rightSidebar);
    } else {
      viewsContainers.rightSidebars.value[index] = rightSidebar;
    }
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
   * 显示活动栏
   * @param value 属性
   * @param attr 匹配字段 title | id 默认值 title
   */
  function showActivitybar(value: string, attr: Attr = 'title') {
    viewsContainers.activitybars.value = viewsContainers.activitybars.value.map(
      (activitybar) => {
        // 查找具有指定属性和值的活动栏
        if (activitybar[attr] === value) {
          // 如果找到匹配的活动栏, 将匹配的活动栏的 'visible' 属性设置为 true
          activitybar.visible = true;
        }
        return activitybar;
      },
    );
  }

  /**
   * 移除需要隐藏的组件类型
   * @param {*} type
   */
  function showComponent(type: string) {
    hiddenComponents = hiddenComponents.filter((item) => item !== type);
    computedComponentSchemaGroups();
  }

  /**
   * 显示右侧边栏
   * @param value 属性
   * @param attr 查询字段 默认值 title
   */
  function showRightSidebar(value: string, attr: Attr = 'title') {
    viewsContainers.rightSidebars.value =
      viewsContainers.rightSidebars.value.map((rightSidebar) => {
        // 查找具有指定属性和值的右侧边栏
        if (rightSidebar[attr] === value) {
          // 如果找到匹配的右侧边栏, 将匹配的右侧边栏的 'visible' 属性设置为 true
          rightSidebar.visible = true;
        }
        return rightSidebar;
      });
  }

  return {
    addBaseComponentTypes,
    addPublicMethod,
    baseComponentTypes,
    clearComponentGroupNameMap,
    clearSortedGroups,
    component,
    componentConfigs,
    componentGroupNameMap,
    components,
    componentSchemaGroups,
    getActivitybars,
    getComponent,
    getComponentConfingByType,
    getComponentConfings,
    getComponents,
    getComponentSchemaGroups,
    getRightSidebars,
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
    setBaseComponentTypes,
    setComponentGroupNameMap,
    setHideComponents,
    setInitialized,
    setSortedGroups,
    showActivitybar,
    showComponent,
    showRightSidebar,
    sortedGroups,
    viewsContainers,
  };
}

export const pluginManager = usePluginManager();

export type PluginManager = ReturnType<typeof usePluginManager>;
