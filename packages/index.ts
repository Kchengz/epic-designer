import KBuilder from "./components/KBuilder/";
import KDesigner from "./components/KDesigner/";
import { App } from "vue";
import { pluginManager, nodeSchema } from "./utils/index";
import { defineAsyncComponent } from "vue";
const components = [KBuilder, KDesigner];
pluginManager.registerComponent(
  "monacoEditor",
  defineAsyncComponent(
    () => import("./components/MonacoEditor/monacoEditor.vue")
  ),
  "value"
);

// 注册全局组件
const KDesignr = {
  install(app: App) {
    components.forEach((comp) => {
      app.component(comp.__name!, comp);
    });
  },
  pluginManager,
  nodeSchema,
};

export { KBuilder, KDesigner, pluginManager, nodeSchema };
export default KDesignr;
