declare const _sfc_main: import("vue").DefineComponent<{
    modelValue: {
        type: StringConstructor;
        default: null;
    };
}, {
    Input: any;
    Select: any;
    props: any;
    emit: (event: "update:modelValue", ...args: any[]) => void;
    size: import("vue").Ref<string | null>;
    unit: import("vue").Ref<string>;
    unitArray: {
        label: string;
        value: string;
    }[];
    handleUpdate: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: StringConstructor;
        default: null;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: string;
}>;
export default _sfc_main;
