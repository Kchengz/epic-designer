import { defineComponent, h } from 'vue';

import { ElOption, ElSelect } from 'element-plus';

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
        key: String(attrs.multiple),
        'onUpdate:modelValue': handleUpdate,
      };

      // watch

      return h(ElSelect, props, {
        default: () => [
          props.options?.map((option: any) =>
            h(ElOption, { label: option.label, value: option.value }),
          ),
        ],
      });
    };
  },
});
