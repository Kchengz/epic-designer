import type { PropType } from "vue";
import { defineComponent, h, renderSlot } from "vue";
import { NTabs } from "naive-ui";
import { type NodeItem } from "@epic-designer/core/types/epic-designer";
export default defineComponent({
  name: "Tabs",
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
        ...props.record?.componentProps,
      };
      const children = props.record?.children ?? [];
      delete record.children;

      return h(NTabs, record, {
        default: () => {
    
          const defaultSlotList = slots["edit-node"]?.()[0].children;
          if (defaultSlotList?.length) {
            const list = defaultSlotList[0].children.map((item) => {
              item.props.name = item.props.schema.label;
              item.type.__TAB_PANE__ = true;
              return item;
            });
            return list;
          }

          const defaultSlot = children.map((node: NodeItem) => {
            const TabPane = slots["node"]?.({
              record: node,
              name: node.label,
              label: null,
            })[0] as any;

            TabPane.type.__TAB_PANE__ = true;
            return TabPane;
          });
          return [defaultSlot];
        },
      });
    };
  },
});
