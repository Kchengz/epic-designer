<template>
  <div class="">
    <div class="py-4 my-2 text-center text-gray-400 bg-white" v-show="!modelValue?.length">暂无选项</div>
    <KOptionsCol v-model="modelValue" />
    <Button @click="handleAdd">添加选项</Button>
  </div>
</template>

<script lang="ts" setup>
import KOptionsCol from './KOptionsCol.vue'
import { pluginManager } from '@k-designer/utils'
import { provide } from 'vue';
const Button = pluginManager.getComponent('button')
const modelValue = defineModel<Option[]>('modelValue')
const props = defineProps<{
  tree: boolean
}>()

interface Option {
  label: string,
  value: string,
  children?: Option[]
}


provide('tree', props.tree)

/**
 *  添加选项
 */
function handleAdd() {
  const option: Option = {
    label: "",
    value: ""
  }
  modelValue.value?.push(option)
}

</script>
