import { j as Re, i as V, r as le, k as Me, g as ee, e as We, c as Ee, b as Ie, a as Be, n as Ae, B as Le } from "./useConfigInject-f4796704.mjs";
import { c as $e, d as je, b as Ue } from "./Portal-6677def3.mjs";
import { r as ze } from "./KeyCode-8a26b842.mjs";
import { r as Fe } from "./omit-567cf556.mjs";
import { r as Ke } from "./pickAttrs-0f2b7511.mjs";
import { _ as me } from "./index-4ddd22ca.mjs";
import { a as He, r as Ge } from "./classCallCheck-781f96f0.mjs";
import { r as Xe } from "./raf-09a8b76f.mjs";
var se = {}, K = {}, H = {}, G = {}, $ = {}, ye;
function ue() {
  if (ye)
    return $;
  ye = 1;
  var a = V;
  Object.defineProperty($, "__esModule", {
    value: !0
  }), $.default = void 0, $.dialogPropTypes = t;
  var r = a(Re());
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
      // https://github.com/ant-design/ant-design/issues/19771
      // https://github.com/react-component/dialog/issues/95
      focusTriggerAfterClose: {
        type: Boolean,
        default: void 0
      },
      onClose: Function,
      modalRender: Function
    };
  }
  var y = t;
  return $.default = y, $;
}
var j = {}, he;
function Te() {
  if (he)
    return j;
  he = 1, Object.defineProperty(j, "__esModule", {
    value: !0
  }), j.getMotionName = a, j.getUUID = t, j.offset = v;
  function a(f, d, o) {
    var m = d;
    return !m && o && (m = "".concat(f, "-").concat(o)), m;
  }
  var r = -1;
  function t() {
    return r += 1, r;
  }
  function y(f, d) {
    var o = f["page".concat(d ? "Y" : "X", "Offset")], m = "scroll".concat(d ? "Top" : "Left");
    if (typeof o != "number") {
      var u = f.document;
      o = u.documentElement[m], typeof o != "number" && (o = u.body[m]);
    }
    return o;
  }
  function v(f) {
    var d = f.getBoundingClientRect(), o = {
      left: d.left,
      top: d.top
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
  var a = V, r = me;
  Object.defineProperty(G, "__esModule", {
    value: !0
  }), G.default = void 0;
  var t = ee, y = a(le()), v = m(Me()), f = a(ue()), d = Te();
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
    for (var s in i)
      if (s !== "default" && Object.prototype.hasOwnProperty.call(i, s)) {
        var _ = e ? Object.getOwnPropertyDescriptor(i, s) : null;
        _ && (_.get || _.set) ? Object.defineProperty(C, s, _) : C[s] = i[s];
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
      var C = w.expose, e = w.slots, s = w.attrs, _ = (0, t.ref)(), l = (0, t.ref)(), k = (0, t.ref)();
      C({
        focus: function() {
          var h;
          (h = _.value) === null || h === void 0 || h.focus();
        },
        changeActive: function(h) {
          var D = document, E = D.activeElement;
          h && E === l.value ? _.value.focus() : !h && E === _.value && l.value.focus();
        }
      });
      var P = (0, t.ref)(), p = (0, t.computed)(function() {
        var O = n.width, h = n.height, D = {};
        return O !== void 0 && (D.width = typeof O == "number" ? "".concat(O, "px") : O), h !== void 0 && (D.height = typeof h == "number" ? "".concat(h, "px") : h), P.value && (D.transformOrigin = P.value), D;
      }), b = function() {
        (0, t.nextTick)(function() {
          if (k.value) {
            var h = (0, d.offset)(k.value);
            P.value = n.mousePosition ? "".concat(n.mousePosition.x - h.left, "px ").concat(n.mousePosition.y - h.top, "px") : "";
          }
        });
      }, S = function(h) {
        n.onVisibleChanged(h);
      };
      return function() {
        var O, h, D, E, T = n.prefixCls, B = n.footer, A = B === void 0 ? (O = e.footer) === null || O === void 0 ? void 0 : O.call(e) : B, q = n.title, c = q === void 0 ? (h = e.title) === null || h === void 0 ? void 0 : h.call(e) : q, g = n.ariaId, R = n.closable, x = n.closeIcon, M = x === void 0 ? (D = e.closeIcon) === null || D === void 0 ? void 0 : D.call(e) : x, W = n.onClose, L = n.bodyStyle, I = n.bodyProps, z = n.onMousedown, fe = n.onMouseup, te = n.visible, re = n.modalRender, ae = re === void 0 ? e.modalRender : re, ce = n.destroyOnClose, de = n.motionName, F;
        A && (F = (0, t.createVNode)("div", {
          class: "".concat(T, "-footer")
        }, [A]));
        var ne;
        c && (ne = (0, t.createVNode)("div", {
          class: "".concat(T, "-header")
        }, [(0, t.createVNode)("div", {
          class: "".concat(T, "-title"),
          id: g
        }, [c])]));
        var oe;
        R && (oe = (0, t.createVNode)("button", {
          type: "button",
          onClick: W,
          "aria-label": "Close",
          class: "".concat(T, "-close")
        }, [M || (0, t.createVNode)("span", {
          class: "".concat(T, "-close-x")
        }, null)]));
        var ie = (0, t.createVNode)("div", {
          class: "".concat(T, "-content")
        }, [oe, ne, (0, t.createVNode)("div", (0, y.default)({
          class: "".concat(T, "-body"),
          style: L
        }, I), [(E = e.default) === null || E === void 0 ? void 0 : E.call(e)]), F]), Ve = (0, v.getTransitionProps)(de);
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
            return [te || !ce ? (0, t.withDirectives)((0, t.createVNode)("div", (0, y.default)((0, y.default)({}, s), {}, {
              ref: k,
              key: "dialog-element",
              role: "document",
              style: [p.value, s.style],
              class: [T, s.class],
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
  var a = V, r = me;
  Object.defineProperty(X, "__esModule", {
    value: !0
  }), X.default = void 0;
  var t = ee, y = a(le()), v = a(Je()), f = o(Me());
  function d(u) {
    if (typeof WeakMap != "function")
      return null;
    var N = /* @__PURE__ */ new WeakMap(), i = /* @__PURE__ */ new WeakMap();
    return (d = function(w) {
      return w ? i : N;
    })(u);
  }
  function o(u, N) {
    if (!N && u && u.__esModule)
      return u;
    if (u === null || r(u) !== "object" && typeof u != "function")
      return { default: u };
    var i = d(N);
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
        var n = N.prefixCls, w = N.visible, C = N.maskProps, e = N.motionName, s = (0, f.getTransitionProps)(e);
        return (0, t.createVNode)(f.default, s, {
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
  var a = V;
  Object.defineProperty(H, "__esModule", {
    value: !0
  }), H.default = void 0;
  var r = ee, t = a(le()), y = a($e()), v = a(We()), f = a(ze()), d = a(Fe()), o = a(Ke()), m = Ee(), u = a(Ye()), N = a(ue()), i = a(Qe()), n = Te(), w = (0, r.defineComponent)({
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
    setup: function(e, s) {
      var _ = s.attrs, l = s.slots, k = (0, r.ref)(), P = (0, r.ref)(), p = (0, r.ref)(), b = (0, r.ref)(e.visible), S = (0, r.ref)("vcDialogTitle".concat((0, n.getUUID)())), O = function(g) {
        if (g) {
          if (!(0, y.default)(P.value, document.activeElement)) {
            var R;
            k.value = document.activeElement, (R = p.value) === null || R === void 0 || R.focus();
          }
        } else {
          var x = b.value;
          if (b.value = !1, e.mask && k.value && e.focusTriggerAfterClose) {
            try {
              k.value.focus({
                preventScroll: !0
              });
            } catch {
            }
            k.value = null;
          }
          if (x) {
            var M;
            (M = e.afterClose) === null || M === void 0 || M.call(e);
          }
        }
      }, h = function(g) {
        var R;
        (R = e.onClose) === null || R === void 0 || R.call(e, g);
      }, D = (0, r.ref)(!1), E = (0, r.ref)(), T = function() {
        clearTimeout(E.value), D.value = !0;
      }, B = function() {
        E.value = setTimeout(function() {
          D.value = !1;
        });
      }, A = function(g) {
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
        clearTimeout(E.value), (c = e.scrollLocker) === null || c === void 0 || c.unLock();
      }), (0, r.watchEffect)(function() {
        var c;
        if ((c = e.scrollLocker) === null || c === void 0 || c.unLock(), b.value) {
          var g;
          (g = e.scrollLocker) === null || g === void 0 || g.lock();
        }
      }), function() {
        var c = e.prefixCls, g = e.mask, R = e.visible, x = e.maskTransitionName, M = e.maskAnimation, W = e.zIndex, L = e.wrapClassName, I = e.rootClassName, z = e.wrapStyle, fe = e.closable, te = e.maskProps, re = e.maskStyle, ae = e.transitionName, ce = e.animation, de = e.wrapProps, F = e.title, ne = F === void 0 ? l.title : F, oe = _.style, ie = _.class;
        return (0, r.createVNode)("div", (0, t.default)({
          class: ["".concat(c, "-root"), I]
        }, (0, o.default)(e, {
          data: !0
        })), [(0, r.createVNode)(i.default, {
          prefixCls: c,
          visible: g && R,
          motionName: (0, n.getMotionName)(c, x, M),
          style: (0, t.default)({
            zIndex: W
          }, re),
          maskProps: te
        }, null), (0, r.createVNode)("div", (0, t.default)({
          tabIndex: -1,
          onKeydown: q,
          class: (0, v.default)("".concat(c, "-wrap"), L),
          ref: P,
          onClick: A,
          role: "dialog",
          "aria-labelledby": ne ? S.value : null,
          style: (0, t.default)((0, t.default)({
            zIndex: W
          }, z), {}, {
            display: b.value ? null : "none"
          })
        }, de), [(0, r.createVNode)(u.default, (0, t.default)((0, t.default)({}, (0, d.default)(e, ["scrollLocker"])), {}, {
          style: oe,
          class: ie,
          onMousedown: T,
          onMouseup: B,
          ref: p,
          closable: fe,
          ariaId: S.value,
          prefixCls: c,
          visible: R,
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
function xe() {
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
      var d = document.createElement("div"), o = d.style;
      o.position = "absolute", o.top = "0", o.left = "0", o.pointerEvents = "none", o.visibility = "hidden", o.width = "200px", o.height = "150px", o.overflow = "hidden", d.appendChild(f), document.body.appendChild(d);
      var m = f.offsetWidth;
      d.style.overflow = "scroll";
      var u = f.offsetWidth;
      m === u && (u = d.clientWidth), document.body.removeChild(d), a = m - u;
    }
    return a;
  }
  function t(v) {
    var f = v.match(/^(.*)px$/), d = Number(f == null ? void 0 : f[1]);
    return Number.isNaN(d) ? r() : d;
  }
  function y(v) {
    if (typeof document > "u" || !v || !(v instanceof Element))
      return {
        width: 0,
        height: 0
      };
    var f = getComputedStyle(v, "::-webkit-scrollbar"), d = f.width, o = f.height;
    return {
      width: t(d),
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
    var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, v = y.element, f = v === void 0 ? document.body : v, d = {}, o = Object.keys(t);
    return o.forEach(function(m) {
      d[m] = f.style[m];
    }), o.forEach(function(m) {
      f.style[m] = t[m];
    }), d;
  }
  var r = a;
  return Q.default = r, Q;
}
var Se;
function et() {
  if (Se)
    return Y;
  Se = 1;
  var a = V;
  Object.defineProperty(Y, "__esModule", {
    value: !0
  }), Y.default = void 0;
  var r = a(xe()), t = a(pe());
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
  var a = V;
  Object.defineProperty(Z, "__esModule", {
    value: !0
  }), Z.default = void 0;
  var r = a(Ie()), t = a(He()), y = a(Ge()), v = a(Be()), f = a(xe()), d = a(pe()), o = [], m = "ant-scrolling-effect", u = new RegExp("".concat(m), "g"), N = 0, i = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ (0, t.default)(function w(C) {
    var e = this;
    (0, y.default)(this, w), (0, v.default)(this, "getContainer", function() {
      var s;
      return (s = e.options) === null || s === void 0 ? void 0 : s.container;
    }), (0, v.default)(this, "reLock", function(s) {
      var _ = o.find(function(l) {
        var k = l.target;
        return k === e.lockTarget;
      });
      _ && e.unLock(), e.options = s, _ && (_.options = s, e.lock());
    }), (0, v.default)(this, "lock", function() {
      var s;
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
        var _ = 0, l = ((s = e.options) === null || s === void 0 ? void 0 : s.container) || document.body;
        (l === document.body && window.innerWidth - document.documentElement.clientWidth > 0 || l.scrollHeight > l.clientHeight) && (_ = (0, f.default)());
        var k = l.className;
        if (o.filter(function(p) {
          var b, S = p.options;
          return (S == null ? void 0 : S.container) === ((b = e.options) === null || b === void 0 ? void 0 : b.container);
        }).length === 0 && i.set(l, (0, d.default)({
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
      var s, _ = o.find(function(P) {
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
        var l = ((s = e.options) === null || s === void 0 ? void 0 : s.container) || document.body, k = l.className;
        u.test(k) && ((0, d.default)(i.get(l), {
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
  var a = V;
  Object.defineProperty(U, "__esModule", {
    value: !0
  }), U.default = void 0, U.getOpenCount = w;
  var r = ee, t = a(Ae()), y = a(me), v = a(Re()), f = a(et()), d = a(pe()), o = a(je()), m = a(Le()), u = a(tt()), N = a(Xe()), i = 0, n = (0, m.default)();
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
  }, s = (0, r.defineComponent)({
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
      }, E = function() {
        return n ? (p.value || (p.value = document.createElement("div"), D(!0)), T(), p.value) : null;
      }, T = function() {
        var c = l.wrapperClassName;
        p.value && c && c !== p.value.className && (p.value.className = c);
      };
      (0, r.onUpdated)(function() {
        T(), D();
      });
      var B = function() {
        i === 1 && !Object.keys(C).length ? ((0, f.default)(), C = (0, d.default)({
          overflow: "hidden",
          overflowX: "hidden",
          overflowY: "hidden"
        })) : i || ((0, d.default)(C), C = {}, (0, f.default)(!0));
      }, A = (0, r.getCurrentInstance)();
      return (0, r.onMounted)(function() {
        var q = !1;
        (0, r.watch)([function() {
          return l.visible;
        }, function() {
          return l.getContainer;
        }], function(c, g) {
          var R = (0, t.default)(c, 2), x = R[0], M = R[1], W = (0, t.default)(g, 2), L = W[0], I = W[1];
          if (n && e(l.getContainer) === document.body && (x && !L ? i += 1 : q && (i -= 1)), q) {
            var z = typeof M == "function" && typeof I == "function";
            (z ? M.toString() !== I.toString() : M !== I) && h(), x && x !== L && n && e(M) !== O.getContainer() && O.reLock({
              container: e(M)
            });
          }
          q = !0;
        }, {
          immediate: !0,
          flush: "post"
        }), (0, r.nextTick)(function() {
          D() || (S.value = (0, N.default)(function() {
            A.update();
          }));
        });
      }), (0, r.onBeforeUnmount)(function() {
        var q = l.visible, c = l.getContainer;
        n && e(c) === document.body && (i = q && i ? i - 1 : i), h(), N.default.cancel(S.value);
      }), function() {
        var q = l.forceRender, c = l.visible, g = null, R = {
          getOpenCount: function() {
            return i;
          },
          getContainer: E,
          switchScrollingEffect: B,
          scrollLocker: O
        };
        return (q || c || b.value) && (g = (0, r.createVNode)(o.default, {
          getContainer: E,
          ref: b
        }, {
          default: function() {
            var M;
            return (M = P.default) === null || M === void 0 ? void 0 : M.call(P, R);
          }
        })), g;
      };
    }
  });
  return U.default = s, U;
}
var De;
function at() {
  if (De)
    return K;
  De = 1;
  var a = V;
  Object.defineProperty(K, "__esModule", {
    value: !0
  }), K.default = void 0;
  var r = ee, t = a(le()), y = a(Ze()), v = a(ue()), f = a(rt()), d = Ue(), o = Ee(), m = (0, v.default)(), u = (0, r.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "DialogWrap",
    inheritAttrs: !1,
    props: (0, o.initDefaultProps)(m, {
      visible: !1
    }),
    setup: function(n, w) {
      var C = w.attrs, e = w.slots, s = (0, r.ref)(n.visible);
      return (0, d.useProvidePortal)({}, {
        inTriggerContext: !1
      }), (0, r.watch)(function() {
        return n.visible;
      }, function() {
        n.visible && (s.value = !0);
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
        }), e) : !k && p && !s.value ? null : (0, r.createVNode)(f.default, {
          visible: _,
          forceRender: k,
          getContainer: l
        }, {
          default: function(h) {
            return S = (0, t.default)((0, t.default)((0, t.default)({}, S), h), {}, {
              afterClose: function() {
                b == null || b(), s.value = !1;
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
function st() {
  return qe || (qe = 1, function(a) {
    var r = V;
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
  }(se)), se;
}
export {
  st as a,
  ue as b,
  Je as r
};
