<script lang="ts" setup>
import { computed } from 'vue';

import { ComponentSchema } from '../../types/epic-designer';

const props = defineProps<{
  componentSchema: ComponentSchema;
}>();

const children = computed(() => {
  return props.componentSchema.children ?? [];
});
</script>
<template>
  <div class="box-border h-full">
    <slot name="edit-node">
      <slot
        v-for="item in children"
        name="node"
        :component-schema="item"
      ></slot>
    </slot>
  </div>
</template>
