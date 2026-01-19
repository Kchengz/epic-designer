<script lang="ts" setup>
import type { ComponentSchema } from '@epic-designer/types';

import { computed, useAttrs } from 'vue';

import { ElButton, ElDialog } from 'element-plus';
// 定义 props
const props = withDefaults(
  defineProps<{
    cancelText?: string;
    componentSchema?: ComponentSchema;
    hideConfirm?: boolean;
    okText?: string;
  }>(),
  {
    cancelText: '关闭',
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
const getProps = computed<Record<string, any>>(() => ({
  ...props.componentSchema,
  ...attrs,
  class: 'ep-el-modal epic-scoped',
  'destroy-on-close': true,
  title: props.componentSchema?.label ?? '',
}));

const children = computed(() => props.componentSchema?.children ?? []);

function handleOk() {
  emits('ok');
}

function updateModelValue(value = false) {
  emits('update:modelValue', value);
}

function handleClose() {
  emits('close');
}
</script>

<template>
  <ElDialog
    v-bind="getProps"
    :title="getProps.label ?? ''"
    destroy-on-close
    @update:model-value="updateModelValue"
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
    <template #footer>
      <div class="ep-el-modal-footer">
        <ElButton @click="handleClose"> {{ props.cancelText }} </ElButton>
        <ElButton v-if="!props.hideConfirm" type="primary" @click="handleOk">
          {{ props.okText }}
        </ElButton>
      </div>
    </template>
  </ElDialog>
</template>
