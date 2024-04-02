import { type ComponentPublicInstance } from 'vue';
import { ComponentSchema } from '../../../types/epic-designer';
export interface ComponentNodeInstance extends ComponentPublicInstance {
    setValue?: (value: any) => void;
    getValue?: () => any;
    setAttr?: (key: string, value: any) => any;
    getAttr?: (key: string) => any;
}
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    componentSchema: {
        type: import("vue").PropType<ComponentSchema>;
        required: true;
    };
    modelValue: {
        type: import("vue").PropType<any>;
    };
    ruleField: {
        type: import("vue").PropType<string[]>;
    };
    resetFormData: {
        type: import("vue").PropType<Boolean>;
    };
    name: {
        type: import("vue").PropType<string>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], "update:modelValue" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    componentSchema: {
        type: import("vue").PropType<ComponentSchema>;
        required: true;
    };
    modelValue: {
        type: import("vue").PropType<any>;
    };
    ruleField: {
        type: import("vue").PropType<string[]>;
    };
    resetFormData: {
        type: import("vue").PropType<Boolean>;
    };
    name: {
        type: import("vue").PropType<string>;
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {}, {}>, {
    "edit-node"?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
