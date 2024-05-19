import { defineComponent, h, watch } from "vue";
import { DatePicker } from "ant-design-vue";
// 二次封装组件
export default defineComponent({
  name: "EDatePicker",
  emits: ["update:modelValue", "change", "blur"],
  props: {
    modelValue: {
      type: [String, Object, Array],
      default: null,
    },
    type: {
      type: String,
      default: "date",
    },
  },
  setup(props, { emit }) {
    watch(
      () => props.type,
      () => {
        handleUpdate();
      }
    );

    function handleUpdate(e = null): void {
      emit("update:modelValue", e);
      emit("change", e);
      emit("blur", e);
    }
    return () => {
      let cmp: any = DatePicker;

      const compProps: Record<string, any> = {
        value: props.modelValue,
        showTime: props.type.includes("time"),
        picker: props.type.replace(/range$/, ""),
        "onUpdate:value": handleUpdate,
      };

      // 判断日期类型，渲染相应组件
      if (props.type.includes("range")) {
        cmp = DatePicker.RangePicker;
      }
      return h(cmp, compProps);
    };
  },
});
