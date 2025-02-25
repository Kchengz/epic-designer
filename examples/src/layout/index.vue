<script lang="ts" setup>
import { useTheme } from '@epic-designer/hooks';
import {
  ConfigProvider,
  Layout,
  LayoutContent,
  LayoutSider,
  theme,
} from 'ant-design-vue';

import EHeader from './components/Header/index.vue';
import Main from './components/Main/index.vue';
import EMenu from './components/Menu/index.vue';

const { isDark } = useTheme();
</script>
<template>
  <ConfigProvider
    :theme="{
      algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
    }"
  >
    <Layout class="maximize epic-scoped">
      <EHeader />
      <Layout>
        <LayoutSider>
          <div class="epic-demo-menu h-full">
            <EMenu />
          </div>
        </LayoutSider>
        <LayoutContent>
          <Main />
        </LayoutContent>
      </Layout>
    </Layout>
  </ConfigProvider>
</template>
