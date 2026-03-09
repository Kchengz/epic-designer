import type { InjectionKey } from 'vue';

import { inject } from 'vue';

export const FIELD_PATH_PREFIX_KEY: InjectionKey<(number | string)[] | null> =
  Symbol('fieldPathPrefix');

export function useFieldPathPrefix() {
  const fieldPathPrefix = inject(FIELD_PATH_PREFIX_KEY, null);
  return fieldPathPrefix;
}
