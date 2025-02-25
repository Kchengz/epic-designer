import type { Ref } from 'vue';

import { ref, watch } from 'vue';

import { onKeyDown, onKeyUp } from '@vueuse/core';

import { useStore } from '../store';

/**
 * 是否按住键盘状态
 * @returns
 *  pressSpace: Ref<boolean>;
 *  pressShift: Ref<boolean>;
 *  pressCtrl: Ref<boolean>;
 */
export function useKeyPress() {
  // 是否按住空格键
  const pressSpace = ref(false);
  // 是否按住shift键
  const pressShift = ref(false);
  // 是否按住ctrl键
  const pressCtrl = ref(false);

  onKeyDown(' ', () => {
    pressSpace.value = true;
  });
  onKeyUp(' ', () => {
    pressSpace.value = false;
  });

  onKeyDown('Shift', (e) => {
    e.preventDefault();
    pressShift.value = true;
  });
  onKeyUp('Shift', () => {
    pressShift.value = false;
  });

  onKeyDown('Control', (e) => {
    e.preventDefault();
    pressCtrl.value = true;
  });
  onKeyUp('Control', () => {
    pressCtrl.value = false;
  });

  return { pressCtrl, pressShift, pressSpace };
}

/**
 * 拖拽元素
 * @param editScreenContainer
 */
export function useElementDrag(
  editScreenContainer: Ref<HTMLDivElement | null>,
) {
  const { pressSpace } = useStore();
  // 预先创建一个1x1的透明图片，修正 Chrome 下鼠标出现地球的问题，Safari 下拖拽阴影问题
  const img = new Image(1, 1);
  img.src =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==';

  let startX = 0;
  let startY = 0;
  function handleElementDragStart(event: DragEvent, draggable = false) {
    // 检查是否启用画布拖拽
    if (!draggable) {
      return;
    }
    startX = event.x;
    startY = event.y;
    event.dataTransfer?.setDragImage(document.createElement('div'), 0, 0);
  }

  /**
   * 拖拽设计区域
   * @param event
   */
  function handleElementDrag(event: DragEvent, draggable = false) {
    event.preventDefault();
    // 计算新的光标位置：
    if (!event.x || !event.y || !draggable) {
      return;
    }
    const offsetX = event.x - startX;
    const offsetY = event.y - startY;
    startX = event.x;
    startY = event.y;
    if (editScreenContainer.value) {
      editScreenContainer.value.scrollTop -= offsetY;
      editScreenContainer.value.scrollLeft -= offsetX;
    }
  }

  function handleElementDragEnd() {
    pressSpace.value = false;
  }

  return { handleElementDrag, handleElementDragEnd, handleElementDragStart };
}

/**
 * 缩放元素
 * @param draggableElRef
 */
export function useElementZoom(draggableElRef: Ref<HTMLDivElement | null>) {
  const { canvasScale, disabledZoom } = useStore();
  /**
   * 缩放操作
   * @param event 鼠标滚轮事件
   */
  function handleZoom(event: WheelEvent) {
    if (!event.ctrlKey || disabledZoom.value) {
      return;
    }
    event.preventDefault();

    let newScale = 0;
    newScale =
      event.deltaY < 0 ? canvasScale.value + 0.05 : canvasScale.value - 0.05;
    // 限制缩放范围
    if (newScale > 150 || newScale < 0.5) {
      return;
    }

    canvasScale.value = newScale;
  }

  // 启用监听缩放
  watch(
    () => canvasScale.value,
    (e) => {
      if (draggableElRef.value && !disabledZoom.value) {
        draggableElRef.value.style.transform = `scale(${e})`;
      }
    },
  );

  return { canvasScale, handleZoom };
}

/**
 * 创建定时任务hooks
 * @param handler 任务函数
 * @param timeout 任务间隔
 */
export function useTimedQuery(handler: () => void, timeout = 16.66) {
  let timer: number;

  /**
   * 开始任务执行
   */
  function startTimedQuery() {
    stopTimedQuery();
    timer = window.setInterval(handler, timeout);
  }

  /**
   * 结束任务执行
   */
  function stopTimedQuery() {
    window.clearInterval(timer);
  }
  return {
    startTimedQuery,
    stopTimedQuery,
  };
}
