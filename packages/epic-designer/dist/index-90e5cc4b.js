import { c as I } from "./_commonjsHelpers-c5d32002.js";
import { r as We } from "./_vue_commonjs-external-eb7fec7f.js";
import { c as fe, b as ce, a as me, r as Ge, e as qe, _ as Ke, p as Je, i as Qe } from "./index-815197f3.js";
import { i as Xe, _ as Ye } from "./index-cd698eea.js";
import { s as pe, r as Ze, a as et } from "./index-de83403a.js";
import { s as ve, r as tt, b as nt } from "./index-ea8cae7f.js";
function rt(t, i) {
  for (var l = 0; l < i.length; l++) {
    const s = i[l];
    if (typeof s != "string" && !Array.isArray(s)) {
      for (const o in s)
        if (o !== "default" && !(o in t)) {
          const f = Object.getOwnPropertyDescriptor(s, o);
          f && Object.defineProperty(t, o, f.get ? f : {
            enumerable: !0,
            get: () => s[o]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }));
}
var be = {}, he = {}, ge = {}, Q = {};
Object.defineProperty(Q, "__esModule", { value: !0 });
const ut = ve, lt = pe, it = fe, at = {
  name: "InputNumber",
  common: it.commonDark,
  peers: {
    Button: ut.buttonDark,
    Input: lt.inputDark
  },
  self(t) {
    const { textColorDisabled: i } = t;
    return {
      iconColorDisabled: i
    };
  }
};
Q.default = at;
var X = {};
Object.defineProperty(X, "__esModule", { value: !0 });
const ot = ve, st = pe, dt = fe, ft = ce, ct = (t) => {
  const { textColorDisabled: i } = t;
  return {
    iconColorDisabled: i
  };
}, mt = (0, ft.createTheme)({
  name: "InputNumber",
  common: dt.commonLight,
  peers: {
    Button: ot.buttonLight,
    Input: st.inputLight
  },
  self: ct
});
X.default = mt;
var k = {}, Y = {};
Object.defineProperty(Y, "__esModule", {
  value: !0
});
const de = me;
Y.default = (0, de.cB)("input-number", [(0, de.cM)("rtl", `
 direction: rtl;
 `)]);
var pt = I && I.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(k, "__esModule", { value: !0 });
k.inputNumberRtl = void 0;
const vt = pt(Y), bt = Ze, ht = tt;
k.inputNumberRtl = {
  name: "InputNumber",
  style: vt.default,
  peers: [bt.inputRtl, ht.buttonRtl]
};
(function(t) {
  var i = I && I.__importDefault || function(f) {
    return f && f.__esModule ? f : { default: f };
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), t.inputNumberRtl = t.inputNumberLight = t.inputNumberDark = void 0;
  var l = Q;
  Object.defineProperty(t, "inputNumberDark", { enumerable: !0, get: function() {
    return i(l).default;
  } });
  var s = X;
  Object.defineProperty(t, "inputNumberLight", { enumerable: !0, get: function() {
    return i(s).default;
  } });
  var o = k;
  Object.defineProperty(t, "inputNumberRtl", { enumerable: !0, get: function() {
    return o.inputNumberRtl;
  } });
})(ge);
var d = {};
Object.defineProperty(d, "__esModule", { value: !0 });
d.parseNumber = d.format = d.validator = d.isWipValue = d.parse = void 0;
function gt(t) {
  return t == null || typeof t == "string" && t.trim() === "" ? null : Number(t);
}
d.parse = gt;
function _t(t) {
  return t.includes(".") && (/^(-)?\d+.*(\.|0)$/.test(t) || /^\.\d+$/.test(t));
}
d.isWipValue = _t;
function yt(t) {
  return t == null ? !0 : !Number.isNaN(t);
}
d.validator = yt;
function Nt(t, i) {
  return t == null ? "" : i === void 0 ? String(t) : t.toFixed(i);
}
d.format = Nt;
function It(t) {
  if (t === null)
    return null;
  if (typeof t == "number")
    return t;
  {
    const i = Number(t);
    return Number.isNaN(i) ? null : i;
  }
}
d.parseNumber = It;
var Z = {};
Object.defineProperty(Z, "__esModule", {
  value: !0
});
const J = me;
Z.default = (0, J.c)([(0, J.cB)("input-number-suffix", `
 display: inline-block;
 margin-right: 10px;
 `), (0, J.cB)("input-number-prefix", `
 display: inline-block;
 margin-left: 10px;
 `)]);
(function(t) {
  var i = I && I.__importDefault || function(n) {
    return n && n.__esModule ? n : { default: n };
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), t.inputNumberProps = void 0;
  const l = We, s = Ge, o = qe, f = Qe, ee = Xe, _e = et, te = Ye, ne = nt, w = ce, c = Ke, ye = ge, m = d, Ne = i(Z), Ie = Je, re = 800, ue = 100;
  t.inputNumberProps = Object.assign(Object.assign({}, w.useTheme.props), {
    autofocus: Boolean,
    loading: {
      type: Boolean,
      default: void 0
    },
    placeholder: String,
    defaultValue: {
      type: Number,
      default: null
    },
    value: Number,
    step: {
      type: [Number, String],
      default: 1
    },
    min: [Number, String],
    max: [Number, String],
    size: String,
    disabled: {
      type: Boolean,
      default: void 0
    },
    validator: Function,
    bordered: {
      type: Boolean,
      default: void 0
    },
    showButton: {
      type: Boolean,
      default: !0
    },
    buttonPlacement: {
      type: String,
      default: "right"
    },
    readonly: Boolean,
    clearable: Boolean,
    keyboard: {
      type: Object,
      default: {}
    },
    updateValueOnInput: {
      type: Boolean,
      default: !0
    },
    parse: Function,
    format: Function,
    precision: Number,
    status: String,
    "onUpdate:value": [Function, Array],
    onUpdateValue: [Function, Array],
    onFocus: [Function, Array],
    onBlur: [Function, Array],
    onClear: [Function, Array],
    // deprecated
    onChange: [Function, Array]
  }), t.default = (0, l.defineComponent)({
    name: "InputNumber",
    props: t.inputNumberProps,
    setup(n) {
      process.env.NODE_ENV !== "production" && (0, l.watchEffect)(() => {
        n.onChange !== void 0 && (0, c.warnOnce)("input-number", "`on-change` is deprecated, please use `on-update:value` instead");
      });
      const { mergedBorderedRef: p, mergedClsPrefixRef: x, mergedRtlRef: j } = (0, w.useConfig)(n), v = (0, w.useTheme)("InputNumber", "-input-number", Ne.default, ye.inputNumberLight, n, x), { localeRef: V } = (0, w.useLocale)("InputNumber"), T = (0, w.useFormItem)(n), { mergedSizeRef: Ve, mergedDisabledRef: Me, mergedStatusRef: xe } = T, y = (0, l.ref)(null), le = (0, l.ref)(null), ie = (0, l.ref)(null), A = (0, l.ref)(n.defaultValue), Pe = (0, l.toRef)(n, "value"), g = (0, o.useMergedState)(Pe, A), M = (0, l.ref)(""), U = (e) => {
        const r = String(e).split(".")[1];
        return r ? r.length : 0;
      }, De = (e) => {
        const r = [n.min, n.max, n.step, e].map((u) => u === void 0 ? 0 : U(u));
        return Math.max(...r);
      }, we = (0, o.useMemo)(() => {
        const { placeholder: e } = n;
        return e !== void 0 ? e : V.value.placeholder;
      }), C = (0, o.useMemo)(() => {
        const e = (0, m.parseNumber)(n.step);
        return e !== null ? e === 0 ? 1 : Math.abs(e) : 1;
      }), ae = (0, o.useMemo)(() => {
        const e = (0, m.parseNumber)(n.min);
        return e !== null ? e : null;
      }), oe = (0, o.useMemo)(() => {
        const e = (0, m.parseNumber)(n.max);
        return e !== null ? e : null;
      }), O = (e) => {
        const { value: r } = g;
        if (e === r) {
          P();
          return;
        }
        const { "onUpdate:value": u, onUpdateValue: a, onChange: h } = n, { nTriggerFormInput: _, nTriggerFormChange: D } = T;
        h && (0, c.call)(h, e), a && (0, c.call)(a, e), u && (0, c.call)(u, e), A.value = e, _(), D();
      }, b = ({ offset: e, doUpdateIfValid: r, fixPrecision: u, isInputing: a }) => {
        const { value: h } = M;
        if (a && (0, m.isWipValue)(h))
          return !1;
        const _ = (n.parse || m.parse)(h);
        if (_ === null)
          return r && O(null), null;
        if ((0, m.validator)(_)) {
          const D = U(_), { precision: S } = n;
          if (S !== void 0 && S < D && !u)
            return !1;
          let N = parseFloat((_ + e).toFixed(S ?? De(_)));
          if ((0, m.validator)(N)) {
            const { value: q } = oe, { value: K } = ae;
            if (q !== null && N > q) {
              if (!r || a)
                return !1;
              N = q;
            }
            if (K !== null && N < K) {
              if (!r || a)
                return !1;
              N = K;
            }
            return n.validator && !n.validator(N) ? !1 : (r && O(N), N);
          }
        }
        return !1;
      }, P = () => {
        const { value: e } = g;
        if ((0, m.validator)(e)) {
          const { format: r, precision: u } = n;
          r ? M.value = r(e) : e === null || u === void 0 || // precision overflow
          U(e) > u ? M.value = (0, m.format)(e, void 0) : M.value = (0, m.format)(e, u);
        } else
          M.value = String(e);
      };
      P();
      const Oe = (0, o.useMemo)(() => b({
        offset: 0,
        doUpdateIfValid: !1,
        isInputing: !1,
        fixPrecision: !1
      }) === !1), E = (0, o.useMemo)(() => {
        const { value: e } = g;
        if (n.validator && e === null)
          return !1;
        const { value: r } = C;
        return b({
          offset: -r,
          doUpdateIfValid: !1,
          isInputing: !1,
          fixPrecision: !1
        }) !== !1;
      }), L = (0, o.useMemo)(() => {
        const { value: e } = g;
        if (n.validator && e === null)
          return !1;
        const { value: r } = C;
        return b({
          offset: +r,
          doUpdateIfValid: !1,
          isInputing: !1,
          fixPrecision: !1
        }) !== !1;
      });
      function Re(e) {
        const { onFocus: r } = n, { nTriggerFormFocus: u } = T;
        r && (0, c.call)(r, e), u();
      }
      function Be(e) {
        var r, u;
        if (e.target === ((r = y.value) === null || r === void 0 ? void 0 : r.wrapperElRef))
          return;
        const a = b({
          offset: 0,
          doUpdateIfValid: !0,
          isInputing: !1,
          fixPrecision: !0
        });
        if (a !== !1) {
          const D = (u = y.value) === null || u === void 0 ? void 0 : u.inputElRef;
          D && (D.value = String(a || "")), g.value === a && P();
        } else
          P();
        const { onBlur: h } = n, { nTriggerFormBlur: _ } = T;
        h && (0, c.call)(h, e), _(), (0, l.nextTick)(() => {
          P();
        });
      }
      function Se(e) {
        const { onClear: r } = n;
        r && (0, c.call)(r, e);
      }
      function H() {
        const { value: e } = L;
        if (!e) {
          G();
          return;
        }
        const { value: r } = g;
        if (r === null)
          n.validator || O(se());
        else {
          const { value: u } = C;
          b({
            offset: u,
            doUpdateIfValid: !0,
            isInputing: !1,
            fixPrecision: !0
          });
        }
      }
      function z() {
        const { value: e } = E;
        if (!e) {
          W();
          return;
        }
        const { value: r } = g;
        if (r === null)
          n.validator || O(se());
        else {
          const { value: u } = C;
          b({
            offset: -u,
            doUpdateIfValid: !0,
            isInputing: !1,
            fixPrecision: !0
          });
        }
      }
      const Te = Re, Ce = Be;
      function se() {
        if (n.validator)
          return null;
        const { value: e } = ae, { value: r } = oe;
        return e !== null ? Math.max(0, e) : r !== null ? Math.min(0, r) : 0;
      }
      function $e(e) {
        Se(e), O(null);
      }
      function Fe(e) {
        var r, u, a;
        !((r = ie.value) === null || r === void 0) && r.$el.contains(e.target) && e.preventDefault(), !((u = le.value) === null || u === void 0) && u.$el.contains(e.target) && e.preventDefault(), (a = y.value) === null || a === void 0 || a.activate();
      }
      let R = null, B = null, $ = null;
      function W() {
        $ && (window.clearTimeout($), $ = null), R && (window.clearInterval(R), R = null);
      }
      function G() {
        F && (window.clearTimeout(F), F = null), B && (window.clearInterval(B), B = null);
      }
      function ke() {
        W(), $ = window.setTimeout(() => {
          R = window.setInterval(() => {
            z();
          }, ue);
        }, re), (0, f.on)("mouseup", document, W, {
          once: !0
        });
      }
      let F = null;
      function je() {
        G(), F = window.setTimeout(() => {
          B = window.setInterval(() => {
            H();
          }, ue);
        }, re), (0, f.on)("mouseup", document, G, {
          once: !0
        });
      }
      const Ae = () => {
        B || H();
      }, Ue = () => {
        R || z();
      };
      function Ee(e) {
        var r, u;
        if (e.key === "Enter") {
          if (e.target === ((r = y.value) === null || r === void 0 ? void 0 : r.wrapperElRef))
            return;
          b({
            offset: 0,
            doUpdateIfValid: !0,
            isInputing: !1,
            fixPrecision: !0
          }) !== !1 && ((u = y.value) === null || u === void 0 || u.deactivate());
        } else if (e.key === "ArrowUp") {
          if (!L.value || n.keyboard.ArrowUp === !1)
            return;
          e.preventDefault(), b({
            offset: 0,
            doUpdateIfValid: !0,
            isInputing: !1,
            fixPrecision: !0
          }) !== !1 && H();
        } else if (e.key === "ArrowDown") {
          if (!E.value || n.keyboard.ArrowDown === !1)
            return;
          e.preventDefault(), b({
            offset: 0,
            doUpdateIfValid: !0,
            isInputing: !1,
            fixPrecision: !0
          }) !== !1 && z();
        }
      }
      function Le(e) {
        M.value = e, n.updateValueOnInput && !n.format && !n.parse && n.precision === void 0 && b({
          offset: 0,
          doUpdateIfValid: !0,
          isInputing: !0,
          fixPrecision: !1
        });
      }
      (0, l.watch)(g, () => {
        P();
      });
      const He = {
        focus: () => {
          var e;
          return (e = y.value) === null || e === void 0 ? void 0 : e.focus();
        },
        blur: () => {
          var e;
          return (e = y.value) === null || e === void 0 ? void 0 : e.blur();
        }
      }, ze = (0, Ie.useRtl)("InputNumber", j, x);
      return Object.assign(Object.assign({}, He), {
        rtlEnabled: ze,
        inputInstRef: y,
        minusButtonInstRef: le,
        addButtonInstRef: ie,
        mergedClsPrefix: x,
        mergedBordered: p,
        uncontrolledValue: A,
        mergedValue: g,
        mergedPlaceholder: we,
        displayedValueInvalid: Oe,
        mergedSize: Ve,
        mergedDisabled: Me,
        displayedValue: M,
        addable: L,
        minusable: E,
        mergedStatus: xe,
        handleFocus: Te,
        handleBlur: Ce,
        handleClear: $e,
        handleMouseDown: Fe,
        handleAddClick: Ae,
        handleMinusClick: Ue,
        handleAddMousedown: je,
        handleMinusMousedown: ke,
        handleKeyDown: Ee,
        handleUpdateDisplayedValue: Le,
        // theme
        mergedTheme: v,
        inputThemeOverrides: {
          paddingSmall: "0 8px 0 10px",
          paddingMedium: "0 8px 0 12px",
          paddingLarge: "0 8px 0 14px"
        },
        buttonThemeOverrides: (0, l.computed)(() => {
          const { self: { iconColorDisabled: e } } = v.value, [r, u, a, h] = (0, s.rgba)(e);
          return {
            textColorTextDisabled: `rgb(${r}, ${u}, ${a})`,
            opacityDisabled: `${h}`
          };
        })
      });
    },
    render() {
      const { mergedClsPrefix: n, $slots: p } = this, x = () => (0, l.h)(ne.NxButton, { text: !0, disabled: !this.minusable || this.mergedDisabled || this.readonly, focusable: !1, theme: this.mergedTheme.peers.Button, themeOverrides: this.mergedTheme.peerOverrides.Button, builtinThemeOverrides: this.buttonThemeOverrides, onClick: this.handleMinusClick, onMousedown: this.handleMinusMousedown, ref: "minusButtonInstRef" }, {
        icon: () => (0, c.resolveSlot)(p["minus-icon"], () => [
          (0, l.h)(te.NBaseIcon, { clsPrefix: n }, {
            default: () => (0, l.h)(ee.RemoveIcon, null)
          })
        ])
      }), j = () => (0, l.h)(ne.NxButton, { text: !0, disabled: !this.addable || this.mergedDisabled || this.readonly, focusable: !1, theme: this.mergedTheme.peers.Button, themeOverrides: this.mergedTheme.peerOverrides.Button, builtinThemeOverrides: this.buttonThemeOverrides, onClick: this.handleAddClick, onMousedown: this.handleAddMousedown, ref: "addButtonInstRef" }, {
        icon: () => (0, c.resolveSlot)(p["add-icon"], () => [
          (0, l.h)(te.NBaseIcon, { clsPrefix: n }, {
            default: () => (0, l.h)(ee.AddIcon, null)
          })
        ])
      });
      return (0, l.h)(
        "div",
        { class: [
          `${n}-input-number`,
          this.rtlEnabled && `${n}-input-number--rtl`
        ] },
        (0, l.h)(_e.NInput, { ref: "inputInstRef", autofocus: this.autofocus, status: this.mergedStatus, bordered: this.mergedBordered, loading: this.loading, value: this.displayedValue, onUpdateValue: this.handleUpdateDisplayedValue, theme: this.mergedTheme.peers.Input, themeOverrides: this.mergedTheme.peerOverrides.Input, builtinThemeOverrides: this.inputThemeOverrides, size: this.mergedSize, placeholder: this.mergedPlaceholder, disabled: this.mergedDisabled, readonly: this.readonly, textDecoration: this.displayedValueInvalid ? "line-through" : void 0, onFocus: this.handleFocus, onBlur: this.handleBlur, onKeydown: this.handleKeyDown, onMousedown: this.handleMouseDown, onClear: this.handleClear, clearable: this.clearable, internalLoadingBeforeSuffix: !0 }, {
          prefix: () => {
            var v;
            return this.showButton && this.buttonPlacement === "both" ? [
              x(),
              (0, c.resolveWrappedSlot)(p.prefix, (V) => V ? (0, l.h)("span", { class: `${n}-input-number-prefix` }, V) : null)
            ] : (v = p.prefix) === null || v === void 0 ? void 0 : v.call(p);
          },
          suffix: () => {
            var v;
            return this.showButton ? [
              (0, c.resolveWrappedSlot)(p.suffix, (V) => V ? (0, l.h)("span", { class: `${n}-input-number-suffix` }, V) : null),
              this.buttonPlacement === "right" ? x() : null,
              j()
            ] : (v = p.suffix) === null || v === void 0 ? void 0 : v.call(p);
          }
        })
      );
    }
  });
})(he);
(function(t) {
  var i = I && I.__importDefault || function(s) {
    return s && s.__esModule ? s : { default: s };
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), t.inputNumberProps = t.NInputNumber = void 0;
  var l = he;
  Object.defineProperty(t, "NInputNumber", { enumerable: !0, get: function() {
    return i(l).default;
  } }), Object.defineProperty(t, "inputNumberProps", { enumerable: !0, get: function() {
    return l.inputNumberProps;
  } });
})(be);
const Ot = /* @__PURE__ */ rt({
  __proto__: null
}, [be]);
export {
  Ot as i
};
