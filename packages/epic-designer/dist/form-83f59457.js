import { defineComponent as b, ref as x, inject as C, reactive as D, provide as P, onMounted as F, computed as p, openBlock as i, createElementBlock as f, createVNode as j, unref as k, mergeProps as w, withCtx as $, renderSlot as d, Fragment as B, renderList as L } from "vue";
import { Form as O } from "ant-design-vue";
const q = {
  class: "form-main",
  style: { height: "100%" }
}, N = /* @__PURE__ */ b({
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
    P("formData", a);
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
    F(async () => {
      var e, n, t, u;
      if (((e = r.componentSchema) == null ? void 0 : e.type) === "form" && l.value && o.value) {
        const y = ((t = (n = r.componentSchema) == null ? void 0 : n.componentProps) == null ? void 0 : t.name) ?? ((u = r.componentSchema) == null ? void 0 : u.name) ?? "default";
        return o.value.validate = m, l.value[y] = o.value, o.value.getData = c, o.value.setData = s, !1;
      }
    });
    const g = p(() => {
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
    const _ = p(() => r.componentSchema.children ?? []);
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
  N as default
};
