import { type PropType } from "vue";
import type { UploadFile } from "ant-design-vue";
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: PropType<UploadFile<unknown>[] | undefined>;
        default: () => never[];
    };
    maxCount: {
        type: NumberConstructor;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], "update:modelValue" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: PropType<UploadFile<unknown>[] | undefined>;
        default: () => never[];
    };
    maxCount: {
        type: NumberConstructor;
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: UploadFile<unknown>[] | undefined;
}, {}>;
export default _default;
