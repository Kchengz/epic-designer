import { type PropType } from 'vue';
import type { UploadFileInfo } from 'naive-ui';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: PropType<UploadFileInfo[]>;
        default: () => never[];
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: PropType<UploadFileInfo[]>;
        default: () => never[];
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: UploadFileInfo[];
}, {}>;
export default _default;
