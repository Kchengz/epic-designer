import { f } from "./flatten.3de0f950.js";
import { z as s, c as v, t as c, A as h, d, i as m, B as g } from "./isEqual.c2f76849.js";
function p(n) {
  return n;
}
function y(n, e, t) {
  switch (t.length) {
    case 0:
      return n.call(e);
    case 1:
      return n.call(e, t[0]);
    case 2:
      return n.call(e, t[0], t[1]);
    case 3:
      return n.call(e, t[0], t[1], t[2]);
  }
  return n.apply(e, t);
}
var S = 800, w = 16, T = Date.now;
function x(n) {
  var e = 0, t = 0;
  return function() {
    var a = T(), r = w - (a - t);
    if (t = a, r > 0) {
      if (++e >= S)
        return arguments[0];
    } else
      e = 0;
    return n.apply(void 0, arguments);
  };
}
function O(n) {
  return function() {
    return n;
  };
}
var P = s ? function(n, e) {
  return s(n, "toString", {
    configurable: !0,
    enumerable: !1,
    value: O(e),
    writable: !0
  });
} : p;
const A = P;
var H = x(A);
const I = H;
var o = Math.max;
function N(n, e, t) {
  return e = o(e === void 0 ? n.length - 1 : e, 0), function() {
    for (var a = arguments, r = -1, i = o(a.length - e, 0), u = Array(i); ++r < i; )
      u[r] = a[e + r];
    r = -1;
    for (var l = Array(e + 1); ++r < e; )
      l[r] = a[r];
    return l[e] = t(u), y(n, this, l);
  };
}
function $(n) {
  return I(N(n, void 0, f), n + "");
}
function C(n, e) {
  return n != null && e in Object(n);
}
function M(n, e, t) {
  e = v(e, n);
  for (var a = -1, r = e.length, i = !1; ++a < r; ) {
    var u = c(e[a]);
    if (!(i = n != null && t(n, u)))
      break;
    n = n[u];
  }
  return i || ++a != r ? i : (r = n == null ? 0 : n.length, !!r && h(r) && d(u, r) && (m(n) || g(n)));
}
function z(n, e) {
  return n != null && M(n, e, C);
}
export {
  $ as f,
  z as h,
  p as i,
  N as o,
  I as s
};
