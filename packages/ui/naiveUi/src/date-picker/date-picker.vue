<script setup lang="ts">
import { NDatePicker } from 'naive-ui';

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
  <NDatePicker :placeholder="props.placeholder" />
</template>
