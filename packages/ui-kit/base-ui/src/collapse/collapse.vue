<!-- Collapse.vue -->
<script setup lang="ts">
import { defineEmits, defineProps, provide, ref, watch } from 'vue';

interface Props {
  // 是否开启手风琴模式
  accordion?: boolean;
  // 是否显示边框
  bordered?: boolean;
  // 自定义类名
  customClass?: string;
  // 是否默认展开所有面板
  defaultExpandAll?: boolean;
  // 当前激活的面板（支持数组或字符串）
  modelValue?: string | string[];
}

export type PanelName = number | string | symbol;

const props = withDefaults(defineProps<Props>(), {
  accordion: false,
  bordered: true,
  customClass: '',
  defaultExpandAll: false,
  modelValue: () => [],
});

const emit = defineEmits<{
  change: [value: PanelName | PanelName[]];
  'update:modelValue': [value: PanelName | PanelName[]];
}>();

// 当前激活的面板
const activeKeys = ref<PanelName[]>(
  Array.isArray(props.modelValue)
    ? props.modelValue
    : props.modelValue
      ? [props.modelValue]
      : [],
);

// 监听外部 modelValue 变化
watch(
  () => props.modelValue,
  (newVal) => {
    activeKeys.value = Array.isArray(newVal) ? newVal : newVal ? [newVal] : [];
  },
  { deep: true },
);

// 切换面板状态
const togglePanel = (name: PanelName) => {
  if (props.accordion) {
    // 手风琴模式：直接替换
    activeKeys.value = activeKeys.value[0] === name ? [] : [name];
  } else {
    // 非手风琴模式,允许多个展开
    const index = activeKeys.value.indexOf(name);
    if (index === -1) {
      activeKeys.value.push(name);
    } else {
      activeKeys.value.splice(index, 1);
    }
  }

  // 更新 v-model
  const emitValue = props.accordion
    ? activeKeys.value[0] || ''
    : [...activeKeys.value];

  emit('update:modelValue', emitValue);
  emit('change', emitValue);
};

// 检查面板是否激活
const isPanelActive = (name: PanelName) => {
  return activeKeys.value.includes(name);
};

// 收集所有面板的 name
const panelKeys = ref<PanelName[]>([]);
const registerPanel = (name: PanelName) => {
  if (!panelKeys.value.includes(name)) {
    panelKeys.value.push(name);
  }
};
const unregisterPanel = (name: PanelName) => {
  const index = panelKeys.value.indexOf(name);
  if (index !== -1) {
    panelKeys.value.splice(index, 1);
  }
};
// 提供 API 给子组件
provide('collapseContext', {
  accordion: props.accordion,
  activeKeys,
  bordered: props.bordered,
  defaultExpandAll: props.defaultExpandAll,
  isPanelActive,
  registerPanel,
  togglePanel,
  unregisterPanel,
});
</script>

<template>
  <div
    class="ep-collapse"
    :class="`ep-collapse--${accordion ? 'accordion' : 'default'}`"
  >
    <slot></slot>
  </div>
</template>

<style scoped>
.ep-collapse {
  border: 1px solid var(--ep-border);
  border-radius: 4px;
  overflow: hidden;
}

.ep-collapse--default {
  border: none;
}

.ep-collapse.bordered {
  border: 1px solid var(--ep-border);
  border-radius: 4px;
}

.ep-collapse:not(.bordered) {
  border: none;
}
</style>
