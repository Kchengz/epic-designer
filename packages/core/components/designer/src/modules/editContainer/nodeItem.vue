<template>
  <!-- 栅格布局、标签布局暂时不可拖拽设计 start -->
  <ENode v-if="['row', 'tabs'].includes(props.schema?.type)" :record="props.schema">
    <template #edit-node>
      <ENodeItem v-for="item in props.schema.children" :key="item.id" :schema="item" />
    </template>
  </ENode>
  <!-- 栅格布局、标签布局暂时不可拖拽设计 end -->
  <ENode v-else :record="props.schema">
    <template #edit-node>
      <KEditNodeItem v-if="props.schema.children" v-model:schemas="props.schema.children" />
    </template>
    <!-- <template #edit-node>
      <KEditNodeItem v-if="props.schema.children" v-model:schemas="props.schema.children" />
    </template> -->
    <!-- <div v-if="props.schema.slots" v-for="(slotNodes, slotName) in (props.schema.slots ?? {})"> -->
    <!-- {{ slotName }} -->
    <template v-for="(slotNodes, slotName) in (props.schema.slots ?? {})" #[`edit-${slotName}`]>
      <KEditNodeItem v-model:schemas="props.schema.slots[slotName]" />
    </template>
    <!-- </div> -->

  </ENode>
</template>
<script lang="ts" setup>
import ENode from '../../../../node'
import { NodeItem } from '../../../../../types/epic-designer'
import KEditNodeItem from './editNodeItem.vue'
import { useAttrs, provide } from 'vue';
const attrs = useAttrs()
provide("nodeAttrs", attrs)
defineOptions({
  name: 'ENodeItem'
})
const props = defineProps<{
  schema: NodeItem
  name?: string
}>()



</script>
