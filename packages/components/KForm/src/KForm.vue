<template>
  <div class="form-main" style="height: 100%;">
    <Form ref="form" :model="attrs.model" v-bind="componentProps" style="height: 100%;" @finish="onFinish">
      <slot name="edit-node">
        <slot name="node" :record="item" v-for="item in children"></slot>
      </slot>
    </Form>
  </div>
</template>
<script lang="ts" setup>
import { pluginManager } from '../../../utils'
import { ref, computed, useAttrs } from 'vue'
const { component: Form } = pluginManager.getComponent('Form') || {}
const attrs = useAttrs()
const form = ref<any>(null)
const props = defineProps({
  record: {
    type: Object as any,
    require: true
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
    // recordProps.layout === 'horizontal' &&
    //   isShowLabel(record.options.showLabel)
    //     ? formConfig.labelLayout === 'flex'
    //       ? { style: `width:${formConfig.labelWidth}px` }
    //       : formConfig.labelCol
    //     : {}

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
