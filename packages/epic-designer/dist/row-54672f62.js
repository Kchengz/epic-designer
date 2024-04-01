import { defineComponent as a, h as d, renderSlot as r } from "vue";
import { Row as p } from "ant-design-vue";
const u = a({
  props: {
    componentSchema: {
      type: Object,
      require: !0,
      default: () => ({})
    }
  },
  setup(t, { attrs: l, slots: n }) {
    return () => {
      var o;
      const e = {
        ...t.componentSchema,
        title: ((o = t.componentSchema) == null ? void 0 : o.label) ?? ""
      }, c = e.children;
      return delete e.children, d(p, e, {
        default: () => r(
          n,
          "edit-node",
          {},
          () => c.map(
            (m) => r(n, "node", { componentSchema: m })
          )
        )
      });
    };
  }
});
export {
  u as default
};
