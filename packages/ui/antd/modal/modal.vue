<template>
  <Modal v-bind="getComponentProps">
    <div class="epic-modal-main epic-scoped">
      <slot>
        <slot name="edit-node">
          <template>
            <slot v-for="item in children" name="node" :componentSchema="item" />
          </template>
        </slot>
      </slot>
    </div>
    <div class="epic-modal-footer">
      <Space align="end">
        <Button @click="handleClose">关闭</Button>
        <Button v-if="!props.hideConfirm" type="primary" @click="handleOk">{{
          getComponentProps.okText ?? "确定"
        }}</Button>
      </Space>
    </div>
  </Modal>
</template>

<script lang="ts" setup>
import { computed, useAttrs } from "vue";
import { type ComponentSchema } from "@epic-designer/core/types/epic-designer";
import { Modal, Button, Space } from "ant-design-vue";
import { version } from "ant-design-vue";
  const versionArray = version.split(".");
  // 获取版本号第一个数字
  const firstNumber = parseInt(versionArray[0]);

const attrs = useAttrs()
const props = defineProps<{
  componentSchema?:ComponentSchema,
  hideConfirm?: boolean
}>()

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

const getComponentProps = computed<Record<string, any>>(() => ({
  ...props.componentSchema,
  ...attrs,
  title: props.componentSchema?.label ?? "",
  wrapClassName: "epic-modal-ant",
  open: attrs.modelValue,
  visible: firstNumber > 3 ? undefined : attrs.modelValue,
  "onUpdate:open": handleClose,
  "onUpdate:visible": handleClose,
  style: "top:20px",
  bodyStyle,
  dialogStyle,
  footer: null,
  children: null
}))

const children = computed(()=>props.componentSchema?.children ?? []) ;

function handleOk() {
  emits("ok");
}

function handleClose() {
  emits("update:modelValue", false);
  emits("close");
}
</script>
