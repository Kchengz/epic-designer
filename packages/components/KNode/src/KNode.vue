<template>
  <FormItem
    v-if="props.record.noFormItem !== true && getComponentConfing?.defaultSchema.input && component && show"
    v-bind="getFormItemProps"
  >
    <component
      :is="component"
      ref="componentInstance"
      v-bind="{ ...componentProps, ...props.record.componentProps, ...dataSource, [componentProps.bindModel]: formData[props.record.field!] }"
    >
      <!-- 递归组件 start -->
      <template #node="data">
        <KNode v-bind="data" />
      </template>
      <!-- 递归组件 end -->
      <!-- 递归组件 start -->
      <template #edit-node>
        <slot name="edit-node" />
      </template>
      <!-- 递归组件 end -->
    </component>
  </FormItem>

  <!-- 无需FormItem start -->
  <component
    :is="component"
    v-else-if="component && show"
    ref="componentInstance"
    :model="formData"
    v-bind="{ ...componentProps, ...props.record.componentProps, ...dataSource, [componentProps.bindModel]: formData[props.record.field!] || modelValue }"
  >
    <!-- 递归组件 start -->
    <template #node="data">
      <KNode v-bind="data" />
    </template>
    <!-- 递归组件 end -->
    <!-- 递归组件 start -->
    <template #edit-node>
      <slot name="edit-node" />
    </template>
    <!-- 递归组件 end -->
  </component>
  <!-- 无需FormItem end -->
</template>
<script lang="ts" setup>
import { shallowRef, ref, inject, computed, reactive, PropType, Slots, watch, h } from 'vue'
import { pluginManager, capitalizeFirstLetter, PageManager } from '../../../utils/index'
import { FormDataModel, NodeItem } from '../../../types/kDesigner'

const formData = inject('formData', {}) as FormDataModel
const slots = inject('slots', {}) as Slots
const pageManager = inject('pageManager', {}) as PageManager

const emit = defineEmits(['update:modelValue', 'change'])
const FormItem = pluginManager.getComponent('form-item')
const componentInstance = ref(null)

const props = defineProps({
  record: {
    type: Object as PropType<NodeItem>,
    required: true,
    default: () => ({})
  },
  modelValue: {
    type: [Object, Array, String, Number, Boolean] as PropType<any>,
    default: undefined
  }
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

watch(() => componentInstance.value, (instance: any) => {
  props.record.id && pageManager.addComponentInstance(props.record.id, instance)
})

// const { record } = props

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
    rule: rules
  }
})

// 获取组件原配置
const getComponentConfing = computed(() => {
  return pluginManager.getComponentConfingByType(props.record.type) ?? null
})

/**
 * 初始化组件
 */
async function initComponent () {
  // 如果存在默认值，则会在初始化之后赋值
  if (props.record.componentProps?.defaultValue) {
    handleUpdate(props.record.componentProps?.defaultValue)
  }

  // 数据处理
  if (props.record.dataSource?.api) {
    fetchData(props.record.dataSource?.api, props.record)
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
    onEvent[`on${capitalizeFirstLetter(item)}`] = () => pageManager.doActions(props.record.on[item])
  })

  // 获取组件props数据
  componentProps.value = {
    record: props.record,
    // is: component,
    bindModel,
    [`onUpdate:${bindModel}`]: handleUpdate,
    ...onEvent
  }
}

// dataSource
function fetchData (api: string | Function, record: NodeItem) {
  // const data = reactive({})
  const dataField = record.dataSource.dataField ?? 'options'
  async function asyncFetchData () {
    if (typeof api === 'function') {
      dataSource[dataField] = await api()
    }
  }

  asyncFetchData()
  // return data
}

/**
 * 通过函数更新值
 * @param v value值
 */
function handleUpdate (v: any) {
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
