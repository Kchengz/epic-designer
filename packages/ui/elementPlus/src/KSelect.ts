import { defineComponent, h } from 'vue'
import 'element-plus/es/components/select/style/css'
import { ElSelect, ElOption } from 'element-plus'

// 二次封装组件
export default defineComponent({
  emits: ['update:modelValue'],
  setup (_, { emit, attrs }) {
    function handleUpdate (e = null): void {
      emit('update:modelValue', e)
    }

    return () => {
      const props: Record<string, any> = {
        ...attrs,
        'onUpdate:modelValue': handleUpdate
      }

      return h(ElSelect, props, {
        default: () => [
          props.options?.map((option: any) =>
            h(ElOption, { label: option.label, value: option.value })
          )
        ]
      })
    }
  }
})
