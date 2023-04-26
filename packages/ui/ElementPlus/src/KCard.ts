import { defineComponent, h, renderSlot, PropType } from "vue";
import { ElCard } from "element-plus";
import { NodeItem } from "../../../../types/kDesigner";
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
      header: this.props.record!.label,
    } as any;
    const children = record.children;
    delete record.children;

    return h(ElCard, record, {
      default: () =>
        renderSlot(this.slots, "edit-node", {}, () =>
          children!.map((record: any) =>
            renderSlot(this.slots, "node", { record })
          )
        ),
    });
  },
});
