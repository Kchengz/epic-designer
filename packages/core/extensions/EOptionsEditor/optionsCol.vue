<template>
  <draggable v-model="modelValueComputed" item-key="id" :component-data="{
    type: 'transition-group',
  }" group="option-list" handle=".handle" :animation="200">
    <template #item="{ element: option, index }">
      <div>
        <div :class="tree ? 'grid-cols-[16px_auto_auto_16px_16px]' : 'grid-cols-[16px_auto_auto_16px]'" class="option-item grid gap-2 items-center mb-2">
          <span class="iconfont icon-bianji2 mr-2 text-lg cursor-move handle"></span>
          <Input v-model="option.label" v-model:value="option.label" placeholder="请输入"></Input>
          <Input v-model="option.value" v-model:value="option.value" placeholder="请输入"></Input>
          <span v-if="tree" class="iconfont icon-tianjia1 text-lg" @click="handleAddChildren(option)"></span>
          <span class="iconfont icon-shanchu1 text-lg hover:text-red cursor-pointer" @click="handleRemove(index)"></span>
        </div>
        <div class="pl-4" v-if="option.children">
          <KOptionsCol v-model="option.children" />
        </div>
      </div>
    </template>
  </draggable>
</template>

<script lang="ts" setup>
import draggable from 'vuedraggable'
import { pluginManager } from '@epic-designer/utils'
import { inject,computed } from 'vue';
interface Option {
  label: string,
  value: string,
  children?: Option[]
}

defineOptions({
  name: 'KOptionsCol'
})

const props = defineProps<{
  modelValue: Option[],
}>()
const Input = pluginManager.getComponent('input')
const tree = inject('tree',false)
const emit = defineEmits(['update:modelValue'])
const modelValueComputed = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})


/**
 *  添加选项子选项
 */
function handleAddChildren(option: Option) {
  const childrenOption: Option = {
    label: "",
    value: ""
  }

  if (option.children) {
    option.children.push(childrenOption)
  } else {
    option.children = [childrenOption]
  }
}

/**
 * 删除选项
 * @param index 
 */
function handleRemove(index: number) {
  modelValueComputed.value?.splice(index, 1)
}
</script>
