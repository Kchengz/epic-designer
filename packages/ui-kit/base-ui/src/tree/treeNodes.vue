<script lang="ts" setup>
import type {
  ComponentSchema,
  Designer,
  PageSchema,
} from '@epic-designer/types';

import type { TreeProps } from './types';

import { computed, inject } from 'vue';

import { pluginManager } from '@epic-designer/manager';
import draggable from 'vuedraggable';

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
const treeProps = inject('treeProps') as TreeProps;

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
  designer.setDisabledHover(true);
  designer.setSelectedNode(modelSchemas.value![index]);
}

function isDraggable(schema: ComponentSchema) {
  // 判断当前节点类型是否允许拖拽
  if (
    schema.id === pageSchema.schemas[0]?.id ||
    pluginManager.getComponentConfigByType(schema.type)?.editConstraints
      ?.immovable
  ) {
    // 禁止拖拽
    return 'node-drag-disabled';
  }

  return 'node-drag-enabled';
}

const getDisabled = computed(() => {
  return (
    !treeProps.draggable ||
    modelSchemas.value![0]?.id === pageSchema.schemas[0]?.id
  );
});
</script>
<template>
  <draggable
    v-if="
      !pluginManager.getComponentConfigByType(props.parentSchema?.type || '')
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
      draggable: '.node-drag-enabled',
      disabled: getDisabled,
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
