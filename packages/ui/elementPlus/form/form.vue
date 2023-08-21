<template>
  <div
    v-if="visible"
    class="form-main"
    style="height: 100%;"
  >
    <ElForm
      ref="form"
      :model="attrs.model"
      v-bind="componentProps"
      style="height: 100%;"
    >
      <slot name="edit-node">
        <slot
          v-for="item in children"
          name="node"
          :record="item"
        />
      </slot>
    </ElForm>
  </div>
</template>
<script lang="ts" setup>
import { ref, Ref,reactive, PropType,provide, computed, inject, useAttrs, onMounted } from 'vue'
import { ElForm } from 'element-plus'
import type { NodeItem,FormDataModel } from '@epic-designer/core/types/epic-designer'

interface FormInstance extends InstanceType<typeof ElForm> {
  getData?: () => FormDataModel
}


const attrs = useAttrs()
const form = ref<FormInstance | null>(null)
const forms = inject('forms', {}) as Ref<{ [name: string]: FormInstance }>
const visible = ref(true)
const formData = reactive<FormDataModel>({})
provide('formData', formData)

const props = defineProps({
  record: {
    type: Object as PropType<NodeItem>,
    require: true,
    default: () => ({})
  }
})

/**
 * 获取表单数据
 * @param formName 表单name
 */
 function getData (): FormDataModel {
  return formData
}

// form组件需要特殊处理
onMounted(async () => {
  if (props.record?.type === 'form' && forms.value && form.value) {
    const name = props.record.name ?? 'default' as string
    forms.value[name] = form.value
    form.value.getData = getData
    return false
  }
})

const componentProps = computed(() => {
  const recordProps = props.record!.componentProps
  let labelCol = recordProps.labelCol
  let wrapperCol = recordProps.wrapperCol
  if (recordProps.labelLayout === 'fixed') {
    labelCol = { style: `width:${recordProps.labelWidth}px` }
    wrapperCol = { style: 'width:auto;flex:1' }
  }
  return {
    ...recordProps,
    labelCol,
    wrapperCol

  }
})

const children = computed(() => {
  return props.record!.children ?? []
})

defineExpose({
  form,
  getData
})
</script>
