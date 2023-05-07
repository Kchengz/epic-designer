import { i as q, r as Qt, a as Ut } from "./index.1e43ecc1.js";
var Ot = { exports: {} };
(function(t) {
  function e(n) {
    return t.exports = e = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
      return typeof r;
    } : function(r) {
      return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
    }, t.exports.__esModule = !0, t.exports.default = t.exports, e(n);
  }
  t.exports = e, t.exports.__esModule = !0, t.exports.default = t.exports;
})(Ot);
function st(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
  }
}
function wt(t, e, n) {
  return e && st(t.prototype, e), n && st(t, n), t;
}
function $() {
  return ($ = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }).apply(this, arguments);
}
function _t(t, e) {
  t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
}
function jt(t, e) {
  if (t == null)
    return {};
  var n, r, a = {}, c = Object.keys(t);
  for (r = 0; r < c.length; r++)
    e.indexOf(n = c[r]) >= 0 || (a[n] = t[n]);
  return a;
}
function lt(t) {
  return ((e = t) != null && typeof e == "object" && Array.isArray(e) === !1) == 1 && Object.prototype.toString.call(t) === "[object Object]";
  var e;
}
var Tt = Object.prototype, xt = Tt.toString, Xt = Tt.hasOwnProperty, St = /^\s*function (\w+)/;
function pt(t) {
  var e, n = (e = t == null ? void 0 : t.type) !== null && e !== void 0 ? e : t;
  if (n) {
    var r = n.toString().match(St);
    return r ? r[1] : "";
  }
  return "";
}
var M = function(t) {
  var e, n;
  return lt(t) !== !1 && typeof (e = t.constructor) == "function" && lt(n = e.prototype) !== !1 && n.hasOwnProperty("isPrototypeOf") !== !1;
}, kt = function(t) {
  return t;
}, w = kt;
if (process.env.NODE_ENV !== "production") {
  var Zt = typeof console < "u";
  w = Zt ? function(t) {
    console.warn("[VueTypes warn]: " + t);
  } : kt;
}
var D = function(t, e) {
  return Xt.call(t, e);
}, tr = Number.isInteger || function(t) {
  return typeof t == "number" && isFinite(t) && Math.floor(t) === t;
}, F = Array.isArray || function(t) {
  return xt.call(t) === "[object Array]";
}, G = function(t) {
  return xt.call(t) === "[object Function]";
}, W = function(t) {
  return M(t) && D(t, "_vueTypes_name");
}, Et = function(t) {
  return M(t) && (D(t, "type") || ["_vueTypes_name", "validator", "default", "required"].some(function(e) {
    return D(t, e);
  }));
};
function at(t, e) {
  return Object.defineProperty(t.bind(e), "__original", { value: t });
}
function P(t, e, n) {
  var r;
  n === void 0 && (n = !1);
  var a = !0, c = "";
  r = M(t) ? t : { type: t };
  var y = W(r) ? r._vueTypes_name + " - " : "";
  if (Et(r) && r.type !== null) {
    if (r.type === void 0 || r.type === !0 || !r.required && e === void 0)
      return a;
    F(r.type) ? (a = r.type.some(function(p) {
      return P(p, e, !0) === !0;
    }), c = r.type.map(function(p) {
      return pt(p);
    }).join(" or ")) : a = (c = pt(r)) === "Array" ? F(e) : c === "Object" ? M(e) : c === "String" || c === "Number" || c === "Boolean" || c === "Function" ? function(p) {
      if (p == null)
        return "";
      var O = p.constructor.toString().match(St);
      return O ? O[1] : "";
    }(e) === c : e instanceof r.type;
  }
  if (!a) {
    var d = y + 'value "' + e + '" should be of type "' + c + '"';
    return n === !1 ? (w(d), !1) : d;
  }
  if (D(r, "validator") && G(r.validator)) {
    var v = w, h = [];
    if (w = function(p) {
      h.push(p);
    }, a = r.validator(e), w = v, !a) {
      var m = (h.length > 1 ? "* " : "") + h.join(`
* `);
      return h.length = 0, n === !1 ? (w(m), a) : m;
    }
  }
  return a;
}
function T(t, e) {
  var n = Object.defineProperties(e, { _vueTypes_name: { value: t, writable: !0 }, isRequired: { get: function() {
    return this.required = !0, this;
  } }, def: { value: function(a) {
    return a !== void 0 || this.default ? G(a) || P(this, a, !0) === !0 ? (this.default = F(a) ? function() {
      return [].concat(a);
    } : M(a) ? function() {
      return Object.assign({}, a);
    } : a, this) : (w(this._vueTypes_name + ' - invalid default value: "' + a + '"'), this) : this;
  } } }), r = n.validator;
  return G(r) && (n.validator = at(r, n)), n;
}
function x(t, e) {
  var n = T(t, e);
  return Object.defineProperty(n, "validate", { value: function(r) {
    return G(this.validator) && w(this._vueTypes_name + ` - calling .validate() will overwrite the current custom validator function. Validator info:
` + JSON.stringify(this)), this.validator = at(r, this), this;
  } });
}
function ot(t, e, n) {
  var r, a, c = (r = e, a = {}, Object.getOwnPropertyNames(r).forEach(function(p) {
    a[p] = Object.getOwnPropertyDescriptor(r, p);
  }), Object.defineProperties({}, a));
  if (c._vueTypes_name = t, !M(n))
    return c;
  var y, d, v = n.validator, h = jt(n, ["validator"]);
  if (G(v)) {
    var m = c.validator;
    m && (m = (d = (y = m).__original) !== null && d !== void 0 ? d : y), c.validator = at(m ? function(p) {
      return m.call(this, p) && v.call(this, p);
    } : v, c);
  }
  return Object.assign(c, h);
}
function K(t) {
  return t.replace(/^(?!\s*$)/gm, "  ");
}
var Lt = function() {
  return x("any", {});
}, Pt = function() {
  return x("function", { type: Function });
}, At = function() {
  return x("boolean", { type: Boolean });
}, Nt = function() {
  return x("string", { type: String });
}, Ct = function() {
  return x("number", { type: Number });
}, Mt = function() {
  return x("array", { type: Array });
}, Rt = function() {
  return x("object", { type: Object });
}, Ft = function() {
  return T("integer", { type: Number, validator: function(t) {
    return tr(t);
  } });
}, Gt = function() {
  return T("symbol", { validator: function(t) {
    return typeof t == "symbol";
  } });
};
function qt(t, e) {
  if (e === void 0 && (e = "custom validation failed"), typeof t != "function")
    throw new TypeError("[VueTypes error]: You must provide a function as argument");
  return T(t.name || "<<anonymous function>>", { validator: function(n) {
    var r = t(n);
    return r || w(this._vueTypes_name + " - " + e), r;
  } });
}
function Dt(t) {
  if (!F(t))
    throw new TypeError("[VueTypes error]: You must provide an array as argument.");
  var e = 'oneOf - value should be one of "' + t.join('", "') + '".', n = t.reduce(function(r, a) {
    if (a != null) {
      var c = a.constructor;
      r.indexOf(c) === -1 && r.push(c);
    }
    return r;
  }, []);
  return T("oneOf", { type: n.length > 0 ? n : void 0, validator: function(r) {
    var a = t.indexOf(r) !== -1;
    return a || w(e), a;
  } });
}
function Vt(t) {
  if (!F(t))
    throw new TypeError("[VueTypes error]: You must provide an array as argument");
  for (var e = !1, n = [], r = 0; r < t.length; r += 1) {
    var a = t[r];
    if (Et(a)) {
      if (W(a) && a._vueTypes_name === "oneOf") {
        n = n.concat(a.type);
        continue;
      }
      if (G(a.validator) && (e = !0), a.type !== !0 && a.type) {
        n = n.concat(a.type);
        continue;
      }
    }
    n.push(a);
  }
  return n = n.filter(function(c, y) {
    return n.indexOf(c) === y;
  }), T("oneOfType", e ? { type: n, validator: function(c) {
    var y = [], d = t.some(function(v) {
      var h = P(W(v) && v._vueTypes_name === "oneOf" ? v.type || null : v, c, !0);
      return typeof h == "string" && y.push(h), h === !0;
    });
    return d || w("oneOfType - provided value does not match any of the " + y.length + ` passed-in validators:
` + K(y.join(`
`))), d;
  } } : { type: n });
}
function It(t) {
  return T("arrayOf", { type: Array, validator: function(e) {
    var n, r = e.every(function(a) {
      return (n = P(t, a, !0)) === !0;
    });
    return r || w(`arrayOf - value validation error:
` + K(n)), r;
  } });
}
function Bt(t) {
  return T("instanceOf", { type: t });
}
function Yt(t) {
  return T("objectOf", { type: Object, validator: function(e) {
    var n, r = Object.keys(e).every(function(a) {
      return (n = P(t, e[a], !0)) === !0;
    });
    return r || w(`objectOf - value validation error:
` + K(n)), r;
  } });
}
function Ht(t) {
  var e = Object.keys(t), n = e.filter(function(a) {
    var c;
    return !!(!((c = t[a]) === null || c === void 0) && c.required);
  }), r = T("shape", { type: Object, validator: function(a) {
    var c = this;
    if (!M(a))
      return !1;
    var y = Object.keys(a);
    if (n.length > 0 && n.some(function(v) {
      return y.indexOf(v) === -1;
    })) {
      var d = n.filter(function(v) {
        return y.indexOf(v) === -1;
      });
      return w(d.length === 1 ? 'shape - required property "' + d[0] + '" is not defined.' : 'shape - required properties "' + d.join('", "') + '" are not defined.'), !1;
    }
    return y.every(function(v) {
      if (e.indexOf(v) === -1)
        return c._vueTypes_isLoose === !0 || (w('shape - shape definition does not include a "' + v + '" property. Allowed keys: "' + e.join('", "') + '".'), !1);
      var h = P(t[v], a[v], !0);
      return typeof h == "string" && w('shape - "' + v + `" property validation error:
 ` + K(h)), h === !0;
    });
  } });
  return Object.defineProperty(r, "_vueTypes_isLoose", { writable: !0, value: !1 }), Object.defineProperty(r, "loose", { get: function() {
    return this._vueTypes_isLoose = !0, this;
  } }), r;
}
var E = function() {
  function t() {
  }
  return t.extend = function(e) {
    var n = this;
    if (F(e))
      return e.forEach(function(p) {
        return n.extend(p);
      }), this;
    var r = e.name, a = e.validate, c = a !== void 0 && a, y = e.getter, d = y !== void 0 && y, v = jt(e, ["name", "validate", "getter"]);
    if (D(this, r))
      throw new TypeError('[VueTypes error]: Type "' + r + '" already defined');
    var h, m = v.type;
    return W(m) ? (delete v.type, Object.defineProperty(this, r, d ? { get: function() {
      return ot(r, m, v);
    } } : { value: function() {
      var p, O = ot(r, m, v);
      return O.validator && (O.validator = (p = O.validator).bind.apply(p, [O].concat([].slice.call(arguments)))), O;
    } })) : (h = d ? { get: function() {
      var p = Object.assign({}, v);
      return c ? x(r, p) : T(r, p);
    }, enumerable: !0 } : { value: function() {
      var p, O, S = Object.assign({}, v);
      return p = c ? x(r, S) : T(r, S), S.validator && (p.validator = (O = S.validator).bind.apply(O, [p].concat([].slice.call(arguments)))), p;
    }, enumerable: !0 }, Object.defineProperty(this, r, h));
  }, wt(t, null, [{ key: "any", get: function() {
    return Lt();
  } }, { key: "func", get: function() {
    return Pt().def(this.defaults.func);
  } }, { key: "bool", get: function() {
    return At().def(this.defaults.bool);
  } }, { key: "string", get: function() {
    return Nt().def(this.defaults.string);
  } }, { key: "number", get: function() {
    return Ct().def(this.defaults.number);
  } }, { key: "array", get: function() {
    return Mt().def(this.defaults.array);
  } }, { key: "object", get: function() {
    return Rt().def(this.defaults.object);
  } }, { key: "integer", get: function() {
    return Ft().def(this.defaults.integer);
  } }, { key: "symbol", get: function() {
    return Gt();
  } }]), t;
}();
function $t(t) {
  var e;
  return t === void 0 && (t = { func: function() {
  }, bool: !0, string: "", number: 0, array: function() {
    return [];
  }, object: function() {
    return {};
  }, integer: 0 }), (e = function(n) {
    function r() {
      return n.apply(this, arguments) || this;
    }
    return _t(r, n), wt(r, null, [{ key: "sensibleDefaults", get: function() {
      return $({}, this.defaults);
    }, set: function(a) {
      this.defaults = a !== !1 ? $({}, a !== !0 ? a : t) : {};
    } }]), r;
  }(E)).defaults = $({}, t), e;
}
E.defaults = {}, E.custom = qt, E.oneOf = Dt, E.instanceOf = Bt, E.oneOfType = Vt, E.arrayOf = It, E.objectOf = Yt, E.shape = Ht, E.utils = { validate: function(t, e) {
  return P(e, t, !0) === !0;
}, toType: function(t, e, n) {
  return n === void 0 && (n = !1), n ? x(t, e) : T(t, e);
} };
var rr = function(t) {
  function e() {
    return t.apply(this, arguments) || this;
  }
  return _t(e, t), e;
}($t());
const _r = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: rr,
  any: Lt,
  array: Mt,
  arrayOf: It,
  bool: At,
  createTypes: $t,
  custom: qt,
  fromType: ot,
  func: Pt,
  instanceOf: Bt,
  integer: Ft,
  number: Ct,
  object: Rt,
  objectOf: Yt,
  oneOf: Dt,
  oneOfType: Vt,
  shape: Ht,
  string: Nt,
  symbol: Gt,
  toType: T,
  toValidableType: x,
  validateType: P
}, Symbol.toStringTag, { value: "Module" }));
var Y = 2, vt = 0.16, er = 0.05, nr = 0.05, or = 0.15, zt = 5, Jt = 4, ir = [{
  index: 7,
  opacity: 0.15
}, {
  index: 6,
  opacity: 0.25
}, {
  index: 5,
  opacity: 0.3
}, {
  index: 5,
  opacity: 0.45
}, {
  index: 5,
  opacity: 0.65
}, {
  index: 5,
  opacity: 0.85
}, {
  index: 4,
  opacity: 0.9
}, {
  index: 3,
  opacity: 0.95
}, {
  index: 2,
  opacity: 0.97
}, {
  index: 1,
  opacity: 0.98
}];
function dt(t) {
  var e = t.r, n = t.g, r = t.b, a = Qt(e, n, r);
  return {
    h: a.h * 360,
    s: a.s,
    v: a.v
  };
}
function H(t) {
  var e = t.r, n = t.g, r = t.b;
  return "#".concat(Ut(e, n, r, !1));
}
function ar(t, e, n) {
  var r = n / 100, a = {
    r: (e.r - t.r) * r + t.r,
    g: (e.g - t.g) * r + t.g,
    b: (e.b - t.b) * r + t.b
  };
  return a;
}
function yt(t, e, n) {
  var r;
  return Math.round(t.h) >= 60 && Math.round(t.h) <= 240 ? r = n ? Math.round(t.h) - Y * e : Math.round(t.h) + Y * e : r = n ? Math.round(t.h) + Y * e : Math.round(t.h) - Y * e, r < 0 ? r += 360 : r >= 360 && (r -= 360), r;
}
function ht(t, e, n) {
  if (t.h === 0 && t.s === 0)
    return t.s;
  var r;
  return n ? r = t.s - vt * e : e === Jt ? r = t.s + vt : r = t.s + er * e, r > 1 && (r = 1), n && e === zt && r > 0.1 && (r = 0.1), r < 0.06 && (r = 0.06), Number(r.toFixed(2));
}
function gt(t, e, n) {
  var r;
  return n ? r = t.v + nr * e : r = t.v - or * e, r > 1 && (r = 1), Number(r.toFixed(2));
}
function it(t) {
  for (var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = [], r = q(t), a = zt; a > 0; a -= 1) {
    var c = dt(r), y = H(q({
      h: yt(c, a, !0),
      s: ht(c, a, !0),
      v: gt(c, a, !0)
    }));
    n.push(y);
  }
  n.push(H(r));
  for (var d = 1; d <= Jt; d += 1) {
    var v = dt(r), h = H(q({
      h: yt(v, d),
      s: ht(v, d),
      v: gt(v, d)
    }));
    n.push(h);
  }
  return e.theme === "dark" ? ir.map(function(m) {
    var p = m.index, O = m.opacity, S = H(ar(q(e.backgroundColor || "#141414"), q(n[p]), O * 100));
    return S;
  }) : n;
}
var z = {
  red: "#F5222D",
  volcano: "#FA541C",
  orange: "#FA8C16",
  gold: "#FAAD14",
  yellow: "#FADB14",
  lime: "#A0D911",
  green: "#52C41A",
  cyan: "#13C2C2",
  blue: "#1890FF",
  geekblue: "#2F54EB",
  purple: "#722ED1",
  magenta: "#EB2F96",
  grey: "#666666"
}, b = {}, J = {};
Object.keys(z).forEach(function(t) {
  b[t] = it(z[t]), b[t].primary = b[t][5], J[t] = it(z[t], {
    theme: "dark",
    backgroundColor: "#141414"
  }), J[t].primary = J[t][5];
});
var ur = b.red, fr = b.volcano, cr = b.gold, sr = b.orange, lr = b.yellow, pr = b.lime, vr = b.green, dr = b.cyan, yr = b.blue, hr = b.geekblue, gr = b.purple, mr = b.magenta, br = b.grey;
const jr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  blue: yr,
  cyan: dr,
  geekblue: hr,
  generate: it,
  gold: cr,
  green: vr,
  grey: br,
  lime: pr,
  magenta: mr,
  orange: sr,
  presetDarkPalettes: J,
  presetPalettes: b,
  presetPrimaryColors: z,
  purple: gr,
  red: ur,
  volcano: fr,
  yellow: lr
}, Symbol.toStringTag, { value: "Module" }));
var et = { exports: {} }, mt;
function Or() {
  return mt || (mt = 1, function(t) {
    var e = Ot.exports.default;
    function n() {
      t.exports = n = function() {
        return r;
      }, t.exports.__esModule = !0, t.exports.default = t.exports;
      var r = {}, a = Object.prototype, c = a.hasOwnProperty, y = Object.defineProperty || function(u, o, i) {
        u[o] = i.value;
      }, d = typeof Symbol == "function" ? Symbol : {}, v = d.iterator || "@@iterator", h = d.asyncIterator || "@@asyncIterator", m = d.toStringTag || "@@toStringTag";
      function p(u, o, i) {
        return Object.defineProperty(u, o, {
          value: i,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }), u[o];
      }
      try {
        p({}, "");
      } catch {
        p = function(i, f, l) {
          return i[f] = l;
        };
      }
      function O(u, o, i, f) {
        var l = o && o.prototype instanceof Q ? o : Q, s = Object.create(l.prototype), g = new tt(f || []);
        return y(s, "_invoke", {
          value: Wt(u, i, g)
        }), s;
      }
      function S(u, o, i) {
        try {
          return {
            type: "normal",
            arg: u.call(o, i)
          };
        } catch (f) {
          return {
            type: "throw",
            arg: f
          };
        }
      }
      r.wrap = O;
      var k = {};
      function Q() {
      }
      function V() {
      }
      function A() {
      }
      var U = {};
      p(U, v, function() {
        return this;
      });
      var X = Object.getPrototypeOf, I = X && X(X(rt([])));
      I && I !== a && c.call(I, v) && (U = I);
      var R = A.prototype = Q.prototype = Object.create(U);
      function ut(u) {
        ["next", "throw", "return"].forEach(function(o) {
          p(u, o, function(i) {
            return this._invoke(o, i);
          });
        });
      }
      function B(u, o) {
        function i(l, s, g, _) {
          var j = S(u[l], u, s);
          if (j.type !== "throw") {
            var N = j.arg, L = N.value;
            return L && e(L) == "object" && c.call(L, "__await") ? o.resolve(L.__await).then(function(C) {
              i("next", C, g, _);
            }, function(C) {
              i("throw", C, g, _);
            }) : o.resolve(L).then(function(C) {
              N.value = C, g(N);
            }, function(C) {
              return i("throw", C, g, _);
            });
          }
          _(j.arg);
        }
        var f;
        y(this, "_invoke", {
          value: function(s, g) {
            function _() {
              return new o(function(j, N) {
                i(s, g, j, N);
              });
            }
            return f = f ? f.then(_, _) : _();
          }
        });
      }
      function Wt(u, o, i) {
        var f = "suspendedStart";
        return function(l, s) {
          if (f === "executing")
            throw new Error("Generator is already running");
          if (f === "completed") {
            if (l === "throw")
              throw s;
            return ct();
          }
          for (i.method = l, i.arg = s; ; ) {
            var g = i.delegate;
            if (g) {
              var _ = ft(g, i);
              if (_) {
                if (_ === k)
                  continue;
                return _;
              }
            }
            if (i.method === "next")
              i.sent = i._sent = i.arg;
            else if (i.method === "throw") {
              if (f === "suspendedStart")
                throw f = "completed", i.arg;
              i.dispatchException(i.arg);
            } else
              i.method === "return" && i.abrupt("return", i.arg);
            f = "executing";
            var j = S(u, o, i);
            if (j.type === "normal") {
              if (f = i.done ? "completed" : "suspendedYield", j.arg === k)
                continue;
              return {
                value: j.arg,
                done: i.done
              };
            }
            j.type === "throw" && (f = "completed", i.method = "throw", i.arg = j.arg);
          }
        };
      }
      function ft(u, o) {
        var i = o.method, f = u.iterator[i];
        if (f === void 0)
          return o.delegate = null, i === "throw" && u.iterator.return && (o.method = "return", o.arg = void 0, ft(u, o), o.method === "throw") || i !== "return" && (o.method = "throw", o.arg = new TypeError("The iterator does not provide a '" + i + "' method")), k;
        var l = S(f, u.iterator, o.arg);
        if (l.type === "throw")
          return o.method = "throw", o.arg = l.arg, o.delegate = null, k;
        var s = l.arg;
        return s ? s.done ? (o[u.resultName] = s.value, o.next = u.nextLoc, o.method !== "return" && (o.method = "next", o.arg = void 0), o.delegate = null, k) : s : (o.method = "throw", o.arg = new TypeError("iterator result is not an object"), o.delegate = null, k);
      }
      function Kt(u) {
        var o = {
          tryLoc: u[0]
        };
        1 in u && (o.catchLoc = u[1]), 2 in u && (o.finallyLoc = u[2], o.afterLoc = u[3]), this.tryEntries.push(o);
      }
      function Z(u) {
        var o = u.completion || {};
        o.type = "normal", delete o.arg, u.completion = o;
      }
      function tt(u) {
        this.tryEntries = [{
          tryLoc: "root"
        }], u.forEach(Kt, this), this.reset(!0);
      }
      function rt(u) {
        if (u) {
          var o = u[v];
          if (o)
            return o.call(u);
          if (typeof u.next == "function")
            return u;
          if (!isNaN(u.length)) {
            var i = -1, f = function l() {
              for (; ++i < u.length; )
                if (c.call(u, i))
                  return l.value = u[i], l.done = !1, l;
              return l.value = void 0, l.done = !0, l;
            };
            return f.next = f;
          }
        }
        return {
          next: ct
        };
      }
      function ct() {
        return {
          value: void 0,
          done: !0
        };
      }
      return V.prototype = A, y(R, "constructor", {
        value: A,
        configurable: !0
      }), y(A, "constructor", {
        value: V,
        configurable: !0
      }), V.displayName = p(A, m, "GeneratorFunction"), r.isGeneratorFunction = function(u) {
        var o = typeof u == "function" && u.constructor;
        return !!o && (o === V || (o.displayName || o.name) === "GeneratorFunction");
      }, r.mark = function(u) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(u, A) : (u.__proto__ = A, p(u, m, "GeneratorFunction")), u.prototype = Object.create(R), u;
      }, r.awrap = function(u) {
        return {
          __await: u
        };
      }, ut(B.prototype), p(B.prototype, h, function() {
        return this;
      }), r.AsyncIterator = B, r.async = function(u, o, i, f, l) {
        l === void 0 && (l = Promise);
        var s = new B(O(u, o, i, f), l);
        return r.isGeneratorFunction(o) ? s : s.next().then(function(g) {
          return g.done ? g.value : s.next();
        });
      }, ut(R), p(R, m, "Generator"), p(R, v, function() {
        return this;
      }), p(R, "toString", function() {
        return "[object Generator]";
      }), r.keys = function(u) {
        var o = Object(u), i = [];
        for (var f in o)
          i.push(f);
        return i.reverse(), function l() {
          for (; i.length; ) {
            var s = i.pop();
            if (s in o)
              return l.value = s, l.done = !1, l;
          }
          return l.done = !0, l;
        };
      }, r.values = rt, tt.prototype = {
        constructor: tt,
        reset: function(o) {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(Z), !o)
            for (var i in this)
              i.charAt(0) === "t" && c.call(this, i) && !isNaN(+i.slice(1)) && (this[i] = void 0);
        },
        stop: function() {
          this.done = !0;
          var o = this.tryEntries[0].completion;
          if (o.type === "throw")
            throw o.arg;
          return this.rval;
        },
        dispatchException: function(o) {
          if (this.done)
            throw o;
          var i = this;
          function f(N, L) {
            return g.type = "throw", g.arg = o, i.next = N, L && (i.method = "next", i.arg = void 0), !!L;
          }
          for (var l = this.tryEntries.length - 1; l >= 0; --l) {
            var s = this.tryEntries[l], g = s.completion;
            if (s.tryLoc === "root")
              return f("end");
            if (s.tryLoc <= this.prev) {
              var _ = c.call(s, "catchLoc"), j = c.call(s, "finallyLoc");
              if (_ && j) {
                if (this.prev < s.catchLoc)
                  return f(s.catchLoc, !0);
                if (this.prev < s.finallyLoc)
                  return f(s.finallyLoc);
              } else if (_) {
                if (this.prev < s.catchLoc)
                  return f(s.catchLoc, !0);
              } else {
                if (!j)
                  throw new Error("try statement without catch or finally");
                if (this.prev < s.finallyLoc)
                  return f(s.finallyLoc);
              }
            }
          }
        },
        abrupt: function(o, i) {
          for (var f = this.tryEntries.length - 1; f >= 0; --f) {
            var l = this.tryEntries[f];
            if (l.tryLoc <= this.prev && c.call(l, "finallyLoc") && this.prev < l.finallyLoc) {
              var s = l;
              break;
            }
          }
          s && (o === "break" || o === "continue") && s.tryLoc <= i && i <= s.finallyLoc && (s = null);
          var g = s ? s.completion : {};
          return g.type = o, g.arg = i, s ? (this.method = "next", this.next = s.finallyLoc, k) : this.complete(g);
        },
        complete: function(o, i) {
          if (o.type === "throw")
            throw o.arg;
          return o.type === "break" || o.type === "continue" ? this.next = o.arg : o.type === "return" ? (this.rval = this.arg = o.arg, this.method = "return", this.next = "end") : o.type === "normal" && i && (this.next = i), k;
        },
        finish: function(o) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var f = this.tryEntries[i];
            if (f.finallyLoc === o)
              return this.complete(f.completion, f.afterLoc), Z(f), k;
          }
        },
        catch: function(o) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var f = this.tryEntries[i];
            if (f.tryLoc === o) {
              var l = f.completion;
              if (l.type === "throw") {
                var s = l.arg;
                Z(f);
              }
              return s;
            }
          }
          throw new Error("illegal catch attempt");
        },
        delegateYield: function(o, i, f) {
          return this.delegate = {
            iterator: rt(o),
            resultName: i,
            nextLoc: f
          }, this.method === "next" && (this.arg = void 0), k;
        }
      }, r;
    }
    t.exports = n, t.exports.__esModule = !0, t.exports.default = t.exports;
  }(et)), et.exports;
}
var nt, bt;
function Tr() {
  if (bt)
    return nt;
  bt = 1;
  var t = Or()();
  nt = t;
  try {
    regeneratorRuntime = t;
  } catch {
    typeof globalThis == "object" ? globalThis.regeneratorRuntime = t : Function("r", "regeneratorRuntime = r")(t);
  }
  return nt;
}
export {
  Ot as _,
  it as g,
  jr as i,
  Tr as r,
  _r as v,
  $t as z
};
