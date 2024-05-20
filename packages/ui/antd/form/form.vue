<template>
  <div class="form-main" style="height: 100%;">
    <Form ref="form" :model="formData" v-bind="componentProps" style="height: 100%;" @finish="onFinish">
      <slot name="edit-node">
        <slot v-for="item in children" name="node" :componentSchema="item" />
      </slot>
    </Form>
  </div>
</template>
<script lang="ts" setup>
import { ref, type Ref, type PropType, reactive, provide, computed, inject, onMounted } from 'vue'
import { Form } from 'ant-design-vue'
import type { ComponentSchema, FormDataModel } from '@epic-designer/core/types/epic-designer'

interface FormInstance extends InstanceType<typeof Form> {
  getData?: () => FormDataModel
  setData?: (FormDataModel) => void
  validateFields: () => void
  validate: () => void
}
const props = defineProps({
  componentSchema: {
    type: Object as PropType<ComponentSchema>,
    require: true,
    default: () => ({})
  }
})

const form = ref<FormInstance | null>(null)
const forms = inject('forms', {}) as Ref<{ [name: string]: any }>
const formData = reactive<FormDataModel>({})
provide('formData', formData)


/**
 * 获取表单数据
 * @param formName 表单name
 */
function getData(): FormDataModel {
  return formData
}

/**
 * 校验表单数据
 * @param data
 */
function validate() {
  return form.value?.validateFields()
}

/**
 * 设置表单数据
 * @param data
 */
function setData(data: FormDataModel) {
  Object.assign(formData, data)
}

// form组件需要特殊处理
onMounted(async () => {
  if (props.componentSchema?.type === 'form' && forms.value && form.value) {
    const name = props.componentSchema?.componentProps?.name ??
      props.componentSchema?.name ?? 'default' as string

    form.value.validate = validate
    forms.value[name] = form.value
    form.value.getData = getData
    form.value.setData = setData
    return false
  }
})

const componentProps = computed(() => {
  const recordProps = props.componentSchema!.componentProps
  let labelCol = recordProps.labelCol
  let wrapperCol = recordProps.wrapperCol
  if (recordProps.labelLayout === 'fixed') {
    labelCol = { flex: `${typeof recordProps.labelWidth === 'number' ? recordProps.labelWidth + 'px' : recordProps.labelWidth}` }
    wrapperCol = { flex: 1 }
  }
  return {
    ...recordProps,
    labelCol,
    wrapperCol

  }
})

function onFinish(e: any) {
  console.log(e)
}

const children = computed(() => {
  return props.componentSchema!.children ?? []
})

defineExpose({
  form,
  getData,
  setData,
  validate
})
</script>
