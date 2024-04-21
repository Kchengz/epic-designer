<template>
    <Layout>
        <LayoutHeader>
            <div class="text-white flex justify-between">
                <div>EpicDesigner低代码设计器</div>
                <div>
                    <Select class="w-150px" v-model:value="selectValue" :options="[
                        {
                            label: 'antDesigneVue',
                            value: 'antDesigneVue',
                        },
                        {
                            label: 'elementPlus',
                            value: 'elementPlus',
                        },
                        {
                            label: 'naiveUi',
                            value: 'naiveUi',
                        },
                    ]" />
                </div>
            </div>
        </LayoutHeader>
        <Layout>
            <LayoutSider>
                <Menu />
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
import Menu from './components/Menu/index.vue'
import { ref } from 'vue'
import { Layout, LayoutHeader, LayoutContent, LayoutSider, Select } from 'ant-design-vue'
const selectValue = ref('antDesigneVue')
</script>