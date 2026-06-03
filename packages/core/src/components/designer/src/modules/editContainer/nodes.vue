<script lang="ts" setup>
import type { ComponentSchema } from '@epic-designer/types';

import { computed, ref } from 'vue';
import { VueDraggable } from 'vue-draggable-plus';

import { useDesignerContext, usePageManager } from '@epic-designer/hooks';
import { findSchemas, getMatchedById } from '@epic-designer/utils';

import EpicNodeItem from './nodeItem.vue';

defineOptions({
  name: 'EditNodeItem',
});
const props = defineProps<{
  schemas: ComponentSchema[];
}>();
const emit = defineEmits(['update:schemas']);
const designer = useDesignerContext();
const revoke = designer.revoke;
const pageManager = usePageManager();

const modelSchemas = computed({
  get: () => props.schemas,
  set: (val) => emit('update:schemas', val.filter(Boolean)),
});

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
  if (!target.classList.contains('ep-draggable-range')) {
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
function handleDragAdd(event: any) {
  designer.setSelectedNode(event.clonedData);
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
function handleDragEnd(e) {
  if (isDragChange.value) {
    revoke.push('拖拽组件', true);
  }
  isDragChange.value = false;

  setTimeout(() => {
    const targetId = e.data.id;
    const schemas = findSchemas(
      pageManager.pageSchema.schemas,
      (schema) => schema.id === targetId,
    ) as ComponentSchema[];

    // 只有存在重复 ID 时才处理
    if (schemas.length > 1) {
      const matchedPath = getMatchedById(
        pageManager.pageSchema.schemas,
        targetId,
      );

      // 确保路径长度至少为 2（即存在父节点）
      if (matchedPath && matchedPath.length >= 2) {
        const parentNode = matchedPath[matchedPath.length - 2];
        if (parentNode && parentNode.children) {
          const index = parentNode.children.findIndex(
            (item) => item.id === targetId,
          );
          if (index !== -1) {
            // 优雅的一行流，不污染原数组，直接赋新值触发更新
            parentNode.children = parentNode.children.toSpliced(index, 1);
          }
        }
      }
    }
  }, 0);
}
</script>

<template>
  <VueDraggable
    v-model="modelSchemas"
    :component-data="{
      type: 'transition-group',
    }"
    class="ep-draggable-range"
    :animation="200"
    group="edit-draggable"
    ghost-class="ep-moveing"
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
