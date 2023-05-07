import { PropType } from "vue";
import { NodeItem } from "../../../types/kDesigner";
declare const _default: import("vue").DefineComponent<{
    record: {
        type: PropType<NodeItem>;
        require: boolean;
    };
    children: {
        type: ArrayConstructor;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    record: {
        type: PropType<NodeItem>;
        require: boolean;
    };
    children: {
        type: ArrayConstructor;
    };
}>>, {}>;
export default _default;
