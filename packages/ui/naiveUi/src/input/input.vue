<script setup lang="ts">
import { NInput } from 'naive-ui';

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
  <NInput :placeholder="props.placeholder" />
</template>
