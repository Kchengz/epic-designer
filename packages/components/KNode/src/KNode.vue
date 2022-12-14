<template>
    <FormItem v-if="FormItem && component && !record.noInput" v-bind="record" :name="record.field">
        <component
            v-bind="{ ...componentProps, ...record.componentProps, [componentProps.bindModel]: formData[record.field] }">
            <!-- 递归组件 start -->
            <template #node="data">
                <KNode v-bind="data" />
            </template>
            <!-- 递归组件 end -->
            <!-- 递归组件 start -->
            <template #edit-node="data">
                <slot name="edit-node"></slot>
            </template>
            <!-- 递归组件 end -->
        </component>
    </FormItem>

    <!-- 无需FormItem start -->
    <component v-else-if="component"
        v-bind="{ ...componentProps, ...record.componentProps, [componentProps.bindModel]: formData[record.field] }">
        <!-- 递归组件 start -->
        <template #node="data">
            <KNode v-bind="data" />
        </template>
        <!-- 递归组件 end -->
        <!-- 递归组件 start -->
        <template #edit-node="data">
            <slot name="edit-node"></slot>
        </template>
        <!-- 递归组件 end -->
    </component>
    <!-- 无需FormItem end -->

</template>
<script lang="ts" setup>
import { shallowRef, inject, Slots, watch, h } from 'vue'
import { pluginManager } from '../../../utils/index'
import { FormDataModel } from '../../../types/kDesigner'

let formData = inject('formData', {}) as FormDataModel
let slots = inject('slots', {}) as Slots

const { component: FormItem } = pluginManager.getComponent('FormItem') || {};

const props = defineProps({
    record: {
        type: Object as any,
        require: true
    },
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
    if (record.componentProps?.defaultValue) {
        handleUpdate(componentProps.defaultValue)
    }


    // 组件为slot类型时
    if (record.type === 'slot') {
        const slotName: string = record.slotName

        // 需要监听值变化，重新传递参数
        watch(() => formData[record.field], () => {
            // 获取插槽函数
            const slot = slots[slotName]?.({
                record: record,
                model: formData,
            })
            component.value = h('div', null, slot)
        }, {
            immediate: true
        })

        // 获取组件props数据
        componentProps.value = {
            is: component,
        }
        return false
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
