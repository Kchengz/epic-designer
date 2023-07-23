import type { PropType } from 'vue'
import { defineComponent, h, renderSlot } from 'vue'
import { NCollapseItem } from 'naive-ui'
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
      const record: NodeItem = {
        ...props.record,
        title: props.record.label ?? ''
      }

      const children = record.children ?? []
      delete record.children

      return h(NCollapseItem, record, {
        default: () =>
          renderSlot(slots, 'edit-node', {}, () =>
            children.map((node: NodeItem) => renderSlot(slots, 'node', { record: node }))
          )
      })
    }
  }
})
