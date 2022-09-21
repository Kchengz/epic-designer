<template>
    <a-form-item :label="record.label" :rules="record.rules" :name="record.field">
        <component :is="component" style="width: 100%;" v-model:value="k" @input="handleChange"
            v-bind="componentProps" />
    </a-form-item>
</template>
<script lang="ts" setup>
import { components } from '../config/component_use'
import { defineEmits, PropType, ref } from 'vue'


const props = defineProps({
    record: {
        type: Object as any,
        require: true
    },
})

const k = ref(null)
const emit = defineEmits(['updateFormState'])
const { record } = props
const component = components[record.component]
const componentProps = record.componentProps


function handleChange(e: any) {
    // formState.input_1663731915815 = 123
    emit('updateFormState', e.target.value)

}
</script>
