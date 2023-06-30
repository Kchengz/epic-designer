import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { pluginManager } from '../packages/index'
// 使用Elemnt UI
import 'element-plus/dist/index.css'
import { setupElementPlus } from '../packages/ui/elementPlus'
setupElementPlus(pluginManager)

// // 使用Antd UI
// import 'ant-design-vue/dist/antd.css'
// import { setupAntd } from '../packages/ui/antd'
// setupAntd(pluginManager)
// // 使用NaiveUi UI
// import { setupNaiveUi } from '../packages/ui/naiveUi'
// setupNaiveUi(pluginManager)

createApp(App).mount('#app')
