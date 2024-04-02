<template>
  <FormItem v-if="innerSchema.noFormItem !== true && getComponentConfing?.defaultSchema.input && component && show"
    ref="formItemRef" v-bind="getFormItemProps">
    <component :is="component" ref="componentInstance" @vue:mounted="handleAddComponentInstance"
      v-bind="{ ...getComponentProps, ...dataSource, [getComponentProps.bindModel]: getBindValue() }">
      <!-- 嵌套组件递归 start -->
      <!-- 渲染子组件 start -->
      <template #node="data">
        <ENode v-bind="data" />
      </template>
      <!-- 渲染子组件 end -->
      <!-- 渲染布局设计子组件列表 start -->
      <template #edit-node>
        <slot name="edit-node" />
      </template>
      <!-- 渲染布局设计子组件列表 end -->
    </component>
  </FormItem>
  <!-- 无需FormItem start -->
  <component :is="component" v-else-if="component && show" @vue:mounted="handleAddComponentInstance"
    ref="componentInstance" :model="formData"
    v-bind="{ ...getComponentProps, ...dataSource, [getComponentProps.bindModel]: getBindValue() }">
    <!-- 嵌套组件递归 start -->
    <!-- 渲染子组件 start -->
    <template #node="data">
      <ENode v-bind="data" />
    </template>
    <!-- 渲染子组件 end -->
    <!-- 渲染布局设计子组件列表 start -->
    <template #edit-node>
      <slot name="edit-node" />
    </template>
    <!-- 渲染布局设计子组件列表 end -->
  </component>
  <!-- 无需FormItem end -->
</template>
<script lang="ts" setup>
import { shallowRef, ref, Ref, inject, computed, reactive, useAttrs, onUnmounted, provide, Slots, renderSlot, defineComponent, watch, h, type ComponentPublicInstance, type ComponentInternalInstance, getCurrentInstance } from 'vue'
import { pluginManager, capitalizeFirstLetter, PageManager, deepClone, deepCompareAndModify, deepEqual } from '@epic-designer/utils'
import { FormDataModel, ComponentSchema } from '../../../types/epic-designer'

export interface ComponentNodeInstance extends ComponentPublicInstance {
  setValue?: (value: any) => void,
  getValue?: () => any,
  setAttr?: (key: string, value: any) => any,
  getAttr?: (key: string) => any
}

const { proxy } = getCurrentInstance() as ComponentInternalInstance


defineOptions({
  name: 'ENode'
})

const props = defineProps<{
  componentSchema: ComponentSchema,
  modelValue?: any,
  ruleField?: string[],
  resetFormData?: Boolean,
  name?: string
}>()

// 内部schema数据
let innerSchema = reactive<ComponentSchema>(deepClone(props.componentSchema))

// 监听 props.componentSchema 的变化，并在变化时调用 deepCompareAndModify 方法更新内部schema数据
watch(() => props.componentSchema, (componentSchema) => {
  // 深度比较对象属性值是否变更, 忽略 children 节点
  if (deepEqual(innerSchema, componentSchema, ['children'])) {
    return
  }
  deepCompareAndModify(innerSchema, deepClone(componentSchema))
}, {
  deep: true
})

// 表单formData数据
let formData = inject('formData', {}) as FormDataModel

const slots = inject('slots', {}) as Slots
// 接收页面管理对象
const pageManager = inject('pageManager', {}) as PageManager
// 上级组件注入的disabled状态
const disabled = inject<Ref<boolean> | { value: false; }>('disabled', { value: false })
// 校验前缀字段
const ruleFieldPrefix = inject<any[] | null>('ruleFieldPrefix', null)
// 重置表单数据，不设置到表单formData数据
const resetFormDataInject = inject<boolean>('resetFormData', false)

// 重置表单数据，移除表单数据引用
if (props.resetFormData || resetFormDataInject) {
  formData = {}
}

// 定义组件的事件
const emit = defineEmits(['update:modelValue', 'change'])
// 获取插件管理器中的表单项组件
const FormItem = pluginManager.getComponent('form-item')
// 组件实例的引用
const componentInstance = ref<ComponentNodeInstance>()
// 表单项的引用
const formItemRef = ref<ComponentPublicInstance>()

// 传递额外的attrs
const attrs = useAttrs()
if (Object.keys(attrs).length) {
  provide("nodeAttrs", attrs)
}

// 定义组件及组件props字段
const component = shallowRef<any>(null)
// const componentProps = shallowRef<any>({})
const dataSource = reactive<any>({})

const show = computed(() => {
  // hidden 属性优先级最高
  if (innerSchema.componentProps?.hidden) {
    return false
  }

  // show属性为boolean类型则直接返回
  if (typeof innerSchema.show === 'boolean') {
    return innerSchema.show
  }

  return innerSchema.show?.({ values: formData }) ?? true
})

