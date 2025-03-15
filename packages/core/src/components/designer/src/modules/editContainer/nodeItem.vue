<script lang="ts" setup>
import type {
  ComponentSchema,
  Designer,
  PageSchema,
} from '@epic-designer/types';
import type { PageManager } from '@epic-designer/utils';

import { computed, inject, onUnmounted, provide, useAttrs, watch } from 'vue';

import { EpicNode } from '@epic-designer/base-ui';
import { pluginManager } from '@epic-designer/utils';

import EditNodeItem from './editNodeItem.vue';

defineOptions({
  name: 'EpicNodeItem',
});
const props = defineProps<{
  name?: string;
  schema: ComponentSchema;
}>();
const attrs = useAttrs();
const designer = inject('designer') as Designer;
const pageManager = inject('pageManager', {}) as PageManager;
const pageSchema = inject('pageSchema', {}) as PageSchema;

provide('nodeAttrs', attrs);
// 判断是否为叶子节点
const isLeaf = computed(() => !props.schema.children);

/**
 * 获取当前组件dom元素
 */
const getComponentElement = computed<HTMLBaseElement | null>(() => {
  const componentInstances = pageManager.componentInstances.value;
  const id = props.schema?.id;
  const componentConfing =
    pluginManager.getComponentConfingByType(props.schema?.type!) ?? null;
  if (!id || !componentInstances?.[id]) {
    return null;
  }
  if (
    componentConfing?.defaultSchema.input &&
    props.schema?.noFormItem !== true
  ) {
    return componentInstances[`${id}formItem`]?.$el;
  }
  const componentInstance = componentInstances[id];
  if (componentInstance?.$el?.nodeName === '#text') {
    return null;
  }
  return componentInstance?.$el;
});

// 监听选中dom元素变化
watch(
  () => getComponentElement.value,
  (componentElement) => {
    if (!componentElement) return;
    componentElement.addEventListener('click', setSelectedNode, false);
    componentElement.addEventListener('mouseover', setHoverNode, false);

    if (isLeaf.value) {
      componentElement.classList?.add('epic-node-mask');
    } else {
      componentElement.classList?.remove('epic-node-mask');
    }
  },
);

onUnmounted(() => {
  if (!getComponentElement.value) return;
  getComponentElement.value.removeEventListener(
    'click',
    setSelectedNode,
    false,
  );
  getComponentElement.value.removeEventListener(
    'mouseover',
    setHoverNode,
    false,
  );
});

function setSelectedNode(event: Event) {
  event.stopPropagation();
  designer.setSelectedNode(props.schema);
}

function setHoverNode(event: Event) {
  // 根节点不显示hover
  if (props.schema.id === pageSchema.schemas[0]?.id) return;
  event.stopPropagation();
  designer.setHoverNode(props.schema);
}
</script>
<template>
  <EpicNode :component-schema="props.schema">
    <!-- childImmovable不可拖拽设计 start -->
    <template
      v-if="
        pluginManager.getComponentConfingByType(props.schema.type)
          ?.editConstraints?.childImmovable
      "
      #edit-node
    >
      <EpicNodeItem
        v-for="node in props.schema.children"
        :key="node.id"
        :schema="node"
      />
    </template>
    <!-- childImmovable不可拖拽设计 end -->

    <template v-else #edit-node>
      <EditNodeItem
        v-if="props.schema.children"
        v-model:schemas="props.schema.children"
      />
    </template>
  </EpicNode>
</template>
