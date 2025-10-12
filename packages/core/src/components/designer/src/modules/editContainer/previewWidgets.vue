<script lang="ts" setup>
import type { PageManager } from '@epic-designer/manager';
import type {
  ComponentSchema,
  Designer,
  DesignerProps,
  PageSchema,
} from '@epic-designer/types';

import type { Ref } from 'vue';

import { computed, inject, ref, watch } from 'vue';

import { EpicIcon } from '@epic-designer/base-ui';
import { useStore, useTimedQuery } from '@epic-designer/hooks';
import { pluginManager } from '@epic-designer/manager';
import { findSchemaInfoById } from '@epic-designer/utils';
import { useResizeObserver } from '@vueuse/core';

const pageManager = inject('pageManager', {}) as PageManager;
const pageSchema = inject('pageSchema') as PageSchema;
const designer = inject('designer') as Designer;
const designerProps = inject('designerProps') as Ref<DesignerProps>;

const selectorRef = ref<HTMLDivElement | null>(null);
const hoverWidgetRef = ref<HTMLDivElement | null>(null);
const actionBoxRef = ref<HTMLDivElement | null>(null);

const showSelector = ref(false);
const selectorTransition = ref(true);

const selectorPosition = ref<'bottom' | 'center' | 'top'>('top');

const { canvasScale, disabledZoom } = useStore();

let epicEditRange: HTMLDivElement | null = null;

/**
 * 判断组件是否可移动和可拖拽删除
 */
const isRemovableAndDraggable = computed(() => {
  const schemas = designer.state.selectedNode;
  // 没有id不可编辑
  if (!schemas?.id) return false;
  // 判断当前节点类型是否允许拖拽删除
  if (
    designerProps.value.lockDefaultSchemaEdit &&
    pageManager.defaultComponentIds.value.includes(schemas?.id)
  ) {
    // 禁止拖拽删除
    return false;
  }
  return true;
});

/**
 * 获取组件DOM元素的通用函数
 */
const getComponentElement = (node: ComponentSchema) => {
  const componentInstances = pageManager.componentInstances.value;
  const id = node.id;

  // 组件隐藏状态
  if (node.componentProps?.hidden) {
    return null;
  }
  const componentConfig =
    pluginManager.getComponentConfigByType(node.type!) ?? null;
  if (!id || !componentInstances?.[id]) {
    return null;
  }

  if (componentConfig?.defaultSchema.input && node?.noFormItem !== true) {
    return componentInstances[`${id}_formItem`]?.vnode.el as HTMLElement;
  }

  const componentInstance = componentInstances[id];
  const dom = componentInstance?.vnode.el;
  if (!dom || !dom.getBoundingClientRect) {
    return null;
  }
  return dom as HTMLElement;
};

/**
 * 获取选中组件DOM元素
 */
const getSelectComponentElement = computed<HTMLElement | null>(() => {
  if (!designer.state.selectedNode) return null;
  return getComponentElement(designer.state.selectedNode);
});

/**
 * 获取悬停组件DOM元素
 */
const getHoverComponentElement = computed<HTMLElement | null>(() => {
  if (!designer.state.hoverNode) return null;
  return getComponentElement(designer.state.hoverNode);
});

const { mutationObserver, observerConfig: DocumentObserverConfig } =
  initObserve(setSeletorStyle);

const { startTimedQuery, stopTimedQuery } = useTimedQuery(setSeletorStyle);

// 监听选中DOM元素变化
watch(
  () => getSelectComponentElement.value,
  (selectComponentElement) => {
    if (selectComponentElement) {
      showSelector.value = true;
      // 监听DOM元素及子元素的变化
      mutationObserver.observe(selectComponentElement, DocumentObserverConfig);

      const parentNode = selectComponentElement.parentNode as HTMLElement;
      if (parentNode) {
        parentNode.addEventListener('dragstart', () => {
          selectorTransition.value = false;
          startTimedQuery();
        });
        parentNode.addEventListener('dragend', () => {
          selectorTransition.value = true;
          stopTimedQuery();
        });
      }
      setSeletorStyle();
    } else {
      showSelector.value = false;
    }
  },
);

const {
  mutationObserver: hoverMutationObserver,
  observerConfig: hoverObserverConfig,
} = initObserve(setHoverStyle);

