<script lang="ts" setup>
import type {
  ComponentSchema,
  FormDataModel,
} from '@epic-designer/core/types/epic-designer';
import type { PageManager } from '@epic-designer/utils';

import type { PropType, Ref } from 'vue';

import { computed, inject, onMounted, provide, reactive, ref } from 'vue';

import { NForm } from 'naive-ui/lib/form';

interface FormInstance extends InstanceType<typeof NForm> {
  clearValidate?: () => void;
  getData?: () => FormDataModel;
  setData?: (FormDataModel) => void;
}

const props = defineProps({
  componentSchema: {
    default: () => ({}),
    require: true,
    type: Object as PropType<ComponentSchema>,
  },
});
const pageManager = inject('pageManager', {}) as PageManager;
const form = ref<FormInstance | null>(null);
const forms = inject('forms', {}) as Ref<{ [name: string]: FormInstance }>;
const visible = ref(true);
const formData = reactive<FormDataModel>({});
provide('formData', formData);
pageManager.addFormData(formData, props.componentSchema?.componentProps?.name);
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
function validate() {
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
  <div v-if="visible" class="form-main" style="height: 100%">
    <NForm
      ref="form"
      :model="formData"
      v-bind="componentProps"
      style="height: 100%"
    >
      <slot name="edit-node">
        <slot
          v-for="item in children"
          name="node"
          :component-schema="item"
        ></slot>
      </slot>
    </NForm>
  </div>
</template>
