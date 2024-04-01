import { defineComponent as a, h as d, renderSlot as c } from "vue";
import { Col as l } from "ant-design-vue";
const u = a({
  props: {
    componentSchema: {
      type: Object,
      require: !0,
      default: () => ({})
    }
  },
  setup(t, { attrs: p, slots: n }) {
    return () => {
      var o;
      const e = {
        ...t.componentSchema,
        title: ((o = t.componentSchema) == null ? void 0 : o.label) ?? ""
      }, r = e.children;
      return delete e.children, d(l, e, {
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
