import { type ComponentSchema } from "@epic-designer/core/types/epic-designer";
import { ref, reactive, watchEffect, type ComponentPublicInstance } from "vue";
import { pluginManager } from "./pluginManager";
import { deepCompareAndModify, findSchemas } from "../index";
import { usePageSchema } from '@epic-designer/hooks'

export interface ActionsModel {
  componentId?: string;
  args: string;
  methodName: string;
  type: "component" | "public" | "custom";
}

export function usePageManager() {
  const componentInstances = ref<Record<string, ComponentPublicInstance>>({});
  const funcs = ref<Record<string, any>>({});
  // 当前模式 true 设计模式, false 渲染模式
  const isDesignMode = ref(false);
  const defaultComponentIds = ref<string[]>([]);

  const forms = reactive({});

  // 初始化
  const { pageSchema, setPageSchema } = usePageSchema()

  /**
   * 获取组件实例
   * @param queryValue 要查找的查询值
   * @param queryField - 要查找的查询字段 默认值 id
   * @returns
   */
  function getComponentInstance(queryValue: string, queryField = 'id'): ComponentPublicInstance {
    if (queryField === 'id') {
      // findSchemas()

    }

    return componentInstances.value[queryValue];
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
  * 
  * @param actions 操作数组
  * @param args 其他参数
  */
  function doActions(actions: ActionsModel[], ...args: any): void {
    // 检查是否提供了操作数组，如果没有提供，则发出警告并返回
    if (!actions || actions.length === 0) {
      console.warn('未提供任何动作');
      return;
    }

    // 遍历每个操作
    actions.forEach((action) => {
      // 尝试解析操作参数，如果没有提供，则使用传入的参数
      const methodArgs = action.args ? JSON.parse(action.args) : args;
      // 根据操作的类型，调用不同的执行函数
      switch (action.type) {
        case "public":
          // 执行公共方法
          executePublicMethod(action, methodArgs);
          break;

        case "custom":
          // 执行自定义方法
          executeCustomMethod(action, methodArgs);
          break;

        case "component":
          // 执行组件方法
          executeComponentMethod(action, methodArgs);
          break;

        default:
          // 如果遇到未知的操作类型，发出警告
          console.warn(`未知的动作类型: ${action.type}`);
          break;
      }
    });
  }

  /**
   * 执行公共方法
   * @param action 操作
   * @param args 参数
   */
  function executePublicMethod(action: ActionsModel, args: any): void {
    try {
      // 尝试调用公共方法处理程序
      pluginManager.publicMethods[action.methodName]?.handler(...args);
    } catch (err) {
      // 如果调用失败，打印错误信息
      console.error(`[Epic：公共函数(${action.methodName})]执行异常:`, err);
    }
  }

  /**
   * 执行自定义方法
   * @param action 操作
   * @param args 参数
   */
  function executeCustomMethod(action: ActionsModel, args: any): void {
    try {
      // 尝试调用自定义方法
      funcs.value[action.methodName]?.(...args);
    } catch (err) {
      // 如果调用失败，打印错误信息
      console.error(`[Epic：自定义函数(${action.methodName})]执行异常:`, err);
    }
  }

  /**
   * 执行组件方法
   * @param action 操作
   * @param args 参数
   */
  function executeComponentMethod(action: ActionsModel, args: any): void {
    // 获取组件实例
    const component =
      action.componentId != null &&
      (getComponentInstance(action.componentId) as any);

    // 如果未找到组件实例，发出警告并返回
    if (!component) {
      console.warn(`[Epic：组件${action.componentId}]未找到`);
      return;
    }

    try {
      // 调用组件的方法
      component[action.methodName](...args);
    } catch (err) {
      // 如果调用失败，打印错误信息
      console.error(`[Epic：组件${action.componentId}函数(${action.methodName})]执行异常:`, err);
    }
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

  // 监听自定义函数
  watchEffect(() => {
    const script = pageSchema.script;
    if (script && script !== "") {
      setMethods(script, !isDesignMode.value);
    }
  });

  return {
    componentInstances,
    funcs,
    isDesignMode,
    defaultComponentIds,
    pageSchema,
    setPageSchema,
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

export type PageManager = ReturnType<typeof usePageManager>;

