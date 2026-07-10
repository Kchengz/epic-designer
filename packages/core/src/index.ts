import 'virtual:uno.css';
import './index.less';
// builder
export { EBuilder, EpBuilder } from './components/builder/';
// designer
export { EDesigner, EpDesigner } from './components/designer/';
// 兼容旧版组件名

export { default as EpNodeItem } from './components/designer/src/modules/editContainer/nodeItem.vue';

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

// export default EDesignr
