import { inject as I, computed as p, getCurrentInstance as H, watch as Q, nextTick as W, ref as G, toRaw as U, defineComponent as L, useSlots as Z, openBlock as C, createBlock as j, resolveDynamicComponent as J, unref as n, normalizeClass as x, withCtx as X, createElementVNode as K, withDirectives as $, createElementBlock as y, isRef as V, vModelCheckbox as w, renderSlot as P, Fragment as re, createTextVNode as Y, toDisplayString as _, createCommentVNode as z, normalizeStyle as de, provide as ce, toRefs as be } from "vue";
import { dc as ve, e as ee, U as F, s as M, f as A, g as N, Z as D, y as me, a5 as T, Q as le, H as B, v as fe, a6 as q, af as ae, h as O, _ as R, b as he, d as ke, w as pe, O as ne } from "./useElementPlus.5a2e6faa.js";
import { p as ge, c as xe, f as Ce } from "./isEqual.c2f76849.js";
import { h as ye, f as Se } from "./hasIn.d68b1023.js";
function Le(e, u, i) {
  for (var a = -1, h = u.length, c = {}; ++a < h; ) {
    var b = u[a], t = ge(e, b);
    i(t, b) && ve(c, xe(b, e), t);
  }
  return c;
}
function Ee(e, u) {
  return Le(e, u, function(i, a) {
    return ye(e, a);
  });
}
var Be = Se(function(e, u) {
  return e == null ? {} : Ee(e, u);
});
const Ie = Be, te = {
  modelValue: {
    type: [Number, String, Boolean],
    default: void 0
  },
  label: {
    type: [String, Boolean, Number, Object]
  },
  indeterminate: Boolean,
  disabled: Boolean,
  checked: Boolean,
  name: {
    type: String,
    default: void 0
  },
  trueLabel: {
    type: [String, Number],
    default: void 0
  },
  falseLabel: {
    type: [String, Number],
    default: void 0
  },
  id: {
    type: String,
    default: void 0
  },
  controls: {
    type: String,
    default: void 0
  },
  border: Boolean,
  size: ee,
  tabindex: [String, Number],
  validateEvent: {
    type: Boolean,
    default: !0
  }
}, oe = {
  [F]: (e) => M(e) || A(e) || N(e),
  change: (e) => M(e) || A(e) || N(e)
}, E = Symbol("checkboxGroupContextKey"), $e = ({
  model: e,
  isChecked: u
}) => {
  const i = I(E, void 0), a = p(() => {
    var c, b;
    const t = (c = i == null ? void 0 : i.max) == null ? void 0 : c.value, v = (b = i == null ? void 0 : i.min) == null ? void 0 : b.value;
    return !D(t) && e.value.length >= t && !u.value || !D(v) && e.value.length <= v && u.value;
  });
  return {
    isDisabled: me(p(() => (i == null ? void 0 : i.disabled.value) || a.value)),
    isLimitDisabled: a
  };
}, Ve = (e, {
  model: u,
  isLimitExceeded: i,
  hasOwnLabel: a,
  isDisabled: h,
  isLabeledByFormItem: c
}) => {
  const b = I(E, void 0), { formItem: t } = T(), { emit: v } = H();
  function l(s) {
    var r, d;
    return s === e.trueLabel || s === !0 ? (r = e.trueLabel) != null ? r : !0 : (d = e.falseLabel) != null ? d : !1;
  }
  function m(s, r) {
    v("change", l(s), r);
  }
  function k(s) {
    if (i.value)
      return;
    const r = s.target;
    v("change", l(r.checked), s);
  }
  async function S(s) {
    i.value || !a.value && !h.value && c.value && (s.composedPath().some((f) => f.tagName === "LABEL") || (u.value = l([!1, e.falseLabel].includes(u.value)), await W(), m(u.value, s)));
  }
  const o = p(() => (b == null ? void 0 : b.validateEvent) || e.validateEvent);
  return Q(() => e.modelValue, () => {
    o.value && (t == null || t.validate("change").catch((s) => le(s)));
  }), {
    handleChange: k,
    onClickRoot: S
  };
}, we = (e) => {
  const u = G(!1), { emit: i } = H(), a = I(E, void 0), h = p(() => D(a) === !1), c = G(!1);
  return {
    model: p({
      get() {
        var t, v;
        return h.value ? (t = a == null ? void 0 : a.modelValue) == null ? void 0 : t.value : (v = e.modelValue) != null ? v : u.value;
      },
      set(t) {
        var v, l;
        h.value && B(t) ? (c.value = ((v = a == null ? void 0 : a.max) == null ? void 0 : v.value) !== void 0 && t.length > (a == null ? void 0 : a.max.value), c.value === !1 && ((l = a == null ? void 0 : a.changeEvent) == null || l.call(a, t))) : (i(F, t), u.value = t);
      }
    }),
    isGroup: h,
    isLimitExceeded: c
  };
}, Fe = (e, u, { model: i }) => {
  const a = I(E, void 0), h = G(!1), c = p(() => {
    const l = i.value;
    return N(l) ? l : B(l) ? fe(e.label) ? l.map(U).some((m) => Ce(m, e.label)) : l.map(U).includes(e.label) : l != null ? l === e.trueLabel : !!l;
  }), b = q(p(() => {
    var l;
    return (l = a == null ? void 0 : a.size) == null ? void 0 : l.value;
  }), {
    prop: !0
  }), t = q(p(() => {
    var l;
    return (l = a == null ? void 0 : a.size) == null ? void 0 : l.value;
  })), v = p(() => !!(u.default || e.label));
  return {
    checkboxButtonSize: b,
    isChecked: c,
    isFocused: h,
    checkboxSize: t,
    hasOwnLabel: v
  };
}, Ge = (e, { model: u }) => {
  function i() {
    B(u.value) && !u.value.includes(e.label) ? u.value.push(e.label) : u.value = e.trueLabel || !0;
  }
  e.checked && i();
}, se = (e, u) => {
  const { formItem: i } = T(), { model: a, isGroup: h, isLimitExceeded: c } = we(e), {
    isFocused: b,
    isChecked: t,
    checkboxButtonSize: v,
    checkboxSize: l,
    hasOwnLabel: m
  } = Fe(e, u, { model: a }), { isDisabled: k } = $e({ model: a, isChecked: t }), { inputId: S, isLabeledByFormItem: o } = ae(e, {
    formItemContext: i,
    disableIdGeneration: m,
    disableIdManagement: h
  }), { handleChange: s, onClickRoot: r } = Ve(e, {
    model: a,
    isLimitExceeded: c,
    hasOwnLabel: m,
    isDisabled: k,
    isLabeledByFormItem: o
  });
  return Ge(e, { model: a }), {
    inputId: S,
    isLabeledByFormItem: o,
    isChecked: t,
    isDisabled: k,
    isFocused: b,
    checkboxButtonSize: v,
    checkboxSize: l,
    hasOwnLabel: m,
    model: a,
    handleChange: s,
    onClickRoot: r
  };
}, ze = ["tabindex", "role", "aria-checked"], Ne = ["id", "aria-hidden", "name", "tabindex", "disabled", "true-value", "false-value"], De = ["id", "aria-hidden", "disabled", "value", "name", "tabindex"], Pe = L({
  name: "ElCheckbox"
}), Te = /* @__PURE__ */ L({
  ...Pe,
  props: te,
  emits: oe,
  setup(e) {
    const u = e, i = Z(), {
      inputId: a,
      isLabeledByFormItem: h,
      isChecked: c,
      isDisabled: b,
      isFocused: t,
      checkboxSize: v,
      hasOwnLabel: l,
      model: m,
      handleChange: k,
      onClickRoot: S
    } = se(u, i), o = O("checkbox"), s = p(() => [
      o.b(),
      o.m(v.value),
      o.is("disabled", b.value),
      o.is("bordered", u.border),
      o.is("checked", c.value)
    ]), r = p(() => [
      o.e("input"),
      o.is("disabled", b.value),
      o.is("checked", c.value),
      o.is("indeterminate", u.indeterminate),
      o.is("focus", t.value)
    ]);
    return (d, f) => (C(), j(J(!n(l) && n(h) ? "span" : "label"), {
      class: x(n(s)),
      "aria-controls": d.indeterminate ? d.controls : null,
      onClick: n(S)
    }, {
      default: X(() => [
        K("span", {
          class: x(n(r)),
          tabindex: d.indeterminate ? 0 : void 0,
          role: d.indeterminate ? "checkbox" : void 0,
          "aria-checked": d.indeterminate ? "mixed" : void 0
        }, [
          d.trueLabel || d.falseLabel ? $((C(), y("input", {
            key: 0,
            id: n(a),
            "onUpdate:modelValue": f[0] || (f[0] = (g) => V(m) ? m.value = g : null),
            class: x(n(o).e("original")),
            type: "checkbox",
            "aria-hidden": d.indeterminate ? "true" : "false",
            name: d.name,
            tabindex: d.tabindex,
            disabled: n(b),
            "true-value": d.trueLabel,
            "false-value": d.falseLabel,
            onChange: f[1] || (f[1] = (...g) => n(k) && n(k)(...g)),
            onFocus: f[2] || (f[2] = (g) => t.value = !0),
            onBlur: f[3] || (f[3] = (g) => t.value = !1)
          }, null, 42, Ne)), [
            [w, n(m)]
          ]) : $((C(), y("input", {
            key: 1,
            id: n(a),
            "onUpdate:modelValue": f[4] || (f[4] = (g) => V(m) ? m.value = g : null),
            class: x(n(o).e("original")),
            type: "checkbox",
            "aria-hidden": d.indeterminate ? "true" : "false",
            disabled: n(b),
            value: d.label,
            name: d.name,
            tabindex: d.tabindex,
            onChange: f[5] || (f[5] = (...g) => n(k) && n(k)(...g)),
            onFocus: f[6] || (f[6] = (g) => t.value = !0),
            onBlur: f[7] || (f[7] = (g) => t.value = !1)
          }, null, 42, De)), [
            [w, n(m)]
          ]),
          K("span", {
            class: x(n(o).e("inner"))
          }, null, 2)
        ], 10, ze),
        n(l) ? (C(), y("span", {
          key: 0,
          class: x(n(o).e("label"))
        }, [
          P(d.$slots, "default"),
          d.$slots.default ? z("v-if", !0) : (C(), y(re, { key: 0 }, [
            Y(_(d.label), 1)
          ], 64))
        ], 2)) : z("v-if", !0)
      ]),
      _: 3
    }, 8, ["class", "aria-controls", "onClick"]));
  }
});
var Oe = /* @__PURE__ */ R(Te, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox.vue"]]);
const Re = ["name", "tabindex", "disabled", "true-value", "false-value"], Ue = ["name", "tabindex", "disabled", "value"], Ke = L({
  name: "ElCheckboxButton"
}), Me = /* @__PURE__ */ L({
  ...Ke,
  props: te,
  emits: oe,
  setup(e) {
    const u = e, i = Z(), {
      isFocused: a,
      isChecked: h,
      isDisabled: c,
      checkboxButtonSize: b,
      model: t,
      handleChange: v
    } = se(u, i), l = I(E, void 0), m = O("checkbox"), k = p(() => {
      var o, s, r, d;
      const f = (s = (o = l == null ? void 0 : l.fill) == null ? void 0 : o.value) != null ? s : "";
      return {
        backgroundColor: f,
        borderColor: f,
        color: (d = (r = l == null ? void 0 : l.textColor) == null ? void 0 : r.value) != null ? d : "",
        boxShadow: f ? `-1px 0 0 0 ${f}` : void 0
      };
    }), S = p(() => [
      m.b("button"),
      m.bm("button", b.value),
      m.is("disabled", c.value),
      m.is("checked", h.value),
      m.is("focus", a.value)
    ]);
    return (o, s) => (C(), y("label", {
      class: x(n(S))
    }, [
      o.trueLabel || o.falseLabel ? $((C(), y("input", {
        key: 0,
        "onUpdate:modelValue": s[0] || (s[0] = (r) => V(t) ? t.value = r : null),
        class: x(n(m).be("button", "original")),
        type: "checkbox",
        name: o.name,
        tabindex: o.tabindex,
        disabled: n(c),
        "true-value": o.trueLabel,
        "false-value": o.falseLabel,
        onChange: s[1] || (s[1] = (...r) => n(v) && n(v)(...r)),
        onFocus: s[2] || (s[2] = (r) => a.value = !0),
        onBlur: s[3] || (s[3] = (r) => a.value = !1)
      }, null, 42, Re)), [
        [w, n(t)]
      ]) : $((C(), y("input", {
        key: 1,
        "onUpdate:modelValue": s[4] || (s[4] = (r) => V(t) ? t.value = r : null),
        class: x(n(m).be("button", "original")),
        type: "checkbox",
        name: o.name,
        tabindex: o.tabindex,
        disabled: n(c),
        value: o.label,
        onChange: s[5] || (s[5] = (...r) => n(v) && n(v)(...r)),
        onFocus: s[6] || (s[6] = (r) => a.value = !0),
        onBlur: s[7] || (s[7] = (r) => a.value = !1)
      }, null, 42, Ue)), [
        [w, n(t)]
      ]),
      o.$slots.default || o.label ? (C(), y("span", {
        key: 2,
        class: x(n(m).be("button", "inner")),
        style: de(n(h) ? n(k) : void 0)
      }, [
        P(o.$slots, "default", {}, () => [
          Y(_(o.label), 1)
        ])
      ], 6)) : z("v-if", !0)
    ], 2));
  }
});
var ue = /* @__PURE__ */ R(Me, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-button.vue"]]);
const Ae = he({
  modelValue: {
    type: ke(Array),
    default: () => []
  },
  disabled: Boolean,
  min: Number,
  max: Number,
  size: ee,
  label: String,
  fill: String,
  textColor: String,
  tag: {
    type: String,
    default: "div"
  },
  validateEvent: {
    type: Boolean,
    default: !0
  }
}), qe = {
  [F]: (e) => B(e),
  change: (e) => B(e)
}, He = L({
  name: "ElCheckboxGroup"
}), Qe = /* @__PURE__ */ L({
  ...He,
  props: Ae,
  emits: qe,
  setup(e, { emit: u }) {
    const i = e, a = O("checkbox"), { formItem: h } = T(), { inputId: c, isLabeledByFormItem: b } = ae(i, {
      formItemContext: h
    }), t = async (l) => {
      u(F, l), await W(), u("change", l);
    }, v = p({
      get() {
        return i.modelValue;
      },
      set(l) {
        t(l);
      }
    });
    return ce(E, {
      ...Ie(be(i), [
        "size",
        "min",
        "max",
        "disabled",
        "validateEvent",
        "fill",
        "textColor"
      ]),
      modelValue: v,
      changeEvent: t
    }), Q(() => i.modelValue, () => {
      i.validateEvent && (h == null || h.validate("change").catch((l) => le(l)));
    }), (l, m) => {
      var k;
      return C(), j(J(l.tag), {
        id: n(c),
        class: x(n(a).b("group")),
        role: "group",
        "aria-label": n(b) ? void 0 : l.label || "checkbox-group",
        "aria-labelledby": n(b) ? (k = n(h)) == null ? void 0 : k.labelId : void 0
      }, {
        default: X(() => [
          P(l.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "class", "aria-label", "aria-labelledby"]);
    };
  }
});
var ie = /* @__PURE__ */ R(Qe, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-group.vue"]]);
const Xe = pe(Oe, {
  CheckboxButton: ue,
  CheckboxGroup: ie
}), Ye = ne(ue), _e = ne(ie);
export {
  Xe as E,
  _e as a,
  Ye as b,
  qe as c,
  Ae as d,
  oe as e,
  te as f,
  E as g,
  Ie as p
};
