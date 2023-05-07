import { PropType } from "vue";
import type { UploadFile } from "ant-design-vue";
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: PropType<UploadFile<unknown>[] | undefined>;
        default: never[];
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: PropType<UploadFile<unknown>[] | undefined>;
        default: never[];
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: UploadFile<unknown>[] | undefined;
}>;
export default _default;
