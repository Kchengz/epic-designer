import { defineComponent, h, renderSlot, PropType } from "vue";
import { ElCard } from "element-plus";
import { NodeItem } from "../../../types/kDesigner";
export default defineComponent({
  props: {
    record: {
      type: Object as PropType<NodeItem>,
      require: true,
    },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const record = {
        ...props.record,
        header: props.record!.label,
      } as any;
      const children = record.children;
      delete record.children;

      return h(ElCard, record, {
        default: () =>
          renderSlot(slots, "edit-node", {}, () =>
            children!.map((node: NodeItem) =>
              renderSlot(slots, "node", { record: node })
            )
          ),
      });
    };
  },
});
