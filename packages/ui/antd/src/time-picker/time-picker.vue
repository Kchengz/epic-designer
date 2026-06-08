<script setup lang="ts">
import { TimePicker } from 'ant-design-vue';

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
  <TimePicker :placeholder="props.placeholder" />
</template>
