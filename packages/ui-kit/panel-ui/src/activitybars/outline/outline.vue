<script lang="ts" setup>
import { computed } from 'vue';

import { EpicIcon, EpicTree } from '@epic-designer/base-ui';
import { useDesigner } from '@epic-designer/hooks';
import { pluginManager } from '@epic-designer/manager';

const designer = useDesigner();
const pageSchema = designer.pageSchema;

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
          :class="{ hidden: schema.props?.hidden }"
          @mouseenter.stop="designer.setHoverNode(schema)"
          @mouseleave.stop="designer.setHoverNode(null)"
        >
          <span class="max-w-full truncate">
            <EpicIcon
              v-if="schema.props?.hidden"
              name="icon--epic--visibility-off-outline-rounded"
              class="translate-y-2px"
            />
            {{
              schema.label ??
              pluginManager.component.getConfigByType(schema.type)
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
