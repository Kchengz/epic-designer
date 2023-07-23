import { type NodeItem } from '@epic-designer/core/types/epic-designer';
import { type Ref } from 'vue';
/**
历史记录模型
*/
export interface RecordModel {
    type: string;
    record: string;
}
/**
 撤销重做功能
 */
export declare function useRevoke(): {
    recordList: Ref<Array<{
        type: string;
        record: string;
    }>>;
    undoList: Ref<Array<{
        type: string;
        record: string;
    }>>;
    currentRecord: Ref<{
        type: string;
        record: string;
    } | null>;
    push: (record: NodeItem[], type?: string) => void;
    undo: () => RecordModel | false;
    redo: () => RecordModel | false;
};
export declare const revoke: {
    recordList: Ref<Array<{
        type: string;
        record: string;
    }>>;
    undoList: Ref<Array<{
        type: string;
        record: string;
    }>>;
    currentRecord: Ref<{
        type: string;
        record: string;
    } | null>;
    push: (record: NodeItem[], type?: string) => void;
    undo: () => RecordModel | false;
    redo: () => RecordModel | false;
};
