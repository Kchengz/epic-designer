import { NodeItem } from '../../../../types/kDesigner';
import { PropType } from 'vue';
declare const _sfc_main: import("vue").DefineComponent<{
    modelValue: {
        type: PropType<NodeItem[]>;
        default: () => never[];
    };
}, {
    Input: any;
    props: any;
    emit: (event: "update:modelValue", ...args: any[]) => void;
    tabList: import("vue").WritableComputedRef<NodeItem[]>;
    handleAdd: () => void;
    handleDelete: (index: number) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: PropType<NodeItem[]>;
        default: () => never[];
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: NodeItem[];
}>;
export default _sfc_main;
