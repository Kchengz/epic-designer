import { defineComponent, h } from 'vue';
import { NCheckboxGroup, NCheckbox } from 'naive-ui';

// 二次封装组件
export default defineComponent({
  emits: ['update:modelValue'],
  setup(_, { emit, attrs }) {
    function handleUpdate(e = null) {
      emit(`update:modelValue`, e);
    }

    return () => {
      const props: { [propName: string]: any } = {
        ...attrs,
        value: attrs.modelValue,
        'onUpdate:value': handleUpdate,
      };
      return h(NCheckboxGroup, props, {
        default: () => [props.options?.map((option: any) => h(NCheckbox, { label: option.label, value: option.value }))]
      });
    };
  }
});
