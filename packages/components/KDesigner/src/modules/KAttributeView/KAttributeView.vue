<template>
  <aside class="k-attribute-view">
    <div v-if="checkedNode">
      <div :key="item.attrIndex + checkedNode.id" v-for="item in componentAttr">
        <div v-show="item.show?.(checkedNode) ?? true" class="attr-item">
          <div class="attr-label" :title="item.label">
            {{ item.label }}
          </div>
          <div class="attr-input">
            <KAttributeInput :record="item" :model-value="getAttrValue(item.attrIndex)"
              :componentProps="item.attrIndex === 'componentProps.defaultValue' ? checkedNode.componentProps : {}"
              @update:model-value="setAttrValue($event, item.attrIndex)" />
          </div>

        </div>
      </div>

    </div>
  </aside>
</template>
<script lang="ts" setup>
import KAttributeInput from './KAttributeInput.vue'
import { Designer, NodeItem } from '../../../../../types/kDesigner'
import { pluginManager, revoke } from '../../../../../utils/index'
import { inject, computed, Ref } from 'vue'
const designer = inject('designer') as Designer
const schemas = inject('schemas') as Ref<NodeItem[]>

const componentAttrs = pluginManager.getComponentConfings()

const checkedNode = computed(() => {
  return designer.state.checkedNode
})

const componentAttr = computed(() => {
  return componentAttrs[designer.state.checkedNode?.type ?? '']?.config.attribute ?? []
})

function getAttrValue (attrIndex: string) {
  let obj = checkedNode.value ?? {} as { [key: string]: any }
  const arr = attrIndex.split('.')
  for (const i in arr) {
    obj = obj[arr[i]] ?? null
    if (obj === null) {
      return obj
    }
  }
  return obj
}

function setAttrValue (value: any, attrIndex: string) {
  let obj = checkedNode.value ?? {} as { [key: string]: any }
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

  revoke.push(schemas.value, '编辑组件属性')
}

</script>
