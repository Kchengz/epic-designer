import { c as K } from "./_commonjsHelpers-c5d32002.js";
import { r as fe } from "./_vue_commonjs-external-eb7fec7f.js";
import { s as Rt, b as Mt, d as St, e as Pt, a as ao, _ as Ce, i as co, g as io, c as Tt, h as so, r as Ot } from "./index-cd698eea.js";
import { c as Fe, r as Oe, a as Ye, b as ze, e as Ie, _ as xe, i as uo, p as fo, f as Nt } from "./index-815197f3.js";
import { u as ho } from "./utils-295e96f2.js";
import { f as vo } from "./fade-in-scale-up.cssr-45666b81.js";
function bo(e, l) {
  for (var o = 0; o < l.length; o++) {
    const c = l[o];
    if (typeof c != "string" && !Array.isArray(c)) {
      for (const a in c)
        if (a !== "default" && !(a in e)) {
          const s = Object.getOwnPropertyDescriptor(c, a);
          s && Object.defineProperty(e, a, s.get ? s : {
            enumerable: !0,
            get: () => c[a]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
var $t = {}, Dt = {}, jt = {}, Je = {}, Le = {}, Qe = {}, Xe = {}, Ze = {};
Object.defineProperty(Ze, "__esModule", { value: !0 });
Ze.default = {
  sizeSmall: "14px",
  sizeMedium: "16px",
  sizeLarge: "18px",
  labelPadding: "0 8px",
  labelFontWeight: "400"
};
(function(e) {
  var l = K && K.__importDefault || function(p) {
    return p && p.__esModule ? p : { default: p };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.self = void 0;
  const o = Oe, c = Fe, a = l(Ze), s = (p) => {
    const { baseColor: k, inputColorDisabled: y, cardColor: D, modalColor: z, popoverColor: A, textColorDisabled: I, borderColor: V, primaryColor: b, textColor2: n, fontSizeSmall: i, fontSizeMedium: u, fontSizeLarge: M, borderRadiusSmall: _, lineHeight: O } = p;
    return Object.assign(Object.assign({}, a.default), {
      labelLineHeight: O,
      fontSizeSmall: i,
      fontSizeMedium: u,
      fontSizeLarge: M,
      borderRadius: _,
      color: k,
      colorChecked: b,
      colorDisabled: y,
      colorDisabledChecked: y,
      colorTableHeader: D,
      colorTableHeaderModal: z,
      colorTableHeaderPopover: A,
      checkMarkColor: k,
      checkMarkColorDisabled: I,
      checkMarkColorDisabledChecked: I,
      border: `1px solid ${V}`,
      borderDisabled: `1px solid ${V}`,
      borderDisabledChecked: `1px solid ${V}`,
      borderChecked: `1px solid ${b}`,
      borderFocus: `1px solid ${b}`,
      boxShadowFocus: `0 0 0 2px ${(0, o.changeColor)(b, { alpha: 0.3 })}`,
      textColor: n,
      textColorDisabled: I
    });
  };
  e.self = s;
  const P = {
    name: "Checkbox",
    common: c.commonLight,
    self: e.self
  };
  e.default = P;
})(Xe);
Object.defineProperty(Qe, "__esModule", { value: !0 });
const mo = Fe, go = Xe, po = {
  name: "Checkbox",
  common: mo.commonDark,
  self(e) {
    const { cardColor: l } = e, o = (0, go.self)(e);
    return o.color = "#0000", o.checkMarkColor = l, o;
  }
};
Qe.default = po;
var Ke = {}, et = {};
Object.defineProperty(et, "__esModule", {
  value: !0
});
const kt = Ye;
et.default = (0, kt.cB)("checkbox", [(0, kt.cM)("rtl", `
 direction: rtl;
 `)]);
var ko = K && K.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Ke, "__esModule", { value: !0 });
Ke.checkboxRtl = void 0;
const yo = ko(et);
Ke.checkboxRtl = {
  name: "Checkbox",
  style: yo.default
};
(function(e) {
  var l = K && K.__importDefault || function(s) {
    return s && s.__esModule ? s : { default: s };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.checkboxRtl = e.checkboxLight = e.checkboxDark = void 0;
  var o = Qe;
  Object.defineProperty(e, "checkboxDark", { enumerable: !0, get: function() {
    return l(o).default;
  } });
  var c = Xe;
  Object.defineProperty(e, "checkboxLight", { enumerable: !0, get: function() {
    return l(c).default;
  } });
  var a = Ke;
  Object.defineProperty(e, "checkboxRtl", { enumerable: !0, get: function() {
    return a.checkboxRtl;
  } });
})(Le);
var tt = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.self = void 0;
  const l = Rt, o = Mt, c = St, a = Le, s = Fe, P = ze, p = Pt, k = (D) => {
    const { borderRadius: z, boxShadow2: A, popoverColor: I, textColor2: V, textColor3: b, primaryColor: n, textColorDisabled: i, dividerColor: u, hoverColor: M, fontSizeMedium: _, heightMedium: O } = D;
    return {
      menuBorderRadius: z,
      menuColor: I,
      menuBoxShadow: A,
      menuDividerColor: u,
      menuHeight: "calc(var(--n-option-height) * 6.6)",
      optionArrowColor: b,
      optionHeight: O,
      optionFontSize: _,
      optionColorHover: M,
      optionTextColor: V,
      optionTextColorActive: n,
      optionTextColorDisabled: i,
      optionCheckMarkColor: n,
      loadingColor: n,
      columnWidth: "180px"
    };
  };
  e.self = k;
  const y = (0, P.createTheme)({
    name: "Cascader",
    common: s.commonLight,
    peers: {
      InternalSelectMenu: o.internalSelectMenuLight,
      InternalSelection: l.internalSelectionLight,
      Scrollbar: c.scrollbarLight,
      Checkbox: a.checkboxLight,
      Empty: p.emptyLight
    },
    self: e.self
  });
  e.default = y;
})(tt);
Object.defineProperty(Je, "__esModule", { value: !0 });
const _o = Rt, Co = Mt, xo = St, wo = Le, Ro = Fe, Mo = tt, So = Pt, Po = {
  name: "Cascader",
  common: Ro.commonDark,
  peers: {
    InternalSelectMenu: Co.internalSelectMenuDark,
    InternalSelection: _o.internalSelectionDark,
    Scrollbar: xo.scrollbarDark,
    Checkbox: wo.checkboxDark,
    Empty: So.emptyLight
  },
  self: Mo.self
};
Je.default = Po;
(function(e) {
  var l = K && K.__importDefault || function(a) {
    return a && a.__esModule ? a : { default: a };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.cascaderLight = e.cascaderDark = void 0;
  var o = Je;
  Object.defineProperty(e, "cascaderDark", { enumerable: !0, get: function() {
    return l(o).default;
  } });
  var c = tt;
  Object.defineProperty(e, "cascaderLight", { enumerable: !0, get: function() {
    return l(c).default;
  } });
})(jt);
var ue = {};
Object.defineProperty(ue, "__esModule", { value: !0 });
ue.getPathLabel = ue.createSelectOptions = ue.getRawNodePath = void 0;
function To(e) {
  return e ? e.map((l) => l.rawNode) : null;
}
ue.getRawNodePath = To;
function Oo(e, l, o, c) {
  const a = [], s = [];
  function P(p) {
    for (const k of p) {
      if (k.disabled)
        continue;
      const { rawNode: y } = k;
      s.push(y), (k.isLeaf || !l) && a.push({
        label: Bt(k, c, o),
        value: k.key,
        rawNode: k.rawNode,
        path: Array.from(s)
      }), !k.isLeaf && k.children && P(k.children), s.pop();
    }
  }
  return P(e), a;
}
ue.createSelectOptions = Oo;
function Bt(e, l, o) {
  const c = [];
  for (; e; )
    c.push(e.rawNode[o]), e = e.parent;
  return c.reverse().join(l);
}
ue.getPathLabel = Bt;
var ot = {}, nt = {}, rt = {}, Ft = {}, zt = {}, lt = {};
Object.defineProperty(lt, "__esModule", { value: !0 });
const yt = fe;
lt.default = (0, yt.h)(
  "svg",
  { viewBox: "0 0 64 64", class: "check-icon" },
  (0, yt.h)("path", { d: "M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z" })
);
var at = {};
Object.defineProperty(at, "__esModule", { value: !0 });
const _t = fe;
at.default = (0, _t.h)(
  "svg",
  { viewBox: "0 0 100 100", class: "line-icon" },
  (0, _t.h)("path", { d: "M80.2,55.5H21.4c-2.8,0-5.1-2.5-5.1-5.5l0,0c0-3,2.3-5.5,5.1-5.5h58.7c2.8,0,5.1,2.5,5.1,5.5l0,0C85.2,53.1,82.9,55.5,80.2,55.5z" })
);
var ct = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.checkboxGroupProps = e.checkboxGroupInjectionKey = void 0;
  const l = fe, o = Ie, c = ze, a = xe;
  e.checkboxGroupInjectionKey = (0, a.createInjectionKey)("n-checkbox-group"), e.checkboxGroupProps = {
    min: Number,
    max: Number,
    size: String,
    value: Array,
    defaultValue: {
      type: Array,
      default: null
    },
    disabled: {
      type: Boolean,
      default: void 0
    },
    "onUpdate:value": [Function, Array],
    onUpdateValue: [Function, Array],
    // deprecated
    onChange: [Function, Array]
  }, e.default = (0, l.defineComponent)({
    name: "CheckboxGroup",
    props: e.checkboxGroupProps,
    setup(s) {
      process.env.NODE_ENV !== "production" && (0, l.watchEffect)(() => {
        s.onChange !== void 0 && (0, a.warnOnce)("checkbox-group", "`on-change` is deprecated, please use `on-update:value` instead.");
      });
      const { mergedClsPrefixRef: P } = (0, c.useConfig)(s), p = (0, c.useFormItem)(s), { mergedSizeRef: k, mergedDisabledRef: y } = p, D = (0, l.ref)(s.defaultValue), z = (0, l.computed)(() => s.value), A = (0, o.useMergedState)(z, D), I = (0, l.computed)(() => {
        var n;
        return ((n = A.value) === null || n === void 0 ? void 0 : n.length) || 0;
      }), V = (0, l.computed)(() => Array.isArray(A.value) ? new Set(A.value) : /* @__PURE__ */ new Set());
      function b(n, i) {
        const { nTriggerFormInput: u, nTriggerFormChange: M } = p, { onChange: _, "onUpdate:value": O, onUpdateValue: $ } = s;
        if (Array.isArray(A.value)) {
          const w = Array.from(A.value), T = w.findIndex((U) => U === i);
          n ? ~T || (w.push(i), $ && (0, a.call)($, w, {
            actionType: "check",
            value: i
          }), O && (0, a.call)(O, w, {
            actionType: "check",
            value: i
          }), u(), M(), D.value = w, _ && (0, a.call)(_, w)) : ~T && (w.splice(T, 1), $ && (0, a.call)($, w, {
            actionType: "uncheck",
            value: i
          }), O && (0, a.call)(O, w, {
            actionType: "uncheck",
            value: i
          }), _ && (0, a.call)(_, w), D.value = w, u(), M());
        } else
          n ? ($ && (0, a.call)($, [i], {
            actionType: "check",
            value: i
          }), O && (0, a.call)(O, [i], {
            actionType: "check",
            value: i
          }), _ && (0, a.call)(_, [i]), D.value = [i], u(), M()) : ($ && (0, a.call)($, [], {
            actionType: "uncheck",
            value: i
          }), O && (0, a.call)(O, [], {
            actionType: "uncheck",
            value: i
          }), _ && (0, a.call)(_, []), D.value = [], u(), M());
      }
      return (0, l.provide)(e.checkboxGroupInjectionKey, {
        checkedCountRef: I,
        maxRef: (0, l.toRef)(s, "max"),
        minRef: (0, l.toRef)(s, "min"),
        valueSetRef: V,
        disabledRef: y,
        mergedSizeRef: k,
        toggleCheckbox: b
      }), {
        mergedClsPrefix: P
      };
    },
    render() {
      return (0, l.h)("div", { class: `${this.mergedClsPrefix}-checkbox-group`, role: "group" }, this.$slots);
    }
  });
})(ct);
var it = {};
Object.defineProperty(it, "__esModule", {
  value: !0
});
const d = Ye, No = ao;
it.default = (0, d.c)([
  (0, d.cB)("checkbox", `
 line-height: var(--n-label-line-height);
 font-size: var(--n-font-size);
 outline: none;
 cursor: pointer;
 display: inline-flex;
 flex-wrap: nowrap;
 align-items: flex-start;
 word-break: break-word;
 --n-merged-color-table: var(--n-color-table);
 `, [(0, d.c)("&:hover", [(0, d.cB)("checkbox-box", [(0, d.cE)("border", {
    border: "var(--n-border-checked)"
  })])]), (0, d.c)("&:focus:not(:active)", [(0, d.cB)("checkbox-box", [(0, d.cE)("border", `
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]), (0, d.cM)("inside-table", [(0, d.cB)("checkbox-box", `
 background-color: var(--n-merged-color-table);
 `)]), (0, d.cM)("checked", [(0, d.cB)("checkbox-box", `
 background-color: var(--n-color-checked);
 `, [(0, d.cB)("checkbox-icon", [
    // if not set width to 100%, safari & old chrome won't display the icon
    (0, d.c)(".check-icon", `
 opacity: 1;
 transform: scale(1);
 `)
  ])])]), (0, d.cM)("indeterminate", [(0, d.cB)("checkbox-box", [(0, d.cB)("checkbox-icon", [(0, d.c)(".check-icon", `
 opacity: 0;
 transform: scale(.5);
 `), (0, d.c)(".line-icon", `
 opacity: 1;
 transform: scale(1);
 `)])])]), (0, d.cM)("checked, indeterminate", [(0, d.c)("&:focus:not(:active)", [(0, d.cB)("checkbox-box", [(0, d.cE)("border", `
 border: var(--n-border-checked);
 box-shadow: var(--n-box-shadow-focus);
 `)])]), (0, d.cB)("checkbox-box", `
 background-color: var(--n-color-checked);
 border-left: 0;
 border-top: 0;
 `, [(0, d.cE)("border", {
    border: "var(--n-border-checked)"
  })])]), (0, d.cM)("disabled", {
    cursor: "not-allowed"
  }, [(0, d.cM)("checked", [(0, d.cB)("checkbox-box", `
 background-color: var(--n-color-disabled-checked);
 `, [(0, d.cE)("border", {
    border: "var(--n-border-disabled-checked)"
  }), (0, d.cB)("checkbox-icon", [(0, d.c)(".check-icon, .line-icon", {
    fill: "var(--n-check-mark-color-disabled-checked)"
  })])])]), (0, d.cB)("checkbox-box", `
 background-color: var(--n-color-disabled);
 `, [(0, d.cE)("border", {
    border: "var(--n-border-disabled)"
  }), (0, d.cB)("checkbox-icon", [(0, d.c)(".check-icon, .line-icon", {
    fill: "var(--n-check-mark-color-disabled)"
  })])]), (0, d.cE)("label", {
    color: "var(--n-text-color-disabled)"
  })]), (0, d.cB)("checkbox-box-wrapper", `
 position: relative;
 width: var(--n-size);
 flex-shrink: 0;
 flex-grow: 0;
 user-select: none;
 -webkit-user-select: none;
 `), (0, d.cB)("checkbox-box", `
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 height: var(--n-size);
 width: var(--n-size);
 display: inline-block;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color 0.3s var(--n-bezier);
 `, [(0, d.cE)("border", `
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border: var(--n-border);
 `), (0, d.cB)("checkbox-icon", `
 display: flex;
 align-items: center;
 justify-content: center;
 position: absolute;
 left: 1px;
 right: 1px;
 top: 1px;
 bottom: 1px;
 `, [(0, d.c)(".check-icon, .line-icon", `
 width: 100%;
 fill: var(--n-check-mark-color);
 opacity: 0;
 transform: scale(0.5);
 transform-origin: center;
 transition:
 fill 0.3s var(--n-bezier),
 transform 0.3s var(--n-bezier),
 opacity 0.3s var(--n-bezier),
 border-color 0.3s var(--n-bezier);
 `), (0, No.iconSwitchTransition)({
    left: "1px",
    top: "1px"
  })])]), (0, d.cE)("label", `
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 `, [(0, d.c)("&:empty", {
    display: "none"
  })])]),
  // modal table header checkbox
  (0, d.insideModal)((0, d.cB)("checkbox", `
 --n-merged-color-table: var(--n-color-table-modal);
 `)),
  // popover table header checkbox
  (0, d.insidePopover)((0, d.cB)("checkbox", `
 --n-merged-color-table: var(--n-color-table-popover);
 `))
]);
(function(e) {
  var l = K && K.__importDefault || function(b) {
    return b && b.__esModule ? b : { default: b };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.checkboxProps = void 0;
  const o = fe, c = Ie, a = Oe, s = uo, P = ze, p = Ce, k = xe, y = Le, D = l(lt), z = l(at), A = ct, I = l(it), V = fo;
  e.checkboxProps = Object.assign(Object.assign({}, P.useTheme.props), {
    size: String,
    checked: {
      type: [Boolean, String, Number],
      default: void 0
    },
    defaultChecked: {
      type: [Boolean, String, Number],
      default: !1
    },
    value: [String, Number],
    disabled: {
      type: Boolean,
      default: void 0
    },
    indeterminate: Boolean,
    label: String,
    focusable: {
      type: Boolean,
      default: !0
    },
    checkedValue: {
      type: [Boolean, String, Number],
      default: !0
    },
    uncheckedValue: {
      type: [Boolean, String, Number],
      default: !1
    },
    "onUpdate:checked": [Function, Array],
    onUpdateChecked: [Function, Array],
    // private
    privateInsideTable: Boolean,
    // deprecated
    onChange: [Function, Array]
  }), e.default = (0, o.defineComponent)({
    name: "Checkbox",
    props: e.checkboxProps,
    setup(b) {
      process.env.NODE_ENV !== "production" && (0, o.watchEffect)(() => {
        b.onChange && (0, k.warnOnce)("checkbox", "`on-change` is deprecated, please use `on-update:checked` instead.");
      });
      const n = (0, o.ref)(null), { mergedClsPrefixRef: i, inlineThemeDisabled: u, mergedRtlRef: M } = (0, P.useConfig)(b), _ = (0, P.useFormItem)(b, {
        mergedSize(h) {
          const { size: q } = b;
          if (q !== void 0)
            return q;
          if (w) {
            const { value: E } = w.mergedSizeRef;
            if (E !== void 0)
              return E;
          }
          if (h) {
            const { mergedSize: E } = h;
            if (E !== void 0)
              return E.value;
          }
          return "medium";
        },
        mergedDisabled(h) {
          const { disabled: q } = b;
          if (q !== void 0)
            return q;
          if (w) {
            if (w.disabledRef.value)
              return !0;
            const { maxRef: { value: E }, checkedCountRef: te } = w;
            if (E !== void 0 && te.value >= E && !S.value)
              return !0;
            const { minRef: { value: le } } = w;
            if (le !== void 0 && te.value <= le && S.value)
              return !0;
          }
          return h ? h.disabled.value : !1;
        }
      }), { mergedDisabledRef: O, mergedSizeRef: $ } = _, w = (0, o.inject)(A.checkboxGroupInjectionKey, null), T = (0, o.ref)(b.defaultChecked), U = (0, o.toRef)(b, "checked"), f = (0, c.useMergedState)(U, T), S = (0, c.useMemo)(() => {
        if (w) {
          const h = w.valueSetRef.value;
          return h && b.value !== void 0 ? h.has(b.value) : !1;
        } else
          return f.value === b.checkedValue;
      }), L = (0, P.useTheme)("Checkbox", "-checkbox", I.default, y.checkboxLight, b, i);
      function J(h) {
        if (w && b.value !== void 0)
          w.toggleCheckbox(!S.value, b.value);
        else {
          const { onChange: q, "onUpdate:checked": E, onUpdateChecked: te } = b, { nTriggerFormInput: le, nTriggerFormChange: oe } = _, N = S.value ? b.uncheckedValue : b.checkedValue;
          E && (0, k.call)(E, N, h), te && (0, k.call)(te, N, h), q && (0, k.call)(q, N, h), le(), oe(), T.value = N;
        }
      }
      function he(h) {
        O.value || J(h);
      }
      function ce(h) {
        if (!O.value)
          switch (h.key) {
            case " ":
            case "Enter":
              J(h);
          }
      }
      function we(h) {
        switch (h.key) {
          case " ":
            h.preventDefault();
        }
      }
      const Q = {
        focus: () => {
          var h;
          (h = n.value) === null || h === void 0 || h.focus();
        },
        blur: () => {
          var h;
          (h = n.value) === null || h === void 0 || h.blur();
        }
      }, ne = (0, V.useRtl)("Checkbox", M, i), W = (0, o.computed)(() => {
        const { value: h } = $, { common: { cubicBezierEaseInOut: q }, self: { borderRadius: E, color: te, colorChecked: le, colorDisabled: oe, colorTableHeader: N, colorTableHeaderModal: X, colorTableHeaderPopover: G, checkMarkColor: ie, checkMarkColorDisabled: Z, border: ge, borderFocus: Re, borderDisabled: Ae, borderChecked: ve, boxShadowFocus: Ne, textColor: se, textColorDisabled: be, checkMarkColorDisabledChecked: pe, colorDisabledChecked: Me, borderDisabledChecked: $e, labelPadding: Se, labelLineHeight: Ee, labelFontWeight: Ve, [(0, k.createKey)("fontSize", h)]: De, [(0, k.createKey)("size", h)]: Ue } } = L.value;
        return {
          "--n-label-line-height": Ee,
          "--n-label-font-weight": Ve,
          "--n-size": Ue,
          "--n-bezier": q,
          "--n-border-radius": E,
          "--n-border": ge,
          "--n-border-checked": ve,
          "--n-border-focus": Re,
          "--n-border-disabled": Ae,
          "--n-border-disabled-checked": $e,
          "--n-box-shadow-focus": Ne,
          "--n-color": te,
          "--n-color-checked": le,
          "--n-color-table": N,
          "--n-color-table-modal": X,
          "--n-color-table-popover": G,
          "--n-color-disabled": oe,
          "--n-color-disabled-checked": Me,
          "--n-text-color": se,
          "--n-text-color-disabled": be,
          "--n-check-mark-color": ie,
          "--n-check-mark-color-disabled": Z,
          "--n-check-mark-color-disabled-checked": pe,
          "--n-font-size": De,
          "--n-label-padding": Se
        };
      }), H = u ? (0, P.useThemeClass)("checkbox", (0, o.computed)(() => $.value[0]), W, b) : void 0;
      return Object.assign(_, Q, {
        rtlEnabled: ne,
        selfRef: n,
        mergedClsPrefix: i,
        mergedDisabled: O,
        renderedChecked: S,
        mergedTheme: L,
        labelId: (0, a.createId)(),
        handleClick: he,
        handleKeyUp: ce,
        handleKeyDown: we,
        cssVars: u ? void 0 : W,
        themeClass: H == null ? void 0 : H.themeClass,
        onRender: H == null ? void 0 : H.onRender
      });
    },
    render() {
      var b;
      const { $slots: n, renderedChecked: i, mergedDisabled: u, indeterminate: M, privateInsideTable: _, cssVars: O, labelId: $, label: w, mergedClsPrefix: T, focusable: U, handleKeyUp: f, handleKeyDown: S, handleClick: L } = this;
      return (b = this.onRender) === null || b === void 0 || b.call(this), (0, o.h)(
        "div",
        { ref: "selfRef", class: [
          `${T}-checkbox`,
          this.themeClass,
          this.rtlEnabled && `${T}-checkbox--rtl`,
          i && `${T}-checkbox--checked`,
          u && `${T}-checkbox--disabled`,
          M && `${T}-checkbox--indeterminate`,
          _ && `${T}-checkbox--inside-table`
        ], tabindex: u || !U ? void 0 : 0, role: "checkbox", "aria-checked": M ? "mixed" : i, "aria-labelledby": $, style: O, onKeyup: f, onKeydown: S, onClick: L, onMousedown: () => {
          (0, s.on)("selectstart", window, (J) => {
            J.preventDefault();
          }, {
            once: !0
          });
        } },
        (0, o.h)(
          "div",
          { class: `${T}-checkbox-box-wrapper` },
          " ",
          (0, o.h)(
            "div",
            { class: `${T}-checkbox-box` },
            (0, o.h)(p.NIconSwitchTransition, null, {
              default: () => this.indeterminate ? (0, o.h)("div", { key: "indeterminate", class: `${T}-checkbox-icon` }, z.default) : (0, o.h)("div", { key: "check", class: `${T}-checkbox-icon` }, D.default)
            }),
            (0, o.h)("div", { class: `${T}-checkbox-box__border` })
          )
        ),
        w !== null || n.default ? (0, o.h)("span", { class: `${T}-checkbox__label`, id: $ }, n.default ? n.default() : w) : null
      );
    }
  });
})(zt);
(function(e) {
  var l = K && K.__importDefault || function(a) {
    return a && a.__esModule ? a : { default: a };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.checkboxGroupProps = e.NCheckboxGroup = e.checkboxProps = e.NCheckbox = void 0;
  var o = zt;
  Object.defineProperty(e, "NCheckbox", { enumerable: !0, get: function() {
    return l(o).default;
  } }), Object.defineProperty(e, "checkboxProps", { enumerable: !0, get: function() {
    return o.checkboxProps;
  } });
  var c = ct;
  Object.defineProperty(e, "NCheckboxGroup", { enumerable: !0, get: function() {
    return l(c).default;
  } }), Object.defineProperty(e, "checkboxGroupProps", { enumerable: !0, get: function() {
    return c.checkboxGroupProps;
  } });
})(Ft);
var me = {};
Object.defineProperty(me, "__esModule", { value: !0 });
me.cascaderInjectionKey = void 0;
const $o = xe;
me.cascaderInjectionKey = (0, $o.createInjectionKey)("n-cascader");
Object.defineProperty(rt, "__esModule", { value: !0 });
const F = fe, Te = Ie, Do = Ft, Ge = Ce, Ct = co, jo = me, Bo = Oe;
rt.default = (0, F.defineComponent)({
  name: "NCascaderOption",
  props: {
    tmNode: {
      type: Object,
      required: !0
    }
  },
  setup(e) {
    const {
      expandTriggerRef: l,
      remoteRef: o,
      multipleRef: c,
      mergedValueRef: a,
      checkedKeysRef: s,
      indeterminateKeysRef: P,
      hoverKeyPathRef: p,
      keyboardKeyRef: k,
      loadingKeySetRef: y,
      cascadeRef: D,
      mergedCheckStrategyRef: z,
      onLoadRef: A,
      mergedClsPrefixRef: I,
      mergedThemeRef: V,
      labelFieldRef: b,
      showCheckboxRef: n,
      updateHoverKey: i,
      updateKeyboardKey: u,
      addLoadingKey: M,
      deleteLoadingKey: _,
      closeMenu: O,
      doCheck: $,
      doUncheck: w,
      renderLabelRef: T
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    } = (0, F.inject)(jo.cascaderInjectionKey), U = (0, F.computed)(() => e.tmNode.key), f = (0, F.computed)(() => {
      const { value: N } = l, { value: X } = o;
      return !X && N === "hover";
    }), S = (0, F.computed)(() => {
      if (f.value)
        return E;
    }), L = (0, F.computed)(() => {
      if (f.value)
        return te;
    }), J = (0, Te.useMemo)(() => {
      const { value: N } = c;
      return N ? s.value.includes(U.value) : a.value === U.value;
    }), he = (0, Te.useMemo)(() => c.value ? P.value.includes(U.value) : !1), ce = (0, Te.useMemo)(() => p.value.includes(U.value)), we = (0, Te.useMemo)(() => {
      const { value: N } = k;
      return N === null ? !1 : N === U.value;
    }), Q = (0, Te.useMemo)(() => o.value ? y.value.has(U.value) : !1), ne = (0, F.computed)(() => e.tmNode.isLeaf), W = (0, F.computed)(() => e.tmNode.disabled), H = (0, F.computed)(() => e.tmNode.rawNode[b.value]), h = (0, F.computed)(() => e.tmNode.shallowLoaded);
    function q(N) {
      if (W.value)
        return;
      const { value: X } = o, { value: G } = y, { value: ie } = A, { value: Z } = U, { value: ge } = ne, { value: Re } = h;
      (0, Bo.happensIn)(N, "checkbox") || (X && !Re && !G.has(Z) && ie && (M(Z), ie(e.tmNode.rawNode).then(() => {
        _(Z);
      }).catch(() => {
        _(Z);
      })), i(Z), u(Z)), ge && oe();
    }
    function E() {
      if (!f.value || W.value)
        return;
      const { value: N } = U;
      i(N), u(N);
    }
    function te() {
      f.value && E();
    }
    function le() {
      const { value: N } = ne;
      N || oe();
    }
    function oe() {
      const { value: N } = c, { value: X } = U;
      N ? he.value || J.value ? w(X) : $(X) : ($(X), O(!0));
    }
    return {
      checkStrategy: z,
      multiple: c,
      cascade: D,
      checked: J,
      indeterminate: he,
      hoverPending: ce,
      keyboardPending: we,
      isLoading: Q,
      showCheckbox: n,
      isLeaf: ne,
      disabled: W,
      label: H,
      mergedClsPrefix: I,
      mergedTheme: V,
      handleClick: q,
      handleCheckboxUpdateValue: le,
      mergedHandleMouseEnter: S,
      mergedHandleMouseMove: L,
      renderLabel: T
    };
  },
  render() {
    const { mergedClsPrefix: e, renderLabel: l } = this;
    return (0, F.h)(
      "div",
      { class: [
        `${e}-cascader-option`,
        {
          [`${e}-cascader-option--pending`]: this.keyboardPending || this.hoverPending,
          [`${e}-cascader-option--disabled`]: this.disabled,
          [`${e}-cascader-option--show-prefix`]: this.showCheckbox
        }
      ], onMouseenter: this.mergedHandleMouseEnter, onMousemove: this.mergedHandleMouseMove, onClick: this.handleClick },
      this.showCheckbox ? (0, F.h)(
        "div",
        { class: `${e}-cascader-option__prefix` },
        (0, F.h)(Do.NCheckbox, { focusable: !1, "data-checkbox": !0, disabled: this.disabled, checked: this.checked, indeterminate: this.indeterminate, theme: this.mergedTheme.peers.Checkbox, themeOverrides: this.mergedTheme.peerOverrides.Checkbox, onUpdateChecked: this.handleCheckboxUpdateValue })
      ) : null,
      (0, F.h)("span", { class: `${e}-cascader-option__label` }, l ? l(this.tmNode.rawNode, this.checked) : this.label),
      (0, F.h)(
        "div",
        { class: `${e}-cascader-option__suffix` },
        (0, F.h)("div", { class: `${e}-cascader-option-icon-placeholder` }, this.isLeaf ? this.checkStrategy === "child" && !(this.multiple && this.cascade) ? (0, F.h)(F.Transition, { name: "fade-in-scale-up-transition" }, {
          default: () => this.checked ? (0, F.h)(Ge.NBaseIcon, { clsPrefix: e, class: `${e}-cascader-option-icon ${e}-cascader-option-icon--checkmark` }, { default: () => (0, F.h)(Ct.CheckmarkIcon, null) }) : null
        }) : null : (0, F.h)(Ge.NBaseLoading, { clsPrefix: e, scale: 0.85, strokeWidth: 24, show: this.isLoading, class: `${e}-cascader-option-icon` }, {
          default: () => (0, F.h)(Ge.NBaseIcon, { clsPrefix: e, key: "arrow", class: `${e}-cascader-option-icon ${e}-cascader-option-icon--arrow` }, {
            default: () => (0, F.h)(Ct.ChevronRightIcon, null)
          })
        }))
      )
    );
  }
});
var Fo = K && K.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(nt, "__esModule", { value: !0 });
const ae = fe, zo = Nt, xt = Fo(rt), Io = Ce, Lo = me, Ko = Oe;
nt.default = (0, ae.defineComponent)({
  name: "CascaderSubmenu",
  props: {
    depth: {
      type: Number,
      required: !0
    },
    tmNodes: {
      type: Array,
      required: !0
    }
  },
  setup() {
    const {
      virtualScrollRef: e,
      mergedClsPrefixRef: l,
      mergedThemeRef: o,
      optionHeightRef: c
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    } = (0, ae.inject)(Lo.cascaderInjectionKey), a = (0, ae.ref)(null), s = (0, ae.ref)(null), P = {
      scroll(p, k) {
        var y, D;
        e.value ? (y = s.value) === null || y === void 0 || y.scrollTo({
          index: p
        }) : (D = a.value) === null || D === void 0 || D.scrollTo({
          index: p,
          elSize: k
        });
      }
    };
    return Object.assign({
      mergedClsPrefix: l,
      mergedTheme: o,
      scrollbarInstRef: a,
      vlInstRef: s,
      virtualScroll: e,
      itemSize: (0, ae.computed)(() => (0, Ko.depx)(c.value)),
      handleVlScroll: () => {
        var p;
        (p = a.value) === null || p === void 0 || p.sync();
      },
      getVlContainer: () => {
        var p;
        return (p = s.value) === null || p === void 0 ? void 0 : p.listElRef;
      },
      getVlContent: () => {
        var p;
        return (p = s.value) === null || p === void 0 ? void 0 : p.itemsElRef;
      }
    }, P);
  },
  render() {
    const { mergedClsPrefix: e, mergedTheme: l, virtualScroll: o } = this;
    return (0, ae.h)(
      "div",
      { class: [
        o && `${e}-cascader-submenu--virtual`,
        `${e}-cascader-submenu`
      ] },
      (0, ae.h)(Io.NScrollbar, { ref: "scrollbarInstRef", theme: l.peers.Scrollbar, themeOverrides: l.peerOverrides.Scrollbar, container: o ? this.getVlContainer : void 0, content: o ? this.getVlContent : void 0 }, {
        default: () => o ? (0, ae.h)(zo.VirtualList, { items: this.tmNodes, itemSize: this.itemSize, onScroll: this.handleVlScroll, showScrollbar: !1, ref: "vlInstRef" }, {
          default: ({ item: c }) => (0, ae.h)(xt.default, { key: c.key, tmNode: c })
        }) : this.tmNodes.map((c) => (0, ae.h)(xt.default, { key: c.key, tmNode: c }))
      })
    );
  }
});
var It = K && K.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(ot, "__esModule", { value: !0 });
const Y = fe, Ao = Tt, Eo = It(io), We = xe, Vo = so, Uo = Ce, Ho = It(nt), qo = me;
ot.default = (0, Y.defineComponent)({
  name: "NCascaderMenu",
  props: {
    value: [String, Number, Array],
    placement: {
      type: String,
      default: "bottom-start"
    },
    show: Boolean,
    menuModel: {
      type: Array,
      required: !0
    },
    loading: Boolean,
    onFocus: {
      type: Function,
      required: !0
    },
    onBlur: {
      type: Function,
      required: !0
    },
    onKeydown: {
      type: Function,
      required: !0
    },
    onMousedown: {
      type: Function,
      required: !0
    },
    onTabout: {
      type: Function,
      required: !0
    }
  },
  setup(e) {
    const {
      localeRef: l,
      isMountedRef: o,
      mergedClsPrefixRef: c,
      syncCascaderMenuPosition: a,
      handleCascaderMenuClickOutside: s,
      mergedThemeRef: P
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    } = (0, Y.inject)(qo.cascaderInjectionKey), p = [], k = (0, Y.ref)(null), y = (0, Y.ref)(null);
    function D() {
      a();
    }
    (0, We.useOnResize)(y, D);
    function z(n) {
      var i;
      const { value: { loadingRequiredMessage: u } } = l;
      (i = k.value) === null || i === void 0 || i.showOnce(u(n));
    }
    function A(n) {
      s(n);
    }
    function I(n) {
      const { value: i } = y;
      i && (i.contains(n.relatedTarget) || e.onFocus(n));
    }
    function V(n) {
      const { value: i } = y;
      i && (i.contains(n.relatedTarget) || e.onBlur(n));
    }
    return Object.assign({
      isMounted: o,
      mergedClsPrefix: c,
      selfElRef: y,
      submenuInstRefs: p,
      maskInstRef: k,
      mergedTheme: P,
      handleFocusin: I,
      handleFocusout: V,
      handleClickOutside: A
    }, {
      scroll(n, i, u) {
        const M = p[n];
        M && M.scroll(i, u);
      },
      showErrorMessage: z
    });
  },
  render() {
    const { submenuInstRefs: e, mergedClsPrefix: l, mergedTheme: o } = this;
    return (0, Y.h)(Y.Transition, { name: "fade-in-scale-up-transition", appear: this.isMounted }, {
      default: () => this.show ? (0, Y.withDirectives)((0, Y.h)(
        "div",
        { tabindex: "0", ref: "selfElRef", class: `${l}-cascader-menu`, onMousedown: this.onMousedown, onFocusin: this.handleFocusin, onFocusout: this.handleFocusout, onKeydown: this.onKeydown },
        this.menuModel[0].length ? (0, Y.h)(
          "div",
          { class: `${l}-cascader-submenu-wrapper` },
          this.menuModel.map((c, a) => (0, Y.h)(Ho.default, { ref: (s) => {
            s && (e[a] = s);
          }, key: a, tmNodes: c, depth: a + 1 })),
          (0, Y.h)(Uo.NBaseMenuMask, { clsPrefix: l, ref: "maskInstRef" })
        ) : (0, Y.h)("div", { class: `${l}-cascader-menu__empty` }, (0, We.resolveSlot)(this.$slots.empty, () => [
          (0, Y.h)(Vo.NEmpty, { theme: o.peers.Empty, themeOverrides: o.peerOverrides.Empty })
        ])),
        (0, We.resolveWrappedSlot)(this.$slots.action, (c) => c && (0, Y.h)("div", { class: `${l}-cascader-menu-action`, "data-action": !0 }, c)),
        (0, Y.h)(Eo.default, { onFocus: this.onTabout })
      ), [
        [
          Ao.clickoutside,
          this.handleClickOutside,
          void 0,
          { capture: !0 }
        ]
      ]) : null
    });
  }
});
var st = {};
Object.defineProperty(st, "__esModule", { value: !0 });
const re = fe, Go = Tt, Wo = Ot, Yo = ho, Jo = Ce, Qo = ue, Xo = me, Zo = xe;
st.default = (0, re.defineComponent)({
  name: "NCascaderSelectMenu",
  props: {
    value: {
      type: [String, Number, Array],
      default: null
    },
    show: Boolean,
    pattern: {
      type: String,
      default: ""
    },
    multiple: Boolean,
    tmNodes: {
      type: Array,
      default: () => []
    },
    filter: Function,
    labelField: {
      type: String,
      required: !0
    },
    separator: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    const {
      isMountedRef: l,
      mergedValueRef: o,
      mergedClsPrefixRef: c,
      mergedThemeRef: a,
      mergedCheckStrategyRef: s,
      slots: P,
      syncSelectMenuPosition: p,
      closeMenu: k,
      handleSelectMenuClickOutside: y,
      doUncheck: D,
      doCheck: z,
      clearPattern: A
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    } = (0, re.inject)(Xo.cascaderInjectionKey), I = (0, re.ref)(null), V = (0, re.computed)(() => (0, Qo.createSelectOptions)(e.tmNodes, s.value === "child", e.labelField, e.separator)), b = (0, re.computed)(() => {
      const { filter: f } = e;
      if (f)
        return f;
      const { labelField: S } = e;
      return (L, J, he) => he.some((ce) => ce[S] && ~ce[S].indexOf(L));
    }), n = (0, re.computed)(() => {
      const { pattern: f } = e, { value: S } = b;
      return (f ? V.value.filter((L) => S(f, L.rawNode, L.path)) : V.value).map((L) => ({
        value: L.value,
        label: L.label
      }));
    }), i = (0, re.computed)(() => (0, Wo.createTreeMate)(n.value, (0, Yo.createTmOptions)("value", "children")));
    function u() {
      p();
    }
    function M(f) {
      _(f);
    }
    function _(f) {
      if (e.multiple) {
        const { value: S } = o;
        Array.isArray(S) ? S.includes(f.key) ? D(f.key) : z(f.key) : S === null && z(f.key), A();
      } else
        z(f.key), k(!0);
    }
    function O() {
      var f;
      (f = I.value) === null || f === void 0 || f.prev();
    }
    function $() {
      var f;
      (f = I.value) === null || f === void 0 || f.next();
    }
    function w() {
      var f;
      if (I) {
        const S = (f = I.value) === null || f === void 0 ? void 0 : f.getPendingTmNode();
        return S && _(S), !0;
      }
      return !1;
    }
    function T(f) {
      y(f);
    }
    return Object.assign({
      isMounted: l,
      mergedTheme: a,
      mergedClsPrefix: c,
      menuInstRef: I,
      selectTreeMate: i,
      handleResize: u,
      handleToggle: M,
      handleClickOutside: T,
      cascaderSlots: P
    }, {
      prev: O,
      next: $,
      enter: w
    });
  },
  render() {
    const { mergedClsPrefix: e, isMounted: l, mergedTheme: o, cascaderSlots: c } = this;
    return (0, re.h)(re.Transition, { name: "fade-in-scale-up-transition", appear: l }, {
      default: () => this.show ? (0, re.withDirectives)((0, re.h)(Jo.NInternalSelectMenu, { ref: "menuInstRef", onResize: this.handleResize, clsPrefix: e, class: `${e}-cascader-menu`, autoPending: !0, themeOverrides: o.peerOverrides.InternalSelectMenu, theme: o.peers.InternalSelectMenu, treeMate: this.selectTreeMate, multiple: this.multiple, value: this.value, onToggle: this.handleToggle }, {
        empty: () => (0, Zo.resolveSlot)(c["not-found"], () => [])
      }), [
        [
          Go.clickoutside,
          this.handleClickOutside,
          void 0,
          { capture: !0 }
        ]
      ]) : null
    });
  }
});
var dt = {};
Object.defineProperty(dt, "__esModule", {
  value: !0
});
const R = Ye, wt = vo;
dt.default = (0, R.c)([(0, R.cB)("cascader-menu", `
 outline: none;
 position: relative;
 margin: 4px 0;
 display: flex;
 flex-flow: column nowrap;
 border-radius: var(--n-menu-border-radius);
 overflow: hidden;
 box-shadow: var(--n-menu-box-shadow);
 color: var(--n-option-text-color);
 background-color: var(--n-menu-color);
 `, [(0, wt.fadeInScaleUpTransition)({
  transformOrigin: "inherit",
  duration: "0.2s"
}), (0, R.cE)("empty", `
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `), (0, R.cB)("scrollbar", {
  // if width not set, cascader select menu's inner scroll area's width is
  // not correct, which won't change after select menu width is set
  width: "100%"
}), (0, R.cB)("base-menu-mask", {
  backgroundColor: "var(--n-menu-mask-color)"
}), (0, R.cB)("base-loading", {
  color: "var(--n-loading-color)"
}), (0, R.cB)("cascader-submenu-wrapper", `
 position: relative;
 display: flex;
 flex-wrap: nowrap;
 `), (0, R.cB)("cascader-submenu", `
 height: var(--n-menu-height);
 min-width: var(--n-column-width);
 position: relative;
 `, [(0, R.cM)("virtual", `
 width: var(--n-column-width);
 `), (0, R.cB)("scrollbar-content", {
  position: "relative"
}), (0, R.c)("&:first-child", `
 border-top-left-radius: var(--n-menu-border-radius);
 border-bottom-left-radius: var(--n-menu-border-radius);
 `), (0, R.c)("&:last-child", `
 border-top-right-radius: var(--n-menu-border-radius);
 border-bottom-right-radius: var(--n-menu-border-radius);
 `), (0, R.c)("&:not(:first-child)", `
 border-left: 1px solid var(--n-menu-divider-color);
 `)]), (0, R.cB)("cascader-menu-action", `
 box-sizing: border-box;
 padding: 8px;
 border-top: 1px solid var(--n-menu-divider-color);
 `), (0, R.cB)("cascader-option", `
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 padding: 0 0 0 18px;
 box-sizing: border-box;
 min-width: 182px;
 background-color: #0000;
 display: flex;
 align-items: center;
 white-space: nowrap;
 position: relative;
 cursor: pointer;
 transition:
 background-color .2s var(--n-bezier),
 color 0.2s var(--n-bezier);
 `, [(0, R.cM)("show-prefix", {
  paddingLeft: 0
}), (0, R.cE)("label", `
 flex: 1 0 0;
 overflow: hidden;
 text-overflow: ellipsis;
 `), (0, R.cE)("prefix", {
  width: "32px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}), (0, R.cE)("suffix", {
  width: "32px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}), (0, R.cB)("cascader-option-icon-placeholder", {
  lineHeight: 0,
  position: "relative",
  width: "16px",
  height: "16px",
  fontSize: "16px"
}, [(0, R.cB)("cascader-option-icon", [(0, R.cM)("checkmark", {
  color: "var(--n-option-check-mark-color)"
}, [(0, wt.fadeInScaleUpTransition)({
  originalTransition: "background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"
})]), (0, R.cM)("arrow", {
  color: "var(--n-option-arrow-color)"
})])]), (0, R.cM)("selected", {
  color: "var(--n-option-text-color-active)"
}), (0, R.cM)("active", {
  color: "var(--n-option-text-color-active)",
  backgroundColor: "var(--n-option-color-hover)"
}), (0, R.cM)("pending", {
  backgroundColor: "var(--n-option-color-hover)"
}), (0, R.c)("&:hover", {
  backgroundColor: "var(--n-option-color-hover)"
}), (0, R.cM)("disabled", `
 color: var(--n-option-text-color-disabled);
 background-color: #0000;
 cursor: not-allowed;
 `, [(0, R.cB)("cascader-option-icon", [(0, R.cM)("arrow", {
  color: "var(--n-option-text-color-disabled)"
})])])])]), (0, R.cB)("cascader", `
 z-index: auto;
 position: relative;
 width: 100%;
 `)]);
(function(e) {
  var l = K && K.__importDefault || function(n) {
    return n && n.__esModule ? n : { default: n };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.cascaderProps = void 0;
  const o = fe, c = Ot, a = Nt, s = Oe, P = Ie, p = Ce, k = ze, y = xe, D = jt, z = ue, A = l(ot), I = l(st), V = me, b = l(dt);
  e.cascaderProps = Object.assign(Object.assign({}, k.useTheme.props), {
    allowCheckingNotLoaded: Boolean,
    to: y.useAdjustedTo.propTo,
    bordered: {
      type: Boolean,
      default: void 0
    },
    options: {
      type: Array,
      default: () => []
    },
    value: [String, Number, Array],
    defaultValue: {
      type: [String, Number, Array],
      default: null
    },
    placeholder: String,
    multiple: Boolean,
    size: String,
    filterable: Boolean,
    disabled: {
      type: Boolean,
      default: void 0
    },
    disabledField: {
      type: String,
      default: "disabled"
    },
    expandTrigger: {
      type: String,
      default: "click"
    },
    clearable: Boolean,
    clearFilterAfterSelect: {
      type: Boolean,
      default: !0
    },
    remote: Boolean,
    onLoad: Function,
    separator: {
      type: String,
      default: " / "
    },
    filter: Function,
    placement: {
      type: String,
      default: "bottom-start"
    },
    cascade: {
      type: Boolean,
      default: !0
    },
    leafOnly: Boolean,
    showPath: {
      type: Boolean,
      default: !0
    },
    show: {
      type: Boolean,
      default: void 0
    },
    maxTagCount: [String, Number],
    menuProps: Object,
    filterMenuProps: Object,
    virtualScroll: {
      type: Boolean,
      default: !0
    },
    checkStrategy: {
      type: String,
      default: "all"
    },
    valueField: {
      type: String,
      default: "value"
    },
    labelField: {
      type: String,
      default: "label"
    },
    childrenField: {
      type: String,
      default: "children"
    },
    renderLabel: Function,
    status: String,
    "onUpdate:value": [Function, Array],
    onUpdateValue: [Function, Array],
    "onUpdate:show": [Function, Array],
    onUpdateShow: [Function, Array],
    onBlur: Function,
    onFocus: Function,
    // deprecated
    onChange: [Function, Array]
  }), e.default = (0, o.defineComponent)({
    name: "Cascader",
    props: e.cascaderProps,
    setup(n, { slots: i }) {
      process.env.NODE_ENV !== "production" && (0, o.watchEffect)(() => {
        n.leafOnly && (0, y.warnOnce)("cascader", '`leaf-only` is deprecated, please use `check-strategy="child"` instead'), n.onChange !== void 0 && (0, y.warnOnce)("cascader", "`on-change` is deprecated, please use `on-update:value` instead.");
      });
      const { mergedBorderedRef: u, mergedClsPrefixRef: M, namespaceRef: _, inlineThemeDisabled: O } = (0, k.useConfig)(n), $ = (0, k.useTheme)("Cascader", "-cascader", b.default, D.cascaderLight, n, M), { localeRef: w } = (0, k.useLocale)("Cascader"), T = (0, o.ref)(n.defaultValue), U = (0, o.computed)(() => n.value), f = (0, P.useMergedState)(U, T), S = (0, o.computed)(() => n.leafOnly ? "child" : n.checkStrategy), L = (0, o.ref)(""), J = (0, k.useFormItem)(n), { mergedSizeRef: he, mergedDisabledRef: ce, mergedStatusRef: we } = J, Q = (0, o.ref)(null), ne = (0, o.ref)(null), W = (0, o.ref)(null), H = (0, o.ref)(null), h = (0, o.ref)(null), q = (0, o.ref)(/* @__PURE__ */ new Set()), E = (0, o.ref)(null), te = (0, o.ref)(null), le = (0, y.useAdjustedTo)(n), oe = (0, o.ref)(!1), N = (t) => {
        q.value.add(t);
      }, X = (t) => {
        q.value.delete(t);
      }, G = (0, o.computed)(() => {
        const { valueField: t, childrenField: r, disabledField: v } = n;
        return (0, c.createTreeMate)(n.options, {
          getDisabled(C) {
            return C[v];
          },
          getKey(C) {
            return C[t];
          },
          getChildren(C) {
            return C[r];
          }
        });
      }), ie = (0, o.computed)(() => {
        const { cascade: t, multiple: r } = n;
        return r && Array.isArray(f.value) ? G.value.getCheckedKeys(f.value, {
          cascade: t,
          allowNotLoaded: n.allowCheckingNotLoaded
        }) : {
          checkedKeys: [],
          indeterminateKeys: []
        };
      }), Z = (0, o.computed)(() => ie.value.checkedKeys), ge = (0, o.computed)(() => ie.value.indeterminateKeys), Re = (0, o.computed)(() => {
        const { treeNodePath: t, treeNode: r } = G.value.getPath(h.value);
        let v;
        return r === null ? v = [G.value.treeNodes] : (v = t.map((C) => C.siblings), !r.isLeaf && !q.value.has(r.key) && r.children && v.push(r.children)), v;
      }), Ae = (0, o.computed)(() => {
        const { keyPath: t } = G.value.getPath(h.value);
        return t;
      }), ve = (0, o.computed)(() => $.value.self.optionHeight);
      (0, o.isReactive)(n.options) && (0, o.watch)(n.options, (t, r) => {
        t !== r && (h.value = null, H.value = null);
      });
      function Ne(t) {
        const { onUpdateShow: r, "onUpdate:show": v } = n;
        r && (0, y.call)(r, t), v && (0, y.call)(v, t), De.value = t;
      }
      function se(t, r, v) {
        const { onUpdateValue: C, "onUpdate:value": m, onChange: j } = n, { nTriggerFormInput: g, nTriggerFormChange: B } = J;
        C && (0, y.call)(C, t, r, v), m && (0, y.call)(m, t, r, v), j && (0, y.call)(j, t, r, v), T.value = t, g(), B();
      }
      function be(t) {
        H.value = t;
      }
      function pe(t) {
        h.value = t;
      }
      function Me(t) {
        const { value: { getNode: r } } = G;
        return t.map((v) => {
          var C;
          return ((C = r(v)) === null || C === void 0 ? void 0 : C.rawNode) || null;
        });
      }
      function $e(t) {
        var r;
        const { cascade: v, multiple: C, filterable: m } = n, { value: { check: j, getNode: g, getPath: B } } = G;
        if (C)
          try {
            const { checkedKeys: x } = j(t, ie.value.checkedKeys, {
              cascade: v,
              checkStrategy: S.value,
              allowNotLoaded: n.allowCheckingNotLoaded
            });
            se(x, Me(x), x.map((_e) => {
              var Pe;
              return (0, z.getRawNodePath)((Pe = B(_e)) === null || Pe === void 0 ? void 0 : Pe.treeNodePath);
            })), m && He(), H.value = t, h.value = t;
          } catch (x) {
            if (x instanceof c.SubtreeNotLoadedError) {
              if (Q.value) {
                const _e = g(t);
                _e !== null && Q.value.showErrorMessage(_e.rawNode[n.labelField]);
              }
            } else
              throw x;
          }
        else if (S.value === "child") {
          const x = g(t);
          if (x != null && x.isLeaf)
            se(t, x.rawNode, (0, z.getRawNodePath)(B(t).treeNodePath));
          else
            return !1;
        } else {
          const x = g(t);
          se(t, (x == null ? void 0 : x.rawNode) || null, (0, z.getRawNodePath)((r = B(t)) === null || r === void 0 ? void 0 : r.treeNodePath));
        }
        return !0;
      }
      function Se(t) {
        const { cascade: r, multiple: v } = n;
        if (v) {
          const { value: { uncheck: C, getNode: m, getPath: j } } = G, { checkedKeys: g } = C(t, ie.value.checkedKeys, {
            cascade: r,
            checkStrategy: S.value,
            allowNotLoaded: n.allowCheckingNotLoaded
          });
          se(g, g.map((B) => {
            var x;
            return ((x = m(B)) === null || x === void 0 ? void 0 : x.rawNode) || null;
          }), g.map((B) => {
            var x;
            return (0, z.getRawNodePath)((x = j(B)) === null || x === void 0 ? void 0 : x.treeNodePath);
          })), H.value = t, h.value = t;
        }
      }
      const Ee = (0, o.computed)(() => {
        if (n.multiple) {
          const { showPath: t, separator: r, labelField: v, cascade: C } = n, { getCheckedKeys: m, getNode: j } = G.value;
          return m(Z.value, {
            cascade: C,
            checkStrategy: S.value,
            allowNotLoaded: n.allowCheckingNotLoaded
          }).checkedKeys.map((B) => {
            const x = j(B);
            return x === null ? {
              label: String(B),
              value: B
            } : {
              label: t ? (0, z.getPathLabel)(x, r, v) : x.rawNode[v],
              value: x.key
            };
          });
        } else
          return [];
      }), Ve = (0, o.computed)(() => {
        const { multiple: t, showPath: r, separator: v, labelField: C } = n, { value: m } = f;
        if (!t && !Array.isArray(m)) {
          const { getNode: j } = G.value;
          if (m === null)
            return null;
          const g = j(m);
          return g === null ? {
            label: String(m),
            value: m
          } : {
            label: r ? (0, z.getPathLabel)(g, v, C) : g.rawNode[C],
            value: g.key
          };
        } else
          return null;
      }), De = (0, o.ref)(!1), Ue = (0, o.toRef)(n, "show"), ee = (0, P.useMergedState)(Ue, De), Lt = (0, o.computed)(() => {
        const { placeholder: t } = n;
        return t !== void 0 ? t : w.value.placeholder;
      }), de = (0, o.computed)(() => !!(n.filterable && L.value));
      (0, o.watch)(ee, (t) => {
        if (!t || n.multiple)
          return;
        const { value: r } = f;
        !Array.isArray(r) && r !== null ? (H.value = r, h.value = r, (0, o.nextTick)(() => {
          var v;
          if (!ee.value)
            return;
          const { value: C } = h;
          if (f.value !== null) {
            const m = G.value.getNode(C);
            m && ((v = Q.value) === null || v === void 0 || v.scroll(m.level, m.index, (0, s.depx)(ve.value)));
          }
        })) : (H.value = null, h.value = null);
      }, {
        immediate: !0
      });
      function ut(t) {
        const { onBlur: r } = n, { nTriggerFormBlur: v } = J;
        r && (0, y.call)(r, t), v();
      }
      function ft(t) {
        const { onFocus: r } = n, { nTriggerFormFocus: v } = J;
        r && (0, y.call)(r, t), v();
      }
      function He() {
        var t;
        (t = W.value) === null || t === void 0 || t.focusInput();
      }
      function Kt() {
        var t;
        (t = W.value) === null || t === void 0 || t.focus();
      }
      function je() {
        ce.value || (L.value = "", Ne(!0), n.filterable && He());
      }
      function ke(t = !1) {
        t && Kt(), Ne(!1), L.value = "";
      }
      function ht(t) {
        var r;
        de.value || ee.value && (!((r = W.value) === null || r === void 0) && r.$el.contains((0, s.getPreciseEventTarget)(t)) || ke());
      }
      function At(t) {
        de.value && ht(t);
      }
      function vt() {
        n.clearFilterAfterSelect && (L.value = "");
      }
      function Be(t) {
        var r, v, C;
        const { value: m } = H, { value: j } = G;
        switch (t) {
          case "prev":
            if (m !== null) {
              const g = j.getPrev(m, { loop: !0 });
              g !== null && (be(g.key), (r = Q.value) === null || r === void 0 || r.scroll(g.level, g.index, (0, s.depx)(ve.value)));
            }
            break;
          case "next":
            if (m === null) {
              const g = j.getFirstAvailableNode();
              g !== null && (be(g.key), (v = Q.value) === null || v === void 0 || v.scroll(g.level, g.index, (0, s.depx)(ve.value)));
            } else {
              const g = j.getNext(m, { loop: !0 });
              g !== null && (be(g.key), (C = Q.value) === null || C === void 0 || C.scroll(g.level, g.index, (0, s.depx)(ve.value)));
            }
            break;
          case "child":
            if (m !== null) {
              const g = j.getNode(m);
              if (g !== null)
                if (g.shallowLoaded) {
                  const B = j.getChild(m);
                  B !== null && (pe(m), be(B.key));
                } else {
                  const { value: B } = q;
                  if (!B.has(m)) {
                    N(m), pe(m);
                    const { onLoad: x } = n;
                    x && x(g.rawNode).then(() => {
                      X(m);
                    }).catch(() => {
                      X(m);
                    });
                  }
                }
            }
            break;
          case "parent":
            if (m !== null) {
              const g = j.getParent(m);
              if (g !== null) {
                be(g.key);
                const B = g.getParent();
                pe(B === null ? null : B.key);
              }
            }
            break;
        }
      }
      function bt(t) {
        var r, v;
        switch (t.key) {
          case " ":
          case "ArrowDown":
          case "ArrowUp":
            if (n.filterable && ee.value)
              break;
            t.preventDefault();
            break;
        }
        if (!(0, s.happensIn)(t, "action"))
          switch (t.key) {
            case " ":
              if (n.filterable)
                return;
            case "Enter":
              if (!ee.value)
                je();
              else {
                const { value: C } = de, { value: m } = H;
                if (C)
                  ne.value && ne.value.enter() && vt();
                else if (m !== null)
                  if (Z.value.includes(m) || ge.value.includes(m))
                    Se(m);
                  else {
                    const j = $e(m);
                    !n.multiple && j && ke(!0);
                  }
              }
              break;
            case "ArrowUp":
              t.preventDefault(), ee.value && (de.value ? (r = ne.value) === null || r === void 0 || r.prev() : Be("prev"));
              break;
            case "ArrowDown":
              t.preventDefault(), ee.value ? de.value ? (v = ne.value) === null || v === void 0 || v.next() : Be("next") : je();
              break;
            case "ArrowLeft":
              t.preventDefault(), ee.value && !de.value && Be("parent");
              break;
            case "ArrowRight":
              t.preventDefault(), ee.value && !de.value && Be("child");
              break;
            case "Escape":
              ee.value && ((0, y.markEventEffectPerformed)(t), ke(!0));
          }
      }
      function Et(t) {
        bt(t);
      }
      function Vt(t) {
        t.stopPropagation(), n.multiple ? se([], [], []) : se(null, null, null);
      }
      function Ut(t) {
        var r;
        !((r = Q.value) === null || r === void 0) && r.$el.contains(t.relatedTarget) || (oe.value = !0, ft(t));
      }
      function Ht(t) {
        var r;
        !((r = Q.value) === null || r === void 0) && r.$el.contains(t.relatedTarget) || (oe.value = !1, ut(t), ke());
      }
      function qt(t) {
        var r;
        !((r = W.value) === null || r === void 0) && r.$el.contains(t.relatedTarget) || (oe.value = !0, ft(t));
      }
      function Gt(t) {
        var r;
        !((r = W.value) === null || r === void 0) && r.$el.contains(t.relatedTarget) || (oe.value = !1, ut(t));
      }
      function Wt(t) {
        (0, s.happensIn)(t, "action") || n.multiple && n.filter && (t.preventDefault(), He());
      }
      function Yt() {
        ke(!0);
      }
      function Jt() {
        n.filterable ? je() : ee.value ? ke(!0) : je();
      }
      function Qt(t) {
        L.value = t.target.value;
      }
      function Xt(t) {
        const { multiple: r } = n, { value: v } = f;
        r && Array.isArray(v) && t.value !== void 0 ? Se(t.value) : se(null, null, null);
      }
      function mt() {
        var t;
        (t = E.value) === null || t === void 0 || t.syncPosition();
      }
      function gt() {
        var t;
        (t = te.value) === null || t === void 0 || t.syncPosition();
      }
      function Zt() {
        ee.value && (de.value ? mt() : gt());
      }
      const qe = (0, o.computed)(() => !!(n.multiple && n.cascade || S.value !== "child"));
      (0, o.provide)(V.cascaderInjectionKey, {
        slots: i,
        mergedClsPrefixRef: M,
        mergedThemeRef: $,
        mergedValueRef: f,
        checkedKeysRef: Z,
        indeterminateKeysRef: ge,
        hoverKeyPathRef: Ae,
        mergedCheckStrategyRef: S,
        showCheckboxRef: qe,
        cascadeRef: (0, o.toRef)(n, "cascade"),
        multipleRef: (0, o.toRef)(n, "multiple"),
        keyboardKeyRef: H,
        hoverKeyRef: h,
        remoteRef: (0, o.toRef)(n, "remote"),
        loadingKeySetRef: q,
        expandTriggerRef: (0, o.toRef)(n, "expandTrigger"),
        isMountedRef: (0, P.useIsMounted)(),
        onLoadRef: (0, o.toRef)(n, "onLoad"),
        virtualScrollRef: (0, o.toRef)(n, "virtualScroll"),
        optionHeightRef: ve,
        localeRef: w,
        labelFieldRef: (0, o.toRef)(n, "labelField"),
        renderLabelRef: (0, o.toRef)(n, "renderLabel"),
        syncCascaderMenuPosition: gt,
        syncSelectMenuPosition: mt,
        updateKeyboardKey: be,
        updateHoverKey: pe,
        addLoadingKey: N,
        deleteLoadingKey: X,
        doCheck: $e,
        doUncheck: Se,
        closeMenu: ke,
        handleSelectMenuClickOutside: At,
        handleCascaderMenuClickOutside: ht,
        clearPattern: vt
      });
      const eo = {
        focus: () => {
          var t;
          (t = W.value) === null || t === void 0 || t.focus();
        },
        blur: () => {
          var t;
          (t = W.value) === null || t === void 0 || t.blur();
        },
        getCheckedData: () => {
          if (qe.value) {
            const t = Z.value;
            return {
              keys: t,
              options: Me(t)
            };
          }
          return {
            keys: [],
            options: []
          };
        },
        getIndeterminateData: () => {
          if (qe.value) {
            const t = ge.value;
            return {
              keys: t,
              options: Me(t)
            };
          }
          return {
            keys: [],
            options: []
          };
        }
      }, pt = (0, o.computed)(() => {
        const { self: { optionArrowColor: t, optionTextColor: r, optionTextColorActive: v, optionTextColorDisabled: C, optionCheckMarkColor: m, menuColor: j, menuBoxShadow: g, menuDividerColor: B, menuBorderRadius: x, menuHeight: _e, optionColorHover: Pe, optionHeight: to, optionFontSize: oo, loadingColor: no, columnWidth: ro }, common: { cubicBezierEaseInOut: lo } } = $.value;
        return {
          "--n-bezier": lo,
          "--n-menu-border-radius": x,
          "--n-menu-box-shadow": g,
          "--n-menu-height": _e,
          "--n-column-width": ro,
          "--n-menu-color": j,
          "--n-menu-divider-color": B,
          "--n-option-height": to,
          "--n-option-font-size": oo,
          "--n-option-text-color": r,
          "--n-option-text-color-disabled": C,
          "--n-option-text-color-active": v,
          "--n-option-color-hover": Pe,
          "--n-option-check-mark-color": m,
          "--n-option-arrow-color": t,
          "--n-menu-mask-color": (0, s.changeColor)(j, { alpha: 0.75 }),
          "--n-loading-color": no
        };
      }), ye = O ? (0, k.useThemeClass)("cascader", void 0, pt, n) : void 0;
      return Object.assign(Object.assign({}, eo), {
        handleTriggerResize: Zt,
        mergedStatus: we,
        selectMenuFollowerRef: E,
        cascaderMenuFollowerRef: te,
        triggerInstRef: W,
        selectMenuInstRef: ne,
        cascaderMenuInstRef: Q,
        mergedBordered: u,
        mergedClsPrefix: M,
        namespace: _,
        mergedValue: f,
        mergedShow: ee,
        showSelectMenu: de,
        pattern: L,
        treeMate: G,
        mergedSize: he,
        mergedDisabled: ce,
        localizedPlaceholder: Lt,
        selectedOption: Ve,
        selectedOptions: Ee,
        adjustedTo: le,
        menuModel: Re,
        handleMenuTabout: Yt,
        handleMenuFocus: qt,
        handleMenuBlur: Gt,
        handleMenuKeydown: Et,
        handleMenuMousedown: Wt,
        handleTriggerFocus: Ut,
        handleTriggerBlur: Ht,
        handleTriggerClick: Jt,
        handleClear: Vt,
        handleDeleteOption: Xt,
        handlePatternInput: Qt,
        handleKeydown: bt,
        focused: oe,
        optionHeight: ve,
        mergedTheme: $,
        cssVars: O ? void 0 : pt,
        themeClass: ye == null ? void 0 : ye.themeClass,
        onRender: ye == null ? void 0 : ye.onRender
      });
    },
    render() {
      const { mergedClsPrefix: n } = this;
      return (0, o.h)(
        "div",
        { class: `${n}-cascader` },
        (0, o.h)(a.VBinder, null, {
          default: () => [
            (0, o.h)(a.VTarget, null, {
              default: () => (0, o.h)(p.NInternalSelection, { onResize: this.handleTriggerResize, ref: "triggerInstRef", status: this.mergedStatus, clsPrefix: n, maxTagCount: this.maxTagCount, bordered: this.mergedBordered, size: this.mergedSize, theme: this.mergedTheme.peers.InternalSelection, themeOverrides: this.mergedTheme.peerOverrides.InternalSelection, active: this.mergedShow, pattern: this.pattern, placeholder: this.localizedPlaceholder, selectedOption: this.selectedOption, selectedOptions: this.selectedOptions, multiple: this.multiple, filterable: this.filterable, clearable: this.clearable, disabled: this.mergedDisabled, focused: this.focused, onFocus: this.handleTriggerFocus, onBlur: this.handleTriggerBlur, onClick: this.handleTriggerClick, onClear: this.handleClear, onDeleteOption: this.handleDeleteOption, onPatternInput: this.handlePatternInput, onKeydown: this.handleKeydown }, {
                arrow: () => {
                  var i, u;
                  return (u = (i = this.$slots).arrow) === null || u === void 0 ? void 0 : u.call(i);
                }
              })
            }),
            (0, o.h)(a.VFollower, { key: "cascaderMenu", ref: "cascaderMenuFollowerRef", show: this.mergedShow && !this.showSelectMenu, containerClass: this.namespace, placement: this.placement, width: this.options.length ? void 0 : "target", teleportDisabled: this.adjustedTo === y.useAdjustedTo.tdkey, to: this.adjustedTo }, {
              default: () => {
                var i;
                (i = this.onRender) === null || i === void 0 || i.call(this);
                const { menuProps: u } = this;
                return (0, o.h)(A.default, Object.assign({}, u, { ref: "cascaderMenuInstRef", class: [this.themeClass, u == null ? void 0 : u.class], value: this.mergedValue, show: this.mergedShow && !this.showSelectMenu, menuModel: this.menuModel, style: [
                  this.cssVars,
                  u == null ? void 0 : u.style
                ], onFocus: this.handleMenuFocus, onBlur: this.handleMenuBlur, onKeydown: this.handleMenuKeydown, onMousedown: this.handleMenuMousedown, onTabout: this.handleMenuTabout }), {
                  action: () => {
                    var M, _;
                    return (_ = (M = this.$slots).action) === null || _ === void 0 ? void 0 : _.call(M);
                  },
                  empty: () => {
                    var M, _;
                    return (_ = (M = this.$slots).empty) === null || _ === void 0 ? void 0 : _.call(M);
                  }
                });
              }
            }),
            (0, o.h)(a.VFollower, { key: "selectMenu", ref: "selectMenuFollowerRef", show: this.mergedShow && this.showSelectMenu, containerClass: this.namespace, width: "target", placement: this.placement, to: this.adjustedTo, teleportDisabled: this.adjustedTo === y.useAdjustedTo.tdkey }, {
              default: () => {
                var i;
                (i = this.onRender) === null || i === void 0 || i.call(this);
                const { filterMenuProps: u } = this;
                return (0, o.h)(I.default, Object.assign({}, u, { ref: "selectMenuInstRef", class: [this.themeClass, u == null ? void 0 : u.class], value: this.mergedValue, show: this.mergedShow && this.showSelectMenu, pattern: this.pattern, multiple: this.multiple, tmNodes: this.treeMate.treeNodes, filter: this.filter, labelField: this.labelField, separator: this.separator, style: [
                  this.cssVars,
                  u == null ? void 0 : u.style
                ] }));
              }
            })
          ]
        })
      );
    }
  });
})(Dt);
(function(e) {
  var l = K && K.__importDefault || function(c) {
    return c && c.__esModule ? c : { default: c };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.cascaderProps = e.NCascader = void 0;
  var o = Dt;
  Object.defineProperty(e, "NCascader", { enumerable: !0, get: function() {
    return l(o).default;
  } }), Object.defineProperty(e, "cascaderProps", { enumerable: !0, get: function() {
    return o.cascaderProps;
  } });
})($t);
const an = /* @__PURE__ */ bo({
  __proto__: null
}, [$t]);
export {
  an as i
};
