import { g as Q, r as ne, o as le, e as ie, j as oe, i as Z } from "./useConfigInject-f0dbb416.mjs";
import { r as pe } from "./index-292db55b.mjs";
var L = {}, U = {}, q = {}, Ce;
function Ne() {
  if (Ce)
    return q;
  Ce = 1, Object.defineProperty(q, "__esModule", {
    value: !0
  }), q.useInjectOverflowContext = q.OverflowContextProvider = void 0;
  var r = Q, e = Symbol("OverflowContextProviderKey"), a = (0, r.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "OverflowContextProvider",
    inheritAttrs: !1,
    props: {
      value: {
        type: Object
      }
    },
    setup: function(w, c) {
      var _ = c.slots;
      return (0, r.provide)(e, (0, r.computed)(function() {
        return w.value;
      })), function() {
        var v;
        return (v = _.default) === null || v === void 0 ? void 0 : v.call(_);
      };
    }
  });
  q.OverflowContextProvider = a;
  var y = function() {
    return (0, r.inject)(e, (0, r.computed)(function() {
      return null;
    }));
  };
  return q.useInjectOverflowContext = y, q;
}
var X = {}, xe;
function Oe() {
  if (xe)
    return X;
  xe = 1;
  var r = Z;
  Object.defineProperty(X, "__esModule", {
    value: !0
  }), X.default = void 0;
  var e = Q, a = r(ne()), y = r(le()), h = r(pe()), w = r(ie()), c = r(oe()), _ = ["prefixCls", "invalidate", "item", "renderItem", "responsive", "registerSize", "itemKey", "display", "order", "component"], v = void 0, k = (0, e.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "Item",
    props: {
      prefixCls: String,
      item: c.default.any,
      renderItem: Function,
      responsive: Boolean,
      itemKey: {
        type: [String, Number]
      },
      registerSize: Function,
      display: Boolean,
      order: Number,
      component: c.default.any,
      invalidate: Boolean
    },
    setup: function(l, V) {
      var g = V.slots, M = V.expose, f = (0, e.computed)(function() {
        return l.responsive && !l.display;
      }), R = (0, e.ref)();
      M({
        itemNodeRef: R
      });
      function C(t) {
        l.registerSize(l.itemKey, t);
      }
      return (0, e.onUnmounted)(function() {
        C(null);
      }), function() {
        var t, p = l.prefixCls, N = l.invalidate, E = l.item, O = l.renderItem, b = l.responsive;
        l.registerSize, l.itemKey, l.display;
        var I = l.order, s = l.component, S = s === void 0 ? "div" : s, F = (0, y.default)(l, _), P = (t = g.default) === null || t === void 0 ? void 0 : t.call(g), z = O && E !== v ? O(E) : P, x;
        N || (x = {
          opacity: f.value ? 0 : 1,
          height: f.value ? 0 : v,
          overflowY: f.value ? "hidden" : v,
          order: b ? I : v,
          pointerEvents: f.value ? "none" : v,
          position: f.value ? "absolute" : v
        });
        var K = {};
        return f.value && (K["aria-hidden"] = !0), (0, e.createVNode)(h.default, {
          disabled: !b,
          onResize: function($) {
            var D = $.offsetWidth;
            C(D);
          }
        }, {
          default: function() {
            return (0, e.createVNode)(S, (0, a.default)((0, a.default)((0, a.default)({
              class: (0, w.default)(!N && p),
              style: x
            }, K), F), {}, {
              ref: R
            }), {
              default: function() {
                return [z];
              }
            });
          }
        });
      };
    }
  });
  return X.default = k, X;
}
var H = {}, we;
function We() {
  if (we)
    return H;
  we = 1;
  var r = Z;
  Object.defineProperty(H, "__esModule", {
    value: !0
  }), H.default = void 0;
  var e = Q, a = r(ne()), y = r(le()), h = r(ie()), w = r(oe()), c = Ne(), _ = r(Oe()), v = ["component"], k = ["className"], Y = ["class"], l = (0, e.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "RawItem",
    inheritAttrs: !1,
    props: {
      component: w.default.any,
      title: w.default.any,
      id: String,
      onMouseenter: {
        type: Function
      },
      onMouseleave: {
        type: Function
      },
      onClick: {
        type: Function
      },
      onKeydown: {
        type: Function
      },
      onFocus: {
        type: Function
      }
    },
    setup: function(g, M) {
      var f = M.slots, R = M.attrs, C = (0, c.useInjectOverflowContext)();
      return function() {
        if (!C.value) {
          var t, p = g.component, N = p === void 0 ? "div" : p, E = (0, y.default)(g, v);
          return (0, e.createVNode)(N, (0, a.default)((0, a.default)({}, E), R), {
            default: function() {
              return [(t = f.default) === null || t === void 0 ? void 0 : t.call(f)];
            }
          });
        }
        var O = C.value, b = O.className, I = (0, y.default)(O, k), s = R.class, S = (0, y.default)(R, Y);
        return (0, e.createVNode)(c.OverflowContextProvider, {
          value: null
        }, {
          default: function() {
            return [(0, e.createVNode)(_.default, (0, a.default)((0, a.default)((0, a.default)({
              class: (0, h.default)(b, s)
            }, I), S), g), f)];
          }
        });
      };
    }
  });
  return H.default = l, H;
}
var ge;
function Te() {
  if (ge)
    return U;
  ge = 1;
  var r = Z;
  Object.defineProperty(U, "__esModule", {
    value: !0
  }), U.default = void 0;
  var e = Q, a = r(ne()), y = r(le()), h = r(pe()), w = r(ie()), c = r(oe()), _ = Ne(), v = r(Oe()), k = r(We()), Y = ["class", "style"], l = "responsive", V = "invalidate";
  function g(C) {
    return "+ ".concat(C.length, " ...");
  }
  var M = function() {
    return {
      id: String,
      prefixCls: String,
      data: Array,
      itemKey: [String, Number, Function],
      /** Used for `responsive`. It will limit render node to avoid perf issue */
      itemWidth: {
        type: Number,
        default: 10
      },
      renderItem: Function,
      /** @private Do not use in your production. Render raw node that need wrap Item by developer self */
      renderRawItem: Function,
      maxCount: [Number, String],
      renderRest: Function,
      /** @private Do not use in your production. Render raw node that need wrap Item by developer self */
      renderRawRest: Function,
      suffix: c.default.any,
      component: String,
      itemComponent: c.default.any,
      /** @private This API may be refactor since not well design */
      onVisibleChange: Function,
      /** When set to `full`, ssr will render full items by default and remove at client side */
      ssr: String,
      onMousedown: Function
    };
  }, f = (0, e.defineComponent)({
    name: "Overflow",
    inheritAttrs: !1,
    props: M(),
    emits: ["visibleChange"],
    setup: function(t, p) {
      var N = p.attrs, E = p.emit, O = p.slots, b = (0, e.computed)(function() {
        return t.ssr === "full";
      }), I = (0, e.ref)(null), s = (0, e.computed)(function() {
        return I.value || 0;
      }), S = (0, e.ref)(/* @__PURE__ */ new Map()), F = (0, e.ref)(0), P = (0, e.ref)(0), z = (0, e.ref)(0), x = (0, e.ref)(null), K = (0, e.ref)(null), j = (0, e.computed)(function() {
        return K.value === null && b.value ? Number.MAX_SAFE_INTEGER : K.value || 0;
      }), $ = (0, e.ref)(!1), D = (0, e.computed)(function() {
        return "".concat(t.prefixCls, "-item");
      }), ve = (0, e.computed)(function() {
        return Math.max(F.value, P.value);
      }), A = (0, e.computed)(function() {
        return !!(t.data.length && t.maxCount === l);
      }), fe = (0, e.computed)(function() {
        return t.maxCount === V;
      }), Se = (0, e.computed)(function() {
        return A.value || typeof t.maxCount == "number" && t.data.length > t.maxCount;
      }), W = (0, e.computed)(function() {
        var n = t.data;
        return A.value ? I.value === null && b.value ? n = t.data : n = t.data.slice(0, Math.min(t.data.length, s.value / t.itemWidth)) : typeof t.maxCount == "number" && (n = t.data.slice(0, t.maxCount)), n;
      }), ee = (0, e.computed)(function() {
        return A.value ? t.data.slice(j.value + 1) : t.data.slice(W.value.length);
      }), te = function(u, i) {
        var o;
        return typeof t.itemKey == "function" ? t.itemKey(u) : (o = t.itemKey && (u == null ? void 0 : u[t.itemKey])) !== null && o !== void 0 ? o : i;
      }, he = (0, e.computed)(function() {
        return t.renderItem || function(n) {
          return n;
        };
      }), J = function(u, i) {
        K.value = u, i || ($.value = u < t.data.length - 1, E("visibleChange", u));
      }, be = function(u, i) {
        I.value = i.clientWidth;
      }, de = function(u, i) {
        var o = new Map(S.value);
        i === null ? o.delete(u) : o.set(u, i), S.value = o;
      }, Ie = function(u, i) {
        F.value = P.value, P.value = i;
      }, Pe = function(u, i) {
        z.value = i;
      }, re = function(u) {
        return S.value.get(te(W.value[u], u));
      };
      return (0, e.watch)([s, S, P, z, function() {
        return t.itemKey;
      }, W], function() {
        if (s.value && ve.value && W.value) {
          var n = z.value, u = W.value.length, i = u - 1;
          if (!u) {
            J(0), x.value = null;
            return;
          }
          for (var o = 0; o < u; o += 1) {
            var B = re(o);
            if (B === void 0) {
              J(o - 1, !0);
              break;
            }
            if (n += B, // Only one means `totalWidth` is the final width
            i === 0 && n <= s.value || // Last two width will be the final width
            o === i - 1 && n + re(i) <= s.value) {
              J(i), x.value = null;
              break;
            } else if (n + ve.value > s.value) {
              J(o - 1), x.value = n - B - z.value + P.value;
              break;
            }
          }
          t.suffix && re(0) + z.value > s.value && (x.value = null);
        }
      }), function() {
        var n = $.value && !!ee.value.length, u = t.itemComponent, i = t.renderRawItem, o = t.renderRawRest, B = t.renderRest, se = t.prefixCls, ze = se === void 0 ? "rc-overflow" : se, ce = t.suffix, me = t.component, je = me === void 0 ? "div" : me, qe = t.id, Ve = t.onMousedown, Me = N.class, Ee = N.style, Fe = (0, y.default)(N, Y), ye = {};
        x.value !== null && A.value && (ye = {
          position: "absolute",
          left: "".concat(x.value, "px"),
          top: 0
        });
        var G = {
          prefixCls: D.value,
          responsive: A.value,
          component: u,
          invalidate: fe.value
        }, Ke = i ? function(m, d) {
          var T = te(m, d);
          return (0, e.createVNode)(_.OverflowContextProvider, {
            key: T,
            value: (0, a.default)((0, a.default)({}, G), {}, {
              order: d,
              item: m,
              itemKey: T,
              registerSize: de,
              display: d <= j.value
            })
          }, {
            default: function() {
              return [i(m, d)];
            }
          });
        } : function(m, d) {
          var T = te(m, d);
          return (0, e.createVNode)(v.default, (0, a.default)((0, a.default)({}, G), {}, {
            order: d,
            key: T,
            item: m,
            renderItem: he.value,
            itemKey: T,
            registerSize: de,
            display: d <= j.value
          }), null);
        }, ae = function() {
          return null;
        }, _e = {
          order: n ? j.value : Number.MAX_SAFE_INTEGER,
          className: "".concat(D.value, " ").concat(D.value, "-rest"),
          registerSize: Ie,
          display: n
        };
        if (o)
          o && (ae = function() {
            return (0, e.createVNode)(_.OverflowContextProvider, {
              value: (0, a.default)((0, a.default)({}, G), _e)
            }, {
              default: function() {
                return [o(ee.value)];
              }
            });
          });
        else {
          var ue = B || g;
          ae = function() {
            return (0, e.createVNode)(v.default, (0, a.default)((0, a.default)({}, G), _e), {
              default: function() {
                return typeof ue == "function" ? ue(ee.value) : ue;
              }
            });
          };
        }
        var De = function() {
          var d;
          return (0, e.createVNode)(je, (0, a.default)({
            id: qe,
            class: (0, w.default)(!fe.value && ze, Me),
            style: Ee,
            onMousedown: Ve
          }, Fe), {
            default: function() {
              return [W.value.map(Ke), Se.value ? ae() : null, ce && (0, e.createVNode)(v.default, (0, a.default)((0, a.default)({}, G), {}, {
                order: j.value,
                class: "".concat(D.value, "-suffix"),
                registerSize: Pe,
                display: !0,
                style: ye
              }), {
                default: function() {
                  return ce;
                }
              }), (d = O.default) === null || d === void 0 ? void 0 : d.call(O)];
            }
          });
        };
        return (0, e.createVNode)(h.default, {
          disabled: !A.value,
          onResize: be
        }, {
          default: De
        });
      };
    }
  });
  f.Item = k.default, f.RESPONSIVE = l, f.INVALIDATE = V;
  var R = f;
  return U.default = R, U;
}
var Re;
function Be() {
  if (Re)
    return L;
  Re = 1;
  var r = Z;
  Object.defineProperty(L, "__esModule", {
    value: !0
  }), L.default = void 0;
  var e = r(Te()), a = e.default;
  return L.default = a, L;
}
export {
  Be as r
};
