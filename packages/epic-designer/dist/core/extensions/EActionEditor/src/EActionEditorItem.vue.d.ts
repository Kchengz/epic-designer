import { type PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    itemEvents: {
        type: PropType<any>;
        default: () => never[];
    };
    allEvents: {
        type: PropType<any>;
        default: () => never[];
    };
    modelValue: {
        type: PropType<any>;
        default: () => never[];
    };
    events: {
        type: PropType<any>;
        default: () => {};
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "add" | "edit")[], "update:modelValue" | "add" | "edit", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    itemEvents: {
        type: PropType<any>;
        default: () => never[];
    };
    allEvents: {
        type: PropType<any>;
        default: () => never[];
    };
    modelValue: {
        type: PropType<any>;
        default: () => never[];
    };
    events: {
        type: PropType<any>;
        default: () => {};
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onAdd?: ((...args: any[]) => any) | undefined;
    onEdit?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: any;
    itemEvents: any;
    allEvents: any;
    events: any;
}, {}>;
export default _default;
