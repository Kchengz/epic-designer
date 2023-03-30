<template>
  <aside class="k-attribute-view">
    <div v-if="checkedNode">
      <div :key="item.type + checkedNode.id" v-for="item in componentEvents">
        <div class="">
          <div class="attr-label" :title="item.describe">
            {{ item.describe }}
          </div>
          <div class="attr-input">
            <KActionEditor :model-value="getAttrValue(`onEvent.${item.type}`)"
              @update:model-value="setAttrValue($event, `onEvent.${item.type}`)" />
          </div>
        </div>
      </div>

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

const componentEvents = computed(() => {
  return componentConfings[designer.state.checkedNode?.type ?? '']?.config.event ?? []
})

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
