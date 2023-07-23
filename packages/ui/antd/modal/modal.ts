import { defineComponent, h, renderSlot, type PropType } from "vue";
import { type NodeItem } from "@epic-designer/core/types/epic-designer";
import Modal from 'ant-design-vue/lib/modal'
import Button from 'ant-design-vue/lib/button'
import Space from 'ant-design-vue/lib/space'
 

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
        visible:attrs.modelValue,
        "onUpdate:visible": handleClose,
        'body-style':{ padding: '12px' },
        footer:null
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

      return h(Modal, record, {
        default: () => [
          renderSlot(slots, "edit-node", {}, vNodeClildren),
          h(
            "div",
            { class: "epic-modal-footer" },
            h(Space, { align: "end" }, [
              h(Button, { onClick: handleClose }, "关闭"),
              h(
                Button,
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
