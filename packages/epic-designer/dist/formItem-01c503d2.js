import { defineComponent as m, useAttrs as f, ref as n, openBlock as p, createBlock as s, unref as r, mergeProps as a, withCtx as l, renderSlot as c } from "vue";
import { f as i } from "./index-1645fb1f.js";
import "./_commonjsHelpers-c5d32002.js";
import "./_vue_commonjs-external-eb7fec7f.js";
import "./index-815197f3.js";
const C = /* @__PURE__ */ m({
  __name: "formItem",
  setup(u) {
    const t = f(), e = n(null);
    return (o, _) => (p(), s(r(i.NFormItem), a({
      ref_key: "form",
      ref: e
    }, r(t), {
      path: r(t).field
    }), {
      default: l(() => [
        c(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["path"]));
  }
});
export {
  C as default
};
