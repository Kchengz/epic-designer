import type { AsyncComponentLoader, Component } from 'vue';

import { defineAsyncComponent } from 'vue';

import { EpicBaseLoader } from '@epic-designer/base-ui';

/**
 * 异步加载组件
 * @param loader
 */
export const loadAsyncComponent = (
  loader: AsyncComponentLoader,
  loadingComponent: Component = EpicBaseLoader,
) =>
  defineAsyncComponent({
    delay: 80,
    loader,
    loadingComponent,
  });
