<template>
  <Collapse v-model="activeNames" v-model:activeKey="activeNames" v-model:expanded-names="activeNames">
    <CollapseItem v-for="(item) in filterEventList" :key="item.title" :title="item.title" :header="item.title"
      :name="item.title">
      <KActionEditorItem v-model="modelValue" :item-events="item.events" :all-events="allEvents" :events="events"
        @add="handleOpen" @edit="handleOpenEdit" />
    </CollapseItem>
  </Collapse>
  <KActionModal ref="KActionModalRef" @add="handleAdd" @edit="handleEdit" />
</template>
<script lang="ts" setup>
import { PropType, computed, ref, nextTick, toRaw, watch } from 'vue'
import KActionEditorItem from './src/KActionEditorItem.vue'
import { pluginManager } from '@k-designer/utils'
import KActionModal from './src/KActionModal.vue'
const Collapse = pluginManager.getComponent('Collapse')
const CollapseItem = pluginManager.getComponent('CollapseItem')

const KActionModalRef = ref<any>(null)
let editIndex = 0
const props = defineProps({
  eventList: {
    type: Array as PropType<any>,
    default: () => []
  }
})

const modelValue = defineModel<any>("modelValue")
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



const events = ref<any>({})

allEvents.value.forEach((item: any) => {

  events.value[item.type] = computed({
    get() {
      return modelValue.value?.[item.type] ?? []
    },
    set(e) {
      if (e && e.length) {
        modelValue.value[item.type] = e.map(item => toRaw(item))
      } else {
        // 事件动作为空时，则清除该事件列表
        delete modelValue.value[item.type]
      }
    }
  })

})



let currentType: string = ''
/**
 * 打开动作配置窗口
 * @param type
 */
function handleOpen(type: string) {
  KActionModalRef.value?.handleOpen()
  currentType = type
}

/**
 * 打开动作配置窗口-编辑
 * @param type
 */
function handleOpenEdit(index: number, type: string, action) {
  KActionModalRef.value?.handleOpenEdit(action)
  editIndex = index
  currentType = type
}

function handleEdit(action: any) {
  events.value[currentType][editIndex] = action
  modelValue.value[currentType] = [...(events.value[currentType] ?? [])]
}

/**
 * 添加组件事件
 * @param action
 */
function handleAdd(action: any) {
  // const newEvents = getNewEvents(currentType)
  // newEvents[currentType] = [...(events.value[currentType] ?? []), action]
  // modelValue.value = newEvents
  if (!modelValue.value) {
    modelValue.value = { [currentType]: [...(events.value[currentType] ?? []), action] }
    return
  }
  modelValue.value[currentType] = [...(events.value[currentType] ?? []), action]
}

</script>
