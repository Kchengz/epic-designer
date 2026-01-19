<script lang="ts" setup>
import type { ComponentSchema } from '@epic-designer/types';

import { computed, useAttrs } from 'vue';

import { Button, Modal, Space, version } from 'ant-design-vue';

const props = withDefaults(
  defineProps<{
    cancelText?: string;
    componentSchema?: ComponentSchema;
    fixedHeight?: boolean;
    footer?: boolean;
    hideConfirm?: boolean;
    okText?: string;
  }>(),
  {
    cancelText: '关闭',
    componentSchema: () => ({
      type: 'modal',
    }),
    fixedHeight: true,
    footer: true,
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

const getProps = computed<Record<string, any>>(() => ({
  ...props.componentSchema,
  ...attrs,
  bodyStyle: {
    height: props.fixedHeight ? 'calc(100vh - 108px)' : 'auto',
    padding: 0,
  },
  dialogStyle,
  footer: null,
  'onUpdate:open': updateModelValue,
  'onUpdate:visible': updateModelValue,
  open: attrs.modelValue,
  style: props.fixedHeight ? 'top:20px' : '',
  title: props.componentSchema?.label ?? '',
  visible: firstNumber > 3 ? undefined : attrs.modelValue,
  wrapClassName: 'epic-modal-ant',
  children: null,
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
  <Modal v-bind="getProps">
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
    <div v-if="props.footer" class="epic-modal-footer">
      <Space align="end">
        <Button @click="handleClose"> {{ props.cancelText }} </Button>
        <Button v-if="!props.hideConfirm" type="primary" @click="handleOk">
          {{ props.okText }}
        </Button>
      </Space>
    </div>
  </Modal>
</template>
