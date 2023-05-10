<template>
  <aside class="k-event-view">
    <div v-if="checkedNode">
      <KActionEditor
        :event-list="eventList"
        :model-value="getAttributeValue(`on`, checkedNode!)"
        @update:model-value="handleSetValue($event, `on`)"
      />
    </div>
  </aside>
</template>
<script lang="ts" setup>
import { Designer, NodeItem } from '../../../../../types/kDesigner'
import { pluginManager, revoke, getAttributeValue, setAttributeValue } from '../../../../../utils/index'
import { inject, computed, Ref } from 'vue'
const schemas = inject('schemas') as Ref<NodeItem[]>
const designer = inject('designer') as Designer
const KActionEditor = pluginManager.getComponent('KActionEditor')

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
  revoke.push(schemas.value, '编辑组件属性')
}
</script>
