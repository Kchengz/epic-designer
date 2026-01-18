<script lang="ts" setup>
import type { ComponentSchema } from '@epic-designer/types';

import { inject } from 'vue';

import { EventBus } from '@epic-designer/hooks';
import { Input } from 'ant-design-vue';

const props = withDefaults(
  defineProps<{
    componentSchema?: ComponentSchema;
    options?: any[];
    remoteSelector?: boolean;
  }>(),
  {
    componentSchema: () => ({
      field: '',
      type: 'input',
    }),
    options: () => [],
    remoteSelector: false,
  },
);

const formData = inject<Record<string, any>>('formData', {});
const eventBus = inject<EventBus | null>('eventBus', null);

const handleRemoteSelector = () => {
  eventBus?.emit('openRemoteSelector', props.componentSchema, props.options);
};

eventBus?.on('setRemoteSelectorData', (data) => {
  if (data.nodeId !== props.componentSchema.id) {
    return;
  }

  formData[props.componentSchema.field!] = data.record.value;
});
</script>
<template>
  <Input>
    <template #suffix v-if="props.remoteSelector">
      <span
        @click="handleRemoteSelector"
        class="iconfont icon--epic icon--epic--search-rounded"
      ></span>
    </template>
  </Input>
</template>
