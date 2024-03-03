import { defineComponent, h, renderSlot, type PropType } from "vue";
import { ElCard } from "element-plus";
import { type ComponentSchema } from "@epic-designer/core/types/epic-designer";
export default defineComponent({
  props: {
    record: {
      type: Object as PropType<ComponentSchema>,
      required: true,
      default: () => ({}),
    },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const record = {
        ...props.record,
        header: props.record?.label ?? "",
      } as ComponentSchema;
      const children = record.children ?? [];
      delete record.children;

      let vNodeClildren: any = null;
      if (children.length) {
        vNodeClildren = () =>
          children.map((node: ComponentSchema) =>
            renderSlot(slots, "node", { record: node })
          );
      } else {
        vNodeClildren = () => [renderSlot(slots, "default")];
      }
      return h(ElCard, record, {
        default: () => renderSlot(slots, "edit-node", {}, vNodeClildren),
        header: () => renderSlot(slots, "header"),
      });
    };
  },
});
