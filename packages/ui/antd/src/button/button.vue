<script lang="ts" setup>
import type { ComponentSchema } from '@epic-designer/types';

import type { PropType } from 'vue';

import { Button } from 'ant-design-vue';

const props = defineProps({
  componentSchema: {
    default: () => ({}),
    type: Object as PropType<ComponentSchema>,
  },
});
</script>
<template>
  <Button v-bind="props.componentSchema?.props">
    <slot>{{ props.componentSchema?.label }}</slot>
  </Button>
</template>
