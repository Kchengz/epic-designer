<script lang="ts" setup>
import type { ComponentSchema } from '@epic-designer/types';

import { inject } from 'vue';

import { useEventBus } from '@epic-designer/hooks';
import { Input } from 'ant-design-vue';

const props = withDefaults(
  defineProps<{
    componentSchema?: ComponentSchema;
    dataSelector?: boolean;
    options?: any[];
  }>(),
  {
    componentSchema: () => ({
      field: '',
      type: 'input',
    }),
    dataSelector: false,
    options: () => [],
  },
);

const formData = inject<Record<string, any>>('formData', {});
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
  <Input>
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
