import { defineComponent as m, h as d, renderSlot as o } from "vue";
import { NCard as a } from "naive-ui";
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
      }, r = e.children ?? [];
      return delete e.children, d(a, e, {
        default: () => o(
          n,
          "edit-node",
          {},
          () => r.map(
            (c) => o(n, "node", { componentSchema: c })
          )
        )
      });
    };
  }
});
export {
  h as default
};
