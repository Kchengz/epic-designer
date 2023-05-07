import * as monaco from 'monaco-editor';
declare const _sfc_main: import("vue").DefineComponent<{
    modelValue: {
        type: StringConstructor;
        default: string;
    };
    language: {
        type: StringConstructor;
        default: string;
    };
    readOnly: {
        type: BooleanConstructor;
        default: boolean;
    };
    config: {
        type: ObjectConstructor;
        default: () => {
            theme: string;
            selectOnLineNumbers: boolean;
            minimap: {
                enabled: boolean;
            };
            lineNumbers: string;
        };
    };
}, {
    props: any;
    editContainer: import("vue").Ref<HTMLElement | null>;
    monacoEditor: monaco.editor.IStandaloneCodeEditor | null;
    emit: (event: "update:modelValue", ...args: any[]) => void;
    setValue: (text: string) => void;
    insertText: (text: string) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: StringConstructor;
        default: string;
    };
    language: {
        type: StringConstructor;
        default: string;
    };
    readOnly: {
        type: BooleanConstructor;
        default: boolean;
    };
    config: {
        type: ObjectConstructor;
        default: () => {
            theme: string;
            selectOnLineNumbers: boolean;
            minimap: {
                enabled: boolean;
            };
            lineNumbers: string;
        };
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: string;
    language: string;
    readOnly: boolean;
    config: Record<string, any>;
}>;
export default _sfc_main;
