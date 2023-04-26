import { defineComponent, h, renderSlot, PropType } from "vue";
import { TabPane } from "ant-design-vue/lib/tabs";
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
    return {
      attrs,
      slots,
      props,
    };
  },
  render() {
    const record = {
      ...this.props.record,
      ...this.props.record?.componentProps,
      title: this.props.record!.label,
    } as any;
    const children = record.children;
    delete record.children;
    return h(TabPane, record, {
      default: () =>
        renderSlot(this.slots, "edit-node", {}, () =>
          children!.map((record: any) =>
            renderSlot(this.slots, "node", { record })
          )
        ),
    });
  },
});
