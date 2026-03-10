import type { FieldStateMap } from '@epic-designer/types';

import type { ComputedRef, InjectionKey, Slots } from 'vue';

import { computed, inject } from 'vue';

export interface BuilderContext {
  fieldStateMap: ComputedRef<FieldStateMap>;
  slots: Slots;
}

export const BUILDER_KEY: InjectionKey<BuilderContext> =
  Symbol('builderContext');

export function useBuilderContext() {
  const builderContext = inject<BuilderContext>(BUILDER_KEY, {
    fieldStateMap: computed(() => ({})),
    slots: {},
  });

  // 待完善
  // const forms = inject('forms');

  return builderContext;
}
