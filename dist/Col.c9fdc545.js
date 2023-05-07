import { r as k, b as X, k as z, d as Y, z as re, i as Z } from "./useConfigInject.fdc04e2e.js";
import { _ as L } from "./index.1fa3133f.js";
import { r as U } from "./_vue_commonjs-external.cdc460b2.js";
import { r as te } from "./styleChecker.856616fa.js";
var F = {}, P = {}, H;
function ae() {
  if (H)
    return P;
  H = 1;
  var a = z.exports;
  Object.defineProperty(P, "__esModule", {
    value: !0
  }), P.responsiveMap = P.responsiveArray = P.default = void 0;
  var d = a(k()), e = a(X()), y = ["xxxl", "xxl", "xl", "lg", "md", "sm", "xs"];
  P.responsiveArray = y;
  var l = {
    xs: "(max-width: 575px)",
    sm: "(min-width: 576px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 992px)",
    xl: "(min-width: 1200px)",
    xxl: "(min-width: 1600px)",
    xxxl: "(min-width: 2000px)"
  };
  P.responsiveMap = l;
  var m = /* @__PURE__ */ new Map(), O = -1, w = {}, E = {
    matchHandlers: {},
    dispatch: function(n) {
      return w = n, m.forEach(function(c) {
        return c(w);
      }), m.size >= 1;
    },
    subscribe: function(n) {
      return m.size || this.register(), O += 1, m.set(O, n), n(w), O;
    },
    unsubscribe: function(n) {
      m.delete(n), m.size || this.unregister();
    },
    unregister: function() {
      var n = this;
      Object.keys(l).forEach(function(c) {
        var C = l[c], f = n.matchHandlers[C];
        f == null || f.mql.removeListener(f == null ? void 0 : f.listener);
      }), m.clear();
    },
    register: function() {
      var n = this;
      Object.keys(l).forEach(function(c) {
        var C = l[c], f = function(i) {
          var x = i.matches;
          n.dispatch((0, e.default)((0, e.default)({}, w), {}, (0, d.default)({}, c, x)));
        }, S = window.matchMedia(C);
        S.addListener(f), n.matchHandlers[C] = {
          mql: S,
          listener: f
        }, f(S);
      });
    }
  }, W = E;
  return P.default = W, P;
}
var $ = {}, T;
function ne() {
  if (T)
    return $;
  T = 1, Object.defineProperty($, "__esModule", {
    value: !0
  }), $.default = void 0;
  var a = U, d = te(), e = function() {
    var l = (0, a.ref)(!1);
    return (0, a.onMounted)(function() {
      l.value = (0, d.detectFlexGapSupported)();
    }), l;
  };
  return $.default = e, $;
}
var j = {}, V;
function ee() {
  if (V)
    return j;
  V = 1, Object.defineProperty(j, "__esModule", {
    value: !0
  }), j.useProvideRow = j.useInjectRow = j.default = j.RowContextKey = void 0;
  var a = U, d = Symbol("rowContextKey");
  j.RowContextKey = d;
  var e = function(O) {
    (0, a.provide)(d, O);
  };
  j.useProvideRow = e;
  var y = function() {
    return (0, a.inject)(d, {
      gutter: (0, a.computed)(function() {
      }),
      wrap: (0, a.computed)(function() {
      }),
      supportFlexGap: (0, a.computed)(function() {
      })
    });
  };
  j.useInjectRow = y;
  var l = e;
  return j.default = l, j;
}
var Q;
function ce() {
  if (Q)
    return F;
  Q = 1;
  var a = z.exports, d = L.exports;
  Object.defineProperty(F, "__esModule", {
    value: !0
  }), F.rowProps = F.default = void 0;
  var e = U, y = a(k()), l = a(L.exports), m = a(Y()), O = re(), w = c(ae()), E = a(Z()), W = a(ne()), q = a(ee());
  function n(u) {
    if (typeof WeakMap != "function")
      return null;
    var i = /* @__PURE__ */ new WeakMap(), x = /* @__PURE__ */ new WeakMap();
    return (n = function(N) {
      return N ? x : i;
    })(u);
  }
  function c(u, i) {
    if (!i && u && u.__esModule)
      return u;
    if (u === null || d(u) !== "object" && typeof u != "function")
      return { default: u };
    var x = n(i);
    if (x && x.has(u))
      return x.get(u);
    var b = {}, N = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var p in u)
      if (p !== "default" && Object.prototype.hasOwnProperty.call(u, p)) {
        var M = N ? Object.getOwnPropertyDescriptor(u, p) : null;
        M && (M.get || M.set) ? Object.defineProperty(b, p, M) : b[p] = u[p];
      }
    return b.default = u, x && x.set(u, b), b;
  }
  (0, O.tuple)("top", "middle", "bottom", "stretch"), (0, O.tuple)("start", "end", "center", "space-around", "space-between");
  var C = function() {
    return {
      align: String,
      justify: String,
      prefixCls: String,
      gutter: {
        type: [Number, Array, Object],
        default: 0
      },
      wrap: {
        type: Boolean,
        default: void 0
      }
    };
  };
  F.rowProps = C;
  var f = (0, e.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "ARow",
    props: C(),
    setup: function(i, x) {
      var b = x.slots, N = (0, E.default)("row", i), p = N.prefixCls, M = N.direction, B, s = (0, e.ref)({
        xs: !0,
        sm: !0,
        md: !0,
        lg: !0,
        xl: !0,
        xxl: !0,
        xxxl: !0
      }), h = (0, W.default)();
      (0, e.onMounted)(function() {
        B = w.default.subscribe(function(t) {
          var r = i.gutter || 0;
          (!Array.isArray(r) && (0, l.default)(r) === "object" || Array.isArray(r) && ((0, l.default)(r[0]) === "object" || (0, l.default)(r[1]) === "object")) && (s.value = t);
        });
      }), (0, e.onBeforeUnmount)(function() {
        w.default.unsubscribe(B);
      });
      var v = (0, e.computed)(function() {
        var t = [0, 0], r = i.gutter, R = r === void 0 ? 0 : r, _ = Array.isArray(R) ? R : [R, 0];
        return _.forEach(function(g, o) {
          if ((0, l.default)(g) === "object")
            for (var A = 0; A < w.responsiveArray.length; A++) {
              var K = w.responsiveArray[A];
              if (s.value[K] && g[K] !== void 0) {
                t[o] = g[K];
                break;
              }
            }
          else
            t[o] = g || 0;
        }), t;
      });
      (0, q.default)({
        gutter: v,
        supportFlexGap: h,
        wrap: (0, e.computed)(function() {
          return i.wrap;
        })
      });
      var G = (0, e.computed)(function() {
        var t;
        return (0, m.default)(p.value, (t = {}, (0, y.default)(t, "".concat(p.value, "-no-wrap"), i.wrap === !1), (0, y.default)(t, "".concat(p.value, "-").concat(i.justify), i.justify), (0, y.default)(t, "".concat(p.value, "-").concat(i.align), i.align), (0, y.default)(t, "".concat(p.value, "-rtl"), M.value === "rtl"), t));
      }), I = (0, e.computed)(function() {
        var t = v.value, r = {}, R = t[0] > 0 ? "".concat(t[0] / -2, "px") : void 0, _ = t[1] > 0 ? "".concat(t[1] / -2, "px") : void 0;
        return R && (r.marginLeft = R, r.marginRight = R), h.value ? r.rowGap = "".concat(t[1], "px") : _ && (r.marginTop = _, r.marginBottom = _), r;
      });
      return function() {
        var t;
        return (0, e.createVNode)("div", {
          class: G.value,
          style: I.value
        }, [(t = b.default) === null || t === void 0 ? void 0 : t.call(b)]);
      };
    }
  }), S = f;
  return F.default = S, F;
}
var D = {}, J;
function se() {
  if (J)
    return D;
  J = 1;
  var a = z.exports;
  Object.defineProperty(D, "__esModule", {
    value: !0
  }), D.default = D.colProps = void 0;
  var d = U, e = a(k()), y = a(X()), l = a(L.exports), m = a(Y()), O = a(Z()), w = ee();
  function E(n) {
    return typeof n == "number" ? "".concat(n, " ").concat(n, " auto") : /^\d+(\.\d+)?(px|em|rem|%)$/.test(n) ? "0 0 ".concat(n) : n;
  }
  var W = function() {
    return {
      span: [String, Number],
      order: [String, Number],
      offset: [String, Number],
      push: [String, Number],
      pull: [String, Number],
      xs: {
        type: [String, Number, Object],
        default: void 0
      },
      sm: {
        type: [String, Number, Object],
        default: void 0
      },
      md: {
        type: [String, Number, Object],
        default: void 0
      },
      lg: {
        type: [String, Number, Object],
        default: void 0
      },
      xl: {
        type: [String, Number, Object],
        default: void 0
      },
      xxl: {
        type: [String, Number, Object],
        default: void 0
      },
      xxxl: {
        type: [String, Number, Object],
        default: void 0
      },
      prefixCls: String,
      flex: [String, Number]
    };
  };
  D.colProps = W;
  var q = (0, d.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "ACol",
    props: W(),
    setup: function(c, C) {
      var f = C.slots, S = (0, w.useInjectRow)(), u = S.gutter, i = S.supportFlexGap, x = S.wrap, b = (0, O.default)("col", c), N = b.prefixCls, p = b.direction, M = (0, d.computed)(function() {
        var s, h = c.span, v = c.order, G = c.offset, I = c.push, t = c.pull, r = N.value, R = {};
        return ["xs", "sm", "md", "lg", "xl", "xxl", "xxxl"].forEach(function(_) {
          var g, o = {}, A = c[_];
          typeof A == "number" ? o.span = A : (0, l.default)(A) === "object" && (o = A || {}), R = (0, y.default)((0, y.default)({}, R), {}, (g = {}, (0, e.default)(g, "".concat(r, "-").concat(_, "-").concat(o.span), o.span !== void 0), (0, e.default)(g, "".concat(r, "-").concat(_, "-order-").concat(o.order), o.order || o.order === 0), (0, e.default)(g, "".concat(r, "-").concat(_, "-offset-").concat(o.offset), o.offset || o.offset === 0), (0, e.default)(g, "".concat(r, "-").concat(_, "-push-").concat(o.push), o.push || o.push === 0), (0, e.default)(g, "".concat(r, "-").concat(_, "-pull-").concat(o.pull), o.pull || o.pull === 0), (0, e.default)(g, "".concat(r, "-rtl"), p.value === "rtl"), g));
        }), (0, m.default)(r, (s = {}, (0, e.default)(s, "".concat(r, "-").concat(h), h !== void 0), (0, e.default)(s, "".concat(r, "-order-").concat(v), v), (0, e.default)(s, "".concat(r, "-offset-").concat(G), G), (0, e.default)(s, "".concat(r, "-push-").concat(I), I), (0, e.default)(s, "".concat(r, "-pull-").concat(t), t), s), R);
      }), B = (0, d.computed)(function() {
        var s = c.flex, h = u.value, v = {};
        if (h && h[0] > 0) {
          var G = "".concat(h[0] / 2, "px");
          v.paddingLeft = G, v.paddingRight = G;
        }
        if (h && h[1] > 0 && !i.value) {
          var I = "".concat(h[1] / 2, "px");
          v.paddingTop = I, v.paddingBottom = I;
        }
        return s && (v.flex = E(s), x.value === !1 && !v.minWidth && (v.minWidth = 0)), v;
      });
      return function() {
        var s;
        return (0, d.createVNode)("div", {
          class: M.value,
          style: B.value
        }, [(s = f.default) === null || s === void 0 ? void 0 : s.call(f)]);
      };
    }
  });
  return D.default = q, D;
}
export {
  ce as a,
  ae as b,
  se as r
};
