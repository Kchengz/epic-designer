<template>
  <!-- 栅格布局、标签布局暂时不可拖拽设计 start -->
  <ENode
    v-if="['row', 'tabs'].includes(props.schema.type)"
    :record="props.schema"
  >
    <template #edit-node>
      <ENodeItem
        v-for="item in currentSchema.children"
        :key="item.id"
        :schema="item"
      />
    </template>
  </ENode>
  <!-- 栅格布局、标签布局暂时不可拖拽设计 end -->
  <ENode
    v-else
    :record="props.schema"
  >
    <template #edit-node>
      <KEditNodeItem
        v-if="currentSchema.children"
        v-model:schemas="currentSchema.children"
      />
    </template>
  </ENode>
</template>
<script lang="ts" setup>
import ENode from '../../../../node'
import { NodeItem } from '../../../../../types/epic-designer'
import KEditNodeItem from './editNodeItem.vue'
const props = defineProps<{
  schema: NodeItem
}>()

const currentSchema = props.schema as NodeItem

</script>
