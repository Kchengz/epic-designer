import type { ComponentSchema } from '@epic-designer/core/types/epic-designer';

import type { ComponentPublicInstance } from 'vue';

import { reactive, ref, watchEffect } from 'vue';

import { usePageSchema } from '@epic-designer/hooks';

import { deepCompareAndModify, findSchemas, getValueByPath } from '../index';
import { pluginManager } from './pluginManager';

export interface ActionsModel {
  args: string;
  componentId?: string;
  methodName: string;
  type: 'component' | 'custom' | 'public';
}

export function usePageManager() {
  const componentInstances = ref<Record<string, ComponentPublicInstance>>({});
  const funcs = ref<Record<string, Function>>({});
  // 当前模式 true 设计模式, false 渲染模式
  const isDesignMode = ref(false);
  const defaultComponentIds = ref<string[]>([]);

  const forms = reactive<Record<string, unknown>>({});

  // 初始化
  const { pageSchema, setPageSchema } = usePageSchema();

  /**
   * 查找组件实例
   * @param queryValue - 要查找的查询值
   * @param queryField - 要查找的查询字段，默认为 "id"
   * @returns - 匹配的组件实例，若无匹配则返回 null
   */
  function find(
    queryValue: string,
    queryField = 'id',
  ): ComponentPublicInstance | null {
    // 如果查询字段是 id，直接在组件实例映射中查找
    if (queryField === 'id') {
      return componentInstances.value[queryValue] ?? null;
    }

    // 通过递归查询所有组件 schema，找到第一个与指定字段和值匹配的 schema
    const matchingSchema = findSchemas(
      pageSchema.schemas,
      (schema) => getValueByPath(schema, queryField) === queryValue,
      true,
    ) as ComponentSchema | false;

    // 如果未找到匹配的 schema，返回 null
    if (!matchingSchema) {
      return null;
    }

    // 返回组件实例
    return componentInstances.value[matchingSchema.id ?? ''] ?? null;
  }

  /**
   * 查找所有匹配的组件实例
   * @param queryValue - 要查找的查询值
   * @param queryField - 要查找的查询字段，默认为 "id"
   * @returns - 匹配的组件实例数组
   */
  function findAll(
    queryValue: string,
    queryField = 'id',
  ): ComponentPublicInstance[] {
    // 如果查询字段是 id，直接返回对应的组件实例数组
    if (queryField === 'id') {
      const instance = componentInstances.value[queryValue];
      return instance ? [instance] : [];
    }

    // 通过递归查询所有组件 schema，找到与指定字段和值匹配的 schema
    const matchingSchemas = findSchemas(
      pageSchema.schemas,
      (schema) => getValueByPath(schema, queryField) === queryValue,
    ) as ComponentSchema[];

    // 从匹配的 schema 中获取组件实例
    return matchingSchemas
      .map((schema) => componentInstances.value[schema.id ?? ''])
      .filter(Boolean); // 过滤掉 undefined 或 null 的实例
  }

  /**
   * 查找组件（废弃）
   * @param queryValue 要查找的查询值
   * @param queryField - 要查找的查询字段 默认值 id
   */
  function getComponent(queryValue: string, queryField = 'id') {
    console.warn(
      '[Epic 自定义函数]: `getComponent`方法已废弃，后续版本可能移除该函数，请使用`find`方法',
    );
    return find(queryValue, queryField);
  }

  /**
   * 添加组件实例
   * @param id
   * @param instance
   */
  function addComponentInstance(id: string, instance: ComponentPublicInstance) {
    componentInstances.value[id] = instance;
  }
  /**
   * 移除组件实例
   * @param id
   */
  function removeComponentInstance(id: string): void {
    delete componentInstances.value[id];
  }

  /**
   * 动态创建函数
   * @param scriptStr
   */
  function setMethods(scriptStr: string, outputError: boolean = false): void {
    // 初始化一个空对象来存储最终结果
    const publicMethods: Record<string, Function> = {};

    // 遍历 pluginManager.publicMethods 对象的属性
    for (const key in pluginManager.publicMethods) {
      if (
        Object.prototype.hasOwnProperty.call(pluginManager.publicMethods, key)
      ) {
        // 将每个属性的 handler 赋值给新对象的对应属性
        publicMethods[key] = pluginManager.publicMethods[key].handler;
      }
    }

    try {
      // eslint-disable-next-line no-new-func
      new Function(`const epic = this;${scriptStr}`).bind({
        ...publicMethods,
        defineExpose,
        find,
        findAll,
        getComponent,
        pluginManager,
        publicMethods,
      })();
    } catch (error) {
      if (outputError) {
        console.error('[Epic：自定义函数]异常：', error);
      }
    }
  }

  /**
   *  存储自定义脚本暴露的函数及属性
   * @param exposed
   */
  function defineExpose(exposed?: Record<string, Function> | undefined): void {
    if (exposed) {
      funcs.value = exposed;
    }
  }

  /**
   * 执行一组操作
   *
   * @param actions 操作数组
   * @param args 其他参数
   */
  function doActions(actions: ActionsModel[], ...args: unknown[]): void {
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
        case 'component': {
          // 执行组件方法
          executeComponentMethod(action, methodArgs);
          break;
        }

        case 'custom': {
          // 执行自定义方法
          executeCustomMethod(action, methodArgs);
          break;
        }

        case 'public': {
          // 执行公共方法
          executePublicMethod(action, methodArgs);
          break;
        }

        default: {
          // 如果遇到未知的操作类型，发出警告
          console.warn(`未知的动作类型: ${action.type}`);
          break;
        }
      }
    });
  }

  /**
   * 执行公共方法
   * @param action 操作
   * @param args 参数
   */
  function executePublicMethod(action: ActionsModel, args: unknown[]): void {
    try {
      // 尝试调用公共方法处理程序
      pluginManager.publicMethods[action.methodName]?.handler(...args);
    } catch (error) {
      // 如果调用失败，打印错误信息
      console.error(`[Epic：公共函数(${action.methodName})]执行异常:`, error);
    }
  }

  /**
   * 执行自定义方法
   * @param action 操作
   * @param args 参数
   */
  function executeCustomMethod(action: ActionsModel, args: unknown[]): void {
    try {
      // 尝试调用自定义方法
      funcs.value[action.methodName]?.(...args);
    } catch (error) {
      // 如果调用失败，打印错误信息
      console.error(`[Epic：自定义函数(${action.methodName})]执行异常:`, error);
    }
  }

  /**
   * 执行组件方法
   * @param action 操作
   * @param args 参数
   */
  function executeComponentMethod(action: ActionsModel, args: unknown[]): void {
    // 获取组件实例
    const component = action.componentId && (find(action.componentId) as any);

    // 如果未找到组件实例，发出警告并返回
    if (!component) {
      console.warn(`[Epic：组件${action.componentId}]未找到`);
      return;
    }

    try {
      // 调用组件的方法
      component[action.methodName](...args);
    } catch (error) {
      // 如果调用失败，打印错误信息
      console.error(
        `[Epic：组件${action.componentId}函数(${action.methodName})]执行异常:`,
        error,
      );
    }
  }

  /**
   * 设置设计模式的状态
   * @param isDesign 是否处于设计模式
   */
  function setDesignMode(isDesign: boolean = true): void {
    isDesignMode.value = isDesign;
  }

  function setDefaultComponentIds(schemas: ComponentSchema[]) {
    const componentSchemas = findSchemas(
      schemas,
      () => true,
    ) as ComponentSchema[];
    defaultComponentIds.value = componentSchemas.map(
      (item) => item.id as string,
    );
  }

  // 添加表单数据，内部表单
  function addFormData(
    formData: Record<string, unknown>,
    formName: string = 'default',
  ) {
    if (forms[formName]) {
      const oldData = forms[formName] as Record<string, unknown>;
      deepCompareAndModify(formData, oldData);
    }
    forms[formName] = formData;
  }

  // 设置表单数据，外部
  function setFormData(
    formData: Record<string, unknown>,
    formName: string = 'default',
  ) {
    if (forms[formName]) {
      deepCompareAndModify(
        forms[formName] as Record<string, unknown>,
        formData,
        false,
      );
      return;
    }

    forms[formName] = formData;
  }

  // 监听自定义函数
  watchEffect(() => {
    const script = pageSchema.script;
    if (script && script !== '') {
      setMethods(script, !isDesignMode.value);
    }
  });

  return {
    addComponentInstance,
    addFormData,
    componentInstances,
    defaultComponentIds,
    doActions,
    // 推荐使用 find 函数
    find,
    findAll,
    forms,
    funcs,
    // 兼容函数
    getComponentInstance: find,
    isDesignMode,
    pageSchema,
    removeComponentInstance,
    setDefaultComponentIds,
    setDesignMode,
    setFormData,
    setMethods,
    setPageSchema,
  };
}

export type PageManager = ReturnType<typeof usePageManager>;
