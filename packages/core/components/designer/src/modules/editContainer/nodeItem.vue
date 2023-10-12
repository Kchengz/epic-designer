<template>
  <!-- 栅格布局、标签布局暂时不可拖拽设计 start -->
  <ENode v-if="props.schema?.childImmovable" :record="props.schema">
    <template #edit-node>
      <ENodeItem v-for="schema in props.schema.children" :key="schema.id" :schema="{
        ...schema,
        onClick: $event => setCheckedNode($event, schema),
        onMouseover: $event => setHoverNode($event, schema),
        mouseout: $event => setHoverNode($event, null)
      }" />
    </template>
  </ENode>
  <!-- 栅格布局、标签布局暂时不可拖拽设计 end -->
  <ENode v-else :record="props.schema">
    <template #edit-node>
      <KEditNodeItem v-if="props.schema.children" v-model:schemas="props.schema.children" />
    </template>
    <template v-for="(slotNodes, slotName) in getSlots()" #[`edit-${slotName}`]>
      <KEditNodeItem class="slot-draggable-range" v-model:schemas="getSlots()[slotName]" />
    </template>
  </ENode>
</template>
<script lang="ts" setup>
import ENode from '../../../../node'
import { NodeItem, Designer } from '../../../../../types/epic-designer'
import KEditNodeItem from './editNodeItem.vue'
import { useAttrs, provide, inject } from 'vue';

const attrs = useAttrs()
const designer = inject('designer') as Designer

provide("nodeAttrs", attrs)
defineOptions({
  name: 'ENodeItem'
})
const props = defineProps<{
  schema: NodeItem
  name?: string
}>()


// 获取插槽数据
function getSlots() {
  return props.schema.slots ?? {}
}

function setCheckedNode(e: Event, schema: NodeItem) {
  e.stopPropagation()
  designer.setCheckedNode(schema)
}

function setHoverNode(e: Event, schema: NodeItem | null) {
  e.stopPropagation()
  designer.setHoverNode(schema)
}



</script>
