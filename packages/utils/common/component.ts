import type { AsyncComponentLoader, Component } from 'vue';

import { defineAsyncComponent } from 'vue';

/**
 * 异步加载组件
 * @param loader
 */
export const loadAsyncComponent = (
  loader: AsyncComponentLoader,
  loadingComponent?: Component,
) =>
  defineAsyncComponent({
    delay: 80,
    loader,
    loadingComponent,
  });
