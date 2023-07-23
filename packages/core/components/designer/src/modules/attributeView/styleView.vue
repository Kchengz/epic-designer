<template>
  <aside class="epic-attribute-view">
    <div v-if="checkedNode">
      <div v-for="item in componentStyles" :key="item.field! + checkedNode.id">
        <div v-show="isShow(item)" class="attr-item">
          <div class="attr-label" :title="item.label">
            {{ item.label }}
          </div>
          <div class="attr-input">
            <ENode :record="{ ...item, componentProps: { ...item.componentProps }, show: true, noFormItem: true }"
              :model-value="getAttributeValue(item.field!, checkedNode!)"
              @update:model-value="handleSetValue($event, item.field!)" />
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>
<script lang="ts" setup>
import ENode from '../../../../node/index'
import { Designer, NodeItem, PageSchema } from '../../../../../types/epic-designer'
import { revoke, getAttributeValue, setAttributeValue } from '@epic-designer/utils'

import { inject, computed } from 'vue'
const designer = inject('designer') as Designer
const pageSchema = inject('pageSchema') as PageSchema

const componentStyles: NodeItem[] = [
  {
    label: '宽度',
    type: 'EInputSize',
    field: 'componentProps.style.width'
  },
  {
    label: '高度',
    type: 'EInputSize',
    field: 'componentProps.style.height'
  },
  {
    label: '内边距',
    type: 'EInputSize',
    field: 'componentProps.style.padding'
  },
  {
    label: '外边距',
    type: 'EInputSize',
    field: 'componentProps.style.margin'
  },
  {
    label: '背景色',
    type: 'color-picker',
    field: 'componentProps.style.backgroundColor',
    componentProps: {
      type: 'color',
      style: {
        // width: '60px'
      }
    }
  },
  {
    label: '字体颜色',
    type: 'color-picker',
    field: 'componentProps.style.color',
    componentProps: {
      type: 'color',
      style: {
        // width: '60px'
      }
    }
  }
]

const checkedNode = computed(() => {
  return designer.state.checkedNode
})

function isShow(item: NodeItem) {
  // show属性为boolean类型则直接返回
  if (typeof item.show === 'boolean') {
    return item.show
  }
  return item.show?.({ values: checkedNode.value! }) ?? true
}

/**
 * 设置属性值
 */
function handleSetValue(value: any, field: string) {
  setAttributeValue(value, field, checkedNode.value!)
  // 将修改过的组件属性推入撤销操作的栈中
  revoke.push(pageSchema.schemas, '编辑组件属性')
}
// function setAttrValue (value: any, field: string) {
//   let obj = checkedNode.value ?? {} as { [key: string]: any }
//   const arr = field.split('.')
//   arr.forEach((item, index) => {
//     if (index === (arr.length - 1)) {
//       obj[item] = value
//       return false
//     }
//     if (!obj[item]) {
//       obj[item] = {}
//     }
//     obj = obj[item]
//   })

//   revoke.push(pageSchema.schemas, '编辑组件属性')
// }

</script>
