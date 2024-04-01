import { defineComponent as r, h as l, renderSlot as o } from "vue";
import { NCollapseItem as p } from "naive-ui";
const h = r({
  props: {
    componentSchema: {
      type: Object,
      require: !0,
      default: () => ({})
    }
  },
  setup(t, { slots: n }) {
    return () => {
      const e = {
        ...t.componentSchema,
        title: t.componentSchema.label ?? ""
      }, c = e.children ?? [];
      return delete e.children, l(p, e, {
        default: () => o(
          n,
          "edit-node",
          {},
          () => c.map((m) => o(n, "node", { componentSchema: m }))
        )
      });
    };
  }
});
export {
  h as default
};
