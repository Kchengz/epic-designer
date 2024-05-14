<template>
  <draggable v-model="modelSchemas" item-key="id" :component-data="{
    type: 'transition-group',
  }" class="epic-draggable-range" v-bind="{
  animation: 200,
  group: 'edit-draggable',
  handle: '.draggable-item',
  ghostClass: 'moveing'
}" @start="handleSelect($event.oldIndex)" @end="handleEnd()" @add="handleSelect($event.newIndex); handleAdd()">
    <template #item="{ element, index }">
      <div class="widget-box" :class="isDraggable(element)" :key="index">
        <ENodeItem :schema="element" />
      </div>
    </template>
  </draggable>
</template>
<script lang="ts" setup>
import draggable from 'vuedraggable'
import { computed, inject } from 'vue'
import { revoke, pluginManager } from '@epic-designer/utils'
import { ComponentSchema, PageSchema, Designer } from '../../../../../types/epic-designer'
import ENodeItem from './nodeItem.vue'


const designer = inject('designer') as Designer
const pageSchema = inject('pageSchema') as PageSchema
defineOptions({
  name: 'EditNodeItem'
})
const props = defineProps<{
  schemas: ComponentSchema[]
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
  designer.setDisableHover(true)
}

function handleEnd() {
  designer.setDisableHover()
  revoke.push(pageSchema.schemas, '拖拽组件')
}

function handleAdd() {
  revoke.push(pageSchema.schemas, '插入组件')
}


function isDraggable(schemas: ComponentSchema) {
  // 判断当前节点类型是否允许拖拽
  if (schemas.type === 'page' || pluginManager.getComponentConfingByType(schemas.type).immovable) {
    // 禁止拖拽
    return 'unmover-item'
  }

  return 'draggable-item'
}

</script>
