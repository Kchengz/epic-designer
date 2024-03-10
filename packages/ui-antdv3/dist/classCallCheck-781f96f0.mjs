import { Z as x } from "./useConfigInject-f4796704.mjs";
var o = { exports: {} }, i;
function c() {
  return i || (i = 1, function(e) {
    var l = x();
    function s(a, n) {
      for (var t = 0; t < n.length; t++) {
        var r = n[t];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(a, l(r.key), r);
      }
    }
    function f(a, n, t) {
      return n && s(a.prototype, n), t && s(a, t), Object.defineProperty(a, "prototype", {
        writable: !1
      }), a;
    }
    e.exports = f, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(o)), o.exports;
}
var u = { exports: {} }, p;
function y() {
  return p || (p = 1, function(e) {
    function l(s, f) {
      if (!(s instanceof f))
        throw new TypeError("Cannot call a class as a function");
    }
    e.exports = l, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(u)), u.exports;
}
export {
  c as a,
  y as r
};
