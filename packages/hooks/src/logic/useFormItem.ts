import type { FormDataModel } from '@epic-designer/types';

import { inject, reactive } from 'vue';

export function useFormItem() {
  const formData = inject('formData', reactive({})) as FormDataModel;

  return { formData };
}
