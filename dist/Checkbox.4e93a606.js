import { r as I, a as J, b as L, d as Q, e as X, s as Y, k as Z } from "./useConfigInject.fdc04e2e.js";
import { r as ee } from "./_vue_commonjs-external.cdc460b2.js";
var o = {}, C;
function ne() {
  if (C)
    return o;
  C = 1;
  var i = Z.exports;
  Object.defineProperty(o, "__esModule", {
    value: !0
  }), o.default = o.checkboxProps = void 0;
  var t = ee, b = i(I()), g = i(J()), n = i(L()), q = i(Q()), P = i(X()), _ = Y(), K = ["prefixCls", "name", "id", "type", "disabled", "readonly", "tabindex", "autofocus", "value", "required"], k = {
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
  o.checkboxProps = k;
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
            target: (0, n.default)((0, n.default)({}, a), {}, {
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
      }, D = function(e) {
        y("click", e), f.value = e.shiftKey;
      };
      return function() {
        var r, e = a.prefixCls, v = a.name, h = a.id, j = a.type, p = a.disabled, O = a.readonly, R = a.tabindex, w = a.autofocus, V = a.value, $ = a.required, A = (0, g.default)(a, K), F = u.class, E = u.onFocus, M = u.onBlur, T = u.onKeydown, U = u.onKeypress, W = u.onKeyup, x = (0, n.default)((0, n.default)({}, A), u), z = Object.keys(x).reduce(function(m, c) {
          return (c.substr(0, 5) === "aria-" || c.substr(0, 5) === "data-" || c === "role") && (m[c] = x[c]), m;
        }, {}), G = (0, q.default)(e, F, (r = {}, (0, b.default)(r, "".concat(e, "-checked"), d.value), (0, b.default)(r, "".concat(e, "-disabled"), p), r)), H = (0, n.default)((0, n.default)({
          name: v,
          id: h,
          type: j,
          readonly: O,
          disabled: p,
          tabindex: R,
          class: "".concat(e, "-input"),
          checked: !!d.value,
          autofocus: w,
          value: V
        }, z), {}, {
          onChange: S,
          onClick: D,
          onFocus: E,
          onBlur: M,
          onKeydown: T,
          onKeypress: U,
          onKeyup: W,
          required: $
        });
        return (0, t.createVNode)("span", {
          class: G
        }, [(0, t.createVNode)("input", (0, n.default)({
          ref: l
        }, H), null), (0, t.createVNode)("span", {
          class: "".concat(e, "-inner")
        }, null)]);
      };
    }
  });
  return o.default = N, o;
}
export {
  ne as r
};
