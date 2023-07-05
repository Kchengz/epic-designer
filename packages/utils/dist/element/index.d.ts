import { useKeyPress } from "./keyboard";
import { type Ref } from "vue";
export declare const useShareKeyPress: typeof useKeyPress;
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
export declare function useTimedQuery(handler: () => void, timeout?: number): {
    startTimedQuery: () => void;
    stopTimedQuery: () => void;
};
