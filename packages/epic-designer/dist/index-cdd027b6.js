import { a as iu, c as be } from "./_commonjsHelpers-c5d32002.js";
import { r as Ke } from "./_vue_commonjs-external-eb7fec7f.js";
import { t as f, w as T, x as U, y as rt, A as We, B as jt, C as ba, D as ou, c as pr, b as yr, r as za, _ as ht, a as fo, e as Xn, f as Ba } from "./index-815197f3.js";
import { d as wr, _ as Ot, c as Gn, i as Da } from "./index-cd698eea.js";
import { s as br, a as Dr } from "./index-de83403a.js";
import { s as Tr, b as Qt } from "./index-ea8cae7f.js";
import { f as vo } from "./fade-in-scale-up.cssr-45666b81.js";
function lu(a, t) {
  for (var e = 0; e < t.length; e++) {
    const r = t[e];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const n in r)
        if (n !== "default" && !(n in a)) {
          const o = Object.getOwnPropertyDescriptor(r, n);
          o && Object.defineProperty(a, n, o.get ? o : {
            enumerable: !0,
            get: () => r[n]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }));
}
function ft(a, t) {
  f(2, arguments);
  var e = T(a), r = U(t);
  return isNaN(r) ? /* @__PURE__ */ new Date(NaN) : (r && e.setDate(e.getDate() + r), e);
}
function ja(a, t) {
  f(2, arguments);
  var e = T(a), r = U(t);
  if (isNaN(r))
    return /* @__PURE__ */ new Date(NaN);
  if (!r)
    return e;
  var n = e.getDate(), o = new Date(e.getTime());
  o.setMonth(e.getMonth() + r + 1, 0);
  var i = o.getDate();
  return n >= i ? o : (e.setFullYear(o.getFullYear(), o.getMonth(), n), e);
}
function va(a, t) {
  if (f(2, arguments), !t || rt(t) !== "object")
    return /* @__PURE__ */ new Date(NaN);
  var e = t.years ? U(t.years) : 0, r = t.months ? U(t.months) : 0, n = t.weeks ? U(t.weeks) : 0, o = t.days ? U(t.days) : 0, i = t.hours ? U(t.hours) : 0, u = t.minutes ? U(t.minutes) : 0, l = t.seconds ? U(t.seconds) : 0, s = T(a), d = r || e ? ja(s, r + e * 12) : s, c = o || n ? ft(d, o + n * 7) : d, h = u + i * 60, v = l + h * 60, b = v * 1e3, O = new Date(c.getTime() + b);
  return O;
}
function ha(a) {
  f(1, arguments);
  var t = T(a), e = t.getDay();
  return e === 0 || e === 6;
}
function Kn(a) {
  return f(1, arguments), T(a).getDay() === 0;
}
function ho(a) {
  return f(1, arguments), T(a).getDay() === 6;
}
function mo(a, t) {
  f(2, arguments);
  var e = T(a), r = ha(e), n = U(t);
  if (isNaN(n))
    return /* @__PURE__ */ new Date(NaN);
  var o = e.getHours(), i = n < 0 ? -1 : 1, u = U(n / 5);
  e.setDate(e.getDate() + u * 7);
  for (var l = Math.abs(n % 5); l > 0; )
    e.setDate(e.getDate() + i), ha(e) || (l -= 1);
  return r && ha(e) && n !== 0 && (ho(e) && e.setDate(e.getDate() + (i < 0 ? 2 : -1)), Kn(e) && e.setDate(e.getDate() + (i < 0 ? 1 : -2))), e.setHours(o), e;
}
function qa(a, t) {
  f(2, arguments);
  var e = T(a).getTime(), r = U(t);
  return new Date(e + r);
}
var uu = 36e5;
function Zn(a, t) {
  f(2, arguments);
  var e = U(t);
  return qa(a, e * uu);
}
function nt(a, t) {
  var e, r, n, o, i, u, l, s;
  f(1, arguments);
  var d = We(), c = U((e = (r = (n = (o = t == null ? void 0 : t.weekStartsOn) !== null && o !== void 0 ? o : t == null || (i = t.locale) === null || i === void 0 || (u = i.options) === null || u === void 0 ? void 0 : u.weekStartsOn) !== null && n !== void 0 ? n : d.weekStartsOn) !== null && r !== void 0 ? r : (l = d.locale) === null || l === void 0 || (s = l.options) === null || s === void 0 ? void 0 : s.weekStartsOn) !== null && e !== void 0 ? e : 0);
  if (!(c >= 0 && c <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var h = T(a), v = h.getDay(), b = (v < c ? 7 : 0) + v - c;
  return h.setDate(h.getDate() - b), h.setHours(0, 0, 0, 0), h;
}
function Ct(a) {
  return f(1, arguments), nt(a, {
    weekStartsOn: 1
  });
}
function qt(a) {
  f(1, arguments);
  var t = T(a), e = t.getFullYear(), r = /* @__PURE__ */ new Date(0);
  r.setFullYear(e + 1, 0, 4), r.setHours(0, 0, 0, 0);
  var n = Ct(r), o = /* @__PURE__ */ new Date(0);
  o.setFullYear(e, 0, 4), o.setHours(0, 0, 0, 0);
  var i = Ct(o);
  return t.getTime() >= n.getTime() ? e + 1 : t.getTime() >= i.getTime() ? e : e - 1;
}
function Pt(a) {
  f(1, arguments);
  var t = qt(a), e = /* @__PURE__ */ new Date(0);
  e.setFullYear(t, 0, 4), e.setHours(0, 0, 0, 0);
  var r = Ct(e);
  return r;
}
function Ge(a) {
  var t = new Date(Date.UTC(a.getFullYear(), a.getMonth(), a.getDate(), a.getHours(), a.getMinutes(), a.getSeconds(), a.getMilliseconds()));
  return t.setUTCFullYear(a.getFullYear()), a.getTime() - t.getTime();
}
function ga(a) {
  f(1, arguments);
  var t = T(a);
  return t.setHours(0, 0, 0, 0), t;
}
var su = 864e5;
function ct(a, t) {
  f(2, arguments);
  var e = ga(a), r = ga(t), n = e.getTime() - Ge(e), o = r.getTime() - Ge(r);
  return Math.round((n - o) / su);
}
function go(a, t) {
  f(2, arguments);
  var e = T(a), r = U(t), n = ct(e, Pt(e)), o = /* @__PURE__ */ new Date(0);
  return o.setFullYear(r, 0, 4), o.setHours(0, 0, 0, 0), e = Pt(o), e.setDate(e.getDate() + n), e;
}
function po(a, t) {
  f(2, arguments);
  var e = U(t);
  return go(a, qt(a) + e);
}
var du = 6e4;
function Jn(a, t) {
  f(2, arguments);
  var e = U(t);
  return qa(a, e * du);
}
function ei(a, t) {
  f(2, arguments);
  var e = U(t), r = e * 3;
  return ja(a, r);
}
function yo(a, t) {
  f(2, arguments);
  var e = U(t);
  return qa(a, e * 1e3);
}
function _r(a, t) {
  f(2, arguments);
  var e = U(t), r = e * 7;
  return ft(a, r);
}
function wo(a, t) {
  f(2, arguments);
  var e = U(t);
  return ja(a, e * 12);
}
function cu(a, t, e) {
  f(2, arguments);
  var r = T(a == null ? void 0 : a.start).getTime(), n = T(a == null ? void 0 : a.end).getTime(), o = T(t == null ? void 0 : t.start).getTime(), i = T(t == null ? void 0 : t.end).getTime();
  if (!(r <= n && o <= i))
    throw new RangeError("Invalid interval");
  return e != null && e.inclusive ? r <= i && o <= n : r < i && o < n;
}
function bo(a) {
  f(1, arguments);
  var t;
  if (a && typeof a.forEach == "function")
    t = a;
  else if (rt(a) === "object" && a !== null)
    t = Array.prototype.slice.call(a);
  else
    return /* @__PURE__ */ new Date(NaN);
  var e;
  return t.forEach(function(r) {
    var n = T(r);
    (e === void 0 || e < n || isNaN(Number(n))) && (e = n);
  }), e || /* @__PURE__ */ new Date(NaN);
}
function Do(a) {
  f(1, arguments);
  var t;
  if (a && typeof a.forEach == "function")
    t = a;
  else if (rt(a) === "object" && a !== null)
    t = Array.prototype.slice.call(a);
  else
    return /* @__PURE__ */ new Date(NaN);
  var e;
  return t.forEach(function(r) {
    var n = T(r);
    (e === void 0 || e > n || isNaN(n.getDate())) && (e = n);
  }), e || /* @__PURE__ */ new Date(NaN);
}
function fu(a, t) {
  var e = t.start, r = t.end;
  return f(2, arguments), Do([bo([a, e]), r]);
}
function vu(a, t) {
  f(2, arguments);
  var e = T(a);
  if (isNaN(Number(e)))
    return NaN;
  var r = e.getTime(), n;
  t == null ? n = [] : typeof t.forEach == "function" ? n = t : n = Array.prototype.slice.call(t);
  var o, i;
  return n.forEach(function(u, l) {
    var s = T(u);
    if (isNaN(Number(s))) {
      o = NaN, i = NaN;
      return;
    }
    var d = Math.abs(r - s.getTime());
    (o == null || d < Number(i)) && (o = l, i = d);
  }), o;
}
function hu(a, t) {
  f(2, arguments);
  var e = T(a);
  if (isNaN(Number(e)))
    return /* @__PURE__ */ new Date(NaN);
  var r = e.getTime(), n;
  t == null ? n = [] : typeof t.forEach == "function" ? n = t : n = Array.prototype.slice.call(t);
  var o, i;
  return n.forEach(function(u) {
    var l = T(u);
    if (isNaN(Number(l))) {
      o = /* @__PURE__ */ new Date(NaN), i = NaN;
      return;
    }
    var s = Math.abs(r - l.getTime());
    (o == null || s < Number(i)) && (o = l, i = s);
  }), o;
}
function ot(a, t) {
  f(2, arguments);
  var e = T(a), r = T(t), n = e.getTime() - r.getTime();
  return n < 0 ? -1 : n > 0 ? 1 : n;
}
function mu(a, t) {
  f(2, arguments);
  var e = T(a), r = T(t), n = e.getTime() - r.getTime();
  return n > 0 ? -1 : n < 0 ? 1 : n;
}
var ti = 7, To = 365.2425, _o = Math.pow(10, 8) * 24 * 60 * 60 * 1e3, Xt = 6e4, Gt = 36e5, Cr = 1e3, gu = -_o, ai = 60, ri = 3, ni = 12, ii = 4, La = 3600, Mr = 60, Or = La * 24, Co = Or * 7, oi = Or * To, li = oi / 12, Mo = li * 3;
function pu(a) {
  f(1, arguments);
  var t = a / ti;
  return Math.floor(t);
}
function Qa(a, t) {
  f(2, arguments);
  var e = ga(a), r = ga(t);
  return e.getTime() === r.getTime();
}
function Oo(a) {
  return f(1, arguments), a instanceof Date || rt(a) === "object" && Object.prototype.toString.call(a) === "[object Date]";
}
function Mt(a) {
  if (f(1, arguments), !Oo(a) && typeof a != "number")
    return !1;
  var t = T(a);
  return !isNaN(Number(t));
}
function yu(a, t) {
  f(2, arguments);
  var e = T(a), r = T(t);
  if (!Mt(e) || !Mt(r))
    return NaN;
  var n = ct(e, r), o = n < 0 ? -1 : 1, i = U(n / 7), u = i * 5;
  for (r = ft(r, i * 7); !Qa(e, r); )
    u += ha(r) ? 0 : o, r = ft(r, o);
  return u === 0 ? 0 : u;
}
function ko(a, t) {
  return f(2, arguments), qt(a) - qt(t);
}
var wu = 6048e5;
function bu(a, t) {
  f(2, arguments);
  var e = Ct(a), r = Ct(t), n = e.getTime() - Ge(e), o = r.getTime() - Ge(r);
  return Math.round((n - o) / wu);
}
function lr(a, t) {
  f(2, arguments);
  var e = T(a), r = T(t), n = e.getFullYear() - r.getFullYear(), o = e.getMonth() - r.getMonth();
  return n * 12 + o;
}
function Zr(a) {
  f(1, arguments);
  var t = T(a), e = Math.floor(t.getMonth() / 3) + 1;
  return e;
}
function or(a, t) {
  f(2, arguments);
  var e = T(a), r = T(t), n = e.getFullYear() - r.getFullYear(), o = Zr(e) - Zr(r);
  return n * 4 + o;
}
var Du = 6048e5;
function ur(a, t, e) {
  f(2, arguments);
  var r = nt(a, e), n = nt(t, e), o = r.getTime() - Ge(r), i = n.getTime() - Ge(n);
  return Math.round((o - i) / Du);
}
function Va(a, t) {
  f(2, arguments);
  var e = T(a), r = T(t);
  return e.getFullYear() - r.getFullYear();
}
function Ai(a, t) {
  var e = a.getFullYear() - t.getFullYear() || a.getMonth() - t.getMonth() || a.getDate() - t.getDate() || a.getHours() - t.getHours() || a.getMinutes() - t.getMinutes() || a.getSeconds() - t.getSeconds() || a.getMilliseconds() - t.getMilliseconds();
  return e < 0 ? -1 : e > 0 ? 1 : e;
}
function ui(a, t) {
  f(2, arguments);
  var e = T(a), r = T(t), n = Ai(e, r), o = Math.abs(ct(e, r));
  e.setDate(e.getDate() - n * o);
  var i = +(Ai(e, r) === -n), u = n * (o - i);
  return u === 0 ? 0 : u;
}
function kr(a, t) {
  return f(2, arguments), T(a).getTime() - T(t).getTime();
}
var Ui = {
  ceil: Math.ceil,
  round: Math.round,
  floor: Math.floor,
  trunc: function(t) {
    return t < 0 ? Math.ceil(t) : Math.floor(t);
  }
  // Math.trunc is not supported by IE
}, Tu = "trunc";
function Ta(a) {
  return a ? Ui[a] : Ui[Tu];
}
function sr(a, t, e) {
  f(2, arguments);
  var r = kr(a, t) / Gt;
  return Ta(e == null ? void 0 : e.roundingMethod)(r);
}
function xo(a, t) {
  f(2, arguments);
  var e = U(t);
  return po(a, -e);
}
function _u(a, t) {
  f(2, arguments);
  var e = T(a), r = T(t), n = ot(e, r), o = Math.abs(ko(e, r));
  e = xo(e, n * o);
  var i = +(ot(e, r) === -n), u = n * (o - i);
  return u === 0 ? 0 : u;
}
function dr(a, t, e) {
  f(2, arguments);
  var r = kr(a, t) / Xt;
  return Ta(e == null ? void 0 : e.roundingMethod)(r);
}
function si(a) {
  f(1, arguments);
  var t = T(a);
  return t.setHours(23, 59, 59, 999), t;
}
function di(a) {
  f(1, arguments);
  var t = T(a), e = t.getMonth();
  return t.setFullYear(t.getFullYear(), e + 1, 0), t.setHours(23, 59, 59, 999), t;
}
function So(a) {
  f(1, arguments);
  var t = T(a);
  return si(t).getTime() === di(t).getTime();
}
function xr(a, t) {
  f(2, arguments);
  var e = T(a), r = T(t), n = ot(e, r), o = Math.abs(lr(e, r)), i;
  if (o < 1)
    i = 0;
  else {
    e.getMonth() === 1 && e.getDate() > 27 && e.setDate(30), e.setMonth(e.getMonth() - n * o);
    var u = ot(e, r) === -n;
    So(T(a)) && o === 1 && ot(a, r) === 1 && (u = !1), i = n * (o - Number(u));
  }
  return i === 0 ? 0 : i;
}
function Cu(a, t, e) {
  f(2, arguments);
  var r = xr(a, t) / 3;
  return Ta(e == null ? void 0 : e.roundingMethod)(r);
}
function ma(a, t, e) {
  f(2, arguments);
  var r = kr(a, t) / 1e3;
  return Ta(e == null ? void 0 : e.roundingMethod)(r);
}
function Mu(a, t, e) {
  f(2, arguments);
  var r = ui(a, t) / 7;
  return Ta(e == null ? void 0 : e.roundingMethod)(r);
}
function Po(a, t) {
  f(2, arguments);
  var e = T(a), r = T(t), n = ot(e, r), o = Math.abs(Va(e, r));
  e.setFullYear(1584), r.setFullYear(1584);
  var i = ot(e, r) === -n, u = n * (o - Number(i));
  return u === 0 ? 0 : u;
}
function $o(a, t) {
  var e;
  f(1, arguments);
  var r = a || {}, n = T(r.start), o = T(r.end), i = o.getTime();
  if (!(n.getTime() <= i))
    throw new RangeError("Invalid interval");
  var u = [], l = n;
  l.setHours(0, 0, 0, 0);
  var s = Number((e = t == null ? void 0 : t.step) !== null && e !== void 0 ? e : 1);
  if (s < 1 || isNaN(s))
    throw new RangeError("`options.step` must be a number greater than 1");
  for (; l.getTime() <= i; )
    u.push(T(l)), l.setDate(l.getDate() + s), l.setHours(0, 0, 0, 0);
  return u;
}
function Ou(a, t) {
  var e;
  f(1, arguments);
  var r = a || {}, n = T(r.start), o = T(r.end), i = n.getTime(), u = o.getTime();
  if (!(i <= u))
    throw new RangeError("Invalid interval");
  var l = [], s = n;
  s.setMinutes(0, 0, 0);
  var d = Number((e = t == null ? void 0 : t.step) !== null && e !== void 0 ? e : 1);
  if (d < 1 || isNaN(d))
    throw new RangeError("`options.step` must be a number greater than 1");
  for (; s.getTime() <= u; )
    l.push(T(s)), s = Zn(s, d);
  return l;
}
function cr(a) {
  f(1, arguments);
  var t = T(a);
  return t.setSeconds(0, 0), t;
}
function ku(a, t) {
  var e;
  f(1, arguments);
  var r = cr(T(a.start)), n = T(a.end), o = r.getTime(), i = n.getTime();
  if (o >= i)
    throw new RangeError("Invalid interval");
  var u = [], l = r, s = Number((e = t == null ? void 0 : t.step) !== null && e !== void 0 ? e : 1);
  if (s < 1 || isNaN(s))
    throw new RangeError("`options.step` must be a number equal to or greater than 1");
  for (; l.getTime() <= i; )
    u.push(T(l)), l = Jn(l, s);
  return u;
}
function xu(a) {
  f(1, arguments);
  var t = a || {}, e = T(t.start), r = T(t.end), n = r.getTime(), o = [];
  if (!(e.getTime() <= n))
    throw new RangeError("Invalid interval");
  var i = e;
  for (i.setHours(0, 0, 0, 0), i.setDate(1); i.getTime() <= n; )
    o.push(T(i)), i.setMonth(i.getMonth() + 1);
  return o;
}
function Wa(a) {
  f(1, arguments);
  var t = T(a), e = t.getMonth(), r = e - e % 3;
  return t.setMonth(r, 1), t.setHours(0, 0, 0, 0), t;
}
function Su(a) {
  f(1, arguments);
  var t = a || {}, e = T(t.start), r = T(t.end), n = r.getTime();
  if (!(e.getTime() <= n))
    throw new RangeError("Invalid interval");
  var o = Wa(e), i = Wa(r);
  n = i.getTime();
  for (var u = [], l = o; l.getTime() <= n; )
    u.push(T(l)), l = ei(l, 1);
  return u;
}
function Pu(a, t) {
  f(1, arguments);
  var e = a || {}, r = T(e.start), n = T(e.end), o = n.getTime();
  if (!(r.getTime() <= o))
    throw new RangeError("Invalid interval");
  var i = nt(r, t), u = nt(n, t);
  i.setHours(15), u.setHours(15), o = u.getTime();
  for (var l = [], s = i; s.getTime() <= o; )
    s.setHours(0), l.push(T(s)), s = _r(s, 1), s.setHours(15);
  return l;
}
function ci(a) {
  f(1, arguments);
  for (var t = $o(a), e = [], r = 0; r < t.length; ) {
    var n = t[r++];
    ha(n) && (e.push(n), Kn(n) && (r = r + 5));
  }
  return e;
}
function Sr(a) {
  f(1, arguments);
  var t = T(a);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function $u(a) {
  f(1, arguments);
  var t = Sr(a);
  if (isNaN(t.getTime()))
    throw new RangeError("The passed date is invalid");
  var e = di(a);
  return ci({
    start: t,
    end: e
  });
}
function Ro(a) {
  f(1, arguments);
  var t = T(a), e = t.getFullYear();
  return t.setFullYear(e + 1, 0, 0), t.setHours(23, 59, 59, 999), t;
}
function fi(a) {
  f(1, arguments);
  var t = T(a), e = /* @__PURE__ */ new Date(0);
  return e.setFullYear(t.getFullYear(), 0, 1), e.setHours(0, 0, 0, 0), e;
}
function Ru(a) {
  f(1, arguments);
  var t = fi(a), e = Ro(a);
  return ci({
    start: t,
    end: e
  });
}
function Iu(a) {
  f(1, arguments);
  var t = a || {}, e = T(t.start), r = T(t.end), n = r.getTime();
  if (!(e.getTime() <= n))
    throw new RangeError("Invalid interval");
  var o = [], i = e;
  for (i.setHours(0, 0, 0, 0), i.setMonth(0, 1); i.getTime() <= n; )
    o.push(T(i)), i.setFullYear(i.getFullYear() + 1);
  return o;
}
function Nu(a) {
  f(1, arguments);
  var t = T(a), e = t.getFullYear(), r = 9 + Math.floor(e / 10) * 10;
  return t.setFullYear(r, 11, 31), t.setHours(23, 59, 59, 999), t;
}
function Eu(a) {
  f(1, arguments);
  var t = T(a);
  return t.setMinutes(59, 59, 999), t;
}
function Io(a, t) {
  var e, r, n, o, i, u, l, s;
  f(1, arguments);
  var d = We(), c = U((e = (r = (n = (o = t == null ? void 0 : t.weekStartsOn) !== null && o !== void 0 ? o : t == null || (i = t.locale) === null || i === void 0 || (u = i.options) === null || u === void 0 ? void 0 : u.weekStartsOn) !== null && n !== void 0 ? n : d.weekStartsOn) !== null && r !== void 0 ? r : (l = d.locale) === null || l === void 0 || (s = l.options) === null || s === void 0 ? void 0 : s.weekStartsOn) !== null && e !== void 0 ? e : 0);
  if (!(c >= 0 && c <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var h = T(a), v = h.getDay(), b = (v < c ? -7 : 0) + 6 - (v - c);
  return h.setDate(h.getDate() + b), h.setHours(23, 59, 59, 999), h;
}
function Yu(a) {
  return f(1, arguments), Io(a, {
    weekStartsOn: 1
  });
}
function Fu(a) {
  f(1, arguments);
  var t = qt(a), e = /* @__PURE__ */ new Date(0);
  e.setFullYear(t + 1, 0, 4), e.setHours(0, 0, 0, 0);
  var r = Ct(e);
  return r.setMilliseconds(r.getMilliseconds() - 1), r;
}
function Au(a) {
  f(1, arguments);
  var t = T(a);
  return t.setSeconds(59, 999), t;
}
function Uu(a) {
  f(1, arguments);
  var t = T(a), e = t.getMonth(), r = e - e % 3 + 3;
  return t.setMonth(r, 0), t.setHours(23, 59, 59, 999), t;
}
function Hu(a) {
  f(1, arguments);
  var t = T(a);
  return t.setMilliseconds(999), t;
}
function Vu() {
  return si(Date.now());
}
function Wu() {
  var a = /* @__PURE__ */ new Date(), t = a.getFullYear(), e = a.getMonth(), r = a.getDate(), n = /* @__PURE__ */ new Date(0);
  return n.setFullYear(t, e, r + 1), n.setHours(23, 59, 59, 999), n;
}
function zu() {
  var a = /* @__PURE__ */ new Date(), t = a.getFullYear(), e = a.getMonth(), r = a.getDate(), n = /* @__PURE__ */ new Date(0);
  return n.setFullYear(t, e, r - 1), n.setHours(23, 59, 59, 999), n;
}
function pa(a, t) {
  f(2, arguments);
  var e = U(t);
  return qa(a, -e);
}
var Bu = 864e5;
function ju(a) {
  f(1, arguments);
  var t = T(a), e = t.getTime();
  t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  var r = t.getTime(), n = e - r;
  return Math.floor(n / Bu) + 1;
}
function ya(a) {
  f(1, arguments);
  var t = 1, e = T(a), r = e.getUTCDay(), n = (r < t ? 7 : 0) + r - t;
  return e.setUTCDate(e.getUTCDate() - n), e.setUTCHours(0, 0, 0, 0), e;
}
function No(a) {
  f(1, arguments);
  var t = T(a), e = t.getUTCFullYear(), r = /* @__PURE__ */ new Date(0);
  r.setUTCFullYear(e + 1, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var n = ya(r), o = /* @__PURE__ */ new Date(0);
  o.setUTCFullYear(e, 0, 4), o.setUTCHours(0, 0, 0, 0);
  var i = ya(o);
  return t.getTime() >= n.getTime() ? e + 1 : t.getTime() >= i.getTime() ? e : e - 1;
}
function qu(a) {
  f(1, arguments);
  var t = No(a), e = /* @__PURE__ */ new Date(0);
  e.setUTCFullYear(t, 0, 4), e.setUTCHours(0, 0, 0, 0);
  var r = ya(e);
  return r;
}
var Lu = 6048e5;
function Eo(a) {
  f(1, arguments);
  var t = T(a), e = ya(t).getTime() - qu(t).getTime();
  return Math.round(e / Lu) + 1;
}
function vi(a, t) {
  var e, r, n, o, i, u, l, s;
  f(1, arguments);
  var d = T(a), c = d.getUTCFullYear(), h = We(), v = U((e = (r = (n = (o = t == null ? void 0 : t.firstWeekContainsDate) !== null && o !== void 0 ? o : t == null || (i = t.locale) === null || i === void 0 || (u = i.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && n !== void 0 ? n : h.firstWeekContainsDate) !== null && r !== void 0 ? r : (l = h.locale) === null || l === void 0 || (s = l.options) === null || s === void 0 ? void 0 : s.firstWeekContainsDate) !== null && e !== void 0 ? e : 1);
  if (!(v >= 1 && v <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var b = /* @__PURE__ */ new Date(0);
  b.setUTCFullYear(c + 1, 0, v), b.setUTCHours(0, 0, 0, 0);
  var O = jt(b, t), D = /* @__PURE__ */ new Date(0);
  D.setUTCFullYear(c, 0, v), D.setUTCHours(0, 0, 0, 0);
  var m = jt(D, t);
  return d.getTime() >= O.getTime() ? c + 1 : d.getTime() >= m.getTime() ? c : c - 1;
}
function Qu(a, t) {
  var e, r, n, o, i, u, l, s;
  f(1, arguments);
  var d = We(), c = U((e = (r = (n = (o = t == null ? void 0 : t.firstWeekContainsDate) !== null && o !== void 0 ? o : t == null || (i = t.locale) === null || i === void 0 || (u = i.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && n !== void 0 ? n : d.firstWeekContainsDate) !== null && r !== void 0 ? r : (l = d.locale) === null || l === void 0 || (s = l.options) === null || s === void 0 ? void 0 : s.firstWeekContainsDate) !== null && e !== void 0 ? e : 1), h = vi(a, t), v = /* @__PURE__ */ new Date(0);
  v.setUTCFullYear(h, 0, c), v.setUTCHours(0, 0, 0, 0);
  var b = jt(v, t);
  return b;
}
var Xu = 6048e5;
function Yo(a, t) {
  f(1, arguments);
  var e = T(a), r = jt(e, t).getTime() - Qu(e, t).getTime();
  return Math.round(r / Xu) + 1;
}
function L(a, t) {
  for (var e = a < 0 ? "-" : "", r = Math.abs(a).toString(); r.length < t; )
    r = "0" + r;
  return e + r;
}
var Gu = {
  // Year
  y: function(t, e) {
    var r = t.getUTCFullYear(), n = r > 0 ? r : 1 - r;
    return L(e === "yy" ? n % 100 : n, e.length);
  },
  // Month
  M: function(t, e) {
    var r = t.getUTCMonth();
    return e === "M" ? String(r + 1) : L(r + 1, 2);
  },
  // Day of the month
  d: function(t, e) {
    return L(t.getUTCDate(), e.length);
  },
  // AM or PM
  a: function(t, e) {
    var r = t.getUTCHours() / 12 >= 1 ? "pm" : "am";
    switch (e) {
      case "a":
      case "aa":
        return r.toUpperCase();
      case "aaa":
        return r;
      case "aaaaa":
        return r[0];
      case "aaaa":
      default:
        return r === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h: function(t, e) {
    return L(t.getUTCHours() % 12 || 12, e.length);
  },
  // Hour [0-23]
  H: function(t, e) {
    return L(t.getUTCHours(), e.length);
  },
  // Minute
  m: function(t, e) {
    return L(t.getUTCMinutes(), e.length);
  },
  // Second
  s: function(t, e) {
    return L(t.getUTCSeconds(), e.length);
  },
  // Fraction of second
  S: function(t, e) {
    var r = e.length, n = t.getUTCMilliseconds(), o = Math.floor(n * Math.pow(10, r - 3));
    return L(o, e.length);
  }
};
const Tt = Gu;
var ca = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Ku = {
  // Era
  G: function(t, e, r) {
    var n = t.getUTCFullYear() > 0 ? 1 : 0;
    switch (e) {
      case "G":
      case "GG":
      case "GGG":
        return r.era(n, {
          width: "abbreviated"
        });
      case "GGGGG":
        return r.era(n, {
          width: "narrow"
        });
      case "GGGG":
      default:
        return r.era(n, {
          width: "wide"
        });
    }
  },
  // Year
  y: function(t, e, r) {
    if (e === "yo") {
      var n = t.getUTCFullYear(), o = n > 0 ? n : 1 - n;
      return r.ordinalNumber(o, {
        unit: "year"
      });
    }
    return Tt.y(t, e);
  },
  // Local week-numbering year
  Y: function(t, e, r, n) {
    var o = vi(t, n), i = o > 0 ? o : 1 - o;
    if (e === "YY") {
      var u = i % 100;
      return L(u, 2);
    }
    return e === "Yo" ? r.ordinalNumber(i, {
      unit: "year"
    }) : L(i, e.length);
  },
  // ISO week-numbering year
  R: function(t, e) {
    var r = No(t);
    return L(r, e.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(t, e) {
    var r = t.getUTCFullYear();
    return L(r, e.length);
  },
  // Quarter
  Q: function(t, e, r) {
    var n = Math.ceil((t.getUTCMonth() + 1) / 3);
    switch (e) {
      case "Q":
        return String(n);
      case "QQ":
        return L(n, 2);
      case "Qo":
        return r.ordinalNumber(n, {
          unit: "quarter"
        });
      case "QQQ":
        return r.quarter(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return r.quarter(n, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return r.quarter(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(t, e, r) {
    var n = Math.ceil((t.getUTCMonth() + 1) / 3);
    switch (e) {
      case "q":
        return String(n);
      case "qq":
        return L(n, 2);
      case "qo":
        return r.ordinalNumber(n, {
          unit: "quarter"
        });
      case "qqq":
        return r.quarter(n, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return r.quarter(n, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return r.quarter(n, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(t, e, r) {
    var n = t.getUTCMonth();
    switch (e) {
      case "M":
      case "MM":
        return Tt.M(t, e);
      case "Mo":
        return r.ordinalNumber(n + 1, {
          unit: "month"
        });
      case "MMM":
        return r.month(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return r.month(n, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return r.month(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone month
  L: function(t, e, r) {
    var n = t.getUTCMonth();
    switch (e) {
      case "L":
        return String(n + 1);
      case "LL":
        return L(n + 1, 2);
      case "Lo":
        return r.ordinalNumber(n + 1, {
          unit: "month"
        });
      case "LLL":
        return r.month(n, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return r.month(n, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return r.month(n, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Local week of year
  w: function(t, e, r, n) {
    var o = Yo(t, n);
    return e === "wo" ? r.ordinalNumber(o, {
      unit: "week"
    }) : L(o, e.length);
  },
  // ISO week of year
  I: function(t, e, r) {
    var n = Eo(t);
    return e === "Io" ? r.ordinalNumber(n, {
      unit: "week"
    }) : L(n, e.length);
  },
  // Day of the month
  d: function(t, e, r) {
    return e === "do" ? r.ordinalNumber(t.getUTCDate(), {
      unit: "date"
    }) : Tt.d(t, e);
  },
  // Day of year
  D: function(t, e, r) {
    var n = ju(t);
    return e === "Do" ? r.ordinalNumber(n, {
      unit: "dayOfYear"
    }) : L(n, e.length);
  },
  // Day of week
  E: function(t, e, r) {
    var n = t.getUTCDay();
    switch (e) {
      case "E":
      case "EE":
      case "EEE":
        return r.day(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return r.day(n, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return r.day(n, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return r.day(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(t, e, r, n) {
    var o = t.getUTCDay(), i = (o - n.weekStartsOn + 8) % 7 || 7;
    switch (e) {
      case "e":
        return String(i);
      case "ee":
        return L(i, 2);
      case "eo":
        return r.ordinalNumber(i, {
          unit: "day"
        });
      case "eee":
        return r.day(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return r.day(o, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return r.day(o, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return r.day(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(t, e, r, n) {
    var o = t.getUTCDay(), i = (o - n.weekStartsOn + 8) % 7 || 7;
    switch (e) {
      case "c":
        return String(i);
      case "cc":
        return L(i, e.length);
      case "co":
        return r.ordinalNumber(i, {
          unit: "day"
        });
      case "ccc":
        return r.day(o, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return r.day(o, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return r.day(o, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return r.day(o, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(t, e, r) {
    var n = t.getUTCDay(), o = n === 0 ? 7 : n;
    switch (e) {
      case "i":
        return String(o);
      case "ii":
        return L(o, e.length);
      case "io":
        return r.ordinalNumber(o, {
          unit: "day"
        });
      case "iii":
        return r.day(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return r.day(n, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return r.day(n, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return r.day(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(t, e, r) {
    var n = t.getUTCHours(), o = n / 12 >= 1 ? "pm" : "am";
    switch (e) {
      case "a":
      case "aa":
        return r.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return r.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return r.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return r.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(t, e, r) {
    var n = t.getUTCHours(), o;
    switch (n === 12 ? o = ca.noon : n === 0 ? o = ca.midnight : o = n / 12 >= 1 ? "pm" : "am", e) {
      case "b":
      case "bb":
        return r.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return r.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return r.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return r.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(t, e, r) {
    var n = t.getUTCHours(), o;
    switch (n >= 17 ? o = ca.evening : n >= 12 ? o = ca.afternoon : n >= 4 ? o = ca.morning : o = ca.night, e) {
      case "B":
      case "BB":
      case "BBB":
        return r.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return r.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return r.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(t, e, r) {
    if (e === "ho") {
      var n = t.getUTCHours() % 12;
      return n === 0 && (n = 12), r.ordinalNumber(n, {
        unit: "hour"
      });
    }
    return Tt.h(t, e);
  },
  // Hour [0-23]
  H: function(t, e, r) {
    return e === "Ho" ? r.ordinalNumber(t.getUTCHours(), {
      unit: "hour"
    }) : Tt.H(t, e);
  },
  // Hour [0-11]
  K: function(t, e, r) {
    var n = t.getUTCHours() % 12;
    return e === "Ko" ? r.ordinalNumber(n, {
      unit: "hour"
    }) : L(n, e.length);
  },
  // Hour [1-24]
  k: function(t, e, r) {
    var n = t.getUTCHours();
    return n === 0 && (n = 24), e === "ko" ? r.ordinalNumber(n, {
      unit: "hour"
    }) : L(n, e.length);
  },
  // Minute
  m: function(t, e, r) {
    return e === "mo" ? r.ordinalNumber(t.getUTCMinutes(), {
      unit: "minute"
    }) : Tt.m(t, e);
  },
  // Second
  s: function(t, e, r) {
    return e === "so" ? r.ordinalNumber(t.getUTCSeconds(), {
      unit: "second"
    }) : Tt.s(t, e);
  },
  // Fraction of second
  S: function(t, e) {
    return Tt.S(t, e);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(t, e, r, n) {
    var o = n._originalDate || t, i = o.getTimezoneOffset();
    if (i === 0)
      return "Z";
    switch (e) {
      case "X":
        return Vi(i);
      case "XXXX":
      case "XX":
        return Bt(i);
      case "XXXXX":
      case "XXX":
      default:
        return Bt(i, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(t, e, r, n) {
    var o = n._originalDate || t, i = o.getTimezoneOffset();
    switch (e) {
      case "x":
        return Vi(i);
      case "xxxx":
      case "xx":
        return Bt(i);
      case "xxxxx":
      case "xxx":
      default:
        return Bt(i, ":");
    }
  },
  // Timezone (GMT)
  O: function(t, e, r, n) {
    var o = n._originalDate || t, i = o.getTimezoneOffset();
    switch (e) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Hi(i, ":");
      case "OOOO":
      default:
        return "GMT" + Bt(i, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(t, e, r, n) {
    var o = n._originalDate || t, i = o.getTimezoneOffset();
    switch (e) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Hi(i, ":");
      case "zzzz":
      default:
        return "GMT" + Bt(i, ":");
    }
  },
  // Seconds timestamp
  t: function(t, e, r, n) {
    var o = n._originalDate || t, i = Math.floor(o.getTime() / 1e3);
    return L(i, e.length);
  },
  // Milliseconds timestamp
  T: function(t, e, r, n) {
    var o = n._originalDate || t, i = o.getTime();
    return L(i, e.length);
  }
};
function Hi(a, t) {
  var e = a > 0 ? "-" : "+", r = Math.abs(a), n = Math.floor(r / 60), o = r % 60;
  if (o === 0)
    return e + String(n);
  var i = t || "";
  return e + String(n) + i + L(o, 2);
}
function Vi(a, t) {
  if (a % 60 === 0) {
    var e = a > 0 ? "-" : "+";
    return e + L(Math.abs(a) / 60, 2);
  }
  return Bt(a, t);
}
function Bt(a, t) {
  var e = t || "", r = a > 0 ? "-" : "+", n = Math.abs(a), o = L(Math.floor(n / 60), 2), i = L(n % 60, 2);
  return r + o + e + i;
}
const Zu = Ku;
var Wi = function(t, e) {
  switch (t) {
    case "P":
      return e.date({
        width: "short"
      });
    case "PP":
      return e.date({
        width: "medium"
      });
    case "PPP":
      return e.date({
        width: "long"
      });
    case "PPPP":
    default:
      return e.date({
        width: "full"
      });
  }
}, Fo = function(t, e) {
  switch (t) {
    case "p":
      return e.time({
        width: "short"
      });
    case "pp":
      return e.time({
        width: "medium"
      });
    case "ppp":
      return e.time({
        width: "long"
      });
    case "pppp":
    default:
      return e.time({
        width: "full"
      });
  }
}, Ju = function(t, e) {
  var r = t.match(/(P+)(p+)?/) || [], n = r[1], o = r[2];
  if (!o)
    return Wi(t, e);
  var i;
  switch (n) {
    case "P":
      i = e.dateTime({
        width: "short"
      });
      break;
    case "PP":
      i = e.dateTime({
        width: "medium"
      });
      break;
    case "PPP":
      i = e.dateTime({
        width: "long"
      });
      break;
    case "PPPP":
    default:
      i = e.dateTime({
        width: "full"
      });
      break;
  }
  return i.replace("{{date}}", Wi(n, e)).replace("{{time}}", Fo(o, e));
}, es = {
  p: Fo,
  P: Ju
};
const Jr = es;
var ts = ["D", "DD"], as = ["YY", "YYYY"];
function Ao(a) {
  return ts.indexOf(a) !== -1;
}
function Uo(a) {
  return as.indexOf(a) !== -1;
}
function fr(a, t, e) {
  if (a === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t, "`) for formatting years to the input `").concat(e, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (a === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(t, "`) for formatting years to the input `").concat(e, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (a === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(t, "`) for formatting days of the month to the input `").concat(e, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (a === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(t, "`) for formatting days of the month to the input `").concat(e, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var rs = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, ns = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, is = /^'([^]*?)'?$/, os = /''/g, ls = /[a-zA-Z]/;
function Ho(a, t, e) {
  var r, n, o, i, u, l, s, d, c, h, v, b, O, D, m, p, y, C;
  f(2, arguments);
  var _ = String(t), N = We(), H = (r = (n = e == null ? void 0 : e.locale) !== null && n !== void 0 ? n : N.locale) !== null && r !== void 0 ? r : ba, k = U((o = (i = (u = (l = e == null ? void 0 : e.firstWeekContainsDate) !== null && l !== void 0 ? l : e == null || (s = e.locale) === null || s === void 0 || (d = s.options) === null || d === void 0 ? void 0 : d.firstWeekContainsDate) !== null && u !== void 0 ? u : N.firstWeekContainsDate) !== null && i !== void 0 ? i : (c = N.locale) === null || c === void 0 || (h = c.options) === null || h === void 0 ? void 0 : h.firstWeekContainsDate) !== null && o !== void 0 ? o : 1);
  if (!(k >= 1 && k <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var x = U((v = (b = (O = (D = e == null ? void 0 : e.weekStartsOn) !== null && D !== void 0 ? D : e == null || (m = e.locale) === null || m === void 0 || (p = m.options) === null || p === void 0 ? void 0 : p.weekStartsOn) !== null && O !== void 0 ? O : N.weekStartsOn) !== null && b !== void 0 ? b : (y = N.locale) === null || y === void 0 || (C = y.options) === null || C === void 0 ? void 0 : C.weekStartsOn) !== null && v !== void 0 ? v : 0);
  if (!(x >= 0 && x <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!H.localize)
    throw new RangeError("locale must contain localize property");
  if (!H.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var $ = T(a);
  if (!Mt($))
    throw new RangeError("Invalid time value");
  var Y = Ge($), A = pa($, Y), z = {
    firstWeekContainsDate: k,
    weekStartsOn: x,
    locale: H,
    _originalDate: $
  }, te = _.match(ns).map(function(q) {
    var re = q[0];
    if (re === "p" || re === "P") {
      var pe = Jr[re];
      return pe(q, H.formatLong);
    }
    return q;
  }).join("").match(rs).map(function(q) {
    if (q === "''")
      return "'";
    var re = q[0];
    if (re === "'")
      return us(q);
    var pe = Zu[re];
    if (pe)
      return !(e != null && e.useAdditionalWeekYearTokens) && Uo(q) && fr(q, t, String(a)), !(e != null && e.useAdditionalDayOfYearTokens) && Ao(q) && fr(q, t, String(a)), pe(A, q, H.localize, z);
    if (re.match(ls))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + re + "`");
    return q;
  }).join("");
  return te;
}
function us(a) {
  var t = a.match(is);
  return t ? t[1].replace(os, "'") : a;
}
function Xa(a, t) {
  if (a == null)
    throw new TypeError("assign requires that input parameter not be null or undefined");
  for (var e in t)
    Object.prototype.hasOwnProperty.call(t, e) && (a[e] = t[e]);
  return a;
}
function Vo(a) {
  return Xa({}, a);
}
var zi = 1440, ss = 2520, Vr = 43200, ds = 86400;
function Wo(a, t, e) {
  var r, n;
  f(2, arguments);
  var o = We(), i = (r = (n = e == null ? void 0 : e.locale) !== null && n !== void 0 ? n : o.locale) !== null && r !== void 0 ? r : ba;
  if (!i.formatDistance)
    throw new RangeError("locale must contain formatDistance property");
  var u = ot(a, t);
  if (isNaN(u))
    throw new RangeError("Invalid time value");
  var l = Xa(Vo(e), {
    addSuffix: !!(e != null && e.addSuffix),
    comparison: u
  }), s, d;
  u > 0 ? (s = T(t), d = T(a)) : (s = T(a), d = T(t));
  var c = ma(d, s), h = (Ge(d) - Ge(s)) / 1e3, v = Math.round((c - h) / 60), b;
  if (v < 2)
    return e != null && e.includeSeconds ? c < 5 ? i.formatDistance("lessThanXSeconds", 5, l) : c < 10 ? i.formatDistance("lessThanXSeconds", 10, l) : c < 20 ? i.formatDistance("lessThanXSeconds", 20, l) : c < 40 ? i.formatDistance("halfAMinute", 0, l) : c < 60 ? i.formatDistance("lessThanXMinutes", 1, l) : i.formatDistance("xMinutes", 1, l) : v === 0 ? i.formatDistance("lessThanXMinutes", 1, l) : i.formatDistance("xMinutes", v, l);
  if (v < 45)
    return i.formatDistance("xMinutes", v, l);
  if (v < 90)
    return i.formatDistance("aboutXHours", 1, l);
  if (v < zi) {
    var O = Math.round(v / 60);
    return i.formatDistance("aboutXHours", O, l);
  } else {
    if (v < ss)
      return i.formatDistance("xDays", 1, l);
    if (v < Vr) {
      var D = Math.round(v / zi);
      return i.formatDistance("xDays", D, l);
    } else if (v < ds)
      return b = Math.round(v / Vr), i.formatDistance("aboutXMonths", b, l);
  }
  if (b = xr(d, s), b < 12) {
    var m = Math.round(v / Vr);
    return i.formatDistance("xMonths", m, l);
  } else {
    var p = b % 12, y = Math.floor(b / 12);
    return p < 3 ? i.formatDistance("aboutXYears", y, l) : p < 9 ? i.formatDistance("overXYears", y, l) : i.formatDistance("almostXYears", y + 1, l);
  }
}
var Bi = 1e3 * 60, vr = 60 * 24, ji = vr * 30, qi = vr * 365;
function zo(a, t, e) {
  var r, n, o;
  f(2, arguments);
  var i = We(), u = (r = (n = e == null ? void 0 : e.locale) !== null && n !== void 0 ? n : i.locale) !== null && r !== void 0 ? r : ba;
  if (!u.formatDistance)
    throw new RangeError("locale must contain localize.formatDistance property");
  var l = ot(a, t);
  if (isNaN(l))
    throw new RangeError("Invalid time value");
  var s = Xa(Vo(e), {
    addSuffix: !!(e != null && e.addSuffix),
    comparison: l
  }), d, c;
  l > 0 ? (d = T(t), c = T(a)) : (d = T(a), c = T(t));
  var h = String((o = e == null ? void 0 : e.roundingMethod) !== null && o !== void 0 ? o : "round"), v;
  if (h === "floor")
    v = Math.floor;
  else if (h === "ceil")
    v = Math.ceil;
  else if (h === "round")
    v = Math.round;
  else
    throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");
  var b = c.getTime() - d.getTime(), O = b / Bi, D = Ge(c) - Ge(d), m = (b - D) / Bi, p = e == null ? void 0 : e.unit, y;
  if (p ? y = String(p) : O < 1 ? y = "second" : O < 60 ? y = "minute" : O < vr ? y = "hour" : m < ji ? y = "day" : m < qi ? y = "month" : y = "year", y === "second") {
    var C = v(b / 1e3);
    return u.formatDistance("xSeconds", C, s);
  } else if (y === "minute") {
    var _ = v(O);
    return u.formatDistance("xMinutes", _, s);
  } else if (y === "hour") {
    var N = v(O / 60);
    return u.formatDistance("xHours", N, s);
  } else if (y === "day") {
    var H = v(m / vr);
    return u.formatDistance("xDays", H, s);
  } else if (y === "month") {
    var k = v(m / ji);
    return k === 12 && p !== "month" ? u.formatDistance("xYears", 1, s) : u.formatDistance("xMonths", k, s);
  } else if (y === "year") {
    var x = v(m / qi);
    return u.formatDistance("xYears", x, s);
  }
  throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'");
}
function cs(a, t) {
  return f(1, arguments), Wo(a, Date.now(), t);
}
function fs(a, t) {
  return f(1, arguments), zo(a, Date.now(), t);
}
var vs = ["years", "months", "weeks", "days", "hours", "minutes", "seconds"];
function hs(a, t) {
  var e, r, n, o, i;
  if (arguments.length < 1)
    throw new TypeError("1 argument required, but only ".concat(arguments.length, " present"));
  var u = We(), l = (e = (r = t == null ? void 0 : t.locale) !== null && r !== void 0 ? r : u.locale) !== null && e !== void 0 ? e : ba, s = (n = t == null ? void 0 : t.format) !== null && n !== void 0 ? n : vs, d = (o = t == null ? void 0 : t.zero) !== null && o !== void 0 ? o : !1, c = (i = t == null ? void 0 : t.delimiter) !== null && i !== void 0 ? i : " ";
  if (!l.formatDistance)
    return "";
  var h = s.reduce(function(v, b) {
    var O = "x".concat(b.replace(/(^.)/, function(m) {
      return m.toUpperCase();
    })), D = a[b];
    return typeof D == "number" && (d || a[b]) ? v.concat(l.formatDistance(O, D)) : v;
  }, []).join(c);
  return h;
}
function ms(a, t) {
  var e, r;
  f(1, arguments);
  var n = T(a);
  if (isNaN(n.getTime()))
    throw new RangeError("Invalid time value");
  var o = String((e = t == null ? void 0 : t.format) !== null && e !== void 0 ? e : "extended"), i = String((r = t == null ? void 0 : t.representation) !== null && r !== void 0 ? r : "complete");
  if (o !== "extended" && o !== "basic")
    throw new RangeError("format must be 'extended' or 'basic'");
  if (i !== "date" && i !== "time" && i !== "complete")
    throw new RangeError("representation must be 'date', 'time', or 'complete'");
  var u = "", l = "", s = o === "extended" ? "-" : "", d = o === "extended" ? ":" : "";
  if (i !== "time") {
    var c = L(n.getDate(), 2), h = L(n.getMonth() + 1, 2), v = L(n.getFullYear(), 4);
    u = "".concat(v).concat(s).concat(h).concat(s).concat(c);
  }
  if (i !== "date") {
    var b = n.getTimezoneOffset();
    if (b !== 0) {
      var O = Math.abs(b), D = L(Math.floor(O / 60), 2), m = L(O % 60, 2), p = b < 0 ? "+" : "-";
      l = "".concat(p).concat(D, ":").concat(m);
    } else
      l = "Z";
    var y = L(n.getHours(), 2), C = L(n.getMinutes(), 2), _ = L(n.getSeconds(), 2), N = u === "" ? "" : "T", H = [y, C, _].join(d);
    u = "".concat(u).concat(N).concat(H).concat(l);
  }
  return u;
}
function gs(a, t) {
  var e, r;
  if (arguments.length < 1)
    throw new TypeError("1 argument required, but only ".concat(arguments.length, " present"));
  var n = T(a);
  if (!Mt(n))
    throw new RangeError("Invalid time value");
  var o = String((e = t == null ? void 0 : t.format) !== null && e !== void 0 ? e : "extended"), i = String((r = t == null ? void 0 : t.representation) !== null && r !== void 0 ? r : "complete");
  if (o !== "extended" && o !== "basic")
    throw new RangeError("format must be 'extended' or 'basic'");
  if (i !== "date" && i !== "time" && i !== "complete")
    throw new RangeError("representation must be 'date', 'time', or 'complete'");
  var u = "", l = o === "extended" ? "-" : "", s = o === "extended" ? ":" : "";
  if (i !== "time") {
    var d = L(n.getDate(), 2), c = L(n.getMonth() + 1, 2), h = L(n.getFullYear(), 4);
    u = "".concat(h).concat(l).concat(c).concat(l).concat(d);
  }
  if (i !== "date") {
    var v = L(n.getHours(), 2), b = L(n.getMinutes(), 2), O = L(n.getSeconds(), 2), D = u === "" ? "" : " ";
    u = "".concat(u).concat(D).concat(v).concat(s).concat(b).concat(s).concat(O);
  }
  return u;
}
function ps(a) {
  if (f(1, arguments), rt(a) !== "object")
    throw new Error("Duration must be an object");
  var t = a.years, e = t === void 0 ? 0 : t, r = a.months, n = r === void 0 ? 0 : r, o = a.days, i = o === void 0 ? 0 : o, u = a.hours, l = u === void 0 ? 0 : u, s = a.minutes, d = s === void 0 ? 0 : s, c = a.seconds, h = c === void 0 ? 0 : c;
  return "P".concat(e, "Y").concat(n, "M").concat(i, "DT").concat(l, "H").concat(d, "M").concat(h, "S");
}
function ys(a, t) {
  var e;
  if (arguments.length < 1)
    throw new TypeError("1 arguments required, but only ".concat(arguments.length, " present"));
  var r = T(a);
  if (!Mt(r))
    throw new RangeError("Invalid time value");
  var n = Number((e = t == null ? void 0 : t.fractionDigits) !== null && e !== void 0 ? e : 0);
  if (!(n >= 0 && n <= 3))
    throw new RangeError("fractionDigits must be between 0 and 3 inclusively");
  var o = L(r.getDate(), 2), i = L(r.getMonth() + 1, 2), u = r.getFullYear(), l = L(r.getHours(), 2), s = L(r.getMinutes(), 2), d = L(r.getSeconds(), 2), c = "";
  if (n > 0) {
    var h = r.getMilliseconds(), v = Math.floor(h * Math.pow(10, n - 3));
    c = "." + L(v, n);
  }
  var b = "", O = r.getTimezoneOffset();
  if (O !== 0) {
    var D = Math.abs(O), m = L(U(D / 60), 2), p = L(D % 60, 2), y = O < 0 ? "+" : "-";
    b = "".concat(y).concat(m, ":").concat(p);
  } else
    b = "Z";
  return "".concat(u, "-").concat(i, "-").concat(o, "T").concat(l, ":").concat(s, ":").concat(d).concat(c).concat(b);
}
var ws = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], bs = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
function Ds(a) {
  if (arguments.length < 1)
    throw new TypeError("1 arguments required, but only ".concat(arguments.length, " present"));
  var t = T(a);
  if (!Mt(t))
    throw new RangeError("Invalid time value");
  var e = ws[t.getUTCDay()], r = L(t.getUTCDate(), 2), n = bs[t.getUTCMonth()], o = t.getUTCFullYear(), i = L(t.getUTCHours(), 2), u = L(t.getUTCMinutes(), 2), l = L(t.getUTCSeconds(), 2);
  return "".concat(e, ", ").concat(r, " ").concat(n, " ").concat(o, " ").concat(i, ":").concat(u, ":").concat(l, " GMT");
}
function Ts(a, t, e) {
  var r, n, o, i, u, l, s, d, c, h;
  f(2, arguments);
  var v = T(a), b = T(t), O = We(), D = (r = (n = e == null ? void 0 : e.locale) !== null && n !== void 0 ? n : O.locale) !== null && r !== void 0 ? r : ba, m = U((o = (i = (u = (l = e == null ? void 0 : e.weekStartsOn) !== null && l !== void 0 ? l : e == null || (s = e.locale) === null || s === void 0 || (d = s.options) === null || d === void 0 ? void 0 : d.weekStartsOn) !== null && u !== void 0 ? u : O.weekStartsOn) !== null && i !== void 0 ? i : (c = O.locale) === null || c === void 0 || (h = c.options) === null || h === void 0 ? void 0 : h.weekStartsOn) !== null && o !== void 0 ? o : 0);
  if (!D.localize)
    throw new RangeError("locale must contain localize property");
  if (!D.formatLong)
    throw new RangeError("locale must contain formatLong property");
  if (!D.formatRelative)
    throw new RangeError("locale must contain formatRelative property");
  var p = ct(v, b);
  if (isNaN(p))
    throw new RangeError("Invalid time value");
  var y;
  p < -6 ? y = "other" : p < -1 ? y = "lastWeek" : p < 0 ? y = "yesterday" : p < 1 ? y = "today" : p < 2 ? y = "tomorrow" : p < 7 ? y = "nextWeek" : y = "other";
  var C = pa(v, Ge(v)), _ = pa(b, Ge(b)), N = D.formatRelative(y, C, _, {
    locale: D,
    weekStartsOn: m
  });
  return Ho(v, N, {
    locale: D,
    weekStartsOn: m
  });
}
function _s(a) {
  f(1, arguments);
  var t = U(a);
  return T(t * 1e3);
}
function Bo(a) {
  f(1, arguments);
  var t = T(a), e = t.getDate();
  return e;
}
function Pr(a) {
  f(1, arguments);
  var t = T(a), e = t.getDay();
  return e;
}
function Cs(a) {
  f(1, arguments);
  var t = T(a), e = ct(t, fi(t)), r = e + 1;
  return r;
}
function jo(a) {
  f(1, arguments);
  var t = T(a), e = t.getFullYear(), r = t.getMonth(), n = /* @__PURE__ */ new Date(0);
  return n.setFullYear(e, r + 1, 0), n.setHours(0, 0, 0, 0), n.getDate();
}
function qo(a) {
  f(1, arguments);
  var t = T(a), e = t.getFullYear();
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function Ms(a) {
  f(1, arguments);
  var t = T(a);
  return String(new Date(t)) === "Invalid Date" ? NaN : qo(t) ? 366 : 365;
}
function Os(a) {
  f(1, arguments);
  var t = T(a), e = t.getFullYear(), r = Math.floor(e / 10) * 10;
  return r;
}
function ks() {
  return Xa({}, We());
}
function xs(a) {
  f(1, arguments);
  var t = T(a), e = t.getHours();
  return e;
}
function Lo(a) {
  f(1, arguments);
  var t = T(a), e = t.getDay();
  return e === 0 && (e = 7), e;
}
var Ss = 6048e5;
function Qo(a) {
  f(1, arguments);
  var t = T(a), e = Ct(t).getTime() - Pt(t).getTime();
  return Math.round(e / Ss) + 1;
}
var Ps = 6048e5;
function $s(a) {
  f(1, arguments);
  var t = Pt(a), e = Pt(_r(t, 60)), r = e.valueOf() - t.valueOf();
  return Math.round(r / Ps);
}
function Rs(a) {
  f(1, arguments);
  var t = T(a), e = t.getMilliseconds();
  return e;
}
function Is(a) {
  f(1, arguments);
  var t = T(a), e = t.getMinutes();
  return e;
}
function Ns(a) {
  f(1, arguments);
  var t = T(a), e = t.getMonth();
  return e;
}
var Es = 24 * 60 * 60 * 1e3;
function Ys(a, t) {
  f(2, arguments);
  var e = a || {}, r = t || {}, n = T(e.start).getTime(), o = T(e.end).getTime(), i = T(r.start).getTime(), u = T(r.end).getTime();
  if (!(n <= o && i <= u))
    throw new RangeError("Invalid interval");
  var l = n < u && i < o;
  if (!l)
    return 0;
  var s = i < n ? n : i, d = u > o ? o : u, c = d - s;
  return Math.ceil(c / Es);
}
function Fs(a) {
  f(1, arguments);
  var t = T(a), e = t.getSeconds();
  return e;
}
function Xo(a) {
  f(1, arguments);
  var t = T(a), e = t.getTime();
  return e;
}
function As(a) {
  return f(1, arguments), Math.floor(Xo(a) / 1e3);
}
function Go(a, t) {
  var e, r, n, o, i, u, l, s;
  f(1, arguments);
  var d = T(a), c = d.getFullYear(), h = We(), v = U((e = (r = (n = (o = t == null ? void 0 : t.firstWeekContainsDate) !== null && o !== void 0 ? o : t == null || (i = t.locale) === null || i === void 0 || (u = i.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && n !== void 0 ? n : h.firstWeekContainsDate) !== null && r !== void 0 ? r : (l = h.locale) === null || l === void 0 || (s = l.options) === null || s === void 0 ? void 0 : s.firstWeekContainsDate) !== null && e !== void 0 ? e : 1);
  if (!(v >= 1 && v <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var b = /* @__PURE__ */ new Date(0);
  b.setFullYear(c + 1, 0, v), b.setHours(0, 0, 0, 0);
  var O = nt(b, t), D = /* @__PURE__ */ new Date(0);
  D.setFullYear(c, 0, v), D.setHours(0, 0, 0, 0);
  var m = nt(D, t);
  return d.getTime() >= O.getTime() ? c + 1 : d.getTime() >= m.getTime() ? c : c - 1;
}
function hr(a, t) {
  var e, r, n, o, i, u, l, s;
  f(1, arguments);
  var d = We(), c = U((e = (r = (n = (o = t == null ? void 0 : t.firstWeekContainsDate) !== null && o !== void 0 ? o : t == null || (i = t.locale) === null || i === void 0 || (u = i.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && n !== void 0 ? n : d.firstWeekContainsDate) !== null && r !== void 0 ? r : (l = d.locale) === null || l === void 0 || (s = l.options) === null || s === void 0 ? void 0 : s.firstWeekContainsDate) !== null && e !== void 0 ? e : 1), h = Go(a, t), v = /* @__PURE__ */ new Date(0);
  v.setFullYear(h, 0, c), v.setHours(0, 0, 0, 0);
  var b = nt(v, t);
  return b;
}
var Us = 6048e5;
function Ko(a, t) {
  f(1, arguments);
  var e = T(a), r = nt(e, t).getTime() - hr(e, t).getTime();
  return Math.round(r / Us) + 1;
}
function Hs(a, t) {
  var e, r, n, o, i, u, l, s;
  f(1, arguments);
  var d = We(), c = U((e = (r = (n = (o = t == null ? void 0 : t.weekStartsOn) !== null && o !== void 0 ? o : t == null || (i = t.locale) === null || i === void 0 || (u = i.options) === null || u === void 0 ? void 0 : u.weekStartsOn) !== null && n !== void 0 ? n : d.weekStartsOn) !== null && r !== void 0 ? r : (l = d.locale) === null || l === void 0 || (s = l.options) === null || s === void 0 ? void 0 : s.weekStartsOn) !== null && e !== void 0 ? e : 0);
  if (!(c >= 0 && c <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var h = Bo(a);
  if (isNaN(h))
    return NaN;
  var v = Pr(Sr(a)), b = c - v;
  b <= 0 && (b += 7);
  var O = h - b;
  return Math.ceil(O / 7) + 1;
}
function Zo(a) {
  f(1, arguments);
  var t = T(a), e = t.getMonth();
  return t.setFullYear(t.getFullYear(), e + 1, 0), t.setHours(0, 0, 0, 0), t;
}
function Vs(a, t) {
  return f(1, arguments), ur(Zo(a), Sr(a), t) + 1;
}
function Ws(a) {
  return f(1, arguments), T(a).getFullYear();
}
function zs(a) {
  return f(1, arguments), Math.floor(a * Gt);
}
function Bs(a) {
  return f(1, arguments), Math.floor(a * ai);
}
function js(a) {
  return f(1, arguments), Math.floor(a * La);
}
function qs(a) {
  f(1, arguments);
  var t = T(a.start), e = T(a.end);
  if (isNaN(t.getTime()))
    throw new RangeError("Start Date is invalid");
  if (isNaN(e.getTime()))
    throw new RangeError("End Date is invalid");
  var r = {};
  r.years = Math.abs(Po(e, t));
  var n = ot(e, t), o = va(t, {
    years: n * r.years
  });
  r.months = Math.abs(xr(e, o));
  var i = va(o, {
    months: n * r.months
  });
  r.days = Math.abs(ui(e, i));
  var u = va(i, {
    days: n * r.days
  });
  r.hours = Math.abs(sr(e, u));
  var l = va(u, {
    hours: n * r.hours
  });
  r.minutes = Math.abs(dr(e, l));
  var s = va(l, {
    minutes: n * r.minutes
  });
  return r.seconds = Math.abs(ma(e, s)), r;
}
function Ls(a, t, e) {
  var r;
  f(1, arguments);
  var n;
  return Qs(t) ? n = t : e = t, new Intl.DateTimeFormat((r = e) === null || r === void 0 ? void 0 : r.locale, n).format(a);
}
function Qs(a) {
  return a !== void 0 && !("locale" in a);
}
function Xs(a, t, e) {
  f(2, arguments);
  var r = 0, n, o = T(a), i = T(t);
  if (e != null && e.unit)
    n = e == null ? void 0 : e.unit, n === "second" ? r = ma(o, i) : n === "minute" ? r = dr(o, i) : n === "hour" ? r = sr(o, i) : n === "day" ? r = ct(o, i) : n === "week" ? r = ur(o, i) : n === "month" ? r = lr(o, i) : n === "quarter" ? r = or(o, i) : n === "year" && (r = Va(o, i));
  else {
    var u = ma(o, i);
    Math.abs(u) < Mr ? (r = ma(o, i), n = "second") : Math.abs(u) < La ? (r = dr(o, i), n = "minute") : Math.abs(u) < Or && Math.abs(ct(o, i)) < 1 ? (r = sr(o, i), n = "hour") : Math.abs(u) < Co && (r = ct(o, i)) && Math.abs(r) < 7 ? n = "day" : Math.abs(u) < li ? (r = ur(o, i), n = "week") : Math.abs(u) < Mo ? (r = lr(o, i), n = "month") : Math.abs(u) < oi && or(o, i) < 4 ? (r = or(o, i), n = "quarter") : (r = Va(o, i), n = "year");
  }
  var l = new Intl.RelativeTimeFormat(e == null ? void 0 : e.locale, {
    localeMatcher: e == null ? void 0 : e.localeMatcher,
    numeric: (e == null ? void 0 : e.numeric) || "auto",
    style: e == null ? void 0 : e.style
  });
  return l.format(r, n);
}
function Gs(a, t) {
  f(2, arguments);
  var e = T(a), r = T(t);
  return e.getTime() > r.getTime();
}
function Ks(a, t) {
  f(2, arguments);
  var e = T(a), r = T(t);
  return e.getTime() < r.getTime();
}
function Zs(a, t) {
  f(2, arguments);
  var e = T(a), r = T(t);
  return e.getTime() === r.getTime();
}
function Js(a, t, e) {
  if (arguments.length < 3)
    throw new TypeError("3 argument required, but only " + arguments.length + " present");
  var r = new Date(a, t, e);
  return r.getFullYear() === a && r.getMonth() === t && r.getDate() === e;
}
function ed(a) {
  return f(1, arguments), T(a).getDate() === 1;
}
function td(a) {
  return f(1, arguments), T(a).getDay() === 5;
}
function ad(a) {
  return f(1, arguments), T(a).getTime() > Date.now();
}
function Li(a, t) {
  (t == null || t > a.length) && (t = a.length);
  for (var e = 0, r = new Array(t); e < t; e++)
    r[e] = a[e];
  return r;
}
function rd(a, t) {
  if (a) {
    if (typeof a == "string")
      return Li(a, t);
    var e = Object.prototype.toString.call(a).slice(8, -1);
    if (e === "Object" && a.constructor && (e = a.constructor.name), e === "Map" || e === "Set")
      return Array.from(a);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))
      return Li(a, t);
  }
}
function Qi(a, t) {
  var e = typeof Symbol < "u" && a[Symbol.iterator] || a["@@iterator"];
  if (!e) {
    if (Array.isArray(a) || (e = rd(a)) || t && a && typeof a.length == "number") {
      e && (a = e);
      var r = 0, n = function() {
      };
      return {
        s: n,
        n: function() {
          return r >= a.length ? {
            done: !0
          } : {
            done: !1,
            value: a[r++]
          };
        },
        e: function(s) {
          throw s;
        },
        f: n
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var o = !0, i = !1, u;
  return {
    s: function() {
      e = e.call(a);
    },
    n: function() {
      var s = e.next();
      return o = s.done, s;
    },
    e: function(s) {
      i = !0, u = s;
    },
    f: function() {
      try {
        !o && e.return != null && e.return();
      } finally {
        if (i)
          throw u;
      }
    }
  };
}
function W(a) {
  if (a === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return a;
}
function en(a, t) {
  return en = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, en(a, t);
}
function ce(a, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  a.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: a,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(a, "prototype", {
    writable: !1
  }), t && en(a, t);
}
function mr(a) {
  return mr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
    return e.__proto__ || Object.getPrototypeOf(e);
  }, mr(a);
}
function nd() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function id(a, t) {
  if (t && (rt(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return W(a);
}
function fe(a) {
  var t = nd();
  return function() {
    var r = mr(a), n;
    if (t) {
      var o = mr(this).constructor;
      n = Reflect.construct(r, arguments, o);
    } else
      n = r.apply(this, arguments);
    return id(this, n);
  };
}
function ue(a, t) {
  if (!(a instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function od(a, t) {
  if (rt(a) !== "object" || a === null)
    return a;
  var e = a[Symbol.toPrimitive];
  if (e !== void 0) {
    var r = e.call(a, t || "default");
    if (rt(r) !== "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(a);
}
function Jo(a) {
  var t = od(a, "string");
  return rt(t) === "symbol" ? t : String(t);
}
function Xi(a, t) {
  for (var e = 0; e < t.length; e++) {
    var r = t[e];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(a, Jo(r.key), r);
  }
}
function se(a, t, e) {
  return t && Xi(a.prototype, t), e && Xi(a, e), Object.defineProperty(a, "prototype", {
    writable: !1
  }), a;
}
function V(a, t, e) {
  return t = Jo(t), t in a ? Object.defineProperty(a, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : a[t] = e, a;
}
var ld = 10, el = /* @__PURE__ */ function() {
  function a() {
    ue(this, a), V(this, "priority", void 0), V(this, "subPriority", 0);
  }
  return se(a, [{
    key: "validate",
    value: function(e, r) {
      return !0;
    }
  }]), a;
}(), ud = /* @__PURE__ */ function(a) {
  ce(e, a);
  var t = fe(e);
  function e(r, n, o, i, u) {
    var l;
    return ue(this, e), l = t.call(this), l.value = r, l.validateValue = n, l.setValue = o, l.priority = i, u && (l.subPriority = u), l;
  }
  return se(e, [{
    key: "validate",
    value: function(n, o) {
      return this.validateValue(n, this.value, o);
    }
  }, {
    key: "set",
    value: function(n, o, i) {
      return this.setValue(n, o, this.value, i);
    }
  }]), e;
}(el), sd = /* @__PURE__ */ function(a) {
  ce(e, a);
  var t = fe(e);
  function e() {
    var r;
    ue(this, e);
    for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), V(W(r), "priority", ld), V(W(r), "subPriority", -1), r;
  }
  return se(e, [{
    key: "set",
    value: function(n, o) {
      if (o.timestampIsSet)
        return n;
      var i = /* @__PURE__ */ new Date(0);
      return i.setFullYear(n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate()), i.setHours(n.getUTCHours(), n.getUTCMinutes(), n.getUTCSeconds(), n.getUTCMilliseconds()), i;
    }
  }]), e;
}(el), me = /* @__PURE__ */ function() {
  function a() {
    ue(this, a), V(this, "incompatibleTokens", void 0), V(this, "priority", void 0), V(this, "subPriority", void 0);
  }
  return se(a, [{
    key: "run",
    value: function(e, r, n, o) {
      var i = this.parse(e, r, n, o);
      return i ? {
        setter: new ud(i.value, this.validate, this.set, this.priority, this.subPriority),
        rest: i.rest
      } : null;
    }
  }, {
    key: "validate",
    value: function(e, r, n) {
      return !0;
    }
  }]), a;
}(), dd = /* @__PURE__ */ function(a) {
  ce(e, a);
  var t = fe(e);
  function e() {
    var r;
    ue(this, e);
    for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), V(W(r), "priority", 140), V(W(r), "incompatibleTokens", ["R", "u", "t", "T"]), r;
  }
  return se(e, [{
    key: "parse",
    value: function(n, o, i) {
      switch (o) {
        case "G":
        case "GG":
        case "GGG":
          return i.era(n, {
            width: "abbreviated"
          }) || i.era(n, {
            width: "narrow"
          });
        case "GGGGG":
          return i.era(n, {
            width: "narrow"
          });
        case "GGGG":
        default:
          return i.era(n, {
            width: "wide"
          }) || i.era(n, {
            width: "abbreviated"
          }) || i.era(n, {
            width: "narrow"
          });
      }
    }
  }, {
    key: "set",
    value: function(n, o, i) {
      return o.era = i, n.setUTCFullYear(i, 0, 1), n.setUTCHours(0, 0, 0, 0), n;
    }
  }]), e;
}(me), Ye = {
  month: /^(1[0-2]|0?\d)/,
  // 0 to 12
  date: /^(3[0-1]|[0-2]?\d)/,
  // 0 to 31
  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
  // 0 to 366
  week: /^(5[0-3]|[0-4]?\d)/,
  // 0 to 53
  hour23h: /^(2[0-3]|[0-1]?\d)/,
  // 0 to 23
  hour24h: /^(2[0-4]|[0-1]?\d)/,
  // 0 to 24
  hour11h: /^(1[0-1]|0?\d)/,
  // 0 to 11
  hour12h: /^(1[0-2]|0?\d)/,
  // 0 to 12
  minute: /^[0-5]?\d/,
  // 0 to 59
  second: /^[0-5]?\d/,
  // 0 to 59
  singleDigit: /^\d/,
  // 0 to 9
  twoDigits: /^\d{1,2}/,
  // 0 to 99
  threeDigits: /^\d{1,3}/,
  // 0 to 999
  fourDigits: /^\d{1,4}/,
  // 0 to 9999
  anyDigitsSigned: /^-?\d+/,
  singleDigitSigned: /^-?\d/,
  // 0 to 9, -0 to -9
  twoDigitsSigned: /^-?\d{1,2}/,
  // 0 to 99, -0 to -99
  threeDigitsSigned: /^-?\d{1,3}/,
  // 0 to 999, -0 to -999
  fourDigitsSigned: /^-?\d{1,4}/
  // 0 to 9999, -0 to -9999
}, st = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};
function Fe(a, t) {
  return a && {
    value: t(a.value),
    rest: a.rest
  };
}
function Se(a, t) {
  var e = t.match(a);
  return e ? {
    value: parseInt(e[0], 10),
    rest: t.slice(e[0].length)
  } : null;
}
function dt(a, t) {
  var e = t.match(a);
  if (!e)
    return null;
  if (e[0] === "Z")
    return {
      value: 0,
      rest: t.slice(1)
    };
  var r = e[1] === "+" ? 1 : -1, n = e[2] ? parseInt(e[2], 10) : 0, o = e[3] ? parseInt(e[3], 10) : 0, i = e[5] ? parseInt(e[5], 10) : 0;
  return {
    value: r * (n * Gt + o * Xt + i * Cr),
    rest: t.slice(e[0].length)
  };
}
function tl(a) {
  return Se(Ye.anyDigitsSigned, a);
}
function Ie(a, t) {
  switch (a) {
    case 1:
      return Se(Ye.singleDigit, t);
    case 2:
      return Se(Ye.twoDigits, t);
    case 3:
      return Se(Ye.threeDigits, t);
    case 4:
      return Se(Ye.fourDigits, t);
    default:
      return Se(new RegExp("^\\d{1," + a + "}"), t);
  }
}
function gr(a, t) {
  switch (a) {
    case 1:
      return Se(Ye.singleDigitSigned, t);
    case 2:
      return Se(Ye.twoDigitsSigned, t);
    case 3:
      return Se(Ye.threeDigitsSigned, t);
    case 4:
      return Se(Ye.fourDigitsSigned, t);
    default:
      return Se(new RegExp("^-?\\d{1," + a + "}"), t);
  }
}
function hi(a) {
  switch (a) {
    case "morning":
      return 4;
    case "evening":
      return 17;
    case "pm":
    case "noon":
    case "afternoon":
      return 12;
    case "am":
    case "midnight":
    case "night":
    default:
      return 0;
  }
}
function al(a, t) {
  var e = t > 0, r = e ? t : 1 - t, n;
  if (r <= 50)
    n = a || 100;
  else {
    var o = r + 50, i = Math.floor(o / 100) * 100, u = a >= o % 100;
    n = a + i - (u ? 100 : 0);
  }
  return e ? n : 1 - n;
}
function rl(a) {
  return a % 400 === 0 || a % 4 === 0 && a % 100 !== 0;
}
var cd = /* @__PURE__ */ function(a) {
  ce(e, a);
  var t = fe(e);
  function e() {
    var r;
    ue(this, e);
    for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), V(W(r), "priority", 130), V(W(r), "incompatibleTokens", ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"]), r;
  }
  return se(e, [{
    key: "parse",
    value: function(n, o, i) {
      var u = function(s) {
        return {
          year: s,
          isTwoDigitYear: o === "yy"
        };
      };
      switch (o) {
        case "y":
          return Fe(Ie(4, n), u);
        case "yo":
          return Fe(i.ordinalNumber(n, {
            unit: "year"
          }), u);
        default:
          return Fe(Ie(o.length, n), u);
      }
    }
  }, {
    key: "validate",
    value: function(n, o) {
      return o.isTwoDigitYear || o.year > 0;
    }
  }, {
    key: "set",
    value: function(n, o, i) {
      var u = n.getUTCFullYear();
      if (i.isTwoDigitYear) {
        var l = al(i.year, u);
        return n.setUTCFullYear(l, 0, 1), n.setUTCHours(0, 0, 0, 0), n;
      }
      var s = !("era" in o) || o.era === 1 ? i.year : 1 - i.year;
      return n.setUTCFullYear(s, 0, 1), n.setUTCHours(0, 0, 0, 0), n;
    }
  }]), e;
}(me), fd = /* @__PURE__ */ function(a) {
  ce(e, a);
  var t = fe(e);
  function e() {
    var r;
    ue(this, e);
    for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), V(W(r), "priority", 130), V(W(r), "incompatibleTokens", ["y", "R", "u", "Q", "q", "M", "L", "I", "d", "D", "i", "t", "T"]), r;
  }
  return se(e, [{
    key: "parse",
    value: function(n, o, i) {
      var u = function(s) {
        return {
          year: s,
          isTwoDigitYear: o === "YY"
        };
      };
      switch (o) {
        case "Y":
          return Fe(Ie(4, n), u);
        case "Yo":
          return Fe(i.ordinalNumber(n, {
            unit: "year"
          }), u);
        default:
          return Fe(Ie(o.length, n), u);
      }
    }
  }, {
    key: "validate",
    value: function(n, o) {
      return o.isTwoDigitYear || o.year > 0;
    }
  }, {
    key: "set",
    value: function(n, o, i, u) {
      var l = vi(n, u);
      if (i.isTwoDigitYear) {
        var s = al(i.year, l);
        return n.setUTCFullYear(s, 0, u.firstWeekContainsDate), n.setUTCHours(0, 0, 0, 0), jt(n, u);
      }
      var d = !("era" in o) || o.era === 1 ? i.year : 1 - i.year;
      return n.setUTCFullYear(d, 0, u.firstWeekContainsDate), n.setUTCHours(0, 0, 0, 0), jt(n, u);
    }
  }]), e;
}(me), vd = /* @__PURE__ */ function(a) {
  ce(e, a);
  var t = fe(e);
  function e() {
    var r;
    ue(this, e);
    for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), V(W(r), "priority", 130), V(W(r), "incompatibleTokens", ["G", "y", "Y", "u", "Q", "q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]), r;
  }
  return se(e, [{
    key: "parse",
    value: function(n, o) {
      return gr(o === "R" ? 4 : o.length, n);
    }
  }, {
    key: "set",
    value: function(n, o, i) {
      var u = /* @__PURE__ */ new Date(0);
      return u.setUTCFullYear(i, 0, 4), u.setUTCHours(0, 0, 0, 0), ya(u);
    }
  }]), e;
}(me), hd = /* @__PURE__ */ function(a) {
  ce(e, a);
  var t = fe(e);
  function e() {
    var r;
    ue(this, e);
    for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), V(W(r), "priority", 130), V(W(r), "incompatibleTokens", ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]), r;
  }
  return se(e, [{
    key: "parse",
    value: function(n, o) {
      return gr(o === "u" ? 4 : o.length, n);
    }
  }, {
    key: "set",
    value: function(n, o, i) {
      return n.setUTCFullYear(i, 0, 1), n.setUTCHours(0, 0, 0, 0), n;
    }
  }]), e;
}(me), md = /* @__PURE__ */ function(a) {
  ce(e, a);
  var t = fe(e);
  function e() {
    var r;
    ue(this, e);
    for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), V(W(r), "priority", 120), V(W(r), "incompatibleTokens", ["Y", "R", "q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]), r;
  }
  return se(e, [{
    key: "parse",
    value: function(n, o, i) {
      switch (o) {
        case "Q":
        case "QQ":
          return Ie(o.length, n);
        case "Qo":
          return i.ordinalNumber(n, {
            unit: "quarter"
          });
        case "QQQ":
          return i.quarter(n, {
            width: "abbreviated",
            context: "formatting"
          }) || i.quarter(n, {
            width: "narrow",
            context: "formatting"
          });
        case "QQQQQ":
          return i.quarter(n, {
            width: "narrow",
            context: "formatting"
          });
        case "QQQQ":
        default:
          return i.quarter(n, {
            width: "wide",
            context: "formatting"
          }) || i.quarter(n, {
            width: "abbreviated",
            context: "formatting"
          }) || i.quarter(n, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "validate",
    value: function(n, o) {
      return o >= 1 && o <= 4;
    }
  }, {
    key: "set",
    value: function(n, o, i) {
      return n.setUTCMonth((i - 1) * 3, 1), n.setUTCHours(0, 0, 0, 0), n;
    }
  }]), e;
}(me), gd = /* @__PURE__ */ function(a) {
  ce(e, a);
  var t = fe(e);
  function e() {
    var r;
    ue(this, e);
    for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), V(W(r), "priority", 120), V(W(r), "incompatibleTokens", ["Y", "R", "Q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]), r;
  }
  return se(e, [{
    key: "parse",
    value: function(n, o, i) {
      switch (o) {
        case "q":
        case "qq":
          return Ie(o.length, n);
        case "qo":
          return i.ordinalNumber(n, {
            unit: "quarter"
          });
        case "qqq":
          return i.quarter(n, {
            width: "abbreviated",
            context: "standalone"
          }) || i.quarter(n, {
            width: "narrow",
            context: "standalone"
          });
        case "qqqqq":
          return i.quarter(n, {
            width: "narrow",
            context: "standalone"
          });
        case "qqqq":
        default:
          return i.quarter(n, {
            width: "wide",
            context: "standalone"
          }) || i.quarter(n, {
            width: "abbreviated",
            context: "standalone"
          }) || i.quarter(n, {
            width: "narrow",
            context: "standalone"
          });
      }
    }
  }, {
    key: "validate",
    value: function(n, o) {
      return o >= 1 && o <= 4;
    }
  }, {
    key: "set",
    value: function(n, o, i) {
      return n.setUTCMonth((i - 1) * 3, 1), n.setUTCHours(0, 0, 0, 0), n;
    }
  }]), e;
}(me), pd = /* @__PURE__ */ function(a) {
  ce(e, a);
  var t = fe(e);
  function e() {
    var r;
    ue(this, e);
    for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), V(W(r), "incompatibleTokens", ["Y", "R", "q", "Q", "L", "w", "I", "D", "i", "e", "c", "t", "T"]), V(W(r), "priority", 110), r;
  }
  return se(e, [{
    key: "parse",
    value: function(n, o, i) {
      var u = function(s) {
        return s - 1;
      };
      switch (o) {
        case "M":
          return Fe(Se(Ye.month, n), u);
        case "MM":
          return Fe(Ie(2, n), u);
        case "Mo":
          return Fe(i.ordinalNumber(n, {
            unit: "month"
          }), u);
        case "MMM":
          return i.month(n, {
            width: "abbreviated",
            context: "formatting"
          }) || i.month(n, {
            width: "narrow",
            context: "formatting"
          });
        case "MMMMM":
          return i.month(n, {
            width: "narrow",
            context: "formatting"
          });
        case "MMMM":
        default:
          return i.month(n, {
            width: "wide",
            context: "formatting"
          }) || i.month(n, {
            width: "abbreviated",
            context: "formatting"
          }) || i.month(n, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "validate",
    value: function(n, o) {
      return o >= 0 && o <= 11;
    }
  }, {
    key: "set",
    value: function(n, o, i) {
      return n.setUTCMonth(i, 1), n.setUTCHours(0, 0, 0, 0), n;
    }
  }]), e;
}(me), yd = /* @__PURE__ */ function(a) {
  ce(e, a);
  var t = fe(e);
  function e() {
    var r;
    ue(this, e);
    for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), V(W(r), "priority", 110), V(W(r), "incompatibleTokens", ["Y", "R", "q", "Q", "M", "w", "I", "D", "i", "e", "c", "t", "T"]), r;
  }
  return se(e, [{
    key: "parse",
    value: function(n, o, i) {
      var u = function(s) {
        return s - 1;
      };
      switch (o) {
        case "L":
          return Fe(Se(Ye.month, n), u);
        case "LL":
          return Fe(Ie(2, n), u);
        case "Lo":
          return Fe(i.ordinalNumber(n, {
            unit: "month"
          }), u);
        case "LLL":
          return i.month(n, {
            width: "abbreviated",
            context: "standalone"
          }) || i.month(n, {
            width: "narrow",
            context: "standalone"
          });
        case "LLLLL":
          return i.month(n, {
            width: "narrow",
            context: "standalone"
          });
        case "LLLL":
        default:
          return i.month(n, {
            width: "wide",
            context: "standalone"
          }) || i.month(n, {
            width: "abbreviated",
            context: "standalone"
          }) || i.month(n, {
            width: "narrow",
            context: "standalone"
          });
      }
    }
  }, {
    key: "validate",
    value: function(n, o) {
      return o >= 0 && o <= 11;
    }
  }, {
    key: "set",
    value: function(n, o, i) {
      return n.setUTCMonth(i, 1), n.setUTCHours(0, 0, 0, 0), n;
    }
  }]), e;
}(me);
function wd(a, t, e) {
  f(2, arguments);
  var r = T(a), n = U(t), o = Yo(r, e) - n;
  return r.setUTCDate(r.getUTCDate() - o * 7), r;
}
var bd = /* @__PURE__ */ function(a) {
  ce(e, a);
  var t = fe(e);
  function e() {
    var r;
    ue(this, e);
    for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), V(W(r), "priority", 100), V(W(r), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "i", "t", "T"]), r;
  }
  return se(e, [{
    key: "parse",
    value: function(n, o, i) {
      switch (o) {
        case "w":
          return Se(Ye.week, n);
        case "wo":
          return i.ordinalNumber(n, {
            unit: "week"
          });
        default:
          return Ie(o.length, n);
      }
    }
  }, {
    key: "validate",
    value: function(n, o) {
      return o >= 1 && o <= 53;
    }
  }, {
    key: "set",
    value: function(n, o, i, u) {
      return jt(wd(n, i, u), u);
    }
  }]), e;
}(me);
function Dd(a, t) {
  f(2, arguments);
  var e = T(a), r = U(t), n = Eo(e) - r;
  return e.setUTCDate(e.getUTCDate() - n * 7), e;
}
var Td = /* @__PURE__ */ function(a) {
  ce(e, a);
  var t = fe(e);
  function e() {
    var r;
    ue(this, e);
    for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), V(W(r), "priority", 100), V(W(r), "incompatibleTokens", ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]), r;
  }
  return se(e, [{
    key: "parse",
    value: function(n, o, i) {
      switch (o) {
        case "I":
          return Se(Ye.week, n);
        case "Io":
          return i.ordinalNumber(n, {
            unit: "week"
          });
        default:
          return Ie(o.length, n);
      }
    }
  }, {
    key: "validate",
    value: function(n, o) {
      return o >= 1 && o <= 53;
    }
  }, {
    key: "set",
    value: function(n, o, i) {
      return ya(Dd(n, i));
    }
  }]), e;
}(me), _d = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Cd = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Md = /* @__PURE__ */ function(a) {
  ce(e, a);
  var t = fe(e);
  function e() {
    var r;
    ue(this, e);
    for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), V(W(r), "priority", 90), V(W(r), "subPriority", 1), V(W(r), "incompatibleTokens", ["Y", "R", "q", "Q", "w", "I", "D", "i", "e", "c", "t", "T"]), r;
  }
  return se(e, [{
    key: "parse",
    value: function(n, o, i) {
      switch (o) {
        case "d":
          return Se(Ye.date, n);
        case "do":
          return i.ordinalNumber(n, {
            unit: "date"
          });
        default:
          return Ie(o.length, n);
      }
    }
  }, {
    key: "validate",
    value: function(n, o) {
      var i = n.getUTCFullYear(), u = rl(i), l = n.getUTCMonth();
      return u ? o >= 1 && o <= Cd[l] : o >= 1 && o <= _d[l];
    }
  }, {
    key: "set",
    value: function(n, o, i) {
      return n.setUTCDate(i), n.setUTCHours(0, 0, 0, 0), n;
    }
  }]), e;
}(me), Od = /* @__PURE__ */ function(a) {
  ce(e, a);
  var t = fe(e);
  function e() {
    var r;
    ue(this, e);
    for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), V(W(r), "priority", 90), V(W(r), "subpriority", 1), V(W(r), "incompatibleTokens", ["Y", "R", "q", "Q", "M", "L", "w", "I", "d", "E", "i", "e", "c", "t", "T"]), r;
  }
  return se(e, [{
    key: "parse",
    value: function(n, o, i) {
      switch (o) {
        case "D":
        case "DD":
          return Se(Ye.dayOfYear, n);
        case "Do":
          return i.ordinalNumber(n, {
            unit: "date"
          });
        default:
          return Ie(o.length, n);
      }
    }
  }, {
    key: "validate",
    value: function(n, o) {
      var i = n.getUTCFullYear(), u = rl(i);
      return u ? o >= 1 && o <= 366 : o >= 1 && o <= 365;
    }
  }, {
    key: "set",
    value: function(n, o, i) {
      return n.setUTCMonth(0, i), n.setUTCHours(0, 0, 0, 0), n;
    }
  }]), e;
}(me);
function mi(a, t, e) {
  var r, n, o, i, u, l, s, d;
  f(2, arguments);
  var c = We(), h = U((r = (n = (o = (i = e == null ? void 0 : e.weekStartsOn) !== null && i !== void 0 ? i : e == null || (u = e.locale) === null || u === void 0 || (l = u.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && o !== void 0 ? o : c.weekStartsOn) !== null && n !== void 0 ? n : (s = c.locale) === null || s === void 0 || (d = s.options) === null || d === void 0 ? void 0 : d.weekStartsOn) !== null && r !== void 0 ? r : 0);
  if (!(h >= 0 && h <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var v = T(a), b = U(t), O = v.getUTCDay(), D = b % 7, m = (D + 7) % 7, p = (m < h ? 7 : 0) + b - O;
  return v.setUTCDate(v.getUTCDate() + p), v;
}
var kd = /* @__PURE__ */ function(a) {
  ce(e, a);
  var t = fe(e);
  function e() {
    var r;
    ue(this, e);
    for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), V(W(r), "priority", 90), V(W(r), "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]), r;
  }
  return se(e, [{
    key: "parse",
    value: function(n, o, i) {
      switch (o) {
        case "E":
        case "EE":
        case "EEE":
          return i.day(n, {
            width: "abbreviated",
            context: "formatting"
          }) || i.day(n, {
            width: "short",
            context: "formatting"
          }) || i.day(n, {
            width: "narrow",
            context: "formatting"
          });
        case "EEEEE":
          return i.day(n, {
            width: "narrow",
            context: "formatting"
          });
        case "EEEEEE":
          return i.day(n, {
            width: "short",
            context: "formatting"
          }) || i.day(n, {
            width: "narrow",
            context: "formatting"
          });
        case "EEEE":
        default:
          return i.day(n, {
            width: "wide",
            context: "formatting"
          }) || i.day(n, {
            width: "abbreviated",
            context: "formatting"
          }) || i.day(n, {
            width: "short",
            context: "formatting"
          }) || i.day(n, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "validate",
    value: function(n, o) {
      return o >= 0 && o <= 6;
    }
  }, {
    key: "set",
    value: function(n, o, i, u) {
      return n = mi(n, i, u), n.setUTCHours(0, 0, 0, 0), n;
    }
  }]), e;
}(me), xd = /* @__PURE__ */ function(a) {
  ce(e, a);
  var t = fe(e);
  function e() {
    var r;
    ue(this, e);
    for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), V(W(r), "priority", 90), V(W(r), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "c", "t", "T"]), r;
  }
  return se(e, [{
    key: "parse",
    value: function(n, o, i, u) {
      var l = function(d) {
        var c = Math.floor((d - 1) / 7) * 7;
        return (d + u.weekStartsOn + 6) % 7 + c;
      };
      switch (o) {
        case "e":
        case "ee":
          return Fe(Ie(o.length, n), l);
        case "eo":
          return Fe(i.ordinalNumber(n, {
            unit: "day"
          }), l);
        case "eee":
          return i.day(n, {
            width: "abbreviated",
            context: "formatting"
          }) || i.day(n, {
            width: "short",
            context: "formatting"
          }) || i.day(n, {
            width: "narrow",
            context: "formatting"
          });
        case "eeeee":
          return i.day(n, {
            width: "narrow",
            context: "formatting"
          });
        case "eeeeee":
          return i.day(n, {
            width: "short",
            context: "formatting"
          }) || i.day(n, {
            width: "narrow",
            context: "formatting"
          });
        case "eeee":
        default:
          return i.day(n, {
            width: "wide",
            context: "formatting"
          }) || i.day(n, {
            width: "abbreviated",
            context: "formatting"
          }) || i.day(n, {
            width: "short",
            context: "formatting"
          }) || i.day(n, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "validate",
    value: function(n, o) {
      return o >= 0 && o <= 6;
    }
  }, {
    key: "set",
    value: function(n, o, i, u) {
      return n = mi(n, i, u), n.setUTCHours(0, 0, 0, 0), n;
    }
  }]), e;
}(me), Sd = /* @__PURE__ */ function(a) {
  ce(e, a);
  var t = fe(e);
  function e() {
    var r;
    ue(this, e);
    for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), V(W(r), "priority", 90), V(W(r), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "e", "t", "T"]), r;
  }
  return se(e, [{
    key: "parse",
    value: function(n, o, i, u) {
      var l = function(d) {
        var c = Math.floor((d - 1) / 7) * 7;
        return (d + u.weekStartsOn + 6) % 7 + c;
      };
      switch (o) {
        case "c":
        case "cc":
          return Fe(Ie(o.length, n), l);
        case "co":
          return Fe(i.ordinalNumber(n, {
            unit: "day"
          }), l);
        case "ccc":
          return i.day(n, {
            width: "abbreviated",
            context: "standalone"
          }) || i.day(n, {
            width: "short",
            context: "standalone"
          }) || i.day(n, {
            width: "narrow",
            context: "standalone"
          });
        case "ccccc":
          return i.day(n, {
            width: "narrow",
            context: "standalone"
          });
        case "cccccc":
          return i.day(n, {
            width: "short",
            context: "standalone"
          }) || i.day(n, {
            width: "narrow",
            context: "standalone"
          });
        case "cccc":
        default:
          return i.day(n, {
            width: "wide",
            context: "standalone"
          }) || i.day(n, {
            width: "abbreviated",
            context: "standalone"
          }) || i.day(n, {
            width: "short",
            context: "standalone"
          }) || i.day(n, {
            width: "narrow",
            context: "standalone"
          });
      }
    }
  }, {
    key: "validate",
    value: function(n, o) {
      return o >= 0 && o <= 6;
    }
  }, {
    key: "set",
    value: function(n, o, i, u) {
      return n = mi(n, i, u), n.setUTCHours(0, 0, 0, 0), n;
    }
  }]), e;
}(me);
function Pd(a, t) {
  f(2, arguments);
  var e = U(t);
  e % 7 === 0 && (e = e - 7);
  var r = 1, n = T(a), o = n.getUTCDay(), i = e % 7, u = (i + 7) % 7, l = (u < r ? 7 : 0) + e - o;
  return n.setUTCDate(n.getUTCDate() + l), n;
}
var $d = /* @__PURE__ */ function(a) {
  ce(e, a);
  var t = fe(e);
  function e() {
    var r;
    ue(this, e);
    for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), V(W(r), "priority", 90), V(W(r), "incompatibleTokens", ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "E", "e", "c", "t", "T"]), r;
  }
  return se(e, [{
    key: "parse",
    value: function(n, o, i) {
      var u = function(s) {
        return s === 0 ? 7 : s;
      };
      switch (o) {
        case "i":
        case "ii":
          return Ie(o.length, n);
        case "io":
          return i.ordinalNumber(n, {
            unit: "day"
          });
        case "iii":
          return Fe(i.day(n, {
            width: "abbreviated",
            context: "formatting"
          }) || i.day(n, {
            width: "short",
            context: "formatting"
          }) || i.day(n, {
            width: "narrow",
            context: "formatting"
          }), u);
        case "iiiii":
          return Fe(i.day(n, {
            width: "narrow",
            context: "formatting"
          }), u);
        case "iiiiii":
          return Fe(i.day(n, {
            width: "short",
            context: "formatting"
          }) || i.day(n, {
            width: "narrow",
            context: "formatting"
          }), u);
        case "iiii":
        default:
          return Fe(i.day(n, {
            width: "wide",
            context: "formatting"
          }) || i.day(n, {
            width: "abbreviated",
            context: "formatting"
          }) || i.day(n, {
            width: "short",
            context: "formatting"
          }) || i.day(n, {
            width: "narrow",
            context: "formatting"
          }), u);
      }
    }
  }, {
    key: "validate",
    value: function(n, o) {
      return o >= 1 && o <= 7;
    }
  }, {
    key: "set",
    value: function(n, o, i) {
      return n = Pd(n, i), n.setUTCHours(0, 0, 0, 0), n;
    }
  }]), e;
}(me), Rd = /* @__PURE__ */ function(a) {
  ce(e, a);
  var t = fe(e);
  function e() {
    var r;
    ue(this, e);
    for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), V(W(r), "priority", 80), V(W(r), "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]), r;
  }
  return se(e, [{
    key: "parse",
    value: function(n, o, i) {
      switch (o) {
        case "a":
        case "aa":
        case "aaa":
          return i.dayPeriod(n, {
            width: "abbreviated",
            context: "formatting"
          }) || i.dayPeriod(n, {
            width: "narrow",
            context: "formatting"
          });
        case "aaaaa":
          return i.dayPeriod(n, {
            width: "narrow",
            context: "formatting"
          });
        case "aaaa":
        default:
          return i.dayPeriod(n, {
            width: "wide",
            context: "formatting"
          }) || i.dayPeriod(n, {
            width: "abbreviated",
            context: "formatting"
          }) || i.dayPeriod(n, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "set",
    value: function(n, o, i) {
      return n.setUTCHours(hi(i), 0, 0, 0), n;
    }
  }]), e;
}(me), Id = /* @__PURE__ */ function(a) {
  ce(e, a);
  var t = fe(e);
  function e() {
    var r;
    ue(this, e);
    for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), V(W(r), "priority", 80), V(W(r), "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]), r;
  }
  return se(e, [{
    key: "parse",
    value: function(n, o, i) {
      switch (o) {
        case "b":
        case "bb":
        case "bbb":
          return i.dayPeriod(n, {
            width: "abbreviated",
            context: "formatting"
          }) || i.dayPeriod(n, {
            width: "narrow",
            context: "formatting"
          });
        case "bbbbb":
          return i.dayPeriod(n, {
            width: "narrow",
            context: "formatting"
          });
        case "bbbb":
        default:
          return i.dayPeriod(n, {
            width: "wide",
            context: "formatting"
          }) || i.dayPeriod(n, {
            width: "abbreviated",
            context: "formatting"
          }) || i.dayPeriod(n, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "set",
    value: function(n, o, i) {
      return n.setUTCHours(hi(i), 0, 0, 0), n;
    }
  }]), e;
}(me), Nd = /* @__PURE__ */ function(a) {
  ce(e, a);
  var t = fe(e);
  function e() {
    var r;
    ue(this, e);
    for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), V(W(r), "priority", 80), V(W(r), "incompatibleTokens", ["a", "b", "t", "T"]), r;
  }
  return se(e, [{
    key: "parse",
    value: function(n, o, i) {
      switch (o) {
        case "B":
        case "BB":
        case "BBB":
          return i.dayPeriod(n, {
            width: "abbreviated",
            context: "formatting"
          }) || i.dayPeriod(n, {
            width: "narrow",
            context: "formatting"
          });
        case "BBBBB":
          return i.dayPeriod(n, {
            width: "narrow",
            context: "formatting"
          });
        case "BBBB":
        default:
          return i.dayPeriod(n, {
            width: "wide",
            context: "formatting"
          }) || i.dayPeriod(n, {
            width: "abbreviated",
            context: "formatting"
          }) || i.dayPeriod(n, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "set",
    value: function(n, o, i) {
      return n.setUTCHours(hi(i), 0, 0, 0), n;
    }
  }]), e;
}(me), Ed = /* @__PURE__ */ function(a) {
  ce(e, a);
  var t = fe(e);
  function e() {
    var r;
    ue(this, e);
    for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), V(W(r), "priority", 70), V(W(r), "incompatibleTokens", ["H", "K", "k", "t", "T"]), r;
  }
  return se(e, [{
    key: "parse",
    value: function(n, o, i) {
      switch (o) {
        case "h":
          return Se(Ye.hour12h, n);
        case "ho":
          return i.ordinalNumber(n, {
            unit: "hour"
          });
        default:
          return Ie(o.length, n);
      }
    }
  }, {
    key: "validate",
    value: function(n, o) {
      return o >= 1 && o <= 12;
    }
  }, {
    key: "set",
    value: function(n, o, i) {
      var u = n.getUTCHours() >= 12;
      return u && i < 12 ? n.setUTCHours(i + 12, 0, 0, 0) : !u && i === 12 ? n.setUTCHours(0, 0, 0, 0) : n.setUTCHours(i, 0, 0, 0), n;
    }
  }]), e;
}(me), Yd = /* @__PURE__ */ function(a) {
  ce(e, a);
  var t = fe(e);
  function e() {
    var r;
    ue(this, e);
    for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), V(W(r), "priority", 70), V(W(r), "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]), r;
  }
  return se(e, [{
    key: "parse",
    value: function(n, o, i) {
      switch (o) {
        case "H":
          return Se(Ye.hour23h, n);
        case "Ho":
          return i.ordinalNumber(n, {
            unit: "hour"
          });
        default:
          return Ie(o.length, n);
      }
    }
  }, {
    key: "validate",
    value: function(n, o) {
      return o >= 0 && o <= 23;
    }
  }, {
    key: "set",
    value: function(n, o, i) {
      return n.setUTCHours(i, 0, 0, 0), n;
    }
  }]), e;
}(me), Fd = /* @__PURE__ */ function(a) {
  ce(e, a);
  var t = fe(e);
  function e() {
    var r;
    ue(this, e);
    for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), V(W(r), "priority", 70), V(W(r), "incompatibleTokens", ["h", "H", "k", "t", "T"]), r;
  }
  return se(e, [{
    key: "parse",
    value: function(n, o, i) {
      switch (o) {
        case "K":
          return Se(Ye.hour11h, n);
        case "Ko":
          return i.ordinalNumber(n, {
            unit: "hour"
          });
        default:
          return Ie(o.length, n);
      }
    }
  }, {
    key: "validate",
    value: function(n, o) {
      return o >= 0 && o <= 11;
    }
  }, {
    key: "set",
    value: function(n, o, i) {
      var u = n.getUTCHours() >= 12;
      return u && i < 12 ? n.setUTCHours(i + 12, 0, 0, 0) : n.setUTCHours(i, 0, 0, 0), n;
    }
  }]), e;
}(me), Ad = /* @__PURE__ */ function(a) {
  ce(e, a);
  var t = fe(e);
  function e() {
    var r;
    ue(this, e);
    for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), V(W(r), "priority", 70), V(W(r), "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]), r;
  }
  return se(e, [{
    key: "parse",
    value: function(n, o, i) {
      switch (o) {
        case "k":
          return Se(Ye.hour24h, n);
        case "ko":
          return i.ordinalNumber(n, {
            unit: "hour"
          });
        default:
          return Ie(o.length, n);
      }
    }
  }, {
    key: "validate",
    value: function(n, o) {
      return o >= 1 && o <= 24;
    }
  }, {
    key: "set",
    value: function(n, o, i) {
      var u = i <= 24 ? i % 24 : i;
      return n.setUTCHours(u, 0, 0, 0), n;
    }
  }]), e;
}(me), Ud = /* @__PURE__ */ function(a) {
  ce(e, a);
  var t = fe(e);
  function e() {
    var r;
    ue(this, e);
    for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), V(W(r), "priority", 60), V(W(r), "incompatibleTokens", ["t", "T"]), r;
  }
  return se(e, [{
    key: "parse",
    value: function(n, o, i) {
      switch (o) {
        case "m":
          return Se(Ye.minute, n);
        case "mo":
          return i.ordinalNumber(n, {
            unit: "minute"
          });
        default:
          return Ie(o.length, n);
      }
    }
  }, {
    key: "validate",
    value: function(n, o) {
      return o >= 0 && o <= 59;
    }
  }, {
    key: "set",
    value: function(n, o, i) {
      return n.setUTCMinutes(i, 0, 0), n;
    }
  }]), e;
}(me), Hd = /* @__PURE__ */ function(a) {
  ce(e, a);
  var t = fe(e);
  function e() {
    var r;
    ue(this, e);
    for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), V(W(r), "priority", 50), V(W(r), "incompatibleTokens", ["t", "T"]), r;
  }
  return se(e, [{
    key: "parse",
    value: function(n, o, i) {
      switch (o) {
        case "s":
          return Se(Ye.second, n);
        case "so":
          return i.ordinalNumber(n, {
            unit: "second"
          });
        default:
          return Ie(o.length, n);
      }
    }
  }, {
    key: "validate",
    value: function(n, o) {
      return o >= 0 && o <= 59;
    }
  }, {
    key: "set",
    value: function(n, o, i) {
      return n.setUTCSeconds(i, 0), n;
    }
  }]), e;
}(me), Vd = /* @__PURE__ */ function(a) {
  ce(e, a);
  var t = fe(e);
  function e() {
    var r;
    ue(this, e);
    for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), V(W(r), "priority", 30), V(W(r), "incompatibleTokens", ["t", "T"]), r;
  }
  return se(e, [{
    key: "parse",
    value: function(n, o) {
      var i = function(l) {
        return Math.floor(l * Math.pow(10, -o.length + 3));
      };
      return Fe(Ie(o.length, n), i);
    }
  }, {
    key: "set",
    value: function(n, o, i) {
      return n.setUTCMilliseconds(i), n;
    }
  }]), e;
}(me), Wd = /* @__PURE__ */ function(a) {
  ce(e, a);
  var t = fe(e);
  function e() {
    var r;
    ue(this, e);
    for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), V(W(r), "priority", 10), V(W(r), "incompatibleTokens", ["t", "T", "x"]), r;
  }
  return se(e, [{
    key: "parse",
    value: function(n, o) {
      switch (o) {
        case "X":
          return dt(st.basicOptionalMinutes, n);
        case "XX":
          return dt(st.basic, n);
        case "XXXX":
          return dt(st.basicOptionalSeconds, n);
        case "XXXXX":
          return dt(st.extendedOptionalSeconds, n);
        case "XXX":
        default:
          return dt(st.extended, n);
      }
    }
  }, {
    key: "set",
    value: function(n, o, i) {
      return o.timestampIsSet ? n : new Date(n.getTime() - i);
    }
  }]), e;
}(me), zd = /* @__PURE__ */ function(a) {
  ce(e, a);
  var t = fe(e);
  function e() {
    var r;
    ue(this, e);
    for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), V(W(r), "priority", 10), V(W(r), "incompatibleTokens", ["t", "T", "X"]), r;
  }
  return se(e, [{
    key: "parse",
    value: function(n, o) {
      switch (o) {
        case "x":
          return dt(st.basicOptionalMinutes, n);
        case "xx":
          return dt(st.basic, n);
        case "xxxx":
          return dt(st.basicOptionalSeconds, n);
        case "xxxxx":
          return dt(st.extendedOptionalSeconds, n);
        case "xxx":
        default:
          return dt(st.extended, n);
      }
    }
  }, {
    key: "set",
    value: function(n, o, i) {
      return o.timestampIsSet ? n : new Date(n.getTime() - i);
    }
  }]), e;
}(me), Bd = /* @__PURE__ */ function(a) {
  ce(e, a);
  var t = fe(e);
  function e() {
    var r;
    ue(this, e);
    for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), V(W(r), "priority", 40), V(W(r), "incompatibleTokens", "*"), r;
  }
  return se(e, [{
    key: "parse",
    value: function(n) {
      return tl(n);
    }
  }, {
    key: "set",
    value: function(n, o, i) {
      return [new Date(i * 1e3), {
        timestampIsSet: !0
      }];
    }
  }]), e;
}(me), jd = /* @__PURE__ */ function(a) {
  ce(e, a);
  var t = fe(e);
  function e() {
    var r;
    ue(this, e);
    for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), V(W(r), "priority", 20), V(W(r), "incompatibleTokens", "*"), r;
  }
  return se(e, [{
    key: "parse",
    value: function(n) {
      return tl(n);
    }
  }, {
    key: "set",
    value: function(n, o, i) {
      return [new Date(i), {
        timestampIsSet: !0
      }];
    }
  }]), e;
}(me), qd = {
  G: new dd(),
  y: new cd(),
  Y: new fd(),
  R: new vd(),
  u: new hd(),
  Q: new md(),
  q: new gd(),
  M: new pd(),
  L: new yd(),
  w: new bd(),
  I: new Td(),
  d: new Md(),
  D: new Od(),
  E: new kd(),
  e: new xd(),
  c: new Sd(),
  i: new $d(),
  a: new Rd(),
  b: new Id(),
  B: new Nd(),
  h: new Ed(),
  H: new Yd(),
  K: new Fd(),
  k: new Ad(),
  m: new Ud(),
  s: new Hd(),
  S: new Vd(),
  X: new Wd(),
  x: new zd(),
  t: new Bd(),
  T: new jd()
}, Ld = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Qd = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Xd = /^'([^]*?)'?$/, Gd = /''/g, Kd = /\S/, Zd = /[a-zA-Z]/;
function nl(a, t, e, r) {
  var n, o, i, u, l, s, d, c, h, v, b, O, D, m, p, y, C, _;
  f(3, arguments);
  var N = String(a), H = String(t), k = We(), x = (n = (o = r == null ? void 0 : r.locale) !== null && o !== void 0 ? o : k.locale) !== null && n !== void 0 ? n : ba;
  if (!x.match)
    throw new RangeError("locale must contain match property");
  var $ = U((i = (u = (l = (s = r == null ? void 0 : r.firstWeekContainsDate) !== null && s !== void 0 ? s : r == null || (d = r.locale) === null || d === void 0 || (c = d.options) === null || c === void 0 ? void 0 : c.firstWeekContainsDate) !== null && l !== void 0 ? l : k.firstWeekContainsDate) !== null && u !== void 0 ? u : (h = k.locale) === null || h === void 0 || (v = h.options) === null || v === void 0 ? void 0 : v.firstWeekContainsDate) !== null && i !== void 0 ? i : 1);
  if (!($ >= 1 && $ <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var Y = U((b = (O = (D = (m = r == null ? void 0 : r.weekStartsOn) !== null && m !== void 0 ? m : r == null || (p = r.locale) === null || p === void 0 || (y = p.options) === null || y === void 0 ? void 0 : y.weekStartsOn) !== null && D !== void 0 ? D : k.weekStartsOn) !== null && O !== void 0 ? O : (C = k.locale) === null || C === void 0 || (_ = C.options) === null || _ === void 0 ? void 0 : _.weekStartsOn) !== null && b !== void 0 ? b : 0);
  if (!(Y >= 0 && Y <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (H === "")
    return N === "" ? T(e) : /* @__PURE__ */ new Date(NaN);
  var A = {
    firstWeekContainsDate: $,
    weekStartsOn: Y,
    locale: x
  }, z = [new sd()], te = H.match(Qd).map(function(J) {
    var Z = J[0];
    if (Z in Jr) {
      var de = Jr[Z];
      return de(J, x.formatLong);
    }
    return J;
  }).join("").match(Ld), q = [], re = Qi(te), pe;
  try {
    var ne = function() {
      var Z = pe.value;
      !(r != null && r.useAdditionalWeekYearTokens) && Uo(Z) && fr(Z, H, a), !(r != null && r.useAdditionalDayOfYearTokens) && Ao(Z) && fr(Z, H, a);
      var de = Z[0], Ae = qd[de];
      if (Ae) {
        var Qe = Ae.incompatibleTokens;
        if (Array.isArray(Qe)) {
          var tt = q.find(function(qe) {
            return Qe.includes(qe.token) || qe.token === de;
          });
          if (tt)
            throw new RangeError("The format string mustn't contain `".concat(tt.fullToken, "` and `").concat(Z, "` at the same time"));
        } else if (Ae.incompatibleTokens === "*" && q.length > 0)
          throw new RangeError("The format string mustn't contain `".concat(Z, "` and any other token at the same time"));
        q.push({
          token: de,
          fullToken: Z
        });
        var Xe = Ae.run(N, Z, x.match, A);
        if (!Xe)
          return {
            v: /* @__PURE__ */ new Date(NaN)
          };
        z.push(Xe.setter), N = Xe.rest;
      } else {
        if (de.match(Zd))
          throw new RangeError("Format string contains an unescaped latin alphabet character `" + de + "`");
        if (Z === "''" ? Z = "'" : de === "'" && (Z = Jd(Z)), N.indexOf(Z) === 0)
          N = N.slice(Z.length);
        else
          return {
            v: /* @__PURE__ */ new Date(NaN)
          };
      }
    };
    for (re.s(); !(pe = re.n()).done; ) {
      var De = ne();
      if (rt(De) === "object")
        return De.v;
    }
  } catch (J) {
    re.e(J);
  } finally {
    re.f();
  }
  if (N.length > 0 && Kd.test(N))
    return /* @__PURE__ */ new Date(NaN);
  var le = z.map(function(J) {
    return J.priority;
  }).sort(function(J, Z) {
    return Z - J;
  }).filter(function(J, Z, de) {
    return de.indexOf(J) === Z;
  }).map(function(J) {
    return z.filter(function(Z) {
      return Z.priority === J;
    }).sort(function(Z, de) {
      return de.subPriority - Z.subPriority;
    });
  }).map(function(J) {
    return J[0];
  }), ie = T(e);
  if (isNaN(ie.getTime()))
    return /* @__PURE__ */ new Date(NaN);
  var Oe = pa(ie, Ge(ie)), ke = {}, ye = Qi(le), K;
  try {
    for (ye.s(); !(K = ye.n()).done; ) {
      var xe = K.value;
      if (!xe.validate(Oe, A))
        return /* @__PURE__ */ new Date(NaN);
      var oe = xe.set(Oe, ke, A);
      Array.isArray(oe) ? (Oe = oe[0], Xa(ke, oe[1])) : Oe = oe;
    }
  } catch (J) {
    ye.e(J);
  } finally {
    ye.f();
  }
  return Oe;
}
function Jd(a) {
  return a.match(Xd)[1].replace(Gd, "'");
}
function ec(a, t, e) {
  return f(2, arguments), Mt(nl(a, t, /* @__PURE__ */ new Date(), e));
}
function tc(a) {
  return f(1, arguments), T(a).getDay() === 1;
}
function ac(a) {
  return f(1, arguments), T(a).getTime() < Date.now();
}
function tn(a) {
  f(1, arguments);
  var t = T(a);
  return t.setMinutes(0, 0, 0), t;
}
function il(a, t) {
  f(2, arguments);
  var e = tn(a), r = tn(t);
  return e.getTime() === r.getTime();
}
function gi(a, t, e) {
  f(2, arguments);
  var r = nt(a, e), n = nt(t, e);
  return r.getTime() === n.getTime();
}
function ol(a, t) {
  return f(2, arguments), gi(a, t, {
    weekStartsOn: 1
  });
}
function rc(a, t) {
  f(2, arguments);
  var e = Pt(a), r = Pt(t);
  return e.getTime() === r.getTime();
}
function ll(a, t) {
  f(2, arguments);
  var e = cr(a), r = cr(t);
  return e.getTime() === r.getTime();
}
function ul(a, t) {
  f(2, arguments);
  var e = T(a), r = T(t);
  return e.getFullYear() === r.getFullYear() && e.getMonth() === r.getMonth();
}
function sl(a, t) {
  f(2, arguments);
  var e = Wa(a), r = Wa(t);
  return e.getTime() === r.getTime();
}
function an(a) {
  f(1, arguments);
  var t = T(a);
  return t.setMilliseconds(0), t;
}
function dl(a, t) {
  f(2, arguments);
  var e = an(a), r = an(t);
  return e.getTime() === r.getTime();
}
function cl(a, t) {
  f(2, arguments);
  var e = T(a), r = T(t);
  return e.getFullYear() === r.getFullYear();
}
function nc(a) {
  return f(1, arguments), il(Date.now(), a);
}
function ic(a) {
  return f(1, arguments), ol(a, Date.now());
}
function oc(a) {
  return f(1, arguments), ll(Date.now(), a);
}
function lc(a) {
  return f(1, arguments), ul(Date.now(), a);
}
function uc(a) {
  return f(1, arguments), sl(Date.now(), a);
}
function sc(a) {
  return f(1, arguments), dl(Date.now(), a);
}
function dc(a, t) {
  return f(1, arguments), gi(a, Date.now(), t);
}
function cc(a) {
  return f(1, arguments), cl(a, Date.now());
}
function fc(a) {
  return f(1, arguments), T(a).getDay() === 4;
}
function vc(a) {
  return f(1, arguments), Qa(a, Date.now());
}
function hc(a) {
  return f(1, arguments), Qa(a, ft(Date.now(), 1));
}
function mc(a) {
  return f(1, arguments), T(a).getDay() === 2;
}
function gc(a) {
  return f(1, arguments), T(a).getDay() === 3;
}
function pc(a, t) {
  f(2, arguments);
  var e = T(a).getTime(), r = T(t.start).getTime(), n = T(t.end).getTime();
  if (!(r <= n))
    throw new RangeError("Invalid interval");
  return e >= r && e <= n;
}
function $r(a, t) {
  f(2, arguments);
  var e = U(t);
  return ft(a, -e);
}
function yc(a) {
  return f(1, arguments), Qa(a, $r(Date.now(), 1));
}
function wc(a) {
  f(1, arguments);
  var t = T(a), e = t.getFullYear(), r = 9 + Math.floor(e / 10) * 10;
  return t.setFullYear(r + 1, 0, 0), t.setHours(0, 0, 0, 0), t;
}
function fl(a, t) {
  var e, r, n, o, i, u, l, s;
  f(1, arguments);
  var d = We(), c = U((e = (r = (n = (o = t == null ? void 0 : t.weekStartsOn) !== null && o !== void 0 ? o : t == null || (i = t.locale) === null || i === void 0 || (u = i.options) === null || u === void 0 ? void 0 : u.weekStartsOn) !== null && n !== void 0 ? n : d.weekStartsOn) !== null && r !== void 0 ? r : (l = d.locale) === null || l === void 0 || (s = l.options) === null || s === void 0 ? void 0 : s.weekStartsOn) !== null && e !== void 0 ? e : 0);
  if (!(c >= 0 && c <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6");
  var h = T(a), v = h.getDay(), b = (v < c ? -7 : 0) + 6 - (v - c);
  return h.setHours(0, 0, 0, 0), h.setDate(h.getDate() + b), h;
}
function bc(a) {
  return f(1, arguments), fl(a, {
    weekStartsOn: 1
  });
}
function Dc(a) {
  f(1, arguments);
  var t = qt(a), e = /* @__PURE__ */ new Date(0);
  e.setFullYear(t + 1, 0, 4), e.setHours(0, 0, 0, 0);
  var r = Ct(e);
  return r.setDate(r.getDate() - 1), r;
}
function Tc(a) {
  f(1, arguments);
  var t = T(a), e = t.getMonth(), r = e - e % 3 + 3;
  return t.setMonth(r, 0), t.setHours(0, 0, 0, 0), t;
}
function _c(a) {
  f(1, arguments);
  var t = T(a), e = t.getFullYear();
  return t.setFullYear(e + 1, 0, 0), t.setHours(0, 0, 0, 0), t;
}
var Cc = /(\w)\1*|''|'(''|[^'])+('|$)|./g, Mc = /^'([^]*?)'?$/, Oc = /''/g, kc = /[a-zA-Z]/;
function xc(a, t) {
  f(2, arguments);
  var e = T(a);
  if (!Mt(e))
    throw new RangeError("Invalid time value");
  var r = Ge(e), n = pa(e, r), o = t.match(Cc);
  if (!o)
    return "";
  var i = o.map(function(u) {
    if (u === "''")
      return "'";
    var l = u[0];
    if (l === "'")
      return Sc(u);
    var s = Tt[l];
    if (s)
      return s(n, u);
    if (l.match(kc))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + l + "`");
    return u;
  }).join("");
  return i;
}
function Sc(a) {
  var t = a.match(Mc);
  return t ? t[1].replace(Oc, "'") : a;
}
var Gi = 365.2425;
function Pc(a) {
  var t = a.years, e = a.months, r = a.weeks, n = a.days, o = a.hours, i = a.minutes, u = a.seconds;
  f(1, arguments);
  var l = 0;
  t && (l += t * Gi), e && (l += e * (Gi / 12)), r && (l += r * 7), n && (l += n);
  var s = l * 24 * 60 * 60;
  return o && (s += o * 60 * 60), i && (s += i * 60), u && (s += u), Math.round(s * 1e3);
}
function $c(a) {
  f(1, arguments);
  var t = a / Gt;
  return Math.floor(t);
}
function Rc(a) {
  f(1, arguments);
  var t = a / Xt;
  return Math.floor(t);
}
function Ic(a) {
  f(1, arguments);
  var t = a / Cr;
  return Math.floor(t);
}
function Nc(a) {
  f(1, arguments);
  var t = a / ai;
  return Math.floor(t);
}
function Ec(a) {
  return f(1, arguments), Math.floor(a * Xt);
}
function Yc(a) {
  return f(1, arguments), Math.floor(a * Mr);
}
function Fc(a) {
  f(1, arguments);
  var t = a / ri;
  return Math.floor(t);
}
function Ac(a) {
  f(1, arguments);
  var t = a / ni;
  return Math.floor(t);
}
function It(a, t) {
  f(2, arguments);
  var e = t - Pr(a);
  return e <= 0 && (e += 7), ft(a, e);
}
function Uc(a) {
  return f(1, arguments), It(a, 5);
}
function Hc(a) {
  return f(1, arguments), It(a, 1);
}
function Vc(a) {
  return f(1, arguments), It(a, 6);
}
function Wc(a) {
  return f(1, arguments), It(a, 0);
}
function zc(a) {
  return f(1, arguments), It(a, 4);
}
function Bc(a) {
  return f(1, arguments), It(a, 2);
}
function jc(a) {
  return f(1, arguments), It(a, 3);
}
function qc(a, t) {
  var e;
  f(1, arguments);
  var r = U((e = t == null ? void 0 : t.additionalDigits) !== null && e !== void 0 ? e : 2);
  if (r !== 2 && r !== 1 && r !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (!(typeof a == "string" || Object.prototype.toString.call(a) === "[object String]"))
    return /* @__PURE__ */ new Date(NaN);
  var n = Gc(a), o;
  if (n.date) {
    var i = Kc(n.date, r);
    o = Zc(i.restDateString, i.year);
  }
  if (!o || isNaN(o.getTime()))
    return /* @__PURE__ */ new Date(NaN);
  var u = o.getTime(), l = 0, s;
  if (n.time && (l = Jc(n.time), isNaN(l)))
    return /* @__PURE__ */ new Date(NaN);
  if (n.timezone) {
    if (s = ef(n.timezone), isNaN(s))
      return /* @__PURE__ */ new Date(NaN);
  } else {
    var d = new Date(u + l), c = /* @__PURE__ */ new Date(0);
    return c.setFullYear(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()), c.setHours(d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds(), d.getUTCMilliseconds()), c;
  }
  return new Date(u + l + s);
}
var Za = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
}, Lc = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/, Qc = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/, Xc = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function Gc(a) {
  var t = {}, e = a.split(Za.dateTimeDelimiter), r;
  if (e.length > 2)
    return t;
  if (/:/.test(e[0]) ? r = e[0] : (t.date = e[0], r = e[1], Za.timeZoneDelimiter.test(t.date) && (t.date = a.split(Za.timeZoneDelimiter)[0], r = a.substr(t.date.length, a.length))), r) {
    var n = Za.timezone.exec(r);
    n ? (t.time = r.replace(n[1], ""), t.timezone = n[1]) : t.time = r;
  }
  return t;
}
function Kc(a, t) {
  var e = new RegExp("^(?:(\\d{4}|[+-]\\d{" + (4 + t) + "})|(\\d{2}|[+-]\\d{" + (2 + t) + "})$)"), r = a.match(e);
  if (!r)
    return {
      year: NaN,
      restDateString: ""
    };
  var n = r[1] ? parseInt(r[1]) : null, o = r[2] ? parseInt(r[2]) : null;
  return {
    year: o === null ? n : o * 100,
    restDateString: a.slice((r[1] || r[2]).length)
  };
}
function Zc(a, t) {
  if (t === null)
    return /* @__PURE__ */ new Date(NaN);
  var e = a.match(Lc);
  if (!e)
    return /* @__PURE__ */ new Date(NaN);
  var r = !!e[4], n = Ya(e[1]), o = Ya(e[2]) - 1, i = Ya(e[3]), u = Ya(e[4]), l = Ya(e[5]) - 1;
  if (r)
    return of(t, u, l) ? tf(t, u, l) : /* @__PURE__ */ new Date(NaN);
  var s = /* @__PURE__ */ new Date(0);
  return !rf(t, o, i) || !nf(t, n) ? /* @__PURE__ */ new Date(NaN) : (s.setUTCFullYear(t, o, Math.max(n, i)), s);
}
function Ya(a) {
  return a ? parseInt(a) : 1;
}
function Jc(a) {
  var t = a.match(Qc);
  if (!t)
    return NaN;
  var e = Wr(t[1]), r = Wr(t[2]), n = Wr(t[3]);
  return lf(e, r, n) ? e * Gt + r * Xt + n * 1e3 : NaN;
}
function Wr(a) {
  return a && parseFloat(a.replace(",", ".")) || 0;
}
function ef(a) {
  if (a === "Z")
    return 0;
  var t = a.match(Xc);
  if (!t)
    return 0;
  var e = t[1] === "+" ? -1 : 1, r = parseInt(t[2]), n = t[3] && parseInt(t[3]) || 0;
  return uf(r, n) ? e * (r * Gt + n * Xt) : NaN;
}
function tf(a, t, e) {
  var r = /* @__PURE__ */ new Date(0);
  r.setUTCFullYear(a, 0, 4);
  var n = r.getUTCDay() || 7, o = (t - 1) * 7 + e + 1 - n;
  return r.setUTCDate(r.getUTCDate() + o), r;
}
var af = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function vl(a) {
  return a % 400 === 0 || a % 4 === 0 && a % 100 !== 0;
}
function rf(a, t, e) {
  return t >= 0 && t <= 11 && e >= 1 && e <= (af[t] || (vl(a) ? 29 : 28));
}
function nf(a, t) {
  return t >= 1 && t <= (vl(a) ? 366 : 365);
}
function of(a, t, e) {
  return t >= 1 && t <= 53 && e >= 0 && e <= 6;
}
function lf(a, t, e) {
  return a === 24 ? t === 0 && e === 0 : e >= 0 && e < 60 && t >= 0 && t < 60 && a >= 0 && a < 25;
}
function uf(a, t) {
  return t >= 0 && t <= 59;
}
function sf(a) {
  if (f(1, arguments), typeof a == "string") {
    var t = a.match(/(\d{4})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2}):(\d{2})(?:\.(\d{0,7}))?(?:Z|(.)(\d{2}):?(\d{2})?)?/);
    return t ? new Date(Date.UTC(+t[1], +t[2] - 1, +t[3], +t[4] - (+t[9] || 0) * (t[8] == "-" ? -1 : 1), +t[5] - (+t[10] || 0) * (t[8] == "-" ? -1 : 1), +t[6], +((t[7] || "0") + "00").substring(0, 3))) : /* @__PURE__ */ new Date(NaN);
  }
  return T(a);
}
function Nt(a, t) {
  f(2, arguments);
  var e = Pr(a) - t;
  return e <= 0 && (e += 7), $r(a, e);
}
function df(a) {
  return f(1, arguments), Nt(a, 5);
}
function cf(a) {
  return f(1, arguments), Nt(a, 1);
}
function ff(a) {
  return f(1, arguments), Nt(a, 6);
}
function vf(a) {
  return f(1, arguments), Nt(a, 0);
}
function hf(a) {
  return f(1, arguments), Nt(a, 4);
}
function mf(a) {
  return f(1, arguments), Nt(a, 2);
}
function gf(a) {
  return f(1, arguments), Nt(a, 3);
}
function pf(a) {
  return f(1, arguments), Math.floor(a * ri);
}
function yf(a) {
  f(1, arguments);
  var t = a / ii;
  return Math.floor(t);
}
function wf(a, t) {
  var e;
  if (arguments.length < 1)
    throw new TypeError("1 argument required, but only none provided present");
  var r = U((e = t == null ? void 0 : t.nearestTo) !== null && e !== void 0 ? e : 1);
  if (r < 1 || r > 30)
    throw new RangeError("`options.nearestTo` must be between 1 and 30");
  var n = T(a), o = n.getSeconds(), i = n.getMinutes() + o / 60, u = Ta(t == null ? void 0 : t.roundingMethod), l = u(i / r) * r, s = i % r, d = Math.round(s / r) * r;
  return new Date(n.getFullYear(), n.getMonth(), n.getDate(), n.getHours(), l + d);
}
function bf(a) {
  f(1, arguments);
  var t = a / La;
  return Math.floor(t);
}
function Df(a) {
  return f(1, arguments), a * Cr;
}
function Tf(a) {
  f(1, arguments);
  var t = a / Mr;
  return Math.floor(t);
}
function pi(a, t) {
  f(2, arguments);
  var e = T(a), r = U(t), n = e.getFullYear(), o = e.getDate(), i = /* @__PURE__ */ new Date(0);
  i.setFullYear(n, r, 15), i.setHours(0, 0, 0, 0);
  var u = jo(i);
  return e.setMonth(r, Math.min(o, u)), e;
}
function _f(a, t) {
  if (f(2, arguments), rt(t) !== "object" || t === null)
    throw new RangeError("values parameter must be an object");
  var e = T(a);
  return isNaN(e.getTime()) ? /* @__PURE__ */ new Date(NaN) : (t.year != null && e.setFullYear(t.year), t.month != null && (e = pi(e, t.month)), t.date != null && e.setDate(U(t.date)), t.hours != null && e.setHours(U(t.hours)), t.minutes != null && e.setMinutes(U(t.minutes)), t.seconds != null && e.setSeconds(U(t.seconds)), t.milliseconds != null && e.setMilliseconds(U(t.milliseconds)), e);
}
function Cf(a, t) {
  f(2, arguments);
  var e = T(a), r = U(t);
  return e.setDate(r), e;
}
function Mf(a, t, e) {
  var r, n, o, i, u, l, s, d;
  f(2, arguments);
  var c = We(), h = U((r = (n = (o = (i = e == null ? void 0 : e.weekStartsOn) !== null && i !== void 0 ? i : e == null || (u = e.locale) === null || u === void 0 || (l = u.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && o !== void 0 ? o : c.weekStartsOn) !== null && n !== void 0 ? n : (s = c.locale) === null || s === void 0 || (d = s.options) === null || d === void 0 ? void 0 : d.weekStartsOn) !== null && r !== void 0 ? r : 0);
  if (!(h >= 0 && h <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var v = T(a), b = U(t), O = v.getDay(), D = b % 7, m = (D + 7) % 7, p = 7 - h, y = b < 0 || b > 6 ? b - (O + p) % 7 : (m + p) % 7 - (O + p) % 7;
  return ft(v, y);
}
function Of(a, t) {
  f(2, arguments);
  var e = T(a), r = U(t);
  return e.setMonth(0), e.setDate(r), e;
}
function kf(a) {
  f(1, arguments);
  var t = {}, e = We();
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
  for (var n in a)
    Object.prototype.hasOwnProperty.call(a, n) && (a[n] === void 0 ? delete t[n] : t[n] = a[n]);
  ou(t);
}
function xf(a, t) {
  f(2, arguments);
  var e = T(a), r = U(t);
  return e.setHours(r), e;
}
function Sf(a, t) {
  f(2, arguments);
  var e = T(a), r = U(t), n = Lo(e), o = r - n;
  return ft(e, o);
}
function Pf(a, t) {
  f(2, arguments);
  var e = T(a), r = U(t), n = Qo(e) - r;
  return e.setDate(e.getDate() - n * 7), e;
}
function $f(a, t) {
  f(2, arguments);
  var e = T(a), r = U(t);
  return e.setMilliseconds(r), e;
}
function Rf(a, t) {
  f(2, arguments);
  var e = T(a), r = U(t);
  return e.setMinutes(r), e;
}
function If(a, t) {
  f(2, arguments);
  var e = T(a), r = U(t), n = Math.floor(e.getMonth() / 3) + 1, o = r - n;
  return pi(e, e.getMonth() + o * 3);
}
function Nf(a, t) {
  f(2, arguments);
  var e = T(a), r = U(t);
  return e.setSeconds(r), e;
}
function Ef(a, t, e) {
  f(2, arguments);
  var r = T(a), n = U(t), o = Ko(r, e) - n;
  return r.setDate(r.getDate() - o * 7), r;
}
function Yf(a, t, e) {
  var r, n, o, i, u, l, s, d;
  f(2, arguments);
  var c = We(), h = U((r = (n = (o = (i = e == null ? void 0 : e.firstWeekContainsDate) !== null && i !== void 0 ? i : e == null || (u = e.locale) === null || u === void 0 || (l = u.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && o !== void 0 ? o : c.firstWeekContainsDate) !== null && n !== void 0 ? n : (s = c.locale) === null || s === void 0 || (d = s.options) === null || d === void 0 ? void 0 : d.firstWeekContainsDate) !== null && r !== void 0 ? r : 1), v = T(a), b = U(t), O = ct(v, hr(v, e)), D = /* @__PURE__ */ new Date(0);
  return D.setFullYear(b, 0, h), D.setHours(0, 0, 0, 0), v = hr(D, e), v.setDate(v.getDate() + O), v;
}
function Ff(a, t) {
  f(2, arguments);
  var e = T(a), r = U(t);
  return isNaN(e.getTime()) ? /* @__PURE__ */ new Date(NaN) : (e.setFullYear(r), e);
}
function Af(a) {
  f(1, arguments);
  var t = T(a), e = t.getFullYear(), r = Math.floor(e / 10) * 10;
  return t.setFullYear(r, 0, 1), t.setHours(0, 0, 0, 0), t;
}
function Uf() {
  return ga(Date.now());
}
function Hf() {
  var a = /* @__PURE__ */ new Date(), t = a.getFullYear(), e = a.getMonth(), r = a.getDate(), n = /* @__PURE__ */ new Date(0);
  return n.setFullYear(t, e, r + 1), n.setHours(0, 0, 0, 0), n;
}
function Vf() {
  var a = /* @__PURE__ */ new Date(), t = a.getFullYear(), e = a.getMonth(), r = a.getDate(), n = /* @__PURE__ */ new Date(0);
  return n.setFullYear(t, e, r - 1), n.setHours(0, 0, 0, 0), n;
}
function hl(a, t) {
  f(2, arguments);
  var e = U(t);
  return ja(a, -e);
}
function Wf(a, t) {
  if (f(2, arguments), !t || rt(t) !== "object")
    return /* @__PURE__ */ new Date(NaN);
  var e = t.years ? U(t.years) : 0, r = t.months ? U(t.months) : 0, n = t.weeks ? U(t.weeks) : 0, o = t.days ? U(t.days) : 0, i = t.hours ? U(t.hours) : 0, u = t.minutes ? U(t.minutes) : 0, l = t.seconds ? U(t.seconds) : 0, s = hl(a, r + e * 12), d = $r(s, o + n * 7), c = u + i * 60, h = l + c * 60, v = h * 1e3, b = new Date(d.getTime() - v);
  return b;
}
function zf(a, t) {
  f(2, arguments);
  var e = U(t);
  return mo(a, -e);
}
function Bf(a, t) {
  f(2, arguments);
  var e = U(t);
  return Zn(a, -e);
}
function jf(a, t) {
  f(2, arguments);
  var e = U(t);
  return Jn(a, -e);
}
function qf(a, t) {
  f(2, arguments);
  var e = U(t);
  return ei(a, -e);
}
function Lf(a, t) {
  f(2, arguments);
  var e = U(t);
  return yo(a, -e);
}
function Qf(a, t) {
  f(2, arguments);
  var e = U(t);
  return _r(a, -e);
}
function Xf(a, t) {
  f(2, arguments);
  var e = U(t);
  return wo(a, -e);
}
function Gf(a) {
  return f(1, arguments), Math.floor(a * ti);
}
function Kf(a) {
  return f(1, arguments), Math.floor(a * ni);
}
function Zf(a) {
  return f(1, arguments), Math.floor(a * ii);
}
const Jf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  add: va,
  addBusinessDays: mo,
  addDays: ft,
  addHours: Zn,
  addISOWeekYears: po,
  addMilliseconds: qa,
  addMinutes: Jn,
  addMonths: ja,
  addQuarters: ei,
  addSeconds: yo,
  addWeeks: _r,
  addYears: wo,
  areIntervalsOverlapping: cu,
  clamp: fu,
  closestIndexTo: vu,
  closestTo: hu,
  compareAsc: ot,
  compareDesc: mu,
  daysInWeek: ti,
  daysInYear: To,
  daysToWeeks: pu,
  differenceInBusinessDays: yu,
  differenceInCalendarDays: ct,
  differenceInCalendarISOWeekYears: ko,
  differenceInCalendarISOWeeks: bu,
  differenceInCalendarMonths: lr,
  differenceInCalendarQuarters: or,
  differenceInCalendarWeeks: ur,
  differenceInCalendarYears: Va,
  differenceInDays: ui,
  differenceInHours: sr,
  differenceInISOWeekYears: _u,
  differenceInMilliseconds: kr,
  differenceInMinutes: dr,
  differenceInMonths: xr,
  differenceInQuarters: Cu,
  differenceInSeconds: ma,
  differenceInWeeks: Mu,
  differenceInYears: Po,
  eachDayOfInterval: $o,
  eachHourOfInterval: Ou,
  eachMinuteOfInterval: ku,
  eachMonthOfInterval: xu,
  eachQuarterOfInterval: Su,
  eachWeekOfInterval: Pu,
  eachWeekendOfInterval: ci,
  eachWeekendOfMonth: $u,
  eachWeekendOfYear: Ru,
  eachYearOfInterval: Iu,
  endOfDay: si,
  endOfDecade: Nu,
  endOfHour: Eu,
  endOfISOWeek: Yu,
  endOfISOWeekYear: Fu,
  endOfMinute: Au,
  endOfMonth: di,
  endOfQuarter: Uu,
  endOfSecond: Hu,
  endOfToday: Vu,
  endOfTomorrow: Wu,
  endOfWeek: Io,
  endOfYear: Ro,
  endOfYesterday: zu,
  format: Ho,
  formatDistance: Wo,
  formatDistanceStrict: zo,
  formatDistanceToNow: cs,
  formatDistanceToNowStrict: fs,
  formatDuration: hs,
  formatISO: ms,
  formatISO9075: gs,
  formatISODuration: ps,
  formatRFC3339: ys,
  formatRFC7231: Ds,
  formatRelative: Ts,
  fromUnixTime: _s,
  getDate: Bo,
  getDay: Pr,
  getDayOfYear: Cs,
  getDaysInMonth: jo,
  getDaysInYear: Ms,
  getDecade: Os,
  getDefaultOptions: ks,
  getHours: xs,
  getISODay: Lo,
  getISOWeek: Qo,
  getISOWeekYear: qt,
  getISOWeeksInYear: $s,
  getMilliseconds: Rs,
  getMinutes: Is,
  getMonth: Ns,
  getOverlappingDaysInIntervals: Ys,
  getQuarter: Zr,
  getSeconds: Fs,
  getTime: Xo,
  getUnixTime: As,
  getWeek: Ko,
  getWeekOfMonth: Hs,
  getWeekYear: Go,
  getWeeksInMonth: Vs,
  getYear: Ws,
  hoursToMilliseconds: zs,
  hoursToMinutes: Bs,
  hoursToSeconds: js,
  intervalToDuration: qs,
  intlFormat: Ls,
  intlFormatDistance: Xs,
  isAfter: Gs,
  isBefore: Ks,
  isDate: Oo,
  isEqual: Zs,
  isExists: Js,
  isFirstDayOfMonth: ed,
  isFriday: td,
  isFuture: ad,
  isLastDayOfMonth: So,
  isLeapYear: qo,
  isMatch: ec,
  isMonday: tc,
  isPast: ac,
  isSameDay: Qa,
  isSameHour: il,
  isSameISOWeek: ol,
  isSameISOWeekYear: rc,
  isSameMinute: ll,
  isSameMonth: ul,
  isSameQuarter: sl,
  isSameSecond: dl,
  isSameWeek: gi,
  isSameYear: cl,
  isSaturday: ho,
  isSunday: Kn,
  isThisHour: nc,
  isThisISOWeek: ic,
  isThisMinute: oc,
  isThisMonth: lc,
  isThisQuarter: uc,
  isThisSecond: sc,
  isThisWeek: dc,
  isThisYear: cc,
  isThursday: fc,
  isToday: vc,
  isTomorrow: hc,
  isTuesday: mc,
  isValid: Mt,
  isWednesday: gc,
  isWeekend: ha,
  isWithinInterval: pc,
  isYesterday: yc,
  lastDayOfDecade: wc,
  lastDayOfISOWeek: bc,
  lastDayOfISOWeekYear: Dc,
  lastDayOfMonth: Zo,
  lastDayOfQuarter: Tc,
  lastDayOfWeek: fl,
  lastDayOfYear: _c,
  lightFormat: xc,
  max: bo,
  maxTime: _o,
  milliseconds: Pc,
  millisecondsInHour: Gt,
  millisecondsInMinute: Xt,
  millisecondsInSecond: Cr,
  millisecondsToHours: $c,
  millisecondsToMinutes: Rc,
  millisecondsToSeconds: Ic,
  min: Do,
  minTime: gu,
  minutesInHour: ai,
  minutesToHours: Nc,
  minutesToMilliseconds: Ec,
  minutesToSeconds: Yc,
  monthsInQuarter: ri,
  monthsInYear: ni,
  monthsToQuarters: Fc,
  monthsToYears: Ac,
  nextDay: It,
  nextFriday: Uc,
  nextMonday: Hc,
  nextSaturday: Vc,
  nextSunday: Wc,
  nextThursday: zc,
  nextTuesday: Bc,
  nextWednesday: jc,
  parse: nl,
  parseISO: qc,
  parseJSON: sf,
  previousDay: Nt,
  previousFriday: df,
  previousMonday: cf,
  previousSaturday: ff,
  previousSunday: vf,
  previousThursday: hf,
  previousTuesday: mf,
  previousWednesday: gf,
  quartersInYear: ii,
  quartersToMonths: pf,
  quartersToYears: yf,
  roundToNearestMinutes: wf,
  secondsInDay: Or,
  secondsInHour: La,
  secondsInMinute: Mr,
  secondsInMonth: li,
  secondsInQuarter: Mo,
  secondsInWeek: Co,
  secondsInYear: oi,
  secondsToHours: bf,
  secondsToMilliseconds: Df,
  secondsToMinutes: Tf,
  set: _f,
  setDate: Cf,
  setDay: Mf,
  setDayOfYear: Of,
  setDefaultOptions: kf,
  setHours: xf,
  setISODay: Sf,
  setISOWeek: Pf,
  setISOWeekYear: go,
  setMilliseconds: $f,
  setMinutes: Rf,
  setMonth: pi,
  setQuarter: If,
  setSeconds: Nf,
  setWeek: Ef,
  setWeekYear: Yf,
  setYear: Ff,
  startOfDay: ga,
  startOfDecade: Af,
  startOfHour: tn,
  startOfISOWeek: Ct,
  startOfISOWeekYear: Pt,
  startOfMinute: cr,
  startOfMonth: Sr,
  startOfQuarter: Wa,
  startOfSecond: an,
  startOfToday: Uf,
  startOfTomorrow: Hf,
  startOfWeek: nt,
  startOfWeekYear: hr,
  startOfYear: fi,
  startOfYesterday: Vf,
  sub: Wf,
  subBusinessDays: zf,
  subDays: $r,
  subHours: Bf,
  subISOWeekYears: xo,
  subMilliseconds: pa,
  subMinutes: jf,
  subMonths: hl,
  subQuarters: qf,
  subSeconds: Lf,
  subWeeks: Qf,
  subYears: Xf,
  toDate: T,
  weeksToDays: Gf,
  yearsToMonths: Kf,
  yearsToQuarters: Zf
}, Symbol.toStringTag, { value: "Module" }));
var ml = {}, gl = {};
const Kt = /* @__PURE__ */ iu(Jf);
var pl = {}, yi = {}, Rr = {}, wi = {}, bi = {}, Di = {};
Object.defineProperty(Di, "__esModule", { value: !0 });
Di.default = {
  itemFontSize: "12px",
  itemHeight: "36px",
  itemWidth: "52px",
  panelActionPadding: "8px 0"
};
(function(a) {
  var t = be && be.__importDefault || function(d) {
    return d && d.__esModule ? d : { default: d };
  };
  Object.defineProperty(a, "__esModule", { value: !0 }), a.self = void 0;
  const e = t(Di), r = wr, n = pr, o = Tr, i = yr, u = br, l = (d) => {
    const { popoverColor: c, textColor2: h, primaryColor: v, hoverColor: b, dividerColor: O, opacityDisabled: D, boxShadow2: m, borderRadius: p, iconColor: y, iconColorDisabled: C } = d;
    return Object.assign(Object.assign({}, e.default), {
      panelColor: c,
      panelBoxShadow: m,
      panelDividerColor: O,
      itemTextColor: h,
      itemTextColorActive: v,
      itemColorHover: b,
      itemOpacityDisabled: D,
      itemBorderRadius: p,
      borderRadius: p,
      iconColor: y,
      iconColorDisabled: C
    });
  };
  a.self = l;
  const s = (0, i.createTheme)({
    name: "TimePicker",
    common: n.commonLight,
    peers: {
      Scrollbar: r.scrollbarLight,
      Button: o.buttonLight,
      Input: u.inputLight
    },
    self: a.self
  });
  a.default = s;
})(bi);
Object.defineProperty(wi, "__esModule", { value: !0 });
const ev = wr, tv = pr, av = Tr, rv = br, nv = bi, iv = {
  name: "TimePicker",
  common: tv.commonDark,
  peers: {
    Scrollbar: ev.scrollbarDark,
    Button: av.buttonDark,
    Input: rv.inputDark
  },
  self: nv.self
};
wi.default = iv;
(function(a) {
  var t = be && be.__importDefault || function(n) {
    return n && n.__esModule ? n : { default: n };
  };
  Object.defineProperty(a, "__esModule", { value: !0 }), a.timePickerLight = a.timePickerDark = void 0;
  var e = wi;
  Object.defineProperty(a, "timePickerDark", { enumerable: !0, get: function() {
    return t(e).default;
  } });
  var r = bi;
  Object.defineProperty(a, "timePickerLight", { enumerable: !0, get: function() {
    return t(r).default;
  } });
})(Rr);
var Ti = {}, _i = {};
Object.defineProperty(_i, "__esModule", { value: !0 });
_i.default = {
  itemSize: "24px",
  itemCellWidth: "38px",
  itemCellHeight: "32px",
  scrollItemWidth: "80px",
  scrollItemHeight: "40px",
  panelExtraFooterPadding: "8px 12px",
  panelActionPadding: "8px 12px",
  calendarTitlePadding: "0",
  calendarTitleHeight: "28px",
  arrowSize: "14px",
  panelHeaderPadding: "8px 12px",
  calendarDaysHeight: "32px",
  calendarTitleGridTempateColumns: "28px 28px 1fr 28px 28px",
  // type
  calendarLeftPaddingDate: "6px 12px 4px 12px",
  calendarLeftPaddingDatetime: "4px 12px",
  calendarLeftPaddingDaterange: "6px 12px 4px 12px",
  calendarLeftPaddingDatetimerange: "4px 12px",
  calendarLeftPaddingMonth: "0",
  calendarLeftPaddingYear: "0",
  calendarLeftPaddingQuarter: "0",
  calendarLeftPaddingMonthrange: "0",
  calendarLeftPaddingQuarterrange: "0",
  calendarLeftPaddingYearrange: "0",
  calendarRightPaddingDate: "6px 12px 4px 12px",
  calendarRightPaddingDatetime: "4px 12px",
  calendarRightPaddingDaterange: "6px 12px 4px 12px",
  calendarRightPaddingDatetimerange: "4px 12px",
  calendarRightPaddingMonth: "0",
  calendarRightPaddingYear: "0",
  calendarRightPaddingQuarter: "0",
  calendarRightPaddingMonthrange: "0",
  calendarRightPaddingQuarterrange: "0",
  calendarRightPaddingYearrange: "0"
};
(function(a) {
  var t = be && be.__importDefault || function(h) {
    return h && h.__esModule ? h : { default: h };
  };
  Object.defineProperty(a, "__esModule", { value: !0 }), a.self = void 0;
  const e = za, r = br, n = pr, o = Tr, i = Rr, u = wr, l = t(_i), s = yr, d = (h) => {
    const { hoverColor: v, fontSize: b, textColor2: O, textColorDisabled: D, popoverColor: m, primaryColor: p, borderRadiusSmall: y, iconColor: C, iconColorDisabled: _, textColor1: N, dividerColor: H, boxShadow2: k, borderRadius: x, fontWeightStrong: $ } = h;
    return Object.assign(Object.assign({}, l.default), {
      itemFontSize: b,
      calendarDaysFontSize: b,
      calendarTitleFontSize: b,
      itemTextColor: O,
      itemTextColorDisabled: D,
      itemTextColorActive: m,
      itemTextColorCurrent: p,
      itemColorIncluded: (0, e.changeColor)(p, { alpha: 0.1 }),
      itemColorHover: v,
      itemColorDisabled: v,
      itemColorActive: p,
      itemBorderRadius: y,
      panelColor: m,
      panelTextColor: O,
      arrowColor: C,
      calendarTitleTextColor: N,
      calendarTitleColorHover: v,
      calendarDaysTextColor: O,
      panelHeaderDividerColor: H,
      calendarDaysDividerColor: H,
      calendarDividerColor: H,
      panelActionDividerColor: H,
      panelBoxShadow: k,
      panelBorderRadius: x,
      calendarTitleFontWeight: $,
      scrollItemBorderRadius: x,
      iconColor: C,
      iconColorDisabled: _
    });
  };
  a.self = d;
  const c = (0, s.createTheme)({
    name: "DatePicker",
    common: n.commonLight,
    peers: {
      Input: r.inputLight,
      Button: o.buttonLight,
      TimePicker: i.timePickerLight,
      Scrollbar: u.scrollbarLight
    },
    self: a.self
  });
  a.default = c;
})(Ti);
Object.defineProperty(yi, "__esModule", { value: !0 });
const zr = za, ov = br, lv = pr, uv = Tr, sv = Rr, dv = wr, cv = Ti, fv = {
  name: "DatePicker",
  common: lv.commonDark,
  peers: {
    Input: ov.inputDark,
    Button: uv.buttonDark,
    TimePicker: sv.timePickerDark,
    Scrollbar: dv.scrollbarDark
  },
  self(a) {
    const { popoverColor: t, hoverColor: e, primaryColor: r } = a, n = (0, cv.self)(a);
    return n.itemColorDisabled = (0, zr.composite)(t, e), n.itemColorIncluded = (0, zr.changeColor)(r, { alpha: 0.15 }), n.itemColorHover = (0, zr.composite)(t, e), n;
  }
};
yi.default = fv;
(function(a) {
  var t = be && be.__importDefault || function(n) {
    return n && n.__esModule ? n : { default: n };
  };
  Object.defineProperty(a, "__esModule", { value: !0 }), a.datePickerLight = a.datePickerDark = void 0;
  var e = yi;
  Object.defineProperty(a, "datePickerDark", { enumerable: !0, get: function() {
    return t(e).default;
  } });
  var r = Ti;
  Object.defineProperty(a, "datePickerLight", { enumerable: !0, get: function() {
    return t(r).default;
  } });
})(pl);
var Ee = {}, vt = {};
Object.defineProperty(vt, "__esModule", { value: !0 });
vt.MONTH_ITEM_HEIGHT = vt.START_YEAR = void 0;
vt.START_YEAR = 1901;
vt.MONTH_ITEM_HEIGHT = 40;
Object.defineProperty(Ee, "__esModule", { value: !0 });
Ee.pluckValueFromRange = Ee.getDefaultTime = Ee.getDerivedTimeFromKeyboardEvent = Ee.strictParse = Ee.quarterArray = Ee.yearArray = Ee.monthArray = Ee.dateArray = void 0;
const X = Kt, vv = vt;
function hv(a, t) {
  const e = (0, X.getTime)(Date.now());
  if (typeof a != "number")
    return e;
  switch (t.key) {
    case "ArrowUp":
      return (0, X.getTime)((0, X.addDays)(a, -7));
    case "ArrowDown":
      return (0, X.getTime)((0, X.addDays)(a, 7));
    case "ArrowRight":
      return (0, X.getTime)((0, X.addDays)(a, 1));
    case "ArrowLeft":
      return (0, X.getTime)((0, X.addDays)(a, -1));
  }
  return e;
}
Ee.getDerivedTimeFromKeyboardEvent = hv;
const mv = {
  date: X.isSameDay,
  month: X.isSameMonth,
  year: X.isSameYear,
  quarter: X.isSameQuarter
};
function _t(a, t, e) {
  const r = mv[e];
  return Array.isArray(a) ? a.some((n) => r(n, t)) : r(a, t);
}
function Br(a, t, e, r) {
  let n = !1, o = !1, i = !1;
  Array.isArray(e) && (e[0] < a && a < e[1] && (n = !0), _t(e[0], a, "date") && (o = !0), _t(e[1], a, "date") && (i = !0));
  const u = e !== null && (Array.isArray(e) ? _t(e[0], a, "date") || _t(e[1], a, "date") : _t(e, a, "date"));
  return {
    type: "date",
    dateObject: {
      date: (0, X.getDate)(a),
      month: (0, X.getMonth)(a),
      year: (0, X.getYear)(a)
    },
    inCurrentMonth: (0, X.isSameMonth)(a, t),
    isCurrentDate: _t(r, a, "date"),
    inSpan: n,
    startOfSpan: o,
    endOfSpan: i,
    selected: u,
    ts: (0, X.getTime)(a)
  };
}
function gv(a, t, e) {
  return {
    type: "month",
    dateObject: {
      month: (0, X.getMonth)(a),
      year: (0, X.getYear)(a)
    },
    isCurrent: (0, X.isSameMonth)(e, a),
    selected: t !== null && _t(t, a, "month"),
    ts: (0, X.getTime)(a)
  };
}
function pv(a, t, e) {
  return {
    type: "year",
    dateObject: {
      year: (0, X.getYear)(a)
    },
    isCurrent: (0, X.isSameYear)(e, a),
    selected: t !== null && _t(t, a, "year"),
    ts: (0, X.getTime)(a)
  };
}
function yv(a, t, e) {
  return {
    type: "quarter",
    dateObject: {
      quarter: (0, X.getQuarter)(a),
      year: (0, X.getYear)(a)
    },
    isCurrent: (0, X.isSameQuarter)(e, a),
    selected: t !== null && _t(t, a, "quarter"),
    ts: (0, X.getTime)(a)
  };
}
function wv(a, t, e, r, n = !1) {
  const o = (0, X.getMonth)(a);
  let i = (0, X.getTime)((0, X.startOfMonth)(a)), u = (0, X.getTime)((0, X.addDays)(i, -1));
  const l = [];
  let s = !n;
  for (; (0, X.getDay)(u) !== r || s; )
    l.unshift(Br(u, a, t, e)), u = (0, X.getTime)((0, X.addDays)(u, -1)), s = !1;
  for (; (0, X.getMonth)(i) === o; )
    l.push(Br(i, a, t, e)), i = (0, X.getTime)((0, X.addDays)(i, 1));
  const d = n ? l.length <= 28 ? 28 : l.length <= 35 ? 35 : 42 : 42;
  for (; l.length < d; )
    l.push(Br(i, a, t, e)), i = (0, X.getTime)((0, X.addDays)(i, 1));
  return l;
}
Ee.dateArray = wv;
function bv(a, t, e) {
  const r = [], n = (0, X.startOfYear)(a);
  for (let o = 0; o < 12; o++)
    r.push(gv((0, X.getTime)((0, X.addMonths)(n, o)), t, e));
  return r;
}
Ee.monthArray = bv;
function Dv(a, t, e) {
  const r = [], n = (0, X.startOfYear)(a);
  for (let o = 0; o < 4; o++)
    r.push(yv((0, X.getTime)((0, X.addQuarters)(n, o)), t, e));
  return r;
}
Ee.quarterArray = Dv;
function Tv(a, t) {
  const e = [], r = new Date(vv.START_YEAR, 0, 1);
  for (let n = 0; n < 200; n++)
    e.push(pv((0, X.getTime)((0, X.addYears)(r, n)), a, t));
  return e;
}
Ee.yearArray = Tv;
function _v(a, t, e, r) {
  const n = (0, X.parse)(a, t, e, r);
  return (0, X.isValid)(n) ? (0, X.format)(n, t, r) === a ? n : /* @__PURE__ */ new Date(NaN) : n;
}
Ee.strictParse = _v;
function Cv(a) {
  if (a === void 0)
    return;
  if (typeof a == "number")
    return a;
  const [t, e, r] = a.split(":");
  return {
    hours: Number(t),
    minutes: Number(e),
    seconds: Number(r)
  };
}
Ee.getDefaultTime = Cv;
function Mv(a, t) {
  return Array.isArray(a) ? a[t === "start" ? 0 : 1] : null;
}
Ee.pluckValueFromRange = Mv;
var wa = {};
Object.defineProperty(wa, "__esModule", { value: !0 });
wa.dualCalendarValidation = wa.uniCalendarValidation = void 0;
const Re = Ke, fa = Kt;
function Ov(a, t) {
  const e = (0, Re.computed)(() => {
    const { isTimeDisabled: d } = a, { value: c } = t;
    if (!(c === null || Array.isArray(c)))
      return d == null ? void 0 : d(c);
  }), r = (0, Re.computed)(() => {
    var d;
    return (d = e.value) === null || d === void 0 ? void 0 : d.isHourDisabled;
  }), n = (0, Re.computed)(() => {
    var d;
    return (d = e.value) === null || d === void 0 ? void 0 : d.isMinuteDisabled;
  }), o = (0, Re.computed)(() => {
    var d;
    return (d = e.value) === null || d === void 0 ? void 0 : d.isSecondDisabled;
  }), i = (0, Re.computed)(() => {
    const { type: d, isDateDisabled: c } = a, { value: h } = t;
    return h === null || Array.isArray(h) || !["date", "datetime"].includes(d) || !c ? !1 : c(h);
  }), u = (0, Re.computed)(() => {
    const { type: d } = a, { value: c } = t;
    if (c === null || d === "datetime" || Array.isArray(c))
      return !1;
    const h = new Date(c), v = h.getHours(), b = h.getMinutes(), O = h.getMinutes();
    return (r.value ? r.value(v) : !1) || (n.value ? n.value(b, v) : !1) || (o.value ? o.value(O, b, v) : !1);
  }), l = (0, Re.computed)(() => i.value || u.value);
  return {
    // date & datetime
    isValueInvalidRef: (0, Re.computed)(() => {
      const { type: d } = a;
      return d === "date" ? i.value : d === "datetime" ? l.value : !1;
    }),
    isDateInvalidRef: i,
    // datetime only
    isTimeInvalidRef: u,
    isDateTimeInvalidRef: l,
    isHourDisabledRef: r,
    isMinuteDisabledRef: n,
    isSecondDisabledRef: o
  };
}
wa.uniCalendarValidation = Ov;
function kv(a, t) {
  const e = (0, Re.computed)(() => {
    const { isTimeDisabled: c } = a, { value: h } = t;
    return !Array.isArray(h) || !c ? [void 0, void 0] : [
      c == null ? void 0 : c(h[0], "start", h),
      c == null ? void 0 : c(h[1], "end", h)
    ];
  }), r = {
    isStartHourDisabledRef: (0, Re.computed)(() => {
      var c;
      return (c = e.value[0]) === null || c === void 0 ? void 0 : c.isHourDisabled;
    }),
    isEndHourDisabledRef: (0, Re.computed)(() => {
      var c;
      return (c = e.value[1]) === null || c === void 0 ? void 0 : c.isHourDisabled;
    }),
    isStartMinuteDisabledRef: (0, Re.computed)(() => {
      var c;
      return (c = e.value[0]) === null || c === void 0 ? void 0 : c.isMinuteDisabled;
    }),
    isEndMinuteDisabledRef: (0, Re.computed)(() => {
      var c;
      return (c = e.value[1]) === null || c === void 0 ? void 0 : c.isMinuteDisabled;
    }),
    isStartSecondDisabledRef: (0, Re.computed)(() => {
      var c;
      return (c = e.value[0]) === null || c === void 0 ? void 0 : c.isSecondDisabled;
    }),
    isEndSecondDisabledRef: (0, Re.computed)(() => {
      var c;
      return (c = e.value[1]) === null || c === void 0 ? void 0 : c.isSecondDisabled;
    })
  }, n = (0, Re.computed)(() => {
    const { type: c, isDateDisabled: h } = a, { value: v } = t;
    return v === null || !Array.isArray(v) || !["daterange", "datetimerange"].includes(c) || !h ? !1 : h(v[0], "start", v);
  }), o = (0, Re.computed)(() => {
    const { type: c, isDateDisabled: h } = a, { value: v } = t;
    return v === null || !Array.isArray(v) || !["daterange", "datetimerange"].includes(c) || !h ? !1 : h(v[1], "end", v);
  }), i = (0, Re.computed)(() => {
    const { type: c } = a, { value: h } = t;
    if (h === null || !Array.isArray(h) || c !== "datetimerange")
      return !1;
    const v = (0, fa.getHours)(h[0]), b = (0, fa.getMinutes)(h[0]), O = (0, fa.getSeconds)(h[0]), { isStartHourDisabledRef: D, isStartMinuteDisabledRef: m, isStartSecondDisabledRef: p } = r;
    return (D.value ? D.value(v) : !1) || (m.value ? m.value(b, v) : !1) || (p.value ? p.value(O, b, v) : !1);
  }), u = (0, Re.computed)(() => {
    const { type: c } = a, { value: h } = t;
    if (h === null || !Array.isArray(h) || c !== "datetimerange")
      return !1;
    const v = (0, fa.getHours)(h[1]), b = (0, fa.getMinutes)(h[1]), O = (0, fa.getSeconds)(h[1]), { isEndHourDisabledRef: D, isEndMinuteDisabledRef: m, isEndSecondDisabledRef: p } = r;
    return (D.value ? D.value(v) : !1) || (m.value ? m.value(b, v) : !1) || (p.value ? p.value(O, b, v) : !1);
  }), l = (0, Re.computed)(() => n.value || i.value), s = (0, Re.computed)(() => o.value || u.value), d = (0, Re.computed)(() => l.value || s.value);
  return Object.assign(Object.assign({}, r), {
    isStartDateInvalidRef: n,
    isEndDateInvalidRef: o,
    isStartTimeInvalidRef: i,
    isEndTimeInvalidRef: u,
    isStartValueInvalidRef: l,
    isEndValueInvalidRef: s,
    isRangeInvalidRef: d
  });
}
wa.dualCalendarValidation = kv;
var Zt = {};
Object.defineProperty(Zt, "__esModule", { value: !0 });
Zt.datePickerInjectionKey = void 0;
const xv = ht;
Zt.datePickerInjectionKey = (0, xv.createInjectionKey)("n-date-picker");
var Ci = {}, Mi = {}, yl = {}, rn = { exports: {} }, nn = { exports: {} }, wl = { exports: {} };
(function(a) {
  function t(e) {
    return e && e.__esModule ? e : {
      default: e
    };
  }
  a.exports = t, a.exports.__esModule = !0, a.exports.default = a.exports;
})(wl);
var Pe = wl.exports, on = { exports: {} };
(function(a, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = e;
  function e(r, n) {
    if (r == null)
      throw new TypeError("assign requires that input parameter not be null or undefined");
    for (var o in n)
      Object.prototype.hasOwnProperty.call(n, o) && (r[o] = n[o]);
    return r;
  }
  a.exports = t.default;
})(on, on.exports);
var Sv = on.exports;
(function(a, t) {
  var e = Pe.default;
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = n;
  var r = e(Sv);
  function n(o) {
    return (0, r.default)({}, o);
  }
  a.exports = t.default;
})(nn, nn.exports);
var Pv = nn.exports, ln = { exports: {} }, un = { exports: {} }, sn = { exports: {} }, dn = { exports: {} }, bl = { exports: {} };
(function(a) {
  function t(e) {
    "@babel/helpers - typeof";
    return a.exports = t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
      return typeof r;
    } : function(r) {
      return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
    }, a.exports.__esModule = !0, a.exports.default = a.exports, t(e);
  }
  a.exports = t, a.exports.__esModule = !0, a.exports.default = a.exports;
})(bl);
var Dl = bl.exports, cn = { exports: {} };
(function(a, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = e;
  function e(r, n) {
    if (n.length < r)
      throw new TypeError(r + " argument" + (r > 1 ? "s" : "") + " required, but only " + n.length + " present");
  }
  a.exports = t.default;
})(cn, cn.exports);
var Ze = cn.exports;
(function(a, t) {
  var e = Pe.default;
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = o;
  var r = e(Dl), n = e(Ze);
  function o(i) {
    return (0, n.default)(1, arguments), i instanceof Date || (0, r.default)(i) === "object" && Object.prototype.toString.call(i) === "[object Date]";
  }
  a.exports = t.default;
})(dn, dn.exports);
var $v = dn.exports, fn = { exports: {} };
(function(a, t) {
  var e = Pe.default;
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = o;
  var r = e(Dl), n = e(Ze);
  function o(i) {
    (0, n.default)(1, arguments);
    var u = Object.prototype.toString.call(i);
    return i instanceof Date || (0, r.default)(i) === "object" && u === "[object Date]" ? new Date(i.getTime()) : typeof i == "number" || u === "[object Number]" ? new Date(i) : ((typeof i == "string" || u === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), /* @__PURE__ */ new Date(NaN));
  }
  a.exports = t.default;
})(fn, fn.exports);
var mt = fn.exports;
(function(a, t) {
  var e = Pe.default;
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = i;
  var r = e($v), n = e(mt), o = e(Ze);
  function i(u) {
    if ((0, o.default)(1, arguments), !(0, r.default)(u) && typeof u != "number")
      return !1;
    var l = (0, n.default)(u);
    return !isNaN(Number(l));
  }
  a.exports = t.default;
})(sn, sn.exports);
var Rv = sn.exports, vn = { exports: {} }, hn = { exports: {} }, mn = { exports: {} };
(function(a, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = e;
  function e(r) {
    if (r === null || r === !0 || r === !1)
      return NaN;
    var n = Number(r);
    return isNaN(n) ? n : n < 0 ? Math.ceil(n) : Math.floor(n);
  }
  a.exports = t.default;
})(mn, mn.exports);
var Jt = mn.exports;
(function(a, t) {
  var e = Pe.default;
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = i;
  var r = e(Jt), n = e(mt), o = e(Ze);
  function i(u, l) {
    (0, o.default)(2, arguments);
    var s = (0, n.default)(u).getTime(), d = (0, r.default)(l);
    return new Date(s + d);
  }
  a.exports = t.default;
})(hn, hn.exports);
var Iv = hn.exports;
(function(a, t) {
  var e = Pe.default;
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = i;
  var r = e(Iv), n = e(Ze), o = e(Jt);
  function i(u, l) {
    (0, n.default)(2, arguments);
    var s = (0, o.default)(l);
    return (0, r.default)(u, -s);
  }
  a.exports = t.default;
})(vn, vn.exports);
var Nv = vn.exports, gn = { exports: {} }, pn = { exports: {} };
(function(a, t) {
  var e = Pe.default;
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = i;
  var r = e(mt), n = e(Ze), o = 864e5;
  function i(u) {
    (0, n.default)(1, arguments);
    var l = (0, r.default)(u), s = l.getTime();
    l.setUTCMonth(0, 1), l.setUTCHours(0, 0, 0, 0);
    var d = l.getTime(), c = s - d;
    return Math.floor(c / o) + 1;
  }
  a.exports = t.default;
})(pn, pn.exports);
var Ev = pn.exports, yn = { exports: {} }, wn = { exports: {} };
(function(a, t) {
  var e = Pe.default;
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = o;
  var r = e(mt), n = e(Ze);
  function o(i) {
    (0, n.default)(1, arguments);
    var u = 1, l = (0, r.default)(i), s = l.getUTCDay(), d = (s < u ? 7 : 0) + s - u;
    return l.setUTCDate(l.getUTCDate() - d), l.setUTCHours(0, 0, 0, 0), l;
  }
  a.exports = t.default;
})(wn, wn.exports);
var Oi = wn.exports, bn = { exports: {} }, Dn = { exports: {} };
(function(a, t) {
  var e = Pe.default;
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = i;
  var r = e(mt), n = e(Ze), o = e(Oi);
  function i(u) {
    (0, n.default)(1, arguments);
    var l = (0, r.default)(u), s = l.getUTCFullYear(), d = /* @__PURE__ */ new Date(0);
    d.setUTCFullYear(s + 1, 0, 4), d.setUTCHours(0, 0, 0, 0);
    var c = (0, o.default)(d), h = /* @__PURE__ */ new Date(0);
    h.setUTCFullYear(s, 0, 4), h.setUTCHours(0, 0, 0, 0);
    var v = (0, o.default)(h);
    return l.getTime() >= c.getTime() ? s + 1 : l.getTime() >= v.getTime() ? s : s - 1;
  }
  a.exports = t.default;
})(Dn, Dn.exports);
var Tl = Dn.exports;
(function(a, t) {
  var e = Pe.default;
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = i;
  var r = e(Tl), n = e(Oi), o = e(Ze);
  function i(u) {
    (0, o.default)(1, arguments);
    var l = (0, r.default)(u), s = /* @__PURE__ */ new Date(0);
    s.setUTCFullYear(l, 0, 4), s.setUTCHours(0, 0, 0, 0);
    var d = (0, n.default)(s);
    return d;
  }
  a.exports = t.default;
})(bn, bn.exports);
var Yv = bn.exports;
(function(a, t) {
  var e = Pe.default;
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = l;
  var r = e(mt), n = e(Oi), o = e(Yv), i = e(Ze), u = 6048e5;
  function l(s) {
    (0, i.default)(1, arguments);
    var d = (0, r.default)(s), c = (0, n.default)(d).getTime() - (0, o.default)(d).getTime();
    return Math.round(c / u) + 1;
  }
  a.exports = t.default;
})(yn, yn.exports);
var Fv = yn.exports, Tn = { exports: {} }, _n = { exports: {} }, ea = {};
Object.defineProperty(ea, "__esModule", {
  value: !0
});
ea.getDefaultOptions = Av;
ea.setDefaultOptions = Uv;
var _l = {};
function Av() {
  return _l;
}
function Uv(a) {
  _l = a;
}
(function(a, t) {
  var e = Pe.default;
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = u;
  var r = e(mt), n = e(Ze), o = e(Jt), i = ea;
  function u(l, s) {
    var d, c, h, v, b, O, D, m;
    (0, n.default)(1, arguments);
    var p = (0, i.getDefaultOptions)(), y = (0, o.default)((d = (c = (h = (v = s == null ? void 0 : s.weekStartsOn) !== null && v !== void 0 ? v : s == null || (b = s.locale) === null || b === void 0 || (O = b.options) === null || O === void 0 ? void 0 : O.weekStartsOn) !== null && h !== void 0 ? h : p.weekStartsOn) !== null && c !== void 0 ? c : (D = p.locale) === null || D === void 0 || (m = D.options) === null || m === void 0 ? void 0 : m.weekStartsOn) !== null && d !== void 0 ? d : 0);
    if (!(y >= 0 && y <= 6))
      throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    var C = (0, r.default)(l), _ = C.getUTCDay(), N = (_ < y ? 7 : 0) + _ - y;
    return C.setUTCDate(C.getUTCDate() - N), C.setUTCHours(0, 0, 0, 0), C;
  }
  a.exports = t.default;
})(_n, _n.exports);
var ki = _n.exports, Cn = { exports: {} }, Mn = { exports: {} };
(function(a, t) {
  var e = Pe.default;
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = l;
  var r = e(mt), n = e(Ze), o = e(ki), i = e(Jt), u = ea;
  function l(s, d) {
    var c, h, v, b, O, D, m, p;
    (0, n.default)(1, arguments);
    var y = (0, r.default)(s), C = y.getUTCFullYear(), _ = (0, u.getDefaultOptions)(), N = (0, i.default)((c = (h = (v = (b = d == null ? void 0 : d.firstWeekContainsDate) !== null && b !== void 0 ? b : d == null || (O = d.locale) === null || O === void 0 || (D = O.options) === null || D === void 0 ? void 0 : D.firstWeekContainsDate) !== null && v !== void 0 ? v : _.firstWeekContainsDate) !== null && h !== void 0 ? h : (m = _.locale) === null || m === void 0 || (p = m.options) === null || p === void 0 ? void 0 : p.firstWeekContainsDate) !== null && c !== void 0 ? c : 1);
    if (!(N >= 1 && N <= 7))
      throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    var H = /* @__PURE__ */ new Date(0);
    H.setUTCFullYear(C + 1, 0, N), H.setUTCHours(0, 0, 0, 0);
    var k = (0, o.default)(H, d), x = /* @__PURE__ */ new Date(0);
    x.setUTCFullYear(C, 0, N), x.setUTCHours(0, 0, 0, 0);
    var $ = (0, o.default)(x, d);
    return y.getTime() >= k.getTime() ? C + 1 : y.getTime() >= $.getTime() ? C : C - 1;
  }
  a.exports = t.default;
})(Mn, Mn.exports);
var Cl = Mn.exports;
(function(a, t) {
  var e = Pe.default;
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = l;
  var r = e(Cl), n = e(Ze), o = e(ki), i = e(Jt), u = ea;
  function l(s, d) {
    var c, h, v, b, O, D, m, p;
    (0, n.default)(1, arguments);
    var y = (0, u.getDefaultOptions)(), C = (0, i.default)((c = (h = (v = (b = d == null ? void 0 : d.firstWeekContainsDate) !== null && b !== void 0 ? b : d == null || (O = d.locale) === null || O === void 0 || (D = O.options) === null || D === void 0 ? void 0 : D.firstWeekContainsDate) !== null && v !== void 0 ? v : y.firstWeekContainsDate) !== null && h !== void 0 ? h : (m = y.locale) === null || m === void 0 || (p = m.options) === null || p === void 0 ? void 0 : p.firstWeekContainsDate) !== null && c !== void 0 ? c : 1), _ = (0, r.default)(s, d), N = /* @__PURE__ */ new Date(0);
    N.setUTCFullYear(_, 0, C), N.setUTCHours(0, 0, 0, 0);
    var H = (0, o.default)(N, d);
    return H;
  }
  a.exports = t.default;
})(Cn, Cn.exports);
var Hv = Cn.exports;
(function(a, t) {
  var e = Pe.default;
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = l;
  var r = e(mt), n = e(ki), o = e(Hv), i = e(Ze), u = 6048e5;
  function l(s, d) {
    (0, i.default)(1, arguments);
    var c = (0, r.default)(s), h = (0, n.default)(c, d).getTime() - (0, o.default)(c, d).getTime();
    return Math.round(h / u) + 1;
  }
  a.exports = t.default;
})(Tn, Tn.exports);
var Vv = Tn.exports, On = { exports: {} };
(function(a, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = e;
  function e(r, n) {
    for (var o = r < 0 ? "-" : "", i = Math.abs(r).toString(); i.length < n; )
      i = "0" + i;
    return o + i;
  }
  a.exports = t.default;
})(On, On.exports);
var Ml = On.exports, kn = { exports: {} };
(function(a, t) {
  var e = Pe.default;
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = void 0;
  var r = e(Ml), n = {
    // Year
    y: function(u, l) {
      var s = u.getUTCFullYear(), d = s > 0 ? s : 1 - s;
      return (0, r.default)(l === "yy" ? d % 100 : d, l.length);
    },
    // Month
    M: function(u, l) {
      var s = u.getUTCMonth();
      return l === "M" ? String(s + 1) : (0, r.default)(s + 1, 2);
    },
    // Day of the month
    d: function(u, l) {
      return (0, r.default)(u.getUTCDate(), l.length);
    },
    // AM or PM
    a: function(u, l) {
      var s = u.getUTCHours() / 12 >= 1 ? "pm" : "am";
      switch (l) {
        case "a":
        case "aa":
          return s.toUpperCase();
        case "aaa":
          return s;
        case "aaaaa":
          return s[0];
        case "aaaa":
        default:
          return s === "am" ? "a.m." : "p.m.";
      }
    },
    // Hour [1-12]
    h: function(u, l) {
      return (0, r.default)(u.getUTCHours() % 12 || 12, l.length);
    },
    // Hour [0-23]
    H: function(u, l) {
      return (0, r.default)(u.getUTCHours(), l.length);
    },
    // Minute
    m: function(u, l) {
      return (0, r.default)(u.getUTCMinutes(), l.length);
    },
    // Second
    s: function(u, l) {
      return (0, r.default)(u.getUTCSeconds(), l.length);
    },
    // Fraction of second
    S: function(u, l) {
      var s = l.length, d = u.getUTCMilliseconds(), c = Math.floor(d * Math.pow(10, s - 3));
      return (0, r.default)(c, l.length);
    }
  }, o = n;
  t.default = o, a.exports = t.default;
})(kn, kn.exports);
var Wv = kn.exports;
(function(a, t) {
  var e = Pe.default;
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = void 0;
  var r = e(Ev), n = e(Fv), o = e(Tl), i = e(Vv), u = e(Cl), l = e(Ml), s = e(Wv), d = {
    am: "am",
    pm: "pm",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }, c = {
    // Era
    G: function(m, p, y) {
      var C = m.getUTCFullYear() > 0 ? 1 : 0;
      switch (p) {
        case "G":
        case "GG":
        case "GGG":
          return y.era(C, {
            width: "abbreviated"
          });
        case "GGGGG":
          return y.era(C, {
            width: "narrow"
          });
        case "GGGG":
        default:
          return y.era(C, {
            width: "wide"
          });
      }
    },
    // Year
    y: function(m, p, y) {
      if (p === "yo") {
        var C = m.getUTCFullYear(), _ = C > 0 ? C : 1 - C;
        return y.ordinalNumber(_, {
          unit: "year"
        });
      }
      return s.default.y(m, p);
    },
    // Local week-numbering year
    Y: function(m, p, y, C) {
      var _ = (0, u.default)(m, C), N = _ > 0 ? _ : 1 - _;
      if (p === "YY") {
        var H = N % 100;
        return (0, l.default)(H, 2);
      }
      return p === "Yo" ? y.ordinalNumber(N, {
        unit: "year"
      }) : (0, l.default)(N, p.length);
    },
    // ISO week-numbering year
    R: function(m, p) {
      var y = (0, o.default)(m);
      return (0, l.default)(y, p.length);
    },
    // Extended year. This is a single number designating the year of this calendar system.
    // The main difference between `y` and `u` localizers are B.C. years:
    // | Year | `y` | `u` |
    // |------|-----|-----|
    // | AC 1 |   1 |   1 |
    // | BC 1 |   1 |   0 |
    // | BC 2 |   2 |  -1 |
    // Also `yy` always returns the last two digits of a year,
    // while `uu` pads single digit years to 2 characters and returns other years unchanged.
    u: function(m, p) {
      var y = m.getUTCFullYear();
      return (0, l.default)(y, p.length);
    },
    // Quarter
    Q: function(m, p, y) {
      var C = Math.ceil((m.getUTCMonth() + 1) / 3);
      switch (p) {
        case "Q":
          return String(C);
        case "QQ":
          return (0, l.default)(C, 2);
        case "Qo":
          return y.ordinalNumber(C, {
            unit: "quarter"
          });
        case "QQQ":
          return y.quarter(C, {
            width: "abbreviated",
            context: "formatting"
          });
        case "QQQQQ":
          return y.quarter(C, {
            width: "narrow",
            context: "formatting"
          });
        case "QQQQ":
        default:
          return y.quarter(C, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    // Stand-alone quarter
    q: function(m, p, y) {
      var C = Math.ceil((m.getUTCMonth() + 1) / 3);
      switch (p) {
        case "q":
          return String(C);
        case "qq":
          return (0, l.default)(C, 2);
        case "qo":
          return y.ordinalNumber(C, {
            unit: "quarter"
          });
        case "qqq":
          return y.quarter(C, {
            width: "abbreviated",
            context: "standalone"
          });
        case "qqqqq":
          return y.quarter(C, {
            width: "narrow",
            context: "standalone"
          });
        case "qqqq":
        default:
          return y.quarter(C, {
            width: "wide",
            context: "standalone"
          });
      }
    },
    // Month
    M: function(m, p, y) {
      var C = m.getUTCMonth();
      switch (p) {
        case "M":
        case "MM":
          return s.default.M(m, p);
        case "Mo":
          return y.ordinalNumber(C + 1, {
            unit: "month"
          });
        case "MMM":
          return y.month(C, {
            width: "abbreviated",
            context: "formatting"
          });
        case "MMMMM":
          return y.month(C, {
            width: "narrow",
            context: "formatting"
          });
        case "MMMM":
        default:
          return y.month(C, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    // Stand-alone month
    L: function(m, p, y) {
      var C = m.getUTCMonth();
      switch (p) {
        case "L":
          return String(C + 1);
        case "LL":
          return (0, l.default)(C + 1, 2);
        case "Lo":
          return y.ordinalNumber(C + 1, {
            unit: "month"
          });
        case "LLL":
          return y.month(C, {
            width: "abbreviated",
            context: "standalone"
          });
        case "LLLLL":
          return y.month(C, {
            width: "narrow",
            context: "standalone"
          });
        case "LLLL":
        default:
          return y.month(C, {
            width: "wide",
            context: "standalone"
          });
      }
    },
    // Local week of year
    w: function(m, p, y, C) {
      var _ = (0, i.default)(m, C);
      return p === "wo" ? y.ordinalNumber(_, {
        unit: "week"
      }) : (0, l.default)(_, p.length);
    },
    // ISO week of year
    I: function(m, p, y) {
      var C = (0, n.default)(m);
      return p === "Io" ? y.ordinalNumber(C, {
        unit: "week"
      }) : (0, l.default)(C, p.length);
    },
    // Day of the month
    d: function(m, p, y) {
      return p === "do" ? y.ordinalNumber(m.getUTCDate(), {
        unit: "date"
      }) : s.default.d(m, p);
    },
    // Day of year
    D: function(m, p, y) {
      var C = (0, r.default)(m);
      return p === "Do" ? y.ordinalNumber(C, {
        unit: "dayOfYear"
      }) : (0, l.default)(C, p.length);
    },
    // Day of week
    E: function(m, p, y) {
      var C = m.getUTCDay();
      switch (p) {
        case "E":
        case "EE":
        case "EEE":
          return y.day(C, {
            width: "abbreviated",
            context: "formatting"
          });
        case "EEEEE":
          return y.day(C, {
            width: "narrow",
            context: "formatting"
          });
        case "EEEEEE":
          return y.day(C, {
            width: "short",
            context: "formatting"
          });
        case "EEEE":
        default:
          return y.day(C, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    // Local day of week
    e: function(m, p, y, C) {
      var _ = m.getUTCDay(), N = (_ - C.weekStartsOn + 8) % 7 || 7;
      switch (p) {
        case "e":
          return String(N);
        case "ee":
          return (0, l.default)(N, 2);
        case "eo":
          return y.ordinalNumber(N, {
            unit: "day"
          });
        case "eee":
          return y.day(_, {
            width: "abbreviated",
            context: "formatting"
          });
        case "eeeee":
          return y.day(_, {
            width: "narrow",
            context: "formatting"
          });
        case "eeeeee":
          return y.day(_, {
            width: "short",
            context: "formatting"
          });
        case "eeee":
        default:
          return y.day(_, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    // Stand-alone local day of week
    c: function(m, p, y, C) {
      var _ = m.getUTCDay(), N = (_ - C.weekStartsOn + 8) % 7 || 7;
      switch (p) {
        case "c":
          return String(N);
        case "cc":
          return (0, l.default)(N, p.length);
        case "co":
          return y.ordinalNumber(N, {
            unit: "day"
          });
        case "ccc":
          return y.day(_, {
            width: "abbreviated",
            context: "standalone"
          });
        case "ccccc":
          return y.day(_, {
            width: "narrow",
            context: "standalone"
          });
        case "cccccc":
          return y.day(_, {
            width: "short",
            context: "standalone"
          });
        case "cccc":
        default:
          return y.day(_, {
            width: "wide",
            context: "standalone"
          });
      }
    },
    // ISO day of week
    i: function(m, p, y) {
      var C = m.getUTCDay(), _ = C === 0 ? 7 : C;
      switch (p) {
        case "i":
          return String(_);
        case "ii":
          return (0, l.default)(_, p.length);
        case "io":
          return y.ordinalNumber(_, {
            unit: "day"
          });
        case "iii":
          return y.day(C, {
            width: "abbreviated",
            context: "formatting"
          });
        case "iiiii":
          return y.day(C, {
            width: "narrow",
            context: "formatting"
          });
        case "iiiiii":
          return y.day(C, {
            width: "short",
            context: "formatting"
          });
        case "iiii":
        default:
          return y.day(C, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    // AM or PM
    a: function(m, p, y) {
      var C = m.getUTCHours(), _ = C / 12 >= 1 ? "pm" : "am";
      switch (p) {
        case "a":
        case "aa":
          return y.dayPeriod(_, {
            width: "abbreviated",
            context: "formatting"
          });
        case "aaa":
          return y.dayPeriod(_, {
            width: "abbreviated",
            context: "formatting"
          }).toLowerCase();
        case "aaaaa":
          return y.dayPeriod(_, {
            width: "narrow",
            context: "formatting"
          });
        case "aaaa":
        default:
          return y.dayPeriod(_, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    // AM, PM, midnight, noon
    b: function(m, p, y) {
      var C = m.getUTCHours(), _;
      switch (C === 12 ? _ = d.noon : C === 0 ? _ = d.midnight : _ = C / 12 >= 1 ? "pm" : "am", p) {
        case "b":
        case "bb":
          return y.dayPeriod(_, {
            width: "abbreviated",
            context: "formatting"
          });
        case "bbb":
          return y.dayPeriod(_, {
            width: "abbreviated",
            context: "formatting"
          }).toLowerCase();
        case "bbbbb":
          return y.dayPeriod(_, {
            width: "narrow",
            context: "formatting"
          });
        case "bbbb":
        default:
          return y.dayPeriod(_, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    // in the morning, in the afternoon, in the evening, at night
    B: function(m, p, y) {
      var C = m.getUTCHours(), _;
      switch (C >= 17 ? _ = d.evening : C >= 12 ? _ = d.afternoon : C >= 4 ? _ = d.morning : _ = d.night, p) {
        case "B":
        case "BB":
        case "BBB":
          return y.dayPeriod(_, {
            width: "abbreviated",
            context: "formatting"
          });
        case "BBBBB":
          return y.dayPeriod(_, {
            width: "narrow",
            context: "formatting"
          });
        case "BBBB":
        default:
          return y.dayPeriod(_, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    // Hour [1-12]
    h: function(m, p, y) {
      if (p === "ho") {
        var C = m.getUTCHours() % 12;
        return C === 0 && (C = 12), y.ordinalNumber(C, {
          unit: "hour"
        });
      }
      return s.default.h(m, p);
    },
    // Hour [0-23]
    H: function(m, p, y) {
      return p === "Ho" ? y.ordinalNumber(m.getUTCHours(), {
        unit: "hour"
      }) : s.default.H(m, p);
    },
    // Hour [0-11]
    K: function(m, p, y) {
      var C = m.getUTCHours() % 12;
      return p === "Ko" ? y.ordinalNumber(C, {
        unit: "hour"
      }) : (0, l.default)(C, p.length);
    },
    // Hour [1-24]
    k: function(m, p, y) {
      var C = m.getUTCHours();
      return C === 0 && (C = 24), p === "ko" ? y.ordinalNumber(C, {
        unit: "hour"
      }) : (0, l.default)(C, p.length);
    },
    // Minute
    m: function(m, p, y) {
      return p === "mo" ? y.ordinalNumber(m.getUTCMinutes(), {
        unit: "minute"
      }) : s.default.m(m, p);
    },
    // Second
    s: function(m, p, y) {
      return p === "so" ? y.ordinalNumber(m.getUTCSeconds(), {
        unit: "second"
      }) : s.default.s(m, p);
    },
    // Fraction of second
    S: function(m, p) {
      return s.default.S(m, p);
    },
    // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
    X: function(m, p, y, C) {
      var _ = C._originalDate || m, N = _.getTimezoneOffset();
      if (N === 0)
        return "Z";
      switch (p) {
        case "X":
          return v(N);
        case "XXXX":
        case "XX":
          return b(N);
        case "XXXXX":
        case "XXX":
        default:
          return b(N, ":");
      }
    },
    // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
    x: function(m, p, y, C) {
      var _ = C._originalDate || m, N = _.getTimezoneOffset();
      switch (p) {
        case "x":
          return v(N);
        case "xxxx":
        case "xx":
          return b(N);
        case "xxxxx":
        case "xxx":
        default:
          return b(N, ":");
      }
    },
    // Timezone (GMT)
    O: function(m, p, y, C) {
      var _ = C._originalDate || m, N = _.getTimezoneOffset();
      switch (p) {
        case "O":
        case "OO":
        case "OOO":
          return "GMT" + h(N, ":");
        case "OOOO":
        default:
          return "GMT" + b(N, ":");
      }
    },
    // Timezone (specific non-location)
    z: function(m, p, y, C) {
      var _ = C._originalDate || m, N = _.getTimezoneOffset();
      switch (p) {
        case "z":
        case "zz":
        case "zzz":
          return "GMT" + h(N, ":");
        case "zzzz":
        default:
          return "GMT" + b(N, ":");
      }
    },
    // Seconds timestamp
    t: function(m, p, y, C) {
      var _ = C._originalDate || m, N = Math.floor(_.getTime() / 1e3);
      return (0, l.default)(N, p.length);
    },
    // Milliseconds timestamp
    T: function(m, p, y, C) {
      var _ = C._originalDate || m, N = _.getTime();
      return (0, l.default)(N, p.length);
    }
  };
  function h(D, m) {
    var p = D > 0 ? "-" : "+", y = Math.abs(D), C = Math.floor(y / 60), _ = y % 60;
    if (_ === 0)
      return p + String(C);
    var N = m || "";
    return p + String(C) + N + (0, l.default)(_, 2);
  }
  function v(D, m) {
    if (D % 60 === 0) {
      var p = D > 0 ? "-" : "+";
      return p + (0, l.default)(Math.abs(D) / 60, 2);
    }
    return b(D, m);
  }
  function b(D, m) {
    var p = m || "", y = D > 0 ? "-" : "+", C = Math.abs(D), _ = (0, l.default)(Math.floor(C / 60), 2), N = (0, l.default)(C % 60, 2);
    return y + _ + p + N;
  }
  var O = c;
  t.default = O, a.exports = t.default;
})(gn, gn.exports);
var zv = gn.exports, xn = { exports: {} };
(function(a, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = void 0;
  var e = function(l, s) {
    switch (l) {
      case "P":
        return s.date({
          width: "short"
        });
      case "PP":
        return s.date({
          width: "medium"
        });
      case "PPP":
        return s.date({
          width: "long"
        });
      case "PPPP":
      default:
        return s.date({
          width: "full"
        });
    }
  }, r = function(l, s) {
    switch (l) {
      case "p":
        return s.time({
          width: "short"
        });
      case "pp":
        return s.time({
          width: "medium"
        });
      case "ppp":
        return s.time({
          width: "long"
        });
      case "pppp":
      default:
        return s.time({
          width: "full"
        });
    }
  }, n = function(l, s) {
    var d = l.match(/(P+)(p+)?/) || [], c = d[1], h = d[2];
    if (!h)
      return e(l, s);
    var v;
    switch (c) {
      case "P":
        v = s.dateTime({
          width: "short"
        });
        break;
      case "PP":
        v = s.dateTime({
          width: "medium"
        });
        break;
      case "PPP":
        v = s.dateTime({
          width: "long"
        });
        break;
      case "PPPP":
      default:
        v = s.dateTime({
          width: "full"
        });
        break;
    }
    return v.replace("{{date}}", e(c, s)).replace("{{time}}", r(h, s));
  }, o = {
    p: r,
    P: n
  }, i = o;
  t.default = i, a.exports = t.default;
})(xn, xn.exports);
var Bv = xn.exports, Sn = { exports: {} };
(function(a, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = e;
  function e(r) {
    var n = new Date(Date.UTC(r.getFullYear(), r.getMonth(), r.getDate(), r.getHours(), r.getMinutes(), r.getSeconds(), r.getMilliseconds()));
    return n.setUTCFullYear(r.getFullYear()), r.getTime() - n.getTime();
  }
  a.exports = t.default;
})(Sn, Sn.exports);
var Ol = Sn.exports, Ga = {};
Object.defineProperty(Ga, "__esModule", {
  value: !0
});
Ga.isProtectedDayOfYearToken = Lv;
Ga.isProtectedWeekYearToken = Qv;
Ga.throwProtectedError = Xv;
var jv = ["D", "DD"], qv = ["YY", "YYYY"];
function Lv(a) {
  return jv.indexOf(a) !== -1;
}
function Qv(a) {
  return qv.indexOf(a) !== -1;
}
function Xv(a, t, e) {
  if (a === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t, "`) for formatting years to the input `").concat(e, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (a === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(t, "`) for formatting years to the input `").concat(e, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (a === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(t, "`) for formatting days of the month to the input `").concat(e, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (a === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(t, "`) for formatting days of the month to the input `").concat(e, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var Pn = { exports: {} }, $n = { exports: {} }, Rn = { exports: {} };
(function(a, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = void 0;
  var e = {
    lessThanXSeconds: {
      one: "less than a second",
      other: "less than {{count}} seconds"
    },
    xSeconds: {
      one: "1 second",
      other: "{{count}} seconds"
    },
    halfAMinute: "half a minute",
    lessThanXMinutes: {
      one: "less than a minute",
      other: "less than {{count}} minutes"
    },
    xMinutes: {
      one: "1 minute",
      other: "{{count}} minutes"
    },
    aboutXHours: {
      one: "about 1 hour",
      other: "about {{count}} hours"
    },
    xHours: {
      one: "1 hour",
      other: "{{count}} hours"
    },
    xDays: {
      one: "1 day",
      other: "{{count}} days"
    },
    aboutXWeeks: {
      one: "about 1 week",
      other: "about {{count}} weeks"
    },
    xWeeks: {
      one: "1 week",
      other: "{{count}} weeks"
    },
    aboutXMonths: {
      one: "about 1 month",
      other: "about {{count}} months"
    },
    xMonths: {
      one: "1 month",
      other: "{{count}} months"
    },
    aboutXYears: {
      one: "about 1 year",
      other: "about {{count}} years"
    },
    xYears: {
      one: "1 year",
      other: "{{count}} years"
    },
    overXYears: {
      one: "over 1 year",
      other: "over {{count}} years"
    },
    almostXYears: {
      one: "almost 1 year",
      other: "almost {{count}} years"
    }
  }, r = function(i, u, l) {
    var s, d = e[i];
    return typeof d == "string" ? s = d : u === 1 ? s = d.one : s = d.other.replace("{{count}}", u.toString()), l != null && l.addSuffix ? l.comparison && l.comparison > 0 ? "in " + s : s + " ago" : s;
  }, n = r;
  t.default = n, a.exports = t.default;
})(Rn, Rn.exports);
var Gv = Rn.exports, In = { exports: {} }, Nn = { exports: {} };
(function(a, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = e;
  function e(r) {
    return function() {
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = n.width ? String(n.width) : r.defaultWidth, i = r.formats[o] || r.formats[r.defaultWidth];
      return i;
    };
  }
  a.exports = t.default;
})(Nn, Nn.exports);
var Kv = Nn.exports;
(function(a, t) {
  var e = Pe.default;
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = void 0;
  var r = e(Kv), n = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy"
  }, o = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a"
  }, i = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}"
  }, u = {
    date: (0, r.default)({
      formats: n,
      defaultWidth: "full"
    }),
    time: (0, r.default)({
      formats: o,
      defaultWidth: "full"
    }),
    dateTime: (0, r.default)({
      formats: i,
      defaultWidth: "full"
    })
  }, l = u;
  t.default = l, a.exports = t.default;
})(In, In.exports);
var Zv = In.exports, En = { exports: {} };
(function(a, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = void 0;
  var e = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P"
  }, r = function(i, u, l, s) {
    return e[i];
  }, n = r;
  t.default = n, a.exports = t.default;
})(En, En.exports);
var Jv = En.exports, Yn = { exports: {} }, Fn = { exports: {} };
(function(a, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = e;
  function e(r) {
    return function(n, o) {
      var i = o != null && o.context ? String(o.context) : "standalone", u;
      if (i === "formatting" && r.formattingValues) {
        var l = r.defaultFormattingWidth || r.defaultWidth, s = o != null && o.width ? String(o.width) : l;
        u = r.formattingValues[s] || r.formattingValues[l];
      } else {
        var d = r.defaultWidth, c = o != null && o.width ? String(o.width) : r.defaultWidth;
        u = r.values[c] || r.values[d];
      }
      var h = r.argumentCallback ? r.argumentCallback(n) : n;
      return u[h];
    };
  }
  a.exports = t.default;
})(Fn, Fn.exports);
var eh = Fn.exports;
(function(a, t) {
  var e = Pe.default;
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = void 0;
  var r = e(eh), n = {
    narrow: ["B", "A"],
    abbreviated: ["BC", "AD"],
    wide: ["Before Christ", "Anno Domini"]
  }, o = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
  }, i = {
    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  }, u = {
    narrow: ["S", "M", "T", "W", "T", "F", "S"],
    short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  }, l = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night"
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night"
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night"
    }
  }, s = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night"
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night"
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night"
    }
  }, d = function(b, O) {
    var D = Number(b), m = D % 100;
    if (m > 20 || m < 10)
      switch (m % 10) {
        case 1:
          return D + "st";
        case 2:
          return D + "nd";
        case 3:
          return D + "rd";
      }
    return D + "th";
  }, c = {
    ordinalNumber: d,
    era: (0, r.default)({
      values: n,
      defaultWidth: "wide"
    }),
    quarter: (0, r.default)({
      values: o,
      defaultWidth: "wide",
      argumentCallback: function(b) {
        return b - 1;
      }
    }),
    month: (0, r.default)({
      values: i,
      defaultWidth: "wide"
    }),
    day: (0, r.default)({
      values: u,
      defaultWidth: "wide"
    }),
    dayPeriod: (0, r.default)({
      values: l,
      defaultWidth: "wide",
      formattingValues: s,
      defaultFormattingWidth: "wide"
    })
  }, h = c;
  t.default = h, a.exports = t.default;
})(Yn, Yn.exports);
var th = Yn.exports, An = { exports: {} }, Un = { exports: {} };
(function(a, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = e;
  function e(o) {
    return function(i) {
      var u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, l = u.width, s = l && o.matchPatterns[l] || o.matchPatterns[o.defaultMatchWidth], d = i.match(s);
      if (!d)
        return null;
      var c = d[0], h = l && o.parsePatterns[l] || o.parsePatterns[o.defaultParseWidth], v = Array.isArray(h) ? n(h, function(D) {
        return D.test(c);
      }) : r(h, function(D) {
        return D.test(c);
      }), b;
      b = o.valueCallback ? o.valueCallback(v) : v, b = u.valueCallback ? u.valueCallback(b) : b;
      var O = i.slice(c.length);
      return {
        value: b,
        rest: O
      };
    };
  }
  function r(o, i) {
    for (var u in o)
      if (o.hasOwnProperty(u) && i(o[u]))
        return u;
  }
  function n(o, i) {
    for (var u = 0; u < o.length; u++)
      if (i(o[u]))
        return u;
  }
  a.exports = t.default;
})(Un, Un.exports);
var ah = Un.exports, Hn = { exports: {} };
(function(a, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = e;
  function e(r) {
    return function(n) {
      var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = n.match(r.matchPattern);
      if (!i)
        return null;
      var u = i[0], l = n.match(r.parsePattern);
      if (!l)
        return null;
      var s = r.valueCallback ? r.valueCallback(l[0]) : l[0];
      s = o.valueCallback ? o.valueCallback(s) : s;
      var d = n.slice(u.length);
      return {
        value: s,
        rest: d
      };
    };
  }
  a.exports = t.default;
})(Hn, Hn.exports);
var rh = Hn.exports;
(function(a, t) {
  var e = Pe.default;
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = void 0;
  var r = e(ah), n = e(rh), o = /^(\d+)(th|st|nd|rd)?/i, i = /\d+/i, u = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i
  }, l = {
    any: [/^b/i, /^(a|c)/i]
  }, s = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i
  }, d = {
    any: [/1/i, /2/i, /3/i, /4/i]
  }, c = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
  }, h = {
    narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
    any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
  }, v = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
  }, b = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
  }, O = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
  }, D = {
    any: {
      am: /^a/i,
      pm: /^p/i,
      midnight: /^mi/i,
      noon: /^no/i,
      morning: /morning/i,
      afternoon: /afternoon/i,
      evening: /evening/i,
      night: /night/i
    }
  }, m = {
    ordinalNumber: (0, n.default)({
      matchPattern: o,
      parsePattern: i,
      valueCallback: function(C) {
        return parseInt(C, 10);
      }
    }),
    era: (0, r.default)({
      matchPatterns: u,
      defaultMatchWidth: "wide",
      parsePatterns: l,
      defaultParseWidth: "any"
    }),
    quarter: (0, r.default)({
      matchPatterns: s,
      defaultMatchWidth: "wide",
      parsePatterns: d,
      defaultParseWidth: "any",
      valueCallback: function(C) {
        return C + 1;
      }
    }),
    month: (0, r.default)({
      matchPatterns: c,
      defaultMatchWidth: "wide",
      parsePatterns: h,
      defaultParseWidth: "any"
    }),
    day: (0, r.default)({
      matchPatterns: v,
      defaultMatchWidth: "wide",
      parsePatterns: b,
      defaultParseWidth: "any"
    }),
    dayPeriod: (0, r.default)({
      matchPatterns: O,
      defaultMatchWidth: "any",
      parsePatterns: D,
      defaultParseWidth: "any"
    })
  }, p = m;
  t.default = p, a.exports = t.default;
})(An, An.exports);
var nh = An.exports;
(function(a, t) {
  var e = Pe.default;
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = void 0;
  var r = e(Gv), n = e(Zv), o = e(Jv), i = e(th), u = e(nh), l = {
    code: "en-US",
    formatDistance: r.default,
    formatLong: n.default,
    formatRelative: o.default,
    localize: i.default,
    match: u.default,
    options: {
      weekStartsOn: 0,
      firstWeekContainsDate: 1
    }
  }, s = l;
  t.default = s, a.exports = t.default;
})($n, $n.exports);
var ih = $n.exports;
(function(a, t) {
  var e = Pe.default;
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = void 0;
  var r = e(ih), n = r.default;
  t.default = n, a.exports = t.default;
})(Pn, Pn.exports);
var oh = Pn.exports;
(function(a, t) {
  var e = Pe.default;
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = y;
  var r = e(Rv), n = e(Nv), o = e(mt), i = e(zv), u = e(Bv), l = e(Ol), s = Ga, d = e(Jt), c = e(Ze), h = ea, v = e(oh), b = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, O = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, D = /^'([^]*?)'?$/, m = /''/g, p = /[a-zA-Z]/;
  function y(_, N, H) {
    var k, x, $, Y, A, z, te, q, re, pe, ne, De, le, ie, Oe, ke, ye, K;
    (0, c.default)(2, arguments);
    var xe = String(N), oe = (0, h.getDefaultOptions)(), J = (k = (x = H == null ? void 0 : H.locale) !== null && x !== void 0 ? x : oe.locale) !== null && k !== void 0 ? k : v.default, Z = (0, d.default)(($ = (Y = (A = (z = H == null ? void 0 : H.firstWeekContainsDate) !== null && z !== void 0 ? z : H == null || (te = H.locale) === null || te === void 0 || (q = te.options) === null || q === void 0 ? void 0 : q.firstWeekContainsDate) !== null && A !== void 0 ? A : oe.firstWeekContainsDate) !== null && Y !== void 0 ? Y : (re = oe.locale) === null || re === void 0 || (pe = re.options) === null || pe === void 0 ? void 0 : pe.firstWeekContainsDate) !== null && $ !== void 0 ? $ : 1);
    if (!(Z >= 1 && Z <= 7))
      throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    var de = (0, d.default)((ne = (De = (le = (ie = H == null ? void 0 : H.weekStartsOn) !== null && ie !== void 0 ? ie : H == null || (Oe = H.locale) === null || Oe === void 0 || (ke = Oe.options) === null || ke === void 0 ? void 0 : ke.weekStartsOn) !== null && le !== void 0 ? le : oe.weekStartsOn) !== null && De !== void 0 ? De : (ye = oe.locale) === null || ye === void 0 || (K = ye.options) === null || K === void 0 ? void 0 : K.weekStartsOn) !== null && ne !== void 0 ? ne : 0);
    if (!(de >= 0 && de <= 6))
      throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    if (!J.localize)
      throw new RangeError("locale must contain localize property");
    if (!J.formatLong)
      throw new RangeError("locale must contain formatLong property");
    var Ae = (0, o.default)(_);
    if (!(0, r.default)(Ae))
      throw new RangeError("Invalid time value");
    var Qe = (0, l.default)(Ae), tt = (0, n.default)(Ae, Qe), Xe = {
      firstWeekContainsDate: Z,
      weekStartsOn: de,
      locale: J,
      _originalDate: Ae
    }, qe = xe.match(O).map(function($e) {
      var I = $e[0];
      if (I === "p" || I === "P") {
        var j = u.default[I];
        return j($e, J.formatLong);
      }
      return $e;
    }).join("").match(b).map(function($e) {
      if ($e === "''")
        return "'";
      var I = $e[0];
      if (I === "'")
        return C($e);
      var j = i.default[I];
      if (j)
        return !(H != null && H.useAdditionalWeekYearTokens) && (0, s.isProtectedWeekYearToken)($e) && (0, s.throwProtectedError)($e, N, String(_)), !(H != null && H.useAdditionalDayOfYearTokens) && (0, s.isProtectedDayOfYearToken)($e) && (0, s.throwProtectedError)($e, N, String(_)), j(tt, $e, J.localize, Xe);
      if (I.match(p))
        throw new RangeError("Format string contains an unescaped latin alphabet character `" + I + "`");
      return $e;
    }).join("");
    return qe;
  }
  function C(_) {
    var N = _.match(D);
    return N ? N[1].replace(m, "'") : _;
  }
  a.exports = t.default;
})(un, un.exports);
var lh = un.exports, Vn = { exports: {} }, Wn = { exports: {} };
(function(a, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = e;
  function e(i, u, l) {
    var s = o(i, l.timeZone, l.locale);
    return s.formatToParts ? r(s, u) : n(s, u);
  }
  function r(i, u) {
    for (var l = i.formatToParts(u), s = l.length - 1; s >= 0; --s)
      if (l[s].type === "timeZoneName")
        return l[s].value;
  }
  function n(i, u) {
    var l = i.format(u).replace(/\u200E/g, ""), s = / [\w-+ ]+$/.exec(l);
    return s ? s[0].substr(1) : "";
  }
  function o(i, u, l) {
    if (l && !l.code)
      throw new Error("date-fns-tz error: Please set a language code on the locale object imported from date-fns, e.g. `locale.code = 'en-US'`");
    return new Intl.DateTimeFormat(l ? [l.code, "en-US"] : void 0, {
      timeZone: u,
      timeZoneName: i
    });
  }
  a.exports = t.default;
})(Wn, Wn.exports);
var uh = Wn.exports, zn = { exports: {} }, Bn = { exports: {} };
(function(a, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = e;
  function e(l, s) {
    var d = u(s);
    return d.formatToParts ? n(d, l) : o(d, l);
  }
  var r = {
    year: 0,
    month: 1,
    day: 2,
    hour: 3,
    minute: 4,
    second: 5
  };
  function n(l, s) {
    try {
      for (var d = l.formatToParts(s), c = [], h = 0; h < d.length; h++) {
        var v = r[d[h].type];
        v >= 0 && (c[v] = parseInt(d[h].value, 10));
      }
      return c;
    } catch (b) {
      if (b instanceof RangeError)
        return [NaN];
      throw b;
    }
  }
  function o(l, s) {
    var d = l.format(s).replace(/\u200E/g, ""), c = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(d);
    return [c[3], c[1], c[2], c[4], c[5], c[6]];
  }
  var i = {};
  function u(l) {
    if (!i[l]) {
      var s = new Intl.DateTimeFormat("en-US", {
        hour12: !1,
        timeZone: "America/New_York",
        year: "numeric",
        month: "numeric",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      }).format(/* @__PURE__ */ new Date("2014-06-25T04:00:00.123Z")), d = s === "06/25/2014, 00:00:00" || s === "‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";
      i[l] = d ? new Intl.DateTimeFormat("en-US", {
        hour12: !1,
        timeZone: l,
        year: "numeric",
        month: "numeric",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      }) : new Intl.DateTimeFormat("en-US", {
        hourCycle: "h23",
        timeZone: l,
        year: "numeric",
        month: "numeric",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      });
    }
    return i[l];
  }
  a.exports = t.default;
})(Bn, Bn.exports);
var sh = Bn.exports, jn = { exports: {} };
(function(a, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = e;
  function e(r, n, o, i, u, l, s) {
    var d = /* @__PURE__ */ new Date(0);
    return d.setUTCFullYear(r, n, o), d.setUTCHours(i, u, l, s), d;
  }
  a.exports = t.default;
})(jn, jn.exports);
var dh = jn.exports;
(function(a, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = l;
  var e = n(sh), r = n(dh);
  function n(O) {
    return O && O.__esModule ? O : { default: O };
  }
  var o = 36e5, i = 6e4, u = {
    timezone: /([Z+-].*)$/,
    timezoneZ: /^(Z)$/,
    timezoneHH: /^([+-]\d{2})$/,
    timezoneHHMM: /^([+-]\d{2}):?(\d{2})$/
  };
  function l(O, D, m) {
    var p, y;
    if (!O || (p = u.timezoneZ.exec(O), p))
      return 0;
    var C;
    if (p = u.timezoneHH.exec(O), p)
      return C = parseInt(p[1], 10), h(C) ? -(C * o) : NaN;
    if (p = u.timezoneHHMM.exec(O), p) {
      C = parseInt(p[1], 10);
      var _ = parseInt(p[2], 10);
      return h(C, _) ? (y = Math.abs(C) * o + _ * i, C > 0 ? -y : y) : NaN;
    }
    if (b(O)) {
      D = new Date(D || Date.now());
      var N = m ? D : s(D), H = d(N, O), k = m ? H : c(D, H, O);
      return -k;
    }
    return NaN;
  }
  function s(O) {
    return (0, r.default)(O.getFullYear(), O.getMonth(), O.getDate(), O.getHours(), O.getMinutes(), O.getSeconds(), O.getMilliseconds());
  }
  function d(O, D) {
    var m = (0, e.default)(O, D), p = (0, r.default)(m[0], m[1] - 1, m[2], m[3] % 24, m[4], m[5], 0).getTime(), y = O.getTime(), C = y % 1e3;
    return y -= C >= 0 ? C : 1e3 + C, p - y;
  }
  function c(O, D, m) {
    var p = O.getTime(), y = p - D, C = d(new Date(y), m);
    if (D === C)
      return D;
    y -= C - D;
    var _ = d(new Date(y), m);
    return C === _ ? C : Math.max(C, _);
  }
  function h(O, D) {
    return -23 <= O && O <= 23 && (D == null || 0 <= D && D <= 59);
  }
  var v = {};
  function b(O) {
    if (v[O])
      return !0;
    try {
      return new Intl.DateTimeFormat(void 0, {
        timeZone: O
      }), v[O] = !0, !0;
    } catch {
      return !1;
    }
  }
  a.exports = t.default;
})(zn, zn.exports);
var xi = zn.exports;
(function(a, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = void 0;
  var e = n(uh), r = n(xi);
  function n(v) {
    return v && v.__esModule ? v : { default: v };
  }
  var o = 60 * 1e3, i = {
    // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
    X: function(v, b, O, D) {
      var m = u(D.timeZone, D._originalDate || v);
      if (m === 0)
        return "Z";
      switch (b) {
        case "X":
          return d(m);
        case "XXXX":
        case "XX":
          return s(m);
        case "XXXXX":
        case "XXX":
        default:
          return s(m, ":");
      }
    },
    // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
    x: function(v, b, O, D) {
      var m = u(D.timeZone, D._originalDate || v);
      switch (b) {
        case "x":
          return d(m);
        case "xxxx":
        case "xx":
          return s(m);
        case "xxxxx":
        case "xxx":
        default:
          return s(m, ":");
      }
    },
    // Timezone (GMT)
    O: function(v, b, O, D) {
      var m = u(D.timeZone, D._originalDate || v);
      switch (b) {
        case "O":
        case "OO":
        case "OOO":
          return "GMT" + c(m, ":");
        case "OOOO":
        default:
          return "GMT" + s(m, ":");
      }
    },
    // Timezone (specific non-location)
    z: function(v, b, O, D) {
      var m = D._originalDate || v;
      switch (b) {
        case "z":
        case "zz":
        case "zzz":
          return (0, e.default)("short", m, D);
        case "zzzz":
        default:
          return (0, e.default)("long", m, D);
      }
    }
  };
  function u(v, b) {
    var O = v ? (0, r.default)(v, b, !0) / o : b.getTimezoneOffset();
    if (Number.isNaN(O))
      throw new RangeError("Invalid time zone specified: " + v);
    return O;
  }
  function l(v, b) {
    for (var O = v < 0 ? "-" : "", D = Math.abs(v).toString(); D.length < b; )
      D = "0" + D;
    return O + D;
  }
  function s(v, b) {
    var O = b || "", D = v > 0 ? "-" : "+", m = Math.abs(v), p = l(Math.floor(m / 60), 2), y = l(Math.floor(m % 60), 2);
    return D + p + O + y;
  }
  function d(v, b) {
    if (v % 60 === 0) {
      var O = v > 0 ? "-" : "+";
      return O + l(Math.abs(v) / 60, 2);
    }
    return s(v, b);
  }
  function c(v, b) {
    var O = v > 0 ? "-" : "+", D = Math.abs(v), m = Math.floor(D / 60), p = D % 60;
    if (p === 0)
      return O + String(m);
    var y = b || "";
    return O + String(m) + y + l(p, 2);
  }
  var h = i;
  t.default = h, a.exports = t.default;
})(Vn, Vn.exports);
var ch = Vn.exports, qn = { exports: {} }, Ln = { exports: {} };
(function(a, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = void 0;
  var e = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/, r = e;
  t.default = r, a.exports = t.default;
})(Ln, Ln.exports);
var fh = Ln.exports;
(function(a, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = c;
  var e = i(Jt), r = i(Ol), n = i(xi), o = i(fh);
  function i(k) {
    return k && k.__esModule ? k : { default: k };
  }
  var u = 36e5, l = 6e4, s = 2, d = {
    dateTimePattern: /^([0-9W+-]+)(T| )(.*)/,
    datePattern: /^([0-9W+-]+)(.*)/,
    plainTime: /:/,
    // year tokens
    YY: /^(\d{2})$/,
    YYY: [
      /^([+-]\d{2})$/,
      // 0 additional digits
      /^([+-]\d{3})$/,
      // 1 additional digit
      /^([+-]\d{4})$/
      // 2 additional digits
    ],
    YYYY: /^(\d{4})/,
    YYYYY: [
      /^([+-]\d{4})/,
      // 0 additional digits
      /^([+-]\d{5})/,
      // 1 additional digit
      /^([+-]\d{6})/
      // 2 additional digits
    ],
    // date tokens
    MM: /^-(\d{2})$/,
    DDD: /^-?(\d{3})$/,
    MMDD: /^-?(\d{2})-?(\d{2})$/,
    Www: /^-?W(\d{2})$/,
    WwwD: /^-?W(\d{2})-?(\d{1})$/,
    HH: /^(\d{2}([.,]\d*)?)$/,
    HHMM: /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
    HHMMSS: /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
    // time zone tokens (to identify the presence of a tz)
    timeZone: o.default
  };
  function c(k, x) {
    if (arguments.length < 1)
      throw new TypeError("1 argument required, but only " + arguments.length + " present");
    if (k === null)
      return /* @__PURE__ */ new Date(NaN);
    var $ = x || {}, Y = $.additionalDigits == null ? s : (0, e.default)($.additionalDigits);
    if (Y !== 2 && Y !== 1 && Y !== 0)
      throw new RangeError("additionalDigits must be 0, 1 or 2");
    if (k instanceof Date || typeof k == "object" && Object.prototype.toString.call(k) === "[object Date]")
      return new Date(k.getTime());
    if (typeof k == "number" || Object.prototype.toString.call(k) === "[object Number]")
      return new Date(k);
    if (!(typeof k == "string" || Object.prototype.toString.call(k) === "[object String]"))
      return /* @__PURE__ */ new Date(NaN);
    var A = h(k), z = v(A.date, Y), te = z.year, q = z.restDateString, re = b(q, te);
    if (isNaN(re))
      return /* @__PURE__ */ new Date(NaN);
    if (re) {
      var pe = re.getTime(), ne = 0, De;
      if (A.time && (ne = O(A.time), isNaN(ne)))
        return /* @__PURE__ */ new Date(NaN);
      if (A.timeZone || $.timeZone) {
        if (De = (0, n.default)(A.timeZone || $.timeZone, new Date(pe + ne)), isNaN(De))
          return /* @__PURE__ */ new Date(NaN);
      } else
        De = (0, r.default)(new Date(pe + ne)), De = (0, r.default)(new Date(pe + ne + De));
      return new Date(pe + ne + De);
    } else
      return /* @__PURE__ */ new Date(NaN);
  }
  function h(k) {
    var x = {}, $ = d.dateTimePattern.exec(k), Y;
    if ($ ? (x.date = $[1], Y = $[3]) : ($ = d.datePattern.exec(k), $ ? (x.date = $[1], Y = $[2]) : (x.date = null, Y = k)), Y) {
      var A = d.timeZone.exec(Y);
      A ? (x.time = Y.replace(A[1], ""), x.timeZone = A[1].trim()) : x.time = Y;
    }
    return x;
  }
  function v(k, x) {
    var $ = d.YYY[x], Y = d.YYYYY[x], A;
    if (A = d.YYYY.exec(k) || Y.exec(k), A) {
      var z = A[1];
      return {
        year: parseInt(z, 10),
        restDateString: k.slice(z.length)
      };
    }
    if (A = d.YY.exec(k) || $.exec(k), A) {
      var te = A[1];
      return {
        year: parseInt(te, 10) * 100,
        restDateString: k.slice(te.length)
      };
    }
    return {
      year: null
    };
  }
  function b(k, x) {
    if (x === null)
      return null;
    var $, Y, A, z;
    if (k.length === 0)
      return Y = /* @__PURE__ */ new Date(0), Y.setUTCFullYear(x), Y;
    if ($ = d.MM.exec(k), $)
      return Y = /* @__PURE__ */ new Date(0), A = parseInt($[1], 10) - 1, C(x, A) ? (Y.setUTCFullYear(x, A), Y) : /* @__PURE__ */ new Date(NaN);
    if ($ = d.DDD.exec(k), $) {
      Y = /* @__PURE__ */ new Date(0);
      var te = parseInt($[1], 10);
      return _(x, te) ? (Y.setUTCFullYear(x, 0, te), Y) : /* @__PURE__ */ new Date(NaN);
    }
    if ($ = d.MMDD.exec(k), $) {
      Y = /* @__PURE__ */ new Date(0), A = parseInt($[1], 10) - 1;
      var q = parseInt($[2], 10);
      return C(x, A, q) ? (Y.setUTCFullYear(x, A, q), Y) : /* @__PURE__ */ new Date(NaN);
    }
    if ($ = d.Www.exec(k), $)
      return z = parseInt($[1], 10) - 1, N(x, z) ? D(x, z) : /* @__PURE__ */ new Date(NaN);
    if ($ = d.WwwD.exec(k), $) {
      z = parseInt($[1], 10) - 1;
      var re = parseInt($[2], 10) - 1;
      return N(x, z, re) ? D(x, z, re) : /* @__PURE__ */ new Date(NaN);
    }
    return null;
  }
  function O(k) {
    var x, $, Y;
    if (x = d.HH.exec(k), x)
      return $ = parseFloat(x[1].replace(",", ".")), H($) ? $ % 24 * u : NaN;
    if (x = d.HHMM.exec(k), x)
      return $ = parseInt(x[1], 10), Y = parseFloat(x[2].replace(",", ".")), H($, Y) ? $ % 24 * u + Y * l : NaN;
    if (x = d.HHMMSS.exec(k), x) {
      $ = parseInt(x[1], 10), Y = parseInt(x[2], 10);
      var A = parseFloat(x[3].replace(",", "."));
      return H($, Y, A) ? $ % 24 * u + Y * l + A * 1e3 : NaN;
    }
    return null;
  }
  function D(k, x, $) {
    x = x || 0, $ = $ || 0;
    var Y = /* @__PURE__ */ new Date(0);
    Y.setUTCFullYear(k, 0, 4);
    var A = Y.getUTCDay() || 7, z = x * 7 + $ + 1 - A;
    return Y.setUTCDate(Y.getUTCDate() + z), Y;
  }
  var m = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], p = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  function y(k) {
    return k % 400 === 0 || k % 4 === 0 && k % 100 !== 0;
  }
  function C(k, x, $) {
    if (x < 0 || x > 11)
      return !1;
    if ($ != null) {
      if ($ < 1)
        return !1;
      var Y = y(k);
      if (Y && $ > p[x] || !Y && $ > m[x])
        return !1;
    }
    return !0;
  }
  function _(k, x) {
    if (x < 1)
      return !1;
    var $ = y(k);
    return !($ && x > 366 || !$ && x > 365);
  }
  function N(k, x, $) {
    return !(x < 0 || x > 52 || $ != null && ($ < 0 || $ > 6));
  }
  function H(k, x, $) {
    return !(k != null && (k < 0 || k >= 25) || x != null && (x < 0 || x >= 60) || $ != null && ($ < 0 || $ >= 60));
  }
  a.exports = t.default;
})(qn, qn.exports);
var kl = qn.exports;
(function(a, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = u;
  var e = o(lh), r = o(ch), n = o(kl);
  function o(l) {
    return l && l.__esModule ? l : { default: l };
  }
  var i = /([xXOz]+)|''|'(''|[^'])+('|$)/g;
  function u(l, s, d) {
    var c = String(s), h = d || {}, v = c.match(i);
    if (v) {
      var b = (0, n.default)(l, h);
      c = v.reduce(function(O, D) {
        if (D[0] === "'")
          return O;
        var m = O.indexOf(D), p = O[m - 1] === "'", y = O.replace(D, "'" + r.default[D[0]](b, D, null, h) + "'");
        return p ? y.substring(0, m - 1) + y.substring(m + 1) : y;
      }, c);
    }
    return (0, e.default)(l, c, h);
  }
  a.exports = t.default;
})(ln, ln.exports);
var vh = ln.exports, Qn = { exports: {} };
(function(a, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = o;
  var e = n(xi), r = n(kl);
  function n(i) {
    return i && i.__esModule ? i : { default: i };
  }
  function o(i, u, l) {
    var s = (0, r.default)(i, l), d = (0, e.default)(u, s, !0), c = new Date(s.getTime() - d), h = /* @__PURE__ */ new Date(0);
    return h.setFullYear(c.getUTCFullYear(), c.getUTCMonth(), c.getUTCDate()), h.setHours(c.getUTCHours(), c.getUTCMinutes(), c.getUTCSeconds(), c.getUTCMilliseconds()), h;
  }
  a.exports = t.default;
})(Qn, Qn.exports);
var hh = Qn.exports;
(function(a, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = i;
  var e = o(Pv), r = o(vh), n = o(hh);
  function o(u) {
    return u && u.__esModule ? u : { default: u };
  }
  function i(u, l, s, d) {
    var c = (0, e.default)(d);
    return c.timeZone = l, (0, r.default)((0, n.default)(u, l), s, c);
  }
  a.exports = t.default;
})(rn, rn.exports);
var mh = rn.exports, Si = {}, Pi = {};
(function(a) {
  Object.defineProperty(a, "__esModule", { value: !0 }), a.getAmPm = a.findSimilarTime = a.isTimeInStep = a.getTimeUnits = a.getFixValue = a.time = void 0;
  const t = Kt, e = ht;
  a.time = {
    amHours: [
      "00",
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11"
    ],
    pmHours: [
      "12",
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11"
    ],
    hours: [
      "00",
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23"
    ],
    minutes: [
      "00",
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
      "31",
      "32",
      "33",
      "34",
      "35",
      "36",
      "37",
      "38",
      "39",
      "40",
      "41",
      "42",
      "43",
      "44",
      "45",
      "46",
      "47",
      "48",
      "49",
      "50",
      "51",
      "52",
      "53",
      "54",
      "55",
      "56",
      "57",
      "58",
      "59"
    ],
    seconds: [
      "00",
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
      "31",
      "32",
      "33",
      "34",
      "35",
      "36",
      "37",
      "38",
      "39",
      "40",
      "41",
      "42",
      "43",
      "44",
      "45",
      "46",
      "47",
      "48",
      "49",
      "50",
      "51",
      "52",
      "53",
      "54",
      "55",
      "56",
      "57",
      "58",
      "59"
    ],
    period: ["AM", "PM"]
  };
  function r(l) {
    return `00${l}`.slice(-2);
  }
  a.getFixValue = r;
  function n(l, s, d) {
    return Array.isArray(s) ? (d === "am" ? s.filter((c) => c < 12) : d === "pm" ? s.filter((c) => c >= 12).map((c) => c === 12 ? 12 : c - 12) : s).map((c) => r(c)) : typeof s == "number" ? d === "am" ? l.filter((c) => {
      const h = Number(c);
      return h < 12 && h % s === 0;
    }) : d === "pm" ? l.filter((c) => {
      const h = Number(c);
      return h >= 12 && h % s === 0;
    }).map((c) => {
      const h = Number(c);
      return r(h === 12 ? 12 : h - 12);
    }) : l.filter((c) => Number(c) % s === 0) : d === "am" ? l.filter((c) => Number(c) < 12) : d === "pm" ? l.map((c) => Number(c)).filter((c) => Number(c) >= 12).map((c) => r(c === 12 ? 12 : c - 12)) : l;
  }
  a.getTimeUnits = n;
  function o(l, s, d) {
    return d ? typeof d == "number" ? l % d === 0 : d.includes(l) : !0;
  }
  a.isTimeInStep = o;
  function i(l, s, d) {
    const c = n(a.time[s], d).map(Number);
    let h, v;
    for (let b = 0; b < c.length; ++b) {
      const O = c[b];
      if (O === l)
        return O;
      if (O > l) {
        v = O;
        break;
      }
      h = O;
    }
    return h === void 0 ? (v || (0, e.throwError)("time-picker", "Please set 'hours' or 'minutes' or 'seconds' props"), v) : v === void 0 || v - l > l - h ? h : v;
  }
  a.findSimilarTime = i;
  function u(l) {
    return (0, t.getHours)(l) < 12 ? "am" : "pm";
  }
  a.getAmPm = u;
})(Pi);
var Ka = {};
Object.defineProperty(Ka, "__esModule", { value: !0 });
Ka.timePickerInjectionKey = void 0;
const gh = ht;
Ka.timePickerInjectionKey = (0, gh.createInjectionKey)("n-time-picker");
var $i = {};
Object.defineProperty($i, "__esModule", { value: !0 });
const Ki = Ke;
$i.default = (0, Ki.defineComponent)({
  name: "TimePickerPanelCol",
  props: {
    clsPrefix: {
      type: String,
      required: !0
    },
    data: {
      type: Array,
      required: !0
    },
    activeValue: {
      type: Number,
      default: null
    },
    // It should be required but vue's type seems to have bugs
    onItemClick: Function
  },
  render() {
    const { activeValue: a, onItemClick: t, clsPrefix: e } = this;
    return this.data.map((r) => {
      const { label: n, disabled: o, value: i } = r, u = a === i;
      return (0, Ki.h)("div", { key: n, "data-active": u ? "" : null, class: [
        `${e}-time-picker-col__item`,
        u && `${e}-time-picker-col__item--active`,
        o && `${e}-time-picker-col__item--disabled`
      ], onClick: t && !o ? () => {
        t(i);
      } : void 0 }, n);
    });
  }
});
var ph = be && be.__importDefault || function(a) {
  return a && a.__esModule ? a : { default: a };
};
Object.defineProperty(Si, "__esModule", { value: !0 });
const ve = Ke, Fa = Ot, Zi = Qt, wt = Pi, yh = Ka, Ja = ph($i), wh = {
  actions: {
    type: Array,
    default: () => ["now", "confirm"]
  },
  showHour: {
    type: Boolean,
    default: !0
  },
  showMinute: {
    type: Boolean,
    default: !0
  },
  showSecond: {
    type: Boolean,
    default: !0
  },
  showPeriod: {
    type: Boolean,
    default: !0
  },
  isHourInvalid: Boolean,
  isMinuteInvalid: Boolean,
  isSecondInvalid: Boolean,
  isAmPmInvalid: Boolean,
  isValueInvalid: Boolean,
  hourValue: {
    type: Number,
    default: null
  },
  minuteValue: {
    type: Number,
    default: null
  },
  secondValue: {
    type: Number,
    default: null
  },
  amPmValue: {
    type: String,
    default: null
  },
  isHourDisabled: Function,
  isMinuteDisabled: Function,
  isSecondDisabled: Function,
  onHourClick: {
    type: Function,
    required: !0
  },
  onMinuteClick: {
    type: Function,
    required: !0
  },
  onSecondClick: {
    type: Function,
    required: !0
  },
  onAmPmClick: {
    type: Function,
    required: !0
  },
  onNowClick: Function,
  nowText: String,
  confirmText: String,
  transitionDisabled: Boolean,
  onConfirmClick: Function,
  onFocusin: Function,
  onFocusout: Function,
  onFocusDetectorFocus: Function,
  onKeydown: Function,
  hours: [Number, Array],
  minutes: [Number, Array],
  seconds: [Number, Array],
  use12Hours: Boolean
};
Si.default = (0, ve.defineComponent)({
  name: "TimePickerPanel",
  props: wh,
  setup(a) {
    const {
      mergedThemeRef: t,
      mergedClsPrefixRef: e
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    } = (0, ve.inject)(yh.timePickerInjectionKey), r = (0, ve.computed)(() => {
      const { isHourDisabled: u, hours: l, use12Hours: s, amPmValue: d } = a;
      if (s) {
        const c = d ?? (0, wt.getAmPm)(Date.now());
        return (0, wt.getTimeUnits)(wt.time.hours, l, c).map((h) => {
          const v = Number(h), b = c === "pm" && v !== 12 ? v + 12 : v;
          return {
            label: h,
            value: b,
            disabled: u ? u(b) : !1
          };
        });
      } else
        return (0, wt.getTimeUnits)(wt.time.hours, l).map((c) => ({
          label: c,
          value: Number(c),
          disabled: u ? u(Number(c)) : !1
        }));
    }), n = (0, ve.computed)(() => {
      const { isMinuteDisabled: u, minutes: l } = a;
      return (0, wt.getTimeUnits)(wt.time.minutes, l).map((s) => ({
        label: s,
        value: Number(s),
        disabled: u ? u(Number(s), a.hourValue) : !1
      }));
    }), o = (0, ve.computed)(() => {
      const { isSecondDisabled: u, seconds: l } = a;
      return (0, wt.getTimeUnits)(wt.time.seconds, l).map((s) => ({
        label: s,
        value: Number(s),
        disabled: u ? u(Number(s), a.minuteValue, a.hourValue) : !1
      }));
    }), i = (0, ve.computed)(() => {
      const { isHourDisabled: u } = a;
      let l = !0, s = !0;
      for (let d = 0; d < 12; ++d)
        if (!(u != null && u(d))) {
          l = !1;
          break;
        }
      for (let d = 12; d < 24; ++d)
        if (!(u != null && u(d))) {
          s = !1;
          break;
        }
      return [
        {
          label: "AM",
          value: "am",
          disabled: l
        },
        {
          label: "PM",
          value: "pm",
          disabled: s
        }
      ];
    });
    return {
      mergedTheme: t,
      mergedClsPrefix: e,
      hours: r,
      minutes: n,
      seconds: o,
      amPm: i,
      hourScrollRef: (0, ve.ref)(null),
      minuteScrollRef: (0, ve.ref)(null),
      secondScrollRef: (0, ve.ref)(null),
      amPmScrollRef: (0, ve.ref)(null)
    };
  },
  render() {
    var a, t, e;
    const { mergedClsPrefix: r, mergedTheme: n } = this;
    return (0, ve.h)(
      "div",
      { tabindex: 0, class: `${r}-time-picker-panel`, onFocusin: this.onFocusin, onFocusout: this.onFocusout, onKeydown: this.onKeydown },
      (0, ve.h)(
        "div",
        { class: `${r}-time-picker-cols` },
        this.showHour ? (0, ve.h)(
          "div",
          { class: [
            `${r}-time-picker-col`,
            this.isHourInvalid && `${r}-time-picker-col--invalid`,
            this.transitionDisabled && `${r}-time-picker-col--transition-disabled`
          ] },
          (0, ve.h)(Fa.NScrollbar, { ref: "hourScrollRef", theme: n.peers.Scrollbar, themeOverrides: n.peerOverrides.Scrollbar }, {
            default: () => [
              (0, ve.h)(Ja.default, { clsPrefix: r, data: this.hours, activeValue: this.hourValue, onItemClick: this.onHourClick }),
              (0, ve.h)("div", { class: `${r}-time-picker-col__padding` })
            ]
          })
        ) : null,
        this.showMinute ? (0, ve.h)(
          "div",
          { class: [
            `${r}-time-picker-col`,
            this.transitionDisabled && `${r}-time-picker-col--transition-disabled`,
            this.isMinuteInvalid && `${r}-time-picker-col--invalid`
          ] },
          (0, ve.h)(Fa.NScrollbar, { ref: "minuteScrollRef", theme: n.peers.Scrollbar, themeOverrides: n.peerOverrides.Scrollbar }, {
            default: () => [
              (0, ve.h)(Ja.default, { clsPrefix: r, data: this.minutes, activeValue: this.minuteValue, onItemClick: this.onMinuteClick }),
              (0, ve.h)("div", { class: `${r}-time-picker-col__padding` })
            ]
          })
        ) : null,
        this.showSecond ? (0, ve.h)(
          "div",
          { class: [
            `${r}-time-picker-col`,
            this.isSecondInvalid && `${r}-time-picker-col--invalid`,
            this.transitionDisabled && `${r}-time-picker-col--transition-disabled`
          ] },
          (0, ve.h)(Fa.NScrollbar, { ref: "secondScrollRef", theme: n.peers.Scrollbar, themeOverrides: n.peerOverrides.Scrollbar }, {
            default: () => [
              (0, ve.h)(Ja.default, { clsPrefix: r, data: this.seconds, activeValue: this.secondValue, onItemClick: this.onSecondClick }),
              (0, ve.h)("div", { class: `${r}-time-picker-col__padding` })
            ]
          })
        ) : null,
        this.use12Hours ? (0, ve.h)(
          "div",
          { class: [
            `${r}-time-picker-col`,
            this.isAmPmInvalid && `${r}-time-picker-col--invalid`,
            this.transitionDisabled && `${r}-time-picker-col--transition-disabled`
          ] },
          (0, ve.h)(Fa.NScrollbar, { ref: "amPmScrollRef", theme: n.peers.Scrollbar, themeOverrides: n.peerOverrides.Scrollbar }, {
            default: () => [
              (0, ve.h)(Ja.default, { clsPrefix: r, data: this.amPm, activeValue: this.amPmValue, onItemClick: this.onAmPmClick }),
              (0, ve.h)("div", { class: `${r}-time-picker-col__padding` })
            ]
          })
        ) : null
      ),
      !((a = this.actions) === null || a === void 0) && a.length ? (0, ve.h)(
        "div",
        { class: `${r}-time-picker-actions` },
        !((t = this.actions) === null || t === void 0) && t.includes("now") ? (0, ve.h)(Zi.NButton, { size: "tiny", theme: n.peers.Button, themeOverrides: n.peerOverrides.Button, onClick: this.onNowClick }, { default: () => this.nowText }) : null,
        !((e = this.actions) === null || e === void 0) && e.includes("confirm") ? (0, ve.h)(Zi.NButton, { size: "tiny", type: "primary", class: `${r}-time-picker-actions__confirm`, theme: n.peers.Button, themeOverrides: n.peerOverrides.Button, disabled: this.isValueInvalid, onClick: this.onConfirmClick }, { default: () => this.confirmText }) : null
      ) : null,
      (0, ve.h)(Fa.NBaseFocusDetector, { onFocus: this.onFocusDetectorFocus })
    );
  }
});
var Ri = {};
Object.defineProperty(Ri, "__esModule", {
  value: !0
});
const Me = fo, bh = vo;
Ri.default = (0, Me.c)([(0, Me.cB)("time-picker", `
 z-index: auto;
 position: relative;
 `, [(0, Me.cB)("time-picker-icon", `
 color: var(--n-icon-color-override);
 transition: color .3s var(--n-bezier);
 `), (0, Me.cM)("disabled", [(0, Me.cB)("time-picker-icon", `
 color: var(--n-icon-color-disabled-override);
 `)])]), (0, Me.cB)("time-picker-panel", `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 font-size: var(--n-item-font-size);
 border-radius: var(--n-border-radius);
 margin: 4px 0;
 min-width: 104px;
 overflow: hidden;
 background-color: var(--n-panel-color);
 box-shadow: var(--n-panel-box-shadow);
 `, [(0, bh.fadeInScaleUpTransition)(), (0, Me.cB)("time-picker-actions", `
 padding: var(--n-panel-action-padding);
 align-items: center;
 display: flex;
 justify-content: space-evenly;
 `), (0, Me.cB)("time-picker-cols", `
 height: calc(var(--n-item-height) * 6);
 display: flex;
 position: relative;
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-panel-divider-color);
 `), (0, Me.cB)("time-picker-col", `
 flex-grow: 1;
 min-width: var(--n-item-width);
 height: calc(var(--n-item-height) * 6);
 flex-direction: column;
 transition: box-shadow .3s var(--n-bezier);
 `, [(0, Me.cM)("transition-disabled", [(0, Me.cE)("item", "transition: none;", [(0, Me.c)("&::before", "transition: none;")])]), (0, Me.cE)("padding", `
 height: calc(var(--n-item-height) * 5);
 `), (0, Me.c)("&:first-child", "min-width: calc(var(--n-item-width) + 4px);", [(0, Me.cE)("item", [(0, Me.c)("&::before", "left: 4px;")])]), (0, Me.cE)("item", `
 cursor: pointer;
 height: var(--n-item-height);
 display: flex;
 align-items: center;
 justify-content: center;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier);
 background: #0000;
 text-decoration-color: #0000;
 color: var(--n-item-text-color);
 z-index: 0;
 box-sizing: border-box;
 padding-top: 4px;
 position: relative;
 `, [(0, Me.c)("&::before", `
 content: "";
 transition: background-color .3s var(--n-bezier);
 z-index: -1;
 position: absolute;
 left: 0;
 right: 4px;
 top: 4px;
 bottom: 0;
 border-radius: var(--n-item-border-radius);
 `), (0, Me.cNotM)("disabled", [(0, Me.c)("&:hover::before", `
 background-color: var(--n-item-color-hover);
 `)]), (0, Me.cM)("active", `
 color: var(--n-item-text-color-active);
 `, [(0, Me.c)("&::before", `
 background-color: var(--n-item-color-hover);
 `)]), (0, Me.cM)("disabled", `
 opacity: var(--n-item-opacity-disabled);
 cursor: not-allowed;
 `)]), (0, Me.cM)("invalid", [(0, Me.cE)("item", [(0, Me.cM)("active", `
 text-decoration: line-through;
 text-decoration-color: var(--n-item-text-color-active);
 `)])])])])]);
(function(a) {
  var t = be && be.__importDefault || function(_) {
    return _ && _.__esModule ? _ : { default: _ };
  };
  Object.defineProperty(a, "__esModule", { value: !0 }), a.timePickerProps = void 0;
  const e = Ke, r = Xn, n = Ba, o = Gn, i = za, u = Kt, l = t(mh), s = Ee, d = Da, c = Dr, h = Ot, v = yr, b = ht, O = Rr, D = t(Si), m = Ka, p = Pi, y = t(Ri);
  function C(_, N) {
    return _ === void 0 ? !0 : Array.isArray(_) ? _.every((H) => H >= 0 && H <= N) : _ >= 0 && _ <= N;
  }
  a.timePickerProps = Object.assign(Object.assign({}, v.useTheme.props), {
    to: b.useAdjustedTo.propTo,
    bordered: {
      type: Boolean,
      default: void 0
    },
    actions: Array,
    defaultValue: {
      type: Number,
      default: null
    },
    defaultFormattedValue: String,
    placeholder: String,
    placement: {
      type: String,
      default: "bottom-start"
    },
    value: Number,
    format: {
      type: String,
      default: "HH:mm:ss"
    },
    valueFormat: String,
    formattedValue: String,
    isHourDisabled: Function,
    size: String,
    isMinuteDisabled: Function,
    isSecondDisabled: Function,
    inputReadonly: Boolean,
    clearable: Boolean,
    status: String,
    "onUpdate:value": [Function, Array],
    onUpdateValue: [Function, Array],
    "onUpdate:show": [Function, Array],
    onUpdateShow: [Function, Array],
    onUpdateFormattedValue: [Function, Array],
    "onUpdate:formattedValue": [Function, Array],
    onBlur: [Function, Array],
    onConfirm: [Function, Array],
    onClear: Function,
    onFocus: [Function, Array],
    // https://www.iana.org/time-zones
    timeZone: String,
    showIcon: {
      type: Boolean,
      default: !0
    },
    disabled: {
      type: Boolean,
      default: void 0
    },
    show: {
      type: Boolean,
      default: void 0
    },
    hours: {
      type: [Number, Array],
      validator: (_) => C(_, 23)
    },
    minutes: {
      type: [Number, Array],
      validator: (_) => C(_, 59)
    },
    seconds: {
      type: [Number, Array],
      validator: (_) => C(_, 59)
    },
    use12Hours: Boolean,
    // private
    stateful: {
      type: Boolean,
      default: !0
    },
    // deprecated
    onChange: [Function, Array]
  }), a.default = (0, e.defineComponent)({
    name: "TimePicker",
    props: a.timePickerProps,
    setup(_) {
      process.env.NODE_ENV !== "production" && (0, e.watchEffect)(() => {
        _.onChange !== void 0 && (0, b.warnOnce)("time-picker", "`on-change` is deprecated, please use `on-update:value` instead.");
      });
      const { mergedBorderedRef: N, mergedClsPrefixRef: H, namespaceRef: k, inlineThemeDisabled: x } = (0, v.useConfig)(_), { localeRef: $, dateLocaleRef: Y } = (0, v.useLocale)("TimePicker"), A = (0, v.useFormItem)(_), { mergedSizeRef: z, mergedDisabledRef: te, mergedStatusRef: q } = A, re = (0, v.useTheme)("TimePicker", "-time-picker", y.default, O.timePickerLight, _, H), pe = (0, r.useKeyboard)(), ne = (0, e.ref)(null), De = (0, e.ref)(null), le = (0, e.computed)(() => ({
        locale: Y.value.locale
      }));
      function ie(g) {
        return g === null ? null : (0, s.strictParse)(g, _.valueFormat || _.format, /* @__PURE__ */ new Date(), le.value).getTime();
      }
      const { defaultValue: Oe, defaultFormattedValue: ke } = _, ye = (0, e.ref)(ke !== void 0 ? ie(ke) : Oe), K = (0, e.computed)(() => {
        const { formattedValue: g } = _;
        if (g !== void 0)
          return ie(g);
        const { value: P } = _;
        return P !== void 0 ? P : ye.value;
      }), xe = (0, e.computed)(() => {
        const { timeZone: g } = _;
        return g ? (P, R, ee) => (0, l.default)(P, g, R, ee) : (P, R, ee) => (0, u.format)(P, R, ee);
      }), oe = (0, e.ref)("");
      (0, e.watch)(() => _.timeZone, () => {
        const g = K.value;
        oe.value = g === null ? "" : xe.value(g, _.format, le.value);
      }, {
        immediate: !0
      });
      const J = (0, e.ref)(!1), Z = (0, e.toRef)(_, "show"), de = (0, r.useMergedState)(Z, J), Ae = (0, e.ref)(K.value), Qe = (0, e.ref)(!1), tt = (0, e.computed)(() => $.value.now), Xe = (0, e.computed)(() => _.placeholder !== void 0 ? _.placeholder : $.value.placeholder), qe = (0, e.computed)(() => $.value.negativeText), $e = (0, e.computed)(() => $.value.positiveText), I = (0, e.computed)(() => /H|h|K|k/.test(_.format)), j = (0, e.computed)(() => _.format.includes("m")), _e = (0, e.computed)(() => _.format.includes("s")), lt = (0, e.computed)(() => {
        const { isHourDisabled: g } = _;
        return Ue.value === null ? !1 : (0, p.isTimeInStep)(Ue.value, "hours", _.hours) ? g ? g(Ue.value) : !1 : !0;
      }), gt = (0, e.computed)(() => {
        const { value: g } = Yt, { value: P } = Ue;
        if (g === null || P === null)
          return !1;
        if (!(0, p.isTimeInStep)(g, "minutes", _.minutes))
          return !0;
        const { isMinuteDisabled: R } = _;
        return R ? R(g, P) : !1;
      }), ta = (0, e.computed)(() => {
        const { value: g } = Yt, { value: P } = Ue, { value: R } = ra;
        if (R === null || g === null || P === null)
          return !1;
        if (!(0, p.isTimeInStep)(R, "seconds", _.seconds))
          return !0;
        const { isSecondDisabled: ee } = _;
        return ee ? ee(R, g, P) : !1;
      }), Et = (0, e.computed)(() => lt.value || gt.value || ta.value), Ca = (0, e.computed)(() => _.format.length + 4), aa = (0, e.computed)(() => {
        const { value: g } = K;
        return g === null ? null : (0, u.getHours)(g) < 12 ? "am" : "pm";
      }), Ue = (0, e.computed)(() => {
        const { value: g } = K;
        return g === null ? null : Number(xe.value(g, "HH", le.value));
      }), Yt = (0, e.computed)(() => {
        const { value: g } = K;
        return g === null ? null : Number(xe.value(g, "mm", le.value));
      }), ra = (0, e.computed)(() => {
        const { value: g } = K;
        return g === null ? null : Number(xe.value(g, "ss", le.value));
      });
      function Ma(g, P) {
        const { onUpdateFormattedValue: R, "onUpdate:formattedValue": ee } = _;
        R && (0, b.call)(R, g, P), ee && (0, b.call)(ee, g, P);
      }
      function na(g) {
        return g === null ? null : xe.value(g, _.valueFormat || _.format);
      }
      function Te(g) {
        const { onUpdateValue: P, "onUpdate:value": R, onChange: ee } = _, { nTriggerFormChange: Le, nTriggerFormInput: je } = A, Ce = na(g);
        P && (0, b.call)(P, g, Ce), R && (0, b.call)(R, g, Ce), ee && (0, b.call)(ee, g, Ce), Ma(Ce, g), ye.value = g, Le(), je();
      }
      function ia(g) {
        const { onFocus: P } = _, { nTriggerFormFocus: R } = A;
        P && (0, b.call)(P, g), R();
      }
      function Ft(g) {
        const { onBlur: P } = _, { nTriggerFormBlur: R } = A;
        P && (0, b.call)(P, g), R();
      }
      function Oa() {
        const { onConfirm: g } = _;
        g && (0, b.call)(g, K.value, na(K.value));
      }
      function ka(g) {
        var P;
        g.stopPropagation(), Te(null), ze(null), (P = _.onClear) === null || P === void 0 || P.call(_);
      }
      function At() {
        at({
          returnFocus: !0
        });
      }
      function oa(g) {
        g.key === "Escape" && de.value && (0, b.markEventEffectPerformed)(g);
      }
      function xa(g) {
        var P;
        switch (g.key) {
          case "Escape":
            de.value && ((0, b.markEventEffectPerformed)(g), at({
              returnFocus: !0
            }));
            break;
          case "Tab":
            pe.shift && g.target === ((P = De.value) === null || P === void 0 ? void 0 : P.$el) && (g.preventDefault(), at({
              returnFocus: !0
            }));
            break;
        }
      }
      function Sa() {
        Qe.value = !0, (0, e.nextTick)(() => {
          Qe.value = !1;
        });
      }
      function Pa(g) {
        te.value || (0, i.happensIn)(g, "clear") || de.value || sa();
      }
      function Ut(g) {
        typeof g != "string" && (K.value === null ? Te((0, u.getTime)((0, u.setHours)((0, u.startOfHour)(/* @__PURE__ */ new Date()), g))) : Te((0, u.getTime)((0, u.setHours)(K.value, g))));
      }
      function la(g) {
        typeof g != "string" && (K.value === null ? Te((0, u.getTime)((0, u.setMinutes)((0, u.startOfMinute)(/* @__PURE__ */ new Date()), g))) : Te((0, u.getTime)((0, u.setMinutes)(K.value, g))));
      }
      function pt(g) {
        typeof g != "string" && (K.value === null ? Te((0, u.getTime)((0, u.setSeconds)((0, u.startOfSecond)(/* @__PURE__ */ new Date()), g))) : Te((0, u.getTime)((0, u.setSeconds)(K.value, g))));
      }
      function yt(g) {
        const { value: P } = K;
        if (P === null) {
          const R = /* @__PURE__ */ new Date(), ee = (0, u.getHours)(R);
          g === "pm" && ee < 12 ? Te((0, u.getTime)((0, u.setHours)(R, ee + 12))) : g === "am" && ee >= 12 && Te((0, u.getTime)((0, u.setHours)(R, ee - 12))), Te((0, u.getTime)(R));
        } else {
          const R = (0, u.getHours)(P);
          g === "pm" && R < 12 ? Te((0, u.getTime)((0, u.setHours)(P, R + 12))) : g === "am" && R >= 12 && Te((0, u.getTime)((0, u.setHours)(P, R - 12)));
        }
      }
      function ze(g) {
        g === void 0 && (g = K.value), g === null ? oe.value = "" : oe.value = xe.value(g, _.format, le.value);
      }
      function He(g) {
        Ht(g) || ia(g);
      }
      function $a(g) {
        var P;
        if (!Ht(g))
          if (de.value) {
            const R = (P = De.value) === null || P === void 0 ? void 0 : P.$el;
            R != null && R.contains(g.relatedTarget) || (ze(), Ft(g), at({
              returnFocus: !1
            }));
          } else
            ze(), Ft(g);
      }
      function Ra() {
        te.value || de.value || sa();
      }
      function Ia() {
        te.value || (ze(), at({
          returnFocus: !1
        }));
      }
      function ua() {
        if (!De.value)
          return;
        const { hourScrollRef: g, minuteScrollRef: P, secondScrollRef: R, amPmScrollRef: ee } = De.value;
        [g, P, R, ee].forEach((Le) => {
          var je;
          if (!Le)
            return;
          const Ce = (je = Le.contentRef) === null || je === void 0 ? void 0 : je.querySelector("[data-active]");
          Ce && Le.scrollTo({
            top: Ce.offsetTop
          });
        });
      }
      function kt(g) {
        J.value = g;
        const { onUpdateShow: P, "onUpdate:show": R } = _;
        P && (0, b.call)(P, g), R && (0, b.call)(R, g);
      }
      function Ht(g) {
        var P, R, ee;
        return !!(!((R = (P = ne.value) === null || P === void 0 ? void 0 : P.wrapperElRef) === null || R === void 0) && R.contains(g.relatedTarget) || !((ee = De.value) === null || ee === void 0) && ee.$el.contains(g.relatedTarget));
      }
      function sa() {
        Ae.value = K.value, kt(!0), (0, e.nextTick)(ua);
      }
      function Na(g) {
        var P, R;
        de.value && !(!((R = (P = ne.value) === null || P === void 0 ? void 0 : P.wrapperElRef) === null || R === void 0) && R.contains((0, i.getPreciseEventTarget)(g))) && at({
          returnFocus: !1
        });
      }
      function at({ returnFocus: g }) {
        var P;
        de.value && (kt(!1), g && ((P = ne.value) === null || P === void 0 || P.focus()));
      }
      function Je(g) {
        if (g === "") {
          Te(null);
          return;
        }
        const P = (0, s.strictParse)(g, _.format, /* @__PURE__ */ new Date(), le.value);
        if (oe.value = g, (0, u.isValid)(P)) {
          const { value: R } = K;
          if (R !== null) {
            const ee = (0, u.set)(R, {
              hours: (0, u.getHours)(P),
              minutes: (0, u.getMinutes)(P),
              seconds: (0, u.getSeconds)(P)
            });
            Te((0, u.getTime)(ee));
          } else
            Te((0, u.getTime)(P));
        }
      }
      function ut() {
        Te(Ae.value), kt(!1);
      }
      function da() {
        const g = /* @__PURE__ */ new Date(), P = {
          hours: u.getHours,
          minutes: u.getMinutes,
          seconds: u.getSeconds
        }, [R, ee, Le] = ["hours", "minutes", "seconds"].map((Ce) => !_[Ce] || (0, p.isTimeInStep)(P[Ce](g), Ce, _[Ce]) ? P[Ce](g) : (0, p.findSimilarTime)(P[Ce](g), Ce, _[Ce])), je = (0, u.setSeconds)((0, u.setMinutes)((0, u.setHours)(K.value ? K.value : (0, u.getTime)(g), R), ee), Le);
        Te((0, u.getTime)(je));
      }
      function Vt() {
        ze(), Oa(), at({
          returnFocus: !0
        });
      }
      function Ea(g) {
        Ht(g) || (ze(), Ft(g), at({
          returnFocus: !1
        }));
      }
      (0, e.watch)(K, (g) => {
        ze(g), Sa(), (0, e.nextTick)(ua);
      }), (0, e.watch)(de, () => {
        Et.value && Te(Ae.value);
      }), (0, e.provide)(m.timePickerInjectionKey, {
        mergedThemeRef: re,
        mergedClsPrefixRef: H
      });
      const Wt = {
        focus: () => {
          var g;
          (g = ne.value) === null || g === void 0 || g.focus();
        },
        blur: () => {
          var g;
          (g = ne.value) === null || g === void 0 || g.blur();
        }
      }, it = (0, e.computed)(() => {
        const { common: { cubicBezierEaseInOut: g }, self: { iconColor: P, iconColorDisabled: R } } = re.value;
        return {
          "--n-icon-color-override": P,
          "--n-icon-color-disabled-override": R,
          "--n-bezier": g
        };
      }), M = x ? (0, v.useThemeClass)("time-picker-trigger", void 0, it, _) : void 0, E = (0, e.computed)(() => {
        const { self: { panelColor: g, itemTextColor: P, itemTextColorActive: R, itemColorHover: ee, panelDividerColor: Le, panelBoxShadow: je, itemOpacityDisabled: Ce, borderRadius: Nr, itemFontSize: Er, itemWidth: Yr, itemHeight: Fr, panelActionPadding: Ar, itemBorderRadius: Ur }, common: { cubicBezierEaseInOut: Hr } } = re.value;
        return {
          "--n-bezier": Hr,
          "--n-border-radius": Nr,
          "--n-item-color-hover": ee,
          "--n-item-font-size": Er,
          "--n-item-height": Fr,
          "--n-item-opacity-disabled": Ce,
          "--n-item-text-color": P,
          "--n-item-text-color-active": R,
          "--n-item-width": Yr,
          "--n-panel-action-padding": Ar,
          "--n-panel-box-shadow": je,
          "--n-panel-color": g,
          "--n-panel-divider-color": Le,
          "--n-item-border-radius": Ur
        };
      }), w = x ? (0, v.useThemeClass)("time-picker", void 0, E, _) : void 0;
      return {
        focus: Wt.focus,
        blur: Wt.blur,
        mergedStatus: q,
        mergedBordered: N,
        mergedClsPrefix: H,
        namespace: k,
        uncontrolledValue: ye,
        mergedValue: K,
        isMounted: (0, r.useIsMounted)(),
        inputInstRef: ne,
        panelInstRef: De,
        adjustedTo: (0, b.useAdjustedTo)(_),
        mergedShow: de,
        localizedNow: tt,
        localizedPlaceholder: Xe,
        localizedNegativeText: qe,
        localizedPositiveText: $e,
        hourInFormat: I,
        minuteInFormat: j,
        secondInFormat: _e,
        mergedAttrSize: Ca,
        displayTimeString: oe,
        mergedSize: z,
        mergedDisabled: te,
        isValueInvalid: Et,
        isHourInvalid: lt,
        isMinuteInvalid: gt,
        isSecondInvalid: ta,
        transitionDisabled: Qe,
        hourValue: Ue,
        minuteValue: Yt,
        secondValue: ra,
        amPmValue: aa,
        handleInputKeydown: oa,
        handleTimeInputFocus: He,
        handleTimeInputBlur: $a,
        handleNowClick: da,
        handleConfirmClick: Vt,
        handleTimeInputUpdateValue: Je,
        handleMenuFocusOut: Ea,
        handleCancelClick: ut,
        handleClickOutside: Na,
        handleTimeInputActivate: Ra,
        handleTimeInputDeactivate: Ia,
        handleHourClick: Ut,
        handleMinuteClick: la,
        handleSecondClick: pt,
        handleAmPmClick: yt,
        handleTimeInputClear: ka,
        handleFocusDetectorFocus: At,
        handleMenuKeydown: xa,
        handleTriggerClick: Pa,
        mergedTheme: re,
        triggerCssVars: x ? void 0 : it,
        triggerThemeClass: M == null ? void 0 : M.themeClass,
        triggerOnRender: M == null ? void 0 : M.onRender,
        cssVars: x ? void 0 : E,
        themeClass: w == null ? void 0 : w.themeClass,
        onRender: w == null ? void 0 : w.onRender
      };
    },
    render() {
      const { mergedClsPrefix: _, $slots: N, triggerOnRender: H } = this;
      return H == null || H(), (0, e.h)(
        "div",
        { class: [`${_}-time-picker`, this.triggerThemeClass], style: this.triggerCssVars },
        (0, e.h)(n.VBinder, null, {
          default: () => [
            (0, e.h)(n.VTarget, null, {
              default: () => (0, e.h)(c.NInput, { ref: "inputInstRef", status: this.mergedStatus, value: this.displayTimeString, bordered: this.mergedBordered, passivelyActivated: !0, attrSize: this.mergedAttrSize, theme: this.mergedTheme.peers.Input, themeOverrides: this.mergedTheme.peerOverrides.Input, stateful: this.stateful, size: this.mergedSize, placeholder: this.localizedPlaceholder, clearable: this.clearable, disabled: this.mergedDisabled, textDecoration: this.isValueInvalid ? "line-through" : void 0, onFocus: this.handleTimeInputFocus, onBlur: this.handleTimeInputBlur, onActivate: this.handleTimeInputActivate, onDeactivate: this.handleTimeInputDeactivate, onUpdateValue: this.handleTimeInputUpdateValue, onClear: this.handleTimeInputClear, internalDeactivateOnEnter: !0, internalForceFocus: this.mergedShow, readonly: this.inputReadonly || this.mergedDisabled, onClick: this.handleTriggerClick, onKeydown: this.handleInputKeydown }, this.showIcon ? {
                [this.clearable ? "clear-icon-placeholder" : "suffix"]: () => (0, e.h)(h.NBaseIcon, { clsPrefix: _, class: `${_}-time-picker-icon` }, {
                  default: () => N.icon ? N.icon() : (0, e.h)(d.TimeIcon, null)
                })
              } : null)
            }),
            (0, e.h)(n.VFollower, { teleportDisabled: this.adjustedTo === b.useAdjustedTo.tdkey, show: this.mergedShow, to: this.adjustedTo, containerClass: this.namespace, placement: this.placement }, {
              default: () => (0, e.h)(e.Transition, { name: "fade-in-scale-up-transition", appear: this.isMounted }, {
                default: () => {
                  var k;
                  return this.mergedShow ? ((k = this.onRender) === null || k === void 0 || k.call(this), (0, e.withDirectives)((0, e.h)(D.default, { ref: "panelInstRef", actions: this.actions, class: this.themeClass, style: this.cssVars, seconds: this.seconds, minutes: this.minutes, hours: this.hours, transitionDisabled: this.transitionDisabled, hourValue: this.hourValue, showHour: this.hourInFormat, isHourInvalid: this.isHourInvalid, isHourDisabled: this.isHourDisabled, minuteValue: this.minuteValue, showMinute: this.minuteInFormat, isMinuteInvalid: this.isMinuteInvalid, isMinuteDisabled: this.isMinuteDisabled, secondValue: this.secondValue, amPmValue: this.amPmValue, showSecond: this.secondInFormat, isSecondInvalid: this.isSecondInvalid, isSecondDisabled: this.isSecondDisabled, isValueInvalid: this.isValueInvalid, nowText: this.localizedNow, confirmText: this.localizedPositiveText, use12Hours: this.use12Hours, onFocusout: this.handleMenuFocusOut, onKeydown: this.handleMenuKeydown, onHourClick: this.handleHourClick, onMinuteClick: this.handleMinuteClick, onSecondClick: this.handleSecondClick, onAmPmClick: this.handleAmPmClick, onNowClick: this.handleNowClick, onConfirmClick: this.handleConfirmClick, onFocusDetectorFocus: this.handleFocusDetectorFocus }), [
                    [
                      o.clickoutside,
                      this.handleClickOutside,
                      void 0,
                      { capture: !0 }
                    ]
                  ])) : null;
                }
              })
            })
          ]
        })
      );
    }
  });
})(yl);
(function(a) {
  var t = be && be.__importDefault || function(r) {
    return r && r.__esModule ? r : { default: r };
  };
  Object.defineProperty(a, "__esModule", { value: !0 }), a.timePickerProps = a.NTimePicker = void 0;
  var e = yl;
  Object.defineProperty(a, "NTimePicker", { enumerable: !0, get: function() {
    return t(e).default;
  } }), Object.defineProperty(a, "timePickerProps", { enumerable: !0, get: function() {
    return e.timePickerProps;
  } });
})(Mi);
var $t = {}, Lt = {};
Object.defineProperty(Lt, "__esModule", { value: !0 });
Lt.usePanelCommonProps = Lt.usePanelCommon = void 0;
const Aa = Ke, Dh = Xn, Th = Zt, _h = "HH:mm:ss", Ch = {
  active: Boolean,
  dateFormat: String,
  timeFormat: {
    type: String,
    value: _h
  },
  value: {
    type: [Array, Number],
    default: null
  },
  shortcuts: Object,
  defaultTime: [Number, String, Array],
  onClear: Function,
  onConfirm: Function,
  onClose: Function,
  onTabOut: Function,
  onUpdateValue: {
    type: Function,
    required: !0
  },
  themeClass: String,
  onRender: Function,
  panel: Boolean
};
Lt.usePanelCommonProps = Ch;
function Mh(a) {
  const {
    dateLocaleRef: t,
    timePickerSizeRef: e,
    timePickerPropsRef: r,
    localeRef: n,
    mergedClsPrefixRef: o,
    mergedThemeRef: i
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  } = (0, Aa.inject)(Th.datePickerInjectionKey), u = (0, Aa.computed)(() => ({
    locale: t.value.locale
  })), l = (0, Aa.ref)(null), s = (0, Dh.useKeyboard)();
  function d() {
    const { onClear: A } = a;
    A && A();
  }
  function c() {
    const { onConfirm: A, value: z } = a;
    A && A(z);
  }
  function h(A, z) {
    const { onUpdateValue: te } = a;
    te(A, z);
  }
  function v(A = !1) {
    const { onClose: z } = a;
    z && z(A);
  }
  function b() {
    const { onTabOut: A } = a;
    A && A();
  }
  function O() {
    h(null, !0), v(!0), d();
  }
  function D() {
    b();
  }
  function m() {
    (a.active || a.panel) && (0, Aa.nextTick)(() => {
      const { value: A } = l;
      if (!A)
        return;
      const z = A.querySelectorAll("[data-n-date]");
      z.forEach((te) => {
        te.classList.add("transition-disabled");
      }), A.offsetWidth, z.forEach((te) => {
        te.classList.remove("transition-disabled");
      });
    });
  }
  function p(A) {
    A.key === "Tab" && A.target === l.value && s.shift && (A.preventDefault(), b());
  }
  function y(A) {
    const { value: z } = l;
    s.tab && A.target === z && (z != null && z.contains(A.relatedTarget)) && b();
  }
  let C = null, _ = !1;
  function N() {
    C = a.value, _ = !0;
  }
  function H() {
    _ = !1;
  }
  function k() {
    _ && (h(C, !1), _ = !1);
  }
  function x(A) {
    return typeof A == "function" ? A() : A;
  }
  const $ = (0, Aa.ref)(!1);
  function Y() {
    $.value = !$.value;
  }
  return {
    mergedTheme: i,
    mergedClsPrefix: o,
    dateFnsOptions: u,
    timePickerSize: e,
    timePickerProps: r,
    selfRef: l,
    locale: n,
    doConfirm: c,
    doClose: v,
    doUpdateValue: h,
    doTabOut: b,
    handleClearClick: O,
    handleFocusDetectorFocus: D,
    disableTransitionOneTick: m,
    handlePanelKeyDown: p,
    handlePanelFocus: y,
    cachePendingValue: N,
    clearPendingValue: H,
    restorePendingValue: k,
    getShortcutValue: x,
    handleShortcutMouseleave: k,
    showMonthYearPanel: $,
    handleOpenQuickSelectMonthPanel: Y
  };
}
Lt.usePanelCommon = Mh;
Object.defineProperty($t, "__esModule", { value: !0 });
$t.useCalendarProps = $t.useCalendar = void 0;
const Be = Ke, B = Kt, zt = Ee, Oh = Zt, xl = Lt, jr = vt, kh = Object.assign(Object.assign({}, xl.usePanelCommonProps), { actions: {
  type: Array,
  default: () => ["now", "clear", "confirm"]
} });
$t.useCalendarProps = kh;
function xh(a, t) {
  const e = (0, xl.usePanelCommon)(a), {
    isValueInvalidRef: r,
    isDateDisabledRef: n,
    isDateInvalidRef: o,
    isTimeInvalidRef: i,
    isDateTimeInvalidRef: u,
    isHourDisabledRef: l,
    isMinuteDisabledRef: s,
    isSecondDisabledRef: d,
    localeRef: c,
    firstDayOfWeekRef: h,
    datePickerSlots: v
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  } = (0, Be.inject)(Oh.datePickerInjectionKey), b = {
    isValueInvalid: r,
    isDateDisabled: n,
    isDateInvalid: o,
    isTimeInvalid: i,
    isDateTimeInvalid: u,
    isHourDisabled: l,
    isMinuteDisabled: s,
    isSecondDisabled: d
  }, O = (0, Be.computed)(() => a.dateFormat || c.value.dateFormat), D = (0, Be.ref)(a.value === null || Array.isArray(a.value) ? "" : (0, B.format)(a.value, O.value)), m = (0, Be.ref)(a.value === null || Array.isArray(a.value) ? Date.now() : a.value), p = (0, Be.ref)(null), y = (0, Be.ref)(null), C = (0, Be.ref)(null), _ = (0, Be.ref)(Date.now()), N = (0, Be.computed)(() => {
    var I;
    return (0, zt.dateArray)(m.value, a.value, _.value, (I = h.value) !== null && I !== void 0 ? I : c.value.firstDayOfWeek);
  }), H = (0, Be.computed)(() => {
    const { value: I } = a;
    return (0, zt.monthArray)(m.value, Array.isArray(I) ? null : I, _.value);
  }), k = (0, Be.computed)(() => {
    const { value: I } = a;
    return (0, zt.yearArray)(Array.isArray(I) ? null : I, _.value);
  }), x = (0, Be.computed)(() => {
    const { value: I } = a;
    return (0, zt.quarterArray)(m.value, Array.isArray(I) ? null : I, _.value);
  }), $ = (0, Be.computed)(() => N.value.slice(0, 7).map((I) => {
    const { ts: j } = I;
    return (0, B.format)(j, c.value.dayFormat, e.dateFnsOptions.value);
  })), Y = (0, Be.computed)(() => (0, B.format)(m.value, c.value.monthFormat, e.dateFnsOptions.value)), A = (0, Be.computed)(() => (0, B.format)(m.value, c.value.yearFormat, e.dateFnsOptions.value));
  (0, Be.watch)(m, (I, j) => {
    (t === "date" || t === "datetime") && ((0, B.isSameMonth)(I, j) || e.disableTransitionOneTick());
  }), (0, Be.watch)((0, Be.computed)(() => a.value), (I) => {
    I !== null && !Array.isArray(I) ? (D.value = (0, B.format)(I, O.value, e.dateFnsOptions.value), m.value = I) : D.value = "";
  });
  function z(I) {
    return t === "datetime" ? (0, B.getTime)((0, B.startOfSecond)(I)) : t === "month" ? (0, B.getTime)((0, B.startOfMonth)(I)) : t === "year" ? (0, B.getTime)((0, B.startOfYear)(I)) : t === "quarter" ? (0, B.getTime)((0, B.startOfQuarter)(I)) : (0, B.getTime)((0, B.startOfDay)(I));
  }
  function te(I) {
    const { isDateDisabled: { value: j } } = b;
    return j ? j(I) : !1;
  }
  function q(I) {
    const j = (0, zt.strictParse)(I, O.value, /* @__PURE__ */ new Date(), e.dateFnsOptions.value);
    if ((0, B.isValid)(j)) {
      if (a.value === null)
        e.doUpdateValue((0, B.getTime)(z(Date.now())), a.panel);
      else if (!Array.isArray(a.value)) {
        const _e = (0, B.set)(a.value, {
          year: (0, B.getYear)(j),
          month: (0, B.getMonth)(j),
          date: (0, B.getDate)(j)
        });
        e.doUpdateValue((0, B.getTime)(z((0, B.getTime)(_e))), a.panel);
      }
    } else
      D.value = I;
  }
  function re() {
    const I = (0, zt.strictParse)(D.value, O.value, /* @__PURE__ */ new Date(), e.dateFnsOptions.value);
    if ((0, B.isValid)(I)) {
      if (a.value === null)
        e.doUpdateValue((0, B.getTime)(z(Date.now())), !1);
      else if (!Array.isArray(a.value)) {
        const j = (0, B.set)(a.value, {
          year: (0, B.getYear)(I),
          month: (0, B.getMonth)(I),
          date: (0, B.getDate)(I)
        });
        e.doUpdateValue((0, B.getTime)(z((0, B.getTime)(j))), !1);
      }
    } else
      Oe();
  }
  function pe() {
    e.doUpdateValue(null, !0), D.value = "", e.doClose(!0), e.handleClearClick();
  }
  function ne() {
    e.doUpdateValue((0, B.getTime)(z(Date.now())), !0);
    const I = Date.now();
    m.value = I, e.doClose(!0), a.panel && (t === "month" || t === "quarter" || t === "year") && (e.disableTransitionOneTick(), qe(I));
  }
  function De(I) {
    if (te(I.ts))
      return;
    let j;
    if (a.value !== null && !Array.isArray(a.value) ? j = a.value : j = Date.now(), t === "datetime" && a.defaultTime !== null && !Array.isArray(a.defaultTime)) {
      const _e = (0, zt.getDefaultTime)(a.defaultTime);
      _e && (j = (0, B.getTime)((0, B.set)(j, _e)));
    }
    switch (j = (0, B.getTime)(I.type === "quarter" && I.dateObject.quarter ? (0, B.setQuarter)((0, B.setYear)(j, I.dateObject.year), I.dateObject.quarter) : (0, B.set)(j, I.dateObject)), e.doUpdateValue(z(j), a.panel || t === "date" || t === "year"), t) {
      case "date":
        e.doClose();
        break;
      case "year":
        a.panel && e.disableTransitionOneTick(), e.doClose();
        break;
      case "month":
        e.disableTransitionOneTick(), qe(j);
        break;
      case "quarter":
        e.disableTransitionOneTick(), qe(j);
        break;
    }
  }
  function le(I, j) {
    let _e;
    a.value !== null && !Array.isArray(a.value) ? _e = a.value : _e = Date.now(), _e = (0, B.getTime)(I.type === "month" ? (0, B.setMonth)(_e, I.dateObject.month) : (0, B.setYear)(_e, I.dateObject.year)), j(_e), qe(_e);
  }
  function ie(I) {
    m.value = I;
  }
  function Oe(I) {
    if (a.value === null || Array.isArray(a.value)) {
      D.value = "";
      return;
    }
    I === void 0 && (I = a.value), D.value = (0, B.format)(I, O.value, e.dateFnsOptions.value);
  }
  function ke() {
    b.isDateInvalid.value || b.isTimeInvalid.value || (e.doConfirm(), ye());
  }
  function ye() {
    a.active && e.doClose();
  }
  function K() {
    m.value = (0, B.getTime)((0, B.addYears)(m.value, 1));
  }
  function xe() {
    m.value = (0, B.getTime)((0, B.addYears)(m.value, -1));
  }
  function oe() {
    m.value = (0, B.getTime)((0, B.addMonths)(m.value, 1));
  }
  function J() {
    m.value = (0, B.getTime)((0, B.addMonths)(m.value, -1));
  }
  function Z() {
    const { value: I } = p;
    return I == null ? void 0 : I.listElRef;
  }
  function de() {
    const { value: I } = p;
    return I == null ? void 0 : I.itemsElRef;
  }
  function Ae(I) {
    var j;
    (j = y.value) === null || j === void 0 || j.sync();
  }
  function Qe(I) {
    I !== null && e.doUpdateValue(I, a.panel);
  }
  function tt(I) {
    e.cachePendingValue();
    const j = e.getShortcutValue(I);
    typeof j == "number" && e.doUpdateValue(j, !1);
  }
  function Xe(I) {
    const j = e.getShortcutValue(I);
    typeof j == "number" && (e.doUpdateValue(j, a.panel), e.clearPendingValue(), ke());
  }
  function qe(I) {
    const { value: j } = a;
    if (C.value) {
      const _e = I === void 0 ? j === null ? (0, B.getMonth)(Date.now()) : (0, B.getMonth)(j) : (0, B.getMonth)(I);
      C.value.scrollTo({ top: _e * jr.MONTH_ITEM_HEIGHT });
    }
    if (p.value) {
      const _e = (I === void 0 ? j === null ? (0, B.getYear)(Date.now()) : (0, B.getYear)(j) : (0, B.getYear)(I)) - jr.START_YEAR;
      p.value.scrollTo({ top: _e * jr.MONTH_ITEM_HEIGHT });
    }
  }
  const $e = {
    monthScrollbarRef: C,
    yearScrollbarRef: y,
    yearVlRef: p
  };
  return Object.assign(Object.assign(Object.assign(Object.assign({
    dateArray: N,
    monthArray: H,
    yearArray: k,
    quarterArray: x,
    calendarYear: A,
    calendarMonth: Y,
    weekdays: $,
    mergedIsDateDisabled: te,
    nextYear: K,
    prevYear: xe,
    nextMonth: oe,
    prevMonth: J,
    handleNowClick: ne,
    handleConfirmClick: ke,
    handleSingleShortcutMouseenter: tt,
    handleSingleShortcutClick: Xe
  }, b), e), $e), {
    // datetime only
    handleDateClick: De,
    handleDateInputBlur: re,
    handleDateInput: q,
    handleTimePickerChange: Qe,
    clearSelectedDateTime: pe,
    virtualListContainer: Z,
    virtualListContent: de,
    handleVirtualListScroll: Ae,
    timePickerSize: e.timePickerSize,
    dateInputValue: D,
    datePickerSlots: v,
    handleQuickMonthClick: le,
    justifyColumnsScrollState: qe,
    calendarValue: m,
    onUpdateCalendarValue: ie
  });
}
$t.useCalendar = xh;
var _a = {}, Ir = {};
Object.defineProperty(Ir, "__esModule", { value: !0 });
const Ve = Ke, Sh = Ba, er = Qt, qr = Ot, Ph = vt, Ji = $t;
Ir.default = (0, Ve.defineComponent)({
  name: "MonthPanel",
  props: Object.assign(Object.assign({}, Ji.useCalendarProps), {
    type: {
      type: String,
      required: !0
    },
    // panelHeader prop
    useAsQuickJump: Boolean
  }),
  setup(a) {
    const t = (0, Ji.useCalendar)(a, a.type), e = (o) => {
      switch (o.type) {
        case "year":
          return o.dateObject.year;
        case "month":
          return o.dateObject.month + 1;
        case "quarter":
          return `Q${o.dateObject.quarter}`;
      }
    }, { useAsQuickJump: r } = a, n = (o, i, u) => {
      const { mergedIsDateDisabled: l, handleDateClick: s, handleQuickMonthClick: d } = t;
      return (0, Ve.h)("div", { "data-n-date": !0, key: i, class: [
        `${u}-date-panel-month-calendar__picker-col-item`,
        {
          [`${u}-date-panel-month-calendar__picker-col-item--current`]: o.isCurrent,
          [`${u}-date-panel-month-calendar__picker-col-item--selected`]: o.selected,
          [`${u}-date-panel-month-calendar__picker-col-item--disabled`]: !r && l(o.ts)
        }
      ], onClick: () => {
        r ? d(o, (c) => {
          a.onUpdateValue(c, !1);
        }) : s(o);
      } }, e(o));
    };
    return (0, Ve.onMounted)(() => {
      t.justifyColumnsScrollState();
    }), Object.assign(Object.assign({}, t), { renderItem: n });
  },
  render() {
    const { mergedClsPrefix: a, mergedTheme: t, shortcuts: e, actions: r, renderItem: n, type: o, onRender: i } = this;
    return i == null || i(), (0, Ve.h)(
      "div",
      { ref: "selfRef", tabindex: 0, class: [
        `${a}-date-panel`,
        `${a}-date-panel--month`,
        !this.panel && `${a}-date-panel--shadow`,
        this.themeClass
      ], onFocus: this.handlePanelFocus, onKeydown: this.handlePanelKeyDown },
      (0, Ve.h)(
        "div",
        { class: `${a}-date-panel-month-calendar` },
        (0, Ve.h)(qr.NScrollbar, { ref: "yearScrollbarRef", class: `${a}-date-panel-month-calendar__picker-col`, theme: t.peers.Scrollbar, themeOverrides: t.peerOverrides.Scrollbar, container: this.virtualListContainer, content: this.virtualListContent, horizontalRailStyle: { zIndex: 1 }, verticalRailStyle: { zIndex: 1 } }, {
          default: () => (0, Ve.h)(Sh.VirtualList, { ref: "yearVlRef", items: this.yearArray, itemSize: Ph.MONTH_ITEM_HEIGHT, showScrollbar: !1, keyField: "ts", onScroll: this.handleVirtualListScroll, paddingBottom: 4 }, {
            default: ({ item: u, index: l }) => n(u, l, a)
          })
        }),
        o === "month" || o === "quarter" ? (0, Ve.h)(
          "div",
          { class: `${a}-date-panel-month-calendar__picker-col` },
          (0, Ve.h)(qr.NScrollbar, { ref: "monthScrollbarRef", theme: t.peers.Scrollbar, themeOverrides: t.peerOverrides.Scrollbar }, {
            default: () => [
              (o === "month" ? this.monthArray : this.quarterArray).map((u, l) => n(u, l, a)),
              (0, Ve.h)("div", { class: `${a}-date-panel-${o}-calendar__padding` })
            ]
          })
        ) : null
      ),
      this.datePickerSlots.footer ? (0, Ve.h)("div", { class: `${a}-date-panel-footer` }, {
        default: this.datePickerSlots.footer
      }) : null,
      r != null && r.length || e ? (0, Ve.h)(
        "div",
        { class: `${a}-date-panel-actions` },
        (0, Ve.h)("div", { class: `${a}-date-panel-actions__prefix` }, e && Object.keys(e).map((u) => {
          const l = e[u];
          return Array.isArray(l) ? null : (0, Ve.h)(er.NxButton, { size: "tiny", onMouseenter: () => {
            this.handleSingleShortcutMouseenter(l);
          }, onClick: () => {
            this.handleSingleShortcutClick(l);
          }, onMouseleave: () => {
            this.handleShortcutMouseleave();
          } }, { default: () => u });
        })),
        (0, Ve.h)(
          "div",
          { class: `${a}-date-panel-actions__suffix` },
          r != null && r.includes("clear") ? (0, Ve.h)(er.NButton, { theme: t.peers.Button, themeOverrides: t.peerOverrides.Button, size: "tiny", onClick: this.handleClearClick }, { default: () => this.locale.clear }) : null,
          r != null && r.includes("now") ? (0, Ve.h)(er.NButton, { theme: t.peers.Button, themeOverrides: t.peerOverrides.Button, size: "tiny", onClick: this.handleNowClick }, { default: () => this.locale.now }) : null,
          r != null && r.includes("confirm") ? (0, Ve.h)(er.NButton, { theme: t.peers.Button, themeOverrides: t.peerOverrides.Button, size: "tiny", type: "primary", disabled: this.isDateInvalid, onClick: this.handleConfirmClick }, { default: () => this.locale.confirm }) : null
        )
      ) : null,
      (0, Ve.h)(qr.NBaseFocusDetector, { onFocus: this.handleFocusDetectorFocus })
    );
  }
});
var $h = be && be.__importDefault || function(a) {
  return a && a.__esModule ? a : { default: a };
};
Object.defineProperty(_a, "__esModule", { value: !0 });
const et = Ke, Lr = Ba, Rh = Gn, Ih = za, Nh = $h(Ir);
_a.default = (0, et.defineComponent)({
  props: {
    mergedClsPrefix: {
      type: String,
      required: !0
    },
    value: Number,
    monthBeforeYear: {
      type: Boolean,
      required: !0
    },
    calendarMonth: {
      type: String,
      required: !0
    },
    calendarYear: {
      type: String,
      required: !0
    },
    onUpdateValue: {
      type: Function,
      required: !0
    }
  },
  setup() {
    const a = (0, et.ref)(null), t = (0, et.ref)(null), e = (0, et.ref)(!1);
    function r(o) {
      var i;
      e.value && !(!((i = a.value) === null || i === void 0) && i.contains((0, Ih.getPreciseEventTarget)(o))) && (e.value = !1);
    }
    function n() {
      e.value = !e.value;
    }
    return {
      show: e,
      triggerRef: a,
      monthPanelRef: t,
      handleHeaderClick: n,
      handleClickOutside: r
    };
  },
  render() {
    const { handleClickOutside: a, mergedClsPrefix: t } = this;
    return (0, et.h)(
      "div",
      { class: `${t}-date-panel-month__month-year`, ref: "triggerRef" },
      (0, et.h)(Lr.VBinder, null, {
        default: () => [
          (0, et.h)(Lr.VTarget, null, {
            default: () => (0, et.h)("div", { class: [
              `${t}-date-panel-month__text`,
              this.show && `${t}-date-panel-month__text--active`
            ], onClick: this.handleHeaderClick }, this.monthBeforeYear ? [this.calendarMonth, " ", this.calendarYear] : [this.calendarYear, " ", this.calendarMonth])
          }),
          (0, et.h)(Lr.VFollower, { show: this.show, teleportDisabled: !0 }, {
            default: () => (0, et.h)(et.Transition, { name: "fade-in-scale-up-transition", appear: !0 }, {
              default: () => this.show ? (0, et.withDirectives)((0, et.h)(Nh.default, {
                ref: "monthPanelRef",
                onUpdateValue: this.onUpdateValue,
                actions: [],
                // month and year click show month type
                type: "month",
                key: "month",
                useAsQuickJump: !0,
                value: this.value
              }), [
                [
                  Rh.clickoutside,
                  a,
                  void 0,
                  { capture: !0 }
                ]
              ]) : null
            })
          })
        ]
      })
    );
  }
});
var Eh = be && be.__importDefault || function(a) {
  return a && a.__esModule ? a : { default: a };
};
Object.defineProperty(Ci, "__esModule", { value: !0 });
const he = Ke, tr = Qt, Yh = Mi, Fh = Dr, ar = Da, Ah = Ot, eo = $t, Uh = Eh(_a), rr = ht;
Ci.default = (0, he.defineComponent)({
  name: "DateTimePanel",
  props: eo.useCalendarProps,
  setup(a) {
    return (0, eo.useCalendar)(a, "datetime");
  },
  render() {
    var a, t, e, r;
    const { mergedClsPrefix: n, mergedTheme: o, shortcuts: i, timePickerProps: u, onRender: l, $slots: s } = this;
    return l == null || l(), (0, he.h)(
      "div",
      { ref: "selfRef", tabindex: 0, class: [
        `${n}-date-panel`,
        `${n}-date-panel--datetime`,
        !this.panel && `${n}-date-panel--shadow`,
        this.themeClass
      ], onKeydown: this.handlePanelKeyDown, onFocus: this.handlePanelFocus },
      (0, he.h)(
        "div",
        { class: `${n}-date-panel-header` },
        (0, he.h)(Fh.NInput, { value: this.dateInputValue, theme: o.peers.Input, themeOverrides: o.peerOverrides.Input, stateful: !1, size: this.timePickerSize, class: `${n}-date-panel-date-input`, textDecoration: this.isDateInvalid ? "line-through" : "", placeholder: this.locale.selectDate, onBlur: this.handleDateInputBlur, onUpdateValue: this.handleDateInput }),
        (0, he.h)(Yh.NTimePicker, Object.assign({ size: this.timePickerSize, placeholder: this.locale.selectTime, format: this.timeFormat }, Array.isArray(u) ? void 0 : u, { showIcon: !1, to: !1, theme: o.peers.TimePicker, themeOverrides: o.peerOverrides.TimePicker, value: Array.isArray(this.value) ? null : this.value, isHourDisabled: this.isHourDisabled, isMinuteDisabled: this.isMinuteDisabled, isSecondDisabled: this.isSecondDisabled, onUpdateValue: this.handleTimePickerChange, stateful: !1 }))
      ),
      (0, he.h)(
        "div",
        { class: `${n}-date-panel-calendar` },
        (0, he.h)(
          "div",
          { class: `${n}-date-panel-month` },
          (0, he.h)("div", { class: `${n}-date-panel-month__fast-prev`, onClick: this.prevYear }, (0, rr.resolveSlot)(s["prev-year"], () => [(0, he.h)(ar.FastBackwardIcon, null)])),
          (0, he.h)("div", { class: `${n}-date-panel-month__prev`, onClick: this.prevMonth }, (0, rr.resolveSlot)(s["prev-month"], () => [(0, he.h)(ar.BackwardIcon, null)])),
          (0, he.h)(Uh.default, { monthBeforeYear: this.locale.monthBeforeYear, value: this.calendarValue, onUpdateValue: this.onUpdateCalendarValue, mergedClsPrefix: n, calendarMonth: this.calendarMonth, calendarYear: this.calendarYear }),
          (0, he.h)("div", { class: `${n}-date-panel-month__next`, onClick: this.nextMonth }, (0, rr.resolveSlot)(s["next-month"], () => [(0, he.h)(ar.ForwardIcon, null)])),
          (0, he.h)("div", { class: `${n}-date-panel-month__fast-next`, onClick: this.nextYear }, (0, rr.resolveSlot)(s["next-year"], () => [(0, he.h)(ar.FastForwardIcon, null)]))
        ),
        (0, he.h)("div", { class: `${n}-date-panel-weekdays` }, this.weekdays.map((d) => (0, he.h)("div", { key: d, class: `${n}-date-panel-weekdays__day` }, d))),
        (0, he.h)("div", { class: `${n}-date-panel-dates` }, this.dateArray.map((d, c) => (0, he.h)(
          "div",
          { "data-n-date": !0, key: c, class: [
            `${n}-date-panel-date`,
            {
              [`${n}-date-panel-date--current`]: d.isCurrentDate,
              [`${n}-date-panel-date--selected`]: d.selected,
              [`${n}-date-panel-date--excluded`]: !d.inCurrentMonth,
              [`${n}-date-panel-date--disabled`]: this.mergedIsDateDisabled(d.ts)
            }
          ], onClick: () => {
            this.handleDateClick(d);
          } },
          (0, he.h)("div", { class: `${n}-date-panel-date__trigger` }),
          d.dateObject.date,
          d.isCurrentDate ? (0, he.h)("div", { class: `${n}-date-panel-date__sup` }) : null
        )))
      ),
      this.datePickerSlots.footer ? (0, he.h)("div", { class: `${n}-date-panel-footer` }, this.datePickerSlots.footer()) : null,
      !((a = this.actions) === null || a === void 0) && a.length || i ? (0, he.h)(
        "div",
        { class: `${n}-date-panel-actions` },
        (0, he.h)("div", { class: `${n}-date-panel-actions__prefix` }, i && Object.keys(i).map((d) => {
          const c = i[d];
          return Array.isArray(c) ? null : (0, he.h)(tr.NxButton, { size: "tiny", onMouseenter: () => {
            this.handleSingleShortcutMouseenter(c);
          }, onClick: () => {
            this.handleSingleShortcutClick(c);
          }, onMouseleave: () => {
            this.handleShortcutMouseleave();
          } }, { default: () => d });
        })),
        (0, he.h)(
          "div",
          { class: `${n}-date-panel-actions__suffix` },
          !((t = this.actions) === null || t === void 0) && t.includes("clear") ? (0, he.h)(tr.NButton, { theme: o.peers.Button, themeOverrides: o.peerOverrides.Button, size: "tiny", onClick: this.clearSelectedDateTime }, { default: () => this.locale.clear }) : null,
          !((e = this.actions) === null || e === void 0) && e.includes("now") ? (0, he.h)(tr.NButton, { theme: o.peers.Button, themeOverrides: o.peerOverrides.Button, size: "tiny", onClick: this.handleNowClick }, { default: () => this.locale.now }) : null,
          !((r = this.actions) === null || r === void 0) && r.includes("confirm") ? (0, he.h)(tr.NButton, { theme: o.peers.Button, themeOverrides: o.peerOverrides.Button, size: "tiny", type: "primary", disabled: this.isDateInvalid, onClick: this.handleConfirmClick }, { default: () => this.locale.confirm }) : null
        )
      ) : null,
      (0, he.h)(Ah.NBaseFocusDetector, { onFocus: this.handleFocusDetectorFocus })
    );
  }
});
var Ii = {}, Rt = {};
Object.defineProperty(Rt, "__esModule", { value: !0 });
Rt.useDualCalendarProps = Rt.useDualCalendar = void 0;
const ae = Ke, S = Kt, Ne = Ee, Sl = Lt, Hh = Zt, nr = vt, Vh = Object.assign(Object.assign({}, Sl.usePanelCommonProps), { defaultCalendarStartTime: Number, defaultCalendarEndTime: Number, bindCalendarMonths: Boolean, actions: {
  type: Array,
  default: () => ["clear", "confirm"]
} });
Rt.useDualCalendarProps = Vh;
function Wh(a, t) {
  var e, r;
  const {
    isDateDisabledRef: n,
    isStartHourDisabledRef: o,
    isEndHourDisabledRef: i,
    isStartMinuteDisabledRef: u,
    isEndMinuteDisabledRef: l,
    isStartSecondDisabledRef: s,
    isEndSecondDisabledRef: d,
    isStartDateInvalidRef: c,
    isEndDateInvalidRef: h,
    isStartTimeInvalidRef: v,
    isEndTimeInvalidRef: b,
    isStartValueInvalidRef: O,
    isEndValueInvalidRef: D,
    isRangeInvalidRef: m,
    localeRef: p,
    rangesRef: y,
    closeOnSelectRef: C,
    updateValueOnCloseRef: _,
    firstDayOfWeekRef: N,
    datePickerSlots: H
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  } = (0, ae.inject)(Hh.datePickerInjectionKey), k = {
    isDateDisabled: n,
    isStartHourDisabled: o,
    isEndHourDisabled: i,
    isStartMinuteDisabled: u,
    isEndMinuteDisabled: l,
    isStartSecondDisabled: s,
    isEndSecondDisabled: d,
    isStartDateInvalid: c,
    isEndDateInvalid: h,
    isStartTimeInvalid: v,
    isEndTimeInvalid: b,
    isStartValueInvalid: O,
    isEndValueInvalid: D,
    isRangeInvalid: m
  }, x = (0, Sl.usePanelCommon)(a), $ = (0, ae.ref)(null), Y = (0, ae.ref)(null), A = (0, ae.ref)(null), z = (0, ae.ref)(null), te = (0, ae.ref)(null), q = (0, ae.ref)(null), re = (0, ae.ref)(null), pe = (0, ae.ref)(null), { value: ne } = a, De = (e = a.defaultCalendarStartTime) !== null && e !== void 0 ? e : Array.isArray(ne) && typeof ne[0] == "number" ? ne[0] : Date.now(), le = (0, ae.ref)(De), ie = (0, ae.ref)((r = a.defaultCalendarEndTime) !== null && r !== void 0 ? r : Array.isArray(ne) && typeof ne[1] == "number" ? ne[1] : (0, S.getTime)((0, S.addMonths)(De, 1)));
  Ue(!0);
  const Oe = (0, ae.ref)(Date.now()), ke = (0, ae.ref)(!1), ye = (0, ae.ref)(0), K = (0, ae.computed)(() => a.dateFormat || p.value.dateFormat), xe = (0, ae.ref)(Array.isArray(ne) ? (0, S.format)(ne[0], K.value, x.dateFnsOptions.value) : ""), oe = (0, ae.ref)(Array.isArray(ne) ? (0, S.format)(ne[1], K.value, x.dateFnsOptions.value) : ""), J = (0, ae.computed)(() => ke.value ? "end" : "start"), Z = (0, ae.computed)(() => {
    var M;
    return (0, Ne.dateArray)(le.value, a.value, Oe.value, (M = N.value) !== null && M !== void 0 ? M : p.value.firstDayOfWeek);
  }), de = (0, ae.computed)(() => {
    var M;
    return (0, Ne.dateArray)(ie.value, a.value, Oe.value, (M = N.value) !== null && M !== void 0 ? M : p.value.firstDayOfWeek);
  }), Ae = (0, ae.computed)(() => Z.value.slice(0, 7).map((M) => {
    const { ts: E } = M;
    return (0, S.format)(E, p.value.dayFormat, x.dateFnsOptions.value);
  })), Qe = (0, ae.computed)(() => (0, S.format)(le.value, p.value.monthFormat, x.dateFnsOptions.value)), tt = (0, ae.computed)(() => (0, S.format)(ie.value, p.value.monthFormat, x.dateFnsOptions.value)), Xe = (0, ae.computed)(() => (0, S.format)(le.value, p.value.yearFormat, x.dateFnsOptions.value)), qe = (0, ae.computed)(() => (0, S.format)(ie.value, p.value.yearFormat, x.dateFnsOptions.value)), $e = (0, ae.computed)(() => {
    const { value: M } = a;
    return Array.isArray(M) ? M[0] : null;
  }), I = (0, ae.computed)(() => {
    const { value: M } = a;
    return Array.isArray(M) ? M[1] : null;
  }), j = (0, ae.computed)(() => {
    const { shortcuts: M } = a;
    return M || y.value;
  }), _e = (0, ae.computed)(() => (0, Ne.yearArray)((0, Ne.pluckValueFromRange)(a.value, "start"), Oe.value)), lt = (0, ae.computed)(() => (0, Ne.yearArray)((0, Ne.pluckValueFromRange)(a.value, "end"), Oe.value)), gt = (0, ae.computed)(() => {
    const M = (0, Ne.pluckValueFromRange)(a.value, "start");
    return (0, Ne.quarterArray)(M ?? Date.now(), M, Oe.value);
  }), ta = (0, ae.computed)(() => {
    const M = (0, Ne.pluckValueFromRange)(a.value, "end");
    return (0, Ne.quarterArray)(M ?? Date.now(), M, Oe.value);
  }), Et = (0, ae.computed)(() => {
    const M = (0, Ne.pluckValueFromRange)(a.value, "start");
    return (0, Ne.monthArray)(M ?? Date.now(), M, Oe.value);
  }), Ca = (0, ae.computed)(() => {
    const M = (0, Ne.pluckValueFromRange)(a.value, "end");
    return (0, Ne.monthArray)(M ?? Date.now(), M, Oe.value);
  });
  (0, ae.watch)((0, ae.computed)(() => a.value), (M) => {
    if (M !== null && Array.isArray(M)) {
      const [E, w] = M;
      xe.value = (0, S.format)(E, K.value, x.dateFnsOptions.value), oe.value = (0, S.format)(w, K.value, x.dateFnsOptions.value), ke.value || xa(M);
    } else
      xe.value = "", oe.value = "";
  });
  function aa(M, E) {
    (t === "daterange" || t === "datetimerange") && ((0, S.getYear)(M) !== (0, S.getYear)(E) || (0, S.getMonth)(M) !== (0, S.getMonth)(E)) && x.disableTransitionOneTick();
  }
  (0, ae.watch)(le, aa), (0, ae.watch)(ie, aa);
  function Ue(M) {
    const E = (0, S.startOfMonth)(le.value), w = (0, S.startOfMonth)(ie.value);
    (a.bindCalendarMonths || E >= w) && (M ? ie.value = (0, S.getTime)((0, S.addMonths)(E, 1)) : le.value = (0, S.getTime)((0, S.addMonths)(w, -1)));
  }
  function Yt() {
    le.value = (0, S.getTime)((0, S.addMonths)(le.value, 12)), Ue(!0);
  }
  function ra() {
    le.value = (0, S.getTime)((0, S.addMonths)(le.value, -12)), Ue(!0);
  }
  function Ma() {
    le.value = (0, S.getTime)((0, S.addMonths)(le.value, 1)), Ue(!0);
  }
  function na() {
    le.value = (0, S.getTime)((0, S.addMonths)(le.value, -1)), Ue(!0);
  }
  function Te() {
    ie.value = (0, S.getTime)((0, S.addMonths)(ie.value, 12)), Ue(!1);
  }
  function ia() {
    ie.value = (0, S.getTime)((0, S.addMonths)(ie.value, -12)), Ue(!1);
  }
  function Ft() {
    ie.value = (0, S.getTime)((0, S.addMonths)(ie.value, 1)), Ue(!1);
  }
  function Oa() {
    ie.value = (0, S.getTime)((0, S.addMonths)(ie.value, -1)), Ue(!1);
  }
  function ka(M) {
    le.value = M, Ue(!0);
  }
  function At(M) {
    ie.value = M, Ue(!1);
  }
  function oa(M) {
    const E = n.value;
    if (!E)
      return !1;
    if (!Array.isArray(a.value) || J.value === "start")
      return E(M, "start", null);
    {
      const { value: w } = ye;
      return M < ye.value ? E(M, "start", [
        w,
        w
      ]) : E(M, "end", [
        w,
        w
      ]);
    }
  }
  function xa(M) {
    if (M === null)
      return;
    const [E, w] = M;
    le.value = E, (0, S.startOfMonth)(w) <= (0, S.startOfMonth)(E) ? ie.value = (0, S.getTime)((0, S.startOfMonth)((0, S.addMonths)(E, 1))) : ie.value = (0, S.getTime)((0, S.startOfMonth)(w));
  }
  function Sa(M) {
    if (!ke.value)
      ke.value = !0, ye.value = M.ts, ze(M.ts, M.ts, "done");
    else {
      ke.value = !1;
      const { value: E } = a;
      a.panel && Array.isArray(E) ? ze(E[0], E[1], "done") : C.value && t === "daterange" && (_.value ? la() : Ut());
    }
  }
  function Pa(M) {
    if (ke.value) {
      if (oa(M.ts))
        return;
      M.ts >= ye.value ? ze(ye.value, M.ts, "wipPreview") : ze(M.ts, ye.value, "wipPreview");
    }
  }
  function Ut() {
    m.value || (x.doConfirm(), la());
  }
  function la() {
    ke.value = !1, a.active && x.doClose();
  }
  function pt(M) {
    typeof M != "number" && (M = (0, S.getTime)(M)), a.value === null ? x.doUpdateValue([M, M], a.panel) : Array.isArray(a.value) && x.doUpdateValue([M, Math.max(a.value[1], M)], a.panel);
  }
  function yt(M) {
    typeof M != "number" && (M = (0, S.getTime)(M)), a.value === null ? x.doUpdateValue([M, M], a.panel) : Array.isArray(a.value) && x.doUpdateValue([Math.min(a.value[0], M), M], a.panel);
  }
  function ze(M, E, w) {
    if (typeof M != "number" && (M = (0, S.getTime)(M)), w !== "shortcutPreview") {
      let g, P;
      if (t === "datetimerange") {
        const { defaultTime: R } = a;
        Array.isArray(R) ? (g = (0, Ne.getDefaultTime)(R[0]), P = (0, Ne.getDefaultTime)(R[1])) : (g = (0, Ne.getDefaultTime)(R), P = g);
      }
      g && (M = (0, S.getTime)((0, S.set)(M, g))), P && (E = (0, S.getTime)((0, S.set)(E, P)));
    }
    x.doUpdateValue([M, E], a.panel && w === "done");
  }
  function He(M) {
    return t === "datetimerange" ? (0, S.getTime)((0, S.startOfSecond)(M)) : t === "monthrange" ? (0, S.getTime)((0, S.startOfMonth)(M)) : (0, S.getTime)((0, S.startOfDay)(M));
  }
  function $a(M) {
    const E = (0, Ne.strictParse)(M, K.value, /* @__PURE__ */ new Date(), x.dateFnsOptions.value);
    if ((0, S.isValid)(E))
      if (a.value) {
        if (Array.isArray(a.value)) {
          const w = (0, S.set)(a.value[0], {
            year: (0, S.getYear)(E),
            month: (0, S.getMonth)(E),
            date: (0, S.getDate)(E)
          });
          pt(He((0, S.getTime)(w)));
        }
      } else {
        const w = (0, S.set)(/* @__PURE__ */ new Date(), {
          year: (0, S.getYear)(E),
          month: (0, S.getMonth)(E),
          date: (0, S.getDate)(E)
        });
        pt(He((0, S.getTime)(w)));
      }
    else
      xe.value = M;
  }
  function Ra(M) {
    const E = (0, Ne.strictParse)(M, K.value, /* @__PURE__ */ new Date(), x.dateFnsOptions.value);
    if ((0, S.isValid)(E)) {
      if (a.value === null) {
        const w = (0, S.set)(/* @__PURE__ */ new Date(), {
          year: (0, S.getYear)(E),
          month: (0, S.getMonth)(E),
          date: (0, S.getDate)(E)
        });
        yt(He((0, S.getTime)(w)));
      } else if (Array.isArray(a.value)) {
        const w = (0, S.set)(a.value[1], {
          year: (0, S.getYear)(E),
          month: (0, S.getMonth)(E),
          date: (0, S.getDate)(E)
        });
        yt(He((0, S.getTime)(w)));
      }
    } else
      oe.value = M;
  }
  function Ia() {
    const M = (0, Ne.strictParse)(xe.value, K.value, /* @__PURE__ */ new Date(), x.dateFnsOptions.value), { value: E } = a;
    if ((0, S.isValid)(M)) {
      if (E === null) {
        const w = (0, S.set)(/* @__PURE__ */ new Date(), {
          year: (0, S.getYear)(M),
          month: (0, S.getMonth)(M),
          date: (0, S.getDate)(M)
        });
        pt(He((0, S.getTime)(w)));
      } else if (Array.isArray(E)) {
        const w = (0, S.set)(E[0], {
          year: (0, S.getYear)(M),
          month: (0, S.getMonth)(M),
          date: (0, S.getDate)(M)
        });
        pt(He((0, S.getTime)(w)));
      }
    } else
      kt();
  }
  function ua() {
    const M = (0, Ne.strictParse)(oe.value, K.value, /* @__PURE__ */ new Date(), x.dateFnsOptions.value), { value: E } = a;
    if ((0, S.isValid)(M)) {
      if (E === null) {
        const w = (0, S.set)(/* @__PURE__ */ new Date(), {
          year: (0, S.getYear)(M),
          month: (0, S.getMonth)(M),
          date: (0, S.getDate)(M)
        });
        yt(He((0, S.getTime)(w)));
      } else if (Array.isArray(E)) {
        const w = (0, S.set)(E[1], {
          year: (0, S.getYear)(M),
          month: (0, S.getMonth)(M),
          date: (0, S.getDate)(M)
        });
        yt(He((0, S.getTime)(w)));
      }
    } else
      kt();
  }
  function kt(M) {
    const { value: E } = a;
    if (E === null || !Array.isArray(E)) {
      xe.value = "", oe.value = "";
      return;
    }
    M === void 0 && (M = E), xe.value = (0, S.format)(M[0], K.value, x.dateFnsOptions.value), oe.value = (0, S.format)(M[1], K.value, x.dateFnsOptions.value);
  }
  function Ht(M) {
    M !== null && pt(M);
  }
  function sa(M) {
    M !== null && yt(M);
  }
  function Na(M) {
    x.cachePendingValue();
    const E = x.getShortcutValue(M);
    Array.isArray(E) && ze(E[0], E[1], "shortcutPreview");
  }
  function at(M) {
    const E = x.getShortcutValue(M);
    Array.isArray(E) && (ze(E[0], E[1], "done"), x.clearPendingValue(), Ut());
  }
  function Je(M, E) {
    const w = M === void 0 ? a.value : M;
    if (M === void 0 || E === "start") {
      if (re.value) {
        const g = Array.isArray(w) ? (0, S.getMonth)(w[0]) : (0, S.getMonth)(Date.now());
        re.value.scrollTo({
          debounce: !1,
          index: g,
          elSize: nr.MONTH_ITEM_HEIGHT
        });
      }
      if (te.value) {
        const g = (Array.isArray(w) ? (0, S.getYear)(w[0]) : (0, S.getYear)(Date.now())) - nr.START_YEAR;
        te.value.scrollTo({ index: g, debounce: !1 });
      }
    }
    if (M === void 0 || E === "end") {
      if (pe.value) {
        const g = Array.isArray(w) ? (0, S.getMonth)(w[1]) : (0, S.getMonth)(Date.now());
        pe.value.scrollTo({
          debounce: !1,
          index: g,
          elSize: nr.MONTH_ITEM_HEIGHT
        });
      }
      if (q.value) {
        const g = (Array.isArray(w) ? (0, S.getYear)(w[1]) : (0, S.getYear)(Date.now())) - nr.START_YEAR;
        q.value.scrollTo({ index: g, debounce: !1 });
      }
    }
  }
  function ut(M, E) {
    const { value: w } = a, g = !Array.isArray(w), P = M.type === "year" && t !== "yearrange" ? g ? (0, S.set)(M.ts, {
      month: (0, S.getMonth)(t === "quarterrange" ? (0, S.startOfQuarter)(/* @__PURE__ */ new Date()) : /* @__PURE__ */ new Date())
    }).valueOf() : (0, S.set)(M.ts, {
      month: (0, S.getMonth)(t === "quarterrange" ? (0, S.startOfQuarter)(w[E === "start" ? 0 : 1]) : w[E === "start" ? 0 : 1])
    }).valueOf() : M.ts;
    if (g) {
      const Le = He(P), je = [Le, Le];
      x.doUpdateValue(je, a.panel), Je(je, "start"), Je(je, "end"), x.disableTransitionOneTick();
      return;
    }
    const R = [w[0], w[1]];
    let ee = !1;
    switch (E === "start" ? (R[0] = He(P), R[0] > R[1] && (R[1] = R[0], ee = !0)) : (R[1] = He(P), R[0] > R[1] && (R[0] = R[1], ee = !0)), x.doUpdateValue(R, a.panel), t) {
      case "monthrange":
      case "quarterrange":
        x.disableTransitionOneTick(), ee ? (Je(R, "start"), Je(R, "end")) : Je(R, E);
        break;
      case "yearrange":
        x.disableTransitionOneTick(), Je(R, "start"), Je(R, "end");
    }
  }
  function da() {
    var M;
    (M = A.value) === null || M === void 0 || M.sync();
  }
  function Vt() {
    var M;
    (M = z.value) === null || M === void 0 || M.sync();
  }
  function Ea(M) {
    var E, w;
    return M === "start" ? (E = te.value) === null || E === void 0 ? void 0 : E.listElRef : (w = q.value) === null || w === void 0 ? void 0 : w.listElRef;
  }
  function Wt(M) {
    var E, w;
    return M === "start" ? (E = te.value) === null || E === void 0 ? void 0 : E.itemsElRef : (w = q.value) === null || w === void 0 ? void 0 : w.itemsElRef;
  }
  const it = {
    startYearVlRef: te,
    endYearVlRef: q,
    startMonthScrollbarRef: re,
    endMonthScrollbarRef: pe,
    startYearScrollbarRef: A,
    endYearScrollbarRef: z
  };
  return Object.assign(Object.assign(Object.assign(Object.assign({
    startDatesElRef: $,
    endDatesElRef: Y,
    handleDateClick: Sa,
    handleColItemClick: ut,
    handleDateMouseEnter: Pa,
    handleConfirmClick: Ut,
    startCalendarPrevYear: ra,
    startCalendarPrevMonth: na,
    startCalendarNextYear: Yt,
    startCalendarNextMonth: Ma,
    endCalendarPrevYear: ia,
    endCalendarPrevMonth: Oa,
    endCalendarNextMonth: Ft,
    endCalendarNextYear: Te,
    mergedIsDateDisabled: oa,
    changeStartEndTime: ze,
    ranges: y,
    startCalendarMonth: Qe,
    startCalendarYear: Xe,
    endCalendarMonth: tt,
    endCalendarYear: qe,
    weekdays: Ae,
    startDateArray: Z,
    endDateArray: de,
    startYearArray: _e,
    startMonthArray: Et,
    startQuarterArray: gt,
    endYearArray: lt,
    endMonthArray: Ca,
    endQuarterArray: ta,
    isSelecting: ke,
    handleRangeShortcutMouseenter: Na,
    handleRangeShortcutClick: at
  }, x), k), it), {
    // datetimerangeonly
    startDateDisplayString: xe,
    endDateInput: oe,
    timePickerSize: x.timePickerSize,
    startTimeValue: $e,
    endTimeValue: I,
    datePickerSlots: H,
    shortcuts: j,
    startCalendarDateTime: le,
    endCalendarDateTime: ie,
    justifyColumnsScrollState: Je,
    handleFocusDetectorFocus: x.handleFocusDetectorFocus,
    handleStartTimePickerChange: Ht,
    handleEndTimePickerChange: sa,
    handleStartDateInput: $a,
    handleStartDateInputBlur: Ia,
    handleEndDateInput: Ra,
    handleEndDateInputBlur: ua,
    handleStartYearVlScroll: da,
    handleEndYearVlScroll: Vt,
    virtualListContainer: Ea,
    virtualListContent: Wt,
    onUpdateStartCalendarValue: ka,
    onUpdateEndCalendarValue: At
  });
}
Rt.useDualCalendar = Wh;
var zh = be && be.__importDefault || function(a) {
  return a && a.__esModule ? a : { default: a };
};
Object.defineProperty(Ii, "__esModule", { value: !0 });
const Q = Ke, Qr = Qt, to = Dr, ao = Mi, xt = Da, Bh = Ot, bt = ht, ro = Rt, no = zh(_a);
Ii.default = (0, Q.defineComponent)({
  name: "DateTimeRangePanel",
  props: ro.useDualCalendarProps,
  setup(a) {
    return process.env.NODE_ENV !== "production" && (0, Q.watchEffect)(() => {
      var t;
      !((t = a.actions) === null || t === void 0) && t.includes("now") && (0, bt.warnOnce)("date-picker", "The `now` action is not supported for n-date-picker of `datetimerange` type");
    }), (0, ro.useDualCalendar)(a, "datetimerange");
  },
  render() {
    var a, t, e;
    const { mergedClsPrefix: r, mergedTheme: n, shortcuts: o, timePickerProps: i, onRender: u, $slots: l } = this;
    return u == null || u(), (0, Q.h)(
      "div",
      { ref: "selfRef", tabindex: 0, class: [
        `${r}-date-panel`,
        `${r}-date-panel--datetimerange`,
        !this.panel && `${r}-date-panel--shadow`,
        this.themeClass
      ], onKeydown: this.handlePanelKeyDown, onFocus: this.handlePanelFocus },
      (0, Q.h)(
        "div",
        { class: `${r}-date-panel-header` },
        (0, Q.h)(to.NInput, { value: this.startDateDisplayString, theme: n.peers.Input, themeOverrides: n.peerOverrides.Input, size: this.timePickerSize, stateful: !1, class: `${r}-date-panel-date-input`, textDecoration: this.isStartValueInvalid ? "line-through" : "", placeholder: this.locale.selectDate, onBlur: this.handleStartDateInputBlur, onUpdateValue: this.handleStartDateInput }),
        (0, Q.h)(ao.NTimePicker, Object.assign({ placeholder: this.locale.selectTime, format: this.timeFormat, size: this.timePickerSize }, Array.isArray(i) ? i[0] : i, { value: this.startTimeValue, to: !1, showIcon: !1, disabled: this.isSelecting, theme: n.peers.TimePicker, themeOverrides: n.peerOverrides.TimePicker, stateful: !1, isHourDisabled: this.isStartHourDisabled, isMinuteDisabled: this.isStartMinuteDisabled, isSecondDisabled: this.isStartSecondDisabled, onUpdateValue: this.handleStartTimePickerChange })),
        (0, Q.h)(to.NInput, { value: this.endDateInput, theme: n.peers.Input, themeOverrides: n.peerOverrides.Input, stateful: !1, size: this.timePickerSize, class: `${r}-date-panel-date-input`, textDecoration: this.isEndValueInvalid ? "line-through" : "", placeholder: this.locale.selectDate, onBlur: this.handleEndDateInputBlur, onUpdateValue: this.handleEndDateInput }),
        (0, Q.h)(ao.NTimePicker, Object.assign({ placeholder: this.locale.selectTime, format: this.timeFormat, size: this.timePickerSize }, Array.isArray(i) ? i[1] : i, { disabled: this.isSelecting, showIcon: !1, theme: n.peers.TimePicker, themeOverrides: n.peerOverrides.TimePicker, to: !1, stateful: !1, value: this.endTimeValue, isHourDisabled: this.isEndHourDisabled, isMinuteDisabled: this.isEndMinuteDisabled, isSecondDisabled: this.isEndSecondDisabled, onUpdateValue: this.handleEndTimePickerChange }))
      ),
      (0, Q.h)(
        "div",
        { ref: "startDatesElRef", class: `${r}-date-panel-calendar ${r}-date-panel-calendar--start` },
        (0, Q.h)(
          "div",
          { class: `${r}-date-panel-month` },
          (0, Q.h)("div", { class: `${r}-date-panel-month__fast-prev`, onClick: this.startCalendarPrevYear }, (0, bt.resolveSlot)(l["prev-year"], () => [(0, Q.h)(xt.FastBackwardIcon, null)])),
          (0, Q.h)("div", { class: `${r}-date-panel-month__prev`, onClick: this.startCalendarPrevMonth }, (0, bt.resolveSlot)(l["prev-month"], () => [(0, Q.h)(xt.BackwardIcon, null)])),
          (0, Q.h)(no.default, { monthBeforeYear: this.locale.monthBeforeYear, value: this.startCalendarDateTime, onUpdateValue: this.onUpdateStartCalendarValue, mergedClsPrefix: r, calendarMonth: this.startCalendarMonth, calendarYear: this.startCalendarYear }),
          (0, Q.h)("div", { class: `${r}-date-panel-month__next`, onClick: this.startCalendarNextMonth }, (0, bt.resolveSlot)(l["next-month"], () => [(0, Q.h)(xt.ForwardIcon, null)])),
          (0, Q.h)("div", { class: `${r}-date-panel-month__fast-next`, onClick: this.startCalendarNextYear }, (0, bt.resolveSlot)(l["next-year"], () => [(0, Q.h)(xt.FastForwardIcon, null)]))
        ),
        (0, Q.h)("div", { class: `${r}-date-panel-weekdays` }, this.weekdays.map((s) => (0, Q.h)("div", { key: s, class: `${r}-date-panel-weekdays__day` }, s))),
        (0, Q.h)("div", { class: `${r}-date-panel__divider` }),
        (0, Q.h)("div", { class: `${r}-date-panel-dates` }, this.startDateArray.map((s, d) => {
          const c = this.mergedIsDateDisabled(s.ts);
          return (0, Q.h)(
            "div",
            { "data-n-date": !0, key: d, class: [
              `${r}-date-panel-date`,
              {
                [`${r}-date-panel-date--excluded`]: !s.inCurrentMonth,
                [`${r}-date-panel-date--current`]: s.isCurrentDate,
                [`${r}-date-panel-date--selected`]: s.selected,
                [`${r}-date-panel-date--covered`]: s.inSpan,
                [`${r}-date-panel-date--start`]: s.startOfSpan,
                [`${r}-date-panel-date--end`]: s.endOfSpan,
                [`${r}-date-panel-date--disabled`]: c
              }
            ], onClick: c ? void 0 : () => {
              this.handleDateClick(s);
            }, onMouseenter: c ? void 0 : () => {
              this.handleDateMouseEnter(s);
            } },
            (0, Q.h)("div", { class: `${r}-date-panel-date__trigger` }),
            s.dateObject.date,
            s.isCurrentDate ? (0, Q.h)("div", { class: `${r}-date-panel-date__sup` }) : null
          );
        }))
      ),
      (0, Q.h)("div", { class: `${r}-date-panel__vertical-divider` }),
      (0, Q.h)(
        "div",
        { ref: "endDatesElRef", class: `${r}-date-panel-calendar ${r}-date-panel-calendar--end` },
        (0, Q.h)(
          "div",
          { class: `${r}-date-panel-month` },
          (0, Q.h)("div", { class: `${r}-date-panel-month__fast-prev`, onClick: this.endCalendarPrevYear }, (0, bt.resolveSlot)(l["prev-year"], () => [(0, Q.h)(xt.FastBackwardIcon, null)])),
          (0, Q.h)("div", { class: `${r}-date-panel-month__prev`, onClick: this.endCalendarPrevMonth }, (0, bt.resolveSlot)(l["prev-month"], () => [(0, Q.h)(xt.BackwardIcon, null)])),
          (0, Q.h)(no.default, { monthBeforeYear: this.locale.monthBeforeYear, value: this.endCalendarDateTime, onUpdateValue: this.onUpdateEndCalendarValue, mergedClsPrefix: r, calendarMonth: this.endCalendarMonth, calendarYear: this.endCalendarYear }),
          (0, Q.h)("div", { class: `${r}-date-panel-month__next`, onClick: this.endCalendarNextMonth }, (0, bt.resolveSlot)(l["next-month"], () => [(0, Q.h)(xt.ForwardIcon, null)])),
          (0, Q.h)("div", { class: `${r}-date-panel-month__fast-next`, onClick: this.endCalendarNextYear }, (0, bt.resolveSlot)(l["next-year"], () => [(0, Q.h)(xt.FastForwardIcon, null)]))
        ),
        (0, Q.h)("div", { class: `${r}-date-panel-weekdays` }, this.weekdays.map((s) => (0, Q.h)("div", { key: s, class: `${r}-date-panel-weekdays__day` }, s))),
        (0, Q.h)("div", { class: `${r}-date-panel__divider` }),
        (0, Q.h)("div", { class: `${r}-date-panel-dates` }, this.endDateArray.map((s, d) => {
          const c = this.mergedIsDateDisabled(s.ts);
          return (0, Q.h)(
            "div",
            { "data-n-date": !0, key: d, class: [
              `${r}-date-panel-date`,
              {
                [`${r}-date-panel-date--excluded`]: !s.inCurrentMonth,
                [`${r}-date-panel-date--current`]: s.isCurrentDate,
                [`${r}-date-panel-date--selected`]: s.selected,
                [`${r}-date-panel-date--covered`]: s.inSpan,
                [`${r}-date-panel-date--start`]: s.startOfSpan,
                [`${r}-date-panel-date--end`]: s.endOfSpan,
                [`${r}-date-panel-date--disabled`]: c
              }
            ], onClick: c ? void 0 : () => {
              this.handleDateClick(s);
            }, onMouseenter: c ? void 0 : () => {
              this.handleDateMouseEnter(s);
            } },
            (0, Q.h)("div", { class: `${r}-date-panel-date__trigger` }),
            s.dateObject.date,
            s.isCurrentDate ? (0, Q.h)("div", { class: `${r}-date-panel-date__sup` }) : null
          );
        }))
      ),
      this.datePickerSlots.footer ? (0, Q.h)("div", { class: `${r}-date-panel-footer` }, this.datePickerSlots.footer()) : null,
      !((a = this.actions) === null || a === void 0) && a.length || o ? (0, Q.h)(
        "div",
        { class: `${r}-date-panel-actions` },
        (0, Q.h)("div", { class: `${r}-date-panel-actions__prefix` }, o && Object.keys(o).map((s) => {
          const d = o[s];
          return Array.isArray(d) || typeof d == "function" ? (0, Q.h)(Qr.NxButton, { size: "tiny", onMouseenter: () => {
            this.handleRangeShortcutMouseenter(d);
          }, onClick: () => {
            this.handleRangeShortcutClick(d);
          }, onMouseleave: () => {
            this.handleShortcutMouseleave();
          } }, { default: () => s }) : null;
        })),
        (0, Q.h)(
          "div",
          { class: `${r}-date-panel-actions__suffix` },
          !((t = this.actions) === null || t === void 0) && t.includes("clear") ? (0, Q.h)(Qr.NButton, { theme: n.peers.Button, themeOverrides: n.peerOverrides.Button, size: "tiny", onClick: this.handleClearClick }, { default: () => this.locale.clear }) : null,
          !((e = this.actions) === null || e === void 0) && e.includes("confirm") ? (0, Q.h)(Qr.NButton, { theme: n.peers.Button, themeOverrides: n.peerOverrides.Button, size: "tiny", type: "primary", disabled: this.isRangeInvalid || this.isSelecting, onClick: this.handleConfirmClick }, { default: () => this.locale.confirm }) : null
        )
      ) : null,
      (0, Q.h)(Bh.NBaseFocusDetector, { onFocus: this.handleFocusDetectorFocus })
    );
  }
});
var Ni = {}, jh = be && be.__importDefault || function(a) {
  return a && a.__esModule ? a : { default: a };
};
Object.defineProperty(Ni, "__esModule", { value: !0 });
const we = Ke, ir = Da, Xr = Qt, qh = Ot, Ua = ht, io = $t, Lh = jh(_a);
Ni.default = (0, we.defineComponent)({
  name: "DatePanel",
  props: io.useCalendarProps,
  setup(a) {
    return process.env.NODE_ENV !== "production" && (0, we.watchEffect)(() => {
      var t;
      !((t = a.actions) === null || t === void 0) && t.includes("confirm") && (0, Ua.warnOnce)("date-picker", "The `confirm` action is not supported for n-date-picker of `date` type");
    }), (0, io.useCalendar)(a, "date");
  },
  render() {
    var a, t, e;
    const { mergedClsPrefix: r, mergedTheme: n, shortcuts: o, onRender: i, $slots: u } = this;
    return i == null || i(), (0, we.h)(
      "div",
      { ref: "selfRef", tabindex: 0, class: [
        `${r}-date-panel`,
        `${r}-date-panel--date`,
        !this.panel && `${r}-date-panel--shadow`,
        this.themeClass
      ], onFocus: this.handlePanelFocus, onKeydown: this.handlePanelKeyDown },
      (0, we.h)(
        "div",
        { class: `${r}-date-panel-calendar` },
        (0, we.h)(
          "div",
          { class: `${r}-date-panel-month` },
          (0, we.h)("div", { class: `${r}-date-panel-month__fast-prev`, onClick: this.prevYear }, (0, Ua.resolveSlot)(u["prev-year"], () => [(0, we.h)(ir.FastBackwardIcon, null)])),
          (0, we.h)("div", { class: `${r}-date-panel-month__prev`, onClick: this.prevMonth }, (0, Ua.resolveSlot)(u["prev-month"], () => [(0, we.h)(ir.BackwardIcon, null)])),
          (0, we.h)(Lh.default, { monthBeforeYear: this.locale.monthBeforeYear, value: this.calendarValue, onUpdateValue: this.onUpdateCalendarValue, mergedClsPrefix: r, calendarMonth: this.calendarMonth, calendarYear: this.calendarYear }),
          (0, we.h)("div", { class: `${r}-date-panel-month__next`, onClick: this.nextMonth }, (0, Ua.resolveSlot)(u["next-month"], () => [(0, we.h)(ir.ForwardIcon, null)])),
          (0, we.h)("div", { class: `${r}-date-panel-month__fast-next`, onClick: this.nextYear }, (0, Ua.resolveSlot)(u["next-year"], () => [(0, we.h)(ir.FastForwardIcon, null)]))
        ),
        (0, we.h)("div", { class: `${r}-date-panel-weekdays` }, this.weekdays.map((l) => (0, we.h)("div", { key: l, class: `${r}-date-panel-weekdays__day` }, l))),
        (0, we.h)("div", { class: `${r}-date-panel-dates` }, this.dateArray.map((l, s) => (0, we.h)(
          "div",
          { "data-n-date": !0, key: s, class: [
            `${r}-date-panel-date`,
            {
              [`${r}-date-panel-date--current`]: l.isCurrentDate,
              [`${r}-date-panel-date--selected`]: l.selected,
              [`${r}-date-panel-date--excluded`]: !l.inCurrentMonth,
              [`${r}-date-panel-date--disabled`]: this.mergedIsDateDisabled(l.ts)
            }
          ], onClick: () => {
            this.handleDateClick(l);
          } },
          (0, we.h)("div", { class: `${r}-date-panel-date__trigger` }),
          l.dateObject.date,
          l.isCurrentDate ? (0, we.h)("div", { class: `${r}-date-panel-date__sup` }) : null
        )))
      ),
      this.datePickerSlots.footer ? (0, we.h)("div", { class: `${r}-date-panel-footer` }, this.datePickerSlots.footer()) : null,
      !((a = this.actions) === null || a === void 0) && a.length || o ? (0, we.h)(
        "div",
        { class: `${r}-date-panel-actions` },
        (0, we.h)("div", { class: `${r}-date-panel-actions__prefix` }, o && Object.keys(o).map((l) => {
          const s = o[l];
          return Array.isArray(s) ? null : (0, we.h)(Xr.NxButton, { size: "tiny", onMouseenter: () => {
            this.handleSingleShortcutMouseenter(s);
          }, onClick: () => {
            this.handleSingleShortcutClick(s);
          }, onMouseleave: () => {
            this.handleShortcutMouseleave();
          } }, { default: () => l });
        })),
        (0, we.h)(
          "div",
          { class: `${r}-date-panel-actions__suffix` },
          !((t = this.actions) === null || t === void 0) && t.includes("clear") ? (0, we.h)(Xr.NButton, { theme: n.peers.Button, themeOverrides: n.peerOverrides.Button, size: "tiny", onClick: this.handleClearClick }, { default: () => this.locale.clear }) : null,
          !((e = this.actions) === null || e === void 0) && e.includes("now") ? (0, we.h)(Xr.NButton, { theme: n.peers.Button, themeOverrides: n.peerOverrides.Button, size: "tiny", onClick: this.handleNowClick }, { default: () => this.locale.now }) : null
        )
      ) : null,
      (0, we.h)(qh.NBaseFocusDetector, { onFocus: this.handleFocusDetectorFocus })
    );
  }
});
var Ei = {}, Qh = be && be.__importDefault || function(a) {
  return a && a.__esModule ? a : { default: a };
};
Object.defineProperty(Ei, "__esModule", { value: !0 });
const G = Ke, Gr = Qt, St = Da, Xh = Ot, Dt = ht, oo = Qh(_a), lo = Rt;
Ei.default = (0, G.defineComponent)({
  name: "DateRangePanel",
  props: lo.useDualCalendarProps,
  setup(a) {
    return process.env.NODE_ENV !== "production" && (0, G.watchEffect)(() => {
      var t;
      !((t = a.actions) === null || t === void 0) && t.includes("now") && (0, Dt.warnOnce)("date-picker", "The `now` action is not supported for n-date-picker of `daterange` type");
    }), (0, lo.useDualCalendar)(a, "daterange");
  },
  render() {
    var a, t, e;
    const { mergedClsPrefix: r, mergedTheme: n, shortcuts: o, onRender: i, $slots: u } = this;
    return i == null || i(), (0, G.h)(
      "div",
      { ref: "selfRef", tabindex: 0, class: [
        `${r}-date-panel`,
        `${r}-date-panel--daterange`,
        !this.panel && `${r}-date-panel--shadow`,
        this.themeClass
      ], onKeydown: this.handlePanelKeyDown, onFocus: this.handlePanelFocus },
      (0, G.h)(
        "div",
        { ref: "startDatesElRef", class: `${r}-date-panel-calendar ${r}-date-panel-calendar--start` },
        (0, G.h)(
          "div",
          { class: `${r}-date-panel-month` },
          (0, G.h)("div", { class: `${r}-date-panel-month__fast-prev`, onClick: this.startCalendarPrevYear }, (0, Dt.resolveSlot)(u["prev-year"], () => [(0, G.h)(St.FastBackwardIcon, null)])),
          (0, G.h)("div", { class: `${r}-date-panel-month__prev`, onClick: this.startCalendarPrevMonth }, (0, Dt.resolveSlot)(u["prev-month"], () => [(0, G.h)(St.BackwardIcon, null)])),
          (0, G.h)(oo.default, { monthBeforeYear: this.locale.monthBeforeYear, value: this.startCalendarDateTime, onUpdateValue: this.onUpdateStartCalendarValue, mergedClsPrefix: r, calendarMonth: this.startCalendarMonth, calendarYear: this.startCalendarYear }),
          (0, G.h)("div", { class: `${r}-date-panel-month__next`, onClick: this.startCalendarNextMonth }, (0, Dt.resolveSlot)(u["next-month"], () => [(0, G.h)(St.ForwardIcon, null)])),
          (0, G.h)("div", { class: `${r}-date-panel-month__fast-next`, onClick: this.startCalendarNextYear }, (0, Dt.resolveSlot)(u["next-year"], () => [(0, G.h)(St.FastForwardIcon, null)]))
        ),
        (0, G.h)("div", { class: `${r}-date-panel-weekdays` }, this.weekdays.map((l) => (0, G.h)("div", { key: l, class: `${r}-date-panel-weekdays__day` }, l))),
        (0, G.h)("div", { class: `${r}-date-panel__divider` }),
        (0, G.h)("div", { class: `${r}-date-panel-dates` }, this.startDateArray.map((l, s) => (0, G.h)(
          "div",
          { "data-n-date": !0, key: s, class: [
            `${r}-date-panel-date`,
            {
              [`${r}-date-panel-date--excluded`]: !l.inCurrentMonth,
              [`${r}-date-panel-date--current`]: l.isCurrentDate,
              [`${r}-date-panel-date--selected`]: l.selected,
              [`${r}-date-panel-date--covered`]: l.inSpan,
              [`${r}-date-panel-date--start`]: l.startOfSpan,
              [`${r}-date-panel-date--end`]: l.endOfSpan,
              [`${r}-date-panel-date--disabled`]: this.mergedIsDateDisabled(l.ts)
            }
          ], onClick: () => {
            this.handleDateClick(l);
          }, onMouseenter: () => {
            this.handleDateMouseEnter(l);
          } },
          (0, G.h)("div", { class: `${r}-date-panel-date__trigger` }),
          l.dateObject.date,
          l.isCurrentDate ? (0, G.h)("div", { class: `${r}-date-panel-date__sup` }) : null
        )))
      ),
      (0, G.h)("div", { class: `${r}-date-panel__vertical-divider` }),
      (0, G.h)(
        "div",
        { ref: "endDatesElRef", class: `${r}-date-panel-calendar ${r}-date-panel-calendar--end` },
        (0, G.h)(
          "div",
          { class: `${r}-date-panel-month` },
          (0, G.h)("div", { class: `${r}-date-panel-month__fast-prev`, onClick: this.endCalendarPrevYear }, (0, Dt.resolveSlot)(u["prev-year"], () => [(0, G.h)(St.FastBackwardIcon, null)])),
          (0, G.h)("div", { class: `${r}-date-panel-month__prev`, onClick: this.endCalendarPrevMonth }, (0, Dt.resolveSlot)(u["prev-month"], () => [(0, G.h)(St.BackwardIcon, null)])),
          (0, G.h)(oo.default, { monthBeforeYear: this.locale.monthBeforeYear, value: this.endCalendarDateTime, onUpdateValue: this.onUpdateEndCalendarValue, mergedClsPrefix: r, calendarMonth: this.endCalendarMonth, calendarYear: this.endCalendarYear }),
          (0, G.h)("div", { class: `${r}-date-panel-month__next`, onClick: this.endCalendarNextMonth }, (0, Dt.resolveSlot)(u["next-month"], () => [(0, G.h)(St.ForwardIcon, null)])),
          (0, G.h)("div", { class: `${r}-date-panel-month__fast-next`, onClick: this.endCalendarNextYear }, (0, Dt.resolveSlot)(u["next-year"], () => [(0, G.h)(St.FastForwardIcon, null)]))
        ),
        (0, G.h)("div", { class: `${r}-date-panel-weekdays` }, this.weekdays.map((l) => (0, G.h)("div", { key: l, class: `${r}-date-panel-weekdays__day` }, l))),
        (0, G.h)("div", { class: `${r}-date-panel__divider` }),
        (0, G.h)("div", { class: `${r}-date-panel-dates` }, this.endDateArray.map((l, s) => (0, G.h)(
          "div",
          { "data-n-date": !0, key: s, class: [
            `${r}-date-panel-date`,
            {
              [`${r}-date-panel-date--excluded`]: !l.inCurrentMonth,
              [`${r}-date-panel-date--current`]: l.isCurrentDate,
              [`${r}-date-panel-date--selected`]: l.selected,
              [`${r}-date-panel-date--covered`]: l.inSpan,
              [`${r}-date-panel-date--start`]: l.startOfSpan,
              [`${r}-date-panel-date--end`]: l.endOfSpan,
              [`${r}-date-panel-date--disabled`]: this.mergedIsDateDisabled(l.ts)
            }
          ], onClick: () => {
            this.handleDateClick(l);
          }, onMouseenter: () => {
            this.handleDateMouseEnter(l);
          } },
          (0, G.h)("div", { class: `${r}-date-panel-date__trigger` }),
          l.dateObject.date,
          l.isCurrentDate ? (0, G.h)("div", { class: `${r}-date-panel-date__sup` }) : null
        )))
      ),
      this.datePickerSlots.footer ? (0, G.h)("div", { class: `${r}-date-panel-footer` }, this.datePickerSlots.footer()) : null,
      !((a = this.actions) === null || a === void 0) && a.length || o ? (0, G.h)(
        "div",
        { class: `${r}-date-panel-actions` },
        (0, G.h)("div", { class: `${r}-date-panel-actions__prefix` }, o && Object.keys(o).map((l) => {
          const s = o[l];
          return Array.isArray(s) || typeof s == "function" ? (0, G.h)(Gr.NxButton, { size: "tiny", onMouseenter: () => {
            this.handleRangeShortcutMouseenter(s);
          }, onClick: () => {
            this.handleRangeShortcutClick(s);
          }, onMouseleave: () => {
            this.handleShortcutMouseleave();
          } }, { default: () => l }) : null;
        })),
        (0, G.h)(
          "div",
          { class: `${r}-date-panel-actions__suffix` },
          !((t = this.actions) === null || t === void 0) && t.includes("clear") ? (0, G.h)(Gr.NButton, { theme: n.peers.Button, themeOverrides: n.peerOverrides.Button, size: "tiny", onClick: this.handleClearClick }, { default: () => this.locale.clear }) : null,
          !((e = this.actions) === null || e === void 0) && e.includes("confirm") ? (0, G.h)(Gr.NButton, { theme: n.peers.Button, themeOverrides: n.peerOverrides.Button, size: "tiny", type: "primary", disabled: this.isRangeInvalid || this.isSelecting, onClick: this.handleConfirmClick }, { default: () => this.locale.confirm }) : null
        )
      ) : null,
      (0, G.h)(Xh.NBaseFocusDetector, { onFocus: this.handleFocusDetectorFocus })
    );
  }
});
var Yi = {};
Object.defineProperty(Yi, "__esModule", { value: !0 });
const ge = Ke, uo = Ba, Kr = Qt, Ha = Ot, Gh = ht, so = vt, co = Rt;
Yi.default = (0, ge.defineComponent)({
  name: "MonthRangePanel",
  props: Object.assign(Object.assign({}, co.useDualCalendarProps), { type: {
    type: String,
    required: !0
  } }),
  setup(a) {
    process.env.NODE_ENV !== "production" && (0, ge.watchEffect)(() => {
      var r;
      !((r = a.actions) === null || r === void 0) && r.includes("now") && (0, Gh.warnOnce)("date-picker", `The \`now\` action is not supported for n-date-picker of ${a.type}type`);
    });
    const t = (0, co.useDualCalendar)(a, a.type), e = (r, n, o, i) => {
      const { handleColItemClick: u } = t, l = !1;
      return (0, ge.h)("div", { "data-n-date": !0, key: n, class: [
        `${o}-date-panel-month-calendar__picker-col-item`,
        {
          [`${o}-date-panel-month-calendar__picker-col-item--current`]: r.isCurrent,
          [`${o}-date-panel-month-calendar__picker-col-item--selected`]: r.selected,
          [`${o}-date-panel-month-calendar__picker-col-item--disabled`]: l
        }
      ], onClick: () => {
        u(r, i);
      } }, r.type === "month" ? r.dateObject.month + 1 : r.type === "quarter" ? `Q${r.dateObject.quarter}` : r.dateObject.year);
    };
    return (0, ge.onMounted)(() => {
      t.justifyColumnsScrollState();
    }), Object.assign(Object.assign({}, t), { renderItem: e });
  },
  render() {
    var a, t, e;
    const { mergedClsPrefix: r, mergedTheme: n, shortcuts: o, type: i, renderItem: u, onRender: l } = this;
    return l == null || l(), (0, ge.h)(
      "div",
      { ref: "selfRef", tabindex: 0, class: [
        `${r}-date-panel`,
        `${r}-date-panel--daterange`,
        !this.panel && `${r}-date-panel--shadow`,
        this.themeClass
      ], onKeydown: this.handlePanelKeyDown, onFocus: this.handlePanelFocus },
      (0, ge.h)(
        "div",
        { ref: "startDatesElRef", class: `${r}-date-panel-calendar ${r}-date-panel-calendar--start` },
        (0, ge.h)(
          "div",
          { class: `${r}-date-panel-month-calendar` },
          (0, ge.h)(Ha.NScrollbar, { ref: "startYearScrollbarRef", class: `${r}-date-panel-month-calendar__picker-col`, theme: n.peers.Scrollbar, themeOverrides: n.peerOverrides.Scrollbar, container: () => this.virtualListContainer("start"), content: () => this.virtualListContent("start"), horizontalRailStyle: { zIndex: 1 }, verticalRailStyle: { zIndex: 1 } }, {
            default: () => (0, ge.h)(uo.VirtualList, { ref: "startYearVlRef", items: this.startYearArray, itemSize: so.MONTH_ITEM_HEIGHT, showScrollbar: !1, keyField: "ts", onScroll: this.handleStartYearVlScroll, paddingBottom: 4 }, {
              default: ({ item: s, index: d }) => u(s, d, r, "start")
            })
          }),
          i === "monthrange" || i === "quarterrange" ? (0, ge.h)(
            "div",
            { class: `${r}-date-panel-month-calendar__picker-col` },
            (0, ge.h)(Ha.NScrollbar, { ref: "startMonthScrollbarRef", theme: n.peers.Scrollbar, themeOverrides: n.peerOverrides.Scrollbar }, {
              default: () => [
                (i === "monthrange" ? this.startMonthArray : this.startQuarterArray).map((s, d) => u(s, d, r, "start")),
                i === "monthrange" && (0, ge.h)("div", { class: `${r}-date-panel-month-calendar__padding` })
              ]
            })
          ) : null
        )
      ),
      (0, ge.h)("div", { class: `${r}-date-panel__vertical-divider` }),
      (0, ge.h)(
        "div",
        { ref: "endDatesElRef", class: `${r}-date-panel-calendar ${r}-date-panel-calendar--end` },
        (0, ge.h)(
          "div",
          { class: `${r}-date-panel-month-calendar` },
          (0, ge.h)(Ha.NScrollbar, { ref: "endYearScrollbarRef", class: `${r}-date-panel-month-calendar__picker-col`, theme: n.peers.Scrollbar, themeOverrides: n.peerOverrides.Scrollbar, container: () => this.virtualListContainer("end"), content: () => this.virtualListContent("end"), horizontalRailStyle: { zIndex: 1 }, verticalRailStyle: { zIndex: 1 } }, {
            default: () => (0, ge.h)(uo.VirtualList, { ref: "endYearVlRef", items: this.endYearArray, itemSize: so.MONTH_ITEM_HEIGHT, showScrollbar: !1, keyField: "ts", onScroll: this.handleEndYearVlScroll, paddingBottom: 4 }, {
              default: ({ item: s, index: d }) => u(s, d, r, "end")
            })
          }),
          i === "monthrange" || i === "quarterrange" ? (0, ge.h)(
            "div",
            { class: `${r}-date-panel-month-calendar__picker-col` },
            (0, ge.h)(Ha.NScrollbar, { ref: "endMonthScrollbarRef", theme: n.peers.Scrollbar, themeOverrides: n.peerOverrides.Scrollbar }, {
              default: () => [
                (i === "monthrange" ? this.endMonthArray : this.endQuarterArray).map((s, d) => u(s, d, r, "end")),
                i === "monthrange" && (0, ge.h)("div", { class: `${r}-date-panel-month-calendar__padding` })
              ]
            })
          ) : null
        )
      ),
      this.datePickerSlots.footer ? (0, ge.h)("div", { class: `${r}-date-panel-footer` }, (0, ge.renderSlot)(this.datePickerSlots, "footer")) : null,
      !((a = this.actions) === null || a === void 0) && a.length || o ? (0, ge.h)(
        "div",
        { class: `${r}-date-panel-actions` },
        (0, ge.h)("div", { class: `${r}-date-panel-actions__prefix` }, o && Object.keys(o).map((s) => {
          const d = o[s];
          return Array.isArray(d) || typeof d == "function" ? (0, ge.h)(Kr.NxButton, { size: "tiny", onMouseenter: () => {
            this.handleRangeShortcutMouseenter(d);
          }, onClick: () => {
            this.handleRangeShortcutClick(d);
          }, onMouseleave: () => {
            this.handleShortcutMouseleave();
          } }, { default: () => s }) : null;
        })),
        (0, ge.h)(
          "div",
          { class: `${r}-date-panel-actions__suffix` },
          !((t = this.actions) === null || t === void 0) && t.includes("clear") ? (0, ge.h)(Kr.NxButton, { theme: n.peers.Button, themeOverrides: n.peerOverrides.Button, size: "tiny", onClick: this.handleClearClick }, { default: () => this.locale.clear }) : null,
          !((e = this.actions) === null || e === void 0) && e.includes("confirm") ? (0, ge.h)(Kr.NxButton, { theme: n.peers.Button, themeOverrides: n.peerOverrides.Button, size: "tiny", type: "primary", disabled: this.isRangeInvalid, onClick: this.handleConfirmClick }, { default: () => this.locale.confirm }) : null
        )
      ) : null,
      (0, ge.h)(Ha.NBaseFocusDetector, { onFocus: this.handleFocusDetectorFocus })
    );
  }
});
var Fi = {};
Object.defineProperty(Fi, "__esModule", {
  value: !0
});
const F = fo, Kh = vo;
Fi.default = (0, F.c)([(0, F.cB)("date-picker", `
 position: relative;
 z-index: auto;
 `, [(0, F.cB)("date-picker-icon", `
 color: var(--n-icon-color-override);
 transition: color .3s var(--n-bezier);
 `), (0, F.cB)("icon", `
 color: var(--n-icon-color-override);
 transition: color .3s var(--n-bezier);
 `), (0, F.cM)("disabled", [(0, F.cB)("date-picker-icon", `
 color: var(--n-icon-color-disabled-override);
 `), (0, F.cB)("icon", `
 color: var(--n-icon-color-disabled-override);
 `)])]), (0, F.cB)("date-panel", `
 width: fit-content;
 outline: none;
 margin: 4px 0;
 display: grid;
 grid-template-columns: 0fr;
 border-radius: var(--n-panel-border-radius);
 background-color: var(--n-panel-color);
 color: var(--n-panel-text-color);
 `, [(0, Kh.fadeInScaleUpTransition)(), (0, F.cM)("shadow", `
 box-shadow: var(--n-panel-box-shadow);
 `), (0, F.cB)("date-panel-calendar", {
  padding: "var(--n-calendar-left-padding)",
  display: "grid",
  gridTemplateColumns: "1fr",
  gridArea: "left-calendar"
}, [(0, F.cM)("end", {
  padding: "var(--n-calendar-right-padding)",
  gridArea: "right-calendar"
})]), (0, F.cB)("date-panel-month-calendar", {
  display: "flex",
  gridArea: "left-calendar"
}, [(0, F.cE)("picker-col", `
 min-width: var(--n-scroll-item-width);
 height: calc(var(--n-scroll-item-height) * 6);
 user-select: none;
 -webkit-user-select: none;
 `, [(0, F.c)("&:first-child", `
 min-width: calc(var(--n-scroll-item-width) + 4px);
 `, [(0, F.cE)("picker-col-item", [(0, F.c)("&::before", "left: 4px;")])]), (0, F.cE)("padding", `
 height: calc(var(--n-scroll-item-height) * 5)
 `)]), (0, F.cE)("picker-col-item", `
 z-index: 0;
 cursor: pointer;
 height: var(--n-scroll-item-height);
 box-sizing: border-box;
 padding-top: 4px;
 display: flex;
 align-items: center;
 justify-content: center;
 position: relative;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background: #0000;
 color: var(--n-item-text-color);
 `, [(0, F.c)("&::before", `
 z-index: -1;
 content: "";
 position: absolute;
 left: 0;
 right: 4px;
 top: 4px;
 bottom: 0;
 border-radius: var(--n-scroll-item-border-radius);
 transition: 
 background-color .3s var(--n-bezier);
 `), (0, F.cNotM)("disabled", [(0, F.c)("&:hover::before", `
 background-color: var(--n-item-color-hover);
 `), (0, F.cM)("selected", `
 color: var(--n-item-color-active);
 `, [(0, F.c)("&::before", "background-color: var(--n-item-color-hover);")])]), (0, F.cM)("disabled", `
 color: var(--n-item-text-color-disabled);
 cursor: not-allowed;
 `, [(0, F.cM)("selected", [(0, F.c)("&::before", `
 background-color: var(--n-item-color-disabled);
 `)])])])]), (0, F.cM)("date", {
  gridTemplateAreas: `
 "left-calendar"
 "footer"
 "action"
 `
}), (0, F.cM)("daterange", {
  gridTemplateAreas: `
 "left-calendar divider right-calendar"
 "footer footer footer"
 "action action action"
 `
}), (0, F.cM)("datetime", {
  gridTemplateAreas: `
 "header"
 "left-calendar"
 "footer"
 "action"
 `
}), (0, F.cM)("datetimerange", {
  gridTemplateAreas: `
 "header header header"
 "left-calendar divider right-calendar"
 "footer footer footer"
 "action action action"
 `
}), (0, F.cM)("month", {
  gridTemplateAreas: `
 "left-calendar"
 "footer"
 "action"
 `
}), (0, F.cB)("date-panel-footer", {
  gridArea: "footer"
}), (0, F.cB)("date-panel-actions", {
  gridArea: "action"
}), (0, F.cB)("date-panel-header", {
  gridArea: "header"
}), (0, F.cB)("date-panel-header", `
 box-sizing: border-box;
 width: 100%;
 align-items: center;
 padding: var(--n-panel-header-padding);
 display: flex;
 justify-content: space-between;
 border-bottom: 1px solid var(--n-panel-header-divider-color);
 `, [(0, F.c)(">", [(0, F.c)("*:not(:last-child)", {
  marginRight: "10px"
}), (0, F.c)("*", {
  flex: 1,
  width: 0
}), (0, F.cB)("time-picker", {
  zIndex: 1
})])]), (0, F.cB)("date-panel-month", `
 box-sizing: border-box;
 display: grid;
 grid-template-columns: var(--n-calendar-title-grid-template-columns);
 align-items: center;
 justify-items: center;
 padding: var(--n-calendar-title-padding);
 height: var(--n-calendar-title-height);
 `, [(0, F.cE)("prev, next, fast-prev, fast-next", `
 line-height: 0;
 cursor: pointer;
 width: var(--n-arrow-size);
 height: var(--n-arrow-size);
 color: var(--n-arrow-color);
 `), (0, F.cE)("month-year", `
 user-select: none;
 -webkit-user-select: none;
 flex-grow: 1;
 position: relative;
 `, [(0, F.cE)("text", `
 font-size: var(--n-calendar-title-font-size);
 line-height: var(--n-calendar-title-font-size);
 font-weight: var(--n-calendar-title-font-weight);
 padding: 6px 8px;
 text-align: center;
 color: var(--n-calendar-title-text-color);
 cursor: pointer;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-panel-border-radius);
 `, [(0, F.cM)("active", `
 background-color: var(--n-calendar-title-color-hover);
 `), (0, F.c)("&:hover", `
 background-color: var(--n-calendar-title-color-hover);
 `)])])]), (0, F.cB)("date-panel-weekdays", `
 display: grid;
 margin: auto;
 grid-template-columns: repeat(7, var(--n-item-cell-width));
 grid-template-rows: repeat(1, var(--n-item-cell-height));
 align-items: center;
 justify-items: center;
 margin-bottom: 4px;
 border-bottom: 1px solid var(--n-calendar-days-divider-color);
 `, [(0, F.cE)("day", `
 user-select: none;
 -webkit-user-select: none;
 line-height: 15px;
 width: var(--n-item-size);
 text-align: center;
 font-size: var(--n-calendar-days-font-size);
 color: var(--n-item-text-color);
 `)]), (0, F.cB)("date-panel-dates", `
 margin: auto;
 display: grid;
 grid-template-columns: repeat(7, var(--n-item-cell-width));
 grid-template-rows: repeat(6, var(--n-item-cell-height));
 align-items: center;
 justify-items: center;
 flex-wrap: wrap;
 `, [(0, F.cB)("date-panel-date", `
 user-select: none;
 -webkit-user-select: none;
 position: relative;
 width: var(--n-item-size);
 height: var(--n-item-size);
 line-height: var(--n-item-size);
 text-align: center;
 font-size: var(--n-item-font-size);
 border-radius: var(--n-item-border-radius);
 z-index: 0;
 cursor: pointer;
 transition:
 background-color .2s var(--n-bezier),
 color .2s var(--n-bezier);
 `, [(0, F.cE)("trigger", `
 position: absolute;
 left: calc(var(--n-item-size) / 2 - var(--n-item-cell-width) / 2);
 top: calc(var(--n-item-size) / 2 - var(--n-item-cell-height) / 2);
 width: var(--n-item-cell-width);
 height: var(--n-item-cell-height);
 `), (0, F.cNotM)("disabled", [(0, F.cNotM)("selected", [(0, F.c)("&:hover", {
  backgroundColor: "var(--n-item-color-hover)"
})])]), (0, F.cM)("current", [(0, F.cE)("sup", `
 position: absolute;
 top: 2px;
 right: 2px;
 content: "";
 height: 4px;
 width: 4px;
 border-radius: 2px;
 background-color: var(--n-item-color-active);
 transition:
 background-color .2s var(--n-bezier);
 `)]), (0, F.c)("&::after", `
 content: "";
 z-index: -1;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 transition: background-color .3s var(--n-bezier);
 `), (0, F.cM)("covered, start, end", [(0, F.cNotM)("excluded", [(0, F.c)("&::before", `
 content: "";
 z-index: -2;
 position: absolute;
 left: calc((var(--n-item-size) - var(--n-item-cell-width)) / 2);
 right: calc((var(--n-item-size) - var(--n-item-cell-width)) / 2);
 top: 0;
 bottom: 0;
 background-color: var(--n-item-color-included);
 `), (0, F.c)("&:nth-child(7n + 1)::before", {
  borderTopLeftRadius: "var(--n-item-border-radius)",
  borderBottomLeftRadius: "var(--n-item-border-radius)"
}), (0, F.c)("&:nth-child(7n + 7)::before", {
  borderTopRightRadius: "var(--n-item-border-radius)",
  borderBottomRightRadius: "var(--n-item-border-radius)"
})])]), (0, F.cM)("selected", {
  color: "var(--n-item-text-color-active)"
}, [(0, F.c)("&::after", {
  backgroundColor: "var(--n-item-color-active)"
}), (0, F.cM)("start", [(0, F.c)("&::before", {
  left: "50%"
})]), (0, F.cM)("end", [(0, F.c)("&::before", {
  right: "50%"
})]), (0, F.cE)("sup", {
  backgroundColor: "var(--n-panel-color)"
})]), (0, F.cM)("excluded", {
  color: "var(--n-item-text-color-disabled)"
}, [(0, F.cM)("selected", [(0, F.c)("&::after", {
  backgroundColor: "var(--n-item-color-disabled)"
})])]), (0, F.cM)("disabled", {
  cursor: "not-allowed",
  color: "var(--n-item-text-color-disabled)"
}, [(0, F.cM)("covered", [(0, F.c)("&::before", {
  backgroundColor: "var(--n-item-color-disabled)"
})]), (0, F.cM)("selected", [(0, F.c)("&::before", {
  backgroundColor: "var(--n-item-color-disabled)"
}), (0, F.c)("&::after", {
  backgroundColor: "var(--n-item-color-disabled)"
})])])])]), (0, F.cE)("vertical-divider", `
 grid-area: divider;
 height: 100%;
 width: 1px;
 background-color: var(--n-calendar-divider-color);
 `), (0, F.cB)("date-panel-footer", {
  borderTop: "1px solid var(--n-panel-action-divider-color)",
  padding: "var(--n-panel-extra-footer-padding)"
}), (0, F.cB)("date-panel-actions", `
 flex: 1;
 padding: var(--n-panel-action-padding);
 display: flex;
 align-items: center;
 justify-content: space-between;
 border-top: 1px solid var(--n-panel-action-divider-color);
 `, [(0, F.cE)("prefix, suffix", `
 display: flex;
 margin-bottom: -8px;
 `), (0, F.cE)("suffix", `
 align-self: flex-end;
 `), (0, F.cE)("prefix", `
 flex-wrap: wrap;
 `), (0, F.cB)("button", `
 margin-bottom: 8px;
 `, [(0, F.c)("&:not(:last-child)", `
 margin-right: 8px;
 `)])])]), (0, F.c)("[data-n-date].transition-disabled", {
  transition: "none !important"
}, [(0, F.c)("&::before, &::after", {
  transition: "none !important"
})])]);
(function(a) {
  var t = be && be.__importDefault || function(k) {
    return k && k.__esModule ? k : { default: k };
  };
  Object.defineProperty(a, "__esModule", { value: !0 }), a.datePickerProps = void 0;
  const e = Ke, r = Ba, n = Gn, o = Kt, i = Xn, u = za, l = Da, s = Dr, d = Ot, c = yr, h = ht, v = pl, b = Ee, O = wa, D = Zt, m = t(Ci), p = t(Ii), y = t(Ni), C = t(Ei), _ = t(Ir), N = t(Yi), H = t(Fi);
  a.datePickerProps = Object.assign(Object.assign({}, c.useTheme.props), {
    to: h.useAdjustedTo.propTo,
    bordered: {
      type: Boolean,
      default: void 0
    },
    clearable: Boolean,
    updateValueOnClose: Boolean,
    defaultValue: [Number, Array],
    defaultFormattedValue: [String, Array],
    defaultTime: [Number, String, Array],
    disabled: {
      type: Boolean,
      default: void 0
    },
    placement: {
      type: String,
      default: "bottom-start"
    },
    value: [Number, Array],
    formattedValue: [String, Array],
    size: String,
    type: {
      type: String,
      default: "date"
    },
    valueFormat: String,
    separator: String,
    placeholder: String,
    startPlaceholder: String,
    endPlaceholder: String,
    format: String,
    dateFormat: String,
    timeFormat: String,
    actions: Array,
    shortcuts: Object,
    isDateDisabled: Function,
    isTimeDisabled: Function,
    show: {
      type: Boolean,
      default: void 0
    },
    panel: Boolean,
    ranges: Object,
    firstDayOfWeek: Number,
    inputReadonly: Boolean,
    closeOnSelect: Boolean,
    status: String,
    timePickerProps: [Object, Array],
    onClear: Function,
    onConfirm: Function,
    defaultCalendarStartTime: Number,
    defaultCalendarEndTime: Number,
    bindCalendarMonths: Boolean,
    "onUpdate:show": [Function, Array],
    onUpdateShow: [Function, Array],
    "onUpdate:formattedValue": [Function, Array],
    onUpdateFormattedValue: [Function, Array],
    "onUpdate:value": [Function, Array],
    onUpdateValue: [Function, Array],
    onFocus: [Function, Array],
    onBlur: [Function, Array],
    // deprecated
    onChange: [Function, Array]
  }), a.default = (0, e.defineComponent)({
    name: "DatePicker",
    props: a.datePickerProps,
    setup(k, { slots: x }) {
      var $;
      process.env.NODE_ENV !== "production" && (0, e.watchEffect)(() => {
        k.onChange !== void 0 && (0, h.warnOnce)("date-picker", "`on-change` is deprecated, please use `on-update:value` instead.");
      });
      const { localeRef: Y, dateLocaleRef: A } = (0, c.useLocale)("DatePicker"), z = (0, c.useFormItem)(k), { mergedSizeRef: te, mergedDisabledRef: q, mergedStatusRef: re } = z, { mergedComponentPropsRef: pe, mergedClsPrefixRef: ne, mergedBorderedRef: De, namespaceRef: le, inlineThemeDisabled: ie } = (0, c.useConfig)(k), Oe = (0, e.ref)(null), ke = (0, e.ref)(null), ye = (0, e.ref)(null), K = (0, e.ref)(!1), xe = (0, e.toRef)(k, "show"), oe = (0, i.useMergedState)(xe, K), J = (0, e.computed)(() => ({
        locale: A.value.locale
      })), Z = (0, e.computed)(() => {
        const { format: w } = k;
        if (w)
          return w;
        switch (k.type) {
          case "date":
          case "daterange":
            return Y.value.dateFormat;
          case "datetime":
          case "datetimerange":
            return Y.value.dateTimeFormat;
          case "year":
          case "yearrange":
            return Y.value.yearTypeFormat;
          case "month":
          case "monthrange":
            return Y.value.monthTypeFormat;
          case "quarter":
          case "quarterrange":
            return Y.value.quarterFormat;
        }
      }), de = (0, e.computed)(() => {
        var w;
        return (w = k.valueFormat) !== null && w !== void 0 ? w : Z.value;
      });
      function Ae(w) {
        if (w === null)
          return null;
        const { value: g } = de, { value: P } = J;
        return Array.isArray(w) ? [
          (0, b.strictParse)(w[0], g, /* @__PURE__ */ new Date(), P).getTime(),
          (0, b.strictParse)(w[1], g, /* @__PURE__ */ new Date(), P).getTime()
        ] : (0, b.strictParse)(w, g, /* @__PURE__ */ new Date(), P).getTime();
      }
      const { defaultFormattedValue: Qe, defaultValue: tt } = k, Xe = (0, e.ref)(($ = Qe !== void 0 ? Ae(Qe) : tt) !== null && $ !== void 0 ? $ : null), qe = (0, e.computed)(() => {
        const { formattedValue: w } = k;
        return w !== void 0 ? Ae(w) : k.value;
      }), $e = (0, i.useMergedState)(qe, Xe), I = (0, e.ref)(null);
      (0, e.watchEffect)(() => {
        I.value = $e.value;
      });
      const j = (0, e.ref)(""), _e = (0, e.ref)(""), lt = (0, e.ref)(""), gt = (0, c.useTheme)("DatePicker", "-date-picker", H.default, v.datePickerLight, k, ne), ta = (0, e.computed)(() => {
        var w, g;
        return ((g = (w = pe == null ? void 0 : pe.value) === null || w === void 0 ? void 0 : w.DatePicker) === null || g === void 0 ? void 0 : g.timePickerSize) || "small";
      }), Et = (0, e.computed)(() => [
        "daterange",
        "datetimerange",
        "monthrange",
        "quarterrange",
        "yearrange"
      ].includes(k.type)), Ca = (0, e.computed)(() => {
        const { placeholder: w } = k;
        if (w === void 0) {
          const { type: g } = k;
          switch (g) {
            case "date":
              return Y.value.datePlaceholder;
            case "datetime":
              return Y.value.datetimePlaceholder;
            case "month":
              return Y.value.monthPlaceholder;
            case "year":
              return Y.value.yearPlaceholder;
            case "quarter":
              return Y.value.quarterPlaceholder;
            default:
              return "";
          }
        } else
          return w;
      }), aa = (0, e.computed)(() => k.startPlaceholder === void 0 ? k.type === "daterange" ? Y.value.startDatePlaceholder : k.type === "datetimerange" ? Y.value.startDatetimePlaceholder : k.type === "monthrange" ? Y.value.startMonthPlaceholder : "" : k.startPlaceholder), Ue = (0, e.computed)(() => k.endPlaceholder === void 0 ? k.type === "daterange" ? Y.value.endDatePlaceholder : k.type === "datetimerange" ? Y.value.endDatetimePlaceholder : k.type === "monthrange" ? Y.value.endMonthPlaceholder : "" : k.endPlaceholder), Yt = (0, e.computed)(() => {
        const { actions: w, type: g, clearable: P } = k;
        if (w === null)
          return [];
        if (w !== void 0)
          return w;
        const R = P ? ["clear"] : [];
        switch (g) {
          case "date":
            return R.push("now"), R;
          case "datetime":
            return R.push("now", "confirm"), R;
          case "daterange":
            return R.push("confirm"), R;
          case "datetimerange":
            return R.push("confirm"), R;
          case "month":
            return R.push("now", "confirm"), R;
          case "year":
            return R.push("now"), R;
          case "quarter":
            return R.push("now", "confirm"), R;
          case "monthrange":
          case "yearrange":
          case "quarterrange":
            return R.push("confirm"), R;
          default: {
            (0, h.warn)("date-picker", "The type is wrong, n-date-picker's type only supports `date`, `datetime`, `daterange` and `datetimerange`.");
            break;
          }
        }
      });
      function ra(w) {
        if (w === null)
          return null;
        if (Array.isArray(w)) {
          const { value: g } = de, { value: P } = J;
          return [
            (0, o.format)(w[0], g, P),
            (0, o.format)(w[1], g, J.value)
          ];
        } else
          return (0, o.format)(w, de.value, J.value);
      }
      function Ma(w) {
        I.value = w;
      }
      function na(w, g) {
        const { "onUpdate:formattedValue": P, onUpdateFormattedValue: R } = k;
        P && (0, h.call)(P, w, g), R && (0, h.call)(R, w, g);
      }
      function Te(w, g) {
        const { "onUpdate:value": P, onUpdateValue: R, onChange: ee } = k, { nTriggerFormChange: Le, nTriggerFormInput: je } = z, Ce = ra(w);
        g.doConfirm && Ft(w, Ce), R && (0, h.call)(R, w, Ce), P && (0, h.call)(P, w, Ce), ee && (0, h.call)(ee, w, Ce), Xe.value = w, na(Ce, w), Le(), je();
      }
      function ia() {
        const { onClear: w } = k;
        w == null || w();
      }
      function Ft(w, g) {
        const { onConfirm: P } = k;
        P && P(w, g);
      }
      function Oa(w) {
        const { onFocus: g } = k, { nTriggerFormFocus: P } = z;
        g && (0, h.call)(g, w), P();
      }
      function ka(w) {
        const { onBlur: g } = k, { nTriggerFormBlur: P } = z;
        g && (0, h.call)(g, w), P();
      }
      function At(w) {
        const { "onUpdate:show": g, onUpdateShow: P } = k;
        g && (0, h.call)(g, w), P && (0, h.call)(P, w), K.value = w;
      }
      function oa(w) {
        w.key === "Escape" && oe.value && ((0, h.markEventEffectPerformed)(w), ut({
          returnFocus: !0
        }));
      }
      function xa(w) {
        w.key === "Escape" && oe.value && (0, h.markEventEffectPerformed)(w);
      }
      function Sa() {
        var w;
        At(!1), (w = ye.value) === null || w === void 0 || w.deactivate(), ia();
      }
      function Pa() {
        var w;
        (w = ye.value) === null || w === void 0 || w.deactivate(), ia();
      }
      function Ut() {
        ut({
          returnFocus: !0
        });
      }
      function la(w) {
        var g;
        oe.value && !(!((g = ke.value) === null || g === void 0) && g.contains((0, u.getPreciseEventTarget)(w))) && ut({
          returnFocus: !1
        });
      }
      function pt(w) {
        ut({
          returnFocus: !0,
          disableUpdateOnClose: w
        });
      }
      function yt(w, g) {
        g ? Te(w, { doConfirm: !1 }) : Ma(w);
      }
      function ze() {
        const w = I.value;
        Te(Array.isArray(w) ? [w[0], w[1]] : w, { doConfirm: !0 });
      }
      function He() {
        const { value: w } = I;
        Et.value ? (Array.isArray(w) || w === null) && Ra(w) : Array.isArray(w) || $a(w);
      }
      function $a(w) {
        w === null ? j.value = "" : j.value = (0, o.format)(w, Z.value, J.value);
      }
      function Ra(w) {
        if (w === null)
          _e.value = "", lt.value = "";
        else {
          const g = J.value;
          _e.value = (0, o.format)(w[0], Z.value, g), lt.value = (0, o.format)(w[1], Z.value, g);
        }
      }
      function Ia() {
        oe.value || Je();
      }
      function ua(w) {
        var g;
        !((g = Oe.value) === null || g === void 0) && g.$el.contains(w.relatedTarget) || (ka(w), He(), ut({
          returnFocus: !1
        }));
      }
      function kt() {
        q.value || (He(), ut({
          returnFocus: !1
        }));
      }
      function Ht(w) {
        if (w === "") {
          Te(null, { doConfirm: !1 }), I.value = null, j.value = "";
          return;
        }
        const g = (0, b.strictParse)(w, Z.value, /* @__PURE__ */ new Date(), J.value);
        (0, o.isValid)(g) ? (Te((0, o.getTime)(g), { doConfirm: !1 }), He()) : j.value = w;
      }
      function sa(w) {
        if (w[0] === "" && w[1] === "") {
          Te(null, { doConfirm: !1 }), I.value = null, _e.value = "", lt.value = "";
          return;
        }
        const [g, P] = w, R = (0, b.strictParse)(g, Z.value, /* @__PURE__ */ new Date(), J.value), ee = (0, b.strictParse)(P, Z.value, /* @__PURE__ */ new Date(), J.value);
        (0, o.isValid)(R) && (0, o.isValid)(ee) ? (Te([(0, o.getTime)(R), (0, o.getTime)(ee)], {
          doConfirm: !1
        }), He()) : [_e.value, lt.value] = w;
      }
      function Na(w) {
        q.value || (0, u.happensIn)(w, "clear") || oe.value || Je();
      }
      function at(w) {
        q.value || Oa(w);
      }
      function Je() {
        q.value || oe.value || At(!0);
      }
      function ut({ returnFocus: w, disableUpdateOnClose: g }) {
        var P;
        oe.value && (At(!1), k.type !== "date" && k.updateValueOnClose && !g && ze(), w && ((P = ye.value) === null || P === void 0 || P.focus()));
      }
      (0, e.watch)(I, () => {
        He();
      }), He(), (0, e.watch)(oe, (w) => {
        w || (I.value = $e.value);
      });
      const da = (0, O.uniCalendarValidation)(k, I), Vt = (0, O.dualCalendarValidation)(k, I);
      (0, e.provide)(D.datePickerInjectionKey, Object.assign(Object.assign(Object.assign({
        mergedClsPrefixRef: ne,
        mergedThemeRef: gt,
        timePickerSizeRef: ta,
        localeRef: Y,
        dateLocaleRef: A,
        firstDayOfWeekRef: (0, e.toRef)(k, "firstDayOfWeek"),
        isDateDisabledRef: (0, e.toRef)(k, "isDateDisabled"),
        rangesRef: (0, e.toRef)(k, "ranges"),
        timePickerPropsRef: (0, e.toRef)(k, "timePickerProps"),
        closeOnSelectRef: (0, e.toRef)(k, "closeOnSelect"),
        updateValueOnCloseRef: (0, e.toRef)(k, "updateValueOnClose")
      }, da), Vt), { datePickerSlots: x }));
      const Ea = {
        focus: () => {
          var w;
          (w = ye.value) === null || w === void 0 || w.focus();
        },
        blur: () => {
          var w;
          (w = ye.value) === null || w === void 0 || w.blur();
        }
      }, Wt = (0, e.computed)(() => {
        const { common: { cubicBezierEaseInOut: w }, self: { iconColor: g, iconColorDisabled: P } } = gt.value;
        return {
          "--n-bezier": w,
          "--n-icon-color-override": g,
          "--n-icon-color-disabled-override": P
        };
      }), it = ie ? (0, c.useThemeClass)("date-picker-trigger", void 0, Wt, k) : void 0, M = (0, e.computed)(() => {
        const { type: w } = k, { common: { cubicBezierEaseInOut: g }, self: { calendarTitleFontSize: P, calendarDaysFontSize: R, itemFontSize: ee, itemTextColor: Le, itemColorDisabled: je, itemColorIncluded: Ce, itemColorHover: Nr, itemColorActive: Er, itemBorderRadius: Yr, itemTextColorDisabled: Fr, itemTextColorActive: Ar, panelColor: Ur, panelTextColor: Hr, arrowColor: Pl, calendarTitleTextColor: $l, panelActionDividerColor: Rl, panelHeaderDividerColor: Il, calendarDaysDividerColor: Nl, panelBoxShadow: El, panelBorderRadius: Yl, calendarTitleFontWeight: Fl, panelExtraFooterPadding: Al, panelActionPadding: Ul, itemSize: Hl, itemCellWidth: Vl, itemCellHeight: Wl, scrollItemWidth: zl, scrollItemHeight: Bl, calendarTitlePadding: jl, calendarTitleHeight: ql, calendarDaysHeight: Ll, calendarDaysTextColor: Ql, arrowSize: Xl, panelHeaderPadding: Gl, calendarDividerColor: Kl, calendarTitleGridTempateColumns: Zl, iconColor: Jl, iconColorDisabled: eu, scrollItemBorderRadius: tu, calendarTitleColorHover: au, [(0, h.createKey)("calendarLeftPadding", w)]: ru, [(0, h.createKey)("calendarRightPadding", w)]: nu } } = gt.value;
        return {
          "--n-bezier": g,
          "--n-panel-border-radius": Yl,
          "--n-panel-color": Ur,
          "--n-panel-box-shadow": El,
          "--n-panel-text-color": Hr,
          // panel header
          "--n-panel-header-padding": Gl,
          "--n-panel-header-divider-color": Il,
          // panel calendar
          "--n-calendar-left-padding": ru,
          "--n-calendar-right-padding": nu,
          "--n-calendar-title-color-hover": au,
          "--n-calendar-title-height": ql,
          "--n-calendar-title-padding": jl,
          "--n-calendar-title-font-size": P,
          "--n-calendar-title-font-weight": Fl,
          "--n-calendar-title-text-color": $l,
          "--n-calendar-title-grid-template-columns": Zl,
          "--n-calendar-days-height": Ll,
          "--n-calendar-days-divider-color": Nl,
          "--n-calendar-days-font-size": R,
          "--n-calendar-days-text-color": Ql,
          "--n-calendar-divider-color": Kl,
          // panel action
          "--n-panel-action-padding": Ul,
          "--n-panel-extra-footer-padding": Al,
          "--n-panel-action-divider-color": Rl,
          // panel item
          "--n-item-font-size": ee,
          "--n-item-border-radius": Yr,
          "--n-item-size": Hl,
          "--n-item-cell-width": Vl,
          "--n-item-cell-height": Wl,
          "--n-item-text-color": Le,
          "--n-item-color-included": Ce,
          "--n-item-color-disabled": je,
          "--n-item-color-hover": Nr,
          "--n-item-color-active": Er,
          "--n-item-text-color-disabled": Fr,
          "--n-item-text-color-active": Ar,
          // scroll item
          "--n-scroll-item-width": zl,
          "--n-scroll-item-height": Bl,
          "--n-scroll-item-border-radius": tu,
          // panel arrow
          "--n-arrow-size": Xl,
          "--n-arrow-color": Pl,
          // icon in trigger
          "--n-icon-color": Jl,
          "--n-icon-color-disabled": eu
        };
      }), E = ie ? (0, c.useThemeClass)("date-picker", (0, e.computed)(() => k.type), M, k) : void 0;
      return Object.assign(Object.assign({}, Ea), {
        mergedStatus: re,
        mergedClsPrefix: ne,
        mergedBordered: De,
        namespace: le,
        uncontrolledValue: Xe,
        pendingValue: I,
        panelInstRef: Oe,
        triggerElRef: ke,
        inputInstRef: ye,
        isMounted: (0, i.useIsMounted)(),
        displayTime: j,
        displayStartTime: _e,
        displayEndTime: lt,
        mergedShow: oe,
        adjustedTo: (0, h.useAdjustedTo)(k),
        isRange: Et,
        localizedStartPlaceholder: aa,
        localizedEndPlaceholder: Ue,
        mergedSize: te,
        mergedDisabled: q,
        localizedPlacehoder: Ca,
        isValueInvalid: da.isValueInvalidRef,
        isStartValueInvalid: Vt.isStartValueInvalidRef,
        isEndValueInvalid: Vt.isEndValueInvalidRef,
        handleInputKeydown: xa,
        handleClickOutside: la,
        handleKeydown: oa,
        handleClear: Sa,
        handlePanelClear: Pa,
        handleTriggerClick: Na,
        handleInputActivate: Ia,
        handleInputDeactivate: kt,
        handleInputFocus: at,
        handleInputBlur: ua,
        handlePanelTabOut: Ut,
        handlePanelClose: pt,
        handleRangeUpdateValue: sa,
        handleSingleUpdateValue: Ht,
        handlePanelUpdateValue: yt,
        handlePanelConfirm: ze,
        mergedTheme: gt,
        actions: Yt,
        triggerCssVars: ie ? void 0 : Wt,
        triggerThemeClass: it == null ? void 0 : it.themeClass,
        triggerOnRender: it == null ? void 0 : it.onRender,
        cssVars: ie ? void 0 : M,
        themeClass: E == null ? void 0 : E.themeClass,
        onRender: E == null ? void 0 : E.onRender
      });
    },
    render() {
      const { clearable: k, triggerOnRender: x, mergedClsPrefix: $, $slots: Y } = this, A = {
        onUpdateValue: this.handlePanelUpdateValue,
        onTabOut: this.handlePanelTabOut,
        onClose: this.handlePanelClose,
        onClear: this.handlePanelClear,
        onKeydown: this.handleKeydown,
        onConfirm: this.handlePanelConfirm,
        ref: "panelInstRef",
        value: this.pendingValue,
        active: this.mergedShow,
        actions: this.actions,
        shortcuts: this.shortcuts,
        style: this.cssVars,
        defaultTime: this.defaultTime,
        themeClass: this.themeClass,
        panel: this.panel,
        onRender: this.onRender
      }, z = () => {
        const { type: q } = this;
        return q === "datetime" ? (0, e.h)(m.default, Object.assign({}, A), Y) : q === "daterange" ? (0, e.h)(C.default, Object.assign({}, A, { defaultCalendarStartTime: this.defaultCalendarStartTime, defaultCalendarEndTime: this.defaultCalendarEndTime, bindCalendarMonths: this.bindCalendarMonths }), Y) : q === "datetimerange" ? (0, e.h)(p.default, Object.assign({}, A, { defaultCalendarStartTime: this.defaultCalendarStartTime, defaultCalendarEndTime: this.defaultCalendarEndTime, bindCalendarMonths: this.bindCalendarMonths }), Y) : q === "month" || q === "year" || q === "quarter" ? (0, e.h)(_.default, Object.assign({}, A, { type: q, key: q })) : q === "monthrange" || q === "yearrange" || q === "quarterrange" ? (0, e.h)(N.default, Object.assign({}, A, { type: q })) : (0, e.h)(y.default, Object.assign({}, A), Y);
      };
      if (this.panel)
        return z();
      x == null || x();
      const te = {
        bordered: this.mergedBordered,
        size: this.mergedSize,
        passivelyActivated: !0,
        disabled: this.mergedDisabled,
        readonly: this.inputReadonly || this.mergedDisabled,
        clearable: k,
        onClear: this.handleClear,
        onClick: this.handleTriggerClick,
        onKeydown: this.handleInputKeydown,
        onActivate: this.handleInputActivate,
        onDeactivate: this.handleInputDeactivate,
        onFocus: this.handleInputFocus,
        onBlur: this.handleInputBlur
      };
      return (0, e.h)(
        "div",
        { ref: "triggerElRef", class: [
          `${$}-date-picker`,
          this.mergedDisabled && `${$}-date-picker--disabled`,
          this.isRange && `${$}-date-picker--range`,
          this.triggerThemeClass
        ], style: this.triggerCssVars, onKeydown: this.handleKeydown },
        (0, e.h)(r.VBinder, null, {
          default: () => [
            (0, e.h)(r.VTarget, null, {
              default: () => this.isRange ? (0, e.h)(s.NInput, Object.assign({ ref: "inputInstRef", status: this.mergedStatus, value: [this.displayStartTime, this.displayEndTime], placeholder: [
                this.localizedStartPlaceholder,
                this.localizedEndPlaceholder
              ], textDecoration: [
                this.isStartValueInvalid ? "line-through" : "",
                this.isEndValueInvalid ? "line-through" : ""
              ], pair: !0, onUpdateValue: this.handleRangeUpdateValue, theme: this.mergedTheme.peers.Input, themeOverrides: this.mergedTheme.peerOverrides.Input, internalForceFocus: this.mergedShow, internalDeactivateOnEnter: !0 }, te), {
                separator: () => this.separator === void 0 ? (0, h.resolveSlot)(Y.separator, () => [
                  (0, e.h)(d.NBaseIcon, { clsPrefix: $, class: `${$}-date-picker-icon` }, {
                    default: () => (0, e.h)(l.ToIcon, null)
                  })
                ]) : this.separator,
                [k ? "clear-icon-placeholder" : "suffix"]: () => (0, h.resolveSlot)(Y["date-icon"], () => [
                  (0, e.h)(d.NBaseIcon, { clsPrefix: $, class: `${$}-date-picker-icon` }, {
                    default: () => (0, e.h)(l.DateIcon, null)
                  })
                ])
              }) : (0, e.h)(s.NInput, Object.assign({ ref: "inputInstRef", status: this.mergedStatus, value: this.displayTime, placeholder: this.localizedPlacehoder, textDecoration: this.isValueInvalid && !this.isRange ? "line-through" : "", onUpdateValue: this.handleSingleUpdateValue, theme: this.mergedTheme.peers.Input, themeOverrides: this.mergedTheme.peerOverrides.Input, internalForceFocus: this.mergedShow, internalDeactivateOnEnter: !0 }, te), {
                [k ? "clear-icon-placeholder" : "suffix"]: () => (0, e.h)(d.NBaseIcon, { clsPrefix: $, class: `${$}-date-picker-icon` }, {
                  default: () => (0, h.resolveSlot)(Y["date-icon"], () => [
                    (0, e.h)(l.DateIcon, null)
                  ])
                })
              })
            }),
            (0, e.h)(r.VFollower, { show: this.mergedShow, containerClass: this.namespace, to: this.adjustedTo, teleportDisabled: this.adjustedTo === h.useAdjustedTo.tdkey, placement: this.placement }, {
              default: () => (0, e.h)(e.Transition, { name: "fade-in-scale-up-transition", appear: this.isMounted }, {
                default: () => this.mergedShow ? (0, e.withDirectives)(z(), [
                  [
                    n.clickoutside,
                    this.handleClickOutside,
                    void 0,
                    { capture: !0 }
                  ]
                ]) : null
              })
            })
          ]
        })
      );
    }
  });
})(gl);
(function(a) {
  var t = be && be.__importDefault || function(r) {
    return r && r.__esModule ? r : { default: r };
  };
  Object.defineProperty(a, "__esModule", { value: !0 }), a.datePickerProps = a.NDatePicker = void 0;
  var e = gl;
  Object.defineProperty(a, "NDatePicker", { enumerable: !0, get: function() {
    return t(e).default;
  } }), Object.defineProperty(a, "datePickerProps", { enumerable: !0, get: function() {
    return e.datePickerProps;
  } });
})(ml);
const im = /* @__PURE__ */ lu({
  __proto__: null
}, [ml]);
export {
  im as i
};
