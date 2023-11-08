import { type PropType } from 'vue';
import { type NodeItem } from '@epic-designer/core/types/epic-designer';
declare const _default: import("vue").DefineComponent<{
    record: {
        type: PropType<NodeItem>;
        require: boolean;
        default: () => {};
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    record: {
        type: PropType<NodeItem>;
        require: boolean;
        default: () => {};
    };
}>>, {
    record: NodeItem;
}, {}>;
export default _default;
