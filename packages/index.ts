import KFormBuild from "./src/components/KFormBuild/KFormBuild.vue";
import { App } from "vue";
export { pluginManager } from "./src/core/PluginManager";
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
