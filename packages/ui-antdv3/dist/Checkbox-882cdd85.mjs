import { a as I, o as J, r as L, e as Q, j as X, c as Y, i as Z, g as ee } from "./useConfigInject-f0dbb416.mjs";
var i = {}, g;
function ne() {
  if (g)
    return i;
  g = 1;
  var o = Z;
  Object.defineProperty(i, "__esModule", {
    value: !0
  }), i.default = i.checkboxProps = void 0;
  var t = ee, b = o(I()), m = o(J()), r = o(L()), q = o(Q()), P = o(X()), _ = Y(), K = ["prefixCls", "name", "id", "type", "disabled", "readonly", "tabindex", "autofocus", "value", "required"], k = {
    prefixCls: String,
    name: String,
    id: String,
    type: String,
    defaultChecked: {
      type: [Boolean, Number],
      default: void 0
    },
    checked: {
      type: [Boolean, Number],
      default: void 0
    },
    disabled: Boolean,
    tabindex: {
      type: [Number, String]
    },
    readonly: Boolean,
    autofocus: Boolean,
    value: P.default.any,
    required: Boolean
  };
  i.checkboxProps = k;
  var N = (0, t.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "Checkbox",
    inheritAttrs: !1,
    props: (0, _.initDefaultProps)(k, {
      prefixCls: "rc-checkbox",
      type: "checkbox",
      defaultChecked: !1
    }),
    emits: ["click", "change"],
    setup: function(a, s) {
      var u = s.attrs, y = s.emit, B = s.expose, d = (0, t.ref)(a.checked === void 0 ? a.defaultChecked : a.checked), l = (0, t.ref)();
      (0, t.watch)(function() {
        return a.checked;
      }, function() {
        d.value = a.checked;
      }), B({
        focus: function() {
          var e;
          (e = l.value) === null || e === void 0 || e.focus();
        },
        blur: function() {
          var e;
          (e = l.value) === null || e === void 0 || e.blur();
        }
      });
      var f = (0, t.ref)(), S = function(e) {
        if (!a.disabled) {
          a.checked === void 0 && (d.value = e.target.checked), e.shiftKey = f.value;
          var v = {
            target: (0, r.default)((0, r.default)({}, a), {}, {
              checked: e.target.checked
            }),
            stopPropagation: function() {
              e.stopPropagation();
            },
            preventDefault: function() {
              e.preventDefault();
            },
            nativeEvent: e
          };
          a.checked !== void 0 && (l.value.checked = !!a.checked), y("change", v), f.value = !1;
        }
      }, j = function(e) {
        y("click", e), f.value = e.shiftKey;
      };
      return function() {
        var n, e = a.prefixCls, v = a.name, h = a.id, D = a.type, p = a.disabled, O = a.readonly, R = a.tabindex, w = a.autofocus, V = a.value, $ = a.required, A = (0, m.default)(a, K), E = u.class, F = u.onFocus, M = u.onBlur, T = u.onKeydown, U = u.onKeypress, W = u.onKeyup, x = (0, r.default)((0, r.default)({}, A), u), z = Object.keys(x).reduce(function(C, c) {
          return (c.substr(0, 5) === "aria-" || c.substr(0, 5) === "data-" || c === "role") && (C[c] = x[c]), C;
        }, {}), G = (0, q.default)(e, E, (n = {}, (0, b.default)(n, "".concat(e, "-checked"), d.value), (0, b.default)(n, "".concat(e, "-disabled"), p), n)), H = (0, r.default)((0, r.default)({
          name: v,
          id: h,
          type: D,
          readonly: O,
          disabled: p,
          tabindex: R,
          class: "".concat(e, "-input"),
          checked: !!d.value,
          autofocus: w,
          value: V
        }, z), {}, {
          onChange: S,
          onClick: j,
          onFocus: F,
          onBlur: M,
          onKeydown: T,
          onKeypress: U,
          onKeyup: W,
          required: $
        });
        return (0, t.createVNode)("span", {
          class: G
        }, [(0, t.createVNode)("input", (0, r.default)({
          ref: l
        }, H), null), (0, t.createVNode)("span", {
          class: "".concat(e, "-inner")
        }, null)]);
      };
    }
  });
  return i.default = N, i;
}
export {
  ne as r
};
