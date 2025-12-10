<script lang="ts" setup>
import {
  ref,
  computed,
  onMounted,
  onUnmounted,
  watch,
  nextTick,
  type CSSProperties,
} from 'vue';

type TriggerType = 'hover' | 'click' | 'focus' | 'manual';
type PlacementType =
  | 'top'
  | 'topLeft'
  | 'topRight'
  | 'bottom'
  | 'bottomLeft'
  | 'bottomRight'
  | 'left'
  | 'right';
type ColorType = 'default' | 'primary' | 'success' | 'warning' | 'error';

interface Props {
  content?: string;
  trigger?: TriggerType;
  placement?: PlacementType;
  color?: ColorType;
  open?: boolean;
  mouseEnterDelay?: number;
  mouseLeaveDelay?: number;
  arrow?: boolean;
  overlayClassName?: string;
  overlayStyle?: CSSProperties;
}

const props = withDefaults(defineProps<Props>(), {
  content: '',
  trigger: 'hover',
  placement: 'top',
  color: 'default',
  open: undefined,
  mouseEnterDelay: 600,
  mouseLeaveDelay: 100,
  arrow: true,
  overlayClassName: '',
  overlayStyle: () => ({}),
});

const emit = defineEmits<{
  'update:open': [value: boolean];
  openChange: [value: boolean];
  visibleChange: [value: boolean];
}>();

// 状态
const visible = ref(false);
const triggerRef = ref<HTMLElement | null>(null);
const tooltipRef = ref<HTMLElement | null>(null);
const wrapperRef = ref<HTMLElement | null>(null);
const hasClicked = ref(false); // 新增：记录是否点击过

// 定时器
let enterTimer: number | null = null;
let leaveTimer: number | null = null;
let leaveDelayTimer: number | null = null;
// 清除定时器
const clearTimers = () => {
  if (enterTimer) {
    clearTimeout(enterTimer);
    enterTimer = null;
  }
  if (leaveTimer) {
    clearTimeout(leaveTimer);
    leaveTimer = null;
  }
  if (leaveDelayTimer) {
    clearTimeout(leaveDelayTimer);
    leaveDelayTimer = null;
  }
};

// 显示
const show = () => {
  if (visible.value) return;
  if (hasClicked.value) return; // 如果已经点击过，不显示
  clearTimers();

  if (props.mouseEnterDelay > 0) {
    enterTimer = window.setTimeout(() => {
      visible.value = true;
      emit('update:open', true);
      emit('openChange', true);
      emit('visibleChange', true);
      updatePosition();
    }, props.mouseEnterDelay);
  } else {
    visible.value = true;
    emit('update:open', true);
    emit('openChange', true);
    emit('visibleChange', true);
    updatePosition();
  }
};

// 隐藏
const hide = () => {
  if (!visible.value) return;
  clearTimers();

  if (props.mouseLeaveDelay > 0) {
    leaveTimer = window.setTimeout(() => {
      visible.value = false;
      emit('update:open', false);
      emit('openChange', false);
      emit('visibleChange', false);
    }, props.mouseLeaveDelay);
  } else {
    visible.value = false;
    emit('update:open', false);
    emit('openChange', false);
    emit('visibleChange', false);
  }
};

// 智能隐藏：检查鼠标位置
const smartHide = () => {
  if (props.trigger !== 'hover') return;

  clearTimers();

  leaveDelayTimer = window.setTimeout(() => {
    hide();
  }, 100); // 短暂延迟检查
};

// 切换
const toggle = () => {
  if (visible.value) {
    smartHide();
  } else {
    show();
  }
};

// 事件处理
const handleMouseEnter = () => {
  if (props.trigger === 'hover') {
    // 鼠标重新进入时重置点击状态，这样下次悬停时可以重新显示
    hasClicked.value = false;
    show();
  }
};

const handleMouseLeave = () => {
  if (props.trigger === 'hover') {
    smartHide();
  }
};

const handleClick = () => {
  if (props.trigger === 'click') {
    toggle();
  }
  // 无论哪种触发方式，点击后都标记为已点击
  hasClicked.value = true;
  clearTimers(); // 清除所有定时器，包括正在进行的延迟显示
  hide(); // 点击后立即隐藏tooltip
};

