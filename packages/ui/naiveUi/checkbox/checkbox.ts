import { defineComponent, h } from 'vue';

import { NCheckbox, NCheckboxGroup } from 'naive-ui';

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
        'onUpdate:value': handleUpdate,
        value: attrs.modelValue,
      };
      return h(NCheckboxGroup, props, {
        default: () => [
          props.options?.map((option: any) =>
            h(NCheckbox, { label: option.label, value: option.value }),
          ),
        ],
      });
    };
  },
});
