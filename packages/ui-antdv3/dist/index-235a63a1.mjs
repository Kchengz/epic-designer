import { a as pe, r as ve, e as me, j as ge, f as Oe, k as _e, c as Ce, i as he, g as Ie } from "./useConfigInject-f0dbb416.mjs";
import { _ as Pe } from "./index-5fc6c346.mjs";
import { r as Se, a as xe } from "./iconUtil-152c997d.mjs";
import { r as ye } from "./omit-d14a337a.mjs";
import { r as be } from "./FormItemContext-f32a9c9f.mjs";
function Ne(e, t) {
  for (var a = 0; a < t.length; a++) {
    const l = t[a];
    if (typeof l != "string" && !Array.isArray(l)) {
      for (const i in l)
        if (i !== "default" && !(i in e)) {
          const r = Object.getOwnPropertyDescriptor(l, i);
          r && Object.defineProperty(e, i, r.get ? r : {
            enumerable: !0,
            get: () => l[i]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
var d = {}, m = he, Re = Pe;
Object.defineProperty(d, "__esModule", {
  value: !0
});
var F = d.selectProps = W = d.default = H = d.SelectOption = U = d.SelectOptGroup = void 0, s = Ie, C = m(pe()), v = m(ve()), D = m(me()), x = Me(Se()), we = m(xe()), b = m(ge()), Te = m(Oe()), B = m(ye()), Ee = be(), qe = _e(), De = Ce();
function $(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), a = /* @__PURE__ */ new WeakMap();
  return ($ = function(i) {
    return i ? a : t;
  })(e);
}
function Me(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || Re(e) !== "object" && typeof e != "function")
    return { default: e };
  var a = $(t);
  if (a && a.has(e))
    return a.get(e);
  var l = {}, i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var r in e)
    if (r !== "default" && Object.prototype.hasOwnProperty.call(e, r)) {
      var g = i ? Object.getOwnPropertyDescriptor(e, r) : null;
      g && (g.get || g.set) ? Object.defineProperty(l, r, g) : l[r] = e[r];
    }
  return l.default = e, a && a.set(e, l), l;
}
var G = function() {
  return (0, v.default)((0, v.default)({}, (0, B.default)((0, x.selectProps)(), ["inputIcon", "mode", "getInputElement", "getRawInputElement", "backfill"])), {}, {
    value: {
      type: [Array, Object, String, Number]
    },
    defaultValue: {
      type: [Array, Object, String, Number]
    },
    notFoundContent: b.default.any,
    suffixIcon: b.default.any,
    itemIcon: b.default.any,
    size: String,
    mode: String,
    bordered: {
      type: Boolean,
      default: !0
    },
    transitionName: String,
    choiceTransitionName: {
      type: String,
      default: ""
    },
    "onUpdate:value": Function
  });
};
F = d.selectProps = G;
var M = "SECRET_COMBOBOX_MODE_DO_NOT_USE", c = (0, s.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: "ASelect",
  Option: x.Option,
  OptGroup: x.OptGroup,
  inheritAttrs: !1,
  props: (0, De.initDefaultProps)(G(), {
    listHeight: 256,
    listItemHeight: 24
  }),
  SECRET_COMBOBOX_MODE_DO_NOT_USE: M,
  // emits: ['change', 'update:value', 'blur'],
  slots: [
    "notFoundContent",
    "suffixIcon",
    "itemIcon",
    "removeIcon",
    "clearIcon",
    "dropdownRender",
    "option",
    "placeholder",
    "tagRender",
    "maxTagPlaceholder",
    "optionLabel"
    // donot use, maybe remove it
  ],
  setup: function(t, a) {
    var l = a.attrs, i = a.emit, r = a.slots, g = a.expose, h = (0, s.ref)(), y = (0, Ee.useInjectFormItemContext)(), j = function() {
      var n;
      (n = h.value) === null || n === void 0 || n.focus();
    }, A = function() {
      var n;
      (n = h.value) === null || n === void 0 || n.blur();
    }, z = function(n) {
      var u;
      (u = h.value) === null || u === void 0 || u.scrollTo(n);
    }, I = (0, s.computed)(function() {
      var o = t.mode;
      if (o !== "combobox")
        return o === M ? "combobox" : o;
    }), O = (0, Te.default)("select", t), f = O.prefixCls, P = O.direction, N = O.configProvider, R = O.size, V = O.getPrefixCls, L = (0, s.computed)(function() {
      return V();
    }), X = (0, s.computed)(function() {
      return (0, qe.getTransitionName)(L.value, "slide-up", t.transitionName);
    }), J = (0, s.computed)(function() {
      var o;
      return (0, D.default)((o = {}, (0, C.default)(o, "".concat(f.value, "-lg"), R.value === "large"), (0, C.default)(o, "".concat(f.value, "-sm"), R.value === "small"), (0, C.default)(o, "".concat(f.value, "-rtl"), P.value === "rtl"), (0, C.default)(o, "".concat(f.value, "-borderless"), !t.bordered), o));
    }), K = function() {
      for (var n = arguments.length, u = new Array(n), p = 0; p < n; p++)
        u[p] = arguments[p];
      i("update:value", u[0]), i.apply(void 0, ["change"].concat(u)), y.onFieldChange();
    }, Q = function(n) {
      i("blur", n), y.onFieldBlur();
    };
    g({
      blur: A,
      focus: j,
      scrollTo: z
    });
    var Y = (0, s.computed)(function() {
      return I.value === "multiple" || I.value === "tags";
    });
    return function() {
      var o, n, u = t.notFoundContent, p = t.listHeight, Z = p === void 0 ? 256 : p, w = t.listItemHeight, k = w === void 0 ? 24 : w, ee = t.getPopupContainer, te = t.dropdownClassName, re = t.virtual, oe = t.dropdownMatchSelectWidth, T = t.id, ne = T === void 0 ? y.id.value : T, E = t.placeholder, ae = E === void 0 ? (o = r.placeholder) === null || o === void 0 ? void 0 : o.call(r) : E, le = N.renderEmpty, ie = N.getPopupContainer, _;
      u !== void 0 ? _ = u : r.notFoundContent ? _ = r.notFoundContent() : I.value === "combobox" ? _ = null : _ = le("Select");
      var S = (0, we.default)((0, v.default)((0, v.default)({}, t), {}, {
        multiple: Y.value,
        prefixCls: f.value
      }), r), ue = S.suffixIcon, ce = S.itemIcon, de = S.removeIcon, se = S.clearIcon, q = (0, B.default)(t, ["prefixCls", "suffixIcon", "itemIcon", "removeIcon", "clearIcon", "size", "bordered"]), fe = (0, D.default)(te, (0, C.default)({}, "".concat(f.value, "-dropdown-").concat(P.value), P.value === "rtl"));
      return (0, s.createVNode)(x.default, (0, v.default)((0, v.default)((0, v.default)({
        ref: h,
        virtual: re,
        dropdownMatchSelectWidth: oe
      }, q), l), {}, {
        placeholder: ae,
        listHeight: Z,
        listItemHeight: k,
        mode: I.value,
        prefixCls: f.value,
        direction: P.value,
        inputIcon: ue,
        menuItemSelectedIcon: ce,
        removeIcon: de,
        clearIcon: se,
        notFoundContent: _,
        class: [J.value, l.class],
        getPopupContainer: ee || ie,
        dropdownClassName: fe,
        onChange: K,
        onBlur: Q,
        id: ne,
        dropdownRender: q.dropdownRender || r.dropdownRender,
        transitionName: X.value,
        children: (n = r.default) === null || n === void 0 ? void 0 : n.call(r),
        tagRender: t.tagRender || r.tagRender,
        optionLabelRender: r.optionLabel,
        maxTagPlaceholder: t.maxTagPlaceholder || r.maxTagPlaceholder
      }), {
        option: r.option
      });
    };
  }
});
c.install = function(e) {
  return e.component(c.name, c), e.component(c.Option.displayName, c.Option), e.component(c.OptGroup.displayName, c.OptGroup), e;
};
var Fe = c.Option, H = d.SelectOption = Fe, Be = c.OptGroup, U = d.SelectOptGroup = Be, $e = c, W = d.default = $e;
const Ae = /* @__PURE__ */ Ne({
  __proto__: null,
  get SelectOptGroup() {
    return U;
  },
  get SelectOption() {
    return H;
  },
  get default() {
    return W;
  },
  get selectProps() {
    return F;
  }
}, [d]);
export {
  Ae as i
};
