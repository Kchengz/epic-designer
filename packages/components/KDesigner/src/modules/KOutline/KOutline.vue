<template>
  <div class="k-outline">
    <KTree :options="schemas" v-model:selectedKeys="selectedKeys" :hoverKey="designer.state.hoverNode?.id">
      <template #tree-node="{ record }">
        <div class="text-padding" @mouseenter.stop="designer.setHoverNode(record)"
          @mouseleave.stop="designer.setHoverNode(null)"> {{
            pluginManager.getComponentConfingByType(record.type)?.defaultSchema.label }}</div>
      </template>
    </KTree>

  </div>
</template>
<script lang="ts" setup>
import KTree from '../../../../KTree'
import { Ref, inject, computed } from 'vue'
import { NodeItem, Designer } from '../../../../../types/kDesigner'
import { pluginManager } from '../../../../../utils/index'
const designer = inject('designer') as Designer
const schemas = inject('schemas') as Ref<NodeItem[]>

const selectedKeys = computed({
  get: () => {
    const id = designer.state.checkedNode?.id
    return id ? [id] : []
  },
  set: (e: any) => {
    designer.setCheckedNode(e.record)
  }
})

</script>
