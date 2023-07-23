import { defineComponent, h, renderSlot, type PropType } from 'vue'
import Tabs from 'ant-design-vue/lib/tabs'
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
        ...props.record?.componentProps,
        title: props.record?.label ?? ''
      }
      const children = record.children
      delete record.children

      return h(Tabs, record, {
        default: () =>
          renderSlot(slots, 'edit-node', {}, () =>
            children.map((record: NodeItem) =>
              renderSlot(slots, 'node', { record })
            )
          )
      })
    }
  }
})
