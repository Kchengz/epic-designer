import { j as qe, i as N, A as Te, k as xe, g as J, r as Be, a as ie, c as fe, f as de, l as Ne } from "./useConfigInject-f0dbb416.mjs";
import { _ as Pe } from "./index-5fc6c346.mjs";
import { r as Se } from "./wave-7581548b.mjs";
import { a as we, r as je } from "./classCallCheck-7491e821.mjs";
var W = {}, F = {}, q = {}, ae;
function ke() {
  if (ae)
    return q;
  ae = 1;
  var l = N;
  Object.defineProperty(q, "__esModule", {
    value: !0
  }), q.buttonProps = void 0, q.convertLegacyProps = e, q.default = void 0;
  var t = l(qe());
  function e(f) {
    return f === "danger" ? {
      danger: !0
    } : {
      type: f
    };
  }
  var i = function() {
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
  q.buttonProps = i;
  var o = i;
  return q.default = o, q;
}
var k = {}, ne;
function Ie() {
  if (ne)
    return k;
  ne = 1;
  var l = N;
  Object.defineProperty(k, "__esModule", {
    value: !0
  }), k.default = void 0;
  var t = J, e = l(Te()), i = l(xe()), o = function(a) {
    a && (a.style.width = "0px", a.style.opacity = "0", a.style.transform = "scale(0)");
  }, f = function(a) {
    (0, t.nextTick)(function() {
      a && (a.style.width = "".concat(a.scrollWidth, "px"), a.style.opacity = "1", a.style.transform = "scale(1)");
    });
  }, b = function(a) {
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
        var P = a.existIcon, _ = a.prefixCls, T = a.loading;
        if (P)
          return (0, t.createVNode)("span", {
            class: "".concat(_, "-loading-icon")
          }, [(0, t.createVNode)(e.default, null, null)]);
        var h = !!T;
        return (0, t.createVNode)(i.default, {
          name: "".concat(_, "-loading-icon-motion"),
          onBeforeEnter: o,
          onEnter: f,
          onAfterEnter: b,
          onBeforeLeave: f,
          onLeave: function(S) {
            setTimeout(function() {
              o(S);
            });
          },
          onAfterLeave: b
        }, {
          default: function() {
            return [h ? (0, t.createVNode)("span", {
              class: "".concat(_, "-loading-icon")
            }, [(0, t.createVNode)(e.default, null, null)]) : null];
          }
        });
      };
    }
  });
  return k.default = B, k;
}
var re;
function Oe() {
  return re || (re = 1, function(l) {
    var t = N;
    Object.defineProperty(l, "__esModule", {
      value: !0
    }), Object.defineProperty(l, "buttonProps", {
      enumerable: !0,
      get: function() {
        return B.default;
      }
    }), l.default = void 0;
    var e = J, i = t(Be()), o = t(ie()), f = t(Pe), b = t(Se()), B = t(ke()), y = fe(), a = t(de()), P = t(Ne()), _ = t(Ie()), T = /^[\u4e00-\u9fa5]{2}$/, h = T.test.bind(T);
    function m(d) {
      return d === "text" || d === "link";
    }
    var S = (0, e.defineComponent)({
      compatConfig: {
        MODE: 3
      },
      name: "AButton",
      inheritAttrs: !1,
      __ANT_BUTTON: !0,
      props: (0, y.initDefaultProps)((0, B.default)(), {
        type: "default"
      }),
      slots: ["icon"],
      // emits: ['click', 'mousedown'],
      setup: function(n, p) {
        var O = p.slots, H = p.attrs, ce = p.emit, se = p.expose, R = (0, a.default)("btn", n), $ = R.prefixCls, K = R.autoInsertSpaceInButton, ve = R.direction, pe = R.size, w = (0, e.ref)(null), E = (0, e.ref)(void 0), U = !1, C = (0, e.ref)(!1), j = (0, e.ref)(!1), Q = (0, e.computed)(function() {
          return K.value !== !1;
        }), V = (0, e.computed)(function() {
          return (0, f.default)(n.loading) === "object" && n.loading.delay ? n.loading.delay || !0 : !!n.loading;
        });
        (0, e.watch)(V, function(u) {
          clearTimeout(E.value), typeof V.value == "number" ? E.value = setTimeout(function() {
            C.value = u;
          }, V.value) : C.value = u;
        }, {
          immediate: !0
        });
        var ge = (0, e.computed)(function() {
          var u, r = n.type, g = n.shape, s = g === void 0 ? "default" : g, v = n.ghost, G = n.block, z = n.danger, c = $.value, D = {
            large: "lg",
            small: "sm",
            middle: void 0
          }, M = pe.value, L = M && D[M] || "";
          return u = {}, (0, o.default)(u, "".concat(c), !0), (0, o.default)(u, "".concat(c, "-").concat(r), r), (0, o.default)(u, "".concat(c, "-").concat(s), s !== "default" && s), (0, o.default)(u, "".concat(c, "-").concat(L), L), (0, o.default)(u, "".concat(c, "-loading"), C.value), (0, o.default)(u, "".concat(c, "-background-ghost"), v && !m(r)), (0, o.default)(u, "".concat(c, "-two-chinese-chars"), j.value && Q.value), (0, o.default)(u, "".concat(c, "-block"), G), (0, o.default)(u, "".concat(c, "-dangerous"), !!z), (0, o.default)(u, "".concat(c, "-rtl"), ve.value === "rtl"), u;
        }), X = function() {
          var r = w.value;
          if (!(!r || K.value === !1)) {
            var g = r.textContent;
            U && h(g) ? j.value || (j.value = !0) : j.value && (j.value = !1);
          }
        }, be = function(r) {
          if (C.value || n.disabled) {
            r.preventDefault();
            return;
          }
          ce("click", r);
        }, ye = function(r, g) {
          var s = g ? " " : "";
          if (r.type === e.Text) {
            var v = r.children.trim();
            return h(v) && (v = v.split("").join(s)), (0, e.createVNode)("span", null, [v]);
          }
          return r;
        };
        (0, e.watchEffect)(function() {
          (0, P.default)(!(n.ghost && m(n.type)), "Button", "`link` or `text` button can't be a `ghost` button.");
        }), (0, e.onMounted)(X), (0, e.onUpdated)(X), (0, e.onBeforeUnmount)(function() {
          E.value && clearTimeout(E.value);
        });
        var _e = function() {
          var r;
          (r = w.value) === null || r === void 0 || r.focus();
        }, he = function() {
          var r;
          (r = w.value) === null || r === void 0 || r.blur();
        };
        return se({
          focus: _e,
          blur: he
        }), function() {
          var u, r, g = n.icon, s = g === void 0 ? (u = O.icon) === null || u === void 0 ? void 0 : u.call(O) : g, v = (0, y.flattenChildren)((r = O.default) === null || r === void 0 ? void 0 : r.call(O));
          U = v.length === 1 && !s && !m(n.type);
          var G = n.type, z = n.htmlType, c = n.disabled, D = n.href, M = n.title, L = n.target, me = n.onMousedown, Ce = C.value ? "loading" : s, A = (0, i.default)((0, i.default)({}, H), {}, {
            title: M,
            disabled: c,
            class: [ge.value, H.class, (0, o.default)({}, "".concat($.value, "-icon-only"), v.length === 0 && !!Ce)],
            onClick: be,
            onMousedown: me
          });
          c || delete A.disabled;
          var Y = s && !C.value ? s : (0, e.createVNode)(_.default, {
            existIcon: !!s,
            prefixCls: $.value,
            loading: !!C.value
          }, null), Z = v.map(function(te) {
            return ye(te, U && Q.value);
          });
          if (D !== void 0)
            return (0, e.createVNode)("a", (0, i.default)((0, i.default)({}, A), {}, {
              href: D,
              target: L,
              ref: w
            }), [Y, Z]);
          var ee = (0, e.createVNode)("button", (0, i.default)((0, i.default)({}, A), {}, {
            ref: w,
            type: z
          }), [Y, Z]);
          return m(G) ? ee : (0, e.createVNode)(b.default, {
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
    l.default = S;
  }(F)), F;
}
var x = {}, I = {}, ue;
function Re() {
  if (ue)
    return I;
  ue = 1;
  var l = N;
  Object.defineProperty(I, "__esModule", {
    value: !0
  }), I.default = void 0;
  var t = l(we()), e = l(je()), i = /* @__PURE__ */ (0, t.default)(function o(f) {
    (0, e.default)(this, o), this.error = new Error("unreachable case: ".concat(JSON.stringify(f)));
  });
  return I.default = i, I;
}
var oe;
function Ee() {
  if (oe)
    return x;
  oe = 1;
  var l = N;
  Object.defineProperty(x, "__esModule", {
    value: !0
  }), x.default = x.buttonGroupProps = void 0;
  var t = J, e = l(ie()), i = fe(), o = l(de()), f = l(Re()), b = function() {
    return {
      prefixCls: String,
      size: {
        type: String
      }
    };
  };
  x.buttonGroupProps = b;
  var B = (0, t.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "AButtonGroup",
    props: b(),
    setup: function(a, P) {
      var _ = P.slots, T = (0, o.default)("btn-group", a), h = T.prefixCls, m = T.direction, S = (0, t.computed)(function() {
        var d, n = a.size, p = "";
        switch (n) {
          case "large":
            p = "lg";
            break;
          case "small":
            p = "sm";
            break;
          case "middle":
          case void 0:
            break;
          default:
            console.warn(new f.default(n).error);
        }
        return d = {}, (0, e.default)(d, "".concat(h.value), !0), (0, e.default)(d, "".concat(h.value, "-").concat(p), p), (0, e.default)(d, "".concat(h.value, "-rtl"), m.value === "rtl"), d;
      });
      return function() {
        var d;
        return (0, t.createVNode)("div", {
          class: S.value
        }, [(0, i.flattenChildren)((d = _.default) === null || d === void 0 ? void 0 : d.call(_))]);
      };
    }
  });
  return x.default = B, x;
}
var le;
function Ue() {
  return le || (le = 1, function(l) {
    var t = N;
    Object.defineProperty(l, "__esModule", {
      value: !0
    }), Object.defineProperty(l, "ButtonGroup", {
      enumerable: !0,
      get: function() {
        return i.default;
      }
    }), l.default = void 0;
    var e = t(Oe()), i = t(Ee());
    e.default.Group = i.default, e.default.install = function(f) {
      return f.component(e.default.name, e.default), f.component(i.default.name, i.default), f;
    };
    var o = e.default;
    l.default = o;
  }(W)), W;
}
export {
  ke as a,
  Ue as r
};
