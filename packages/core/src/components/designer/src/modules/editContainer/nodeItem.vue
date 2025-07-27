<script lang="ts" setup>
import type {
  ComponentSchema,
  Designer,
  PageSchema,
} from '@epic-designer/types';

import { computed, inject, provide, useAttrs } from 'vue';

import { EpicNode } from '@epic-designer/base-ui';
import { pluginManager } from '@epic-designer/utils';

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
const designer = inject('designer') as Designer;
const pageSchema = inject('pageSchema', {}) as PageSchema;

provide('nodeAttrs', attrs);
// 判断是否为叶子节点
const isLeaf = computed(() => !props.schema.children);
function getParentSchema(target) {
  let ctx = target?.__vnode?.ctx;
  for (let i = 0; i < 10 && ctx; i++) {
    if (ctx.exposed?.schema) {
      return ctx.exposed.schema;
    }
    ctx = ctx.parent;
  }
  return null;
}
function setSelectedNode(event: Event) {
  console.log('setSelectedNode', event);
   const schema = getParentSchema(event.target);
  event.stopPropagation();
  designer.setSelectedNode(schema);
}

function setHoverNode(event: Event) {
   const schema = getParentSchema(event.target);
  event.stopPropagation();
  designer.setHoverNode(schema);
}

function isDraggable() {
  const schema = props.schema;
  // 判断当前节点类型是否允许拖拽
  if (
    !props.draggable ||
    schema.id === pageSchema.schemas[0]?.id ||
    pluginManager.getComponentConfingByType(schema.type)?.editConstraints
      ?.immovable
  ) {
    // 禁止拖拽
    return 'epic-unmover-item';
  }

  return 'epic-draggable-item';
}
</script>
<template>
 
    <EpicNode :component-schema="props.schema">
      <!-- childImmovable不可拖拽设计 start -->
      <template
        v-if="
          pluginManager.getComponentConfingByType(props.schema.type)
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
        

        />
      </template>
    </EpicNode>

</template>
