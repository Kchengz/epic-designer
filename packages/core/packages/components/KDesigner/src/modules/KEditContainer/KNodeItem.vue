<template>
  <!-- 栅格布局、标签布局暂时不可拖拽设计 start -->
  <KNode
    v-if="['row', 'tabs'].includes(props.schema.type)"
    :record="props.schema"
  >
    <template #edit-node>
      <KNodeItem
        v-for="item in currentSchema.children"
        :key="item.id"
        :schema="item"
      />
    </template>
  </KNode>
  <!-- 栅格布局、标签布局暂时不可拖拽设计 end -->
  <KNode
    v-else
    :record="props.schema"
  >
    <template #edit-node>
      <KEditNodeItem
        v-if="currentSchema.children"
        v-model:schemas="currentSchema.children"
      />
    </template>
  </KNode>
</template>
<script lang="ts" setup>
import KNode from '../../../../KNode'
import { NodeItem } from '../../../../../types/kDesigner'
import KEditNodeItem from './KEditNodeItem.vue'
const props = defineProps<{
  schema: NodeItem
}>()

const currentSchema = props.schema as NodeItem

</script>
