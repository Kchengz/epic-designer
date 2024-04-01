import { type PropType } from 'vue';
import { type UploadUserFile } from 'element-plus';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: PropType<UploadUserFile[]>;
        default: () => never[];
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: PropType<UploadUserFile[]>;
        default: () => never[];
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: UploadUserFile[];
}, {}>;
export default _default;
