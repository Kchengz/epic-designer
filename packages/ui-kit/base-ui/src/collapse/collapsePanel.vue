<script setup lang="ts">
import type { Ref } from 'vue';

import type { PanelName } from './collapse.vue';
import { EpicIcon } from '../icon';
import {
  computed,
  defineProps,
  inject,
  onMounted,
  onUnmounted,
  ref,
  withDefaults,
} from 'vue';

interface Props {
  // 是否显示边框
  bordered?: boolean;
  // 自定义类名
  customClass?: string;
  // 是否默认展开
  defaultExpanded?: boolean;
  // 是否禁用
  disabled?: boolean;
  // 面板唯一标识
  name?: PanelName;
  // 面板标题
  title?: string;
}

const props = withDefaults(defineProps<Props>(), {
  bordered: true,
  customClass: '',
  defaultExpanded: false,
  disabled: false,
  name: '',
  title: '',
});

// 获取 collapse 上下文
const collapseContext = inject<{
  accordion: boolean;
  activeKeys: Ref<PanelName[]>;
  bordered: boolean;
  defaultExpandAll: boolean;
  isPanelActive: (name: PanelName) => boolean;
  registerPanel: (name: PanelName) => void;
  togglePanel: (name: PanelName) => void;
  unregisterPanel: (name: PanelName) => void;
}>('collapseContext');

// 生成唯一 name
const panelKey = ref<PanelName>(props.name || Symbol('collapse-panel'));
const contentRef = ref<HTMLElement>();

// 计算是否激活
const isActive = computed(() => {
  if (!collapseContext) return false;
  return collapseContext.isPanelActive(panelKey.value);
});

// 处理头部点击
const handleHeaderClick = () => {
  if (props.disabled || !collapseContext) return;
  collapseContext.togglePanel(panelKey.value);
};

// 动画处理
const handleEnter = (el: HTMLElement) => {
  el.style.height = '0';
  el.style.overflow = 'hidden';
  setTimeout(() => {
    if (contentRef.value) {
      el.style.height = `${contentRef.value.offsetHeight}px`;
    }
  }, 0);
};

const handleAfterEnter = (el: HTMLElement) => {
  el.style.height = 'auto';
  el.style.overflow = 'visible';
};

const handleLeave = (el: HTMLElement) => {
  el.style.height = `${el.offsetHeight}px`;
  el.style.overflow = 'hidden';
  setTimeout(() => {
    el.style.height = '0';
  }, 0);
};

// 生命周期
onMounted(() => {
  if (collapseContext) {
    collapseContext.registerPanel(panelKey.value);

    // 默认展开逻辑：如果父组件设置了 defaultExpandAll，则忽略单个面板的 defaultExpanded
    if (
      collapseContext.defaultExpandAll ||
      (props.defaultExpanded && !isActive.value)
    ) {
      collapseContext.togglePanel(panelKey.value);
    }
  }
});

onUnmounted(() => {
  if (collapseContext) {
    collapseContext.unregisterPanel(panelKey.value);
  }
});
</script>

<template>
  <div
    class="ep-collapse-panel"
    :class="{
      'ep-collapse-panel--active': isActive,
      'ep-collapse-panel--bordered': bordered,
    }"
  >
    <!-- 面板头部 -->
    <div
      class="ep-collapse-panel__header"
      :class="{ 'ep-collapse-panel__header--active': isActive }"
      @click="handleHeaderClick"
    >
      <div class="ep-collapse-panel__header-content">
        <!-- 自定义头部插槽 -->
        <slot v-if="$slots.header" name="header" :active="isActive"></slot>
        <template v-else>
          <span class="ep-collapse-panel__title">{{ title }}</span>
        </template>
      </div>

      <!-- 展开箭头 -->
      <div
        class="ep-collapse-panel__arrow"
        :class="{ 'ep-collapse-panel__arrow--active': isActive }"
      >
        <slot name="arrow">
          <EpicIcon
          name="icon--epic--arrow-forward-ios-rounded"
        />
        </slot>
      </div>
    </div>

    <!-- 面板内容（可动画展开） -->
    <transition
      name="ep-collapse-transition"
      @enter="handleEnter"
      @after-enter="handleAfterEnter"
      @leave="handleLeave"
    >
      <div v-show="isActive" class="ep-collapse-panel__content-wrapper">
        <div ref="contentRef" class="ep-collapse-panel__content">
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.ep-collapse-panel {
  transition: all 0.3s ease;
}

.ep-collapse-panel--bordered {
  border-bottom: 1px solid var(--ep-border);
}

.ep-collapse-panel--bordered:last-child {
  border-bottom: none;
}

.ep-collapse-panel__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  cursor: pointer;
  user-select: none;
}

.ep-collapse-panel__header-content {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.ep-collapse-panel__title {
  font-weight: 500;
  font-size: 14px;
  color: var(--ep-text-main);
}

.ep-collapse-panel__arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 8px;
  transition: transform 0.3s ease;
  font-size: 12px;
}

.ep-collapse-panel__arrow--active {
  transform: rotate(90deg);
}

.ep-collapse-panel__content-wrapper {
  overflow: hidden;
  transition: height 0.3s ease;
}

/* 动画效果 */
.ep-collapse-transition-enter-active,
.ep-collapse-transition-leave-active {
  transition: height 0.3s ease;
  overflow: hidden;
}

.ep-collapse-transition-enter-from,
.ep-collapse-transition-leave-to {
  height: 0;
}
</style>
