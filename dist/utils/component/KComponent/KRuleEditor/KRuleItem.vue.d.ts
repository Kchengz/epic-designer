import { FormItemRule } from './types';
import { PropType } from 'vue';
import { PageManager } from '../../../index';
declare const _sfc_main: import("vue").DefineComponent<{
    rule: {
        type: PropType<FormItemRule>;
        required: true;
    };
}, {
    pageManager: PageManager;
    props: any;
    methodOptions: import("vue").ComputedRef<{
        label: string;
        value: string;
    }[]>;
    lenTypeOptions: string[];
    triggerOptions: {
        label: string;
        value: string;
    }[];
    typeOptions: {
        label: string;
        value: string;
    }[];
    ruleItemSchemas: ({
        type: string;
        label: string;
        model: string;
        componentProps: {
            options: {
                label: string;
                value: string;
            }[];
            placeholder: string;
            multiple: boolean;
            mode: string;
            min?: undefined;
        };
        show?: undefined;
    } | {
        type: string;
        label: string;
        model: string;
        componentProps?: undefined;
        show?: undefined;
    } | {
        type: string;
        label: string;
        model: string;
        show(): boolean;
        componentProps: {
            options: {
                label: string;
                value: string;
            }[];
            placeholder: string;
            multiple?: undefined;
            mode?: undefined;
            min?: undefined;
        };
    } | {
        type: string;
        label: string;
        model: string;
        show(): boolean;
        componentProps: {
            placeholder: string;
            options?: undefined;
            multiple?: undefined;
            mode?: undefined;
            min?: undefined;
        };
    } | {
        type: string;
        label: string;
        model: string;
        show(): boolean;
        componentProps: {
            min: number;
            placeholder: string;
            options?: undefined;
            multiple?: undefined;
            mode?: undefined;
        };
    } | {
        type: string;
        label: string;
        model: string;
        componentProps: {
            placeholder: string;
            options?: undefined;
            multiple?: undefined;
            mode?: undefined;
            min?: undefined;
        };
        show?: undefined;
    })[];
    emit: (event: "change" | "update:rule" | "delete", ...args: any[]) => void;
    rule: import("vue").Ref<{
        [x: string]: any;
        trigger?: string | string[] | undefined;
        required?: boolean | undefined;
        type?: string | undefined;
        pattern?: string | {
            exec: (string: string) => RegExpExecArray | null;
            test: (string: string) => boolean;
            readonly source: string;
            readonly global: boolean;
            readonly ignoreCase: boolean;
            readonly multiline: boolean;
            lastIndex: number;
            compile: (pattern: string, flags?: string | undefined) => RegExp;
            readonly flags: string;
            readonly sticky: boolean;
            readonly unicode: boolean;
            readonly dotAll: boolean;
            [Symbol.match]: (string: string) => RegExpMatchArray | null;
            [Symbol.replace]: {
                (string: string, replaceValue: string): string;
                (string: string, replacer: (substring: string, ...args: any[]) => string): string;
            };
            [Symbol.search]: (string: string) => number;
            [Symbol.split]: (string: string, limit?: number | undefined) => string[];
            [Symbol.matchAll]: (str: string) => IterableIterator<RegExpMatchArray>;
        } | undefined;
        min?: number | undefined;
        max?: number | undefined;
        len?: number | undefined;
        enum?: (string | number | boolean | null | undefined)[] | undefined;
        whitespace?: boolean | undefined;
        validator?: string | undefined;
        isValidator?: boolean | undefined;
        message?: string | ((a?: string | undefined) => string) | undefined;
    }>;
    handleUpdate: () => void;
    handleDelete: () => void;
    readonly KNode: import("vue").DefineComponent<{
        record: {
            type: PropType<import("../../../../types/kDesigner").NodeItem>;
            required: true;
        };
        modelValue: {};
    }, {
        formData: import("../../../../types/kDesigner").FormDataModel;
        slots: Readonly<{
            [name: string]: import("vue").Slot | undefined;
        }>;
        pageManager: PageManager;
        emit: (event: "change" | "update:modelValue", ...args: any[]) => void;
        FormItem: any;
        componentInstance: import("vue").Ref<null>;
        props: any;
        component: any;
        componentProps: any;
        dataSource: any;
        show: import("vue").ComputedRef<boolean>;
        getFormItemProps: import("vue").ComputedRef<{
            rules: false | {
                validator: any;
                trigger?: string | string[] | undefined;
                required?: boolean | undefined;
                type?: string | undefined;
                pattern?: string | RegExp | undefined;
                min?: number | undefined;
                max?: number | undefined;
                len?: number | undefined;
                enum?: (string | number | boolean | null | undefined)[] | undefined;
                whitespace?: boolean | undefined;
                isValidator?: boolean | undefined;
                message?: string | ((a?: string | undefined) => string) | undefined;
            }[] | undefined;
            type: string;
            label?: string | undefined;
            field?: string | undefined;
            name?: string | undefined;
            slotName?: string | undefined;
            componentProps?: any;
            id?: string | undefined;
            labelCol?: any;
            wrapperCol?: any;
            children?: import("../../../../types/kDesigner").NodeItem[] | undefined;
            show?: boolean | ((renderCallbackParams: import("../../../../types/kDesigner").RenderCallbackParams) => boolean) | undefined;
        }>;
        initComponent: () => Promise<false | undefined>;
        fetchData: (api: string | Function, record: import("../../../../types/kDesigner").NodeItem) => void;
        handleUpdate: (v: any) => void;
        oldData: string | null;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue")[], "change" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        record: {
            type: PropType<import("../../../../types/kDesigner").NodeItem>;
            required: true;
        };
        modelValue: {};
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        onChange?: ((...args: any[]) => any) | undefined;
    }, {}>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:rule" | "delete")[], "change" | "update:rule" | "delete", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    rule: {
        type: PropType<FormItemRule>;
        required: true;
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:rule"?: ((...args: any[]) => any) | undefined;
    onDelete?: ((...args: any[]) => any) | undefined;
}, {}>;
export default _sfc_main;
