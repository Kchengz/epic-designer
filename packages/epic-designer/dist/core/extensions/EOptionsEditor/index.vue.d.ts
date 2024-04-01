interface Option {
    label: string;
    value: string;
    children?: Option[];
}
declare const _default: import("vue").DefineComponent<{
    tree: {
        type: import("vue").PropType<boolean>;
    };
    modelValue: {
        type: import("vue").PropType<Option[]>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tree: {
        type: import("vue").PropType<boolean>;
    };
    modelValue: {
        type: import("vue").PropType<Option[]>;
        required: true;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {}, {}>;
export default _default;
