<script lang="ts" setup>
import type {
  ComponentSchema,
  Designer,
  DesignerProps,
  PageSchema,
} from '@epic-designer/types';

import type { Ref } from 'vue';

import { computed, inject, ref } from 'vue';
import { VueDraggable } from 'vue-draggable-plus';

import { EpicIcon } from '@epic-designer/base-ui';
import { pluginManager, Revoke } from '@epic-designer/manager';
import { findSchemaInfoById, generateNewSchema } from '@epic-designer/utils';

const Input = pluginManager.component.get('input');
const pageSchema = inject('pageSchema') as PageSchema;
const designer = inject('designer') as Designer;
const revoke = inject('revoke') as Revoke;
const designerProps = inject('designerProps') as Ref<DesignerProps>;
const sourceSchema = pluginManager.component.getComponentSchemaGroups();
const keyword = ref('');
const allSchema = {
  title: '全部',
  list: [],
};
const activeItem = ref(allSchema);

/**
 * 计算组件分类列表
 */
const getSchemaTypeList = computed(() => {
  return [allSchema, ...sourceSchema.value];
});

/**
 * 计算当前需要展示的组件列表
 */
const getSourceSchemaList = computed(() => {
  let sourceSchemaList: ComponentSchema[] = activeItem.value.list;

  if (activeItem.value.title === '全部') {
    const sourceSchemaAllList = sourceSchema.value.map((item) => {
      return item.list;
    });

    sourceSchemaList = sourceSchemaAllList.flat();
  }
  const data = sourceSchemaList.filter(
    (item) =>
      item.label?.includes(keyword.value) &&
      (!designerProps.value.formMode || item.type !== 'form'),
  );

  return data;
});

function handelChecked(item) {
  activeItem.value = item;
}

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
    !pluginManager.component.getConfigByType(checkedSchema.type)?.editConstraints
      ?.childImmovable
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
    <div class="epic-search-box px-10px py-6px">
      <Input
        v-model="keyword"
        v-model:value="keyword"
        placeholder="搜索组件"
        clearable
        allow-clear
      >
        <template #prefix>
          <EpicIcon
            class="text-$epic-text-helper"
            name="icon--epic--search-rounded"
          />
        </template>
      </Input>
    </div>
    <!-- 搜素框 end -->
    <div class="flex flex-1 overflow-auto">
      <!-- 分类选项 start  -->
      <div class="epic-tabs-box">
        <div
          v-for="(item, index) in getSchemaTypeList"
          :key="index"
          class="epic-tab cursor-pointer truncate"
          :class="{ checked: activeItem.title === item.title }"
          :title="item.title"
          @click="handelChecked(item)"
        >
          {{ item.title }}
        </div>
      </div>
      <!-- 分类选项 end  -->

      <div class="box-border h-full flex-1 overflow-auto py-2">
        <VueDraggable
          v-model="getSourceSchemaList"
          :group="{ name: 'edit-draggable', pull: 'clone', put: false }"
          :sort="false"
          :animation="180"
          ghost-class="moving"
          :clone="generateNewSchema"
          item-key="id"
          class="px-10px grid grid-cols-[auto_auto] gap-2"
        >
          <div
            v-for="item in getSourceSchemaList"
            :key="item.type"
            class="epic-componet-item flex items-center truncate"
            @click="handleClick(item)"
          >
            <EpicIcon
              :name="
                pluginManager.component.getConfigByType(item.type).icon ?? ''
              "
            />
            <div class="epic-componet-label w-0 flex-1 truncate">
              {{ item.label }}
            </div>
          </div>
        </VueDraggable>
        <div
          v-show="getSourceSchemaList.length === 0"
          class="pt-42px text-center text-gray-400"
        >
          没有查询到的组件
        </div>
      </div>
    </div>
  </div>
</template>
