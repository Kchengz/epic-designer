import { B as yt, r as Ie, k as de, b as Me, d as Ee, M as St, a as Qe, c as _t, l as It, i as wt, e as Dt } from "./useConfigInject.fdc04e2e.js";
import { _ as qe } from "./index.1fa3133f.js";
import { r as ne } from "./_vue_commonjs-external.cdc460b2.js";
import { r as xt } from "./DownOutlined.62799cd5.js";
import { a as Ot, r as Ct } from "./classCallCheck.fb739271.js";
import { r as Pt } from "./isMobile.73c6cf20.js";
import { r as qt } from "./raf.f4e1fc4f.js";
import { r as Mt } from "./KeyCode.93922cee.js";
import { r as Et } from "./FormItemContext.896a7bec.js";
import { r as Vt } from "./vnode.716a0aad.js";
import { r as Bt } from "./omit.ba8a174d.js";
function Rt(r, f) {
  for (var i = 0; i < f.length; i++) {
    const d = f[i];
    if (typeof d != "string" && !Array.isArray(d)) {
      for (const m in d)
        if (m !== "default" && !(m in r)) {
          const b = Object.getOwnPropertyDescriptor(d, m);
          b && Object.defineProperty(r, m, b.get ? b : {
            enumerable: !0,
            get: () => d[m]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }));
}
var ae = {}, xe = {}, Ne = {}, We;
function Ft() {
  if (We)
    return Ne;
  We = 1, Object.defineProperty(Ne, "__esModule", { value: !0 });
  var r = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z" } }] }, name: "up", theme: "outlined" };
  return Ne.default = r, Ne;
}
var Te;
function Ut() {
  return Te || (Te = 1, function(r) {
    Object.defineProperty(r, "__esModule", {
      value: !0
    }), r.default = void 0;
    var f = ne, i = m(Ft()), d = m(yt());
    function m(p) {
      return p && p.__esModule ? p : { default: p };
    }
    function b(p) {
      for (var g = 1; g < arguments.length; g++) {
        var u = arguments[g] != null ? Object(arguments[g]) : {}, n = Object.keys(u);
        typeof Object.getOwnPropertySymbols == "function" && (n = n.concat(Object.getOwnPropertySymbols(u).filter(function(t) {
          return Object.getOwnPropertyDescriptor(u, t).enumerable;
        }))), n.forEach(function(t) {
          s(p, t, u[t]);
        });
      }
      return p;
    }
    function s(p, g, u) {
      return g in p ? Object.defineProperty(p, g, { value: u, enumerable: !0, configurable: !0, writable: !0 }) : p[g] = u, p;
    }
    var l = function(g, u) {
      var n = b({}, g, u.attrs);
      return (0, f.createVNode)(d.default, b({}, n, {
        icon: i.default
      }), null);
    };
    l.displayName = "UpOutlined", l.inheritAttrs = !1;
    var v = l;
    r.default = v;
  }(xe)), xe;
}
var Z = {}, L = {}, X = {}, he = {}, He;
function Ze() {
  if (He)
    return he;
  He = 1, Object.defineProperty(he, "__esModule", {
    value: !0
  }), he.supportBigInt = r;
  function r() {
    return typeof BigInt == "function";
  }
  return he;
}
var je;
function et() {
  if (je)
    return X;
  je = 1, Object.defineProperty(X, "__esModule", {
    value: !0
  }), X.getNumberPrecision = d, X.isE = i, X.num2str = m, X.trimNumber = f, X.validateNumber = b;
  var r = Ze();
  function f(s) {
    var l = s.trim(), v = l.startsWith("-");
    v && (l = l.slice(1)), l = l.replace(/(\.\d*[^0])0*$/, "$1").replace(/\.0*$/, "").replace(/^0+/, ""), l.startsWith(".") && (l = "0".concat(l));
    var p = l || "0", g = p.split("."), u = g[0] || "0", n = g[1] || "0";
    u === "0" && n === "0" && (v = !1);
    var t = v ? "-" : "";
    return {
      negative: v,
      negativeStr: t,
      trimStr: p,
      integerStr: u,
      decimalStr: n,
      fullStr: "".concat(t).concat(p)
    };
  }
  function i(s) {
    var l = String(s);
    return !Number.isNaN(Number(l)) && l.includes("e");
  }
  function d(s) {
    var l = String(s);
    if (i(s)) {
      var v = Number(l.slice(l.indexOf("e-") + 2)), p = l.match(/\.(\d+)/);
      return p != null && p[1] && (v += p[1].length), v;
    }
    return l.includes(".") && b(l) ? l.length - l.indexOf(".") - 1 : 0;
  }
  function m(s) {
    var l = String(s);
    if (i(s)) {
      if (s > Number.MAX_SAFE_INTEGER)
        return String((0, r.supportBigInt)() ? BigInt(s).toString() : Number.MAX_SAFE_INTEGER);
      if (s < Number.MIN_SAFE_INTEGER)
        return String((0, r.supportBigInt)() ? BigInt(s).toString() : Number.MIN_SAFE_INTEGER);
      l = s.toFixed(d(l));
    }
    return f(l).fullStr;
  }
  function b(s) {
    return typeof s == "number" ? !Number.isNaN(s) : s ? /^\s*-?\d+(\.\d+)?\s*$/.test(s) || /^\s*-?\d+\.\s*$/.test(s) || /^\s*-?\.\d+\s*$/.test(s) : !1;
  }
  return X;
}
var ze;
function At() {
  if (ze)
    return L;
  ze = 1;
  var r = de.exports;
  Object.defineProperty(L, "__esModule", {
    value: !0
  }), L.NumberDecimal = L.BigIntDecimal = void 0, L.default = p, L.toFixed = g;
  var f = r(Ot()), i = r(Ct()), d = r(Ie()), m = et(), b = Ze();
  function s(u) {
    return !u && u !== 0 && !Number.isNaN(u) || !String(u).trim();
  }
  var l = /* @__PURE__ */ function() {
    function u(n) {
      if ((0, f.default)(this, u), (0, d.default)(this, "origin", ""), s(n)) {
        this.empty = !0;
        return;
      }
      this.origin = String(n), this.number = Number(n);
    }
    return (0, i.default)(u, [{
      key: "negate",
      value: function() {
        return new u(-this.toNumber());
      }
    }, {
      key: "add",
      value: function(t) {
        if (this.isInvalidate())
          return new u(t);
        var S = Number(t);
        if (Number.isNaN(S))
          return this;
        var w = this.number + S;
        if (w > Number.MAX_SAFE_INTEGER)
          return new u(Number.MAX_SAFE_INTEGER);
        if (w < Number.MIN_SAFE_INTEGER)
          return new u(Number.MIN_SAFE_INTEGER);
        var O = Math.max((0, m.getNumberPrecision)(this.number), (0, m.getNumberPrecision)(S));
        return new u(w.toFixed(O));
      }
    }, {
      key: "isEmpty",
      value: function() {
        return this.empty;
      }
    }, {
      key: "isNaN",
      value: function() {
        return Number.isNaN(this.number);
      }
    }, {
      key: "isInvalidate",
      value: function() {
        return this.isEmpty() || this.isNaN();
      }
    }, {
      key: "equals",
      value: function(t) {
        return this.toNumber() === (t == null ? void 0 : t.toNumber());
      }
    }, {
      key: "lessEquals",
      value: function(t) {
        return this.add(t.negate().toString()).toNumber() <= 0;
      }
    }, {
      key: "toNumber",
      value: function() {
        return this.number;
      }
    }, {
      key: "toString",
      value: function() {
        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
        return t ? this.isInvalidate() ? "" : (0, m.num2str)(this.number) : this.origin;
      }
    }]), u;
  }();
  L.NumberDecimal = l;
  var v = /* @__PURE__ */ function() {
    function u(n) {
      if ((0, f.default)(this, u), (0, d.default)(this, "origin", ""), s(n)) {
        this.empty = !0;
        return;
      }
      if (this.origin = String(n), n === "-" || Number.isNaN(n)) {
        this.nan = !0;
        return;
      }
      var t = n;
      if ((0, m.isE)(t) && (t = Number(t)), t = typeof t == "string" ? t : (0, m.num2str)(t), (0, m.validateNumber)(t)) {
        var S = (0, m.trimNumber)(t);
        this.negative = S.negative;
        var w = S.trimStr.split(".");
        this.integer = BigInt(w[0]);
        var O = w[1] || "0";
        this.decimal = BigInt(O), this.decimalLen = O.length;
      } else
        this.nan = !0;
    }
    return (0, i.default)(u, [{
      key: "getMark",
      value: function() {
        return this.negative ? "-" : "";
      }
    }, {
      key: "getIntegerStr",
      value: function() {
        return this.integer.toString();
      }
    }, {
      key: "getDecimalStr",
      value: function() {
        return this.decimal.toString().padStart(this.decimalLen, "0");
      }
    }, {
      key: "alignDecimal",
      value: function(t) {
        var S = "".concat(this.getMark()).concat(this.getIntegerStr()).concat(this.getDecimalStr().padEnd(t, "0"));
        return BigInt(S);
      }
    }, {
      key: "negate",
      value: function() {
        var t = new u(this.toString());
        return t.negative = !t.negative, t;
      }
    }, {
      key: "add",
      value: function(t) {
        if (this.isInvalidate())
          return new u(t);
        var S = new u(t);
        if (S.isInvalidate())
          return this;
        var w = Math.max(this.getDecimalStr().length, S.getDecimalStr().length), O = this.alignDecimal(w), R = S.alignDecimal(w), M = (O + R).toString(), q = (0, m.trimNumber)(M), _ = q.negativeStr, I = q.trimStr, h = "".concat(_).concat(I.padStart(w + 1, "0"));
        return new u("".concat(h.slice(0, -w), ".").concat(h.slice(-w)));
      }
    }, {
      key: "isEmpty",
      value: function() {
        return this.empty;
      }
    }, {
      key: "isNaN",
      value: function() {
        return this.nan;
      }
    }, {
      key: "isInvalidate",
      value: function() {
        return this.isEmpty() || this.isNaN();
      }
    }, {
      key: "equals",
      value: function(t) {
        return this.toString() === (t == null ? void 0 : t.toString());
      }
    }, {
      key: "lessEquals",
      value: function(t) {
        return this.add(t.negate().toString()).toNumber() <= 0;
      }
    }, {
      key: "toNumber",
      value: function() {
        return this.isNaN() ? NaN : Number(this.toString());
      }
    }, {
      key: "toString",
      value: function() {
        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
        return t ? this.isInvalidate() ? "" : (0, m.trimNumber)("".concat(this.getMark()).concat(this.getIntegerStr(), ".").concat(this.getDecimalStr())).fullStr : this.origin;
      }
    }]), u;
  }();
  L.BigIntDecimal = v;
  function p(u) {
    return (0, b.supportBigInt)() ? new v(u) : new l(u);
  }
  function g(u, n, t) {
    var S = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
    if (u === "")
      return "";
    var w = (0, m.trimNumber)(u), O = w.negativeStr, R = w.integerStr, M = w.decimalStr, q = "".concat(n).concat(M), _ = "".concat(O).concat(R);
    if (t >= 0) {
      var I = Number(M[t]);
      if (I >= 5 && !S) {
        var h = p(u).add("".concat(O, "0.").concat("0".repeat(t)).concat(10 - I));
        return g(h.toString(), n, t, S);
      }
      return t === 0 ? _ : "".concat(_).concat(n).concat(M.padEnd(t, "0").slice(0, t));
    }
    return q === ".0" ? _ : "".concat(_).concat(q);
  }
  return L;
}
var fe = {}, Ge;
function $t() {
  if (Ge)
    return fe;
  Ge = 1;
  var r = de.exports;
  Object.defineProperty(fe, "__esModule", {
    value: !0
  }), fe.default = void 0;
  var f = ne, i = r(Me()), d = r(Ie()), m = r(Pt()), b = r(Ee()), s = 200, l = 600, v = (0, f.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "StepHandler",
    inheritAttrs: !1,
    props: {
      prefixCls: String,
      upDisabled: Boolean,
      downDisabled: Boolean,
      onStep: {
        type: Function
      }
    },
    slots: ["upNode", "downNode"],
    setup: function(g, u) {
      var n = u.slots, t = u.emit, S = (0, f.ref)(), w = function(M, q) {
        M.preventDefault(), t("step", q);
        function _() {
          t("step", q), S.value = setTimeout(_, s);
        }
        S.value = setTimeout(_, l);
      }, O = function() {
        clearTimeout(S.value);
      };
      return (0, f.onBeforeUnmount)(function() {
        O();
      }), function() {
        if ((0, m.default)())
          return null;
        var R = g.prefixCls, M = g.upDisabled, q = g.downDisabled, _ = "".concat(R, "-handler"), I = (0, b.default)(_, "".concat(_, "-up"), (0, d.default)({}, "".concat(_, "-up-disabled"), M)), h = (0, b.default)(_, "".concat(_, "-down"), (0, d.default)({}, "".concat(_, "-down-disabled"), q)), a = {
          unselectable: "on",
          role: "button",
          onMouseup: O,
          onMouseleave: O
        }, N = n.upNode, C = n.downNode;
        return (0, f.createVNode)("div", {
          class: "".concat(_, "-wrap")
        }, [(0, f.createVNode)("span", (0, i.default)((0, i.default)({}, a), {}, {
          onMousedown: function(P) {
            w(P, !0);
          },
          "aria-label": "Increase Value",
          "aria-disabled": M,
          class: I
        }), [(N == null ? void 0 : N()) || (0, f.createVNode)("span", {
          unselectable: "on",
          class: "".concat(R, "-handler-up-inner")
        }, null)]), (0, f.createVNode)("span", (0, i.default)((0, i.default)({}, a), {}, {
          onMousedown: function(P) {
            w(P, !1);
          },
          "aria-label": "Decrease Value",
          "aria-disabled": q,
          class: h
        }), [(C == null ? void 0 : C()) || (0, f.createVNode)("span", {
          unselectable: "on",
          class: "".concat(R, "-handler-down-inner")
        }, null)])]);
      };
    }
  });
  return fe.default = v, fe;
}
var ye = {}, Le;
function kt() {
  if (Le)
    return ye;
  Le = 1, Object.defineProperty(ye, "__esModule", {
    value: !0
  }), ye.default = i;
  var r = St(), f = ne;
  function i(d, m) {
    var b = (0, f.ref)(null);
    function s() {
      try {
        var v = d.value, p = v.selectionStart, g = v.selectionEnd, u = v.value, n = u.substring(0, p), t = u.substring(g);
        b.value = {
          start: p,
          end: g,
          value: u,
          beforeTxt: n,
          afterTxt: t
        };
      } catch {
      }
    }
    function l() {
      if (d.value && b.value && m.value)
        try {
          var v = d.value.value, p = b.value, g = p.beforeTxt, u = p.afterTxt, n = p.start, t = v.length;
          if (v.endsWith(u))
            t = v.length - b.value.afterTxt.length;
          else if (v.startsWith(g))
            t = g.length;
          else {
            var S = g[n - 1], w = v.indexOf(S, n - 1);
            w !== -1 && (t = w + 1);
          }
          d.value.setSelectionRange(t, t);
        } catch (O) {
          (0, r.warning)(!1, "Something warning of cursor restore. Please fire issue about this: ".concat(O.message));
        }
    }
    return [s, l];
  }
  return ye;
}
var se = {}, Ke;
function Wt() {
  if (Ke)
    return se;
  Ke = 1;
  var r = de.exports;
  Object.defineProperty(se, "__esModule", {
    value: !0
  }), se.default = void 0;
  var f = r(qt()), i = ne, d = function() {
    var b = (0, i.ref)(0), s = function() {
      f.default.cancel(b.value);
    };
    return (0, i.onBeforeUnmount)(function() {
      s();
    }), function(l) {
      s(), b.value = (0, f.default)(function() {
        l();
      });
    };
  };
  return se.default = d, se;
}
var Xe;
function Tt() {
  if (Xe)
    return Z;
  Xe = 1;
  var r = de.exports, f = qe.exports;
  Object.defineProperty(Z, "__esModule", {
    value: !0
  }), Z.inputNumberProps = Z.default = void 0;
  var i = ne, d = r(Ie()), m = r(Qe()), b = r(_t()), s = r(qe.exports), l = r(Me()), v = R(At()), p = r($t()), g = et(), u = r(kt()), n = r(Wt()), t = r(Mt()), S = r(Ee()), w = ["prefixCls", "min", "max", "step", "defaultValue", "value", "disabled", "readonly", "keyboard", "controls", "autofocus", "stringMode", "parser", "formatter", "precision", "decimalSeparator", "onChange", "onInput", "onPressEnter", "onStep", "lazy", "class", "style"];
  function O(h) {
    if (typeof WeakMap != "function")
      return null;
    var a = /* @__PURE__ */ new WeakMap(), N = /* @__PURE__ */ new WeakMap();
    return (O = function(U) {
      return U ? N : a;
    })(h);
  }
  function R(h, a) {
    if (!a && h && h.__esModule)
      return h;
    if (h === null || f(h) !== "object" && typeof h != "function")
      return { default: h };
    var N = O(a);
    if (N && N.has(h))
      return N.get(h);
    var C = {}, U = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var P in h)
      if (P !== "default" && Object.prototype.hasOwnProperty.call(h, P)) {
        var W = U ? Object.getOwnPropertyDescriptor(h, P) : null;
        W && (W.get || W.set) ? Object.defineProperty(C, P, W) : C[P] = h[P];
      }
    return C.default = h, N && N.set(h, C), C;
  }
  var M = function(a, N) {
    return a || N.isEmpty() ? N.toString() : N.toNumber();
  }, q = function(a) {
    var N = (0, v.default)(a);
    return N.isInvalidate() ? null : N;
  }, _ = function() {
    return {
      stringMode: {
        type: Boolean
      },
      defaultValue: {
        type: [String, Number]
      },
      value: {
        type: [String, Number]
      },
      prefixCls: {
        type: String
      },
      min: {
        type: [String, Number]
      },
      max: {
        type: [String, Number]
      },
      step: {
        type: [String, Number],
        default: 1
      },
      tabindex: {
        type: Number
      },
      controls: {
        type: Boolean,
        default: !0
      },
      readonly: {
        type: Boolean
      },
      disabled: {
        type: Boolean
      },
      autofocus: {
        type: Boolean
      },
      keyboard: {
        type: Boolean,
        default: !0
      },
      parser: {
        type: Function
      },
      formatter: {
        type: Function
      },
      precision: {
        type: Number
      },
      decimalSeparator: {
        type: String
      },
      onInput: {
        type: Function
      },
      onChange: {
        type: Function
      },
      onPressEnter: {
        type: Function
      },
      onStep: {
        type: Function
      },
      onBlur: {
        type: Function
      },
      onFocus: {
        type: Function
      }
    };
  };
  Z.inputNumberProps = _;
  var I = (0, i.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "InnerInputNumber",
    inheritAttrs: !1,
    props: (0, l.default)((0, l.default)({}, _()), {}, {
      lazy: Boolean
    }),
    slots: ["upHandler", "downHandler"],
    setup: function(a, N) {
      var C = N.attrs, U = N.slots, P = N.emit, W = N.expose, j = (0, i.ref)(), z = (0, i.ref)(!1), T = (0, i.ref)(!1), G = (0, i.ref)(!1), D = (0, i.ref)((0, v.default)(a.value));
      function ce(c) {
        a.value === void 0 && (D.value = c);
      }
      var ue = function(e, y) {
        if (!y)
          return a.precision >= 0 ? a.precision : Math.max((0, g.getNumberPrecision)(e), (0, g.getNumberPrecision)(a.step));
      }, ie = function(e) {
        var y = String(e);
        if (a.parser)
          return a.parser(y);
        var o = y;
        return a.decimalSeparator && (o = o.replace(a.decimalSeparator, ".")), o.replace(/[^\w.-]+/g, "");
      }, H = (0, i.ref)(""), x = function(e, y) {
        if (a.formatter)
          return a.formatter(e, {
            userTyping: y,
            input: String(H.value)
          });
        var o = typeof e == "number" ? (0, g.num2str)(e) : e;
        if (!y) {
          var V = ue(o, y);
          if ((0, g.validateNumber)(o) && (a.decimalSeparator || V >= 0)) {
            var F = a.decimalSeparator || ".";
            o = (0, v.toFixed)(o, F, V);
          }
        }
        return o;
      }, ee = function() {
        var c = a.value;
        return D.value.isInvalidate() && ["string", "number"].includes((0, s.default)(c)) ? Number.isNaN(c) ? "" : c : x(D.value.toString(), !1);
      }();
      H.value = ee;
      function Y(c, e) {
        H.value = x(
          c.isInvalidate() ? c.toString(!1) : c.toString(!e),
          e
        );
      }
      var A = (0, i.computed)(function() {
        return q(a.max);
      }), K = (0, i.computed)(function() {
        return q(a.min);
      }), $ = (0, i.computed)(function() {
        return !A.value || !D.value || D.value.isInvalidate() ? !1 : A.value.lessEquals(D.value);
      }), ve = (0, i.computed)(function() {
        return !K.value || !D.value || D.value.isInvalidate() ? !1 : D.value.lessEquals(K.value);
      }), J = (0, u.default)(j, z), te = (0, b.default)(J, 2), pe = te[0], we = te[1], me = function(e) {
        return A.value && !e.lessEquals(A.value) ? A.value : K.value && !K.value.lessEquals(e) ? K.value : null;
      }, ge = function(e) {
        return !me(e);
      }, le = function(e, y) {
        var o = e, V = ge(o) || o.isEmpty();
        if (!o.isEmpty() && !y && (o = me(o) || o, V = !0), !a.readonly && !a.disabled && V) {
          var F = o.toString(), Q = ue(F, y);
          if (Q >= 0 && (o = (0, v.default)((0, v.toFixed)(F, ".", Q))), !o.equals(D.value)) {
            var oe;
            ce(o), (oe = a.onChange) === null || oe === void 0 || oe.call(a, o.isEmpty() ? null : M(a.stringMode, o)), a.value === void 0 && Y(o, y);
          }
          return o;
        }
        return D.value;
      }, be = (0, n.default)(), Ve = function c(e) {
        var y;
        if (pe(), H.value = e, !G.value) {
          var o = ie(e), V = (0, v.default)(o);
          V.isNaN() || le(V, !0);
        }
        (y = a.onInput) === null || y === void 0 || y.call(a, e), be(function() {
          var F = e;
          a.parser || (F = e.replace(/。/g, ".")), F !== e && c(F);
        });
      }, it = function() {
        G.value = !0;
      }, lt = function() {
        G.value = !1, Ve(j.value.value);
      }, Be = function(e) {
        Ve(e.target.value);
      }, Re = function(e) {
        var y, o;
        if (!(e && $.value || !e && ve.value)) {
          T.value = !1;
          var V = (0, v.default)(a.step);
          e || (V = V.negate());
          var F = (D.value || (0, v.default)(0)).add(V.toString()), Q = le(F, !1);
          (y = a.onStep) === null || y === void 0 || y.call(a, M(a.stringMode, Q), {
            offset: a.step,
            type: e ? "up" : "down"
          }), (o = j.value) === null || o === void 0 || o.focus();
        }
      }, Fe = function(e) {
        var y = (0, v.default)(ie(H.value)), o = y;
        y.isNaN() ? o = D.value : o = le(y, e), a.value !== void 0 ? Y(D.value, !1) : o.isNaN() || Y(o, !1);
      }, ot = function(e) {
        var y = e.which;
        if (T.value = !0, y === t.default.ENTER) {
          var o;
          G.value || (T.value = !1), Fe(!1), (o = a.onPressEnter) === null || o === void 0 || o.call(a, e);
        }
        a.keyboard !== !1 && !G.value && [t.default.UP, t.default.DOWN].includes(y) && (Re(t.default.UP === y), e.preventDefault());
      }, ft = function() {
        T.value = !1;
      }, st = function(e) {
        Fe(!1), z.value = !1, T.value = !1, P("blur", e);
      };
      return (0, i.watch)(function() {
        return a.precision;
      }, function() {
        D.value.isInvalidate() || Y(D.value, !1);
      }, {
        flush: "post"
      }), (0, i.watch)(function() {
        return a.value;
      }, function() {
        var c = (0, v.default)(a.value);
        D.value = c;
        var e = (0, v.default)(ie(H.value));
        (!c.equals(e) || !T.value || a.formatter) && Y(c, T.value);
      }, {
        flush: "post"
      }), (0, i.watch)(H, function() {
        a.formatter && we();
      }, {
        flush: "post"
      }), (0, i.watch)(function() {
        return a.disabled;
      }, function(c) {
        c && (z.value = !1);
      }), W({
        focus: function() {
          var e;
          (e = j.value) === null || e === void 0 || e.focus();
        },
        blur: function() {
          var e;
          (e = j.value) === null || e === void 0 || e.blur();
        }
      }), function() {
        var c, e = (0, l.default)((0, l.default)({}, C), a), y = e.prefixCls, o = y === void 0 ? "rc-input-number" : y, V = e.min, F = e.max, Q = e.step, oe = Q === void 0 ? 1 : Q;
        e.defaultValue, e.value;
        var Ue = e.disabled, Ae = e.readonly;
        e.keyboard;
        var $e = e.controls, dt = $e === void 0 ? !0 : $e, ct = e.autofocus;
        e.stringMode, e.parser, e.formatter, e.precision, e.decimalSeparator, e.onChange, e.onInput, e.onPressEnter, e.onStep;
        var vt = e.lazy, pt = e.class, mt = e.style, gt = (0, m.default)(e, w), bt = U.upHandler, Nt = U.downHandler, ke = "".concat(o, "-input"), De = {};
        return vt ? De.onChange = Be : De.onInput = Be, (0, i.createVNode)("div", {
          class: (0, S.default)(o, pt, (c = {}, (0, d.default)(c, "".concat(o, "-focused"), z.value), (0, d.default)(c, "".concat(o, "-disabled"), Ue), (0, d.default)(c, "".concat(o, "-readonly"), Ae), (0, d.default)(c, "".concat(o, "-not-a-number"), D.value.isNaN()), (0, d.default)(c, "".concat(o, "-out-of-range"), !D.value.isInvalidate() && !ge(D.value)), c)),
          style: mt,
          onKeydown: ot,
          onKeyup: ft
        }, [dt && (0, i.createVNode)(p.default, {
          prefixCls: o,
          upDisabled: $.value,
          downDisabled: ve.value,
          onStep: Re
        }, {
          upNode: bt,
          downNode: Nt
        }), (0, i.createVNode)("div", {
          class: "".concat(ke, "-wrap")
        }, [(0, i.createVNode)("input", (0, l.default)((0, l.default)((0, l.default)({
          autofocus: ct,
          autocomplete: "off",
          role: "spinbutton",
          "aria-valuemin": V,
          "aria-valuemax": F,
          "aria-valuenow": D.value.isInvalidate() ? null : D.value.toString(),
          step: oe
        }, gt), {}, {
          ref: j,
          class: ke,
          value: H.value,
          disabled: Ue,
          readonly: Ae,
          onFocus: function(ht) {
            z.value = !0, P("focus", ht);
          }
        }, De), {}, {
          onBlur: st,
          onCompositionstart: it,
          onCompositionend: lt
        }), null)])]);
      };
    }
  });
  return Z.default = I, Z;
}
var Se = {}, Ye;
function Ht() {
  if (Ye)
    return Se;
  Ye = 1, Object.defineProperty(Se, "__esModule", {
    value: !0
  }), Se.default = r;
  function r(f) {
    return f != null;
  }
  return Se;
}
var k = de.exports, jt = qe.exports;
Object.defineProperty(ae, "__esModule", {
  value: !0
});
var tt = ae.inputNumberProps = ut = ae.default = void 0, B = ne, zt = k(It()), E = k(Ie()), Gt = k(Qe()), re = k(Me()), _e = k(Ee()), Lt = k(Ut()), Kt = k(xt()), rt = er(Tt()), Xt = Et(), Yt = k(wt()), Jt = Vt(), Qt = k(Bt()), Oe = k(Dt()), Ce = k(Ht()), Zt = ["class", "bordered", "readonly", "style", "addonBefore", "addonAfter", "prefix", "valueModifiers"];
function at(r) {
  if (typeof WeakMap != "function")
    return null;
  var f = /* @__PURE__ */ new WeakMap(), i = /* @__PURE__ */ new WeakMap();
  return (at = function(m) {
    return m ? i : f;
  })(r);
}
function er(r, f) {
  if (!f && r && r.__esModule)
    return r;
  if (r === null || jt(r) !== "object" && typeof r != "function")
    return { default: r };
  var i = at(f);
  if (i && i.has(r))
    return i.get(r);
  var d = {}, m = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var b in r)
    if (b !== "default" && Object.prototype.hasOwnProperty.call(r, b)) {
      var s = m ? Object.getOwnPropertyDescriptor(r, b) : null;
      s && (s.get || s.set) ? Object.defineProperty(d, b, s) : d[b] = r[b];
    }
  return d.default = r, i && i.set(r, d), d;
}
var Je = (0, rt.inputNumberProps)(), nt = function() {
  return (0, re.default)((0, re.default)({}, Je), {}, {
    size: {
      type: String
    },
    bordered: {
      type: Boolean,
      default: !0
    },
    placeholder: String,
    name: String,
    id: String,
    type: String,
    addonBefore: Oe.default.any,
    addonAfter: Oe.default.any,
    prefix: Oe.default.any,
    "onUpdate:value": Je.onChange,
    valueModifiers: Object
  });
};
tt = ae.inputNumberProps = nt;
var Pe = (0, B.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: "AInputNumber",
  inheritAttrs: !1,
  props: nt(),
  slots: ["addonBefore", "addonAfter", "prefix"],
  setup: function(f, i) {
    var d = i.emit, m = i.expose, b = i.attrs, s = i.slots, l = (0, Xt.useInjectFormItemContext)(), v = (0, Yt.default)("input-number", f), p = v.prefixCls, g = v.size, u = v.direction, n = (0, B.ref)(f.value === void 0 ? f.defaultValue : f.value), t = (0, B.ref)(!1);
    (0, B.watch)(function() {
      return f.value;
    }, function() {
      n.value = f.value;
    });
    var S = (0, B.ref)(null), w = function() {
      var I;
      (I = S.value) === null || I === void 0 || I.focus();
    }, O = function() {
      var I;
      (I = S.value) === null || I === void 0 || I.blur();
    };
    m({
      focus: w,
      blur: O
    });
    var R = function(I) {
      f.value === void 0 && (n.value = I), d("update:value", I), d("change", I), l.onFieldChange();
    }, M = function(I) {
      t.value = !1, d("blur", I), l.onFieldBlur();
    }, q = function(I) {
      t.value = !0, d("focus", I);
    };
    return function() {
      var _, I, h, a, N = (0, re.default)((0, re.default)({}, b), f), C = N.class, U = N.bordered, P = N.readonly, W = N.style, j = N.addonBefore, z = j === void 0 ? (_ = s.addonBefore) === null || _ === void 0 ? void 0 : _.call(s) : j, T = N.addonAfter, G = T === void 0 ? (I = s.addonAfter) === null || I === void 0 ? void 0 : I.call(s) : T, D = N.prefix, ce = D === void 0 ? (h = s.prefix) === null || h === void 0 ? void 0 : h.call(s) : D, ue = N.valueModifiers, ie = ue === void 0 ? {} : ue, H = (0, Gt.default)(N, Zt), x = p.value, ee = g.value, Y = (0, _e.default)((a = {}, (0, E.default)(a, "".concat(x, "-lg"), ee === "large"), (0, E.default)(a, "".concat(x, "-sm"), ee === "small"), (0, E.default)(a, "".concat(x, "-rtl"), u.value === "rtl"), (0, E.default)(a, "".concat(x, "-readonly"), P), (0, E.default)(a, "".concat(x, "-borderless"), !U), a), C), A = (0, B.createVNode)(rt.default, (0, re.default)((0, re.default)({}, (0, Qt.default)(H, ["size", "defaultValue"])), {}, {
        ref: S,
        lazy: !!ie.lazy,
        value: n.value,
        class: Y,
        prefixCls: x,
        readonly: P,
        onChange: R,
        onBlur: M,
        onFocus: q
      }), {
        upHandler: function() {
          return (0, B.createVNode)(Lt.default, {
            class: "".concat(x, "-handler-up-inner")
          }, null);
        },
        downHandler: function() {
          return (0, B.createVNode)(Kt.default, {
            class: "".concat(x, "-handler-down-inner")
          }, null);
        }
      }), K = (0, Ce.default)(z) || (0, Ce.default)(G);
      if ((0, Ce.default)(ce)) {
        var $, ve = (0, _e.default)("".concat(x, "-affix-wrapper"), ($ = {}, (0, E.default)($, "".concat(x, "-affix-wrapper-focused"), t.value), (0, E.default)($, "".concat(x, "-affix-wrapper-disabled"), f.disabled), (0, E.default)($, "".concat(x, "-affix-wrapper-rtl"), u.value === "rtl"), (0, E.default)($, "".concat(x, "-affix-wrapper-readonly"), P), (0, E.default)($, "".concat(x, "-affix-wrapper-borderless"), !U), (0, E.default)($, "".concat(C), !K && C), $));
        A = (0, B.createVNode)("div", {
          class: ve,
          style: W,
          onMouseup: function() {
            return S.value.focus();
          }
        }, [(0, B.createVNode)("span", {
          class: "".concat(x, "-prefix")
        }, [ce]), A]);
      }
      if (K) {
        var J, te = "".concat(x, "-group"), pe = "".concat(te, "-addon"), we = z ? (0, B.createVNode)("div", {
          class: pe
        }, [z]) : null, me = G ? (0, B.createVNode)("div", {
          class: pe
        }, [G]) : null, ge = (0, _e.default)("".concat(x, "-wrapper"), te, (0, E.default)({}, "".concat(te, "-rtl"), u.value === "rtl")), le = (0, _e.default)("".concat(x, "-group-wrapper"), (J = {}, (0, E.default)(J, "".concat(x, "-group-wrapper-sm"), ee === "small"), (0, E.default)(J, "".concat(x, "-group-wrapper-lg"), ee === "large"), (0, E.default)(J, "".concat(x, "-group-wrapper-rtl"), u.value === "rtl"), J), C);
        A = (0, B.createVNode)("div", {
          class: le,
          style: W
        }, [(0, B.createVNode)("div", {
          class: ge
        }, [we, A, me])]);
      }
      return (0, Jt.cloneElement)(A, {
        style: W
      });
    };
  }
}), tr = (0, zt.default)(Pe, {
  install: function(f) {
    return f.component(Pe.name, Pe), f;
  }
}), ut = ae.default = tr;
const pr = /* @__PURE__ */ Rt({
  __proto__: null,
  get inputNumberProps() {
    return tt;
  },
  get default() {
    return ut;
  }
}, [ae]);
export {
  pr as i
};
