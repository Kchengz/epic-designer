<template>
  <Suspense @resolve="handleReady">
    <template #default>
      <div class="epic-builder-main">
        <ENode
          v-for="item, index in pageSchemaReactive.schemas"
          :key="index"
          :record="item"
        />
      </div>
    </template>
    <template #fallback>
      <div class="loading-box">
        <EAsyncLoader />
      </div>
    </template>
  </Suspense>
</template>

<script lang="ts" setup>
import ENode from '../../node'
import { reactive, provide, ref, watch, useSlots, nextTick } from 'vue'
import { PageSchema, FormDataModel } from '../../../types/epic-designer'
import { loadAsyncComponent, deepCompareAndModify, usePageManager } from '@epic-designer/utils'
const EAsyncLoader = loadAsyncComponent(() => import('../../asyncLoader/index.vue'))

const pageManager = usePageManager()
const emit = defineEmits(['ready'])
const formData = reactive<FormDataModel>({})
const slots = useSlots()
const forms = ref<any>({})
const props = defineProps<{
  pageSchema: PageSchema
}>()

const pageSchemaReactive = reactive<PageSchema>({
  schemas: []
})

watch(() => props.pageSchema, e => {
  deepCompareAndModify(pageSchemaReactive, e)
}, {
  immediate: true,
  deep: true
})

watch(() => pageSchemaReactive.script, e => {
  if (e && e !== '') {
    pageManager.setMethods(e)
  }
}, {
  immediate: true
})

provide('formData', formData)
provide('slots', slots)
provide('pageManager', pageManager)
provide('forms', forms)
provide('pageSchema', pageSchemaReactive)

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
