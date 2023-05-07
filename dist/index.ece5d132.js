import { e as he, k as P, v as me, j as Ce, b as qe, r as ie, s as fe, i as de, w as xe } from "./useConfigInject.fdc04e2e.js";
import { r as J } from "./_vue_commonjs-external.cdc460b2.js";
import { _ as Te } from "./index.1fa3133f.js";
import { r as Be } from "./wave.712e07cd.js";
import { r as Pe, a as Ne } from "./classCallCheck.fb739271.js";
var A = {}, F = {}, q = {}, ae;
function we() {
  if (ae)
    return q;
  ae = 1;
  var o = P.exports;
  Object.defineProperty(q, "__esModule", {
    value: !0
  }), q.buttonProps = void 0, q.convertLegacyProps = e, q.default = void 0;
  var t = o(he());
  function e(i) {
    return i === "danger" ? {
      danger: !0
    } : {
      type: i
    };
  }
  var l = function() {
    return {
      prefixCls: String,
      type: String,
      htmlType: {
        type: String,
        default: "button"
      },
      shape: {
        type: String
      },
      size: {
        type: String
      },
      loading: {
        type: [Boolean, Object],
        default: function() {
          return !1;
        }
      },
      disabled: {
        type: Boolean,
        default: void 0
      },
      ghost: {
        type: Boolean,
        default: void 0
      },
      block: {
        type: Boolean,
        default: void 0
      },
      danger: {
        type: Boolean,
        default: void 0
      },
      icon: t.default.any,
      href: String,
      target: String,
      title: String,
      onClick: {
        type: Function
      },
      onMousedown: {
        type: Function
      }
    };
  };
  q.buttonProps = l;
  var n = l;
  return q.default = n, q;
}
var j = {}, re;
function Se() {
  if (re)
    return j;
  re = 1;
  var o = P.exports;
  Object.defineProperty(j, "__esModule", {
    value: !0
  }), j.default = void 0;
  var t = J, e = o(me()), l = o(Ce()), n = function(a) {
    a && (a.style.width = "0px", a.style.opacity = "0", a.style.transform = "scale(0)");
  }, i = function(a) {
    (0, t.nextTick)(function() {
      a && (a.style.width = "".concat(a.scrollWidth, "px"), a.style.opacity = "1", a.style.transform = "scale(1)");
    });
  }, g = function(a) {
    a && a.style && (a.style.width = null, a.style.opacity = null, a.style.transform = null);
  }, B = (0, t.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "LoadingIcon",
    props: {
      prefixCls: String,
      loading: [Boolean, Object],
      existIcon: Boolean
    },
    setup: function(a) {
      return function() {
        var N = a.existIcon, y = a.prefixCls, x = a.loading;
        if (N)
          return (0, t.createVNode)("span", {
            class: "".concat(y, "-loading-icon")
          }, [(0, t.createVNode)(e.default, null, null)]);
        var _ = !!x;
        return (0, t.createVNode)(l.default, {
          name: "".concat(y, "-loading-icon-motion"),
          onBeforeEnter: n,
          onEnter: i,
          onAfterEnter: g,
          onBeforeLeave: i,
          onLeave: function(w) {
            setTimeout(function() {
              n(w);
            });
          },
          onAfterLeave: g
        }, {
          default: function() {
            return [_ ? (0, t.createVNode)("span", {
              class: "".concat(y, "-loading-icon")
            }, [(0, t.createVNode)(e.default, null, null)]) : null];
          }
        });
      };
    }
  });
  return j.default = B, j;
}
var ne;
function je() {
  return ne || (ne = 1, function(o) {
    var t = P.exports;
    Object.defineProperty(o, "__esModule", {
      value: !0
    }), Object.defineProperty(o, "buttonProps", {
      enumerable: !0,
      get: function() {
        return B.default;
      }
    }), o.default = void 0;
    var e = J, l = t(qe()), n = t(ie()), i = t(Te.exports), g = t(Be()), B = t(we()), b = fe(), a = t(de()), N = t(xe()), y = t(Se()), x = /^[\u4e00-\u9fa5]{2}$/, _ = x.test.bind(x);
    function h(d) {
      return d === "text" || d === "link";
    }
    var w = (0, e.defineComponent)({
      compatConfig: {
        MODE: 3
      },
      name: "AButton",
      inheritAttrs: !1,
      __ANT_BUTTON: !0,
      props: (0, b.initDefaultProps)((0, B.default)(), {
        type: "default"
      }),
      slots: ["icon"],
      setup: function(r, m) {
        var I = m.slots, H = m.attrs, ce = m.emit, O = (0, a.default)("btn", r), L = O.prefixCls, K = O.autoInsertSpaceInButton, se = O.direction, ve = O.size, U = (0, e.ref)(null), R = (0, e.ref)(void 0), V = !1, C = (0, e.ref)(!1), S = (0, e.ref)(!1), Q = (0, e.computed)(function() {
          return K.value !== !1;
        }), G = (0, e.computed)(function() {
          return (0, i.default)(r.loading) === "object" && r.loading.delay ? r.loading.delay || !0 : !!r.loading;
        });
        (0, e.watch)(G, function(u) {
          clearTimeout(R.value), typeof G.value == "number" ? R.value = setTimeout(function() {
            C.value = u;
          }, G.value) : C.value = u;
        }, {
          immediate: !0
        });
        var pe = (0, e.computed)(function() {
          var u, f = r.type, p = r.shape, s = p === void 0 ? "default" : p, v = r.ghost, $ = r.block, z = r.danger, c = L.value, D = {
            large: "lg",
            small: "sm",
            middle: void 0
          }, E = ve.value, M = E && D[E] || "";
          return u = {}, (0, n.default)(u, "".concat(c), !0), (0, n.default)(u, "".concat(c, "-").concat(f), f), (0, n.default)(u, "".concat(c, "-").concat(s), s !== "default" && s), (0, n.default)(u, "".concat(c, "-").concat(M), M), (0, n.default)(u, "".concat(c, "-loading"), C.value), (0, n.default)(u, "".concat(c, "-background-ghost"), v && !h(f)), (0, n.default)(u, "".concat(c, "-two-chinese-chars"), S.value && Q.value), (0, n.default)(u, "".concat(c, "-block"), $), (0, n.default)(u, "".concat(c, "-dangerous"), !!z), (0, n.default)(u, "".concat(c, "-rtl"), se.value === "rtl"), u;
        }), X = function() {
          var f = U.value;
          if (!(!f || K.value === !1)) {
            var p = f.textContent;
            V && _(p) ? S.value || (S.value = !0) : S.value && (S.value = !1);
          }
        }, ge = function(f) {
          if (C.value || r.disabled) {
            f.preventDefault();
            return;
          }
          ce("click", f);
        }, be = function(f, p) {
          var s = p ? " " : "";
          if (f.type === e.Text) {
            var v = f.children.trim();
            return _(v) && (v = v.split("").join(s)), (0, e.createVNode)("span", null, [v]);
          }
          return f;
        };
        return (0, e.watchEffect)(function() {
          (0, N.default)(!(r.ghost && h(r.type)), "Button", "`link` or `text` button can't be a `ghost` button.");
        }), (0, e.onMounted)(X), (0, e.onUpdated)(X), (0, e.onBeforeUnmount)(function() {
          R.value && clearTimeout(R.value);
        }), function() {
          var u, f, p = r.icon, s = p === void 0 ? (u = I.icon) === null || u === void 0 ? void 0 : u.call(I) : p, v = (0, b.flattenChildren)((f = I.default) === null || f === void 0 ? void 0 : f.call(I));
          V = v.length === 1 && !s && !h(r.type);
          var $ = r.type, z = r.htmlType, c = r.disabled, D = r.href, E = r.title, M = r.target, ye = r.onMousedown, _e = C.value ? "loading" : s, W = (0, l.default)((0, l.default)({}, H), {}, {
            title: E,
            disabled: c,
            class: [pe.value, H.class, (0, n.default)({}, "".concat(L.value, "-icon-only"), v.length === 0 && !!_e)],
            onClick: ge,
            onMousedown: ye
          });
          c || delete W.disabled;
          var Y = s && !C.value ? s : (0, e.createVNode)(y.default, {
            existIcon: !!s,
            prefixCls: L.value,
            loading: !!C.value
          }, null), Z = v.map(function(te) {
            return be(te, V && Q.value);
          });
          if (D !== void 0)
            return (0, e.createVNode)("a", (0, l.default)((0, l.default)({}, W), {}, {
              href: D,
              target: M,
              ref: U
            }), [Y, Z]);
          var ee = (0, e.createVNode)("button", (0, l.default)((0, l.default)({}, W), {}, {
            ref: U,
            type: z
          }), [Y, Z]);
          return h($) ? ee : (0, e.createVNode)(g.default, {
            ref: "wave",
            disabled: !!C.value
          }, {
            default: function() {
              return [ee];
            }
          });
        };
      }
    });
    o.default = w;
  }(F)), F;
}
var T = {}, k = {}, ue;
function ke() {
  if (ue)
    return k;
  ue = 1;
  var o = P.exports;
  Object.defineProperty(k, "__esModule", {
    value: !0
  }), k.default = void 0;
  var t = o(Pe()), e = o(Ne()), l = /* @__PURE__ */ (0, t.default)(function n(i) {
    (0, e.default)(this, n), this.error = new Error("unreachable case: ".concat(JSON.stringify(i)));
  });
  return k.default = l, k;
}
var oe;
function Ie() {
  if (oe)
    return T;
  oe = 1;
  var o = P.exports;
  Object.defineProperty(T, "__esModule", {
    value: !0
  }), T.default = T.buttonGroupProps = void 0;
  var t = J, e = o(ie()), l = fe(), n = o(de()), i = o(ke()), g = function() {
    return {
      prefixCls: String,
      size: {
        type: String
      }
    };
  };
  T.buttonGroupProps = g;
  var B = (0, t.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "AButtonGroup",
    props: g(),
    setup: function(a, N) {
      var y = N.slots, x = (0, n.default)("btn-group", a), _ = x.prefixCls, h = x.direction, w = (0, t.computed)(function() {
        var d, r = a.size, m = "";
        switch (r) {
          case "large":
            m = "lg";
            break;
          case "small":
            m = "sm";
            break;
          case "middle":
          case void 0:
            break;
          default:
            console.warn(new i.default(r).error);
        }
        return d = {}, (0, e.default)(d, "".concat(_.value), !0), (0, e.default)(d, "".concat(_.value, "-").concat(m), m), (0, e.default)(d, "".concat(_.value, "-rtl"), h.value === "rtl"), d;
      });
      return function() {
        var d;
        return (0, t.createVNode)("div", {
          class: w.value
        }, [(0, l.flattenChildren)((d = y.default) === null || d === void 0 ? void 0 : d.call(y))]);
      };
    }
  });
  return T.default = B, T;
}
var le;
function Le() {
  return le || (le = 1, function(o) {
    var t = P.exports;
    Object.defineProperty(o, "__esModule", {
      value: !0
    }), Object.defineProperty(o, "ButtonGroup", {
      enumerable: !0,
      get: function() {
        return l.default;
      }
    }), o.default = void 0;
    var e = t(je()), l = t(Ie());
    e.default.Group = l.default, e.default.install = function(i) {
      return i.component(e.default.name, e.default), i.component(l.default.name, l.default), i;
    };
    var n = e.default;
    o.default = n;
  }(A)), A;
}
export {
  we as a,
  Le as r
};
