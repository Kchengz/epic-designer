<template>
    <component v-if="component" :is="component" v-bind="{ ...componentProps,...props.componentProps, [`${componentProps?.bindModel}`]: value }">
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
  componentProps: {
    type: Object as any,
    default: () => {}
  },
  modelValue: {}
})
const emit = defineEmits(['update:modelValue'])
const value = computed({
  get () {
    return props.modelValue
  },
  set (e) {
    emit('update:modelValue', e)
  }
})

// 定义组件及组件props字段
const component = shallowRef<any>()
const componentProps = shallowRef<any>(null)

/**
 * 初始化组件
 */
async function initComponent () {
  // 如果存在默认值，则会在初始化之后赋值
  if (props.record.defaultValue) {
    handleUpdate(props.record.defaultValue)
  }

  // 内置组件
  const cmp = pluginManager.getComponent(props.record.type)
  // 内部不存在组件
  if (!cmp) {
    console.error(`组件${props.record.type}未注册`)
    return false
  }
  const bindModel = pluginManager.getComponentConfingByType(props.record.type)?.bindModel ?? 'modelValue'

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
    record: props.record,
    ...props.record.componentProps,
    bindModel,
    [`onUpdate:${bindModel}`]: handleUpdate
  }
}

function handleUpdate (e: any) {
  console.log(e)
  value.value = e
}

initComponent()

</script>
