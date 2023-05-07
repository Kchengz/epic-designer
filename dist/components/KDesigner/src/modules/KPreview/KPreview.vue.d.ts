import { NodeItem } from '../../../../../types/kDesigner';
declare const _sfc_main: import("vue").DefineComponent<{}, {
    Modal: any;
    Button: any;
    visible: import("vue").Ref<boolean>;
    schemas: NodeItem[];
    script: string;
    kb: any;
    kBuilderKey: import("vue").Ref<string>;
    handleClose: () => void;
    handleOpen: () => void;
    handleOk: () => Promise<void>;
    readonly KBuilder: import("vue").DefineComponent<{
        schemas: {
            type: import("vue").PropType<NodeItem[]>;
        };
        script: {
            type: StringConstructor;
            default: string;
        };
    }, {
        KAsyncLoader: any;
        pageManager: import("../../../../../utils").PageManager;
        emit: (event: "ready", ...args: any[]) => void;
        formData: import("../../../../../types/kDesigner").FormDataModel;
        slots: Readonly<{
            [name: string]: import("vue").Slot | undefined;
        }>;
        forms: any;
        props: any;
        getData: (formName?: string) => Promise<boolean | import("../../../../../types/kDesigner").FormDataModel>;
        validate: (formName?: string) => Promise<boolean | import("../../../../../types/kDesigner").FormDataModel>;
        setData: (data: import("../../../../../types/kDesigner").FormDataModel) => void;
        handleReady: () => void;
        readonly KNode: import("vue").DefineComponent<{
            record: {
                type: import("vue").PropType<NodeItem>;
                required: true;
            };
            modelValue: {};
        }, {
            formData: import("../../../../../types/kDesigner").FormDataModel;
            slots: Readonly<{
                [name: string]: import("vue").Slot | undefined;
            }>;
            pageManager: import("../../../../../utils").PageManager;
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
                show?: boolean | ((renderCallbackParams: import("../../../../../types/kDesigner").RenderCallbackParams) => boolean) | undefined;
            }>;
            initComponent: () => Promise<false | undefined>;
            fetchData: (api: string | Function, record: NodeItem) => void;
            handleUpdate: (v: any) => void;
            oldData: string | null;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue")[], "change" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            record: {
                type: import("vue").PropType<NodeItem>;
                required: true;
            };
            modelValue: {};
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
            onChange?: ((...args: any[]) => any) | undefined;
        }, {}>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "ready"[], "ready", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        schemas: {
            type: import("vue").PropType<NodeItem[]>;
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
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
export default _sfc_main;
