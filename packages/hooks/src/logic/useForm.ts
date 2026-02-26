import type { PageManager } from '@epic-designer/manager';
import type { FormDataModel } from '@epic-designer/types';

import type { InjectionKey } from 'vue';

import { inject, provide } from 'vue';

export const FORM_CONTEXT_KEY: InjectionKey<FormDataModel> =
  Symbol('FormContext');

export function useForm(formName: string) {
  const pageManager = inject<PageManager>('pageManager', {} as PageManager);
  const formData = pageManager.setFormData({}, formName);
  provide(FORM_CONTEXT_KEY, formData);
  // 兼容旧版 inject('formData'), 新版使用 推荐使用useFormItem 即可
  provide('formData', formData);

  return { formData };
}
