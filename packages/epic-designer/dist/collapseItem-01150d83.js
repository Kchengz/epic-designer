import { defineComponent as l, h as p, renderSlot as c } from "vue";
import { ElCollapseItem as a } from "element-plus";
const i = l({
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
      }, m = e.children;
      return delete e.children, p(a, e, {
        default: () => c(
          n,
          "edit-node",
          {},
          () => m.map(
            (r) => c(n, "node", { componentSchema: r })
          )
        )
      });
    };
  }
});
export {
  i as default
};
