<template>
  <div class="k-component-view">
    <div v-for="(item, index) in sourceSchema" :key="index">
      <div class="collapse-header">
        {{ item.title }}
      </div>
      <draggable v-model="item.list" v-bind="{
        group: { name: 'edit-draggable', pull: 'clone', put: false },
        sort: false,
        animation: 180,
        ghostClass: 'moving'
      }" item-key="id" :component-data="{ name: 'list' }" @end="handleDraggableEnd($event, item.list)">
        <template #item="{ element }">
          <div class="source-componet-item" @click="handleClick(element)">
            <span class="iconfont" :class="element.icon"></span> {{ element.label }}
          </div>
        </template>
      </draggable>
    </div>
  </div>
</template>
<script lang="ts" setup>
import draggable from 'vuedraggable'
import { ref, Ref, toRaw, inject } from 'vue'
import { getUUID, deepClone, findSchemaById, nodeSchema, revoke } from '../../../../../utils/index'
import { SchemaNodeGroupItem, NodeItem, Designer } from '../../../../../types/kDesigner'

const sourceSchema = ref<SchemaNodeGroupItem[]>([])
sourceSchema.value = nodeSchema.getSchemaByGroup()
const schemas = inject('schemas') as Ref<NodeItem[]>
const designer = inject('designer') as Designer

/**
 * 拖拽结束,深拷贝一次数据,防止重复引用
 * @param e
 * @param list
 */
function handleDraggableEnd (e: any, list: NodeItem[]) {
  list[e.oldIndex] = deepClone({
    ...toRaw(list[e.oldIndex]),
    id: getUUID()
  })
}

/**
 * 点击添加节点
 * @param e
 */
function handleClick (e: NodeItem) {
  const data = findSchemaById(schemas.value, designer.state.checkedNode?.id ?? 'root')
  if (!data) {
    console.warn('未查询到节点')
    return false
  }
  let { list, schema, index } = data

  // 如果选中元素存在children字段，则添加到children中
  if (schema.children && !['row', 'tabs'].includes(schema.type)) {
    list = schema.children
    index = schema.children.length - 1
  }

  const node = deepClone({
    ...toRaw(e),
    id: getUUID()
  })

  list.splice(index + 1, 0, node)
  designer.setCheckedNode(node)
  revoke.push(schemas.value, '插入组件')
}
</script>
