import { N as be, b as J, e as he, k as R, r as L, a as xe, d as me, s as Ce, A as ge, i as Q, t as ye } from "./useConfigInject.fdc04e2e.js";
import { r as Y } from "./_vue_commonjs-external.cdc460b2.js";
import { r as ke } from "./Checkbox.4e93a606.js";
import { r as Z } from "./FormItemContext.896a7bec.js";
function _e(n, e) {
  for (var o = 0; o < e.length; o++) {
    const r = e[o];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const c in r)
        if (c !== "default" && !(c in n)) {
          const t = Object.getOwnPropertyDescriptor(r, c);
          t && Object.defineProperty(n, c, t.get ? t : {
            enumerable: !0,
            get: () => r[c]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var F = {}, $ = { exports: {} }, K;
function Pe() {
  return K || (K = 1, function(n) {
    var e = be();
    function o(r, c) {
      var t = typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
      if (!t) {
        if (Array.isArray(r) || (t = e(r)) || c && r && typeof r.length == "number") {
          t && (r = t);
          var k = 0, _ = function() {
          };
          return {
            s: _,
            n: function() {
              return k >= r.length ? {
                done: !0
              } : {
                done: !1,
                value: r[k++]
              };
            },
            e: function(b) {
              throw b;
            },
            f: _
          };
        }
        throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      var C = !0, I = !1, p;
      return {
        s: function() {
          t = t.call(r);
        },
        n: function() {
          var b = t.next();
          return C = b.done, b;
        },
        e: function(b) {
          I = !0, p = b;
        },
        f: function() {
          try {
            !C && t.return != null && t.return();
          } finally {
            if (I)
              throw p;
          }
        }
      };
    }
    n.exports = o, n.exports.__esModule = !0, n.exports.default = n.exports;
  }($)), $.exports;
}
var j = {}, s = {}, W;
function ee() {
  if (W)
    return s;
  W = 1;
  var n = R.exports;
  Object.defineProperty(s, "__esModule", {
    value: !0
  }), s.checkboxProps = s.checkboxGroupProps = s.abstractCheckboxProps = s.abstractCheckboxGroupProps = s.CheckboxGroupContextKey = void 0;
  var e = n(J()), o = n(he()), r = function() {
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
  s.abstractCheckboxGroupProps = r;
  var c = function() {
    return (0, e.default)((0, e.default)({}, r()), {}, {
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
  s.checkboxGroupProps = c;
  var t = function() {
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
      value: o.default.any,
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
  s.abstractCheckboxProps = t;
  var k = function() {
    return (0, e.default)((0, e.default)({}, t()), {}, {
      indeterminate: {
        type: Boolean,
        default: !1
      }
    });
  };
  s.checkboxProps = k;
  var _ = Symbol("CheckboxGroupContext");
  return s.CheckboxGroupContextKey = _, s;
}
var z;
function Ie() {
  if (z)
    return j;
  z = 1;
  var n = R.exports;
  Object.defineProperty(j, "__esModule", {
    value: !0
  }), j.default = void 0;
  var e = Y, o = n(L()), r = n(J()), c = n(xe()), t = n(me()), k = n(ke()), _ = Ce(), C = n(ge()), I = Z(), p = n(Q()), d = ee(), b = ["indeterminate", "skipGroup", "id"], S = ["onMouseenter", "onMouseleave", "onInput", "class", "style"], B = (0, e.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "ACheckbox",
    inheritAttrs: !1,
    __ANT_CHECKBOX: !0,
    props: (0, d.checkboxProps)(),
    setup: function(f, G) {
      var u = G.emit, a = G.attrs, h = G.slots, g = G.expose, y = (0, I.useInjectFormItemContext)(), l = (0, p.default)("checkbox", f), x = l.prefixCls, A = l.direction, m = (0, e.inject)(d.CheckboxGroupContextKey, void 0), O = Symbol("checkboxUniId");
      (0, e.watchEffect)(function() {
        !f.skipGroup && m && m.registerValue(O, f.value);
      }), (0, e.onBeforeUnmount)(function() {
        m && m.cancelValue(O);
      }), (0, e.onMounted)(function() {
        (0, C.default)(f.checked !== void 0 || m || f.value === void 0, "Checkbox", "`value` is not validate prop, do you mean `checked`?");
      });
      var te = function(i) {
        var V = i.target.checked;
        u("update:checked", V), u("change", i);
      }, N = (0, e.ref)(), ae = function() {
        var i;
        (i = N.value) === null || i === void 0 || i.focus();
      }, ne = function() {
        var i;
        (i = N.value) === null || i === void 0 || i.blur();
      };
      return g({
        focus: ae,
        blur: ne
      }), function() {
        var q, i, V = (0, _.flattenChildren)((q = h.default) === null || q === void 0 ? void 0 : q.call(h)), D = f.indeterminate, ue = f.skipGroup, T = f.id, oe = T === void 0 ? y.id.value : T, le = (0, c.default)(f, b), ie = a.onMouseenter, ce = a.onMouseleave;
        a.onInput;
        var de = a.class, fe = a.style, se = (0, c.default)(a, S), P = (0, r.default)((0, r.default)({}, le), {}, {
          id: oe,
          prefixCls: x.value
        }, se);
        m && !ue ? (P.onChange = function() {
          for (var E = arguments.length, H = new Array(E), w = 0; w < E; w++)
            H[w] = arguments[w];
          u.apply(void 0, ["change"].concat(H)), m.toggleOption({
            label: V,
            value: f.value
          });
        }, P.name = m.name.value, P.checked = m.mergedValue.value.indexOf(f.value) !== -1, P.disabled = f.disabled || m.disabled.value, P.indeterminate = D) : P.onChange = te;
        var ve = (0, t.default)((i = {}, (0, o.default)(i, "".concat(x.value, "-wrapper"), !0), (0, o.default)(i, "".concat(x.value, "-rtl"), A.value === "rtl"), (0, o.default)(i, "".concat(x.value, "-wrapper-checked"), P.checked), (0, o.default)(i, "".concat(x.value, "-wrapper-disabled"), P.disabled), i), de), pe = (0, t.default)((0, o.default)({}, "".concat(x.value, "-indeterminate"), D));
        return (0, e.createVNode)("label", {
          class: ve,
          style: fe,
          onMouseenter: ie,
          onMouseleave: ce
        }, [(0, e.createVNode)(k.default, (0, r.default)((0, r.default)({}, P), {}, {
          class: pe,
          ref: N
        }), null), V.length ? (0, e.createVNode)("span", null, [V]) : null]);
      };
    }
  });
  return j.default = B, j;
}
var M = R.exports;
Object.defineProperty(F, "__esModule", {
  value: !0
});
var re = F.default = void 0, v = Y, Ge = M(L()), Oe = M(ye()), qe = M(Pe()), Se = M(Ie()), Ve = Z(), je = M(Q()), X = ee(), Me = (0, v.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: "ACheckboxGroup",
  props: (0, X.checkboxGroupProps)(),
  setup: function(e, o) {
    var r = o.slots, c = o.emit, t = o.expose, k = (0, Ve.useInjectFormItemContext)(), _ = (0, je.default)("checkbox", e), C = _.prefixCls, I = _.direction, p = (0, v.ref)((e.value === void 0 ? e.defaultValue : e.value) || []);
    (0, v.watch)(function() {
      return e.value;
    }, function() {
      p.value = e.value || [];
    });
    var d = (0, v.computed)(function() {
      return e.options.map(function(u) {
        return typeof u == "string" || typeof u == "number" ? {
          label: u,
          value: u
        } : u;
      });
    }), b = (0, v.ref)(Symbol()), S = (0, v.ref)(/* @__PURE__ */ new Map()), B = function(a) {
      S.value.delete(a), b.value = Symbol();
    }, U = function(a, h) {
      S.value.set(a, h), b.value = Symbol();
    }, f = (0, v.ref)(/* @__PURE__ */ new Map());
    (0, v.watch)(b, function() {
      var u = /* @__PURE__ */ new Map(), a = (0, qe.default)(S.value.values()), h;
      try {
        for (a.s(); !(h = a.n()).done; ) {
          var g = h.value;
          u.set(g, !0);
        }
      } catch (y) {
        a.e(y);
      } finally {
        a.f();
      }
      f.value = u;
    });
    var G = function(a) {
      var h = p.value.indexOf(a.value), g = (0, Oe.default)(p.value);
      h === -1 ? g.push(a.value) : g.splice(h, 1), e.value === void 0 && (p.value = g);
      var y = g.filter(function(l) {
        return f.value.has(l);
      }).sort(function(l, x) {
        var A = d.value.findIndex(function(O) {
          return O.value === l;
        }), m = d.value.findIndex(function(O) {
          return O.value === x;
        });
        return A - m;
      });
      c("update:value", y), c("change", y), k.onFieldChange();
    };
    return (0, v.provide)(X.CheckboxGroupContextKey, {
      cancelValue: B,
      registerValue: U,
      toggleOption: G,
      mergedValue: p,
      name: (0, v.computed)(function() {
        return e.name;
      }),
      disabled: (0, v.computed)(function() {
        return e.disabled;
      })
    }), t({
      mergedValue: p
    }), function() {
      var u, a = e.id, h = a === void 0 ? k.id.value : a, g = null, y = "".concat(C.value, "-group");
      return d.value && d.value.length > 0 && (g = d.value.map(function(l) {
        var x;
        return (0, v.createVNode)(Se.default, {
          prefixCls: C.value,
          key: l.value.toString(),
          disabled: "disabled" in l ? l.disabled : e.disabled,
          indeterminate: l.indeterminate,
          value: l.value,
          checked: p.value.indexOf(l.value) !== -1,
          onChange: l.onChange,
          class: "".concat(y, "-item")
        }, {
          default: function() {
            return [l.label === void 0 ? (x = r.label) === null || x === void 0 ? void 0 : x.call(r, l) : l.label];
          }
        });
      })), (0, v.createVNode)("div", {
        class: [y, (0, Ge.default)({}, "".concat(y, "-rtl"), I.value === "rtl")],
        id: h
      }, [g || ((u = r.default) === null || u === void 0 ? void 0 : u.call(r))]);
    };
  }
});
re = F.default = Me;
const Ne = /* @__PURE__ */ _e({
  __proto__: null,
  get default() {
    return re;
  }
}, [F]);
export {
  Ne as G
};
