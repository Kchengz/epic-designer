<template>
    <FormItem v-if="component && !record.noInput" v-bind="record" :name="record.field">
        <slot :name="record.slot" v-bind="componentProps" :model="formData">
            <component v-bind="{...componentProps,[componentProps.bindModel]:formData[record.field]}">
                <!-- 递归组件 start -->
                <template #node="data">
                    <KNode v-bind="data" />
                </template>
                <!-- 递归组件 end -->
            </component>
        </slot>
    </FormItem>

    <!-- 无需FormItem start -->
    <slot v-else-if="component" :name="record.slot" v-bind="componentProps">
        <component v-bind="componentProps">
            <!-- 递归组件 start -->
            <template #node="data">
                <KNode v-bind="data" />
            </template>
            <!-- 递归组件 end -->
        </component>
    </slot>
    <!-- 无需FormItem end -->

</template>
<script lang="ts" setup>
import { shallowRef, inject,Slots } from 'vue'
import { pluginManager } from '../../core/PluginManager'

let formData: any = inject('formData')
let slots = inject('slots') as Slots

console.log(slots.sdf)

const { component: FormItem } = pluginManager.getComponent('FormItem');

const props = defineProps({
    record: {
        type: Object as any,
        require: true
    },
})

const { record } = props

// 获取的组件
const componentInfo = pluginManager.getComponent(record.component)

let component = shallowRef<any>(null)
let componentProps = shallowRef<any>(null)

/**
 * 初始化组件
 */
async function initComponent() {

    const { bindModel, component: cmp } = componentInfo
    // 如果数据项为函数，则判定为懒加载组件
    if (typeof cmp === 'function') {
        const res = await cmp()
        component.value = res.default ?? res
    } else {
        // 否则为预加载组件
        component.value = cmp
    }

    // 如果存在默认值，则会在初始化之后赋值
    if (record.componentProps.defaultValue) {
        handleUpdate(componentProps.defaultValue)
    }

    // 获取组件props数据
    componentProps.value = {
        record: record,
        ...record.componentProps,
        is: component,
        style: "width: 100%;",
        bindModel,
        [`onUpdate:${bindModel}`]: handleUpdate
    }

}


/**
 * 通过函数更新值
 * @param v value值
 */
function handleUpdate(v: any) {
    formData[record.field] = v
}


initComponent()

</script>
