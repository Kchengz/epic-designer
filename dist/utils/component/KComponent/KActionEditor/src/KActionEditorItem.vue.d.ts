import { PropType, Ref } from 'vue';
import { NodeItem } from '../../../../../types/kDesigner';
declare const _sfc_main: import("vue").DefineComponent<{
    modelValue: {
        type: PropType<any>;
        default: () => {};
    };
    itemEvents: {
        type: PropType<any>;
    };
    allEvents: {
        type: PropType<any>;
    };
    events: {
        type: PropType<any>;
    };
}, {
    props: any;
    emit: (event: "update:modelValue" | "add", ...args: any[]) => void;
    schemas: Ref<NodeItem[]>;
    handleOpen: (type: string) => void;
    getLabel: (id: string) => string | undefined;
    handleDelete: (index: number, type: string) => void;
    getNewEvents: (type: string) => {
        [type: string]: any;
    };
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "add")[], "update:modelValue" | "add", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: PropType<any>;
        default: () => {};
    };
    itemEvents: {
        type: PropType<any>;
    };
    allEvents: {
        type: PropType<any>;
    };
    events: {
        type: PropType<any>;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onAdd?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: any;
}>;
export default _sfc_main;
