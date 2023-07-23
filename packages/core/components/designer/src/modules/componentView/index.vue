<template>
  <div class="epic-component-view flex flex-col">
    <!-- 搜素框 start -->
    <div class="search-box px-10px pr-14px py-6px">
      <Input placeholder="请输入组件名称" v-model="keyword" v-model:value="keyword">
      <template #prefix>
        <span class="iconfont icon-yulan" />
      </template>
      </Input>
    </div>
    <!-- 搜素框 end -->
    <div class="flex flex-1 overflow-auto">
      <!-- 分类选项 start  -->
      <div class="tabs-box">
        <div class="tab cursor-pointer truncate" :class="{ checked: activeItem.title === item.title }"
          v-for="(item, index) in getSchemaTypeList" :key="index" :title="item.title" @click="handelChecked(item)">
          {{ item.title }}
        </div>
      </div>
      <!-- 分类选项 end  -->

      <div class="h-full flex-1 overflow-auto py-2 box-border">
        <draggable v-model="getSourceSchemaList" v-bind="{
          group: { name: 'edit-draggable', pull: 'clone', put: false },
          sort: false,
          animation: 180,
          ghostClass: 'moving'
        }" item-key="id" class="grid grid-cols-[auto_auto] px-10px gap-2" @end="handleDraggableEnd($event)">
          <template #item="{ element }">
            <div class="source-componet-item flex items-center truncate" @click="handleClick(element)">
              <span class="iconfont" :class="element.icon" />
              <div>{{ element.label }}</div>
            </div>
          </template>
        </draggable>
        <div v-show="!getSourceSchemaList.length" class="text-center pt-42px text-gray-400">没有查询到的组件</div>
      </div>

    </div>

  </div>
</template>
<script lang="ts" setup>
import draggable from 'vuedraggable'
import { ref, toRaw, computed, inject } from 'vue'
import { getUUID, deepClone, findSchemaById, pluginManager, revoke } from '@epic-designer/utils'
import { NodeItem, PageSchema, Designer } from '../../../../../types/epic-designer'
const Input = pluginManager.getComponent('input')
const pageSchema = inject('pageSchema') as PageSchema
const designer = inject('designer') as Designer
const sourceSchema = pluginManager.getSchemaByGroup()
const keyword = ref("")
const allSchema = {
  title: '全部',
  list: []
}
const activeItem = ref(allSchema)

/**
 * 计算组件分类列表
 */
const getSchemaTypeList = computed(() => {
  return [
    allSchema,
    ...sourceSchema.value
  ]
})

/**
 * 计算当前需要展示的组件列表
 */
const getSourceSchemaList = computed(() => {
  let sourceSchemaList: NodeItem[] = activeItem.value.list
  if (activeItem.value.title === '全部') {
    const sourceSchemaAllList = sourceSchema.value.map(item => {
      return item.list
    })
    sourceSchemaList = ([] as NodeItem[]).concat(...sourceSchemaAllList)
  }

  if (keyword.value) {
    return sourceSchemaList.filter(item => item.label?.includes(keyword.value))
  }

  return sourceSchemaList
})


function handelChecked(item) {
  activeItem.value = item
}


/**
 * 拖拽结束,深拷贝一次数据,防止重复引用
 * @param e
 * @param list
 */
function handleDraggableEnd(e: any) {
  getSourceSchemaList.value[e.oldIndex] = deepClone({
    ...toRaw(getSourceSchemaList.value[e.oldIndex]),
    id: getUUID()
  })
}

/**
 * 点击添加节点
 * @param e
 */
function handleClick(e: NodeItem) {
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
