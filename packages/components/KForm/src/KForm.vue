<template>
  <div class="form-main" style="height: 100%;">
    <component :is="Form" ref="form" :model="attrs.model" v-bind="componentProps" style="height: 100%;" @finish="onFinish">
      <slot name="edit-node">
        <slot name="node" :record="item" v-for="item in children"></slot>
      </slot>
    </component>
  </div>
</template>
<script lang="ts" setup>
import { ref, computed, inject, useAttrs, onMounted } from 'vue'
// import { Form } from 'ant-design-vue'
import { pluginManager } from '../../../utils'
const { component: Form } = pluginManager.getComponent('Form') || {}
const attrs = useAttrs()
const form = ref<any>(null)
const forms = inject('forms', {}) as any

const props = defineProps({
  record: {
    type: Object as any,
    require: true
  }
})

// form组件需要特殊处理
onMounted(async () => {
  if (props.record.type === 'form' && forms.value) {
    const name = props.record.name ?? 'default'
    forms.value[name] = form
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
    ...recordProps,
    labelCol,
    wrapperCol

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
