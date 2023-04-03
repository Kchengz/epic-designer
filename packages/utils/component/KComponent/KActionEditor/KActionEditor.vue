<template>
  <div v-for="(item, index) in eventList" :key="index">
    <div>
      {{ item.title }}
    </div>
    <KActionEditorItem :itemEvents="item.events" :allEvents="allEvents" v-model="modelValue" />
  </div>
</template>
<script lang="ts" setup>
import { PropType, computed } from 'vue'
import KActionEditorItem from './KActionEditorItem.vue'
const props = defineProps({
  modelValue: {
    type: Object as PropType<any>,
    default: () => ({})
  },
  eventList: {
    type: Array as PropType<any>
  }
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
