import KBuilder from "./components/KBuilder/";
import KDesigner from "./components/KDesigner/";
import { App } from "vue";
import { pluginManager, nodeSchema } from "./utils/index";

const components = [KBuilder, KDesigner];

// 注册全局组件
const KDesignr = {
  install(app: App) {
    components.forEach((comp) => {
      app.component(comp.__name!, comp);
    });
  },
  pluginManager,
  nodeSchema
};


export { KBuilder, KDesigner, pluginManager, nodeSchema };
export default KDesignr;
