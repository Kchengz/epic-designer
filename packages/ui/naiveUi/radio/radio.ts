import { defineComponent, h } from 'vue';

import { NRadio, NRadioGroup } from 'naive-ui';

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
      return h(NRadioGroup, props, {
        default: () => [
          props.options?.map((option: any) =>
            h(
              NRadio,
              { key: option.value, value: option.value },
              { default: () => option.label },
            ),
          ),
        ],
      });
    };
  },
});
