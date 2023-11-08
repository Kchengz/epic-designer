import { defineComponent as c, h as l, renderSlot as d } from "vue";
import { d as p } from "./index-ba221574.mjs";
import "./index-53911fa5.mjs";
import "./useConfigInject-f0dbb416.mjs";
import "./index-5fc6c346.mjs";
import "./Col-6a21d416.mjs";
import "./useFlexGapSupport-a4f1c6a3.mjs";
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
