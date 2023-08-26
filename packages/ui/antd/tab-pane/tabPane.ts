import { defineComponent, h, renderSlot, inject, type PropType } from "vue";
import { TabPane } from "ant-design-vue/lib/tabs";
import { type NodeItem } from "@epic-designer/core/types/epic-designer";
export default defineComponent({
  props: {
    record: {
      type: Object as PropType<NodeItem>,
      require: true,
      default: () => ({}),
    },
  },
  setup(props, { slots }) {
    const nodeAttrs = inject("nodeAttrs", {});

    return () => {
      const record = {
        ...props.record,
        ...props.record?.componentProps,
        title: props.record?.label ?? "",
      };
      const children = record.children;
      delete record.children;

      // return h("div", "sdfsd");
      return h(
        TabPane,
        { record, ...nodeAttrs },
        {
          default: () =>
            renderSlot(slots, "edit-node", {}, () =>
              children.map((record: any) =>
                renderSlot(slots, "node", { record })
              )
            ),
        }
      );
    };
  },
});
