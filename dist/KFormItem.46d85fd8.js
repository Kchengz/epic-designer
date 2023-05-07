import { defineComponent as m, useAttrs as p, ref as f, openBlock as n, createBlock as s, unref as r, mergeProps as l, withCtx as a, renderSlot as c } from "vue";
import { bz as u } from "./useElementPlus.5a2e6faa.js";
import "./isEqual.c2f76849.js";
import "./index.f6071fa7.js";
const B = /* @__PURE__ */ m({
  __name: "KFormItem",
  setup(_) {
    const e = p(), t = f(null);
    return (o, i) => (n(), s(r(u), l({
      ref_key: "form",
      ref: t
    }, r(e), {
      prop: r(e).field
    }), {
      default: a(() => [
        c(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["prop"]));
  }
});
export {
  B as default
};
