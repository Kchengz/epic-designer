<template>
  <draggable v-model="schemas" :group="firstNodeId === 'root' || 'edit-draggable'" item-key="id"
  @start="handleSelect($event.oldIndex);designer.setDisableHover(true)" @end="handleEnd()" @add="handleSelect($event.newIndex)" ghostClass="moveing"
    :component-data="{ name: 'draggable-range' }">
    <template #item="{ element, index }">
      <div class="item" :class="{
          checked: designer.state.checkedNode?.id === element.id,
          hover: designer.state.hoverNode?.id === element.id,
          'root-node': element.id === 'root'
        }"
        @click.stop="designer.setCheckedNode(element)"
        @mouseover.stop="designer.setHoverNode(element)"
        @mouseout.stop="designer.setHoverNode(null)">
        <div class="action-box" v-show="designer.state.checkedNode?.id === element.id">
          <div class="action-item">
            {{ nodeSchema.getSchemaByType(element.type)?.label }}
          </div>
          <div v-if="firstNodeId !== 'root'" title="复制" class="action-item" @click.stop="handleCopy(schemas!, element, index)">
            <span class="iconfont icon-fuzhi3"></span>
          </div>
          <div v-if="firstNodeId !== 'root'" title="删除" class="action-item" @click.stop="handleDelete(schemas!, element, index)">
            <span class="iconfont icon-shanchu1"></span>
          </div>
        </div>
        <KNode :record="element">
          <template #edit-node>
            <KEditNodeItem v-model:schemas="element.children" />
          </template>
        </KNode>
      </div>
    </template>
  </draggable>
</template>
<script lang="ts" setup>
import draggable from 'vuedraggable'
import { computed, watch, toRaw, PropType, inject, ref } from 'vue'
import { getUUID, deepClone, nodeSchema } from '../../../../../utils/index'
import KNode from '../../../../KNode'
import { NodeItem, Designer } from '../../../../../types/kDesigner'
const designer = inject('designer') as Designer

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

  designer.setCheckedNode(node)
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
}

</script>
