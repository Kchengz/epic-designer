<script lang="ts" setup>
import type { PageManager, Revoke } from '@epic-designer/manager';
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
const pageManager = inject('pageManager') as PageManager;

const modelSchemas = computed({
  get: () => props.schemas,
  set: (e) => emit('update:schemas', e),
});

// isDrageChange
const isDragChange = ref(false);

/**
 * 获取节点的schema
 * @param {Element} target 节点元素
 * @returns {ComponentSchema | null} 节点的schema
 */
function getNodeSchema(target) {
  if (!target?.closest) return null;

  // 优先检查当前元素
  if (target.dataset?.epicId) {
    return getSchemaByEpicId(target.dataset.epicId);
  }

  // 检查直接子元素（只向下查询一级）
  if (!target.classList.contains('epic-draggable-range')) {
    const directChild = target.querySelector(':scope > [data-epic-id]');
    if (directChild?.dataset?.epicId) {
      return getSchemaByEpicId(directChild.dataset.epicId);
    }
  }

  // 向父级查找
  const parentElement = target.closest('[data-epic-id]');
  if (parentElement?.dataset?.epicId) {
    return getSchemaByEpicId(parentElement.dataset.epicId);
  }

  return null;
}

/**
 * 根据epicId获取schema的辅助函数
 * @param {string} epicId
 */
function getSchemaByEpicId(epicId) {
  const instance = pageManager.findInstance(epicId);
  return instance?.exposed?.schema || null;
}

function setSelectedNode(event: any) {
  const schema = getNodeSchema(event.item ?? event.target);
  event.stopPropagation();
  designer.setSelectedNode(schema);
}

function setHoverNode(event: Event) {
  const schema = getNodeSchema(event.target);
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
    @change="handleDragChange"
    @add="handleDragAdd"
    @end="handleDragEnd"
    @click.stop="setSelectedNode"
    @choose="setSelectedNode"
  >
    <EpicNodeItem
      v-for="element in modelSchemas"
      :key="element.id"
      :schema="element"
    />
  </VueDraggable>
</template>
