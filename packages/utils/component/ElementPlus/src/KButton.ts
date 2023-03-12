import { defineComponent, h, renderSlot, PropType } from "vue";
import { ElButton } from "element-plus";
// import { handleActions } from "./util";
import { NodeItem } from "../../../../types/kDesigner";

// 二次封装组件
export default defineComponent({
  //emits: ["update:modelValue"],
  props: {
    record: {
      type: Object as PropType<NodeItem>,
    },
  },
  setup(props, { emit, slots }) {
    function handleAction(e = null) {
      // console.log("点击action1:" + JSON.stringify(e));
      // handleActions(props.record!.componentProps.eventActions, "onClick");
    }

    return () => {
      const componentProps: { [propName: string]: any } = {
        ...props.record?.componentProps,
        onClick: handleAction,
      };


      return h(ElButton, componentProps, renderSlot(slots, "default", {}, () => [props.record?.label]));
    };
  },
});
