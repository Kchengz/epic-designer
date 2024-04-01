import { ComponentSchema } from '../../types/epic-designer';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    componentSchema: {
        type: import("vue").PropType<ComponentSchema>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    componentSchema: {
        type: import("vue").PropType<ComponentSchema>;
        required: true;
    };
}>>, {}, {}>, {
    "edit-node"?(_: {}): any;
    node?(_: {
        componentSchema: ComponentSchema;
    }): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
