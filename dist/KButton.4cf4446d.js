import { defineComponent as p, h as m, renderSlot as c } from "vue";
import { a as d } from "./index.0fb88f51.js";
import "./useElementPlus.5a2e6faa.js";
import "./isEqual.c2f76849.js";
import "./index.f6071fa7.js";
import "./index.1e43ecc1.js";
const B = p({
  props: {
    record: {
      type: Object
    }
  },
  setup(t, { emit: i, slots: e }) {
    return () => {
      var o;
      const n = {
        ...(o = t.record) == null ? void 0 : o.componentProps
      };
      return m(d, n, {
        default: () => c(e, "default", {}, () => {
          var r;
          return [(r = t.record) == null ? void 0 : r.label];
        })
      });
    };
  }
});
export {
  B as default
};
