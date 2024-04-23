<template>
    <Layout>
        <EHeader />
        <Layout>
            <LayoutSider>
                <EMenu />
            </LayoutSider>
            <LayoutContent>
                <div class="epic-page-main">
                    <router-view></router-view>
                </div>
            </LayoutContent>
        </Layout>
    </Layout>

</template>
<script lang="ts" setup>
import EMenu from './components/Menu/index.vue'
import EHeader from './components/Header/index.vue'
import { Layout, LayoutContent, LayoutSider } from 'ant-design-vue'

</script>