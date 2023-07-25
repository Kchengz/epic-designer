<template>
  <Collapse v-model="activeNames" v-model:activeEey="activeNames" v-model:expanded-names="activeNames">
    <CollapseItem v-for="(item) in filterEventList" :key="item.title" :title="item.title" :header="item.title"
      :name="item.title">
      <EActionEditorItem v-model="modelValueComputed" :item-events="item.events" :all-events="allEvents" :events="events"
        @add="handleOpen" @edit="handleOpenEdit" />
    </CollapseItem>
  </Collapse>
  <EActionModal ref="EActionModalRef" @add="handleAdd" @edit="handleEdit" />
</template>
<script lang="ts" setup>
import { PropType, computed, ref, nextTick, toRaw, watch } from 'vue'
import EActionEditorItem from './src/EActionEditorItem.vue'
import { pluginManager } from '@epic-designer/utils'
import EActionModal from './src/EActionModal.vue'
const Collapse = pluginManager.getComponent('Collapse')
const CollapseItem = pluginManager.getComponent('CollapseItem')

const EActionModalRef = ref<any>(null)
let editIndex = 0
const props = defineProps({
  eventList: {
    type: Array as PropType<any>,
    default: () => []
  },
  modelValue:{
    type: Object as PropType<any>
  }
})

const emit = defineEmits(['update:modelValue'])
const modelValueComputed = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
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



const events = ref<any>({})

allEvents.value.forEach((item: any) => {

  events.value[item.type] = computed({
    get() {
      return modelValueComputed.value?.[item.type] ?? []
    },
    set(e) {
      if (e && e.length) {
        modelValueComputed.value[item.type] = e.map(item => toRaw(item))
      } else {
        // 事件动作为空时，则清除该事件列表
        delete modelValueComputed.value[item.type]
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
  EActionModalRef.value?.handleOpen()
  currentType = type
}

/**
 * 打开动作配置窗口-编辑
 * @param type
 */
function handleOpenEdit(index: number, type: string, action) {
  EActionModalRef.value?.handleOpenEdit(action)
  editIndex = index
  currentType = type
}

function handleEdit(action: any) {
  events.value[currentType][editIndex] = action
  modelValueComputed.value[currentType] = [...(events.value[currentType] ?? [])]
}

/**
 * 添加组件事件
 * @param action
 */
function handleAdd(action: any) {
  // const newEvents = getNewEvents(currentType)
  // newEvents[currentType] = [...(events.value[currentType] ?? []), action]
  // modelValueComputed.value = newEvents
  
  if (!modelValueComputed.value) {
    modelValueComputed.value = { [currentType]: [...(events.value[currentType] ?? []), action] }
    return
  }
  modelValueComputed.value[currentType] = [...(events.value[currentType] ?? []), action]
}

</script>
