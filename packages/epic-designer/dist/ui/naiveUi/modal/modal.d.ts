import { type PropType } from "vue";
import { type ComponentSchema } from '../../../core/types/epic-designer';
declare const _default: import("vue").DefineComponent<{
    componentSchema: {
        type: PropType<ComponentSchema>;
        default: () => {};
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "close" | "ok")[], "update:modelValue" | "close" | "ok", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    componentSchema: {
        type: PropType<ComponentSchema>;
        default: () => {};
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onClose?: ((...args: any[]) => any) | undefined;
    onOk?: ((...args: any[]) => any) | undefined;
}, {
    componentSchema: ComponentSchema;
}, {}>;
export default _default;
