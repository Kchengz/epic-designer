<script lang="ts" setup>
import type { ComponentSchema } from '@epic-designer/types';

import { useEventBus, useFormItem } from '@epic-designer/hooks';
import { Input } from 'ant-design-vue';

const props = withDefaults(
  defineProps<{
    componentSchema?: ComponentSchema;
    dataSelector?: boolean;
    options?: any[];
    placeholder?: string;
  }>(),
  {
    componentSchema: () => ({
      field: '',
      type: 'input',
    }),
    dataSelector: false,
    options: () => [],
    placeholder: '请输入',
  },
);
const modelValue = defineModel<string>();
const { formData } = useFormItem();
const eventBus = useEventBus();

const handleDataSelector = () => {
  eventBus?.emit('openDataSelector', props.componentSchema, props.options);
};

eventBus?.on('dataSelector:selected', (data) => {
  if (data.nodeId !== props.componentSchema.id) {
    return;
  }

  const dataFieldMap = props.componentSchema.props?.dataFieldMap ?? [];
  dataFieldMap.forEach((item) => {
    formData[item.formField] = data.record[item.dataField];
  });
});
</script>
<template>
  <Input v-model:value="modelValue" :placeholder="props.placeholder">
    <template #suffix>
      <span
        v-if="props.dataSelector"
        @click="handleDataSelector"
        class="iconfont icon--epic icon--epic--search-rounded"
      ></span>
      <slot name="suffix"></slot>
    </template>
  </Input>
</template>
