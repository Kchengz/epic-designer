<script lang="ts" setup>
import type { ComponentSchema } from '@epic-designer/types';

import { computed, defineComponent, h } from 'vue';

import { EpicIcon } from '@epic-designer/base-ui';
import { useDesignerContext } from '@epic-designer/hooks';
import { pluginManager } from '@epic-designer/manager';

import ETreeNodes from './treeNodes.vue';
import { useTreeContext } from './useTreeContext';

defineOptions({
  name: 'ETreeNodeItem',
});

const props = defineProps<{
  schema: ComponentSchema;
}>();

const treeContext = useTreeContext();
const { pageSchema } = useDesignerContext();

const expanded = computed(() => {
  return treeContext!.expandedKeys.value.includes(props.schema.id ?? '');
});

const TreeNodeText = defineComponent({
  setup() {
    return () =>
      h(
        'span',
        {
          class: {
            checked: treeContext!.selectedKeys.value.includes(props.schema.id!),
            hover: treeContext!.treeProps.hoverKey === props.schema.id,
            text: true,
          },
          onClick: () =>
            treeContext!.handleSelect(props.schema.id!, props.schema),
        },
        treeContext!.slots['tree-node']?.(props) ??
          h(
            'span',
            { class: 'epic-text-padding flex' },
            {
              default: () => [
                h(
                  'span',
                  { class: 'max-w-full truncate' },
                  props.schema.label ??
                    pluginManager.component.getConfigByType(props.schema.type)
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

  if (treeContext!.expandedKeys.value.includes(id)) {
    treeContext!.expandedKeys.value = treeContext!.expandedKeys.value.filter(
      (item) => item !== id,
    );
  } else {
    treeContext!.expandedKeys.value.push(id);
  }
}

function init() {
  const id = props.schema.id;
  if (!id || !props.schema.children?.length) {
    return false;
  }
  treeContext!.expandedKeys.value.push(id);
}
init();
</script>
<template>
  <li
    class="epic-tree-node"
    :class="{
      expanded: props.schema.children?.length,
      'is-locked': pluginManager.component.getLocked(props.schema.type),
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
