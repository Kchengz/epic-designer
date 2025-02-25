import { defineComponent, h, watch } from 'vue';

import { DatePicker } from 'ant-design-vue';
// 二次封装组件
export default defineComponent({
  emits: ['update:modelValue', 'change', 'blur'],
  name: 'EDatePicker',
  props: {
    modelValue: {
      default: null,
      type: [String, Object, Array],
    },
    type: {
      default: 'date',
      type: String,
    },
  },
  setup(props, { emit }) {
    watch(
      () => props.type,
      () => {
        handleUpdate();
      },
    );

    function handleUpdate(e = null): void {
      emit('update:modelValue', e);
      emit('change', e);
      emit('blur', e);
    }
    return () => {
      let cmp: any = DatePicker;

      const compProps: Record<string, any> = {
        'onUpdate:value': handleUpdate,
        picker: props.type.replace(/range$/, ''),
        showTime: props.type.includes('time'),
        value: props.modelValue,
      };

      // 判断日期类型，渲染相应组件
      if (props.type.includes('range')) {
        cmp = DatePicker.RangePicker;
      }
      return h(cmp, compProps);
    };
  },
});
