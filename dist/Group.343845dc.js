import { r as A, b as ae, a as re, e as M, d as $, i as E, k as W, z as te } from "./useConfigInject.fdc04e2e.js";
import { r as H } from "./_vue_commonjs-external.cdc460b2.js";
import { r as ue } from "./Checkbox.4e93a606.js";
import { r as J } from "./FormItemContext.896a7bec.js";
import { r as oe } from "./omit.ba8a174d.js";
function ne(r, e) {
  for (var u = 0; u < e.length; u++) {
    const t = e[u];
    if (typeof t != "string" && !Array.isArray(t)) {
      for (const o in t)
        if (o !== "default" && !(o in r)) {
          const s = Object.getOwnPropertyDescriptor(t, o);
          s && Object.defineProperty(r, o, s.get ? s : {
            enumerable: !0,
            get: () => t[o]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }));
}
var P = {}, y = {}, D;
function ie() {
  if (D)
    return y;
  D = 1;
  var r = W.exports;
  Object.defineProperty(y, "__esModule", {
    value: !0
  }), y.radioProps = y.default = void 0;
  var e = H, u = r(A()), t = r(ae()), o = r(re()), s = r(M()), k = r(ue()), j = r($()), O = r(E()), G = J(), v = r(oe()), _ = ["prefixCls", "id"], R = function() {
    return {
      prefixCls: String,
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
      value: s.default.any,
      name: String,
      id: String,
      autofocus: {
        type: Boolean,
        default: void 0
      },
      onChange: Function,
      onFocus: Function,
      onBlur: Function,
      onClick: Function,
      "onUpdate:checked": Function,
      "onUpdate:value": Function
    };
  };
  y.radioProps = R;
  var d = (0, e.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "ARadio",
    props: R(),
    setup: function(n, c) {
      var C = c.emit, N = c.expose, m = c.slots, I = (0, G.useInjectFormItemContext)(), b = (0, e.ref)(), h = (0, e.inject)("radioGroupContext", void 0), x = (0, O.default)("radio", n), a = x.prefixCls, S = x.direction, V = function() {
        b.value.focus();
      }, T = function() {
        b.value.blur();
      };
      N({
        focus: V,
        blur: T
      });
      var w = function(l) {
        var q = l.target.checked;
        C("update:checked", q), C("update:value", q), C("change", l), I.onFieldChange();
      }, X = function(l) {
        C("change", l), h && h.onRadioChange && h.onRadioChange(l);
      };
      return function() {
        var i, l = h;
        n.prefixCls;
        var q = n.id, Y = q === void 0 ? I.id.value : q, Z = (0, o.default)(n, _), g = (0, t.default)({
          prefixCls: a.value,
          id: Y
        }, (0, v.default)(Z, ["onUpdate:checked", "onUpdate:value"]));
        l ? (g.name = l.props.name, g.onChange = X, g.checked = n.value === l.stateValue.value, g.disabled = n.disabled || l.props.disabled) : g.onChange = w;
        var ee = (0, j.default)((i = {}, (0, u.default)(i, "".concat(a.value, "-wrapper"), !0), (0, u.default)(i, "".concat(a.value, "-wrapper-checked"), g.checked), (0, u.default)(i, "".concat(a.value, "-wrapper-disabled"), g.disabled), (0, u.default)(i, "".concat(a.value, "-wrapper-rtl"), S.value === "rtl"), i));
        return (0, e.createVNode)("label", {
          class: ee
        }, [(0, e.createVNode)(k.default, (0, t.default)((0, t.default)({}, g), {}, {
          type: "radio",
          ref: b
        }), null), m.default && (0, e.createVNode)("span", null, [m.default()])]);
      };
    }
  });
  return y.default = d, y;
}
var F = W.exports;
Object.defineProperty(P, "__esModule", {
  value: !0
});
var K = P.radioGroupProps = Q = P.default = void 0, f = H, z = F(A()), le = F($()), B = F(M()), U = F(ie()), de = F(E()), ce = te(), fe = J(), se = (0, ce.tuple)("large", "default", "small"), L = function() {
  return {
    prefixCls: String,
    value: B.default.any,
    size: B.default.oneOf(se),
    options: {
      type: Array
    },
    disabled: {
      type: Boolean,
      default: void 0
    },
    name: String,
    buttonStyle: {
      type: String,
      default: "outline"
    },
    id: String,
    optionType: {
      type: String,
      default: "default"
    },
    onChange: Function,
    "onUpdate:value": Function
  };
};
K = P.radioGroupProps = L;
var ve = (0, f.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: "ARadioGroup",
  props: L(),
  setup: function(e, u) {
    var t = u.slots, o = u.emit, s = (0, fe.useInjectFormItemContext)(), k = (0, de.default)("radio", e), j = k.prefixCls, O = k.direction, G = k.size, v = (0, f.ref)(e.value), _ = (0, f.ref)(!1);
    (0, f.watch)(function() {
      return e.value;
    }, function(d) {
      v.value = d, _.value = !1;
    });
    var R = function(p) {
      var n = v.value, c = p.target.value;
      "value" in e || (v.value = c), !_.value && c !== n && (_.value = !0, o("update:value", c), o("change", p), s.onFieldChange()), (0, f.nextTick)(function() {
        _.value = !1;
      });
    };
    return (0, f.provide)("radioGroupContext", {
      onRadioChange: R,
      stateValue: v,
      props: e
    }), function() {
      var d, p = e.options, n = e.optionType, c = e.buttonStyle, C = e.id, N = C === void 0 ? s.id.value : C, m = "".concat(j.value, "-group"), I = (0, le.default)(m, "".concat(m, "-").concat(c), (d = {}, (0, z.default)(d, "".concat(m, "-").concat(G.value), G.value), (0, z.default)(d, "".concat(m, "-rtl"), O.value === "rtl"), d)), b = null;
      if (p && p.length > 0) {
        var h = n === "button" ? "".concat(j.value, "-button") : j.value;
        b = p.map(function(a) {
          if (typeof a == "string" || typeof a == "number")
            return (0, f.createVNode)(U.default, {
              key: a,
              prefixCls: h,
              disabled: e.disabled,
              value: a,
              checked: v.value === a
            }, {
              default: function() {
                return [a];
              }
            });
          var S = a.value, V = a.disabled, T = a.label;
          return (0, f.createVNode)(U.default, {
            key: "radio-group-value-options-".concat(S),
            prefixCls: h,
            disabled: V || e.disabled,
            value: S,
            checked: v.value === S
          }, {
            default: function() {
              return [T];
            }
          });
        });
      } else {
        var x;
        b = (x = t.default) === null || x === void 0 ? void 0 : x.call(t);
      }
      return (0, f.createVNode)("div", {
        class: I,
        id: N
      }, [b]);
    };
  }
}), Q = P.default = ve;
const he = /* @__PURE__ */ ne({
  __proto__: null,
  get radioGroupProps() {
    return K;
  },
  get default() {
    return Q;
  }
}, [P]);
export {
  he as G
};
