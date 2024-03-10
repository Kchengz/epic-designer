import { r as z, i as j, g as W, c as Ne, e as Cr, F as gi, n as qr, C as Ie, J as G, L as mi, D as He, T as _i, U as yi, a as bi, k as Ti, b as wi, u as Pi, j as Ci } from "./useConfigInject-f4796704.mjs";
import { c as Bn, a as kn, r as Ln, d as qi, b as Ai } from "./Portal-6677def3.mjs";
import { r as Un } from "./raf-09a8b76f.mjs";
import { _ as Ar, r as Oi, a as Si } from "./index-4ddd22ca.mjs";
import { r as Wn } from "./vnode-35592114.mjs";
import { r as Mi } from "./ResizeObserver.es-8567d31b.mjs";
var ue = {}, se = {}, K = {}, le = {}, Ir;
function xi() {
  if (Ir)
    return le;
  Ir = 1, Object.defineProperty(le, "__esModule", {
    value: !0
  }), le.cancelRequestAnimationFrame = a, le.default = r;
  var e = ["moz", "ms", "webkit"];
  function t() {
    var n = 0;
    return function(i) {
      var o = (/* @__PURE__ */ new Date()).getTime(), u = Math.max(0, 16 - (o - n)), l = window.setTimeout(function() {
        i(o + u);
      }, u);
      return n = o + u, l;
    };
  }
  function r() {
    if (typeof window > "u")
      return function() {
      };
    if (window.requestAnimationFrame)
      return window.requestAnimationFrame.bind(window);
    var n = e.filter(function(i) {
      return "".concat(i, "RequestAnimationFrame") in window;
    })[0];
    return n ? window["".concat(n, "RequestAnimationFrame")] : t();
  }
  function a(n) {
    if (typeof window > "u")
      return null;
    if (window.cancelAnimationFrame)
      return window.cancelAnimationFrame(n);
    var i = e.filter(function(o) {
      return "".concat(o, "CancelAnimationFrame") in window || "".concat(o, "CancelRequestAnimationFrame") in window;
    })[0];
    return i ? (window["".concat(i, "CancelAnimationFrame")] || window["".concat(i, "CancelRequestAnimationFrame")]).call(this, n) : clearTimeout(n);
  }
  return le;
}
var Hr;
function Ri() {
  if (Hr)
    return K;
  Hr = 1;
  var e = Ar;
  Object.defineProperty(K, "__esModule", {
    value: !0
  }), K.requestAnimationTimeout = K.cancelAnimationTimeout = void 0;
  var t = a(xi());
  function r(u) {
    if (typeof WeakMap != "function")
      return null;
    var l = /* @__PURE__ */ new WeakMap(), f = /* @__PURE__ */ new WeakMap();
    return (r = function(g) {
      return g ? f : l;
    })(u);
  }
  function a(u, l) {
    if (!l && u && u.__esModule)
      return u;
    if (u === null || e(u) !== "object" && typeof u != "function")
      return { default: u };
    var f = r(l);
    if (f && f.has(u))
      return f.get(u);
    var p = {}, g = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var m in u)
      if (m !== "default" && Object.prototype.hasOwnProperty.call(u, m)) {
        var _ = g ? Object.getOwnPropertyDescriptor(u, m) : null;
        _ && (_.get || _.set) ? Object.defineProperty(p, m, _) : p[m] = u[m];
      }
    return p.default = u, f && f.set(u, p), p;
  }
  var n = (0, t.default)(), i = function(l) {
    return (0, t.cancelRequestAnimationFrame)(l.id);
  };
  K.cancelAnimationTimeout = i;
  var o = function(l) {
    var f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, p = Date.now();
    function g() {
      Date.now() - p >= f ? l.call() : m.id = n(g);
    }
    var m = {
      id: n(g)
    };
    return m;
  };
  return K.requestAnimationTimeout = o, K;
}
var fe = {}, U = {}, jr;
function Or() {
  if (jr)
    return U;
  jr = 1;
  var e = j;
  Object.defineProperty(U, "__esModule", {
    value: !0
  }), U.popupProps = U.mobileProps = U.innerProps = void 0;
  var t = e(z()), r = {
    visible: Boolean,
    prefixCls: String,
    zIndex: Number,
    destroyPopupOnHide: Boolean,
    forceRender: Boolean,
    // Legacy Motion
    animation: [String, Object],
    transitionName: String,
    // Measure
    stretch: {
      type: String
    },
    // Align
    align: {
      type: Object
    },
    point: {
      type: Object
    },
    getRootDomNode: {
      type: Function
    },
    getClassNameFromAlign: {
      type: Function
    },
    onMouseenter: {
      type: Function
    },
    onMouseleave: {
      type: Function
    },
    onMousedown: {
      type: Function
    },
    onTouchstart: {
      type: Function
    }
  };
  U.innerProps = r;
  var a = (0, t.default)((0, t.default)({}, r), {}, {
    mobile: {
      type: Object
    }
  });
  U.mobileProps = a;
  var n = (0, t.default)((0, t.default)({}, r), {}, {
    mask: Boolean,
    mobile: {
      type: Object
    },
    maskAnimation: String,
    maskTransitionName: String
  });
  return U.popupProps = n, U;
}
var Ae = {}, Oe = {}, Fr;
function zn() {
  if (Fr)
    return Oe;
  Fr = 1, Object.defineProperty(Oe, "__esModule", {
    value: !0
  }), Oe.getMotion = e;
  function e(t) {
    var r = t.prefixCls, a = t.animation, n = t.transitionName;
    return a ? {
      name: "".concat(r, "-").concat(a)
    } : n ? {
      name: n
    } : {};
  }
  return Oe;
}
var Vr;
function Di() {
  if (Vr)
    return Ae;
  Vr = 1;
  var e = j;
  Object.defineProperty(Ae, "__esModule", {
    value: !0
  }), Ae.default = n;
  var t = W, r = e(z()), a = zn();
  function n(i) {
    var o = i.prefixCls, u = i.visible, l = i.zIndex, f = i.mask, p = i.maskAnimation, g = i.maskTransitionName;
    if (!f)
      return null;
    var m = {};
    return (g || p) && (m = (0, a.getMotion)({
      prefixCls: o,
      transitionName: g,
      animation: p
    })), (0, t.createVNode)(t.Transition, (0, r.default)({
      appear: !0
    }, m), {
      default: function() {
        return [(0, t.withDirectives)((0, t.createVNode)("div", {
          style: {
            zIndex: l
          },
          class: "".concat(o, "-mask")
        }, null), [[(0, t.resolveDirective)("if"), u]])];
      }
    });
  }
  return n.displayName = "Mask", Ae;
}
var ce = {}, $r;
function Ei() {
  if ($r)
    return ce;
  $r = 1;
  var e = j;
  Object.defineProperty(ce, "__esModule", {
    value: !0
  }), ce.default = void 0;
  var t = W, r = e(z()), a = Ne(), n = e(Cr()), i = Or(), o = (0, t.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "MobilePopupInner",
    inheritAttrs: !1,
    props: i.mobileProps,
    emits: ["mouseenter", "mouseleave", "mousedown", "touchstart", "align"],
    setup: function(l, f) {
      var p = f.expose, g = f.slots, m = (0, t.ref)();
      return p({
        forceAlign: function() {
        },
        getElement: function() {
          return m.value;
        }
      }), function() {
        var _, O = l.zIndex, w = l.visible, b = l.prefixCls, h = l.mobile, y = h === void 0 ? {} : h, S = y.popupClassName, P = y.popupStyle, x = y.popupMotion, v = x === void 0 ? {} : x, s = y.popupRender, c = (0, r.default)({
          zIndex: O
        }, P), d = (0, a.flattenChildren)((_ = g.default) === null || _ === void 0 ? void 0 : _.call(g));
        d.length > 1 && (d = (0, t.createVNode)("div", {
          class: "".concat(b, "-content")
        }, [d])), s && (d = s(d));
        var C = (0, n.default)(b, S);
        return (0, t.createVNode)(t.Transition, (0, r.default)({
          ref: m
        }, v), {
          default: function() {
            return [w ? (0, t.createVNode)("div", {
              class: C,
              style: c
            }, [d]) : null];
          }
        });
      };
    }
  });
  return ce.default = o, ce;
}
var de = {}, pe = {}, Br;
function Ni() {
  if (Br)
    return pe;
  Br = 1;
  var e = j;
  Object.defineProperty(pe, "__esModule", {
    value: !0
  }), pe.default = void 0;
  var t = e(Oi()), r = e(gi()), a = W, n = e(Un()), i = ["measure", "align", null, "motion"], o = function(l, f) {
    var p = (0, a.ref)(null), g = (0, a.ref)(), m = (0, a.ref)(!1);
    function _(b) {
      m.value || (p.value = b);
    }
    function O() {
      n.default.cancel(g.value);
    }
    function w(b) {
      O(), g.value = (0, n.default)(function() {
        var h = p.value;
        switch (p.value) {
          case "align":
            h = "motion";
            break;
          case "motion":
            h = "stable";
            break;
        }
        _(h), b == null || b();
      });
    }
    return (0, a.watch)(l, function() {
      _("measure");
    }, {
      immediate: !0,
      flush: "post"
    }), (0, a.onMounted)(function() {
      (0, a.watch)(p, function() {
        switch (p.value) {
          case "measure":
            f();
            break;
        }
        p.value && (g.value = (0, n.default)(/* @__PURE__ */ (0, r.default)(/* @__PURE__ */ t.default.mark(function b() {
          var h, y;
          return t.default.wrap(function(P) {
            for (; ; )
              switch (P.prev = P.next) {
                case 0:
                  h = i.indexOf(p.value), y = i[h + 1], y && h !== -1 && _(y);
                case 3:
                case "end":
                  return P.stop();
              }
          }, b);
        }))));
      }, {
        immediate: !0,
        flush: "post"
      });
    }), (0, a.onBeforeUnmount)(function() {
      m.value = !0, O();
    }), [p, w];
  };
  return pe.default = o, pe;
}
var ve = {}, kr;
function Ii() {
  if (kr)
    return ve;
  kr = 1, Object.defineProperty(ve, "__esModule", {
    value: !0
  }), ve.default = void 0;
  var e = W, t = function(a) {
    var n = (0, e.ref)({
      width: 0,
      height: 0
    });
    function i(u) {
      n.value = {
        width: u.offsetWidth,
        height: u.offsetHeight
      };
    }
    var o = (0, e.computed)(function() {
      var u = {};
      if (a.value) {
        var l = n.value, f = l.width, p = l.height;
        a.value.indexOf("height") !== -1 && p ? u.height = "".concat(p, "px") : a.value.indexOf("minHeight") !== -1 && p && (u.minHeight = "".concat(p, "px")), a.value.indexOf("width") !== -1 && f ? u.width = "".concat(f, "px") : a.value.indexOf("minWidth") !== -1 && f && (u.minWidth = "".concat(f, "px"));
      }
      return u;
    });
    return [o, i];
  };
  return ve.default = t, ve;
}
var Y = {};
function Lr(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), r.push.apply(r, a);
  }
  return r;
}
function Ur(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Lr(Object(r), !0).forEach(function(a) {
      Hi(e, a, r[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Lr(Object(r)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
    });
  }
  return e;
}
function br(e) {
  "@babel/helpers - typeof";
  return br = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, br(e);
}
function Hi(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
var he, ji = {
  Webkit: "-webkit-",
  Moz: "-moz-",
  // IE did it wrong again ...
  ms: "-ms-",
  O: "-o-"
};
function De() {
  if (he !== void 0)
    return he;
  he = "";
  var e = document.createElement("p").style, t = "Transform";
  for (var r in ji)
    r + t in e && (he = r);
  return he;
}
function Gn() {
  return De() ? "".concat(De(), "TransitionProperty") : "transitionProperty";
}
function je() {
  return De() ? "".concat(De(), "Transform") : "transform";
}
function Wr(e, t) {
  var r = Gn();
  r && (e.style[r] = t, r !== "transitionProperty" && (e.style.transitionProperty = t));
}
function We(e, t) {
  var r = je();
  r && (e.style[r] = t, r !== "transform" && (e.style.transform = t));
}
function Fi(e) {
  return e.style.transitionProperty || e.style[Gn()];
}
function Vi(e) {
  var t = window.getComputedStyle(e, null), r = t.getPropertyValue("transform") || t.getPropertyValue(je());
  if (r && r !== "none") {
    var a = r.replace(/[^0-9\-.,]/g, "").split(",");
    return {
      x: parseFloat(a[12] || a[4], 0),
      y: parseFloat(a[13] || a[5], 0)
    };
  }
  return {
    x: 0,
    y: 0
  };
}
var $i = /matrix\((.*)\)/, Bi = /matrix3d\((.*)\)/;
function ki(e, t) {
  var r = window.getComputedStyle(e, null), a = r.getPropertyValue("transform") || r.getPropertyValue(je());
  if (a && a !== "none") {
    var n, i = a.match($i);
    if (i)
      i = i[1], n = i.split(",").map(function(u) {
        return parseFloat(u, 10);
      }), n[4] = t.x, n[5] = t.y, We(e, "matrix(".concat(n.join(","), ")"));
    else {
      var o = a.match(Bi)[1];
      n = o.split(",").map(function(u) {
        return parseFloat(u, 10);
      }), n[12] = t.x, n[13] = t.y, We(e, "matrix3d(".concat(n.join(","), ")"));
    }
  } else
    We(e, "translateX(".concat(t.x, "px) translateY(").concat(t.y, "px) translateZ(0)"));
}
var Li = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source, Ce;
function zr(e) {
  var t = e.style.display;
  e.style.display = "none", e.offsetHeight, e.style.display = t;
}
function te(e, t, r) {
  var a = r;
  if (br(t) === "object") {
    for (var n in t)
      t.hasOwnProperty(n) && te(e, n, t[n]);
    return;
  }
  if (typeof a < "u") {
    typeof a == "number" && (a = "".concat(a, "px")), e.style[t] = a;
    return;
  }
  return Ce(e, t);
}
function Ui(e) {
  var t, r, a, n = e.ownerDocument, i = n.body, o = n && n.documentElement;
  return t = e.getBoundingClientRect(), r = Math.floor(t.left), a = Math.floor(t.top), r -= o.clientLeft || i.clientLeft || 0, a -= o.clientTop || i.clientTop || 0, {
    left: r,
    top: a
  };
}
function Xn(e, t) {
  var r = e["page".concat(t ? "Y" : "X", "Offset")], a = "scroll".concat(t ? "Top" : "Left");
  if (typeof r != "number") {
    var n = e.document;
    r = n.documentElement[a], typeof r != "number" && (r = n.body[a]);
  }
  return r;
}
function Kn(e) {
  return Xn(e);
}
function Yn(e) {
  return Xn(e, !0);
}
function Pe(e) {
  var t = Ui(e), r = e.ownerDocument, a = r.defaultView || r.parentWindow;
  return t.left += Kn(a), t.top += Yn(a), t;
}
function Sr(e) {
  return e != null && e == e.window;
}
function Jn(e) {
  return Sr(e) ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
}
function Wi(e, t, r) {
  var a = r, n = "", i = Jn(e);
  return a = a || i.defaultView.getComputedStyle(e, null), a && (n = a.getPropertyValue(t) || a[t]), n;
}
var zi = new RegExp("^(".concat(Li, ")(?!px)[a-z%]+$"), "i"), Gi = /^(top|right|bottom|left)$/, ze = "currentStyle", Ge = "runtimeStyle", J = "left", Xi = "px";
function Ki(e, t) {
  var r = e[ze] && e[ze][t];
  if (zi.test(r) && !Gi.test(t)) {
    var a = e.style, n = a[J], i = e[Ge][J];
    e[Ge][J] = e[ze][J], a[J] = t === "fontSize" ? "1em" : r || 0, r = a.pixelLeft + Xi, a[J] = n, e[Ge][J] = i;
  }
  return r === "" ? "auto" : r;
}
typeof window < "u" && (Ce = window.getComputedStyle ? Wi : Ki);
function Se(e, t) {
  return e === "left" ? t.useCssRight ? "right" : e : t.useCssBottom ? "bottom" : e;
}
function Gr(e) {
  if (e === "left")
    return "right";
  if (e === "right")
    return "left";
  if (e === "top")
    return "bottom";
  if (e === "bottom")
    return "top";
}
function Xr(e, t, r) {
  te(e, "position") === "static" && (e.style.position = "relative");
  var a = -999, n = -999, i = Se("left", r), o = Se("top", r), u = Gr(i), l = Gr(o);
  i !== "left" && (a = 999), o !== "top" && (n = 999);
  var f = "", p = Pe(e);
  ("left" in t || "top" in t) && (f = Fi(e) || "", Wr(e, "none")), "left" in t && (e.style[u] = "", e.style[i] = "".concat(a, "px")), "top" in t && (e.style[l] = "", e.style[o] = "".concat(n, "px")), zr(e);
  var g = Pe(e), m = {};
  for (var _ in t)
    if (t.hasOwnProperty(_)) {
      var O = Se(_, r), w = _ === "left" ? a : n, b = p[_] - g[_];
      O === _ ? m[O] = w + b : m[O] = w - b;
    }
  te(e, m), zr(e), ("left" in t || "top" in t) && Wr(e, f);
  var h = {};
  for (var y in t)
    if (t.hasOwnProperty(y)) {
      var S = Se(y, r), P = t[y] - p[y];
      y === S ? h[S] = m[S] + P : h[S] = m[S] - P;
    }
  te(e, h);
}
function Yi(e, t) {
  var r = Pe(e), a = Vi(e), n = {
    x: a.x,
    y: a.y
  };
  "left" in t && (n.x = a.x + t.left - r.left), "top" in t && (n.y = a.y + t.top - r.top), ki(e, n);
}
function Ji(e, t, r) {
  if (r.ignoreShake) {
    var a = Pe(e), n = a.left.toFixed(0), i = a.top.toFixed(0), o = t.left.toFixed(0), u = t.top.toFixed(0);
    if (n === o && i === u)
      return;
  }
  r.useCssRight || r.useCssBottom ? Xr(e, t, r) : r.useCssTransform && je() in document.body.style ? Yi(e, t) : Xr(e, t, r);
}
function Mr(e, t) {
  for (var r = 0; r < e.length; r++)
    t(e[r]);
}
function Zn(e) {
  return Ce(e, "boxSizing") === "border-box";
}
var Zi = ["margin", "border", "padding"], Tr = -1, Qi = 2, wr = 1, eo = 0;
function to(e, t, r) {
  var a = {}, n = e.style, i;
  for (i in t)
    t.hasOwnProperty(i) && (a[i] = n[i], n[i] = t[i]);
  r.call(e);
  for (i in t)
    t.hasOwnProperty(i) && (n[i] = a[i]);
}
function be(e, t, r) {
  var a = 0, n, i, o;
  for (i = 0; i < t.length; i++)
    if (n = t[i], n)
      for (o = 0; o < r.length; o++) {
        var u = void 0;
        n === "border" ? u = "".concat(n).concat(r[o], "Width") : u = n + r[o], a += parseFloat(Ce(e, u)) || 0;
      }
  return a;
}
var k = {
  getParent: function(t) {
    var r = t;
    do
      r.nodeType === 11 && r.host ? r = r.host : r = r.parentNode;
    while (r && r.nodeType !== 1 && r.nodeType !== 9);
    return r;
  }
};
Mr(["Width", "Height"], function(e) {
  k["doc".concat(e)] = function(t) {
    var r = t.document;
    return Math.max(
      // firefox chrome documentElement.scrollHeight< body.scrollHeight
      // ie standard mode : documentElement.scrollHeight> body.scrollHeight
      r.documentElement["scroll".concat(e)],
      // quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
      r.body["scroll".concat(e)],
      k["viewport".concat(e)](r)
    );
  }, k["viewport".concat(e)] = function(t) {
    var r = "client".concat(e), a = t.document, n = a.body, i = a.documentElement, o = i[r];
    return a.compatMode === "CSS1Compat" && o || n && n[r] || o;
  };
});
function Kr(e, t, r) {
  var a = r;
  if (Sr(e))
    return t === "width" ? k.viewportWidth(e) : k.viewportHeight(e);
  if (e.nodeType === 9)
    return t === "width" ? k.docWidth(e) : k.docHeight(e);
  var n = t === "width" ? ["Left", "Right"] : ["Top", "Bottom"], i = Math.floor(t === "width" ? e.getBoundingClientRect().width : e.getBoundingClientRect().height), o = Zn(e), u = 0;
  (i == null || i <= 0) && (i = void 0, u = Ce(e, t), (u == null || Number(u) < 0) && (u = e.style[t] || 0), u = Math.floor(parseFloat(u)) || 0), a === void 0 && (a = o ? wr : Tr);
  var l = i !== void 0 || o, f = i || u;
  return a === Tr ? l ? f - be(e, ["border", "padding"], n) : u : l ? a === wr ? f : f + (a === Qi ? -be(e, ["border"], n) : be(e, ["margin"], n)) : u + be(e, Zi.slice(a), n);
}
var ro = {
  position: "absolute",
  visibility: "hidden",
  display: "block"
};
function Yr() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var a, n = t[0];
  return n.offsetWidth !== 0 ? a = Kr.apply(void 0, t) : to(n, ro, function() {
    a = Kr.apply(void 0, t);
  }), a;
}
Mr(["width", "height"], function(e) {
  var t = e.charAt(0).toUpperCase() + e.slice(1);
  k["outer".concat(t)] = function(a, n) {
    return a && Yr(a, e, n ? eo : wr);
  };
  var r = e === "width" ? ["Left", "Right"] : ["Top", "Bottom"];
  k[e] = function(a, n) {
    var i = n;
    if (i !== void 0) {
      if (a) {
        var o = Zn(a);
        return o && (i += be(a, ["padding", "border"], r)), te(a, e, i);
      }
      return;
    }
    return a && Yr(a, e, Tr);
  };
});
function Qn(e, t) {
  for (var r in t)
    t.hasOwnProperty(r) && (e[r] = t[r]);
  return e;
}
var M = {
  getWindow: function(t) {
    if (t && t.document && t.setTimeout)
      return t;
    var r = t.ownerDocument || t;
    return r.defaultView || r.parentWindow;
  },
  getDocument: Jn,
  offset: function(t, r, a) {
    if (typeof r < "u")
      Ji(t, r, a || {});
    else
      return Pe(t);
  },
  isWindow: Sr,
  each: Mr,
  css: te,
  clone: function(t) {
    var r, a = {};
    for (r in t)
      t.hasOwnProperty(r) && (a[r] = t[r]);
    var n = t.overflow;
    if (n)
      for (r in t)
        t.hasOwnProperty(r) && (a.overflow[r] = t.overflow[r]);
    return a;
  },
  mix: Qn,
  getWindowScrollLeft: function(t) {
    return Kn(t);
  },
  getWindowScrollTop: function(t) {
    return Yn(t);
  },
  merge: function() {
    for (var t = {}, r = 0; r < arguments.length; r++)
      M.mix(t, r < 0 || arguments.length <= r ? void 0 : arguments[r]);
    return t;
  },
  viewportWidth: 0,
  viewportHeight: 0
};
Qn(M, k);
var Xe = M.getParent;
function Pr(e) {
  if (M.isWindow(e) || e.nodeType === 9)
    return null;
  var t = M.getDocument(e), r = t.body, a, n = M.css(e, "position"), i = n === "fixed" || n === "absolute";
  if (!i)
    return e.nodeName.toLowerCase() === "html" ? null : Xe(e);
  for (a = Xe(e); a && a !== r && a.nodeType !== 9; a = Xe(a))
    if (n = M.css(a, "position"), n !== "static")
      return a;
  return null;
}
var Jr = M.getParent;
function ao(e) {
  if (M.isWindow(e) || e.nodeType === 9)
    return !1;
  var t = M.getDocument(e), r = t.body, a = null;
  for (
    a = Jr(e);
    // 修复元素位于 document.documentElement 下导致崩溃问题
    a && a !== r && a !== t;
    a = Jr(a)
  ) {
    var n = M.css(a, "position");
    if (n === "fixed")
      return !0;
  }
  return !1;
}
function xr(e, t) {
  for (var r = {
    left: 0,
    right: 1 / 0,
    top: 0,
    bottom: 1 / 0
  }, a = Pr(e), n = M.getDocument(e), i = n.defaultView || n.parentWindow, o = n.body, u = n.documentElement; a; ) {
    if ((navigator.userAgent.indexOf("MSIE") === -1 || a.clientWidth !== 0) && // body may have overflow set on it, yet we still get the entire
    // viewport. In some browsers, el.offsetParent may be
    // document.documentElement, so check for that too.
    a !== o && a !== u && M.css(a, "overflow") !== "visible") {
      var l = M.offset(a);
      l.left += a.clientLeft, l.top += a.clientTop, r.top = Math.max(r.top, l.top), r.right = Math.min(
        r.right,
        // consider area without scrollBar
        l.left + a.clientWidth
      ), r.bottom = Math.min(r.bottom, l.top + a.clientHeight), r.left = Math.max(r.left, l.left);
    } else if (a === o || a === u)
      break;
    a = Pr(a);
  }
  var f = null;
  if (!M.isWindow(e) && e.nodeType !== 9) {
    f = e.style.position;
    var p = M.css(e, "position");
    p === "absolute" && (e.style.position = "fixed");
  }
  var g = M.getWindowScrollLeft(i), m = M.getWindowScrollTop(i), _ = M.viewportWidth(i), O = M.viewportHeight(i), w = u.scrollWidth, b = u.scrollHeight, h = window.getComputedStyle(o);
  if (h.overflowX === "hidden" && (w = i.innerWidth), h.overflowY === "hidden" && (b = i.innerHeight), e.style && (e.style.position = f), t || ao(e))
    r.left = Math.max(r.left, g), r.top = Math.max(r.top, m), r.right = Math.min(r.right, g + _), r.bottom = Math.min(r.bottom, m + O);
  else {
    var y = Math.max(w, g + _);
    r.right = Math.min(r.right, y);
    var S = Math.max(b, m + O);
    r.bottom = Math.min(r.bottom, S);
  }
  return r.top >= 0 && r.left >= 0 && r.bottom > r.top && r.right > r.left ? r : null;
}
function no(e, t, r, a) {
  var n = M.clone(e), i = {
    width: t.width,
    height: t.height
  };
  return a.adjustX && n.left < r.left && (n.left = r.left), a.resizeWidth && n.left >= r.left && n.left + i.width > r.right && (i.width -= n.left + i.width - r.right), a.adjustX && n.left + i.width > r.right && (n.left = Math.max(r.right - i.width, r.left)), a.adjustY && n.top < r.top && (n.top = r.top), a.resizeHeight && n.top >= r.top && n.top + i.height > r.bottom && (i.height -= n.top + i.height - r.bottom), a.adjustY && n.top + i.height > r.bottom && (n.top = Math.max(r.bottom - i.height, r.top)), M.mix(n, i);
}
function Rr(e) {
  var t, r, a;
  if (!M.isWindow(e) && e.nodeType !== 9)
    t = M.offset(e), r = M.outerWidth(e), a = M.outerHeight(e);
  else {
    var n = M.getWindow(e);
    t = {
      left: M.getWindowScrollLeft(n),
      top: M.getWindowScrollTop(n)
    }, r = M.viewportWidth(n), a = M.viewportHeight(n);
  }
  return t.width = r, t.height = a, t;
}
function Zr(e, t) {
  var r = t.charAt(0), a = t.charAt(1), n = e.width, i = e.height, o = e.left, u = e.top;
  return r === "c" ? u += i / 2 : r === "b" && (u += i), a === "c" ? o += n / 2 : a === "r" && (o += n), {
    left: o,
    top: u
  };
}
function Me(e, t, r, a, n) {
  var i = Zr(t, r[1]), o = Zr(e, r[0]), u = [o.left - i.left, o.top - i.top];
  return {
    left: Math.round(e.left - u[0] + a[0] - n[0]),
    top: Math.round(e.top - u[1] + a[1] - n[1])
  };
}
function Qr(e, t, r) {
  return e.left < r.left || e.left + t.width > r.right;
}
function ea(e, t, r) {
  return e.top < r.top || e.top + t.height > r.bottom;
}
function io(e, t, r) {
  return e.left > r.right || e.left + t.width < r.left;
}
function oo(e, t, r) {
  return e.top > r.bottom || e.top + t.height < r.top;
}
function xe(e, t, r) {
  var a = [];
  return M.each(e, function(n) {
    a.push(n.replace(t, function(i) {
      return r[i];
    }));
  }), a;
}
function Re(e, t) {
  return e[t] = -e[t], e;
}
function ta(e, t) {
  var r;
  return /%$/.test(e) ? r = parseInt(e.substring(0, e.length - 1), 10) / 100 * t : r = parseInt(e, 10), r || 0;
}
function ra(e, t) {
  e[0] = ta(e[0], t.width), e[1] = ta(e[1], t.height);
}
function ei(e, t, r, a) {
  var n = r.points, i = r.offset || [0, 0], o = r.targetOffset || [0, 0], u = r.overflow, l = r.source || e;
  i = [].concat(i), o = [].concat(o), u = u || {};
  var f = {}, p = 0, g = !!(u && u.alwaysByViewport), m = xr(l, g), _ = Rr(l);
  ra(i, _), ra(o, t);
  var O = Me(_, t, n, i, o), w = M.merge(_, O);
  if (m && (u.adjustX || u.adjustY) && a) {
    if (u.adjustX && Qr(O, _, m)) {
      var b = xe(n, /[lr]/gi, {
        l: "r",
        r: "l"
      }), h = Re(i, 0), y = Re(o, 0), S = Me(_, t, b, h, y);
      io(S, _, m) || (p = 1, n = b, i = h, o = y);
    }
    if (u.adjustY && ea(O, _, m)) {
      var P = xe(n, /[tb]/gi, {
        t: "b",
        b: "t"
      }), x = Re(i, 1), v = Re(o, 1), s = Me(_, t, P, x, v);
      oo(s, _, m) || (p = 1, n = P, i = x, o = v);
    }
    p && (O = Me(_, t, n, i, o), M.mix(w, O));
    var c = Qr(O, _, m), d = ea(O, _, m);
    if (c || d) {
      var C = n;
      c && (C = xe(n, /[lr]/gi, {
        l: "r",
        r: "l"
      })), d && (C = xe(n, /[tb]/gi, {
        t: "b",
        b: "t"
      })), n = C, i = r.offset || [0, 0], o = r.targetOffset || [0, 0];
    }
    f.adjustX = u.adjustX && c, f.adjustY = u.adjustY && d, (f.adjustX || f.adjustY) && (w = no(O, _, m, f));
  }
  return w.width !== _.width && M.css(l, "width", M.width(l) + w.width - _.width), w.height !== _.height && M.css(l, "height", M.height(l) + w.height - _.height), M.offset(l, {
    left: w.left,
    top: w.top
  }, {
    useCssRight: r.useCssRight,
    useCssBottom: r.useCssBottom,
    useCssTransform: r.useCssTransform,
    ignoreShake: r.ignoreShake
  }), {
    points: n,
    offset: i,
    targetOffset: o,
    overflow: f
  };
}
function uo(e, t) {
  var r = xr(e, t), a = Rr(e);
  return !r || a.left + a.width <= r.left || a.top + a.height <= r.top || a.left >= r.right || a.top >= r.bottom;
}
function Ee(e, t, r) {
  var a = r.target || t, n = Rr(a), i = !uo(a, r.overflow && r.overflow.alwaysByViewport);
  return ei(e, n, r, i);
}
Ee.__getOffsetParent = Pr;
Ee.__getVisibleRectForElement = xr;
function so(e, t, r) {
  var a, n, i = M.getDocument(e), o = i.defaultView || i.parentWindow, u = M.getWindowScrollLeft(o), l = M.getWindowScrollTop(o), f = M.viewportWidth(o), p = M.viewportHeight(o);
  "pageX" in t ? a = t.pageX : a = u + t.clientX, "pageY" in t ? n = t.pageY : n = l + t.clientY;
  var g = {
    left: a,
    top: n,
    width: 0,
    height: 0
  }, m = a >= 0 && a <= u + f && n >= 0 && n <= l + p, _ = [r.points[0], "cc"];
  return ei(e, g, Ur(Ur({}, r), {}, {
    points: _
  }), m);
}
const lo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  alignElement: Ee,
  alignPoint: so,
  default: Ee
}, Symbol.toStringTag, { value: "Module" })), fo = /* @__PURE__ */ Si(lo);
var ge = {}, aa;
function co() {
  if (aa)
    return ge;
  aa = 1, Object.defineProperty(ge, "__esModule", {
    value: !0
  }), ge.default = void 0;
  var e = function(r) {
    if (!r)
      return !1;
    if (r.offsetParent)
      return !0;
    if (r.getBBox) {
      var a = r.getBBox();
      if (a.width || a.height)
        return !0;
    }
    if (r.getBoundingClientRect) {
      var n = r.getBoundingClientRect();
      if (n.width || n.height)
        return !0;
    }
    return !1;
  };
  return ge.default = e, ge;
}
var ee = {}, na;
function po() {
  if (na)
    return ee;
  na = 1;
  var e = j;
  Object.defineProperty(ee, "__esModule", {
    value: !0
  }), ee.isSamePoint = n, ee.monitorResize = o, ee.restoreFocus = i;
  var t = e(qr()), r = e(Bn()), a = e(Mi);
  function n(u, l) {
    return u === l ? !0 : !u || !l ? !1 : "pageX" in l && "pageY" in l ? u.pageX === l.pageX && u.pageY === l.pageY : "clientX" in l && "clientY" in l ? u.clientX === l.clientX && u.clientY === l.clientY : !1;
  }
  function i(u, l) {
    u !== document.activeElement && (0, r.default)(l, u) && typeof u.focus == "function" && u.focus();
  }
  function o(u, l) {
    var f = null, p = null;
    function g(_) {
      var O = (0, t.default)(_, 1), w = O[0].target;
      if (document.documentElement.contains(w)) {
        var b = w.getBoundingClientRect(), h = b.width, y = b.height, S = Math.floor(h), P = Math.floor(y);
        (f !== S || p !== P) && Promise.resolve().then(function() {
          l({
            width: S,
            height: P
          });
        }), f = S, p = P;
      }
    }
    var m = new a.default(g);
    return u && m.observe(u), function() {
      m.disconnect();
    };
  }
  return ee;
}
var me = {}, ia;
function vo() {
  if (ia)
    return me;
  ia = 1, Object.defineProperty(me, "__esModule", {
    value: !0
  }), me.default = void 0;
  var e = function(r, a) {
    var n = !1, i = null;
    function o() {
      clearTimeout(i);
    }
    function u(l) {
      if (!n || l === !0) {
        if (r() === !1)
          return;
        n = !0, o(), i = setTimeout(function() {
          n = !1;
        }, a.value);
      } else
        o(), i = setTimeout(function() {
          n = !1, u();
        }, a.value);
    }
    return [u, function() {
      n = !1, o();
    }];
  };
  return me.default = e, me;
}
var Ke, oa;
function ho() {
  if (oa)
    return Ke;
  oa = 1;
  function e() {
    this.__data__ = [], this.size = 0;
  }
  return Ke = e, Ke;
}
var Ye, ua;
function ti() {
  if (ua)
    return Ye;
  ua = 1;
  function e(t, r) {
    return t === r || t !== t && r !== r;
  }
  return Ye = e, Ye;
}
var Je, sa;
function Fe() {
  if (sa)
    return Je;
  sa = 1;
  var e = ti();
  function t(r, a) {
    for (var n = r.length; n--; )
      if (e(r[n][0], a))
        return n;
    return -1;
  }
  return Je = t, Je;
}
var Ze, la;
function go() {
  if (la)
    return Ze;
  la = 1;
  var e = Fe(), t = Array.prototype, r = t.splice;
  function a(n) {
    var i = this.__data__, o = e(i, n);
    if (o < 0)
      return !1;
    var u = i.length - 1;
    return o == u ? i.pop() : r.call(i, o, 1), --this.size, !0;
  }
  return Ze = a, Ze;
}
var Qe, fa;
function mo() {
  if (fa)
    return Qe;
  fa = 1;
  var e = Fe();
  function t(r) {
    var a = this.__data__, n = e(a, r);
    return n < 0 ? void 0 : a[n][1];
  }
  return Qe = t, Qe;
}
var et, ca;
function _o() {
  if (ca)
    return et;
  ca = 1;
  var e = Fe();
  function t(r) {
    return e(this.__data__, r) > -1;
  }
  return et = t, et;
}
var tt, da;
function yo() {
  if (da)
    return tt;
  da = 1;
  var e = Fe();
  function t(r, a) {
    var n = this.__data__, i = e(n, r);
    return i < 0 ? (++this.size, n.push([r, a])) : n[i][1] = a, this;
  }
  return tt = t, tt;
}
var rt, pa;
function Ve() {
  if (pa)
    return rt;
  pa = 1;
  var e = ho(), t = go(), r = mo(), a = _o(), n = yo();
  function i(o) {
    var u = -1, l = o == null ? 0 : o.length;
    for (this.clear(); ++u < l; ) {
      var f = o[u];
      this.set(f[0], f[1]);
    }
  }
  return i.prototype.clear = e, i.prototype.delete = t, i.prototype.get = r, i.prototype.has = a, i.prototype.set = n, rt = i, rt;
}
var at, va;
function bo() {
  if (va)
    return at;
  va = 1;
  var e = Ve();
  function t() {
    this.__data__ = new e(), this.size = 0;
  }
  return at = t, at;
}
var nt, ha;
function To() {
  if (ha)
    return nt;
  ha = 1;
  function e(t) {
    var r = this.__data__, a = r.delete(t);
    return this.size = r.size, a;
  }
  return nt = e, nt;
}
var it, ga;
function wo() {
  if (ga)
    return it;
  ga = 1;
  function e(t) {
    return this.__data__.get(t);
  }
  return it = e, it;
}
var ot, ma;
function Po() {
  if (ma)
    return ot;
  ma = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return ot = e, ot;
}
var ut, _a;
function ri() {
  if (_a)
    return ut;
  _a = 1;
  function e(t) {
    var r = typeof t;
    return t != null && (r == "object" || r == "function");
  }
  return ut = e, ut;
}
var st, ya;
function ai() {
  if (ya)
    return st;
  ya = 1;
  var e = Ie(), t = ri(), r = "[object AsyncFunction]", a = "[object Function]", n = "[object GeneratorFunction]", i = "[object Proxy]";
  function o(u) {
    if (!t(u))
      return !1;
    var l = e(u);
    return l == a || l == n || l == r || l == i;
  }
  return st = o, st;
}
var lt, ba;
function Co() {
  if (ba)
    return lt;
  ba = 1;
  var e = G(), t = e["__core-js_shared__"];
  return lt = t, lt;
}
var ft, Ta;
function qo() {
  if (Ta)
    return ft;
  Ta = 1;
  var e = Co(), t = function() {
    var a = /[^.]+$/.exec(e && e.keys && e.keys.IE_PROTO || "");
    return a ? "Symbol(src)_1." + a : "";
  }();
  function r(a) {
    return !!t && t in a;
  }
  return ft = r, ft;
}
var ct, wa;
function ni() {
  if (wa)
    return ct;
  wa = 1;
  var e = Function.prototype, t = e.toString;
  function r(a) {
    if (a != null) {
      try {
        return t.call(a);
      } catch {
      }
      try {
        return a + "";
      } catch {
      }
    }
    return "";
  }
  return ct = r, ct;
}
var dt, Pa;
function Ao() {
  if (Pa)
    return dt;
  Pa = 1;
  var e = ai(), t = qo(), r = ri(), a = ni(), n = /[\\^$.*+?()[\]{}|]/g, i = /^\[object .+?Constructor\]$/, o = Function.prototype, u = Object.prototype, l = o.toString, f = u.hasOwnProperty, p = RegExp(
    "^" + l.call(f).replace(n, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function g(m) {
    if (!r(m) || t(m))
      return !1;
    var _ = e(m) ? p : i;
    return _.test(a(m));
  }
  return dt = g, dt;
}
var pt, Ca;
function Oo() {
  if (Ca)
    return pt;
  Ca = 1;
  function e(t, r) {
    return t == null ? void 0 : t[r];
  }
  return pt = e, pt;
}
var vt, qa;
function re() {
  if (qa)
    return vt;
  qa = 1;
  var e = Ao(), t = Oo();
  function r(a, n) {
    var i = t(a, n);
    return e(i) ? i : void 0;
  }
  return vt = r, vt;
}
var ht, Aa;
function Dr() {
  if (Aa)
    return ht;
  Aa = 1;
  var e = re(), t = G(), r = e(t, "Map");
  return ht = r, ht;
}
var gt, Oa;
function $e() {
  if (Oa)
    return gt;
  Oa = 1;
  var e = re(), t = e(Object, "create");
  return gt = t, gt;
}
var mt, Sa;
function So() {
  if (Sa)
    return mt;
  Sa = 1;
  var e = $e();
  function t() {
    this.__data__ = e ? e(null) : {}, this.size = 0;
  }
  return mt = t, mt;
}
var _t, Ma;
function Mo() {
  if (Ma)
    return _t;
  Ma = 1;
  function e(t) {
    var r = this.has(t) && delete this.__data__[t];
    return this.size -= r ? 1 : 0, r;
  }
  return _t = e, _t;
}
var yt, xa;
function xo() {
  if (xa)
    return yt;
  xa = 1;
  var e = $e(), t = "__lodash_hash_undefined__", r = Object.prototype, a = r.hasOwnProperty;
  function n(i) {
    var o = this.__data__;
    if (e) {
      var u = o[i];
      return u === t ? void 0 : u;
    }
    return a.call(o, i) ? o[i] : void 0;
  }
  return yt = n, yt;
}
var bt, Ra;
function Ro() {
  if (Ra)
    return bt;
  Ra = 1;
  var e = $e(), t = Object.prototype, r = t.hasOwnProperty;
  function a(n) {
    var i = this.__data__;
    return e ? i[n] !== void 0 : r.call(i, n);
  }
  return bt = a, bt;
}
var Tt, Da;
function Do() {
  if (Da)
    return Tt;
  Da = 1;
  var e = $e(), t = "__lodash_hash_undefined__";
  function r(a, n) {
    var i = this.__data__;
    return this.size += this.has(a) ? 0 : 1, i[a] = e && n === void 0 ? t : n, this;
  }
  return Tt = r, Tt;
}
var wt, Ea;
function Eo() {
  if (Ea)
    return wt;
  Ea = 1;
  var e = So(), t = Mo(), r = xo(), a = Ro(), n = Do();
  function i(o) {
    var u = -1, l = o == null ? 0 : o.length;
    for (this.clear(); ++u < l; ) {
      var f = o[u];
      this.set(f[0], f[1]);
    }
  }
  return i.prototype.clear = e, i.prototype.delete = t, i.prototype.get = r, i.prototype.has = a, i.prototype.set = n, wt = i, wt;
}
var Pt, Na;
function No() {
  if (Na)
    return Pt;
  Na = 1;
  var e = Eo(), t = Ve(), r = Dr();
  function a() {
    this.size = 0, this.__data__ = {
      hash: new e(),
      map: new (r || t)(),
      string: new e()
    };
  }
  return Pt = a, Pt;
}
var Ct, Ia;
function Io() {
  if (Ia)
    return Ct;
  Ia = 1;
  function e(t) {
    var r = typeof t;
    return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? t !== "__proto__" : t === null;
  }
  return Ct = e, Ct;
}
var qt, Ha;
function Be() {
  if (Ha)
    return qt;
  Ha = 1;
  var e = Io();
  function t(r, a) {
    var n = r.__data__;
    return e(a) ? n[typeof a == "string" ? "string" : "hash"] : n.map;
  }
  return qt = t, qt;
}
var At, ja;
function Ho() {
  if (ja)
    return At;
  ja = 1;
  var e = Be();
  function t(r) {
    var a = e(this, r).delete(r);
    return this.size -= a ? 1 : 0, a;
  }
  return At = t, At;
}
var Ot, Fa;
function jo() {
  if (Fa)
    return Ot;
  Fa = 1;
  var e = Be();
  function t(r) {
    return e(this, r).get(r);
  }
  return Ot = t, Ot;
}
var St, Va;
function Fo() {
  if (Va)
    return St;
  Va = 1;
  var e = Be();
  function t(r) {
    return e(this, r).has(r);
  }
  return St = t, St;
}
var Mt, $a;
function Vo() {
  if ($a)
    return Mt;
  $a = 1;
  var e = Be();
  function t(r, a) {
    var n = e(this, r), i = n.size;
    return n.set(r, a), this.size += n.size == i ? 0 : 1, this;
  }
  return Mt = t, Mt;
}
var xt, Ba;
function ii() {
  if (Ba)
    return xt;
  Ba = 1;
  var e = No(), t = Ho(), r = jo(), a = Fo(), n = Vo();
  function i(o) {
    var u = -1, l = o == null ? 0 : o.length;
    for (this.clear(); ++u < l; ) {
      var f = o[u];
      this.set(f[0], f[1]);
    }
  }
  return i.prototype.clear = e, i.prototype.delete = t, i.prototype.get = r, i.prototype.has = a, i.prototype.set = n, xt = i, xt;
}
var Rt, ka;
function $o() {
  if (ka)
    return Rt;
  ka = 1;
  var e = Ve(), t = Dr(), r = ii(), a = 200;
  function n(i, o) {
    var u = this.__data__;
    if (u instanceof e) {
      var l = u.__data__;
      if (!t || l.length < a - 1)
        return l.push([i, o]), this.size = ++u.size, this;
      u = this.__data__ = new r(l);
    }
    return u.set(i, o), this.size = u.size, this;
  }
  return Rt = n, Rt;
}
var Dt, La;
function Bo() {
  if (La)
    return Dt;
  La = 1;
  var e = Ve(), t = bo(), r = To(), a = wo(), n = Po(), i = $o();
  function o(u) {
    var l = this.__data__ = new e(u);
    this.size = l.size;
  }
  return o.prototype.clear = t, o.prototype.delete = r, o.prototype.get = a, o.prototype.has = n, o.prototype.set = i, Dt = o, Dt;
}
var Et, Ua;
function ko() {
  if (Ua)
    return Et;
  Ua = 1;
  var e = "__lodash_hash_undefined__";
  function t(r) {
    return this.__data__.set(r, e), this;
  }
  return Et = t, Et;
}
var Nt, Wa;
function Lo() {
  if (Wa)
    return Nt;
  Wa = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return Nt = e, Nt;
}
var It, za;
function Uo() {
  if (za)
    return It;
  za = 1;
  var e = ii(), t = ko(), r = Lo();
  function a(n) {
    var i = -1, o = n == null ? 0 : n.length;
    for (this.__data__ = new e(); ++i < o; )
      this.add(n[i]);
  }
  return a.prototype.add = a.prototype.push = t, a.prototype.has = r, It = a, It;
}
var Ht, Ga;
function Wo() {
  if (Ga)
    return Ht;
  Ga = 1;
  function e(t, r) {
    for (var a = -1, n = t == null ? 0 : t.length; ++a < n; )
      if (r(t[a], a, t))
        return !0;
    return !1;
  }
  return Ht = e, Ht;
}
var jt, Xa;
function zo() {
  if (Xa)
    return jt;
  Xa = 1;
  function e(t, r) {
    return t.has(r);
  }
  return jt = e, jt;
}
var Ft, Ka;
function oi() {
  if (Ka)
    return Ft;
  Ka = 1;
  var e = Uo(), t = Wo(), r = zo(), a = 1, n = 2;
  function i(o, u, l, f, p, g) {
    var m = l & a, _ = o.length, O = u.length;
    if (_ != O && !(m && O > _))
      return !1;
    var w = g.get(o), b = g.get(u);
    if (w && b)
      return w == u && b == o;
    var h = -1, y = !0, S = l & n ? new e() : void 0;
    for (g.set(o, u), g.set(u, o); ++h < _; ) {
      var P = o[h], x = u[h];
      if (f)
        var v = m ? f(x, P, h, u, o, g) : f(P, x, h, o, u, g);
      if (v !== void 0) {
        if (v)
          continue;
        y = !1;
        break;
      }
      if (S) {
        if (!t(u, function(s, c) {
          if (!r(S, c) && (P === s || p(P, s, l, f, g)))
            return S.push(c);
        })) {
          y = !1;
          break;
        }
      } else if (!(P === x || p(P, x, l, f, g))) {
        y = !1;
        break;
      }
    }
    return g.delete(o), g.delete(u), y;
  }
  return Ft = i, Ft;
}
var Vt, Ya;
function Go() {
  if (Ya)
    return Vt;
  Ya = 1;
  var e = G(), t = e.Uint8Array;
  return Vt = t, Vt;
}
var $t, Ja;
function Xo() {
  if (Ja)
    return $t;
  Ja = 1;
  function e(t) {
    var r = -1, a = Array(t.size);
    return t.forEach(function(n, i) {
      a[++r] = [i, n];
    }), a;
  }
  return $t = e, $t;
}
var Bt, Za;
function Ko() {
  if (Za)
    return Bt;
  Za = 1;
  function e(t) {
    var r = -1, a = Array(t.size);
    return t.forEach(function(n) {
      a[++r] = n;
    }), a;
  }
  return Bt = e, Bt;
}
var kt, Qa;
function Yo() {
  if (Qa)
    return kt;
  Qa = 1;
  var e = mi(), t = Go(), r = ti(), a = oi(), n = Xo(), i = Ko(), o = 1, u = 2, l = "[object Boolean]", f = "[object Date]", p = "[object Error]", g = "[object Map]", m = "[object Number]", _ = "[object RegExp]", O = "[object Set]", w = "[object String]", b = "[object Symbol]", h = "[object ArrayBuffer]", y = "[object DataView]", S = e ? e.prototype : void 0, P = S ? S.valueOf : void 0;
  function x(v, s, c, d, C, T, q) {
    switch (c) {
      case y:
        if (v.byteLength != s.byteLength || v.byteOffset != s.byteOffset)
          return !1;
        v = v.buffer, s = s.buffer;
      case h:
        return !(v.byteLength != s.byteLength || !T(new t(v), new t(s)));
      case l:
      case f:
      case m:
        return r(+v, +s);
      case p:
        return v.name == s.name && v.message == s.message;
      case _:
      case w:
        return v == s + "";
      case g:
        var A = n;
      case O:
        var R = d & o;
        if (A || (A = i), v.size != s.size && !R)
          return !1;
        var D = q.get(v);
        if (D)
          return D == s;
        d |= u, q.set(v, s);
        var E = a(A(v), A(s), d, C, T, q);
        return q.delete(v), E;
      case b:
        if (P)
          return P.call(v) == P.call(s);
    }
    return !1;
  }
  return kt = x, kt;
}
var Lt, en;
function Jo() {
  if (en)
    return Lt;
  en = 1;
  function e(t, r) {
    for (var a = -1, n = r.length, i = t.length; ++a < n; )
      t[i + a] = r[a];
    return t;
  }
  return Lt = e, Lt;
}
var Ut, tn;
function Er() {
  if (tn)
    return Ut;
  tn = 1;
  var e = Array.isArray;
  return Ut = e, Ut;
}
var Wt, rn;
function Zo() {
  if (rn)
    return Wt;
  rn = 1;
  var e = Jo(), t = Er();
  function r(a, n, i) {
    var o = n(a);
    return t(a) ? o : e(o, i(a));
  }
  return Wt = r, Wt;
}
var zt, an;
function Qo() {
  if (an)
    return zt;
  an = 1;
  function e(t, r) {
    for (var a = -1, n = t == null ? 0 : t.length, i = 0, o = []; ++a < n; ) {
      var u = t[a];
      r(u, a, t) && (o[i++] = u);
    }
    return o;
  }
  return zt = e, zt;
}
var Gt, nn;
function eu() {
  if (nn)
    return Gt;
  nn = 1;
  function e() {
    return [];
  }
  return Gt = e, Gt;
}
var Xt, on;
function tu() {
  if (on)
    return Xt;
  on = 1;
  var e = Qo(), t = eu(), r = Object.prototype, a = r.propertyIsEnumerable, n = Object.getOwnPropertySymbols, i = n ? function(o) {
    return o == null ? [] : (o = Object(o), e(n(o), function(u) {
      return a.call(o, u);
    }));
  } : t;
  return Xt = i, Xt;
}
var Kt, un;
function ru() {
  if (un)
    return Kt;
  un = 1;
  function e(t, r) {
    for (var a = -1, n = Array(t); ++a < t; )
      n[a] = r(a);
    return n;
  }
  return Kt = e, Kt;
}
var Yt, sn;
function au() {
  if (sn)
    return Yt;
  sn = 1;
  var e = Ie(), t = He(), r = "[object Arguments]";
  function a(n) {
    return t(n) && e(n) == r;
  }
  return Yt = a, Yt;
}
var Jt, ln;
function nu() {
  if (ln)
    return Jt;
  ln = 1;
  var e = au(), t = He(), r = Object.prototype, a = r.hasOwnProperty, n = r.propertyIsEnumerable, i = e(function() {
    return arguments;
  }()) ? e : function(o) {
    return t(o) && a.call(o, "callee") && !n.call(o, "callee");
  };
  return Jt = i, Jt;
}
var Te = { exports: {} }, Zt, fn;
function iu() {
  if (fn)
    return Zt;
  fn = 1;
  function e() {
    return !1;
  }
  return Zt = e, Zt;
}
Te.exports;
var cn;
function ui() {
  return cn || (cn = 1, function(e, t) {
    var r = G(), a = iu(), n = t && !t.nodeType && t, i = n && !0 && e && !e.nodeType && e, o = i && i.exports === n, u = o ? r.Buffer : void 0, l = u ? u.isBuffer : void 0, f = l || a;
    e.exports = f;
  }(Te, Te.exports)), Te.exports;
}
var Qt, dn;
function ou() {
  if (dn)
    return Qt;
  dn = 1;
  var e = 9007199254740991, t = /^(?:0|[1-9]\d*)$/;
  function r(a, n) {
    var i = typeof a;
    return n = n ?? e, !!n && (i == "number" || i != "symbol" && t.test(a)) && a > -1 && a % 1 == 0 && a < n;
  }
  return Qt = r, Qt;
}
var er, pn;
function si() {
  if (pn)
    return er;
  pn = 1;
  var e = 9007199254740991;
  function t(r) {
    return typeof r == "number" && r > -1 && r % 1 == 0 && r <= e;
  }
  return er = t, er;
}
var tr, vn;
function uu() {
  if (vn)
    return tr;
  vn = 1;
  var e = Ie(), t = si(), r = He(), a = "[object Arguments]", n = "[object Array]", i = "[object Boolean]", o = "[object Date]", u = "[object Error]", l = "[object Function]", f = "[object Map]", p = "[object Number]", g = "[object Object]", m = "[object RegExp]", _ = "[object Set]", O = "[object String]", w = "[object WeakMap]", b = "[object ArrayBuffer]", h = "[object DataView]", y = "[object Float32Array]", S = "[object Float64Array]", P = "[object Int8Array]", x = "[object Int16Array]", v = "[object Int32Array]", s = "[object Uint8Array]", c = "[object Uint8ClampedArray]", d = "[object Uint16Array]", C = "[object Uint32Array]", T = {};
  T[y] = T[S] = T[P] = T[x] = T[v] = T[s] = T[c] = T[d] = T[C] = !0, T[a] = T[n] = T[b] = T[i] = T[h] = T[o] = T[u] = T[l] = T[f] = T[p] = T[g] = T[m] = T[_] = T[O] = T[w] = !1;
  function q(A) {
    return r(A) && t(A.length) && !!T[e(A)];
  }
  return tr = q, tr;
}
var rr, hn;
function su() {
  if (hn)
    return rr;
  hn = 1;
  function e(t) {
    return function(r) {
      return t(r);
    };
  }
  return rr = e, rr;
}
var we = { exports: {} };
we.exports;
var gn;
function lu() {
  return gn || (gn = 1, function(e, t) {
    var r = _i(), a = t && !t.nodeType && t, n = a && !0 && e && !e.nodeType && e, i = n && n.exports === a, o = i && r.process, u = function() {
      try {
        var l = n && n.require && n.require("util").types;
        return l || o && o.binding && o.binding("util");
      } catch {
      }
    }();
    e.exports = u;
  }(we, we.exports)), we.exports;
}
var ar, mn;
function li() {
  if (mn)
    return ar;
  mn = 1;
  var e = uu(), t = su(), r = lu(), a = r && r.isTypedArray, n = a ? t(a) : e;
  return ar = n, ar;
}
var nr, _n;
function fu() {
  if (_n)
    return nr;
  _n = 1;
  var e = ru(), t = nu(), r = Er(), a = ui(), n = ou(), i = li(), o = Object.prototype, u = o.hasOwnProperty;
  function l(f, p) {
    var g = r(f), m = !g && t(f), _ = !g && !m && a(f), O = !g && !m && !_ && i(f), w = g || m || _ || O, b = w ? e(f.length, String) : [], h = b.length;
    for (var y in f)
      (p || u.call(f, y)) && !(w && // Safari 9 has enumerable `arguments.length` in strict mode.
      (y == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      _ && (y == "offset" || y == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      O && (y == "buffer" || y == "byteLength" || y == "byteOffset") || // Skip index properties.
      n(y, h))) && b.push(y);
    return b;
  }
  return nr = l, nr;
}
var ir, yn;
function cu() {
  if (yn)
    return ir;
  yn = 1;
  var e = Object.prototype;
  function t(r) {
    var a = r && r.constructor, n = typeof a == "function" && a.prototype || e;
    return r === n;
  }
  return ir = t, ir;
}
var or, bn;
function du() {
  if (bn)
    return or;
  bn = 1;
  var e = yi(), t = e(Object.keys, Object);
  return or = t, or;
}
var ur, Tn;
function pu() {
  if (Tn)
    return ur;
  Tn = 1;
  var e = cu(), t = du(), r = Object.prototype, a = r.hasOwnProperty;
  function n(i) {
    if (!e(i))
      return t(i);
    var o = [];
    for (var u in Object(i))
      a.call(i, u) && u != "constructor" && o.push(u);
    return o;
  }
  return ur = n, ur;
}
var sr, wn;
function vu() {
  if (wn)
    return sr;
  wn = 1;
  var e = ai(), t = si();
  function r(a) {
    return a != null && t(a.length) && !e(a);
  }
  return sr = r, sr;
}
var lr, Pn;
function hu() {
  if (Pn)
    return lr;
  Pn = 1;
  var e = fu(), t = pu(), r = vu();
  function a(n) {
    return r(n) ? e(n) : t(n);
  }
  return lr = a, lr;
}
var fr, Cn;
function gu() {
  if (Cn)
    return fr;
  Cn = 1;
  var e = Zo(), t = tu(), r = hu();
  function a(n) {
    return e(n, r, t);
  }
  return fr = a, fr;
}
var cr, qn;
function mu() {
  if (qn)
    return cr;
  qn = 1;
  var e = gu(), t = 1, r = Object.prototype, a = r.hasOwnProperty;
  function n(i, o, u, l, f, p) {
    var g = u & t, m = e(i), _ = m.length, O = e(o), w = O.length;
    if (_ != w && !g)
      return !1;
    for (var b = _; b--; ) {
      var h = m[b];
      if (!(g ? h in o : a.call(o, h)))
        return !1;
    }
    var y = p.get(i), S = p.get(o);
    if (y && S)
      return y == o && S == i;
    var P = !0;
    p.set(i, o), p.set(o, i);
    for (var x = g; ++b < _; ) {
      h = m[b];
      var v = i[h], s = o[h];
      if (l)
        var c = g ? l(s, v, h, o, i, p) : l(v, s, h, i, o, p);
      if (!(c === void 0 ? v === s || f(v, s, u, l, p) : c)) {
        P = !1;
        break;
      }
      x || (x = h == "constructor");
    }
    if (P && !x) {
      var d = i.constructor, C = o.constructor;
      d != C && "constructor" in i && "constructor" in o && !(typeof d == "function" && d instanceof d && typeof C == "function" && C instanceof C) && (P = !1);
    }
    return p.delete(i), p.delete(o), P;
  }
  return cr = n, cr;
}
var dr, An;
function _u() {
  if (An)
    return dr;
  An = 1;
  var e = re(), t = G(), r = e(t, "DataView");
  return dr = r, dr;
}
var pr, On;
function yu() {
  if (On)
    return pr;
  On = 1;
  var e = re(), t = G(), r = e(t, "Promise");
  return pr = r, pr;
}
var vr, Sn;
function bu() {
  if (Sn)
    return vr;
  Sn = 1;
  var e = re(), t = G(), r = e(t, "Set");
  return vr = r, vr;
}
var hr, Mn;
function Tu() {
  if (Mn)
    return hr;
  Mn = 1;
  var e = re(), t = G(), r = e(t, "WeakMap");
  return hr = r, hr;
}
var gr, xn;
function wu() {
  if (xn)
    return gr;
  xn = 1;
  var e = _u(), t = Dr(), r = yu(), a = bu(), n = Tu(), i = Ie(), o = ni(), u = "[object Map]", l = "[object Object]", f = "[object Promise]", p = "[object Set]", g = "[object WeakMap]", m = "[object DataView]", _ = o(e), O = o(t), w = o(r), b = o(a), h = o(n), y = i;
  return (e && y(new e(new ArrayBuffer(1))) != m || t && y(new t()) != u || r && y(r.resolve()) != f || a && y(new a()) != p || n && y(new n()) != g) && (y = function(S) {
    var P = i(S), x = P == l ? S.constructor : void 0, v = x ? o(x) : "";
    if (v)
      switch (v) {
        case _:
          return m;
        case O:
          return u;
        case w:
          return f;
        case b:
          return p;
        case h:
          return g;
      }
    return P;
  }), gr = y, gr;
}
var mr, Rn;
function Pu() {
  if (Rn)
    return mr;
  Rn = 1;
  var e = Bo(), t = oi(), r = Yo(), a = mu(), n = wu(), i = Er(), o = ui(), u = li(), l = 1, f = "[object Arguments]", p = "[object Array]", g = "[object Object]", m = Object.prototype, _ = m.hasOwnProperty;
  function O(w, b, h, y, S, P) {
    var x = i(w), v = i(b), s = x ? p : n(w), c = v ? p : n(b);
    s = s == f ? g : s, c = c == f ? g : c;
    var d = s == g, C = c == g, T = s == c;
    if (T && o(w)) {
      if (!o(b))
        return !1;
      x = !0, d = !1;
    }
    if (T && !d)
      return P || (P = new e()), x || u(w) ? t(w, b, h, y, S, P) : r(w, b, s, h, y, S, P);
    if (!(h & l)) {
      var q = d && _.call(w, "__wrapped__"), A = C && _.call(b, "__wrapped__");
      if (q || A) {
        var R = q ? w.value() : w, D = A ? b.value() : b;
        return P || (P = new e()), S(R, D, h, y, P);
      }
    }
    return T ? (P || (P = new e()), a(w, b, h, y, S, P)) : !1;
  }
  return mr = O, mr;
}
var _r, Dn;
function Cu() {
  if (Dn)
    return _r;
  Dn = 1;
  var e = Pu(), t = He();
  function r(a, n, i, o, u) {
    return a === n ? !0 : a == null || n == null || !t(a) && !t(n) ? a !== a && n !== n : e(a, n, i, o, r, u);
  }
  return _r = r, _r;
}
var yr, En;
function qu() {
  if (En)
    return yr;
  En = 1;
  var e = Cu();
  function t(r, a) {
    return e(r, a);
  }
  return yr = t, yr;
}
var Nn;
function Au() {
  if (Nn)
    return Y;
  Nn = 1;
  var e = j;
  Object.defineProperty(Y, "__esModule", {
    value: !0
  }), Y.default = Y.alignProps = void 0;
  var t = e(qr()), r = e(Ar), a = W, n = fo, i = e(kn()), o = Wn(), u = e(co()), l = po(), f = e(vo()), p = e(qu()), g = {
    align: Object,
    target: [Object, Function],
    onAlign: Function,
    monitorBufferTime: Number,
    monitorWindowResize: Boolean,
    disabled: Boolean
  };
  Y.alignProps = g;
  function m(w) {
    return typeof w != "function" ? null : w();
  }
  function _(w) {
    return (0, r.default)(w) !== "object" || !w ? null : w;
  }
  var O = (0, a.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "Align",
    props: g,
    emits: ["align"],
    setup: function(b, h) {
      var y = h.expose, S = h.slots, P = (0, a.ref)({}), x = (0, a.ref)(), v = (0, f.default)(function() {
        var R = b.disabled, D = b.target, E = b.align, L = b.onAlign;
        if (!R && D && x.value) {
          var H = x.value, F, V = m(D), X = _(D);
          P.value.element = V, P.value.point = X, P.value.align = E;
          var Z = document, ae = Z.activeElement;
          return V && (0, u.default)(V) ? F = (0, n.alignElement)(H, V, E) : X && (F = (0, n.alignPoint)(H, X, E)), (0, l.restoreFocus)(ae, H), L && F && L(H, F), !0;
        }
        return !1;
      }, (0, a.computed)(function() {
        return b.monitorBufferTime;
      })), s = (0, t.default)(v, 2), c = s[0], d = s[1], C = (0, a.ref)({
        cancel: function() {
        }
      }), T = (0, a.ref)({
        cancel: function() {
        }
      }), q = function() {
        var D = b.target, E = m(D), L = _(D);
        x.value !== T.value.element && (T.value.cancel(), T.value.element = x.value, T.value.cancel = (0, l.monitorResize)(x.value, c)), (P.value.element !== E || !(0, l.isSamePoint)(P.value.point, L) || !(0, p.default)(P.value.align, b.align)) && (c(), C.value.element !== E && (C.value.cancel(), C.value.element = E, C.value.cancel = (0, l.monitorResize)(E, c)));
      };
      (0, a.onMounted)(function() {
        (0, a.nextTick)(function() {
          q();
        });
      }), (0, a.onUpdated)(function() {
        (0, a.nextTick)(function() {
          q();
        });
      }), (0, a.watch)(function() {
        return b.disabled;
      }, function(R) {
        R ? d() : c();
      }, {
        immediate: !0,
        flush: "post"
      });
      var A = (0, a.ref)(null);
      return (0, a.watch)(function() {
        return b.monitorWindowResize;
      }, function(R) {
        R ? A.value || (A.value = (0, i.default)(window, "resize", c)) : A.value && (A.value.remove(), A.value = null);
      }, {
        flush: "post"
      }), (0, a.onUnmounted)(function() {
        C.value.cancel(), T.value.cancel(), A.value && A.value.remove(), d();
      }), y({
        forceAlign: function() {
          return c(!0);
        }
      }), function() {
        var R = S == null ? void 0 : S.default();
        return R ? (0, o.cloneElement)(R[0], {
          ref: x
        }, !0, !0) : null;
      };
    }
  });
  return Y.default = O, Y;
}
var In;
function Ou() {
  if (In)
    return de;
  In = 1;
  var e = j;
  Object.defineProperty(de, "__esModule", {
    value: !0
  }), de.default = void 0;
  var t = W, r = e(bi()), a = e(z()), n = e(Ar), i = e(qr()), o = e(Ni()), u = e(Ii()), l = e(Au()), f = zn(), p = Ne(), g = e(Cr()), m = Or(), _ = Ti(), O = e(Ln()), w = (0, t.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "PopupInner",
    inheritAttrs: !1,
    props: m.innerProps,
    emits: ["mouseenter", "mouseleave", "mousedown", "touchstart", "align"],
    setup: function(h, y) {
      var S = y.expose, P = y.attrs, x = y.slots, v = (0, t.ref)(), s = (0, t.ref)(), c = (0, t.ref)(), d = (0, u.default)((0, t.toRef)(h, "stretch")), C = (0, i.default)(d, 2), T = C[0], q = C[1], A = function() {
        h.stretch && q(h.getRootDomNode());
      }, R = (0, t.ref)(!1), D;
      (0, t.watch)(function() {
        return h.visible;
      }, function(N) {
        clearTimeout(D), N ? D = setTimeout(function() {
          R.value = h.visible;
        }) : R.value = !1;
      }, {
        immediate: !0
      });
      var E = (0, o.default)(R, A), L = (0, i.default)(E, 2), H = L[0], F = L[1], V = (0, t.ref)(), X = function() {
        return h.point ? h.point : h.getRootDomNode;
      }, Z = function() {
        var I;
        (I = v.value) === null || I === void 0 || I.forceAlign();
      }, ae = function(I, $) {
        var B = h.getClassNameFromAlign($), ne = c.value;
        if (c.value !== B && (c.value = B), H.value === "align") {
          var ie;
          ne !== B ? Promise.resolve().then(function() {
            Z();
          }) : F(function() {
            var oe;
            (oe = V.value) === null || oe === void 0 || oe.call(V);
          }), (ie = h.onAlign) === null || ie === void 0 || ie.call(h, I, $);
        }
      }, Q = (0, t.computed)(function() {
        var N = (0, n.default)(h.animation) === "object" ? h.animation : (0, f.getMotion)(h);
        return ["onAfterEnter", "onAfterLeave"].forEach(function(I) {
          var $ = N[I];
          N[I] = function(B) {
            F(), H.value = "stable", $ == null || $(B);
          };
        }), N;
      }), ke = function() {
        return new Promise(function(I) {
          V.value = I;
        });
      };
      (0, t.watch)([Q, H], function() {
        !Q.value && H.value === "motion" && F();
      }, {
        immediate: !0
      }), S({
        forceAlign: Z,
        getElement: function() {
          return s.value.$el || s.value;
        }
      });
      var Le = (0, t.computed)(function() {
        var N;
        return !((N = h.align) !== null && N !== void 0 && N.points && (H.value === "align" || H.value === "stable"));
      });
      return function() {
        var N, I = h.zIndex, $ = h.align, B = h.prefixCls, ne = h.destroyPopupOnHide, ie = h.onMouseenter, oe = h.onMouseleave, Nr = h.onTouchstart, fi = Nr === void 0 ? function() {
        } : Nr, ci = h.onMousedown, Ue = H.value, di = [(0, a.default)((0, a.default)({}, T.value), {}, {
          zIndex: I,
          opacity: Ue === "motion" || Ue === "stable" || !R.value ? null : 0,
          // pointerEvents: statusValue === 'stable' ? null : 'none',
          pointerEvents: !R.value && Ue !== "stable" ? "none" : null
        }), P.style], qe = (0, p.flattenChildren)((N = x.default) === null || N === void 0 ? void 0 : N.call(x, {
          visible: h.visible
        }));
        qe.length > 1 && (qe = (0, t.createVNode)("div", {
          class: "".concat(B, "-content")
        }, [qe]));
        var pi = (0, g.default)(B, P.class, c.value), vi = R.value || !h.visible, hi = vi ? (0, _.getTransitionProps)(Q.value.name, Q.value) : {};
        return (0, t.createVNode)(t.Transition, (0, a.default)((0, a.default)({
          ref: s
        }, hi), {}, {
          onBeforeEnter: ke
        }), {
          default: function() {
            return !ne || h.visible ? (0, t.withDirectives)((0, t.createVNode)(l.default, {
              target: X(),
              key: "popup",
              ref: v,
              monitorWindowResize: !0,
              disabled: Le.value,
              align: $,
              onAlign: ae
            }, {
              default: function() {
                return (0, t.createVNode)("div", (0, a.default)((0, a.default)({
                  class: pi,
                  onMouseenter: ie,
                  onMouseleave: oe,
                  onMousedown: (0, t.withModifiers)(ci, ["capture"])
                }, (0, r.default)({}, O.default ? "onTouchstartPassive" : "onTouchstart", (0, t.withModifiers)(fi, ["capture"]))), {}, {
                  style: di
                }), [qe]);
              }
            }), [[t.vShow, R.value]]) : null;
          }
        });
      };
    }
  });
  return de.default = w, de;
}
var Hn;
function Su() {
  if (Hn)
    return fe;
  Hn = 1;
  var e = j;
  Object.defineProperty(fe, "__esModule", {
    value: !0
  }), fe.default = void 0;
  var t = W, r = e(z()), a = Or(), n = e(Di()), i = e(Ei()), o = e(Ou()), u = (0, t.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "Popup",
    inheritAttrs: !1,
    props: a.popupProps,
    setup: function(f, p) {
      var g = p.attrs, m = p.slots, _ = p.expose, O = (0, t.ref)(!1), w = (0, t.ref)(!1), b = (0, t.ref)();
      return (0, t.watch)([function() {
        return f.visible;
      }, function() {
        return f.mobile;
      }], function() {
        O.value = f.visible, f.visible && f.mobile && (w.value = !0);
      }, {
        immediate: !0,
        flush: "post"
      }), _({
        forceAlign: function() {
          var y;
          (y = b.value) === null || y === void 0 || y.forceAlign();
        },
        getElement: function() {
          var y;
          return (y = b.value) === null || y === void 0 ? void 0 : y.getElement();
        }
      }), function() {
        var h = (0, r.default)((0, r.default)((0, r.default)({}, f), g), {}, {
          visible: O.value
        }), y = w.value ? (0, t.createVNode)(i.default, (0, r.default)((0, r.default)({}, h), {}, {
          mobile: f.mobile,
          ref: b
        }), {
          default: m.default
        }) : (0, t.createVNode)(o.default, (0, r.default)((0, r.default)({}, h), {}, {
          ref: b
        }), {
          default: m.default
        });
        return (0, t.createVNode)("div", null, [(0, t.createVNode)(n.default, h, null), y]);
      };
    }
  });
  return fe.default = u, fe;
}
var _e = {}, jn;
function Mu() {
  if (jn)
    return _e;
  jn = 1;
  var e = j;
  Object.defineProperty(_e, "__esModule", {
    value: !0
  }), _e.getAlignFromPlacement = a, _e.getAlignPopupClassName = n;
  var t = e(z());
  function r(i, o, u) {
    return u ? i[0] === o[0] : i[0] === o[0] && i[1] === o[1];
  }
  function a(i, o, u) {
    var l = i[o] || {};
    return (0, t.default)((0, t.default)({}, l), u);
  }
  function n(i, o, u, l) {
    for (var f = u.points, p = Object.keys(i), g = 0; g < p.length; g += 1) {
      var m = p[g];
      if (r(i[m].points, f, l))
        return "".concat(o, "-placement-").concat(m);
    }
    return "";
  }
  return _e;
}
var ye = {}, Fn;
function xu() {
  if (Fn)
    return ye;
  Fn = 1;
  var e = j;
  Object.defineProperty(ye, "__esModule", {
    value: !0
  }), ye.default = void 0;
  var t = e(wi()), r = e(Pi()), a = e(z()), n = W, i = Ne(), o = {
    methods: {
      setState: function() {
        var l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, f = arguments.length > 1 ? arguments[1] : void 0, p = typeof l == "function" ? l(this.$data, this.$props) : l;
        if (this.getDerivedStateFromProps) {
          var g = this.getDerivedStateFromProps((0, i.getOptionProps)(this), (0, a.default)((0, a.default)({}, this.$data), p));
          if (g === null)
            return;
          p = (0, a.default)((0, a.default)({}, p), g || {});
        }
        (0, r.default)(this.$data, p), this._.isMounted && this.$forceUpdate(), (0, n.nextTick)(function() {
          f && f();
        });
      },
      __emit: function() {
        var l = [].slice.call(arguments, 0), f = l[0];
        f = "on".concat(f[0].toUpperCase()).concat(f.substring(1));
        var p = this.$props[f] || this.$attrs[f];
        if (l.length && p)
          if (Array.isArray(p))
            for (var g = 0, m = p.length; g < m; g++)
              p[g].apply(p, (0, t.default)(l.slice(1)));
          else
            p.apply(void 0, (0, t.default)(l.slice(1)));
      }
    }
  };
  return ye.default = o, ye;
}
var Vn;
function Ru() {
  if (Vn)
    return se;
  Vn = 1;
  var e = j;
  Object.defineProperty(se, "__esModule", {
    value: !0
  }), se.default = void 0;
  var t = W, r = e(z()), a = e(Ci()), n = e(Bn()), i = e(Un()), o = Ne(), u = Ri(), l = e(kn()), f = e(Su()), p = Mu(), g = e(xu()), m = e(qi()), _ = e(Cr()), O = Wn(), w = e(Ln()), b = Ai();
  function h() {
  }
  function y() {
    return "";
  }
  function S(v) {
    return v ? v.ownerDocument : window.document;
  }
  var P = ["onClick", "onMousedown", "onTouchstart", "onMouseenter", "onMouseleave", "onFocus", "onBlur", "onContextmenu"], x = (0, t.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "Trigger",
    mixins: [g.default],
    inheritAttrs: !1,
    props: {
      action: a.default.oneOfType([a.default.string, a.default.arrayOf(a.default.string)]).def([]),
      showAction: a.default.any.def([]),
      hideAction: a.default.any.def([]),
      getPopupClassNameFromAlign: a.default.any.def(y),
      onPopupVisibleChange: Function,
      afterPopupVisibleChange: a.default.func.def(h),
      popup: a.default.any,
      popupStyle: {
        type: Object,
        default: void 0
      },
      prefixCls: a.default.string.def("rc-trigger-popup"),
      popupClassName: a.default.string.def(""),
      popupPlacement: String,
      builtinPlacements: a.default.object,
      popupTransitionName: String,
      popupAnimation: a.default.any,
      mouseEnterDelay: a.default.number.def(0),
      mouseLeaveDelay: a.default.number.def(0.1),
      zIndex: Number,
      focusDelay: a.default.number.def(0),
      blurDelay: a.default.number.def(0.15),
      getPopupContainer: Function,
      getDocument: a.default.func.def(S),
      forceRender: {
        type: Boolean,
        default: void 0
      },
      destroyPopupOnHide: {
        type: Boolean,
        default: !1
      },
      mask: {
        type: Boolean,
        default: !1
      },
      maskClosable: {
        type: Boolean,
        default: !0
      },
      // onPopupAlign: PropTypes.func.def(noop),
      popupAlign: a.default.object.def(function() {
        return {};
      }),
      popupVisible: {
        type: Boolean,
        default: void 0
      },
      defaultPopupVisible: {
        type: Boolean,
        default: !1
      },
      maskTransitionName: String,
      maskAnimation: String,
      stretch: String,
      alignPoint: {
        type: Boolean,
        default: void 0
      },
      autoDestroy: {
        type: Boolean,
        default: !1
      },
      mobile: Object,
      getTriggerDOMNode: Function,
      // portal context will change
      tryPopPortal: Boolean
      // no need reactive
    },
    setup: function(s) {
      var c = (0, t.computed)(function() {
        var R = s.popupPlacement, D = s.popupAlign, E = s.builtinPlacements;
        return R && E ? (0, p.getAlignFromPlacement)(E, R, D) : D;
      }), d = (0, b.useInjectTrigger)(s.tryPopPortal), C = d.setPortal, T = d.popPortal, q = (0, t.ref)(null), A = function(D) {
        q.value = D;
      };
      return {
        popPortal: T,
        setPortal: C,
        vcTriggerContext: (0, t.inject)("vcTriggerContext", {}),
        popupRef: q,
        setPopupRef: A,
        triggerRef: (0, t.ref)(null),
        align: c,
        focusTime: null,
        clickOutsideHandler: null,
        contextmenuOutsideHandler1: null,
        contextmenuOutsideHandler2: null,
        touchOutsideHandler: null,
        attachId: null,
        delayTimer: null,
        hasPopupMouseDown: !1,
        preClickTime: null,
        preTouchTime: null,
        mouseDownTimeout: null,
        childOriginEvents: {}
      };
    },
    data: function() {
      var s = this, c, d = this.$props, C;
      return this.popupVisible !== void 0 ? C = !!d.popupVisible : C = !!d.defaultPopupVisible, P.forEach(function(T) {
        s["fire".concat(T)] = function(q) {
          s.fireEvents(T, q);
        };
      }), (c = this.setPortal) === null || c === void 0 || c.call(this, (0, t.createVNode)(m.default, {
        key: "portal",
        getContainer: this.getContainer,
        didUpdate: this.handlePortalUpdate
      }, {
        default: this.getComponent
      })), {
        prevPopupVisible: C,
        sPopupVisible: C,
        point: null
      };
    },
    watch: {
      popupVisible: function(s) {
        s !== void 0 && (this.prevPopupVisible = this.sPopupVisible, this.sPopupVisible = s);
      }
    },
    created: function() {
      (0, t.provide)("vcTriggerContext", {
        onPopupMouseDown: this.onPopupMouseDown
      }), (0, b.useProvidePortal)(this);
    },
    deactivated: function() {
      this.setPopupVisible(!1);
    },
    mounted: function() {
      var s = this;
      this.$nextTick(function() {
        s.updatedCal();
      });
    },
    updated: function() {
      var s = this;
      this.$nextTick(function() {
        s.updatedCal();
      });
    },
    beforeUnmount: function() {
      this.clearDelayTimer(), this.clearOutsideHandler(), clearTimeout(this.mouseDownTimeout), i.default.cancel(this.attachId);
    },
    methods: {
      updatedCal: function() {
        var s = this.$props, c = this.$data;
        if (c.sPopupVisible) {
          var d;
          !this.clickOutsideHandler && (this.isClickToHide() || this.isContextmenuToShow()) && (d = s.getDocument(this.getRootDomNode()), this.clickOutsideHandler = (0, l.default)(d, "mousedown", this.onDocumentClick)), this.touchOutsideHandler || (d = d || s.getDocument(this.getRootDomNode()), this.touchOutsideHandler = (0, l.default)(d, "touchstart", this.onDocumentClick, w.default ? {
            passive: !1
          } : !1)), !this.contextmenuOutsideHandler1 && this.isContextmenuToShow() && (d = d || s.getDocument(this.getRootDomNode()), this.contextmenuOutsideHandler1 = (0, l.default)(d, "scroll", this.onContextmenuClose)), !this.contextmenuOutsideHandler2 && this.isContextmenuToShow() && (this.contextmenuOutsideHandler2 = (0, l.default)(window, "blur", this.onContextmenuClose));
        } else
          this.clearOutsideHandler();
      },
      onMouseenter: function(s) {
        var c = this.$props.mouseEnterDelay;
        this.fireEvents("onMouseenter", s), this.delaySetPopupVisible(!0, c, c ? null : s);
      },
      onMouseMove: function(s) {
        this.fireEvents("onMousemove", s), this.setPoint(s);
      },
      onMouseleave: function(s) {
        this.fireEvents("onMouseleave", s), this.delaySetPopupVisible(!1, this.$props.mouseLeaveDelay);
      },
      onPopupMouseenter: function() {
        this.clearDelayTimer();
      },
      onPopupMouseleave: function(s) {
        var c;
        s && s.relatedTarget && !s.relatedTarget.setTimeout && (0, n.default)((c = this.popupRef) === null || c === void 0 ? void 0 : c.getElement(), s.relatedTarget) || this.delaySetPopupVisible(!1, this.$props.mouseLeaveDelay);
      },
      onFocus: function(s) {
        this.fireEvents("onFocus", s), this.clearDelayTimer(), this.isFocusToShow() && (this.focusTime = Date.now(), this.delaySetPopupVisible(!0, this.$props.focusDelay));
      },
      onMousedown: function(s) {
        this.fireEvents("onMousedown", s), this.preClickTime = Date.now();
      },
      onTouchstart: function(s) {
        this.fireEvents("onTouchstart", s), this.preTouchTime = Date.now();
      },
      onBlur: function(s) {
        (0, n.default)(s.target, s.relatedTarget || document.activeElement) || (this.fireEvents("onBlur", s), this.clearDelayTimer(), this.isBlurToHide() && this.delaySetPopupVisible(!1, this.$props.blurDelay));
      },
      onContextmenu: function(s) {
        s.preventDefault(), this.fireEvents("onContextmenu", s), this.setPopupVisible(!0, s);
      },
      onContextmenuClose: function() {
        this.isContextmenuToShow() && this.close();
      },
      onClick: function(s) {
        if (this.fireEvents("onClick", s), this.focusTime) {
          var c;
          if (this.preClickTime && this.preTouchTime ? c = Math.min(this.preClickTime, this.preTouchTime) : this.preClickTime ? c = this.preClickTime : this.preTouchTime && (c = this.preTouchTime), Math.abs(c - this.focusTime) < 20)
            return;
          this.focusTime = 0;
        }
        this.preClickTime = 0, this.preTouchTime = 0, this.isClickToShow() && (this.isClickToHide() || this.isBlurToHide()) && s && s.preventDefault && s.preventDefault(), s && s.domEvent && s.domEvent.preventDefault();
        var d = !this.$data.sPopupVisible;
        (this.isClickToHide() && !d || d && this.isClickToShow()) && this.setPopupVisible(!this.$data.sPopupVisible, s);
      },
      onPopupMouseDown: function() {
        var s = this, c = this.vcTriggerContext, d = c === void 0 ? {} : c;
        this.hasPopupMouseDown = !0, clearTimeout(this.mouseDownTimeout), this.mouseDownTimeout = setTimeout(function() {
          s.hasPopupMouseDown = !1;
        }, 0), d.onPopupMouseDown && d.onPopupMouseDown.apply(d, arguments);
      },
      onDocumentClick: function(s) {
        if (!(this.$props.mask && !this.$props.maskClosable)) {
          var c = s.target, d = this.getRootDomNode(), C = this.getPopupDomNode();
          // mousedown on the target should also close popup when action is contextMenu.
          // https://github.com/ant-design/ant-design/issues/29853
          (!(0, n.default)(d, c) || this.isContextMenuOnly()) && !(0, n.default)(C, c) && !this.hasPopupMouseDown && this.delaySetPopupVisible(!1, 0.1);
        }
      },
      getPopupDomNode: function() {
        var s;
        return ((s = this.popupRef) === null || s === void 0 ? void 0 : s.getElement()) || null;
      },
      getRootDomNode: function() {
        var s = this.$props.getTriggerDOMNode;
        if (s) {
          var c = (0, o.findDOMNode)(this.triggerRef);
          return (0, o.findDOMNode)(s(c));
        }
        try {
          var d = (0, o.findDOMNode)(this.triggerRef);
          if (d)
            return d;
        } catch {
        }
        return (0, o.findDOMNode)(this);
      },
      handleGetPopupClassFromAlign: function(s) {
        var c = [], d = this.$props, C = d.popupPlacement, T = d.builtinPlacements, q = d.prefixCls, A = d.alignPoint, R = d.getPopupClassNameFromAlign;
        return C && T && c.push((0, p.getAlignPopupClassName)(T, q, s, A)), R && c.push(R(s)), c.join(" ");
      },
      getPopupAlign: function() {
        var s = this.$props, c = s.popupPlacement, d = s.popupAlign, C = s.builtinPlacements;
        return c && C ? (0, p.getAlignFromPlacement)(C, c, d) : d;
      },
      getComponent: function() {
        var s = this, c = {};
        this.isMouseEnterToShow() && (c.onMouseenter = this.onPopupMouseenter), this.isMouseLeaveToHide() && (c.onMouseleave = this.onPopupMouseleave), c.onMousedown = this.onPopupMouseDown, c[w.default ? "onTouchstartPassive" : "onTouchstart"] = this.onPopupMouseDown;
        var d = this.handleGetPopupClassFromAlign, C = this.getRootDomNode, T = this.getContainer, q = this.$attrs, A = this.$props, R = A.prefixCls, D = A.destroyPopupOnHide, E = A.popupClassName, L = A.popupAnimation, H = A.popupTransitionName, F = A.popupStyle, V = A.mask, X = A.maskAnimation, Z = A.maskTransitionName, ae = A.zIndex, Q = A.stretch, ke = A.alignPoint, Le = A.mobile, N = A.forceRender, I = this.$data, $ = I.sPopupVisible, B = I.point, ne = (0, r.default)((0, r.default)({
          prefixCls: R,
          destroyPopupOnHide: D,
          visible: $,
          point: ke ? B : null,
          align: this.align,
          animation: L,
          getClassNameFromAlign: d,
          stretch: Q,
          getRootDomNode: C,
          mask: V,
          zIndex: ae,
          transitionName: H,
          maskAnimation: X,
          maskTransitionName: Z,
          getContainer: T,
          class: E,
          style: F,
          onAlign: q.onPopupAlign || h
        }, c), {}, {
          ref: this.setPopupRef,
          mobile: Le,
          forceRender: N
        });
        return (0, t.createVNode)(f.default, ne, {
          default: this.$slots.popup || function() {
            return (0, o.getComponent)(s, "popup");
          }
        });
      },
      attachParent: function(s) {
        var c = this;
        i.default.cancel(this.attachId);
        var d = this.$props, C = d.getPopupContainer, T = d.getDocument, q = this.getRootDomNode(), A;
        C ? (q || C.length === 0) && (A = C(q)) : A = T(this.getRootDomNode()).body, A ? A.appendChild(s) : this.attachId = (0, i.default)(function() {
          c.attachParent(s);
        });
      },
      getContainer: function() {
        var s = this.$props, c = s.getDocument, d = c(this.getRootDomNode()).createElement("div");
        return d.style.position = "absolute", d.style.top = "0", d.style.left = "0", d.style.width = "100%", this.attachParent(d), d;
      },
      setPopupVisible: function(s, c) {
        var d = this.alignPoint, C = this.sPopupVisible, T = this.onPopupVisibleChange;
        this.clearDelayTimer(), C !== s && ((0, o.hasProp)(this, "popupVisible") || this.setState({
          sPopupVisible: s,
          prevPopupVisible: C
        }), T && T(s)), d && c && s && this.setPoint(c);
      },
      setPoint: function(s) {
        var c = this.$props.alignPoint;
        !c || !s || this.setState({
          point: {
            pageX: s.pageX,
            pageY: s.pageY
          }
        });
      },
      handlePortalUpdate: function() {
        this.prevPopupVisible !== this.sPopupVisible && this.afterPopupVisibleChange(this.sPopupVisible);
      },
      delaySetPopupVisible: function(s, c, d) {
        var C = this, T = c * 1e3;
        if (this.clearDelayTimer(), T) {
          var q = d ? {
            pageX: d.pageX,
            pageY: d.pageY
          } : null;
          this.delayTimer = (0, u.requestAnimationTimeout)(function() {
            C.setPopupVisible(s, q), C.clearDelayTimer();
          }, T);
        } else
          this.setPopupVisible(s, d);
      },
      clearDelayTimer: function() {
        this.delayTimer && ((0, u.cancelAnimationTimeout)(this.delayTimer), this.delayTimer = null);
      },
      clearOutsideHandler: function() {
        this.clickOutsideHandler && (this.clickOutsideHandler.remove(), this.clickOutsideHandler = null), this.contextmenuOutsideHandler1 && (this.contextmenuOutsideHandler1.remove(), this.contextmenuOutsideHandler1 = null), this.contextmenuOutsideHandler2 && (this.contextmenuOutsideHandler2.remove(), this.contextmenuOutsideHandler2 = null), this.touchOutsideHandler && (this.touchOutsideHandler.remove(), this.touchOutsideHandler = null);
      },
      createTwoChains: function(s) {
        var c = function() {
        }, d = (0, o.getEvents)(this);
        return this.childOriginEvents[s] && d[s] ? this["fire".concat(s)] : (c = this.childOriginEvents[s] || d[s] || c, c);
      },
      isClickToShow: function() {
        var s = this.$props, c = s.action, d = s.showAction;
        return c.indexOf("click") !== -1 || d.indexOf("click") !== -1;
      },
      isContextMenuOnly: function() {
        var s = this.$props.action;
        return s === "contextmenu" || s.length === 1 && s[0] === "contextmenu";
      },
      isContextmenuToShow: function() {
        var s = this.$props, c = s.action, d = s.showAction;
        return c.indexOf("contextmenu") !== -1 || d.indexOf("contextmenu") !== -1;
      },
      isClickToHide: function() {
        var s = this.$props, c = s.action, d = s.hideAction;
        return c.indexOf("click") !== -1 || d.indexOf("click") !== -1;
      },
      isMouseEnterToShow: function() {
        var s = this.$props, c = s.action, d = s.showAction;
        return c.indexOf("hover") !== -1 || d.indexOf("mouseenter") !== -1;
      },
      isMouseLeaveToHide: function() {
        var s = this.$props, c = s.action, d = s.hideAction;
        return c.indexOf("hover") !== -1 || d.indexOf("mouseleave") !== -1;
      },
      isFocusToShow: function() {
        var s = this.$props, c = s.action, d = s.showAction;
        return c.indexOf("focus") !== -1 || d.indexOf("focus") !== -1;
      },
      isBlurToHide: function() {
        var s = this.$props, c = s.action, d = s.hideAction;
        return c.indexOf("focus") !== -1 || d.indexOf("blur") !== -1;
      },
      forcePopupAlign: function() {
        if (this.$data.sPopupVisible) {
          var s;
          (s = this.popupRef) === null || s === void 0 || s.forceAlign();
        }
      },
      fireEvents: function(s, c) {
        this.childOriginEvents[s] && this.childOriginEvents[s](c);
        var d = this.$props[s] || this.$attrs[s];
        d && d(c);
      },
      close: function() {
        this.setPopupVisible(!1);
      }
    },
    render: function() {
      var s = this, c = this.$attrs, d = (0, o.filterEmpty)((0, o.getSlot)(this)), C = this.$props.alignPoint, T = d[0];
      this.childOriginEvents = (0, o.getEvents)(T);
      var q = {
        key: "trigger"
      };
      this.isContextmenuToShow() ? q.onContextmenu = this.onContextmenu : q.onContextmenu = this.createTwoChains("onContextmenu"), this.isClickToHide() || this.isClickToShow() ? (q.onClick = this.onClick, q.onMousedown = this.onMousedown, q[w.default ? "onTouchstartPassive" : "onTouchstart"] = this.onTouchstart) : (q.onClick = this.createTwoChains("onClick"), q.onMousedown = this.createTwoChains("onMousedown"), q[w.default ? "onTouchstartPassive" : "onTouchstart"] = this.createTwoChains("onTouchstart")), this.isMouseEnterToShow() ? (q.onMouseenter = this.onMouseenter, C && (q.onMousemove = this.onMouseMove)) : q.onMouseenter = this.createTwoChains("onMouseenter"), this.isMouseLeaveToHide() ? q.onMouseleave = this.onMouseleave : q.onMouseleave = this.createTwoChains("onMouseleave"), this.isFocusToShow() || this.isBlurToHide() ? (q.onFocus = this.onFocus, q.onBlur = this.onBlur) : (q.onFocus = this.createTwoChains("onFocus"), q.onBlur = function(E) {
        E && (!E.relatedTarget || !(0, n.default)(E.target, E.relatedTarget)) && s.createTwoChains("onBlur")(E);
      });
      var A = (0, _.default)(T && T.props && T.props.class, c.class);
      A && (q.class = A);
      var R = (0, O.cloneElement)(T, (0, r.default)((0, r.default)({}, q), {}, {
        ref: "triggerRef"
      }), !0, !0);
      if (this.popPortal)
        return R;
      var D = (0, t.createVNode)(m.default, {
        key: "portal",
        getContainer: this.getContainer,
        didUpdate: this.handlePortalUpdate
      }, {
        default: this.getComponent
      });
      return (0, t.createVNode)(t.Fragment, null, [D, R]);
    }
  });
  return se.default = x, se;
}
var $n;
function $u() {
  if ($n)
    return ue;
  $n = 1;
  var e = j;
  Object.defineProperty(ue, "__esModule", {
    value: !0
  }), ue.default = void 0;
  var t = e(Ru()), r = t.default;
  return ue.default = r, ue;
}
export {
  ou as A,
  re as B,
  ti as C,
  ii as D,
  nu as E,
  si as F,
  co as a,
  $u as b,
  hu as c,
  vu as d,
  Er as e,
  ri as f,
  cu as g,
  fu as h,
  tu as i,
  Jo as j,
  eu as k,
  Zo as l,
  Go as m,
  wu as n,
  lu as o,
  su as p,
  Bo as q,
  xu as r,
  gu as s,
  ui as t,
  Cu as u,
  Uo as v,
  zo as w,
  qu as x,
  bu as y,
  Ko as z
};
