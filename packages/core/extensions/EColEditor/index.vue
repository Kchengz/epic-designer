<script lang="ts" setup>
import { computed, PropType } from 'vue';

import { getUUID, pluginManager } from '@epic-designer/utils';

import EIcon from '../../components/icon';
import { ComponentSchema } from '../../types/epic-designer';

const props = defineProps({
  modelValue: {
    default: () => [],
    type: Array as PropType<ComponentSchema[]>,
  },
});
const emit = defineEmits(['update:modelValue']);
const Number = pluginManager.getComponent('number');
const colList = computed({
  get() {
    return props.modelValue;
  },
  set(e) {
    emit('update:modelValue', e);
  },
});

/**
 * 新增栅格Col
 */
function handleAdd() {
  const colItem = {
    componentProps: {
      span: 12,
    },
    id: getUUID(),
    type: 'col',
    children: [],
  };
  colList.value.push(colItem);
}

/**
 * 删除栅格Col
 * @param index
 */
function handleDelete(index: number) {
  colList.value = colList.value.filter((item, i) => index !== i);
}
</script>
<template>
  <div>
    <div v-for="(item, index) in colList" :key="index" class="EColEditor-item">
      <Number
        v-model:value="item.componentProps.span"
        v-model="item.componentProps.span"
        style="width: 100%"
        :min="1"
        :max="24"
      />
      <div v-if="colList.length > 1" class="epic-del-btn">
        <span @click="handleDelete(index)">
          <EIcon name="icon-shanchu1" />
        </span>
      </div>
    </div>
    <div class="add-btn" @click="handleAdd">添加</div>
  </div>
</template>
