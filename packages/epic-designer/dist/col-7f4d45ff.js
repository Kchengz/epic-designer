import { defineComponent as d, h as l, renderSlot as c } from "vue";
import { ElCol as a } from "element-plus";
const u = d({
  props: {
    componentSchema: {
      type: Object,
      required: !0,
      default: () => ({})
    }
  },
  setup(t, { attrs: p, slots: n }) {
    return () => {
      var o;
      const e = {
        ...t.componentSchema,
        title: (o = t.componentSchema) == null ? void 0 : o.label
      }, r = e.children ?? [];
      return delete e.children, l(a, e, {
        default: () => c(
          n,
          "edit-node",
          {},
          () => r.map(
            (m) => c(n, "node", { componentSchema: m })
          )
        )
      });
    };
  }
});
export {
  u as default
};
