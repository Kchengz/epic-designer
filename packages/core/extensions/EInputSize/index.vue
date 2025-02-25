<script lang="ts" setup>
import { nextTick, ref, watch } from 'vue';

import { pluginManager } from '@epic-designer/utils';

const props = defineProps<{
  modelValue?: number | string;
}>();
const emit = defineEmits(['update:modelValue']);
const Input = pluginManager.getComponent('input');
const Select = pluginManager.getComponent('select');
const size = ref<null | string>(null);
const unit = ref('px');
const unitArray = [
  { label: 'px', value: 'px' },
  { label: '%', value: '%' },
  { label: 'vw', value: 'vw' },
  { label: 'vh', value: 'vh' },
  { label: 'rem', value: 'rem' },
  { label: 'em', value: 'em' },
  { label: 'pt', value: 'pt' },
];
watch(
  () => props.modelValue,
  (e) => {
    if (!e) return;
    // 默认传入数值时 单位默认为px
    if (typeof e === 'number') {
      size.value = String(e);
      unit.value = 'px';
      return;
    }
    const num = Number.parseFloat(e);
    // 传入值为空或不正常时
    if (Number.isNaN(num)) {
      size.value = null;
      return false;
    }
    const regex = /^(\d+(\.\d+)?)(px|%|vw|vh|rem|em|pt)$/;
    const match = e.trim().match(regex);
    size.value = match?.[1] ?? null;
    unit.value = match?.[3] ?? '';
  },
  {
    immediate: true,
  },
);

watch(
  () => unit.value + size.value,
  () => {
    handleUpdate();
  },
);

function handleUpdate() {
  nextTick(() =>
    emit('update:modelValue', size.value ? size.value + unit.value : undefined),
  );
}
</script>
<template>
  <Input
    v-model="size"
    v-model:value="size"
    class="epic-input-size"
    type="number"
    min="0"
    placeholder="请输入"
  >
    <template #suffix>
      <Select
        v-model:value="unit"
        v-model="unit"
        style="width: 68px"
        :options="unitArray"
      />
    </template>
  </Input>
</template>
