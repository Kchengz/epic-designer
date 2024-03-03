<template>
  <Suspense @resolve="handleReady">
    <template #default>
      <div class="epic-builder-main">
        <ENode v-for="item, index in pageSchemaReactive.schemas" :key="index" :componentSchema="item" />
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
import { reactive, provide, ref, watch, useSlots, nextTick, getCurrentInstance, type ComponentInternalInstance } from 'vue'
import { PageSchema, FormDataModel } from '../../../types/epic-designer'
import { loadAsyncComponent, deepCompareAndModify,deepClone, usePageManager } from '@epic-designer/utils'
const EAsyncLoader = loadAsyncComponent(() => import('../../asyncLoader/index.vue'))

const pageManager = usePageManager()
const emit = defineEmits<{
  ready: any
}>()
const slots = useSlots()
const forms = ref<any>({})
const ready = ref<boolean>(false)
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

provide('slots', slots)
provide('pageManager', pageManager)
provide('forms', forms)
provide('pageSchema', pageSchemaReactive)

/**
 * 跳过验证直接获取表单数据
 * @param formName 表单name
 */
function getData(formName = 'default'): Promise<FormDataModel | boolean> {
  return new Promise(async (resolve, reject) => {

    // 判断表单是否已经初始化
    if (!ready.value) {
      // 监听表单初始化状态
      const unwatch = watch(ready, () => {
        // 注销监听
        unwatch()
        resolve(getData(formName))
      })
      return
    }

    const form = forms.value?.[formName]
    // 通过表单查询不到表单实例
    if (!form) {
      // console.error(`表单 [name=${formName}] 不存在`)
      reject(`表单 [name=${formName}] 不存在`)
      return false
    }

    const formData = deepClone(await form.getData())
    resolve(formData)
  })

}

/**
 * 验证并获取数据
 * @param formName 表单name
 */
function validate(formName = 'default'): Promise<FormDataModel | boolean> {
  return new Promise(async (resolve, reject) => {
    // 判断表单是否已经初始化
    if (!ready.value) {
      // 监听表单初始化状态
      const unwatch = watch(ready, () => {
        // 注销监听
        unwatch()
        resolve(getData(formName))
      })
      return
    }

    const form = forms.value?.[formName]
    // 通过表单查询不到表单实例
    if (!form) {
      // console.error(`表单 [name=${formName}] 不存在`)
      reject(`表单 [name=${formName}] 不存在`)
      return false
    }
    try {
      await form.validate()
      const formData = await form.getData()
      resolve(formData)
    } catch (error) {
      reject(error)
    }
  })

}

/**
 * 设置表单数据
 * @param data
 */
function setData(data: FormDataModel, formName = 'default') {
  // 判断表单是否已经初始化
  if (!ready.value) {
    // 监听表单初始化状态
    const unwatch = watch(ready, () => {
      // 注销监听
      unwatch()
      setData(data, formName)

    })
    return
  }


  const form = forms.value?.[formName]
  // 通过表单查询不到表单实例
  if (!form) {
    console.error(`表单 [name=${formName}] 不存在`)
    return false
  }

  form.setData(data)
}
const { proxy } = getCurrentInstance() as ComponentInternalInstance
/**
 * 组件（包含异步组件）加载完成后
 */
function handleReady() {
  // 等待DOM更新循环结束后
  nextTick(() => {
    ready.value = true

    emit('ready', pageManager)

    // 注入builder对象
    proxy && pageManager.addComponentInstance('builder', proxy)
  })
}

defineExpose({
  ready,
  getData,
  setData,
  validate
})
</script>
