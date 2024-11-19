<template>
  <NModal
    v-bind="getComponentProps"
    :title="getComponentProps.label ?? ''"
    class="epic-modal-n"
    preset="card"
    @update:show="handleClose"
  >
    <div class="epic-modal-main">
      <slot>
        <slot name="edit-node">
          <template v-if="children.length">
            <slot name="node" v-for="node in children" :componentSchema="node" />
          </template>
        </slot>
      </slot>
    </div>

    <div class="epic-modal-footer">
      <NSpace justify="end">
        <NButton @click="handleClose">关闭</NButton>
        <NButton v-if="!props.hideConfirm" type="primary" @click="handleOk">
          {{ getComponentProps.okText ?? "确定" }}
        </NButton>
      </NSpace>
    </div>
  </NModal>
</template>

<script lang="ts" setup>
import { computed, useAttrs } from "vue";
import { NModal, NButton, NSpace } from "naive-ui";
import { ComponentSchema } from "@epic-designer/core/types/epic-designer";
const attrs = useAttrs();

// 定义 props
const props = defineProps<{
  componentSchema?: ComponentSchema;
  hideConfirm?: boolean;
}>();

// Emits
const emit = defineEmits(["ok", "close", "update:modelValue"]);

// 计算属性
const getComponentProps = computed<Record<string, any>>(() => ({
  ...props.componentSchema,
  title: props.componentSchema?.label ?? "",
  class: "epic-modal-n",
  preset: "card",
  show: attrs.modelValue
}));

const children = computed(() => props.componentSchema?.children ?? []);

// 方法
const handleOk = () => {
  emit("ok");
};

const handleClose = () => {
  emit("update:modelValue", false);
  emit("close");
};
</script>
