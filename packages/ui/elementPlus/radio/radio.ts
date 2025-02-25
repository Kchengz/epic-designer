import { defineComponent, h } from 'vue';

import { ElRadio, ElRadioButton, ElRadioGroup } from 'element-plus';

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
      return h(ElRadioGroup, props, {
        default: () => [
          props?.radioButton
            ? props.options?.map((option: any) =>
                h(
                  ElRadioButton,
                  { value: option.value },
                  { default: () => option.label },
                ),
              )
            : props.options?.map((option: any) =>
                h(
                  ElRadio,
                  { value: option.value },
                  { default: () => option.label },
                ),
              ),
        ],
      });
    };
  },
});
