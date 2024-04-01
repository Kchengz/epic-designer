import type { editor } from 'monaco-editor';
/**
 * 设置文本
 * @param text
 */
declare function setValue(text: string): void;
/**
 * 光标处插入文本
 * @param text
 */
declare function insertText(text: string): void;
declare const _default: import("vue").DefineComponent<{
    readOnly: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    modelValue: {
        type: import("vue").PropType<any>;
    };
    language: {
        type: import("vue").PropType<string>;
        default: string;
    };
    valueFormat: {
        type: import("vue").PropType<string>;
        default: string;
    };
    config: {
        type: import("vue").PropType<editor.IStandaloneEditorConstructionOptions>;
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
    setValue: typeof setValue;
    insertText: typeof insertText;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readOnly: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    modelValue: {
        type: import("vue").PropType<any>;
    };
    language: {
        type: import("vue").PropType<string>;
        default: string;
    };
    valueFormat: {
        type: import("vue").PropType<string>;
        default: string;
    };
    config: {
        type: import("vue").PropType<editor.IStandaloneEditorConstructionOptions>;
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
    readOnly: boolean;
    language: string;
    valueFormat: string;
    config: editor.IStandaloneEditorConstructionOptions;
}, {}>;
export default _default;
