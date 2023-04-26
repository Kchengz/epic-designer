<template>
  <!-- 栅格布局、标签布局暂时不可拖拽设计 start -->
  <KNode v-if="['row', 'tabs'].includes(props.element.type)" :record="props.element">
    <template #edit-node>
      <KNodeItem v-for="item in element.children" :key="item.id" :element="item" />
    </template>
  </KNode>
  <!-- 栅格布局、标签布局暂时不可拖拽设计 end -->
  <KNode v-else :record="props.element">
    <template #edit-node>
      <KEditNodeItem v-model:schemas="element.children" />
    </template>
  </KNode>
</template>
<script lang="ts" setup>
import { PropType, onBeforeUpdate } from 'vue'
import KNode from '../../../../KNode'
import { NodeItem } from '../../../../../types/kDesigner'
import KEditNodeItem from './KEditNodeItem.vue'
const props = defineProps({
  element: {
    type: Object as PropType<NodeItem>,
    required: true
  }
})

const element = props.element as NodeItem

onBeforeUpdate(() => { console.log('更新了22') })

</script>
