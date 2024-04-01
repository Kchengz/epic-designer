import { defineComponent as C, ref as u, inject as D, reactive as w, provide as x, onMounted as P, computed as p, openBlock as i, createElementBlock as f, createVNode as k, unref as j, mergeProps as $, withCtx as B, renderSlot as d, Fragment as E, renderList as F, createCommentVNode as L } from "vue";
import { ElForm as N } from "element-plus";
const O = {
  key: 0,
  class: "form-main",
  style: { height: "100%" }
}, M = /* @__PURE__ */ C({
  __name: "form",
  props: {
    componentSchema: {
      type: Object,
      require: !0,
      default: () => ({})
    }
  },
  setup(h, { expose: v }) {
    const t = u(null), l = D("forms", {}), y = u(!0), a = w({});
    x("formData", a);
    const r = h;
    function c() {
      return a;
    }
    function m(e) {
      Object.assign(a, e);
    }
    function S() {
      var e;
      return (e = t.value) == null ? void 0 : e.validate();
    }
    P(async () => {
      var e, n, o, s;
      if (((e = r.componentSchema) == null ? void 0 : e.type) === "form" && l.value && t.value) {
        const g = ((o = (n = r.componentSchema) == null ? void 0 : n.componentProps) == null ? void 0 : o.name) ?? ((s = r.componentSchema) == null ? void 0 : s.name) ?? "default";
        return l.value[g] = t.value, t.value.getData = c, t.value.setData = m, !1;
      }
    });
    const _ = p(() => {
      const e = r.componentSchema.componentProps;
      let n = e.labelCol, o = e.wrapperCol;
      return e.labelLayout === "fixed" && (n = { style: `width:${e.labelWidth}px` }, o = { style: "width:auto;flex:1" }), {
        ...e,
        labelCol: n,
        wrapperCol: o
      };
    }), b = p(() => r.componentSchema.children ?? []);
    return v({
      form: t,
      getData: c,
      setData: m,
      validate: S
    }), (e, n) => y.value ? (i(), f("div", O, [
      k(j(N), $({
        ref_key: "form",
        ref: t,
        model: a
      }, _.value, { style: { height: "100%" } }), {
        default: B(() => [
          d(e.$slots, "edit-node", {}, () => [
            (i(!0), f(E, null, F(b.value, (o) => d(e.$slots, "node", { componentSchema: o })), 256))
          ])
        ]),
        _: 3
      }, 16, ["model"])
    ])) : L("", !0);
  }
});
export {
  M as default
};
