import { NodeItem } from '../../../types/kDesigner';
import type { PropType } from 'vue';
declare const _sfc_main: import("vue").DefineComponent<{
    options: {
        type: PropType<NodeItem[]>;
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
    handleSelect: (id: string, record: NodeItem) => void;
    KTreeNode: import("vue").DefineComponent<{
        record: {
            type: PropType<NodeItem>;
            required: true;
        };
    }, {
        slots: Readonly<{
            [name: string]: import("vue").Slot | undefined;
        }>;
        expandedKeys: import("vue").Ref<string[]>;
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
            type: PropType<NodeItem>;
            required: true;
        };
    }>>, {}>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:selectedKeys" | "node-click")[], "update:selectedKeys" | "node-click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    options: {
        type: PropType<NodeItem[]>;
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
export default _sfc_main;
