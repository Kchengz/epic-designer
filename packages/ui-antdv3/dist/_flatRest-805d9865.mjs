import { B as zr, C as Kr, e as c, D as Er, E as Nr, A as Vr, F as Hr, j as Gr } from "./index-34e90455.mjs";
import { C as Lr, D as Dr, L as wr } from "./useConfigInject-f4796704.mjs";
var _, J;
function Cr() {
  if (J)
    return _;
  J = 1;
  var a = zr(), r = function() {
    try {
      var t = a(Object, "defineProperty");
      return t({}, "", {}), t;
    } catch {
    }
  }();
  return _ = r, _;
}
var q, Q;
function Wr() {
  if (Q)
    return q;
  Q = 1;
  var a = Cr();
  function r(t, e, n) {
    e == "__proto__" && a ? a(t, e, {
      configurable: !0,
      enumerable: !0,
      value: n,
      writable: !0
    }) : t[e] = n;
  }
  return q = r, q;
}
var g, k;
function _e() {
  if (k)
    return g;
  k = 1;
  var a = Wr(), r = Kr(), t = Object.prototype, e = t.hasOwnProperty;
  function n(i, s, u) {
    var o = i[s];
    (!(e.call(i, s) && r(o, u)) || u === void 0 && !(s in i)) && a(i, s, u);
  }
  return g = n, g;
}
var b, j;
function B() {
  if (j)
    return b;
  j = 1;
  var a = Lr(), r = Dr(), t = "[object Symbol]";
  function e(n) {
    return typeof n == "symbol" || r(n) && a(n) == t;
  }
  return b = e, b;
}
var y, rr;
function $r() {
  if (rr)
    return y;
  rr = 1;
  var a = c(), r = B(), t = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, e = /^\w*$/;
  function n(i, s) {
    if (a(i))
      return !1;
    var u = typeof i;
    return u == "number" || u == "symbol" || u == "boolean" || i == null || r(i) ? !0 : e.test(i) || !t.test(i) || s != null && i in Object(s);
  }
  return y = n, y;
}
var p, er;
function Ur() {
  if (er)
    return p;
  er = 1;
  var a = Er(), r = "Expected a function";
  function t(e, n) {
    if (typeof e != "function" || n != null && typeof n != "function")
      throw new TypeError(r);
    var i = function() {
      var s = arguments, u = n ? n.apply(this, s) : s[0], o = i.cache;
      if (o.has(u))
        return o.get(u);
      var f = e.apply(this, s);
      return i.cache = o.set(u, f) || o, f;
    };
    return i.cache = new (t.Cache || a)(), i;
  }
  return t.Cache = a, p = t, p;
}
var I, nr;
function Xr() {
  if (nr)
    return I;
  nr = 1;
  var a = Ur(), r = 500;
  function t(e) {
    var n = a(e, function(s) {
      return i.size === r && i.clear(), s;
    }), i = n.cache;
    return n;
  }
  return I = t, I;
}
var m, tr;
function Yr() {
  if (tr)
    return m;
  tr = 1;
  var a = Xr(), r = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, t = /\\(\\)?/g, e = a(function(n) {
    var i = [];
    return n.charCodeAt(0) === 46 && i.push(""), n.replace(r, function(s, u, o, f) {
      i.push(o ? f.replace(t, "$1") : u || s);
    }), i;
  });
  return m = e, m;
}
var R, ar;
function Zr() {
  if (ar)
    return R;
  ar = 1;
  function a(r, t) {
    for (var e = -1, n = r == null ? 0 : r.length, i = Array(n); ++e < n; )
      i[e] = t(r[e], e, r);
    return i;
  }
  return R = a, R;
}
var S, ir;
function Br() {
  if (ir)
    return S;
  ir = 1;
  var a = wr(), r = Zr(), t = c(), e = B(), n = 1 / 0, i = a ? a.prototype : void 0, s = i ? i.toString : void 0;
  function u(o) {
    if (typeof o == "string")
      return o;
    if (t(o))
      return r(o, u) + "";
    if (e(o))
      return s ? s.call(o) : "";
    var f = o + "";
    return f == "0" && 1 / o == -n ? "-0" : f;
  }
  return S = u, S;
}
var P, ur;
function Jr() {
  if (ur)
    return P;
  ur = 1;
  var a = Br();
  function r(t) {
    return t == null ? "" : a(t);
  }
  return P = r, P;
}
var T, sr;
function Ar() {
  if (sr)
    return T;
  sr = 1;
  var a = c(), r = $r(), t = Yr(), e = Jr();
  function n(i, s) {
    return a(i) ? i : r(i, s) ? [i] : t(e(i));
  }
  return T = n, T;
}
var x, or;
function Mr() {
  if (or)
    return x;
  or = 1;
  var a = B(), r = 1 / 0;
  function t(e) {
    if (typeof e == "string" || a(e))
      return e;
    var n = e + "";
    return n == "0" && 1 / e == -r ? "-0" : n;
  }
  return x = t, x;
}
var O, fr;
function qe() {
  if (fr)
    return O;
  fr = 1;
  var a = Ar(), r = Mr();
  function t(e, n) {
    n = a(n, e);
    for (var i = 0, s = n.length; e != null && i < s; )
      e = e[r(n[i++])];
    return i && i == s ? e : void 0;
  }
  return O = t, O;
}
var F, lr;
function Qr() {
  if (lr)
    return F;
  lr = 1;
  function a(r, t) {
    return r != null && t in Object(r);
  }
  return F = a, F;
}
var N, hr;
function kr() {
  if (hr)
    return N;
  hr = 1;
  var a = Ar(), r = Nr(), t = c(), e = Vr(), n = Hr(), i = Mr();
  function s(u, o, f) {
    o = a(o, u);
    for (var l = -1, h = o.length, v = !1; ++l < h; ) {
      var d = i(o[l]);
      if (!(v = u != null && f(u, d)))
        break;
      u = u[d];
    }
    return v || ++l != h ? v : (h = u == null ? 0 : u.length, !!h && n(h) && e(d, h) && (t(u) || r(u)));
  }
  return N = s, N;
}
var w, cr;
function ge() {
  if (cr)
    return w;
  cr = 1;
  var a = Qr(), r = kr();
  function t(e, n) {
    return e != null && r(e, n, a);
  }
  return w = t, w;
}
var C, vr;
function jr() {
  if (vr)
    return C;
  vr = 1;
  function a(r) {
    return r;
  }
  return C = a, C;
}
var A, dr;
function re() {
  if (dr)
    return A;
  dr = 1;
  function a(r, t, e, n) {
    for (var i = r.length, s = e + (n ? 1 : -1); n ? s-- : ++s < i; )
      if (t(r[s], s, r))
        return s;
    return -1;
  }
  return A = a, A;
}
var M, _r;
function ee() {
  if (_r)
    return M;
  _r = 1;
  function a(r) {
    return r !== r;
  }
  return M = a, M;
}
var z, qr;
function ne() {
  if (qr)
    return z;
  qr = 1;
  function a(r, t, e) {
    for (var n = e - 1, i = r.length; ++n < i; )
      if (r[n] === t)
        return n;
    return -1;
  }
  return z = a, z;
}
var K, gr;
function te() {
  if (gr)
    return K;
  gr = 1;
  var a = re(), r = ee(), t = ne();
  function e(n, i, s) {
    return i === i ? t(n, i, s) : a(n, r, s);
  }
  return K = e, K;
}
var E, br;
function be() {
  if (br)
    return E;
  br = 1;
  var a = te();
  function r(t, e) {
    var n = t == null ? 0 : t.length;
    return !!n && a(t, e, 0) > -1;
  }
  return E = r, E;
}
var V, yr;
function ye() {
  if (yr)
    return V;
  yr = 1;
  function a(r, t, e) {
    for (var n = -1, i = r == null ? 0 : r.length; ++n < i; )
      if (e(t, r[n]))
        return !0;
    return !1;
  }
  return V = a, V;
}
var H, pr;
function ae() {
  if (pr)
    return H;
  pr = 1;
  function a(r, t, e) {
    switch (e.length) {
      case 0:
        return r.call(t);
      case 1:
        return r.call(t, e[0]);
      case 2:
        return r.call(t, e[0], e[1]);
      case 3:
        return r.call(t, e[0], e[1], e[2]);
    }
    return r.apply(t, e);
  }
  return H = a, H;
}
var G, Ir;
function ie() {
  if (Ir)
    return G;
  Ir = 1;
  var a = ae(), r = Math.max;
  function t(e, n, i) {
    return n = r(n === void 0 ? e.length - 1 : n, 0), function() {
      for (var s = arguments, u = -1, o = r(s.length - n, 0), f = Array(o); ++u < o; )
        f[u] = s[n + u];
      u = -1;
      for (var l = Array(n + 1); ++u < n; )
        l[u] = s[u];
      return l[n] = i(f), a(e, this, l);
    };
  }
  return G = t, G;
}
var L, mr;
function ue() {
  if (mr)
    return L;
  mr = 1;
  function a(r) {
    return function() {
      return r;
    };
  }
  return L = a, L;
}
var D, Rr;
function se() {
  if (Rr)
    return D;
  Rr = 1;
  var a = ue(), r = Cr(), t = jr(), e = r ? function(n, i) {
    return r(n, "toString", {
      configurable: !0,
      enumerable: !1,
      value: a(i),
      writable: !0
    });
  } : t;
  return D = e, D;
}
var W, Sr;
function oe() {
  if (Sr)
    return W;
  Sr = 1;
  var a = 800, r = 16, t = Date.now;
  function e(n) {
    var i = 0, s = 0;
    return function() {
      var u = t(), o = r - (u - s);
      if (s = u, o > 0) {
        if (++i >= a)
          return arguments[0];
      } else
        i = 0;
      return n.apply(void 0, arguments);
    };
  }
  return W = e, W;
}
var $, Pr;
function fe() {
  if (Pr)
    return $;
  Pr = 1;
  var a = se(), r = oe(), t = r(a);
  return $ = t, $;
}
var U, Tr;
function le() {
  if (Tr)
    return U;
  Tr = 1;
  var a = wr(), r = Nr(), t = c(), e = a ? a.isConcatSpreadable : void 0;
  function n(i) {
    return t(i) || r(i) || !!(e && i && i[e]);
  }
  return U = n, U;
}
var X, xr;
function he() {
  if (xr)
    return X;
  xr = 1;
  var a = Gr(), r = le();
  function t(e, n, i, s, u) {
    var o = -1, f = e.length;
    for (i || (i = r), u || (u = []); ++o < f; ) {
      var l = e[o];
      n > 0 && i(l) ? n > 1 ? t(l, n - 1, i, s, u) : a(u, l) : s || (u[u.length] = l);
    }
    return u;
  }
  return X = t, X;
}
var Y, Or;
function ce() {
  if (Or)
    return Y;
  Or = 1;
  var a = he();
  function r(t) {
    var e = t == null ? 0 : t.length;
    return e ? a(t, 1) : [];
  }
  return Y = r, Y;
}
var Z, Fr;
function pe() {
  if (Fr)
    return Z;
  Fr = 1;
  var a = ce(), r = ie(), t = fe();
  function e(n) {
    return t(r(n, void 0, a), n + "");
  }
  return Z = e, Z;
}
export {
  Wr as a,
  qe as b,
  ge as c,
  $r as d,
  Mr as e,
  jr as f,
  B as g,
  re as h,
  Zr as i,
  be as j,
  ye as k,
  fe as l,
  ie as m,
  Ar as n,
  pe as o,
  _e as r
};
