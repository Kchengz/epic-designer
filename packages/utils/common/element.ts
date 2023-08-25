import { onKeyUp, onKeyDown } from "@vueuse/core";
import { useShareStore } from "../shareStore";
import { type Ref, watch, ref } from "vue";

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
  onKeyDown(" ", (e) => {
    var element = e.target as HTMLElement;
    if (!["INPUT", "TEXTAREA"].includes(element.tagName)) {
      e.preventDefault();
    }
    pressSpace.value = true;
  });
  onKeyUp(" ", () => {
    pressSpace.value = false;
  });

  onKeyDown("Shift", (e) => {
    e.preventDefault();
    pressShift.value = true;
  });
  onKeyUp("Shift", () => {
    pressShift.value = false;
  });

  onKeyDown("Control", (e) => {
    e.preventDefault();
    pressCtrl.value = true;
  });
  onKeyUp("Control", () => {
    pressCtrl.value = false;
  });

  return { pressSpace, pressShift, pressCtrl };
}

/**
 * 拖拽元素
 * @param editScreenContainer
 * @returns
 */
export function useElementDrag(
  editScreenContainer: Ref<HTMLDivElement | null>
) {
  const { pressSpace } = useShareStore();

  let startX = 0;
  let startY = 0;
  function handleElementDragStart(event: DragEvent) {
    startX = event.x;
    startY = event.y;
    event.dataTransfer?.setDragImage(document.createElement("div"), 0, 0);
  }

  /**
   * 拖拽设计区域
   * @param event
   */
  function handleElementDrag(event: DragEvent) {
    event.preventDefault();
    // 计算新的光标位置：
    if (!event.x || !event.y || !pressSpace.value) {
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

  return { handleElementDragStart, handleElementDrag, handleElementDragEnd };
}

/**
 * 缩放元素
 * @param draggableElRef
 * @returns
 */
export function useElementZoom(draggableElRef: Ref<HTMLDivElement | null>) {
  const { pressCtrl, canvasScale } = useShareStore();
  /**
   * 缩放操作
   * @param e
   * @returns
   */
  function handleZoom(event: WheelEvent) {
    if (!pressCtrl.value) {
      return;
    }
    event.preventDefault();

    let newScale = 0;
    if (event.deltaY < 0) {
      newScale = canvasScale.value + 0.05;
    } else {
      newScale = canvasScale.value - 0.05;
    }
    // 限制缩放范围
    if (newScale > 150 || newScale < 0.5) {
      return;
    }

    canvasScale.value = newScale;
  }

  watch(
    () => canvasScale.value,
    (e) => {
      if (draggableElRef.value) {
        draggableElRef.value.style.transform = `scale(${e})`;
      }
    }
  );

  return { handleZoom, canvasScale };
}

// 定时任务
export function useTimedQuery(handler: () => void, timeout = 16.66) {
  let timer: number;

  function startTimedQuery() {
    stopTimedQuery();
    timer = window.setInterval(handler, timeout);
  }

  function stopTimedQuery() {
    window.clearInterval(timer);
  }
  return {
    startTimedQuery,
    stopTimedQuery,
  };
}
