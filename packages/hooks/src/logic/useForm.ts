import type { FormDataModel } from '@epic-designer/types';

import type { InjectionKey } from 'vue';

import { provide } from 'vue';

import { usePageManager } from '../designer/usePageManager';

export const FORM_CONTEXT_KEY: InjectionKey<FormDataModel> =
  Symbol('FormContext');

export function useForm(formName: string) {
  const pageManager = usePageManager();
  const formData = pageManager.setFormData({}, formName);
  provide(FORM_CONTEXT_KEY, formData);

  // 兼容旧版 inject('formData'), 推荐使用 useFormItem 获取
  provide('formData', formData);

  return { formData };
}
