<template>
    <!-- 工具条 start  -->
    <div class="edit-toolbar flex items-center justify-end text-gray-500 px-4">
        <div title="导出" class="pr-16px cursor-pointer">
            <span class="icon iconfont">&#xe60b;</span>
        </div>
        <div title="导入" class="pr-16px cursor-pointer">
            <span class="icon iconfont">&#xe60c;</span>
        </div>
        <div title="编辑事件" class="pr-16px cursor-pointer">
            <span class="icon iconfont">&#xe612;</span>
        </div>
        <!-- 缩放操作 start  -->
        <div class="pr-8px w-82px cursor-pointer">
            <Select v-model:value="canvasScaleComuted" v-model="canvasScaleComuted" :options="canvasScaleOptions"
                size="small"></Select>
        </div>
        <div class="w-90px cursor-pointer">
            <Slider :min="0.2" :max="2" :step="0.1" :tooltip="false" v-model:value="canvasScale" />
        </div>
        <!-- 缩放操作 end  -->
    </div>
    <!-- 工具条 end  -->
</template>
<script lang="ts" setup>
import { useShareStore, pluginManager } from '@k-designer/utils'
import { computed } from 'vue'
const Slider = pluginManager.getComponent('slider')
const Select = pluginManager.getComponent('select')
const { canvasScale } = useShareStore()

const canvasScaleComuted = computed({
    get() {
        return `${(canvasScale.value * 100).toFixed(0)}%`
    },
    set(value) {
        canvasScale.value = Number(value)
    }
})

const canvasScaleOptions = [
    {
        label: "60%",
        value: "0.6",
    },
    {
        label: "80%",
        value: "0.8",
    },
    {
        label: "100%",
        value: "1.0",
    },
    {
        label: "120%",
        value: "1.2",
    },
    {
        label: "140%",
        value: "1.4",
    },
]

</script>