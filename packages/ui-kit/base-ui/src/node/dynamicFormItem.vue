<script lang="ts" setup>
import type { ComponentSchema } from '@epic-designer/types';
import type { PageManager } from '@epic-designer/utils';

import type { ComponentPublicInstance } from 'vue';

import { inject } from 'vue';

import { pluginManager } from '@epic-designer/utils';

defineOptions({
  inheritAttrs: false,
});
const props = defineProps<{
  formItemProps: ComponentSchema;
  hasFormItem?: boolean;
}>();

// 接收页面管理对象
const pageManager = inject('pageManager', {}) as PageManager;
// 获取插件管理器中的表单项组件
const FormItem = pluginManager.getComponent('form-item');

/**
 * 当 FormItem 组件挂载时，向父组件发送 formItemRef
 */
const notifyFormItemMounted = (componentInstance: ComponentPublicInstance) => {
  pageManager.addComponentInstance(
    `${props.formItemProps.id}formItem`,
    componentInstance,
  );
};
</script>

<template>
  <!-- 如果有 FormItem，则包裹 slot，否则直接渲染 slot -->
  <FormItem
    v-if="props.hasFormItem"
    v-bind="props.formItemProps"
    @vue:mounted="notifyFormItemMounted"
  >
    <slot></slot>
  </FormItem>
  <!-- 无FormItem start -->
  <slot v-else></slot>
  <!-- 无FormItem end -->
</template>
