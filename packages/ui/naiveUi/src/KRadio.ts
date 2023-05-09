import { defineComponent, h } from "vue";
import { NRadioGroup, NRadio } from "naive-ui";

// 二次封装组件
export default defineComponent({
  emits: ["update:modelValue"],
  setup(_, { emit, attrs }) {
    function handleUpdate(e = null) {
      emit(`update:modelValue`, e);
    }

    return () => {
      const props: { [propName: string]: any } = {
        ...attrs,
        value: attrs.modelValue,
        "onUpdate:value": handleUpdate,
      };
      return h(NRadioGroup, props, {
        default: () => [
          props.options?.map((option: any) =>
            h(NRadio, { value: option.value,key:option.value }, { default: () => option.label })
          ),
        ],
      });
    };
  },
});
