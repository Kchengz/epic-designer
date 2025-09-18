<script lang="ts" setup>
import type { ComponentSchema } from '@epic-designer/types';

import type { PropType } from 'vue';

import { computed } from 'vue';

import { EpicIcon } from '@epic-designer/base-ui';
import { pluginManager } from '@epic-designer/manager';
import { getUUID } from '@epic-designer/utils';

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
          <EpicIcon
            class="hover:text-red cursor-pointer"
            name="icon--epic--delete-outline-rounded"
          />
        </span>
      </div>
    </div>
    <div class="add-btn" @click="handleAdd">添加</div>
  </div>
</template>
