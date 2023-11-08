import { _ as ae } from "./index-5fc6c346.mjs";
import { j as ie, i as z, g as ne, r as le, o as Ne, c as be, a as Ae, e as qe, q as Se, f as je, h as Ve } from "./useConfigInject-f0dbb416.mjs";
import { b as xe } from "./index-d3f861e4.mjs";
import { r as Ee } from "./colors-049dd05b.mjs";
import { r as Re } from "./vnode-1aa65f32.mjs";
import { r as $e } from "./firstNotUndefined-ac7713f5.mjs";
import { r as Me } from "./raf-09a8b76f.mjs";
var oe = {}, N = {}, L = {}, W = {}, M = {}, se;
function Pe() {
  if (se)
    return M;
  se = 1, Object.defineProperty(M, "__esModule", {
    value: !0
  }), M.placements = M.default = void 0;
  var t = {
    adjustX: 1,
    adjustY: 1
  }, e = [0, 0], p = {
    left: {
      points: ["cr", "cl"],
      overflow: t,
      offset: [-4, 0],
      targetOffset: e
    },
    right: {
      points: ["cl", "cr"],
      overflow: t,
      offset: [4, 0],
      targetOffset: e
    },
    top: {
      points: ["bc", "tc"],
      overflow: t,
      offset: [0, -4],
      targetOffset: e
    },
    bottom: {
      points: ["tc", "bc"],
      overflow: t,
      offset: [0, 4],
      targetOffset: e
    },
    topLeft: {
      points: ["bl", "tl"],
      overflow: t,
      offset: [0, -4],
      targetOffset: e
    },
    leftTop: {
      points: ["tr", "tl"],
      overflow: t,
      offset: [-4, 0],
      targetOffset: e
    },
    topRight: {
      points: ["br", "tr"],
      overflow: t,
      offset: [0, -4],
      targetOffset: e
    },
    rightTop: {
      points: ["tl", "tr"],
      overflow: t,
      offset: [4, 0],
      targetOffset: e
    },
    bottomRight: {
      points: ["tr", "br"],
      overflow: t,
      offset: [0, 4],
      targetOffset: e
    },
    rightBottom: {
      points: ["bl", "br"],
      overflow: t,
      offset: [4, 0],
      targetOffset: e
    },
    bottomLeft: {
      points: ["tl", "bl"],
      overflow: t,
      offset: [0, 4],
      targetOffset: e
    },
    leftBottom: {
      points: ["br", "bl"],
      overflow: t,
      offset: [-4, 0],
      targetOffset: e
    }
  };
  M.placements = p;
  var C = p;
  return M.default = C, M;
}
var H = {}, pe;
function Ie() {
  if (pe)
    return H;
  pe = 1;
  var t = z;
  Object.defineProperty(H, "__esModule", {
    value: !0
  }), H.default = void 0;
  var e = ne, p = t(ie()), C = {
    prefixCls: String,
    id: String,
    overlayInnerStyle: p.default.any
  }, f = (0, e.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "Content",
    props: C,
    slots: ["overlay"],
    setup: function(P, i) {
      var u = i.slots;
      return function() {
        var v;
        return (0, e.createVNode)("div", {
          class: "".concat(P.prefixCls, "-inner"),
          id: P.id,
          role: "tooltip",
          style: P.overlayInnerStyle
        }, [(v = u.overlay) === null || v === void 0 ? void 0 : v.call(u)]);
      };
    }
  });
  return H.default = f, H;
}
var de;
function Be() {
  if (de)
    return W;
  de = 1;
  var t = z;
  Object.defineProperty(W, "__esModule", {
    value: !0
  }), W.default = void 0;
  var e = ne, p = t(le()), C = t(Ne()), f = t(ae), c = t(ie()), P = t(xe()), i = Pe(), u = t(Ie()), v = be(), l = ["overlayClassName", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "prefixCls", "afterVisibleChange", "transitionName", "animation", "placement", "align", "destroyTooltipOnHide", "defaultVisible"];
  function O() {
  }
  var y = (0, e.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "Tooltip",
    inheritAttrs: !1,
    props: {
      trigger: c.default.any.def(["hover"]),
      defaultVisible: {
        type: Boolean,
        default: void 0
      },
      visible: {
        type: Boolean,
        default: void 0
      },
      placement: c.default.string.def("right"),
      transitionName: String,
      animation: c.default.any,
      afterVisibleChange: c.default.func.def(function() {
      }),
      overlayStyle: {
        type: Object,
        default: void 0
      },
      overlayClassName: String,
      prefixCls: c.default.string.def("rc-tooltip"),
      mouseEnterDelay: c.default.number.def(0.1),
      mouseLeaveDelay: c.default.number.def(0.1),
      getPopupContainer: Function,
      destroyTooltipOnHide: {
        type: Boolean,
        default: !1
      },
      align: c.default.object.def(function() {
        return {};
      }),
      arrowContent: c.default.any.def(null),
      tipId: String,
      builtinPlacements: c.default.object,
      overlayInnerStyle: {
        type: Object,
        default: void 0
      },
      popupVisible: {
        type: Boolean,
        default: void 0
      },
      onVisibleChange: Function,
      onPopupAlign: Function
    },
    slots: ["arrowContent", "overlay"],
    setup: function(o, A) {
      var q = A.slots, w = A.attrs, T = A.expose, V = (0, e.ref)(), K = function() {
        var s = o.prefixCls, D = o.tipId, h = o.overlayInnerStyle;
        return [(0, e.createVNode)("div", {
          class: "".concat(s, "-arrow"),
          key: "arrow"
        }, [(0, v.getPropsSlot)(q, o, "arrowContent")]), (0, e.createVNode)(u.default, {
          key: "content",
          prefixCls: s,
          id: D,
          overlayInnerStyle: h
        }, {
          overlay: q.overlay
        })];
      }, Q = function() {
        return V.value.getPopupDomNode();
      };
      T({
        getPopupDomNode: Q,
        triggerDOM: V,
        forcePopupAlign: function() {
          var s;
          return (s = V.value) === null || s === void 0 ? void 0 : s.forcePopupAlign();
        }
      });
      var x = (0, e.ref)(!1), n = (0, e.ref)(!1);
      return (0, e.watchEffect)(function() {
        var g = o.destroyTooltipOnHide;
        if (typeof g == "boolean")
          x.value = g;
        else if (g && (0, f.default)(g) === "object") {
          var s = g.keepParent;
          x.value = s === !0, n.value = s === !1;
        }
      }), function() {
        var g = o.overlayClassName, s = o.trigger, D = o.mouseEnterDelay, h = o.mouseLeaveDelay, Z = o.overlayStyle, k = o.prefixCls, E = o.afterVisibleChange, ee = o.transitionName, R = o.animation, B = o.placement, X = o.align;
        o.destroyTooltipOnHide;
        var Y = o.defaultVisible, te = (0, C.default)(o, l), G = (0, p.default)({}, te);
        o.visible !== void 0 && (G.popupVisible = o.visible);
        var J = (0, p.default)((0, p.default)((0, p.default)({
          popupClassName: g,
          prefixCls: k,
          action: s,
          builtinPlacements: i.placements,
          popupPlacement: B,
          popupAlign: X,
          afterPopupVisibleChange: E,
          popupTransitionName: ee,
          popupAnimation: R,
          defaultPopupVisible: Y,
          destroyPopupOnHide: x.value,
          autoDestroy: n.value,
          mouseLeaveDelay: h,
          popupStyle: Z,
          mouseEnterDelay: D
        }, G), w), {}, {
          onPopupVisibleChange: o.onVisibleChange || O,
          onPopupAlign: o.onPopupAlign || O,
          ref: V,
          popup: K()
        });
        return (0, e.createVNode)(P.default, J, {
          default: q.default
        });
      };
    }
  });
  return W.default = y, W;
}
var ve;
function Le() {
  if (ve)
    return L;
  ve = 1;
  var t = z;
  Object.defineProperty(L, "__esModule", {
    value: !0
  }), L.default = void 0;
  var e = t(Be()), p = e.default;
  return L.default = p, L;
}
var U = {}, ce;
function We() {
  if (ce)
    return U;
  ce = 1, Object.defineProperty(U, "__esModule", {
    value: !0
  }), U.default = void 0;
  var t = function() {
    return {
      trigger: [String, Array],
      visible: {
        type: Boolean,
        default: void 0
      },
      defaultVisible: {
        type: Boolean,
        default: void 0
      },
      placement: String,
      color: String,
      transitionName: String,
      overlayStyle: {
        type: Object,
        default: void 0
      },
      overlayClassName: String,
      openClassName: String,
      prefixCls: String,
      mouseEnterDelay: Number,
      mouseLeaveDelay: Number,
      getPopupContainer: Function,
      arrowPointAtCenter: {
        type: Boolean,
        default: void 0
      },
      autoAdjustOverflow: {
        type: [Boolean, Object],
        default: void 0
      },
      destroyTooltipOnHide: {
        type: Boolean,
        default: void 0
      },
      align: {
        type: Object,
        default: void 0
      },
      builtinPlacements: {
        type: Object,
        default: void 0
      },
      children: Array,
      onVisibleChange: Function,
      "onUpdate:visible": Function
    };
  };
  return U.default = t, U;
}
var F = {}, ge;
function He() {
  if (ge)
    return F;
  ge = 1;
  var t = z;
  Object.defineProperty(F, "__esModule", {
    value: !0
  }), F.default = i, F.getOverflowOptions = P;
  var e = t(le()), p = Pe(), C = {
    adjustX: 1,
    adjustY: 1
  }, f = {
    adjustX: 0,
    adjustY: 0
  }, c = [0, 0];
  function P(u) {
    return typeof u == "boolean" ? u ? C : f : (0, e.default)((0, e.default)({}, f), u);
  }
  function i(u) {
    var v = u.arrowWidth, l = v === void 0 ? 4 : v, O = u.horizontalArrowShift, y = O === void 0 ? 16 : O, _ = u.verticalArrowShift, o = _ === void 0 ? 8 : _, A = u.autoAdjustOverflow, q = u.arrowPointAtCenter, w = {
      left: {
        points: ["cr", "cl"],
        offset: [-4, 0]
      },
      right: {
        points: ["cl", "cr"],
        offset: [4, 0]
      },
      top: {
        points: ["bc", "tc"],
        offset: [0, -4]
      },
      bottom: {
        points: ["tc", "bc"],
        offset: [0, 4]
      },
      topLeft: {
        points: ["bl", "tc"],
        offset: [-(y + l), -4]
      },
      leftTop: {
        points: ["tr", "cl"],
        offset: [-4, -(o + l)]
      },
      topRight: {
        points: ["br", "tc"],
        offset: [y + l, -4]
      },
      rightTop: {
        points: ["tl", "cr"],
        offset: [4, -(o + l)]
      },
      bottomRight: {
        points: ["tr", "bc"],
        offset: [y + l, 4]
      },
      rightBottom: {
        points: ["bl", "cr"],
        offset: [4, o + l]
      },
      bottomLeft: {
        points: ["tl", "bc"],
        offset: [-(y + l), 4]
      },
      leftBottom: {
        points: ["br", "cl"],
        offset: [-4, o + l]
      }
    };
    return Object.keys(w).forEach(function(T) {
      w[T] = q ? (0, e.default)((0, e.default)({}, w[T]), {}, {
        overflow: P(A),
        targetOffset: c
      }) : (0, e.default)((0, e.default)({}, p.placements[T]), {}, {
        overflow: P(A)
      }), w[T].ignoreShake = !0;
    }), w;
  }
  return F;
}
var me;
function Ue() {
  if (me)
    return N;
  me = 1;
  var t = z;
  Object.defineProperty(N, "__esModule", {
    value: !0
  }), N.tooltipProps = N.tooltipDefaultProps = N.default = void 0;
  var e = ne, p = t(Ae()), C = t(ae), f = t(le()), c = t(Le()), P = t(qe()), i = t(ie()), u = Ee(), v = t(Se()), l = be(), O = Re(), y = t(We()), _ = t(je()), o = t(He()), A = t($e()), q = t(Me()), w = function(n, g) {
    var s = {}, D = (0, f.default)({}, n);
    return g.forEach(function(h) {
      n && h in n && (s[h] = n[h], delete D[h]);
    }), {
      picked: s,
      omitted: D
    };
  }, T = new RegExp("^(".concat(u.PresetColorTypes.join("|"), ")(-inverse)?$")), V = function() {
    return (0, f.default)((0, f.default)({}, (0, y.default)()), {}, {
      title: i.default.any
    });
  };
  N.tooltipProps = V;
  var K = function() {
    return {
      trigger: "hover",
      transitionName: "zoom-big-fast",
      align: {},
      placement: "top",
      mouseEnterDelay: 0.1,
      mouseLeaveDelay: 0.1,
      arrowPointAtCenter: !1,
      autoAdjustOverflow: !0
    };
  };
  N.tooltipDefaultProps = K;
  var Q = (0, e.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "ATooltip",
    inheritAttrs: !1,
    props: (0, l.initDefaultProps)(V(), {
      trigger: "hover",
      transitionName: "zoom-big-fast",
      align: {},
      placement: "top",
      mouseEnterDelay: 0.1,
      mouseLeaveDelay: 0.1,
      arrowPointAtCenter: !1,
      autoAdjustOverflow: !0
    }),
    slots: ["title"],
    // emits: ['update:visible', 'visibleChange'],
    setup: function(n, g) {
      var s = g.slots, D = g.emit, h = g.attrs, Z = g.expose, k = (0, _.default)("tooltip", n), E = k.prefixCls, ee = k.getPopupContainer, R = (0, e.ref)((0, A.default)([n.visible, n.defaultVisible])), B = (0, e.ref)();
      (0, e.onMounted)(function() {
        (0, v.default)(n.defaultVisible === void 0, "Tooltip", "'defaultVisible' is deprecated, please use 'v-model:visible'");
      });
      var X;
      (0, e.watch)(function() {
        return n.visible;
      }, function(b) {
        q.default.cancel(X), X = (0, q.default)(function() {
          R.value = !!b;
        });
      });
      var Y = function() {
        var r, a = (r = n.title) !== null && r !== void 0 ? r : s.title;
        return !a && a !== 0;
      }, te = function(r) {
        var a = Y();
        n.visible === void 0 && (R.value = a ? !1 : r), a || (D("update:visible", r), D("visibleChange", r));
      }, G = function() {
        return B.value.getPopupDomNode();
      };
      Z({
        getPopupDomNode: G,
        visible: R,
        forcePopupAlign: function() {
          var r;
          return (r = B.value) === null || r === void 0 ? void 0 : r.forcePopupAlign();
        }
      });
      var J = (0, e.computed)(function() {
        var b = n.builtinPlacements, r = n.arrowPointAtCenter, a = n.autoAdjustOverflow;
        return b || (0, o.default)({
          arrowPointAtCenter: r,
          autoAdjustOverflow: a
        });
      }), re = function(r) {
        return r || r === "";
      }, Ce = function(r) {
        var a = r.type;
        if ((0, C.default)(a) === "object" && r.props && ((a.__ANT_BUTTON === !0 || a === "button") && re(r.props.disabled) || a.__ANT_SWITCH === !0 && (re(r.props.disabled) || re(r.props.loading)))) {
          var S = w((0, l.getStyle)(r), ["position", "left", "right", "top", "bottom", "float", "display", "zIndex"]), d = S.picked, I = S.omitted, m = (0, f.default)((0, f.default)({
            display: "inline-block"
          }, d), {}, {
            cursor: "not-allowed",
            lineHeight: 1,
            width: r.props && r.props.block ? "100%" : null
          }), $ = (0, f.default)((0, f.default)({}, I), {}, {
            pointerEvents: "none"
          }), j = (0, O.cloneElement)(r, {
            style: $
          }, !0);
          return (0, e.createVNode)("span", {
            style: m,
            class: "".concat(E.value, "-disabled-compatible-wrapper")
          }, [j]);
        }
        return r;
      }, Oe = function() {
        var r, a;
        return (r = n.title) !== null && r !== void 0 ? r : (a = s.title) === null || a === void 0 ? void 0 : a.call(s);
      }, _e = function(r, a) {
        var S = J.value, d = Object.keys(S).filter(function($) {
          return S[$].points[0] === a.points[0] && S[$].points[1] === a.points[1];
        })[0];
        if (d) {
          var I = r.getBoundingClientRect(), m = {
            top: "50%",
            left: "50%"
          };
          d.indexOf("top") >= 0 || d.indexOf("Bottom") >= 0 ? m.top = "".concat(I.height - a.offset[1], "px") : (d.indexOf("Top") >= 0 || d.indexOf("bottom") >= 0) && (m.top = "".concat(-a.offset[1], "px")), d.indexOf("left") >= 0 || d.indexOf("Right") >= 0 ? m.left = "".concat(I.width - a.offset[0], "px") : (d.indexOf("right") >= 0 || d.indexOf("Left") >= 0) && (m.left = "".concat(-a.offset[0], "px")), r.style.transformOrigin = "".concat(m.left, " ").concat(m.top);
        }
      };
      return function() {
        var b, r, a, S = n.openClassName, d = n.color, I = n.overlayClassName, m = (b = (0, l.filterEmpty)((r = s.default) === null || r === void 0 ? void 0 : r.call(s))) !== null && b !== void 0 ? b : null;
        m = m.length === 1 ? m[0] : m;
        var $ = R.value;
        if (n.visible === void 0 && Y() && ($ = !1), !m)
          return null;
        var j = Ce((0, l.isValidElement)(m) ? m : (0, e.createVNode)("span", null, [m])), he = (0, P.default)((a = {}, (0, p.default)(a, S || "".concat(E.value, "-open"), !0), (0, p.default)(a, j.props && j.props.class, j.props && j.props.class), a)), we = (0, P.default)(I, (0, p.default)({}, "".concat(E.value, "-").concat(d), d && T.test(d))), ue, fe;
        d && !T.test(d) && (ue = {
          backgroundColor: d
        }, fe = {
          backgroundColor: d
        });
        var Te = (0, f.default)((0, f.default)((0, f.default)({}, h), n), {}, {
          prefixCls: E.value,
          getPopupContainer: ee.value,
          builtinPlacements: J.value,
          visible: $,
          ref: B,
          overlayClassName: we,
          overlayInnerStyle: ue,
          onVisibleChange: te,
          onPopupAlign: _e
        });
        return (0, e.createVNode)(c.default, Te, {
          default: function() {
            return [R.value ? (0, O.cloneElement)(j, {
              class: he
            }) : j];
          },
          arrowContent: function() {
            return (0, e.createVNode)("span", {
              class: "".concat(E.value, "-arrow-content"),
              style: fe
            }, null);
          },
          overlay: Oe
        });
      };
    }
  });
  return N.default = Q, N;
}
var ye;
function Ke() {
  return ye || (ye = 1, function(t) {
    var e = ae;
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0, Object.defineProperty(t, "tooltipProps", {
      enumerable: !0,
      get: function() {
        return C.tooltipProps;
      }
    });
    var p = Ve(), C = c(Ue());
    function f(i) {
      if (typeof WeakMap != "function")
        return null;
      var u = /* @__PURE__ */ new WeakMap(), v = /* @__PURE__ */ new WeakMap();
      return (f = function(O) {
        return O ? v : u;
      })(i);
    }
    function c(i, u) {
      if (!u && i && i.__esModule)
        return i;
      if (i === null || e(i) !== "object" && typeof i != "function")
        return { default: i };
      var v = f(u);
      if (v && v.has(i))
        return v.get(i);
      var l = {}, O = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var y in i)
        if (y !== "default" && Object.prototype.hasOwnProperty.call(i, y)) {
          var _ = O ? Object.getOwnPropertyDescriptor(i, y) : null;
          _ && (_.get || _.set) ? Object.defineProperty(l, y, _) : l[y] = i[y];
        }
      return l.default = i, v && v.set(i, l), l;
    }
    var P = (0, p.withInstall)(C.default);
    t.default = P;
  }(oe)), oe;
}
export {
  Ke as r
};
