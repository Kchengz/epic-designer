<template>
    <Form ref="form" :model="attrs.model" v-bind="componentProps" style="height: 100%;" @finish="onFinish">
        <slot name="edit-node">
            <slot name="node" :record="item" v-for="item in children"></slot>
        </slot>
        <!-- <Button type="primary" html-type="submit">Submit</Button> -->
    </Form>
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
  return {
    ...recordProps,
    labelCol: { style: `width:${100}px` }
    // recordProps.layout === 'horizontal' &&
    //   isShowLabel(record.options.showLabel)
    //     ? formConfig.labelLayout === 'flex'
    //       ? { style: `width:${formConfig.labelWidth}px` }
    //       : formConfig.labelCol
    //     : {}

  }
})
// :label-col="
//       formConfig.layout === 'horizontal' &&
//       isShowLabel(record.options.showLabel)
//         ? formConfig.labelLayout === 'flex'
//           ? { style: `width:${formConfig.labelWidth}px` }
//           : formConfig.labelCol
//         : {}
//     "

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
