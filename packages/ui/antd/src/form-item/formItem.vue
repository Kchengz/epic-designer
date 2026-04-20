<script lang="ts" setup>
import { computed, useAttrs } from 'vue';

import { FormItem } from 'ant-design-vue';

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
    help:
      props.checkPayload.message ??
      (props.checkPayload.result ? '校验通过' : '校验失败'),
    validateStatus: props.checkPayload.result ? 'success' : 'error',
  };
});
</script>
<template>
  <FormItem v-bind="attrs" :name="attrs.field">
    <slot></slot>
  </FormItem>
</template>
