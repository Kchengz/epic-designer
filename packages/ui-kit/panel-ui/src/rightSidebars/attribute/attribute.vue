<script lang="ts" setup>
import type { Revoke } from '@epic-designer/manager';
import type {
  ComponentSchema,
  Designer,
  PageSchema,
} from '@epic-designer/types';

import { computed, inject, nextTick, watchEffect } from 'vue';

import { EpicIcon, EpicNode } from '@epic-designer/base-ui';
import { pluginManager } from '@epic-designer/manager';
import { getValueByPath, setValueByPath } from '@epic-designer/utils';
import { useClipboard } from '@vueuse/core';

const designer = inject('designer') as Designer;
const pageSchema = inject('pageSchema') as PageSchema;
const revoke = inject('revoke') as Revoke;

const { copied, copy } = useClipboard();
watchEffect(() => {
  if (copied.value) {
    pluginManager.global.$message.success('节点ID复制成功');
  }
});

const componentConfigs = pluginManager.getComponentConfigs();
const selectedNode = computed(() => {
  return designer.state.selectedNode;
});

function isShow(item: ComponentSchema) {
  // show属性为boolean类型则直接返回
  if (typeof item.show === 'boolean') {
    return item.show;
  }

  // show属性为function类型则执行
  if (typeof item.show === 'function') {
    return item.show?.({ values: selectedNode.value! });
  }

  return true;
}

// 获取组件属性配置
const componentAttributes = computed(() => {
  if (!selectedNode.value || !selectedNode.value.type) {
    return [];
  }

  const baseAttributes =
    componentConfigs[selectedNode.value.type]?.config.attribute ?? [];
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

/**
 * 设置属性值
 */
function handleSetValue(
  value: any,
  field: string,
  item: ComponentSchema,
  editData: null | object = selectedNode.value,
) {
  if (typeof item.onChange === 'function') {
    item.onChange({ componentAttributes, value, values: editData! });
  }
  // 判断是否同步修改属性值
  if (item.changeSync) {
    setValueByPath(editData!, field, value);
  } else {
    nextTick(() => {
      setValueByPath(editData!, field, value);
    });
  }
  console.log(22, '属性编辑');
  // 将修改过的组件属性推入撤销操作的栈中
  revoke.push('属性编辑');
}
</script>
<template>
  <div :key="selectedNode?.id" class="epic-attribute-view">
    <!-- 组件id展示 start -->
    <div
      class="epic-attr-item mb-2 mt-2 flex h-8 cursor-pointer items-center px-4"
    >
      <div
        class="bg-$epic-gray-3 rounded-1 h-full flex-1 px-2 leading-8"
        @click="copy(designer.state.selectedNode?.id ?? '')"
      >
        <EpicIcon
          class="epic-component-icon translate-y-2px mr-1"
          :name="pluginManager.getIcon(designer.state.selectedNode!.type)"
        />
        {{ designer.state.selectedNode?.id }}
      </div>
    </div>
    <!-- 组件id展示 end -->
    <div v-for="item in componentAttributes" :key="item.field">
      <div v-if="isShow(item)" class="epic-attr-item" :class="item.layout">
        <div v-if="item.label" class="epic-attr-label" :title="item.label">
          {{ item.label }}
        </div>
        <div
          class="epic-attr-input"
          :class="{ 'block!': item.layout === 'vertical' }"
        >
          <EpicNode
            :component-schema="{
              ...item,
              componentProps: {
                ...item.componentProps,
                ...(item.field === 'componentProps.defaultValue'
                  ? selectedNode?.componentProps
                  : {}),
                input: false,
                field: undefined,
                hidden: false,
              },
              show: true,
              noFormItem: true,
            }"
            :model-value="
              getValueByPath(item.editData ?? selectedNode!, item.field!)
            "
            @update:model-value="
              handleSetValue($event, item.field!, item, item.editData)
            "
          />
        </div>
      </div>
    </div>
  </div>
</template>
