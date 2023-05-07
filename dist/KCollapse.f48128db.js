import { defineComponent as n, h as c, renderSlot as o } from "vue";
import { bu as i } from "./useElementPlus.5a2e6faa.js";
import "./isEqual.c2f76849.js";
import "./index.f6071fa7.js";
const f = n({
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
        title: r.record.label
      }, d = e.children;
      return delete e.children, c(i, e, {
        default: () => [
          o(
            t,
            "edit-node",
            {},
            () => d.map(
              (l) => o(t, "node", { record: l })
            )
          )
        ]
      });
    };
  }
});
export {
  f as default
};
