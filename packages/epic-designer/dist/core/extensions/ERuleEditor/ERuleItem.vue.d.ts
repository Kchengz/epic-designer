import { FormItemRule } from './types';
declare const _default: import("vue").DefineComponent<{
    rule: {
        type: import("vue").PropType<FormItemRule>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "delete" | "update:rule")[], "change" | "delete" | "update:rule", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    rule: {
        type: import("vue").PropType<FormItemRule>;
        required: true;
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    onDelete?: ((...args: any[]) => any) | undefined;
    "onUpdate:rule"?: ((...args: any[]) => any) | undefined;
}, {}, {}>;
export default _default;
