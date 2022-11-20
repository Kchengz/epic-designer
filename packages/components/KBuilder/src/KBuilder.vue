<template>
    <Form ref="form" :model="formData" v-bind="getFormBindValues">
        <KNode ref="Knode" v-for="item, index in props.schemas?.nodes" :key="index" :record="item">
        </KNode>
    </Form>
</template>
<script lang="ts" setup>
import type { PropType } from 'vue'
import KNode from '../../KNode/'
import { computed, reactive, provide, ref, useSlots } from 'vue'
import { Schemas, FormDataModel } from '../../../types/kDesigner'
import { pluginManager } from '../../../utils/pluginManager'

const { component: Form } = pluginManager.getComponent('Form');

const formData = reactive<FormDataModel>({});
const slots = useSlots()

provide('formData', formData)
provide('slots', slots)

const form = ref<any>(null)

const props = defineProps({
    schemas: {
        type: Object as PropType<Schemas>
    }
})


const getFormBindValues = computed(() => {
    return {
        ...props.schemas?.config,
    }
})




function getData(): Promise<FormDataModel> {
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