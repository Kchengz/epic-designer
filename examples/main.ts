import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import "ant-design-vue/dist/antd.css";

import { useComponent } from "./config/k.config";
import { pluginManager } from "../packages/index";
useComponent(pluginManager);

createApp(App).mount("#app");
