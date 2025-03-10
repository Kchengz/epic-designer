<script lang="ts" setup>
import type { Designer, PageSchema } from '@epic-designer/types';
import type { Revoke } from '@epic-designer/utils';

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

const eventList = computed(() => {
  const eventList: any = [
    {
      events: [
        {
          describe: 'beforeMount',
          type: 'vnodeBeforeMount',
        },
        {
          describe: 'mounted',
          type: 'vnodeMounted',
        },
        {
          describe: 'beforeUpdate',
          type: 'vnodeBeforeUpdate',
        },
        {
          describe: 'updated',
          type: 'vnodeUpdated',
        },
        {
          describe: 'beforeUnmount',
          type: 'vnodeBeforeUnmount',
        },
        {
          describe: 'unmounted',
          type: 'vnodeUnmounted',
        },
        {
          describe: 'errorCaptured',
          type: 'vnodeErrorCaptured',
        },
      ],
      title: '生命周期',
    },
  ];
  const events =
    componentConfings[designer.state.selectedNode?.type ?? '']?.config.event ??
    [];
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
