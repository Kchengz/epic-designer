import { defineComponent as p, h as a, renderSlot as r } from "vue";
import { d } from "./index-38aed28d.mjs";
import "./index-27942d25.mjs";
import "./useConfigInject-f4796704.mjs";
import "./index-4ddd22ca.mjs";
import "./Col-790da5bd.mjs";
import "./useFlexGapSupport-4e554c93.mjs";
const j = p({
  props: {
    componentSchema: {
      type: Object,
      require: !0,
      default: () => ({})
    }
  },
  setup(t, { attrs: i, slots: o }) {
    return () => {
      var n;
      const e = {
        ...t.componentSchema,
        title: ((n = t.componentSchema) == null ? void 0 : n.label) ?? ""
      }, m = e.children;
      return delete e.children, a(d, e, {
        default: () => r(
          o,
          "edit-node",
          {},
          () => m.map(
            (c) => r(o, "node", { componentSchema: c })
          )
        )
      });
    };
  }
});
export {
  j as default
};
