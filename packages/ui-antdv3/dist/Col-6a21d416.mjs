import { a as L, r as k, i as U, g as H, e as J, h as Z, f as X } from "./useConfigInject-f0dbb416.mjs";
import { _ as K } from "./index-5fc6c346.mjs";
import { r as ee } from "./useFlexGapSupport-a4f1c6a3.mjs";
var G = {}, S = {}, T;
function re() {
  if (T)
    return S;
  T = 1;
  var u = U;
  Object.defineProperty(S, "__esModule", {
    value: !0
  }), S.responsiveMap = S.responsiveArray = S.default = void 0;
  var g = u(L()), r = u(k()), _ = ["xxxl", "xxl", "xl", "lg", "md", "sm", "xs"];
  S.responsiveArray = _;
  var f = {
    xs: "(max-width: 575px)",
    sm: "(min-width: 576px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 992px)",
    xl: "(min-width: 1200px)",
    xxl: "(min-width: 1600px)",
    xxxl: "(min-width: 2000px)"
  };
  S.responsiveMap = f;
  var p = /* @__PURE__ */ new Map(), O = -1, w = {}, W = {
    matchHandlers: {},
    dispatch: function(a) {
      return w = a, p.forEach(function(c) {
        return c(w);
      }), p.size >= 1;
    },
    subscribe: function(a) {
      return p.size || this.register(), O += 1, p.set(O, a), a(w), O;
    },
    unsubscribe: function(a) {
      p.delete(a), p.size || this.unregister();
    },
    unregister: function() {
      var a = this;
      Object.keys(f).forEach(function(c) {
        var C = f[c], s = a.matchHandlers[C];
        s == null || s.mql.removeListener(s == null ? void 0 : s.listener);
      }), p.clear();
    },
    register: function() {
      var a = this;
      Object.keys(f).forEach(function(c) {
        var C = f[c], s = function(i) {
          var m = i.matches;
          a.dispatch((0, r.default)((0, r.default)({}, w), {}, (0, g.default)({}, c, m)));
        }, P = window.matchMedia(C);
        P.addListener(s), a.matchHandlers[C] = {
          mql: P,
          listener: s
        }, s(P);
      });
    }
  }, F = W;
  return S.default = F, S;
}
var j = {}, V;
function Y() {
  if (V)
    return j;
  V = 1, Object.defineProperty(j, "__esModule", {
    value: !0
  }), j.useProvideRow = j.useInjectRow = j.default = j.RowContextKey = void 0;
  var u = H, g = Symbol("rowContextKey");
  j.RowContextKey = g;
  var r = function(O) {
    (0, u.provide)(g, O);
  };
  j.useProvideRow = r;
  var _ = function() {
    return (0, u.inject)(g, {
      gutter: (0, u.computed)(function() {
      }),
      wrap: (0, u.computed)(function() {
      }),
      supportFlexGap: (0, u.computed)(function() {
      })
    });
  };
  j.useInjectRow = _;
  var f = r;
  return j.default = f, j;
}
var z;
function ue() {
  if (z)
    return G;
  z = 1;
  var u = U, g = K;
  Object.defineProperty(G, "__esModule", {
    value: !0
  }), G.rowProps = G.default = void 0;
  var r = H, _ = u(L()), f = u(K), p = u(J()), O = Z(), w = c(re()), W = u(X()), F = u(ee()), q = u(Y());
  function a(n) {
    if (typeof WeakMap != "function")
      return null;
    var i = /* @__PURE__ */ new WeakMap(), m = /* @__PURE__ */ new WeakMap();
    return (a = function(N) {
      return N ? m : i;
    })(n);
  }
  function c(n, i) {
    if (!i && n && n.__esModule)
      return n;
    if (n === null || g(n) !== "object" && typeof n != "function")
      return { default: n };
    var m = a(i);
    if (m && m.has(n))
      return m.get(n);
    var y = {}, N = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var d in n)
      if (d !== "default" && Object.prototype.hasOwnProperty.call(n, d)) {
        var M = N ? Object.getOwnPropertyDescriptor(n, d) : null;
        M && (M.get || M.set) ? Object.defineProperty(y, d, M) : y[d] = n[d];
      }
    return y.default = n, m && m.set(n, y), y;
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
  G.rowProps = C;
  var s = (0, r.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "ARow",
    props: C(),
    setup: function(i, m) {
      var y = m.slots, N = (0, W.default)("row", i), d = N.prefixCls, M = N.direction, $, l = (0, r.ref)({
        xs: !0,
        sm: !0,
        md: !0,
        lg: !0,
        xl: !0,
        xxl: !0,
        xxxl: !0
      }), b = (0, F.default)();
      (0, r.onMounted)(function() {
        $ = w.default.subscribe(function(t) {
          var e = i.gutter || 0;
          (!Array.isArray(e) && (0, f.default)(e) === "object" || Array.isArray(e) && ((0, f.default)(e[0]) === "object" || (0, f.default)(e[1]) === "object")) && (l.value = t);
        });
      }), (0, r.onBeforeUnmount)(function() {
        w.default.unsubscribe($);
      });
      var v = (0, r.computed)(function() {
        var t = [0, 0], e = i.gutter, R = e === void 0 ? 0 : e, h = Array.isArray(R) ? R : [R, 0];
        return h.forEach(function(x, o) {
          if ((0, f.default)(x) === "object")
            for (var A = 0; A < w.responsiveArray.length; A++) {
              var B = w.responsiveArray[A];
              if (l.value[B] && x[B] !== void 0) {
                t[o] = x[B];
                break;
              }
            }
          else
            t[o] = x || 0;
        }), t;
      });
      (0, q.default)({
        gutter: v,
        supportFlexGap: b,
        wrap: (0, r.computed)(function() {
          return i.wrap;
        })
      });
      var I = (0, r.computed)(function() {
        var t;
        return (0, p.default)(d.value, (t = {}, (0, _.default)(t, "".concat(d.value, "-no-wrap"), i.wrap === !1), (0, _.default)(t, "".concat(d.value, "-").concat(i.justify), i.justify), (0, _.default)(t, "".concat(d.value, "-").concat(i.align), i.align), (0, _.default)(t, "".concat(d.value, "-rtl"), M.value === "rtl"), t));
      }), D = (0, r.computed)(function() {
        var t = v.value, e = {}, R = t[0] > 0 ? "".concat(t[0] / -2, "px") : void 0, h = t[1] > 0 ? "".concat(t[1] / -2, "px") : void 0;
        return R && (e.marginLeft = R, e.marginRight = R), b.value ? e.rowGap = "".concat(t[1], "px") : h && (e.marginTop = h, e.marginBottom = h), e;
      });
      return function() {
        var t;
        return (0, r.createVNode)("div", {
          class: I.value,
          style: D.value
        }, [(t = y.default) === null || t === void 0 ? void 0 : t.call(y)]);
      };
    }
  }), P = s;
  return G.default = P, G;
}
var E = {}, Q;
function oe() {
  if (Q)
    return E;
  Q = 1;
  var u = U;
  Object.defineProperty(E, "__esModule", {
    value: !0
  }), E.default = E.colProps = void 0;
  var g = H, r = u(L()), _ = u(k()), f = u(K), p = u(J()), O = u(X()), w = Y();
  function W(a) {
    return typeof a == "number" ? "".concat(a, " ").concat(a, " auto") : /^\d+(\.\d+)?(px|em|rem|%)$/.test(a) ? "0 0 ".concat(a) : a;
  }
  var F = function() {
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
  E.colProps = F;
  var q = (0, g.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "ACol",
    props: F(),
    setup: function(c, C) {
      var s = C.slots, P = (0, w.useInjectRow)(), n = P.gutter, i = P.supportFlexGap, m = P.wrap, y = (0, O.default)("col", c), N = y.prefixCls, d = y.direction, M = (0, g.computed)(function() {
        var l, b = c.span, v = c.order, I = c.offset, D = c.push, t = c.pull, e = N.value, R = {};
        return ["xs", "sm", "md", "lg", "xl", "xxl", "xxxl"].forEach(function(h) {
          var x, o = {}, A = c[h];
          typeof A == "number" ? o.span = A : (0, f.default)(A) === "object" && (o = A || {}), R = (0, _.default)((0, _.default)({}, R), {}, (x = {}, (0, r.default)(x, "".concat(e, "-").concat(h, "-").concat(o.span), o.span !== void 0), (0, r.default)(x, "".concat(e, "-").concat(h, "-order-").concat(o.order), o.order || o.order === 0), (0, r.default)(x, "".concat(e, "-").concat(h, "-offset-").concat(o.offset), o.offset || o.offset === 0), (0, r.default)(x, "".concat(e, "-").concat(h, "-push-").concat(o.push), o.push || o.push === 0), (0, r.default)(x, "".concat(e, "-").concat(h, "-pull-").concat(o.pull), o.pull || o.pull === 0), (0, r.default)(x, "".concat(e, "-rtl"), d.value === "rtl"), x));
        }), (0, p.default)(e, (l = {}, (0, r.default)(l, "".concat(e, "-").concat(b), b !== void 0), (0, r.default)(l, "".concat(e, "-order-").concat(v), v), (0, r.default)(l, "".concat(e, "-offset-").concat(I), I), (0, r.default)(l, "".concat(e, "-push-").concat(D), D), (0, r.default)(l, "".concat(e, "-pull-").concat(t), t), l), R);
      }), $ = (0, g.computed)(function() {
        var l = c.flex, b = n.value, v = {};
        if (b && b[0] > 0) {
          var I = "".concat(b[0] / 2, "px");
          v.paddingLeft = I, v.paddingRight = I;
        }
        if (b && b[1] > 0 && !i.value) {
          var D = "".concat(b[1] / 2, "px");
          v.paddingTop = D, v.paddingBottom = D;
        }
        return l && (v.flex = W(l), m.value === !1 && !v.minWidth && (v.minWidth = 0)), v;
      });
      return function() {
        var l;
        return (0, g.createVNode)("div", {
          class: M.value,
          style: $.value
        }, [(l = s.default) === null || l === void 0 ? void 0 : l.call(s)]);
      };
    }
  });
  return E.default = q, E;
}
export {
  ue as a,
  re as b,
  oe as r
};
