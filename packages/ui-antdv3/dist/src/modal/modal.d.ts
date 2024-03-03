import { type PropType } from "vue";
import { type ComponentSchema } from "@epic-designer/core/types/epic-designer";
declare const _default: import("vue").DefineComponent<{
    record: {
        type: PropType<ComponentSchema>;
        default: () => {};
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "ok" | "close")[], "update:modelValue" | "ok" | "close", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    record: {
        type: PropType<ComponentSchema>;
        default: () => {};
    };
}>> & {
    onOk?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onClose?: ((...args: any[]) => any) | undefined;
}, {
    record: ComponentSchema;
}, {}>;
export default _default;
