<template>
  <div class="demo-content">
  <ConfigProvider :locale="zhCN">
  <DatePicker />
    <Designer />
  </ConfigProvider>
    <!-- <Builder /> -->
  </div>
</template>
<script lang="ts" setup>
import Designer from './views/designer/index.vue'
// import Builder from './views/builder/index.vue'

import { ConfigProvider,DatePicker } from 'ant-design-vue'
import zhCN from 'ant-design-vue/es/locale/zh_CN';
// import dayjs from 'dayjs';
// import 'dayjs/locale/zh-cn';
// dayjs.locale('zh-cn');
import { provideGlobalConfigV3 } from "@epic-designer/ui-antdv3";
provideGlobalConfigV3()

// import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// import { provideGlobalConfig } from '@epic-designer/ui'
// provideGlobalConfig({ locale: zhCn });

</script>
<style lang="less" scoped>
.demo-content {
  height: 100vh;
}
</style>
