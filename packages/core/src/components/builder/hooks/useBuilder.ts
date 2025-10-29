import type { FormDataModel } from '@epic-designer/types';

import { ref, watch } from 'vue';

import { usePageManager } from '@epic-designer/manager';
import { deepClone, findSchemas } from '@epic-designer/utils';

export function useBuilder() {
  const ready = ref<boolean>(false);
  const pageManager = usePageManager();
  const forms = ref<any>({});

  /**
   * 等待组件初始化
   */
  function waitReady(): Promise<void> {
    return new Promise((resolve) => {
      if (ready.value) {
        resolve();
      } else {
        const unwatch = watch(ready, () => {
          unwatch();
          resolve();
        });
      }
    });
  }

  /**
   * 获取表单实例
   * @param {string} formName 表单名称
   */
  async function getFormInstance(formName = 'default'): Promise<any> {
    await waitReady();

    // 获取所有表单的键
    const formKeys = Object.keys(forms.value || {});

    // 如果只有一个表单，直接返回该表单
    if (formKeys.length === 1) {
      return forms.value[formKeys[0]];
    }

    // 多个表单时按formName获取
    const form = forms.value?.[formName];
    if (!form) throw new Error(`表单 [name=${formName}] 不存在`);
    return form;
  }

  /**
   * 处理表单数据
   * @param {string} formName 表单名称
   * @param {Function} action 处理函数
   */
  async function handleFormData(
    formName: string,
    action: (form: any) => Promise<FormDataModel>,
  ) {
    const form = await getFormInstance(formName);
    return deepClone(await action(form));
  }

  /**
   * 获取单个表单数据
   * @param {string} formName 表单名称
   */
  async function getData(formName = 'default'): Promise<FormDataModel> {
    return await handleFormData(formName, (form) => form.getData());
  }

  /**
   * 设置单个表单数据
   * @param {FormDataModel} data 表单数据
   * @param {string} formName 表单名称
   */
  function setData(data: FormDataModel, formName = 'default') {
    // 获取所有表单的Schema
    const formSchemas = findSchemas(
      pageManager.pageSchema.schemas,
      (schema) => schema.type === 'form',
    );

    // 如果只有一个表单，使用该表单的名称
    if (formSchemas && formSchemas.length === 1) {
      formName = formSchemas[0].componentProps.name;
    }
    pageManager.setFormData(data, formName);
    const form = forms.value?.[formName];

    // 清除表单验证
    form?.clearValidate?.() ?? form?.restoreValidation?.();
  }

  /**
   * 验证单个表单并获取数据
   * @param {string} formName 表单名称
   */
  async function validate(formName = 'default'): Promise<FormDataModel> {
    return await handleFormData(formName, async (form) => {
      await form.validate();
      return await form.getData();
    });
  }

  /**
   * 处理所有表单数据
   * @param {Function} action 处理函数
   */
  async function handleAllFormsData(
    action: (form: any) => Promise<FormDataModel>,
  ) {
    await waitReady();
    const data: Record<string, FormDataModel> = {};
    for (const formName in forms.value) {
      const form = forms.value[formName];
      if (form) {
        data[formName] = deepClone(await action(form));
      }
    }
    return data;
  }

  /**
   * 获取所有表单数据
   */
  async function getForms(): Promise<Record<string, FormDataModel>> {
    return await handleAllFormsData((form) => form.getData());
  }

  /**
   * 设置所有表单数据
   * @param {Record<string, FormDataModel>} data 表单数据
   */
  function setForms(data: Record<string, FormDataModel>) {
    for (const formName in data) {
      setData(data[formName], formName);
    }
  }

  /**
   * 验证所有表单并获取数据
   */
  async function validateAll(): Promise<Record<string, FormDataModel>> {
    return await handleAllFormsData(async (form) => {
      await form.validate();
      return await form.getData();
    });
  }

  return {
    forms,
    getData,
    getFormInstance,
    getForms,
    pageManager,
    ready,
    setData,
    setForms,
    validate,
    validateAll,
  };
}
