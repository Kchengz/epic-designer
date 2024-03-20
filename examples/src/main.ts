import { pluginManager } from "./../../packages/utils/manager/pluginManager";
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
//  使用Elemnt UI
// import 'element-plus/dist/index.css'
// import { setupElementPlus } from '@epic-designer/ui'
// setupElementPlus()

// 使用Antd UI v4版本
// import './style/reset.css';
import { setupAntd } from '@epic-designer/ui'
setupAntd()

// 使用Antd UI v3 版本
// import "ant-design-vue/dist/antd.css";


// 使用NaiveUi UI
// import { setupNaiveUi } from '@epic-designer/ui'
// setupNaiveUi()

createApp(App).mount("#app");
