import { a as oe } from "./_commonjsHelpers.da91e947.js";
import { z as le, e as ie, k as j, r as U, d as z, b as se, s as de, j as ce, w as ue, i as fe } from "./useConfigInject.fdc04e2e.js";
import { r as W } from "./_vue_commonjs-external.cdc460b2.js";
function pe(r, a) {
  for (var e = 0; e < a.length; e++) {
    const o = a[e];
    if (typeof o != "string" && !Array.isArray(o)) {
      for (const n in o)
        if (n !== "default" && !(n in r)) {
          const l = Object.getOwnPropertyDescriptor(o, n);
          l && Object.defineProperty(r, n, l.get ? l : {
            enumerable: !0,
            get: () => o[n]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }));
}
var f = {}, T;
function G() {
  if (T)
    return f;
  T = 1;
  var r = j.exports;
  Object.defineProperty(f, "__esModule", {
    value: !0
  }), f.collapseProps = f.collapsePanelProps = void 0;
  var a = le(), e = r(ie()), o = function() {
    return {
      prefixCls: String,
      activeKey: {
        type: [Array, Number, String]
      },
      defaultActiveKey: {
        type: [Array, Number, String]
      },
      accordion: {
        type: Boolean,
        default: void 0
      },
      destroyInactivePanel: {
        type: Boolean,
        default: void 0
      },
      bordered: {
        type: Boolean,
        default: void 0
      },
      expandIcon: Function,
      openAnimation: e.default.object,
      expandIconPosition: e.default.oneOf((0, a.tuple)("left", "right")),
      collapsible: {
        type: String
      },
      ghost: {
        type: Boolean,
        default: void 0
      },
      onChange: Function,
      "onUpdate:activeKey": Function
    };
  };
  f.collapseProps = o;
  var n = function() {
    return {
      openAnimation: e.default.object,
      prefixCls: String,
      header: e.default.any,
      headerClass: String,
      showArrow: {
        type: Boolean,
        default: void 0
      },
      isActive: {
        type: Boolean,
        default: void 0
      },
      destroyInactivePanel: {
        type: Boolean,
        default: void 0
      },
      disabled: {
        type: Boolean,
        default: void 0
      },
      accordion: {
        type: Boolean,
        default: void 0
      },
      forceRender: {
        type: Boolean,
        default: void 0
      },
      expandIcon: Function,
      extra: e.default.any,
      panelKey: e.default.oneOfType([e.default.string, e.default.number]),
      collapsible: {
        type: String
      },
      role: String,
      onItemClick: {
        type: Function
      }
    };
  };
  return f.collapsePanelProps = n, f;
}
var w = {}, b = {}, E;
function ve() {
  if (E)
    return b;
  E = 1;
  var r = j.exports;
  Object.defineProperty(b, "__esModule", {
    value: !0
  }), b.default = void 0;
  var a = W, e = r(U()), o = G(), n = r(z()), l = (0, a.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "PanelContent",
    props: (0, o.collapsePanelProps)(),
    setup: function(s, A) {
      var P = A.slots, h = (0, a.ref)(!1);
      return (0, a.watchEffect)(function() {
        (s.isActive || s.forceRender) && (h.value = !0);
      }), function() {
        var p, y;
        if (!h.value)
          return null;
        var d = s.prefixCls, t = s.isActive, m = s.role;
        return (0, a.createVNode)("div", {
          ref: a.ref,
          class: (0, n.default)("".concat(d, "-content"), (p = {}, (0, e.default)(p, "".concat(d, "-content-active"), t), (0, e.default)(p, "".concat(d, "-content-inactive"), !t), p)),
          role: m
        }, [(0, a.createVNode)("div", {
          class: "".concat(d, "-content-box")
        }, [(y = P.default) === null || y === void 0 ? void 0 : y.call(P)])]);
      };
    }
  });
  return b.default = l, b;
}
(function(r) {
  var a = j.exports;
  Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "collapsePanelProps", {
    enumerable: !0,
    get: function() {
      return s.collapsePanelProps;
    }
  }), r.default = void 0;
  var e = W, o = a(se()), n = a(U()), l = a(ve()), O = de(), s = G(), A = a(ce()), P = a(z()), h = a(ue()), p = a(fe()), y = (0, e.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "ACollapsePanel",
    inheritAttrs: !1,
    props: (0, O.initDefaultProps)((0, s.collapsePanelProps)(), {
      showArrow: !0,
      isActive: !1,
      onItemClick: function() {
      },
      headerClass: "",
      forceRender: !1
    }),
    slots: ["expandIcon", "extra", "header"],
    setup: function(t, m) {
      var v = m.slots, H = m.emit, I = m.attrs;
      (0, h.default)(t.disabled === void 0, "Collapse.Panel", '`disabled` is deprecated. Please use `collapsible="disabled"` instead.');
      var J = (0, p.default)("collapse", t), L = J.prefixCls, q = function() {
        H("itemClick", t.panelKey);
      }, Q = function(c) {
        (c.key === "Enter" || c.keyCode === 13 || c.which === 13) && q();
      };
      return function() {
        var C, c, g, u, k = t.header, S = k === void 0 ? (C = v.header) === null || C === void 0 ? void 0 : C.call(v) : k, D = t.headerClass, _ = t.isActive, N = t.showArrow, X = t.destroyInactivePanel, R = t.accordion, Y = t.forceRender, Z = t.openAnimation, V = t.expandIcon, B = V === void 0 ? v.expandIcon : V, $ = t.extra, K = $ === void 0 ? (c = v.extra) === null || c === void 0 ? void 0 : c.call(v) : $, x = t.collapsible, F = x === "disabled", i = L.value, ee = (0, P.default)("".concat(i, "-header"), (g = {}, (0, n.default)(g, D, D), (0, n.default)(g, "".concat(i, "-header-collapsible-only"), x === "header"), g)), ae = (0, P.default)((u = {}, (0, n.default)(u, "".concat(i, "-item"), !0), (0, n.default)(u, "".concat(i, "-item-active"), _), (0, n.default)(u, "".concat(i, "-item-disabled"), F), (0, n.default)(u, "".concat(i, "-no-arrow"), !N), (0, n.default)(u, "".concat(I.class), !!I.class), u)), M = (0, e.createVNode)("i", {
          class: "arrow"
        }, null);
        N && typeof B == "function" && (M = B(t));
        var te = (0, e.withDirectives)((0, e.createVNode)(l.default, {
          prefixCls: i,
          isActive: _,
          forceRender: Y,
          role: R ? "tabpanel" : null
        }, {
          default: v.default
        }), [[e.vShow, _]]), ne = (0, o.default)({
          appear: !1,
          css: !1
        }, Z);
        return (0, e.createVNode)("div", (0, o.default)((0, o.default)({}, I), {}, {
          class: ae
        }), [(0, e.createVNode)("div", {
          class: ee,
          onClick: function() {
            return x !== "header" && q();
          },
          role: R ? "tab" : "button",
          tabindex: F ? -1 : 0,
          "aria-expanded": _,
          onKeypress: Q
        }, [N && M, x === "header" ? (0, e.createVNode)("span", {
          onClick: q,
          class: "".concat(i, "-header-text")
        }, [S]) : S, K && (0, e.createVNode)("div", {
          class: "".concat(i, "-extra")
        }, [K])]), (0, e.createVNode)(A.default, ne, {
          default: function() {
            return [!X || _ ? te : null];
          }
        })]);
      };
    }
  });
  r.default = y;
})(w);
const Pe = /* @__PURE__ */ oe(w), _e = /* @__PURE__ */ pe({
  __proto__: null,
  default: Pe
}, [w]);
export {
  _e as C,
  w as a,
  G as r
};
