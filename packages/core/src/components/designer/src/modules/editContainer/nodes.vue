<script lang="ts" setup>
import type { ComponentSchema, Designer } from '@epic-designer/types';

import { computed, inject } from 'vue';

import { Revoke } from '@epic-designer/utils';
import draggable from 'vuedraggable';
import {
  VueDraggable,
  type DraggableEvent,
  type UseDraggableReturn,
} from 'vue-draggable-plus'
import EpicNodeItem from './nodeItem.vue';

defineOptions({
  name: 'EditNodeItem',
});
const props = defineProps<{
  schemas: ComponentSchema[];
}>();
const emit = defineEmits(['update:schemas']);
const designer = inject('designer') as Designer;
const revoke = inject('revoke') as Revoke;

const modelSchemas = computed({
  get() {
    return props.schemas;
  },
  set(e) {
    emit('update:schemas', e);
  },
});

/**
 * 选中点击节点元素
 * @param index
 */
function handleSelect(event: Event) {
   // console.log('setSelectedNode', event);
   const schema = getParentSchema(event.target);
      console.log('当前节点', schema);
//  designer.setSelectedNode(schema);
//   designer.setDisabledHover(true);
}

function handleEnd(e) {
  // designer.setDisabledHover();
  // revoke.push('拖拽组件');
  
}

function handleAdd(e) {
  // revoke.push('插入组件');
}
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

   const schema = getParentSchema(event.item);
     console.log('当前节点',  schema);
 event.stopPropagation();
  designer.setSelectedNode(schema);
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
   
      :animation=200
      group='edit-draggable'
  
      ghostClass='epic-moveing'
      @start="handleSelect"
      @end="handleEnd"
       @add=" handleSelect; handleAdd;"
   @Choose="setSelectedNode"
  >
    
      <EpicNodeItem  v-for="(element, index) in modelSchemas" :key="element.id" :schema="element"   class="edit-draggable-widget  epic-draggable-item epic-node-mask" >



      </EpicNodeItem>
   
  </VueDraggable>
</template>
