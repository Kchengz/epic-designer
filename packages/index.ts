import KFormBuild from "./components/KFormBuild/";
import { App } from "vue";
export { pluginManager } from "./utils/pluginManager";
export { KFormBuild };

const components = [KFormBuild];

// 注册全局组件
const KFormDesign = {
  install(app: App) {
    components.forEach((comp) => {
      app.component(comp.__name!, comp);
    });
  },
};

export default KFormDesign;
