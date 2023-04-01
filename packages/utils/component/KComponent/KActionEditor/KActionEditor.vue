<template>
  <div :key="item.type" v-for="item in componentEvents">
    <div class="">
      <div class="attr-label" :title="item.describe">
        {{ item.describe }}
      </div>
      <div class="attr-input">
        <div class="k-action-editor-main">
          <div class="k-col-editor-item" v-for="(action, index) in events[item.type].value" :key="index">
            {{ action.componentId && getLabel(action.componentId) }}
            {{ action.methodName }}
            <div class="del-btn">
              <span @click="handleDelete(index, item.type)"> <span class="iconfont icon-shanchu"></span></span>
            </div>
          </div>
          <div class="add-btn" @click="handleOpen(item.type)">添加动作</div>
        </div>
      </div>
    </div>
  </div>
  <KActionModal ref="KActionModalRef" @add="handleAdd" />
</template>
<script lang="ts" setup>
import { PropType, computed, ref, Ref, inject } from 'vue'
import KActionModal from './KActionModal.vue'
import { findSchemaById } from '../../../index'
import { NodeItem } from '../../../../types/kDesigner'
const schemas = inject('schemas') as Ref<NodeItem[]>

function getLabel (id: string) {
  const { schema } = findSchemaById(schemas.value, id)
  return schema.label
}

const KActionModalRef = ref<any>(null)
let currentType: string = ''
const props = defineProps({
  modelValue: {
    type: Object as PropType<any>,
    default: () => ({})
  },
  componentEvents: {
    type: Array as PropType<any>
  }
})

const emit = defineEmits(['update:modelValue'])

const events: any = {}

props.componentEvents.forEach((item: any) => {
  events[item.type] = computed(() => {
    return props.modelValue?.[item.type] ?? []
  })
})

function handleOpen (type: string) {
  KActionModalRef.value?.handleOpen()
  currentType = type
}

function handleAdd (action: any) {
  const newEvents = getNewEvents(currentType)

  newEvents[currentType] = [...events[currentType].value, action]

  emit('update:modelValue', newEvents)
}

/**
 * 删除栅格Col
 * @param index
 */
function handleDelete (index: number, type: string) {
  const newEvents = getNewEvents(type)
  newEvents[type] = events[type].value.filter((item: any, i: number) => index !== i)
  newEvents[type].length ?? delete newEvents[type]
  emit('update:modelValue', newEvents)
}

/**
 * 获取新的事件数据
 * @param type
 */
function getNewEvents (type: string) {
  const newEvents: { [type: string]: any } = {}

  props.componentEvents.forEach((item: any) => {
    if (!events[item.type].value.length) {
      return false
    }
    if (item.type === type) {
      return false
    }
    newEvents[item.type] = events[item.type].value
  })
  return newEvents
}

</script>
<style lang="less" scoped>
@primary-color: #13c2c2;

.k-col-editor-item {
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
