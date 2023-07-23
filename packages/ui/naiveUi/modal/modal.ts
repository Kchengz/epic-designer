import { defineComponent, h, renderSlot, type PropType } from "vue";
import { type NodeItem } from "@epic-designer/core/types/epic-designer";
import { NModal, NButton, NSpace } from "naive-ui";

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
        class: "epic-modal",
        preset: "card",
        show:attrs.modelValue,
        "onUpdate:show": handleClose,
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

      function handleClose() {
        emit("update:modelValue", false);
        emit("close");
      }

      return h(NModal, record, {
        default: () => [
          renderSlot(slots, "edit-node", {}, vNodeClildren),
          h(
            "div",
            { class: "epic-modal-footer" },
            h(NSpace, { justify: "end" }, [
              h(NButton, { onClick: handleClose }, "关闭"),
              h(
                NButton,
                { type: "primary", onClick: handleOk },
                record.okText ?? "确定"
              ),
            ])
          ),
        ],
      });
    };
  },
});
