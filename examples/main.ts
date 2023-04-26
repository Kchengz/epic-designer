import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

// 引入antd UI样式
import "ant-design-vue/dist/antd.css";

// 引入Element plus样式
import "element-plus/dist/index.css";

import { pluginManager } from "../packages/index";
import { useAntd } from "../packages/ui/useAntd";
import { useElementPlus } from "../packages/ui/useElementPlus";

// 使用Antd UI
useAntd(pluginManager)
// 使用Elemnt UI
// useElementPlus(pluginManager);

createApp(App).mount("#app");
