import { defineComponent, h, watch } from "vue";
import "element-plus/es/components/select/style/css";
import { ElSelect, ElOption } from "element-plus";

// 二次封装组件
export default defineComponent({
  emits: ["update:modelValue"],
  setup(_, { emit, attrs }) {
    function handleUpdate(e = null) {
      emit(`update:modelValue`, e);
    }

    return {
      attrs,
      handleUpdate,
    };
  },
  render() {
    const props: { [propName: string]: any } = {
      ...this.attrs,
      "onUpdate:modelValue": this.handleUpdate,
    };

    return h(ElSelect, props, {
      default: () => [
        props.options?.map((option: any) =>
          h(ElOption, { label: option.label, value: option.value })
        ),
      ],
    });
  },
});
