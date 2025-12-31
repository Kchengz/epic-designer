<script lang="ts" setup>
import type { Designer, TableJson } from '@epic-designer/types';

import type { Ref } from 'vue';

import { computed, inject, watch } from 'vue';

import { pluginManager } from '@epic-designer/manager';

const Select = pluginManager.component.get('select');
const Input = pluginManager.component.get('input');
const designer = inject('designer') as Designer;
const dataTable = inject<Ref<TableJson>>('dataTable');
const tableColumns = computed(() => {
  if (!dataTable?.value) return [];
  return dataTable.value.tableColumn?.map((column) => ({
    label: column.columnRemark,
    value: column.columnName,
  }));
});

const innerValue = defineModel<string>();
watch(innerValue, (val) => {
  if (designer.state.selectedNode) {
    const column = tableColumns.value.find((col) => col.value === val);
    column && (designer.state.selectedNode.label = column.label);
  }
});
</script>

<template>
  <Select
    v-if="tableColumns.length"
    v-model="innerValue"
    v-model:value="innerValue"
    :options="tableColumns"
    placeholder="请选择"
  />
  <Input
    v-else
    v-model="innerValue"
    v-model:value="innerValue"
    placeholder="请输入"
  />
</template>
