import type {
  PublicMethodModel,
  PublicMethodsModel,
} from '@epic-designer/types';

import { ref } from 'vue';

import {
  useComponentManager,
  useFormSchema,
  useGlobal,
  usePanel,
} from '@epic-designer/hooks';

// 插件管理器类
export function usePluginManager() {
  const { formSchema, setFormSchema } = useFormSchema();
  const {
    addBaseComponentTypes,
    addComponent,
    baseComponentTypes,
    clearComponentGroupNameMap,
    clearSortedGroups,
    componentConfigs,
    componentGroupNameMap,
    components,
    componentSchemaGroups,
    getComponent,
    getComponentConfigByType,
    getComponentConfigs,
    getComponents,
    getComponentSchemaGroups,
    getIcon,
    getLabel,
    hiddenComponents,
    hideComponent,
    registerComponent,
    removeBaseComponents,
    removeComponent,
    setBaseComponentTypes,
    setComponentGroupNameMap,
    setHideComponents,
    setSortedGroups,
    showComponent,
    sortedGroups,
  } = useComponentManager();

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

  const {
    activityBars,
    hideActivitybar,
    hideRightSidebar,
    registerActivitybar,
    registerRightSidebar,
    rightSidebars,
    showActivitybar,
    showRightSidebar,
    viewsContainers,
  } = usePanel();

  // 全局状态管理
  const { global } = useGlobal({
    // 请求服务基础地址
    axiosConfig: {
      headers: {},
    },
    // 上传文件地址
    uploadFile: 'https://examples.epicjs.cn/epic-mock/common/upload',
    // 上传图片地址
    uploadImage: 'https://examples.epicjs.cn/epic-mock/common/upload',
  });

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
   * 移除公共方法
   * @param methodName
   */
  function removePublicMethod(methodName: string): void {
    delete publicMethods[methodName];
  }

  /**
   * 设置initialized的状态。
   *
   * @param value 要设置的布尔值。
   */
  function setInitialized(value: boolean): void {
    initialized.value = value;
  }

  const groupedReturn = {
    component: {
      add: addComponent,
      addBaseComponentTypes,
      baseComponentTypes,
      clearComponentGroupNameMap,
      clearSortedGroups,
      componentConfigs,
      componentGroupNameMap,
      components,
      componentSchemaGroups,
      getComponent,
      getComponentConfigByType,
      getComponentConfigs,
      getComponents,
      getComponentSchemaGroups,
      getIcon,
      getLabel,
      hiddenComponents,
      hideComponent,
      registerComponent,
      removeBaseComponents,
      removeComponent,
      setBaseComponentTypes,
      setComponentGroupNameMap,
      setHideComponents,
      setSortedGroups,
      showComponent,
      sortedGroups,
    },
    panel: {
      activityBars,
      hideActivitybar,
      hideRightSidebar,
      registerActivitybar,
      registerRightSidebar,
      rightSidebars,
      showActivitybar,
      showRightSidebar,
      viewsContainers,
    },
  };
  const legacyReturn = {
    activityBars,
    addBaseComponentTypes,
    addPublicMethod,
    baseComponentTypes,
    clearComponentGroupNameMap,
    clearSortedGroups,
    componentConfigs,
    componentGroupNameMap,
    components,
    componentSchemaGroups,
    formSchema,
    getComponent,
    getComponentConfigByType,
    getComponentConfigs,
    getComponents,
    getComponentSchemaGroups,
    getIcon,
    getLabel,
    global,
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
    rightSidebars,
    setBaseComponentTypes,
    setComponentGroupNameMap,
    setFormSchema,
    setHideComponents,
    setInitialized,
    setSortedGroups,
    showActivitybar,
    showComponent,
    showRightSidebar,
    sortedGroups,
    viewsContainers,
  };

  return createProxyWithWarnings(
    groupedReturn,
    legacyReturn,
  ) as typeof groupedReturn & typeof legacyReturn;
}

function createProxyWithWarnings(groupedReturn: any, legacyReturn: any) {
  const propertyGroupMap = createPropertyGroupMap(groupedReturn);
  const groupedReturnKeys = Object.keys(groupedReturn);

  return new Proxy(groupedReturn, {
    get(_target, prop) {
      // 检查是否是分组对象的直接访问（这是新API的正确用法）
      if (groupedReturnKeys.includes(prop as string)) {
        return groupedReturn[prop];
      }

      // 检查是否是旧API中存在的属性访问（需要警告）
      if (prop in propertyGroupMap) {
        const group = propertyGroupMap[prop as keyof typeof propertyGroupMap];
        console.log(group, [prop]);
        console.warn(
          `⚠️ Epic Designer: 检测到已过时的 API 使用方式\n` +
            `❌ 旧写法: pluginManager.${String(prop)}\n` +
            `✅ 新写法: pluginManager.${String(group)}.${String(prop)}`,
        );
        console.log(groupedReturn[group][prop]);
        return groupedReturn[group][prop];
      }

      return legacyReturn[prop];
    },
  });
}

// 自动生成 propertyGroupMap
function createPropertyGroupMap<T extends Record<string, Record<string, any>>>(
  groupedReturn: T,
): Record<keyof T[keyof T], keyof T> {
  const propertyGroupMap: any = {};

  // 遍历 groupedReturn 的每个分组
  (Object.keys(groupedReturn) as Array<keyof T>).forEach((groupName) => {
    const group = groupedReturn[groupName];

    // 遍历分组中的每个属性
    Object.keys(group as object).forEach((propertyName) => {
      propertyGroupMap[propertyName] = groupName;
    });
  });

  return propertyGroupMap;
}

export const pluginManager = usePluginManager();

export type PluginManager = ReturnType<typeof usePluginManager>;
