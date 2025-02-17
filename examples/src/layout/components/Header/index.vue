<template>
  <div class="epic-demo-header h-64px px-6 flex items-center justify-between">
    <a
      class="decoration-none items-center flex"
      href="https://docs.epicjs.cn"
      target="_blank"
    >
      <img
        src="@/assets/logo.png"
        class="w-22px h-22px"
        alt=""
        srcset=""
      >
      <span class="ml-4 font-bold text-16px">EpicDesigner低代码设计器</span>
    </a>

    <div class="epic-demo-header-right flex items-center">
      <a
        v-for="(item, index) in links"
        :key="index"
        class="mr-6"
        :href="item.url"
      >{{ item.title }}</a>
      <Select
        v-model:value="selectValue"
        class="w-116px"
        size="small"
        :options="selectOptions"
      />
      <Divider
        type="vertical"
        class="mx-3"
      />
      <Switch v-model:checked="isDark">
        <template #checkedChildren>
          Dark
        </template>
        <template #unCheckedChildren>
          Light
        </template>
      </Switch>
      <Divider
        type="vertical"
        class="mx-3"
      />
      <a
        class="w-26px"
        href="https://github.com/Kchengz/epic-designer"
        target="_blank"
        rel="noopener"
        data-v-b354ede9=""
        data-v-82c704e6=""
      >
        <svg
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>GitHub</title>
          <path
            fill="currentColor"
            d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
          />
        </svg>
      </a>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router'
import { computed, watch } from 'vue'
import { pluginManager } from '@epic-designer/utils'
import { useTheme } from '@epic-designer/hooks'

import { setupAntd, setupElementPlus, setupNaiveUi } from "@epic-designer/ui";
import { Divider, Switch, Select } from 'ant-design-vue'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import "ant-design-vue/dist/reset.css";
import { useStorage } from '@vueuse/core'
const { isDark } = useTheme()
const epicDarkMode = useStorage<boolean>('epic-dark-mode', false)
isDark.value = epicDarkMode.value
watch(() => isDark.value, () => {
    epicDarkMode.value = isDark.value
})


const links = [
    {
        title: '文档',
        url: 'https://docs.epicjs.cn'
    },
    {
        title: '更新日志',
        url: 'https://github.com/Kchengz/epic-designer/blob/develop/docs/updateLog.md'
    },
]

const selectOptions = [
    {
        label: 'antDesigneVue',
        value: 'ant-designe-vue',
    },
    {
        label: 'elementPlus',
        value: 'element-plus',
    },
    // {
    //     label: 'naiveUi',
    //     value: 'naive-ui',
    // },
]
const router = useRouter()
const route = useRoute()

const selectValue = computed({
    get() {
        return route.params.ui as string
    },
    set(ui) {
        router.push({
            params:{
                ui
            }
        })
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
