import { s as E, o as C, i as h, h as _ } from "./hasIn.d68b1023.js";
import { s as O, u as I, v as R, b as w, w as y, x as p, a as M, l as S, y as b, t as A, g as v, p as x, i as F, k as G } from "./isEqual.c2f76849.js";
function D(n, r, t, e) {
  for (var i = n.length, s = t + (e ? 1 : -1); e ? s-- : ++s < i; )
    if (r(n[s], s, n))
      return s;
  return -1;
}
function N(n) {
  return n !== n;
}
function T(n, r, t) {
  for (var e = t - 1, i = n.length; ++e < i; )
    if (n[e] === r)
      return e;
  return -1;
}
function m(n, r, t) {
  return r === r ? T(n, r, t) : D(n, N, t);
}
function sn(n, r) {
  var t = n == null ? 0 : n.length;
  return !!t && m(n, r, 0) > -1;
}
function fn(n, r) {
  return E(C(n, r, h), n + "");
}
var K = "[object Object]", U = Function.prototype, $ = Object.prototype, P = U.toString, k = $.hasOwnProperty, q = P.call(Object);
function un(n) {
  if (!O(n) || I(n) != K)
    return !1;
  var r = R(n);
  if (r === null)
    return !0;
  var t = k.call(r, "constructor") && r.constructor;
  return typeof t == "function" && t instanceof t && P.call(t) == q;
}
var B = 1, W = 4;
function on(n) {
  return w(n, B | W);
}
var Y = 1, j = 2;
function H(n, r, t, e) {
  var i = t.length, s = i, a = !e;
  if (n == null)
    return !s;
  for (n = Object(n); i--; ) {
    var f = t[i];
    if (a && f[2] ? f[1] !== n[f[0]] : !(f[0] in n))
      return !1;
  }
  for (; ++i < s; ) {
    f = t[i];
    var u = f[0], o = n[u], c = f[1];
    if (a && f[2]) {
      if (o === void 0 && !(u in n))
        return !1;
    } else {
      var l = new y();
      if (e)
        var g = e(o, c, u, n, r, l);
      if (!(g === void 0 ? p(c, o, Y | j, e, l) : g))
        return !1;
    }
  }
  return !0;
}
function d(n) {
  return n === n && !M(n);
}
function J(n) {
  for (var r = S(n), t = r.length; t--; ) {
    var e = r[t], i = n[e];
    r[t] = [e, i, d(i)];
  }
  return r;
}
function L(n, r) {
  return function(t) {
    return t == null ? !1 : t[n] === r && (r !== void 0 || n in Object(t));
  };
}
function Q(n) {
  var r = J(n);
  return r.length == 1 && r[0][2] ? L(r[0][0], r[0][1]) : function(t) {
    return t === n || H(t, n, r);
  };
}
var X = 1, Z = 2;
function z(n, r) {
  return b(n) && d(r) ? L(A(n), r) : function(t) {
    var e = v(t, n);
    return e === void 0 && e === r ? _(t, n) : p(r, e, X | Z);
  };
}
function V(n) {
  return function(r) {
    return r == null ? void 0 : r[n];
  };
}
function nn(n) {
  return function(r) {
    return x(r, n);
  };
}
function rn(n) {
  return b(n) ? V(A(n)) : nn(n);
}
function an(n) {
  return typeof n == "function" ? n : n == null ? h : typeof n == "object" ? F(n) ? z(n[0], n[1]) : Q(n) : rn(n);
}
function cn(n) {
  return O(n) && G(n);
}
function ln(n, r, t) {
  for (var e = -1, i = n == null ? 0 : n.length; ++e < i; )
    if (t(r, n[e]))
      return !0;
  return !1;
}
export {
  D as a,
  an as b,
  ln as c,
  sn as d,
  fn as e,
  un as f,
  on as g,
  cn as i
};
