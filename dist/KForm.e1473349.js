import { defineComponent as v, useAttrs as _, ref as C, inject as F, onMounted as b, computed as i, openBlock as a, createElementBlock as m, createVNode as g, unref as n, mergeProps as w, withCtx as x, renderSlot as c, Fragment as P, renderList as k } from "vue";
import { F as $ } from "./index.f532d8d9.js";
import "./index.1fa3133f.js";
import "./index.1e43ecc1.js";
import "./_arrayIncludesWith.fc5f2209.js";
import "./hasIn.d68b1023.js";
import "./flatten.3de0f950.js";
import "./isEqual.c2f76849.js";
import "./index.f6071fa7.js";
import "./index.8e979d13.js";
const j = {
  class: "form-main",
  style: { height: "100%" }
}, V = /* @__PURE__ */ v({
  __name: "KForm",
  props: {
    record: {
      type: Object,
      require: !0
    }
  },
  setup(d, { expose: p }) {
    const t = d, u = _(), o = C(null), s = F("forms", {});
    b(async () => {
      var e;
      if (t.record.type === "form" && s.value) {
        const r = (e = t.record.name) != null ? e : "default";
        return o.value.validate = o.value.validateFields, s.value[r] = o.value, !1;
      }
    });
    const f = i(() => {
      const e = t.record.componentProps;
      let r = e.labelCol, l = e.wrapperCol;
      return e.labelLayout === "fixed" && (r = { style: `width:${e.labelWidth}px` }, l = { style: "width:auto;flex:1" }), {
        ...e,
        labelCol: r,
        wrapperCol: l
      };
    });
    function h(e) {
      console.log(e);
    }
    const y = i(() => {
      var e;
      return (e = t.record.children) != null ? e : [];
    });
    return p({
      form: o
    }), (e, r) => (a(), m("div", j, [
      g(n($), w({
        ref_key: "form",
        ref: o,
        model: n(u).model
      }, n(f), {
        style: { height: "100%" },
        onFinish: h
      }), {
        default: x(() => [
          c(e.$slots, "edit-node", {}, () => [
            (a(!0), m(P, null, k(n(y), (l) => c(e.$slots, "node", { record: l })), 256))
          ])
        ]),
        _: 3
      }, 16, ["model"])
    ]));
  }
});
export {
  V as default
};
