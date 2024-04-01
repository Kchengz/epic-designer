import { type Ref } from "vue";
/**
 * 是否按住键盘状态
 * @returns
 *  pressSpace: Ref<boolean>;
 *  pressShift: Ref<boolean>;
 *  pressCtrl: Ref<boolean>;
 */
export declare function useKeyPress(): {
    pressSpace: Ref<boolean>;
    pressShift: Ref<boolean>;
    pressCtrl: Ref<boolean>;
};
/**
 * 拖拽元素
 * @param editScreenContainer
 * @returns
 */
export declare function useElementDrag(editScreenContainer: Ref<HTMLDivElement | null>): {
    handleElementDragStart: (event: DragEvent) => void;
    handleElementDrag: (event: DragEvent) => void;
    handleElementDragEnd: () => void;
};
/**
 * 缩放元素
 * @param draggableElRef
 * @returns
 */
export declare function useElementZoom(draggableElRef: Ref<HTMLDivElement | null>): {
    handleZoom: (event: WheelEvent) => void;
    canvasScale: Ref<number>;
};
/**
 * 创建定时任务hooks
 * @param handler 任务函数
 * @param timeout 任务间隔
 * @returns
 */
export declare function useTimedQuery(handler: () => void, timeout?: number): {
    startTimedQuery: () => void;
    stopTimedQuery: () => void;
};
