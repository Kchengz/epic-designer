<template>
    <a-form ref="form" :model="formState" v-bind="getFormBindValues" @finish="handleFinish">
        <KFormItem v-for="item,index in props.formSchema?.nodes"
            @updateFormState="handleUpdateFormState(item.field,$event)" :key="index" :record="item" />
    </a-form>
</template>
<script lang="ts" setup>
import type { PropType } from 'vue'
import KFormItem from '../KFormItem/KFormItem.vue'
import { computed, reactive, defineExpose, ref } from 'vue'
const formState = reactive<any>({
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
    return props.formSchema?.config
})

function handleFinish(e: any) {
    console.log(e, 332)
}


function handleUpdateFormState(field: string, value: any) {
    formState[field] = value
}

function getData() {
    // validateFields
    return form.value?.validateFields()

}

defineExpose({
    getData
})
</script>