import { defineComponent, h, renderSlot, type PropType } from "vue";
import { type NodeItem } from "@k-designer/core/packages/types/kDesigner";
import { ElDialog, ElButton } from "element-plus";

export default defineComponent({
  props: {
    record: {
      type: Object as PropType<NodeItem>,
      default: () => ({}),
    },
  },
  emits: ["ok", "close", "update:modelValue"],
  setup(props, { attrs, slots, emit }) {
    return () => {
      const record = {
        ...props.record,
        ...attrs,
        title: props.record?.label ?? "",
        "modal-class": "k-modal",
        'destroy-on-close': true,
        "onUpdate:modelValue": handleClose,
      } as Record<string, any>;
      const children = record.children ?? [];
      delete record.children;

      let vNodeClildren: any = null;
      if (children.length) {
        vNodeClildren = () =>
          children.map((node: NodeItem) =>
            renderSlot(slots, "node", { record: node })
          );
      } else {
        vNodeClildren = () => [renderSlot(slots, "default")];
      }

      function handleOk() {
        emit("ok");
      }

      function handleClose(e) {
        console.log(e)
        emit("update:modelValue", false);
        emit("close");
      }

      return h(ElDialog, record, {
        default: () => [
          renderSlot(slots, "edit-node", {}, vNodeClildren),
          h("div", { class: "k-modal-footer" }, [
            h(ElButton, { onClick: handleClose }, "关闭"),
            h(
              ElButton,
              { type: "primary", onClick: handleOk },
              record.okText ?? "确定"
            ),
          ]),
        ],
      });
    };
  },
});
