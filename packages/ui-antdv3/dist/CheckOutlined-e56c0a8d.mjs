import { P as q, Q as A, z as g, R as C, s as k, g as m } from "./useConfigInject-f4796704.mjs";
var p = { exports: {} }, O;
function I() {
  return O || (O = 1, function(r) {
    var f = q(), s = A(), d = g(), i = C();
    function l(n) {
      return f(n) || s(n) || d(n) || i();
    }
    r.exports = l, r.exports.__esModule = !0, r.exports.default = r.exports;
  }(p)), p.exports;
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
function R() {
  return b || (b = 1, function(r) {
    Object.defineProperty(r, "__esModule", {
      value: !0
    }), r.default = void 0;
    var f = m, s = i(P()), d = i(k());
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function l(e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = arguments[t] != null ? Object(arguments[t]) : {}, u = Object.keys(a);
        typeof Object.getOwnPropertySymbols == "function" && (u = u.concat(Object.getOwnPropertySymbols(a).filter(function(o) {
          return Object.getOwnPropertyDescriptor(a, o).enumerable;
        }))), u.forEach(function(o) {
          n(e, o, a[o]);
        });
      }
      return e;
    }
    function n(e, t, a) {
      return t in e ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = a, e;
    }
    var v = function(t, a) {
      var u = l({}, t, a.attrs);
      return (0, f.createVNode)(d.default, l({}, u, {
        icon: s.default
      }), null);
    };
    v.displayName = "CheckOutlined", v.inheritAttrs = !1;
    var _ = v;
    r.default = _;
  }(h)), h;
}
export {
  R as a,
  I as r
};
