import { defineComponent as a, h as m, renderSlot as c } from "vue";
import { bC as l } from "./useElementPlus.5a2e6faa.js";
import "./isEqual.c2f76849.js";
import "./index.f6071fa7.js";
const y = a({
  props: {
    record: {
      type: Object,
      require: !0
    },
    children: {
      type: Array
    }
  },
  setup(r, { attrs: s, slots: e }) {
    return () => {
      var o, d, n;
      const t = {
        ...(o = r.record) == null ? void 0 : o.componentProps
      }, p = (n = (d = r.record) == null ? void 0 : d.children) != null ? n : [];
      return delete t.children, m(l, t, {
        default: () => c(
          e,
          "edit-node",
          {},
          () => p.map(
            (i) => c(e, "node", { record: i })
          )
        )
      });
    };
  }
});
export {
  y as default
};
