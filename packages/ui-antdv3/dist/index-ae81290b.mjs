function T() {
  return T = Object.assign ? Object.assign.bind() : function(i) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var t in r)
        Object.prototype.hasOwnProperty.call(r, t) && (i[t] = r[t]);
    }
    return i;
  }, T.apply(this, arguments);
}
function Pe(i, e) {
  i.prototype = Object.create(e.prototype), i.prototype.constructor = i, U(i, e);
}
function de(i) {
  return de = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, de(i);
}
function U(i, e) {
  return U = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, n) {
    return t.__proto__ = n, t;
  }, U(i, e);
}
function Ve() {
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
function ne(i, e, r) {
  return Ve() ? ne = Reflect.construct.bind() : ne = function(n, f, a) {
    var o = [null];
    o.push.apply(o, f);
    var s = Function.bind.apply(n, o), d = new s();
    return a && U(d, a.prototype), d;
  }, ne.apply(null, arguments);
}
function Ne(i) {
  return Function.toString.call(i).indexOf("[native code]") !== -1;
}
function ce(i) {
  var e = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return ce = function(t) {
    if (t === null || !Ne(t))
      return t;
    if (typeof t != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof e < "u") {
      if (e.has(t))
        return e.get(t);
      e.set(t, n);
    }
    function n() {
      return ne(t, arguments, de(this).constructor);
    }
    return n.prototype = Object.create(t.prototype, {
      constructor: {
        value: n,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), U(n, t);
  }, ce(i);
}
var Re = /%[sdj%]/g, Ae = function() {
};
typeof process < "u" && process.env && process.env.NODE_ENV !== "production" && typeof window < "u" && typeof document < "u" && (Ae = function(e, r) {
  typeof console < "u" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING > "u" && r.every(function(t) {
    return typeof t == "string";
  }) && console.warn(e, r);
});
function le(i) {
  if (!i || !i.length)
    return null;
  var e = {};
  return i.forEach(function(r) {
    var t = r.field;
    e[t] = e[t] || [], e[t].push(r);
  }), e;
}
function N(i) {
  for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), t = 1; t < e; t++)
    r[t - 1] = arguments[t];
  var n = 0, f = r.length;
  if (typeof i == "function")
    return i.apply(null, r);
  if (typeof i == "string") {
    var a = i.replace(Re, function(o) {
      if (o === "%%")
        return "%";
      if (n >= f)
        return o;
      switch (o) {
        case "%s":
          return String(r[n++]);
        case "%d":
          return Number(r[n++]);
        case "%j":
          try {
            return JSON.stringify(r[n++]);
          } catch {
            return "[Circular]";
          }
          break;
        default:
          return o;
      }
    });
    return a;
  }
  return i;
}
function Se(i) {
  return i === "string" || i === "url" || i === "hex" || i === "email" || i === "date" || i === "pattern";
}
function O(i, e) {
  return !!(i == null || e === "array" && Array.isArray(i) && !i.length || Se(e) && typeof i == "string" && !i);
}
function Me(i, e, r) {
  var t = [], n = 0, f = i.length;
  function a(o) {
    t.push.apply(t, o || []), n++, n === f && r(t);
  }
  i.forEach(function(o) {
    e(o, a);
  });
}
function we(i, e, r) {
  var t = 0, n = i.length;
  function f(a) {
    if (a && a.length) {
      r(a);
      return;
    }
    var o = t;
    t = t + 1, o < n ? e(i[o], f) : r([]);
  }
  f([]);
}
function Te(i) {
  var e = [];
  return Object.keys(i).forEach(function(r) {
    e.push.apply(e, i[r] || []);
  }), e;
}
var be = /* @__PURE__ */ function(i) {
  Pe(e, i);
  function e(r, t) {
    var n;
    return n = i.call(this, "Async Validation Error") || this, n.errors = r, n.fields = t, n;
  }
  return e;
}(/* @__PURE__ */ ce(Error));
function De(i, e, r, t, n) {
  if (e.first) {
    var f = new Promise(function(v, F) {
      var E = function(u) {
        return t(u), u.length ? F(new be(u, le(u))) : v(n);
      }, c = Te(i);
      we(c, r, E);
    });
    return f.catch(function(v) {
      return v;
    }), f;
  }
  var a = e.firstFields === !0 ? Object.keys(i) : e.firstFields || [], o = Object.keys(i), s = o.length, d = 0, l = [], g = new Promise(function(v, F) {
    var E = function(m) {
      if (l.push.apply(l, m), d++, d === s)
        return t(l), l.length ? F(new be(l, le(l))) : v(n);
    };
    o.length || (t(l), v(n)), o.forEach(function(c) {
      var m = i[c];
      a.indexOf(c) !== -1 ? we(m, r, E) : Me(m, r, E);
    });
  });
  return g.catch(function(v) {
    return v;
  }), g;
}
function We(i) {
  return !!(i && i.message !== void 0);
}
function Ie(i, e) {
  for (var r = i, t = 0; t < e.length; t++) {
    if (r == null)
      return r;
    r = r[e[t]];
  }
  return r;
}
function qe(i, e) {
  return function(r) {
    var t;
    return i.fullFields ? t = Ie(e, i.fullFields) : t = e[r.field || i.fullField], We(r) ? (r.field = r.field || i.fullField, r.fieldValue = t, r) : {
      message: typeof r == "function" ? r() : r,
      fieldValue: t,
      field: r.field || i.fullField
    };
  };
}
function xe(i, e) {
  if (e) {
    for (var r in e)
      if (e.hasOwnProperty(r)) {
        var t = e[r];
        typeof t == "object" && typeof i[r] == "object" ? i[r] = T({}, i[r], t) : i[r] = t;
      }
  }
  return i;
}
var _e = function(e, r, t, n, f, a) {
  e.required && (!t.hasOwnProperty(e.field) || O(r, a || e.type)) && n.push(N(f.messages.required, e.fullField));
}, $e = function(e, r, t, n, f) {
  (/^\s+$/.test(r) || r === "") && n.push(N(f.messages.whitespace, e.fullField));
}, re, He = function() {
  if (re)
    return re;
  var i = "[a-fA-F\\d:]", e = function(y) {
    return y && y.includeBoundaries ? "(?:(?<=\\s|^)(?=" + i + ")|(?<=" + i + ")(?=\\s|$))" : "";
  }, r = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}", t = "[a-fA-F\\d]{1,4}", n = (`
(?:
(?:` + t + ":){7}(?:" + t + `|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:` + t + ":){6}(?:" + r + "|:" + t + `|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:` + t + ":){5}(?::" + r + "|(?::" + t + `){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:` + t + ":){4}(?:(?::" + t + "){0,1}:" + r + "|(?::" + t + `){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:` + t + ":){3}(?:(?::" + t + "){0,2}:" + r + "|(?::" + t + `){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:` + t + ":){2}(?:(?::" + t + "){0,3}:" + r + "|(?::" + t + `){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:` + t + ":){1}(?:(?::" + t + "){0,4}:" + r + "|(?::" + t + `){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::` + t + "){0,5}:" + r + "|(?::" + t + `){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`).replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim(), f = new RegExp("(?:^" + r + "$)|(?:^" + n + "$)"), a = new RegExp("^" + r + "$"), o = new RegExp("^" + n + "$"), s = function(y) {
    return y && y.exact ? f : new RegExp("(?:" + e(y) + r + e(y) + ")|(?:" + e(y) + n + e(y) + ")", "g");
  };
  s.v4 = function(p) {
    return p && p.exact ? a : new RegExp("" + e(p) + r + e(p), "g");
  }, s.v6 = function(p) {
    return p && p.exact ? o : new RegExp("" + e(p) + n + e(p), "g");
  };
  var d = "(?:(?:[a-z]+:)?//)", l = "(?:\\S+(?::\\S*)?@)?", g = s.v4().source, v = s.v6().source, F = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", E = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", c = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", m = "(?::\\d{2,5})?", u = '(?:[/?#][^\\s"]*)?', A = "(?:" + d + "|www\\.)" + l + "(?:localhost|" + g + "|" + v + "|" + F + E + c + ")" + m + u;
  return re = new RegExp("(?:^" + A + "$)", "i"), re;
}, Oe = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, H = {
  integer: function(e) {
    return H.number(e) && parseInt(e, 10) === e;
  },
  float: function(e) {
    return H.number(e) && !H.integer(e);
  },
  array: function(e) {
    return Array.isArray(e);
  },
  regexp: function(e) {
    if (e instanceof RegExp)
      return !0;
    try {
      return !!new RegExp(e);
    } catch {
      return !1;
    }
  },
  date: function(e) {
    return typeof e.getTime == "function" && typeof e.getMonth == "function" && typeof e.getYear == "function" && !isNaN(e.getTime());
  },
  number: function(e) {
    return isNaN(e) ? !1 : typeof e == "number";
  },
  object: function(e) {
    return typeof e == "object" && !H.array(e);
  },
  method: function(e) {
    return typeof e == "function";
  },
  email: function(e) {
    return typeof e == "string" && e.length <= 320 && !!e.match(Oe.email);
  },
  url: function(e) {
    return typeof e == "string" && e.length <= 2048 && !!e.match(He());
  },
  hex: function(e) {
    return typeof e == "string" && !!e.match(Oe.hex);
  }
}, Le = function(e, r, t, n, f) {
  if (e.required && r === void 0) {
    _e(e, r, t, n, f);
    return;
  }
  var a = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], o = e.type;
  a.indexOf(o) > -1 ? H[o](r) || n.push(N(f.messages.types[o], e.fullField, e.type)) : o && typeof r !== e.type && n.push(N(f.messages.types[o], e.fullField, e.type));
}, Ue = function(e, r, t, n, f) {
  var a = typeof e.len == "number", o = typeof e.min == "number", s = typeof e.max == "number", d = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, l = r, g = null, v = typeof r == "number", F = typeof r == "string", E = Array.isArray(r);
  if (v ? g = "number" : F ? g = "string" : E && (g = "array"), !g)
    return !1;
  E && (l = r.length), F && (l = r.replace(d, "_").length), a ? l !== e.len && n.push(N(f.messages[g].len, e.fullField, e.len)) : o && !s && l < e.min ? n.push(N(f.messages[g].min, e.fullField, e.min)) : s && !o && l > e.max ? n.push(N(f.messages[g].max, e.fullField, e.max)) : o && s && (l < e.min || l > e.max) && n.push(N(f.messages[g].range, e.fullField, e.min, e.max));
}, $ = "enum", Ye = function(e, r, t, n, f) {
  e[$] = Array.isArray(e[$]) ? e[$] : [], e[$].indexOf(r) === -1 && n.push(N(f.messages[$], e.fullField, e[$].join(", ")));
}, Ze = function(e, r, t, n, f) {
  if (e.pattern) {
    if (e.pattern instanceof RegExp)
      e.pattern.lastIndex = 0, e.pattern.test(r) || n.push(N(f.messages.pattern.mismatch, e.fullField, r, e.pattern));
    else if (typeof e.pattern == "string") {
      var a = new RegExp(e.pattern);
      a.test(r) || n.push(N(f.messages.pattern.mismatch, e.fullField, r, e.pattern));
    }
  }
}, h = {
  required: _e,
  whitespace: $e,
  type: Le,
  range: Ue,
  enum: Ye,
  pattern: Ze
}, Xe = function(e, r, t, n, f) {
  var a = [], o = e.required || !e.required && n.hasOwnProperty(e.field);
  if (o) {
    if (O(r, "string") && !e.required)
      return t();
    h.required(e, r, n, a, f, "string"), O(r, "string") || (h.type(e, r, n, a, f), h.range(e, r, n, a, f), h.pattern(e, r, n, a, f), e.whitespace === !0 && h.whitespace(e, r, n, a, f));
  }
  t(a);
}, ze = function(e, r, t, n, f) {
  var a = [], o = e.required || !e.required && n.hasOwnProperty(e.field);
  if (o) {
    if (O(r) && !e.required)
      return t();
    h.required(e, r, n, a, f), r !== void 0 && h.type(e, r, n, a, f);
  }
  t(a);
}, Qe = function(e, r, t, n, f) {
  var a = [], o = e.required || !e.required && n.hasOwnProperty(e.field);
  if (o) {
    if (r === "" && (r = void 0), O(r) && !e.required)
      return t();
    h.required(e, r, n, a, f), r !== void 0 && (h.type(e, r, n, a, f), h.range(e, r, n, a, f));
  }
  t(a);
}, Ke = function(e, r, t, n, f) {
  var a = [], o = e.required || !e.required && n.hasOwnProperty(e.field);
  if (o) {
    if (O(r) && !e.required)
      return t();
    h.required(e, r, n, a, f), r !== void 0 && h.type(e, r, n, a, f);
  }
  t(a);
}, Je = function(e, r, t, n, f) {
  var a = [], o = e.required || !e.required && n.hasOwnProperty(e.field);
  if (o) {
    if (O(r) && !e.required)
      return t();
    h.required(e, r, n, a, f), O(r) || h.type(e, r, n, a, f);
  }
  t(a);
}, ke = function(e, r, t, n, f) {
  var a = [], o = e.required || !e.required && n.hasOwnProperty(e.field);
  if (o) {
    if (O(r) && !e.required)
      return t();
    h.required(e, r, n, a, f), r !== void 0 && (h.type(e, r, n, a, f), h.range(e, r, n, a, f));
  }
  t(a);
}, Ge = function(e, r, t, n, f) {
  var a = [], o = e.required || !e.required && n.hasOwnProperty(e.field);
  if (o) {
    if (O(r) && !e.required)
      return t();
    h.required(e, r, n, a, f), r !== void 0 && (h.type(e, r, n, a, f), h.range(e, r, n, a, f));
  }
  t(a);
}, Ce = function(e, r, t, n, f) {
  var a = [], o = e.required || !e.required && n.hasOwnProperty(e.field);
  if (o) {
    if (r == null && !e.required)
      return t();
    h.required(e, r, n, a, f, "array"), r != null && (h.type(e, r, n, a, f), h.range(e, r, n, a, f));
  }
  t(a);
}, Be = function(e, r, t, n, f) {
  var a = [], o = e.required || !e.required && n.hasOwnProperty(e.field);
  if (o) {
    if (O(r) && !e.required)
      return t();
    h.required(e, r, n, a, f), r !== void 0 && h.type(e, r, n, a, f);
  }
  t(a);
}, er = "enum", rr = function(e, r, t, n, f) {
  var a = [], o = e.required || !e.required && n.hasOwnProperty(e.field);
  if (o) {
    if (O(r) && !e.required)
      return t();
    h.required(e, r, n, a, f), r !== void 0 && h[er](e, r, n, a, f);
  }
  t(a);
}, tr = function(e, r, t, n, f) {
  var a = [], o = e.required || !e.required && n.hasOwnProperty(e.field);
  if (o) {
    if (O(r, "string") && !e.required)
      return t();
    h.required(e, r, n, a, f), O(r, "string") || h.pattern(e, r, n, a, f);
  }
  t(a);
}, nr = function(e, r, t, n, f) {
  var a = [], o = e.required || !e.required && n.hasOwnProperty(e.field);
  if (o) {
    if (O(r, "date") && !e.required)
      return t();
    if (h.required(e, r, n, a, f), !O(r, "date")) {
      var s;
      r instanceof Date ? s = r : s = new Date(r), h.type(e, s, n, a, f), s && h.range(e, s.getTime(), n, a, f);
    }
  }
  t(a);
}, ir = function(e, r, t, n, f) {
  var a = [], o = Array.isArray(r) ? "array" : typeof r;
  h.required(e, r, n, a, f, o), t(a);
}, se = function(e, r, t, n, f) {
  var a = e.type, o = [], s = e.required || !e.required && n.hasOwnProperty(e.field);
  if (s) {
    if (O(r, a) && !e.required)
      return t();
    h.required(e, r, n, o, f, a), O(r, a) || h.type(e, r, n, o, f);
  }
  t(o);
}, fr = function(e, r, t, n, f) {
  var a = [], o = e.required || !e.required && n.hasOwnProperty(e.field);
  if (o) {
    if (O(r) && !e.required)
      return t();
    h.required(e, r, n, a, f);
  }
  t(a);
}, L = {
  string: Xe,
  method: ze,
  number: Qe,
  boolean: Ke,
  regexp: Je,
  integer: ke,
  float: Ge,
  array: Ce,
  object: Be,
  enum: rr,
  pattern: tr,
  date: nr,
  url: se,
  hex: se,
  email: se,
  required: ir,
  any: fr
};
function pe() {
  return {
    default: "Validation error on field %s",
    required: "%s is required",
    enum: "%s must be one of %s",
    whitespace: "%s cannot be empty",
    date: {
      format: "%s date %s is invalid for format %s",
      parse: "%s date could not be parsed, %s is invalid ",
      invalid: "%s date %s is invalid"
    },
    types: {
      string: "%s is not a %s",
      method: "%s is not a %s (function)",
      array: "%s is not an %s",
      object: "%s is not an %s",
      number: "%s is not a %s",
      date: "%s is not a %s",
      boolean: "%s is not a %s",
      integer: "%s is not an %s",
      float: "%s is not a %s",
      regexp: "%s is not a valid %s",
      email: "%s is not a valid %s",
      url: "%s is not a valid %s",
      hex: "%s is not a valid %s"
    },
    string: {
      len: "%s must be exactly %s characters",
      min: "%s must be at least %s characters",
      max: "%s cannot be longer than %s characters",
      range: "%s must be between %s and %s characters"
    },
    number: {
      len: "%s must equal %s",
      min: "%s cannot be less than %s",
      max: "%s cannot be greater than %s",
      range: "%s must be between %s and %s"
    },
    array: {
      len: "%s must be exactly %s in length",
      min: "%s cannot be less than %s in length",
      max: "%s cannot be greater than %s in length",
      range: "%s must be between %s and %s in length"
    },
    pattern: {
      mismatch: "%s value %s does not match pattern %s"
    },
    clone: function() {
      var e = JSON.parse(JSON.stringify(this));
      return e.clone = this.clone, e;
    }
  };
}
var he = pe(), Y = /* @__PURE__ */ function() {
  function i(r) {
    this.rules = null, this._messages = he, this.define(r);
  }
  var e = i.prototype;
  return e.define = function(t) {
    var n = this;
    if (!t)
      throw new Error("Cannot configure a schema with no rules");
    if (typeof t != "object" || Array.isArray(t))
      throw new Error("Rules must be an object");
    this.rules = {}, Object.keys(t).forEach(function(f) {
      var a = t[f];
      n.rules[f] = Array.isArray(a) ? a : [a];
    });
  }, e.messages = function(t) {
    return t && (this._messages = xe(pe(), t)), this._messages;
  }, e.validate = function(t, n, f) {
    var a = this;
    n === void 0 && (n = {}), f === void 0 && (f = function() {
    });
    var o = t, s = n, d = f;
    if (typeof s == "function" && (d = s, s = {}), !this.rules || Object.keys(this.rules).length === 0)
      return d && d(null, o), Promise.resolve(o);
    function l(c) {
      var m = [], u = {};
      function A(y) {
        if (Array.isArray(y)) {
          var q;
          m = (q = m).concat.apply(q, y);
        } else
          m.push(y);
      }
      for (var p = 0; p < c.length; p++)
        A(c[p]);
      m.length ? (u = le(m), d(m, u)) : d(null, o);
    }
    if (s.messages) {
      var g = this.messages();
      g === he && (g = pe()), xe(g, s.messages), s.messages = g;
    } else
      s.messages = this.messages();
    var v = {}, F = s.keys || Object.keys(this.rules);
    F.forEach(function(c) {
      var m = a.rules[c], u = o[c];
      m.forEach(function(A) {
        var p = A;
        typeof p.transform == "function" && (o === t && (o = T({}, o)), u = o[c] = p.transform(u)), typeof p == "function" ? p = {
          validator: p
        } : p = T({}, p), p.validator = a.getValidationMethod(p), p.validator && (p.field = c, p.fullField = p.fullField || c, p.type = a.getType(p), v[c] = v[c] || [], v[c].push({
          rule: p,
          value: u,
          source: o,
          field: c
        }));
      });
    });
    var E = {};
    return De(v, s, function(c, m) {
      var u = c.rule, A = (u.type === "object" || u.type === "array") && (typeof u.fields == "object" || typeof u.defaultField == "object");
      A = A && (u.required || !u.required && c.value), u.field = c.field;
      function p(w, P) {
        return T({}, P, {
          fullField: u.fullField + "." + w,
          fullFields: u.fullFields ? [].concat(u.fullFields, [w]) : [w]
        });
      }
      function y(w) {
        w === void 0 && (w = []);
        var P = Array.isArray(w) ? w : [w];
        !s.suppressWarning && P.length && i.warning("async-validator:", P), P.length && u.message !== void 0 && (P = [].concat(u.message));
        var _ = P.map(qe(u, o));
        if (s.first && _.length)
          return E[u.field] = 1, m(_);
        if (!A)
          m(_);
        else {
          if (u.required && !c.value)
            return u.message !== void 0 ? _ = [].concat(u.message).map(qe(u, o)) : s.error && (_ = [s.error(u, N(s.messages.required, u.field))]), m(_);
          var R = {};
          u.defaultField && Object.keys(c.value).map(function(j) {
            R[j] = u.defaultField;
          }), R = T({}, R, c.rule.fields);
          var D = {};
          Object.keys(R).forEach(function(j) {
            var b = R[j], V = Array.isArray(b) ? b : [b];
            D[j] = V.map(p.bind(null, j));
          });
          var W = new i(D);
          W.messages(s.messages), c.rule.options && (c.rule.options.messages = s.messages, c.rule.options.error = s.error), W.validate(c.value, c.rule.options || s, function(j) {
            var b = [];
            _ && _.length && b.push.apply(b, _), j && j.length && b.push.apply(b, j), m(b.length ? b : null);
          });
        }
      }
      var q;
      if (u.asyncValidator)
        q = u.asyncValidator(u, c.value, y, c.source, s);
      else if (u.validator) {
        try {
          q = u.validator(u, c.value, y, c.source, s);
        } catch (w) {
          console.error == null || console.error(w), s.suppressValidatorError || setTimeout(function() {
            throw w;
          }, 0), y(w.message);
        }
        q === !0 ? y() : q === !1 ? y(typeof u.message == "function" ? u.message(u.fullField || u.field) : u.message || (u.fullField || u.field) + " fails") : q instanceof Array ? y(q) : q instanceof Error && y(q.message);
      }
      q && q.then && q.then(function() {
        return y();
      }, function(w) {
        return y(w);
      });
    }, function(c) {
      l(c);
    }, o);
  }, e.getType = function(t) {
    if (t.type === void 0 && t.pattern instanceof RegExp && (t.type = "pattern"), typeof t.validator != "function" && t.type && !L.hasOwnProperty(t.type))
      throw new Error(N("Unknown rule type %s", t.type));
    return t.type || "string";
  }, e.getValidationMethod = function(t) {
    if (typeof t.validator == "function")
      return t.validator;
    var n = Object.keys(t), f = n.indexOf("message");
    return f !== -1 && n.splice(f, 1), n.length === 1 && n[0] === "required" ? L.required : L[this.getType(t)] || void 0;
  }, i;
}();
Y.register = function(e, r) {
  if (typeof r != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  L[e] = r;
};
Y.warning = Ae;
Y.messages = he;
Y.validators = L;
const or = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Y
}, Symbol.toStringTag, { value: "Module" }));
var te = { exports: {} }, ue, Fe;
function ar() {
  if (Fe)
    return ue;
  Fe = 1;
  function i(n) {
    return typeof n == "object" && n != null && n.nodeType === 1;
  }
  function e(n, f) {
    return (!f || n !== "hidden") && n !== "visible" && n !== "clip";
  }
  function r(n, f) {
    if (n.clientHeight < n.scrollHeight || n.clientWidth < n.scrollWidth) {
      var a = getComputedStyle(n, null);
      return e(a.overflowY, f) || e(a.overflowX, f) || function(o) {
        var s = function(d) {
          if (!d.ownerDocument || !d.ownerDocument.defaultView)
            return null;
          try {
            return d.ownerDocument.defaultView.frameElement;
          } catch {
            return null;
          }
        }(o);
        return !!s && (s.clientHeight < o.scrollHeight || s.clientWidth < o.scrollWidth);
      }(n);
    }
    return !1;
  }
  function t(n, f, a, o, s, d, l, g) {
    return d < n && l > f || d > n && l < f ? 0 : d <= n && g <= a || l >= f && g >= a ? d - n - o : l > f && g < a || d < n && g > a ? l - f + s : 0;
  }
  return ue = function(n, f) {
    var a = window, o = f.scrollMode, s = f.block, d = f.inline, l = f.boundary, g = f.skipOverflowHiddenElements, v = typeof l == "function" ? l : function(je) {
      return je !== l;
    };
    if (!i(n))
      throw new TypeError("Invalid target");
    for (var F, E, c = document.scrollingElement || document.documentElement, m = [], u = n; i(u) && v(u); ) {
      if ((u = (E = (F = u).parentElement) == null ? F.getRootNode().host || null : E) === c) {
        m.push(u);
        break;
      }
      u != null && u === document.body && r(u) && !r(document.documentElement) || u != null && r(u, g) && m.push(u);
    }
    for (var A = a.visualViewport ? a.visualViewport.width : innerWidth, p = a.visualViewport ? a.visualViewport.height : innerHeight, y = window.scrollX || pageXOffset, q = window.scrollY || pageYOffset, w = n.getBoundingClientRect(), P = w.height, _ = w.width, R = w.top, D = w.right, W = w.bottom, j = w.left, b = s === "start" || s === "nearest" ? R : s === "end" ? W : R + P / 2, V = d === "center" ? j + _ / 2 : d === "end" ? D : j, ie = [], fe = 0; fe < m.length; fe++) {
      var x = m[fe], I = x.getBoundingClientRect(), Z = I.height, X = I.width, z = I.top, ae = I.right, oe = I.bottom, Q = I.left;
      if (o === "if-needed" && R >= 0 && j >= 0 && W <= p && D <= A && R >= z && W <= oe && j >= Q && D <= ae)
        return ie;
      var K = getComputedStyle(x), J = parseInt(K.borderLeftWidth, 10), k = parseInt(K.borderTopWidth, 10), G = parseInt(K.borderRightWidth, 10), C = parseInt(K.borderBottomWidth, 10), S = 0, M = 0, B = "offsetWidth" in x ? x.offsetWidth - x.clientWidth - J - G : 0, ee = "offsetHeight" in x ? x.offsetHeight - x.clientHeight - k - C : 0, ge = "offsetWidth" in x ? x.offsetWidth === 0 ? 0 : X / x.offsetWidth : 0, ye = "offsetHeight" in x ? x.offsetHeight === 0 ? 0 : Z / x.offsetHeight : 0;
      if (c === x)
        S = s === "start" ? b : s === "end" ? b - p : s === "nearest" ? t(q, q + p, p, k, C, q + b, q + b + P, P) : b - p / 2, M = d === "start" ? V : d === "center" ? V - A / 2 : d === "end" ? V - A : t(y, y + A, A, J, G, y + V, y + V + _, _), S = Math.max(0, S + q), M = Math.max(0, M + y);
      else {
        S = s === "start" ? b - z - k : s === "end" ? b - oe + C + ee : s === "nearest" ? t(z, oe, Z, k, C + ee, b, b + P, P) : b - (z + Z / 2) + ee / 2, M = d === "start" ? V - Q - J : d === "center" ? V - (Q + X / 2) + B / 2 : d === "end" ? V - ae + G + B : t(Q, ae, X, J, G + B, V, V + _, _);
        var ve = x.scrollLeft, me = x.scrollTop;
        b += me - (S = Math.max(0, Math.min(me + S / ye, x.scrollHeight - Z / ye + ee))), V += ve - (M = Math.max(0, Math.min(ve + M / ge, x.scrollWidth - X / ge + B)));
      }
      ie.push({ el: x, top: S, left: M });
    }
    return ie;
  }, ue;
}
var Ee;
function sr() {
  return Ee || (Ee = 1, function(i, e) {
    e.__esModule = !0, e.default = void 0;
    var r = t(ar());
    function t(d) {
      return d && d.__esModule ? d : { default: d };
    }
    function n(d) {
      return d === Object(d) && Object.keys(d).length !== 0;
    }
    function f(d, l) {
      l === void 0 && (l = "auto");
      var g = "scrollBehavior" in document.body.style;
      d.forEach(function(v) {
        var F = v.el, E = v.top, c = v.left;
        F.scroll && g ? F.scroll({
          top: E,
          left: c,
          behavior: l
        }) : (F.scrollTop = E, F.scrollLeft = c);
      });
    }
    function a(d) {
      return d === !1 ? {
        block: "end",
        inline: "nearest"
      } : n(d) ? d : {
        block: "start",
        inline: "nearest"
      };
    }
    function o(d, l) {
      var g = d.isConnected || d.ownerDocument.documentElement.contains(d);
      if (n(l) && typeof l.behavior == "function")
        return l.behavior(g ? (0, r.default)(d, l) : []);
      if (g) {
        var v = a(l);
        return f((0, r.default)(d, v), v.behavior);
      }
    }
    var s = o;
    e.default = s, i.exports = e.default;
  }(te, te.exports)), te.exports;
}
export {
  Y as S,
  or as d,
  sr as r
};
