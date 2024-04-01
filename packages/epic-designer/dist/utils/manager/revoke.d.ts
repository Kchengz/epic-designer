import { type ComponentSchema } from '../../core/types/epic-designer';
import { type Ref } from 'vue';
/**
历史记录模型
*/
export interface RecordModel {
    type: string;
    componentSchema: string;
}
/**
 撤销重做功能
 */
export declare function useRevoke(): {
    recordList: Ref<Array<{
        type: string;
        componentSchema: string;
    }>>;
    undoList: Ref<Array<{
        type: string;
        componentSchema: string;
    }>>;
    currentRecord: Ref<{
        type: string;
        componentSchema: string;
    } | null>;
    push: (componentSchema: ComponentSchema[], type?: string) => void;
    undo: () => RecordModel | false;
    redo: () => RecordModel | false;
};
export declare const revoke: {
    recordList: Ref<Array<{
        type: string;
        componentSchema: string;
    }>>;
    undoList: Ref<Array<{
        type: string;
        componentSchema: string;
    }>>;
    currentRecord: Ref<{
        type: string;
        componentSchema: string;
    } | null>;
    push: (componentSchema: ComponentSchema[], type?: string) => void;
    undo: () => RecordModel | false;
    redo: () => RecordModel | false;
};
