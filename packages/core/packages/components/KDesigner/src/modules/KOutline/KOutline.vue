<template>
  <div class="k-outline">
    <KTree
      :options="pageSchema.schemas"
      :selected-keys="selectedKeys"
      :hover-key="designer.state.hoverNode?.id"
      @node-click="handleNodeClick"
    >
      <template #tree-node="{ record }">
        <div
          class="text-padding"
          @mouseenter.stop="designer.setHoverNode(record)"
          @mouseleave.stop="designer.setHoverNode(null)"
        >
          {{ record.label ??
            pluginManager.getComponentConfingByType(record.type)?.defaultSchema.label }}<span class="k-node-type-text">
            {{ record.type }}
          </span>
        </div>
      </template>
    </KTree>
  </div>
</template>
<script lang="ts" setup>
import KTree from '../../../../KTree'
import { inject, computed } from 'vue'
import { PageSchema, Designer } from '../../../../../types/kDesigner'
import { pluginManager } from '../../../../../utils/index'
const designer = inject('designer') as Designer
const pageSchema = inject('pageSchema') as PageSchema

// 计算选中节点值
const selectedKeys = computed(() => {
  const id = designer.state.checkedNode?.id
  return id ? [id] : []
})

// 设置选中节点
function handleNodeClick (e: any) {
  designer.setCheckedNode(e.record)
}

</script>
