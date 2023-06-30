<template>
  <div
    v-for="item in itemEvents"
    :key="item.type"
    class="event-item"
  >
    <div class="event-info">
      <div
        class="event-label"
        :title="item.describe"
      >
        {{ item.describe }}
      </div>
      <div class="event-btn">
        <span
          class="iconfont icon-tianjia1"
          @click="handleOpen(item.type)"
        />
      </div>
    </div>

    <div class="k-action-editor-main">
      <div
        v-for="(action, index) in props.events[item.type]?.value"
        :key="index"
        class="k-editor-item"
      >
        {{ action.componentId && getLabel(action.componentId) }}
        {{ action.methodName }}
        <div class="opr-box">
          <div class="edit-btn">
            <span @click="handleEdit(index, item.type, action)"> <span class="iconfont icon-edit" /></span>
          </div>
          <div class="del-btn">
            <span @click="handleDelete(index, item.type)"> <span class="iconfont icon-shanchu" /></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { PropType, inject } from 'vue'
import { findSchemaById } from '../../../../index'
import { PageSchema } from '../../../../../types/kDesigner'

const props = defineProps({
  modelValue: {
    type: Object as PropType<any>,
    default: () => ({})
  },
  itemEvents: {
    type: Array as PropType<any>,
    default: () => []
  },
  allEvents: {
    type: Array as PropType<any>,
    default: () => []
  },
  events: {
    type: Object as PropType<any>,
    default: () => ({})
  }

})
const emit = defineEmits(['update:modelValue', 'add', 'edit'])
const pageSchema = inject('pageSchema') as PageSchema

/**
 * 打开动作配置窗口
 * @param type
 */
function handleOpen (type: string) {
  emit('add', type)
}

/**
 * 获取组件label
 * @param id
 */
function getLabel (id: string) {
  const { schema } = findSchemaById(pageSchema.schemas, id)
  return schema.label
}

/**
 * 删除
 * @param index
 */
function handleDelete (index: number, type: string) {
  const newEvents = getNewEvents(type)
  newEvents[type] = props.events[type].value.filter((item: any, i: number) => index !== i)
  newEvents[type].length ?? delete newEvents[type]
  emit('update:modelValue', newEvents)
}

/**
 * 修改事件
 * @param index
 * @param type
 * @param action
 */
function handleEdit (index:number, type:string, action:any) {
  emit('edit', index, type, action)
}

/**
 * 获取新的事件数据，过滤空数据
 * @param type
 */
function getNewEvents (type: string) {
  const newEvents: { [type: string]: any } = {}
  props.allEvents.forEach((item: any) => {
    if (!props.events[item.type].value.length) {
      return false
    }
    if (item.type === type) {
      return false
    }
    newEvents[item.type] = props.events[item.type].value
  })
  return newEvents
}

</script>
