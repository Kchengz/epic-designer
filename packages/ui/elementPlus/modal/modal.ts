import { defineComponent, h, renderSlot, type PropType } from "vue";
import { type ComponentSchema } from "@epic-designer/core/types/epic-designer";
import { ElDialog, ElButton } from "element-plus";

export default defineComponent({
  props: {
    componentSchema: {
      type: Object as PropType<ComponentSchema>,
      default: () => ({}),
    },
  },
  emits: ["ok", "close", "update:modelValue"],
  setup(props, { attrs, slots, emit }) {
    return () => {
      const componentSchema = {
        ...props.componentSchema,
        ...attrs,
        title: props.componentSchema?.label ?? "",
        class: "epic-modal-el",
        "destroy-on-close": true,
        "onUpdate:modelValue": handleClose,
      } as Record<string, any>;
      const children = componentSchema.children ?? [];
      delete componentSchema.children;

      let vNodeClildren: any = null;
      if (children.length) {
        vNodeClildren = () =>
          children.map((node: ComponentSchema) =>
            renderSlot(slots, "node", { componentSchema: node })
          );
      } else {
        vNodeClildren = () => [renderSlot(slots, "default")];
      }

      function handleOk() {
        emit("ok");
      }

      function handleClose(e) {
        emit("update:modelValue", false);
        emit("close");
      }

      return h(ElDialog, componentSchema, {
        default: () => [
          renderSlot(slots, "edit-node", {}, vNodeClildren),
          h("div", { class: "epic-modal-footer" }, [
            h(
              ElButton,
              { onClick: handleClose },
              {
                default: () => "关闭",
              }
            ),
            h(
              ElButton,
              { type: "primary", onClick: handleOk },
              {
                default: () => componentSchema.okText ?? "确定",
              }
            ),
          ]),
        ],
      });
    };
  },
});
