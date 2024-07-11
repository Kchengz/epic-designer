import { type ComponentSchema } from "@epic-designer/core/types/epic-designer";
import { ref, reactive, type Ref, type ComponentPublicInstance } from "vue";
import { pluginManager } from "./pluginManager";
import { deepCompareAndModify } from "../index";
import { findSchemas } from "../index";


export interface ActionsModel {
  componentId?: string;
  args: string;
  methodName: string;
  type: "component" | "public" | "custom";
}
export interface PageManager {
  componentInstances: Ref<Record<string, ComponentPublicInstance>>;
  funcs: Ref<Record<string, any>>;
  isDesignMode: Ref<boolean>;
  defaultComponentIds: Ref<string[]>;
  forms: Record<string, any>;
  addFormData(formData: Record<string, any>, formName?: string): void;
  setFormData(formData: Record<string, any>, formName?: string): void;
  getComponentInstance: (id: string) => ComponentPublicInstance;
  find: (id: string) => ComponentPublicInstance;
  addComponentInstance: (id: string, instance: ComponentPublicInstance) => void;
  removeComponentInstance: (id: string) => void;
  setMethods: (scriptStr: string, outputError?: boolean) => void;
  doActions: (actions: ActionsModel[], ...args: any) => void;
  setDesignMode: (isDesign?: boolean) => void;
  setDefaultComponentIds: (schemas: ComponentSchema[]) => void;
}

export function usePageManager(): PageManager {
  const componentInstances = ref<Record<string, ComponentPublicInstance>>({});
  const funcs = ref<Record<string, any>>({});
  // 当前模式 true 设计模式, false 渲染模式
  const isDesignMode = ref(false);
  const defaultComponentIds = ref<string[]>([]);

  const forms = reactive({});

  /**
   * 获取组件实例
   * @param id
   * @returns
   */
  function getComponentInstance(id: string): ComponentPublicInstance {
    return componentInstances.value[id];
  }

  /**
   * 添加组件实例
   * @param id
   * @param instance
   * @returns
   */
  function addComponentInstance(id: string, instance: ComponentPublicInstance) {
    componentInstances.value[id] = instance;
  }
  /**
   * 移除组件实例
   * @param id
   * @returns
   */
  function removeComponentInstance(id: string): void {
    delete componentInstances.value[id];
  }

  /**
   * 动态创建函数
   * @param scriptStr
   */
  function setMethods(scriptStr: string, outputError: boolean = false): void {
    // 将PublicMethodsModel 映射为 Record<string, () => any>
    const publicMethods: Record<string, () => any> = Object.entries(
      pluginManager.publicMethods
    ).reduce((acc: any, [key, value]) => {

      acc[key] = value.handler;
      return acc;
    }, {});

    try {
      new Function(`const epic = this;${scriptStr}`).bind({
        ...publicMethods,
        getComponent: getComponentInstance,
        find: getComponentInstance,
        defineExpose,
        publicMethods: publicMethods,
        pluginManager,
      })();
    } catch (error) {
      if (outputError) {
        console.error("[epic：自定义函数]异常：", error);
      }
    }
  }

  /**
   *  存储自定义脚本暴露的函数及属性
   * @param exposed
   */
  function defineExpose(exposed?: Record<string, any> | undefined): void {
    if (exposed != null) {
      funcs.value = exposed;
    }
  }

  /**
   * 执行一组操作
   * @param actions 操作数组
   */
  function doActions(actions: ActionsModel[], ...args: any): void {
    actions?.forEach((action) => {
      if (action.type === "public") {
        pluginManager.publicMethods[action.methodName]?.handler(...args);
      }

      if (action.type === "custom") {
        try{
          funcs.value[action.methodName]?.(...args);
        }catch(err){
          console.error(`[epic：自定义函数(${action.methodName})]执行异常:`,err)
        }
      }

      if (action.type === "component") {
        const component =
          action.componentId != null &&
          (getComponentInstance(action.componentId) as any);

        component[action.methodName](
          ...(action.args ? JSON.parse(action.args) : args)
        );
        return;
      }
    });
  }

  /**
   * 设置设计模式的状态
   * @param isDesignMode 是否处于设计模式
   */
  function setDesignMode(isDesign: boolean = true): void {
    isDesignMode.value = isDesign;
  }


  function setDefaultComponentIds(schemas: ComponentSchema[]) {
    const componentSchemas = findSchemas(schemas, () => true) as ComponentSchema[]
    defaultComponentIds.value = componentSchemas.map(item => item.id as string)
  }

  // 添加表单数据，内部表单
  function addFormData(formData: Record<string, any>, formName: string = 'default') {
    if (forms[formName]) {
      const oldData = forms[formName]
      deepCompareAndModify(formData, oldData);
    }
    forms[formName] = formData
  }

  // 设置表单数据，外部
  function setFormData(formData: Record<string, any>, formName: string = 'default') {
    if (forms[formName]) {
      deepCompareAndModify(forms[formName], formData, false)
      return
    }

    forms[formName] = formData
  }

  return {
    componentInstances,
    funcs,
    isDesignMode,
    defaultComponentIds,
    forms,
    addFormData,
    setFormData,
    getComponentInstance,
    // 简化查询函数, 推荐使用
    find: getComponentInstance,
    addComponentInstance,
    removeComponentInstance,
    setMethods,
    doActions,
    setDesignMode,
    setDefaultComponentIds
  };
}
