<template>
    <!-- <Form ref="form" :model="formData" v-bind="getFormBindValues"> -->
    <div>
        <KNode ref="Knode" v-for="item, index in props.schemas" :key="index" :record="item">
        </KNode>
    </div>
    <!-- </Form> -->
</template>
<script lang="ts" setup>
import type { PropType } from 'vue'
import KNode from '../../KNode/'
import { reactive, provide, ref, watch, useSlots } from 'vue'
import { NodeItem, FormDataModel } from '../../../types/kDesigner'


const formData = reactive<FormDataModel>({});
const slots = useSlots()
const forms = ref<any>({})
// const form = ref<any>(null)

provide('formData', formData)
provide('slots', slots)
provide('forms', forms)

const props = defineProps({
    schemas: {
        type: Object as PropType<NodeItem[]>
    }
})

watch(() => props.schemas, (e) => {
    console.log(e,'--------------')
}, { deep: true })
// const getFormBindValues = computed(() => {
//     return {
//         ...props.schemas?.config,
//     }
// })


function getData(): Promise<FormDataModel> {
    // validateFields
    return new Promise(async (resolve, rejects) => {
        try {
            console.log(forms.value)
            // 默认表单
            const values = await forms.value?.default?.validateFields()
            resolve(values)
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