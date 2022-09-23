import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import KFormDesign from '../packages/index'
// import KFormDesign from '../lib/k-form-design.js'
// import '../lib/style.css'

createApp(App).use(KFormDesign).mount('#app')
