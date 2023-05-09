import { defineComponent, h } from "vue";
import "element-plus/es/components/select/style/css";
import { ElCheckboxGroup, ElCheckbox } from "element-plus";

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
        "onUpdate:modelValue": handleUpdate,
      };
      return h(ElCheckboxGroup, props, {
        default: () => [
          props.options?.map((option: any) =>
            h(ElCheckbox, { label: option.label, value: option.value })
          ),
        ],
      });
    };
  },
});