// 监听悬停DOM元素变化
watch(
  () => getHoverComponentElement.value,
  (hoverComponentElement) => {
    if (hoverComponentElement) {
      // 监听DOM元素及子元素的变化
      hoverMutationObserver.observe(hoverComponentElement, hoverObserverConfig);
      setHoverStyle();
    }
  },
);

let oldScrollTop = 0;
let oldScrollLeft = 0;
/**
 * 设置选择部件 样式 定位 宽高
 */
function setSeletorStyle() {
  const element = getSelectComponentElement.value;
  if (!element || !epicEditRange) return;

  const { left: offsetX, top: offsetY } = epicEditRange.getBoundingClientRect();

  let rect = element.getBoundingClientRect?.();
  if (!rect && element.nextElementSibling) {
    // 如果第一个元素是文本节点/注释节点，则获取第二个元素的位置信息
    rect = element.nextElementSibling.getBoundingClientRect();
  }
  const { height, left, top, width } = rect;

  const scale = disabledZoom.value ? 1 : canvasScale.value;
  // 计算选择器部件位置
  const selectorTop = top - offsetY + (epicEditRange?.scrollTop ?? 0) * scale;
  const selectorLeft =
    left - offsetX + (epicEditRange?.scrollLeft ?? 0) * scale;

  const selectorRefHeight = height / scale;

  if (selectorRef.value) {
    selectorRef.value.style.width = `${width / scale}px`;
    selectorRef.value.style.height = `${selectorRefHeight}px`;
    selectorRef.value.style.top = `${selectorTop / scale}px`;
    selectorRef.value.style.left = `${selectorLeft / scale}px`;
    scrollIntoView(selectorTop, selectorLeft);
  }

  // 调整操作调位置 start
  // 判断actionBoxRef是否有值
  if (!actionBoxRef.value) {
    return;
  }

  // 判断actionBoxRef位置是否应该置于底部 距离顶部45px 高度100px
  if (selectorTop < 45 && selectorRefHeight < 100) {
    actionBoxRef.value.style.top = '';
    actionBoxRef.value.style.bottom = '-30px';
    actionBoxRef.value.style['border-radius'] = '0px 0px 4px 4px';
    selectorPosition.value = 'bottom';
  } else if (selectorTop < 45) {
    // 判断actionBoxRef位置置于中间
    actionBoxRef.value.style.top = '0px';
    actionBoxRef.value.style['border-radius'] = '0px 0px 4px 0';
    selectorPosition.value = 'center';
  } else {
    // actionBoxRef位置置于顶部
    actionBoxRef.value.style.top = '-30px';
    actionBoxRef.value.style['border-radius'] = '4px 4px 0px 0px';
    selectorPosition.value = 'top';
  }
  // 调整操作调位置 end
}

/**
 * 滚动进入可视区
 */
function scrollIntoView(selectorTop: number, selectorLeft: number) {
  // 自动滚动到元素可视区域 start
  const element = getSelectComponentElement.value;
  if (!epicEditRange || !element) return;
  // 获取两个元素的边界框信息
  const rect2 = epicEditRange.getBoundingClientRect();
  const { width } = element.getBoundingClientRect();

  const scale = disabledZoom.value ? 1 : canvasScale.value;

  // 使selectComponentElement位于可见区域内
  const newScrollTop = selectorTop / scale - rect2.top;
  let newScrollLeft = selectorLeft / scale - rect2.left + width / scale;
  newScrollLeft < rect2.width && (newScrollLeft = 0);
  const yMin = epicEditRange.scrollTop - rect2.height / 3 + 60;
  const yMax = epicEditRange.scrollTop + (rect2.height / 3) * 2;
  const xMin = epicEditRange.scrollLeft - rect2.width + 200;
  const xMax = epicEditRange.scrollLeft + rect2.width - 200;

  // 判断定位误差是否小于10px，小于则不处理
  if (
    Math.abs(newScrollTop - oldScrollTop) < 10 &&
    Math.abs(newScrollLeft - oldScrollLeft) < 10
  )
    return;
  oldScrollTop = newScrollTop;
  oldScrollLeft = newScrollLeft;
  if (
    newScrollTop > yMin &&
    newScrollTop < yMax &&
    newScrollLeft > xMin &&
    newScrollLeft < xMax
  )
    return;

  epicEditRange.scrollTop = newScrollTop;
  epicEditRange.scrollLeft = newScrollLeft;
  // 自动滚动到元素可视区域 end
}

