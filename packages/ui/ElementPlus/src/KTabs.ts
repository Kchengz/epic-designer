import { defineComponent, h, renderSlot, PropType } from "vue";
import { ElTabs } from "element-plus";
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
        ...props.record?.componentProps,
      } as any;
      const children = props.record?.children ?? [];
      delete record.children;

      return h(ElTabs, record, {
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
