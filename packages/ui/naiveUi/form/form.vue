<template>
  <div v-if="visible" class="form-main" style="height: 100%">
    <NForm ref="form" :model="formData" v-bind="componentProps" style="height: 100%">
      <slot name="edit-node">
        <slot v-for="item in children" name="node" :record="item" />
      </slot>
    </NForm>
  </div>
</template>
<script lang="ts" setup>
import type { Ref, PropType } from 'vue'
import { ref, computed, inject, reactive, provide, onMounted } from 'vue'
import { NForm } from 'naive-ui/lib/form'
import type { NodeItem, FormDataModel } from '@epic-designer/core/types/epic-designer'

interface FormInstance extends InstanceType<typeof NForm> {
  getData?: () => FormDataModel
  setData?: (FormDataModel) => void
}

const props = defineProps({
  record: {
    type: Object as PropType<NodeItem>,
    require: true,
    default: () => ({})
  }
})
const form = ref<FormInstance | null>(null)
const forms = inject('forms', {}) as Ref<{ [name: string]: FormInstance }>
const visible = ref(true)
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
 * 设置表单数据
 * @param data
 */
 function setData (data: FormDataModel) {
  Object.assign(formData, data)
}

/**
 * 校验表单数据
 * @param data
 */
 function validate() {
  return form.value?.validate()
}

// form组件需要特殊处理
onMounted(async (): Promise<void> => {
  if (props.record?.type === 'form' && forms.value && form.value) {
    const name = props.record?.componentProps?.name ??
    props.record?.name ?? 'default' as string

    forms.value[name] = form.value as any
    form.value.getData = getData
    form.value.setData = setData
  }
})

const componentProps = computed(() => {
  const recordProps = props.record!.componentProps
  return recordProps
})

const children = computed(() => {
  return props.record!.children ?? []
})

defineExpose({
  form,
  getData,
  setData,
  validate
})
</script>
