<script setup lang="ts">
import { Select } from 'ant-design-vue';

const props = withDefaults(
  defineProps<{
    placeholder?: string;
  }>(),
  {
    placeholder: '请输入',
  },
);
</script>

<template>
  <Select :placeholder="props.placeholder" />
</template>
