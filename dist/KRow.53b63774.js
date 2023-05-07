import { defineComponent as i, h as c, renderSlot as o } from "vue";
import { E as p } from "./index.a834623b.js";
import "./constants.7f69fb4e.js";
import "./useElementPlus.5a2e6faa.js";
import "./isEqual.c2f76849.js";
import "./index.f6071fa7.js";
const y = i({
  props: {
    record: {
      type: Object,
      require: !0
    },
    children: {
      type: Array
    }
  },
  setup(e, { attrs: l, slots: t }) {
    return () => {
      const r = {
        ...e.record,
        title: e.record.label
      }, d = r.children;
      return delete r.children, c(p, r, {
        default: () => [
          o(
            t,
            "edit-node",
            {},
            () => d.map(
              (n) => o(t, "node", { record: n })
            )
          )
        ]
      });
    };
  }
});
export {
  y as default
};
