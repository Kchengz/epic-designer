<template>
  <div class="form-main" style="height: 100%;">
    <Form ref="form" :model="attrs.model" v-bind="componentProps" style="height: 100%;" @finish="onFinish">
      <slot name="edit-node">
        <slot v-for="item in children" name="node" :record="item" />
      </slot>
    </Form>
  </div>
</template>
<script lang="ts" setup>
import { ref, type Ref, type PropType, computed, inject, useAttrs, onMounted } from 'vue'
import { Form } from 'ant-design-vue'
import type { NodeItem } from '@epic-designer/core/types/epic-designer'


interface KForm extends InstanceType<typeof Form> {
  [attr: string]: any
}

const attrs = useAttrs()
const form = ref<KForm | null>(null)
const forms = inject('forms', {}) as Ref<{ [name: string]: KForm }>

const props = defineProps({
  record: {
    type: Object as PropType<NodeItem>,
    require: true,
    default: () => ({})
  }
})

// form组件需要特殊处理
onMounted(async () => {
  if (props.record!.type === 'form' && forms.value) {
    const name = props.record!.name ?? 'default' as string
    form.value!.validate = form.value!.validateFields
    forms.value[name] = form.value!
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

function onFinish(e: any) {
  console.log(e)
}

const children = computed(() => {
  return props.record!.children ?? []
})

defineExpose({
  form
})
</script>
