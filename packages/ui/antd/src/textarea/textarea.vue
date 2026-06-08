<script setup lang="ts">
import { Textarea } from 'ant-design-vue';

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
  <Textarea :placeholder="props.placeholder" />
</template>
