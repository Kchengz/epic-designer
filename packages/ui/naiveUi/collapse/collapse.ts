import type { PropType } from 'vue'
import { defineComponent, h, renderSlot } from 'vue'
import { NCollapse } from 'naive-ui'
import { type ComponentSchema } from '@epic-designer/core/types/epic-designer'
export default defineComponent({
  props: {
    componentSchema: {
      type: Object as PropType<ComponentSchema>,
      require: true,
      default: () => ({})
    }
  },
  setup (props, { slots }) {
    return () => {
      const componentSchema = {
        ...props.componentSchema,
        title: props.componentSchema.label
      } as any
      const children = componentSchema.children
      delete componentSchema.children

      return h(NCollapse, componentSchema, {
        default: () => [
          renderSlot(slots, 'edit-node', {}, () =>
            children.map((node: ComponentSchema) => renderSlot(slots, 'node', { componentSchema: node }))
          )
        ]
      })
    }
  }
})
