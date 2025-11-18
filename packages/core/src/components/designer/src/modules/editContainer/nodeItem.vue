<script lang="ts" setup>
import type { ComponentSchema, PageSchema } from '@epic-designer/types';

import { computed, inject, provide, useAttrs } from 'vue';

import { EpicNode } from '@epic-designer/base-ui';
import { pluginManager } from '@epic-designer/manager';

import EpicNodes from './nodes.vue';

defineOptions({
  name: 'EpicNodeItem',
});
const props = withDefaults(
  defineProps<{
    draggable?: boolean;
    schema: ComponentSchema;
  }>(),
  {
    draggable: true,
  },
);
const attrs = useAttrs();
const pageSchema = inject('pageSchema', {}) as PageSchema;

provide('nodeAttrs', attrs);
// 判断是否为叶子节点
const isLeafNode = computed(() => !props.schema.children);

function isDraggable() {
  const schema = props.schema;
  // 判断当前节点类型是否允许拖拽
  if (
    !props.draggable ||
    schema.id === pageSchema.schemas[0]?.id ||
    pluginManager.component.getConfigByType(schema.type)?.editConstraints
      ?.immovable
  ) {
    // 禁止拖拽
    return 'node-drag-disabled';
  }

  return 'node-drag-enabled';
}
</script>
<template>
  <EpicNode
    :component-schema="props.schema"
    :data-epic-id="props.schema.id"
    class="edit-draggable-widget"
    :class="[isDraggable(), isLeafNode ? 'epic-node-leaf' : '']"
  >
    <!-- childImmovable不可拖拽设计 start -->
    <template
      v-if="
        pluginManager.component.getConfigByType(props.schema.type)
          ?.editConstraints?.childImmovable
      "
      #edit-node
    >
      <EpicNodeItem
        v-for="node in props.schema.children"
        :key="node.id"
        :schema="node"
        :draggable="false"
      />
    </template>
    <!-- childImmovable不可拖拽设计 end -->
    <template v-else #edit-node>
      <EpicNodes
        v-if="props.schema.children"
        v-model:schemas="props.schema.children"
        :key="props.schema.children.length"
      />
    </template>
  </EpicNode>
</template>
