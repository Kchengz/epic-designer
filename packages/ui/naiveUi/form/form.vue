<template>
  <div
    v-if="visible"
    class="form-main"
    style="height: 100%"
  >
    <NForm
      ref="form"
      :model="attrs.model"
      v-bind="componentProps"
      style="height: 100%"
    >
      <slot name="edit-node">
        <slot
          v-for="item in children"
          name="node"
          :record="item"
        />
      </slot>
    </NForm>
  </div>
</template>
<script lang="ts" setup>
import type { Ref, PropType } from 'vue'
import { ref, computed, inject, useAttrs, onMounted } from 'vue'
import { NForm } from 'naive-ui/lib/form'
import { NodeItem } from '@epic-designer/core/types/epic-designer'
const attrs = useAttrs()
const form = ref<InstanceType<typeof NForm> | null>(null)
const forms = inject('forms', {}) as Ref<{ [name: string]: InstanceType<typeof NForm> }>
const visible = ref(true)
const props = defineProps({
  record: {
    type: Object as PropType<NodeItem>,
    require: true,
    default: () => ({})
  }
})

// form组件需要特殊处理
onMounted(async (): Promise<void> => {
  if (props.record!.type === 'form' && forms.value) {
    const name = props.record!.name ?? ('default' as string)
    forms.value[name] = form.value!
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
  form
})
</script>
