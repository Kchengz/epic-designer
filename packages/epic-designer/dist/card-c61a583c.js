import { defineComponent as d, h as a, renderSlot as r } from "vue";
import { Card as p } from "ant-design-vue";
const i = d({
  props: {
    componentSchema: {
      type: Object,
      require: !0,
      default: () => ({})
    }
  },
  setup(t, { slots: n }) {
    return () => {
      var o;
      const e = {
        ...t.componentSchema,
        title: ((o = t.componentSchema) == null ? void 0 : o.label) ?? ""
      }, c = e.children ?? [];
      return delete e.children, a(p, e, {
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
  i as default
};
