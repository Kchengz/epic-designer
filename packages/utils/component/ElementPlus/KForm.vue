<template>
  <div v-if="visible" class="form-main" style="height: 100%;">
    <component :is="ElForm" ref="form" :model="attrs.model" v-bind="componentProps" style="height: 100%;">
      <slot name="edit-node">
        <slot name="node" :record="item" v-for="item in children"></slot>
      </slot>
    </component>
  </div>
</template>
<script lang="ts" setup>
import { ref, computed, reactive, inject, useAttrs, onMounted, watch, nextTick } from 'vue'
import ContextStore from '@/stores/modules/context'
// import { Form } from 'ant-design-vue'
// import { ElForm } from 'element-plus'
// import { pluginManager } from '../../../utils'
// import { pluginManager } from '@/kpage/index'
// const { component: Form } = pluginManager.getComponent('Form') || {}
import { ElForm, FormInstance } from 'element-plus'

const attrs = useAttrs()
const form = ref<FormInstance | undefined>()
const forms = inject('forms', {}) as any

const visible = ref(true)

const props = defineProps({
  record: {
    type: Object as any,
    require: true
  }
})

const formId = inject('formId', ref(0))
console.log('pageId:' + formId.value)

const reset = async () => {
  console.log('重置表单')
  // const context = ContextStore()
  // context.CurrentRow = {}
  // form.value!.resetFields()

  // setTimeout(() =>{
  Object.keys(attrs.model).forEach(key => {
    attrs.model[key] = ''
  })
  // },500)
}
const getData = () => {
  return attrs.model
}
const setData = async (data: any) => {
  // validateFields
  console.log('设置表单数据:' + JSON.stringify(data))
  // setTimeout( () => {
  Object.keys(data).forEach(key => {
    attrs.model[key] = data[key]
  })
  // }, 500)
  // attrs.model =  data // Object.assign({}, {...data} )
}
const updateData = async (data: any) => { // 似乎和setData没区别
  // validateFields
  attrs.model = Object.assign({}, { ...data })
}
// form组件需要特殊处理
onMounted(async () => {
  if (props.record.type === 'form' && forms.value) {
    const name = props.record.name ?? 'default'
    forms.value[name] = form

    if (formId.value > 0) { // 说明是build页面，以后可以改为pageId
      const context = ContextStore()
      const compId: string = props.record.id //   `page${formId.value}_${name}`

      console.log(`存入store中的组件compId: ${compId}`)
      // context['widgets'][ compId ] = attrs.model //{"subject":"aaa", resetFields:form.value!.resetFields, form: form.value!}

      context.widgets[compId] = { form, getData, setData, updateData, reset }
    }
    return false
  }
})

const componentProps = computed(() => {
  const recordProps = props.record.componentProps
  let labelCol = recordProps.labelCol
  let wrapperCol = recordProps.wrapperCol
  if (recordProps.labelLayout === 'fixed') {
    labelCol = { style: `width:${recordProps.labelWidth}px` }
    wrapperCol = { style: 'width:auto;flex:1' }
  }
  return {
    ...recordProps
    // labelCol,
    // wrapperCol

  }
})

function onFinish (e: any) {
  console.log(e)
}
// const children = props.record.children ?? []

const children = computed(() => {
  return props.record.children ?? []
})

defineExpose({
  form
})
</script>
