import { defineComponent, h, renderSlot } from "vue";
import Card from "ant-design-vue/lib/card";
export default defineComponent({
  setup(_, { attrs, slots }) {
    return {
      attrs,
      slots
    };
  },
  render() {
    const record = this.attrs.record as any

    return [h(Card, { ...record, title: record.label }, [
      renderSlot(this.slots, 'edit-node', {},
        () => record.children!.map((record: any) => renderSlot(this.slots, 'node', { record })))
    ])
    ];
  },
});
