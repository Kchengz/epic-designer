<script lang="ts" setup>
import { computed, inject } from 'vue';

import { pluginManager } from '@epic-designer/utils';
import draggable from 'vuedraggable';

import {
  ComponentSchema,
  Designer,
  PageSchema,
} from '@epic-designer/types';
import ETreeNodeItem from './treeNodeItem.vue';

defineOptions({
  name: 'ETreeNodes',
});

const props = defineProps<{
  parentSchema?: ComponentSchema;
  schemas: ComponentSchema[];
}>();
const emit = defineEmits(['update:schemas']);
const designer = inject('designer') as Designer;
const pageSchema = inject('pageSchema') as PageSchema;
const treeProps = inject('treeProps') as any;

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
  designer.setDisableHover(true);
  designer.setCheckedNode(modelSchemas.value![index]);
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
    v-if="
      !pluginManager.getComponentConfingByType(props.parentSchema?.type || '')
        ?.editConstraints?.childImmovable
    "
    v-model="modelSchemas"
    item-key="id"
    :component-data="{}"
    class="epic-draggable-range"
    v-bind="{
      animation: 200,
      tag: 'ul',
      group: 'tree-draggable',
      ghostClass: 'moveing',
      draggable: '.draggable-item',
      disabled:
        !treeProps.draggable ||
        modelSchemas[0]?.id === pageSchema.schemas[0]?.id,
    }"
    @start="handleSelect($event.oldIndex)"
  >
    <template #item="{ element }">
      <ETreeNodeItem
        :key="element.id"
        :class="isDraggable(element)"
        :schema="element"
      />
    </template>
  </draggable>

  <ul v-else>
    <ETreeNodeItem
      v-for="element in modelSchemas"
      :key="element.id"
      :schema="element"
    />
  </ul>
</template>
