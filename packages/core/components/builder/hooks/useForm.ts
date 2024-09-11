import { ref, watch } from 'vue';
import { deepClone, usePageManager } from '@epic-designer/utils';
import { FormDataModel } from '../../../types/epic-designer';

export function useForm() {
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
    const form = forms.value?.[formName];
    if (!form) throw new Error(`表单 [name=${formName}] 不存在`);
    return form;
  }

  /**
   * 处理表单数据
   * @param {string} formName 表单名称
   * @param {Function} action 处理函数
   */
  async function handleFormData(formName: string, action: (form: any) => Promise<FormDataModel>) {
    const form = await getFormInstance(formName);
    return deepClone(await action(form));
  }

  /**
   * 获取单个表单数据
   * @param {string} formName 表单名称
   */
  async function getData(formName = 'default'): Promise<FormDataModel> {
    return await handleFormData(formName, form => form.getData());
  }

  /**
   * 设置单个表单数据
   * @param {FormDataModel} data 表单数据
   * @param {string} formName 表单名称
   */
  function setData(data: FormDataModel, formName = 'default') {
    pageManager.setFormData(data, formName);
    const form = forms.value?.[formName];
    form?.clearValidate();
  }

  /**
   * 验证单个表单并获取数据
   * @param {string} formName 表单名称
   */
  async function validate(formName = 'default'): Promise<FormDataModel> {
    return await handleFormData(formName, async form => {
      await form.validate();
      return await form.getData();
    });
  }

  /**
   * 处理所有表单数据
   * @param {Function} action 处理函数
   */
  async function handleAllFormsData(action: (form: any) => Promise<FormDataModel>) {
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
    return await handleAllFormsData(form => form.getData());
  }

  /**
   * 设置所有表单数据
   * @param {Record<string, FormDataModel>} data 表单数据
   */
  function setForms(data: Record<string, FormDataModel>) {
    for (const formName in data) {
      setData(data[formName], formName)
    }
  }

  /**
   * 验证所有表单并获取数据
   */
  async function validateAll(): Promise<Record<string, FormDataModel>> {
    return await handleAllFormsData(async form => {
      await form.validate();
      return await form.getData();
    });
  }

  return {
    ready,
    pageManager,
    forms,
    getData,
    setData,
    validate,
    getForms,
    setForms,
    validateAll,
    getFormInstance,
  };
}
