import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { pluginManager } from '@epic-designer/core'
//  使用Elemnt UI
// import 'element-plus/dist/index.css'
// import { setupElementPlus } from '@epic-designer/ui'
// setupElementPlus(pluginManager)

// 使用Antd UI v4版本
import './style/reset.css';
import { setupAntd } from '@epic-designer/ui'
setupAntd(pluginManager)

// 使用Antd UI v3 版本
// import 'ant-design-vue/dist/antd.css'
// import { setupAntdV3 } from '@epic-designer/ui-antdv3'
// setupAntdV3(pluginManager)

// 使用NaiveUi UI
// import { setupNaiveUi } from '@epic-designer/ui'
// setupNaiveUi(pluginManager)


createApp(App).mount('#app')
