<template>
  <FormItem v-if="props.record.noFormItem !== true && getComponentConfing?.defaultSchema.input && component && show"
    ref="formItemRef" v-bind="getFormItemProps">
    <component :is="component" ref="componentInstance" @vue:mounted="handleAddComponentInstance"
      @vue:unmounted="handleVnodeUnmounted"
      v-bind="{ ...componentProps, ...props.record.componentProps, ...dataSource, [componentProps.bindModel]: formData[props.record.field!] }">
      <!-- 嵌套组件递归 start -->
      <!-- 渲染组件 start -->
      <template #node="data">
        <ENode v-bind="data" />
      </template>
      <!-- 渲染组件 end -->
      <!-- 渲染子组件列表 start -->
      <template #edit-node>
        <slot name="edit-node" />
      </template>
      <!-- 渲染子组件列表 end -->
    </component>
  </FormItem>
  <!-- 无需FormItem start -->
  <component :is="component" v-else-if="component && show" @vue:mounted="handleAddComponentInstance"
    @vue:unmounted="handleVnodeUnmounted" ref="componentInstance" :model="formData"
    v-bind="{ ...componentProps, ...props.record.componentProps, ...dataSource, [componentProps.bindModel]: formData[props.record.field!] || modelValue }">
    <!-- 嵌套组件递归 start -->
    <!-- 渲染组件 start -->
    <template #node="data">
      <ENode v-bind="data" />
    </template>
    <!-- 渲染组件 end -->
    <!-- 渲染子组件列表 start -->
    <template #edit-node>
      <slot name="edit-node" />
    </template>
    <!-- 渲染子组件列表 end -->
  </component>
  <!-- 无需FormItem end -->
</template>
<script lang="ts" setup>
import { shallowRef, ref, inject, computed, reactive, useAttrs, provide, Slots, watch, h, ComponentPublicInstance } from 'vue'
import { pluginManager, capitalizeFirstLetter, PageManager } from '@epic-designer/utils'
import { FormDataModel, NodeItem } from '../../../types/epic-designer'

export interface ComponentNodeInstance extends ComponentPublicInstance {
  setValue?: (value: any) => void
  getValue?: () => any
}

defineOptions({
  name: 'ENode'
})
const formData = inject('formData', {}) as FormDataModel
const slots = inject('slots', {}) as Slots
const pageManager = inject('pageManager', {}) as PageManager

const emit = defineEmits(['update:modelValue', 'change'])
const FormItem = pluginManager.getComponent('form-item')
const componentInstance = ref<ComponentNodeInstance>()
const formItemRef = ref<ComponentPublicInstance>()

// const props = defineProps({
//   record: {
//     type: Object as PropType<NodeItem>,
//     default: () => ({})
//   },
//   modelValue: {
//     type: [Object, Array, String, Number, Boolean] as PropType<any>,
//     default: undefined
//   }
// })

const props = defineProps<{
  record: NodeItem,
  modelValue?: any,
  ruleField?: string[],
  name?: string
}>()

// 传递额外的attrs
// 传递额外的attrs
const attrs = useAttrs()
if (Object.keys(attrs).length) {
  provide("nodeAttrs", attrs)
}


// 定义组件及组件props字段
const component = shallowRef<any>(null)
const componentProps = shallowRef<any>({})
const dataSource = reactive<any>({})

const show = computed(() => {
  // hidden 属性优先级最高
  if (props.record.componentProps?.hidden) {
    return false
  }

  // show属性为boolean类型则直接返回
  if (typeof props.record.show === 'boolean') {
    return props.record.show
  }

  return props.record.show?.({ values: formData }) ?? true
})

const getFormItemProps = computed(() => {
  const rules = show.value && props.record.rules?.map(item => ({
    ...item,
    validator: item.validator && pageManager.funcs.value[item.validator] // 自定义校验函数
  }))
  return {
    ...props.record,
    rules,
    rule: rules,
    field: props.ruleField ?? props.record.field
  }
})

