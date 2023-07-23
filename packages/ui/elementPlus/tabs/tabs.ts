import { defineComponent, h, renderSlot, type PropType } from 'vue'
import { ElTabs } from 'element-plus'
import { type NodeItem } from '@epic-designer/core/types/epic-designer'
export default defineComponent({
  props: {
    record: {
      type: Object as PropType<NodeItem>,
      require: true,
      default: () => ({})
    }
  },
  setup (props, { attrs, slots }) {
    return () => {
      const record = {
        ...props.record?.componentProps
      }
      const children = props.record?.children ?? []
      delete record.children

      return h(ElTabs, record, {
        default: () =>
          renderSlot(slots, 'edit-node', {}, () =>
            children.map((record: any) =>
              renderSlot(slots, 'node', { record })
            )
          )
      })
    }
  }
})
