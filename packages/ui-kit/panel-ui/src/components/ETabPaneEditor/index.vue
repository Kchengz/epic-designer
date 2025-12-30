<script lang="ts" setup>
import type { ComponentSchema } from '@epic-designer/types';

import { computed, PropType } from 'vue';

import { EpicIcon } from '@epic-designer/base-ui';
import { pluginManager } from '@epic-designer/manager';
import { getUUID } from '@epic-designer/utils';
import draggable from 'vuedraggable';

defineOptions({
  inheritAttrs: false,
});
const props = defineProps({
  modelValue: {
    default: () => [],
    type: Array as PropType<ComponentSchema[]>,
  },
});
const emit = defineEmits(['update:modelValue']);
const Input = pluginManager.component.get('input');
const tabList = computed({
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
  const index = tabList.value.length + 1;
  const tabItem = {
    id: getUUID(),
    label: `标签${index}`,
    type: 'tab-pane',
    children: [],
  };
  tabList.value.push(tabItem);
}

/**
 * 删除栅格Col
 * @param index
 */
function handleDelete(index: number) {
  tabList.value.splice(index, 1);
}
</script>
<template>
  <div class="epic-propedit-item p-2">
    <draggable
      v-model="tabList"
      item-key="id"
      :component-data="{
        type: 'transition-group',
      }"
      group="option-list"
      handle=".handle"
      :animation="200"
    >
      <template #item="{ element: item, index }">
        <div
          :key="index"
          class="epic-tab-pane-editor-item my-2 grid grid-cols-[auto_auto_16px] items-center gap-2"
        >
          <EpicIcon
            class="handle cursor-move text-lg"
            name="icon--epic--drag"
          />
          <Input v-model:value="item.label" v-model="item.label" />
          <div
            v-if="tabList.length > 1"
            class="epic-option-del-btn flex items-center"
          >
            <EpicIcon
              class="hover:text-red cursor-pointer text-lg"
              name="icon--epic--delete-outline-rounded"
              @click="handleDelete(index)"
            />
          </div>
        </div>
      </template>
    </draggable>
  </div>

  <div class="epic-button ghost primary epic-option-add-btn" @click="handleAdd">
    添加
  </div>
</template>
