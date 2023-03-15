<template>
  <div>
    <div class="k-col-editor-item" v-for="(item, index) in tabList" :key="index">
      <Input style="width:100%" v-model:value="item.label" v-model="item.label" />
      <div class="del-btn" v-if="tabList.length > 1">
        <span @click="handleDelete(index)"> <span class="iconfont icon-shanchu"></span></span>
      </div>
    </div>
    <div class="add-btn" @click="handleAdd">添加</div>
  </div>
</template>
<script lang="ts" setup>
import { pluginManager, getUUID } from '../../../index'
import { NodeItem } from '../../../../types/kDesigner'
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
<style lang="less" scoped>
@primary-color: #13c2c2;

.k-col-editor-item {
  display: flex;
  align-items: center;
  padding-top: 6px;

  .del-btn {
    width: 50px;
    height: 100%;
    text-align: center;
    cursor: pointer;

    &:hover {
      color: #f22;
    }
  }

}

.add-btn {
  cursor: pointer;
  margin-top: 6px;
  color: @primary-color;
}
</style>
