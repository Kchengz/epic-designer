import { ref as S, inject as H, computed as v, defineComponent as y, openBlock as B, createElementBlock as k, normalizeClass as f, unref as e, createElementVNode as g, withDirectives as C, isRef as N, vModelRadio as z, withModifiers as F, renderSlot as I, createTextVNode as P, toDisplayString as D, nextTick as T, normalizeStyle as Q, onMounted as W, provide as J, reactive as X, toRefs as Y, watch as Z } from "vue";
import { b as E, U as _, s as G, f as $, g as w, C as x, e as A, a6 as ee, y as oe, h as V, _ as h, ap as ae, a5 as le, af as se, Q as ne, w as te, O as K } from "./useElementPlus.5a2e6faa.js";
const M = E({
  size: A,
  disabled: Boolean,
  label: {
    type: [String, Number, Boolean],
    default: ""
  }
}), re = E({
  ...M,
  modelValue: {
    type: [String, Number, Boolean],
    default: ""
  },
  name: {
    type: String,
    default: ""
  },
  border: Boolean
}), U = {
  [_]: (s) => G(s) || $(s) || w(s),
  [x]: (s) => G(s) || $(s) || w(s)
}, L = Symbol("radioGroupKey"), O = (s, m) => {
  const n = S(), a = H(L, void 0), d = v(() => !!a), c = v({
    get() {
      return d.value ? a.modelValue : s.modelValue;
    },
    set(i) {
      d.value ? a.changeEvent(i) : m && m(_, i), n.value.checked = s.modelValue === s.label;
    }
  }), r = ee(v(() => a == null ? void 0 : a.size)), u = oe(v(() => a == null ? void 0 : a.disabled)), l = S(!1), p = v(() => u.value || d.value && c.value !== s.label ? -1 : 0);
  return {
    radioRef: n,
    isGroup: d,
    radioGroup: a,
    focus: l,
    size: r,
    disabled: u,
    tabIndex: p,
    modelValue: c
  };
}, ie = ["value", "name", "disabled"], de = y({
  name: "ElRadio"
}), ue = /* @__PURE__ */ y({
  ...de,
  props: re,
  emits: U,
  setup(s, { emit: m }) {
    const n = s, a = V("radio"), { radioRef: d, radioGroup: c, focus: r, size: u, disabled: l, modelValue: p } = O(n, m);
    function i() {
      T(() => m("change", p.value));
    }
    return (o, t) => {
      var b;
      return B(), k("label", {
        class: f([
          e(a).b(),
          e(a).is("disabled", e(l)),
          e(a).is("focus", e(r)),
          e(a).is("bordered", o.border),
          e(a).is("checked", e(p) === o.label),
          e(a).m(e(u))
        ])
      }, [
        g("span", {
          class: f([
            e(a).e("input"),
            e(a).is("disabled", e(l)),
            e(a).is("checked", e(p) === o.label)
          ])
        }, [
          C(g("input", {
            ref_key: "radioRef",
            ref: d,
            "onUpdate:modelValue": t[0] || (t[0] = (R) => N(p) ? p.value = R : null),
            class: f(e(a).e("original")),
            value: o.label,
            name: o.name || ((b = e(c)) == null ? void 0 : b.name),
            disabled: e(l),
            type: "radio",
            onFocus: t[1] || (t[1] = (R) => r.value = !0),
            onBlur: t[2] || (t[2] = (R) => r.value = !1),
            onChange: i
          }, null, 42, ie), [
            [z, e(p)]
          ]),
          g("span", {
            class: f(e(a).e("inner"))
          }, null, 2)
        ], 2),
        g("span", {
          class: f(e(a).e("label")),
          onKeydown: t[3] || (t[3] = F(() => {
          }, ["stop"]))
        }, [
          I(o.$slots, "default", {}, () => [
            P(D(o.label), 1)
          ])
        ], 34)
      ], 2);
    };
  }
});
var pe = /* @__PURE__ */ h(ue, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio.vue"]]);
const me = E({
  ...M,
  name: {
    type: String,
    default: ""
  }
}), ce = ["value", "name", "disabled"], fe = y({
  name: "ElRadioButton"
}), be = /* @__PURE__ */ y({
  ...fe,
  props: me,
  setup(s) {
    const m = s, n = V("radio"), { radioRef: a, focus: d, size: c, disabled: r, modelValue: u, radioGroup: l } = O(m), p = v(() => ({
      backgroundColor: (l == null ? void 0 : l.fill) || "",
      borderColor: (l == null ? void 0 : l.fill) || "",
      boxShadow: l != null && l.fill ? `-1px 0 0 0 ${l.fill}` : "",
      color: (l == null ? void 0 : l.textColor) || ""
    }));
    return (i, o) => {
      var t;
      return B(), k("label", {
        class: f([
          e(n).b("button"),
          e(n).is("active", e(u) === i.label),
          e(n).is("disabled", e(r)),
          e(n).is("focus", e(d)),
          e(n).bm("button", e(c))
        ])
      }, [
        C(g("input", {
          ref_key: "radioRef",
          ref: a,
          "onUpdate:modelValue": o[0] || (o[0] = (b) => N(u) ? u.value = b : null),
          class: f(e(n).be("button", "original-radio")),
          value: i.label,
          type: "radio",
          name: i.name || ((t = e(l)) == null ? void 0 : t.name),
          disabled: e(r),
          onFocus: o[1] || (o[1] = (b) => d.value = !0),
          onBlur: o[2] || (o[2] = (b) => d.value = !1)
        }, null, 42, ce), [
          [z, e(u)]
        ]),
        g("span", {
          class: f(e(n).be("button", "inner")),
          style: Q(e(u) === i.label ? e(p) : {}),
          onKeydown: o[3] || (o[3] = F(() => {
          }, ["stop"]))
        }, [
          I(i.$slots, "default", {}, () => [
            P(D(i.label), 1)
          ])
        ], 38)
      ], 2);
    };
  }
});
var j = /* @__PURE__ */ h(be, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-button.vue"]]);
const ve = E({
  id: {
    type: String,
    default: void 0
  },
  size: A,
  disabled: Boolean,
  modelValue: {
    type: [String, Number, Boolean],
    default: ""
  },
  fill: {
    type: String,
    default: ""
  },
  label: {
    type: String,
    default: void 0
  },
  textColor: {
    type: String,
    default: ""
  },
  name: {
    type: String,
    default: void 0
  },
  validateEvent: {
    type: Boolean,
    default: !0
  }
}), ge = U, ye = ["id", "aria-label", "aria-labelledby"], Ee = y({
  name: "ElRadioGroup"
}), Re = /* @__PURE__ */ y({
  ...Ee,
  props: ve,
  emits: ge,
  setup(s, { emit: m }) {
    const n = s, a = V("radio"), d = ae(), c = S(), { formItem: r } = le(), { inputId: u, isLabeledByFormItem: l } = se(n, {
      formItemContext: r
    }), p = (o) => {
      m(_, o), T(() => m("change", o));
    };
    W(() => {
      const o = c.value.querySelectorAll("[type=radio]"), t = o[0];
      !Array.from(o).some((b) => b.checked) && t && (t.tabIndex = 0);
    });
    const i = v(() => n.name || d.value);
    return J(L, X({
      ...Y(n),
      changeEvent: p,
      name: i
    })), Z(() => n.modelValue, () => {
      n.validateEvent && (r == null || r.validate("change").catch((o) => ne(o)));
    }), (o, t) => (B(), k("div", {
      id: e(u),
      ref_key: "radioGroupRef",
      ref: c,
      class: f(e(a).b("group")),
      role: "radiogroup",
      "aria-label": e(l) ? void 0 : o.label || "radio-group",
      "aria-labelledby": e(l) ? e(r).labelId : void 0
    }, [
      I(o.$slots, "default")
    ], 10, ye));
  }
});
var q = /* @__PURE__ */ h(Re, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-group.vue"]]);
const ke = te(pe, {
  RadioButton: j,
  RadioGroup: q
}), Ie = K(q), _e = K(j);
export {
  ke as E,
  _e as a,
  Ie as b,
  re as c,
  M as d,
  ge as e,
  ve as f,
  me as g,
  L as h,
  U as r
};