// 更新位置
const updatePosition = () => {
  if (!triggerRef.value || !tooltipRef.value) return;
  console.log()
  const nodes = Array.from(triggerRef.value.childNodes);
 const target = nodes.find(node=>node.nodeType===Node.ELEMENT_NODE)
  const triggerRect = target ? (target as Element).getBoundingClientRect() : { top: 0, left: 0, right: 0, bottom: 0, width: 0, height: 0 };
  const tooltipRect = tooltipRef.value!.getBoundingClientRect();
  const scrollX = window.pageXOffset || document.documentElement.scrollLeft;
  const scrollY = window.pageYOffset || document.documentElement.scrollTop;

  let top = 0;
  let left = 0;
  const offset = 8;

  switch (props.placement) {
    case 'top':
    case 'topLeft':
    case 'topRight':
      top = triggerRect.top + scrollY - tooltipRect.height - offset;
      left =
        triggerRect.left +
        scrollX +
        (triggerRect.width - tooltipRect.width) / 2;
      if (props.placement === 'topLeft') left = triggerRect.left + scrollX;
      if (props.placement === 'topRight')
        left = triggerRect.right + scrollX - tooltipRect.width;
      break;

    case 'bottom':
    case 'bottomLeft':
    case 'bottomRight':
      top = triggerRect.bottom + scrollY + offset;
      left =
        triggerRect.left +
        scrollX +
        (triggerRect.width - tooltipRect.width) / 2;
      if (props.placement === 'bottomLeft') left = triggerRect.left + scrollX;
      if (props.placement === 'bottomRight')
        left = triggerRect.right + scrollX - tooltipRect.width;
      break;

    case 'left':
      top =
        triggerRect.top +
        scrollY +
        (triggerRect.height - tooltipRect.height) / 2;
      left = triggerRect.left + scrollX - tooltipRect.width - offset;
      break;

    case 'right':
      top =
        triggerRect.top +
        scrollY +
        (triggerRect.height - tooltipRect.height) / 2;
      left = triggerRect.right + scrollX + offset;
      break;
  }

  // 边界检查
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  if (left < 8) left = 8;
  if (left + tooltipRect.width > viewportWidth - 8) {
    left = viewportWidth - tooltipRect.width - 8;
  }
  if (top < 8) top = 8;
  if (top + tooltipRect.height > viewportHeight - 8) {
    top = viewportHeight - tooltipRect.height - 8;
  }

  tooltipRef.value.style.top = `${top}px`;
  tooltipRef.value.style.left = `${left}px`;
};

// 点击外部关闭
const handleClickOutside = (event: MouseEvent) => {
  if (
    props.trigger === 'click' &&
    visible.value &&
    triggerRef.value &&
    !triggerRef.value.contains(event.target as Node) &&
    tooltipRef.value &&
    !tooltipRef.value.contains(event.target as Node)
  ) {
    smartHide();
  }
};

// 计算样式
const tooltipStyle = computed<CSSProperties>(() => ({
  position: 'fixed',
  zIndex: 9999,
  ...props.overlayStyle,
}));

// 生命周期
onMounted(() => {
  document.addEventListener('click', handleClickOutside);

  // 初始化open属性
  if (props.open !== undefined) {
    visible.value = props.open;
    if (props.open) {
      updatePosition();
    }
  }
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
  clearTimers();
});

// 监听显示状态
watch(visible, (newVal) => {
  if (newVal) {
    nextTick(updatePosition);
  }
});

// 监听open属性变化
watch(
  () => props.open,
  (newVal) => {
    if (newVal !== undefined) {
      visible.value = newVal;
      if (newVal) {
        updatePosition();
      }
    }
  },
);
</script>
<template>
  <!-- 使用 span 作为行内包装器 -->
  <span ref="wrapperRef" class="ep-tooltip-wrapper">
    <!-- 使用内联样式包裹用户内容 -->
    <span
      ref="triggerRef"
      class="ep-tooltip-trigger"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      @click="handleClick"
      :tabindex="trigger === 'focus' ? 0 : undefined"
    >
      <slot />
    </span>
    <!-- Tooltip 内容 -->
    <teleport to="body">
      <transition name="ep-tooltip-fade">
        <div
          v-if="visible"
          ref="tooltipRef"
          class="ep-tooltip"
          :class="[
            `ep-tooltip-placement-${placement}`,
            `ep-tooltip-${color}`
          ]"
          :style="tooltipStyle"
          role="tooltip"
        >
          <div class="ep-tooltip-content">
            <div class="ep-tooltip-arrow" v-if="arrow">
              <span class="ep-tooltip-arrow-content"></span>
            </div>
            <div
              class="ep-tooltip-inner"
              :class="overlayClassName"
              :style="overlayStyle"
            >
              <slot name="content">{{ content }}</slot>
            </div>
          </div>
        </div>
      </transition>
    </teleport>
  </span>
</template>
<style lang="less" scoped>
@import './index.less';
</style>
