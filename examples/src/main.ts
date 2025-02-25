import { createApp } from 'vue';

import App from './App.vue';
import router from './router';

import './style.less';

createApp(App).use(router).mount('#app');
