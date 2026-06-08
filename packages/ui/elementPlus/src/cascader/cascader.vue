<script setup lang="ts">
import { ElCascader } from 'element-plus';

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
  <ElCascader :placeholder="props.placeholder" />
</template>
