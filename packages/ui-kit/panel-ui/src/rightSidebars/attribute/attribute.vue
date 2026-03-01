<script lang="ts" setup>
import type { TableJson } from '@epic-designer/types';

import { computed, provide, watchEffect } from 'vue';

import { EpicIcon } from '@epic-designer/base-ui';
import { useDesignerContext } from '@epic-designer/hooks';
import { pluginManager } from '@epic-designer/manager';
import { useClipboard } from '@vueuse/core';

import EAttributeItem from './modules/attributeItem.vue';

const designer = useDesignerContext();
const pageSchema = designer.pageSchema;
const designerProps = designer.props;

const { copied, copy } = useClipboard();
watchEffect(() => {
  if (copied.value) {
    pluginManager.global.$message.success('节点ID复制成功');
  }
});

const componentConfigs = pluginManager.component.getComponentConfigs();
const selectedNode = computed(() => {
  return designer.state.selectedNode;
});

const dataTable = computed<TableJson | undefined>(() => {
  let dataTable = designerProps.tableJson?.find(
    (item) => item.tableType === 'parent',
  );

  // 倒序遍历 designer.state.matched，找到第一个 type = subform 数据
  const subformNode = [...designer.state.matched]
    .slice(0, -1) // 移除最后一个节点
    .reverse()
    .find((node) => node.type === 'subform');

  // 根据是否存在子表单节点来查找对应的数据表
  dataTable = subformNode
    ? designerProps.tableJson?.find(
        (item) => item?.tableName === subformNode.field,
      )
    : designerProps.tableJson?.find((item) => item.tableType === 'parent');

  return dataTable;
});
provide('dataTable', dataTable);

// 获取组件属性配置
const componentAttributes = computed(() => {
  if (!selectedNode.value || !selectedNode.value.type) {
    return [];
  }

  const baseAttributes =
    componentConfigs[selectedNode.value.type]?.config?.attribute ?? [];
  const allAttributes = [...baseAttributes];

  if (selectedNode.value.id === pageSchema.schemas[0]?.id) {
    allAttributes.push(
      {
        editData: pageSchema,
        field: 'canvas.width',
        label: '画布宽度',
        type: 'EInputSize',
      },
      {
        editData: pageSchema,
        field: 'canvas.height',
        label: '画布高度',
        type: 'EInputSize',
      },
    );
  }

  return allAttributes;
});
</script>
<template>
  <div :key="selectedNode?.id" class="epic-attribute-view">
    <!-- 组件id展示 start -->
    <div
      class="epic-attr-item mb-2 mt-2 flex h-8 cursor-pointer items-center px-4"
    >
      <div
        class="bg-$ep-secondary rounded-1 h-full flex-1 px-2 leading-8"
        @click="copy(designer.state.selectedNode?.id ?? '')"
      >
        <EpicIcon
          class="epic-component-icon translate-y-2px mr-1"
          :name="
            pluginManager.component.getIcon(designer.state.selectedNode!.type)
          "
        />
        {{ designer.state.selectedNode?.id }}
      </div>
    </div>
    <!-- 组件id展示 end -->
    <!-- 数据表 start -->
    <div
      v-if="dataTable?.tableRemark && designer.state.selectedNode?.input"
      class="epic-attr-item mb-2 flex h-8 cursor-pointer items-center px-4"
    >
      <div class="epic-attr-label">数据表</div>
      <div class="bg-$ep-secondary rounded-1 h-full flex-1 px-2 leading-8">
        {{ dataTable.tableRemark }}
      </div>
    </div>
    <!-- 数据表 end -->
    <div v-for="item in componentAttributes" :key="item.field">
      <EAttributeItem :schema="item" />
    </div>
  </div>
</template>
