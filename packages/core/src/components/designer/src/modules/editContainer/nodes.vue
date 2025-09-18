<script lang="ts" setup>
import type { Revoke } from '@epic-designer/manager';
import type { ComponentSchema, Designer } from '@epic-designer/types';

import { computed, inject, ref } from 'vue';
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
const revoke = inject('revoke') as Revoke;

const modelSchemas = computed({
  get: () => props.schemas,
  set: (e) => emit('update:schemas', e),
});

// isDrageChange
const isDragChange = ref(false);

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

/**
 * 从侧边栏拖入编辑区域，直接记录
 *
 * - tips: 拖入也会导致 change 被触发，Add 应该设置 isDrageChange 标识为 false
 */
function handleDragAdd() {
  revoke.push('插入组件', true);
  isDragChange.value = false;
}

/**
 * 编辑区域内的拖拽change事件，记录顺序发生变化
 */
function handleDragChange() {
  isDragChange.value = true;
}

/**
 * 编辑区域内的拖拽结束事件，需判断是否 change，有可能拖拽并未修改顺序
 */
function handleDragEnd() {
  if (isDragChange.value) {
    revoke.push('拖拽组件', true);
  }
  isDragChange.value = false;
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
    @change="handleDragChange"
    @add="handleDragAdd"
    @end="handleDragEnd"
  >
    <EpicNodeItem
      v-for="element in modelSchemas"
      :key="element.id"
      :schema="element"
    />
  </VueDraggable>
</template>
