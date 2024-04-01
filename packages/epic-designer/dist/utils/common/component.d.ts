import { type AsyncComponentLoader, type Component } from "vue";
/**
 * * 异步加载组件
 * @param loader
 * @returns
 */
export declare const loadAsyncComponent: (loader: AsyncComponentLoader<any>, loadingComponent?: Component) => any;
