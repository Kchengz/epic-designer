<script lang="ts" setup>
import type { ComponentSchema, EpNodeInstance } from '@epic-designer/types';

import type { VNode } from 'vue';

import { usePageManager } from '@epic-designer/hooks';
import { pluginManager } from '@epic-designer/manager';

type FormItemCheckPayload = {
  message?: string;
  result?: boolean;
};

defineOptions({
  inheritAttrs: false,
});
const props = defineProps<{
  checkPayload?: FormItemCheckPayload | null;
  formItemProps: ComponentSchema;
  hasFormItem?: boolean;
}>();

// 接收页面管理对象
const pageManager = usePageManager();
// 获取插件管理器中的表单项组件
const FormItem = pluginManager.component.get('form-item');

/**
 * 当 FormItem 组件挂载时，向父组件发送 formItemRef
 */
const addFormItemInstance = (vNode: VNode) => {
  if (vNode.component) {
    pageManager.addComponentInstance(
      `${props.formItemProps.id}_formItem`,
      vNode.component as EpNodeInstance,
    );
  }
};
</script>

<template>
  <!-- 如果有 FormItem，则包裹 slot，否则直接渲染 slot -->
  <FormItem
    v-if="props.hasFormItem"
    :check-payload="props.checkPayload"
    v-bind="props.formItemProps"
    :class="{ 'ep-hidden': props.formItemProps.props?.hidden }"
    @vue:mounted="addFormItemInstance"
  >
    <slot></slot>
  </FormItem>
  <!-- 无FormItem start -->
  <slot v-else></slot>
  <!-- 无FormItem end -->
</template>
