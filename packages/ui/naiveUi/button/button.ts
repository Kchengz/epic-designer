import type { PropType } from 'vue'
import { defineComponent, h, renderSlot } from 'vue'
import { NButton } from 'naive-ui'
import { type NodeItem } from '@epic-designer/core/types/epic-designer'

// 二次封装组件
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
      const componentProps: Record<string, any> = {
        ...props.record?.componentProps
      }

      return h(NButton, componentProps, {
        default: () => renderSlot(slots, 'default', {}, () => [props.record?.label])
      })
    }
  }
})
