<template>
  <div class="epic-component-view flex flex-col">
    <!-- 搜素框 start -->
    <div class="search-box px-10px py-6px">
      <Input placeholder="请输入组件名称" v-model="keyword" v-model:value="keyword">
      <template #prefix>
        <EIcon name="icon-chaxun" />
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
        }" :clone="handleDeepCopyData" item-key="id" class="grid grid-cols-[auto_auto] px-10px gap-2">
          <template #item="{ element }">
            <div class="source-componet-item flex items-center truncate" @click="handleClick(element)">
              <EIcon :name="element.icon" />

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
import { ref, computed, inject } from 'vue'
import { getUUID, deepClone, findSchemaInfoById, pluginManager, mapSchemas, revoke } from '@epic-designer/utils'
import { NodeItem, PageSchema, Designer } from '../../../../../types/epic-designer'
import EIcon from '../../../../icon'
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
 * 深拷贝数据,防止重复引用
 * @param e
 * @param list
 */
function handleDeepCopyData(schema: NodeItem) {

  const [newSchema] = mapSchemas([deepClone(schema)], (item) => {
    // 补充id字段
    const newVal = {
      ...item,
      id: getUUID()
    }
    // 存在字段名，则自动在字段名后补充id
    if (newVal.field) {
      newVal.field += `_${newVal.id}`
    }
    return newVal
  })

  return newSchema
}

/**
 * 点击添加节点
 * @param e
 */
function handleClick(schema: NodeItem) {
  const data = findSchemaInfoById(pageSchema.schemas, designer.state.checkedNode?.id ?? 'root')
  if (!data) {
    return false
  }
  let { list, schema: checkedSchema, index } = data

  // 如果选中元素存在children字段，则添加到children中
  if (checkedSchema.children && !['row', 'tabs'].includes(checkedSchema.type)) {
    list = checkedSchema.children
    index = checkedSchema.children.length - 1
  }

  const newSchema = handleDeepCopyData(schema)


  list.splice(index + 1, 0, newSchema)
  designer.setCheckedNode(newSchema)
  revoke.push(pageSchema.schemas, '插入组件')
}
</script>
