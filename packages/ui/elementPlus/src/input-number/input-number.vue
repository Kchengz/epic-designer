<script setup lang="ts">
import { ElInputNumber } from 'element-plus';

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
  <ElInputNumber :placeholder="props.placeholder" />
</template>
