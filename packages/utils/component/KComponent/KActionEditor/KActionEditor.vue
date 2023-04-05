<template>
  <Collapse v-model="activeNames">
    <CollapseItem :title="item.title" :name="item.title" v-for="(item, index) in filterEventList" :key="index">
      <KActionEditorItem :itemEvents="item.events" :allEvents="allEvents" v-model="modelValue" />
    </CollapseItem>
  </Collapse>
</template>
<script lang="ts" setup>
import { PropType, computed, ref, watch } from 'vue'
import KActionEditorItem from './KActionEditorItem.vue'
import { pluginManager } from '../../../index'
const Collapse = pluginManager.getComponent('Collapse')
const CollapseItem = pluginManager.getComponent('CollapseItem')

const props = defineProps({
  modelValue: {
    type: Object as PropType<any>,
    default: () => ({})
  },
  eventList: {
    type: Array as PropType<any>
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

</script>