// 获取组件原配置
const getComponentConfing = computed(() => {
  return pluginManager.getComponentConfingByType(props.record.type) ?? null
})

// 判断是否存在字段名称
if (props.record.field) {
  // 存在则更新表单状态
  watch(() => props.modelValue, (e) => {
    formData[props.record.field!] = e
  }, {
    immediate: true
  })
}

watch(() => componentInstance.value, () => {
  handleAddComponentInstance()
})


// 添加组件实例
function handleAddComponentInstance() {

  if (props.record.id && componentInstance.value) {
    // 输入组件则添加setValue方法
    if (props.record.input) {
      componentInstance.value.setValue = handleUpdate
      componentInstance.value.getValue = () => {
        return formData[props.record.field!] || props.modelValue
      }

    }
    pageManager.addComponentInstance(props.record.id, componentInstance.value)
    // 添加实例 及 formItem实例
    if (getComponentConfing.value?.defaultSchema.input && props.record.noFormItem !== true && formItemRef.value) {
      pageManager.addComponentInstance(props.record.id + 'formItem', formItemRef.value)
    }
  }
}

/**
 * 移除组件实例
 */
function handleVnodeUnmounted() {
  if (props.record.id) {
    // 移除实例 及 formItem实例
    pageManager.removeComponentInstance(props.record.id)
    if (getComponentConfing.value?.defaultSchema.input && props.record.noFormItem !== true) {
      pageManager.removeComponentInstance(props.record.id + 'formItem')
    }
  }
}

/**
 * 初始化组件
 */
async function initComponent() {
  // 如果存在默认值，则会在初始化之后赋值
  if (props.record.componentProps?.defaultValue) {
    handleUpdate(props.record.componentProps?.defaultValue)
  }

  // 组件为slot类型时
  if (props.record.type === 'slot') {
    const slotName = props.record.slotName
    if (!slotName) { return false }
    // componentProps.value.bindModel = 'modelValue'
    // 需要监听值变化，重新传递参数
    watch(() => formData[props.record.field!], () => {
      // 获取插槽函数
      // const slot = slots[slotName]?.({
      //   record: props.record,
      //   model: formData
      // })
      component.value = h('div', null, slots[slotName]?.({
        record: props.record,
        model: formData
      }))
    }, {
      immediate: true
    })

    // 获取组件props数据
    return false
  }

  // 内置组件
  const cmp = pluginManager.getComponent(props.record.type)
  // 内部不存在组件
  if (!cmp) {
    console.error(`组件${props.record.type}未注册`)
    return false
  }
  const bindModel = getComponentConfing.value?.bindModel ?? 'modelValue'

  // 如果数据项为函数，则判定为懒加载组件
  if (typeof cmp === 'function') {
    const res = await cmp()
    component.value = res.default ?? res
  } else {
    // 否则为预加载组件
    component.value = cmp
  }

  const onEvent: { [type: string]: Function } = {}
  props.record.on && Object.keys(props.record.on).forEach((item) => {
    onEvent[`on${capitalizeFirstLetter(item)}`] = (...args) => pageManager.doActions(props.record.on[item], ...args)
  })

  // 获取组件props数据
  componentProps.value = {
    ...props,
    record: props.record,
    // is: component,
    bindModel,
    [`onUpdate:${bindModel}`]: handleUpdate,
    ...onEvent
  }
}

/**
 * 通过函数更新值
 * @param v value值
 */
function handleUpdate(v: any) {
  emit('update:modelValue', v)
  emit('change', v)
  if (props.record.field) {
    formData[props.record.field!] = v
  }
}

let oldData: string | null = null
// 需要监听值变化，重新渲染组件
watch(() => props.record, (newVal) => {
  // 过滤所有子节点
  const newData = JSON.stringify({ ...newVal, children: undefined })
  if (newData === oldData) {
    return false
  }
  oldData = newData
  initComponent()
}, {
  immediate: true,
  deep: true
})

</script>
