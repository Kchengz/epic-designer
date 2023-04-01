<template>
  <div class="k-action-editor-main">
    <div class="k-col-editor-item" v-for="(item, index) in actions" :key="index">
      {{  item.componentId && getLabel(item.componentId) }}
      {{ item.methodName }}
      <div class="del-btn">
        <span @click="handleDelete(index)"> <span class="iconfont icon-shanchu"></span></span>
      </div>
    </div>
    <div class="add-btn" @click="handleOpen">添加动作</div>
    <KActionModal ref="KActionModalRef" @add="handleAdd" />
  </div>
</template>
<script lang="ts" setup>
import { computed, PropType, ref, Ref, inject } from 'vue'
import KActionModal from './KActionModal.vue'
import { findSchemaById } from '../../../index'
import { NodeItem } from '../../../../types/kDesigner'
const schemas = inject('schemas') as Ref<NodeItem[]>

function getLabel (id:string) {
  const { schema } = findSchemaById(schemas.value, id)
  return schema.label
}

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

function handleOpen () {
  KActionModalRef.value?.handleOpen()
}

function handleAdd (action: any) {
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
