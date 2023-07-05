import { defineComponent, h } from 'vue'
import 'element-plus/es/components/select/style/css'
import { ElCheckboxGroup, ElCheckbox, ElCheckboxButton } from "element-plus";

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
      return h(ElCheckboxGroup, props, {
        default: () => [
          props?.radioButton ?
            props.options?.map((option: any) =>
              h(ElCheckboxButton, { label: option.label, value: option.value })
            )
            :
            props.options?.map((option: any) =>
              h(ElCheckbox, { label: option.label, value: option.value })
            )
        ]
      })
    }
  }
})
