import { defineComponent as m, useAttrs as p, ref as n, openBlock as f, createBlock as i, unref as r, mergeProps as s, withCtx as a, renderSlot as l } from "vue";
import { a as c } from "./index.f532d8d9.js";
import "./index.1fa3133f.js";
import "./index.1e43ecc1.js";
import "./_arrayIncludesWith.fc5f2209.js";
import "./hasIn.d68b1023.js";
import "./flatten.3de0f950.js";
import "./isEqual.c2f76849.js";
import "./index.f6071fa7.js";
import "./index.8e979d13.js";
const y = /* @__PURE__ */ m({
  __name: "KFormItem",
  setup(u) {
    const t = p(), e = n(null);
    return (o, _) => (f(), i(r(c), s({
      ref_key: "form",
      ref: e
    }, r(t), {
      name: r(t).field
    }), {
      default: a(() => [
        l(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["name"]));
  }
});
export {
  y as default
};
