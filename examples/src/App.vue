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
// import { setDateLocale } from 'epic-designer'
import { setDateLocale } from '@epic-designer/ui'
setDateLocale()

// import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// import { provideGlobalConfig } from '@epic-designer/ui'
// provideGlobalConfig({ locale: zhCn });

</script>
<style lang="less" scoped>
.demo-content {
  height: 100vh;
}
</style>
