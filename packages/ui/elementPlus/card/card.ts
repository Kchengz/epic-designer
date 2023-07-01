import { defineComponent, h, renderSlot, type PropType } from 'vue'
import { ElCard } from 'element-plus'
import { type NodeItem } from '@k-designer/core/packages/types/kDesigner'
export default defineComponent({
  props: {
    record: {
      type: Object as PropType<NodeItem>,
      required: true,
      default: () => ({})
    }
  },
  setup (props, { attrs, slots }) {
    return () => {
      const record = {
        ...props.record,
        header: props.record?.label ?? ''
      } as NodeItem
      const children = record.children ?? []
      delete record.children

      return h(ElCard, record, {
        default: () =>
          renderSlot(slots, 'edit-node', {}, () =>
            children.map((node: NodeItem) =>
              renderSlot(slots, 'node', { record: node })
            )
          )
      })
    }
  }
})
