<template>
  <div>
    <div class="k-col-editor-item" v-for="(item, index) in actions" :key="index">
      <Input style="width:100%" v-model:value="item.componentId" v-model="item.componentId" placeholder="组件id" />
      <Input style="width:100%" v-model:value="item.methodName" v-model="item.methodName" placeholder="函数名称" />
      <div class="del-btn">
        <span @click="handleDelete(index)"> <span class="iconfont icon-shanchu"></span></span>
      </div>
    </div>
    <div class="add-btn" @click="handleAdd">添加动作</div>
    <KActionModal ref="KActionModalRef" />
  </div>
</template>
<script lang="ts" setup>
import { pluginManager } from '../../../index'
import { computed, PropType, ref } from 'vue'
import KActionModal from './KActionModal.vue'
const Input = pluginManager.getComponent('input')
const KActionModalRef = ref<any>(null)
const props = defineProps({
  modelValue: {
    type: Array as PropType<any>,
    default: () => []
  }
})

const emit = defineEmits(['update:modelValue'])
const actions = computed(() => {
  return props.modelValue ?? []
})

/**
 * 新增栅格Col
 */
function handleAdd () {
  KActionModalRef.value?.handleOpen()

  const action = {
  }

  actions.value.push(action)
  emit('update:modelValue', actions.value)
}

/**
 * 删除栅格Col
 * @param index
 */
function handleDelete (index: number) {
  const newData = actions.value.filter((item: any, i: number) => index !== i)
  emit('update:modelValue', newData)
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
