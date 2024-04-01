import { PropType } from 'vue';
import { FormItemRule } from './types';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: PropType<FormItemRule[] | undefined>;
        default: undefined;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: PropType<FormItemRule[] | undefined>;
        default: undefined;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: FormItemRule[] | undefined;
}, {}>;
export default _default;
