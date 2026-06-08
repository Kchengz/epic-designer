<script setup lang="ts">
import { NCascader } from 'naive-ui';

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
  <NCascader :placeholder="props.placeholder" />
</template>
