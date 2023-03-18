<template>
  <Input v-model="size" clearable type="number" min="0" @input="handleUpdate">
  <template #append>
    <Select v-model="unit" style="width: 68px" @change="handleUpdate" :options="unitArray"></Select>
  </template>
  </Input>
</template>
<script lang="ts" setup>
import { pluginManager } from '../../../index'
import { ref, watch } from 'vue'
const Input = pluginManager.getComponent('input')
const Select = pluginManager.getComponent('select')
const props = defineProps({
  modelValue: {
    type: String,
    default: null
  }
})
const emit = defineEmits(['update:modelValue'])
const size = ref<string | null>(null)
const unit = ref('px')
const unitArray = [
  { label: 'px', value: 'px' },
  { label: '%', value: '%' },
  { label: 'vw', value: 'vw' },
  { label: 'vh', value: 'vh' },
  { label: 'rem', value: 'rem' },
  { label: 'em', value: 'em' },
  { label: 'pt', value: 'pt' }
]
watch(() => props.modelValue, e => {
  const num = parseFloat(e)
  // 传入值为空或不正常时
  if (!num) {
    size.value = null
    return false
  }
  size.value = String(num)
  unit.value = e.substring(size.value.length)
  console.log(unit.value)
}, {
  immediate: true
})

function handleUpdate () {
  emit('update:modelValue', size.value ? size.value + unit.value : undefined)
}

</script>
