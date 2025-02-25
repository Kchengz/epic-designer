import { pluginManager, usePageManager } from '@epic-designer/utils';

import { setupComponent } from './extensions';

import 'virtual:uno.css';
import './index.less';

export { default as EBuilder } from './components/builder/';
// 初始化设计器
setupComponent(pluginManager);

// const components = [EBuilder, EDesigner]

// 注册全局组件
// const EDesignr = {
//   install (app: App) {
//     components.forEach((comp) => {
//       app.component(comp.__name ?? '', comp)
//     })
//   },
//   pluginManager,
//   usePageManager
// }

export { pluginManager, usePageManager };
// export default EDesignr

export { default as EDesigner } from './components/designer/';
export { default as ENode } from './components/node/';
export type * from './types/epic-designer';

export { type PageManager, type PluginManager } from '@epic-designer/utils';
