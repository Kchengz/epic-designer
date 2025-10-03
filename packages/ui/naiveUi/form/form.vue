<script lang="ts" setup>
import type { PageManager } from '@epic-designer/manager';
import type {
  ComponentSchema,
  DesignerProps,
  FormDataModel,
} from '@epic-designer/types';
import type { FormInst } from 'naive-ui';

import type { PropType, Ref } from 'vue';

import { computed, inject, onMounted, provide, ref } from 'vue';

import { NForm } from 'naive-ui/lib/form';

interface FormInstance extends InstanceType<typeof NForm> {
  clearValidate?: () => void;
  getData?: () => FormDataModel;
  setData?: (data: FormDataModel) => void;
}

const props = defineProps({
  componentSchema: {
    default: () => ({}),
    require: true,
    type: Object as PropType<ComponentSchema>,
  },
});

const designerProps = inject<DesignerProps>('designerProps');
const pageManager = inject('pageManager', {}) as PageManager;
const form = ref<FormInstance | null>(null);
const forms = inject('forms', {}) as Ref<{ [name: string]: FormInstance }>;
const formData = pageManager.setFormData(
  {},
  props.componentSchema?.componentProps?.name,
);
provide('formData', formData);
/**
 * 获取表单数据
 */
function getData(): FormDataModel {
  return formData;
}

/**
 * 设置表单数据
 * @param data
 */
function setData(data: FormDataModel) {
  Object.assign(formData, data);
}

/**
 * 校验表单数据
 */
function validate(): ReturnType<FormInst['validate']> | undefined {
  return form.value?.validate();
}

/**
 * 清除的表单验证信息
 */
function clearValidate() {
  return form.value?.restoreValidation();
}

// form组件需要特殊处理
onMounted(async (): Promise<void> => {
  if (props.componentSchema?.type === 'form' && forms.value && form.value) {
    const name =
      props.componentSchema?.componentProps?.name ??
      props.componentSchema?.name ??
      ('default' as string);

    forms.value[name] = form.value as any;
    form.value.getData = getData;
    form.value.setData = setData;
  }
});

const componentProps = computed(() => {
  const recordProps = props.componentSchema!.componentProps;
  return recordProps;
});

const children = computed(() => {
  return props.componentSchema!.children ?? [];
});

defineExpose({
  clearValidate,
  form,
  getData,
  setData,
  validate,
});
</script>
<template>
  <NForm
    ref="form"
    :model="formData"
    v-bind="componentProps"
    :class="{ 'epic-form-mode': designerProps?.formMode }"
  >
    <slot name="edit-node">
      <slot
        v-for="item in children"
        name="node"
        :component-schema="item"
      ></slot>
    </slot>
  </NForm>
</template>
