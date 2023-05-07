import { e as xe, k as V, b as le, j as Re, d as We, s as Me, t as Ie, r as Be, c as $e, u as Ae } from "./useConfigInject.fdc04e2e.js";
import { r as ee } from "./_vue_commonjs-external.cdc460b2.js";
import { a as Le, b as je, c as Ue } from "./Portal.a423630d.js";
import { r as ze } from "./KeyCode.93922cee.js";
import { r as Fe } from "./omit.ba8a174d.js";
import { r as Ke } from "./pickAttrs.65eceb8b.js";
import { _ as me } from "./index.1fa3133f.js";
import { r as He, a as Ge } from "./classCallCheck.fb739271.js";
import { r as Xe } from "./raf.f4e1fc4f.js";
var de = {}, K = {}, H = {}, G = {}, L = {}, ye;
function ue() {
  if (ye)
    return L;
  ye = 1;
  var a = V.exports;
  Object.defineProperty(L, "__esModule", {
    value: !0
  }), L.default = void 0, L.dialogPropTypes = t;
  var r = a(xe());
  function t() {
    return {
      keyboard: {
        type: Boolean,
        default: void 0
      },
      mask: {
        type: Boolean,
        default: void 0
      },
      afterClose: Function,
      closable: {
        type: Boolean,
        default: void 0
      },
      maskClosable: {
        type: Boolean,
        default: void 0
      },
      visible: {
        type: Boolean,
        default: void 0
      },
      destroyOnClose: {
        type: Boolean,
        default: void 0
      },
      mousePosition: r.default.shape({
        x: Number,
        y: Number
      }).loose,
      title: r.default.any,
      footer: r.default.any,
      transitionName: String,
      maskTransitionName: String,
      animation: r.default.any,
      maskAnimation: r.default.any,
      wrapStyle: {
        type: Object,
        default: void 0
      },
      bodyStyle: {
        type: Object,
        default: void 0
      },
      maskStyle: {
        type: Object,
        default: void 0
      },
      prefixCls: String,
      wrapClassName: String,
      rootClassName: String,
      width: [String, Number],
      height: [String, Number],
      zIndex: Number,
      bodyProps: r.default.any,
      maskProps: r.default.any,
      wrapProps: r.default.any,
      getContainer: r.default.any,
      dialogStyle: {
        type: Object,
        default: void 0
      },
      dialogClass: String,
      closeIcon: r.default.any,
      forceRender: {
        type: Boolean,
        default: void 0
      },
      getOpenCount: Function,
      focusTriggerAfterClose: {
        type: Boolean,
        default: void 0
      },
      onClose: Function,
      modalRender: Function
    };
  }
  var y = t;
  return L.default = y, L;
}
var j = {}, he;
function Te() {
  if (he)
    return j;
  he = 1, Object.defineProperty(j, "__esModule", {
    value: !0
  }), j.getMotionName = a, j.getUUID = t, j.offset = v;
  function a(f, s, o) {
    var m = s;
    return !m && o && (m = "".concat(f, "-").concat(o)), m;
  }
  var r = -1;
  function t() {
    return r += 1, r;
  }
  function y(f, s) {
    var o = f["page".concat(s ? "Y" : "X", "Offset")], m = "scroll".concat(s ? "Top" : "Left");
    if (typeof o != "number") {
      var u = f.document;
      o = u.documentElement[m], typeof o != "number" && (o = u.body[m]);
    }
    return o;
  }
  function v(f) {
    var s = f.getBoundingClientRect(), o = {
      left: s.left,
      top: s.top
    }, m = f.ownerDocument, u = m.defaultView || m.parentWindow;
    return o.left += y(u), o.top += y(u, !0), o;
  }
  return j;
}
var Ce;
function Ye() {
  if (Ce)
    return G;
  Ce = 1;
  var a = V.exports, r = me.exports;
  Object.defineProperty(G, "__esModule", {
    value: !0
  }), G.default = void 0;
  var t = ee, y = a(le()), v = m(Re()), f = a(ue()), s = Te();
  function o(i) {
    if (typeof WeakMap != "function")
      return null;
    var n = /* @__PURE__ */ new WeakMap(), w = /* @__PURE__ */ new WeakMap();
    return (o = function(e) {
      return e ? w : n;
    })(i);
  }
  function m(i, n) {
    if (!n && i && i.__esModule)
      return i;
    if (i === null || r(i) !== "object" && typeof i != "function")
      return { default: i };
    var w = o(n);
    if (w && w.has(i))
      return w.get(i);
    var C = {}, e = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var d in i)
      if (d !== "default" && Object.prototype.hasOwnProperty.call(i, d)) {
        var _ = e ? Object.getOwnPropertyDescriptor(i, d) : null;
        _ && (_.get || _.set) ? Object.defineProperty(C, d, _) : C[d] = i[d];
      }
    return C.default = i, w && w.set(i, C), C;
  }
  var u = {
    width: 0,
    height: 0,
    overflow: "hidden",
    outline: "none"
  }, N = (0, t.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "Content",
    inheritAttrs: !1,
    props: (0, y.default)((0, y.default)({}, (0, f.default)()), {}, {
      motionName: String,
      ariaId: String,
      onVisibleChanged: Function,
      onMousedown: Function,
      onMouseup: Function
    }),
    setup: function(n, w) {
      var C = w.expose, e = w.slots, d = w.attrs, _ = (0, t.ref)(), l = (0, t.ref)(), k = (0, t.ref)();
      C({
        focus: function() {
          var h;
          (h = _.value) === null || h === void 0 || h.focus();
        },
        changeActive: function(h) {
          var D = document, M = D.activeElement;
          h && M === l.value ? _.value.focus() : !h && M === _.value && l.value.focus();
        }
      });
      var P = (0, t.ref)(), p = (0, t.computed)(function() {
        var O = n.width, h = n.height, D = {};
        return O !== void 0 && (D.width = typeof O == "number" ? "".concat(O, "px") : O), h !== void 0 && (D.height = typeof h == "number" ? "".concat(h, "px") : h), P.value && (D.transformOrigin = P.value), D;
      }), b = function() {
        (0, t.nextTick)(function() {
          if (k.value) {
            var h = (0, s.offset)(k.value);
            P.value = n.mousePosition ? "".concat(n.mousePosition.x - h.left, "px ").concat(n.mousePosition.y - h.top, "px") : "";
          }
        });
      }, S = function(h) {
        n.onVisibleChanged(h);
      };
      return function() {
        var O, h, D, M, T = n.prefixCls, B = n.footer, $ = B === void 0 ? (O = e.footer) === null || O === void 0 ? void 0 : O.call(e) : B, q = n.title, c = q === void 0 ? (h = e.title) === null || h === void 0 ? void 0 : h.call(e) : q, g = n.ariaId, x = n.closable, E = n.closeIcon, R = E === void 0 ? (D = e.closeIcon) === null || D === void 0 ? void 0 : D.call(e) : E, W = n.onClose, A = n.bodyStyle, I = n.bodyProps, z = n.onMousedown, fe = n.onMouseup, te = n.visible, re = n.modalRender, ae = re === void 0 ? e.modalRender : re, ce = n.destroyOnClose, se = n.motionName, F;
        $ && (F = (0, t.createVNode)("div", {
          class: "".concat(T, "-footer")
        }, [$]));
        var ne;
        c && (ne = (0, t.createVNode)("div", {
          class: "".concat(T, "-header")
        }, [(0, t.createVNode)("div", {
          class: "".concat(T, "-title"),
          id: g
        }, [c])]));
        var oe;
        x && (oe = (0, t.createVNode)("button", {
          type: "button",
          onClick: W,
          "aria-label": "Close",
          class: "".concat(T, "-close")
        }, [R || (0, t.createVNode)("span", {
          class: "".concat(T, "-close-x")
        }, null)]));
        var ie = (0, t.createVNode)("div", {
          class: "".concat(T, "-content")
        }, [oe, ne, (0, t.createVNode)("div", (0, y.default)({
          class: "".concat(T, "-body"),
          style: A
        }, I), [(M = e.default) === null || M === void 0 ? void 0 : M.call(e)]), F]), Ve = (0, v.getTransitionProps)(se);
        return (0, t.createVNode)(v.default, (0, y.default)((0, y.default)({}, Ve), {}, {
          onBeforeEnter: b,
          onAfterEnter: function() {
            return S(!0);
          },
          onAfterLeave: function() {
            return S(!1);
          }
        }), {
          default: function() {
            return [te || !ce ? (0, t.withDirectives)((0, t.createVNode)("div", (0, y.default)((0, y.default)({}, d), {}, {
              ref: k,
              key: "dialog-element",
              role: "document",
              style: [p.value, d.style],
              class: [T, d.class],
              onMousedown: z,
              onMouseup: fe
            }), [(0, t.createVNode)("div", {
              tabindex: 0,
              ref: _,
              style: u,
              "aria-hidden": "true"
            }, null), ae ? ae({
              originVNode: ie
            }) : ie, (0, t.createVNode)("div", {
              tabindex: 0,
              ref: l,
              style: u,
              "aria-hidden": "true"
            }, null)]), [[t.vShow, te]]) : null];
          }
        });
      };
    }
  });
  return G.default = N, G;
}
var X = {}, ve = { exports: {} }, _e;
function Je() {
  return _e || (_e = 1, function(a) {
    function r(t) {
      if (t == null)
        throw new TypeError("Cannot destructure " + t);
    }
    a.exports = r, a.exports.__esModule = !0, a.exports.default = a.exports;
  }(ve)), ve.exports;
}
var be;
function Qe() {
  if (be)
    return X;
  be = 1;
  var a = V.exports, r = me.exports;
  Object.defineProperty(X, "__esModule", {
    value: !0
  }), X.default = void 0;
  var t = ee, y = a(le()), v = a(Je()), f = o(Re());
  function s(u) {
    if (typeof WeakMap != "function")
      return null;
    var N = /* @__PURE__ */ new WeakMap(), i = /* @__PURE__ */ new WeakMap();
    return (s = function(w) {
      return w ? i : N;
    })(u);
  }
  function o(u, N) {
    if (!N && u && u.__esModule)
      return u;
    if (u === null || r(u) !== "object" && typeof u != "function")
      return { default: u };
    var i = s(N);
    if (i && i.has(u))
      return i.get(u);
    var n = {}, w = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var C in u)
      if (C !== "default" && Object.prototype.hasOwnProperty.call(u, C)) {
        var e = w ? Object.getOwnPropertyDescriptor(u, C) : null;
        e && (e.get || e.set) ? Object.defineProperty(n, C, e) : n[C] = u[C];
      }
    return n.default = u, i && i.set(u, n), n;
  }
  var m = (0, t.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "Mask",
    props: {
      prefixCls: String,
      visible: Boolean,
      motionName: String,
      maskProps: Object
    },
    setup: function(N, i) {
      return (0, v.default)(i), function() {
        var n = N.prefixCls, w = N.visible, C = N.maskProps, e = N.motionName, d = (0, f.getTransitionProps)(e);
        return (0, t.createVNode)(f.default, d, {
          default: function() {
            return [(0, t.withDirectives)((0, t.createVNode)("div", (0, y.default)({
              class: "".concat(n, "-mask")
            }, C), null), [[t.vShow, w]])];
          }
        });
      };
    }
  });
  return X.default = m, X;
}
var we;
function Ze() {
  if (we)
    return H;
  we = 1;
  var a = V.exports;
  Object.defineProperty(H, "__esModule", {
    value: !0
  }), H.default = void 0;
  var r = ee, t = a(le()), y = a(Le()), v = a(We()), f = a(ze()), s = a(Fe()), o = a(Ke()), m = Me(), u = a(Ye()), N = a(ue()), i = a(Qe()), n = Te(), w = (0, r.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "Dialog",
    inheritAttrs: !1,
    props: (0, m.initDefaultProps)((0, t.default)((0, t.default)({}, (0, N.default)()), {}, {
      getOpenCount: Function,
      scrollLocker: Object
    }), {
      mask: !0,
      visible: !1,
      keyboard: !0,
      closable: !0,
      maskClosable: !0,
      destroyOnClose: !1,
      prefixCls: "rc-dialog",
      getOpenCount: function() {
        return null;
      },
      focusTriggerAfterClose: !0
    }),
    setup: function(e, d) {
      var _ = d.attrs, l = d.slots, k = (0, r.ref)(), P = (0, r.ref)(), p = (0, r.ref)(), b = (0, r.ref)(e.visible), S = (0, r.ref)("vcDialogTitle".concat((0, n.getUUID)())), O = function(g) {
        if (g) {
          if (!(0, y.default)(P.value, document.activeElement)) {
            var x;
            k.value = document.activeElement, (x = p.value) === null || x === void 0 || x.focus();
          }
        } else {
          var E = b.value;
          if (b.value = !1, e.mask && k.value && e.focusTriggerAfterClose) {
            try {
              k.value.focus({
                preventScroll: !0
              });
            } catch {
            }
            k.value = null;
          }
          if (E) {
            var R;
            (R = e.afterClose) === null || R === void 0 || R.call(e);
          }
        }
      }, h = function(g) {
        var x;
        (x = e.onClose) === null || x === void 0 || x.call(e, g);
      }, D = (0, r.ref)(!1), M = (0, r.ref)(), T = function() {
        clearTimeout(M.value), D.value = !0;
      }, B = function() {
        M.value = setTimeout(function() {
          D.value = !1;
        });
      }, $ = function(g) {
        if (!e.maskClosable)
          return null;
        D.value ? D.value = !1 : P.value === g.target && h(g);
      }, q = function(g) {
        if (e.keyboard && g.keyCode === f.default.ESC) {
          g.stopPropagation(), h(g);
          return;
        }
        e.visible && g.keyCode === f.default.TAB && p.value.changeActive(!g.shiftKey);
      };
      return (0, r.watch)(function() {
        return e.visible;
      }, function() {
        e.visible && (b.value = !0);
      }, {
        flush: "post"
      }), (0, r.onBeforeUnmount)(function() {
        var c;
        clearTimeout(M.value), (c = e.scrollLocker) === null || c === void 0 || c.unLock();
      }), (0, r.watchEffect)(function() {
        var c;
        if ((c = e.scrollLocker) === null || c === void 0 || c.unLock(), b.value) {
          var g;
          (g = e.scrollLocker) === null || g === void 0 || g.lock();
        }
      }), function() {
        var c = e.prefixCls, g = e.mask, x = e.visible, E = e.maskTransitionName, R = e.maskAnimation, W = e.zIndex, A = e.wrapClassName, I = e.rootClassName, z = e.wrapStyle, fe = e.closable, te = e.maskProps, re = e.maskStyle, ae = e.transitionName, ce = e.animation, se = e.wrapProps, F = e.title, ne = F === void 0 ? l.title : F, oe = _.style, ie = _.class;
        return (0, r.createVNode)("div", (0, t.default)({
          class: ["".concat(c, "-root"), I]
        }, (0, o.default)(e, {
          data: !0
        })), [(0, r.createVNode)(i.default, {
          prefixCls: c,
          visible: g && x,
          motionName: (0, n.getMotionName)(c, E, R),
          style: (0, t.default)({
            zIndex: W
          }, re),
          maskProps: te
        }, null), (0, r.createVNode)("div", (0, t.default)({
          tabIndex: -1,
          onKeydown: q,
          class: (0, v.default)("".concat(c, "-wrap"), A),
          ref: P,
          onClick: $,
          role: "dialog",
          "aria-labelledby": ne ? S.value : null,
          style: (0, t.default)((0, t.default)({
            zIndex: W
          }, z), {}, {
            display: b.value ? null : "none"
          })
        }, se), [(0, r.createVNode)(u.default, (0, t.default)((0, t.default)({}, (0, s.default)(e, ["scrollLocker"])), {}, {
          style: oe,
          class: ie,
          onMousedown: T,
          onMouseup: B,
          ref: p,
          closable: fe,
          ariaId: S.value,
          prefixCls: c,
          visible: x,
          onClose: h,
          onVisibleChanged: O,
          motionName: (0, n.getMotionName)(c, ae, ce)
        }), l)])]);
      };
    }
  });
  return H.default = w, H;
}
var U = {}, Y = {}, J = {}, Ne;
function Ee() {
  if (Ne)
    return J;
  Ne = 1, Object.defineProperty(J, "__esModule", {
    value: !0
  }), J.default = r, J.getTargetScrollBarSize = y;
  var a;
  function r(v) {
    if (typeof document > "u")
      return 0;
    if (v || a === void 0) {
      var f = document.createElement("div");
      f.style.width = "100%", f.style.height = "200px";
      var s = document.createElement("div"), o = s.style;
      o.position = "absolute", o.top = "0", o.left = "0", o.pointerEvents = "none", o.visibility = "hidden", o.width = "200px", o.height = "150px", o.overflow = "hidden", s.appendChild(f), document.body.appendChild(s);
      var m = f.offsetWidth;
      s.style.overflow = "scroll";
      var u = f.offsetWidth;
      m === u && (u = s.clientWidth), document.body.removeChild(s), a = m - u;
    }
    return a;
  }
  function t(v) {
    var f = v.match(/^(.*)px$/), s = Number(f == null ? void 0 : f[1]);
    return Number.isNaN(s) ? r() : s;
  }
  function y(v) {
    if (typeof document > "u" || !v || !(v instanceof Element))
      return {
        width: 0,
        height: 0
      };
    var f = getComputedStyle(v, "::-webkit-scrollbar"), s = f.width, o = f.height;
    return {
      width: t(s),
      height: t(o)
    };
  }
  return J;
}
var Q = {}, Pe;
function pe() {
  if (Pe)
    return Q;
  Pe = 1, Object.defineProperty(Q, "__esModule", {
    value: !0
  }), Q.default = void 0;
  function a(t) {
    var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, v = y.element, f = v === void 0 ? document.body : v, s = {}, o = Object.keys(t);
    return o.forEach(function(m) {
      s[m] = f.style[m];
    }), o.forEach(function(m) {
      f.style[m] = t[m];
    }), s;
  }
  var r = a;
  return Q.default = r, Q;
}
var Se;
function et() {
  if (Se)
    return Y;
  Se = 1;
  var a = V.exports;
  Object.defineProperty(Y, "__esModule", {
    value: !0
  }), Y.default = void 0;
  var r = a(Ee()), t = a(pe());
  function y() {
    return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
  }
  var v = {}, f = function(o) {
    if (!(!y() && !o)) {
      var m = "ant-scrolling-effect", u = new RegExp("".concat(m), "g"), N = document.body.className;
      if (o) {
        if (!u.test(N))
          return;
        (0, t.default)(v), v = {}, document.body.className = N.replace(u, "").trim();
        return;
      }
      var i = (0, r.default)();
      if (i && (v = (0, t.default)({
        position: "relative",
        width: "calc(100% - ".concat(i, "px)")
      }), !u.test(N))) {
        var n = "".concat(N, " ").concat(m);
        document.body.className = n.trim();
      }
    }
  };
  return Y.default = f, Y;
}
var Z = {}, ke;
function tt() {
  if (ke)
    return Z;
  ke = 1;
  var a = V.exports;
  Object.defineProperty(Z, "__esModule", {
    value: !0
  }), Z.default = void 0;
  var r = a(Ie()), t = a(He()), y = a(Ge()), v = a(Be()), f = a(Ee()), s = a(pe()), o = [], m = "ant-scrolling-effect", u = new RegExp("".concat(m), "g"), N = 0, i = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ (0, t.default)(function w(C) {
    var e = this;
    (0, y.default)(this, w), (0, v.default)(this, "getContainer", function() {
      var d;
      return (d = e.options) === null || d === void 0 ? void 0 : d.container;
    }), (0, v.default)(this, "reLock", function(d) {
      var _ = o.find(function(l) {
        var k = l.target;
        return k === e.lockTarget;
      });
      _ && e.unLock(), e.options = d, _ && (_.options = d, e.lock());
    }), (0, v.default)(this, "lock", function() {
      var d;
      if (!o.some(function(p) {
        var b = p.target;
        return b === e.lockTarget;
      })) {
        if (o.some(function(p) {
          var b, S = p.options;
          return (S == null ? void 0 : S.container) === ((b = e.options) === null || b === void 0 ? void 0 : b.container);
        })) {
          o = [].concat((0, r.default)(o), [{
            target: e.lockTarget,
            options: e.options
          }]);
          return;
        }
        var _ = 0, l = ((d = e.options) === null || d === void 0 ? void 0 : d.container) || document.body;
        (l === document.body && window.innerWidth - document.documentElement.clientWidth > 0 || l.scrollHeight > l.clientHeight) && (_ = (0, f.default)());
        var k = l.className;
        if (o.filter(function(p) {
          var b, S = p.options;
          return (S == null ? void 0 : S.container) === ((b = e.options) === null || b === void 0 ? void 0 : b.container);
        }).length === 0 && i.set(l, (0, s.default)({
          width: _ !== 0 ? "calc(100% - ".concat(_, "px)") : void 0,
          overflow: "hidden",
          overflowX: "hidden",
          overflowY: "hidden"
        }, {
          element: l
        })), !u.test(k)) {
          var P = "".concat(k, " ").concat(m);
          l.className = P.trim();
        }
        o = [].concat((0, r.default)(o), [{
          target: e.lockTarget,
          options: e.options
        }]);
      }
    }), (0, v.default)(this, "unLock", function() {
      var d, _ = o.find(function(P) {
        var p = P.target;
        return p === e.lockTarget;
      });
      if (o = o.filter(function(P) {
        var p = P.target;
        return p !== e.lockTarget;
      }), !(!_ || o.some(function(P) {
        var p, b = P.options;
        return (b == null ? void 0 : b.container) === ((p = _.options) === null || p === void 0 ? void 0 : p.container);
      }))) {
        var l = ((d = e.options) === null || d === void 0 ? void 0 : d.container) || document.body, k = l.className;
        !u.test(k) || ((0, s.default)(i.get(l), {
          element: l
        }), i.delete(l), l.className = l.className.replace(u, "").trim());
      }
    }), this.lockTarget = N++, this.options = C;
  });
  return Z.default = n, Z;
}
var Oe;
function rt() {
  if (Oe)
    return U;
  Oe = 1;
  var a = V.exports;
  Object.defineProperty(U, "__esModule", {
    value: !0
  }), U.default = void 0, U.getOpenCount = w;
  var r = ee, t = a($e()), y = a(me.exports), v = a(xe()), f = a(et()), s = a(pe()), o = a(je()), m = a(Ae()), u = a(tt()), N = a(Xe()), i = 0, n = (0, m.default)();
  function w() {
    return process.env.NODE_ENV === "test" ? i : 0;
  }
  var C = {}, e = function(l) {
    if (!n)
      return null;
    if (l) {
      if (typeof l == "string")
        return document.querySelectorAll(l)[0];
      if (typeof l == "function")
        return l();
      if ((0, y.default)(l) === "object" && l instanceof window.HTMLElement)
        return l;
    }
    return document.body;
  }, d = (0, r.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "PortalWrapper",
    inheritAttrs: !1,
    props: {
      wrapperClassName: String,
      forceRender: {
        type: Boolean,
        default: void 0
      },
      getContainer: v.default.any,
      visible: {
        type: Boolean,
        default: void 0
      }
    },
    setup: function(l, k) {
      var P = k.slots, p = (0, r.ref)(), b = (0, r.ref)(), S = (0, r.ref)(), O = new u.default({
        container: e(l.getContainer)
      }), h = function() {
        var c, g;
        (c = p.value) === null || c === void 0 || (g = c.parentNode) === null || g === void 0 || g.removeChild(p.value);
      }, D = function() {
        var c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
        if (c || p.value && !p.value.parentNode) {
          var g = e(l.getContainer);
          return g ? (g.appendChild(p.value), !0) : !1;
        }
        return !0;
      }, M = function() {
        return n ? (p.value || (p.value = document.createElement("div"), D(!0)), T(), p.value) : null;
      }, T = function() {
        var c = l.wrapperClassName;
        p.value && c && c !== p.value.className && (p.value.className = c);
      };
      (0, r.onUpdated)(function() {
        T(), D();
      });
      var B = function() {
        i === 1 && !Object.keys(C).length ? ((0, f.default)(), C = (0, s.default)({
          overflow: "hidden",
          overflowX: "hidden",
          overflowY: "hidden"
        })) : i || ((0, s.default)(C), C = {}, (0, f.default)(!0));
      }, $ = (0, r.getCurrentInstance)();
      return (0, r.onMounted)(function() {
        var q = !1;
        (0, r.watch)([function() {
          return l.visible;
        }, function() {
          return l.getContainer;
        }], function(c, g) {
          var x = (0, t.default)(c, 2), E = x[0], R = x[1], W = (0, t.default)(g, 2), A = W[0], I = W[1];
          if (n && e(l.getContainer) === document.body && (E && !A ? i += 1 : q && (i -= 1)), q) {
            var z = typeof R == "function" && typeof I == "function";
            (z ? R.toString() !== I.toString() : R !== I) && h(), E && E !== A && n && e(R) !== O.getContainer() && O.reLock({
              container: e(R)
            });
          }
          q = !0;
        }, {
          immediate: !0,
          flush: "post"
        }), (0, r.nextTick)(function() {
          D() || (S.value = (0, N.default)(function() {
            $.update();
          }));
        });
      }), (0, r.onBeforeUnmount)(function() {
        var q = l.visible, c = l.getContainer;
        n && e(c) === document.body && (i = q && i ? i - 1 : i), h(), N.default.cancel(S.value);
      }), function() {
        var q = l.forceRender, c = l.visible, g = null, x = {
          getOpenCount: function() {
            return i;
          },
          getContainer: M,
          switchScrollingEffect: B,
          scrollLocker: O
        };
        return (q || c || b.value) && (g = (0, r.createVNode)(o.default, {
          getContainer: M,
          ref: b
        }, {
          default: function() {
            var R;
            return (R = P.default) === null || R === void 0 ? void 0 : R.call(P, x);
          }
        })), g;
      };
    }
  });
  return U.default = d, U;
}
var De;
function at() {
  if (De)
    return K;
  De = 1;
  var a = V.exports;
  Object.defineProperty(K, "__esModule", {
    value: !0
  }), K.default = void 0;
  var r = ee, t = a(le()), y = a(Ze()), v = a(ue()), f = a(rt()), s = Ue(), o = Me(), m = (0, v.default)(), u = (0, r.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "DialogWrap",
    inheritAttrs: !1,
    props: (0, o.initDefaultProps)(m, {
      visible: !1
    }),
    setup: function(n, w) {
      var C = w.attrs, e = w.slots, d = (0, r.ref)(n.visible);
      return (0, s.useProvidePortal)({}, {
        inTriggerContext: !1
      }), (0, r.watch)(function() {
        return n.visible;
      }, function() {
        n.visible && (d.value = !0);
      }, {
        flush: "post"
      }), function() {
        var _ = n.visible, l = n.getContainer, k = n.forceRender, P = n.destroyOnClose, p = P === void 0 ? !1 : P, b = n.afterClose, S = (0, t.default)((0, t.default)((0, t.default)({}, n), C), {}, {
          ref: "_component",
          key: "dialog"
        });
        return l === !1 ? (0, r.createVNode)(y.default, (0, t.default)((0, t.default)({}, S), {}, {
          getOpenCount: function() {
            return 2;
          }
        }), e) : !k && p && !d.value ? null : (0, r.createVNode)(f.default, {
          visible: _,
          forceRender: k,
          getContainer: l
        }, {
          default: function(h) {
            return S = (0, t.default)((0, t.default)((0, t.default)({}, S), h), {}, {
              afterClose: function() {
                b == null || b(), d.value = !1;
              }
            }), (0, r.createVNode)(y.default, S, e);
          }
        });
      };
    }
  }), N = u;
  return K.default = N, K;
}
var qe;
function vt() {
  return qe || (qe = 1, function(a) {
    var r = V.exports;
    Object.defineProperty(a, "__esModule", {
      value: !0
    }), a.default = void 0, Object.defineProperty(a, "dialogProps", {
      enumerable: !0,
      get: function() {
        return y.default;
      }
    });
    var t = r(at()), y = r(ue()), v = t.default;
    a.default = v;
  }(de)), de;
}
export {
  Je as a,
  ue as b,
  vt as r
};
