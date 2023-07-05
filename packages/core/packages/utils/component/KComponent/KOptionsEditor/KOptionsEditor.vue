<template>
  <div class="">
    <div class="py-4 my-2 text-center text-gray-400 bg-white" v-show="!modelValue?.length">暂无选项</div>
    <draggable v-model="modelValue" item-key="id" :component-data="{
      type: 'transition-group',
    }"
    handle=".handle"
    :animation="200"
   >
      <template #item="{ element, index }">
        <div class="option-item flex items-center mb-2">
          <span class="iconfont icon-bianji2 mr-2 text-lg cursor-move handle"></span>
          <Input style="flex: 2; padding: 0 2px" v-model="element.label"></Input>
          <Input style="flex: 2; padding: 0 2px" v-model="element.value"></Input>
          <!--      <span class="iconfont icon-tianjia1 mx-2 text-lg"></span>-->
          <span class="iconfont icon-shanchu1 text-lg ml-2 hover:text-red cursor-pointer"
            @click="handleRemove(index)"></span>
        </div>
      </template>
    </draggable>


    <Button @click="handleAdd">添加选项</Button>

  </div>
</template>

<script lang="ts" setup>
import draggable from 'vuedraggable'
import { pluginManager } from '@k-designer/utils'
const Input = pluginManager.getComponent('input')
const Button = pluginManager.getComponent('button')
const modelValue = defineModel<Option[]>('modelValue')
interface Option {
  label: string,
  value: string,
  children?: Option[]
}

/**
 *  添加选项
 */
function handleAdd() {
  const option: Option = {
    label: "",
    value: ""
  }
  modelValue.value?.push(option)
}

/**
 * 删除选项
 * @param index 
 */
function handleRemove(index: number) {
  modelValue.value?.splice(index, 1)
}
</script>

<style scoped></style>