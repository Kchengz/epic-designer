<script lang="ts" setup>
import { computed, ref, useAttrs } from 'vue';

import { NFormItem } from 'naive-ui/lib/form';

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
    feedback:
      props.checkPayload.message ??
      (props.checkPayload.result ? '校验通过' : '校验失败'),
    showFeedback: true,
    validationStatus: props.checkPayload.result ? 'success' : 'error',
  };
});
const form = ref<any>(null);
</script>
<template>
  <NFormItem ref="form" v-bind="attrs" :path="attrs.field">
    <slot></slot>
  </NFormItem>
</template>
