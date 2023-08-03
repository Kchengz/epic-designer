<template>
  <div>
    <ElColorPicker @change="handleChange" v-bind="attrs" />
  </div>
</template>
<script lang="ts" setup>
import { useAttrs } from 'vue'
import { ElColorPicker } from 'element-plus'
const attrs = useAttrs()
const emit = defineEmits<{
  change: [e: string]
}>()

function handleChange(value: string) {
  emit('change', value)
}

</script>
