<script lang="ts" setup>
import type { Revoke } from '@epic-designer/manager';
import type {
  ComponentSchema,
  Designer,
  PageSchema,
  TableJson,
} from '@epic-designer/types';

import type { Ref } from 'vue';

import { computed, inject, nextTick, ref, watchEffect } from 'vue';

import { EpicNode } from '@epic-designer/base-ui';
import { pluginManager } from '@epic-designer/manager';
import { getValueByPath, setValueByPath } from '@epic-designer/utils';

const props = defineProps<{
  schema: ComponentSchema;
}>();
const tableJson = inject<null | Ref<TableJson>>('dataTable', null);
const designer = inject('designer') as Designer;
const pageSchema = inject('pageSchema') as PageSchema;
const revoke = inject('revoke') as Revoke;

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
    return item.show?.({
      tableJson: tableJson?.value,
      values: selectedNode.value!,
    });
  }

  return true;
}
const componentConfigs = pluginManager.component.getComponentConfigs();

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
    item.onChange({
      componentAttributes,
      tableJson: tableJson?.value,
      value,
      values: editData!,
    });
  }
  // 判断是否同步修改属性值
  if (item.changeSync) {
    setValueByPath(editData!, field, value);
  } else {
    nextTick(() => {
      setValueByPath(editData!, field, value);
    });
  }
  // 将修改过的组件属性推入撤销操作的栈中
  revoke.push('属性编辑');
}

const modelValue = ref();

watchEffect(() => {
  modelValue.value = getValueByPath(
    props.schema.editData ?? selectedNode.value!,
    props.schema.field!,
  );
});
</script>
<template>
  <div
    v-if="isShow(props.schema)"
    class="epic-attr-item"
    :class="props.schema.layout"
  >
    <div
      v-if="props.schema.label"
      class="epic-attr-label"
      :title="props.schema.label"
    >
      {{ props.schema.label }}
    </div>
    <div
      class="epic-attr-input"
      :class="{ 'block!': props.schema.layout === 'vertical' }"
    >
      <EpicNode
        is-property
        :component-schema="{
          ...props.schema,
          props: {
            ...props.schema.props,
            ...(props.schema.field === 'props.defaultValue'
              ? selectedNode?.props
              : {}),
            input: false,
            field: undefined,
            hidden: false,
            placeholder: props.schema.props?.placeholder ?? '请输入',
          },
          show: true,
          noFormItem: true,
        }"
        v-model="modelValue"
        @update:model-value="
          handleSetValue(
            $event,
            props.schema.field!,
            props.schema,
            props.schema.editData,
          )
        "
      />
    </div>
  </div>
</template>
