import { defineComponent, h } from "vue";
import "element-plus/es/components/select/style/css";
import { ElRadioGroup, ElRadio } from "element-plus";

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
    return h(ElRadioGroup, props, {
      default: () => [
        props.options?.map((option: any) =>
          h(ElRadio, { label: option.value }, { default: () => option.label })
        ),
      ],
    });
  },
});
