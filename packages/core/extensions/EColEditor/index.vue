<template>
  <div>
    <div v-for="(item, index) in colList" :key="index" class="EColEditor-item">
      <Number v-model:value="item.componentProps.span" v-model="item.componentProps.span" style="width:100%" :min="1"
        :max="24" />
      <div v-if="colList.length > 1" class="epic-del-btn">
        <span @click="handleDelete(index)">
          <EIcon name="icon-shanchu1" />
        </span>

      </div>
    </div>
    <div class="add-btn" @click="handleAdd">
      添加
    </div>
  </div>
</template>
<script lang="ts" setup>
import { pluginManager, getUUID } from '@epic-designer/utils'
import { ComponentSchema } from '../../types/epic-designer'
import { computed, PropType } from 'vue'
import EIcon from '../../components/icon'

const Number = pluginManager.getComponent('number')
const props = defineProps({
  modelValue: {
    type: Array as PropType<ComponentSchema[]>,
    default: () => []
  }
})

const emit = defineEmits(['update:modelValue'])
const colList = computed({
  get() {
    return props.modelValue
  },
  set(e) {
    emit('update:modelValue', e)
  }
})

/**
 * 新增栅格Col
 */
function handleAdd() {
  const colItem = {
    type: 'col',
    children: [],
    componentProps: {
      span: 12
    },
    id: getUUID()
  }
  colList.value.push(colItem)
}

/**
 * 删除栅格Col
 * @param index
 */
function handleDelete(index: number) {
  colList.value = colList.value.filter((item, i) => index !== i)
}

</script>
