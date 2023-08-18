import { defineComponent, h, renderSlot, type PropType } from "vue";
import Tabs from "ant-design-vue/lib/tabs";
import { type NodeItem } from "@epic-designer/core/types/epic-designer";
export default defineComponent({
  props: {
    record: {
      type: Object as PropType<NodeItem>,
      require: true,
      default: () => ({}),
    },
  },
  setup(props, { slots }) {
    return () => {
      const record = {
        ...props.record,
        ...props.record?.componentProps,
        title: props.record?.label ?? "",
      };
      const children = record.children;
      delete record.children;

      return h(Tabs, record, {
        default: () => {
          const defaultSlotList = slots["edit-node"]?.()[0].children;
          if (defaultSlotList?.length) {
            const list = defaultSlotList[0].children.map((item) => {
              item.props.key = item.props.schema.componentProps.key;
              item.props.tab = item.props.schema.componentProps.tab;
              return item;
            });
            return list;
          }

          const defaultSlot = children.map((node: NodeItem) => {
            const TabPane = slots["node"]?.({
              record: node,
              key: node.componentProps.key,
              tab: node.componentProps.tab,
            })[0] as any;
            return TabPane;
          });
          return [defaultSlot];
        },

        // renderSlot(slots, 'edit-node', {}, () =>
        //   children.map((record: NodeItem) =>
        //     renderSlot(slots, 'node', { record })
        //   )
        // )
      });
    };
  },
});
