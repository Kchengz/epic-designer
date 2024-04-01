import { defineComponent as l, h as a, renderSlot as c } from "vue";
import { ElCollapse as p } from "element-plus";
const u = l({
  props: {
    componentSchema: {
      type: Object,
      required: !0,
      default: () => ({})
    }
  },
  setup(t, { attrs: d, slots: n }) {
    return () => {
      var o;
      const e = {
        ...t.componentSchema,
        title: ((o = t.componentSchema) == null ? void 0 : o.label) ?? ""
      }, r = e.children;
      return delete e.children, a(p, e, {
        default: () => [
          c(
            n,
            "edit-node",
            {},
            () => r.map(
              (m) => c(n, "node", { componentSchema: m })
            )
          )
        ]
      });
    };
  }
});
export {
  u as default
};
