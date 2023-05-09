<template>
  <NFormItem ref="form" v-bind="attrs" :path="attrs.field">
    <slot></slot>
  </NFormItem>
</template>
<script lang="ts" setup>
import { ref, useAttrs } from 'vue'
import { NFormItem } from 'naive-ui/lib/form'
const attrs = useAttrs() as any
const form = ref<any>(null)
</script>
