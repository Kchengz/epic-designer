import { defineComponent as m, useAttrs as n, ref as f, openBlock as s, createBlock as a, unref as e, mergeProps as p, withCtx as l, renderSlot as c } from "vue";
import { a as u } from "./index-8625dc9a.mjs";
import "./index-5fc6c346.mjs";
import "./index-ae81290b.mjs";
const B = /* @__PURE__ */ m({
  __name: "formItem",
  setup(_) {
    const r = n(), t = f(null);
    return (o, i) => (s(), a(e(u), p({
      ref_key: "form",
      ref: t
    }, e(r), {
      name: e(r).field
    }), {
      default: l(() => [
        c(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["name"]));
  }
});
export {
  B as default
};
