import { defineComponent, h, renderSlot, type PropType } from 'vue'
import { ElButton } from 'element-plus'
import { type ComponentSchema } from '@epic-designer/core/types/epic-designer'

// 二次封装组件
export default defineComponent({
  props: {
    componentSchema: {
      type: Object as PropType<ComponentSchema>,
      default: () => ({})
    }
  },
  setup (props, { emit, slots }) {
    return () => {
      const componentProps: Record<string, any> = {
        ...props.componentSchema?.componentProps
      }

      return h(ElButton, componentProps, {
        default: () =>
          renderSlot(slots, 'default', {}, () => [props.componentSchema?.label])
      })
    }
  }
})
