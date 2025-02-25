<script lang="ts" setup>
import { ref, useAttrs } from 'vue';

import { FormItem } from 'ant-design-vue';

const attrs = useAttrs() as any;
const form = ref<any>(null);
</script>
<template>
  <FormItem ref="form" v-bind="attrs" :name="attrs.field">
    <slot></slot>
  </FormItem>
</template>
