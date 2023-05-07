import { defineComponent as c, h as i, renderSlot as d } from "vue";
import { E as a } from "./index.edf279c2.js";
import "./useElementPlus.5a2e6faa.js";
import "./isEqual.c2f76849.js";
import "./index.f6071fa7.js";
const s = c({
  props: {
    record: {
      type: Object,
      require: !0
    },
    children: {
      type: Array
    }
  },
  setup(e, { attrs: p, slots: t }) {
    return () => {
      const r = {
        ...e.record,
        header: e.record.label
      }, o = r.children;
      return delete r.children, i(a, r, {
        default: () => d(
          t,
          "edit-node",
          {},
          () => o.map(
            (n) => d(t, "node", { record: n })
          )
        )
      });
    };
  }
});
export {
  s as default
};
