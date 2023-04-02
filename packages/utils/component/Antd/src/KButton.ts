import { defineComponent, h, renderSlot, PropType } from "vue";
import Button from "ant-design-vue/lib/button";
import { NodeItem } from "../../../../types/kDesigner";

// 二次封装组件
export default defineComponent({
  props: {
    record: {
      type: Object as PropType<NodeItem>,
    },
  },
  setup(props, { emit, slots }) {
    function handleAction(e = null) {

    }

    return () => {
      const componentProps: { [propName: string]: any } = {
        ...props.record?.componentProps,
        onClick: handleAction,
      };

      return h(Button, componentProps, {
        default: () =>
          renderSlot(slots, "default", {}, () => [props.record?.label]),
      });
    };
  },
});
