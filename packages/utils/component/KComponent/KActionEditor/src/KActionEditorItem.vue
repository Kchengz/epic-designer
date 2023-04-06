<template>
  <div class="event-item" :key="item.type" v-for="item in itemEvents">
    <div class="event-info">
      <div class="event-label" :title="item.describe">
        {{ item.describe }}
      </div>
      <div class="event-btn">
        <span @click="handleOpen(item.type)" class="iconfont icon-tianjia1"></span>
      </div>
    </div>

    <div class="k-action-editor-main">
      <div class="k-editor-item" v-for="(action, index) in props.events[item.type]?.value" :key="index">
        {{ action.componentId && getLabel(action.componentId) }}
        {{ action.methodName }}
        <div class="del-btn">
          <span @click="handleDelete(index, item.type)"> <span class="iconfont icon-shanchu"></span></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { PropType, Ref, inject } from 'vue'
import { findSchemaById } from '../../../../index'
import { NodeItem } from '../../../../../types/kDesigner'

const props = defineProps({
  modelValue: {
    type: Object as PropType<any>,
    default: () => ({})
  },
  itemEvents: {
    type: Array as PropType<any>
  },
  allEvents: {
    type: Array as PropType<any>
  },
  events: {
    type: Object as PropType<any>
  }

})
const emit = defineEmits(['update:modelValue', 'add'])

const schemas = inject('schemas') as Ref<NodeItem[]>

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
  const { schema } = findSchemaById(schemas.value, id)
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
<style lang="less" scoped>
@primary-color: #13c2c2;

.k-editor-item {
  display: flex;
  align-items: center;
  padding-top: 6px;

  .del-btn {
    width: 50px;
    height: 100%;
    text-align: center;
    cursor: pointer;

    &:hover {
      color: #f22;
    }
  }

}

.add-btn {
  cursor: pointer;
  margin-top: 6px;
  color: @primary-color;
}
</style>
