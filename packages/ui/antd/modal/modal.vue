<script lang="ts" setup>
import type { ComponentSchema } from '@epic-designer/types';

import { computed, useAttrs } from 'vue';

import { Button, Modal, Space, version } from 'ant-design-vue';

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
const emits = defineEmits(['ok', 'close', 'update:modelValue']);
const versionArray = version.split('.');
// 获取版本号第一个数字
const firstNumber = Number.parseInt(versionArray[0]);

const attrs = useAttrs();
const dialogStyle = {
  bottom: '30px',
  left: '150px',
  minHeight: '500px',
  minWidth: '700px',
  position: 'absolute',
  right: '150px',
  top: '56px',
  width: 'auto',
};

const bodyStyle = {
  height: 'calc(100vh - 108px)',
  padding: 0,
};

const getComponentProps = computed<Record<string, any>>(() => ({
  ...props.componentSchema,
  ...attrs,
  bodyStyle,
  dialogStyle,
  footer: null,
  'onUpdate:open': handleClose,
  'onUpdate:visible': handleClose,
  open: attrs.modelValue,
  style: 'top:20px',
  title: props.componentSchema?.label ?? '',
  visible: firstNumber > 3 ? undefined : attrs.modelValue,
  wrapClassName: 'epic-modal-ant',
  children: null,
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
  <Modal v-bind="getComponentProps">
    <div class="epic-modal-main epic-scoped">
      <slot>
        <slot name="edit-node">
          <slot
            v-for="item in children"
            name="node"
            :component-schema="item"
          ></slot>
        </slot>
      </slot>
    </div>
    <div class="epic-modal-footer">
      <Space align="end">
        <Button @click="handleClose"> 关闭 </Button>
        <Button v-if="!props.hideConfirm" type="primary" @click="handleOk">
          {{ props.okText }}
        </Button>
      </Space>
    </div>
  </Modal>
</template>
