<template>
    <FormItem v-bind="record" :name="record.field">
        <slot :name="record.slot" :value="props.modelValue" :model="props.model" :record="record">
            <component v-bind="componentProps" />
        </slot>
    </FormItem>
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { pluginManager } from '../../core/PluginManager'

const FormItem = pluginManager.getComponent('FormItem');

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

const { record } = props

// 获取已存在的组件
const components = pluginManager.getComponents()
const component = components[record.component]

const emit = defineEmits([`update:modelValue`])

// 获取组件props
const componentProps = {
    ...record.componentProps,
    is: component,
    style: "width: 100%;",
    [component.bindModel]: props.modelValue,
    [`onUpdate:${component.bindModel}`]: handleUpdate
}

/**
 * 通过函数更新值
 * @param v value值
 */
function handleUpdate(v: any) {
    emit(`update:modelValue`, v)
}

onMounted(() => {
    // 如果存在默认值，则会在初始化之后赋值
    if (componentProps.defaultValue) {
        handleUpdate(componentProps.defaultValue)
    }
})

</script>
