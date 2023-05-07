import { defineComponent as p, h as n, renderSlot as o } from "vue";
import { d as m } from "./index.d3f2de21.js";
import "./index.da9ce20f.js";
import "./useConfigInject.fdc04e2e.js";
import "./_vue_commonjs-external.cdc460b2.js";
import "./_commonjsHelpers.da91e947.js";
import "./index.1fa3133f.js";
import "./index.1e43ecc1.js";
import "./Col.c9fdc545.js";
import "./styleChecker.856616fa.js";
const q = p({
  props: {
    record: {
      type: Object,
      require: !0
    },
    children: {
      type: Array
    }
  },
  setup(e, { attrs: c, slots: t }) {
    return () => {
      const r = {
        ...e.record,
        title: e.record.label
      }, d = r.children;
      return delete r.children, n(m, r, {
        default: () => o(
          t,
          "edit-node",
          {},
          () => d.map(
            (i) => o(t, "node", { record: i })
          )
        )
      });
    };
  }
});
export {
  q as default
};
