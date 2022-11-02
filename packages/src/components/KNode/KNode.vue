<template>
    <FormItem v-if="component && !record.noInput" v-bind="record" :name="record.field">
        <component v-bind="{...componentProps,[componentProps.bindModel]:formData[record.field]}">
            <!-- 递归组件 start -->
            <template #node="data">
                <KNode v-bind="data" />
            </template>
            <!-- 递归组件 end -->
        </component>
    </FormItem>

    <!-- 无需FormItem start -->
    <component v-else-if="component" v-bind="{...componentProps,[componentProps.bindModel]:formData[record.field]}">
        <!-- 递归组件 start -->
        <template #node="data">
            {{formData}}
            <KNode v-bind="data" />
        </template>
        <!-- 递归组件 end -->
    </component>
    <!-- 无需FormItem end -->

</template>
<script lang="ts" setup>
import { shallowRef, inject, Slots, renderSlot, h } from 'vue'
import { pluginManager } from '../../utils/pluginManager'

let formData = inject('formData') as { [field: string]: any }
let slots = inject('slots') as Slots
const { component: FormItem } = pluginManager.getComponent('FormItem');

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
    if (record.componentProps.defaultValue) {
        handleUpdate(componentProps.defaultValue)
    }


    // 组件为slot类型时
    if (record.slot) {
        const slotName: string = record.slot

        const slot = slots[slotName]?.({
            record: record,
            value: formData,
            updateValue: handleUpdate
        })
        const s = slots[slotName]
        console.log(s)
        // console.log(renderSlot(slots,slotName,{kk:1212}))
        // component.value = h('div',null,[renderSlot(slots,slotName,{kk:1212})])
        component.value = h('div',null,slot)
        
        console.log(component.value)

        // 获取组件props数据
        componentProps.value = {
            is: component,
        }
        return false
    }

    // 内置组件
    const componentInfo = pluginManager.getComponent(record.component)
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
