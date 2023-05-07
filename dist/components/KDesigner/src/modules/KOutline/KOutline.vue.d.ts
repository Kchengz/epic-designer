import { Ref } from 'vue';
import { NodeItem, Designer } from '../../../../../types/kDesigner';
declare const _sfc_main: import("vue").DefineComponent<{}, {
    designer: Designer;
    schemas: Ref<NodeItem[]>;
    selectedKeys: import("vue").ComputedRef<string[]>;
    handleNodeClick: (e: any) => void;
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
    readonly pluginManager: import("../../../../../utils/pluginManager").PluginManager;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
export default _sfc_main;
