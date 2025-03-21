<script lang="ts" setup>
import type { ComponentSchema, PageSchema } from '@epic-designer/types';

import { computed, defineComponent, h, inject, Ref, Slots } from 'vue';

import { EpicIcon } from '@epic-designer/base-ui';
import { pluginManager } from '@epic-designer/utils';

import ETreeNodes from './treeNodes.vue';

defineOptions({
  name: 'ETreeNodeItem',
});

const props = defineProps<{
  schema: ComponentSchema;
}>();

const slots = inject('slots', {}) as Slots;
const pageSchema = inject('pageSchema', {}) as PageSchema;

const expandedKeys = inject('expandedKeys') as Ref<string[]>;
const treeProps = inject('treeProps') as any;
const selectedKeys = inject('selectedKeys') as Ref<string[]>;

const handleSelect = inject('handleSelect') as (
  id: string,
  componentSchema: ComponentSchema,
) => {};

const expanded = computed(() => {
  return expandedKeys.value.includes(props.schema.id ?? '');
});

const TreeNodeText = defineComponent({
  setup() {
    return () =>
      h(
        'span',
        {
          class: {
            checked: selectedKeys.value.includes(props.schema.id!),
            hover: treeProps.hoverKey === props.schema.id,
            text: true,
          },
          onClick: () => handleSelect(props.schema.id!, props.schema),
        },
        slots['tree-node']?.(props) ??
          h(
            'span',
            { class: 'epic-text-padding flex' },
            {
              default: () => [
                h(
                  'span',
                  { class: 'max-w-full truncate' },
                  props.schema.label ??
                    pluginManager.getComponentConfingByType(props.schema.type)
                      ?.defaultSchema.label,
                ),
                h(
                  'span',
                  { class: 'epic-node-type-text flex-1 w-0 truncate' },
                  props.schema.id,
                ),
              ],
            },
          ),
      );
  },
});

function handleExpanded() {
  const id = props.schema.id;
  if (!id) {
    return false;
  }

  if (expandedKeys.value.includes(id)) {
    expandedKeys.value = expandedKeys.value.filter((item) => item !== id);
  } else {
    expandedKeys.value.push(id);
  }
}

function init() {
  const id = props.schema.id;
  if (!id || !props.schema.children?.length) {
    return false;
  }
  expandedKeys.value.push(id);
}
init();
</script>
<template>
  <li
    class="epic-tree-node"
    :class="{
      expanded: props.schema.children?.length,
      'level-1': props.schema.id === pageSchema.schemas[0]?.id,
    }"
  >
    <a>
      <span
        v-if="
          props.schema.children?.length &&
          props.schema.id !== pageSchema.schemas[0]?.id
        "
        class="icon-expanded"
        :class="{ expanded }"
        @click="handleExpanded"
      >
        <EpicIcon name="icon--epic--caret-right-outlined" />
      </span>
      <TreeNodeText />
    </a>
    <ETreeNodes
      v-if="props.schema.children?.length"
      v-model:schemas="props.schema.children"
      class="epic-tree-sublist"
      :class="{ expanded }"
      :parent-schema="props.schema"
    />
  </li>
</template>
