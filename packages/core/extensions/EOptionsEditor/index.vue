<template>
  <div class="">
    <div class="py-4 my-2 text-center text-gray-400 bg-white" v-show="!modelValueComputed?.length">暂无选项</div>
    <KOptionsCol v-model="modelValueComputed" />
    <Button @click="handleAdd">添加选项</Button>
  </div>
</template>

<script lang="ts" setup>
import KOptionsCol from './optionsCol.vue'
import { pluginManager } from '@epic-designer/utils'
import { provide, computed } from 'vue';
const Button = pluginManager.getComponent('button')
const props = defineProps<{
  tree: boolean,
  modelValue: Option[],
}>()

const emit = defineEmits(['update:modelValue'])
const modelValueComputed = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})

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
  modelValueComputed.value?.push(option)
}

</script>
