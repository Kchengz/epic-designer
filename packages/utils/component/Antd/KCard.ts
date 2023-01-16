import { defineComponent, h, renderSlot } from "vue";
import Card from "ant-design-vue/lib/card";
import { NodeItem } from '../../../types/kDesigner'
// 二次封装组件
export default defineComponent({
  emits: ["update:value"],
  setup(_, { attrs, slots }) {

    console.log(attrs)

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
