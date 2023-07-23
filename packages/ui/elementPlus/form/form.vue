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
import { ref, Ref, PropType, computed, inject, useAttrs, onMounted } from 'vue'
import { ElForm } from 'element-plus'
import type { NodeItem } from '@epic-designer/core/types/epic-designer'
const attrs = useAttrs()
const form = ref<InstanceType<typeof ElForm> | null>(null)
const forms = inject('forms', {}) as Ref<{ [name: string]: InstanceType<typeof ElForm> }>
const visible = ref(true)
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

const children = computed(() => {
  return props.record!.children ?? []
})

defineExpose({
  form
})
</script>
