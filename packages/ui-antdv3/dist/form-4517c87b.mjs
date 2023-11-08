import { defineComponent as y, ref as b, inject as x, reactive as C, provide as D, onMounted as F, computed as i, openBlock as d, createElementBlock as f, createVNode as P, unref as j, mergeProps as k, withCtx as w, renderSlot as m, Fragment as $, renderList as B } from "vue";
import { F as L } from "./index-8625dc9a.mjs";
import "./index-5fc6c346.mjs";
import "./index-ae81290b.mjs";
const O = {
  class: "form-main",
  style: { height: "100%" }
}, S = /* @__PURE__ */ y({
  __name: "form",
  props: {
    record: {
      type: Object,
      require: !0,
      default: () => ({})
    }
  },
  setup(p, { expose: v }) {
    const o = p, r = b(null), l = x("forms", {}), n = C({});
    D("formData", n);
    function s() {
      return n;
    }
    function c() {
      var e;
      return (e = r.value) == null ? void 0 : e.validateFields();
    }
    function u(e) {
      Object.assign(n, e);
    }
    F(async () => {
      var e;
      if (((e = o.record) == null ? void 0 : e.type) === "form" && l.value && r.value) {
        const t = o.record.name ?? "default";
        return r.value.validate = c, l.value[t] = r.value, r.value.getData = s, r.value.setData = u, !1;
      }
    });
    const h = i(() => {
      const e = o.record.componentProps;
      let t = e.labelCol, a = e.wrapperCol;
      return e.labelLayout === "fixed" && (t = { flex: `${e.labelWidth}px` }, a = { flex: 1 }), {
        ...e,
        labelCol: t,
        wrapperCol: a
      };
    });
    function g(e) {
      console.log(e);
    }
    const _ = i(() => o.record.children ?? []);
    return v({
      form: r,
      getData: s,
      setData: u,
      validate: c
    }), (e, t) => (d(), f("div", O, [
      P(j(L), k({
        ref_key: "form",
        ref: r,
        model: n
      }, h.value, {
        style: { height: "100%" },
        onFinish: g
      }), {
        default: w(() => [
          m(e.$slots, "edit-node", {}, () => [
            (d(!0), f($, null, B(_.value, (a) => m(e.$slots, "node", { record: a })), 256))
          ])
        ]),
        _: 3
      }, 16, ["model"])
    ]));
  }
});
export {
  S as default
};
