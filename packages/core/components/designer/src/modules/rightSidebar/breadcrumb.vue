<template>
  <div class="epic-breadcrumb pl-4 py-2 truncate">
    <span v-for="(item, index) in designer.state.matched" :key="index">
      <span v-if="index > (designer.state.matched.length - 4)">
        <span v-if="designer.state.matched.length > 3 && index === (designer.state.matched.length - 3)">...</span>
        <span v-if="index !== 0" class="iconfont icon-zhankai m-1">
        </span>
        <span class="node-item cursor-pointer" @click="handleSelect(item)" @mouseenter.stop="designer.setHoverNode(item)"
          @mouseleave.stop="designer.setHoverNode(null)">
          {{ item.label ?? pluginManager.getComponentConfingByType(item.type)?.defaultSchema.label }}
        </span>
      </span>

    </span>
  </div>
</template>
<script lang="ts" setup>
import { inject } from 'vue'
import { Designer, NodeItem } from '../../../../../types/epic-designer'
import { pluginManager } from '@epic-designer/utils'
const designer = inject('designer') as Designer
/**
 * 选中点击节点元素
 * @param schema
 */
function handleSelect(schema: NodeItem) {
  designer.setCheckedNode(schema)
}

</script>
