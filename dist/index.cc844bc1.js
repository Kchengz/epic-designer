import { a as ne } from "./_commonjsHelpers.da91e947.js";
import { _ as k } from "./index.1fa3133f.js";
import { b as le, r as ie, t as oe, s as ue, y as ce, d as de, i as se, k as fe } from "./useConfigInject.fdc04e2e.js";
import { r as ve } from "./_vue_commonjs-external.cdc460b2.js";
import { r as pe } from "./vnode.716a0aad.js";
import { r as me, a as ye } from "./CollapsePanel.9c465ea3.js";
import { r as ge } from "./RightOutlined.6a1a2e8d.js";
import { r as Pe } from "./firstNotUndefined.4390bc7f.js";
import { r as _e } from "./collapseMotion.7799b65c.js";
function he(i, u) {
  for (var a = 0; a < u.length; a++) {
    const c = u[a];
    if (typeof c != "string" && !Array.isArray(c)) {
      for (const o in c)
        if (o !== "default" && !(o in i)) {
          const v = Object.getOwnPropertyDescriptor(c, o);
          v && Object.defineProperty(i, o, v.get ? v : {
            enumerable: !0,
            get: () => c[o]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(i, Symbol.toStringTag, { value: "Module" }));
}
var $ = {}, F = {};
(function(i) {
  var u = fe.exports;
  Object.defineProperty(i, "__esModule", {
    value: !0
  }), Object.defineProperty(i, "collapseProps", {
    enumerable: !0,
    get: function() {
      return f.collapseProps;
    }
  }), i.default = void 0;
  var a = ve, c = u(le()), o = u(ie()), v = u(oe()), I = u(k.exports), e = ue(), y = pe(), f = me(), p = ce(), C = u(ge()), m = u(Pe()), P = u(de()), z = u(se()), B = u(_e());
  function M(q) {
    var r = q;
    if (!Array.isArray(r)) {
      var _ = (0, I.default)(r);
      r = _ === "number" || _ === "string" ? [r] : [];
    }
    return r.map(function(h) {
      return String(h);
    });
  }
  var T = (0, a.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "ACollapse",
    inheritAttrs: !1,
    props: (0, e.initDefaultProps)((0, f.collapseProps)(), {
      accordion: !1,
      destroyInactivePanel: !1,
      bordered: !0,
      openAnimation: (0, B.default)("ant-motion-collapse", !1),
      expandIconPosition: "left"
    }),
    slots: ["expandIcon"],
    setup: function(r, _) {
      var h = _.attrs, x = _.slots, j = _.emit, b = (0, a.ref)(M((0, m.default)([r.activeKey, r.defaultActiveKey])));
      (0, a.watch)(function() {
        return r.activeKey;
      }, function() {
        b.value = M(r.activeKey);
      }, {
        deep: !0
      });
      var E = (0, z.default)("collapse", r), g = E.prefixCls, R = E.direction, G = (0, a.computed)(function() {
        var l = r.expandIconPosition;
        return l !== void 0 ? l : R.value === "rtl" ? "right" : "left";
      }), H = function(t) {
        var n = r.expandIcon, s = n === void 0 ? x.expandIcon : n, d = s ? s(t) : (0, a.createVNode)(C.default, {
          rotate: t.isActive ? 90 : void 0
        }, null);
        return (0, a.createVNode)("div", null, [(0, e.isValidElement)(Array.isArray(s) ? d[0] : d) ? (0, y.cloneElement)(d, {
          class: "".concat(g.value, "-arrow")
        }, !1) : d]);
      }, J = function(t) {
        r.activeKey === void 0 && (b.value = t);
        var n = r.accordion ? t[0] : t;
        j("update:activeKey", n), j("change", n);
      }, L = function(t) {
        var n = b.value;
        if (r.accordion)
          n = n[0] === t ? [] : [t];
        else {
          n = (0, v.default)(n);
          var s = n.indexOf(t), d = s > -1;
          d ? n.splice(s, 1) : n.push(t);
        }
        J(n);
      }, Q = function(t, n) {
        var s, d, w;
        if (!(0, e.isEmptyElement)(t)) {
          var S = b.value, U = r.accordion, Y = r.destroyInactivePanel, Z = r.collapsible, ee = r.openAnimation, A = String((s = t.key) !== null && s !== void 0 ? s : n), O = t.props || {}, W = O.header, re = W === void 0 ? (d = t.children) === null || d === void 0 || (w = d.header) === null || w === void 0 ? void 0 : w.call(d) : W, te = O.headerClass, N = O.collapsible, V = O.disabled, K = !1;
          U ? K = S[0] === A : K = S.indexOf(A) > -1;
          var D = N != null ? N : Z;
          (V || V === "") && (D = "disabled");
          var ae = {
            key: A,
            panelKey: A,
            header: re,
            headerClass: te,
            isActive: K,
            prefixCls: g.value,
            destroyInactivePanel: Y,
            openAnimation: ee,
            accordion: U,
            onItemClick: D === "disabled" ? null : L,
            expandIcon: H,
            collapsible: D
          };
          return (0, y.cloneElement)(t, ae);
        }
      }, X = function() {
        var t;
        return (0, e.flattenChildren)((t = x.default) === null || t === void 0 ? void 0 : t.call(x)).map(Q);
      };
      return function() {
        var l, t = r.accordion, n = r.bordered, s = r.ghost, d = (0, P.default)((l = {}, (0, o.default)(l, g.value, !0), (0, o.default)(l, "".concat(g.value, "-borderless"), !n), (0, o.default)(l, "".concat(g.value, "-icon-position-").concat(G.value), !0), (0, o.default)(l, "".concat(g.value, "-rtl"), R.value === "rtl"), (0, o.default)(l, "".concat(g.value, "-ghost"), !!s), (0, o.default)(l, h.class, !!h.class), l));
        return (0, a.createVNode)("div", (0, c.default)((0, c.default)({
          class: d
        }, (0, p.getDataAndAriaProps)(h)), {}, {
          style: h.style,
          role: t ? "tablist" : null
        }), [X()]);
      };
    }
  });
  i.default = T;
})(F);
(function(i) {
  var u = k.exports;
  Object.defineProperty(i, "__esModule", {
    value: !0
  }), Object.defineProperty(i, "CollapsePanel", {
    enumerable: !0,
    get: function() {
      return c.default;
    }
  }), Object.defineProperty(i, "collapsePanelProps", {
    enumerable: !0,
    get: function() {
      return c.collapsePanelProps;
    }
  }), Object.defineProperty(i, "collapseProps", {
    enumerable: !0,
    get: function() {
      return a.collapseProps;
    }
  }), i.default = void 0;
  var a = v(F), c = v(ye);
  function o(e) {
    if (typeof WeakMap != "function")
      return null;
    var y = /* @__PURE__ */ new WeakMap(), f = /* @__PURE__ */ new WeakMap();
    return (o = function(C) {
      return C ? f : y;
    })(e);
  }
  function v(e, y) {
    if (!y && e && e.__esModule)
      return e;
    if (e === null || u(e) !== "object" && typeof e != "function")
      return { default: e };
    var f = o(y);
    if (f && f.has(e))
      return f.get(e);
    var p = {}, C = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var m in e)
      if (m !== "default" && Object.prototype.hasOwnProperty.call(e, m)) {
        var P = C ? Object.getOwnPropertyDescriptor(e, m) : null;
        P && (P.get || P.set) ? Object.defineProperty(p, m, P) : p[m] = e[m];
      }
    return p.default = e, f && f.set(e, p), p;
  }
  a.default.Panel = c.default, a.default.install = function(e) {
    return e.component(a.default.name, a.default), e.component(c.default.name, c.default), e;
  };
  var I = a.default;
  i.default = I;
})($);
const Ce = /* @__PURE__ */ ne($), De = /* @__PURE__ */ he({
  __proto__: null,
  default: Ce
}, [$]);
export {
  De as i
};
