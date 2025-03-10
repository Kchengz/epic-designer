<script lang="ts" setup>
import type {
  ComponentSchema,
  Designer,
  PageSchema,
} from '@epic-designer/types';

import { computed, inject } from 'vue';

import { pluginManager, Revoke } from '@epic-designer/utils';
import draggable from 'vuedraggable';

import ENodeItem from './nodeItem.vue';

defineOptions({
  name: 'EditNodeItem',
});
const props = defineProps<{
  schemas: ComponentSchema[];
}>();
const emit = defineEmits(['update:schemas']);
const designer = inject('designer') as Designer;
const pageSchema = inject('pageSchema') as PageSchema;
const revoke = inject('revoke') as Revoke;
const modelSchemas = computed({
  get() {
    // 判断props.schemas是否存在值
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
function handleSelect(index: number) {
  designer.setSelectedNode(modelSchemas.value![index]);
  designer.setDisableHover(true);
}

function handleEnd() {
  designer.setDisableHover();
  revoke.push(pageSchema.schemas, '拖拽组件');
}

function handleAdd() {
  revoke.push(pageSchema.schemas, '插入组件');
}

function isDraggable(schema: ComponentSchema) {
  // 判断当前节点类型是否允许拖拽
  if (
    schema.id === pageSchema.schemas[0]?.id ||
    pluginManager.getComponentConfingByType(schema.type)?.editConstraints
      ?.immovable
  ) {
    // 禁止拖拽
    return 'unmover-item';
  }

  return 'draggable-item';
}
</script>
<template>
  <draggable
    v-model="modelSchemas"
    item-key="id"
    :component-data="{
      type: 'transition-group',
    }"
    class="epic-draggable-range"
    v-bind="{
      animation: 200,
      group: 'edit-draggable',
      handle: '.draggable-item',
      ghostClass: 'moveing',
    }"
    @start="handleSelect($event.oldIndex)"
    @end="handleEnd()"
    @add="
      handleSelect($event.newIndex);
      handleAdd();
    "
  >
    <template #item="{ element, index }">
      <div :key="index" class="widget-box" :class="isDraggable(element)">
        <ENodeItem :schema="element" />
      </div>
    </template>
  </draggable>
</template>
