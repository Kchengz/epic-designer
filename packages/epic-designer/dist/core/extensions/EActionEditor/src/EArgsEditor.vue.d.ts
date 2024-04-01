import { ComponentSchema } from '../../../types/epic-designer';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: import("vue").PropType<string | null | undefined>;
        required: true;
    };
    actionArgsConfigs: {
        type: import("vue").PropType<ComponentSchema[]>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: import("vue").PropType<string | null | undefined>;
        required: true;
    };
    actionArgsConfigs: {
        type: import("vue").PropType<ComponentSchema[]>;
        required: true;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {}, {}>;
export default _default;
