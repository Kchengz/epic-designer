<template>
  <div class="epic-component-view flex flex-col">
    <!-- 搜素框 start -->
    <div class="epic-search-box px-10px py-6px">
      <Input placeholder="搜索组件"  v-model="keyword" clearable allowClear v-model:value="keyword">
      <template #prefix>
        <EIcon name="icon-chaxun" />
      </template>
      </Input>
    </div>
    <!-- 搜素框 end -->
    <div class="flex flex-1 overflow-auto">
      <!-- 分类选项 start  -->
      <div class="epic-tabs-box">
        <div class="epic-tab cursor-pointer truncate" :class="{ checked: activeItem.title === item.title }"
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
        }" :clone="generateNewSchema" item-key="id" class="grid grid-cols-[auto_auto] px-10px gap-2">
          <template #item="{ element }">
            <div class="epic-componet-item flex items-center truncate" @click="handleClick(element)">
              <EIcon prefix="" :name="element.icon" />
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
import { generateNewSchema, findSchemaInfoById, pluginManager, revoke } from '@epic-designer/utils'
import { ComponentSchema, PageSchema, Designer } from '../../../../../types/epic-designer'
import EIcon from '../../../../icon'
const Input = pluginManager.getComponent('input')
const pageSchema = inject('pageSchema') as PageSchema
const designer = inject('designer') as Designer
const sourceSchema = pluginManager.getComponentSchemaGroups()
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
  let sourceSchemaList: ComponentSchema[] = activeItem.value.list
  if (activeItem.value.title === '全部') {
    const sourceSchemaAllList = sourceSchema.value.map(item => {
      return item.list
    })
    sourceSchemaList = ([] as ComponentSchema[]).concat(...sourceSchemaAllList)
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
 * 点击添加节点
 * @param e
 */
function handleClick(schema: ComponentSchema) {
  const data = findSchemaInfoById(pageSchema.schemas, designer.state.checkedNode?.id ?? 'root')
  if (!data) {
    return false
  }
  let { list, schema: checkedSchema, index } = data

  // 如果选中元素存在children字段，则添加到children中
  if (checkedSchema.children && !pluginManager.getComponentConfingByType(checkedSchema.type).childImmovable) {
    list = checkedSchema.children
    index = checkedSchema.children.length - 1
  }

  const newSchema = generateNewSchema(schema)

  list.splice(index + 1, 0, newSchema)
  designer.setCheckedNode(newSchema)
  revoke.push(pageSchema.schemas, '插入组件')
}
</script>
