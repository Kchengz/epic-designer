<script lang="ts" setup>
import type { ComponentSchema, Designer } from '@epic-designer/types';

import { computed, inject } from 'vue';
import { VueDraggable } from 'vue-draggable-plus';

import EpicNodeItem from './nodeItem.vue';

defineOptions({
  name: 'EditNodeItem',
});
const props = defineProps<{
  schemas: ComponentSchema[];
}>();
const emit = defineEmits(['update:schemas']);
const designer = inject('designer') as Designer;

const modelSchemas = computed({
  get: () => props.schemas,
  set: (e) => emit('update:schemas', e),
});

/**
 * 选中点击节点元素
 * @param index
 */

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

function setSelectedNode(event: any) {
  console.log(event);
  const schema = getParentSchema(event.item);
  event.stopPropagation();
  designer.setSelectedNode(schema);
}
function setSelectedNode1(event: Event) {
  const schema = getParentSchema(event.target);

  if (schema.id === 'root') {
    event.stopPropagation();
    designer.setSelectedNode(schema);
  }
}

function setHoverNode(event: Event) {
  const schema = getParentSchema(event.target);
  event.stopPropagation();
  designer.setHoverNode(schema);
}
</script>

<template>
  <VueDraggable
    v-model="modelSchemas"
    item-key="id"
    :component-data="{
      type: 'transition-group',
    }"
    class="epic-draggable-range"
    :animation="200"
    group="edit-draggable"
    ghost-class="epic-moveing"
    @mouseover.stop="setHoverNode"
    @choose="setSelectedNode"
    @click.stop="setSelectedNode1"
  >
    <EpicNodeItem
      v-for="element in modelSchemas"
      :key="element.id"
      :schema="element"
    />
  </VueDraggable>
</template>
