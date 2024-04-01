import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    eventList: {
        type: PropType<any>;
        default: () => never[];
    };
    modelValue: {
        type: PropType<any>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    eventList: {
        type: PropType<any>;
        default: () => never[];
    };
    modelValue: {
        type: PropType<any>;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    eventList: any;
}, {}>;
export default _default;
