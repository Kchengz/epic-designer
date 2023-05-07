import { _ as ie } from "./index.1fa3133f.js";
import { e as le, k, b as ue, a as qe, s as Ce, r as xe, d as Se, A as je, i as Ve, z as Re } from "./useConfigInject.fdc04e2e.js";
import { r as Q } from "./_vue_commonjs-external.cdc460b2.js";
import { d as Ee } from "./useMergedState.94fe30d0.js";
import { r as Me } from "./colors.6e77f922.js";
import { r as $e } from "./vnode.716a0aad.js";
import { r as Ie } from "./firstNotUndefined.4390bc7f.js";
import { r as Be } from "./raf.f4e1fc4f.js";
var ne = {}, N = {}, L = {}, W = {}, $ = {}, pe;
function _e() {
  if (pe)
    return $;
  pe = 1, Object.defineProperty($, "__esModule", {
    value: !0
  }), $.placements = $.default = void 0;
  var t = {
    adjustX: 1,
    adjustY: 1
  }, e = [0, 0], s = {
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
  $.placements = s;
  var C = s;
  return $.default = C, $;
}
var U = {}, de;
function Le() {
  if (de)
    return U;
  de = 1;
  var t = k.exports;
  Object.defineProperty(U, "__esModule", {
    value: !0
  }), U.default = void 0;
  var e = Q, s = t(le()), C = {
    prefixCls: String,
    id: String,
    overlayInnerStyle: s.default.any
  }, i = (0, e.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "Content",
    props: C,
    slots: ["overlay"],
    setup: function(y, a) {
      var u = a.slots;
      return function() {
        var c;
        return (0, e.createVNode)("div", {
          class: "".concat(y.prefixCls, "-inner"),
          id: y.id,
          role: "tooltip",
          style: y.overlayInnerStyle
        }, [(c = u.overlay) === null || c === void 0 ? void 0 : c.call(u)]);
      };
    }
  });
  return U.default = i, U;
}
var ve;
function We() {
  if (ve)
    return W;
  ve = 1;
  var t = k.exports;
  Object.defineProperty(W, "__esModule", {
    value: !0
  }), W.default = void 0;
  var e = Q, s = t(ue()), C = t(qe()), i = t(ie.exports), d = t(le()), y = t(Ee()), a = _e(), u = t(Le()), c = Ce(), f = ["overlayClassName", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "prefixCls", "afterVisibleChange", "transitionName", "animation", "placement", "align", "destroyTooltipOnHide", "defaultVisible"];
  function _() {
  }
  var b = (0, e.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "Tooltip",
    inheritAttrs: !1,
    props: {
      trigger: d.default.any.def(["hover"]),
      defaultVisible: {
        type: Boolean,
        default: void 0
      },
      visible: {
        type: Boolean,
        default: void 0
      },
      placement: d.default.string.def("right"),
      transitionName: String,
      animation: d.default.any,
      afterVisibleChange: d.default.func.def(function() {
      }),
      overlayStyle: {
        type: Object,
        default: void 0
      },
      overlayClassName: String,
      prefixCls: d.default.string.def("rc-tooltip"),
      mouseEnterDelay: d.default.number.def(0.1),
      mouseLeaveDelay: d.default.number.def(0.1),
      getPopupContainer: Function,
      destroyTooltipOnHide: {
        type: Boolean,
        default: !1
      },
      align: d.default.object.def(function() {
        return {};
      }),
      arrowContent: d.default.any.def(null),
      tipId: String,
      builtinPlacements: d.default.object,
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
      var q = A.slots, w = A.attrs, T = A.expose, j = (0, e.ref)(), Z = function() {
        var p = o.prefixCls, D = o.tipId, h = o.overlayInnerStyle;
        return [(0, e.createVNode)("div", {
          class: "".concat(p, "-arrow"),
          key: "arrow"
        }, [(0, c.getPropsSlot)(q, o, "arrowContent")]), (0, e.createVNode)(u.default, {
          key: "content",
          prefixCls: p,
          id: D,
          overlayInnerStyle: h
        }, {
          overlay: q.overlay
        })];
      }, ee = function() {
        return j.value.getPopupDomNode();
      };
      T({
        getPopupDomNode: ee,
        triggerDOM: j,
        forcePopupAlign: function() {
          var p;
          return (p = j.value) === null || p === void 0 ? void 0 : p.forcePopupAlign();
        }
      });
      var V = (0, e.ref)(!1), l = (0, e.ref)(!1);
      return (0, e.watchEffect)(function() {
        var m = o.destroyTooltipOnHide;
        if (typeof m == "boolean")
          V.value = m;
        else if (m && (0, i.default)(m) === "object") {
          var p = m.keepParent;
          V.value = p === !0, l.value = p === !1;
        }
      }), function() {
        var m = o.overlayClassName, p = o.trigger, D = o.mouseEnterDelay, h = o.mouseLeaveDelay, te = o.overlayStyle, X = o.prefixCls, R = o.afterVisibleChange, re = o.transitionName, E = o.animation, B = o.placement, Y = o.align;
        o.destroyTooltipOnHide;
        var G = o.defaultVisible, oe = (0, C.default)(o, f), J = (0, s.default)({}, oe);
        o.visible !== void 0 && (J.popupVisible = o.visible);
        var K = (0, s.default)((0, s.default)((0, s.default)({
          popupClassName: m,
          prefixCls: X,
          action: p,
          builtinPlacements: a.placements,
          popupPlacement: B,
          popupAlign: Y,
          afterPopupVisibleChange: R,
          popupTransitionName: re,
          popupAnimation: E,
          defaultPopupVisible: G,
          destroyPopupOnHide: V.value,
          autoDestroy: l.value,
          mouseLeaveDelay: h,
          popupStyle: te,
          mouseEnterDelay: D
        }, J), w), {}, {
          onPopupVisibleChange: o.onVisibleChange || _,
          onPopupAlign: o.onPopupAlign || _,
          ref: j,
          popup: Z()
        });
        return (0, e.createVNode)(y.default, K, {
          default: q.default
        });
      };
    }
  });
  return W.default = b, W;
}
var ce;
function Ue() {
  if (ce)
    return L;
  ce = 1;
  var t = k.exports;
  Object.defineProperty(L, "__esModule", {
    value: !0
  }), L.default = void 0;
  var e = t(We()), s = e.default;
  return L.default = s, L;
}
var H = {}, me;
function He() {
  if (me)
    return H;
  me = 1, Object.defineProperty(H, "__esModule", {
    value: !0
  }), H.default = void 0;
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
  return H.default = t, H;
}
var z = {}, ge;
function ze() {
  if (ge)
    return z;
  ge = 1;
  var t = k.exports;
  Object.defineProperty(z, "__esModule", {
    value: !0
  }), z.default = a, z.getOverflowOptions = y;
  var e = t(ue()), s = _e(), C = {
    adjustX: 1,
    adjustY: 1
  }, i = {
    adjustX: 0,
    adjustY: 0
  }, d = [0, 0];
  function y(u) {
    return typeof u == "boolean" ? u ? C : i : (0, e.default)((0, e.default)({}, i), u);
  }
  function a(u) {
    var c = u.arrowWidth, f = c === void 0 ? 4 : c, _ = u.horizontalArrowShift, b = _ === void 0 ? 16 : _, O = u.verticalArrowShift, o = O === void 0 ? 8 : O, A = u.autoAdjustOverflow, q = u.arrowPointAtCenter, w = {
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
        offset: [-(b + f), -4]
      },
      leftTop: {
        points: ["tr", "cl"],
        offset: [-4, -(o + f)]
      },
      topRight: {
        points: ["br", "tc"],
        offset: [b + f, -4]
      },
      rightTop: {
        points: ["tl", "cr"],
        offset: [4, -(o + f)]
      },
      bottomRight: {
        points: ["tr", "bc"],
        offset: [b + f, 4]
      },
      rightBottom: {
        points: ["bl", "cr"],
        offset: [4, o + f]
      },
      bottomLeft: {
        points: ["tl", "bc"],
        offset: [-(b + f), 4]
      },
      leftBottom: {
        points: ["br", "cl"],
        offset: [-4, o + f]
      }
    };
    return Object.keys(w).forEach(function(T) {
      w[T] = q ? (0, e.default)((0, e.default)({}, w[T]), {}, {
        overflow: y(A),
        targetOffset: d
      }) : (0, e.default)((0, e.default)({}, s.placements[T]), {}, {
        overflow: y(A)
      }), w[T].ignoreShake = !0;
    }), w;
  }
  return z;
}
var ye;
function Fe() {
  if (ye)
    return N;
  ye = 1;
  var t = k.exports;
  Object.defineProperty(N, "__esModule", {
    value: !0
  }), N.tooltipProps = N.tooltipDefaultProps = N.default = void 0;
  var e = Q, s = t(xe()), C = t(ie.exports), i = t(ue()), d = t(Ue()), y = t(Se()), a = t(le()), u = Me(), c = t(je()), f = Ce(), _ = $e(), b = t(He()), O = t(Ve()), o = t(ze()), A = t(Ie()), q = t(Be()), w = function(l, m) {
    var p = {}, D = (0, i.default)({}, l);
    return m.forEach(function(h) {
      l && h in l && (p[h] = l[h], delete D[h]);
    }), {
      picked: p,
      omitted: D
    };
  }, T = new RegExp("^(".concat(u.PresetColorTypes.join("|"), ")(-inverse)?$")), j = function() {
    return (0, i.default)((0, i.default)({}, (0, b.default)()), {}, {
      title: a.default.any
    });
  };
  N.tooltipProps = j;
  var Z = function() {
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
  N.tooltipDefaultProps = Z;
  var ee = (0, e.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "ATooltip",
    inheritAttrs: !1,
    props: (0, f.initDefaultProps)(j(), {
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
    setup: function(l, m) {
      var p = m.slots, D = m.emit, h = m.attrs, te = m.expose, X = (0, O.default)("tooltip", l), R = X.prefixCls, re = X.getPopupContainer, E = (0, e.ref)((0, A.default)([l.visible, l.defaultVisible])), B = (0, e.ref)();
      (0, e.onMounted)(function() {
        (0, c.default)(l.defaultVisible === void 0, "Tooltip", "'defaultVisible' is deprecated, please use 'v-model:visible'");
      });
      var Y;
      (0, e.watch)(function() {
        return l.visible;
      }, function(P) {
        q.default.cancel(Y), Y = (0, q.default)(function() {
          E.value = !!P;
        });
      });
      var G = function() {
        var r, n = (r = l.title) !== null && r !== void 0 ? r : p.title;
        return !n && n !== 0;
      }, oe = function(r) {
        var n = G();
        l.visible === void 0 && (E.value = n ? !1 : r), n || (D("update:visible", r), D("visibleChange", r));
      }, J = function() {
        return B.value.getPopupDomNode();
      };
      te({
        getPopupDomNode: J,
        visible: E,
        forcePopupAlign: function() {
          var r;
          return (r = B.value) === null || r === void 0 ? void 0 : r.forcePopupAlign();
        }
      });
      var K = (0, e.computed)(function() {
        var P = l.builtinPlacements, r = l.arrowPointAtCenter, n = l.autoAdjustOverflow;
        return P || (0, o.default)({
          arrowPointAtCenter: r,
          autoAdjustOverflow: n
        });
      }), ae = function(r) {
        return r || r === "";
      }, Oe = function(r) {
        var n = r.type;
        if ((0, C.default)(n) === "object" && r.props && ((n.__ANT_BUTTON === !0 || n === "button") && ae(r.props.disabled) || n.__ANT_SWITCH === !0 && (ae(r.props.disabled) || ae(r.props.loading)))) {
          var x = w((0, f.getStyle)(r), ["position", "left", "right", "top", "bottom", "float", "display", "zIndex"]), v = x.picked, I = x.omitted, g = (0, i.default)((0, i.default)({
            display: "inline-block"
          }, v), {}, {
            cursor: "not-allowed",
            lineHeight: 1,
            width: r.props && r.props.block ? "100%" : null
          }), M = (0, i.default)((0, i.default)({}, I), {}, {
            pointerEvents: "none"
          }), S = (0, _.cloneElement)(r, {
            style: M
          }, !0);
          return (0, e.createVNode)("span", {
            style: g,
            class: "".concat(R.value, "-disabled-compatible-wrapper")
          }, [S]);
        }
        return r;
      }, he = function() {
        var r, n;
        return (r = l.title) !== null && r !== void 0 ? r : (n = p.title) === null || n === void 0 ? void 0 : n.call(p);
      }, we = function(r, n) {
        var x = K.value, v = Object.keys(x).filter(function(M) {
          return x[M].points[0] === n.points[0] && x[M].points[1] === n.points[1];
        })[0];
        if (!!v) {
          var I = r.getBoundingClientRect(), g = {
            top: "50%",
            left: "50%"
          };
          v.indexOf("top") >= 0 || v.indexOf("Bottom") >= 0 ? g.top = "".concat(I.height - n.offset[1], "px") : (v.indexOf("Top") >= 0 || v.indexOf("bottom") >= 0) && (g.top = "".concat(-n.offset[1], "px")), v.indexOf("left") >= 0 || v.indexOf("Right") >= 0 ? g.left = "".concat(I.width - n.offset[0], "px") : (v.indexOf("right") >= 0 || v.indexOf("Left") >= 0) && (g.left = "".concat(-n.offset[0], "px")), r.style.transformOrigin = "".concat(g.left, " ").concat(g.top);
        }
      };
      return function() {
        var P, r, n, x = l.openClassName, v = l.color, I = l.overlayClassName, g = (P = (0, f.filterEmpty)((r = p.default) === null || r === void 0 ? void 0 : r.call(p))) !== null && P !== void 0 ? P : null;
        g = g.length === 1 ? g[0] : g;
        var M = E.value;
        if (l.visible === void 0 && G() && (M = !1), !g)
          return null;
        var S = Oe((0, f.isValidElement)(g) ? g : (0, e.createVNode)("span", null, [g])), Te = (0, y.default)((n = {}, (0, s.default)(n, x || "".concat(R.value, "-open"), !0), (0, s.default)(n, S.props && S.props.class, S.props && S.props.class), n)), De = (0, y.default)(I, (0, s.default)({}, "".concat(R.value, "-").concat(v), v && T.test(v))), fe, se;
        v && !T.test(v) && (fe = {
          backgroundColor: v
        }, se = {
          backgroundColor: v
        });
        var Ne = (0, i.default)((0, i.default)((0, i.default)({}, h), l), {}, {
          prefixCls: R.value,
          getPopupContainer: re.value,
          builtinPlacements: K.value,
          visible: M,
          ref: B,
          overlayClassName: De,
          overlayInnerStyle: fe,
          onVisibleChange: oe,
          onPopupAlign: we
        });
        return (0, e.createVNode)(d.default, Ne, {
          default: function() {
            return [E.value ? (0, _.cloneElement)(S, {
              class: Te
            }) : S];
          },
          arrowContent: function() {
            return (0, e.createVNode)("span", {
              class: "".concat(R.value, "-arrow-content"),
              style: se
            }, null);
          },
          overlay: he
        });
      };
    }
  });
  return N.default = ee, N;
}
var be;
function et() {
  return be || (be = 1, function(t) {
    var e = ie.exports;
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0, Object.defineProperty(t, "tooltipProps", {
      enumerable: !0,
      get: function() {
        return C.tooltipProps;
      }
    });
    var s = Re(), C = d(Fe());
    function i(a) {
      if (typeof WeakMap != "function")
        return null;
      var u = /* @__PURE__ */ new WeakMap(), c = /* @__PURE__ */ new WeakMap();
      return (i = function(_) {
        return _ ? c : u;
      })(a);
    }
    function d(a, u) {
      if (!u && a && a.__esModule)
        return a;
      if (a === null || e(a) !== "object" && typeof a != "function")
        return { default: a };
      var c = i(u);
      if (c && c.has(a))
        return c.get(a);
      var f = {}, _ = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var b in a)
        if (b !== "default" && Object.prototype.hasOwnProperty.call(a, b)) {
          var O = _ ? Object.getOwnPropertyDescriptor(a, b) : null;
          O && (O.get || O.set) ? Object.defineProperty(f, b, O) : f[b] = a[b];
        }
      return f.default = a, c && c.set(a, f), f;
    }
    var y = (0, s.withInstall)(C.default);
    t.default = y;
  }(ne)), ne;
}
var F = {}, Pe;
function tt() {
  if (Pe)
    return F;
  Pe = 1, Object.defineProperty(F, "__esModule", {
    value: !0
  }), F.default = void 0;
  var t = Q, e = function() {
    var i = (0, t.ref)(/* @__PURE__ */ new Map()), d = function(a) {
      return function(u) {
        i.value.set(a, u);
      };
    };
    return (0, t.onBeforeUpdate)(function() {
      i.value = /* @__PURE__ */ new Map();
    }), [d, i];
  }, s = e;
  return F.default = s, F;
}
export {
  tt as a,
  et as r
};
