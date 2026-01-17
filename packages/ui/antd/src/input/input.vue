<script lang="ts" setup>
import type { ComponentSchema } from '@epic-designer/types';

import { inject } from 'vue';

import { EpicIcon } from '@epic-designer/base-ui';
import { EventBus } from '@epic-designer/hooks';
import { Input } from 'ant-design-vue';

const props = withDefaults(
  defineProps<{
    componentSchema: ComponentSchema;
    remoteSelector: boolean;
  }>(),
  {
    remoteSelector: true,
  },
);

const eventBus = inject<EventBus>('eventBus');

const handleRemoteSelector = () => {
  eventBus?.emit('openRemoteSelector', props.componentSchema);
};
</script>
<template>
  <Input>
    <template #suffix v-if="props.remoteSelector">
      <EpicIcon
        @click="handleRemoteSelector"
        name="icon--epic--search-rounded"
        class="cursor-pointer"
      />
    </template>
  </Input>
</template>
