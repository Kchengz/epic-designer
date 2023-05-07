import KBuilder from "./components/KBuilder/";
import KDesigner from "./components/KDesigner/";
import { App } from "vue";
import { pluginManager, usePageManager } from "./utils/index";
declare const KDesignr: {
    install(app: App): void;
    pluginManager: import("./utils/pluginManager").PluginManager;
    usePageManager: typeof usePageManager;
};
export { KBuilder, KDesigner, pluginManager, usePageManager, };
export default KDesignr;
