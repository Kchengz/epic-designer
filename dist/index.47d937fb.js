import { b as K, r as $, v as E, e as L, A as R, z as W, s as H, i as G, k as J } from "./useConfigInject.fdc04e2e.js";
import { r as Q } from "./_vue_commonjs-external.cdc460b2.js";
import { r as X } from "./KeyCode.93922cee.js";
import { r as Y } from "./wave.712e07cd.js";
import { r as Z } from "./FormItemContext.896a7bec.js";
import { r as ee } from "./omit.ba8a174d.js";
function te(h, e) {
  for (var o = 0; o < e.length; o++) {
    const r = e[o];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in h)) {
          const k = Object.getOwnPropertyDescriptor(r, i);
          k && Object.defineProperty(h, i, k.get ? k : {
            enumerable: !0,
            get: () => r[i]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(h, Symbol.toStringTag, { value: "Module" }));
}
var f = {}, d = J.exports;
Object.defineProperty(f, "__esModule", {
  value: !0
});
var q = f.switchProps = T = f.default = F = f.SwitchSizes = void 0, n = Q, w = d(K()), v = d($()), ae = d(E()), u = d(L()), S = d(X()), ue = d(Y()), x = d(R()), P = W(), O = H(), ne = d(G()), re = Z(), le = d(ee()), V = (0, P.tuple)("small", "default"), F = f.SwitchSizes = V, N = function() {
  return {
    id: String,
    prefixCls: String,
    size: u.default.oneOf(V),
    disabled: {
      type: Boolean,
      default: void 0
    },
    checkedChildren: u.default.any,
    unCheckedChildren: u.default.any,
    tabindex: u.default.oneOfType([u.default.string, u.default.number]),
    autofocus: {
      type: Boolean,
      default: void 0
    },
    loading: {
      type: Boolean,
      default: void 0
    },
    checked: u.default.oneOfType([u.default.string, u.default.number, u.default.looseBool]),
    checkedValue: u.default.oneOfType([u.default.string, u.default.number, u.default.looseBool]).def(!0),
    unCheckedValue: u.default.oneOfType([u.default.string, u.default.number, u.default.looseBool]).def(!1),
    onChange: {
      type: Function
    },
    onClick: {
      type: Function
    },
    onKeydown: {
      type: Function
    },
    onMouseup: {
      type: Function
    },
    "onUpdate:checked": {
      type: Function
    },
    onBlur: Function,
    onFocus: Function
  };
};
q = f.switchProps = N;
var de = (0, n.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: "ASwitch",
  __ANT_SWITCH: !0,
  inheritAttrs: !1,
  props: N(),
  slots: ["checkedChildren", "unCheckedChildren"],
  setup: function(e, o) {
    var r = o.attrs, i = o.slots, k = o.expose, s = o.emit, _ = (0, re.useInjectFormItemContext)();
    (0, n.onBeforeMount)(function() {
      (0, x.default)(!("defaultChecked" in r), "Switch", "'defaultChecked' is deprecated, please use 'v-model:checked'"), (0, x.default)(!("value" in r), "Switch", "`value` is not validate prop, do you mean `checked`?");
    });
    var m = (0, n.ref)(e.checked !== void 0 ? e.checked : r.defaultChecked), y = (0, n.computed)(function() {
      return m.value === e.checkedValue;
    });
    (0, n.watch)(function() {
      return e.checked;
    }, function() {
      m.value = e.checked;
    });
    var p = (0, ne.default)("switch", e), l = p.prefixCls, j = p.direction, B = p.size, C = (0, n.ref)(), b = function() {
      var t;
      (t = C.value) === null || t === void 0 || t.focus();
    }, I = function() {
      var t;
      (t = C.value) === null || t === void 0 || t.blur();
    };
    k({
      focus: b,
      blur: I
    }), (0, n.onMounted)(function() {
      (0, n.nextTick)(function() {
        e.autofocus && !e.disabled && C.value.focus();
      });
    });
    var g = function(t, c) {
      e.disabled || (s("update:checked", t), s("change", t, c), _.onFieldChange());
    }, z = function(t) {
      s("blur", t);
    }, M = function(t) {
      b();
      var c = y.value ? e.unCheckedValue : e.checkedValue;
      g(c, t), s("click", c, t);
    }, D = function(t) {
      t.keyCode === S.default.LEFT ? g(e.unCheckedValue, t) : t.keyCode === S.default.RIGHT && g(e.checkedValue, t), s("keydown", t);
    }, U = function(t) {
      var c;
      (c = C.value) === null || c === void 0 || c.blur(), s("mouseup", t);
    }, A = (0, n.computed)(function() {
      var a;
      return a = {}, (0, v.default)(a, "".concat(l.value, "-small"), B.value === "small"), (0, v.default)(a, "".concat(l.value, "-loading"), e.loading), (0, v.default)(a, "".concat(l.value, "-checked"), y.value), (0, v.default)(a, "".concat(l.value, "-disabled"), e.disabled), (0, v.default)(a, l.value, !0), (0, v.default)(a, "".concat(l.value, "-rtl"), j.value === "rtl"), a;
    });
    return function() {
      var a;
      return (0, n.createVNode)(ue.default, {
        insertExtraNode: !0
      }, {
        default: function() {
          return [(0, n.createVNode)("button", (0, w.default)((0, w.default)((0, w.default)({}, (0, le.default)(e, ["prefixCls", "checkedChildren", "unCheckedChildren", "checked", "autofocus", "checkedValue", "unCheckedValue", "id", "onChange", "onUpdate:checked"])), r), {}, {
            id: (a = e.id) !== null && a !== void 0 ? a : _.id.value,
            onKeydown: D,
            onClick: M,
            onBlur: z,
            onMouseup: U,
            type: "button",
            role: "switch",
            "aria-checked": m.value,
            disabled: e.disabled || e.loading,
            class: [r.class, A.value],
            ref: C
          }), [(0, n.createVNode)("div", {
            class: "".concat(l.value, "-handle")
          }, [e.loading ? (0, n.createVNode)(ae.default, {
            class: "".concat(l.value, "-loading-icon")
          }, null) : null]), (0, n.createVNode)("span", {
            class: "".concat(l.value, "-inner")
          }, [y.value ? (0, O.getPropsSlot)(i, e, "checkedChildren") : (0, O.getPropsSlot)(i, e, "unCheckedChildren")])])];
        }
      });
    };
  }
}), oe = (0, P.withInstall)(de), T = f.default = oe;
const ke = /* @__PURE__ */ te({
  __proto__: null,
  get switchProps() {
    return q;
  },
  get SwitchSizes() {
    return F;
  },
  get default() {
    return T;
  }
}, [f]);
export {
  ke as i
};
