import { defineComponent as b, useAttrs as C, ref as c, inject as v, onMounted as w, computed as a, openBlock as d, createElementBlock as m, createVNode as g, unref as n, mergeProps as k, withCtx as x, renderSlot as u, Fragment as P, renderList as F, createCommentVNode as $ } from "vue";
import { by as j } from "./useElementPlus.5a2e6faa.js";
import "./isEqual.c2f76849.js";
import "./index.f6071fa7.js";
const B = {
  key: 0,
  class: "form-main",
  style: { height: "100%" }
}, q = /* @__PURE__ */ b({
  __name: "KForm",
  props: {
    record: {
      type: Object,
      require: !0
    }
  },
  setup(i, { expose: p }) {
    const o = i, f = C(), l = c(null), s = v("forms", {}), h = c(!0);
    w(async () => {
      var e;
      if (o.record.type === "form" && s.value) {
        const r = (e = o.record.name) != null ? e : "default";
        return s.value[r] = l.value, !1;
      }
    });
    const y = a(() => {
      const e = o.record.componentProps;
      let r = e.labelCol, t = e.wrapperCol;
      return e.labelLayout === "fixed" && (r = { style: `width:${e.labelWidth}px` }, t = { style: "width:auto;flex:1" }), {
        ...e,
        labelCol: r,
        wrapperCol: t
      };
    }), _ = a(() => {
      var e;
      return (e = o.record.children) != null ? e : [];
    });
    return p({
      form: l
    }), (e, r) => h.value ? (d(), m("div", B, [
      g(n(j), k({
        ref_key: "form",
        ref: l,
        model: n(f).model
      }, n(y), { style: { height: "100%" } }), {
        default: x(() => [
          u(e.$slots, "edit-node", {}, () => [
            (d(!0), m(P, null, F(n(_), (t) => u(e.$slots, "node", { record: t })), 256))
          ])
        ]),
        _: 3
      }, 16, ["model"])
    ])) : $("", !0);
  }
});
export {
  q as default
};
