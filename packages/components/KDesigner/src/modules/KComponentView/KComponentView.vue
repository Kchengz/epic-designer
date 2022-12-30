<template>
    <div class="k-component-view">
        <div v-for="(item,index) in sourceSchema" :key="index">
            <div class="collapse-header">
                {{ item.title }}
            </div>
            <draggable v-model="item.list" v-bind="{
                    group: { name: 'edit-draggable', pull: 'clone', put: false },
                    sort: false,
                    animation: 180,
                    ghostClass: 'moving'
                    }"
                    item-key="id"
                    :component-data="{ name: 'list' }"
                    @end="handleDraggableEnd($event, item.list)">
                <template #item="{ element }">
                    <div class="source-componet-item" @click="handleClick(element)">
                        {{ element.label }}
                    </div>
                </template>
            </draggable>
        </div>
    </div>
</template>
<script lang="ts" setup>
import draggable from 'vuedraggable'
import { ref, toRaw, inject } from 'vue'
import { getUUID, deepClone, findSchemaById, nodeSchema } from '../../../../../utils/index'
import { SchemaNodeGroupItem, NodeItem, Designer } from '../../../../../types/kDesigner'

const sourceSchema = ref<SchemaNodeGroupItem[]>([])
sourceSchema.value = nodeSchema.getSchemaByGroup()
const schemas:any = inject('schemas')
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
  const { list } = data
  const schema = deepClone({
    ...toRaw(e),
    id: getUUID()
  })

  list.push(schema)
  designer.setCheckedNode(schema)
}
</script>
