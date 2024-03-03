import { defineComponent, h, renderSlot, type PropType } from 'vue'
import { ElCollapse } from 'element-plus'
import { type ComponentSchema } from '@epic-designer/core/types/epic-designer'
export default defineComponent({
  props: {
    record: {
      type: Object as PropType<ComponentSchema>,
      required: true,
      default: () => ({})
    }
  },
  setup (props, { attrs, slots }) {
    return () => {
      const record = {
        ...props.record,
        title: props.record?.label ?? ''
      } as any
      const children = record.children
      delete record.children

      return h(ElCollapse, record, {
        default: () => [
          renderSlot(slots, 'edit-node', {}, () =>
            children.map((record: any) =>
              renderSlot(slots, 'node', { record })
            )
          )
        ]
      })
    }
  }
})
