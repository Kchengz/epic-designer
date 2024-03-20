<template>
  <Modal v-bind="componentSchema">
    <div class="epic-modal-main">
      <slot name="edit-node">
        <template v-if="children.length">
          <slot v-for="item in children" name="node" :componentSchema="item" />
        </template>
        <slot v-else></slot>
      </slot>

    </div>
    <div class="epic-modal-footer">
      <Space align="end">
        <Button @click="handleClose">关闭</Button>
        <Button type="primary" @click="handleOk">{{ componentSchema.okText ?? "确定" }}</Button>
      </Space>
    </div>

  </Modal>
</template>

<script lang="ts" setup>
import { computed, h, type PropType, useAttrs } from "vue";
import { type ComponentSchema } from "@epic-designer/core/types/epic-designer";
import { Modal, Button, Space } from "ant-design-vue";
const attrs = useAttrs()
const props = defineProps({
  componentSchema: {
    type: Object as PropType<ComponentSchema>,
    default: () => ({}),
  },
})

const emits = defineEmits(["ok", "close", "update:modelValue"])
const dialogStyle = {
  position: "absolute",
  right: "150px",
  left: "150px",
  minWidth: "700px",
  width: "auto",
  top: "56px",
  bottom: "30px",
  minHeight: "500px",
};

const bodyStyle = {
  height: "calc(100vh - 108px)",
  padding: 0,
};

const componentSchema = computed<Record<string, any>>(() => ({
  ...props.componentSchema,
  ...attrs,
  title: props.componentSchema?.label ?? "",
  wrapClassName: "epic-modal-ant",
  open: attrs.modelValue,
  visible: attrs.modelValue,
  "onUpdate:open": handleClose,
  "onUpdate:visible": handleClose,
  style: "top:20px",
  bodyStyle,
  dialogStyle,
  footer: null,
  children: null
}))

const children = props.componentSchema.children ?? [];

function handleOk() {
  emits("ok");
}

function handleClose() {
  emits("update:modelValue", false);
  emits("close");
}
</script>