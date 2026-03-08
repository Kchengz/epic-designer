import type { ComponentSchema } from '@epic-designer/types';

import type { ComputedRef, InjectionKey, Ref, Slots } from 'vue';

import type { TreeProps } from './types';

import { inject } from 'vue';

export interface TreeContext {
  expandedKeys: Ref<string[]>;
  handleSelect: (id: string, componentSchema: ComponentSchema) => void;
  selectedKeys: ComputedRef<string[]>;
  slots: Slots;
  treeProps: TreeProps;
}

export const TREE_CONTEXT_KEY: InjectionKey<TreeContext> =
  Symbol('treeContext');

export function useTreeContext() {
  const treeContext = inject(TREE_CONTEXT_KEY);

  return treeContext;
}
