import type { PropType } from 'vue';
import { defineComponent, h, renderSlot } from 'vue';
import { NCard } from 'naive-ui';
import { NodeItem } from '../../../types/kDesigner';
export default defineComponent({
  props: {
    record: {
      type: Object as PropType<NodeItem>,
      require: true,
      default: () => ({})
    }
  },
  setup(props, { slots }) {
    return () => {
      const record = {
        ...props.record,
        header: props.record!.label
      } as any;
      const children = record.children;
      delete record.children;

      return h(NCard, record, {
        default: () =>
          renderSlot(slots, 'edit-node', {}, () =>
            children!.map((node: NodeItem) => renderSlot(slots, 'node', { record: node }))
          )
      });
    };
  }
});
