import { defineComponent, h, renderSlot, type PropType } from "vue";
import { type ComponentSchema } from "@epic-designer/core/types/epic-designer";
import { NModal, NButton, NSpace } from "naive-ui";

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
        class: "epic-modal-n",
        preset: "card",
        show: attrs.modelValue,
        "onUpdate:show": handleClose,
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

      function handleClose() {
        emit("update:modelValue", false);
        emit("close");
      }

      return h(NModal, componentSchema, {
        default: () => [
          h(
            "div",
            { class: "epic-modal-main" },
            renderSlot(slots, "edit-node", {}, vNodeClildren)
          ),
          h(
            "div",
            { class: "epic-modal-footer" },
            h(
              NSpace,
              { justify: "end" },
              {
                default: () => [
                  h(
                    NButton,
                    { onClick: handleClose },
                    {
                      default: () => "关闭",
                    }
                  ),
                  h(
                    NButton,
                    { type: "primary", onClick: handleOk },
                    {
                      default: () => componentSchema.okText ?? "确定",
                    }
                  ),
                ],
              }
            )
          ),
        ],
      });
    };
  },
});
