<template>
  <KNode :record="props.element">
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

// const firstNodeId = ref('')

// const element = computed({
//   get () {
//     // 判断props.schemas是否存在值
//     return props.element
//   },
//   set (e) {
//     emit('update:element', e)
//   }
// })
onBeforeUpdate(() => { console.log('更新了22') })

</script>
