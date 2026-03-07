<script lang="ts" setup>
import type { ComponentSchema, FormDataModel } from '@epic-designer/types';

import { computed, onMounted, PropType, ref } from 'vue';

import { useForm } from '@epic-designer/hooks';
import { ElForm } from 'element-plus';

interface FormInstance extends InstanceType<typeof ElForm> {
  getData?: () => FormDataModel;
  resetData: () => void;
  setData?: (FormDataModel) => void;
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
  form.value?.resetFields();
}

/**
 * 校验表单数据
 */
function validate() {
  return form.value?.validate();
}

// form组件需要特殊处理
onMounted(async () => {
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
    return false;
  }
});

const formProps = computed(() => {
  const recordProps = props.componentSchema!.props;
  let labelCol = recordProps.labelCol;
  let wrapperCol = recordProps.wrapperCol;
  if (recordProps.labelLayout === 'fixed') {
    labelCol = {
      style: `width:${typeof recordProps.labelWidth === 'number' ? `${recordProps.labelWidth}px` : recordProps.labelWidth}`,
    };
    wrapperCol = { style: 'width:auto;flex:1' };
  }
  return {
    ...recordProps,
    labelCol,
    wrapperCol,
  };
});

const children = computed(() => {
  return props.componentSchema!.children ?? [];
});

defineExpose({
  form,
  getData,
  resetData,
  setData,
  validate,
});
</script>

<template>
  <ElForm ref="form" :model="formData" v-bind="formProps">
    <slot name="edit-node">
      <slot
        v-for="item in children"
        name="node"
        :component-schema="item"
      ></slot>
    </slot>
  </ElForm>
</template>
