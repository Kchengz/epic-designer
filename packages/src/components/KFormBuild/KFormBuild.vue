<template>
    <Form ref="form" :model="formData" v-bind="getFormBindValues">
        <KNode v-for="item,index in props.formSchema?.nodes"
            :key="index" :record="item">
            <template v-if="item.slot" #[getSlotName(item.slot)]="data">
                <slot :name="item.slot" v-bind="data || {}"></slot>
            </template>
        </KNode>
    </Form>
</template>
<script lang="ts" setup>
import type { PropType } from 'vue'
import KNode from '../KNode/KNode.vue'
import { computed, reactive, provide, ref, useSlots } from 'vue'
import { pluginManager } from '../../core/PluginManager'

export interface FormItem {
    label: string;
    field: string;
    slot?: string;
    component?: string;
    componentProps: any;
    key?: string;
    rules?: any;
    labelCol?: any;
    wrapperCol?: any;
    children?: FormItem[];
    [propName: string]: any;

}

export interface FormConfig {
    layout?: string;
    labelWidth?: string;
    labelLayout: any;
    labelCol: any;
    wrapperCol: any;
    hideRequiredMark?: boolean;
    customStyle?: string;
}

export interface FormSchema {
    nodes: FormItem[]
    config: FormConfig
}

const { component: Form } = pluginManager.getComponent('Form');

const formData = reactive<any>({});
const slots = useSlots()

provide('formData',formData)
provide('slots',slots)

const form = ref<any>(null)


const props = defineProps({
    formSchema: {
        type: Object as PropType<FormSchema>
    }
})


const getFormBindValues = computed(() => {
    return {
        ...props.formSchema?.config,
    }
})




function getData() {
    // validateFields
    return new Promise(async (resolve, rejects) => {
        try {
            await form.value?.validateFields()
            resolve(formData)
        } catch (error) {
            rejects(error)
        }
    })

}

function setData(data: object) {
    // validateFields
    Object.assign(formData, data)
}

function getSlotName(slot?: string): string {
    return slot || ''
}


defineExpose({
    getData,
    setData
})
</script>