<template>
  <draggable v-model="schemas" :group="firstNodeId === 'root' || 'edit-draggable'" item-key="id"
    @start="handleSelect($event.oldIndex); designer.setDisableHover(true)" @end="handleEnd()"
    @add="handleSelect($event.newIndex); handleAdd()" ghostClass="moveing" :component-data="{ name: 'draggable-range' }">
    <template #item="{ element, index }">
      <div class="item" :class="{
        checked: designer.state.checkedNode?.id === element.id,
        hover: designer.state.hoverNode?.id === element.id,
        'root-node': element.id === 'root'
      }" @click.stop="designer.setCheckedNode(element)" @mouseover.stop="designer.setHoverNode(element)"
        @mouseout.stop="designer.setHoverNode(null)">
        <div class="action-box" v-show="designer.state.checkedNode?.id === element.id">
          <div class="action-item">
            {{ pluginManager.getComponentConfingByType(element.type)?.defaultSchema.label }}
          </div>
          <div v-if="firstNodeId !== 'root'" title="复制" class="action-item"
            @click.stop="handleCopy(schemas!, element, index)">
            <span class="iconfont icon-fuzhi3"></span>
          </div>
          <div v-if="firstNodeId !== 'root'" title="删除" class="action-item"
            @click.stop="handleDelete(schemas!, element, index)">
            <span class="iconfont icon-shanchu1"></span>
          </div>
        </div>
        <KNodeItem :element="element" />
      </div>
    </template>
  </draggable>
</template>
<script lang="ts" setup>
import draggable from 'vuedraggable'
import { computed, watch, toRaw, PropType, inject, ref, Ref } from 'vue'
import { getUUID, deepClone, pluginManager, revoke } from '../../../../../utils/index'
import { NodeItem, Designer } from '../../../../../types/kDesigner'
import KNodeItem from './KNodeItem.vue'
const designer = inject('designer') as Designer
const globalSchemas = inject('schemas') as Ref<NodeItem[]>
const props = defineProps({
  schemas: {
    type: Array as PropType<NodeItem[]>
  }
})

const firstNodeId = ref('')

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

watch(schemas, (e) => {
  // 判断props.schemas是否存在值
  if (e?.length) {
    // 读取第一个节点id 如果节点id等于root 则判定该节点为根节点
    firstNodeId.value = e[0].id ?? ''
  }
}, {
  immediate: true
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
  revoke.push(globalSchemas.value, '拖拽组件')
}

function handleAdd () {
  revoke.push(globalSchemas.value, '插入组件')
}

/**
 * 复制选中节点元素
 * @param schemas
 * @param schema
 * @param index
 */
function handleCopy (schemas: NodeItem[], schema: NodeItem, index: number) {
  const node = deepClone({
    ...toRaw(schema),
    id: getUUID()
  })
  schemas.splice(index + 1, 0, node)
  const nodeArray = node.children ? [...node.children] : []
  // 存在子节点时，需要遍历修改子节点id
  while (nodeArray.length > 0) {
    const item = nodeArray.pop()
    item.id = getUUID()
    if (item.children?.length > 0) {
      nodeArray.push(...item.children)
    }
  }
  designer.setCheckedNode(node)

  revoke.push(globalSchemas.value, '复制组件')
}

/**
 * 删除元素
 * @param schemas
 * @param schema
 * @param index
 */
function handleDelete (schemas: NodeItem[], schema: NodeItem, index: number) {
  schemas = schemas.filter((item, i) => index !== i)
  emit('update:schemas', schemas)
  if (index === schemas.length) {
    index--
  }
  designer.setCheckedNode(schemas[index])
  revoke.push(globalSchemas.value, '删除组件')
}

</script>
