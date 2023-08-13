import type { PropType } from "vue";
import { defineComponent, h, renderSlot } from "vue";
import { NTabPane } from "naive-ui";
import { type NodeItem } from "@epic-designer/core/types/epic-designer";
export default defineComponent({
  name:'TabPane',
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
        name: props.record.label,
      } as any;
      const children = props.record?.children ?? [];
      delete record.children;
      delete record.label;
      return h(NTabPane, record, {
        default: () =>
          renderSlot(slots, "edit-node", {}, () =>
            children.map((nodeProps: NodeItem) =>
              renderSlot(slots, "node", { record: nodeProps })
            )
          ),
      });
    };
  },
});
