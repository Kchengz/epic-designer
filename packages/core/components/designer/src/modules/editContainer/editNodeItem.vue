<template>
  <draggable v-model="modelSchemas" item-key="id" 
  :component-data="{
    name: 'draggable-range',
    type: 'transition-group',
  }"
  class="draggable-range"
   v-bind="{
  animation: 200,
  group: 'edit-draggable',
  ghostClass: 'moveing'
}"
 @start="handleSelect($event.oldIndex); designer.setDisableHover(true)" @end="handleEnd()"
    @add="handleSelect($event.newIndex); handleAdd()">
    <template #item="{ element, index }">
      <div :index="index" @click.stop="designer.setCheckedNode(element)" @mouseover.stop="designer.setHoverNode(element)"
        @mouseout.stop="designer.setHoverNode(null)">
        <ENodeItem :schema="element" />
      </div>
    </template>
  </draggable>
</template>
<script lang="ts" setup>
import draggable from 'vuedraggable'
import { computed, inject } from 'vue'
import { revoke } from '@epic-designer/utils'
import { NodeItem, PageSchema, Designer } from '../../../../../types/epic-designer'
import ENodeItem from './nodeItem.vue'
const designer = inject('designer') as Designer
const pageSchema = inject('pageSchema') as PageSchema

const props = defineProps<{
  schemas: NodeItem[]
}>()

const emit = defineEmits(['update:schemas'])
const modelSchemas = computed({
  get() {
    // 判断props.schemas是否存在值
    return props.schemas
  },
  set(e) {
    emit('update:schemas', e)
  }
})

/**
 * 选中点击节点元素
 * @param index
 */
function handleSelect(index: number) {
  designer.setCheckedNode(modelSchemas.value![index])
}

function handleEnd() {
  designer.setDisableHover()
  revoke.push(pageSchema.schemas, '拖拽组件')
}

function handleAdd() {
  revoke.push(pageSchema.schemas, '插入组件')
}
</script>
