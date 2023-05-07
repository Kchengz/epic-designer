import { C as b, i as h, B as m, D as r } from "./isEqual.c2f76849.js";
var e = b ? b.isConcatSpreadable : void 0;
function x(n) {
  return h(n) || m(n) || !!(e && n && n[e]);
}
function g(n, i, o, a, f) {
  var t = -1, l = n.length;
  for (o || (o = x), f || (f = []); ++t < l; ) {
    var s = n[t];
    i > 0 && o(s) ? i > 1 ? g(s, i - 1, o, a, f) : r(f, s) : a || (f[f.length] = s);
  }
  return f;
}
function C(n) {
  var i = n == null ? 0 : n.length;
  return i ? g(n, 1) : [];
}
export {
  g as b,
  C as f
};
