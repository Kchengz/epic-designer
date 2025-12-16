<script lang="ts" setup>
import type {
  ComponentSchema,
  Designer,
  PageSchema,
} from '@epic-designer/types';

import { computed, inject, ref } from 'vue';
import { VueDraggable } from 'vue-draggable-plus';

import { EpCollapse, EpCollapsePanel, EpicIcon } from '@epic-designer/base-ui';
import { pluginManager, Revoke } from '@epic-designer/manager';
import { findSchemaInfoById, generateNewSchema } from '@epic-designer/utils';
import { useStorage } from '@vueuse/core';

const Input = pluginManager.component.get('input');
const pageSchema = inject('pageSchema') as PageSchema;
const designer = inject('designer') as Designer;
const revoke = inject('revoke') as Revoke;
const groups = pluginManager.component.getComponentSchemaGroups();
const keyword = ref('');
const activeKeys = useStorage('epic-component-view-keys', []);

/**
 * 计算组件分类列表
 */
const getSchemaTypeList = computed(() => {
  return groups.value
    .map((item) => ({
      ...item,
      list: item.list.filter((item) => item.label?.includes(keyword.value)),
    }))
    .filter((item) => item.list.length > 0);
});

/**
 * 点击添加节点
 */
function handleClick(schema: ComponentSchema) {
  const data = findSchemaInfoById(
    pageSchema.schemas,
    designer.state.selectedNode?.id ?? 'root',
  );
  if (!data) {
    return false;
  }
  let { index, schema: checkedSchema, list } = data;

  // 如果选中元素存在children字段，则添加到children中
  if (
    checkedSchema.children &&
    !pluginManager.component.getConfigByType(checkedSchema.type)
      ?.editConstraints?.childImmovable
  ) {
    list = checkedSchema.children;
    index = checkedSchema.children.length - 1;
  }

  const newSchema = generateNewSchema(schema);

  list.splice(index + 1, 0, newSchema);
  designer.setSelectedNode(newSchema);
  revoke.push('插入组件', true);
}
</script>
<template>
  <div class="epic-component-view flex flex-col">
    <!-- 搜素框 start -->
    <div class="epic-search-box px-10px py-2">
      <Input
        v-model="keyword"
        v-model:value="keyword"
        placeholder="搜索组件"
        clearable
        allow-clear
      >
        <template #prefix>
          <EpicIcon
            class="text-$ep-text-helper"
            name="icon--epic--search-rounded"
          />
        </template>
      </Input>
    </div>
    <!-- 搜素框 end -->
    <div class="flex flex-1 overflow-auto">
      <!-- 分类选项 start  -->

      <div class="box-border h-full flex-1 overflow-auto">
        <EpCollapse
          :default-expand-all="!activeKeys.length"
          v-model="activeKeys"
        >
          <EpCollapsePanel
            v-for="group in getSchemaTypeList"
            :name="group.title"
            :title="group.title"
            :key="group.title"
          >
            <VueDraggable
              v-model="group.list"
              :group="{ name: 'edit-draggable', pull: 'clone', put: false }"
              :sort="false"
              :animation="180"
              ghost-class="moving"
              :clone="generateNewSchema"
              item-key="id"
              class="grid grid-cols-[auto_auto] gap-2 px-2 pb-2 pt-1"
            >
              <div
                v-for="item in group.list"
                :key="item.type"
                class="epic-componet-item flex items-center truncate"
                @click="handleClick(item)"
              >
                <EpicIcon
                  :name="
                    pluginManager.component.getConfigByType(item.type).icon ??
                    ''
                  "
                />
                <div class="epic-componet-label w-0 flex-1 truncate">
                  {{ item.label }}
                </div>
              </div>
            </VueDraggable>
          </EpCollapsePanel>
        </EpCollapse>
        <div
          v-show="getSchemaTypeList.length === 0"
          class="pt-42px text-center text-gray-400"
        >
          没有查询到的组件
        </div>
      </div>
    </div>
  </div>
</template>
