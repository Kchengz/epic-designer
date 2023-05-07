import { defineComponent as c, h as a, renderSlot as o } from "vue";
import { bD as i } from "./useElementPlus.5a2e6faa.js";
import "./isEqual.c2f76849.js";
import "./index.f6071fa7.js";
const h = c({
  props: {
    record: {
      type: Object,
      require: !0
    },
    children: {
      type: Array
    }
  },
  setup(r, { attrs: p, slots: t }) {
    return () => {
      const e = {
        ...r.record,
        name: r.record.id
      }, d = e.children;
      return delete e.children, a(i, e, {
        default: () => o(
          t,
          "edit-node",
          {},
          () => d.map(
            (n) => o(t, "node", { record: n })
          )
        )
      });
    };
  }
});
export {
  h as default
};
