<template>
  <aside class="k-right-sidebar">
    属性面板
    <div v-if="checkedNode">
      <div :key="item.attrIndex" v-for="item in componentAttr">
        <div>
          {{ item.label }}
        </div>
        <KAttributeInput :record="item" :model-value="getAttrValue(item.attrIndex)"
          :componentProps="item.attrIndex === 'componentProps.defaultValue' ? checkedNode.componentProps : {}"
          @update:model-value="setAttrValue($event, item.attrIndex)" />
      </div>

    </div>
  </aside>
</template>
<script lang="ts" setup>
import KAttributeInput from './KAttributeInput.vue'
import { Designer } from '../../../../../types/kDesigner'
import { pluginManager } from '../../../../../utils/index'
import { inject, computed } from 'vue'
const designer = inject('designer') as Designer

const componentAttrs = pluginManager.getComponentAttrs()

const checkedNode = computed(() => {
  return designer.state.checkedNode
})

const componentAttr = computed(() => {
  return componentAttrs[designer.state.checkedNode?.type || '']
})

function getAttrValue (attrIndex: string) {
  let obj = checkedNode.value || {} as { [key: string]: any }
  const arr = attrIndex.split('.')
  for (const i in arr) {
    obj = obj[arr[i]] || ''
  }
  return obj
}

function setAttrValue (value: any, attrIndex: string) {
  let obj = checkedNode.value || {} as { [key: string]: any }
  const arr = attrIndex.split('.')
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
}

</script>
