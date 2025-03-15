<script lang="ts" setup>
import type { Designer, PageSchema } from '@epic-designer/types';

import { computed, inject } from 'vue';

import { EpicIcon, EpicTree } from '@epic-designer/base-ui';
import { pluginManager } from '@epic-designer/utils';

const pageSchema = inject('pageSchema') as PageSchema;
const designer = inject('designer') as Designer;

// 计算选中节点值
const selectedKeys = computed(() => {
  const id = designer.state.selectedNode?.id;
  return id ? [id] : [];
});

// 设置选中节点
function handleNodeClick(e: any) {
  designer.setSelectedNode(e.componentSchema);
}
</script>
<template>
  <div class="epic-outline">
    <EpicTree
      :options="pageSchema.schemas"
      draggable
      :selected-keys="selectedKeys"
      :hover-key="designer.state.hoverNode?.id ?? ''"
      @node-click="handleNodeClick"
    >
      <template #tree-node="{ schema }">
        <div
          class="epic-text-padding flex"
          :class="{ hidden: schema.componentProps?.hidden }"
          @mouseenter.stop="designer.setHoverNode(schema)"
          @mouseleave.stop="designer.setHoverNode(null)"
        >
          <span class="max-w-full truncate">
            <EpicIcon
              v-if="schema.componentProps?.hidden"
              name="icon--epic--visibility-off-outline-rounded"
              class="translate-y-2px"
            />
            {{
              schema.label ??
              pluginManager.getComponentConfingByType(schema.type)
                ?.defaultSchema.label
            }}
          </span>
          <span class="epic-node-type-text w-0 flex-1 truncate">
            {{ schema.id }}
          </span>
        </div>
      </template>
    </EpicTree>
  </div>
</template>
