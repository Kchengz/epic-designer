<script setup lang="ts">
import { ElInput } from 'element-plus';

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
  <ElInput :placeholder="props.placeholder" type="textarea" />
</template>
