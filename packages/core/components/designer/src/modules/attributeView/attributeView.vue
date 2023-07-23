<template>
  <aside class="epic-attribute-view">
    <div v-for="item in componentAttributes" :key="item.field! + checkedNode?.id">
      <div v-show="isShow(item)" class="attr-item" :class="item.layout">
        <div class="attr-label" :title="item.label">
          {{ item.label }}
        </div>
        <div class="attr-input">
          <ENode
            :record="{ ...item, componentProps: { ...item.componentProps, ...(item.field === 'componentProps.defaultValue' ? checkedNode?.componentProps : {}), hidden: false }, show: true, noFormItem: true }"
            :model-value="getAttributeValue(item.field!, checkedNode!)"
            @update:model-value="handleSetValue($event, item.field!, item)" />
        </div>
      </div>
    </div>
  </aside>
</template>
<script lang="ts" setup>
import ENode from '../../../../node/index'
import { Designer, NodeItem, PageSchema, FormDataModel } from '../../../../../types/epic-designer'
import { pluginManager, revoke, getAttributeValue, setAttributeValue } from '@epic-designer/utils'
import { inject, computed, ref, watch, reactive, nextTick, provide } from 'vue'
const designer = inject('designer') as Designer
const pageSchema = inject('pageSchema') as PageSchema

const formData = reactive<FormDataModel>({})

provide('formData', formData)

const componentConfings = pluginManager.getComponentConfings()
const checkedNode = computed(() => {
  return designer.state.checkedNode
})

function isShow(item: NodeItem) {
  // show属性为boolean类型则直接返回
  if (typeof item.show === 'boolean') {
    return item.show
  }

  // show属性为function类型则执行
  if (typeof item.show === 'function') {
    return item.show?.({ values: checkedNode.value! })
  }

  return true
}

const componentAttributes= ref<NodeItem[]>([])
watch(()=>designer.state.checkedNode?.type,()=>{
  const type = designer.state.checkedNode?.type
  if (!type) {
    return []
  }
  const attribute = componentConfings[type]?.config.attribute ?? []
  componentAttributes.value = [
    {
      label: '组件ID',
      type: 'input',
      field: 'id',
      componentProps: {
        disabled: true
      }
    },
    ...attribute
  ]
},{
  immediate:true
})
// const componentAttributes = computed(() => {
//   const type = designer.state.checkedNode?.type
//   if (!type) {
//     return []
//   }
//   const attribute = componentConfings[type]?.config.attribute ?? []
//   return [
//     {
//       label: '组件ID',
//       type: 'input',
//       field: 'id',
//       componentProps: {
//         disabled: true
//       }
//     },
//     ...attribute
//   ]
// })

/**
 * 设置属性值
 */
function handleSetValue(value: any, field: string, item: NodeItem) {
  if (typeof item.onChange === 'function') {
    item.onChange({ value, values: checkedNode.value!,componentAttributes })
  }
  // 判断是否同步修改属性值
if(item.changeSync){
  setAttributeValue(value, field, checkedNode.value!)
}else {
  nextTick(() => {
    setAttributeValue(value, field, checkedNode.value!)
  })
}
  // 将修改过的组件属性推入撤销操作的栈中
  revoke.push(pageSchema.schemas, '编辑组件属性')



}

</script>
