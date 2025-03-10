<script lang="ts" setup>
import type { PageSchema } from '@epic-designer/types';

import type { PropType } from 'vue';

import { inject } from 'vue';

import { EpicIcon } from '@epic-designer/base-ui';
import { findSchemaById } from '@epic-designer/utils';
import draggable from 'vuedraggable';

const props = defineProps({
  allEvents: {
    default: () => [],
    type: Array as PropType<any>,
  },
  events: {
    default: () => ({}),
    type: Object as PropType<any>,
  },
  itemEvents: {
    default: () => [],
    type: Array as PropType<any>,
  },
  modelValue: {
    default: () => ({}),
    type: Object as PropType<any>,
  },
});
const emit = defineEmits(['add', 'edit', 'update:modelValue']);

const pageSchema = inject('pageSchema') as PageSchema;

/**
 * 打开动作配置窗口
 * @param type
 */
function handleOpen(type: string) {
  emit('add', type);
}

/**
 * 获取组件label
 * @param id
 */
function getLabel(id: string) {
  const schema = findSchemaById(pageSchema.schemas, id);
  return schema.label;
}

/**
 * 删除
 * @param index
 */
function handleDelete(index: number, type: string) {
  const newEvents = getNewEvents(type);
  newEvents[type] = props.events[type].filter(
    (_item: any, i: number) => index !== i,
  );
  if (!newEvents[type]?.length) {
    delete newEvents[type];
  }
  emit('update:modelValue', newEvents);
}

/**
 * 修改事件
 * @param index
 * @param type
 * @param action
 */
function handleEdit(index: number, type: string, action: any) {
  emit('edit', index, type, action);
}

/**
 * 获取新的事件数据，过滤空数据
 * @param type
 */
function getNewEvents(type: string) {
  const newEvents: { [type: string]: any } = {};
  props.allEvents.forEach((item: any) => {
    if (props.events[item.type].length === 0) {
      return false;
    }
    if (item.type === type) {
      return false;
    }
    newEvents[item.type] = props.events[item.type];
  });
  return newEvents;
}
</script>
<template>
  <div v-for="item in itemEvents" :key="item.type" class="epic-event-item">
    <div class="epic-event-info">
      <div class="epic-event-label" :title="item.describe ?? item.description">
        {{ item.describe ?? item.description }}
      </div>
      <div
        class="epic-event-btn text-$epic-text-secondary flex items-center text-lg"
      >
        <EpicIcon
          name="icon--epic--add-rounded"
          @click="handleOpen(item.type)"
        />
      </div>
    </div>
    <div class="epic-action-editor-main">
      <draggable
        v-model="props.events[item.type]"
        item-key="id"
        :component-data="{
          type: 'transition-group',
        }"
        group="option-list"
        handle=".handle"
        :animation="200"
      >
        <template #item="{ element: action, index }">
          <div class="epic-editor-item rounded">
            <div class="w-36px flex items-center text-lg">
              <EpicIcon
                class="handle text-$epic-text-medium mr-2 cursor-move text-lg"
                name="icon--epic--drag"
              />
            </div>
            <div class="flex-1">
              <div v-if="action.type === 'component'">
                {{ getLabel(action.componentId) }}
              </div>
              <div v-else-if="action.type === 'custom'">自定义函数</div>
              <div v-else-if="action.type === 'public'">公共函数</div>
              {{ action.methodName }}
            </div>
            <div class="epic-action-box text-$epic-text-medium text-lg">
              <div
                class="epic-edit-btn"
                @click="handleEdit(index, item.type, action)"
              >
                <EpicIcon name="icon--epic--page-info-outline-rounded" />
              </div>
              <div class="epic-del-btn" @click="handleDelete(index, item.type)">
                <EpicIcon name="icon--epic--delete-outline-rounded" />
              </div>
            </div>
          </div>
        </template>
      </draggable>
    </div>
  </div>
</template>
