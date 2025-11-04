import { defineComponent, h } from 'vue';

import { ElCheckbox, ElCheckboxButton, ElCheckboxGroup } from 'element-plus';

import 'element-plus/es/components/select/style/css';

// 二次封装组件
export default defineComponent({
  emits: ['update:modelValue'],
  setup(_, { attrs, emit }) {
    function handleUpdate(e = null): void {
      emit('update:modelValue', e);
    }
    return () => {
      const props: Record<string, any> = {
        ...attrs,
        'onUpdate:modelValue': handleUpdate,
      };
      return h(ElCheckboxGroup, props, {
        default: () => [
          props?.radioButton
            ? props.options?.map((option: any) =>
                h(ElCheckboxButton, {
                  label: option.label,
                  value: option.value,
                }),
              )
            : props.options?.map((option: any) =>
                h(ElCheckbox, { label: option.label, value: option.value }),
              ),
        ],
      });
    };
  },
});
