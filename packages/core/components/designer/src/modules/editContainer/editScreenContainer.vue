<script lang="ts" setup>
import type { Ref } from 'vue';

import type { PageSchema } from '../../../../../types/epic-designer';

import {
  computed,
  inject,
  nextTick,
  onMounted,
  ref,
  shallowRef,
  watch,
  watchEffect,
} from 'vue';

import { useElementDrag, useElementZoom, useStore } from '@epic-designer/hooks';
import { debounce } from '@epic-designer/utils';
import { useElementSize, useResizeObserver, watchOnce } from '@vueuse/core';

import { DesignerProps } from '../../types';
import Toolbar from './toolbar.vue';

const designerProps = inject('designerProps') as Ref<DesignerProps>;
const pageSchema = inject('pageSchema') as PageSchema;

const editScreenContainerRef = ref<HTMLDivElement | null>(null);
const draggableElRef = ref<HTMLDivElement | null>(null);
const sizeBoxRef = ref<HTMLDivElement | null>(null);

const { disabledZoom, pressSpace } = useStore();
const { handleElementDrag, handleElementDragEnd, handleElementDragStart } =
  useElementDrag(editScreenContainerRef);
const { height, width } = useElementSize(editScreenContainerRef);
const { canvasScale, handleZoom } = useElementZoom(draggableElRef);

const draggableComputed = computed(() => {
  return pressSpace.value && designerProps.value.draggable;
});

let contentRectWidth = 0;
let contentRectHeight = 0;

const scrollBoxStyle = ref<{
  height?: string;
  width?: string;
}>({});
const canvasBoxStyle = ref<{
  height?: string;
  transform?: string;
  width?: string;
}>({});
const sizeBoxStyle = ref<{
  height?: string;
  width?: string;
}>({});

// 定义一个响应式引用，用于存储画布属性（宽度和高度）。
const getCanvasAttribute = shallowRef<{
  height: number;
  width: number;
}>({ height: 0, width: 0 });

// 判断是否允许拖拽画布,如果允许拖拽，返回返回滚动容器的样式，否则返回默认的样式。
const scrollBoxStyleComputed = computed(() => {
  return designerProps.value.draggable
    ? scrollBoxStyle.value
    : {
        height: '100%',
        width: '100%',
      };
});

// 监听 `pageSchema` 中画布尺寸的变化，当变化时调用 `updateSizeBoxStyle` 函数。
watchEffect(updateSizeBoxStyle);

// 监听 `sizeBoxStyle` 的变化，DOM 更新后调用 `updateCanvasAttribute` 函数。
onMounted(() => {
  watch(
    sizeBoxStyle,
    () => {
      nextTick(updateCanvasAttribute);
    },
    { immediate: true },
  );
});

// 更新 `getCanvasAttribute`，将当前画布元素的大小赋值给它。
function updateCanvasAttribute() {
  // 如果 `sizeBoxRef` 未定义，则退出函数。
  if (!sizeBoxRef.value) return;

  // 更新 `getCanvasAttribute`。
  getCanvasAttribute.value = {
    height: sizeBoxRef.value.clientHeight,
    width: sizeBoxRef.value.clientWidth,
  };
}

// 根据新的尺寸更新 `sizeBoxStyle`。
function updateSizeBoxStyle() {
  sizeBoxStyle.value = {
    height: pageSchema.canvas?.height ?? '0',
    width: pageSchema.canvas?.width ?? '0',
  };
}

// 初始化页面样式
watchOnce(width, updateScrollBoxStyle);
// 动态适配设计区域宽度
watch(getCanvasAttribute, updateScrollBoxStyle);

/**
 * 更新滚动容器和画布的样式。
 *
 * 根据 `disabledZoom` 的值，决定是否禁用画布的缩放功能，
 * 并相应地更新滚动容器和画布的样式。
 */
function updateScrollBoxStyle() {
  // 获取画布的宽度和高度，如果没有提供，则使用默认值
  const canvasWidth = getCanvasAttribute.value.width || contentRectWidth;
  const canvasHeight = getCanvasAttribute.value.height || contentRectHeight;

  // 更新滚动容器的样式，画布的尺寸和额外的宽度/高度
  scrollBoxStyle.value = {
    height: `${height.value + canvasHeight}px`, // 滚动容器高度
    width: `${width.value + canvasWidth}px`, // 滚动容器宽度
  };

  // 更新画布的样式，使用实际的画布尺寸
  canvasBoxStyle.value = {
    height: `${canvasHeight}px`, // 画布高度
    width: `${canvasWidth}px`, // 画布宽度
  };

  // 调整滚动容器的位置，以适应更新后的样式
  setScroll();
}

