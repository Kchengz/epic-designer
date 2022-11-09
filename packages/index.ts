import KBuilder from "./components/KBuilder/";
import { App } from "vue";
export { pluginManager } from "./utils/pluginManager";
export { KBuilder };

const components = [KBuilder];

// 注册全局组件
const KDesignr = {
  install(app: App) {
    components.forEach((comp) => {
      app.component(comp.__name!, comp);
    });
  },
};

export default KDesignr;
