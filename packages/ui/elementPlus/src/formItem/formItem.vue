<script lang="ts" setup>
import { computed, ref, useAttrs } from 'vue';

import { ElFormItem } from 'element-plus';

type FormItemCheckPayload = {
  message?: string;
  result?: boolean;
};

const props = defineProps<{
  checkPayload?: FormItemCheckPayload | null;
}>();

const rawAttrs = useAttrs();
const attrs = computed<any>(() => {
  if (!props.checkPayload) {
    return rawAttrs;
  }

  return {
    ...rawAttrs,
    error: props.checkPayload.result
      ? ''
      : (props.checkPayload.message ?? '校验失败'),
    validateStatus: props.checkPayload.result ? 'success' : 'error',
  };
});
const form = ref<any>(null);
</script>
<template>
  <ElFormItem ref="form" v-bind="attrs" :prop="attrs.field">
    <slot></slot>
  </ElFormItem>
</template>
