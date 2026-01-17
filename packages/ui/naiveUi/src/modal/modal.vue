<script lang="ts" setup>
import { computed, useAttrs } from 'vue';

import { ComponentSchema } from '@epic-designer/types';
import { NButton, NModal, NSpace } from 'naive-ui';
// 定义 props
const props = withDefaults(
  defineProps<{
    cancelText?: string;
    componentSchema?: ComponentSchema;
    hideConfirm?: boolean;
    okText?: string;
    width?: string;
  }>(),
  {
    cancelText: '关闭',
    componentSchema: () => ({
      type: 'modal',
    }),
    okText: '确定',
    width: '900px',
  },
);

// Emits
const emit = defineEmits(['ok', 'close', 'update:modelValue']);

const attrs = useAttrs();

// 计算属性
const getProps = computed<Record<string, any>>(() => ({
  ...props.componentSchema,
  class: 'epic-modal-n',
  preset: 'card',
  show: attrs.modelValue,
  title: props.componentSchema?.label ?? '',
}));

const children = computed(() => props.componentSchema?.children ?? []);

// 方法
const handleOk = () => {
  emit('ok');
};

function updateModelValue(value = false) {
  emit('update:modelValue', value);
}

function handleClose() {
  emit('close');
}
</script>

<template>
  <NModal
    v-bind="getProps"
    :title="getProps.label ?? ''"
    class="epic-modal-n epic-scoped"
    preset="card"
    :style="{ width }"
    @update:show="updateModelValue"
  >
    <div class="epic-modal-main">
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
    </div>

    <div class="epic-modal-footer">
      <NSpace justify="end">
        <NButton @click="handleClose"> {{ props.cancelText }} </NButton>
        <NButton v-if="!props.hideConfirm" type="primary" @click="handleOk">
          {{ props.okText }}
        </NButton>
      </NSpace>
    </div>
  </NModal>
</template>
