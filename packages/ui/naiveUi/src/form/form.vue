<script lang="ts" setup>
import type { ComponentSchema, FormDataModel } from '@epic-designer/types';
import type { FormInst } from 'naive-ui';

import type { PropType } from 'vue';

import { computed, onMounted, ref } from 'vue';

import { useForm } from '@epic-designer/hooks';
import { findSchemas } from '@epic-designer/utils';
import { NForm } from 'naive-ui/lib/form';

interface FormInstance extends InstanceType<typeof NForm> {
  clearValidate?: () => void;
  getData?: () => FormDataModel;
  resetData: () => void;
  setData?: (data: FormDataModel) => void;
}

defineOptions({
  inheritAttrs: false,
});

const props = defineProps({
  componentSchema: {
    default: () => ({}),
    require: true,
    type: Object as PropType<ComponentSchema>,
  },
});

const form = ref<FormInstance | null>(null);
const { formData, formInstances } = useForm(
  props.componentSchema?.props?.name ?? 'default',
);
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
 * 重置表单数据
 */
function resetData() {
  form.value?.restoreValidation();

  const inputSchemas = findSchemas(props.componentSchema.children!, (schema) =>
    Boolean(schema.input),
  );

  if (Array.isArray(inputSchemas)) {
    inputSchemas.forEach((schema) => {
      const defaultValue = schema.props?.defaultValue;
      if (defaultValue === undefined) {
        formData[schema.field!] = null;
      } else {
        formData[schema.field!] = defaultValue;
      }
    });
  }
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
  if (
    props.componentSchema?.type === 'form' &&
    formInstances.value &&
    form.value
  ) {
    const name =
      props.componentSchema?.props?.name ??
      props.componentSchema?.name ??
      ('default' as string);

    formInstances.value[name] = form.value as any;
    form.value.getData = getData;
    form.value.setData = setData;
    form.value.resetData = resetData;
  }
});

const formProps = computed(() => {
  const recordProps = props.componentSchema!.props;
  return recordProps;
});

const children = computed(() => {
  return props.componentSchema!.children ?? [];
});

defineExpose({
  clearValidate,
  form,
  getData,
  resetData,
  setData,
  validate,
});
</script>
<template>
  <NForm ref="form" :model="formData" v-bind="formProps">
    <slot name="edit-node">
      <slot
        v-for="item in children"
        name="node"
        :component-schema="item"
      ></slot>
    </slot>
  </NForm>
</template>
