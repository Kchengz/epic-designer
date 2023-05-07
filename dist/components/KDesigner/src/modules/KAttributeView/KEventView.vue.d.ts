import { Designer, NodeItem } from '../../../../../types/kDesigner';
import { getAttributeValue } from '../../../../../utils/index';
import { Ref } from 'vue';
declare const _sfc_main: import("vue").DefineComponent<{}, {
    schemas: Ref<NodeItem[]>;
    designer: Designer;
    KActionEditor: any;
    componentConfings: import("../../../../../utils/pluginManager").ComponentConfigsModel;
    checkedNode: import("vue").ComputedRef<NodeItem | null>;
    eventList: import("vue").ComputedRef<any>;
    handleSetValue: (value: any, field: string) => void;
    readonly getAttributeValue: typeof getAttributeValue;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
export default _sfc_main;
