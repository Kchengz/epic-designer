import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";



import { pluginManager } from "../packages/index";


// 引入Element plus样式
import "element-plus/dist/index.css";
import { useElementPlus } from '../packages/ui/useElementPlus'
// 使用Elemnt UI
useElementPlus(pluginManager);


// // 引入antd UI样式
// import "ant-design-vue/dist/antd.css";
// import { useAntd } from '../packages/ui/useAntd'
// // 使用Antd UI
// useAntd(pluginManager);


createApp(App).mount("#app");
