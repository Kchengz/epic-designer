<template>
    <a-form-item v-bind="record" :name="record.field">
        <slot :name="record.slot" :value="props.modelValue" :model="props.model" :record="record">
            <component :is="component" style="width: 100%;" v-model:value="props.model[record.field]"
                v-bind="componentProps" />
        </slot>
    </a-form-item>
</template>
<script lang="ts" setup>
import { defineEmits, onMounted, ref } from 'vue'
import { pluginManager } from '../core/PluginManager'


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
const componentProps = record.componentProps

// 获取已存在的组件
const components = pluginManager.getComponents()
const component = components[record.component]


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
