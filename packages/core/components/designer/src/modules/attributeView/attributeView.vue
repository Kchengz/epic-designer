<template>
  <div class="epic-attribute-view" :key="checkedNode?.id">
    <div v-for="item in componentAttributes" :key="item.field">
      <div v-if="isShow(item)" class="epic-attr-item" :class="item.layout">
        <div class="epic-attr-label" :title="item.label">
          {{ item.label }}
        </div>
        <div class="epic-attr-input" :class="{ 'block!': item.layout === 'vertical' }">
          <ENode
            :componentSchema="{ ...item, componentProps: { ...item.componentProps, ...(item.field === 'componentProps.defaultValue' ? checkedNode?.componentProps : {}), input: false, field: undefined, hidden: false }, show: true, noFormItem: true }"
            :model-value="getValueByPath(item.editData ?? checkedNode!,item.field!)"
            @update:model-value="handleSetValue($event, item.field!, item, item.editData)" />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import ENode from '../../../../node/index'
import { Designer, ComponentSchema, PageSchema } from '../../../../../types/epic-designer'
import { pluginManager, getValueByPath, setValueByPath, type Revoke } from '@epic-designer/utils'
import { inject, computed, ref, watch, nextTick } from 'vue'
const designer = inject('designer') as Designer
const pageSchema = inject('pageSchema') as PageSchema
const revoke = inject('revoke') as Revoke

const componentConfings = pluginManager.getComponentConfings()
const checkedNode = computed(() => {
  return designer.state.checkedNode
})

function isShow(item: ComponentSchema) {
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

const componentAttributes = ref<ComponentSchema[]>([])
watch(() => designer.state.checkedNode?.type, () => {
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

  if (type === 'page') {
    componentAttributes.value.push(...[
      {
        label: '画布宽度',
        type: 'EInputSize',
        field: 'canvas.width',
        editData: pageSchema,
      },
      {
        label: '画布高度',
        type: 'EInputSize',
        field: 'canvas.height',
        editData: pageSchema,
      }
    ])
  }
}, {
  immediate: true
})

/**
 * 设置属性值
 */
function handleSetValue(value: any, field: string, item: ComponentSchema, editData = checkedNode.value) {
  if (typeof item.onChange === 'function') {
    item.onChange({ value, values: editData!, componentAttributes })
  }
  // 判断是否同步修改属性值
  if (item.changeSync) {
    setValueByPath( editData!,field,value)
  } else {
    nextTick(() => {
      setValueByPath( editData!,field,value)
    })
  }
  // 将修改过的组件属性推入撤销操作的栈中
  revoke.push(pageSchema.schemas, '编辑组件属性')
}

</script>
