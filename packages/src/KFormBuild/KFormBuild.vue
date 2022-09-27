<template>
    <a-form ref="form" :model="formState" v-bind="getFormBindValues">
        <KFormItem v-for="item,index in props.formSchema?.nodes" v-model="formState[item.field]" :key="index"
            :record="item" />
    </a-form>
</template>
<script lang="ts" setup>
import type { PropType } from 'vue'
import KFormItem from '../KFormItem/KFormItem.vue'
import { computed, reactive, defineExpose, ref } from 'vue'
import { rejects } from 'assert';

let formState = reactive<any>({
});

const form = ref<any>(null)

interface FormItem {
    label: string;
    field: string;
    component: string;
    componentProps: any;
    key: string
}

interface FormConfig {
    layout: string;
    labelWidth: string;
    labelLayout: any;
    labelCol: string;
    wrapperCol: string;
}

interface FormSchema {
    nodes: FormItem[]
    config: FormConfig
}


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

defineExpose({
    getData,
    setData
})
</script>