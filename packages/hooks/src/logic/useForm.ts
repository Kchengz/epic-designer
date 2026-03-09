import type { FormDataModel } from '@epic-designer/types';

import type { InjectionKey, Ref } from 'vue';

import { inject, provide, ref } from 'vue';

import { usePageManager } from '../designer/usePageManager';

// 表单上下文，key 为表单名称，value 为表单数据
export const FORM_CONTEXT_KEY: InjectionKey<FormDataModel> =
  Symbol('FormContext');

// 表单实例，key 为表单名称，value 为表单实例
export const FORM_INSTANCES_KEY: InjectionKey<{ [name: string]: any }> =
  Symbol('FormInstances');

export function useForm(formName: string) {
  const pageManager = usePageManager();
  const formData = pageManager.setFormData({}, formName);
  const formInstances = inject<Ref<{ [name: string]: any }>>(
    FORM_INSTANCES_KEY,
    ref({}),
  );

  provide(FORM_CONTEXT_KEY, formData);

  // 兼容旧版 inject('formData'),后续可能会移除，推荐使用 useFormItem 获取
  provide('formData', formData);

  return { formData, formInstances };
}
