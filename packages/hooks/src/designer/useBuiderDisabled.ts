import type { ComputedRef, InjectionKey } from 'vue';

import { computed, inject, provide } from 'vue';

export const BUILDER_DISABLED_KEY: InjectionKey<ComputedRef<boolean>> =
  Symbol('builderDisabled');

// 提供禁用状态
export function provideBuilderDisabled(builderDisabled: ComputedRef<boolean>) {
  provide(BUILDER_DISABLED_KEY, builderDisabled);
}

// 注入上级的禁用状态
export function injectBuilderDisabled() {
  const builderDisabled = inject<ComputedRef<boolean>>(
    BUILDER_DISABLED_KEY,
    computed(() => false),
  );
  return builderDisabled;
}
