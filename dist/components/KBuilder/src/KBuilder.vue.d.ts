import type { PropType } from 'vue';
import { NodeItem, FormDataModel } from '../../../types/kDesigner';
declare const _sfc_main: import("vue").DefineComponent<{
    schemas: {
        type: PropType<NodeItem[]>;
    };
    script: {
        type: StringConstructor;
        default: string;
    };
}, {
    KAsyncLoader: any;
    pageManager: import("../../../utils/pageManager").PageManager;
    emit: (event: "ready", ...args: any[]) => void;
    formData: FormDataModel;
    slots: Readonly<{
        [name: string]: import("vue").Slot | undefined;
    }>;
    forms: any;
    props: any;
    getData: (formName?: string) => Promise<FormDataModel | boolean>;
    validate: (formName?: string) => Promise<FormDataModel | boolean>;
    setData: (data: FormDataModel) => void;
    handleReady: () => void;
    readonly KNode: import("vue").DefineComponent<{
        record: {
            type: PropType<NodeItem>;
            required: true;
        };
        modelValue: {};
    }, {
        formData: FormDataModel;
        slots: Readonly<{
            [name: string]: import("vue").Slot | undefined;
        }>;
        pageManager: import("../../../utils/pageManager").PageManager;
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
            children?: NodeItem[] | undefined;
            show?: boolean | ((renderCallbackParams: import("../../../types/kDesigner").RenderCallbackParams) => boolean) | undefined;
        }>;
        initComponent: () => Promise<false | undefined>;
        fetchData: (api: string | Function, record: NodeItem) => void;
        handleUpdate: (v: any) => void;
        oldData: string | null;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue")[], "change" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        record: {
            type: PropType<NodeItem>;
            required: true;
        };
        modelValue: {};
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        onChange?: ((...args: any[]) => any) | undefined;
    }, {}>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "ready"[], "ready", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    schemas: {
        type: PropType<NodeItem[]>;
    };
    script: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    onReady?: ((...args: any[]) => any) | undefined;
}, {
    script: string;
}>;
export default _sfc_main;
