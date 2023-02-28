import { defineComponent, h, watch } from "vue";
import { ElDatePicker } from "element-plus";
// 二次封装组件
export default defineComponent({
  emits: ["update:modelValue"],
  setup(_, { emit, attrs }) {
    watch(
      () => attrs.type,
      () => {
        handleUpdate();
      }
    );

    function handleUpdate(e = null) {
      emit(`update:modelValue`, e);
    }
    return {
      attrs,
      handleUpdate,
    };
  },
  render() {
    let cmp: any = ElDatePicker;
    const type = this.attrs.type;

    const props: { [propName: string]: any } = {
      ...this.attrs,
      "onUpdate:modelValue": this.handleUpdate,
    };

    // 判断显示类型，渲染相应组件
    if (type === "daterange") {
      // 默认值与组件类型不匹配时需清空默认值
      if (typeof props.value !== "object" && props.value !== null)
        props.value = null;
      cmp = ElDatePicker.RangePicker;
    } else if (type === "month") {
      // 默认值与组件类型不匹配时需清空默认值
      if (typeof props.value === "object") props.value = null;
      cmp = ElDatePicker.MonthPicker;
    } else {
      // 默认值与组件类型不匹配时需清空默认值
      if (typeof props.value === "object") props.value = null;
    }

    return [h(cmp, props)];
  },
});
