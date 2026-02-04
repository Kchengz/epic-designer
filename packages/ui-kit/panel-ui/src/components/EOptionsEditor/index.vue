<script lang="ts" setup>
import { provide, reactive } from 'vue';

import { pluginManager } from '@epic-designer/manager';
import { useVModel } from '@vueuse/core';

import EOptionItem from './optionItem.vue';

interface Option {
  children?: Option[];
  label: string;
  value: string;
}

const props = defineProps<{
  modelValue: Option[];
  tree?: boolean;
}>();
const emit = defineEmits(['update:modelValue']);
const Button = pluginManager.component.get('button');
const innerValue = useVModel(props, 'modelValue', emit);

provide('tree', props.tree);

/**
 *  添加选项
 */
function handleAdd() {
  const option: Option = reactive({
    label: '',
    value: '',
  });
  innerValue.value = [...innerValue.value, option];
}
</script>

<template>
  <div class="ep-options-editor rounded">
    <div
      v-show="!innerValue?.length"
      class="my-2 py-4 text-center text-gray-400"
    >
      暂无选项
    </div>
    <EOptionItem v-model="innerValue" />
    <Button @click="handleAdd"> 添加选项 </Button>
  </div>
</template>
<style scoped lang="less">
@import './index.less';
</style>
