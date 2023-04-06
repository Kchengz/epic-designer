<template>
  <Suspense @resolve="handleReady">
    <template #default>
      <div>
        <KNode ref="Knode" v-for="item, index in props.schemas" :key="index" :record="item">
        </KNode>
      </div>
    </template>
    <template #fallback>
      <div class="loading-box">
        <KAsyncLoading />
      </div>
    </template>
  </Suspense>
</template>
<script lang="ts" setup>
import type { PropType } from 'vue'
import KNode from '../../KNode/'
import { reactive, provide, ref, watch, useSlots, nextTick } from 'vue'
import { NodeItem, FormDataModel } from '../../../types/kDesigner'
import { loadAsyncComponent, usePageManager } from '../../../utils/index'
const KAsyncLoading = loadAsyncComponent(() => import('../../KAsyncLoading/KAsyncLoading.vue'))
const pageManager = usePageManager()
const emit = defineEmits(['ready'])
const formData = reactive<FormDataModel>({})
const slots = useSlots()
const forms = ref<any>({})
// const form = ref<any>(null)

provide('formData', formData)
provide('slots', slots)
provide('pageManager', pageManager)
provide('forms', forms)

const props = defineProps({
  schemas: {
    type: Array as PropType<NodeItem[]>
  },
  script: {
    type: String,
    default: ''
  }
})

watch(() => props.script, e => {
  pageManager.setMethods(e)
}, {
  immediate: true
})
/**
 * 获取表单数据
 * @param formName 表单name
 */
async function getData (formName = 'default'): Promise<FormDataModel | boolean> {
  // validateFields
  // console.log(forms.value, 45454)
  const form = forms.value?.[formName]
  // 不存在改表单时
  if (!form) {
    console.error(`表单 [name=${formName}] 不存在`)
    return false
  }
  await form?.validateFields()
  return formData
}

/**
 * 验证表单数据
 * @param formName 表单name
 */
async function validateFields (formName = 'default'): Promise<FormDataModel | boolean> {
  // validateFields
  // console.log(forms.value, 45454)
  // console.log(forms.value?.[formName])
  const form = forms.value?.[formName]
  // 不存在改表单时
  if (!form) {
    console.error(`表单 [name=${formName}] 不存在`)
    return false
  }
  return form?.validateFields()
}

/**
 * 设置表单数据
 * @param data
 */
function setData (data: FormDataModel) {
  // validateFields
  Object.assign(formData, data)
}

/**
 * 组件（包含异步组件）加载完成后
 */
function handleReady () {
  // 等待DOM更新循环结束后
  nextTick(() => {
    emit('ready', { pageManager })
  })
}

defineExpose({
  getData,
  setData,
  validateFields
})
</script>
