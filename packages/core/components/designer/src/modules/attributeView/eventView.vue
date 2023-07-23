<template>
  <aside class="epic-event-view">
    <div v-if="checkedNode">
      <EActionEditor
        :key="checkedNode.id"
        :event-list="eventList"
        :model-value="getAttributeValue(`on`, checkedNode!)"
        @update:model-value="handleSetValue($event, `on`)"
      />
    </div>
  </aside>
</template>
<script lang="ts" setup>
import { Designer, PageSchema } from '../../../../../types/epic-designer'
import { pluginManager, revoke, getAttributeValue, setAttributeValue } from '@epic-designer/utils'
import { inject, computed } from 'vue'
const pageSchema = inject('pageSchema') as PageSchema
const designer = inject('designer') as Designer
const EActionEditor = pluginManager.getComponent('EActionEditor')

const componentConfings = pluginManager.getComponentConfings()
const checkedNode = computed(() => {
  return designer.state.checkedNode
})

const eventList = computed(() => {
  const eventList: any = [{
    title: '生命周期',
    events: [
      {
        type: 'vnodeBeforeMount',
        describe: 'beforeMount'
      },
      {
        type: 'vnodeMounted',
        describe: 'mounted'
      },
      {
        type: 'vnodeBeforeUpdate',
        describe: 'beforeUpdate'
      },
      {
        type: 'vnodeUpdated',
        describe: 'updated'
      },
      {
        type: 'vnodeBeforeUnmount',
        describe: 'beforeUnmount'
      },
      {
        type: 'vnodeUnmounted',
        describe: 'unmounted'
      },
      {
        type: 'vnodeErrorCaptured',
        describe: 'errorCaptured'
      }
    ]
  }]
  const events = componentConfings[designer.state.checkedNode?.type ?? '']?.config.event ?? []
  eventList.unshift({
    title: '组件事件',
    events
  })
  return eventList
})

/**
 * 设置属性值
 */
function handleSetValue (value: any, field: string) {
  setAttributeValue(value, field, checkedNode.value!)
  // 将修改过的组件属性推入撤销操作的栈中
  revoke.push(pageSchema.schemas, '编辑组件属性')
}
</script>
