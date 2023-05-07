import { b as z, k as j, s as Ie, d as qr, D as _i, c as Ar, E as He, F as G, G as yi, H as je, I as bi, J as Ti, r as wi, j as Pi, t as Ci, l as qi, e as Ai } from "./useConfigInject.fdc04e2e.js";
import { r as L } from "./_vue_commonjs-external.cdc460b2.js";
import { a as Ln, r as Un, d as Wn, b as Oi, c as Si } from "./Portal.a423630d.js";
import { r as zn } from "./raf.f4e1fc4f.js";
import { _ as Or, r as xi } from "./index.1fa3133f.js";
import { g as Mi } from "./_commonjsHelpers.da91e947.js";
import { r as Gn } from "./vnode.716a0aad.js";
import { r as Ri } from "./ResizeObserver.es.f11dbe23.js";
var ue = {}, se = {}, K = {}, le = {}, Hr;
function Di() {
  if (Hr)
    return le;
  Hr = 1, Object.defineProperty(le, "__esModule", {
    value: !0
  }), le.cancelRequestAnimationFrame = a, le.default = r;
  var e = ["moz", "ms", "webkit"];
  function t() {
    var n = 0;
    return function(i) {
      var o = new Date().getTime(), u = Math.max(0, 16 - (o - n)), l = window.setTimeout(function() {
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
var jr;
function Ei() {
  if (jr)
    return K;
  jr = 1;
  var e = Or.exports;
  Object.defineProperty(K, "__esModule", {
    value: !0
  }), K.requestAnimationTimeout = K.cancelAnimationTimeout = void 0;
  var t = a(Di());
  function r(u) {
    if (typeof WeakMap != "function")
      return null;
    var l = /* @__PURE__ */ new WeakMap(), f = /* @__PURE__ */ new WeakMap();
    return (r = function(m) {
      return m ? f : l;
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
    var v = {}, m = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var h in u)
      if (h !== "default" && Object.prototype.hasOwnProperty.call(u, h)) {
        var _ = m ? Object.getOwnPropertyDescriptor(u, h) : null;
        _ && (_.get || _.set) ? Object.defineProperty(v, h, _) : v[h] = u[h];
      }
    return v.default = u, f && f.set(u, v), v;
  }
  var n = (0, t.default)(), i = function(l) {
    return (0, t.cancelRequestAnimationFrame)(l.id);
  };
  K.cancelAnimationTimeout = i;
  var o = function(l) {
    var f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, v = Date.now();
    function m() {
      Date.now() - v >= f ? l.call() : h.id = n(m);
    }
    var h = {
      id: n(m)
    };
    return h;
  };
  return K.requestAnimationTimeout = o, K;
}
var fe = {}, W = {}, Vr;
function Sr() {
  if (Vr)
    return W;
  Vr = 1;
  var e = j.exports;
  Object.defineProperty(W, "__esModule", {
    value: !0
  }), W.popupProps = W.mobileProps = W.innerProps = void 0;
  var t = e(z()), r = {
    visible: Boolean,
    prefixCls: String,
    zIndex: Number,
    destroyPopupOnHide: Boolean,
    forceRender: Boolean,
    animation: [String, Object],
    transitionName: String,
    stretch: {
      type: String
    },
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
  W.innerProps = r;
  var a = (0, t.default)((0, t.default)({}, r), {}, {
    mobile: {
      type: Object
    }
  });
  W.mobileProps = a;
  var n = (0, t.default)((0, t.default)({}, r), {}, {
    mask: Boolean,
    mobile: {
      type: Object
    },
    maskAnimation: String,
    maskTransitionName: String
  });
  return W.popupProps = n, W;
}
var Ce = {}, qe = {}, Fr;
function Xn() {
  if (Fr)
    return qe;
  Fr = 1, Object.defineProperty(qe, "__esModule", {
    value: !0
  }), qe.getMotion = e;
  function e(t) {
    var r = t.prefixCls, a = t.animation, n = t.transitionName;
    return a ? {
      name: "".concat(r, "-").concat(a)
    } : n ? {
      name: n
    } : {};
  }
  return qe;
}
var $r;
function Ni() {
  if ($r)
    return Ce;
  $r = 1;
  var e = j.exports;
  Object.defineProperty(Ce, "__esModule", {
    value: !0
  }), Ce.default = n;
  var t = L, r = e(z()), a = Xn();
  function n(i) {
    var o = i.prefixCls, u = i.visible, l = i.zIndex, f = i.mask, v = i.maskAnimation, m = i.maskTransitionName;
    if (!f)
      return null;
    var h = {};
    return (m || v) && (h = (0, a.getMotion)({
      prefixCls: o,
      transitionName: m,
      animation: v
    })), (0, t.createVNode)(t.Transition, (0, r.default)({
      appear: !0
    }, h), {
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
  return n.displayName = "Mask", Ce;
}
var ce = {}, Br;
function Ii() {
  if (Br)
    return ce;
  Br = 1;
  var e = j.exports;
  Object.defineProperty(ce, "__esModule", {
    value: !0
  }), ce.default = void 0;
  var t = L, r = e(z()), a = Ie(), n = e(qr()), i = Sr(), o = (0, t.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "MobilePopupInner",
    inheritAttrs: !1,
    props: i.mobileProps,
    emits: ["mouseenter", "mouseleave", "mousedown", "touchstart", "align"],
    setup: function(l, f) {
      var v = f.expose, m = f.slots, h = (0, t.ref)();
      return v({
        forceAlign: function() {
        },
        getElement: function() {
          return h.value;
        }
      }), function() {
        var _, O = l.zIndex, w = l.visible, b = l.prefixCls, g = l.mobile, y = g === void 0 ? {} : g, S = y.popupClassName, P = y.popupStyle, M = y.popupMotion, p = M === void 0 ? {} : M, s = y.popupRender, c = (0, r.default)({
          zIndex: O
        }, P), d = (0, a.flattenChildren)((_ = m.default) === null || _ === void 0 ? void 0 : _.call(m));
        d.length > 1 && (d = (0, t.createVNode)("div", {
          class: "".concat(b, "-content")
        }, [d])), s && (d = s(d));
        var C = (0, n.default)(b, S);
        return (0, t.createVNode)(t.Transition, (0, r.default)({
          ref: h
        }, p), {
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
var de = {}, ve = {}, kr;
function Hi() {
  if (kr)
    return ve;
  kr = 1;
  var e = j.exports;
  Object.defineProperty(ve, "__esModule", {
    value: !0
  }), ve.default = void 0;
  var t = e(xi()), r = e(_i()), a = L, n = e(zn()), i = ["measure", "align", null, "motion"], o = function(l, f) {
    var v = (0, a.ref)(null), m = (0, a.ref)(), h = (0, a.ref)(!1);
    function _(b) {
      h.value || (v.value = b);
    }
    function O() {
      n.default.cancel(m.value);
    }
    function w(b) {
      O(), m.value = (0, n.default)(function() {
        var g = v.value;
        switch (v.value) {
          case "align":
            g = "motion";
            break;
          case "motion":
            g = "stable";
            break;
        }
        _(g), b == null || b();
      });
    }
    return (0, a.watch)(l, function() {
      _("measure");
    }, {
      immediate: !0,
      flush: "post"
    }), (0, a.onMounted)(function() {
      (0, a.watch)(v, function() {
        switch (v.value) {
          case "measure":
            f();
            break;
        }
        v.value && (m.value = (0, n.default)(/* @__PURE__ */ (0, r.default)(/* @__PURE__ */ t.default.mark(function b() {
          var g, y;
          return t.default.wrap(function(P) {
            for (; ; )
              switch (P.prev = P.next) {
                case 0:
                  g = i.indexOf(v.value), y = i[g + 1], y && g !== -1 && _(y);
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
      h.value = !0, O();
    }), [v, w];
  };
  return ve.default = o, ve;
}
var pe = {}, Lr;
function ji() {
  if (Lr)
    return pe;
  Lr = 1, Object.defineProperty(pe, "__esModule", {
    value: !0
  }), pe.default = void 0;
  var e = L, t = function(a) {
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
        var l = n.value, f = l.width, v = l.height;
        a.value.indexOf("height") !== -1 && v ? u.height = "".concat(v, "px") : a.value.indexOf("minHeight") !== -1 && v && (u.minHeight = "".concat(v, "px")), a.value.indexOf("width") !== -1 && f ? u.width = "".concat(f, "px") : a.value.indexOf("minWidth") !== -1 && f && (u.minWidth = "".concat(f, "px"));
      }
      return u;
    });
    return [o, i];
  };
  return pe.default = t, pe;
}
var Y = {};
function Ur(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), r.push.apply(r, a);
  }
  return r;
}
function Wr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ur(Object(r), !0).forEach(function(a) {
      Vi(e, a, r[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ur(Object(r)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
    });
  }
  return e;
}
function Tr(e) {
  return Tr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Tr(e);
}
function Vi(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
var he, Fi = {
  Webkit: "-webkit-",
  Moz: "-moz-",
  ms: "-ms-",
  O: "-o-"
};
function Ee() {
  if (he !== void 0)
    return he;
  he = "";
  var e = document.createElement("p").style, t = "Transform";
  for (var r in Fi)
    r + t in e && (he = r);
  return he;
}
function Kn() {
  return Ee() ? "".concat(Ee(), "TransitionProperty") : "transitionProperty";
}
function Ve() {
  return Ee() ? "".concat(Ee(), "Transform") : "transform";
}
function zr(e, t) {
  var r = Kn();
  r && (e.style[r] = t, r !== "transitionProperty" && (e.style.transitionProperty = t));
}
function ze(e, t) {
  var r = Ve();
  r && (e.style[r] = t, r !== "transform" && (e.style.transform = t));
}
function $i(e) {
  return e.style.transitionProperty || e.style[Kn()];
}
function Bi(e) {
  var t = window.getComputedStyle(e, null), r = t.getPropertyValue("transform") || t.getPropertyValue(Ve());
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
var ki = /matrix\((.*)\)/, Li = /matrix3d\((.*)\)/;
function Ui(e, t) {
  var r = window.getComputedStyle(e, null), a = r.getPropertyValue("transform") || r.getPropertyValue(Ve());
  if (a && a !== "none") {
    var n, i = a.match(ki);
    if (i)
      i = i[1], n = i.split(",").map(function(u) {
        return parseFloat(u, 10);
      }), n[4] = t.x, n[5] = t.y, ze(e, "matrix(".concat(n.join(","), ")"));
    else {
      var o = a.match(Li)[1];
      n = o.split(",").map(function(u) {
        return parseFloat(u, 10);
      }), n[12] = t.x, n[13] = t.y, ze(e, "matrix3d(".concat(n.join(","), ")"));
    }
  } else
    ze(e, "translateX(".concat(t.x, "px) translateY(").concat(t.y, "px) translateZ(0)"));
}
var Wi = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source, we;
function Gr(e) {
  var t = e.style.display;
  e.style.display = "none", e.offsetHeight, e.style.display = t;
}
function te(e, t, r) {
  var a = r;
  if (Tr(t) === "object") {
    for (var n in t)
      t.hasOwnProperty(n) && te(e, n, t[n]);
    return;
  }
  if (typeof a < "u") {
    typeof a == "number" && (a = "".concat(a, "px")), e.style[t] = a;
    return;
  }
  return we(e, t);
}
function zi(e) {
  var t, r, a, n = e.ownerDocument, i = n.body, o = n && n.documentElement;
  return t = e.getBoundingClientRect(), r = Math.floor(t.left), a = Math.floor(t.top), r -= o.clientLeft || i.clientLeft || 0, a -= o.clientTop || i.clientTop || 0, {
    left: r,
    top: a
  };
}
function Yn(e, t) {
  var r = e["page".concat(t ? "Y" : "X", "Offset")], a = "scroll".concat(t ? "Top" : "Left");
  if (typeof r != "number") {
    var n = e.document;
    r = n.documentElement[a], typeof r != "number" && (r = n.body[a]);
  }
  return r;
}
function Jn(e) {
  return Yn(e);
}
function Zn(e) {
  return Yn(e, !0);
}
function Te(e) {
  var t = zi(e), r = e.ownerDocument, a = r.defaultView || r.parentWindow;
  return t.left += Jn(a), t.top += Zn(a), t;
}
function xr(e) {
  return e != null && e == e.window;
}
function Qn(e) {
  return xr(e) ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
}
function Gi(e, t, r) {
  var a = r, n = "", i = Qn(e);
  return a = a || i.defaultView.getComputedStyle(e, null), a && (n = a.getPropertyValue(t) || a[t]), n;
}
var Xi = new RegExp("^(".concat(Wi, ")(?!px)[a-z%]+$"), "i"), Ki = /^(top|right|bottom|left)$/, Ge = "currentStyle", Xe = "runtimeStyle", J = "left", Yi = "px";
function Ji(e, t) {
  var r = e[Ge] && e[Ge][t];
  if (Xi.test(r) && !Ki.test(t)) {
    var a = e.style, n = a[J], i = e[Xe][J];
    e[Xe][J] = e[Ge][J], a[J] = t === "fontSize" ? "1em" : r || 0, r = a.pixelLeft + Yi, a[J] = n, e[Xe][J] = i;
  }
  return r === "" ? "auto" : r;
}
typeof window < "u" && (we = window.getComputedStyle ? Gi : Ji);
function Ae(e, t) {
  return e === "left" ? t.useCssRight ? "right" : e : t.useCssBottom ? "bottom" : e;
}
function Xr(e) {
  if (e === "left")
    return "right";
  if (e === "right")
    return "left";
  if (e === "top")
    return "bottom";
  if (e === "bottom")
    return "top";
}
function Kr(e, t, r) {
  te(e, "position") === "static" && (e.style.position = "relative");
  var a = -999, n = -999, i = Ae("left", r), o = Ae("top", r), u = Xr(i), l = Xr(o);
  i !== "left" && (a = 999), o !== "top" && (n = 999);
  var f = "", v = Te(e);
  ("left" in t || "top" in t) && (f = $i(e) || "", zr(e, "none")), "left" in t && (e.style[u] = "", e.style[i] = "".concat(a, "px")), "top" in t && (e.style[l] = "", e.style[o] = "".concat(n, "px")), Gr(e);
  var m = Te(e), h = {};
  for (var _ in t)
    if (t.hasOwnProperty(_)) {
      var O = Ae(_, r), w = _ === "left" ? a : n, b = v[_] - m[_];
      O === _ ? h[O] = w + b : h[O] = w - b;
    }
  te(e, h), Gr(e), ("left" in t || "top" in t) && zr(e, f);
  var g = {};
  for (var y in t)
    if (t.hasOwnProperty(y)) {
      var S = Ae(y, r), P = t[y] - v[y];
      y === S ? g[S] = h[S] + P : g[S] = h[S] - P;
    }
  te(e, g);
}
function Zi(e, t) {
  var r = Te(e), a = Bi(e), n = {
    x: a.x,
    y: a.y
  };
  "left" in t && (n.x = a.x + t.left - r.left), "top" in t && (n.y = a.y + t.top - r.top), Ui(e, n);
}
function Qi(e, t, r) {
  if (r.ignoreShake) {
    var a = Te(e), n = a.left.toFixed(0), i = a.top.toFixed(0), o = t.left.toFixed(0), u = t.top.toFixed(0);
    if (n === o && i === u)
      return;
  }
  r.useCssRight || r.useCssBottom ? Kr(e, t, r) : r.useCssTransform && Ve() in document.body.style ? Zi(e, t) : Kr(e, t, r);
}
function Mr(e, t) {
  for (var r = 0; r < e.length; r++)
    t(e[r]);
}
function ei(e) {
  return we(e, "boxSizing") === "border-box";
}
var eo = ["margin", "border", "padding"], wr = -1, to = 2, Pr = 1, ro = 0;
function ao(e, t, r) {
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
        n === "border" ? u = "".concat(n).concat(r[o], "Width") : u = n + r[o], a += parseFloat(we(e, u)) || 0;
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
      r.documentElement["scroll".concat(e)],
      r.body["scroll".concat(e)],
      k["viewport".concat(e)](r)
    );
  }, k["viewport".concat(e)] = function(t) {
    var r = "client".concat(e), a = t.document, n = a.body, i = a.documentElement, o = i[r];
    return a.compatMode === "CSS1Compat" && o || n && n[r] || o;
  };
});
function Yr(e, t, r) {
  var a = r;
  if (xr(e))
    return t === "width" ? k.viewportWidth(e) : k.viewportHeight(e);
  if (e.nodeType === 9)
    return t === "width" ? k.docWidth(e) : k.docHeight(e);
  var n = t === "width" ? ["Left", "Right"] : ["Top", "Bottom"], i = Math.floor(t === "width" ? e.getBoundingClientRect().width : e.getBoundingClientRect().height), o = ei(e), u = 0;
  (i == null || i <= 0) && (i = void 0, u = we(e, t), (u == null || Number(u) < 0) && (u = e.style[t] || 0), u = Math.floor(parseFloat(u)) || 0), a === void 0 && (a = o ? Pr : wr);
  var l = i !== void 0 || o, f = i || u;
  return a === wr ? l ? f - be(e, ["border", "padding"], n) : u : l ? a === Pr ? f : f + (a === to ? -be(e, ["border"], n) : be(e, ["margin"], n)) : u + be(e, eo.slice(a), n);
}
var no = {
  position: "absolute",
  visibility: "hidden",
  display: "block"
};
function Jr() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var a, n = t[0];
  return n.offsetWidth !== 0 ? a = Yr.apply(void 0, t) : ao(n, no, function() {
    a = Yr.apply(void 0, t);
  }), a;
}
Mr(["width", "height"], function(e) {
  var t = e.charAt(0).toUpperCase() + e.slice(1);
  k["outer".concat(t)] = function(a, n) {
    return a && Jr(a, e, n ? ro : Pr);
  };
  var r = e === "width" ? ["Left", "Right"] : ["Top", "Bottom"];
  k[e] = function(a, n) {
    var i = n;
    if (i !== void 0) {
      if (a) {
        var o = ei(a);
        return o && (i += be(a, ["padding", "border"], r)), te(a, e, i);
      }
      return;
    }
    return a && Jr(a, e, wr);
  };
});
function ti(e, t) {
  for (var r in t)
    t.hasOwnProperty(r) && (e[r] = t[r]);
  return e;
}
var x = {
  getWindow: function(t) {
    if (t && t.document && t.setTimeout)
      return t;
    var r = t.ownerDocument || t;
    return r.defaultView || r.parentWindow;
  },
  getDocument: Qn,
  offset: function(t, r, a) {
    if (typeof r < "u")
      Qi(t, r, a || {});
    else
      return Te(t);
  },
  isWindow: xr,
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
  mix: ti,
  getWindowScrollLeft: function(t) {
    return Jn(t);
  },
  getWindowScrollTop: function(t) {
    return Zn(t);
  },
  merge: function() {
    for (var t = {}, r = 0; r < arguments.length; r++)
      x.mix(t, r < 0 || arguments.length <= r ? void 0 : arguments[r]);
    return t;
  },
  viewportWidth: 0,
  viewportHeight: 0
};
ti(x, k);
var Ke = x.getParent;
function Cr(e) {
  if (x.isWindow(e) || e.nodeType === 9)
    return null;
  var t = x.getDocument(e), r = t.body, a, n = x.css(e, "position"), i = n === "fixed" || n === "absolute";
  if (!i)
    return e.nodeName.toLowerCase() === "html" ? null : Ke(e);
  for (a = Ke(e); a && a !== r && a.nodeType !== 9; a = Ke(a))
    if (n = x.css(a, "position"), n !== "static")
      return a;
  return null;
}
var Zr = x.getParent;
function io(e) {
  if (x.isWindow(e) || e.nodeType === 9)
    return !1;
  var t = x.getDocument(e), r = t.body, a = null;
  for (a = Zr(e); a && a !== r && a !== t; a = Zr(a)) {
    var n = x.css(a, "position");
    if (n === "fixed")
      return !0;
  }
  return !1;
}
function Rr(e, t) {
  for (var r = {
    left: 0,
    right: 1 / 0,
    top: 0,
    bottom: 1 / 0
  }, a = Cr(e), n = x.getDocument(e), i = n.defaultView || n.parentWindow, o = n.body, u = n.documentElement; a; ) {
    if ((navigator.userAgent.indexOf("MSIE") === -1 || a.clientWidth !== 0) && a !== o && a !== u && x.css(a, "overflow") !== "visible") {
      var l = x.offset(a);
      l.left += a.clientLeft, l.top += a.clientTop, r.top = Math.max(r.top, l.top), r.right = Math.min(
        r.right,
        l.left + a.clientWidth
      ), r.bottom = Math.min(r.bottom, l.top + a.clientHeight), r.left = Math.max(r.left, l.left);
    } else if (a === o || a === u)
      break;
    a = Cr(a);
  }
  var f = null;
  if (!x.isWindow(e) && e.nodeType !== 9) {
    f = e.style.position;
    var v = x.css(e, "position");
    v === "absolute" && (e.style.position = "fixed");
  }
  var m = x.getWindowScrollLeft(i), h = x.getWindowScrollTop(i), _ = x.viewportWidth(i), O = x.viewportHeight(i), w = u.scrollWidth, b = u.scrollHeight, g = window.getComputedStyle(o);
  if (g.overflowX === "hidden" && (w = i.innerWidth), g.overflowY === "hidden" && (b = i.innerHeight), e.style && (e.style.position = f), t || io(e))
    r.left = Math.max(r.left, m), r.top = Math.max(r.top, h), r.right = Math.min(r.right, m + _), r.bottom = Math.min(r.bottom, h + O);
  else {
    var y = Math.max(w, m + _);
    r.right = Math.min(r.right, y);
    var S = Math.max(b, h + O);
    r.bottom = Math.min(r.bottom, S);
  }
  return r.top >= 0 && r.left >= 0 && r.bottom > r.top && r.right > r.left ? r : null;
}
function oo(e, t, r, a) {
  var n = x.clone(e), i = {
    width: t.width,
    height: t.height
  };
  return a.adjustX && n.left < r.left && (n.left = r.left), a.resizeWidth && n.left >= r.left && n.left + i.width > r.right && (i.width -= n.left + i.width - r.right), a.adjustX && n.left + i.width > r.right && (n.left = Math.max(r.right - i.width, r.left)), a.adjustY && n.top < r.top && (n.top = r.top), a.resizeHeight && n.top >= r.top && n.top + i.height > r.bottom && (i.height -= n.top + i.height - r.bottom), a.adjustY && n.top + i.height > r.bottom && (n.top = Math.max(r.bottom - i.height, r.top)), x.mix(n, i);
}
function Dr(e) {
  var t, r, a;
  if (!x.isWindow(e) && e.nodeType !== 9)
    t = x.offset(e), r = x.outerWidth(e), a = x.outerHeight(e);
  else {
    var n = x.getWindow(e);
    t = {
      left: x.getWindowScrollLeft(n),
      top: x.getWindowScrollTop(n)
    }, r = x.viewportWidth(n), a = x.viewportHeight(n);
  }
  return t.width = r, t.height = a, t;
}
function Qr(e, t) {
  var r = t.charAt(0), a = t.charAt(1), n = e.width, i = e.height, o = e.left, u = e.top;
  return r === "c" ? u += i / 2 : r === "b" && (u += i), a === "c" ? o += n / 2 : a === "r" && (o += n), {
    left: o,
    top: u
  };
}
function Oe(e, t, r, a, n) {
  var i = Qr(t, r[1]), o = Qr(e, r[0]), u = [o.left - i.left, o.top - i.top];
  return {
    left: Math.round(e.left - u[0] + a[0] - n[0]),
    top: Math.round(e.top - u[1] + a[1] - n[1])
  };
}
function ea(e, t, r) {
  return e.left < r.left || e.left + t.width > r.right;
}
function ta(e, t, r) {
  return e.top < r.top || e.top + t.height > r.bottom;
}
function uo(e, t, r) {
  return e.left > r.right || e.left + t.width < r.left;
}
function so(e, t, r) {
  return e.top > r.bottom || e.top + t.height < r.top;
}
function Se(e, t, r) {
  var a = [];
  return x.each(e, function(n) {
    a.push(n.replace(t, function(i) {
      return r[i];
    }));
  }), a;
}
function xe(e, t) {
  return e[t] = -e[t], e;
}
function ra(e, t) {
  var r;
  return /%$/.test(e) ? r = parseInt(e.substring(0, e.length - 1), 10) / 100 * t : r = parseInt(e, 10), r || 0;
}
function aa(e, t) {
  e[0] = ra(e[0], t.width), e[1] = ra(e[1], t.height);
}
function ri(e, t, r, a) {
  var n = r.points, i = r.offset || [0, 0], o = r.targetOffset || [0, 0], u = r.overflow, l = r.source || e;
  i = [].concat(i), o = [].concat(o), u = u || {};
  var f = {}, v = 0, m = !!(u && u.alwaysByViewport), h = Rr(l, m), _ = Dr(l);
  aa(i, _), aa(o, t);
  var O = Oe(_, t, n, i, o), w = x.merge(_, O);
  if (h && (u.adjustX || u.adjustY) && a) {
    if (u.adjustX && ea(O, _, h)) {
      var b = Se(n, /[lr]/gi, {
        l: "r",
        r: "l"
      }), g = xe(i, 0), y = xe(o, 0), S = Oe(_, t, b, g, y);
      uo(S, _, h) || (v = 1, n = b, i = g, o = y);
    }
    if (u.adjustY && ta(O, _, h)) {
      var P = Se(n, /[tb]/gi, {
        t: "b",
        b: "t"
      }), M = xe(i, 1), p = xe(o, 1), s = Oe(_, t, P, M, p);
      so(s, _, h) || (v = 1, n = P, i = M, o = p);
    }
    v && (O = Oe(_, t, n, i, o), x.mix(w, O));
    var c = ea(O, _, h), d = ta(O, _, h);
    if (c || d) {
      var C = n;
      c && (C = Se(n, /[lr]/gi, {
        l: "r",
        r: "l"
      })), d && (C = Se(n, /[tb]/gi, {
        t: "b",
        b: "t"
      })), n = C, i = r.offset || [0, 0], o = r.targetOffset || [0, 0];
    }
    f.adjustX = u.adjustX && c, f.adjustY = u.adjustY && d, (f.adjustX || f.adjustY) && (w = oo(O, _, h, f));
  }
  return w.width !== _.width && x.css(l, "width", x.width(l) + w.width - _.width), w.height !== _.height && x.css(l, "height", x.height(l) + w.height - _.height), x.offset(l, {
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
function lo(e, t) {
  var r = Rr(e, t), a = Dr(e);
  return !r || a.left + a.width <= r.left || a.top + a.height <= r.top || a.left >= r.right || a.top >= r.bottom;
}
function Ne(e, t, r) {
  var a = r.target || t, n = Dr(a), i = !lo(a, r.overflow && r.overflow.alwaysByViewport);
  return ri(e, n, r, i);
}
Ne.__getOffsetParent = Cr;
Ne.__getVisibleRectForElement = Rr;
function fo(e, t, r) {
  var a, n, i = x.getDocument(e), o = i.defaultView || i.parentWindow, u = x.getWindowScrollLeft(o), l = x.getWindowScrollTop(o), f = x.viewportWidth(o), v = x.viewportHeight(o);
  "pageX" in t ? a = t.pageX : a = u + t.clientX, "pageY" in t ? n = t.pageY : n = l + t.clientY;
  var m = {
    left: a,
    top: n,
    width: 0,
    height: 0
  }, h = a >= 0 && a <= u + f && n >= 0 && n <= l + v, _ = [r.points[0], "cc"];
  return ri(e, m, Wr(Wr({}, r), {}, {
    points: _
  }), h);
}
const co = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ne,
  alignElement: Ne,
  alignPoint: fo
}, Symbol.toStringTag, { value: "Module" })), vo = /* @__PURE__ */ Mi(co);
var ge = {}, na;
function po() {
  if (na)
    return ge;
  na = 1, Object.defineProperty(ge, "__esModule", {
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
var ee = {}, ia;
function ho() {
  if (ia)
    return ee;
  ia = 1;
  var e = j.exports;
  Object.defineProperty(ee, "__esModule", {
    value: !0
  }), ee.isSamePoint = n, ee.monitorResize = o, ee.restoreFocus = i;
  var t = e(Ar()), r = e(Ln()), a = e(Ri);
  function n(u, l) {
    return u === l ? !0 : !u || !l ? !1 : "pageX" in l && "pageY" in l ? u.pageX === l.pageX && u.pageY === l.pageY : "clientX" in l && "clientY" in l ? u.clientX === l.clientX && u.clientY === l.clientY : !1;
  }
  function i(u, l) {
    u !== document.activeElement && (0, r.default)(l, u) && typeof u.focus == "function" && u.focus();
  }
  function o(u, l) {
    var f = null, v = null;
    function m(_) {
      var O = (0, t.default)(_, 1), w = O[0].target;
      if (!!document.documentElement.contains(w)) {
        var b = w.getBoundingClientRect(), g = b.width, y = b.height, S = Math.floor(g), P = Math.floor(y);
        (f !== S || v !== P) && Promise.resolve().then(function() {
          l({
            width: S,
            height: P
          });
        }), f = S, v = P;
      }
    }
    var h = new a.default(m);
    return u && h.observe(u), function() {
      h.disconnect();
    };
  }
  return ee;
}
var me = {}, oa;
function go() {
  if (oa)
    return me;
  oa = 1, Object.defineProperty(me, "__esModule", {
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
var Ye, ua;
function mo() {
  if (ua)
    return Ye;
  ua = 1;
  function e() {
    this.__data__ = [], this.size = 0;
  }
  return Ye = e, Ye;
}
var Je, sa;
function ai() {
  if (sa)
    return Je;
  sa = 1;
  function e(t, r) {
    return t === r || t !== t && r !== r;
  }
  return Je = e, Je;
}
var Ze, la;
function Fe() {
  if (la)
    return Ze;
  la = 1;
  var e = ai();
  function t(r, a) {
    for (var n = r.length; n--; )
      if (e(r[n][0], a))
        return n;
    return -1;
  }
  return Ze = t, Ze;
}
var Qe, fa;
function _o() {
  if (fa)
    return Qe;
  fa = 1;
  var e = Fe(), t = Array.prototype, r = t.splice;
  function a(n) {
    var i = this.__data__, o = e(i, n);
    if (o < 0)
      return !1;
    var u = i.length - 1;
    return o == u ? i.pop() : r.call(i, o, 1), --this.size, !0;
  }
  return Qe = a, Qe;
}
var et, ca;
function yo() {
  if (ca)
    return et;
  ca = 1;
  var e = Fe();
  function t(r) {
    var a = this.__data__, n = e(a, r);
    return n < 0 ? void 0 : a[n][1];
  }
  return et = t, et;
}
var tt, da;
function bo() {
  if (da)
    return tt;
  da = 1;
  var e = Fe();
  function t(r) {
    return e(this.__data__, r) > -1;
  }
  return tt = t, tt;
}
var rt, va;
function To() {
  if (va)
    return rt;
  va = 1;
  var e = Fe();
  function t(r, a) {
    var n = this.__data__, i = e(n, r);
    return i < 0 ? (++this.size, n.push([r, a])) : n[i][1] = a, this;
  }
  return rt = t, rt;
}
var at, pa;
function $e() {
  if (pa)
    return at;
  pa = 1;
  var e = mo(), t = _o(), r = yo(), a = bo(), n = To();
  function i(o) {
    var u = -1, l = o == null ? 0 : o.length;
    for (this.clear(); ++u < l; ) {
      var f = o[u];
      this.set(f[0], f[1]);
    }
  }
  return i.prototype.clear = e, i.prototype.delete = t, i.prototype.get = r, i.prototype.has = a, i.prototype.set = n, at = i, at;
}
var nt, ha;
function wo() {
  if (ha)
    return nt;
  ha = 1;
  var e = $e();
  function t() {
    this.__data__ = new e(), this.size = 0;
  }
  return nt = t, nt;
}
var it, ga;
function Po() {
  if (ga)
    return it;
  ga = 1;
  function e(t) {
    var r = this.__data__, a = r.delete(t);
    return this.size = r.size, a;
  }
  return it = e, it;
}
var ot, ma;
function Co() {
  if (ma)
    return ot;
  ma = 1;
  function e(t) {
    return this.__data__.get(t);
  }
  return ot = e, ot;
}
var ut, _a;
function qo() {
  if (_a)
    return ut;
  _a = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return ut = e, ut;
}
var st, ya;
function ni() {
  if (ya)
    return st;
  ya = 1;
  function e(t) {
    var r = typeof t;
    return t != null && (r == "object" || r == "function");
  }
  return st = e, st;
}
var lt, ba;
function ii() {
  if (ba)
    return lt;
  ba = 1;
  var e = He(), t = ni(), r = "[object AsyncFunction]", a = "[object Function]", n = "[object GeneratorFunction]", i = "[object Proxy]";
  function o(u) {
    if (!t(u))
      return !1;
    var l = e(u);
    return l == a || l == n || l == r || l == i;
  }
  return lt = o, lt;
}
var ft, Ta;
function Ao() {
  if (Ta)
    return ft;
  Ta = 1;
  var e = G(), t = e["__core-js_shared__"];
  return ft = t, ft;
}
var ct, wa;
function Oo() {
  if (wa)
    return ct;
  wa = 1;
  var e = Ao(), t = function() {
    var a = /[^.]+$/.exec(e && e.keys && e.keys.IE_PROTO || "");
    return a ? "Symbol(src)_1." + a : "";
  }();
  function r(a) {
    return !!t && t in a;
  }
  return ct = r, ct;
}
var dt, Pa;
function oi() {
  if (Pa)
    return dt;
  Pa = 1;
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
  return dt = r, dt;
}
var vt, Ca;
function So() {
  if (Ca)
    return vt;
  Ca = 1;
  var e = ii(), t = Oo(), r = ni(), a = oi(), n = /[\\^$.*+?()[\]{}|]/g, i = /^\[object .+?Constructor\]$/, o = Function.prototype, u = Object.prototype, l = o.toString, f = u.hasOwnProperty, v = RegExp(
    "^" + l.call(f).replace(n, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function m(h) {
    if (!r(h) || t(h))
      return !1;
    var _ = e(h) ? v : i;
    return _.test(a(h));
  }
  return vt = m, vt;
}
var pt, qa;
function xo() {
  if (qa)
    return pt;
  qa = 1;
  function e(t, r) {
    return t == null ? void 0 : t[r];
  }
  return pt = e, pt;
}
var ht, Aa;
function re() {
  if (Aa)
    return ht;
  Aa = 1;
  var e = So(), t = xo();
  function r(a, n) {
    var i = t(a, n);
    return e(i) ? i : void 0;
  }
  return ht = r, ht;
}
var gt, Oa;
function Er() {
  if (Oa)
    return gt;
  Oa = 1;
  var e = re(), t = G(), r = e(t, "Map");
  return gt = r, gt;
}
var mt, Sa;
function Be() {
  if (Sa)
    return mt;
  Sa = 1;
  var e = re(), t = e(Object, "create");
  return mt = t, mt;
}
var _t, xa;
function Mo() {
  if (xa)
    return _t;
  xa = 1;
  var e = Be();
  function t() {
    this.__data__ = e ? e(null) : {}, this.size = 0;
  }
  return _t = t, _t;
}
var yt, Ma;
function Ro() {
  if (Ma)
    return yt;
  Ma = 1;
  function e(t) {
    var r = this.has(t) && delete this.__data__[t];
    return this.size -= r ? 1 : 0, r;
  }
  return yt = e, yt;
}
var bt, Ra;
function Do() {
  if (Ra)
    return bt;
  Ra = 1;
  var e = Be(), t = "__lodash_hash_undefined__", r = Object.prototype, a = r.hasOwnProperty;
  function n(i) {
    var o = this.__data__;
    if (e) {
      var u = o[i];
      return u === t ? void 0 : u;
    }
    return a.call(o, i) ? o[i] : void 0;
  }
  return bt = n, bt;
}
var Tt, Da;
function Eo() {
  if (Da)
    return Tt;
  Da = 1;
  var e = Be(), t = Object.prototype, r = t.hasOwnProperty;
  function a(n) {
    var i = this.__data__;
    return e ? i[n] !== void 0 : r.call(i, n);
  }
  return Tt = a, Tt;
}
var wt, Ea;
function No() {
  if (Ea)
    return wt;
  Ea = 1;
  var e = Be(), t = "__lodash_hash_undefined__";
  function r(a, n) {
    var i = this.__data__;
    return this.size += this.has(a) ? 0 : 1, i[a] = e && n === void 0 ? t : n, this;
  }
  return wt = r, wt;
}
var Pt, Na;
function Io() {
  if (Na)
    return Pt;
  Na = 1;
  var e = Mo(), t = Ro(), r = Do(), a = Eo(), n = No();
  function i(o) {
    var u = -1, l = o == null ? 0 : o.length;
    for (this.clear(); ++u < l; ) {
      var f = o[u];
      this.set(f[0], f[1]);
    }
  }
  return i.prototype.clear = e, i.prototype.delete = t, i.prototype.get = r, i.prototype.has = a, i.prototype.set = n, Pt = i, Pt;
}
var Ct, Ia;
function Ho() {
  if (Ia)
    return Ct;
  Ia = 1;
  var e = Io(), t = $e(), r = Er();
  function a() {
    this.size = 0, this.__data__ = {
      hash: new e(),
      map: new (r || t)(),
      string: new e()
    };
  }
  return Ct = a, Ct;
}
var qt, Ha;
function jo() {
  if (Ha)
    return qt;
  Ha = 1;
  function e(t) {
    var r = typeof t;
    return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? t !== "__proto__" : t === null;
  }
  return qt = e, qt;
}
var At, ja;
function ke() {
  if (ja)
    return At;
  ja = 1;
  var e = jo();
  function t(r, a) {
    var n = r.__data__;
    return e(a) ? n[typeof a == "string" ? "string" : "hash"] : n.map;
  }
  return At = t, At;
}
var Ot, Va;
function Vo() {
  if (Va)
    return Ot;
  Va = 1;
  var e = ke();
  function t(r) {
    var a = e(this, r).delete(r);
    return this.size -= a ? 1 : 0, a;
  }
  return Ot = t, Ot;
}
var St, Fa;
function Fo() {
  if (Fa)
    return St;
  Fa = 1;
  var e = ke();
  function t(r) {
    return e(this, r).get(r);
  }
  return St = t, St;
}
var xt, $a;
function $o() {
  if ($a)
    return xt;
  $a = 1;
  var e = ke();
  function t(r) {
    return e(this, r).has(r);
  }
  return xt = t, xt;
}
var Mt, Ba;
function Bo() {
  if (Ba)
    return Mt;
  Ba = 1;
  var e = ke();
  function t(r, a) {
    var n = e(this, r), i = n.size;
    return n.set(r, a), this.size += n.size == i ? 0 : 1, this;
  }
  return Mt = t, Mt;
}
var Rt, ka;
function ui() {
  if (ka)
    return Rt;
  ka = 1;
  var e = Ho(), t = Vo(), r = Fo(), a = $o(), n = Bo();
  function i(o) {
    var u = -1, l = o == null ? 0 : o.length;
    for (this.clear(); ++u < l; ) {
      var f = o[u];
      this.set(f[0], f[1]);
    }
  }
  return i.prototype.clear = e, i.prototype.delete = t, i.prototype.get = r, i.prototype.has = a, i.prototype.set = n, Rt = i, Rt;
}
var Dt, La;
function ko() {
  if (La)
    return Dt;
  La = 1;
  var e = $e(), t = Er(), r = ui(), a = 200;
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
  return Dt = n, Dt;
}
var Et, Ua;
function Lo() {
  if (Ua)
    return Et;
  Ua = 1;
  var e = $e(), t = wo(), r = Po(), a = Co(), n = qo(), i = ko();
  function o(u) {
    var l = this.__data__ = new e(u);
    this.size = l.size;
  }
  return o.prototype.clear = t, o.prototype.delete = r, o.prototype.get = a, o.prototype.has = n, o.prototype.set = i, Et = o, Et;
}
var Nt, Wa;
function Uo() {
  if (Wa)
    return Nt;
  Wa = 1;
  var e = "__lodash_hash_undefined__";
  function t(r) {
    return this.__data__.set(r, e), this;
  }
  return Nt = t, Nt;
}
var It, za;
function Wo() {
  if (za)
    return It;
  za = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return It = e, It;
}
var Ht, Ga;
function zo() {
  if (Ga)
    return Ht;
  Ga = 1;
  var e = ui(), t = Uo(), r = Wo();
  function a(n) {
    var i = -1, o = n == null ? 0 : n.length;
    for (this.__data__ = new e(); ++i < o; )
      this.add(n[i]);
  }
  return a.prototype.add = a.prototype.push = t, a.prototype.has = r, Ht = a, Ht;
}
var jt, Xa;
function Go() {
  if (Xa)
    return jt;
  Xa = 1;
  function e(t, r) {
    for (var a = -1, n = t == null ? 0 : t.length; ++a < n; )
      if (r(t[a], a, t))
        return !0;
    return !1;
  }
  return jt = e, jt;
}
var Vt, Ka;
function Xo() {
  if (Ka)
    return Vt;
  Ka = 1;
  function e(t, r) {
    return t.has(r);
  }
  return Vt = e, Vt;
}
var Ft, Ya;
function si() {
  if (Ya)
    return Ft;
  Ya = 1;
  var e = zo(), t = Go(), r = Xo(), a = 1, n = 2;
  function i(o, u, l, f, v, m) {
    var h = l & a, _ = o.length, O = u.length;
    if (_ != O && !(h && O > _))
      return !1;
    var w = m.get(o), b = m.get(u);
    if (w && b)
      return w == u && b == o;
    var g = -1, y = !0, S = l & n ? new e() : void 0;
    for (m.set(o, u), m.set(u, o); ++g < _; ) {
      var P = o[g], M = u[g];
      if (f)
        var p = h ? f(M, P, g, u, o, m) : f(P, M, g, o, u, m);
      if (p !== void 0) {
        if (p)
          continue;
        y = !1;
        break;
      }
      if (S) {
        if (!t(u, function(s, c) {
          if (!r(S, c) && (P === s || v(P, s, l, f, m)))
            return S.push(c);
        })) {
          y = !1;
          break;
        }
      } else if (!(P === M || v(P, M, l, f, m))) {
        y = !1;
        break;
      }
    }
    return m.delete(o), m.delete(u), y;
  }
  return Ft = i, Ft;
}
var $t, Ja;
function Ko() {
  if (Ja)
    return $t;
  Ja = 1;
  var e = G(), t = e.Uint8Array;
  return $t = t, $t;
}
var Bt, Za;
function Yo() {
  if (Za)
    return Bt;
  Za = 1;
  function e(t) {
    var r = -1, a = Array(t.size);
    return t.forEach(function(n, i) {
      a[++r] = [i, n];
    }), a;
  }
  return Bt = e, Bt;
}
var kt, Qa;
function Jo() {
  if (Qa)
    return kt;
  Qa = 1;
  function e(t) {
    var r = -1, a = Array(t.size);
    return t.forEach(function(n) {
      a[++r] = n;
    }), a;
  }
  return kt = e, kt;
}
var Lt, en;
function Zo() {
  if (en)
    return Lt;
  en = 1;
  var e = yi(), t = Ko(), r = ai(), a = si(), n = Yo(), i = Jo(), o = 1, u = 2, l = "[object Boolean]", f = "[object Date]", v = "[object Error]", m = "[object Map]", h = "[object Number]", _ = "[object RegExp]", O = "[object Set]", w = "[object String]", b = "[object Symbol]", g = "[object ArrayBuffer]", y = "[object DataView]", S = e ? e.prototype : void 0, P = S ? S.valueOf : void 0;
  function M(p, s, c, d, C, T, q) {
    switch (c) {
      case y:
        if (p.byteLength != s.byteLength || p.byteOffset != s.byteOffset)
          return !1;
        p = p.buffer, s = s.buffer;
      case g:
        return !(p.byteLength != s.byteLength || !T(new t(p), new t(s)));
      case l:
      case f:
      case h:
        return r(+p, +s);
      case v:
        return p.name == s.name && p.message == s.message;
      case _:
      case w:
        return p == s + "";
      case m:
        var A = n;
      case O:
        var R = d & o;
        if (A || (A = i), p.size != s.size && !R)
          return !1;
        var D = q.get(p);
        if (D)
          return D == s;
        d |= u, q.set(p, s);
        var E = a(A(p), A(s), d, C, T, q);
        return q.delete(p), E;
      case b:
        if (P)
          return P.call(p) == P.call(s);
    }
    return !1;
  }
  return Lt = M, Lt;
}
var Ut, tn;
function Qo() {
  if (tn)
    return Ut;
  tn = 1;
  function e(t, r) {
    for (var a = -1, n = r.length, i = t.length; ++a < n; )
      t[i + a] = r[a];
    return t;
  }
  return Ut = e, Ut;
}
var Wt, rn;
function Nr() {
  if (rn)
    return Wt;
  rn = 1;
  var e = Array.isArray;
  return Wt = e, Wt;
}
var zt, an;
function eu() {
  if (an)
    return zt;
  an = 1;
  var e = Qo(), t = Nr();
  function r(a, n, i) {
    var o = n(a);
    return t(a) ? o : e(o, i(a));
  }
  return zt = r, zt;
}
var Gt, nn;
function tu() {
  if (nn)
    return Gt;
  nn = 1;
  function e(t, r) {
    for (var a = -1, n = t == null ? 0 : t.length, i = 0, o = []; ++a < n; ) {
      var u = t[a];
      r(u, a, t) && (o[i++] = u);
    }
    return o;
  }
  return Gt = e, Gt;
}
var Xt, on;
function ru() {
  if (on)
    return Xt;
  on = 1;
  function e() {
    return [];
  }
  return Xt = e, Xt;
}
var Kt, un;
function au() {
  if (un)
    return Kt;
  un = 1;
  var e = tu(), t = ru(), r = Object.prototype, a = r.propertyIsEnumerable, n = Object.getOwnPropertySymbols, i = n ? function(o) {
    return o == null ? [] : (o = Object(o), e(n(o), function(u) {
      return a.call(o, u);
    }));
  } : t;
  return Kt = i, Kt;
}
var Yt, sn;
function nu() {
  if (sn)
    return Yt;
  sn = 1;
  function e(t, r) {
    for (var a = -1, n = Array(t); ++a < t; )
      n[a] = r(a);
    return n;
  }
  return Yt = e, Yt;
}
var Jt, ln;
function iu() {
  if (ln)
    return Jt;
  ln = 1;
  var e = He(), t = je(), r = "[object Arguments]";
  function a(n) {
    return t(n) && e(n) == r;
  }
  return Jt = a, Jt;
}
var Zt, fn;
function ou() {
  if (fn)
    return Zt;
  fn = 1;
  var e = iu(), t = je(), r = Object.prototype, a = r.hasOwnProperty, n = r.propertyIsEnumerable, i = e(function() {
    return arguments;
  }()) ? e : function(o) {
    return t(o) && a.call(o, "callee") && !n.call(o, "callee");
  };
  return Zt = i, Zt;
}
var Me = { exports: {} }, Qt, cn;
function uu() {
  if (cn)
    return Qt;
  cn = 1;
  function e() {
    return !1;
  }
  return Qt = e, Qt;
}
var dn;
function li() {
  return dn || (dn = 1, function(e, t) {
    var r = G(), a = uu(), n = t && !t.nodeType && t, i = n && !0 && e && !e.nodeType && e, o = i && i.exports === n, u = o ? r.Buffer : void 0, l = u ? u.isBuffer : void 0, f = l || a;
    e.exports = f;
  }(Me, Me.exports)), Me.exports;
}
var er, vn;
function su() {
  if (vn)
    return er;
  vn = 1;
  var e = 9007199254740991, t = /^(?:0|[1-9]\d*)$/;
  function r(a, n) {
    var i = typeof a;
    return n = n == null ? e : n, !!n && (i == "number" || i != "symbol" && t.test(a)) && a > -1 && a % 1 == 0 && a < n;
  }
  return er = r, er;
}
var tr, pn;
function fi() {
  if (pn)
    return tr;
  pn = 1;
  var e = 9007199254740991;
  function t(r) {
    return typeof r == "number" && r > -1 && r % 1 == 0 && r <= e;
  }
  return tr = t, tr;
}
var rr, hn;
function lu() {
  if (hn)
    return rr;
  hn = 1;
  var e = He(), t = fi(), r = je(), a = "[object Arguments]", n = "[object Array]", i = "[object Boolean]", o = "[object Date]", u = "[object Error]", l = "[object Function]", f = "[object Map]", v = "[object Number]", m = "[object Object]", h = "[object RegExp]", _ = "[object Set]", O = "[object String]", w = "[object WeakMap]", b = "[object ArrayBuffer]", g = "[object DataView]", y = "[object Float32Array]", S = "[object Float64Array]", P = "[object Int8Array]", M = "[object Int16Array]", p = "[object Int32Array]", s = "[object Uint8Array]", c = "[object Uint8ClampedArray]", d = "[object Uint16Array]", C = "[object Uint32Array]", T = {};
  T[y] = T[S] = T[P] = T[M] = T[p] = T[s] = T[c] = T[d] = T[C] = !0, T[a] = T[n] = T[b] = T[i] = T[g] = T[o] = T[u] = T[l] = T[f] = T[v] = T[m] = T[h] = T[_] = T[O] = T[w] = !1;
  function q(A) {
    return r(A) && t(A.length) && !!T[e(A)];
  }
  return rr = q, rr;
}
var ar, gn;
function fu() {
  if (gn)
    return ar;
  gn = 1;
  function e(t) {
    return function(r) {
      return t(r);
    };
  }
  return ar = e, ar;
}
var Re = { exports: {} }, mn;
function cu() {
  return mn || (mn = 1, function(e, t) {
    var r = bi(), a = t && !t.nodeType && t, n = a && !0 && e && !e.nodeType && e, i = n && n.exports === a, o = i && r.process, u = function() {
      try {
        var l = n && n.require && n.require("util").types;
        return l || o && o.binding && o.binding("util");
      } catch {
      }
    }();
    e.exports = u;
  }(Re, Re.exports)), Re.exports;
}
var nr, _n;
function ci() {
  if (_n)
    return nr;
  _n = 1;
  var e = lu(), t = fu(), r = cu(), a = r && r.isTypedArray, n = a ? t(a) : e;
  return nr = n, nr;
}
var ir, yn;
function du() {
  if (yn)
    return ir;
  yn = 1;
  var e = nu(), t = ou(), r = Nr(), a = li(), n = su(), i = ci(), o = Object.prototype, u = o.hasOwnProperty;
  function l(f, v) {
    var m = r(f), h = !m && t(f), _ = !m && !h && a(f), O = !m && !h && !_ && i(f), w = m || h || _ || O, b = w ? e(f.length, String) : [], g = b.length;
    for (var y in f)
      (v || u.call(f, y)) && !(w && (y == "length" || _ && (y == "offset" || y == "parent") || O && (y == "buffer" || y == "byteLength" || y == "byteOffset") || n(y, g))) && b.push(y);
    return b;
  }
  return ir = l, ir;
}
var or, bn;
function vu() {
  if (bn)
    return or;
  bn = 1;
  var e = Object.prototype;
  function t(r) {
    var a = r && r.constructor, n = typeof a == "function" && a.prototype || e;
    return r === n;
  }
  return or = t, or;
}
var ur, Tn;
function pu() {
  if (Tn)
    return ur;
  Tn = 1;
  var e = Ti(), t = e(Object.keys, Object);
  return ur = t, ur;
}
var sr, wn;
function hu() {
  if (wn)
    return sr;
  wn = 1;
  var e = vu(), t = pu(), r = Object.prototype, a = r.hasOwnProperty;
  function n(i) {
    if (!e(i))
      return t(i);
    var o = [];
    for (var u in Object(i))
      a.call(i, u) && u != "constructor" && o.push(u);
    return o;
  }
  return sr = n, sr;
}
var lr, Pn;
function gu() {
  if (Pn)
    return lr;
  Pn = 1;
  var e = ii(), t = fi();
  function r(a) {
    return a != null && t(a.length) && !e(a);
  }
  return lr = r, lr;
}
var fr, Cn;
function mu() {
  if (Cn)
    return fr;
  Cn = 1;
  var e = du(), t = hu(), r = gu();
  function a(n) {
    return r(n) ? e(n) : t(n);
  }
  return fr = a, fr;
}
var cr, qn;
function _u() {
  if (qn)
    return cr;
  qn = 1;
  var e = eu(), t = au(), r = mu();
  function a(n) {
    return e(n, r, t);
  }
  return cr = a, cr;
}
var dr, An;
function yu() {
  if (An)
    return dr;
  An = 1;
  var e = _u(), t = 1, r = Object.prototype, a = r.hasOwnProperty;
  function n(i, o, u, l, f, v) {
    var m = u & t, h = e(i), _ = h.length, O = e(o), w = O.length;
    if (_ != w && !m)
      return !1;
    for (var b = _; b--; ) {
      var g = h[b];
      if (!(m ? g in o : a.call(o, g)))
        return !1;
    }
    var y = v.get(i), S = v.get(o);
    if (y && S)
      return y == o && S == i;
    var P = !0;
    v.set(i, o), v.set(o, i);
    for (var M = m; ++b < _; ) {
      g = h[b];
      var p = i[g], s = o[g];
      if (l)
        var c = m ? l(s, p, g, o, i, v) : l(p, s, g, i, o, v);
      if (!(c === void 0 ? p === s || f(p, s, u, l, v) : c)) {
        P = !1;
        break;
      }
      M || (M = g == "constructor");
    }
    if (P && !M) {
      var d = i.constructor, C = o.constructor;
      d != C && "constructor" in i && "constructor" in o && !(typeof d == "function" && d instanceof d && typeof C == "function" && C instanceof C) && (P = !1);
    }
    return v.delete(i), v.delete(o), P;
  }
  return dr = n, dr;
}
var vr, On;
function bu() {
  if (On)
    return vr;
  On = 1;
  var e = re(), t = G(), r = e(t, "DataView");
  return vr = r, vr;
}
var pr, Sn;
function Tu() {
  if (Sn)
    return pr;
  Sn = 1;
  var e = re(), t = G(), r = e(t, "Promise");
  return pr = r, pr;
}
var hr, xn;
function wu() {
  if (xn)
    return hr;
  xn = 1;
  var e = re(), t = G(), r = e(t, "Set");
  return hr = r, hr;
}
var gr, Mn;
function Pu() {
  if (Mn)
    return gr;
  Mn = 1;
  var e = re(), t = G(), r = e(t, "WeakMap");
  return gr = r, gr;
}
var mr, Rn;
function Cu() {
  if (Rn)
    return mr;
  Rn = 1;
  var e = bu(), t = Er(), r = Tu(), a = wu(), n = Pu(), i = He(), o = oi(), u = "[object Map]", l = "[object Object]", f = "[object Promise]", v = "[object Set]", m = "[object WeakMap]", h = "[object DataView]", _ = o(e), O = o(t), w = o(r), b = o(a), g = o(n), y = i;
  return (e && y(new e(new ArrayBuffer(1))) != h || t && y(new t()) != u || r && y(r.resolve()) != f || a && y(new a()) != v || n && y(new n()) != m) && (y = function(S) {
    var P = i(S), M = P == l ? S.constructor : void 0, p = M ? o(M) : "";
    if (p)
      switch (p) {
        case _:
          return h;
        case O:
          return u;
        case w:
          return f;
        case b:
          return v;
        case g:
          return m;
      }
    return P;
  }), mr = y, mr;
}
var _r, Dn;
function qu() {
  if (Dn)
    return _r;
  Dn = 1;
  var e = Lo(), t = si(), r = Zo(), a = yu(), n = Cu(), i = Nr(), o = li(), u = ci(), l = 1, f = "[object Arguments]", v = "[object Array]", m = "[object Object]", h = Object.prototype, _ = h.hasOwnProperty;
  function O(w, b, g, y, S, P) {
    var M = i(w), p = i(b), s = M ? v : n(w), c = p ? v : n(b);
    s = s == f ? m : s, c = c == f ? m : c;
    var d = s == m, C = c == m, T = s == c;
    if (T && o(w)) {
      if (!o(b))
        return !1;
      M = !0, d = !1;
    }
    if (T && !d)
      return P || (P = new e()), M || u(w) ? t(w, b, g, y, S, P) : r(w, b, s, g, y, S, P);
    if (!(g & l)) {
      var q = d && _.call(w, "__wrapped__"), A = C && _.call(b, "__wrapped__");
      if (q || A) {
        var R = q ? w.value() : w, D = A ? b.value() : b;
        return P || (P = new e()), S(R, D, g, y, P);
      }
    }
    return T ? (P || (P = new e()), a(w, b, g, y, S, P)) : !1;
  }
  return _r = O, _r;
}
var yr, En;
function Au() {
  if (En)
    return yr;
  En = 1;
  var e = qu(), t = je();
  function r(a, n, i, o, u) {
    return a === n ? !0 : a == null || n == null || !t(a) && !t(n) ? a !== a && n !== n : e(a, n, i, o, r, u);
  }
  return yr = r, yr;
}
var br, Nn;
function Ou() {
  if (Nn)
    return br;
  Nn = 1;
  var e = Au();
  function t(r, a) {
    return e(r, a);
  }
  return br = t, br;
}
var In;
function Su() {
  if (In)
    return Y;
  In = 1;
  var e = j.exports;
  Object.defineProperty(Y, "__esModule", {
    value: !0
  }), Y.default = Y.alignProps = void 0;
  var t = e(Ar()), r = e(Or.exports), a = L, n = vo, i = e(Un()), o = Gn(), u = e(po()), l = ho(), f = e(go()), v = e(Ou()), m = {
    align: Object,
    target: [Object, Function],
    onAlign: Function,
    monitorBufferTime: Number,
    monitorWindowResize: Boolean,
    disabled: Boolean
  };
  Y.alignProps = m;
  function h(w) {
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
    props: m,
    emits: ["align"],
    setup: function(b, g) {
      var y = g.expose, S = g.slots, P = (0, a.ref)({}), M = (0, a.ref)(), p = (0, f.default)(function() {
        var R = b.disabled, D = b.target, E = b.align, U = b.onAlign;
        if (!R && D && M.value) {
          var H = M.value, V, F = h(D), X = _(D);
          P.value.element = F, P.value.point = X, P.value.align = E;
          var Z = document, ae = Z.activeElement;
          return F && (0, u.default)(F) ? V = (0, n.alignElement)(H, F, E) : X && (V = (0, n.alignPoint)(H, X, E)), (0, l.restoreFocus)(ae, H), U && V && U(H, V), !0;
        }
        return !1;
      }, (0, a.computed)(function() {
        return b.monitorBufferTime;
      })), s = (0, t.default)(p, 2), c = s[0], d = s[1], C = (0, a.ref)({
        cancel: function() {
        }
      }), T = (0, a.ref)({
        cancel: function() {
        }
      }), q = function() {
        var D = b.target, E = h(D), U = _(D);
        M.value !== T.value.element && (T.value.cancel(), T.value.element = M.value, T.value.cancel = (0, l.monitorResize)(M.value, c)), (P.value.element !== E || !(0, l.isSamePoint)(P.value.point, U) || !(0, v.default)(P.value.align, b.align)) && (c(), C.value.element !== E && (C.value.cancel(), C.value.element = E, C.value.cancel = (0, l.monitorResize)(E, c)));
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
          ref: M
        }, !0, !0) : null;
      };
    }
  });
  return Y.default = O, Y;
}
var Hn;
function xu() {
  if (Hn)
    return de;
  Hn = 1;
  var e = j.exports;
  Object.defineProperty(de, "__esModule", {
    value: !0
  }), de.default = void 0;
  var t = L, r = e(wi()), a = e(z()), n = e(Or.exports), i = e(Ar()), o = e(Hi()), u = e(ji()), l = e(Su()), f = Xn(), v = Ie(), m = e(qr()), h = Sr(), _ = Pi(), O = e(Wn()), w = (0, t.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "PopupInner",
    inheritAttrs: !1,
    props: h.innerProps,
    emits: ["mouseenter", "mouseleave", "mousedown", "touchstart", "align"],
    setup: function(g, y) {
      var S = y.expose, P = y.attrs, M = y.slots, p = (0, t.ref)(), s = (0, t.ref)(), c = (0, t.ref)(), d = (0, u.default)((0, t.toRef)(g, "stretch")), C = (0, i.default)(d, 2), T = C[0], q = C[1], A = function() {
        g.stretch && q(g.getRootDomNode());
      }, R = (0, t.ref)(!1), D;
      (0, t.watch)(function() {
        return g.visible;
      }, function(N) {
        clearTimeout(D), N ? D = setTimeout(function() {
          R.value = g.visible;
        }) : R.value = !1;
      }, {
        immediate: !0
      });
      var E = (0, o.default)(R, A), U = (0, i.default)(E, 2), H = U[0], V = U[1], F = (0, t.ref)(), X = function() {
        return g.point ? g.point : g.getRootDomNode;
      }, Z = function() {
        var I;
        (I = p.value) === null || I === void 0 || I.forceAlign();
      }, ae = function(I, $) {
        var B = g.getClassNameFromAlign($), ne = c.value;
        if (c.value !== B && (c.value = B), H.value === "align") {
          var ie;
          ne !== B ? Promise.resolve().then(function() {
            Z();
          }) : V(function() {
            var oe;
            (oe = F.value) === null || oe === void 0 || oe.call(F);
          }), (ie = g.onAlign) === null || ie === void 0 || ie.call(g, I, $);
        }
      }, Q = (0, t.computed)(function() {
        var N = (0, n.default)(g.animation) === "object" ? g.animation : (0, f.getMotion)(g);
        return ["onAfterEnter", "onAfterLeave"].forEach(function(I) {
          var $ = N[I];
          N[I] = function(B) {
            V(), H.value = "stable", $ == null || $(B);
          };
        }), N;
      }), Le = function() {
        return new Promise(function(I) {
          F.value = I;
        });
      };
      (0, t.watch)([Q, H], function() {
        !Q.value && H.value === "motion" && V();
      }, {
        immediate: !0
      }), S({
        forceAlign: Z,
        getElement: function() {
          return s.value.$el || s.value;
        }
      });
      var Ue = (0, t.computed)(function() {
        var N;
        return !((N = g.align) !== null && N !== void 0 && N.points && (H.value === "align" || H.value === "stable"));
      });
      return function() {
        var N, I = g.zIndex, $ = g.align, B = g.prefixCls, ne = g.destroyPopupOnHide, ie = g.onMouseenter, oe = g.onMouseleave, Ir = g.onTouchstart, di = Ir === void 0 ? function() {
        } : Ir, vi = g.onMousedown, We = H.value, pi = [(0, a.default)((0, a.default)({}, T.value), {}, {
          zIndex: I,
          opacity: We === "motion" || We === "stable" || !R.value ? null : 0,
          pointerEvents: !R.value && We !== "stable" ? "none" : null
        }), P.style], Pe = (0, v.flattenChildren)((N = M.default) === null || N === void 0 ? void 0 : N.call(M, {
          visible: g.visible
        }));
        Pe.length > 1 && (Pe = (0, t.createVNode)("div", {
          class: "".concat(B, "-content")
        }, [Pe]));
        var hi = (0, m.default)(B, P.class, c.value), gi = R.value || !g.visible, mi = gi ? (0, _.getTransitionProps)(Q.value.name, Q.value) : {};
        return (0, t.createVNode)(t.Transition, (0, a.default)((0, a.default)({
          ref: s
        }, mi), {}, {
          onBeforeEnter: Le
        }), {
          default: function() {
            return !ne || g.visible ? (0, t.withDirectives)((0, t.createVNode)(l.default, {
              target: X(),
              key: "popup",
              ref: p,
              monitorWindowResize: !0,
              disabled: Ue.value,
              align: $,
              onAlign: ae
            }, {
              default: function() {
                return (0, t.createVNode)("div", (0, a.default)((0, a.default)({
                  class: hi,
                  onMouseenter: ie,
                  onMouseleave: oe,
                  onMousedown: (0, t.withModifiers)(vi, ["capture"])
                }, (0, r.default)({}, O.default ? "onTouchstartPassive" : "onTouchstart", (0, t.withModifiers)(di, ["capture"]))), {}, {
                  style: pi
                }), [Pe]);
              }
            }), [[t.vShow, R.value]]) : null;
          }
        });
      };
    }
  });
  return de.default = w, de;
}
var jn;
function Mu() {
  if (jn)
    return fe;
  jn = 1;
  var e = j.exports;
  Object.defineProperty(fe, "__esModule", {
    value: !0
  }), fe.default = void 0;
  var t = L, r = e(z()), a = Sr(), n = e(Ni()), i = e(Ii()), o = e(xu()), u = (0, t.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "Popup",
    inheritAttrs: !1,
    props: a.popupProps,
    setup: function(f, v) {
      var m = v.attrs, h = v.slots, _ = v.expose, O = (0, t.ref)(!1), w = (0, t.ref)(!1), b = (0, t.ref)();
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
        var g = (0, r.default)((0, r.default)((0, r.default)({}, f), m), {}, {
          visible: O.value
        }), y = w.value ? (0, t.createVNode)(i.default, (0, r.default)((0, r.default)({}, g), {}, {
          mobile: f.mobile,
          ref: b
        }), {
          default: h.default
        }) : (0, t.createVNode)(o.default, (0, r.default)((0, r.default)({}, g), {}, {
          ref: b
        }), {
          default: h.default
        });
        return (0, t.createVNode)("div", null, [(0, t.createVNode)(n.default, g, null), y]);
      };
    }
  });
  return fe.default = u, fe;
}
var _e = {}, Vn;
function Ru() {
  if (Vn)
    return _e;
  Vn = 1;
  var e = j.exports;
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
    for (var f = u.points, v = Object.keys(i), m = 0; m < v.length; m += 1) {
      var h = v[m];
      if (r(i[h].points, f, l))
        return "".concat(o, "-placement-").concat(h);
    }
    return "";
  }
  return _e;
}
var ye = {}, Fn;
function Du() {
  if (Fn)
    return ye;
  Fn = 1;
  var e = j.exports;
  Object.defineProperty(ye, "__esModule", {
    value: !0
  }), ye.default = void 0;
  var t = e(Ci()), r = e(qi()), a = e(z()), n = L, i = Ie(), o = {
    methods: {
      setState: function() {
        var l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, f = arguments.length > 1 ? arguments[1] : void 0, v = typeof l == "function" ? l(this.$data, this.$props) : l;
        if (this.getDerivedStateFromProps) {
          var m = this.getDerivedStateFromProps((0, i.getOptionProps)(this), (0, a.default)((0, a.default)({}, this.$data), v));
          if (m === null)
            return;
          v = (0, a.default)((0, a.default)({}, v), m || {});
        }
        (0, r.default)(this.$data, v), this._.isMounted && this.$forceUpdate(), (0, n.nextTick)(function() {
          f && f();
        });
      },
      __emit: function() {
        var l = [].slice.call(arguments, 0), f = l[0];
        f = "on".concat(f[0].toUpperCase()).concat(f.substring(1));
        var v = this.$props[f] || this.$attrs[f];
        if (l.length && v)
          if (Array.isArray(v))
            for (var m = 0, h = v.length; m < h; m++)
              v[m].apply(v, (0, t.default)(l.slice(1)));
          else
            v.apply(void 0, (0, t.default)(l.slice(1)));
      }
    }
  };
  return ye.default = o, ye;
}
var $n;
function Eu() {
  if ($n)
    return se;
  $n = 1;
  var e = j.exports;
  Object.defineProperty(se, "__esModule", {
    value: !0
  }), se.default = void 0;
  var t = L, r = e(z()), a = e(Ai()), n = e(Ln()), i = e(zn()), o = Ie(), u = Ei(), l = e(Un()), f = e(Mu()), v = Ru(), m = e(Du()), h = e(Oi()), _ = e(qr()), O = Gn(), w = e(Wn()), b = Si();
  function g() {
  }
  function y() {
    return "";
  }
  function S(p) {
    return p ? p.ownerDocument : window.document;
  }
  var P = ["onClick", "onMousedown", "onTouchstart", "onMouseenter", "onMouseleave", "onFocus", "onBlur", "onContextmenu"], M = (0, t.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "Trigger",
    mixins: [m.default],
    inheritAttrs: !1,
    props: {
      action: a.default.oneOfType([a.default.string, a.default.arrayOf(a.default.string)]).def([]),
      showAction: a.default.any.def([]),
      hideAction: a.default.any.def([]),
      getPopupClassNameFromAlign: a.default.any.def(y),
      onPopupVisibleChange: Function,
      afterPopupVisibleChange: a.default.func.def(g),
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
      tryPopPortal: Boolean
    },
    setup: function(s) {
      var c = (0, t.computed)(function() {
        var R = s.popupPlacement, D = s.popupAlign, E = s.builtinPlacements;
        return R && E ? (0, v.getAlignFromPlacement)(E, R, D) : D;
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
      }), (c = this.setPortal) === null || c === void 0 || c.call(this, (0, t.createVNode)(h.default, {
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
        return C && T && c.push((0, v.getAlignPopupClassName)(T, q, s, A)), R && c.push(R(s)), c.join(" ");
      },
      getPopupAlign: function() {
        var s = this.$props, c = s.popupPlacement, d = s.popupAlign, C = s.builtinPlacements;
        return c && C ? (0, v.getAlignFromPlacement)(C, c, d) : d;
      },
      getComponent: function() {
        var s = this, c = {};
        this.isMouseEnterToShow() && (c.onMouseenter = this.onPopupMouseenter), this.isMouseLeaveToHide() && (c.onMouseleave = this.onPopupMouseleave), c.onMousedown = this.onPopupMouseDown, c[w.default ? "onTouchstartPassive" : "onTouchstart"] = this.onPopupMouseDown;
        var d = this.handleGetPopupClassFromAlign, C = this.getRootDomNode, T = this.getContainer, q = this.$attrs, A = this.$props, R = A.prefixCls, D = A.destroyPopupOnHide, E = A.popupClassName, U = A.popupAnimation, H = A.popupTransitionName, V = A.popupStyle, F = A.mask, X = A.maskAnimation, Z = A.maskTransitionName, ae = A.zIndex, Q = A.stretch, Le = A.alignPoint, Ue = A.mobile, N = A.forceRender, I = this.$data, $ = I.sPopupVisible, B = I.point, ne = (0, r.default)((0, r.default)({
          prefixCls: R,
          destroyPopupOnHide: D,
          visible: $,
          point: Le ? B : null,
          align: this.align,
          animation: U,
          getClassNameFromAlign: d,
          stretch: Q,
          getRootDomNode: C,
          mask: F,
          zIndex: ae,
          transitionName: H,
          maskAnimation: X,
          maskTransitionName: Z,
          getContainer: T,
          class: E,
          style: V,
          onAlign: q.onPopupAlign || g
        }, c), {}, {
          ref: this.setPopupRef,
          mobile: Ue,
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
      var D = (0, t.createVNode)(h.default, {
        key: "portal",
        getContainer: this.getContainer,
        didUpdate: this.handlePortalUpdate
      }, {
        default: this.getComponent
      });
      return (0, t.createVNode)(t.Fragment, null, [D, R]);
    }
  });
  return se.default = M, se;
}
var Bn;
function Uu() {
  if (Bn)
    return ue;
  Bn = 1;
  var e = j.exports;
  Object.defineProperty(ue, "__esModule", {
    value: !0
  }), ue.default = void 0;
  var t = e(Eu()), r = t.default;
  return ue.default = r, ue;
}
var De = {}, kn;
function Wu() {
  if (kn)
    return De;
  kn = 1, Object.defineProperty(De, "__esModule", {
    value: !0
  }), De.default = t;
  var e = L;
  function t(r, a) {
    var n = a || {}, i = n.defaultValue, o = n.value, u = o === void 0 ? (0, e.ref)() : o, l = typeof r == "function" ? r() : r;
    u.value !== void 0 && (l = (0, e.unref)(u)), i !== void 0 && (l = typeof i == "function" ? i() : i);
    var f = (0, e.ref)(l), v = (0, e.ref)(l);
    (0, e.watchEffect)(function() {
      var h = u.value !== void 0 ? u.value : f.value;
      a.postState && (h = a.postState(h)), v.value = h;
    });
    function m(h) {
      var _ = v.value;
      f.value = h, (0, e.toRaw)(v.value) !== h && a.onChange && a.onChange(h, _);
    }
    return (0, e.watch)(u, function() {
      f.value = u.value;
    }), [v, m];
  }
  return De;
}
export {
  fu as A,
  Lo as B,
  _u as C,
  li as D,
  Au as E,
  Ou as F,
  Jo as a,
  zo as b,
  Xo as c,
  Uu as d,
  ni as e,
  su as f,
  Wu as g,
  re as h,
  ai as i,
  Nr as j,
  ui as k,
  ou as l,
  fi as m,
  Qo as n,
  po as o,
  mu as p,
  vu as q,
  wu as r,
  du as s,
  gu as t,
  au as u,
  ru as v,
  eu as w,
  Ko as x,
  Cu as y,
  cu as z
};