// 获取FormItemProps
const getFormItemProps = computed(() => {
  const rules = show.value && innerSchema.rules?.map(item => ({
    ...item,
    validator: item.validator && pageManager.funcs.value[item.validator] // 自定义校验函数
  })
  )


  // 获取校验字段
  let model: string | string[] | undefined = innerSchema.field


  if (props.ruleField) {
    // 设置为父级传入的校验字段
    model = props.ruleField
  }

  else if (ruleFieldPrefix && innerSchema.field) {
    // 添加校验字段前缀
    model = deepClone(ruleFieldPrefix) as []
    model.push(innerSchema.field)
  }
  const formItemProps = {
    ...innerSchema,
    rules,
    rule: rules,
    field: model
  }

  // 移除元素只读属性 children
  if (formItemProps['children']) {
    delete formItemProps['children']
  }
  return formItemProps
})

// 获取组件props数据
const getComponentProps = computed(() => {
  const bindModel = getComponentConfing.value?.bindModel ?? 'modelValue'

  const onEvent: { [type: string]: Function } = {}
  innerSchema.on && Object.keys(innerSchema.on).forEach((item) => {
    onEvent[`on${capitalizeFirstLetter(item)}`] = (...args) => pageManager.doActions(innerSchema.on[item], ...args)
  })

  return {
    ...props,
    ...innerSchema.componentProps,
    disabled: disabled?.value || innerSchema.componentProps?.disabled,
    bindModel,
    [`onUpdate:${bindModel}`]: handleUpdate,
    ...onEvent
  }
})

// 获取组件原配置
const getComponentConfing = computed(() => {
  return pluginManager.getComponentConfingByType(innerSchema.type) ?? null
})

// 计算绑定值
const getBindValue = () => {
  return formData[innerSchema.field ?? ''] ?? props.modelValue
}


// 监听组件实例是否初始化
watch(() => componentInstance.value, () => {
  handleAddComponentInstance()
}, { immediate: true })


// 添加组件实例
function handleAddComponentInstance() {
  const instance = (componentInstance.value || proxy) as ComponentNodeInstance
  if (innerSchema.id && instance) {
    // 输入组件则添加setValue方法
    if (innerSchema.input) {
      instance.setValue = handleUpdate
      instance.getValue = () => {
        return formData[innerSchema.field!] || props.modelValue
      }
    }

    // 添加属性设置方法
    instance.setAttr = (key: string, value: any) => {
      return innerSchema.componentProps[key] = value
    }

    // 添加获取设置方法
    instance.getAttr = (key: string) => {
      return innerSchema.componentProps[key]
    }

    pageManager.addComponentInstance(innerSchema.id, instance)
    // 添加实例 及 formItem实例
    if (getComponentConfing.value?.defaultSchema.input && innerSchema.noFormItem !== true && formItemRef.value) {
      pageManager.addComponentInstance(innerSchema.id + 'formItem', formItemRef.value)
    }
  }
}



/**
 * 移除组件实例
 */
function handleVnodeUnmounted() {
  if (innerSchema.id) {
    // 移除实例 及 formItem实例
    pageManager.removeComponentInstance(innerSchema.id)
    if (getComponentConfing.value?.defaultSchema.input && innerSchema.noFormItem !== true) {
      pageManager.removeComponentInstance(innerSchema.id + 'formItem')
    }
  }
}

/**
 * 初始化组件
 */
async function initComponent() {
  // 如果存在默认值，则会在初始化之后赋值
  if (typeof innerSchema.componentProps?.defaultValue !== 'undefined') {

    const defaultValue = pageManager.isDesignMode.value ?
      innerSchema.componentProps?.defaultValue :
      formData[innerSchema.field!] ?? innerSchema.componentProps?.defaultValue

    handleUpdate(deepClone(defaultValue))
  }

  // 组件为slot类型时
  if (innerSchema.type === 'slot') {
    const slotName = innerSchema.slotName
    if (!slotName) return

    component.value = defineComponent({
      setup() {
        return () => renderSlot(slots, slotName, {
          componentSchema: innerSchema,
          model: formData
        })
      }
    })

    return
  }

  // 内置组件
  const cmp = pluginManager.getComponent(innerSchema.type)
  // 内部不存在组件
  if (!cmp) {
    console.error(`组件${innerSchema.type}未注册`)
    return
  }

  // 如果数据项为函数，则判定为懒加载组件
  if (typeof cmp === 'function') {
    const res = await cmp()
    component.value = res.default ?? res
  } else {
    // 否则为预加载组件
    component.value = cmp
  }

}

/**
 * 通过函数更新值
 * @param v value值
 */
function handleUpdate(v: any) {
  emit('update:modelValue', v)
  emit('change', v)
  if (innerSchema.field) {
    formData[innerSchema.field!] = v
  }
}

let oldData: string | null = null
// 需要监听值变化，重新渲染组件
watch(() => innerSchema, (newVal) => {
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

// 组件卸载时移除组件实例
onUnmounted(handleVnodeUnmounted)

</script>
