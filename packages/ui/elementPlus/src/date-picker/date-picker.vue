<script setup lang="ts">
import { ElDatePicker } from 'element-plus';

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
  <ElDatePicker :placeholder="props.placeholder" />
</template>
