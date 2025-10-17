<script lang="ts" setup>
import type { PageManager } from '@epic-designer/manager';
import type {
  ComponentSchema,
  DesignerProps,
  FormDataModel,
} from '@epic-designer/types';

import type { VNode } from 'vue';

import { computed, inject, provide, ref } from 'vue';

import { Form } from 'ant-design-vue';

interface FormInstance extends InstanceType<typeof Form> {
  getData?: () => FormDataModel;
  scrollToField: (name: string) => void;
  setData?: (data: FormDataModel) => void;
  validate: () => Promise<unknown>;
  validateFields: () => Promise<unknown>;
}

defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(
  defineProps<{
    componentSchema: ComponentSchema;
    scrollToFirstError?: boolean;
  }>(),
  {
    componentSchema: () => ({ type: '' }),
    scrollToFirstError: false,
  },
);

const designerProps = inject<DesignerProps>('designerProps');
const pageManager = inject<PageManager>('pageManager', {} as PageManager);
const form = ref<FormInstance | null>(null);
const forms = inject<{ [name: string]: any }>('forms', {});
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
 * 校验表单数据
 */
async function validate() {
  try {
    return await form.value?.validateFields();
  } catch (error) {
    if (props.scrollToFirstError) {
      // 滚动到第一个错误字段
      form.value?.scrollToField(error.errorFields[0].name.toString());
    }
    throw error;
  }
}

/**
 * 设置表单数据
 * @param data
 */
function setData(data: FormDataModel) {
  Object.assign(formData, data);
}

// form组件需要特殊处理
const mountedForm = (vNode: VNode) => {
  form.value = vNode.component?.exposed as FormInstance;

  if (props.componentSchema?.type === 'form' && forms.value && form.value) {
    const name =
      props.componentSchema?.componentProps?.name ??
      props.componentSchema?.name ??
      ('default' as string);

    form.value.validate = validate;
    forms.value[name] = form.value;
    form.value.getData = getData;
    form.value.setData = setData;
    return false;
  }
};

const componentProps = computed(() => {
  const recordProps = props.componentSchema!.componentProps;
  let labelCol = recordProps.labelCol;
  let wrapperCol = recordProps.wrapperCol;
  if (recordProps.layout === 'vertical') {
    labelCol = wrapperCol = { span: 24 };
  } else if (
    recordProps.layout === 'inline' &&
    recordProps.labelLayout === 'fixed'
  ) {
    // 处理内联固定label宽度导致换行问题
    labelCol = {};
    wrapperCol = { flex: 1 };
  } else if (recordProps.labelLayout === 'fixed') {
    // 兼容 旧版本 labelWidth 是 number 的情况
    labelCol = {
      flex: `${typeof recordProps.labelWidth === 'number' ? `${recordProps.labelWidth}px` : recordProps.labelWidth}`,
    };
    wrapperCol = { flex: 1 };
  }

  return {
    ...recordProps,
    labelCol,
    wrapperCol,
  };
});

function onFinish() {}

const children = computed(() => {
  return props.componentSchema!.children ?? [];
});

defineExpose({
  form,
  getData,
  setData,
  validate,
});
</script>
<template>
  <Form
    :model="formData"
    v-bind="componentProps"
    @finish="onFinish"
    :class="{ 'epic-form-mode': designerProps?.formMode }"
    @vue:mounted="mountedForm"
  >
    <slot name="edit-node">
      <slot
        v-for="item in children"
        name="node"
        :component-schema="item"
      ></slot>
    </slot>
  </Form>
</template>
