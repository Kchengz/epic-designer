<template>
    <a-form-item :label="record.label" :rules="record.rules" :name="record.field">
        <slot :name="record.slot" :value="props.modelValue" :model="props.model" :record="record">
            <component :is="component" style="width: 100%;" :value="props.modelValue" @update:value="handleUpdate"
                v-bind="componentProps" />
        </slot>
    </a-form-item>
</template>
<script lang="ts" setup>
import { components } from '../config/component_use'
import { defineEmits, ref } from 'vue'


const props = defineProps({
    record: {
        type: Object as any,
        require: true
    },
    model: {
        type: Object as any,
    },
    modelValue: {}
})


const emit = defineEmits(['update:modelValue'])
const { record } = props

const component = components[record.component]

const componentProps = record.componentProps



function handleUpdate(e: any) {
    // formState.input_1663731915815 = 123
    emit('update:modelValue', e)

}
</script>