/**
 * 设置悬停部件 样式 定位 宽高
 */
function setHoverStyle() {
  const element = getHoverComponentElement.value;

  if (!element || !epicEditRange) return;
  const { left: offsetX, top: offsetY } = epicEditRange.getBoundingClientRect();

  let rect = element.getBoundingClientRect?.();
  if (!rect && element.nextElementSibling) {
    // 如果第一个元素是文本节点/注释节点，则获取第二个元素的位置信息
    rect = element.nextElementSibling.getBoundingClientRect();
  }
  const { height, left, top, width } = rect;
  const scale = disabledZoom.value ? 1 : canvasScale.value;

  // 计算选择器部件位置
  const hoverTop = top - offsetY + (epicEditRange.scrollTop ?? 0) * scale;
  const hoverLeft = left - offsetX + (epicEditRange.scrollLeft ?? 0) * scale;

  if (hoverWidgetRef.value) {
    hoverWidgetRef.value.style.width = `${width / scale}px`;
    hoverWidgetRef.value.style.height = `${height / scale}px`;
    hoverWidgetRef.value.style.top = `${hoverTop / scale}px`;
    hoverWidgetRef.value.style.left = `${hoverLeft / scale}px`;
  }
}

/**
 * 实例化观察者对象
 */
function initObserve(func: () => void) {
  const MutationObserver = window.MutationObserver;

  const observerConfig = {
    attributes: true,
    childList: true,
    subtree: true,
  };

  // 初始化观察者实例
  const mutationObserver = new MutationObserver(func);

  return {
    mutationObserver,
    observerConfig,
  };
}

/**
 * 选择父节点
 */
function handleSelectParentNode() {
  const data = findSchemaInfoById(
    pageSchema.schemas,
    designer.state.selectedNode?.id ?? 'root',
  );
  if (!data) {
    return false;
  }
  const { parentSchema } = data;
  designer.setSelectedNode(parentSchema);
}

// 初始化函数，传入一个指向 Epic 编辑范围的引用
function handleInit(epicEditRangeRef) {
  epicEditRange = epicEditRangeRef;
  epicEditRange?.addEventListener('scroll', () => {
    setSeletorStyle();
  });

  // 监听选中元素视窗变化
  useResizeObserver(getSelectComponentElement, setSeletorStyle);
  // 监听悬停元素视窗变化
  useResizeObserver(getHoverComponentElement, setHoverStyle);
}

defineExpose({
  handleInit,
});
</script>
<template>
  <!-- 选中高亮 start  -->
  <div
    v-show="showSelector && designer.state.selectedNode?.id !== 'root'"
    ref="selectorRef"
    class="epic-selected-widget z-999 pointer-events-none absolute"
    :class="`${selectorPosition} ${selectorTransition ? 'transition-all' : ''}`"
  >
    <div ref="actionBoxRef" class="epic-widget-action-box">
      <div class="epic-widget-action-item whitespace-nowrap">
        <!-- {{ designer.state.selectedNode?.type }} -->
        {{
          pluginManager.getComponentConfigByType(
            designer.state.selectedNode?.type ?? '',
          )?.defaultSchema.label
        }}
      </div>
      <!-- 操作按钮 start  -->
      <div v-if="isRemovableAndDraggable" class="flex items-center">
        <div
          title="选择父节点"
          class="epic-widget-action-item pointer-events-auto"
          @click="handleSelectParentNode"
        >
          <EpicIcon name="icon--epic--upward" />
        </div>
        <div
          title="复制"
          class="epic-widget-action-item pointer-events-auto"
          @click="designer.handleDuplicate"
        >
          <EpicIcon name="icon--epic--copy-all-outline-rounded" />
        </div>
        <div
          title="删除"
          class="epic-widget-action-item pointer-events-auto"
          @click="designer.handleDelete"
        >
          <EpicIcon name="icon--epic--delete-outline-rounded" />
        </div>
      </div>
      <!-- 操作按钮 end  -->
    </div>
  </div>
  <!-- 选中高亮 end  -->
  <!-- 悬停效果 start  -->
  <div
    v-show="
      designer.state.hoverNode &&
      designer.state.selectedNode?.id !== designer.state.hoverNode?.id
    "
    ref="hoverWidgetRef"
    class="epic-hover-widget z-998 pointer-events-none absolute"
  ></div>
  <!-- 悬停效果 end  -->
</template>
