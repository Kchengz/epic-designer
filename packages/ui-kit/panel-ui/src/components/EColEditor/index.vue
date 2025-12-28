<script lang="ts" setup>
import type { ComponentSchema } from '@epic-designer/types';

import type { PropType } from 'vue';

import { VueDraggable } from 'vue-draggable-plus';

import { EpicIcon } from '@epic-designer/base-ui';
import { pluginManager } from '@epic-designer/manager';
import { getUUID } from '@epic-designer/utils';
import { useVModel } from '@vueuse/core';

const props = defineProps({
  modelValue: {
    default: () => [],
    type: Array as PropType<ComponentSchema[]>,
  },
});
const emit = defineEmits(['update:modelValue']);

const Button = pluginManager.component.get('button');
const Number = pluginManager.component.get('number');

const innerValue = useVModel(props, 'modelValue', emit);

/**
 * 新增栅格Col
 */
function handleAdd() {
  const colItem = {
    id: getUUID(),
    props: {
      span: 12,
    },
    type: 'col',
    children: [],
  };
  innerValue.value = [...innerValue.value, colItem];
}

/**
 * 删除栅格Col
 * @param index
 */
function handleDelete(index: number) {
  innerValue.value = innerValue.value.filter(
    (item, itemIdx) => itemIdx !== index,
  );
}
</script>
<template>
  <div>
    <VueDraggable
      v-model="innerValue"
      item-key="id"
      :component-data="{
        type: 'transition-group',
      }"
      class="edit-col-range"
      :animation="200"
      :gorup="{ name: 'edit-col-range' }"
      handle=".handle"
    >
      <div
        v-for="(item, index) in innerValue"
        :key="item.id"
        class="EColEditor-item text-16px text-$ep-text-secondary mb-2 grid grid-cols-[16px_auto_auto_16px] items-center gap-2"
      >
        <EpicIcon class="handle mr-2 cursor-move" name="icon--epic--drag" />
        <Number
          v-model:value="item.props.span"
          v-model="item.props.span"
          style="width: 100%"
          :min="1"
          :max="24"
        />
        <template v-if="innerValue.length > 1">
          <EpicIcon
            class="hover:text-$ep-destructive cursor-pointer"
            name="icon--epic--delete-outline-rounded"
            @click="handleDelete(index)"
          />
        </template>
      </div>
    </VueDraggable>
    <Button @click="handleAdd"> 添加列 </Button>
  </div>
</template>
