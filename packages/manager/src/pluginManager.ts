import type { Ref } from 'vue';

import { ref } from 'vue';

import {
  useComponentManager,
  useFormSchema,
  useGlobal,
  usePanel,
  usePublicMethods,
} from '@epic-designer/hooks';

export interface PluginManager {
  component: ReturnType<typeof useComponentManager> & {
    add: ReturnType<typeof useComponentManager>['addComponent'];
    clearGroupNameMap: ReturnType<
      typeof useComponentManager
    >['clearComponentGroupNameMap'];
    get: ReturnType<typeof useComponentManager>['getComponent'];
    getConfigByType: ReturnType<
      typeof useComponentManager
    >['getComponentConfigByType'];
    hide: ReturnType<typeof useComponentManager>['hideComponent'];
    hideComponents: ReturnType<typeof useComponentManager>['setHideComponents'];
    register: ReturnType<typeof useComponentManager>['registerComponent'];
    remove: ReturnType<typeof useComponentManager>['removeComponent'];
    setComponentGroupNameMap: ReturnType<
      typeof useComponentManager
    >['setComponentGroupNameMap'];
    setGroupNameMap: ReturnType<
      typeof useComponentManager
    >['setComponentGroupNameMap'];
    show: ReturnType<typeof useComponentManager>['showComponent'];
  };
  designer: {
    formSchema: ReturnType<typeof useFormSchema>['formSchema'];
    initialized: Ref<boolean>;
    setFormSchema: ReturnType<typeof useFormSchema>['setFormSchema'];
    setInitialized: (value: boolean) => void;
  };
  global: ReturnType<typeof useGlobal>['global'];
  panel: ReturnType<typeof usePanel>;
  publicMethods: ReturnType<typeof usePublicMethods> & {
    add: ReturnType<typeof usePublicMethods>['addPublicMethod'];
    remove: ReturnType<typeof usePublicMethods>['removePublicMethod'];
  };
}

// 插件管理器类
export function usePluginManager(): PluginManager {
  const { formSchema, setFormSchema } = useFormSchema();
  const {
    addBaseComponentType,
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

  const {
    activityBars,
    hideActivitybar,
    hideRightSidebar,
    registerActivitybar,
    registerRightSidebar,
    rightSidebars,
    showActivitybar,
    showRightSidebar,
  } = usePanel();

  const { addPublicMethod, methodsMap, removePublicMethod } =
    usePublicMethods();

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
      addBaseComponentType,
      baseComponentTypes,
      clearComponentGroupNameMap,
      clearGroupNameMap: clearComponentGroupNameMap,
      clearSortedGroups,
      componentConfigs,
      componentGroupNameMap,
      components,
      componentSchemaGroups,
      get: getComponent,
      getComponent,
      getComponentConfigByType,
      getComponentConfigs,
      getComponents,
      getComponentSchemaGroups,
      getConfigByType: getComponentConfigByType,
      getIcon,
      getLabel,
      hiddenComponents,
      hide: hideComponent,
      hideComponent,
      hideComponents: setHideComponents,
      register: registerComponent,
      registerComponent,
      remove: removeComponent,
      removeBaseComponents,
      removeComponent,
      setBaseComponentTypes,
      setComponentGroupNameMap,
      setGroupNameMap: setComponentGroupNameMap,
      setHideComponents,
      setSortedGroups,
      show: showComponent,
      showComponent,
      sortedGroups,
    },
    designer: {
      formSchema,
      initialized,
      setFormSchema,
      setInitialized,
    },
    global,
    panel: {
      activityBars,
      hideActivitybar,
      hideRightSidebar,
      registerActivitybar,
      registerRightSidebar,
      rightSidebars,
      showActivitybar,
      showRightSidebar,
    },
    publicMethods: {
      add: addPublicMethod,
      addPublicMethod,
      methodsMap,
      remove: removePublicMethod,
      removePublicMethod,
    },
  };

  return createProxyWithWarnings(groupedReturn) as PluginManager;
}

function createProxyWithWarnings(groupedReturn: any) {
  const propertyGroupMap = createPropertyGroupMap(groupedReturn);
  const groupedReturnKeys = Object.keys(groupedReturn);
  const simplifiedFunctionMap: Record<string, string> = {
    addPublicMethod: 'add',
    clearComponentGroupNameMap: 'clearGroupNameMap',
    getComponent: 'get',
    getComponentConfigByType: 'getConfigByType',
    hideComponent: 'hide',
    registerComponent: 'register',
    removeComponent: 'remove',
    removePublicMethod: 'remove',
    setComponentGroupNameMap: 'setGroupNameMap',
    setHideComponents: 'hideComponents',
    showComponent: 'show',
  };
  return new Proxy(groupedReturn, {
    get(_target, prop) {
      // 检查是否是分组对象的直接访问（这是新API的正确用法）
      if (groupedReturnKeys.includes(prop as string)) {
        return groupedReturn[prop];
      }

      // 检查是否是旧API中存在的属性访问（需要警告）
      if (prop in propertyGroupMap) {
        const group = propertyGroupMap[prop as keyof typeof propertyGroupMap];
        const oldProp = prop;
        if (simplifiedFunctionMap[prop as string]) {
          prop = simplifiedFunctionMap[prop as string];
        }
        console.warn(
          `Epic Designer: 检测到已过时的 API 使用方式, 请尽快迁移到新 API.\n` +
            `❌ 旧写法: pluginManager.${String(oldProp)}\n` +
            `✅ 新写法: pluginManager.${String(group)}.${String(prop)}`,
        );

        return groupedReturn[group][prop];
      }

      return groupedReturn[prop];
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
