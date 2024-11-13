<template>
  <!-- 如果有 FormItem，则包裹 slot，否则直接渲染 slot -->
  <FormItem
    ref="formItemRef"
    @vue:mounted="notifyFormItemMounted "
    v-if="props.hasFormItem"
    v-bind="props.formItemProps"
  >
    <slot></slot>
  </FormItem>
  <!-- 无FormItem start -->
  <slot v-else></slot>
  <!-- 无FormItem end -->
</template>

<script lang="ts" setup>
import { pluginManager } from "@epic-designer/utils";
import { ComponentSchema } from "../../../types/epic-designer";
import { ref } from "vue";

defineOptions({
  inheritAttrs: false,
});
// 获取插件管理器中的表单项组件
const FormItem = pluginManager.getComponent("form-item");

const props = defineProps<{
  hasFormItem?: boolean;
  formItemProps: ComponentSchema;
}>();

const emit = defineEmits(["updateFormItemRef"]);

const formItemRef = ref<any>();

/**
 * 当 FormItem 组件挂载时，向父组件发送 formItemRef
 */
const notifyFormItemMounted  = () => {
  emit("updateFormItemRef", formItemRef.value);
};
</script>
