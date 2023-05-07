import { defineComponent as y, inject as c, computed as f, openBlock as r, createElementBlock as u, unref as s, Fragment as _, renderList as k, createElementVNode as n, withDirectives as v, toDisplayString as b, createVNode as w, vShow as D, createCommentVNode as P } from "vue";
import { a as g } from "./index.091e7416.js";
import { h as V, s as C, r as F } from "./revoke.807da173.js";
const B = { class: "k-attribute-view" }, E = { key: 0 }, S = { class: "attr-item" }, A = ["title"], N = { class: "attr-input" }, K = /* @__PURE__ */ y({
  __name: "KStyleView",
  setup(x) {
    const a = c("designer"), p = c("schemas"), i = [
      {
        label: "\u5BBD\u5EA6",
        type: "k-input-size",
        field: "componentProps.style.width"
      },
      {
        label: "\u9AD8\u5EA6",
        type: "k-input-size",
        field: "componentProps.style.height"
      },
      {
        label: "\u5185\u8FB9\u8DDD",
        type: "k-input-size",
        field: "componentProps.style.padding"
      },
      {
        label: "\u5916\u8FB9\u8DDD",
        type: "k-input-size",
        field: "componentProps.style.margin"
      },
      {
        label: "\u80CC\u666F\u8272",
        type: "color-picker",
        field: "componentProps.style.backgroundColor",
        componentProps: {
          type: "color",
          style: {
            width: "60px"
          }
        }
      },
      {
        label: "\u5B57\u4F53\u989C\u8272",
        type: "color-picker",
        field: "componentProps.style.color",
        componentProps: {
          type: "color",
          style: {
            width: "60px"
          }
        }
      }
    ], o = f(() => a.state.checkedNode);
    function d(t) {
      var l, e;
      return typeof t.show == "boolean" ? t.show : (e = (l = t.show) == null ? void 0 : l.call(t, { values: o.value })) != null ? e : !0;
    }
    function h(t, l) {
      C(t, l, o.value), F.push(p.value, "\u7F16\u8F91\u7EC4\u4EF6\u5C5E\u6027");
    }
    return (t, l) => (r(), u("aside", B, [
      s(o) ? (r(), u("div", E, [
        (r(), u(_, null, k(i, (e) => n("div", {
          key: e.field + s(o).id
        }, [
          v(n("div", S, [
            n("div", {
              class: "attr-label",
              title: e.label
            }, b(e.label), 9, A),
            n("div", N, [
              w(s(g), {
                record: { ...e, componentProps: { ...e.componentProps }, show: !0 },
                "model-value": s(V)(e.field, s(o)),
                "onUpdate:modelValue": (m) => h(m, e.field)
              }, null, 8, ["record", "model-value", "onUpdate:modelValue"])
            ])
          ], 512), [
            [D, d(e)]
          ])
        ])), 64))
      ])) : P("", !0)
    ]));
  }
});
export {
  K as default
};
