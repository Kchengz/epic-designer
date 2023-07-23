import { defineComponent, h, renderSlot, type PropType } from 'vue'
import { ElRow } from 'element-plus'
import { type NodeItem } from '@epic-designer/core/types/epic-designer'
export default defineComponent({
  props: {
    record: {
      type: Object as PropType<NodeItem>,
      require: true,
      default: () => ({})
    }
  },
  setup (props, { slots }) {
    return () => {
      const record = {
        ...props.record,
        title: props.record?.label ?? ''
      } as any
      const children = record.children
      delete record.children

      return h(ElRow, record, {
        default: () => [
          renderSlot(slots, 'edit-node', {}, () =>
            children.map((record: NodeItem) =>
              renderSlot(slots, 'node', { record })
            )
          )
        ]
      })
    }
  }
})
