import {
    defineAsyncComponent,
    type AsyncComponentLoader,
    type Component,
  } from "vue";

  /**
   * * 异步加载组件
   * @param loader
   * @returns
   */
  export const loadAsyncComponent = (
    loader: AsyncComponentLoader,
    loadingComponent?: Component
  ) =>
    defineAsyncComponent({
      loader,
      loadingComponent,
      delay: 80,
    });
  