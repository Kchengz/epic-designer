<template>
    <component v-bind="{ ...componentProps }">
    </component>
</template>
<script lang="ts" setup>
import { shallowRef, computed } from 'vue'
import { pluginManager } from '../../../../../utils/index'

const props = defineProps({
    record: {
        type: Object as any,
        require: true
    },
    modelValue: {}
})
const emit = defineEmits(['update:modelValue'])

const value = computed({
    get() {
        return props.modelValue
    },
    set(e) {
        emit('update:modelValue', e)
    }
})
const { record } = props

// 定义组件及组件props字段
let component = shallowRef<any>(null)
let componentProps = shallowRef<any>(null)


/**
 * 初始化组件
 */
async function initComponent() {

    // 如果存在默认值，则会在初始化之后赋值
    if (record.defaultValue) {
        handleUpdate(record.defaultValue)
    }

    // 内置组件
    const componentInfo = pluginManager.getComponent(record.type)
    // 内部不存在组件
    if (!componentInfo) {
        console.error(`组件${record.type}未注册`)
        return false
    }

    const { bindModel, component: cmp } = componentInfo
    // 如果数据项为函数，则判定为懒加载组件
    if (typeof cmp === 'function') {
        const res = await cmp()
        component.value = res.default ?? res
    } else {
        // 否则为预加载组件
        component.value = cmp
    }


    // 获取组件props数据
    componentProps.value = {
        record: record,
        ...record.componentProps,
        is: component,
        style: "width: 100%;",
        bindModel,
        [`${bindModel}`]: value,
        [`onUpdate:${bindModel}`]: handleUpdate
    }
}

function handleUpdate(e: any) {
    value.value = e
}

initComponent()

</script>
