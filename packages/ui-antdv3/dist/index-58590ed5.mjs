import { r as K, a as $, A as E, j as L, q as R, h as W, c as H, f as G, i as J, g as Q } from "./useConfigInject-f4796704.mjs";
import { r as X } from "./KeyCode-8a26b842.mjs";
import { r as Y } from "./wave-320c2dad.mjs";
import { r as Z } from "./FormItemContext-4e085918.mjs";
import { r as ee } from "./omit-567cf556.mjs";
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
var f = {}, d = J;
Object.defineProperty(f, "__esModule", {
  value: !0
});
var O = f.switchProps = T = f.default = F = f.SwitchSizes = void 0, n = Q, w = d(K()), v = d($()), ae = d(E()), u = d(L()), S = d(X()), ue = d(Y()), q = d(R()), P = W(), x = H(), ne = d(G()), re = Z(), le = d(ee()), V = (0, P.tuple)("small", "default"), F = f.SwitchSizes = V, N = function() {
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
O = f.switchProps = N;
var de = (0, n.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: "ASwitch",
  __ANT_SWITCH: !0,
  inheritAttrs: !1,
  props: N(),
  slots: ["checkedChildren", "unCheckedChildren"],
  // emits: ['update:checked', 'mouseup', 'change', 'click', 'keydown', 'blur'],
  setup: function(e, o) {
    var r = o.attrs, i = o.slots, k = o.expose, s = o.emit, _ = (0, re.useInjectFormItemContext)();
    (0, n.onBeforeMount)(function() {
      (0, q.default)(!("defaultChecked" in r), "Switch", "'defaultChecked' is deprecated, please use 'v-model:checked'"), (0, q.default)(!("value" in r), "Switch", "`value` is not validate prop, do you mean `checked`?");
    });
    var m = (0, n.ref)(e.checked !== void 0 ? e.checked : r.defaultChecked), y = (0, n.computed)(function() {
      return m.value === e.checkedValue;
    });
    (0, n.watch)(function() {
      return e.checked;
    }, function() {
      m.value = e.checked;
    });
    var g = (0, ne.default)("switch", e), l = g.prefixCls, j = g.direction, B = g.size, C = (0, n.ref)(), b = function() {
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
    var p = function(t, c) {
      e.disabled || (s("update:checked", t), s("change", t, c), _.onFieldChange());
    }, z = function(t) {
      s("blur", t);
    }, M = function(t) {
      b();
      var c = y.value ? e.unCheckedValue : e.checkedValue;
      p(c, t), s("click", c, t);
    }, D = function(t) {
      t.keyCode === S.default.LEFT ? p(e.unCheckedValue, t) : t.keyCode === S.default.RIGHT && p(e.checkedValue, t), s("keydown", t);
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
          }, [y.value ? (0, x.getPropsSlot)(i, e, "checkedChildren") : (0, x.getPropsSlot)(i, e, "unCheckedChildren")])])];
        }
      });
    };
  }
}), oe = (0, P.withInstall)(de), T = f.default = oe;
const he = /* @__PURE__ */ te({
  __proto__: null,
  get SwitchSizes() {
    return F;
  },
  get default() {
    return T;
  },
  get switchProps() {
    return O;
  }
}, [f]);
export {
  he as i
};
