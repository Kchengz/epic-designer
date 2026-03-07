import type { FormDataModel } from '@epic-designer/types';

import type { InjectionKey, Ref } from 'vue';

import { inject, provide, ref } from 'vue';

import { usePageManager } from '../designer/usePageManager';

export const FORM_CONTEXT_KEY: InjectionKey<FormDataModel> =
  Symbol('FormContext');
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
