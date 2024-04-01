import { ComponentSchema } from '../../../types/epic-designer';
import type { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    options: {
        type: PropType<ComponentSchema[]>;
        default: () => never[];
    };
    hoverKey: {
        type: StringConstructor;
        default: string;
    };
    selectedKeys: {
        type: ArrayConstructor;
        default: () => never[];
    };
    draggable: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:selectedKeys" | "node-click")[], "update:selectedKeys" | "node-click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    options: {
        type: PropType<ComponentSchema[]>;
        default: () => never[];
    };
    hoverKey: {
        type: StringConstructor;
        default: string;
    };
    selectedKeys: {
        type: ArrayConstructor;
        default: () => never[];
    };
    draggable: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    "onUpdate:selectedKeys"?: ((...args: any[]) => any) | undefined;
    "onNode-click"?: ((...args: any[]) => any) | undefined;
}, {
    draggable: boolean;
    selectedKeys: unknown[];
    options: ComponentSchema[];
    hoverKey: string;
}, {}>;
export default _default;
