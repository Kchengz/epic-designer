<template>
    <div class="epic-demo-header h-64px bg-white px-16px flex items-center justify-between">
        <div>EpicDesigner低代码设计器</div>
        <div>
            <Select class="w-140px" v-model:value="selectValue" :options="selectOptions" />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router'
import { Select } from 'ant-design-vue'
import { computed, nextTick } from 'vue'
import { pluginManager } from '@epic-designer/utils'
import { setupAntd, setupElementPlus, setupNaiveUi } from "@epic-designer/ui";
import 'element-plus/dist/index.css'
import "ant-design-vue/dist/reset.css";

const selectOptions = [
    {
        label: 'antDesigneVue',
        value: 'ant-designe-vue',
    },
    {
        label: 'elementPlus',
        value: 'element-plus',
    },
    {
        label: 'naiveUi',
        value: 'naive-ui',
    },
]
const router = useRouter()
const route = useRoute()

const selectValue = computed({
    get() {
        return route.params.ui as string

    },
    set(ui) {
        router.push(`/${ui}/${route.path.split('/')[2]}`)
        switchUI(ui)
    }
})

// 切换选择ui
function switchUI(ui: string) {
    pluginManager.removeBaseComponents()
    pluginManager.initialized.value = false
    
    if (ui === 'ant-designe-vue') {
        setupAntd()
    } else if (ui === 'element-plus') {
        setupElementPlus()
    } else if (ui === 'naive-ui') {
        setupNaiveUi()
    }
}


switchUI(selectValue.value)
</script>