import type { ComputedRef, InjectionKey } from 'vue';

import { computed, inject, provide } from 'vue';

export const BUILDER_READONLY_KEY: InjectionKey<ComputedRef<boolean>> =
  Symbol('builderReadonly');

// 提供只读状态
export function provideBuilderReadonly(builderReadonly: ComputedRef<boolean>) {
  provide(BUILDER_READONLY_KEY, builderReadonly);
}

// 注入上级的只读状态
export function injectBuilderReadonly() {
  const builderReadonly = inject<ComputedRef<boolean>>(
    BUILDER_READONLY_KEY,
    computed(() => false),
  );
  return builderReadonly;
}
