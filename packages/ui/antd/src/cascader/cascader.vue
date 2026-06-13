<script setup lang="ts">
import { Cascader } from 'ant-design-vue';

const props = withDefaults(
  defineProps<{
    placeholder?: string;
    showCheckedStrategy?: string;
  }>(),
  {
    placeholder: '请选择',
    showCheckedStrategy: 'SHOW_PARENT',
  },
);
</script>
<template>
  <Cascader
    :placeholder="props.placeholder"
    :show-checked-strategy="Cascader[props.showCheckedStrategy]"
  />
</template>
