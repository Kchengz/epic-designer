import { defineComponent as b, ref as x, inject as C, reactive as D, provide as F, onMounted as P, computed as u, openBlock as i, createElementBlock as f, createVNode as j, unref as k, mergeProps as w, withCtx as $, renderSlot as d, Fragment as B, renderList as L } from "vue";
import { F as O } from "./index-f708f838.mjs";
import "./index-4ddd22ca.mjs";
import "./index-ae81290b.mjs";
const q = {
  class: "form-main",
  style: { height: "100%" }
}, W = /* @__PURE__ */ b({
  __name: "form",
  props: {
    componentSchema: {
      type: Object,
      require: !0,
      default: () => ({})
    }
  },
  setup(h, { expose: v }) {
    const r = h, o = x(null), l = C("forms", {}), a = D({});
    F("formData", a);
    function c() {
      return a;
    }
    function m() {
      var e;
      return (e = o.value) == null ? void 0 : e.validateFields();
    }
    function s(e) {
      Object.assign(a, e);
    }
    P(async () => {
      var e, n, t, p;
      if (((e = r.componentSchema) == null ? void 0 : e.type) === "form" && l.value && o.value) {
        const y = ((t = (n = r.componentSchema) == null ? void 0 : n.componentProps) == null ? void 0 : t.name) ?? ((p = r.componentSchema) == null ? void 0 : p.name) ?? "default";
        return o.value.validate = m, l.value[y] = o.value, o.value.getData = c, o.value.setData = s, !1;
      }
    });
    const g = u(() => {
      const e = r.componentSchema.componentProps;
      let n = e.labelCol, t = e.wrapperCol;
      return e.labelLayout === "fixed" && (n = { flex: `${e.labelWidth}px` }, t = { flex: 1 }), {
        ...e,
        labelCol: n,
        wrapperCol: t
      };
    });
    function S(e) {
      console.log(e);
    }
    const _ = u(() => r.componentSchema.children ?? []);
    return v({
      form: o,
      getData: c,
      setData: s,
      validate: m
    }), (e, n) => (i(), f("div", q, [
      j(k(O), w({
        ref_key: "form",
        ref: o,
        model: a
      }, g.value, {
        style: { height: "100%" },
        onFinish: S
      }), {
        default: $(() => [
          d(e.$slots, "edit-node", {}, () => [
            (i(!0), f(B, null, L(_.value, (t) => d(e.$slots, "node", { componentSchema: t })), 256))
          ])
        ]),
        _: 3
      }, 16, ["model"])
    ]));
  }
});
export {
  W as default
};
