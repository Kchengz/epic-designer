<template>
  <draggable
    v-model="schemas"
    item-key="id"
    ghost-class="moveing"
    :component-data="{ name: 'draggable-range' }"
    @start="handleSelect($event.oldIndex); designer.setDisableHover(true)"
    @end="handleEnd()"
    @add="handleSelect($event.newIndex); handleAdd()"
  >
    <template #item="{ element, index }">
      <div
        :index="index"
        @click.stop="designer.setCheckedNode(element)"
      >
        <KNodeItem :element="element" />
      </div>
    </template>
  </draggable>
</template>
<script lang="ts" setup>
import draggable from 'vuedraggable'
import { computed, watch, toRaw, PropType, inject, ref } from 'vue'
import { getUUID, deepClone, pluginManager, revoke } from '../../../../../utils/index'
import { NodeItem, PageSchema, Designer } from '../../../../../types/kDesigner'
import KNodeItem from './KNodeItem.vue'
const designer = inject('designer') as Designer
const pageSchema = inject('pageSchema') as PageSchema

const props = defineProps({
  schemas: {
    type: Array as PropType<NodeItem[]>,
    require: true,
    default: () => []
  }
})

const emit = defineEmits(['update:schemas'])
const schemas = computed({
  get () {
    // 判断props.schemas是否存在值
    return props.schemas
  },
  set (e) {
    emit('update:schemas', e)
  }
})

/**
 * 选中点击节点元素
 * @param index
 */
function handleSelect (index: number) {
  designer.setCheckedNode(schemas.value![index])
}

function handleEnd () {
  designer.setDisableHover()
  revoke.push(pageSchema.schemas, '拖拽组件')
}

function handleAdd () {
  revoke.push(pageSchema.schemas, '插入组件')
}
</script>
