import { defineComponent as w, inject as d, reactive as V, provide as k, computed as p, openBlock as u, createElementBlock as l, Fragment as y, renderList as C, unref as n, withDirectives as E, createElementVNode as c, normalizeClass as D, toDisplayString as F, createVNode as N, vShow as P } from "vue";
import { p as A, a as S } from "./index.091e7416.js";
import { h as x, s as B, r as U } from "./revoke.807da173.js";
const j = { class: "k-attribute-view" }, z = ["title"], I = { class: "attr-input" }, q = /* @__PURE__ */ w({
  __name: "KAttributeView",
  setup(K) {
    const i = d("designer"), f = d("schemas"), h = V({});
    k("formData", h);
    const m = A.getComponentConfings(), r = p(() => i.state.checkedNode);
    function v(t) {
      var o;
      return typeof t.show == "boolean" ? t.show : typeof t.show == "function" ? (o = t.show) == null ? void 0 : o.call(t, { values: r.value }) : !0;
    }
    const _ = p(() => {
      var e, s, a;
      const t = (e = i.state.checkedNode) == null ? void 0 : e.type;
      if (!t)
        return [];
      const o = (a = (s = m[t]) == null ? void 0 : s.config.attribute) != null ? a : [];
      return [
        {
          label: "\u7EC4\u4EF6ID",
          type: "input",
          field: "id",
          componentProps: {
            disabled: !0
          }
        },
        ...o
      ];
    });
    function b(t, o) {
      B(t, o, r.value), U.push(f.value, "\u7F16\u8F91\u7EC4\u4EF6\u5C5E\u6027");
    }
    return (t, o) => (u(), l("aside", j, [
      (u(!0), l(y, null, C(n(_), (e) => {
        var s, a;
        return u(), l("div", {
          key: e.field + ((s = n(r)) == null ? void 0 : s.id)
        }, [
          E(c("div", {
            class: D(["attr-item", e.layout])
          }, [
            c("div", {
              class: "attr-label",
              title: e.label
            }, F(e.label), 9, z),
            c("div", I, [
              N(n(S), {
                record: { ...e, componentProps: { ...e.componentProps, ...e.field === "componentProps.defaultValue" ? (a = n(r)) == null ? void 0 : a.componentProps : {} }, show: !0 },
                "model-value": n(x)(e.field, n(r)),
                "onUpdate:modelValue": (g) => b(g, e.field)
              }, null, 8, ["record", "model-value", "onUpdate:modelValue"])
            ])
          ], 2), [
            [P, v(e)]
          ])
        ]);
      }), 128))
    ]));
  }
});
export {
  q as default
};
