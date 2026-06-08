<script setup lang="ts">
import { NSelect } from 'naive-ui';

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
  <NSelect :placeholder="props.placeholder" />
</template>
