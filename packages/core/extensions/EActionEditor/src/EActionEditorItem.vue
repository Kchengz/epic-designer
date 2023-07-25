<template>
  <div v-for="item in itemEvents" :key="item.type" class="event-item">
    <div class="event-info">
      <div class="event-label" :title="item.describe">
        {{ item.describe }}
      </div>
      <div class="event-btn">
        <span class="iconfont icon-tianjia1" @click="handleOpen(item.type)" />
      </div>
    </div>
    <div class="epic-action-editor-main">
      <draggable v-model="props.events[item.type]" item-key="id" :component-data="{
        type: 'transition-group',
      }" group="option-list" handle=".handle" :animation="200">
        <template #item="{ element: action, index }">
          <div class="epic-editor-item">
            <div class="w-36px text-lg">
              <span class="iconfont icon-bianji2 mr-2 text-lg cursor-move handle"></span>
            </div>
            <div class="flex-1">
              <div v-if="action.type === 'component'">
                {{ getLabel(action.componentId) }}
              </div>
              <div v-else-if="action.type === 'public'">
                公共函数
              </div>
              <div v-else-if="action.type === 'custom'">
                自定义函数
              </div>
              {{ action.methodName }}
            </div>
            <div class="opr-box">
              <div class="edit-btn" @click="handleEdit(index, item.type, action)">
                <span class="iconfont icon-edit" />
              </div>
              <div class="del-btn" @click="handleDelete(index, item.type)">
                <span class="iconfont icon-shanchu" />
              </div>
            </div>
          </div>
        </template>
      </draggable>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { type PropType, inject } from 'vue'
import { findSchemaById } from '@epic-designer/utils'
import { PageSchema } from '../../../types/epic-designer'
import draggable from 'vuedraggable'

const props = defineProps({
  itemEvents: {
    type: Array as PropType<any>,
    default: () => []
  },
  allEvents: {
    type: Array as PropType<any>,
    default: () => []
  },
  modelValue: {
    type: Object as PropType<any>,
    default: () => []
  },
  events: {
    type: Object as PropType<any>,
    default: () => ({})
  }
})
const emit = defineEmits(['add', 'edit', 'update:modelValue'])

const pageSchema = inject('pageSchema') as PageSchema

/**
 * 打开动作配置窗口
 * @param type
 */
function handleOpen(type: string) {
  emit('add', type)
}

/**
 * 获取组件label
 * @param id
 */
function getLabel(id: string) {
  const { schema } = findSchemaById(pageSchema.schemas, id)
  return schema.label
}

/**
 * 删除
 * @param index
 */
function handleDelete(index: number, type: string) {
  const newEvents = getNewEvents(type)
  newEvents[type] = props.events[type].filter((_item: any, i: number) => index !== i)
  if (!newEvents[type]?.length) {
    delete newEvents[type]
  }
  emit('update:modelValue', newEvents)
}

/**
 * 修改事件
 * @param index
 * @param type
 * @param action
 */
function handleEdit(index: number, type: string, action: any) {
  emit('edit', index, type, action)
}

/**
 * 获取新的事件数据，过滤空数据
 * @param type
 */
function getNewEvents(type: string) {
  const newEvents: { [type: string]: any } = {}
  props.allEvents.forEach((item: any) => {
    if (!props.events[item.type].length) {
      return false
    }
    if (item.type === type) {
      return false
    }
    newEvents[item.type] = props.events[item.type]
  })
  return newEvents
}

</script>
