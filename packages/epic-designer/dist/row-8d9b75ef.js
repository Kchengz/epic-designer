import { defineComponent as d, h as p, renderSlot as r } from "vue";
import { ElRow as a } from "element-plus";
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
      }, c = e.children;
      return delete e.children, p(a, e, {
        default: () => [
          r(
            n,
            "edit-node",
            {},
            () => c.map(
              (m) => r(n, "node", { componentSchema: m })
            )
          )
        ]
      });
    };
  }
});
export {
  i as default
};
