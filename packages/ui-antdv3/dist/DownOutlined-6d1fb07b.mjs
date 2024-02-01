import { s as _, g as m } from "./useConfigInject-f4796704.mjs";
var o = {}, i = {}, c;
function g() {
  if (c)
    return i;
  c = 1, Object.defineProperty(i, "__esModule", { value: !0 });
  var n = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" } }] }, name: "down", theme: "outlined" };
  return i.default = n, i;
}
var O;
function h() {
  return O || (O = 1, function(n) {
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var v = m, s = d(g()), w = d(_());
    function d(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function f(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? Object(arguments[t]) : {}, u = Object.keys(r);
        typeof Object.getOwnPropertySymbols == "function" && (u = u.concat(Object.getOwnPropertySymbols(r).filter(function(a) {
          return Object.getOwnPropertyDescriptor(r, a).enumerable;
        }))), u.forEach(function(a) {
          p(e, a, r[a]);
        });
      }
      return e;
    }
    function p(e, t, r) {
      return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
    }
    var l = function(t, r) {
      var u = f({}, t, r.attrs);
      return (0, v.createVNode)(w.default, f({}, u, {
        icon: s.default
      }), null);
    };
    l.displayName = "DownOutlined", l.inheritAttrs = !1;
    var D = l;
    n.default = D;
  }(o)), o;
}
export {
  h as r
};
