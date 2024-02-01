import { defineComponent as c, h as l, renderSlot as d } from "vue";
import { d as p } from "./index-154025de.mjs";
import "./index-27942d25.mjs";
import "./useConfigInject-f4796704.mjs";
import "./index-4ddd22ca.mjs";
import "./Col-790da5bd.mjs";
import "./useFlexGapSupport-4e554c93.mjs";
const q = c({
  props: {
    record: {
      type: Object,
      require: !0,
      default: () => ({})
    }
  },
  setup(r, { attrs: m, slots: t }) {
    return () => {
      var o;
      const e = {
        ...r.record,
        title: ((o = r.record) == null ? void 0 : o.label) ?? ""
      }, i = e.children;
      return delete e.children, l(p, e, {
        default: () => d(
          t,
          "edit-node",
          {},
          () => i.map(
            (n) => d(t, "node", { record: n })
          )
        )
      });
    };
  }
});
export {
  q as default
};
