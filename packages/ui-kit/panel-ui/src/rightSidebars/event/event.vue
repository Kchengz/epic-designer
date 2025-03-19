<script lang="ts" setup>
import type { Designer, PageSchema } from '@epic-designer/types';
import type { EventModel, Revoke } from '@epic-designer/utils';

import { computed, inject } from 'vue';

import {
  getValueByPath,
  pluginManager,
  setValueByPath,
} from '@epic-designer/utils';

const pageSchema = inject('pageSchema') as PageSchema;
const designer = inject('designer') as Designer;
const revoke = inject('revoke') as Revoke;
const EActionEditor = pluginManager.getComponent('EActionEditor');

const componentConfings = pluginManager.getComponentConfings();
const selectedNode = computed(() => {
  return designer.state.selectedNode;
});

// 定义事件组的类型
type EventGroup = {
  events: EventModel[];
  title: string;
};

// 定义生命周期事件常量
const LIFECYCLE_EVENTS: EventModel[] = [
  {
    description: '挂载完成（全部组件）',
    type: 'epicReady',
  },
  {
    description: '挂载完成（本组件）',
    type: 'vnodeMounted',
  },
  {
    description: '更新完成',
    type: 'vnodeUpdated',
  },
  {
    description: '卸载完成',
    type: 'vnodeUnmounted',
  },
  {
    description: '挂载前',
    type: 'vnodeBeforeMount',
  },
  {
    description: '更新前',
    type: 'vnodeBeforeUpdate',
  },
  {
    description: '卸载前',
    type: 'vnodeBeforeUnmount',
  },
  {
    description: '错误捕获',
    type: 'vnodeErrorCaptured',
  },
];

const eventList = computed(() => {
  // 定义事件列表结构
  const eventList: EventGroup[] = [
    {
      events: LIFECYCLE_EVENTS,
      title: '生命周期',
    },
  ];

  // 获取当前选中组件的事件配置
  const selectedNodeType = designer.state.selectedNode?.type;
  const events = componentConfings[selectedNodeType ?? '']?.config.event ?? [];

  // 将组件事件添加到事件列表的开头
  eventList.unshift({
    events,
    title: '组件事件',
  });

  return eventList;
});

/**
 * 设置属性值
 */
function handleSetValue(value: any, field: string) {
  setValueByPath(selectedNode.value!, field, value);
  // 将修改过的组件属性推入撤销操作的栈中
  revoke.push(pageSchema.schemas, '编辑组件属性');
}
</script>
<template>
  <div class="epic-event-view">
    <div v-if="selectedNode">
      <EActionEditor
        :key="selectedNode.id"
        :event-list="eventList"
        :model-value="getValueByPath(selectedNode!, `on`)"
        @update:model-value="handleSetValue($event, `on`)"
      />
    </div>
  </div>
</template>
