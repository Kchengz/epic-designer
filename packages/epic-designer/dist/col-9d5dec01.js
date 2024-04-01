import { defineComponent as m, h as d, renderSlot as o } from "vue";
import { NCol as l } from "naive-ui";
const h = m({
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
        title: t.componentSchema.label
      }, c = e.children;
      return delete e.children, d(l, e, {
        default: () => o(
          n,
          "edit-node",
          {},
          () => c.map((r) => o(n, "node", { componentSchema: r }))
        )
      });
    };
  }
});
export {
  h as default
};
