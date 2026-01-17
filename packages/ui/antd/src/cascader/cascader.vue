<script setup lang="ts">
import { computed, useAttrs } from 'vue';

import { Cascader } from 'ant-design-vue';

const emits = defineEmits<{
  'update:modelValue': any;
}>();
const attrs = useAttrs();
const getProps = computed(() => ({
  ...attrs,
  'onUpdate:value': handleUpdate,
  showCheckedStrategy:
    Cascader[(attrs.showCheckedStrategy as string) ?? 'SHOW_PARENT'],
  value: attrs.modelValue,
}));

function handleUpdate(e = null): void {
  emits('update:modelValue', e);
}
</script>
<template>
  <Cascader v-bind="getProps" />
</template>
