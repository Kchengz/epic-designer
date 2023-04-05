<template>
  <aside class="k-event-view">
    <div v-if="checkedNode">
      <KActionEditor :key="checkedNode.id" :eventList="eventList" :model-value="getAttrValue(`on`)"
        @update:model-value="setAttrValue($event, `on`)" />
    </div>
  </aside>
</template>
<script lang="ts" setup>
import { Designer, NodeItem } from '../../../../../types/kDesigner'
import { pluginManager, revoke } from '../../../../../utils/index'
import { inject, computed, Ref } from 'vue'
const schemas = inject('schemas') as Ref<NodeItem[]>
const designer = inject('designer') as Designer
const KActionEditor = pluginManager.getComponent('k-action-editor')

const componentConfings = pluginManager.getComponentConfings()
const checkedNode = computed(() => {
  return designer.state.checkedNode
})

const eventList = computed(() => {
  const eventList:any = [{
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

// onVnodeMounted

function getAttrValue (field: string) {
  let obj = checkedNode.value ?? {} as { [key: string]: any }
  const arr = field.split('.')
  for (const i in arr) {
    obj = obj[arr[i]] ?? null
    if (obj === null) {
      return obj
    }
  }

  return obj
}

function setAttrValue (value: any, field: string) {
  console.log(value, field)
  let obj = checkedNode.value ?? {} as { [key: string]: any }
  const arr = field.split('.')
  arr.forEach((item, index) => {
    if (index === (arr.length - 1)) {
      obj[item] = value
      return false
    }
    if (!obj[item]) {
      obj[item] = {}
    }
    obj = obj[item]
  })

  revoke.push(schemas.value, '编辑组件属性')
}

</script>
