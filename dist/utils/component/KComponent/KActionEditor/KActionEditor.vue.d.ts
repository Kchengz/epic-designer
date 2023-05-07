import { PropType } from 'vue';
declare const _sfc_main: import("vue").DefineComponent<{
    modelValue: {
        type: PropType<any>;
        default: () => {};
    };
    eventList: {
        type: PropType<any>;
    };
}, {
    Collapse: any;
    CollapseItem: any;
    KActionModalRef: any;
    props: any;
    activeNames: import("vue").Ref<string[]>;
    filterEventList: import("vue").ComputedRef<any>;
    allEvents: import("vue").ComputedRef<any>;
    emit: (event: "update:modelValue", ...args: any[]) => void;
    modelValue: import("vue").WritableComputedRef<any>;
    events: any;
    currentType: string;
    handleOpen: (type: string) => void;
    handleAdd: (action: any) => void;
    getNewEvents: (type: string) => {
        [type: string]: any;
    };
    KActionEditorItem: import("vue").DefineComponent<{
        modelValue: {
            type: PropType<any>;
            default: () => {};
        };
        itemEvents: {
            type: PropType<any>;
        };
        allEvents: {
            type: PropType<any>;
        };
        events: {
            type: PropType<any>;
        };
    }, {
        props: any;
        emit: (event: "update:modelValue" | "add", ...args: any[]) => void;
        schemas: import("vue").Ref<import("../../../../types/kDesigner").NodeItem[]>;
        handleOpen: (type: string) => void;
        getLabel: (id: string) => string | undefined;
        handleDelete: (index: number, type: string) => void;
        getNewEvents: (type: string) => {
            [type: string]: any;
        };
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "add")[], "update:modelValue" | "add", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        modelValue: {
            type: PropType<any>;
            default: () => {};
        };
        itemEvents: {
            type: PropType<any>;
        };
        allEvents: {
            type: PropType<any>;
        };
        events: {
            type: PropType<any>;
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        onAdd?: ((...args: any[]) => any) | undefined;
    }, {
        modelValue: any;
    }>;
    KActionModal: import("vue").DefineComponent<{}, {
        Modal: any;
        Select: any;
        Button: any;
        Tabs: any;
        TabPane: any;
        schemas: import("vue").Ref<import("../../../../types/kDesigner").NodeItem[]>;
        pageManager: import("../../../pageManager").PageManager;
        visible: import("vue").Ref<boolean>;
        selectedKeys: import("vue").Ref<never[]>;
        nodeItem: import("vue").Ref<{
            [x: string]: any;
            type: string;
            label?: string | undefined;
            field?: string | undefined;
            name?: string | undefined;
            slotName?: string | undefined;
            componentProps?: any;
            id?: string | undefined;
            rules?: {
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
            }[] | undefined;
            labelCol?: any;
            wrapperCol?: any;
            children?: any[] | undefined;
            show?: boolean | ((renderCallbackParams: import("../../../../types/kDesigner").RenderCallbackParams) => boolean) | undefined;
        } | null>;
        activeTab: import("vue").Ref<string>;
        emit: (event: "add", ...args: any[]) => void;
        methodOptions: import("vue").ComputedRef<{
            label: string;
            value: string;
        }[] | undefined>;
        state: {
            actionItem: import("../../../../types/kDesigner").FormDataModel;
        };
        handleOpen: () => void;
        handleSave: () => void;
        handleClose: () => void;
        toggleMethod: () => void;
        handleNodeClick: (e: any) => void;
        handleAddMethod: () => void;
        readonly KTree: import("vue").DefineComponent<{
            options: {
                type: PropType<import("../../../../types/kDesigner").NodeItem[]>;
            };
            selectedKeys: {
                type: PropType<string[]>;
            };
            hoverKey: {
                type: StringConstructor;
            };
        }, {
            slots: Readonly<{
                [name: string]: import("vue").Slot | undefined;
            }>;
            expandedKeys: import("vue").Ref<never[]>;
            props: any;
            emit: (event: "update:selectedKeys" | "node-click", ...args: any[]) => void;
            handleSelect: (id: string, record: import("../../../../types/kDesigner").NodeItem) => void;
            KTreeNode: import("vue").DefineComponent<{
                record: {
                    type: PropType<import("../../../../types/kDesigner").NodeItem>;
                    required: true;
                };
            }, {
                slots: Readonly<{
                    [name: string]: import("vue").Slot | undefined;
                }>;
                expandedKeys: import("vue").Ref<string[]>;
                treeProps: any;
                handleSelect: (id: string, record: import("../../../../types/kDesigner").NodeItem) => {};
                expanded: import("vue").ComputedRef<boolean>;
                props: any;
                selectedKeys: import("vue").ComputedRef<any>;
                TreeNodeText: import("vue").DefineComponent<{}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
                handleExpanded: () => false | undefined;
                init: () => false | undefined;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                record: {
                    type: PropType<import("../../../../types/kDesigner").NodeItem>;
                    required: true;
                };
            }>>, {}>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:selectedKeys" | "node-click")[], "update:selectedKeys" | "node-click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            options: {
                type: PropType<import("../../../../types/kDesigner").NodeItem[]>;
            };
            selectedKeys: {
                type: PropType<string[]>;
            };
            hoverKey: {
                type: StringConstructor;
            };
        }>> & {
            "onUpdate:selectedKeys"?: ((...args: any[]) => any) | undefined;
            "onNode-click"?: ((...args: any[]) => any) | undefined;
        }, {}>;
        KScriptEdit: import("vue").DefineComponent<{}, {
            MonacoEditor: any;
            MonacoEditorConfig: {
                theme: string;
                selectOnLineNumbers: boolean;
                minimap: {
                    enabled: boolean;
                };
            };
            /**
             * 添加组件事件
             * @param action
             */
            monacoEditorRef: any;
            pageManager: import("../../../pageManager").PageManager;
            schemas: import("vue").Ref<import("../../../../types/kDesigner").NodeItem[]>;
            script: import("vue").Ref<string>;
            selectedKeys: import("vue").Ref<never[]>;
            nodeItem: import("vue").Ref<{
                [x: string]: any;
                type: string;
                label?: string | undefined;
                field?: string | undefined;
                name?: string | undefined;
                slotName?: string | undefined;
                componentProps?: any;
                id?: string | undefined;
                rules?: {
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
                }[] | undefined;
                labelCol?: any;
                wrapperCol?: any;
                children?: any[] | undefined;
                show?: boolean | ((renderCallbackParams: import("../../../../types/kDesigner").RenderCallbackParams) => boolean) | undefined;
            } | null>;
            methodOptions: import("vue").ComputedRef<{
                label: string;
                value: string;
            }[] | undefined>;
            handleNodeClick: (e: any) => void;
            handleGetComponent: (e: any) => void;
            handleGetAttr: (e: any) => void;
            readonly pluginManager: import("../../../pluginManager").PluginManager;
            readonly KTree: import("vue").DefineComponent<{
                options: {
                    type: PropType<import("../../../../types/kDesigner").NodeItem[]>;
                };
                selectedKeys: {
                    type: PropType<string[]>;
                };
                hoverKey: {
                    type: StringConstructor;
                };
            }, {
                slots: Readonly<{
                    [name: string]: import("vue").Slot | undefined;
                }>;
                expandedKeys: import("vue").Ref<never[]>;
                props: any;
                emit: (event: "update:selectedKeys" | "node-click", ...args: any[]) => void;
                handleSelect: (id: string, record: import("../../../../types/kDesigner").NodeItem) => void;
                KTreeNode: import("vue").DefineComponent<{
                    record: {
                        type: PropType<import("../../../../types/kDesigner").NodeItem>;
                        required: true;
                    };
                }, {
                    slots: Readonly<{
                        [name: string]: import("vue").Slot | undefined;
                    }>;
                    expandedKeys: import("vue").Ref<string[]>;
                    treeProps: any;
                    handleSelect: (id: string, record: import("../../../../types/kDesigner").NodeItem) => {};
                    expanded: import("vue").ComputedRef<boolean>;
                    props: any;
                    selectedKeys: import("vue").ComputedRef<any>;
                    TreeNodeText: import("vue").DefineComponent<{}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                        [key: string]: any;
                    }>, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
                    handleExpanded: () => false | undefined;
                    init: () => false | undefined;
                }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                    record: {
                        type: PropType<import("../../../../types/kDesigner").NodeItem>;
                        required: true;
                    };
                }>>, {}>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:selectedKeys" | "node-click")[], "update:selectedKeys" | "node-click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                options: {
                    type: PropType<import("../../../../types/kDesigner").NodeItem[]>;
                };
                selectedKeys: {
                    type: PropType<string[]>;
                };
                hoverKey: {
                    type: StringConstructor;
                };
            }>> & {
                "onUpdate:selectedKeys"?: ((...args: any[]) => any) | undefined;
                "onNode-click"?: ((...args: any[]) => any) | undefined;
            }, {}>;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "add"[], "add", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>> & {
        onAdd?: ((...args: any[]) => any) | undefined;
    }, {}>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: PropType<any>;
        default: () => {};
    };
    eventList: {
        type: PropType<any>;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: any;
}>;
export default _sfc_main;
