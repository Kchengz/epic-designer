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
 * 跳过验证直接获取表单数据
 * @param formName 表单name
 */
async function getData (formName = 'default'): Promise<FormDataModel | boolean> {
  const form = forms.value?.[formName]
  // 通过表单查询不到表单实例
  if (!form) {
    console.error(`表单 [name=${formName}] 不存在`)
    return false
  }

  return formData
}

/**
 * 验证并获取数据
 * @param formName 表单name
 */
async function validate (formName = 'default'): Promise<FormDataModel | boolean> {
  const form = forms.value?.[formName]
  // 通过表单查询不到表单实例
  if (!form) {
    console.error(`表单 [name=${formName}] 不存在`)
    return false
  }
  await form?.validate()
  return formData
}

/**
 * 设置表单数据
 * @param data
 */
function setData (data: FormDataModel) {
  // validate
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
  validate
})
</script>
