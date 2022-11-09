import KBuilder from "./components/KBuilder/";
import KDesigner from "./components/KDesigner/";
import { App } from "vue";
import { pluginManager } from "./utils/pluginManager";

const components = [KBuilder, KDesigner];

// 注册全局组件
const KDesignr = {
  install(app: App) {
    components.forEach((comp) => {
      app.component(comp.__name!, comp);
    });
  },
  pluginManager
};


export { KBuilder, KDesigner, pluginManager };
export default KDesignr;
