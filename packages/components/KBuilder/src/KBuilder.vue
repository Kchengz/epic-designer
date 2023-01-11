<template>
    <!-- <Form ref="form" :model="formData" v-bind="getFormBindValues"> -->
    <div>
        <KNode ref="Knode" v-for="item, index in props.schemas" :key="index" :record="item">
        </KNode>
    </div>
    <!-- </Form> -->
</template>
<script lang="ts" setup>
import type { PropType } from 'vue'
import KNode from '../../KNode/'
import { reactive, provide, ref, useSlots } from 'vue'
import { NodeItem, FormDataModel } from '../../../types/kDesigner'

const formData = reactive<FormDataModel>({})
const slots = useSlots()
const forms = ref<any>({})
// const form = ref<any>(null)

provide('formData', formData)
provide('slots', slots)
console.log(slots)
provide('forms', forms)

const props = defineProps({
  schemas: {
    type: Array as PropType<NodeItem[]>
  }
})

/**
 * 获取表单数据
 * @param formName 表单name
 */
function getData (formName = 'default'): Promise<FormDataModel> {
  // validateFields
  console.log(forms.value, 45454)
  console.log(forms.value?.[formName])
  return forms.value?.[formName]?.validateFields()
}

/**
 * 设置表单数据
 * @param data
 */
function setData (data: FormDataModel) {
  // validateFields
  Object.assign(formData, data)
}

// function getSlotName (slot?: string): string {
//   return slot || ''
// }

defineExpose({
  getData,
  setData
})
</script>
