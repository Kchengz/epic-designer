<template>
  <div>
    <div
      v-for="(item, index) in tabList"
      :key="index"
      class="EColEditor-item"
    >
      <Input
        v-model:value="item.label"
        v-model="item.label"
        style="width:100%"
      />
      <div
        v-if="tabList.length > 1"
        class="del-btn"
      >
        <span @click="handleDelete(index)"> <span class="iconfont icon-shanchu" /></span>
      </div>
    </div>
    <div
      class="add-btn"
      @click="handleAdd"
    >
      添加
    </div>
  </div>
</template>
<script lang="ts" setup>
import { pluginManager, getUUID } from '@epic-designer/utils'
import { NodeItem } from '../../types/epic-designer'
import { computed, PropType } from 'vue'

const Input = pluginManager.getComponent('input')
const props = defineProps({
  modelValue: {
    type: Array as PropType<NodeItem[]>,
    default: () => []
  }
})
const emit = defineEmits(['update:modelValue'])
const tabList = computed({
  get () {
    return props.modelValue
  },
  set (e) {
    emit('update:modelValue', e)
  }
})

/**
 * 新增栅格Col
 */
function handleAdd () {
  const tabItem = {
    label: '标签页',
    type: 'tab-pane',
    children: [],
    id: getUUID()
  }
  tabList.value.push(tabItem)
}

/**
 * 删除栅格Col
 * @param index
 */
function handleDelete (index: number) {
  tabList.value = tabList.value.filter((item, i) => index !== i)
}
</script>
