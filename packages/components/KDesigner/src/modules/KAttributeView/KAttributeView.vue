<template>
  <aside class="k-attribute-view">
    <div v-if="checkedNode">
      <div :key="item.field! + checkedNode.id" v-for="item in componentAttributes">
        <div v-show="isShow(item)" class="attr-item">
          <div class="attr-label" :title="item.label">
            {{ item.label }}
          </div>
          <div class="attr-input">
            <KNode
              :record="{ ...item, componentProps: { ...item.componentProps, ...(item.field === 'componentProps.defaultValue' ? checkedNode.componentProps : {}), show: true, hidden: false } }"
              :model-value="getAttrValue(item.field!)" @update:model-value="setAttrValue($event, item.field!)" />
          </div>
        </div>
      </div>

    </div>
  </aside>
</template>
<script lang="ts" setup>
// import KAttributeInput from './KAttributeInput.vue'
import KNode from '../../../../KNode/index'
import { Designer, NodeItem } from '../../../../../types/kDesigner'
import { pluginManager, revoke } from '../../../../../utils/index'
import { inject, computed, Ref } from 'vue'
const designer = inject('designer') as Designer
const schemas = inject('schemas') as Ref<NodeItem[]>

const componentConfings = pluginManager.getComponentConfings()
const checkedNode = computed(() => {
  return designer.state.checkedNode
})

function isShow (item: NodeItem) {
  // show属性为boolean类型则直接返回
  if (typeof item.show === 'boolean') {
    return item.show
  }
  return item.show?.({ values: checkedNode.value! }) ?? true
}

const componentAttributes = computed(() => {
  return componentConfings[designer.state.checkedNode?.type ?? '']?.config.attribute ?? []
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
