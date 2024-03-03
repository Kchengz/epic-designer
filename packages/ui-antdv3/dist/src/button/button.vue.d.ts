import { PropType } from 'vue';
import type { ComponentSchema } from '@epic-designer/core/types/epic-designer';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    componentSchema: {
        type: PropType<ComponentSchema>;
        default: () => {};
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    componentSchema: {
        type: PropType<ComponentSchema>;
        default: () => {};
    };
}>>, {
    componentSchema: ComponentSchema;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
