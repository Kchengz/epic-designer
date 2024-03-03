import type { PropType } from 'vue'
import { defineComponent, h, renderSlot } from 'vue'
import { NButton } from 'naive-ui'
import { type ComponentSchema } from '@epic-designer/core/types/epic-designer'

// 二次封装组件
export default defineComponent({
  props: {
    componentSchema: {
      type: Object as PropType<ComponentSchema>,
      default: () => ({})
    }
  },
  setup (props, { slots }) {
    return () => {
      const componentProps: Record<string, any> = {
        ...props.componentSchema?.componentProps
      }

      return h(NButton, componentProps, {
        default: () => renderSlot(slots, 'default', {}, () => [props.componentSchema?.label])
      })
    }
  }
})
