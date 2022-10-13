<template>
    <FormItem v-bind="record" v-if="component" :name="record.field">
        <slot :name="record.slot" :value="props.modelValue" :model="props.model" :record="record">
            <component v-bind="componentProps" />
        </slot>
    </FormItem>
</template>
<script lang="ts" setup>
import { onMounted, shallowRef } from 'vue'
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
const emit = defineEmits([`update:modelValue`])

const { record } = props

// 获取已存在的组件
const components = pluginManager.getComponents()

let component = shallowRef<any>(null)
let componentProps = shallowRef<any>(null)


/**
 * 初始化组件
 */
async function initComponent() {
    console.time()
    const cmp = components[record.component]

    // 如果数据项为函数，则判定为懒加载组件
    if (typeof cmp === 'function') {
        const res = await cmp()
        component.value = res['default']
    } else {
        // 否则为预加载组件
        component.value = cmp
    }
    // 获取组件props数据
    componentProps.value = {
        ...record.componentProps,
        is: component,
        style: "width: 100%;",
        [component.value.bindModel]: props.modelValue,
        [`onUpdate:${component.value.bindModel}`]: handleUpdate
    }

    console.timeEnd()

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

initComponent()

</script>
