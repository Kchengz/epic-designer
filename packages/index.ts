import KFormBuild from "./src/KFormBuild/KFormBuild.vue";
import { App } from "vue";

export { KFormBuild };

const components = [KFormBuild];

// 注册全局组件
const KFormDesign = {
  install(app: App) {
    components.forEach((comp) => {
      app.component(comp.__name!, comp);
    });
    // components.forEach( => )
  },
};

export default KFormDesign;
