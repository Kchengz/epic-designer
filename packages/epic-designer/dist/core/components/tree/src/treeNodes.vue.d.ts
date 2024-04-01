import { ComponentSchema } from '../../../types/epic-designer';
declare const _default: import("vue").DefineComponent<{
    schemas: {
        type: import("vue").PropType<ComponentSchema[]>;
        required: true;
    };
    parentSchema: {
        type: import("vue").PropType<ComponentSchema>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:schemas"[], "update:schemas", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    schemas: {
        type: import("vue").PropType<ComponentSchema[]>;
        required: true;
    };
    parentSchema: {
        type: import("vue").PropType<ComponentSchema>;
    };
}>> & {
    "onUpdate:schemas"?: ((...args: any[]) => any) | undefined;
}, {}, {}>;
export default _default;
