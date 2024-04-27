<template>
    <Layout class="maximize">
        <EHeader />
        <Layout>
            <LayoutSider>
                <div class="py-2 h-full bg-white">
                    <EMenu />
                </div>
            </LayoutSider>
            <LayoutContent>
                <Main />
            </LayoutContent>
        </Layout>
    </Layout>

</template>
<script lang="ts" setup>
import EMenu from './components/Menu/index.vue'
import EHeader from './components/Header/index.vue'
import Main from './components/Main/index.vue'
import { Layout, LayoutContent, LayoutSider } from 'ant-design-vue'
</script>