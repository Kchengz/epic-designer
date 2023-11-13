<template>
    <!-- 工具条 start  -->
    <div class="edit-toolbar flex items-center justify-between px-4 mx-1">
        <div class="flex-1 h-full flex items-center">
            <div :title="item.title" class="action-item h-90% px-10px flex items-center hover:bg-gray-50 cursor-pointer"
                v-for="(item, index) in actionOptions" :class="{ disabled: item.disabled }" :key="index" @click="item.on">
                <EIcon :name="item.icon"></EIcon>
            </div>
        </div>

        <input type="file" ref="fileRef" v-show="false" @change="handleFileSelected">

        <div class="flex-1 h-full flex items-center justify-center">
            <div :title="item.title" class="device-item h-90% px-10px flex items-center hover:bg-gray-50 cursor-pointer"
                :class="{ checked: item.key === checkedKey }" v-for="item in deviceOptions" :key="item.key"
                @click="handleSetCanvas(item.key)">
                <EIcon :name="item.icon"></EIcon>
            </div>
        </div>
        <div class="flex-1 h-full flex items-center justify-end">

            <!-- 缩放操作 start  -->
            <div v-if="!disabledZoom" class="flex items-center ml-12px">
                <div class="pr-8px w-82px cursor-pointer">
                    <Select v-model:value="canvasScaleComuted" v-model="canvasScaleComuted" :options="canvasScaleOptions"
                        size="small"></Select>
                </div>
                <div class="w-90px cursor-pointer">
                    <Slider :min="0.6" :max="1.4" :step="0.01" :tooltip="false" v-model:value="canvasScale"
                        v-model="canvasScale" />
                </div>
            </div>
            <!-- 缩放操作 end  -->
        </div>
    </div>
    <!-- 工具条 end  -->
</template>
<script lang="ts" setup>
import { useShareStore, pluginManager, revoke, deepCompareAndModify, convertKFormData } from '@epic-designer/utils'
import type { PageSchema, Designer } from '../../../../../types/epic-designer'
import { computed, inject, ref } from 'vue'
import EIcon from '../../../../icon'

const Slider = pluginManager.getComponent('slider')
const Select = pluginManager.getComponent('select')

const { canvasScale, disabledZoom } = useShareStore()
const checkedKey = ref('pc')
const pageSchema = inject('pageSchema') as PageSchema
const designer = inject('designer') as Designer

const deviceOptions = [
    {
        icon: 'icon-a-diannaotoubu',
        title: 'pc',
        key: 'pc'
    },
    {
        icon: 'icon-a-pingbantoubu',
        title: '平板',
        key: 'pad'
    },
    {
        icon: 'icon-a-shoujitoubu',
        title: '手机',
        key: 'mobile'
    },
]

const recordList = revoke.recordList
const undoList = revoke.undoList

const actionOptions = computed(() => {
    return [
        {
            icon: 'icon-daima1',
            title: '导出数据',
            on: () => handleExportData()
        },
        {
            icon: 'icon-shangchuan1',
            title: '导入数据',
            on: handleOpenFileSelector
        },
        {
            icon: 'icon-shanchu1',
            title: '清空',
            on: handleReset
        },
        {
            icon: 'icon-chexiao2x',
            title: '撤销',
            on: handleUndo,
            disabled: !recordList.value.length
        },
        {
            icon: 'icon-fanhui2x',
            title: '重做',
            on: handleRedo,
            disabled: !undoList.value.length
        },

    ]
})

const fileRef = ref<HTMLInputElement | null>(null)
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

/**
 * 撤销操作
 */
function handleUndo() {
    const record = revoke.undo()
    if (!record) return
    deepCompareAndModify(pageSchema.schemas, record)
    designer.setCheckedNode(pageSchema.schemas[0])
}

/**
 * 重做操作
 */
function handleRedo() {
    const record = revoke.redo()
    if (!record) return
    deepCompareAndModify(pageSchema.schemas, record)
    designer.setCheckedNode(pageSchema.schemas[0])
}


/**
 * 重置页面数据
 */
function handleReset() {
    designer.reset()
}

/**
 * 导出数据
 */
function handleExportData(fileName = `epic-data.json`) {
    let content = "data:text/json;charset=utf-8,";
    content += JSON.stringify(pageSchema, null, 2);
    var encodedUri = encodeURI(content);
    var actions = document.createElement("a");
    actions.setAttribute("href", encodedUri);
    actions.setAttribute("download", fileName);
    actions.click();
}

/**
 * 打开文件选择器
 */
function handleOpenFileSelector() {
    fileRef.value?.click()
}

// 选择文件
function handleFileSelected(e) {
    const file = e.target.files?.[0]
    if (!file) return
    e.target.value = null

    // 通过json文件导入
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = (res) => {
        handleImporttData(res.target?.result as string);

    };
}

/**
 * 导入数据
 */
function handleImporttData(content?: string) {
    // 导入JSON
    try {

        let schema = JSON.parse(content ?? '')
        if (!schema.schemas) {
            schema = convertKFormData(schema)
        }

        // 调用 deepCompareAndModify 函数比较 pageSchema 和传入的 schema，进行修改
        deepCompareAndModify(pageSchema, schema)


    } catch (error) {
        console.error(error);
    }
}

/**
 * 设置画布宽高
 * @param type 
 */
function handleSetCanvas(type: string) {
    checkedKey.value = type
    const canvasConfigs = {
        pc: {

        },
        pad: {
            width: '800px',
        },
        mobile: {
            width: '420px'
        },
    }

    pageSchema.canvas = canvasConfigs[type]
}



</script>