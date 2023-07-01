<template>
  <Collapse
    v-model="activeNames"
    v-model:activeKey="activeNames"
  >
    <CollapseItem
      v-for="(item) in filterEventList"
      :key="item.title"
      :title="item.title"
      :header="item.title"
      :name="item.title"
    >
      <KActionEditorItem
        v-model="modelValue"
        :item-events="item.events"
        :all-events="allEvents"
        :events="events"
        @add="handleOpen"
        @edit="handleOpenEdit"
      />
    </CollapseItem>
  </Collapse>
  <KActionModal
    ref="KActionModalRef"
    @add="handleAdd"
    @edit="handleEdit"
  />
</template>
<script lang="ts" setup>
import { PropType, computed, ref, watch } from 'vue'
import KActionEditorItem from './src/KActionEditorItem.vue'
import { pluginManager } from '@k-designer/utils'
import KActionModal from './src/KActionModal.vue'
const Collapse = pluginManager.getComponent('Collapse')
const CollapseItem = pluginManager.getComponent('CollapseItem')

const KActionModalRef = ref<any>(null)
const props = defineProps({
  modelValue: {
    type: Object as PropType<any>,
    default: () => ({})
  },
  eventList: {
    type: Array as PropType<any>,
    default: () => []
  }
})
const activeNames = ref(['组件事件'])

// 过滤无事件
const filterEventList = computed(() => {
  return props.eventList.filter((item: { events: string | any[]; }) => item.events.length)
})
watch(() => filterEventList.value, (e) => {
  if (e.length) {
    activeNames.value = e[0].title
  }
}, {
  immediate: true
})

const allEvents = computed(() => {
  return props.eventList.map((item: { events: any; }) => item.events).flat()
})

const emit = defineEmits(['update:modelValue'])

const modelValue = computed({
  get () {
    return props.modelValue
  },
  set (e) {
    emit('update:modelValue', e)
  }
})

const events: any = {}
allEvents.value.forEach((item: any) => {
  events[item.type] = computed(() => {
    return props.modelValue?.[item.type] ?? []
  })
})

let currentType: string = ''
/**
 * 打开动作配置窗口
 * @param type
 */
function handleOpen (type: string) {
  KActionModalRef.value?.handleOpen()
  currentType = type
}

function handleOpenEdit (index:number, type:string, action) {
  KActionModalRef.value?.handleOpenEdit(index, action)
  currentType = type
}

function handleEdit (action: any) {
  // const newEvents = getNewEvents(currentType)
  events[currentType].value[action.index] = action
  console.log(action, events)
  // newEvents[currentType] = events[currentType]
  emit('update:modelValue', events)
}

/**
 * 添加组件事件
 * @param action
 */
function handleAdd (action: any) {
  const newEvents = getNewEvents(currentType)
  newEvents[currentType] = [...events[currentType]?.value, action]
  emit('update:modelValue', newEvents)
}

/**
 * 获取新的事件数据，过滤空数据
 * @param type
 */
function getNewEvents (type: string) {
  const newEvents: { [type: string]: any } = {}
  allEvents.value.forEach((item: any) => {
    if (!events[item.type]?.value?.length) {
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
