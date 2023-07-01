import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { pluginManager } from '../packages/index'
// 使用Elemnt UI
import 'element-plus/dist/index.css'
import { setupElementPlus } from '@k-designer/ui/elementPlus'
setupElementPlus(pluginManager)

// // 使用Antd UI
// import 'ant-design-vue/dist/antd.css'
// import { setupAntd } from '@k-designer/ui/antd'
// setupAntd(pluginManager)

// // 使用NaiveUi UI
// import { setupNaiveUi } from '@k-designer/ui/naiveUi'
// setupNaiveUi(pluginManager)

createApp(App).mount('#app')
