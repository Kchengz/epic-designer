<template>
    <Form ref="form" :model="formState" v-bind="getFormBindValues">
        <KFormItem v-for="item,index in props.formSchema?.nodes" v-model="formState[item.field]" :model="formState" :key="index"
            :record="item">
            <template v-if="item.slot" #[getSlotName(item.slot)]="data">
                <slot :name="item.slot" v-bind="data || {}"></slot>
            </template>
        </KFormItem>
    </Form>
</template>
<script lang="ts" setup>
import type { PropType } from 'vue'
import KFormItem from '../KFormItem/KFormItem.vue'
import { computed, reactive, ref } from 'vue'
import { pluginManager } from '../../core/PluginManager'


export interface FormItem {
    label: string;
    field: string;
    slot?: string;
    component: string;
    componentProps: any;
    key?: string;
    rules?: any;
    labelCol?: any;
    wrapperCol?: any;
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

const Form = pluginManager.getComponent('Form');

let formState = reactive<any>({
});

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
            resolve(formState)
        } catch (error) {
            rejects(error)
        }
    })

}

function setData(data: object) {
    // validateFields
    Object.assign(formState, data)
}

function getSlotName(slot?: string): string {
    return slot || ''
}


defineExpose({
    getData,
    setData
})
</script>