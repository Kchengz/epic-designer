import { defineComponent, h, PropType } from "vue";
import { ElButton } from "element-plus";
// import { handleActions } from "./util";
import { NodeItem } from "../../../types/kDesigner";

// 二次封装组件
export default defineComponent({
  //emits: ["update:modelValue"],
  props: {
    record: {
      type: Object as PropType<NodeItem>,
      require: true,
    },
  },
  setup(props, { emit, attrs }) {
    /*watch(
      () => attrs.type,
      () => {
        handleUpdate();
      }
    );*/

    function handleUpdate(e = null) {
      //emit(`update:modelValue`, e);
    }

    function handleAction(e = null) {
      console.log("点击action1:" + JSON.stringify(e));
      // handleActions(props.record!.componentProps.eventActions, "onClick");
    }

    return () => {
      const componentProps: { [propName: string]: any } = {
        ...props.record!.componentProps,
        //"onUpdate:modelValue": this.handleUpdate,
        onClick: handleAction,
      };

      // console.log("按钮attrs:" + JSON.stringify(this.attrs))
      // console.log("按钮props:" + JSON.stringify(props))

      return h(ElButton, componentProps, {
        default: () => props.record!.label,
      });
    };
  },
});
