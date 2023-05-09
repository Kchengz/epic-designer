import { defineComponent, h, renderSlot, PropType } from "vue";
import Tabs from "ant-design-vue/lib/tabs";
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
        ...props.record?.componentProps,
        title: props.record!.label,
      } as any;
      const children = record.children;
      delete record.children;

      return h(Tabs, record, {
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
