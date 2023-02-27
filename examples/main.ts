import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import "ant-design-vue/dist/antd.css";
// import 'element-plus/dist/index.css'

import { useComponent } from "./config/k.config";
import { pluginManager, useAntd, useElementPlus } from "../packages/index";

useComponent(pluginManager);
useAntd(pluginManager)
// useElementPlus(pluginManager)

createApp(App).mount("#app");
