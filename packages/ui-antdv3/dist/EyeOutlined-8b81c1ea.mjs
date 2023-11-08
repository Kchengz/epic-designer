import { s as _, g as E } from "./useConfigInject-f0dbb416.mjs";
var d = {}, i = {}, o;
function g() {
  if (o)
    return i;
  o = 1, Object.defineProperty(i, "__esModule", { value: !0 });
  var n = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z" } }] }, name: "eye", theme: "outlined" };
  return i.default = n, i;
}
var O;
function h() {
  return O || (O = 1, function(n) {
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var s = E, v = f(g()), y = f(_());
    function f(e) {
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
    var l = function(t, r) {
      var u = c({}, t, r.attrs);
      return (0, s.createVNode)(y.default, c({}, u, {
        icon: v.default
      }), null);
    };
    l.displayName = "EyeOutlined", l.inheritAttrs = !1;
    var p = l;
    n.default = p;
  }(d)), d;
}
export {
  h as r
};
