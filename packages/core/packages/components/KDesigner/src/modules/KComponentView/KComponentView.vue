<template>
  <div class="k-component-view">
    <Collapse
      v-model="collapseActiveNames"
      v-model:activeKey="collapseActiveNames"
    >
      <CollapseItem
        v-for="(item) in sourceSchema"
        :key="item.title"
        :title="item.title"
        :header="item.title"
        :name="item.title"
      >
        <draggable
          v-model="item.list"
          v-bind="{
            group: { name: 'edit-draggable', pull: 'clone', put: false },
            sort: false,
            animation: 180,
            ghostClass: 'moving'
          }"
          item-key="id"
          :component-data="{ name: 'list' }"
          @end="handleDraggableEnd($event, item.list)"
        >
          <template #item="{ element }">
            <div
              class="source-componet-item"
              @click="handleClick(element)"
            >
              <span
                class="iconfont"
                :class="element.icon"
              /> {{ element.label }}
            </div>
          </template>
        </draggable>
      </CollapseItem>
    </Collapse>
  </div>
</template>
<script lang="ts" setup>
import draggable from 'vuedraggable'
import { ref, toRaw, inject } from 'vue'
import { getUUID, deepClone, findSchemaById, pluginManager, revoke } from '@k-designer/utils'
import { NodeItem, PageSchema, Designer } from '../../../../../types/kDesigner'
const Collapse = pluginManager.getComponent('Collapse')
const CollapseItem = pluginManager.getComponent('CollapseItem')
const sourceSchema = pluginManager.getSchemaByGroup()
const pageSchema = inject('pageSchema') as PageSchema
const designer = inject('designer') as Designer

// 默认展开所有面板
const collapseActiveNames = ref(sourceSchema.value.map(item => item.title))

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
  const data = findSchemaById(pageSchema.schemas, designer.state.checkedNode?.id ?? 'root')
  if (!data) {
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
  revoke.push(pageSchema.schemas, '插入组件')
}
</script>
