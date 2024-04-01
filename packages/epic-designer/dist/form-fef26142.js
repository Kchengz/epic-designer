import { defineComponent as P, ref as l, inject as k, reactive as b, provide as j, onMounted as C, computed as p, openBlock as i, createElementBlock as f, createVNode as N, unref as $, mergeProps as x, withCtx as B, renderSlot as d, Fragment as F, renderList as O, createCommentVNode as V } from "vue";
import { f as q } from "./index-1645fb1f.js";
import "./_commonjsHelpers-c5d32002.js";
import "./_vue_commonjs-external-eb7fec7f.js";
import "./index-815197f3.js";
const w = {
  key: 0,
  class: "form-main",
  style: { height: "100%" }
}, G = /* @__PURE__ */ P({
  __name: "form",
  props: {
    componentSchema: {
      type: Object,
      require: !0,
      default: () => ({})
    }
  },
  setup(h, { expose: v }) {
    const t = h, o = l(null), m = k("forms", {}), S = l(!0), n = b({});
    j("formData", n);
    function c() {
      return n;
    }
    function s(e) {
      Object.assign(n, e);
    }
    function _() {
      var e;
      return (e = o.value) == null ? void 0 : e.validate();
    }
    C(async () => {
      var e, a, r, u;
      if (((e = t.componentSchema) == null ? void 0 : e.type) === "form" && m.value && o.value) {
        const D = ((r = (a = t.componentSchema) == null ? void 0 : a.componentProps) == null ? void 0 : r.name) ?? ((u = t.componentSchema) == null ? void 0 : u.name) ?? "default";
        m.value[D] = o.value, o.value.getData = c, o.value.setData = s;
      }
    });
    const g = p(() => t.componentSchema.componentProps), y = p(() => t.componentSchema.children ?? []);
    return v({
      form: o,
      getData: c,
      setData: s,
      validate: _
    }), (e, a) => S.value ? (i(), f("div", w, [
      N($(q.NForm), x({
        ref_key: "form",
        ref: o,
        model: n
      }, g.value, { style: { height: "100%" } }), {
        default: B(() => [
          d(e.$slots, "edit-node", {}, () => [
            (i(!0), f(F, null, O(y.value, (r) => d(e.$slots, "node", { componentSchema: r })), 256))
          ])
        ]),
        _: 3
      }, 16, ["model"])
    ])) : V("", !0);
  }
});
export {
  G as default
};
