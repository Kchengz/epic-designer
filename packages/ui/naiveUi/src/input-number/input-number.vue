<script setup lang="ts">
import { NInputNumber } from 'naive-ui';

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
  <NInputNumber :placeholder="props.placeholder" />
</template>
