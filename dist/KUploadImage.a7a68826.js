import { defineComponent as Dt, ref as Ae, watch as at, computed as Et, h as Ce } from "vue";
import { d as Lt, m as Ze } from "./index.06c6e9f6.js";
import { a as jt } from "./_commonjsHelpers.da91e947.js";
import { E as Tt, H as $t, l as Ct, b as ge, k as ie, r as Je, c as Qe, d as yt, M as zt, a as Ft, e as Gt, T as Ut, B as $e, i as bt, f as Wt, j as At } from "./useConfigInject.fdc04e2e.js";
import { _ as ye } from "./index.1fa3133f.js";
import { r as Q } from "./_vue_commonjs-external.cdc460b2.js";
import { g as Mt } from "./useMergedState.94fe30d0.js";
import { a as Zt, r as kt, b as Ht } from "./index.b3acc7ea.js";
import { r as Bt } from "./Portal.a423630d.js";
import { r as Xt } from "./KeyCode.93922cee.js";
import { r as Yt } from "./raf.f4e1fc4f.js";
import { r as Kt } from "./LeftOutlined.cc9d3903.js";
import { r as Jt } from "./RightOutlined.6a1a2e8d.js";
import { r as Qt } from "./EyeOutlined.44c22b8a.js";
import "./pickAttrs.65eceb8b.js";
import "./index.ae5edccb.js";
import "./_flatRest.969e6721.js";
import "./Col.c9fdc545.js";
import "./styleChecker.856616fa.js";
import "./index.f6071fa7.js";
import "./CheckOutlined.69455364.js";
import "./collapseMotion.7799b65c.js";
import "./FormItemContext.896a7bec.js";
import "./index.8e979d13.js";
import "./index.ece5d132.js";
import "./wave.712e07cd.js";
import "./classCallCheck.fb739271.js";
import "./useRefs.8c7f5dd6.js";
import "./colors.6e77f922.js";
import "./vnode.716a0aad.js";
import "./firstNotUndefined.4390bc7f.js";
import "./index.1e43ecc1.js";
import "./ResizeObserver.es.f11dbe23.js";
import "./omit.ba8a174d.js";
var Rt = {}, ke = {}, re = {}, He, nt;
function er() {
  if (nt)
    return He;
  nt = 1;
  var a = Tt(), t = $t(), i = "[object Number]";
  function v(l) {
    return typeof l == "number" || t(l) && a(l) == i;
  }
  return He = v, He;
}
var H = {}, ut;
function et() {
  if (ut)
    return H;
  ut = 1, Object.defineProperty(H, "__esModule", {
    value: !0
  }), H.get = m, H.getClientSize = u, H.getDocSize = r, H.getOffset = f, H.getOuterHeight = g, H.getOuterWidth = n, H.getScroll = o, H.set = w;
  var a = /margin|padding|width|height|max|min|offset/, t = {
    left: !0,
    top: !0
  }, i = {
    cssFloat: 1,
    styleFloat: 1,
    float: 1
  };
  function v(e) {
    return e.nodeType === 1 ? e.ownerDocument.defaultView.getComputedStyle(e, null) : {};
  }
  function l(e, c, s) {
    if (c = c.toLowerCase(), s === "auto") {
      if (c === "height")
        return e.offsetHeight;
      if (c === "width")
        return e.offsetWidth;
    }
    return c in t || (t[c] = a.test(c)), t[c] ? parseFloat(s) || 0 : s;
  }
  function m(e, c) {
    var s = arguments.length, R = v(e);
    return c = i[c] ? "cssFloat" in e.style ? "cssFloat" : "styleFloat" : c, s === 1 ? R : l(e, c, R[c] || e.style[c]);
  }
  function w(e, c, s) {
    var R = arguments.length;
    if (c = i[c] ? "cssFloat" in e.style ? "cssFloat" : "styleFloat" : c, R === 3)
      return typeof s == "number" && a.test(c) && (s = "".concat(s, "px")), e.style[c] = s, s;
    for (var p in c)
      c.hasOwnProperty(p) && w(e, p, c[p]);
    return v(e);
  }
  function n(e) {
    return e === document.body ? document.documentElement.clientWidth : e.offsetWidth;
  }
  function g(e) {
    return e === document.body ? window.innerHeight || document.documentElement.clientHeight : e.offsetHeight;
  }
  function r() {
    var e = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth), c = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
    return {
      width: e,
      height: c
    };
  }
  function u() {
    var e = document.documentElement.clientWidth, c = window.innerHeight || document.documentElement.clientHeight;
    return {
      width: e,
      height: c
    };
  }
  function o() {
    return {
      scrollLeft: Math.max(document.documentElement.scrollLeft, document.body.scrollLeft),
      scrollTop: Math.max(document.documentElement.scrollTop, document.body.scrollTop)
    };
  }
  function f(e) {
    var c = e.getBoundingClientRect(), s = document.documentElement;
    return {
      left: c.left + (window.pageXOffset || s.scrollLeft) - (s.clientLeft || document.body.clientLeft || 0),
      top: c.top + (window.pageYOffset || s.scrollTop) - (s.clientTop || document.body.clientTop || 0)
    };
  }
  return H;
}
var de = {}, Ve = {}, it;
function tr() {
  if (it)
    return Ve;
  it = 1;
  var a = ie.exports;
  Object.defineProperty(Ve, "__esModule", {
    value: !0
  }), Ve.default = m;
  var t = a(Ct()), i = a(ge()), v = a(Yt()), l = Q;
  function m(w) {
    var n = (0, l.ref)(null), g = (0, l.reactive)((0, i.default)({}, w)), r = (0, l.ref)([]), u = function(f) {
      n.value === null && (r.value = [], n.value = (0, v.default)(function() {
        var e;
        r.value.forEach(function(c) {
          e = (0, i.default)((0, i.default)({}, e), c);
        }), (0, t.default)(g, e), n.value = null;
      })), r.value.push(f);
    };
    return (0, l.onMounted)(function() {
      n.value && v.default.cancel(n.value);
    }), [g, u];
  }
  return Ve;
}
var De = {}, ot;
function rr() {
  if (ot)
    return De;
  ot = 1;
  var a = ie.exports;
  Object.defineProperty(De, "__esModule", {
    value: !0
  }), De.default = m;
  var t = a(ge()), i = a(Je()), v = et();
  function l(w, n, g, r) {
    var u = n + g, o = (g - r) / 2;
    if (g > r) {
      if (n > 0)
        return (0, i.default)({}, w, o);
      if (n < 0 && u < r)
        return (0, i.default)({}, w, -o);
    } else if (n < 0 || u > r)
      return (0, i.default)({}, w, n < 0 ? o : -o);
    return {};
  }
  function m(w, n, g, r) {
    var u = (0, v.getClientSize)(), o = u.width, f = u.height, e = null;
    return w <= o && n <= f ? e = {
      x: 0,
      y: 0
    } : (w > o || n > f) && (e = (0, t.default)((0, t.default)({}, l("x", g, w, o)), l("y", r, n, f))), e;
  }
  return De;
}
var pe = {}, lt;
function tt() {
  if (lt)
    return pe;
  lt = 1;
  var a = ie.exports;
  Object.defineProperty(pe, "__esModule", {
    value: !0
  }), pe.default = pe.context = void 0;
  var t = Q, i = a(ge()), v = a(Zt()), l = a(Ct()), m = a(Qe()), w = a(ye.exports), n = rt(), g = a(St()), r = a(Mt()), u = Symbol("previewGroupContext"), o = {
    provide: function(s) {
      (0, t.provide)(u, s);
    },
    inject: function() {
      return (0, t.inject)(u, {
        isPreviewGroup: (0, t.ref)(!1),
        previewUrls: (0, t.computed)(function() {
          return /* @__PURE__ */ new Map();
        }),
        setPreviewUrls: function() {
        },
        current: (0, t.ref)(null),
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
  var f = (0, t.defineComponent)({
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
    setup: function(s, R) {
      var p = R.slots, S = (0, t.computed)(function() {
        var I = {
          visible: void 0,
          onVisibleChange: function() {
          },
          getContainer: void 0,
          current: 0
        };
        return (0, w.default)(s.preview) === "object" ? (0, n.mergeDefaultValue)(s.preview, I) : I;
      }), x = (0, t.reactive)(/* @__PURE__ */ new Map()), d = (0, t.ref)(), j = (0, t.computed)(function() {
        return S.value.visible;
      }), D = (0, t.computed)(function() {
        return S.value.getContainer;
      }), _ = function(C, V) {
        var L, $;
        (L = ($ = S.value).onVisibleChange) === null || L === void 0 || L.call($, C, V);
      }, h = (0, r.default)(!!j.value, {
        value: j,
        onChange: _
      }), N = (0, m.default)(h, 2), O = N[0], y = N[1], q = (0, t.ref)(null), G = (0, t.computed)(function() {
        return j.value !== void 0;
      }), ae = (0, t.computed)(function() {
        return Array.from(x.keys());
      }), z = (0, t.computed)(function() {
        return ae.value[S.value.current];
      }), E = (0, t.computed)(function() {
        return new Map(Array.from(x).filter(function(I) {
          var C = (0, m.default)(I, 2), V = C[1].canPreview;
          return !!V;
        }).map(function(I) {
          var C = (0, m.default)(I, 2), V = C[0], L = C[1].url;
          return [V, L];
        }));
      }), B = function(C, V) {
        var L = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
        x.set(C, {
          url: V,
          canPreview: L
        });
      }, ee = function(C) {
        d.value = C;
      }, oe = function(C) {
        q.value = C;
      }, F = function(C, V) {
        var L = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, $ = function() {
          x.delete(C);
        };
        return x.set(C, {
          url: V,
          canPreview: L
        }), $;
      }, W = function(C) {
        C == null || C.stopPropagation(), y(!1), oe(null);
      };
      return (0, t.watch)(z, function(I) {
        ee(I);
      }, {
        immediate: !0,
        flush: "post"
      }), (0, t.watchEffect)(function() {
        O.value && G.value && ee(z.value);
      }, {
        flush: "post"
      }), o.provide({
        isPreviewGroup: (0, t.ref)(!0),
        previewUrls: E,
        setPreviewUrls: B,
        current: d,
        setCurrent: ee,
        setShowPreview: y,
        setMousePosition: oe,
        registerImage: F
      }), function() {
        var I = (0, l.default)({}, ((0, v.default)(S.value), S.value));
        return (0, t.createVNode)(t.Fragment, null, [p.default && p.default(), (0, t.createVNode)(g.default, (0, i.default)((0, i.default)({}, I), {}, {
          "ria-hidden": !O.value,
          visible: O.value,
          prefixCls: s.previewPrefixCls,
          onClose: W,
          mousePosition: q.value,
          src: E.value.get(d.value),
          icons: s.icons,
          getContainer: D.value
        }), null)]);
      };
    }
  }), e = f;
  return pe.default = e, pe;
}
var ft;
function St() {
  if (ft)
    return de;
  ft = 1;
  var a = ie.exports;
  Object.defineProperty(de, "__esModule", {
    value: !0
  }), de.previewProps = de.default = void 0;
  var t = Q, i = a(Je()), v = a(Qe()), l = a(ge()), m = a(yt()), w = a(kt()), n = Ht(), g = et(), r = a(Bt()), u = a(Xt()), o = zt(), f = a(tr()), e = a(rr()), c = tt(), s = {
    x: 0,
    y: 0
  }, R = (0, l.default)((0, l.default)({}, (0, n.dialogPropTypes)()), {}, {
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
  de.previewProps = R;
  var p = (0, t.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "Preview",
    inheritAttrs: !1,
    props: R,
    emits: ["close", "afterClose"],
    setup: function(d, j) {
      var D = j.emit, _ = j.attrs, h = (0, t.reactive)(d.icons), N = h.rotateLeft, O = h.rotateRight, y = h.zoomIn, q = h.zoomOut, G = h.close, ae = h.left, z = h.right, E = (0, t.ref)(1), B = (0, t.ref)(0), ee = (0, f.default)(s), oe = (0, v.default)(ee, 2), F = oe[0], W = oe[1], I = function() {
        return D("close");
      }, C = (0, t.ref)(), V = (0, t.reactive)({
        originX: 0,
        originY: 0,
        deltaX: 0,
        deltaY: 0
      }), L = (0, t.ref)(!1), $ = c.context.inject(), ne = $.previewUrls, le = $.current, ue = $.isPreviewGroup, te = $.setCurrent, he = (0, t.computed)(function() {
        return ne.value.size;
      }), fe = (0, t.computed)(function() {
        return Array.from(ne.value.keys());
      }), U = (0, t.computed)(function() {
        return fe.value.indexOf(le.value);
      }), ze = (0, t.computed)(function() {
        return ue.value ? ne.value.get(le.value) : d.src;
      }), we = (0, t.computed)(function() {
        return ue.value && he.value > 1;
      }), X = (0, t.ref)({
        wheelDirection: 0
      }), Se = function() {
        E.value = 1, B.value = 0, W(s), D("afterClose");
      }, xe = function() {
        E.value++, W(s);
      }, qe = function() {
        E.value > 1 && E.value--, W(s);
      }, Fe = function() {
        B.value += 90;
      }, ce = function() {
        B.value -= 90;
      }, _e = function(P) {
        P.preventDefault(), P.stopPropagation(), U.value > 0 && te(fe.value[U.value - 1]);
      }, Ne = function(P) {
        P.preventDefault(), P.stopPropagation(), U.value < he.value - 1 && te(fe.value[U.value + 1]);
      }, M = (0, m.default)((0, i.default)({}, "".concat(d.prefixCls, "-moving"), L.value)), T = "".concat(d.prefixCls, "-operations-operation"), A = "".concat(d.prefixCls, "-operations-icon"), Y = [{
        icon: G,
        onClick: I,
        type: "close"
      }, {
        icon: y,
        onClick: xe,
        type: "zoomIn"
      }, {
        icon: q,
        onClick: qe,
        type: "zoomOut",
        disabled: (0, t.computed)(function() {
          return E.value === 1;
        })
      }, {
        icon: O,
        onClick: Fe,
        type: "rotateRight"
      }, {
        icon: N,
        onClick: ce,
        type: "rotateLeft"
      }], Z = function() {
        if (d.visible && L.value) {
          var P = C.value.offsetWidth * E.value, K = C.value.offsetHeight * E.value, se = (0, g.getOffset)(C.value), J = se.left, ve = se.top, k = B.value % 180 !== 0;
          L.value = !1;
          var Pe = (0, e.default)(k ? K : P, k ? P : K, J, ve);
          Pe && W((0, l.default)({}, Pe));
        }
      }, Ge = function(P) {
        P.button === 0 && (P.preventDefault(), P.stopPropagation(), V.deltaX = P.pageX - F.x, V.deltaY = P.pageY - F.y, V.originX = F.x, V.originY = F.y, L.value = !0);
      }, be = function(P) {
        d.visible && L.value && W({
          x: P.pageX - V.deltaX,
          y: P.pageY - V.deltaY
        });
      }, Ue = function(P) {
        if (!!d.visible) {
          P.preventDefault();
          var K = P.deltaY;
          X.value = {
            wheelDirection: K
          };
        }
      }, Ie = function(P) {
        !d.visible || !we.value || (P.preventDefault(), P.keyCode === u.default.LEFT ? U.value > 0 && te(fe.value[U.value - 1]) : P.keyCode === u.default.RIGHT && U.value < he.value - 1 && te(fe.value[U.value + 1]));
      }, We = function() {
        d.visible && (E.value !== 1 && (E.value = 1), (F.x !== s.x || F.y !== s.y) && W(s));
      }, Me = function() {
      };
      return (0, t.onMounted)(function() {
        (0, t.watch)([function() {
          return d.visible;
        }, L], function() {
          Me();
          var b, P, K = (0, r.default)(window, "mouseup", Z, !1), se = (0, r.default)(window, "mousemove", be, !1), J = (0, r.default)(window, "wheel", Ue, {
            passive: !1
          }), ve = (0, r.default)(window, "keydown", Ie, !1);
          try {
            window.top !== window.self && (b = (0, r.default)(window.top, "mouseup", Z, !1), P = (0, r.default)(window.top, "mousemove", be, !1));
          } catch (k) {
            (0, o.warning)(!1, "[vc-image] ".concat(k));
          }
          Me = function() {
            K.remove(), se.remove(), J.remove(), ve.remove(), b && b.remove(), P && P.remove();
          };
        }, {
          flush: "post",
          immediate: !0
        }), (0, t.watch)([X], function() {
          var b = X.value.wheelDirection;
          b > 0 ? qe() : b < 0 && xe();
        });
      }), (0, t.onUnmounted)(function() {
        Me();
      }), function() {
        var b = d.visible, P = d.prefixCls, K = d.rootClassName;
        return (0, t.createVNode)(w.default, (0, l.default)((0, l.default)({}, _), {}, {
          transitionName: "zoom",
          maskTransitionName: "fade",
          closable: !1,
          keyboard: !0,
          prefixCls: P,
          onClose: I,
          afterClose: Se,
          visible: b,
          wrapClassName: M,
          rootClassName: K,
          getContainer: d.getContainer
        }), {
          default: function() {
            return [(0, t.createVNode)("ul", {
              class: "".concat(d.prefixCls, "-operations")
            }, [Y.map(function(J) {
              var ve = J.icon, k = J.onClick, Pe = J.type, Oe = J.disabled;
              return (0, t.createVNode)("li", {
                class: (0, m.default)(T, (0, i.default)({}, "".concat(d.prefixCls, "-operations-operation-disabled"), Oe && (Oe == null ? void 0 : Oe.value))),
                onClick: k,
                key: Pe
              }, [(0, t.cloneVNode)(ve, {
                class: A
              })]);
            })]), (0, t.createVNode)("div", {
              class: "".concat(d.prefixCls, "-img-wrapper"),
              style: {
                transform: "translate3d(".concat(F.x, "px, ").concat(F.y, "px, 0)")
              }
            }, [(0, t.createVNode)("img", {
              onMousedown: Ge,
              onDblclick: We,
              ref: C,
              class: "".concat(d.prefixCls, "-img"),
              src: ze.value,
              alt: d.alt,
              style: {
                transform: "scale3d(".concat(E.value, ", ").concat(E.value, ", 1) rotate(").concat(B.value, "deg)")
              }
            }, null)]), we.value && (0, t.createVNode)("div", {
              class: (0, m.default)("".concat(d.prefixCls, "-switch-left"), (0, i.default)({}, "".concat(d.prefixCls, "-switch-left-disabled"), U.value <= 0)),
              onClick: _e
            }, [ae]), we.value && (0, t.createVNode)("div", {
              class: (0, m.default)("".concat(d.prefixCls, "-switch-right"), (0, i.default)({}, "".concat(d.prefixCls, "-switch-right-disabled"), U.value >= he.value - 1)),
              onClick: Ne
            }, [z])];
          }
        });
      };
    }
  }), S = p;
  return de.default = S, de;
}
var ct;
function rt() {
  if (ct)
    return re;
  ct = 1;
  var a = ie.exports, t = ye.exports;
  Object.defineProperty(re, "__esModule", {
    value: !0
  }), re.mergeDefaultValue = re.imageProps = re.default = void 0;
  var i = Q, v = a(Je()), l = a(Ft()), m = a(Qe()), w = a(ye.exports), n = a(ge()), g = a(er()), r = a(yt()), u = a(Gt()), o = et(), f = a(Mt()), e = a(St()), c = p(tt()), s = ["icons", "maskClassName"];
  function R(_) {
    if (typeof WeakMap != "function")
      return null;
    var h = /* @__PURE__ */ new WeakMap(), N = /* @__PURE__ */ new WeakMap();
    return (R = function(y) {
      return y ? N : h;
    })(_);
  }
  function p(_, h) {
    if (!h && _ && _.__esModule)
      return _;
    if (_ === null || t(_) !== "object" && typeof _ != "function")
      return { default: _ };
    var N = R(h);
    if (N && N.has(_))
      return N.get(_);
    var O = {}, y = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var q in _)
      if (q !== "default" && Object.prototype.hasOwnProperty.call(_, q)) {
        var G = y ? Object.getOwnPropertyDescriptor(_, q) : null;
        G && (G.get || G.set) ? Object.defineProperty(O, q, G) : O[q] = _[q];
      }
    return O.default = _, N && N.set(_, O), O;
  }
  var S = function() {
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
      placeholder: u.default.any,
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
  re.imageProps = S;
  var x = function(h, N) {
    var O = (0, n.default)({}, h);
    return Object.keys(N).forEach(function(y) {
      h[y] === void 0 && (O[y] = N[y]);
    }), O;
  };
  re.mergeDefaultValue = x;
  var d = 0, j = (0, i.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "Image",
    inheritAttrs: !1,
    props: S(),
    emits: ["click", "error"],
    setup: function(h, N) {
      var O = N.attrs, y = N.slots, q = N.emit, G = (0, i.computed)(function() {
        return h.prefixCls;
      }), ae = (0, i.computed)(function() {
        return "".concat(G.value, "-preview");
      }), z = (0, i.computed)(function() {
        var M = {
          visible: void 0,
          onVisibleChange: function() {
          },
          getContainer: void 0
        };
        return (0, w.default)(h.preview) === "object" ? x(h.preview, M) : M;
      }), E = (0, i.computed)(function() {
        var M;
        return (M = z.value.src) !== null && M !== void 0 ? M : h.src;
      }), B = (0, i.computed)(function() {
        return h.placeholder && h.placeholder !== !0 || y.placeholder;
      }), ee = (0, i.computed)(function() {
        return z.value.visible;
      }), oe = (0, i.computed)(function() {
        return z.value.getContainer;
      }), F = (0, i.computed)(function() {
        return ee.value !== void 0;
      }), W = function(T, A) {
        var Y, Z;
        (Y = (Z = z.value).onVisibleChange) === null || Y === void 0 || Y.call(Z, T, A);
      }, I = (0, f.default)(!!ee.value, {
        value: ee,
        onChange: W
      }), C = (0, m.default)(I, 2), V = C[0], L = C[1];
      (0, i.watch)(V, function(M, T) {
        W(M, T);
      });
      var $ = (0, i.ref)(B.value ? "loading" : "normal");
      (0, i.watch)(function() {
        return h.src;
      }, function() {
        $.value = B.value ? "loading" : "normal";
      });
      var ne = (0, i.ref)(null), le = (0, i.computed)(function() {
        return $.value === "error";
      }), ue = c.context.inject(), te = ue.isPreviewGroup, he = ue.setCurrent, fe = ue.setShowPreview, U = ue.setMousePosition, ze = ue.registerImage, we = (0, i.ref)(d++), X = (0, i.computed)(function() {
        return h.preview && !le.value;
      }), Se = function() {
        $.value = "normal";
      }, xe = function(T) {
        $.value = "error", q("error", T);
      }, qe = function(T) {
        if (!F.value) {
          var A = (0, o.getOffset)(T.target), Y = A.left, Z = A.top;
          te.value ? (he(we.value), U({
            x: Y,
            y: Z
          })) : ne.value = {
            x: Y,
            y: Z
          };
        }
        te.value ? fe(!0) : L(!0), q("click", T);
      }, Fe = function() {
        L(!1), F.value || (ne.value = null);
      }, ce = (0, i.ref)(null);
      (0, i.watch)(function() {
        return ce;
      }, function() {
        $.value === "loading" && ce.value.complete && (ce.value.naturalWidth || ce.value.naturalHeight) && Se();
      });
      var _e = function() {
      };
      (0, i.onMounted)(function() {
        (0, i.watch)([E, X], function() {
          if (_e(), !te.value)
            return function() {
            };
          _e = ze(we.value, E.value, X.value), X.value || _e();
        }, {
          flush: "post",
          immediate: !0
        });
      }), (0, i.onUnmounted)(function() {
        _e();
      });
      var Ne = function(T) {
        return (0, g.default)(T) ? T + "px" : T;
      };
      return function() {
        var M = h.prefixCls, T = h.wrapperClassName, A = h.fallback, Y = h.src, Z = h.placeholder, Ge = h.wrapperStyle, be = h.rootClassName, Ue = O.width, Ie = O.height, We = O.crossorigin, Me = O.decoding, b = O.alt, P = O.sizes, K = O.srcset, se = O.usemap, J = O.class, ve = O.style, k = z.value, Pe = k.icons, Oe = k.maskClassName, xt = (0, l.default)(k, s), qt = (0, r.default)(M, T, be, (0, v.default)({}, "".concat(M, "-error"), le.value)), Nt = le.value && A ? A : E.value, It = {
          crossorigin: We,
          decoding: Me,
          alt: b,
          sizes: P,
          srcset: K,
          usemap: se,
          class: (0, r.default)("".concat(M, "-img"), (0, v.default)({}, "".concat(M, "-img-placeholder"), Z === !0), J),
          style: (0, n.default)({
            height: Ie
          }, ve)
        };
        return (0, i.createVNode)(i.Fragment, null, [(0, i.createVNode)("div", {
          class: qt,
          onClick: X.value ? qe : function(Vt) {
            q("click", Vt);
          },
          style: (0, n.default)({
            width: Ne(Ue),
            height: Ne(Ie)
          }, Ge)
        }, [(0, i.createVNode)("img", (0, n.default)((0, n.default)((0, n.default)({}, It), le.value && A ? {
          src: A
        } : {
          onLoad: Se,
          onError: xe,
          src: Y
        }), {}, {
          ref: ce
        }), null), $.value === "loading" && (0, i.createVNode)("div", {
          "aria-hidden": "true",
          class: "".concat(M, "-placeholder")
        }, [Z || y.placeholder && y.placeholder()]), y.previewMask && X.value && (0, i.createVNode)("div", {
          class: ["".concat(M, "-mask"), Oe]
        }, [y.previewMask()])]), !te.value && X.value && (0, i.createVNode)(e.default, (0, n.default)((0, n.default)({}, xt), {}, {
          "aria-hidden": !V.value,
          visible: V.value,
          prefixCls: ae.value,
          onClose: Fe,
          mousePosition: ne.value,
          src: Nt,
          alt: b,
          getContainer: oe.value,
          icons: Pe,
          rootClassName: be
        }), null)]);
      };
    }
  });
  j.PreviewGroup = c.default;
  var D = j;
  return re.default = D, re;
}
var st;
function ar() {
  return st || (st = 1, function(a) {
    var t = ye.exports;
    Object.defineProperty(a, "__esModule", {
      value: !0
    });
    var i = {};
    a.default = void 0;
    var v = m(rt());
    Object.keys(v).forEach(function(n) {
      n === "default" || n === "__esModule" || Object.prototype.hasOwnProperty.call(i, n) || n in a && a[n] === v[n] || Object.defineProperty(a, n, {
        enumerable: !0,
        get: function() {
          return v[n];
        }
      });
    });
    function l(n) {
      if (typeof WeakMap != "function")
        return null;
      var g = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
      return (l = function(o) {
        return o ? r : g;
      })(n);
    }
    function m(n, g) {
      if (!g && n && n.__esModule)
        return n;
      if (n === null || t(n) !== "object" && typeof n != "function")
        return { default: n };
      var r = l(g);
      if (r && r.has(n))
        return r.get(n);
      var u = {}, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var f in n)
        if (f !== "default" && Object.prototype.hasOwnProperty.call(n, f)) {
          var e = o ? Object.getOwnPropertyDescriptor(n, f) : null;
          e && (e.get || e.set) ? Object.defineProperty(u, f, e) : u[f] = n[f];
        }
      return u.default = n, r && r.set(n, u), u;
    }
    var w = v.default;
    a.default = w;
  }(ke)), ke;
}
var Re = {}, vt;
function nr() {
  if (vt)
    return Re;
  vt = 1;
  var a = ie.exports;
  Object.defineProperty(Re, "__esModule", {
    value: !0
  }), Re.default = void 0;
  var t = a(Ut()), i = t.default;
  return Re.default = i, Re;
}
var me = {}, Be = {}, Ee = {}, dt;
function ur() {
  if (dt)
    return Ee;
  dt = 1, Object.defineProperty(Ee, "__esModule", { value: !0 });
  var a = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "defs", attrs: {}, children: [{ tag: "style", attrs: {} }] }, { tag: "path", attrs: { d: "M672 418H144c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H188V494h440v326z" } }, { tag: "path", attrs: { d: "M819.3 328.5c-78.8-100.7-196-153.6-314.6-154.2l-.2-64c0-6.5-7.6-10.1-12.6-6.1l-128 101c-4 3.1-3.9 9.1 0 12.3L492 318.6c5.1 4 12.7.4 12.6-6.1v-63.9c12.9.1 25.9.9 38.8 2.5 42.1 5.2 82.1 18.2 119 38.7 38.1 21.2 71.2 49.7 98.4 84.3 27.1 34.7 46.7 73.7 58.1 115.8a325.95 325.95 0 016.5 140.9h74.9c14.8-103.6-11.3-213-81-302.3z" } }] }, name: "rotate-left", theme: "outlined" };
  return Ee.default = a, Ee;
}
var pt;
function ir() {
  return pt || (pt = 1, function(a) {
    Object.defineProperty(a, "__esModule", {
      value: !0
    }), a.default = void 0;
    var t = Q, i = l(ur()), v = l($e());
    function l(r) {
      return r && r.__esModule ? r : { default: r };
    }
    function m(r) {
      for (var u = 1; u < arguments.length; u++) {
        var o = arguments[u] != null ? Object(arguments[u]) : {}, f = Object.keys(o);
        typeof Object.getOwnPropertySymbols == "function" && (f = f.concat(Object.getOwnPropertySymbols(o).filter(function(e) {
          return Object.getOwnPropertyDescriptor(o, e).enumerable;
        }))), f.forEach(function(e) {
          w(r, e, o[e]);
        });
      }
      return r;
    }
    function w(r, u, o) {
      return u in r ? Object.defineProperty(r, u, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : r[u] = o, r;
    }
    var n = function(u, o) {
      var f = m({}, u, o.attrs);
      return (0, t.createVNode)(v.default, m({}, f, {
        icon: i.default
      }), null);
    };
    n.displayName = "RotateLeftOutlined", n.inheritAttrs = !1;
    var g = n;
    a.default = g;
  }(Be)), Be;
}
var Xe = {}, Le = {}, mt;
function or() {
  if (mt)
    return Le;
  mt = 1, Object.defineProperty(Le, "__esModule", { value: !0 });
  var a = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "defs", attrs: {}, children: [{ tag: "style", attrs: {} }] }, { tag: "path", attrs: { d: "M480.5 251.2c13-1.6 25.9-2.4 38.8-2.5v63.9c0 6.5 7.5 10.1 12.6 6.1L660 217.6c4-3.2 4-9.2 0-12.3l-128-101c-5.1-4-12.6-.4-12.6 6.1l-.2 64c-118.6.5-235.8 53.4-314.6 154.2A399.75 399.75 0 00123.5 631h74.9c-.9-5.3-1.7-10.7-2.4-16.1-5.1-42.1-2.1-84.1 8.9-124.8 11.4-42.2 31-81.1 58.1-115.8 27.2-34.7 60.3-63.2 98.4-84.3 37-20.6 76.9-33.6 119.1-38.8z" } }, { tag: "path", attrs: { d: "M880 418H352c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H396V494h440v326z" } }] }, name: "rotate-right", theme: "outlined" };
  return Le.default = a, Le;
}
var gt;
function lr() {
  return gt || (gt = 1, function(a) {
    Object.defineProperty(a, "__esModule", {
      value: !0
    }), a.default = void 0;
    var t = Q, i = l(or()), v = l($e());
    function l(r) {
      return r && r.__esModule ? r : { default: r };
    }
    function m(r) {
      for (var u = 1; u < arguments.length; u++) {
        var o = arguments[u] != null ? Object(arguments[u]) : {}, f = Object.keys(o);
        typeof Object.getOwnPropertySymbols == "function" && (f = f.concat(Object.getOwnPropertySymbols(o).filter(function(e) {
          return Object.getOwnPropertyDescriptor(o, e).enumerable;
        }))), f.forEach(function(e) {
          w(r, e, o[e]);
        });
      }
      return r;
    }
    function w(r, u, o) {
      return u in r ? Object.defineProperty(r, u, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : r[u] = o, r;
    }
    var n = function(u, o) {
      var f = m({}, u, o.attrs);
      return (0, t.createVNode)(v.default, m({}, f, {
        icon: i.default
      }), null);
    };
    n.displayName = "RotateRightOutlined", n.inheritAttrs = !1;
    var g = n;
    a.default = g;
  }(Xe)), Xe;
}
var Ye = {}, je = {}, ht;
function fr() {
  if (ht)
    return je;
  ht = 1, Object.defineProperty(je, "__esModule", { value: !0 });
  var a = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M637 443H519V309c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v134H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h118v134c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V519h118c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z" } }] }, name: "zoom-in", theme: "outlined" };
  return je.default = a, je;
}
var wt;
function cr() {
  return wt || (wt = 1, function(a) {
    Object.defineProperty(a, "__esModule", {
      value: !0
    }), a.default = void 0;
    var t = Q, i = l(fr()), v = l($e());
    function l(r) {
      return r && r.__esModule ? r : { default: r };
    }
    function m(r) {
      for (var u = 1; u < arguments.length; u++) {
        var o = arguments[u] != null ? Object(arguments[u]) : {}, f = Object.keys(o);
        typeof Object.getOwnPropertySymbols == "function" && (f = f.concat(Object.getOwnPropertySymbols(o).filter(function(e) {
          return Object.getOwnPropertyDescriptor(o, e).enumerable;
        }))), f.forEach(function(e) {
          w(r, e, o[e]);
        });
      }
      return r;
    }
    function w(r, u, o) {
      return u in r ? Object.defineProperty(r, u, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : r[u] = o, r;
    }
    var n = function(u, o) {
      var f = m({}, u, o.attrs);
      return (0, t.createVNode)(v.default, m({}, f, {
        icon: i.default
      }), null);
    };
    n.displayName = "ZoomInOutlined", n.inheritAttrs = !1;
    var g = n;
    a.default = g;
  }(Ye)), Ye;
}
var Ke = {}, Te = {}, _t;
function sr() {
  if (_t)
    return Te;
  _t = 1, Object.defineProperty(Te, "__esModule", { value: !0 });
  var a = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M637 443H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h312c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z" } }] }, name: "zoom-out", theme: "outlined" };
  return Te.default = a, Te;
}
var Pt;
function vr() {
  return Pt || (Pt = 1, function(a) {
    Object.defineProperty(a, "__esModule", {
      value: !0
    }), a.default = void 0;
    var t = Q, i = l(sr()), v = l($e());
    function l(r) {
      return r && r.__esModule ? r : { default: r };
    }
    function m(r) {
      for (var u = 1; u < arguments.length; u++) {
        var o = arguments[u] != null ? Object(arguments[u]) : {}, f = Object.keys(o);
        typeof Object.getOwnPropertySymbols == "function" && (f = f.concat(Object.getOwnPropertySymbols(o).filter(function(e) {
          return Object.getOwnPropertyDescriptor(o, e).enumerable;
        }))), f.forEach(function(e) {
          w(r, e, o[e]);
        });
      }
      return r;
    }
    function w(r, u, o) {
      return u in r ? Object.defineProperty(r, u, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : r[u] = o, r;
    }
    var n = function(u, o) {
      var f = m({}, u, o.attrs);
      return (0, t.createVNode)(v.default, m({}, f, {
        icon: i.default
      }), null);
    };
    n.displayName = "ZoomOutOutlined", n.inheritAttrs = !1;
    var g = n;
    a.default = g;
  }(Ke)), Ke;
}
var Ot;
function dr() {
  if (Ot)
    return me;
  Ot = 1;
  var a = ie.exports;
  Object.defineProperty(me, "__esModule", {
    value: !0
  }), me.icons = me.default = void 0;
  var t = Q, i = a(ge()), v = a(tt()), l = a(bt()), m = a(ir()), w = a(lr()), n = a(cr()), g = a(vr()), r = a(Wt()), u = a(Kt()), o = a(Jt()), f = {
    rotateLeft: (0, t.createVNode)(m.default, null, null),
    rotateRight: (0, t.createVNode)(w.default, null, null),
    zoomIn: (0, t.createVNode)(n.default, null, null),
    zoomOut: (0, t.createVNode)(g.default, null, null),
    close: (0, t.createVNode)(r.default, null, null),
    left: (0, t.createVNode)(u.default, null, null),
    right: (0, t.createVNode)(o.default, null, null)
  };
  me.icons = f;
  var e = (0, t.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "AImagePreviewGroup",
    inheritAttrs: !1,
    props: {
      previewPrefixCls: String
    },
    setup: function(R, p) {
      var S = p.attrs, x = p.slots, d = (0, l.default)("image", R), j = d.getPrefixCls, D = (0, t.computed)(function() {
        return j("image-preview", R.previewPrefixCls);
      });
      return function() {
        return (0, t.createVNode)(v.default, (0, i.default)((0, i.default)({}, (0, i.default)((0, i.default)({}, S), R)), {}, {
          icons: f,
          previewPrefixCls: D.value
        }), x);
      };
    }
  }), c = e;
  return me.default = c, me;
}
(function(a) {
  var t = ie.exports, i = ye.exports;
  Object.defineProperty(a, "__esModule", {
    value: !0
  }), Object.defineProperty(a, "ImagePreviewGroup", {
    enumerable: !0,
    get: function() {
      return u.default;
    }
  }), a.default = void 0, Object.defineProperty(a, "imageProps", {
    enumerable: !0,
    get: function() {
      return n.imageProps;
    }
  });
  var v = Q, l = t(ge()), m = t(ye.exports), w = t(ar()), n = rt(), g = t(nr()), r = t(bt()), u = c(dr()), o = t(Qt()), f = At();
  function e(p) {
    if (typeof WeakMap != "function")
      return null;
    var S = /* @__PURE__ */ new WeakMap(), x = /* @__PURE__ */ new WeakMap();
    return (e = function(j) {
      return j ? x : S;
    })(p);
  }
  function c(p, S) {
    if (!S && p && p.__esModule)
      return p;
    if (p === null || i(p) !== "object" && typeof p != "function")
      return { default: p };
    var x = e(S);
    if (x && x.has(p))
      return x.get(p);
    var d = {}, j = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var D in p)
      if (D !== "default" && Object.prototype.hasOwnProperty.call(p, D)) {
        var _ = j ? Object.getOwnPropertyDescriptor(p, D) : null;
        _ && (_.get || _.set) ? Object.defineProperty(d, D, _) : d[D] = p[D];
      }
    return d.default = p, x && x.set(p, d), d;
  }
  var s = (0, v.defineComponent)({
    name: "AImage",
    inheritAttrs: !1,
    props: (0, n.imageProps)(),
    setup: function(S, x) {
      var d = x.slots, j = x.attrs, D = (0, r.default)("image", S), _ = D.prefixCls, h = D.rootPrefixCls, N = D.configProvider, O = (0, v.computed)(function() {
        var y = S.preview;
        if (y === !1)
          return y;
        var q = (0, m.default)(y) === "object" ? y : {};
        return (0, l.default)((0, l.default)({
          icons: u.icons
        }, q), {}, {
          transitionName: (0, f.getTransitionName)(h.value, "zoom", q.transitionName),
          maskTransitionName: (0, f.getTransitionName)(h.value, "fade", q.maskTransitionName)
        });
      });
      return function() {
        var y, q = ((y = N.locale) === null || y === void 0 ? void 0 : y.Image) || g.default.Image, G = function() {
          return (0, v.createVNode)("div", {
            class: "".concat(_.value, "-mask-info")
          }, [(0, v.createVNode)(o.default, null, null), q == null ? void 0 : q.preview]);
        }, ae = S.previewMask, z = ae === void 0 ? d.previewMask || G : ae;
        return (0, v.createVNode)(w.default, (0, l.default)((0, l.default)({}, (0, l.default)((0, l.default)((0, l.default)({}, j), S), {}, {
          prefixCls: _.value
        })), {}, {
          preview: O.value
        }), (0, l.default)((0, l.default)({}, d), {}, {
          previewMask: typeof z == "function" ? z : null
        }));
      };
    }
  });
  s.PreviewGroup = u.default, s.install = function(p) {
    return p.component(s.name, s), p.component(s.PreviewGroup.name, s.PreviewGroup), p;
  };
  var R = s;
  a.default = R;
})(Rt);
const pr = /* @__PURE__ */ jt(Rt), Xr = Dt({
  emits: ["update:modelValue"],
  props: {
    modelValue: {
      type: Array,
      default: []
    }
  },
  setup(a, { emit: t, attrs: i }) {
    const v = Ae([]), l = Ae(""), m = Ae(!1), w = (e) => {
      m.value = e;
    };
    at(v, (e) => {
      t("update:modelValue", e);
    }), at(
      () => a.modelValue,
      (e) => {
        if (e && e.length > 0 && v.value) {
          if (v.value === e)
            return;
          v.value.length = 0, v.value.push(...e);
        }
      },
      { deep: !0, immediate: !0 }
    );
    function n(e) {
      v.value = e;
    }
    const g = (e) => {
      var c, s;
      if (e.file.status !== "uploading") {
        if (e.file.status === "done") {
          console.log(e.file.response);
          const R = (s = (c = e.file.response) == null ? void 0 : c.data) == null ? void 0 : s.url;
          if (console.log(R), !e.file.url && !R) {
            e.file.status = "error", Ze.error("\u4E0A\u4F20\u5931\u8D25");
            return;
          }
          e.file.url = R, e.file.thumbUrl = R;
        }
        e.file.status === "error" && Ze.error("upload error");
      }
    }, r = (e) => {
    }, u = Et(() => ({
      ...i,
      "list-type": "picture-card",
      "onUpdate:file-list": n,
      "onBefore-upload": r,
      onChange: g,
      onPreview: o
    }));
    function o(e) {
      !e.url || (l.value = e.url, w(!0));
    }
    function f() {
      if (!l.value)
        return !1;
      Ze.error("\u56FE\u7247\u5730\u5740\u65E0\u6CD5\u8BBF\u95EE!");
    }
    return () => Ce(
      "div",
      {
        class: "k-upload-image"
      },
      {
        default: () => [
          Ce(Lt, u, {
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
                    { default: () => "\u70B9\u51FB\u4E0A\u4F20" }
                  )
                ]
              })
            ]
          }),
          Ce(() => pr, {
            style: { display: "none" },
            src: l,
            preview: {
              visible: m,
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
  Xr as default
};
