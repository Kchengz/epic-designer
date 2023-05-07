import { PageManager } from '../../../../index';
import { Ref } from 'vue';
import { NodeItem } from '../../../../../types/kDesigner';
declare const _sfc_main: import("vue").DefineComponent<{}, {
    MonacoEditor: any;
    MonacoEditorConfig: {
        theme: string;
        selectOnLineNumbers: boolean;
        minimap: {
            enabled: boolean;
        };
    };
    monacoEditorRef: any;
    pageManager: PageManager;
    schemas: Ref<NodeItem[]>;
    script: Ref<string>;
    selectedKeys: Ref<never[]>;
    nodeItem: Ref<{
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
        show?: boolean | ((renderCallbackParams: import("../../../../../types/kDesigner").RenderCallbackParams) => boolean) | undefined;
    } | null>;
    methodOptions: import("vue").ComputedRef<{
        label: string;
        value: string;
    }[] | undefined>;
    handleNodeClick: (e: any) => void;
    handleGetComponent: (e: any) => void;
    handleGetAttr: (e: any) => void;
    readonly pluginManager: import("../../../../pluginManager").PluginManager;
    readonly KTree: import("vue").DefineComponent<{
        options: {
            type: import("vue").PropType<NodeItem[]>;
        };
        selectedKeys: {
            type: import("vue").PropType<string[]>;
        };
        hoverKey: {
            type: StringConstructor;
        };
    }, {
        slots: Readonly<{
            [name: string]: import("vue").Slot | undefined;
        }>;
        expandedKeys: Ref<never[]>;
        props: any;
        emit: (event: "update:selectedKeys" | "node-click", ...args: any[]) => void;
        handleSelect: (id: string, record: NodeItem) => void;
        KTreeNode: import("vue").DefineComponent<{
            record: {
                type: import("vue").PropType<NodeItem>;
                required: true;
            };
        }, {
            slots: Readonly<{
                [name: string]: import("vue").Slot | undefined;
            }>;
            expandedKeys: Ref<string[]>;
            treeProps: any;
            handleSelect: (id: string, record: NodeItem) => {};
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
                type: import("vue").PropType<NodeItem>;
                required: true;
            };
        }>>, {}>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:selectedKeys" | "node-click")[], "update:selectedKeys" | "node-click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        options: {
            type: import("vue").PropType<NodeItem[]>;
        };
        selectedKeys: {
            type: import("vue").PropType<string[]>;
        };
        hoverKey: {
            type: StringConstructor;
        };
    }>> & {
        "onUpdate:selectedKeys"?: ((...args: any[]) => any) | undefined;
        "onNode-click"?: ((...args: any[]) => any) | undefined;
    }, {}>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
export default _sfc_main;
