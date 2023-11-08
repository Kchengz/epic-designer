import { defineComponent as Dt, ref as Fe, watch as nt, computed as Lt, h as Ce, nextTick as Et } from "vue";
import { d as jt, m as Ze } from "./index-9b4e28a8.mjs";
import { _ as ye, g as Tt } from "./index-5fc6c346.mjs";
import { C as zt, D as Gt, u as yt, r as ge, i as ue, g as Q, a as Ke, n as Qe, e as bt, t as $t, o as Wt, j as At, E as Ut, s as ze, f as St, w as Ft, k as Zt } from "./useConfigInject-f0dbb416.mjs";
import { r as Mt } from "./useMergedState-dbb38782.mjs";
import { r as kt, a as Ht, b as Bt } from "./index-7ece9b68.mjs";
import { a as Xt } from "./Portal-f8d09ab1.mjs";
import { r as Yt } from "./KeyCode-8a26b842.mjs";
import { r as Jt } from "./raf-09a8b76f.mjs";
import { r as Kt } from "./LeftOutlined-ba6ba32b.mjs";
import { r as Qt } from "./RightOutlined-ef80ac6b.mjs";
import { r as er } from "./EyeOutlined-8b81c1ea.mjs";
import "./pickAttrs-288ea149.mjs";
import "./index-d3f861e4.mjs";
import "./vnode-1aa65f32.mjs";
import "./ResizeObserver.es-aa1c2e0c.mjs";
import "./index-76b85780.mjs";
import "./_flatRest-18b83366.mjs";
import "./Col-6a21d416.mjs";
import "./useFlexGapSupport-a4f1c6a3.mjs";
import "./index-ae81290b.mjs";
import "./CheckOutlined-bdc41ba2.mjs";
import "./collapseMotion-0fff0c33.mjs";
import "./FormItemContext-f32a9c9f.mjs";
import "./index-6ded6d59.mjs";
import "./wave-7581548b.mjs";
import "./classCallCheck-7491e821.mjs";
import "./index-696fd4ee.mjs";
import "./colors-049dd05b.mjs";
import "./firstNotUndefined-ac7713f5.mjs";
import "./useRefs-07d4d46d.mjs";
import "./omit-d14a337a.mjs";
function tr(t, e) {
  for (var u = 0; u < e.length; u++) {
    const c = e[u];
    if (typeof c != "string" && !Array.isArray(c)) {
      for (const l in c)
        if (l !== "default" && !(l in t)) {
          const p = Object.getOwnPropertyDescriptor(c, l);
          p && Object.defineProperty(t, l, p.get ? p : {
            enumerable: !0,
            get: () => c[l]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }));
}
var et = {}, ke = {}, re = {}, He, it;
function rr() {
  if (it)
    return He;
  it = 1;
  var t = zt(), e = Gt(), u = "[object Number]";
  function c(l) {
    return typeof l == "number" || e(l) && t(l) == u;
  }
  return He = c, He;
}
var H = {}, ut;
function tt() {
  if (ut)
    return H;
  ut = 1, Object.defineProperty(H, "__esModule", {
    value: !0
  }), H.get = p, H.getClientSize = i, H.getDocSize = a, H.getOffset = f, H.getOuterHeight = g, H.getOuterWidth = n, H.getScroll = o, H.set = w;
  var t = /margin|padding|width|height|max|min|offset/, e = {
    left: !0,
    top: !0
  }, u = {
    cssFloat: 1,
    styleFloat: 1,
    float: 1
  };
  function c(r) {
    return r.nodeType === 1 ? r.ownerDocument.defaultView.getComputedStyle(r, null) : {};
  }
  function l(r, s, v) {
    if (s = s.toLowerCase(), v === "auto") {
      if (s === "height")
        return r.offsetHeight;
      if (s === "width")
        return r.offsetWidth;
    }
    return s in e || (e[s] = t.test(s)), e[s] ? parseFloat(v) || 0 : v;
  }
  function p(r, s) {
    var v = arguments.length, N = c(r);
    return s = u[s] ? "cssFloat" in r.style ? "cssFloat" : "styleFloat" : s, v === 1 ? N : l(r, s, N[s] || r.style[s]);
  }
  function w(r, s, v) {
    var N = arguments.length;
    if (s = u[s] ? "cssFloat" in r.style ? "cssFloat" : "styleFloat" : s, N === 3)
      return typeof v == "number" && t.test(s) && (v = "".concat(v, "px")), r.style[s] = v, v;
    for (var m in s)
      s.hasOwnProperty(m) && w(r, m, s[m]);
    return c(r);
  }
  function n(r) {
    return r === document.body ? document.documentElement.clientWidth : r.offsetWidth;
  }
  function g(r) {
    return r === document.body ? window.innerHeight || document.documentElement.clientHeight : r.offsetHeight;
  }
  function a() {
    var r = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth), s = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
    return {
      width: r,
      height: s
    };
  }
  function i() {
    var r = document.documentElement.clientWidth, s = window.innerHeight || document.documentElement.clientHeight;
    return {
      width: r,
      height: s
    };
  }
  function o() {
    return {
      scrollLeft: Math.max(document.documentElement.scrollLeft, document.body.scrollLeft),
      scrollTop: Math.max(document.documentElement.scrollTop, document.body.scrollTop)
    };
  }
  function f(r) {
    var s = r.getBoundingClientRect(), v = document.documentElement;
    return {
      left: s.left + (window.pageXOffset || v.scrollLeft) - (v.clientLeft || document.body.clientLeft || 0),
      top: s.top + (window.pageYOffset || v.scrollTop) - (v.clientTop || document.body.clientTop || 0)
    };
  }
  return H;
}
var de = {}, Ve = {}, ot;
function ar() {
  if (ot)
    return Ve;
  ot = 1;
  var t = ue;
  Object.defineProperty(Ve, "__esModule", {
    value: !0
  }), Ve.default = p;
  var e = t(yt()), u = t(ge()), c = t(Jt()), l = Q;
  function p(w) {
    var n = (0, l.ref)(null), g = (0, l.reactive)((0, u.default)({}, w)), a = (0, l.ref)([]), i = function(f) {
      n.value === null && (a.value = [], n.value = (0, c.default)(function() {
        var r;
        a.value.forEach(function(s) {
          r = (0, u.default)((0, u.default)({}, r), s);
        }), (0, e.default)(g, r), n.value = null;
      })), a.value.push(f);
    };
    return (0, l.onMounted)(function() {
      n.value && c.default.cancel(n.value);
    }), [g, i];
  }
  return Ve;
}
var De = {}, lt;
function nr() {
  if (lt)
    return De;
  lt = 1;
  var t = ue;
  Object.defineProperty(De, "__esModule", {
    value: !0
  }), De.default = p;
  var e = t(ge()), u = t(Ke()), c = tt();
  function l(w, n, g, a) {
    var i = n + g, o = (g - a) / 2;
    if (g > a) {
      if (n > 0)
        return (0, u.default)({}, w, o);
      if (n < 0 && i < a)
        return (0, u.default)({}, w, -o);
    } else if (n < 0 || i > a)
      return (0, u.default)({}, w, n < 0 ? o : -o);
    return {};
  }
  function p(w, n, g, a) {
    var i = (0, c.getClientSize)(), o = i.width, f = i.height, r = null;
    return w <= o && n <= f ? r = {
      x: 0,
      y: 0
    } : (w > o || n > f) && (r = (0, e.default)((0, e.default)({}, l("x", g, w, o)), l("y", a, n, f))), r;
  }
  return De;
}
var pe = {}, ft;
function rt() {
  if (ft)
    return pe;
  ft = 1;
  var t = ue;
  Object.defineProperty(pe, "__esModule", {
    value: !0
  }), pe.default = pe.context = void 0;
  var e = Q, u = t(ge()), c = t(kt()), l = t(yt()), p = t(Qe()), w = t(ye), n = at(), g = t(Rt()), a = t(Mt()), i = Symbol("previewGroupContext"), o = {
    provide: function(v) {
      (0, e.provide)(i, v);
    },
    inject: function() {
      return (0, e.inject)(i, {
        isPreviewGroup: (0, e.ref)(!1),
        previewUrls: (0, e.computed)(function() {
          return /* @__PURE__ */ new Map();
        }),
        setPreviewUrls: function() {
        },
        current: (0, e.ref)(null),
        setCurrent: function() {
        },
        setShowPreview: function() {
        },
        setMousePosition: function() {
        },
        registerImage: null,
        rootClassName: ""
      });
    }
  };
  pe.context = o;
  var f = (0, e.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "PreviewGroup",
    inheritAttrs: !1,
    props: {
      previewPrefixCls: String,
      preview: {
        type: [Boolean, Object],
        default: !0
      },
      icons: {
        type: Object,
        default: function() {
          return {};
        }
      }
    },
    setup: function(v, N) {
      var m = N.slots, M = (0, e.computed)(function() {
        var I = {
          visible: void 0,
          onVisibleChange: function() {
          },
          getContainer: void 0,
          current: 0
        };
        return (0, w.default)(v.preview) === "object" ? (0, n.mergeDefaultValue)(v.preview, I) : I;
      }), R = (0, e.reactive)(/* @__PURE__ */ new Map()), d = (0, e.ref)(), j = (0, e.computed)(function() {
        return M.value.visible;
      }), D = (0, e.computed)(function() {
        return M.value.getContainer;
      }), _ = function(C, V) {
        var E, z;
        (E = (z = M.value).onVisibleChange) === null || E === void 0 || E.call(z, C, V);
      }, h = (0, a.default)(!!j.value, {
        value: j,
        onChange: _
      }), x = (0, p.default)(h, 2), O = x[0], y = x[1], q = (0, e.ref)(null), W = (0, e.computed)(function() {
        return j.value !== void 0;
      }), ae = (0, e.computed)(function() {
        return Array.from(R.keys());
      }), G = (0, e.computed)(function() {
        return ae.value[M.value.current];
      }), L = (0, e.computed)(function() {
        return new Map(Array.from(R).filter(function(I) {
          var C = (0, p.default)(I, 2), V = C[1].canPreview;
          return !!V;
        }).map(function(I) {
          var C = (0, p.default)(I, 2), V = C[0], E = C[1].url;
          return [V, E];
        }));
      }), B = function(C, V) {
        var E = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
        R.set(C, {
          url: V,
          canPreview: E
        });
      }, ee = function(C) {
        d.value = C;
      }, oe = function(C) {
        q.value = C;
      }, $ = function(C, V) {
        var E = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, z = function() {
          R.delete(C);
        };
        return R.set(C, {
          url: V,
          canPreview: E
        }), z;
      }, U = function(C) {
        C == null || C.stopPropagation(), y(!1), oe(null);
      };
      return (0, e.watch)(G, function(I) {
        ee(I);
      }, {
        immediate: !0,
        flush: "post"
      }), (0, e.watchEffect)(function() {
        O.value && W.value && ee(G.value);
      }, {
        flush: "post"
      }), o.provide({
        isPreviewGroup: (0, e.ref)(!0),
        previewUrls: L,
        setPreviewUrls: B,
        current: d,
        setCurrent: ee,
        setShowPreview: y,
        setMousePosition: oe,
        registerImage: $
      }), function() {
        var I = (0, l.default)({}, ((0, c.default)(M.value), M.value));
        return (0, e.createVNode)(e.Fragment, null, [m.default && m.default(), (0, e.createVNode)(g.default, (0, u.default)((0, u.default)({}, I), {}, {
          "ria-hidden": !O.value,
          visible: O.value,
          prefixCls: v.previewPrefixCls,
          onClose: U,
          mousePosition: q.value,
          src: L.value.get(d.value),
          icons: v.icons,
          getContainer: D.value
        }), null)]);
      };
    }
  }), r = f;
  return pe.default = r, pe;
}
var ct;
function Rt() {
  if (ct)
    return de;
  ct = 1;
  var t = ue;
  Object.defineProperty(de, "__esModule", {
    value: !0
  }), de.previewProps = de.default = void 0;
  var e = Q, u = t(Ke()), c = t(Qe()), l = t(ge()), p = t(bt()), w = t(Ht()), n = Bt(), g = tt(), a = t(Xt()), i = t(Yt()), o = $t(), f = t(ar()), r = t(nr()), s = rt(), v = {
    x: 0,
    y: 0
  }, N = (0, l.default)((0, l.default)({}, (0, n.dialogPropTypes)()), {}, {
    src: String,
    alt: String,
    rootClassName: String,
    icons: {
      type: Object,
      default: function() {
        return {};
      }
    }
  });
  de.previewProps = N;
  var m = (0, e.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "Preview",
    inheritAttrs: !1,
    props: N,
    emits: ["close", "afterClose"],
    setup: function(d, j) {
      var D = j.emit, _ = j.attrs, h = (0, e.reactive)(d.icons), x = h.rotateLeft, O = h.rotateRight, y = h.zoomIn, q = h.zoomOut, W = h.close, ae = h.left, G = h.right, L = (0, e.ref)(1), B = (0, e.ref)(0), ee = (0, f.default)(v), oe = (0, c.default)(ee, 2), $ = oe[0], U = oe[1], I = function() {
        return D("close");
      }, C = (0, e.ref)(), V = (0, e.reactive)({
        originX: 0,
        originY: 0,
        deltaX: 0,
        deltaY: 0
      }), E = (0, e.ref)(!1), z = s.context.inject(), ne = z.previewUrls, le = z.current, ie = z.isPreviewGroup, te = z.setCurrent, he = (0, e.computed)(function() {
        return ne.value.size;
      }), fe = (0, e.computed)(function() {
        return Array.from(ne.value.keys());
      }), A = (0, e.computed)(function() {
        return fe.value.indexOf(le.value);
      }), Ge = (0, e.computed)(function() {
        return ie.value ? ne.value.get(le.value) : d.src;
      }), we = (0, e.computed)(function() {
        return ie.value && he.value > 1;
      }), X = (0, e.ref)({
        wheelDirection: 0
      }), Re = function() {
        L.value = 1, B.value = 0, U(v), D("afterClose");
      }, qe = function() {
        L.value++, U(v);
      }, Ne = function() {
        L.value > 1 && L.value--, U(v);
      }, $e = function() {
        B.value += 90;
      }, ce = function() {
        B.value -= 90;
      }, _e = function(P) {
        P.preventDefault(), P.stopPropagation(), A.value > 0 && te(fe.value[A.value - 1]);
      }, xe = function(P) {
        P.preventDefault(), P.stopPropagation(), A.value < he.value - 1 && te(fe.value[A.value + 1]);
      }, S = (0, p.default)((0, u.default)({}, "".concat(d.prefixCls, "-moving"), E.value)), T = "".concat(d.prefixCls, "-operations-operation"), F = "".concat(d.prefixCls, "-operations-icon"), Y = [{
        icon: W,
        onClick: I,
        type: "close"
      }, {
        icon: y,
        onClick: qe,
        type: "zoomIn"
      }, {
        icon: q,
        onClick: Ne,
        type: "zoomOut",
        disabled: (0, e.computed)(function() {
          return L.value === 1;
        })
      }, {
        icon: O,
        onClick: $e,
        type: "rotateRight"
      }, {
        icon: x,
        onClick: ce,
        type: "rotateLeft"
      }], Z = function() {
        if (d.visible && E.value) {
          var P = C.value.offsetWidth * L.value, J = C.value.offsetHeight * L.value, se = (0, g.getOffset)(C.value), K = se.left, ve = se.top, k = B.value % 180 !== 0;
          E.value = !1;
          var Pe = (0, r.default)(k ? J : P, k ? P : J, K, ve);
          Pe && U((0, l.default)({}, Pe));
        }
      }, We = function(P) {
        P.button === 0 && (P.preventDefault(), P.stopPropagation(), V.deltaX = P.pageX - $.x, V.deltaY = P.pageY - $.y, V.originX = $.x, V.originY = $.y, E.value = !0);
      }, be = function(P) {
        d.visible && E.value && U({
          x: P.pageX - V.deltaX,
          y: P.pageY - V.deltaY
        });
      }, Ae = function(P) {
        if (d.visible) {
          P.preventDefault();
          var J = P.deltaY;
          X.value = {
            wheelDirection: J
          };
        }
      }, Ie = function(P) {
        !d.visible || !we.value || (P.preventDefault(), P.keyCode === i.default.LEFT ? A.value > 0 && te(fe.value[A.value - 1]) : P.keyCode === i.default.RIGHT && A.value < he.value - 1 && te(fe.value[A.value + 1]));
      }, Ue = function() {
        d.visible && (L.value !== 1 && (L.value = 1), ($.x !== v.x || $.y !== v.y) && U(v));
      }, Se = function() {
      };
      return (0, e.onMounted)(function() {
        (0, e.watch)([function() {
          return d.visible;
        }, E], function() {
          Se();
          var b, P, J = (0, a.default)(window, "mouseup", Z, !1), se = (0, a.default)(window, "mousemove", be, !1), K = (0, a.default)(window, "wheel", Ae, {
            passive: !1
          }), ve = (0, a.default)(window, "keydown", Ie, !1);
          try {
            window.top !== window.self && (b = (0, a.default)(window.top, "mouseup", Z, !1), P = (0, a.default)(window.top, "mousemove", be, !1));
          } catch (k) {
            (0, o.warning)(!1, "[vc-image] ".concat(k));
          }
          Se = function() {
            J.remove(), se.remove(), K.remove(), ve.remove(), b && b.remove(), P && P.remove();
          };
        }, {
          flush: "post",
          immediate: !0
        }), (0, e.watch)([X], function() {
          var b = X.value.wheelDirection;
          b > 0 ? Ne() : b < 0 && qe();
        });
      }), (0, e.onUnmounted)(function() {
        Se();
      }), function() {
        var b = d.visible, P = d.prefixCls, J = d.rootClassName;
        return (0, e.createVNode)(w.default, (0, l.default)((0, l.default)({}, _), {}, {
          transitionName: "zoom",
          maskTransitionName: "fade",
          closable: !1,
          keyboard: !0,
          prefixCls: P,
          onClose: I,
          afterClose: Re,
          visible: b,
          wrapClassName: S,
          rootClassName: J,
          getContainer: d.getContainer
        }), {
          default: function() {
            return [(0, e.createVNode)("ul", {
              class: "".concat(d.prefixCls, "-operations")
            }, [Y.map(function(K) {
              var ve = K.icon, k = K.onClick, Pe = K.type, Oe = K.disabled;
              return (0, e.createVNode)("li", {
                class: (0, p.default)(T, (0, u.default)({}, "".concat(d.prefixCls, "-operations-operation-disabled"), Oe && (Oe == null ? void 0 : Oe.value))),
                onClick: k,
                key: Pe
              }, [(0, e.cloneVNode)(ve, {
                class: F
              })]);
            })]), (0, e.createVNode)("div", {
              class: "".concat(d.prefixCls, "-img-wrapper"),
              style: {
                transform: "translate3d(".concat($.x, "px, ").concat($.y, "px, 0)")
              }
            }, [(0, e.createVNode)("img", {
              onMousedown: We,
              onDblclick: Ue,
              ref: C,
              class: "".concat(d.prefixCls, "-img"),
              src: Ge.value,
              alt: d.alt,
              style: {
                transform: "scale3d(".concat(L.value, ", ").concat(L.value, ", 1) rotate(").concat(B.value, "deg)")
              }
            }, null)]), we.value && (0, e.createVNode)("div", {
              class: (0, p.default)("".concat(d.prefixCls, "-switch-left"), (0, u.default)({}, "".concat(d.prefixCls, "-switch-left-disabled"), A.value <= 0)),
              onClick: _e
            }, [ae]), we.value && (0, e.createVNode)("div", {
              class: (0, p.default)("".concat(d.prefixCls, "-switch-right"), (0, u.default)({}, "".concat(d.prefixCls, "-switch-right-disabled"), A.value >= he.value - 1)),
              onClick: xe
            }, [G])];
          }
        });
      };
    }
  }), M = m;
  return de.default = M, de;
}
var st;
function at() {
  if (st)
    return re;
  st = 1;
  var t = ue, e = ye;
  Object.defineProperty(re, "__esModule", {
    value: !0
  }), re.mergeDefaultValue = re.imageProps = re.default = void 0;
  var u = Q, c = t(Ke()), l = t(Wt()), p = t(Qe()), w = t(ye), n = t(ge()), g = t(rr()), a = t(bt()), i = t(At()), o = tt(), f = t(Mt()), r = t(Rt()), s = m(rt()), v = ["icons", "maskClassName"];
  function N(_) {
    if (typeof WeakMap != "function")
      return null;
    var h = /* @__PURE__ */ new WeakMap(), x = /* @__PURE__ */ new WeakMap();
    return (N = function(y) {
      return y ? x : h;
    })(_);
  }
  function m(_, h) {
    if (!h && _ && _.__esModule)
      return _;
    if (_ === null || e(_) !== "object" && typeof _ != "function")
      return { default: _ };
    var x = N(h);
    if (x && x.has(_))
      return x.get(_);
    var O = {}, y = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var q in _)
      if (q !== "default" && Object.prototype.hasOwnProperty.call(_, q)) {
        var W = y ? Object.getOwnPropertyDescriptor(_, q) : null;
        W && (W.get || W.set) ? Object.defineProperty(O, q, W) : O[q] = _[q];
      }
    return O.default = _, x && x.set(_, O), O;
  }
  var M = function() {
    return {
      src: String,
      wrapperClassName: String,
      wrapperStyle: {
        type: Object,
        default: void 0
      },
      rootClassName: String,
      prefixCls: String,
      previewPrefixCls: String,
      previewMask: {
        type: [Boolean, Function],
        default: void 0
      },
      placeholder: i.default.any,
      fallback: String,
      preview: {
        type: [Boolean, Object],
        default: !0
      },
      onClick: {
        type: Function
      },
      onError: {
        type: Function
      }
    };
  };
  re.imageProps = M;
  var R = function(h, x) {
    var O = (0, n.default)({}, h);
    return Object.keys(x).forEach(function(y) {
      h[y] === void 0 && (O[y] = x[y]);
    }), O;
  };
  re.mergeDefaultValue = R;
  var d = 0, j = (0, u.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "Image",
    inheritAttrs: !1,
    props: M(),
    emits: ["click", "error"],
    setup: function(h, x) {
      var O = x.attrs, y = x.slots, q = x.emit, W = (0, u.computed)(function() {
        return h.prefixCls;
      }), ae = (0, u.computed)(function() {
        return "".concat(W.value, "-preview");
      }), G = (0, u.computed)(function() {
        var S = {
          visible: void 0,
          onVisibleChange: function() {
          },
          getContainer: void 0
        };
        return (0, w.default)(h.preview) === "object" ? R(h.preview, S) : S;
      }), L = (0, u.computed)(function() {
        var S;
        return (S = G.value.src) !== null && S !== void 0 ? S : h.src;
      }), B = (0, u.computed)(function() {
        return h.placeholder && h.placeholder !== !0 || y.placeholder;
      }), ee = (0, u.computed)(function() {
        return G.value.visible;
      }), oe = (0, u.computed)(function() {
        return G.value.getContainer;
      }), $ = (0, u.computed)(function() {
        return ee.value !== void 0;
      }), U = function(T, F) {
        var Y, Z;
        (Y = (Z = G.value).onVisibleChange) === null || Y === void 0 || Y.call(Z, T, F);
      }, I = (0, f.default)(!!ee.value, {
        value: ee,
        onChange: U
      }), C = (0, p.default)(I, 2), V = C[0], E = C[1];
      (0, u.watch)(V, function(S, T) {
        U(S, T);
      });
      var z = (0, u.ref)(B.value ? "loading" : "normal");
      (0, u.watch)(function() {
        return h.src;
      }, function() {
        z.value = B.value ? "loading" : "normal";
      });
      var ne = (0, u.ref)(null), le = (0, u.computed)(function() {
        return z.value === "error";
      }), ie = s.context.inject(), te = ie.isPreviewGroup, he = ie.setCurrent, fe = ie.setShowPreview, A = ie.setMousePosition, Ge = ie.registerImage, we = (0, u.ref)(d++), X = (0, u.computed)(function() {
        return h.preview && !le.value;
      }), Re = function() {
        z.value = "normal";
      }, qe = function(T) {
        z.value = "error", q("error", T);
      }, Ne = function(T) {
        if (!$.value) {
          var F = (0, o.getOffset)(T.target), Y = F.left, Z = F.top;
          te.value ? (he(we.value), A({
            x: Y,
            y: Z
          })) : ne.value = {
            x: Y,
            y: Z
          };
        }
        te.value ? fe(!0) : E(!0), q("click", T);
      }, $e = function() {
        E(!1), $.value || (ne.value = null);
      }, ce = (0, u.ref)(null);
      (0, u.watch)(function() {
        return ce;
      }, function() {
        z.value === "loading" && ce.value.complete && (ce.value.naturalWidth || ce.value.naturalHeight) && Re();
      });
      var _e = function() {
      };
      (0, u.onMounted)(function() {
        (0, u.watch)([L, X], function() {
          if (_e(), !te.value)
            return function() {
            };
          _e = Ge(we.value, L.value, X.value), X.value || _e();
        }, {
          flush: "post",
          immediate: !0
        });
      }), (0, u.onUnmounted)(function() {
        _e();
      });
      var xe = function(T) {
        return (0, g.default)(T) ? T + "px" : T;
      };
      return function() {
        var S = h.prefixCls, T = h.wrapperClassName, F = h.fallback, Y = h.src, Z = h.placeholder, We = h.wrapperStyle, be = h.rootClassName, Ae = O.width, Ie = O.height, Ue = O.crossorigin, Se = O.decoding, b = O.alt, P = O.sizes, J = O.srcset, se = O.usemap, K = O.class, ve = O.style, k = G.value, Pe = k.icons, Oe = k.maskClassName, qt = (0, l.default)(k, v), Nt = (0, a.default)(S, T, be, (0, c.default)({}, "".concat(S, "-error"), le.value)), xt = le.value && F ? F : L.value, It = {
          crossorigin: Ue,
          decoding: Se,
          alt: b,
          sizes: P,
          srcset: J,
          usemap: se,
          class: (0, a.default)("".concat(S, "-img"), (0, c.default)({}, "".concat(S, "-img-placeholder"), Z === !0), K),
          style: (0, n.default)({
            height: Ie
          }, ve)
        };
        return (0, u.createVNode)(u.Fragment, null, [(0, u.createVNode)("div", {
          class: Nt,
          onClick: X.value ? Ne : function(Vt) {
            q("click", Vt);
          },
          style: (0, n.default)({
            width: xe(Ae),
            height: xe(Ie)
          }, We)
        }, [(0, u.createVNode)("img", (0, n.default)((0, n.default)((0, n.default)({}, It), le.value && F ? {
          src: F
        } : {
          onLoad: Re,
          onError: qe,
          src: Y
        }), {}, {
          ref: ce
        }), null), z.value === "loading" && (0, u.createVNode)("div", {
          "aria-hidden": "true",
          class: "".concat(S, "-placeholder")
        }, [Z || y.placeholder && y.placeholder()]), y.previewMask && X.value && (0, u.createVNode)("div", {
          class: ["".concat(S, "-mask"), Oe]
        }, [y.previewMask()])]), !te.value && X.value && (0, u.createVNode)(r.default, (0, n.default)((0, n.default)({}, qt), {}, {
          "aria-hidden": !V.value,
          visible: V.value,
          prefixCls: ae.value,
          onClose: $e,
          mousePosition: ne.value,
          src: xt,
          alt: b,
          getContainer: oe.value,
          icons: Pe,
          rootClassName: be
        }), null)]);
      };
    }
  });
  j.PreviewGroup = s.default;
  var D = j;
  return re.default = D, re;
}
var vt;
function ir() {
  return vt || (vt = 1, function(t) {
    var e = ye;
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var u = {};
    t.default = void 0;
    var c = p(at());
    Object.keys(c).forEach(function(n) {
      n === "default" || n === "__esModule" || Object.prototype.hasOwnProperty.call(u, n) || n in t && t[n] === c[n] || Object.defineProperty(t, n, {
        enumerable: !0,
        get: function() {
          return c[n];
        }
      });
    });
    function l(n) {
      if (typeof WeakMap != "function")
        return null;
      var g = /* @__PURE__ */ new WeakMap(), a = /* @__PURE__ */ new WeakMap();
      return (l = function(o) {
        return o ? a : g;
      })(n);
    }
    function p(n, g) {
      if (!g && n && n.__esModule)
        return n;
      if (n === null || e(n) !== "object" && typeof n != "function")
        return { default: n };
      var a = l(g);
      if (a && a.has(n))
        return a.get(n);
      var i = {}, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var f in n)
        if (f !== "default" && Object.prototype.hasOwnProperty.call(n, f)) {
          var r = o ? Object.getOwnPropertyDescriptor(n, f) : null;
          r && (r.get || r.set) ? Object.defineProperty(i, f, r) : i[f] = n[f];
        }
      return i.default = n, a && a.set(n, i), i;
    }
    var w = c.default;
    t.default = w;
  }(ke)), ke;
}
var Me = {}, dt;
function ur() {
  if (dt)
    return Me;
  dt = 1;
  var t = ue;
  Object.defineProperty(Me, "__esModule", {
    value: !0
  }), Me.default = void 0;
  var e = t(Ut()), u = e.default;
  return Me.default = u, Me;
}
var me = {}, Be = {}, Le = {}, pt;
function or() {
  if (pt)
    return Le;
  pt = 1, Object.defineProperty(Le, "__esModule", { value: !0 });
  var t = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "defs", attrs: {}, children: [{ tag: "style", attrs: {} }] }, { tag: "path", attrs: { d: "M672 418H144c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H188V494h440v326z" } }, { tag: "path", attrs: { d: "M819.3 328.5c-78.8-100.7-196-153.6-314.6-154.2l-.2-64c0-6.5-7.6-10.1-12.6-6.1l-128 101c-4 3.1-3.9 9.1 0 12.3L492 318.6c5.1 4 12.7.4 12.6-6.1v-63.9c12.9.1 25.9.9 38.8 2.5 42.1 5.2 82.1 18.2 119 38.7 38.1 21.2 71.2 49.7 98.4 84.3 27.1 34.7 46.7 73.7 58.1 115.8a325.95 325.95 0 016.5 140.9h74.9c14.8-103.6-11.3-213-81-302.3z" } }] }, name: "rotate-left", theme: "outlined" };
  return Le.default = t, Le;
}
var mt;
function lr() {
  return mt || (mt = 1, function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var e = Q, u = l(or()), c = l(ze());
    function l(a) {
      return a && a.__esModule ? a : { default: a };
    }
    function p(a) {
      for (var i = 1; i < arguments.length; i++) {
        var o = arguments[i] != null ? Object(arguments[i]) : {}, f = Object.keys(o);
        typeof Object.getOwnPropertySymbols == "function" && (f = f.concat(Object.getOwnPropertySymbols(o).filter(function(r) {
          return Object.getOwnPropertyDescriptor(o, r).enumerable;
        }))), f.forEach(function(r) {
          w(a, r, o[r]);
        });
      }
      return a;
    }
    function w(a, i, o) {
      return i in a ? Object.defineProperty(a, i, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : a[i] = o, a;
    }
    var n = function(i, o) {
      var f = p({}, i, o.attrs);
      return (0, e.createVNode)(c.default, p({}, f, {
        icon: u.default
      }), null);
    };
    n.displayName = "RotateLeftOutlined", n.inheritAttrs = !1;
    var g = n;
    t.default = g;
  }(Be)), Be;
}
var Xe = {}, Ee = {}, gt;
function fr() {
  if (gt)
    return Ee;
  gt = 1, Object.defineProperty(Ee, "__esModule", { value: !0 });
  var t = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "defs", attrs: {}, children: [{ tag: "style", attrs: {} }] }, { tag: "path", attrs: { d: "M480.5 251.2c13-1.6 25.9-2.4 38.8-2.5v63.9c0 6.5 7.5 10.1 12.6 6.1L660 217.6c4-3.2 4-9.2 0-12.3l-128-101c-5.1-4-12.6-.4-12.6 6.1l-.2 64c-118.6.5-235.8 53.4-314.6 154.2A399.75 399.75 0 00123.5 631h74.9c-.9-5.3-1.7-10.7-2.4-16.1-5.1-42.1-2.1-84.1 8.9-124.8 11.4-42.2 31-81.1 58.1-115.8 27.2-34.7 60.3-63.2 98.4-84.3 37-20.6 76.9-33.6 119.1-38.8z" } }, { tag: "path", attrs: { d: "M880 418H352c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H396V494h440v326z" } }] }, name: "rotate-right", theme: "outlined" };
  return Ee.default = t, Ee;
}
var ht;
function cr() {
  return ht || (ht = 1, function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var e = Q, u = l(fr()), c = l(ze());
    function l(a) {
      return a && a.__esModule ? a : { default: a };
    }
    function p(a) {
      for (var i = 1; i < arguments.length; i++) {
        var o = arguments[i] != null ? Object(arguments[i]) : {}, f = Object.keys(o);
        typeof Object.getOwnPropertySymbols == "function" && (f = f.concat(Object.getOwnPropertySymbols(o).filter(function(r) {
          return Object.getOwnPropertyDescriptor(o, r).enumerable;
        }))), f.forEach(function(r) {
          w(a, r, o[r]);
        });
      }
      return a;
    }
    function w(a, i, o) {
      return i in a ? Object.defineProperty(a, i, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : a[i] = o, a;
    }
    var n = function(i, o) {
      var f = p({}, i, o.attrs);
      return (0, e.createVNode)(c.default, p({}, f, {
        icon: u.default
      }), null);
    };
    n.displayName = "RotateRightOutlined", n.inheritAttrs = !1;
    var g = n;
    t.default = g;
  }(Xe)), Xe;
}
var Ye = {}, je = {}, wt;
function sr() {
  if (wt)
    return je;
  wt = 1, Object.defineProperty(je, "__esModule", { value: !0 });
  var t = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M637 443H519V309c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v134H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h118v134c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V519h118c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z" } }] }, name: "zoom-in", theme: "outlined" };
  return je.default = t, je;
}
var _t;
function vr() {
  return _t || (_t = 1, function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var e = Q, u = l(sr()), c = l(ze());
    function l(a) {
      return a && a.__esModule ? a : { default: a };
    }
    function p(a) {
      for (var i = 1; i < arguments.length; i++) {
        var o = arguments[i] != null ? Object(arguments[i]) : {}, f = Object.keys(o);
        typeof Object.getOwnPropertySymbols == "function" && (f = f.concat(Object.getOwnPropertySymbols(o).filter(function(r) {
          return Object.getOwnPropertyDescriptor(o, r).enumerable;
        }))), f.forEach(function(r) {
          w(a, r, o[r]);
        });
      }
      return a;
    }
    function w(a, i, o) {
      return i in a ? Object.defineProperty(a, i, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : a[i] = o, a;
    }
    var n = function(i, o) {
      var f = p({}, i, o.attrs);
      return (0, e.createVNode)(c.default, p({}, f, {
        icon: u.default
      }), null);
    };
    n.displayName = "ZoomInOutlined", n.inheritAttrs = !1;
    var g = n;
    t.default = g;
  }(Ye)), Ye;
}
var Je = {}, Te = {}, Pt;
function dr() {
  if (Pt)
    return Te;
  Pt = 1, Object.defineProperty(Te, "__esModule", { value: !0 });
  var t = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M637 443H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h312c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z" } }] }, name: "zoom-out", theme: "outlined" };
  return Te.default = t, Te;
}
var Ot;
function pr() {
  return Ot || (Ot = 1, function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var e = Q, u = l(dr()), c = l(ze());
    function l(a) {
      return a && a.__esModule ? a : { default: a };
    }
    function p(a) {
      for (var i = 1; i < arguments.length; i++) {
        var o = arguments[i] != null ? Object(arguments[i]) : {}, f = Object.keys(o);
        typeof Object.getOwnPropertySymbols == "function" && (f = f.concat(Object.getOwnPropertySymbols(o).filter(function(r) {
          return Object.getOwnPropertyDescriptor(o, r).enumerable;
        }))), f.forEach(function(r) {
          w(a, r, o[r]);
        });
      }
      return a;
    }
    function w(a, i, o) {
      return i in a ? Object.defineProperty(a, i, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : a[i] = o, a;
    }
    var n = function(i, o) {
      var f = p({}, i, o.attrs);
      return (0, e.createVNode)(c.default, p({}, f, {
        icon: u.default
      }), null);
    };
    n.displayName = "ZoomOutOutlined", n.inheritAttrs = !1;
    var g = n;
    t.default = g;
  }(Je)), Je;
}
var Ct;
function mr() {
  if (Ct)
    return me;
  Ct = 1;
  var t = ue;
  Object.defineProperty(me, "__esModule", {
    value: !0
  }), me.icons = me.default = void 0;
  var e = Q, u = t(ge()), c = t(rt()), l = t(St()), p = t(lr()), w = t(cr()), n = t(vr()), g = t(pr()), a = t(Ft()), i = t(Kt()), o = t(Qt()), f = {
    rotateLeft: (0, e.createVNode)(p.default, null, null),
    rotateRight: (0, e.createVNode)(w.default, null, null),
    zoomIn: (0, e.createVNode)(n.default, null, null),
    zoomOut: (0, e.createVNode)(g.default, null, null),
    close: (0, e.createVNode)(a.default, null, null),
    left: (0, e.createVNode)(i.default, null, null),
    right: (0, e.createVNode)(o.default, null, null)
  };
  me.icons = f;
  var r = (0, e.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "AImagePreviewGroup",
    inheritAttrs: !1,
    props: {
      previewPrefixCls: String
    },
    setup: function(N, m) {
      var M = m.attrs, R = m.slots, d = (0, l.default)("image", N), j = d.getPrefixCls, D = (0, e.computed)(function() {
        return j("image-preview", N.previewPrefixCls);
      });
      return function() {
        return (0, e.createVNode)(c.default, (0, u.default)((0, u.default)({}, (0, u.default)((0, u.default)({}, M), N)), {}, {
          icons: f,
          previewPrefixCls: D.value
        }), R);
      };
    }
  }), s = r;
  return me.default = s, me;
}
(function(t) {
  var e = ue, u = ye;
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "ImagePreviewGroup", {
    enumerable: !0,
    get: function() {
      return i.default;
    }
  }), t.default = void 0, Object.defineProperty(t, "imageProps", {
    enumerable: !0,
    get: function() {
      return n.imageProps;
    }
  });
  var c = Q, l = e(ge()), p = e(ye), w = e(ir()), n = at(), g = e(ur()), a = e(St()), i = s(mr()), o = e(er()), f = Zt();
  function r(m) {
    if (typeof WeakMap != "function")
      return null;
    var M = /* @__PURE__ */ new WeakMap(), R = /* @__PURE__ */ new WeakMap();
    return (r = function(j) {
      return j ? R : M;
    })(m);
  }
  function s(m, M) {
    if (!M && m && m.__esModule)
      return m;
    if (m === null || u(m) !== "object" && typeof m != "function")
      return { default: m };
    var R = r(M);
    if (R && R.has(m))
      return R.get(m);
    var d = {}, j = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var D in m)
      if (D !== "default" && Object.prototype.hasOwnProperty.call(m, D)) {
        var _ = j ? Object.getOwnPropertyDescriptor(m, D) : null;
        _ && (_.get || _.set) ? Object.defineProperty(d, D, _) : d[D] = m[D];
      }
    return d.default = m, R && R.set(m, d), d;
  }
  var v = (0, c.defineComponent)({
    name: "AImage",
    inheritAttrs: !1,
    props: (0, n.imageProps)(),
    setup: function(M, R) {
      var d = R.slots, j = R.attrs, D = (0, a.default)("image", M), _ = D.prefixCls, h = D.rootPrefixCls, x = D.configProvider, O = (0, c.computed)(function() {
        var y = M.preview;
        if (y === !1)
          return y;
        var q = (0, p.default)(y) === "object" ? y : {};
        return (0, l.default)((0, l.default)({
          icons: i.icons
        }, q), {}, {
          transitionName: (0, f.getTransitionName)(h.value, "zoom", q.transitionName),
          maskTransitionName: (0, f.getTransitionName)(h.value, "fade", q.maskTransitionName)
        });
      });
      return function() {
        var y, q = ((y = x.locale) === null || y === void 0 ? void 0 : y.Image) || g.default.Image, W = function() {
          return (0, c.createVNode)("div", {
            class: "".concat(_.value, "-mask-info")
          }, [(0, c.createVNode)(o.default, null, null), q == null ? void 0 : q.preview]);
        }, ae = M.previewMask, G = ae === void 0 ? d.previewMask || W : ae;
        return (0, c.createVNode)(w.default, (0, l.default)((0, l.default)({}, (0, l.default)((0, l.default)((0, l.default)({}, j), M), {}, {
          prefixCls: _.value
        })), {}, {
          preview: O.value
        }), (0, l.default)((0, l.default)({}, d), {}, {
          previewMask: typeof G == "function" ? G : null
        }));
      };
    }
  });
  v.PreviewGroup = i.default, v.install = function(m) {
    return m.component(v.name, v), m.component(v.PreviewGroup.name, v.PreviewGroup), m;
  };
  var N = v;
  t.default = N;
})(et);
const gr = /* @__PURE__ */ Tt(et), hr = /* @__PURE__ */ tr({
  __proto__: null,
  default: gr
}, [et]), Yr = Dt({
  props: {
    modelValue: {
      type: Array,
      default: () => []
    }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e, attrs: u }) {
    const c = Fe([]), l = Fe(""), p = Fe(!1), w = (r) => {
      p.value = r;
    };
    nt(c, (r) => {
      e("update:modelValue", r);
    }), nt(
      () => t.modelValue,
      (r) => {
        if (r != null && r.length > 0 && c.value != null) {
          if (c.value === r)
            return;
          c.value.length = 0, c.value.push(...r);
        }
      },
      { deep: !0, immediate: !0 }
    );
    function n(r) {
      Et(() => {
        c.value = r;
      });
    }
    const g = (r) => {
      var s, v;
      if (r.file.status !== "uploading") {
        if (r.file.status === "done") {
          const N = (v = (s = r.file.response) == null ? void 0 : s.data) == null ? void 0 : v.url;
          if (!r.file.url && !N) {
            r.file.status = "error", Ze.error("上传失败");
            return;
          }
          r.file.url = N, r.file.thumbUrl = N;
        }
        r.file.status === "error" && Ze.error("upload error");
      }
    }, a = (r) => {
    }, i = Lt(() => ({
      ...u,
      "list-type": "picture-card",
      accept: "image/gif,image/jpeg,image/jpg,image/png,image/svg",
      "onUpdate:file-list": n,
      "file-list": c.value,
      "onBefore-upload": a,
      onChange: g,
      onPreview: o
    }));
    function o(r) {
      r.url && (l.value = r.url, w(!0));
    }
    function f() {
      l.value && Ze.error("图片地址无法访问!");
    }
    return () => Ce(
      "div",
      {
        class: "epic-upload-image"
      },
      {
        default: () => [
          Ce(jt, i.value, {
            default: () => [
              Ce("div", null, {
                default: () => [
                  Ce("span", {
                    class: "iconfont icon-shangchuan1",
                    style: { "margin-right": "2px" }
                  }),
                  Ce(
                    "div",
                    { class: "ant-upload-text" },
                    { default: () => "点击上传" }
                  )
                ]
              })
            ]
          }),
          Ce(hr, {
            style: { display: "none" },
            src: l.value,
            preview: {
              visible: p,
              onVisibleChange: w
            },
            onError: f
          })
        ]
      }
    );
  }
});
export {
  Yr as default
};
