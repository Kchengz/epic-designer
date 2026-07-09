import 'virtual:uno.css';
import './index.less';

export { EpBuilder } from './components/builder/';

// 兼容旧版组件名
export { EpBuilder as EBuilder } from './components/builder/';
export { EpDesigner } from './components/designer/';
// 兼容旧版组件名
export { EpDesigner as EDesigner } from './components/designer/';

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
