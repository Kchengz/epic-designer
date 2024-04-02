import { defineComponent, h, watch } from "vue";
import { DatePicker } from "ant-design-vue";
// 二次封装组件
export default defineComponent({
  name: "EDatePicker",
  emits: ["update:modelValue", "change", "blur"],
  setup(_, { emit, attrs }) {
    watch(
      () => attrs.type,
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
      const type = attrs.type;

      const props: Record<string, any> = {
        ...attrs,
        value: attrs.modelValue,
        "onUpdate:value": handleUpdate,
      };

      // 判断显示类型，渲染相应组件
      if (type === "daterange") {
        // 默认值与组件类型不匹配时需清空默认值
        if (typeof props.value !== "object" && props.value !== null) {
          props.value = null;
        }
        cmp = DatePicker.RangePicker;
      } else if (type === "month") {
        // 默认值与组件类型不匹配时需清空默认值
        if (typeof props.value === "object") props.value = null;
        cmp = DatePicker.MonthPicker;
      } else {
        // 默认值与组件类型不匹配时需清空默认值
        if (typeof props.value === "object") props.value = null;
      }
      return h(cmp, props);
    };
  },
});