/**
 * 设置滚动条位置到画布中心
 *
 * 此函数在下一个DOM更新循环后执行，确保所有DOM操作完成后再设置滚动位置。
 * 使用getCanvasAttribute.value获取画布的宽度和高度，如果未设置则使用contentRectWidth和contentRectHeight作为默认值。
 * 计算画布中心的水平和垂直坐标，然后将编辑屏幕容器的滚动位置设置到这些坐标上。
 */
function setScroll() {
  // 在下一个DOM更新循环后执行，确保所有DOM操作完成
  nextTick(() => {
    // 获取或计算画布宽度
    const canvasWidth = getCanvasAttribute.value.width || contentRectWidth;
    // 获取或计算画布高度
    const canvasHeight = getCanvasAttribute.value.height || contentRectHeight;

    // 计算画布中心的垂直坐标
    const scrollTop = canvasHeight / 2;
    // 计算画布中心的水平坐标
    const scrollLeft = canvasWidth / 2;

    // 将编辑屏幕容器的滚动位置设置到画布中心
    editScreenContainerRef.value?.scrollTo(scrollLeft, scrollTop);
  });
}

// 使用 ResizeObserver 监听editScreenContainerRef编辑屏幕容器尺寸变化
useResizeObserver(editScreenContainerRef, computedScale);
useResizeObserver(draggableElRef, computedScale);

function computedScale() {
  if (!editScreenContainerRef.value) return;
  const contentRect = editScreenContainerRef.value.getBoundingClientRect();
  // 计算编辑屏幕容器的宽度和高度，减去固定的边距值
  contentRectWidth = contentRect.width - 60;
  contentRectHeight = contentRect.height - 80;

  // 如果画布缩放未被禁用
  if (!disabledZoom.value) {
    // 如果画布的宽度为0，即没有内容
    if (getCanvasAttribute.value.width === 0) {
      // 设置画布缩放为默认值1
      canvasScale.value = 1;
    } else {
      // 计算画布应该缩放的比例，使其适应容器的宽度
      // 减去20是为了留出一定的边距，防止内容紧贴容器边缘
      const scaleW = (contentRectWidth - 20) / getCanvasAttribute.value.width;

      // 计算画布应该缩放的比例，使其适应容器的高度
      // 使用||运算符确保不会除以0，如果getCanvasAttribute.value.height不存在或为0，则使用draggableElRef.value的clientHeight或默认为1
      const scaleH =
        contentRectHeight /
        (getCanvasAttribute.value.height ||
          draggableElRef.value?.clientHeight ||
          1);

      // 判断scaleW和scaleH哪个更接近于1，这通常意味着画布更接近于其原始大小
      const isScaleWCloserTo1 = Math.abs(scaleW - 1) < Math.abs(scaleH - 1);
      let scale = 1; // 初始化scale为1，表示无缩放

      // 如果scaleW更接近于1，则使用scaleW作为缩放比例
      isScaleWCloserTo1 ? (scale = scaleW) : (scale = scaleH);

      // 如果scaleW或scaleH小于1，意味着画布至少在某个方向上需要缩小以适应容器
      // 在这种情况下，选择两者中最小的一个作为scale，确保画布完全可见
      if (scaleW < 1 || scaleH < 1) {
        scale = Math.min(scaleW, scaleH);
      }

      // 更新画布的缩放比例，但只有当计算的缩放比例在0.5到1.4之间时才进行更新,防止过度放大或缩小
      scale < 1.4 && scale > 0.5 && (canvasScale.value = scale);
    }
  }

  // 更新滚动区域的样式，根据新的容器尺寸和画布缩放
  debounce(updateScrollBoxStyle, 50)();
}
</script>
<template>
  <div class="relative flex h-full flex-col">
    <!-- 工具条 start  -->
    <Toolbar />
    <!-- 工具条 end  -->

    <div
      ref="editScreenContainerRef"
      class="epic-edit-screen-container flex-1 overflow-auto overflow-y-hidden"
      :class="{ 'cursor-grab': draggableComputed }"
      :draggable="draggableComputed"
      @wheel="handleZoom"
      @dragstart="handleElementDragStart($event, draggableComputed)"
      @drag="handleElementDrag($event, draggableComputed)"
      @dragend="handleElementDragEnd"
    >
      <div
        id="canvasContainer"
        class="flex items-center justify-center"
        :style="scrollBoxStyleComputed"
      >
        <div ref="draggableElRef" class="transition-all">
          <div
            :class="{ 'pointer-events-none': draggableComputed }"
            :style="canvasBoxStyle"
          >
            <slot></slot>
          </div>
        </div>
      </div>
    </div>

    <!-- 画布宽高计算盒子 start -->
    <div
      ref="sizeBoxRef"
      class="pointer-events-none absolute top-0"
      :style="sizeBoxStyle"
    ></div>
    <!-- 画布宽高计算盒子 end -->
  </div>
</template>
