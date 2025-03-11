<script lang="ts" setup>
import type { ComponentSchema } from '@epic-designer/types';

import { computed, useAttrs } from 'vue';

import { ElButton, ElDialog } from 'element-plus';
// 定义 props
const props = withDefaults(
  defineProps<{
    componentSchema?: ComponentSchema;
    hideConfirm?: boolean;
    okText?: string;
  }>(),
  {
    componentSchema: () => ({
      type: 'modal',
    }),
    okText: '确定',
  },
);
// 定义 emits
const emits = defineEmits(['ok', 'close', 'update:modelValue']);
const attrs = useAttrs();
// 计算属性
const getComponentProps = computed<Record<string, any>>(() => ({
  ...props.componentSchema,
  ...attrs,
  class: 'epic-modal-el epic-modal-main',
  'destroy-on-close': true,
  title: props.componentSchema?.label ?? '',
}));

const children = computed(() => props.componentSchema?.children ?? []);

function handleOk() {
  emits('ok');
}

function handleClose() {
  emits('update:modelValue', false);
  emits('close');
}
</script>

<template>
  <ElDialog
    v-bind="getComponentProps"
    :title="getComponentProps.label ?? ''"
    class="epic-modal-el epic-modal-main epic-scoped"
    destroy-on-close
    @update:model-value="handleClose"
  >
    <slot>
      <slot name="edit-node">
        <template v-if="children.length > 0">
          <slot
            v-for="node in children"
            name="node"
            :component-schema="node"
          ></slot>
        </template>
      </slot>
    </slot>
    <div class="epic-modal-footer">
      <ElButton @click="handleClose"> 关闭 </ElButton>
      <ElButton v-if="!props.hideConfirm" type="primary" @click="handleOk">
        {{ props.okText }}
      </ElButton>
    </div>
  </ElDialog>
</template>
