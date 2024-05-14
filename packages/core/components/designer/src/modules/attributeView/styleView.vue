<template>
  <div class="epic-style-view" :key="checkedNode?.id">
    <div v-for="item in componentStyles" :key="item.field">
      <div v-if="isShow(item)" class="epic-attr-item" :class="item.layout">
        <div class="epic-attr-label" :title="item.label">
          {{ item.label }}
        </div>
        <div class="epic-attr-input">
          <ENode
            :componentSchema="{ ...item, componentProps: { ...item.componentProps, ...(item.field === 'componentProps.defaultValue' ? checkedNode?.componentProps : {}), input: false, field: undefined, hidden: false }, show: true, noFormItem: true }"
            :model-value="getAttributeValue(item.field!, item.editData ?? checkedNode!)"
            @update:model-value="handleSetValue($event, item.field!, item, item.editData)" />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import ENode from '../../../../node/index'
import { Designer, ComponentSchema, PageSchema } from '../../../../../types/epic-designer'
import { revoke, getAttributeValue, setAttributeValue } from '@epic-designer/utils'

import { inject, computed, nextTick } from 'vue'
const designer = inject('designer') as Designer
const pageSchema = inject('pageSchema') as PageSchema

const componentStyles: ComponentSchema[] = [
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

function isShow(item: ComponentSchema) {
  // show属性为boolean类型则直接返回
  if (typeof item.show === 'boolean') {
    return item.show
  }
  return item.show?.({ values: checkedNode.value! }) ?? true
}


/**
 * 设置属性值
 */
function handleSetValue(value: any, field: string, item: ComponentSchema, editData = checkedNode.value) {
  if (typeof item.onChange === 'function') {
    item.onChange({ value, values: editData!, componentStyles })
  }
  // 判断是否同步修改属性值
  if (item.changeSync) {
    setAttributeValue(value, field, editData!)
  } else {
    nextTick(() => {
      setAttributeValue(value, field, editData!)
    })
  }
  // 将修改过的组件属性推入撤销操作的栈中
  revoke.push(pageSchema.schemas, '编辑组件属性')
}

</script>
