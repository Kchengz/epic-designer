<template>
    <Layout>
        <EHeader />
        <Layout>
            <LayoutSider>
                <EMenu />
            </LayoutSider>
            <LayoutContent>
                <div :key="uiKey" class="epic-page-main">
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
import { computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const uiKey = computed(() => {
    return route.params.ui as string
})
</script>