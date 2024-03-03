import type { PropType } from 'vue'
import { defineComponent, h, renderSlot } from 'vue'
import { NCard } from 'naive-ui'
import { type ComponentSchema } from '@epic-designer/core/types/epic-designer'
export default defineComponent({
  props: {
    record: {
      type: Object as PropType<ComponentSchema>,
      require: true,
      default: () => ({})
    }
  },
  setup (props, { slots }) {
    return () => {
      const record = {
        ...props.record,
        title: props.record.label
      } as ComponentSchema
      const children = record.children ?? []
      delete record.children

      return h(NCard, record, {
        default: () =>
          renderSlot(slots, 'edit-node', {}, () =>
            children.map((node: ComponentSchema) =>
              renderSlot(slots, 'node', { record: node })
            )
          )
      })
    }
  }
})
