import { NodeItem } from "../types/kDesigner.d";
export interface recordModel {
    type: string;
    record: string;
}
/**
 撤销重做功能
 */
export declare function useRevoke(): {
    recordList: import("vue").Ref<{
        type: string;
        record: string;
    }[]>;
    undoList: import("vue").Ref<{
        type: string;
        record: string;
    }[]>;
    currentRecord: import("vue").Ref<{
        type: string;
        record: string;
    } | null>;
    push: (record: NodeItem[], type?: string) => true | undefined;
    undo: () => any;
    redo: () => any;
};
export declare const revoke: {
    recordList: import("vue").Ref<{
        type: string;
        record: string;
    }[]>;
    undoList: import("vue").Ref<{
        type: string;
        record: string;
    }[]>;
    currentRecord: import("vue").Ref<{
        type: string;
        record: string;
    } | null>;
    push: (record: NodeItem[], type?: string) => true | undefined;
    undo: () => any;
    redo: () => any;
};
