import { r as L } from "./_vue_commonjs-external.cdc460b2.js";
import { B as b } from "./useConfigInject.fdc04e2e.js";
var l = {}, i = {}, o;
function g() {
  if (o)
    return i;
  o = 1, Object.defineProperty(i, "__esModule", { value: !0 });
  var n = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z" } }] }, name: "left", theme: "outlined" };
  return i.default = n, i;
}
var O;
function y() {
  return O || (O = 1, function(n) {
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var v = L, s = d(g()), p = d(b());
    function d(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function c(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? Object(arguments[t]) : {}, u = Object.keys(r);
        typeof Object.getOwnPropertySymbols == "function" && (u = u.concat(Object.getOwnPropertySymbols(r).filter(function(a) {
          return Object.getOwnPropertyDescriptor(r, a).enumerable;
        }))), u.forEach(function(a) {
          m(e, a, r[a]);
        });
      }
      return e;
    }
    function m(e, t, r) {
      return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
    }
    var f = function(t, r) {
      var u = c({}, t, r.attrs);
      return (0, v.createVNode)(p.default, c({}, u, {
        icon: s.default
      }), null);
    };
    f.displayName = "LeftOutlined", f.inheritAttrs = !1;
    var _ = f;
    n.default = _;
  }(l)), l;
}
export {
  y as r
};
