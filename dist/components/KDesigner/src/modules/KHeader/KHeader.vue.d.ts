import { Ref } from 'vue';
import { NodeItem, Designer } from '../../../../../types/kDesigner';
declare const _sfc_main: import("vue").DefineComponent<{}, {
    schemas: Ref<NodeItem[]>;
    designer: Designer;
    emit: (event: "save", ...args: any[]) => void;
    Button: any;
    preview: Ref<({
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{}> & Omit<Readonly<import("vue").ExtractPropTypes<{}>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, never>;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{}>>, {
            Modal: any;
            Button: any;
            visible: Ref<boolean>;
            schemas: NodeItem[];
            script: string;
            kb: any;
            kBuilderKey: Ref<string>;
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
                pageManager: import("../../../../../utils/pageManager").PageManager;
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
                    pageManager: import("../../../../../utils/pageManager").PageManager;
                    emit: (event: "change" | "update:modelValue", ...args: any[]) => void;
                    FormItem: any;
                    componentInstance: Ref<null>;
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
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{}>> & import("vue").ShallowUnwrapRef<{
        Modal: any;
        Button: any;
        visible: Ref<boolean>;
        schemas: NodeItem[];
        script: string;
        kb: any;
        kBuilderKey: Ref<string>;
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
            pageManager: import("../../../../../utils/pageManager").PageManager;
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
                pageManager: import("../../../../../utils/pageManager").PageManager;
                emit: (event: "change" | "update:modelValue", ...args: any[]) => void;
                FormItem: any;
                componentInstance: Ref<null>;
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
    }> & {} & import("vue").ComponentCustomProperties & {}) | null>;
    recordList: Ref<{
        type: string;
        record: string;
    }[]>;
    undoList: Ref<{
        type: string;
        record: string;
    }[]>;
    handlePreview: () => void;
    handleUndo: () => void;
    handleRedo: () => void;
    handleSave: () => void;
    KPreview: import("vue").DefineComponent<{}, {
        Modal: any;
        Button: any;
        visible: Ref<boolean>;
        schemas: NodeItem[];
        script: string;
        kb: any;
        kBuilderKey: Ref<string>;
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
            pageManager: import("../../../../../utils/pageManager").PageManager;
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
                pageManager: import("../../../../../utils/pageManager").PageManager;
                emit: (event: "change" | "update:modelValue", ...args: any[]) => void;
                FormItem: any;
                componentInstance: Ref<null>;
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
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "save"[], "save", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>> & {
    onSave?: ((...args: any[]) => any) | undefined;
}, {}>;
export default _sfc_main;
