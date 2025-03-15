<script lang="ts" setup>
import type {
  ComponentSchema,
  Designer,
  PageSchema,
} from '@epic-designer/types';

import { computed, inject } from 'vue';

import { Revoke } from '@epic-designer/utils';
import draggable from 'vuedraggable';

import EpicNodeItem from './nodeItem.vue';

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
  designer.setDisabledHover(true);
}

function handleEnd() {
  designer.setDisabledHover();
  revoke.push(pageSchema.schemas, '拖拽组件');
}

function handleAdd() {
  revoke.push(pageSchema.schemas, '插入组件');
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
      handle: '.epic-draggable-item',
      ghostClass: 'epic-moveing',
    }"
    @start="handleSelect($event.oldIndex)"
    @end="handleEnd()"
    @add="
      handleSelect($event.newIndex);
      handleAdd();
    "
  >
    <template #item="{ element, index }">
      <EpicNodeItem :key="index" :schema="element" />
    </template>
  </draggable>
</template>
