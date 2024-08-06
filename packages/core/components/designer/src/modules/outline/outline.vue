<template>
  <div class="epic-outline">
    <ETree
      :options="pageSchema.schemas"
      draggable
      :selected-keys="selectedKeys"
      :hover-key="designer.state.hoverNode?.id"
      @nodeClick="handleNodeClick"
    >
      <template #tree-node="{ schema }">
        <div
          class="epic-text-padding flex"
          @mouseenter.stop="designer.setHoverNode(schema)"
          @mouseleave.stop="designer.setHoverNode(null)"
        >
          <span class="max-w-full truncate">
            {{
              schema.label ??
              pluginManager.getComponentConfingByType(schema.type)?.defaultSchema.label
            }}
          </span>
          <span class="epic-node-type-text flex-1 w-0 truncate">
            {{ schema.id }}
          </span>
        </div>
      </template>
    </ETree>
  </div>
</template>
<script lang="ts" setup>
import ETree from "../../../../tree";
import { inject, computed } from "vue";
import { PageSchema, Designer } from "../../../../../types/epic-designer";
import { pluginManager } from "@epic-designer/utils";

const designer = inject("designer") as Designer;
const pageSchema = inject("pageSchema") as PageSchema;

// 计算选中节点值
const selectedKeys = computed(() => {
  const id = designer.state.checkedNode?.id;
  return id ? [id] : [];
});

// 设置选中节点
function handleNodeClick(e: any) {
  designer.setCheckedNode(e.componentSchema);
}
</script>
