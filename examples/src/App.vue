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


</script>
<style lang="less" scoped>
.demo-content {
  height: 100vh;
}
</style>
