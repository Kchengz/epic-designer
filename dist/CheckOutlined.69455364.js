import { O as q, P as A, N as m, Q as C, B as g } from "./useConfigInject.fdc04e2e.js";
import { r as k } from "./_vue_commonjs-external.cdc460b2.js";
var v = { exports: {} }, O;
function R() {
  return O || (O = 1, function(r) {
    var f = q(), d = A(), s = m(), i = C();
    function o(n) {
      return f(n) || d(n) || s(n) || i();
    }
    r.exports = o, r.exports.__esModule = !0, r.exports.default = r.exports;
  }(v)), v.exports;
}
var h = {}, c = {}, y;
function P() {
  if (y)
    return c;
  y = 1, Object.defineProperty(c, "__esModule", { value: !0 });
  var r = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" } }] }, name: "check", theme: "outlined" };
  return c.default = r, c;
}
var b;
function T() {
  return b || (b = 1, function(r) {
    Object.defineProperty(r, "__esModule", {
      value: !0
    }), r.default = void 0;
    var f = k, d = i(P()), s = i(g());
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = arguments[t] != null ? Object(arguments[t]) : {}, u = Object.keys(a);
        typeof Object.getOwnPropertySymbols == "function" && (u = u.concat(Object.getOwnPropertySymbols(a).filter(function(l) {
          return Object.getOwnPropertyDescriptor(a, l).enumerable;
        }))), u.forEach(function(l) {
          n(e, l, a[l]);
        });
      }
      return e;
    }
    function n(e, t, a) {
      return t in e ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = a, e;
    }
    var p = function(t, a) {
      var u = o({}, t, a.attrs);
      return (0, f.createVNode)(s.default, o({}, u, {
        icon: d.default
      }), null);
    };
    p.displayName = "CheckOutlined", p.inheritAttrs = !1;
    var _ = p;
    r.default = _;
  }(h)), h;
}
export {
  T as a,
  R as r
};
