<template>
  <div class="epic-breadcrumb pl-4 py-2 truncate">
    <span v-for="(item, index) in designer.state.matched" :key="index">
      <span v-if="index > (designer.state.matched.length - 4)">
        <span v-if="designer.state.matched.length > 3 && index === (designer.state.matched.length - 3)">...</span>
        <EIcon v-if="index !== 0" class="m-1" name="icon-zhankai" />
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
import { Designer, ComponentSchema } from '../../../../../types/epic-designer'
import EIcon from '../../../../icon'
import { pluginManager } from '@epic-designer/utils'
const designer = inject('designer') as Designer
/**
 * 选中点击节点元素
 * @param schema
 */
function handleSelect(schema: ComponentSchema) {
  designer.setCheckedNode(schema)
}

</script>
