<script lang="ts" setup>
import { useAttrs } from 'vue';

import { FormItem } from 'ant-design-vue';

const attrs = useAttrs() as any;
</script>
<template>
  <FormItem v-bind="attrs" :name="attrs.field">
    <slot></slot>
  </FormItem>
</template>
