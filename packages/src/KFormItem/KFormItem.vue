<template>
    <a-form-item :label="record.label" :rules="record.rules" :name="record.field">
        <slot :name="record.slot" :value="props.modelValue" :model="props.model" :record="record">
            <component :is="component" style="width: 100%;" v-model:value="props.model[record.field]"
                v-bind="componentProps" />
        </slot>
    </a-form-item>
</template>
<script lang="ts" setup>
import { components } from '../config/component_use'
import { defineEmits, onMounted, ref } from 'vue'


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


/**
 * 通过函数更新值
 */
function handleUpdate(e: any) {
    emit('update:modelValue', e)

}

onMounted(() => {
    // 如果存在默认值，则会在初始化之后赋值
    if (componentProps.defaultValue) {
        handleUpdate(componentProps.defaultValue)
    }
})

</script>
