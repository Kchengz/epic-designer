import { r as z, j as ve, i as N, a as X, o as pe, e as be, c as he, q as xe, f as J, g as L, b as me } from "./useConfigInject-f4796704.mjs";
import { r as Ce } from "./createForOfIteratorHelper-c8bf5487.mjs";
import { r as ge } from "./Checkbox-4804d454.mjs";
import { r as Q } from "./FormItemContext-4e085918.mjs";
function ke(o, e) {
  for (var l = 0; l < e.length; l++) {
    const t = e[l];
    if (typeof t != "string" && !Array.isArray(t)) {
      for (const c in t)
        if (c !== "default" && !(c in o)) {
          const b = Object.getOwnPropertyDescriptor(t, c);
          b && Object.defineProperty(o, c, b.get ? b : {
            enumerable: !0,
            get: () => t[c]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }));
}
var w = {}, j = {}, d = {}, T;
function Y() {
  if (T)
    return d;
  T = 1;
  var o = N;
  Object.defineProperty(d, "__esModule", {
    value: !0
  }), d.checkboxProps = d.checkboxGroupProps = d.abstractCheckboxProps = d.abstractCheckboxGroupProps = d.CheckboxGroupContextKey = void 0;
  var e = o(z()), l = o(ve()), t = function() {
    return {
      name: String,
      prefixCls: String,
      options: {
        type: Array,
        default: function() {
          return [];
        }
      },
      disabled: Boolean,
      id: String
    };
  };
  d.abstractCheckboxGroupProps = t;
  var c = function() {
    return (0, e.default)((0, e.default)({}, t()), {}, {
      defaultValue: {
        type: Array
      },
      value: {
        type: Array
      },
      onChange: {
        type: Function
      },
      "onUpdate:value": {
        type: Function
      }
    });
  };
  d.checkboxGroupProps = c;
  var b = function() {
    return {
      prefixCls: String,
      defaultChecked: {
        type: Boolean,
        default: void 0
      },
      checked: {
        type: Boolean,
        default: void 0
      },
      disabled: {
        type: Boolean,
        default: void 0
      },
      isGroup: {
        type: Boolean,
        default: void 0
      },
      value: l.default.any,
      name: String,
      id: String,
      indeterminate: {
        type: Boolean,
        default: void 0
      },
      type: {
        type: String,
        default: "checkbox"
      },
      autofocus: {
        type: Boolean,
        default: void 0
      },
      onChange: Function,
      "onUpdate:checked": Function,
      onClick: Function,
      skipGroup: {
        type: Boolean,
        default: !1
      }
    };
  };
  d.abstractCheckboxProps = b;
  var y = function() {
    return (0, e.default)((0, e.default)({}, b()), {}, {
      indeterminate: {
        type: Boolean,
        default: !1
      }
    });
  };
  d.checkboxProps = y;
  var _ = Symbol("CheckboxGroupContext");
  return d.CheckboxGroupContextKey = _, d;
}
var H;
function ye() {
  if (H)
    return j;
  H = 1;
  var o = N;
  Object.defineProperty(j, "__esModule", {
    value: !0
  }), j.default = void 0;
  var e = L, l = o(X()), t = o(z()), c = o(pe()), b = o(be()), y = o(ge()), _ = he(), g = o(xe()), S = Q(), m = o(J()), k = Y(), q = ["indeterminate", "skipGroup", "id"], O = ["onMouseenter", "onMouseleave", "onInput", "class", "style"], B = (0, e.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "ACheckbox",
    inheritAttrs: !1,
    __ANT_CHECKBOX: !0,
    props: (0, k.checkboxProps)(),
    // emits: ['change', 'update:checked'],
    setup: function(i, P) {
      var r = P.emit, a = P.attrs, s = P.slots, h = P.expose, x = (0, S.useInjectFormItemContext)(), u = (0, m.default)("checkbox", i), v = u.prefixCls, A = u.direction, p = (0, e.inject)(k.CheckboxGroupContextKey, void 0), G = Symbol("checkboxUniId");
      (0, e.watchEffect)(function() {
        !i.skipGroup && p && p.registerValue(G, i.value);
      }), (0, e.onBeforeUnmount)(function() {
        p && p.cancelValue(G);
      }), (0, e.onMounted)(function() {
        (0, g.default)(i.checked !== void 0 || p || i.value === void 0, "Checkbox", "`value` is not validate prop, do you mean `checked`?");
      });
      var ee = function(n) {
        var V = n.target.checked;
        r("update:checked", V), r("change", n);
      }, $ = (0, e.ref)(), ae = function() {
        var n;
        (n = $.value) === null || n === void 0 || n.focus();
      }, re = function() {
        var n;
        (n = $.value) === null || n === void 0 || n.blur();
      };
      return h({
        focus: ae,
        blur: re
      }), function() {
        var I, n, V = (0, _.flattenChildren)((I = s.default) === null || I === void 0 ? void 0 : I.call(s)), D = i.indeterminate, te = i.skipGroup, U = i.id, ue = U === void 0 ? x.id.value : U, ne = (0, c.default)(i, q), oe = a.onMouseenter, le = a.onMouseleave;
        a.onInput;
        var ie = a.class, ce = a.style, de = (0, c.default)(a, O), C = (0, t.default)((0, t.default)({}, ne), {}, {
          id: ue,
          prefixCls: v.value
        }, de);
        p && !te ? (C.onChange = function() {
          for (var K = arguments.length, E = new Array(K), F = 0; F < K; F++)
            E[F] = arguments[F];
          r.apply(void 0, ["change"].concat(E)), p.toggleOption({
            label: V,
            value: i.value
          });
        }, C.name = p.name.value, C.checked = p.mergedValue.value.indexOf(i.value) !== -1, C.disabled = i.disabled || p.disabled.value, C.indeterminate = D) : C.onChange = ee;
        var fe = (0, b.default)((n = {}, (0, l.default)(n, "".concat(v.value, "-wrapper"), !0), (0, l.default)(n, "".concat(v.value, "-rtl"), A.value === "rtl"), (0, l.default)(n, "".concat(v.value, "-wrapper-checked"), C.checked), (0, l.default)(n, "".concat(v.value, "-wrapper-disabled"), C.disabled), n), ie), se = (0, b.default)((0, l.default)({}, "".concat(v.value, "-indeterminate"), D));
        return (0, e.createVNode)("label", {
          class: fe,
          style: ce,
          onMouseenter: oe,
          onMouseleave: le
        }, [(0, e.createVNode)(y.default, (0, t.default)((0, t.default)({}, C), {}, {
          class: se,
          ref: $
        }), null), V.length ? (0, e.createVNode)("span", null, [V]) : null]);
      };
    }
  });
  return j.default = B, j;
}
var M = N;
Object.defineProperty(w, "__esModule", {
  value: !0
});
var Z = w.default = void 0, f = L, _e = M(X()), Pe = M(me()), Ge = M(Ce()), Ie = M(ye()), qe = Q(), Oe = M(J()), W = Y(), Ve = (0, f.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: "ACheckboxGroup",
  props: (0, W.checkboxGroupProps)(),
  // emits: ['change', 'update:value'],
  setup: function(e, l) {
    var t = l.slots, c = l.emit, b = l.expose, y = (0, qe.useInjectFormItemContext)(), _ = (0, Oe.default)("checkbox", e), g = _.prefixCls, S = _.direction, m = (0, f.ref)((e.value === void 0 ? e.defaultValue : e.value) || []);
    (0, f.watch)(function() {
      return e.value;
    }, function() {
      m.value = e.value || [];
    });
    var k = (0, f.computed)(function() {
      return e.options.map(function(r) {
        return typeof r == "string" || typeof r == "number" ? {
          label: r,
          value: r
        } : r;
      });
    }), q = (0, f.ref)(Symbol()), O = (0, f.ref)(/* @__PURE__ */ new Map()), B = function(a) {
      O.value.delete(a), q.value = Symbol();
    }, R = function(a, s) {
      O.value.set(a, s), q.value = Symbol();
    }, i = (0, f.ref)(/* @__PURE__ */ new Map());
    (0, f.watch)(q, function() {
      var r = /* @__PURE__ */ new Map(), a = (0, Ge.default)(O.value.values()), s;
      try {
        for (a.s(); !(s = a.n()).done; ) {
          var h = s.value;
          r.set(h, !0);
        }
      } catch (x) {
        a.e(x);
      } finally {
        a.f();
      }
      i.value = r;
    });
    var P = function(a) {
      var s = m.value.indexOf(a.value), h = (0, Pe.default)(m.value);
      s === -1 ? h.push(a.value) : h.splice(s, 1), e.value === void 0 && (m.value = h);
      var x = h.filter(function(u) {
        return i.value.has(u);
      }).sort(function(u, v) {
        var A = k.value.findIndex(function(G) {
          return G.value === u;
        }), p = k.value.findIndex(function(G) {
          return G.value === v;
        });
        return A - p;
      });
      c("update:value", x), c("change", x), y.onFieldChange();
    };
    return (0, f.provide)(W.CheckboxGroupContextKey, {
      cancelValue: B,
      registerValue: R,
      toggleOption: P,
      mergedValue: m,
      name: (0, f.computed)(function() {
        return e.name;
      }),
      disabled: (0, f.computed)(function() {
        return e.disabled;
      })
    }), b({
      mergedValue: m
    }), function() {
      var r, a = e.id, s = a === void 0 ? y.id.value : a, h = null, x = "".concat(g.value, "-group");
      return k.value && k.value.length > 0 && (h = k.value.map(function(u) {
        var v;
        return (0, f.createVNode)(Ie.default, {
          prefixCls: g.value,
          key: u.value.toString(),
          disabled: "disabled" in u ? u.disabled : e.disabled,
          indeterminate: u.indeterminate,
          value: u.value,
          checked: m.value.indexOf(u.value) !== -1,
          onChange: u.onChange,
          class: "".concat(x, "-item")
        }, {
          default: function() {
            return [u.label === void 0 ? (v = t.label) === null || v === void 0 ? void 0 : v.call(t, u) : u.label];
          }
        });
      })), (0, f.createVNode)("div", {
        class: [x, (0, _e.default)({}, "".concat(x, "-rtl"), S.value === "rtl")],
        id: s
      }, [h || ((r = t.default) === null || r === void 0 ? void 0 : r.call(t))]);
    };
  }
});
Z = w.default = Ve;
const Fe = /* @__PURE__ */ ke({
  __proto__: null,
  get default() {
    return Z;
  }
}, [w]);
export {
  Fe as G
};
