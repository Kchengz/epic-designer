import { defineComponent, h, renderSlot, PropType } from "vue";
import Row from "ant-design-vue/lib/row";
import { NodeItem } from "../../../types/kDesigner";
export default defineComponent({
  props: {
    record: {
      type: Object as PropType<NodeItem>,
      require: true,
    },
    children: {
      type: Array,
    },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const record = {
        ...props.record,
        title: props.record!.label,
      } as any;
      const children = record.children;
      delete record.children;

      return h(Row, record, {
        default: () =>
          renderSlot(slots, "edit-node", {}, () =>
            children!.map((record: any) =>
              renderSlot(slots, "node", { record })
            )
          ),
      });
    };
  },
});
