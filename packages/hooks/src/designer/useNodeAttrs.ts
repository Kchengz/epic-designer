import type { InjectionKey } from 'vue';

import { inject } from 'vue';

export const NODE_ATTRS_KEY: InjectionKey<Record<string, any>> =
  Symbol('nodeAttrs');

export function useNodeAttrs() {
  const nodeAttrs = inject(NODE_ATTRS_KEY, {});
  return nodeAttrs;
}
