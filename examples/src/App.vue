<template>
  <div class="demo-content">
  <ConfigProvider :locale="zhCN">
    <Designer />
  </ConfigProvider>
    <!-- <Builder /> -->
  </div>
</template>
<script lang="ts" setup>
import Designer from './views/designer/index.vue'
// import Builder from './views/builder/index.vue'

import { ConfigProvider } from 'ant-design-vue'
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
dayjs.locale('zh-cn');
// import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// import { provideGlobalConfig } from '@epic-designer/ui'
// provideGlobalConfig({ locale: zhCn });

</script>
<style lang="less" scoped>
.demo-content {
  height: 100vh;
}
</style>
