<template>
  <div v-if="visible" class="form-main" style="height: 100%;">
    <ElForm ref="form" :model="attrs.model" v-bind="componentProps" style="height: 100%;">
      <slot name="edit-node">
        <slot name="node" :record="item" v-for="item in children"></slot>
      </slot>
    </ElForm>
  </div>
</template>
<script lang="ts" setup>
import { ref, computed, inject, useAttrs, onMounted } from 'vue'
import { ElForm } from 'element-plus'
const attrs = useAttrs()
const form = ref<any | undefined>()
const forms = inject('forms', {}) as any

const visible = ref(true)
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

// function onFinish (e: any) {
//   console.log(e)
// }

const children = computed(() => {
  return props.record.children ?? []
})

defineExpose({
  form
})
</script>
