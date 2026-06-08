<script setup lang="ts">
import { Select } from 'ant-design-vue';

const props = withDefaults(
  defineProps<{
    placeholder?: string;
  }>(),
  {
    placeholder: '请选择',
  },
);
</script>

<template>
  <Select :placeholder="props.placeholder" />
</template>
