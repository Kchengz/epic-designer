<template>
    <ConfigProvider :theme="{ algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm }">
        <Layout class="maximize">
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
<script lang="ts" setup>
import EMenu from './components/Menu/index.vue'
import EHeader from './components/Header/index.vue'
import Main from './components/Main/index.vue'
import { Layout, LayoutContent, LayoutSider, ConfigProvider, theme } from 'ant-design-vue'
import { useTheme } from '@epic-designer/hooks'
const { isDark } = useTheme()

</script>
