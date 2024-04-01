/**
 * 创建状态
 */
export declare function useStore(): {
    canvasScale: import("vue").Ref<number>;
    pressSpace: import("vue").Ref<boolean>;
    pressShift: import("vue").Ref<boolean>;
    pressCtrl: import("vue").Ref<boolean>;
    disabledZoom: import("vue").Ref<boolean>;
};
export declare const useShareStore: typeof useStore;
