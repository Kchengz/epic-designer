import { defineComponent, h } from 'vue'
import 'element-plus/es/components/select/style/css'
import { ElRadioGroup, ElRadio } from 'element-plus'

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
      return h(ElRadioGroup, props, {
        default: () => [
          props.options?.map((option: any) =>
            h(ElRadio, { label: option.value }, { default: () => option.label })
          )
        ]
      })
    }
  }
})
