<script setup lang="ts">
import type { ComponentSchema } from '@epic-designer/types';

import { computed } from 'vue';

import { ElTabPane } from 'element-plus';

interface Props {
  componentSchema: ComponentSchema;
}

const props = defineProps<Props>();

// 获取子组件
const children = computed(() => {
  return props.componentSchema?.children || [];
});

const componentProps = computed(() => {
  const schema = { ...props.componentSchema };
  delete schema.children;

  return {
    ...schema,
    ...props.componentSchema?.props,
    name: props.componentSchema?.label,
  };
});
</script>

<template>
  <ElTabPane v-bind="componentProps">
    <slot name="edit-node">
      <slot
        v-for="child in children"
        :key="child.id"
        name="node"
        :component-schema="child"
      ></slot>
    </slot>
  </ElTabPane>
</template>
