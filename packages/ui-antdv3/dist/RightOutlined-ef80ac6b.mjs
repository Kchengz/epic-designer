import { s as R, g as _ } from "./useConfigInject-f0dbb416.mjs";
var d = {}, a = {}, o;
function m() {
  if (o)
    return a;
  o = 1, Object.defineProperty(a, "__esModule", { value: !0 });
  var n = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z" } }] }, name: "right", theme: "outlined" };
  return a.default = n, a;
}
var g;
function q() {
  return g || (g = 1, function(n) {
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var O = _, v = f(m()), h = f(R());
    function f(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function c(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? Object(arguments[t]) : {}, u = Object.keys(r);
        typeof Object.getOwnPropertySymbols == "function" && (u = u.concat(Object.getOwnPropertySymbols(r).filter(function(i) {
          return Object.getOwnPropertyDescriptor(r, i).enumerable;
        }))), u.forEach(function(i) {
          s(e, i, r[i]);
        });
      }
      return e;
    }
    function s(e, t, r) {
      return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
    }
    var l = function(t, r) {
      var u = c({}, t, r.attrs);
      return (0, O.createVNode)(h.default, c({}, u, {
        icon: v.default
      }), null);
    };
    l.displayName = "RightOutlined", l.inheritAttrs = !1;
    var p = l;
    n.default = p;
  }(d)), d;
}
export {
  q as r
};
