import { _ as bt, g as wn } from "./index-5fc6c346.mjs";
import { i as be, g as oe, a as je, e as et, r as Ve, b as qt, c as kt, j as tt, l as Ut, k as sn, S as Kn, s as pn, f as fa, o as En, n as zt, d as qn, w as kn } from "./useConfigInject-f0dbb416.mjs";
import { r as va } from "./raf-09a8b76f.mjs";
import { r as ca } from "./KeyCode-8a26b842.mjs";
import { r as Dn } from "./shallowequal-01dcd160.mjs";
import { y as An, z as mn, v as Vn, w as jn, b as bn, f as Bn, A as Ln } from "./index-d3f861e4.mjs";
import { j as Fn, k as Wn, r as $n, n as yn, e as Un, b as zn, c as Gn, o as Hn } from "./_flatRest-18b83366.mjs";
import { r as sa } from "./index-a26e140f.mjs";
import { r as Dt } from "./vnode-1aa65f32.mjs";
import { r as Yn } from "./index-696fd4ee.mjs";
import { r as Xn } from "./collapseMotion-0fff0c33.mjs";
import { r as Gt } from "./useState-d62b7544.mjs";
import { r as Zn } from "./index-292db55b.mjs";
import { r as Jn } from "./useRefs-07d4d46d.mjs";
import { r as Qn } from "./isMobile-1112823b.mjs";
import { r as er } from "./useMergedState-dbb38782.mjs";
import { r as tr } from "./omit-d14a337a.mjs";
function ar(t, a) {
  for (var e = 0; e < a.length; e++) {
    const u = a[e];
    if (typeof u != "string" && !Array.isArray(u)) {
      for (const d in u)
        if (d !== "default" && !(d in t)) {
          const n = Object.getOwnPropertyDescriptor(u, d);
          n && Object.defineProperty(t, d, n.get ? n : {
            enumerable: !0,
            get: () => u[d]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }));
}
var pa = {}, hn = {}, it = {}, ot = {}, Mt = {}, Ia;
function nr() {
  if (Ia)
    return Mt;
  Ia = 1;
  var t = be;
  Object.defineProperty(Mt, "__esModule", {
    value: !0
  }), Mt.default = u, Mt.useRafState = d;
  var a = oe, e = t(va());
  function u(n) {
    var r = (0, a.ref)(), o = (0, a.ref)(!1);
    function s() {
      for (var i = arguments.length, f = new Array(i), m = 0; m < i; m++)
        f[m] = arguments[m];
      o.value || (e.default.cancel(r.value), r.value = (0, e.default)(function() {
        n.apply(void 0, f);
      }));
    }
    return (0, a.onBeforeUnmount)(function() {
      o.value = !0, e.default.cancel(r.value);
    }), s;
  }
  function d(n) {
    var r = (0, a.ref)([]), o = (0, a.ref)(typeof n == "function" ? n() : n), s = u(function() {
      var f = o.value;
      r.value.forEach(function(m) {
        f = m(f);
      }), r.value = [], o.value = f;
    });
    function i(f) {
      r.value.push(f), s();
    }
    return [o, i];
  }
  return Mt;
}
var St = {}, Oa;
function rr() {
  if (Oa)
    return St;
  Oa = 1;
  var t = be;
  Object.defineProperty(St, "__esModule", {
    value: !0
  }), St.default = void 0;
  var a = oe, e = t(je()), u = t(ca()), d = t(et()), n = (0, a.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "TabNode",
    props: {
      id: {
        type: String
      },
      prefixCls: {
        type: String
      },
      tab: {
        type: Object
      },
      active: {
        type: Boolean
      },
      closable: {
        type: Boolean
      },
      editable: {
        type: Object
      },
      onClick: {
        type: Function
      },
      onResize: {
        type: Function
      },
      renderWrapper: {
        type: Function
      },
      removeAriaLabel: {
        type: String
      },
      // onRemove: { type: Function as PropType<() => void> },
      onFocus: {
        type: Function
      }
    },
    emits: ["click", "resize", "remove", "focus"],
    setup: function(o, s) {
      var i = s.expose, f = s.attrs, m = (0, a.ref)();
      function h(p) {
        var g;
        (g = o.tab) !== null && g !== void 0 && g.disabled || o.onClick(p);
      }
      i({
        domRef: m
      });
      function c(p) {
        var g;
        p.preventDefault(), p.stopPropagation(), o.editable.onEdit("remove", {
          key: (g = o.tab) === null || g === void 0 ? void 0 : g.key,
          event: p
        });
      }
      var _ = (0, a.computed)(function() {
        var p;
        return o.editable && o.closable !== !1 && !((p = o.tab) !== null && p !== void 0 && p.disabled);
      });
      return function() {
        var p, g, C = o.prefixCls, b = o.id, S = o.active, P = o.tab, U = P.key, L = P.tab, W = P.disabled, Z = P.closeIcon, M = o.renderWrapper, l = o.removeAriaLabel, v = o.editable, y = o.onFocus, T = "".concat(C, "-tab"), x = (0, a.createVNode)("div", {
          key: U,
          ref: m,
          class: (0, d.default)(T, (p = {}, (0, e.default)(p, "".concat(T, "-with-remove"), _.value), (0, e.default)(p, "".concat(T, "-active"), S), (0, e.default)(p, "".concat(T, "-disabled"), W), p)),
          style: f.style,
          onClick: h
        }, [(0, a.createVNode)("div", {
          role: "tab",
          "aria-selected": S,
          id: b && "".concat(b, "-tab-").concat(U),
          class: "".concat(T, "-btn"),
          "aria-controls": b && "".concat(b, "-panel-").concat(U),
          "aria-disabled": W,
          tabindex: W ? null : 0,
          onClick: function(O) {
            O.stopPropagation(), h(O);
          },
          onKeydown: function(O) {
            [u.default.SPACE, u.default.ENTER].includes(O.which) && (O.preventDefault(), h(O));
          },
          onFocus: y
        }, [typeof L == "function" ? L() : L]), _.value && (0, a.createVNode)("button", {
          type: "button",
          "aria-label": l || "remove",
          tabindex: 0,
          class: "".concat(T, "-remove"),
          onClick: function(O) {
            O.stopPropagation(), c(O);
          }
        }, [(Z == null ? void 0 : Z()) || ((g = v.removeIcon) === null || g === void 0 ? void 0 : g.call(v)) || "×"])]);
        return M ? M(x) : x;
      };
    }
  });
  return St.default = n, St;
}
var jt = {}, xa;
function ur() {
  if (xa)
    return jt;
  xa = 1;
  var t = be;
  Object.defineProperty(jt, "__esModule", {
    value: !0
  }), jt.default = d;
  var a = t(Ve()), e = oe, u = {
    width: 0,
    height: 0,
    left: 0,
    top: 0
  };
  function d(n, r) {
    var o = (0, e.ref)(/* @__PURE__ */ new Map());
    return (0, e.watchEffect)(function() {
      for (var s, i = /* @__PURE__ */ new Map(), f = n.value, m = r.value.get((s = f[0]) === null || s === void 0 ? void 0 : s.key) || u, h = m.left + m.width, c = 0; c < f.length; c += 1) {
        var _ = f[c].key, p = r.value.get(_);
        if (!p) {
          var g;
          p = r.value.get((g = f[c - 1]) === null || g === void 0 ? void 0 : g.key) || u;
        }
        var C = i.get(_) || (0, a.default)({}, p);
        C.right = h - C.left - C.width, i.set(_, C);
      }
      o.value = new Map(i);
    }), o;
  }
  return jt;
}
var dt = {}, Qt = {}, ft = {}, me = {}, Ra;
function at() {
  if (Ra)
    return me;
  Ra = 1;
  var t = be;
  Object.defineProperty(me, "__esModule", {
    value: !0
  }), me.useProvideMenu = me.useProvideForceRender = me.useProvideFirstLevel = me.useInjectMenu = me.useInjectForceRender = me.useInjectFirstLevel = me.default = me.MenuFirstLevelContextKey = me.MenuContextProvider = me.MenuContextKey = void 0;
  var a = t(Ve()), e = oe, u = Symbol("menuContextKey");
  me.MenuContextKey = u;
  var d = function(p) {
    (0, e.provide)(u, p);
  };
  me.useProvideMenu = d;
  var n = function() {
    return (0, e.inject)(u);
  };
  me.useInjectMenu = n;
  var r = Symbol("ForceRenderKey"), o = function(p) {
    (0, e.provide)(r, p);
  };
  me.useProvideForceRender = o;
  var s = function() {
    return (0, e.inject)(r, !1);
  };
  me.useInjectForceRender = s;
  var i = Symbol("menuFirstLevelContextKey");
  me.MenuFirstLevelContextKey = i;
  var f = function(p) {
    (0, e.provide)(i, p);
  };
  me.useProvideFirstLevel = f;
  var m = function() {
    return (0, e.inject)(i, !0);
  };
  me.useInjectFirstLevel = m;
  var h = (0, e.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "MenuContextProvider",
    inheritAttrs: !1,
    props: {
      mode: {
        type: String,
        default: void 0
      },
      overflowDisabled: {
        type: Boolean,
        default: void 0
      },
      isRootMenu: {
        type: Boolean,
        default: void 0
      }
    },
    setup: function(p, g) {
      var C = g.slots, b = n(), S = (0, a.default)({}, b);
      return p.mode !== void 0 && (S.mode = (0, e.toRef)(p, "mode")), p.isRootMenu !== void 0 && (S.isRootMenu = (0, e.toRef)(p, "isRootMenu")), p.overflowDisabled !== void 0 && (S.overflowDisabled = (0, e.toRef)(p, "overflowDisabled")), d(S), function() {
        var P;
        return (P = C.default) === null || P === void 0 ? void 0 : P.call(C);
      };
    }
  });
  me.MenuContextProvider = h;
  var c = d;
  return me.default = c, me;
}
var ea, Ta;
function lr() {
  if (Ta)
    return ea;
  Ta = 1;
  function t() {
  }
  return ea = t, ea;
}
var ta, Na;
function ir() {
  if (Na)
    return ta;
  Na = 1;
  var t = An(), a = lr(), e = mn(), u = 1 / 0, d = t && 1 / e(new t([, -0]))[1] == u ? function(n) {
    return new t(n);
  } : a;
  return ta = d, ta;
}
var aa, wa;
function or() {
  if (wa)
    return aa;
  wa = 1;
  var t = Vn(), a = Fn(), e = Wn(), u = jn(), d = ir(), n = mn(), r = 200;
  function o(s, i, f) {
    var m = -1, h = a, c = s.length, _ = !0, p = [], g = p;
    if (f)
      _ = !1, h = e;
    else if (c >= r) {
      var C = i ? null : d(s);
      if (C)
        return n(C);
      _ = !1, h = u, g = new t();
    } else
      g = i ? [] : p;
    e:
      for (; ++m < c; ) {
        var b = s[m], S = i ? i(b) : b;
        if (b = f || b !== 0 ? b : 0, _ && S === S) {
          for (var P = g.length; P--; )
            if (g[P] === S)
              continue e;
          i && g.push(S), p.push(b);
        } else
          h(g, S, f) || (g !== p && g.push(S), p.push(b));
      }
    return p;
  }
  return aa = o, aa;
}
var na, Ka;
function dr() {
  if (Ka)
    return na;
  Ka = 1;
  var t = or();
  function a(e) {
    return e && e.length ? t(e) : [];
  }
  return na = a, na;
}
var vt = {}, Ea;
function fr() {
  if (Ea)
    return vt;
  Ea = 1, Object.defineProperty(vt, "__esModule", {
    value: !0
  }), vt.SiderHookProviderKey = vt.SiderCollapsedKey = void 0;
  var t = Symbol("siderCollapsed");
  vt.SiderCollapsedKey = t;
  var a = Symbol("siderHookProvider");
  return vt.SiderHookProviderKey = a, vt;
}
var ct = {}, Se = {}, qa;
function Ht() {
  if (qa)
    return Se;
  qa = 1;
  var t = be;
  Object.defineProperty(Se, "__esModule", {
    value: !0
  }), Se.useProvideKeyPath = Se.useMeasure = Se.useInjectKeyPath = Se.default = Se.PathContext = Se.OVERFLOW_KEY = Se.KeyPathContext = void 0;
  var a = t(qt()), e = oe, u = "$$__vc-menu-more__key";
  Se.OVERFLOW_KEY = u;
  var d = Symbol("KeyPathContext");
  Se.KeyPathContext = d;
  var n = function() {
    return (0, e.inject)(d, {
      parentEventKeys: (0, e.computed)(function() {
        return [];
      }),
      parentKeys: (0, e.computed)(function() {
        return [];
      }),
      parentInfo: {}
    });
  };
  Se.useInjectKeyPath = n;
  var r = function(h, c, _) {
    var p = n(), g = p.parentEventKeys, C = p.parentKeys, b = (0, e.computed)(function() {
      return [].concat((0, a.default)(g.value), [h]);
    }), S = (0, e.computed)(function() {
      return [].concat((0, a.default)(C.value), [c]);
    });
    return (0, e.provide)(d, {
      parentEventKeys: b,
      parentKeys: S,
      parentInfo: _
    }), S;
  };
  Se.useProvideKeyPath = r;
  var o = Symbol("measure"), s = (0, e.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    setup: function(h, c) {
      var _ = c.slots;
      return (0, e.provide)(o, !0), function() {
        var p;
        return (p = _.default) === null || p === void 0 ? void 0 : p.call(_);
      };
    }
  });
  Se.PathContext = s;
  var i = function() {
    return (0, e.inject)(o, !1);
  };
  Se.useMeasure = i;
  var f = r;
  return Se.default = f, Se;
}
var Bt = {}, ka;
function gn() {
  if (ka)
    return Bt;
  ka = 1, Object.defineProperty(Bt, "__esModule", {
    value: !0
  }), Bt.default = e;
  var t = oe, a = at();
  function e(u) {
    var d = (0, a.useInjectMenu)(), n = d.mode, r = d.rtl, o = d.inlineIndent;
    return (0, t.computed)(function() {
      return n.value !== "inline" ? null : r.value ? {
        paddingRight: "".concat(u.value * o.value, "px")
      } : {
        paddingLeft: "".concat(u.value * o.value, "px")
      };
    });
  }
  return Bt;
}
var Da;
function _n() {
  if (Da)
    return ct;
  Da = 1;
  var t = be;
  Object.defineProperty(ct, "__esModule", {
    value: !0
  }), ct.menuItemProps = ct.default = void 0;
  var a = oe, e = t(Ve()), u = t(je()), d = t(qt()), n = t(bt), r = kt(), o = t(tt()), s = Ht(), i = at(), f = Dt(), m = t(Yn()), h = t(ca()), c = t(gn()), _ = t(sa()), p = t(Ut()), g = 0, C = function() {
    return {
      id: String,
      role: String,
      disabled: Boolean,
      danger: Boolean,
      title: {
        type: [String, Boolean],
        default: void 0
      },
      icon: o.default.any,
      onMouseenter: Function,
      onMouseleave: Function,
      onClick: Function,
      onKeydown: Function,
      onFocus: Function
    };
  };
  ct.menuItemProps = C;
  var b = (0, a.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "AMenuItem",
    inheritAttrs: !1,
    props: C(),
    // emits: ['mouseenter', 'mouseleave', 'click', 'keydown', 'focus'],
    slots: ["icon", "title"],
    setup: function(P, U) {
      var L = U.slots, W = U.emit, Z = U.attrs, M = (0, a.getCurrentInstance)(), l = (0, s.useMeasure)(), v = (0, n.default)(M.vnode.key) === "symbol" ? String(M.vnode.key) : M.vnode.key;
      (0, p.default)((0, n.default)(M.vnode.key) !== "symbol", "MenuItem", 'MenuItem `:key="'.concat(String(v), '"` not support Symbol type'));
      var y = "menu_item_".concat(++g, "_$$_").concat(v), T = (0, s.useInjectKeyPath)(), x = T.parentEventKeys, E = T.parentKeys, O = (0, i.useInjectMenu)(), F = O.prefixCls, H = O.activeKeys, K = O.disabled, I = O.changeActiveKeys, j = O.rtl, R = O.inlineCollapsed, V = O.siderCollapsed, D = O.onItemClick, A = O.selectedKeys, Y = O.registerMenuInfo, re = O.unRegisterMenuInfo, k = (0, i.useInjectFirstLevel)(), Q = (0, a.ref)(!1), he = (0, a.computed)(function() {
        return [].concat((0, d.default)(E.value), [v]);
      }), Ne = {
        eventKey: y,
        key: v,
        parentEventKeys: x,
        parentKeys: E,
        isLeaf: !0
      };
      Y(y, Ne), (0, a.onBeforeUnmount)(function() {
        re(y);
      }), (0, a.watch)(H, function() {
        Q.value = !!H.value.find(function(z) {
          return z === v;
        });
      }, {
        immediate: !0
      });
      var ce = (0, a.computed)(function() {
        return K.value || P.disabled;
      }), ue = (0, a.computed)(function() {
        return A.value.includes(v);
      }), fe = (0, a.computed)(function() {
        var z, q = "".concat(F.value, "-item");
        return z = {}, (0, u.default)(z, "".concat(q), !0), (0, u.default)(z, "".concat(q, "-danger"), P.danger), (0, u.default)(z, "".concat(q, "-active"), Q.value), (0, u.default)(z, "".concat(q, "-selected"), ue.value), (0, u.default)(z, "".concat(q, "-disabled"), ce.value), z;
      }), Ie = function(q) {
        return {
          key: v,
          eventKey: y,
          keyPath: he.value,
          eventKeyPath: [].concat((0, d.default)(x.value), [y]),
          domEvent: q,
          item: (0, e.default)((0, e.default)({}, P), Z)
        };
      }, Pe = function(q) {
        if (!ce.value) {
          var J = Ie(q);
          W("click", q), D(J);
        }
      }, qe = function(q) {
        ce.value || (I(he.value), W("mouseenter", q));
      }, xe = function(q) {
        ce.value || (I([]), W("mouseleave", q));
      }, te = function(q) {
        if (W("keydown", q), q.which === h.default.ENTER) {
          var J = Ie(q);
          W("click", q), D(J);
        }
      }, B = function(q) {
        I(he.value), W("focus", q);
      }, le = function(q, J) {
        var Re = (0, a.createVNode)("span", {
          class: "".concat(F.value, "-title-content")
        }, [J]);
        return (!q || (0, r.isValidElement)(J) && J.type === "span") && J && R.value && k && typeof J == "string" ? (0, a.createVNode)("div", {
          class: "".concat(F.value, "-inline-collapsed-noicon")
        }, [J.charAt(0)]) : Re;
      }, Ce = (0, c.default)((0, a.computed)(function() {
        return he.value.length;
      }));
      return function() {
        var z, q, J, Re;
        if (l)
          return null;
        var se = (z = P.title) !== null && z !== void 0 ? z : (q = L.title) === null || q === void 0 ? void 0 : q.call(L), Me = (0, r.flattenChildren)((J = L.default) === null || J === void 0 ? void 0 : J.call(L)), N = Me.length, w = se;
        typeof se > "u" ? w = k && N ? Me : "" : se === !1 && (w = "");
        var $ = {
          title: w
        };
        !V.value && !R.value && ($.title = null, $.visible = !1);
        var ve = {};
        P.role === "option" && (ve["aria-selected"] = ue.value);
        var ie = (0, r.getPropsSlot)(L, P, "icon");
        return (0, a.createVNode)(m.default, (0, e.default)((0, e.default)({}, $), {}, {
          placement: j.value ? "left" : "right",
          overlayClassName: "".concat(F.value, "-inline-collapsed-tooltip")
        }), {
          default: function() {
            return [(0, a.createVNode)(_.default.Item, (0, e.default)((0, e.default)((0, e.default)({
              component: "li"
            }, Z), {}, {
              id: P.id,
              style: (0, e.default)((0, e.default)({}, Z.style || {}), Ce.value),
              class: [fe.value, (Re = {}, (0, u.default)(Re, "".concat(Z.class), !!Z.class), (0, u.default)(Re, "".concat(F.value, "-item-only-child"), (ie ? N + 1 : N) === 1), Re)],
              role: P.role || "menuitem",
              tabindex: P.disabled ? null : -1,
              "data-menu-id": v,
              "aria-disabled": P.disabled
            }, ve), {}, {
              onMouseenter: qe,
              onMouseleave: xe,
              onClick: Pe,
              onKeydown: te,
              onFocus: B,
              title: typeof se == "string" ? se : void 0
            }), {
              default: function() {
                return [(0, f.cloneElement)(ie, {
                  class: "".concat(F.value, "-item-icon")
                }, !1), le(ie, Me)];
              }
            })];
          }
        });
      };
    }
  });
  return ct.default = b, ct;
}
var st = {}, It = {}, Xe = {}, Aa;
function vr() {
  if (Aa)
    return Xe;
  Aa = 1, Object.defineProperty(Xe, "__esModule", {
    value: !0
  }), Xe.placementsRtl = Xe.placements = Xe.default = void 0;
  var t = {
    adjustX: 1,
    adjustY: 1
  }, a = {
    topLeft: {
      points: ["bl", "tl"],
      overflow: t,
      offset: [0, -7]
    },
    bottomLeft: {
      points: ["tl", "bl"],
      overflow: t,
      offset: [0, 7]
    },
    leftTop: {
      points: ["tr", "tl"],
      overflow: t,
      offset: [-4, 0]
    },
    rightTop: {
      points: ["tl", "tr"],
      overflow: t,
      offset: [4, 0]
    }
  };
  Xe.placements = a;
  var e = {
    topLeft: {
      points: ["bl", "tl"],
      overflow: t,
      offset: [0, -7]
    },
    bottomLeft: {
      points: ["tl", "bl"],
      overflow: t,
      offset: [0, 7]
    },
    rightTop: {
      points: ["tr", "tl"],
      overflow: t,
      offset: [-4, 0]
    },
    leftTop: {
      points: ["tl", "tr"],
      overflow: t,
      offset: [4, 0]
    }
  };
  Xe.placementsRtl = e;
  var u = a;
  return Xe.default = u, Xe;
}
var Va;
function cr() {
  if (Va)
    return It;
  Va = 1;
  var t = be;
  Object.defineProperty(It, "__esModule", {
    value: !0
  }), It.default = void 0;
  var a = oe, e = t(je()), u = t(Ve()), d = t(bn()), n = at(), r = vr(), o = t(va()), s = t(et()), i = sn(), f = {
    horizontal: "bottomLeft",
    vertical: "rightTop",
    "vertical-left": "rightTop",
    "vertical-right": "leftTop"
  }, m = (0, a.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "PopupTrigger",
    inheritAttrs: !1,
    props: {
      prefixCls: String,
      mode: String,
      visible: Boolean,
      // popup: React.ReactNode;
      popupClassName: String,
      popupOffset: Array,
      disabled: Boolean,
      onVisibleChange: Function
    },
    slots: ["popup"],
    emits: ["visibleChange"],
    setup: function(c, _) {
      var p = _.slots, g = _.emit, C = (0, a.ref)(!1), b = (0, n.useInjectMenu)(), S = b.getPopupContainer, P = b.rtl, U = b.subMenuOpenDelay, L = b.subMenuCloseDelay, W = b.builtinPlacements, Z = b.triggerSubMenuAction, M = b.isRootMenu, l = b.forceSubMenuRender, v = b.motion, y = b.defaultMotions, T = (0, n.useInjectForceRender)(), x = (0, a.computed)(function() {
        return P.value ? (0, u.default)((0, u.default)({}, r.placementsRtl), W.value) : (0, u.default)((0, u.default)({}, r.placements), W.value);
      }), E = (0, a.computed)(function() {
        return f[c.mode];
      }), O = (0, a.ref)();
      (0, a.watch)(function() {
        return c.visible;
      }, function(K) {
        o.default.cancel(O.value), O.value = (0, o.default)(function() {
          C.value = K;
        });
      }, {
        immediate: !0
      }), (0, a.onBeforeUnmount)(function() {
        o.default.cancel(O.value);
      });
      var F = function(I) {
        g("visibleChange", I);
      }, H = (0, a.computed)(function() {
        var K, I, j = v.value || ((K = y.value) === null || K === void 0 ? void 0 : K[c.mode]) || ((I = y.value) === null || I === void 0 ? void 0 : I.other), R = typeof j == "function" ? j() : j;
        return R ? (0, i.getTransitionProps)(R.name, {
          css: !0
        }) : void 0;
      });
      return function() {
        var K = c.prefixCls, I = c.popupClassName, j = c.mode, R = c.popupOffset, V = c.disabled;
        return (0, a.createVNode)(d.default, {
          prefixCls: K,
          popupClassName: (0, s.default)("".concat(K, "-popup"), (0, e.default)({}, "".concat(K, "-rtl"), P.value), I),
          stretch: j === "horizontal" ? "minWidth" : null,
          getPopupContainer: M.value ? S.value : function(D) {
            return D.parentNode;
          },
          builtinPlacements: x.value,
          popupPlacement: E.value,
          popupVisible: C.value,
          popupAlign: R && {
            offset: R
          },
          action: V ? [] : [Z.value],
          mouseEnterDelay: U.value,
          mouseLeaveDelay: L.value,
          onPopupVisibleChange: F,
          forceRender: T || l.value,
          popupAnimation: H.value
        }, {
          popup: p.popup,
          default: p.default
        });
      };
    }
  });
  return It.default = m, It;
}
var Ot = {}, ja;
function Pn() {
  if (ja)
    return Ot;
  ja = 1;
  var t = be;
  Object.defineProperty(Ot, "__esModule", {
    value: !0
  }), Ot.default = void 0;
  var a = oe, e = t(Ve()), u = t(et()), d = at(), n = function(s, i) {
    var f, m = i.slots, h = i.attrs, c = (0, d.useInjectMenu)(), _ = c.prefixCls, p = c.mode;
    return (0, a.createVNode)("ul", (0, e.default)((0, e.default)({}, h), {}, {
      class: (0, u.default)(_.value, "".concat(_.value, "-sub"), "".concat(_.value, "-").concat(p.value === "inline" ? "inline" : "vertical")),
      "data-menu-list": !0
    }), [(f = m.default) === null || f === void 0 ? void 0 : f.call(m)]);
  };
  n.displayName = "SubMenuList";
  var r = n;
  return Ot.default = r, Ot;
}
var xt = {}, Ba;
function sr() {
  if (Ba)
    return xt;
  Ba = 1;
  var t = be;
  Object.defineProperty(xt, "__esModule", {
    value: !0
  }), xt.default = void 0;
  var a = oe, e = t(Ve()), u = t(sn()), d = at(), n = t(Pn()), r = (0, a.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "InlineSubMenuList",
    inheritAttrs: !1,
    props: {
      id: String,
      open: Boolean,
      keyPath: Array
    },
    setup: function(s, i) {
      var f = i.slots, m = (0, a.computed)(function() {
        return "inline";
      }), h = (0, d.useInjectMenu)(), c = h.motion, _ = h.mode, p = h.defaultMotions, g = (0, a.computed)(function() {
        return _.value === m.value;
      }), C = (0, a.ref)(!g.value), b = (0, a.computed)(function() {
        return g.value ? s.open : !1;
      });
      (0, a.watch)(_, function() {
        g.value && (C.value = !1);
      }, {
        flush: "post"
      });
      var S = (0, a.computed)(function() {
        var P, U, L = c.value || ((P = p.value) === null || P === void 0 ? void 0 : P[m.value]) || ((U = p.value) === null || U === void 0 ? void 0 : U.other), W = typeof L == "function" ? L() : L;
        return (0, e.default)((0, e.default)({}, W), {}, {
          appear: s.keyPath.length <= 1
        });
      });
      return function() {
        var P;
        return C.value ? null : (0, a.createVNode)(d.MenuContextProvider, {
          mode: m.value
        }, {
          default: function() {
            return [(0, a.createVNode)(u.default, S.value, {
              default: function() {
                return [(0, a.withDirectives)((0, a.createVNode)(n.default, {
                  id: s.id
                }, {
                  default: function() {
                    return [(P = f.default) === null || P === void 0 ? void 0 : P.call(f)];
                  }
                }), [[a.vShow, b.value]])];
              }
            })];
          }
        });
      };
    }
  });
  return xt.default = r, xt;
}
var La;
function Cn() {
  if (La)
    return st;
  La = 1;
  var t = be, a = bt;
  Object.defineProperty(st, "__esModule", {
    value: !0
  }), st.subMenuProps = st.default = void 0;
  var e = oe, u = t(je()), d = t(Ve()), n = t(qt()), r = t(bt), o = t(tt()), s = U(Ht()), i = at(), f = kt(), m = t(et()), h = t(gn()), c = t(cr()), _ = t(Pn()), p = t(sr()), g = Dt(), C = t(sa()), b = t(Ut()), S = t(Kn());
  function P(M) {
    if (typeof WeakMap != "function")
      return null;
    var l = /* @__PURE__ */ new WeakMap(), v = /* @__PURE__ */ new WeakMap();
    return (P = function(T) {
      return T ? v : l;
    })(M);
  }
  function U(M, l) {
    if (!l && M && M.__esModule)
      return M;
    if (M === null || a(M) !== "object" && typeof M != "function")
      return { default: M };
    var v = P(l);
    if (v && v.has(M))
      return v.get(M);
    var y = {}, T = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var x in M)
      if (x !== "default" && Object.prototype.hasOwnProperty.call(M, x)) {
        var E = T ? Object.getOwnPropertyDescriptor(M, x) : null;
        E && (E.get || E.set) ? Object.defineProperty(y, x, E) : y[x] = M[x];
      }
    return y.default = M, v && v.set(M, y), y;
  }
  var L = 0, W = function() {
    return {
      icon: o.default.any,
      title: o.default.any,
      disabled: Boolean,
      level: Number,
      popupClassName: String,
      popupOffset: Array,
      internalPopupClose: Boolean,
      eventKey: String,
      expandIcon: Function,
      onMouseenter: Function,
      onMouseleave: Function,
      onTitleClick: Function
    };
  };
  st.subMenuProps = W;
  var Z = (0, e.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "ASubMenu",
    inheritAttrs: !1,
    props: W(),
    slots: ["icon", "title", "expandIcon"],
    // emits: ['titleClick', 'mouseenter', 'mouseleave'],
    setup: function(l, v) {
      var y, T, x = v.slots, E = v.attrs, O = v.emit;
      (0, i.useProvideFirstLevel)(!1);
      var F = (0, s.useMeasure)(), H = (0, e.getCurrentInstance)(), K = (0, r.default)(H.vnode.key) === "symbol" ? String(H.vnode.key) : H.vnode.key;
      (0, b.default)((0, r.default)(H.vnode.key) !== "symbol", "SubMenu", 'SubMenu `:key="'.concat(String(K), '"` not support Symbol type'));
      var I = (0, S.default)(K) ? K : "sub_menu_".concat(++L, "_$$_not_set_key"), j = (y = l.eventKey) !== null && y !== void 0 ? y : (0, S.default)(K) ? "sub_menu_".concat(++L, "_$$_").concat(K) : I, R = (0, s.useInjectKeyPath)(), V = R.parentEventKeys, D = R.parentInfo, A = R.parentKeys, Y = (0, e.computed)(function() {
        return [].concat((0, n.default)(A.value), [I]);
      }), re = (0, e.ref)([]), k = {
        eventKey: j,
        key: I,
        parentEventKeys: V,
        childrenEventKeys: re,
        parentKeys: A
      };
      (T = D.childrenEventKeys) === null || T === void 0 || T.value.push(j), (0, e.onBeforeUnmount)(function() {
        if (D.childrenEventKeys) {
          var ye;
          D.childrenEventKeys.value = (ye = D.childrenEventKeys) === null || ye === void 0 ? void 0 : ye.value.filter(function(ae) {
            return ae != j;
          });
        }
      }), (0, s.default)(j, I, k);
      var Q = (0, i.useInjectMenu)(), he = Q.prefixCls, Ne = Q.activeKeys, ce = Q.disabled, ue = Q.changeActiveKeys, fe = Q.mode, Ie = Q.inlineCollapsed, Pe = Q.antdMenuTheme, qe = Q.openKeys, xe = Q.overflowDisabled, te = Q.onOpenChange, B = Q.registerMenuInfo, le = Q.unRegisterMenuInfo, Ce = Q.selectedSubMenuKeys, z = Q.expandIcon, q = K != null, J = !F && ((0, i.useInjectForceRender)() || !q);
      (0, i.useProvideForceRender)(J), (F && q || !F && !q || J) && (B(j, k), (0, e.onBeforeUnmount)(function() {
        le(j);
      }));
      var Re = (0, e.computed)(function() {
        return "".concat(he.value, "-submenu");
      }), se = (0, e.computed)(function() {
        return ce.value || l.disabled;
      }), Me = (0, e.ref)(), N = (0, e.ref)(), w = (0, e.computed)(function() {
        return qe.value.includes(I);
      }), $ = (0, e.computed)(function() {
        return !xe.value && w.value;
      }), ve = (0, e.computed)(function() {
        return Ce.value.includes(I);
      }), ie = (0, e.ref)(!1);
      (0, e.watch)(Ne, function() {
        ie.value = !!Ne.value.find(function(ye) {
          return ye === I;
        });
      }, {
        immediate: !0
      });
      var pe = function(ae) {
        se.value || (O("titleClick", ae, I), fe.value === "inline" && te(I, !w.value));
      }, ge = function(ae) {
        se.value || (ue(Y.value), O("mouseenter", ae));
      }, ee = function(ae) {
        se.value || (ue([]), O("mouseleave", ae));
      }, ke = (0, h.default)((0, e.computed)(function() {
        return Y.value.length;
      })), Ue = function(ae) {
        fe.value !== "inline" && te(I, ae);
      }, ze = function() {
        ue(Y.value);
      }, Be = j && "".concat(j, "-popup"), gt = (0, e.computed)(function() {
        return (0, m.default)(he.value, "".concat(he.value, "-").concat(Pe.value), l.popupClassName);
      }), Je = function(ae, Te) {
        if (!Te)
          return Ie.value && !A.value.length && ae && typeof ae == "string" ? (0, e.createVNode)("div", {
            class: "".concat(he.value, "-inline-collapsed-noicon")
          }, [ae.charAt(0)]) : (0, e.createVNode)("span", {
            class: "".concat(he.value, "-title-content")
          }, [ae]);
        var De = (0, f.isValidElement)(ae) && ae.type === "span";
        return (0, e.createVNode)(e.Fragment, null, [(0, g.cloneElement)(Te, {
          class: "".concat(he.value, "-item-icon")
        }, !1), De ? ae : (0, e.createVNode)("span", {
          class: "".concat(he.value, "-title-content")
        }, [ae])]);
      }, _t = (0, e.computed)(function() {
        return fe.value !== "inline" && Y.value.length > 1 ? "vertical" : fe.value;
      }), nt = (0, e.computed)(function() {
        return fe.value === "horizontal" ? "vertical" : fe.value;
      }), rt = (0, e.computed)(function() {
        return _t.value === "horizontal" ? "vertical" : _t.value;
      }), yt = function() {
        var ae = Re.value, Te = (0, f.getPropsSlot)(x, l, "icon"), De = l.expandIcon || x.expandIcon || z.value, Le = Je((0, f.getPropsSlot)(x, l, "title"), Te);
        return (0, e.createVNode)("div", {
          style: ke.value,
          class: "".concat(ae, "-title"),
          tabindex: se.value ? null : -1,
          ref: Me,
          title: typeof Le == "string" ? Le : null,
          "data-menu-id": I,
          "aria-expanded": $.value,
          "aria-haspopup": !0,
          "aria-controls": Be,
          "aria-disabled": se.value,
          onClick: pe,
          onFocus: ze
        }, [Le, fe.value !== "horizontal" && De ? De((0, d.default)((0, d.default)({}, l), {}, {
          isOpen: $.value
        })) : (0, e.createVNode)("i", {
          class: "".concat(ae, "-arrow")
        }, null)]);
      };
      return function() {
        var ye;
        if (F) {
          var ae;
          return q ? (ae = x.default) === null || ae === void 0 ? void 0 : ae.call(x) : null;
        }
        var Te = Re.value, De = function() {
          return null;
        };
        return !xe.value && fe.value !== "inline" ? De = function() {
          return (0, e.createVNode)(c.default, {
            mode: _t.value,
            prefixCls: Te,
            visible: !l.internalPopupClose && $.value,
            popupClassName: gt.value,
            popupOffset: l.popupOffset,
            disabled: se.value,
            onVisibleChange: Ue
          }, {
            default: function() {
              return [yt()];
            },
            popup: function() {
              return (0, e.createVNode)(i.MenuContextProvider, {
                mode: rt.value,
                isRootMenu: !1
              }, {
                default: function() {
                  return [(0, e.createVNode)(_.default, {
                    id: Be,
                    ref: N
                  }, {
                    default: x.default
                  })];
                }
              });
            }
          });
        } : De = function() {
          return (0, e.createVNode)(c.default, null, {
            default: yt
          });
        }, (0, e.createVNode)(i.MenuContextProvider, {
          mode: nt.value
        }, {
          default: function() {
            return [(0, e.createVNode)(C.default.Item, (0, d.default)((0, d.default)({
              component: "li"
            }, E), {}, {
              role: "none",
              class: (0, m.default)(Te, "".concat(Te, "-").concat(fe.value), E.class, (ye = {}, (0, u.default)(ye, "".concat(Te, "-open"), $.value), (0, u.default)(ye, "".concat(Te, "-active"), ie.value), (0, u.default)(ye, "".concat(Te, "-selected"), ve.value), (0, u.default)(ye, "".concat(Te, "-disabled"), se.value), ye)),
              onMouseenter: ge,
              onMouseleave: ee,
              "data-submenu-id": I
            }), {
              default: function() {
                return (0, e.createVNode)(e.Fragment, null, [De(), !xe.value && (0, e.createVNode)(p.default, {
                  id: Be,
                  open: $.value,
                  keyPath: Y.value
                }, {
                  default: x.default
                })]);
              }
            })];
          }
        });
      };
    }
  });
  return st.default = Z, st;
}
var ra = {}, Lt = {}, Fa;
function pr() {
  if (Fa)
    return Lt;
  Fa = 1, Object.defineProperty(Lt, "__esModule", { value: !0 });
  var t = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z" } }] }, name: "ellipsis", theme: "outlined" };
  return Lt.default = t, Lt;
}
var Wa;
function Mn() {
  return Wa || (Wa = 1, function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var a = oe, e = d(pr()), u = d(pn());
    function d(i) {
      return i && i.__esModule ? i : { default: i };
    }
    function n(i) {
      for (var f = 1; f < arguments.length; f++) {
        var m = arguments[f] != null ? Object(arguments[f]) : {}, h = Object.keys(m);
        typeof Object.getOwnPropertySymbols == "function" && (h = h.concat(Object.getOwnPropertySymbols(m).filter(function(c) {
          return Object.getOwnPropertyDescriptor(m, c).enumerable;
        }))), h.forEach(function(c) {
          r(i, c, m[c]);
        });
      }
      return i;
    }
    function r(i, f, m) {
      return f in i ? Object.defineProperty(i, f, { value: m, enumerable: !0, configurable: !0, writable: !0 }) : i[f] = m, i;
    }
    var o = function(f, m) {
      var h = n({}, f, m.attrs);
      return (0, a.createVNode)(u.default, n({}, h, {
        icon: e.default
      }), null);
    };
    o.displayName = "EllipsisOutlined", o.inheritAttrs = !1;
    var s = o;
    t.default = s;
  }(ra)), ra;
}
var $a;
function mr() {
  if ($a)
    return ft;
  $a = 1;
  var t = be, a = bt;
  Object.defineProperty(ft, "__esModule", {
    value: !0
  }), ft.menuProps = ft.default = void 0;
  var e = oe, u = t(je()), d = t(Ve()), n = t(qt()), r = t(Dn()), o = U(at()), s = t(fa()), i = t(Ut()), f = t(dr()), m = fr(), h = kt(), c = t(sa()), _ = t(_n()), p = t(Cn()), g = t(Mn()), C = Dt(), b = Ht(), S = t(Xn());
  function P(M) {
    if (typeof WeakMap != "function")
      return null;
    var l = /* @__PURE__ */ new WeakMap(), v = /* @__PURE__ */ new WeakMap();
    return (P = function(T) {
      return T ? v : l;
    })(M);
  }
  function U(M, l) {
    if (!l && M && M.__esModule)
      return M;
    if (M === null || a(M) !== "object" && typeof M != "function")
      return { default: M };
    var v = P(l);
    if (v && v.has(M))
      return v.get(M);
    var y = {}, T = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var x in M)
      if (x !== "default" && Object.prototype.hasOwnProperty.call(M, x)) {
        var E = T ? Object.getOwnPropertyDescriptor(M, x) : null;
        E && (E.get || E.set) ? Object.defineProperty(y, x, E) : y[x] = M[x];
      }
    return y.default = M, v && v.set(M, y), y;
  }
  var L = function() {
    return {
      id: String,
      prefixCls: String,
      disabled: Boolean,
      inlineCollapsed: Boolean,
      disabledOverflow: Boolean,
      forceSubMenuRender: Boolean,
      openKeys: Array,
      selectedKeys: Array,
      activeKey: String,
      selectable: {
        type: Boolean,
        default: !0
      },
      multiple: {
        type: Boolean,
        default: !1
      },
      motion: Object,
      theme: {
        type: String,
        default: "light"
      },
      mode: {
        type: String,
        default: "vertical"
      },
      inlineIndent: {
        type: Number,
        default: 24
      },
      subMenuOpenDelay: {
        type: Number,
        default: 0.1
      },
      subMenuCloseDelay: {
        type: Number,
        default: 0.1
      },
      builtinPlacements: {
        type: Object
      },
      triggerSubMenuAction: {
        type: String,
        default: "hover"
      },
      getPopupContainer: Function,
      expandIcon: Function,
      onOpenChange: Function,
      onSelect: Function,
      onDeselect: Function,
      onClick: [Function, Array],
      onFocus: Function,
      onBlur: Function,
      onMousedown: Function,
      "onUpdate:openKeys": Function,
      "onUpdate:selectedKeys": Function,
      "onUpdate:activeKey": Function
    };
  };
  ft.menuProps = L;
  var W = [], Z = (0, e.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "AMenu",
    inheritAttrs: !1,
    props: L(),
    slots: ["expandIcon", "overflowedIndicator"],
    setup: function(l, v) {
      var y = v.slots, T = v.emit, x = v.attrs, E = (0, s.default)("menu", l), O = E.prefixCls, F = E.direction, H = E.getPrefixCls, K = (0, e.ref)({}), I = (0, e.inject)(m.SiderCollapsedKey, (0, e.ref)(void 0)), j = (0, e.computed)(function() {
        return I.value !== void 0 ? I.value : l.inlineCollapsed;
      }), R = (0, e.ref)(!1);
      (0, e.onMounted)(function() {
        R.value = !0;
      }), (0, e.watchEffect)(function() {
        (0, i.default)(!(l.inlineCollapsed === !0 && l.mode !== "inline"), "Menu", "`inlineCollapsed` should only be used when `mode` is inline."), (0, i.default)(!(I.value !== void 0 && l.inlineCollapsed === !0), "Menu", "`inlineCollapsed` not control Menu under Sider. Should set `collapsed` on Sider instead.");
      });
      var V = (0, e.ref)([]), D = (0, e.ref)([]), A = (0, e.ref)({});
      (0, e.watch)(K, function() {
        for (var N = {}, w = 0, $ = Object.values(K.value); w < $.length; w++) {
          var ve = $[w];
          N[ve.key] = ve;
        }
        A.value = N;
      }, {
        flush: "post"
      }), (0, e.watchEffect)(function() {
        if (l.activeKey !== void 0) {
          var N = [], w = l.activeKey ? A.value[l.activeKey] : void 0;
          w && l.activeKey !== void 0 ? N = (0, f.default)([].concat((0, e.unref)(w.parentKeys), l.activeKey)) : N = [], (0, r.default)(V.value, N) || (V.value = N);
        }
      }), (0, e.watch)(function() {
        return l.selectedKeys;
      }, function(N) {
        N && (D.value = N.slice());
      }, {
        immediate: !0,
        deep: !0
      });
      var Y = (0, e.ref)([]);
      (0, e.watch)([A, D], function() {
        var N = [];
        D.value.forEach(function(w) {
          var $ = A.value[w];
          $ && (N = N.concat((0, e.unref)($.parentKeys)));
        }), N = (0, f.default)(N), (0, r.default)(Y.value, N) || (Y.value = N);
      }, {
        immediate: !0
      });
      var re = function(w) {
        if (l.selectable) {
          var $ = w.key, ve = D.value.includes($), ie;
          l.multiple ? ve ? ie = D.value.filter(function(ge) {
            return ge !== $;
          }) : ie = [].concat((0, n.default)(D.value), [$]) : ie = [$];
          var pe = (0, d.default)((0, d.default)({}, w), {}, {
            selectedKeys: ie
          });
          (0, r.default)(ie, D.value) || (l.selectedKeys === void 0 && (D.value = ie), T("update:selectedKeys", ie), ve && l.multiple ? T("deselect", pe) : T("select", pe)), ue.value !== "inline" && !l.multiple && k.value.length && Pe(W);
        }
      }, k = (0, e.ref)([]);
      (0, e.watch)(function() {
        return l.openKeys;
      }, function() {
        var N = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : k.value;
        (0, r.default)(k.value, N) || (k.value = N.slice());
      }, {
        immediate: !0,
        deep: !0
      });
      var Q, he = function(w) {
        clearTimeout(Q), Q = setTimeout(function() {
          l.activeKey === void 0 && (V.value = w), T("update:activeKey", w[w.length - 1]);
        });
      }, Ne = (0, e.computed)(function() {
        return !!l.disabled;
      }), ce = (0, e.computed)(function() {
        return F.value === "rtl";
      }), ue = (0, e.ref)("vertical"), fe = (0, e.ref)(!1);
      (0, e.watchEffect)(function() {
        (l.mode === "inline" || l.mode === "vertical") && j.value ? (ue.value = "vertical", fe.value = j.value) : (ue.value = l.mode, fe.value = !1);
      });
      var Ie = (0, e.computed)(function() {
        return ue.value === "inline";
      }), Pe = function(w) {
        k.value = w, T("update:openKeys", w), T("openChange", w);
      }, qe = (0, e.ref)(k.value), xe = (0, e.ref)(!1);
      (0, e.watch)(k, function() {
        Ie.value && (qe.value = k.value);
      }, {
        immediate: !0
      }), (0, e.watch)(Ie, function() {
        if (!xe.value) {
          xe.value = !0;
          return;
        }
        Ie.value ? k.value = qe.value : Pe(W);
      }, {
        immediate: !0
      });
      var te = (0, e.computed)(function() {
        var N;
        return N = {}, (0, u.default)(N, "".concat(O.value), !0), (0, u.default)(N, "".concat(O.value, "-root"), !0), (0, u.default)(N, "".concat(O.value, "-").concat(ue.value), !0), (0, u.default)(N, "".concat(O.value, "-inline-collapsed"), fe.value), (0, u.default)(N, "".concat(O.value, "-rtl"), ce.value), (0, u.default)(N, "".concat(O.value, "-").concat(l.theme), !0), N;
      }), B = (0, e.computed)(function() {
        return H();
      }), le = (0, e.computed)(function() {
        return {
          horizontal: {
            name: "".concat(B.value, "-slide-up")
          },
          inline: S.default,
          other: {
            name: "".concat(B.value, "-zoom-big")
          }
        };
      });
      (0, o.useProvideFirstLevel)(!0);
      var Ce = function N() {
        var w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], $ = [], ve = K.value;
        return w.forEach(function(ie) {
          var pe = ve[ie], ge = pe.key, ee = pe.childrenEventKeys;
          $.push.apply($, [ge].concat((0, n.default)(N((0, e.unref)(ee)))));
        }), $;
      }, z = function(w) {
        T("click", w), re(w);
      }, q = function(w, $) {
        var ve, ie = ((ve = A.value[w]) === null || ve === void 0 ? void 0 : ve.childrenEventKeys) || [], pe = k.value.filter(function(ee) {
          return ee !== w;
        });
        if ($)
          pe.push(w);
        else if (ue.value !== "inline") {
          var ge = Ce((0, e.unref)(ie));
          pe = (0, f.default)(pe.filter(function(ee) {
            return !ge.includes(ee);
          }));
        }
        (0, r.default)(k, pe) || Pe(pe);
      }, J = function(w, $) {
        K.value = (0, d.default)((0, d.default)({}, K.value), {}, (0, u.default)({}, w, $));
      }, Re = function(w) {
        delete K.value[w], K.value = (0, d.default)({}, K.value);
      }, se = (0, e.ref)(0), Me = (0, e.computed)(function() {
        return l.expandIcon || y.expandIcon ? function(N) {
          var w = l.expandIcon || y.expandIcon;
          return w = typeof w == "function" ? w(N) : w, (0, C.cloneElement)(w, {
            class: "".concat(O.value, "-submenu-expand-icon")
          }, !1);
        } : null;
      });
      return (0, o.default)({
        store: K,
        prefixCls: O,
        activeKeys: V,
        openKeys: k,
        selectedKeys: D,
        changeActiveKeys: he,
        disabled: Ne,
        rtl: ce,
        mode: ue,
        inlineIndent: (0, e.computed)(function() {
          return l.inlineIndent;
        }),
        subMenuCloseDelay: (0, e.computed)(function() {
          return l.subMenuCloseDelay;
        }),
        subMenuOpenDelay: (0, e.computed)(function() {
          return l.subMenuOpenDelay;
        }),
        builtinPlacements: (0, e.computed)(function() {
          return l.builtinPlacements;
        }),
        triggerSubMenuAction: (0, e.computed)(function() {
          return l.triggerSubMenuAction;
        }),
        getPopupContainer: (0, e.computed)(function() {
          return l.getPopupContainer;
        }),
        inlineCollapsed: fe,
        antdMenuTheme: (0, e.computed)(function() {
          return l.theme;
        }),
        siderCollapsed: I,
        defaultMotions: (0, e.computed)(function() {
          return R.value ? le.value : null;
        }),
        motion: (0, e.computed)(function() {
          return R.value ? l.motion : null;
        }),
        overflowDisabled: (0, e.ref)(void 0),
        onOpenChange: q,
        onItemClick: z,
        registerMenuInfo: J,
        unRegisterMenuInfo: Re,
        selectedSubMenuKeys: Y,
        isRootMenu: (0, e.ref)(!0),
        expandIcon: Me,
        forceSubMenuRender: (0, e.computed)(function() {
          return l.forceSubMenuRender;
        })
      }), function() {
        var N, w, $ = (0, h.flattenChildren)((N = y.default) === null || N === void 0 ? void 0 : N.call(y)), ve = se.value >= $.length - 1 || ue.value !== "horizontal" || l.disabledOverflow, ie = ue.value !== "horizontal" || l.disabledOverflow ? $ : (
          // Need wrap for overflow dropdown that do not response for open
          $.map(function(ge, ee) {
            return (
              // Always wrap provider to avoid sub node re-mount
              (0, e.createVNode)(o.MenuContextProvider, {
                key: ge.key,
                overflowDisabled: ee > se.value
              }, {
                default: function() {
                  return ge;
                }
              })
            );
          })
        ), pe = ((w = y.overflowedIndicator) === null || w === void 0 ? void 0 : w.call(y)) || (0, e.createVNode)(g.default, null, null);
        return (0, e.createVNode)(c.default, (0, d.default)((0, d.default)({}, x), {}, {
          onMousedown: l.onMousedown,
          prefixCls: "".concat(O.value, "-overflow"),
          component: "ul",
          itemComponent: _.default,
          class: [te.value, x.class],
          role: "menu",
          id: l.id,
          data: ie,
          renderRawItem: function(ee) {
            return ee;
          },
          renderRawRest: function(ee) {
            var ke = ee.length, Ue = ke ? $.slice(-ke) : null;
            return (0, e.createVNode)(e.Fragment, null, [(0, e.createVNode)(p.default, {
              eventKey: b.OVERFLOW_KEY,
              key: b.OVERFLOW_KEY,
              title: pe,
              disabled: ve,
              internalPopupClose: ke === 0
            }, {
              default: function() {
                return Ue;
              }
            }), (0, e.createVNode)(b.PathContext, null, {
              default: function() {
                return [(0, e.createVNode)(p.default, {
                  eventKey: b.OVERFLOW_KEY,
                  key: b.OVERFLOW_KEY,
                  title: pe,
                  disabled: ve,
                  internalPopupClose: ke === 0
                }, {
                  default: function() {
                    return Ue;
                  }
                })];
              }
            })]);
          },
          maxCount: ue.value !== "horizontal" || l.disabledOverflow ? c.default.INVALIDATE : c.default.RESPONSIVE,
          ssr: "full",
          "data-menu-list": !0,
          onVisibleChange: function(ee) {
            se.value = ee;
          }
        }), {
          default: function() {
            return [(0, e.createVNode)(e.Teleport, {
              to: "body"
            }, {
              default: function() {
                return [(0, e.createVNode)("div", {
                  style: {
                    display: "none"
                  },
                  "aria-hidden": !0
                }, [(0, e.createVNode)(b.PathContext, null, {
                  default: function() {
                    return [ie];
                  }
                })])];
              }
            })];
          }
        });
      };
    }
  });
  return ft.default = Z, ft;
}
var pt = {}, Ua;
function br() {
  if (Ua)
    return pt;
  Ua = 1;
  var t = be;
  Object.defineProperty(pt, "__esModule", {
    value: !0
  }), pt.menuItemGroupProps = pt.default = void 0;
  var a = oe, e = t(Ve()), u = kt(), d = t(tt()), n = at(), r = Ht(), o = function() {
    return {
      title: d.default.any
    };
  };
  pt.menuItemGroupProps = o;
  var s = (0, a.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "AMenuItemGroup",
    inheritAttrs: !1,
    props: o(),
    slots: ["title"],
    setup: function(f, m) {
      var h = m.slots, c = m.attrs, _ = (0, n.useInjectMenu)(), p = _.prefixCls, g = (0, a.computed)(function() {
        return "".concat(p.value, "-item-group");
      }), C = (0, r.useMeasure)();
      return function() {
        var b, S;
        return C ? (b = h.default) === null || b === void 0 ? void 0 : b.call(h) : (0, a.createVNode)("li", (0, e.default)((0, e.default)({}, c), {}, {
          onClick: function(U) {
            return U.stopPropagation();
          },
          class: g.value
        }), [(0, a.createVNode)("div", {
          title: typeof f.title == "string" ? f.title : void 0,
          class: "".concat(g.value, "-title")
        }, [(0, u.getPropsSlot)(h, f, "title")]), (0, a.createVNode)("ul", {
          class: "".concat(g.value, "-list")
        }, [(S = h.default) === null || S === void 0 ? void 0 : S.call(h)])]);
      };
    }
  });
  return pt.default = s, pt;
}
var mt = {}, za;
function yr() {
  if (za)
    return mt;
  za = 1;
  var t = be;
  Object.defineProperty(mt, "__esModule", {
    value: !0
  }), mt.menuDividerProps = mt.default = void 0;
  var a = oe, e = t(je()), u = t(fa()), d = function() {
    return {
      prefixCls: String,
      dashed: Boolean
    };
  };
  mt.menuDividerProps = d;
  var n = (0, a.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "AMenuDivider",
    props: d(),
    setup: function(o) {
      var s = (0, u.default)("menu", o), i = s.prefixCls, f = (0, a.computed)(function() {
        var m;
        return m = {}, (0, e.default)(m, "".concat(i.value, "-item-divider"), !0), (0, e.default)(m, "".concat(i.value, "-item-divider-dashed"), !!o.dashed), m;
      });
      return function() {
        return (0, a.createVNode)("li", {
          class: f.value
        }, null);
      };
    }
  });
  return mt.default = n, mt;
}
var Ga;
function hr() {
  return Ga || (Ga = 1, function(t) {
    var a = be;
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "Divider", {
      enumerable: !0,
      get: function() {
        return r.default;
      }
    }), Object.defineProperty(t, "Item", {
      enumerable: !0,
      get: function() {
        return u.default;
      }
    }), Object.defineProperty(t, "ItemGroup", {
      enumerable: !0,
      get: function() {
        return n.default;
      }
    }), Object.defineProperty(t, "MenuDivider", {
      enumerable: !0,
      get: function() {
        return r.default;
      }
    }), Object.defineProperty(t, "MenuItem", {
      enumerable: !0,
      get: function() {
        return u.default;
      }
    }), Object.defineProperty(t, "MenuItemGroup", {
      enumerable: !0,
      get: function() {
        return n.default;
      }
    }), Object.defineProperty(t, "SubMenu", {
      enumerable: !0,
      get: function() {
        return d.default;
      }
    }), t.default = void 0;
    var e = a(mr()), u = a(_n()), d = a(Cn()), n = a(br()), r = a(yr());
    e.default.install = function(s) {
      return s.component(e.default.name, e.default), s.component(u.default.name, u.default), s.component(d.default.name, d.default), s.component(r.default.name, r.default), s.component(n.default.name, n.default), s;
    }, e.default.Item = u.default, e.default.Divider = r.default, e.default.SubMenu = d.default, e.default.ItemGroup = n.default;
    var o = e.default;
    t.default = o;
  }(Qt)), Qt;
}
var Rt = {}, Tt = {}, Nt = {}, Ha;
function gr() {
  if (Ha)
    return Nt;
  Ha = 1, Object.defineProperty(Nt, "__esModule", {
    value: !0
  }), Nt.default = void 0;
  var t = {
    adjustX: 1,
    adjustY: 1
  }, a = [0, 0], e = {
    topLeft: {
      points: ["bl", "tl"],
      overflow: t,
      offset: [0, -4],
      targetOffset: a
    },
    topCenter: {
      points: ["bc", "tc"],
      overflow: t,
      offset: [0, -4],
      targetOffset: a
    },
    topRight: {
      points: ["br", "tr"],
      overflow: t,
      offset: [0, -4],
      targetOffset: a
    },
    bottomLeft: {
      points: ["tl", "bl"],
      overflow: t,
      offset: [0, 4],
      targetOffset: a
    },
    bottomCenter: {
      points: ["tc", "bc"],
      overflow: t,
      offset: [0, 4],
      targetOffset: a
    },
    bottomRight: {
      points: ["tr", "br"],
      overflow: t,
      offset: [0, 4],
      targetOffset: a
    }
  }, u = e;
  return Nt.default = u, Nt;
}
var Ya;
function _r() {
  if (Ya)
    return Tt;
  Ya = 1;
  var t = be;
  Object.defineProperty(Tt, "__esModule", {
    value: !0
  }), Tt.default = void 0;
  var a = oe, e = t(Ve()), u = t(je()), d = t(En()), n = t(tt()), r = t(bn()), o = t(gr()), s = Dt(), i = t(et()), f = ["prefixCls", "arrow", "showAction", "overlayStyle", "trigger", "placement", "align", "getPopupContainer", "transitionName", "animation", "overlayClassName"], m = (0, a.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    props: {
      minOverlayWidthMatchTrigger: {
        type: Boolean,
        default: void 0
      },
      arrow: {
        type: Boolean,
        default: !1
      },
      prefixCls: n.default.string.def("rc-dropdown"),
      transitionName: String,
      overlayClassName: n.default.string.def(""),
      openClassName: String,
      animation: n.default.any,
      align: n.default.object,
      overlayStyle: {
        type: Object,
        default: void 0
      },
      placement: n.default.string.def("bottomLeft"),
      overlay: n.default.any,
      trigger: n.default.oneOfType([n.default.string, n.default.arrayOf(n.default.string)]).def("hover"),
      alignPoint: {
        type: Boolean,
        default: void 0
      },
      showAction: n.default.array,
      hideAction: n.default.array,
      getPopupContainer: Function,
      visible: {
        type: Boolean,
        default: void 0
      },
      defaultVisible: {
        type: Boolean,
        default: !1
      },
      mouseEnterDelay: n.default.number.def(0.15),
      mouseLeaveDelay: n.default.number.def(0.1)
    },
    emits: ["visibleChange", "overlayClick"],
    slots: ["overlay"],
    setup: function(c, _) {
      var p = _.slots, g = _.emit, C = _.expose, b = (0, a.ref)(!!c.visible);
      (0, a.watch)(function() {
        return c.visible;
      }, function(l) {
        l !== void 0 && (b.value = l);
      });
      var S = (0, a.ref)();
      C({
        triggerRef: S
      });
      var P = function(v) {
        c.visible === void 0 && (b.value = !1), g("overlayClick", v);
      }, U = function(v) {
        c.visible === void 0 && (b.value = v), g("visibleChange", v);
      }, L = function() {
        var v, y = (v = p.overlay) === null || v === void 0 ? void 0 : v.call(p), T = {
          prefixCls: "".concat(c.prefixCls, "-menu"),
          onClick: P,
          getPopupContainer: function() {
            return S.value.getPopupDomNode();
          }
        };
        return (0, a.createVNode)(a.Fragment, null, [c.arrow && (0, a.createVNode)("div", {
          class: "".concat(c.prefixCls, "-arrow")
        }, null), (0, s.cloneElement)(y, T, !1)]);
      }, W = (0, a.computed)(function() {
        var l = c.minOverlayWidthMatchTrigger, v = l === void 0 ? !c.alignPoint : l;
        return v;
      }), Z = function() {
        var v, y = (v = p.default) === null || v === void 0 ? void 0 : v.call(p);
        return b.value && y ? (0, s.cloneElement)(y[0], {
          class: c.openClassName || "".concat(c.prefixCls, "-open")
        }, !1) : y;
      }, M = (0, a.computed)(function() {
        return !c.hideAction && c.trigger.indexOf("contextmenu") !== -1 ? ["click"] : c.hideAction;
      });
      return function() {
        var l = c.prefixCls, v = c.arrow, y = c.showAction, T = c.overlayStyle, x = c.trigger, E = c.placement, O = c.align, F = c.getPopupContainer, H = c.transitionName, K = c.animation, I = c.overlayClassName, j = (0, d.default)(c, f);
        return (0, a.createVNode)(r.default, (0, e.default)((0, e.default)({}, j), {}, {
          prefixCls: l,
          ref: S,
          popupClassName: (0, i.default)(I, (0, u.default)({}, "".concat(l, "-show-arrow"), v)),
          popupStyle: T,
          builtinPlacements: o.default,
          action: x,
          showAction: y,
          hideAction: M.value || [],
          popupPlacement: E,
          popupAlign: O,
          popupTransitionName: H,
          popupAnimation: K,
          popupVisible: b.value,
          stretch: W.value ? "minWidth" : "",
          onPopupVisibleChange: U,
          getPopupContainer: F
        }), {
          popup: L,
          default: Z
        });
      };
    }
  });
  return Tt.default = m, Tt;
}
var Xa;
function Pr() {
  if (Xa)
    return Rt;
  Xa = 1;
  var t = be;
  Object.defineProperty(Rt, "__esModule", {
    value: !0
  }), Rt.default = void 0;
  var a = t(_r()), e = a.default;
  return Rt.default = e, Rt;
}
var wt = {}, Za;
function Sn() {
  if (Za)
    return wt;
  Za = 1, Object.defineProperty(wt, "__esModule", {
    value: !0
  }), wt.default = void 0;
  var t = oe, a = (0, t.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "AddButton",
    inheritAttrs: !1,
    props: {
      prefixCls: String,
      editable: {
        type: Object
      },
      locale: {
        type: Object,
        default: void 0
      }
    },
    setup: function(u, d) {
      var n = d.expose, r = d.attrs, o = (0, t.ref)();
      return n({
        domRef: o
      }), function() {
        var s = u.prefixCls, i = u.editable, f = u.locale;
        return !i || i.showAdd === !1 ? null : (0, t.createVNode)("button", {
          ref: o,
          type: "button",
          class: "".concat(s, "-nav-add"),
          style: r.style,
          "aria-label": (f == null ? void 0 : f.addAriaLabel) || "Add tab",
          onClick: function(h) {
            i.onEdit("add", {
              event: h
            });
          }
        }, [i.addIcon ? i.addIcon() : "+"]);
      };
    }
  });
  return wt.default = a, wt;
}
var Ja;
function Cr() {
  if (Ja)
    return dt;
  Ja = 1;
  var t = be, a = bt;
  Object.defineProperty(dt, "__esModule", {
    value: !0
  }), dt.operationNodeProps = dt.default = void 0;
  var e = oe, u = t(je()), d = t(zt()), n = _(hr()), r = t(Pr()), o = t(Sn()), s = t(ca()), i = t(et()), f = t(tt()), m = t(Gt()), h = t(Mn());
  function c(C) {
    if (typeof WeakMap != "function")
      return null;
    var b = /* @__PURE__ */ new WeakMap(), S = /* @__PURE__ */ new WeakMap();
    return (c = function(U) {
      return U ? S : b;
    })(C);
  }
  function _(C, b) {
    if (!b && C && C.__esModule)
      return C;
    if (C === null || a(C) !== "object" && typeof C != "function")
      return { default: C };
    var S = c(b);
    if (S && S.has(C))
      return S.get(C);
    var P = {}, U = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var L in C)
      if (L !== "default" && Object.prototype.hasOwnProperty.call(C, L)) {
        var W = U ? Object.getOwnPropertyDescriptor(C, L) : null;
        W && (W.get || W.set) ? Object.defineProperty(P, L, W) : P[L] = C[L];
      }
    return P.default = C, S && S.set(C, P), P;
  }
  var p = {
    prefixCls: {
      type: String
    },
    id: {
      type: String
    },
    tabs: {
      type: Object
    },
    rtl: {
      type: Boolean
    },
    tabBarGutter: {
      type: Number
    },
    activeKey: {
      type: [String, Number]
    },
    mobile: {
      type: Boolean
    },
    moreIcon: f.default.any,
    moreTransitionName: {
      type: String
    },
    editable: {
      type: Object
    },
    locale: {
      type: Object,
      default: void 0
    },
    removeAriaLabel: String,
    onTabClick: {
      type: Function
    }
  };
  dt.operationNodeProps = p;
  var g = (0, e.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "OperationNode",
    inheritAttrs: !1,
    props: p,
    emits: ["tabClick"],
    slots: ["moreIcon"],
    setup: function(b, S) {
      var P = S.attrs, U = S.slots, L = (0, m.default)(!1), W = (0, d.default)(L, 2), Z = W[0], M = W[1], l = (0, m.default)(null), v = (0, d.default)(l, 2), y = v[0], T = v[1], x = function(I) {
        for (var j = b.tabs.filter(function(Y) {
          return !Y.disabled;
        }), R = j.findIndex(function(Y) {
          return Y.key === y.value;
        }) || 0, V = j.length, D = 0; D < V; D += 1) {
          R = (R + I + V) % V;
          var A = j[R];
          if (!A.disabled) {
            T(A.key);
            return;
          }
        }
      }, E = function(I) {
        var j = I.which;
        if (!Z.value) {
          [s.default.DOWN, s.default.SPACE, s.default.ENTER].includes(j) && (M(!0), I.preventDefault());
          return;
        }
        switch (j) {
          case s.default.UP:
            x(-1), I.preventDefault();
            break;
          case s.default.DOWN:
            x(1), I.preventDefault();
            break;
          case s.default.ESC:
            M(!1);
            break;
          case s.default.SPACE:
          case s.default.ENTER:
            y.value !== null && b.onTabClick(y.value, I);
            break;
        }
      }, O = (0, e.computed)(function() {
        return "".concat(b.id, "-more-popup");
      }), F = (0, e.computed)(function() {
        return y.value !== null ? "".concat(O.value, "-").concat(y.value) : null;
      }), H = function(I, j) {
        I.preventDefault(), I.stopPropagation(), b.editable.onEdit("remove", {
          key: j,
          event: I
        });
      };
      return (0, e.onMounted)(function() {
        (0, e.watch)(y, function() {
          var K = document.getElementById(F.value);
          K && K.scrollIntoView && K.scrollIntoView(!1);
        }, {
          flush: "post",
          immediate: !0
        });
      }), (0, e.watch)(Z, function() {
        Z.value || T(null);
      }), function() {
        var K, I = b.prefixCls, j = b.id, R = b.tabs, V = b.locale, D = b.mobile, A = b.moreIcon, Y = A === void 0 ? ((K = U.moreIcon) === null || K === void 0 ? void 0 : K.call(U)) || (0, e.createVNode)(h.default, null, null) : A, re = b.moreTransitionName, k = b.editable, Q = b.tabBarGutter, he = b.rtl, Ne = b.onTabClick, ce = "".concat(I, "-dropdown"), ue = V == null ? void 0 : V.dropdownAriaLabel, fe = (0, u.default)({}, he ? "marginRight" : "marginLeft", Q);
        R.length || (fe.visibility = "hidden", fe.order = 1);
        var Ie = (0, i.default)((0, u.default)({}, "".concat(ce, "-rtl"), he)), Pe = D ? null : (0, e.createVNode)(r.default, {
          prefixCls: ce,
          trigger: ["hover"],
          visible: Z.value,
          transitionName: re,
          onVisibleChange: M,
          overlayClassName: Ie,
          mouseEnterDelay: 0.1,
          mouseLeaveDelay: 0.1
        }, {
          overlay: function() {
            return (0, e.createVNode)(n.default, {
              onClick: function(te) {
                var B = te.key, le = te.domEvent;
                Ne(B, le), M(!1);
              },
              id: O.value,
              tabindex: -1,
              role: "listbox",
              "aria-activedescendant": F.value,
              selectedKeys: [y.value],
              "aria-label": ue !== void 0 ? ue : "expanded dropdown"
            }, {
              default: function() {
                return [R.map(function(te) {
                  var B, le, Ce = k && te.closable !== !1 && !te.disabled;
                  return (0, e.createVNode)(n.MenuItem, {
                    key: te.key,
                    id: "".concat(O.value, "-").concat(te.key),
                    role: "option",
                    "aria-controls": j && "".concat(j, "-panel-").concat(te.key),
                    disabled: te.disabled
                  }, {
                    default: function() {
                      return [(0, e.createVNode)("span", null, [typeof te.tab == "function" ? te.tab() : te.tab]), Ce && (0, e.createVNode)("button", {
                        type: "button",
                        "aria-label": b.removeAriaLabel || "remove",
                        tabindex: 0,
                        class: "".concat(ce, "-menu-item-remove"),
                        onClick: function(J) {
                          J.stopPropagation(), H(J, te.key);
                        }
                      }, [((B = te.closeIcon) === null || B === void 0 ? void 0 : B.call(te)) || ((le = k.removeIcon) === null || le === void 0 ? void 0 : le.call(k)) || "×"])];
                    }
                  });
                })];
              }
            });
          },
          default: function() {
            return (0, e.createVNode)("button", {
              type: "button",
              class: "".concat(I, "-nav-more"),
              style: fe,
              tabindex: -1,
              "aria-hidden": "true",
              "aria-haspopup": "listbox",
              "aria-controls": O.value,
              id: "".concat(j, "-more"),
              "aria-expanded": Z.value,
              onKeydown: E
            }, [Y]);
          }
        });
        return (0, e.createVNode)("div", {
          class: (0, i.default)("".concat(I, "-nav-operations"), P.class),
          style: P.style
        }, [Pe, (0, e.createVNode)(o.default, {
          prefixCls: I,
          locale: V,
          editable: k
        }, null)]);
      };
    }
  });
  return dt.default = g, dt;
}
var Ze = {}, Qa;
function ma() {
  if (Qa)
    return Ze;
  Qa = 1, Object.defineProperty(Ze, "__esModule", {
    value: !0
  }), Ze.useProvideTabs = Ze.useInjectTabs = Ze.default = void 0;
  var t = oe, a = Symbol("tabsContextKey"), e = function(o) {
    (0, t.provide)(a, o);
  };
  Ze.useProvideTabs = e;
  var u = function() {
    return (0, t.inject)(a, {
      tabs: (0, t.ref)([]),
      prefixCls: (0, t.ref)()
    });
  };
  Ze.useInjectTabs = u;
  var d = (0, t.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "TabsContextProvider",
    inheritAttrs: !1,
    props: {
      tabs: {
        type: Object,
        default: void 0
      },
      prefixCls: {
        type: String,
        default: void 0
      }
    },
    setup: function(o, s) {
      var i = s.slots;
      return e((0, t.toRefs)(o)), function() {
        var f;
        return (f = i.default) === null || f === void 0 ? void 0 : f.call(i);
      };
    }
  }), n = d;
  return Ze.default = n, Ze;
}
var Ft = {}, en;
function Mr() {
  if (en)
    return Ft;
  en = 1;
  var t = be;
  Object.defineProperty(Ft, "__esModule", {
    value: !0
  }), Ft.default = s;
  var a = t(zt()), e = oe, u = t(Gt()), d = 0.1, n = 0.01, r = 20, o = Math.pow(0.995, r);
  function s(i, f) {
    var m = (0, u.default)(), h = (0, a.default)(m, 2), c = h[0], _ = h[1], p = (0, u.default)(0), g = (0, a.default)(p, 2), C = g[0], b = g[1], S = (0, u.default)(0), P = (0, a.default)(S, 2), U = P[0], L = P[1], W = (0, u.default)(), Z = (0, a.default)(W, 2), M = Z[0], l = Z[1], v = (0, e.ref)();
    function y(R) {
      var V = R.touches[0], D = V.screenX, A = V.screenY;
      _({
        x: D,
        y: A
      }), clearInterval(v.value);
    }
    function T(R) {
      if (c.value) {
        R.preventDefault();
        var V = R.touches[0], D = V.screenX, A = V.screenY, Y = D - c.value.x, re = A - c.value.y;
        f(Y, re), _({
          x: D,
          y: A
        });
        var k = Date.now();
        L(k - C.value), b(k), l({
          x: Y,
          y: re
        });
      }
    }
    function x() {
      if (c.value) {
        var R = M.value;
        if (_(null), l(null), R) {
          var V = R.x / U.value, D = R.y / U.value, A = Math.abs(V), Y = Math.abs(D);
          if (Math.max(A, Y) < d)
            return;
          var re = V, k = D;
          v.value = setInterval(function() {
            if (Math.abs(re) < n && Math.abs(k) < n) {
              clearInterval(v.value);
              return;
            }
            re *= o, k *= o, f(re * r, k * r);
          }, r);
        }
      }
    }
    var E = (0, e.ref)();
    function O(R) {
      var V = R.deltaX, D = R.deltaY, A = 0, Y = Math.abs(V), re = Math.abs(D);
      Y === re ? A = E.value === "x" ? V : D : Y > re ? (A = V, E.value = "x") : (A = D, E.value = "y"), f(-A, -A) && R.preventDefault();
    }
    var F = (0, e.ref)({
      onTouchStart: y,
      onTouchMove: T,
      onTouchEnd: x,
      onWheel: O
    });
    function H(R) {
      F.value.onTouchStart(R);
    }
    function K(R) {
      F.value.onTouchMove(R);
    }
    function I(R) {
      F.value.onTouchEnd(R);
    }
    function j(R) {
      F.value.onWheel(R);
    }
    (0, e.onMounted)(function() {
      var R, V;
      document.addEventListener("touchmove", K, {
        passive: !1
      }), document.addEventListener("touchend", I, {
        passive: !1
      }), (R = i.value) === null || R === void 0 || R.addEventListener("touchstart", H, {
        passive: !1
      }), (V = i.value) === null || V === void 0 || V.addEventListener("wheel", j, {
        passive: !1
      });
    }), (0, e.onBeforeUnmount)(function() {
      document.removeEventListener("touchmove", K), document.removeEventListener("touchend", I);
    });
  }
  return Ft;
}
var Wt = {}, tn;
function Sr() {
  if (tn)
    return Wt;
  tn = 1, Object.defineProperty(Wt, "__esModule", {
    value: !0
  }), Wt.default = a;
  var t = oe;
  function a(e, u) {
    var d = (0, t.ref)(e);
    function n(r) {
      var o = typeof r == "function" ? r(d.value) : r;
      o !== d.value && u(o, d.value), d.value = o;
    }
    return [d, n];
  }
  return Wt;
}
var ua, an;
function Ir() {
  if (an)
    return ua;
  an = 1;
  var t = $n(), a = yn(), e = Ln(), u = Bn(), d = Un();
  function n(r, o, s, i) {
    if (!u(r))
      return r;
    o = a(o, r);
    for (var f = -1, m = o.length, h = m - 1, c = r; c != null && ++f < m; ) {
      var _ = d(o[f]), p = s;
      if (_ === "__proto__" || _ === "constructor" || _ === "prototype")
        return r;
      if (f != h) {
        var g = c[_];
        p = i ? i(g, _, c) : void 0, p === void 0 && (p = u(g) ? g : e(o[f + 1]) ? [] : {});
      }
      t(c, _, p), c = c[_];
    }
    return r;
  }
  return ua = n, ua;
}
var la, nn;
function Or() {
  if (nn)
    return la;
  nn = 1;
  var t = zn(), a = Ir(), e = yn();
  function u(d, n, r) {
    for (var o = -1, s = n.length, i = {}; ++o < s; ) {
      var f = n[o], m = t(d, f);
      r(m, f) && a(i, e(f, d), m);
    }
    return i;
  }
  return la = u, la;
}
var ia, rn;
function xr() {
  if (rn)
    return ia;
  rn = 1;
  var t = Or(), a = Gn();
  function e(u, d) {
    return t(u, d, function(n, r) {
      return a(u, r);
    });
  }
  return ia = e, ia;
}
var oa, un;
function In() {
  if (un)
    return oa;
  un = 1;
  var t = xr(), a = Hn(), e = a(function(u, d) {
    return u == null ? {} : t(u, d);
  });
  return oa = e, oa;
}
var ln;
function Rr() {
  if (ln)
    return ot;
  ln = 1;
  var t = be;
  Object.defineProperty(ot, "__esModule", {
    value: !0
  }), ot.tabNavListProps = ot.default = void 0;
  var a = oe, e = t(Ve()), u = t(je()), d = t(qt()), n = t(zt()), r = nr(), o = t(rr()), s = t(ur()), i = t(Cr()), f = ma(), m = t(Mr()), h = t(Sn()), c = t(tt()), _ = t(Sr()), p = t(Gt()), g = t(va()), C = t(et()), b = t(Zn()), S = qn(), P = t(Jn()), U = t(In()), L = {
    width: 0,
    height: 0,
    left: 0,
    top: 0,
    right: 0
  }, W = function() {
    return {
      id: {
        type: String
      },
      tabPosition: {
        type: String
      },
      activeKey: {
        type: [String, Number]
      },
      rtl: {
        type: Boolean
      },
      animated: {
        type: Object,
        default: void 0
      },
      editable: {
        type: Object
      },
      moreIcon: c.default.any,
      moreTransitionName: {
        type: String
      },
      mobile: {
        type: Boolean
      },
      tabBarGutter: {
        type: Number
      },
      renderTabBar: {
        type: Function
      },
      locale: {
        type: Object,
        default: void 0
      },
      onTabClick: {
        type: Function
      },
      onTabScroll: {
        type: Function
      }
    };
  };
  ot.tabNavListProps = W;
  var Z = (0, a.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "TabNavList",
    inheritAttrs: !1,
    props: W(),
    slots: ["moreIcon", "leftExtra", "rightExtra", "tabBarExtraContent"],
    emits: ["tabClick", "tabScroll"],
    setup: function(l, v) {
      var y = v.attrs, T = v.slots, x = (0, f.useInjectTabs)(), E = x.tabs, O = x.prefixCls, F = (0, a.ref)(), H = (0, a.ref)(), K = (0, a.ref)(), I = (0, a.ref)(), j = (0, P.default)(), R = (0, n.default)(j, 2), V = R[0], D = R[1], A = (0, a.computed)(function() {
        return l.tabPosition === "top" || l.tabPosition === "bottom";
      }), Y = (0, _.default)(0, function(X, ne) {
        A.value && l.onTabScroll && l.onTabScroll({
          direction: X > ne ? "left" : "right"
        });
      }), re = (0, n.default)(Y, 2), k = re[0], Q = re[1], he = (0, _.default)(0, function(X, ne) {
        !A.value && l.onTabScroll && l.onTabScroll({
          direction: X > ne ? "top" : "bottom"
        });
      }), Ne = (0, n.default)(he, 2), ce = Ne[0], ue = Ne[1], fe = (0, p.default)(0), Ie = (0, n.default)(fe, 2), Pe = Ie[0], qe = Ie[1], xe = (0, p.default)(0), te = (0, n.default)(xe, 2), B = te[0], le = te[1], Ce = (0, p.default)(null), z = (0, n.default)(Ce, 2), q = z[0], J = z[1], Re = (0, p.default)(null), se = (0, n.default)(Re, 2), Me = se[0], N = se[1], w = (0, p.default)(0), $ = (0, n.default)(w, 2), ve = $[0], ie = $[1], pe = (0, p.default)(0), ge = (0, n.default)(pe, 2), ee = ge[0], ke = ge[1], Ue = (0, r.useRafState)(/* @__PURE__ */ new Map()), ze = (0, n.default)(Ue, 2), Be = ze[0], gt = ze[1], Je = (0, s.default)(E, Be), _t = (0, a.computed)(function() {
        return "".concat(O.value, "-nav-operations-hidden");
      }), nt = (0, a.ref)(0), rt = (0, a.ref)(0);
      (0, a.watchEffect)(function() {
        A.value ? l.rtl ? (nt.value = 0, rt.value = Math.max(0, Pe.value - q.value)) : (nt.value = Math.min(0, q.value - Pe.value), rt.value = 0) : (nt.value = Math.min(0, Me.value - B.value), rt.value = 0);
      });
      var yt = function(ne) {
        return ne < nt.value ? nt.value : ne > rt.value ? rt.value : ne;
      }, ye = (0, a.ref)(), ae = (0, p.default)(), Te = (0, n.default)(ae, 2), De = Te[0], Le = Te[1], ht = function() {
        Le(Date.now());
      }, At = function() {
        clearTimeout(ye.value);
      }, ba = function(ne, G) {
        ne(function(_e) {
          var de = yt(_e + G);
          return de;
        });
      };
      (0, m.default)(F, function(X, ne) {
        if (A.value) {
          if (q.value >= Pe.value)
            return !1;
          ba(Q, X);
        } else {
          if (Me.value >= B.value)
            return !1;
          ba(ue, ne);
        }
        return At(), ht(), !0;
      }), (0, a.watch)(De, function() {
        At(), De.value && (ye.value = setTimeout(function() {
          Le(0);
        }, 100));
      });
      var ya = function() {
        var ne = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : l.activeKey, G = Je.value.get(ne) || {
          width: 0,
          height: 0,
          left: 0,
          right: 0,
          top: 0
        };
        if (A.value) {
          var _e = k.value;
          l.rtl ? G.right < k.value ? _e = G.right : G.right + G.width > k.value + q.value && (_e = G.right + G.width - q.value) : G.left < -k.value ? _e = -G.left : G.left + G.width > -k.value + q.value && (_e = -(G.left + G.width - q.value)), ue(0), Q(yt(_e));
        } else {
          var de = ce.value;
          G.top < -ce.value ? de = -G.top : G.top + G.height > -ce.value + Me.value && (de = -(G.top + G.height - Me.value)), Q(0), ue(yt(de));
        }
      }, Yt = (0, a.ref)(0), Xt = (0, a.ref)(0);
      (0, a.watchEffect)(function() {
        var X, ne, G, _e, de, we, Ke, ut = Je.value;
        ["top", "bottom"].includes(l.tabPosition) ? (ne = "width", de = q.value, we = Pe.value, Ke = ve.value, G = l.rtl ? "right" : "left", _e = Math.abs(k.value)) : (ne = "height", de = Me.value, we = Pe.value, Ke = ee.value, G = "top", _e = -ce.value);
        var Ae = de;
        we + Ke > de && we < de && (Ae = de - Ke);
        var Ge = E.value;
        if (!Ge.length) {
          var He;
          return He = [0, 0], Yt.value = He[0], Xt.value = He[1], He;
        }
        for (var lt = Ge.length, Oe = lt, Fe = 0; Fe < lt; Fe += 1) {
          var We = ut.get(Ge[Fe].key) || L;
          if (We[G] + We[ne] > _e + Ae) {
            Oe = Fe - 1;
            break;
          }
        }
        for (var Ye = 0, Ee = lt - 1; Ee >= 0; Ee -= 1) {
          var $e = ut.get(Ge[Ee].key) || L;
          if ($e[G] < _e) {
            Ye = Ee + 1;
            break;
          }
        }
        return X = [Ye, Oe], Yt.value = X[0], Xt.value = X[1], X;
      });
      var Zt = function() {
        var ne, G, _e, de, we, Ke = ((ne = F.value) === null || ne === void 0 ? void 0 : ne.offsetWidth) || 0, ut = ((G = F.value) === null || G === void 0 ? void 0 : G.offsetHeight) || 0, Ae = ((_e = I.value) === null || _e === void 0 ? void 0 : _e.$el) || {}, Ge = Ae.offsetWidth || 0, He = Ae.offsetHeight || 0;
        J(Ke), N(ut), ie(Ge), ke(He);
        var lt = (((de = H.value) === null || de === void 0 ? void 0 : de.offsetWidth) || 0) - Ge, Oe = (((we = H.value) === null || we === void 0 ? void 0 : we.offsetHeight) || 0) - He;
        qe(lt), le(Oe), gt(function() {
          var Fe = /* @__PURE__ */ new Map();
          return E.value.forEach(function(We) {
            var Ye = We.key, Ee = D.value.get(Ye), $e = (Ee == null ? void 0 : Ee.$el) || Ee;
            $e && Fe.set(Ye, {
              width: $e.offsetWidth,
              height: $e.offsetHeight,
              left: $e.offsetLeft,
              top: $e.offsetTop
            });
          }), Fe;
        });
      }, ha = (0, a.computed)(function() {
        return [].concat((0, d.default)(E.value.slice(0, Yt.value)), (0, d.default)(E.value.slice(Xt.value + 1)));
      }), On = (0, p.default)(), ga = (0, n.default)(On, 2), xn = ga[0], Rn = ga[1], Qe = (0, a.computed)(function() {
        return Je.value.get(l.activeKey);
      }), _a = (0, a.ref)(), Pa = function() {
        g.default.cancel(_a.value);
      };
      (0, a.watch)([Qe, A, function() {
        return l.rtl;
      }], function() {
        var X = {};
        Qe.value && (A.value ? (l.rtl ? X.right = (0, S.toPx)(Qe.value.right) : X.left = (0, S.toPx)(Qe.value.left), X.width = (0, S.toPx)(Qe.value.width)) : (X.top = (0, S.toPx)(Qe.value.top), X.height = (0, S.toPx)(Qe.value.height))), Pa(), _a.value = (0, g.default)(function() {
          Rn(X);
        });
      }), (0, a.watch)([function() {
        return l.activeKey;
      }, Qe, Je, A], function() {
        ya();
      }, {
        flush: "post"
      }), (0, a.watch)([function() {
        return l.rtl;
      }, function() {
        return l.tabBarGutter;
      }, function() {
        return l.activeKey;
      }, function() {
        return E.value;
      }], function() {
        Zt();
      }, {
        flush: "post"
      });
      var Jt = function(ne) {
        var G = ne.position, _e = ne.prefixCls, de = ne.extra;
        if (!de)
          return null;
        var we = de == null ? void 0 : de({
          position: G
        });
        return we ? (0, a.createVNode)("div", {
          class: "".concat(_e, "-extra-content")
        }, [we]) : null;
      };
      return (0, a.onBeforeUnmount)(function() {
        At(), Pa();
      }), function() {
        var X, ne = l.id, G = l.animated, _e = l.activeKey, de = l.rtl, we = l.editable, Ke = l.locale, ut = l.tabPosition, Ae = l.tabBarGutter, Ge = l.onTabClick, He = y.class, lt = y.style, Oe = O.value, Fe = !!ha.value.length, We = "".concat(Oe, "-nav-wrap"), Ye, Ee, $e, Ca;
        A.value ? de ? (Ee = k.value > 0, Ye = k.value + q.value < Pe.value) : (Ye = k.value < 0, Ee = -k.value + q.value < Pe.value) : ($e = ce.value < 0, Ca = -ce.value + Me.value < B.value);
        var Vt = {};
        ut === "top" || ut === "bottom" ? Vt[de ? "marginRight" : "marginLeft"] = typeof Ae == "number" ? "".concat(Ae, "px") : Ae : Vt.marginTop = typeof Ae == "number" ? "".concat(Ae, "px") : Ae;
        var Ma = E.value.map(function(Pt, Sa) {
          var Ct = Pt.key;
          return (0, a.createVNode)(o.default, {
            id: ne,
            prefixCls: Oe,
            key: Ct,
            tab: Pt,
            style: Sa === 0 ? void 0 : Vt,
            closable: Pt.closable,
            editable: we,
            active: Ct === _e,
            removeAriaLabel: Ke == null ? void 0 : Ke.removeAriaLabel,
            ref: V(Ct),
            onClick: function(Nn) {
              Ge(Ct, Nn);
            },
            onFocus: function() {
              ya(Ct), ht(), F.value && (de || (F.value.scrollLeft = 0), F.value.scrollTop = 0);
            }
          }, T);
        });
        return (0, a.createVNode)("div", {
          role: "tablist",
          class: (0, C.default)("".concat(Oe, "-nav"), He),
          style: lt,
          onKeydown: function() {
            ht();
          }
        }, [(0, a.createVNode)(Jt, {
          position: "left",
          prefixCls: Oe,
          extra: T.leftExtra
        }, null), (0, a.createVNode)(b.default, {
          onResize: Zt
        }, {
          default: function() {
            return [(0, a.createVNode)("div", {
              class: (0, C.default)(We, (X = {}, (0, u.default)(X, "".concat(We, "-ping-left"), Ye), (0, u.default)(X, "".concat(We, "-ping-right"), Ee), (0, u.default)(X, "".concat(We, "-ping-top"), $e), (0, u.default)(X, "".concat(We, "-ping-bottom"), Ca), X)),
              ref: F
            }, [(0, a.createVNode)(b.default, {
              onResize: Zt
            }, {
              default: function() {
                return [(0, a.createVNode)("div", {
                  ref: H,
                  class: "".concat(Oe, "-nav-list"),
                  style: {
                    transform: "translate(".concat(k.value, "px, ").concat(ce.value, "px)"),
                    transition: De.value ? "none" : void 0
                  }
                }, [Ma, (0, a.createVNode)(h.default, {
                  ref: I,
                  prefixCls: Oe,
                  locale: Ke,
                  editable: we,
                  style: (0, e.default)((0, e.default)({}, Ma.length === 0 ? void 0 : Vt), {}, {
                    visibility: Fe ? "hidden" : null
                  })
                }, null), (0, a.createVNode)("div", {
                  class: (0, C.default)("".concat(Oe, "-ink-bar"), (0, u.default)({}, "".concat(Oe, "-ink-bar-animated"), G.inkBar)),
                  style: xn.value
                }, null)])];
              }
            })])];
          }
        }), (0, a.createVNode)(i.default, (0, e.default)((0, e.default)({}, l), {}, {
          removeAriaLabel: Ke == null ? void 0 : Ke.removeAriaLabel,
          ref: K,
          prefixCls: Oe,
          tabs: ha.value,
          class: !Fe && _t.value
        }), (0, U.default)(T, ["moreIcon"])), (0, a.createVNode)(Jt, {
          position: "right",
          prefixCls: Oe,
          extra: T.rightExtra
        }, null), (0, a.createVNode)(Jt, {
          position: "right",
          prefixCls: Oe,
          extra: T.tabBarExtraContent
        }, null)]);
      };
    }
  });
  return ot.default = Z, ot;
}
var Kt = {}, on;
function Tr() {
  if (on)
    return Kt;
  on = 1;
  var t = be;
  Object.defineProperty(Kt, "__esModule", {
    value: !0
  }), Kt.default = void 0;
  var a = oe, e = t(je()), u = ma(), d = Dt(), n = (0, a.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "TabPanelList",
    inheritAttrs: !1,
    props: {
      activeKey: {
        type: [String, Number]
      },
      id: {
        type: String
      },
      rtl: {
        type: Boolean
      },
      animated: {
        type: Object,
        default: void 0
      },
      tabPosition: {
        type: String
      },
      destroyInactiveTabPane: {
        type: Boolean
      }
    },
    setup: function(o) {
      var s = (0, u.useInjectTabs)(), i = s.tabs, f = s.prefixCls;
      return function() {
        var m = o.id, h = o.activeKey, c = o.animated, _ = o.tabPosition, p = o.rtl, g = o.destroyInactiveTabPane, C = c.tabPane, b = f.value, S = i.value.findIndex(function(P) {
          return P.key === h;
        });
        return (0, a.createVNode)("div", {
          class: "".concat(b, "-content-holder")
        }, [(0, a.createVNode)("div", {
          class: ["".concat(b, "-content"), "".concat(b, "-content-").concat(_), (0, e.default)({}, "".concat(b, "-content-animated"), C)],
          style: S && C ? (0, e.default)({}, p ? "marginRight" : "marginLeft", "-".concat(S, "00%")) : null
        }, [i.value.map(function(P) {
          return (0, d.cloneElement)(P.node, {
            key: P.key,
            prefixCls: b,
            tabKey: P.key,
            id: m,
            animated: C,
            active: P.key === h,
            destroyInactiveTabPane: g
          });
        })])]);
      };
    }
  });
  return Kt.default = n, Kt;
}
var da = {}, $t = {}, dn;
function Nr() {
  if (dn)
    return $t;
  dn = 1, Object.defineProperty($t, "__esModule", { value: !0 });
  var t = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "defs", attrs: {}, children: [{ tag: "style", attrs: {} }] }, { tag: "path", attrs: { d: "M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z" } }, { tag: "path", attrs: { d: "M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z" } }] }, name: "plus", theme: "outlined" };
  return $t.default = t, $t;
}
var fn;
function wr() {
  return fn || (fn = 1, function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var a = oe, e = d(Nr()), u = d(pn());
    function d(i) {
      return i && i.__esModule ? i : { default: i };
    }
    function n(i) {
      for (var f = 1; f < arguments.length; f++) {
        var m = arguments[f] != null ? Object(arguments[f]) : {}, h = Object.keys(m);
        typeof Object.getOwnPropertySymbols == "function" && (h = h.concat(Object.getOwnPropertySymbols(m).filter(function(c) {
          return Object.getOwnPropertyDescriptor(m, c).enumerable;
        }))), h.forEach(function(c) {
          r(i, c, m[c]);
        });
      }
      return i;
    }
    function r(i, f, m) {
      return f in i ? Object.defineProperty(i, f, { value: m, enumerable: !0, configurable: !0, writable: !0 }) : i[f] = m, i;
    }
    var o = function(f, m) {
      var h = n({}, f, m.attrs);
      return (0, a.createVNode)(u.default, n({}, h, {
        icon: e.default
      }), null);
    };
    o.displayName = "PlusOutlined", o.inheritAttrs = !1;
    var s = o;
    t.default = s;
  }(da)), da;
}
var vn;
function Kr() {
  if (vn)
    return it;
  vn = 1;
  var t = be;
  Object.defineProperty(it, "__esModule", {
    value: !0
  }), it.tabsProps = it.default = void 0;
  var a = oe, e = t(je()), u = t(bt), d = t(zt()), n = t(Ve()), r = t(Rr()), o = t(Tr()), s = kt(), i = t(fa()), f = t(Gt()), m = t(Qn()), h = t(er()), c = t(et()), _ = t(kn()), p = t(wr()), g = t(Ut()), C = ma(), b = t(In()), S = t(tt()), P = t(tr()), U = 0, L = function() {
    return {
      prefixCls: {
        type: String
      },
      id: {
        type: String
      },
      activeKey: {
        type: [String, Number]
      },
      defaultActiveKey: {
        type: [String, Number]
      },
      direction: {
        type: String
      },
      animated: {
        type: [Boolean, Object]
      },
      renderTabBar: {
        type: Function
      },
      tabBarGutter: {
        type: Number
      },
      tabBarStyle: {
        type: Object
      },
      tabPosition: {
        type: String
      },
      destroyInactiveTabPane: {
        type: Boolean
      },
      hideAdd: Boolean,
      type: {
        type: String
      },
      size: {
        type: String
      },
      centered: Boolean,
      onEdit: {
        type: Function
      },
      onChange: {
        type: Function
      },
      onTabClick: {
        type: Function
      },
      onTabScroll: {
        type: Function
      },
      "onUpdate:activeKey": {
        type: Function
      },
      // Accessibility
      locale: {
        type: Object,
        default: void 0
      },
      onPrevClick: Function,
      onNextClick: Function,
      tabBarExtraContent: S.default.any
    };
  };
  it.tabsProps = L;
  function W(l) {
    return l.map(function(v) {
      if ((0, s.isValidElement)(v)) {
        for (var y = (0, n.default)({}, v.props || {}), T = 0, x = Object.entries(y); T < x.length; T++) {
          var E = (0, d.default)(x[T], 2), O = E[0], F = E[1];
          delete y[O], y[(0, a.camelize)(O)] = F;
        }
        var H = v.children || {}, K = v.key !== void 0 ? v.key : void 0, I = y.tab, j = I === void 0 ? H.tab : I, R = y.disabled, V = y.forceRender, D = y.closable, A = y.animated, Y = y.active, re = y.destroyInactiveTabPane;
        return (0, n.default)((0, n.default)({
          key: K
        }, y), {}, {
          node: v,
          closeIcon: H.closeIcon,
          tab: j,
          disabled: R === "" || R,
          forceRender: V === "" || V,
          closable: D === "" || D,
          animated: A === "" || A,
          active: Y === "" || Y,
          destroyInactiveTabPane: re === "" || re
        });
      }
      return null;
    }).filter(function(v) {
      return v;
    });
  }
  var Z = (0, a.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "InternalTabs",
    inheritAttrs: !1,
    props: (0, n.default)((0, n.default)({}, (0, s.initDefaultProps)(L(), {
      tabPosition: "top",
      animated: {
        inkBar: !0,
        tabPane: !1
      }
    })), {}, {
      tabs: {
        type: Array
      }
    }),
    slots: ["tabBarExtraContent", "leftExtra", "rightExtra", "moreIcon", "addIcon", "removeIcon", "renderTabBar"],
    // emits: ['tabClick', 'tabScroll', 'change', 'update:activeKey'],
    setup: function(v, y) {
      var T = y.attrs, x = y.slots;
      (0, g.default)(v.onPrevClick === void 0 && v.onNextClick === void 0, "Tabs", "`onPrevClick / @prevClick` and `onNextClick / @nextClick` has been removed. Please use `onTabScroll / @tabScroll` instead."), (0, g.default)(v.tabBarExtraContent === void 0, "Tabs", "`tabBarExtraContent` prop has been removed. Please use `rightExtra` slot instead."), (0, g.default)(x.tabBarExtraContent === void 0, "Tabs", "`tabBarExtraContent` slot is deprecated. Please use `rightExtra` slot instead.");
      var E = (0, i.default)("tabs", v), O = E.prefixCls, F = E.direction, H = E.size, K = E.rootPrefixCls, I = (0, a.computed)(function() {
        return F.value === "rtl";
      }), j = (0, a.computed)(function() {
        var B = v.animated, le = v.tabPosition;
        return B === !1 || ["left", "right"].includes(le) ? {
          inkBar: !1,
          tabPane: !1
        } : B === !0 ? {
          inkBar: !0,
          tabPane: !0
        } : (0, n.default)({
          inkBar: !0,
          tabPane: !1
        }, (0, u.default)(B) === "object" ? B : {});
      }), R = (0, f.default)(!1), V = (0, d.default)(R, 2), D = V[0], A = V[1];
      (0, a.onMounted)(function() {
        A((0, m.default)());
      });
      var Y = (0, h.default)(function() {
        var B;
        return (B = v.tabs[0]) === null || B === void 0 ? void 0 : B.key;
      }, {
        value: (0, a.computed)(function() {
          return v.activeKey;
        }),
        defaultValue: v.defaultActiveKey
      }), re = (0, d.default)(Y, 2), k = re[0], Q = re[1], he = (0, f.default)(function() {
        return v.tabs.findIndex(function(B) {
          return B.key === k.value;
        });
      }), Ne = (0, d.default)(he, 2), ce = Ne[0], ue = Ne[1];
      (0, a.watchEffect)(function() {
        var B = v.tabs.findIndex(function(Ce) {
          return Ce.key === k.value;
        });
        if (B === -1) {
          var le;
          B = Math.max(0, Math.min(ce.value, v.tabs.length - 1)), Q((le = v.tabs[B]) === null || le === void 0 ? void 0 : le.key);
        }
        ue(B);
      });
      var fe = (0, h.default)(null, {
        value: (0, a.computed)(function() {
          return v.id;
        })
      }), Ie = (0, d.default)(fe, 2), Pe = Ie[0], qe = Ie[1], xe = (0, a.computed)(function() {
        return D.value && !["left", "right"].includes(v.tabPosition) ? "top" : v.tabPosition;
      });
      (0, a.onMounted)(function() {
        v.id || (qe("rc-tabs-".concat(process.env.NODE_ENV === "test" ? "test" : U)), U += 1);
      });
      var te = function(le, Ce) {
        var z;
        (z = v.onTabClick) === null || z === void 0 || z.call(v, le, Ce);
        var q = le !== k.value;
        if (Q(le), q) {
          var J;
          (J = v.onChange) === null || J === void 0 || J.call(v, le);
        }
      };
      return (0, C.useProvideTabs)({
        tabs: (0, a.computed)(function() {
          return v.tabs;
        }),
        prefixCls: O
      }), function() {
        var B, le = v.id, Ce = v.type, z = v.tabBarGutter, q = v.tabBarStyle, J = v.locale, Re = v.destroyInactiveTabPane, se = v.renderTabBar, Me = se === void 0 ? x.renderTabBar : se, N = v.onTabScroll, w = v.hideAdd, $ = v.centered, ve = {
          id: Pe.value,
          activeKey: k.value,
          animated: j.value,
          tabPosition: xe.value,
          rtl: I.value,
          mobile: D.value
        }, ie;
        Ce === "editable-card" && (ie = {
          onEdit: function(Ue, ze) {
            var Be, gt = ze.key, Je = ze.event;
            (Be = v.onEdit) === null || Be === void 0 || Be.call(v, Ue === "add" ? Je : gt, Ue);
          },
          removeIcon: function() {
            return (0, a.createVNode)(_.default, null, null);
          },
          addIcon: x.addIcon ? x.addIcon : function() {
            return (0, a.createVNode)(p.default, null, null);
          },
          showAdd: w !== !0
        });
        var pe, ge = (0, n.default)((0, n.default)({}, ve), {}, {
          moreTransitionName: "".concat(K.value, "-slide-up"),
          editable: ie,
          locale: J,
          tabBarGutter: z,
          onTabClick: te,
          onTabScroll: N,
          style: q
        });
        Me ? pe = Me((0, n.default)((0, n.default)({}, ge), {}, {
          DefaultTabBar: r.default
        })) : pe = (0, a.createVNode)(r.default, ge, (0, b.default)(x, ["moreIcon", "leftExtra", "rightExtra", "tabBarExtraContent"]));
        var ee = O.value;
        return (0, a.createVNode)("div", (0, n.default)((0, n.default)({}, T), {}, {
          id: le,
          class: (0, c.default)(ee, "".concat(ee, "-").concat(xe.value), (B = {}, (0, e.default)(B, "".concat(ee, "-").concat(H.value), H.value), (0, e.default)(B, "".concat(ee, "-card"), ["card", "editable-card"].includes(Ce)), (0, e.default)(B, "".concat(ee, "-editable-card"), Ce === "editable-card"), (0, e.default)(B, "".concat(ee, "-centered"), $), (0, e.default)(B, "".concat(ee, "-mobile"), D.value), (0, e.default)(B, "".concat(ee, "-editable"), Ce === "editable-card"), (0, e.default)(B, "".concat(ee, "-rtl"), I.value), B), T.class)
        }), [pe, (0, a.createVNode)(o.default, (0, n.default)((0, n.default)({
          destroyInactiveTabPane: Re
        }, ve), {}, {
          animated: j.value
        }), null)]);
      };
    }
  }), M = (0, a.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "ATabs",
    inheritAttrs: !1,
    props: (0, s.initDefaultProps)(L(), {
      tabPosition: "top",
      animated: {
        inkBar: !0,
        tabPane: !1
      }
    }),
    slots: ["tabBarExtraContent", "leftExtra", "rightExtra", "moreIcon", "addIcon", "removeIcon", "renderTabBar"],
    // emits: ['tabClick', 'tabScroll', 'change', 'update:activeKey'],
    setup: function(v, y) {
      var T = y.attrs, x = y.slots, E = y.emit, O = function(H) {
        E("update:activeKey", H), E("change", H);
      };
      return function() {
        var F, H = W((0, s.flattenChildren)((F = x.default) === null || F === void 0 ? void 0 : F.call(x)));
        return (0, a.createVNode)(Z, (0, n.default)((0, n.default)((0, n.default)({}, (0, P.default)(v, ["onUpdate:activeKey"])), T), {}, {
          onChange: O,
          tabs: H
        }), x);
      };
    }
  });
  return it.default = M, it;
}
var Et = {}, cn;
function Er() {
  if (cn)
    return Et;
  cn = 1;
  var t = be;
  Object.defineProperty(Et, "__esModule", {
    value: !0
  }), Et.default = void 0;
  var a = oe, e = t(tt()), u = function() {
    return {
      tab: e.default.any,
      disabled: {
        type: Boolean
      },
      forceRender: {
        type: Boolean
      },
      closable: {
        type: Boolean
      },
      animated: {
        type: Boolean
      },
      active: {
        type: Boolean
      },
      destroyInactiveTabPane: {
        type: Boolean
      },
      // Pass by TabPaneList
      prefixCls: {
        type: String
      },
      tabKey: {
        type: [String, Number]
      },
      id: {
        type: String
      }
      // closeIcon: PropTypes.any,
    };
  }, d = (0, a.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "ATabPane",
    inheritAttrs: !1,
    __ANT_TAB_PANE: !0,
    props: u(),
    slots: ["closeIcon", "tab"],
    setup: function(r, o) {
      var s = o.attrs, i = o.slots, f = (0, a.ref)(r.forceRender);
      (0, a.watch)([function() {
        return r.active;
      }, function() {
        return r.destroyInactiveTabPane;
      }], function() {
        r.active ? f.value = !0 : r.destroyInactiveTabPane && (f.value = !1);
      }, {
        immediate: !0
      });
      var m = (0, a.computed)(function() {
        return r.active ? {} : r.animated ? {
          visibility: "hidden",
          height: 0,
          overflowY: "hidden"
        } : {
          display: "none"
        };
      });
      return function() {
        var h, c = r.prefixCls, _ = r.forceRender, p = r.id, g = r.active, C = r.tabKey;
        return (0, a.createVNode)("div", {
          id: p && "".concat(p, "-panel-").concat(C),
          role: "tabpanel",
          tabindex: g ? 0 : -1,
          "aria-labelledby": p && "".concat(p, "-tab-").concat(C),
          "aria-hidden": !g,
          style: [m.value, s.style],
          class: ["".concat(c, "-tabpane"), g && "".concat(c, "-tabpane-active"), s.class]
        }, [(g || f.value || _) && ((h = i.default) === null || h === void 0 ? void 0 : h.call(i))]);
      };
    }
  });
  return Et.default = d, Et;
}
(function(t) {
  var a = be;
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "TabPane", {
    enumerable: !0,
    get: function() {
      return u.default;
    }
  }), t.default = void 0;
  var e = a(Kr()), u = a(Er()), d = e.default;
  t.default = d;
})(hn);
(function(t) {
  var a = bt;
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "TabPane", {
    enumerable: !0,
    get: function() {
      return e.TabPane;
    }
  }), t.default = void 0;
  var e = d(hn);
  function u(r) {
    if (typeof WeakMap != "function")
      return null;
    var o = /* @__PURE__ */ new WeakMap(), s = /* @__PURE__ */ new WeakMap();
    return (u = function(f) {
      return f ? s : o;
    })(r);
  }
  function d(r, o) {
    if (!o && r && r.__esModule)
      return r;
    if (r === null || a(r) !== "object" && typeof r != "function")
      return { default: r };
    var s = u(o);
    if (s && s.has(r))
      return s.get(r);
    var i = {}, f = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var m in r)
      if (m !== "default" && Object.prototype.hasOwnProperty.call(r, m)) {
        var h = f ? Object.getOwnPropertyDescriptor(r, m) : null;
        h && (h.get || h.set) ? Object.defineProperty(i, m, h) : i[m] = r[m];
      }
    return i.default = r, s && s.set(r, i), i;
  }
  e.default.TabPane = e.TabPane, e.default.install = function(r) {
    return r.component(e.default.name, e.default), r.component(e.TabPane.name, e.TabPane), r;
  };
  var n = e.default;
  t.default = n;
})(pa);
const qr = /* @__PURE__ */ wn(pa), Jr = /* @__PURE__ */ ar({
  __proto__: null,
  default: qr
}, [pa]);
export {
  Jr as i,
  pa as t
};
