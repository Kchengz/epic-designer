var Xe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function tr(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function er(t) {
  if (t.__esModule)
    return t;
  var e = t.default;
  if (typeof e == "function") {
    var r = function n() {
      return this instanceof n ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    r.prototype = e.prototype;
  } else
    r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(t).forEach(function(n) {
    var a = Object.getOwnPropertyDescriptor(t, n);
    Object.defineProperty(r, n, a.get ? a : {
      enumerable: !0,
      get: function() {
        return t[n];
      }
    });
  }), r;
}
var Ct = { exports: {} };
(function(t) {
  function e(r) {
    "@babel/helpers - typeof";
    return t.exports = e = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
      return typeof n;
    } : function(n) {
      return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
    }, t.exports.__esModule = !0, t.exports.default = t.exports, e(r);
  }
  t.exports = e, t.exports.__esModule = !0, t.exports.default = t.exports;
})(Ct);
var be = Ct.exports;
function _t(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
  }
}
function Gt(t, e, r) {
  return e && _t(t.prototype, e), r && _t(t, r), t;
}
function tt() {
  return (tt = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
    }
    return t;
  }).apply(this, arguments);
}
function Bt(t, e) {
  t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
}
function Dt(t, e) {
  if (t == null)
    return {};
  var r, n, a = {}, o = Object.keys(t);
  for (n = 0; n < o.length; n++)
    e.indexOf(r = o[n]) >= 0 || (a[r] = t[r]);
  return a;
}
function Tt(t) {
  return ((e = t) != null && typeof e == "object" && Array.isArray(e) === !1) == 1 && Object.prototype.toString.call(t) === "[object Object]";
  var e;
}
var Vt = Object.prototype, Wt = Vt.toString, me = Vt.hasOwnProperty, Yt = /^\s*function (\w+)/;
function At(t) {
  var e, r = (e = t == null ? void 0 : t.type) !== null && e !== void 0 ? e : t;
  if (r) {
    var n = r.toString().match(Yt);
    return n ? n[1] : "";
  }
  return "";
}
var G = function(t) {
  var e, r;
  return Tt(t) !== !1 && typeof (e = t.constructor) == "function" && Tt(r = e.prototype) !== !1 && r.hasOwnProperty("isPrototypeOf") !== !1;
}, $t = function(t) {
  return t;
}, O = $t;
if (process.env.NODE_ENV !== "production") {
  var xe = typeof console < "u";
  O = xe ? function(t) {
    console.warn("[VueTypes warn]: " + t);
  } : $t;
}
var Y = function(t, e) {
  return me.call(t, e);
}, we = Number.isInteger || function(t) {
  return typeof t == "number" && isFinite(t) && Math.floor(t) === t;
}, V = Array.isArray || function(t) {
  return Wt.call(t) === "[object Array]";
}, W = function(t) {
  return Wt.call(t) === "[object Function]";
}, nt = function(t) {
  return G(t) && Y(t, "_vueTypes_name");
}, Ut = function(t) {
  return G(t) && (Y(t, "type") || ["_vueTypes_name", "validator", "default", "required"].some(function(e) {
    return Y(t, e);
  }));
};
function Ot(t, e) {
  return Object.defineProperty(t.bind(e), "__original", { value: t });
}
function N(t, e, r) {
  var n;
  r === void 0 && (r = !1);
  var a = !0, o = "";
  n = G(t) ? t : { type: t };
  var s = nt(n) ? n._vueTypes_name + " - " : "";
  if (Ut(n) && n.type !== null) {
    if (n.type === void 0 || n.type === !0 || !n.required && e === void 0)
      return a;
    V(n.type) ? (a = n.type.some(function(v) {
      return N(v, e, !0) === !0;
    }), o = n.type.map(function(v) {
      return At(v);
    }).join(" or ")) : a = (o = At(n)) === "Array" ? V(e) : o === "Object" ? G(e) : o === "String" || o === "Number" || o === "Boolean" || o === "Function" ? function(v) {
      if (v == null)
        return "";
      var y = v.constructor.toString().match(Yt);
      return y ? y[1] : "";
    }(e) === o : e instanceof n.type;
  }
  if (!a) {
    var c = s + 'value "' + e + '" should be of type "' + o + '"';
    return r === !1 ? (O(c), !1) : c;
  }
  if (Y(n, "validator") && W(n.validator)) {
    var l = O, g = [];
    if (O = function(v) {
      g.push(v);
    }, a = n.validator(e), O = l, !a) {
      var m = (g.length > 1 ? "* " : "") + g.join(`
* `);
      return g.length = 0, r === !1 ? (O(m), a) : m;
    }
  }
  return a;
}
function j(t, e) {
  var r = Object.defineProperties(e, { _vueTypes_name: { value: t, writable: !0 }, isRequired: { get: function() {
    return this.required = !0, this;
  } }, def: { value: function(a) {
    return a !== void 0 || this.default ? W(a) || N(this, a, !0) === !0 ? (this.default = V(a) ? function() {
      return [].concat(a);
    } : G(a) ? function() {
      return Object.assign({}, a);
    } : a, this) : (O(this._vueTypes_name + ' - invalid default value: "' + a + '"'), this) : this;
  } } }), n = r.validator;
  return W(n) && (r.validator = Ot(n, r)), r;
}
function A(t, e) {
  var r = j(t, e);
  return Object.defineProperty(r, "validate", { value: function(n) {
    return W(this.validator) && O(this._vueTypes_name + ` - calling .validate() will overwrite the current custom validator function. Validator info:
` + JSON.stringify(this)), this.validator = Ot(n, this), this;
  } });
}
function yt(t, e, r) {
  var n, a, o = (n = e, a = {}, Object.getOwnPropertyNames(n).forEach(function(v) {
    a[v] = Object.getOwnPropertyDescriptor(n, v);
  }), Object.defineProperties({}, a));
  if (o._vueTypes_name = t, !G(r))
    return o;
  var s, c, l = r.validator, g = Dt(r, ["validator"]);
  if (W(l)) {
    var m = o.validator;
    m && (m = (c = (s = m).__original) !== null && c !== void 0 ? c : s), o.validator = Ot(m ? function(v) {
      return m.call(this, v) && l.call(this, v);
    } : l, o);
  }
  return Object.assign(o, g);
}
function at(t) {
  return t.replace(/^(?!\s*$)/gm, "  ");
}
var zt = function() {
  return A("any", {});
}, Jt = function() {
  return A("function", { type: Function });
}, Zt = function() {
  return A("boolean", { type: Boolean });
}, Kt = function() {
  return A("string", { type: String });
}, Qt = function() {
  return A("number", { type: Number });
}, Xt = function() {
  return A("array", { type: Array });
}, te = function() {
  return A("object", { type: Object });
}, ee = function() {
  return j("integer", { type: Number, validator: function(t) {
    return we(t);
  } });
}, re = function() {
  return j("symbol", { validator: function(t) {
    return typeof t == "symbol";
  } });
};
function ne(t, e) {
  if (e === void 0 && (e = "custom validation failed"), typeof t != "function")
    throw new TypeError("[VueTypes error]: You must provide a function as argument");
  return j(t.name || "<<anonymous function>>", { validator: function(r) {
    var n = t(r);
    return n || O(this._vueTypes_name + " - " + e), n;
  } });
}
function ae(t) {
  if (!V(t))
    throw new TypeError("[VueTypes error]: You must provide an array as argument.");
  var e = 'oneOf - value should be one of "' + t.join('", "') + '".', r = t.reduce(function(n, a) {
    if (a != null) {
      var o = a.constructor;
      n.indexOf(o) === -1 && n.push(o);
    }
    return n;
  }, []);
  return j("oneOf", { type: r.length > 0 ? r : void 0, validator: function(n) {
    var a = t.indexOf(n) !== -1;
    return a || O(e), a;
  } });
}
function oe(t) {
  if (!V(t))
    throw new TypeError("[VueTypes error]: You must provide an array as argument");
  for (var e = !1, r = [], n = 0; n < t.length; n += 1) {
    var a = t[n];
    if (Ut(a)) {
      if (nt(a) && a._vueTypes_name === "oneOf") {
        r = r.concat(a.type);
        continue;
      }
      if (W(a.validator) && (e = !0), a.type !== !0 && a.type) {
        r = r.concat(a.type);
        continue;
      }
    }
    r.push(a);
  }
  return r = r.filter(function(o, s) {
    return r.indexOf(o) === s;
  }), j("oneOfType", e ? { type: r, validator: function(o) {
    var s = [], c = t.some(function(l) {
      var g = N(nt(l) && l._vueTypes_name === "oneOf" ? l.type || null : l, o, !0);
      return typeof g == "string" && s.push(g), g === !0;
    });
    return c || O("oneOfType - provided value does not match any of the " + s.length + ` passed-in validators:
` + at(s.join(`
`))), c;
  } } : { type: r });
}
function ie(t) {
  return j("arrayOf", { type: Array, validator: function(e) {
    var r, n = e.every(function(a) {
      return (r = N(t, a, !0)) === !0;
    });
    return n || O(`arrayOf - value validation error:
` + at(r)), n;
  } });
}
function ue(t) {
  return j("instanceOf", { type: t });
}
function fe(t) {
  return j("objectOf", { type: Object, validator: function(e) {
    var r, n = Object.keys(e).every(function(a) {
      return (r = N(t, e[a], !0)) === !0;
    });
    return n || O(`objectOf - value validation error:
` + at(r)), n;
  } });
}
function se(t) {
  var e = Object.keys(t), r = e.filter(function(a) {
    var o;
    return !!(!((o = t[a]) === null || o === void 0) && o.required);
  }), n = j("shape", { type: Object, validator: function(a) {
    var o = this;
    if (!G(a))
      return !1;
    var s = Object.keys(a);
    if (r.length > 0 && r.some(function(l) {
      return s.indexOf(l) === -1;
    })) {
      var c = r.filter(function(l) {
        return s.indexOf(l) === -1;
      });
      return O(c.length === 1 ? 'shape - required property "' + c[0] + '" is not defined.' : 'shape - required properties "' + c.join('", "') + '" are not defined.'), !1;
    }
    return s.every(function(l) {
      if (e.indexOf(l) === -1)
        return o._vueTypes_isLoose === !0 || (O('shape - shape definition does not include a "' + l + '" property. Allowed keys: "' + e.join('", "') + '".'), !1);
      var g = N(t[l], a[l], !0);
      return typeof g == "string" && O('shape - "' + l + `" property validation error:
 ` + at(g)), g === !0;
    });
  } });
  return Object.defineProperty(n, "_vueTypes_isLoose", { writable: !0, value: !1 }), Object.defineProperty(n, "loose", { get: function() {
    return this._vueTypes_isLoose = !0, this;
  } }), n;
}
var R = function() {
  function t() {
  }
  return t.extend = function(e) {
    var r = this;
    if (V(e))
      return e.forEach(function(v) {
        return r.extend(v);
      }), this;
    var n = e.name, a = e.validate, o = a !== void 0 && a, s = e.getter, c = s !== void 0 && s, l = Dt(e, ["name", "validate", "getter"]);
    if (Y(this, n))
      throw new TypeError('[VueTypes error]: Type "' + n + '" already defined');
    var g, m = l.type;
    return nt(m) ? (delete l.type, Object.defineProperty(this, n, c ? { get: function() {
      return yt(n, m, l);
    } } : { value: function() {
      var v, y = yt(n, m, l);
      return y.validator && (y.validator = (v = y.validator).bind.apply(v, [y].concat([].slice.call(arguments)))), y;
    } })) : (g = c ? { get: function() {
      var v = Object.assign({}, l);
      return o ? A(n, v) : j(n, v);
    }, enumerable: !0 } : { value: function() {
      var v, y, F = Object.assign({}, l);
      return v = o ? A(n, F) : j(n, F), F.validator && (v.validator = (y = F.validator).bind.apply(y, [v].concat([].slice.call(arguments)))), v;
    }, enumerable: !0 }, Object.defineProperty(this, n, g));
  }, Gt(t, null, [{ key: "any", get: function() {
    return zt();
  } }, { key: "func", get: function() {
    return Jt().def(this.defaults.func);
  } }, { key: "bool", get: function() {
    return Zt().def(this.defaults.bool);
  } }, { key: "string", get: function() {
    return Kt().def(this.defaults.string);
  } }, { key: "number", get: function() {
    return Qt().def(this.defaults.number);
  } }, { key: "array", get: function() {
    return Xt().def(this.defaults.array);
  } }, { key: "object", get: function() {
    return te().def(this.defaults.object);
  } }, { key: "integer", get: function() {
    return ee().def(this.defaults.integer);
  } }, { key: "symbol", get: function() {
    return re();
  } }]), t;
}();
function ce(t) {
  var e;
  return t === void 0 && (t = { func: function() {
  }, bool: !0, string: "", number: 0, array: function() {
    return [];
  }, object: function() {
    return {};
  }, integer: 0 }), (e = function(r) {
    function n() {
      return r.apply(this, arguments) || this;
    }
    return Bt(n, r), Gt(n, null, [{ key: "sensibleDefaults", get: function() {
      return tt({}, this.defaults);
    }, set: function(a) {
      this.defaults = a !== !1 ? tt({}, a !== !0 ? a : t) : {};
    } }]), n;
  }(R)).defaults = tt({}, t), e;
}
R.defaults = {}, R.custom = ne, R.oneOf = ae, R.instanceOf = ue, R.oneOfType = oe, R.arrayOf = ie, R.objectOf = fe, R.shape = se, R.utils = { validate: function(t, e) {
  return N(e, t, !0) === !0;
}, toType: function(t, e, r) {
  return r === void 0 && (r = !1), r ? A(t, e) : j(t, e);
} };
var Oe = function(t) {
  function e() {
    return t.apply(this, arguments) || this;
  }
  return Bt(e, t), e;
}(ce());
const rr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  any: zt,
  array: Xt,
  arrayOf: ie,
  bool: Zt,
  createTypes: ce,
  custom: ne,
  default: Oe,
  fromType: yt,
  func: Jt,
  instanceOf: ue,
  integer: ee,
  number: Qt,
  object: te,
  objectOf: fe,
  oneOf: ae,
  oneOfType: oe,
  shape: se,
  string: Kt,
  symbol: re,
  toType: j,
  toValidableType: A,
  validateType: N
}, Symbol.toStringTag, { value: "Module" }));
function x(t, e) {
  Me(t) && (t = "100%");
  var r = Se(t);
  return t = e === 360 ? t : Math.min(e, Math.max(0, parseFloat(t))), r && (t = parseInt(String(t * e), 10) / 100), Math.abs(t - e) < 1e-6 ? 1 : (e === 360 ? t = (t < 0 ? t % e + e : t % e) / parseFloat(String(e)) : t = t % e / parseFloat(String(e)), t);
}
function Z(t) {
  return Math.min(1, Math.max(0, t));
}
function Me(t) {
  return typeof t == "string" && t.indexOf(".") !== -1 && parseFloat(t) === 1;
}
function Se(t) {
  return typeof t == "string" && t.indexOf("%") !== -1;
}
function he(t) {
  return t = parseFloat(t), (isNaN(t) || t < 0 || t > 1) && (t = 1), t;
}
function K(t) {
  return t <= 1 ? "".concat(Number(t) * 100, "%") : t;
}
function T(t) {
  return t.length === 1 ? "0" + t : String(t);
}
function je(t, e, r) {
  return {
    r: x(t, 255) * 255,
    g: x(e, 255) * 255,
    b: x(r, 255) * 255
  };
}
function Et(t, e, r) {
  t = x(t, 255), e = x(e, 255), r = x(r, 255);
  var n = Math.max(t, e, r), a = Math.min(t, e, r), o = 0, s = 0, c = (n + a) / 2;
  if (n === a)
    s = 0, o = 0;
  else {
    var l = n - a;
    switch (s = c > 0.5 ? l / (2 - n - a) : l / (n + a), n) {
      case t:
        o = (e - r) / l + (e < r ? 6 : 0);
        break;
      case e:
        o = (r - t) / l + 2;
        break;
      case r:
        o = (t - e) / l + 4;
        break;
    }
    o /= 6;
  }
  return { h: o, s, l: c };
}
function lt(t, e, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? t + (e - t) * (6 * r) : r < 1 / 2 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t;
}
function ke(t, e, r) {
  var n, a, o;
  if (t = x(t, 360), e = x(e, 100), r = x(r, 100), e === 0)
    a = r, o = r, n = r;
  else {
    var s = r < 0.5 ? r * (1 + e) : r + e - r * e, c = 2 * r - s;
    n = lt(c, s, t + 1 / 3), a = lt(c, s, t), o = lt(c, s, t - 1 / 3);
  }
  return { r: n * 255, g: a * 255, b: o * 255 };
}
function bt(t, e, r) {
  t = x(t, 255), e = x(e, 255), r = x(r, 255);
  var n = Math.max(t, e, r), a = Math.min(t, e, r), o = 0, s = n, c = n - a, l = n === 0 ? 0 : c / n;
  if (n === a)
    o = 0;
  else {
    switch (n) {
      case t:
        o = (e - r) / c + (e < r ? 6 : 0);
        break;
      case e:
        o = (r - t) / c + 2;
        break;
      case r:
        o = (t - e) / c + 4;
        break;
    }
    o /= 6;
  }
  return { h: o, s: l, v: s };
}
function _e(t, e, r) {
  t = x(t, 360) * 6, e = x(e, 100), r = x(r, 100);
  var n = Math.floor(t), a = t - n, o = r * (1 - e), s = r * (1 - a * e), c = r * (1 - (1 - a) * e), l = n % 6, g = [r, s, o, o, c, r][l], m = [c, r, r, s, o, o][l], v = [o, o, c, r, r, s][l];
  return { r: g * 255, g: m * 255, b: v * 255 };
}
function mt(t, e, r, n) {
  var a = [
    T(Math.round(t).toString(16)),
    T(Math.round(e).toString(16)),
    T(Math.round(r).toString(16))
  ];
  return n && a[0].startsWith(a[0].charAt(1)) && a[1].startsWith(a[1].charAt(1)) && a[2].startsWith(a[2].charAt(1)) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) : a.join("");
}
function Te(t, e, r, n, a) {
  var o = [
    T(Math.round(t).toString(16)),
    T(Math.round(e).toString(16)),
    T(Math.round(r).toString(16)),
    T(le(n))
  ];
  return a && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) && o[3].startsWith(o[3].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) + o[3].charAt(0) : o.join("");
}
function nr(t, e, r, n) {
  var a = [
    T(le(n)),
    T(Math.round(t).toString(16)),
    T(Math.round(e).toString(16)),
    T(Math.round(r).toString(16))
  ];
  return a.join("");
}
function le(t) {
  return Math.round(parseFloat(t) * 255).toString(16);
}
function Rt(t) {
  return k(t) / 255;
}
function k(t) {
  return parseInt(t, 16);
}
function Ae(t) {
  return {
    r: t >> 16,
    g: (t & 65280) >> 8,
    b: t & 255
  };
}
var xt = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function D(t) {
  var e = { r: 0, g: 0, b: 0 }, r = 1, n = null, a = null, o = null, s = !1, c = !1;
  return typeof t == "string" && (t = Fe(t)), typeof t == "object" && (H(t.r) && H(t.g) && H(t.b) ? (e = je(t.r, t.g, t.b), s = !0, c = String(t.r).substr(-1) === "%" ? "prgb" : "rgb") : H(t.h) && H(t.s) && H(t.v) ? (n = K(t.s), a = K(t.v), e = _e(t.h, n, a), s = !0, c = "hsv") : H(t.h) && H(t.s) && H(t.l) && (n = K(t.s), o = K(t.l), e = ke(t.h, n, o), s = !0, c = "hsl"), Object.prototype.hasOwnProperty.call(t, "a") && (r = t.a)), r = he(r), {
    ok: s,
    format: t.format || c,
    r: Math.min(255, Math.max(e.r, 0)),
    g: Math.min(255, Math.max(e.g, 0)),
    b: Math.min(255, Math.max(e.b, 0)),
    a: r
  };
}
var Ee = "[-\\+]?\\d+%?", Re = "[-\\+]?\\d*\\.\\d+%?", L = "(?:".concat(Re, ")|(?:").concat(Ee, ")"), pt = "[\\s|\\(]+(".concat(L, ")[,|\\s]+(").concat(L, ")[,|\\s]+(").concat(L, ")\\s*\\)?"), dt = "[\\s|\\(]+(".concat(L, ")[,|\\s]+(").concat(L, ")[,|\\s]+(").concat(L, ")[,|\\s]+(").concat(L, ")\\s*\\)?"), _ = {
  CSS_UNIT: new RegExp(L),
  rgb: new RegExp("rgb" + pt),
  rgba: new RegExp("rgba" + dt),
  hsl: new RegExp("hsl" + pt),
  hsla: new RegExp("hsla" + dt),
  hsv: new RegExp("hsv" + pt),
  hsva: new RegExp("hsva" + dt),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function Fe(t) {
  if (t = t.trim().toLowerCase(), t.length === 0)
    return !1;
  var e = !1;
  if (xt[t])
    t = xt[t], e = !0;
  else if (t === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var r = _.rgb.exec(t);
  return r ? { r: r[1], g: r[2], b: r[3] } : (r = _.rgba.exec(t), r ? { r: r[1], g: r[2], b: r[3], a: r[4] } : (r = _.hsl.exec(t), r ? { h: r[1], s: r[2], l: r[3] } : (r = _.hsla.exec(t), r ? { h: r[1], s: r[2], l: r[3], a: r[4] } : (r = _.hsv.exec(t), r ? { h: r[1], s: r[2], v: r[3] } : (r = _.hsva.exec(t), r ? { h: r[1], s: r[2], v: r[3], a: r[4] } : (r = _.hex8.exec(t), r ? {
    r: k(r[1]),
    g: k(r[2]),
    b: k(r[3]),
    a: Rt(r[4]),
    format: e ? "name" : "hex8"
  } : (r = _.hex6.exec(t), r ? {
    r: k(r[1]),
    g: k(r[2]),
    b: k(r[3]),
    format: e ? "name" : "hex"
  } : (r = _.hex4.exec(t), r ? {
    r: k(r[1] + r[1]),
    g: k(r[2] + r[2]),
    b: k(r[3] + r[3]),
    a: Rt(r[4] + r[4]),
    format: e ? "name" : "hex8"
  } : (r = _.hex3.exec(t), r ? {
    r: k(r[1] + r[1]),
    g: k(r[2] + r[2]),
    b: k(r[3] + r[3]),
    format: e ? "name" : "hex"
  } : !1)))))))));
}
function H(t) {
  return !!_.CSS_UNIT.exec(String(t));
}
var He = (
  /** @class */
  function() {
    function t(e, r) {
      e === void 0 && (e = ""), r === void 0 && (r = {});
      var n;
      if (e instanceof t)
        return e;
      typeof e == "number" && (e = Ae(e)), this.originalInput = e;
      var a = D(e);
      this.originalInput = e, this.r = a.r, this.g = a.g, this.b = a.b, this.a = a.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (n = r.format) !== null && n !== void 0 ? n : a.format, this.gradientType = r.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = a.ok;
    }
    return t.prototype.isDark = function() {
      return this.getBrightness() < 128;
    }, t.prototype.isLight = function() {
      return !this.isDark();
    }, t.prototype.getBrightness = function() {
      var e = this.toRgb();
      return (e.r * 299 + e.g * 587 + e.b * 114) / 1e3;
    }, t.prototype.getLuminance = function() {
      var e = this.toRgb(), r, n, a, o = e.r / 255, s = e.g / 255, c = e.b / 255;
      return o <= 0.03928 ? r = o / 12.92 : r = Math.pow((o + 0.055) / 1.055, 2.4), s <= 0.03928 ? n = s / 12.92 : n = Math.pow((s + 0.055) / 1.055, 2.4), c <= 0.03928 ? a = c / 12.92 : a = Math.pow((c + 0.055) / 1.055, 2.4), 0.2126 * r + 0.7152 * n + 0.0722 * a;
    }, t.prototype.getAlpha = function() {
      return this.a;
    }, t.prototype.setAlpha = function(e) {
      return this.a = he(e), this.roundA = Math.round(100 * this.a) / 100, this;
    }, t.prototype.isMonochrome = function() {
      var e = this.toHsl().s;
      return e === 0;
    }, t.prototype.toHsv = function() {
      var e = bt(this.r, this.g, this.b);
      return { h: e.h * 360, s: e.s, v: e.v, a: this.a };
    }, t.prototype.toHsvString = function() {
      var e = bt(this.r, this.g, this.b), r = Math.round(e.h * 360), n = Math.round(e.s * 100), a = Math.round(e.v * 100);
      return this.a === 1 ? "hsv(".concat(r, ", ").concat(n, "%, ").concat(a, "%)") : "hsva(".concat(r, ", ").concat(n, "%, ").concat(a, "%, ").concat(this.roundA, ")");
    }, t.prototype.toHsl = function() {
      var e = Et(this.r, this.g, this.b);
      return { h: e.h * 360, s: e.s, l: e.l, a: this.a };
    }, t.prototype.toHslString = function() {
      var e = Et(this.r, this.g, this.b), r = Math.round(e.h * 360), n = Math.round(e.s * 100), a = Math.round(e.l * 100);
      return this.a === 1 ? "hsl(".concat(r, ", ").concat(n, "%, ").concat(a, "%)") : "hsla(".concat(r, ", ").concat(n, "%, ").concat(a, "%, ").concat(this.roundA, ")");
    }, t.prototype.toHex = function(e) {
      return e === void 0 && (e = !1), mt(this.r, this.g, this.b, e);
    }, t.prototype.toHexString = function(e) {
      return e === void 0 && (e = !1), "#" + this.toHex(e);
    }, t.prototype.toHex8 = function(e) {
      return e === void 0 && (e = !1), Te(this.r, this.g, this.b, this.a, e);
    }, t.prototype.toHex8String = function(e) {
      return e === void 0 && (e = !1), "#" + this.toHex8(e);
    }, t.prototype.toHexShortString = function(e) {
      return e === void 0 && (e = !1), this.a === 1 ? this.toHexString(e) : this.toHex8String(e);
    }, t.prototype.toRgb = function() {
      return {
        r: Math.round(this.r),
        g: Math.round(this.g),
        b: Math.round(this.b),
        a: this.a
      };
    }, t.prototype.toRgbString = function() {
      var e = Math.round(this.r), r = Math.round(this.g), n = Math.round(this.b);
      return this.a === 1 ? "rgb(".concat(e, ", ").concat(r, ", ").concat(n, ")") : "rgba(".concat(e, ", ").concat(r, ", ").concat(n, ", ").concat(this.roundA, ")");
    }, t.prototype.toPercentageRgb = function() {
      var e = function(r) {
        return "".concat(Math.round(x(r, 255) * 100), "%");
      };
      return {
        r: e(this.r),
        g: e(this.g),
        b: e(this.b),
        a: this.a
      };
    }, t.prototype.toPercentageRgbString = function() {
      var e = function(r) {
        return Math.round(x(r, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(e(this.r), "%, ").concat(e(this.g), "%, ").concat(e(this.b), "%)") : "rgba(".concat(e(this.r), "%, ").concat(e(this.g), "%, ").concat(e(this.b), "%, ").concat(this.roundA, ")");
    }, t.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var e = "#" + mt(this.r, this.g, this.b, !1), r = 0, n = Object.entries(xt); r < n.length; r++) {
        var a = n[r], o = a[0], s = a[1];
        if (e === s)
          return o;
      }
      return !1;
    }, t.prototype.toString = function(e) {
      var r = !!e;
      e = e ?? this.format;
      var n = !1, a = this.a < 1 && this.a >= 0, o = !r && a && (e.startsWith("hex") || e === "name");
      return o ? e === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (e === "rgb" && (n = this.toRgbString()), e === "prgb" && (n = this.toPercentageRgbString()), (e === "hex" || e === "hex6") && (n = this.toHexString()), e === "hex3" && (n = this.toHexString(!0)), e === "hex4" && (n = this.toHex8String(!0)), e === "hex8" && (n = this.toHex8String()), e === "name" && (n = this.toName()), e === "hsl" && (n = this.toHslString()), e === "hsv" && (n = this.toHsvString()), n || this.toHexString());
    }, t.prototype.toNumber = function() {
      return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    }, t.prototype.clone = function() {
      return new t(this.toString());
    }, t.prototype.lighten = function(e) {
      e === void 0 && (e = 10);
      var r = this.toHsl();
      return r.l += e / 100, r.l = Z(r.l), new t(r);
    }, t.prototype.brighten = function(e) {
      e === void 0 && (e = 10);
      var r = this.toRgb();
      return r.r = Math.max(0, Math.min(255, r.r - Math.round(255 * -(e / 100)))), r.g = Math.max(0, Math.min(255, r.g - Math.round(255 * -(e / 100)))), r.b = Math.max(0, Math.min(255, r.b - Math.round(255 * -(e / 100)))), new t(r);
    }, t.prototype.darken = function(e) {
      e === void 0 && (e = 10);
      var r = this.toHsl();
      return r.l -= e / 100, r.l = Z(r.l), new t(r);
    }, t.prototype.tint = function(e) {
      return e === void 0 && (e = 10), this.mix("white", e);
    }, t.prototype.shade = function(e) {
      return e === void 0 && (e = 10), this.mix("black", e);
    }, t.prototype.desaturate = function(e) {
      e === void 0 && (e = 10);
      var r = this.toHsl();
      return r.s -= e / 100, r.s = Z(r.s), new t(r);
    }, t.prototype.saturate = function(e) {
      e === void 0 && (e = 10);
      var r = this.toHsl();
      return r.s += e / 100, r.s = Z(r.s), new t(r);
    }, t.prototype.greyscale = function() {
      return this.desaturate(100);
    }, t.prototype.spin = function(e) {
      var r = this.toHsl(), n = (r.h + e) % 360;
      return r.h = n < 0 ? 360 + n : n, new t(r);
    }, t.prototype.mix = function(e, r) {
      r === void 0 && (r = 50);
      var n = this.toRgb(), a = new t(e).toRgb(), o = r / 100, s = {
        r: (a.r - n.r) * o + n.r,
        g: (a.g - n.g) * o + n.g,
        b: (a.b - n.b) * o + n.b,
        a: (a.a - n.a) * o + n.a
      };
      return new t(s);
    }, t.prototype.analogous = function(e, r) {
      e === void 0 && (e = 6), r === void 0 && (r = 30);
      var n = this.toHsl(), a = 360 / r, o = [this];
      for (n.h = (n.h - (a * e >> 1) + 720) % 360; --e; )
        n.h = (n.h + a) % 360, o.push(new t(n));
      return o;
    }, t.prototype.complement = function() {
      var e = this.toHsl();
      return e.h = (e.h + 180) % 360, new t(e);
    }, t.prototype.monochromatic = function(e) {
      e === void 0 && (e = 6);
      for (var r = this.toHsv(), n = r.h, a = r.s, o = r.v, s = [], c = 1 / e; e--; )
        s.push(new t({ h: n, s: a, v: o })), o = (o + c) % 1;
      return s;
    }, t.prototype.splitcomplement = function() {
      var e = this.toHsl(), r = e.h;
      return [
        this,
        new t({ h: (r + 72) % 360, s: e.s, l: e.l }),
        new t({ h: (r + 216) % 360, s: e.s, l: e.l })
      ];
    }, t.prototype.onBackground = function(e) {
      var r = this.toRgb(), n = new t(e).toRgb(), a = r.a + n.a * (1 - r.a);
      return new t({
        r: (r.r * r.a + n.r * n.a * (1 - r.a)) / a,
        g: (r.g * r.a + n.g * n.a * (1 - r.a)) / a,
        b: (r.b * r.a + n.b * n.a * (1 - r.a)) / a,
        a
      });
    }, t.prototype.triad = function() {
      return this.polyad(3);
    }, t.prototype.tetrad = function() {
      return this.polyad(4);
    }, t.prototype.polyad = function(e) {
      for (var r = this.toHsl(), n = r.h, a = [this], o = 360 / e, s = 1; s < e; s++)
        a.push(new t({ h: (n + s * o) % 360, s: r.s, l: r.l }));
      return a;
    }, t.prototype.equals = function(e) {
      return this.toRgbString() === new t(e).toRgbString();
    }, t;
  }()
);
function ar(t, e) {
  return t === void 0 && (t = ""), e === void 0 && (e = {}), new He(t, e);
}
var Q = 2, Ft = 0.16, Pe = 0.05, Le = 0.05, Ne = 0.15, pe = 5, de = 4, Ie = [{
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
function Ht(t) {
  var e = t.r, r = t.g, n = t.b, a = bt(e, r, n);
  return {
    h: a.h * 360,
    s: a.s,
    v: a.v
  };
}
function X(t) {
  var e = t.r, r = t.g, n = t.b;
  return "#".concat(mt(e, r, n, !1));
}
function qe(t, e, r) {
  var n = r / 100, a = {
    r: (e.r - t.r) * n + t.r,
    g: (e.g - t.g) * n + t.g,
    b: (e.b - t.b) * n + t.b
  };
  return a;
}
function Pt(t, e, r) {
  var n;
  return Math.round(t.h) >= 60 && Math.round(t.h) <= 240 ? n = r ? Math.round(t.h) - Q * e : Math.round(t.h) + Q * e : n = r ? Math.round(t.h) + Q * e : Math.round(t.h) - Q * e, n < 0 ? n += 360 : n >= 360 && (n -= 360), n;
}
function Lt(t, e, r) {
  if (t.h === 0 && t.s === 0)
    return t.s;
  var n;
  return r ? n = t.s - Ft * e : e === de ? n = t.s + Ft : n = t.s + Pe * e, n > 1 && (n = 1), r && e === pe && n > 0.1 && (n = 0.1), n < 0.06 && (n = 0.06), Number(n.toFixed(2));
}
function Nt(t, e, r) {
  var n;
  return r ? n = t.v + Le * e : n = t.v - Ne * e, n > 1 && (n = 1), Number(n.toFixed(2));
}
function wt(t) {
  for (var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = [], n = D(t), a = pe; a > 0; a -= 1) {
    var o = Ht(n), s = X(D({
      h: Pt(o, a, !0),
      s: Lt(o, a, !0),
      v: Nt(o, a, !0)
    }));
    r.push(s);
  }
  r.push(X(n));
  for (var c = 1; c <= de; c += 1) {
    var l = Ht(n), g = X(D({
      h: Pt(l, c),
      s: Lt(l, c),
      v: Nt(l, c)
    }));
    r.push(g);
  }
  return e.theme === "dark" ? Ie.map(function(m) {
    var v = m.index, y = m.opacity, F = X(qe(D(e.backgroundColor || "#141414"), D(r[v]), y * 100));
    return F;
  }) : r;
}
var et = {
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
}, w = {}, rt = {};
Object.keys(et).forEach(function(t) {
  w[t] = wt(et[t]), w[t].primary = w[t][5], rt[t] = wt(et[t], {
    theme: "dark",
    backgroundColor: "#141414"
  }), rt[t].primary = rt[t][5];
});
var Ce = w.red, Ge = w.volcano, Be = w.gold, De = w.orange, Ve = w.yellow, We = w.lime, Ye = w.green, $e = w.cyan, Ue = w.blue, ze = w.geekblue, Je = w.purple, Ze = w.magenta, Ke = w.grey;
const or = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  blue: Ue,
  cyan: $e,
  geekblue: ze,
  generate: wt,
  gold: Be,
  green: Ye,
  grey: Ke,
  lime: We,
  magenta: Ze,
  orange: De,
  presetDarkPalettes: rt,
  presetPalettes: w,
  presetPrimaryColors: et,
  purple: Je,
  red: Ce,
  volcano: Ge,
  yellow: Ve
}, Symbol.toStringTag, { value: "Module" }));
var vt = { exports: {} }, It;
function Qe() {
  return It || (It = 1, function(t) {
    var e = be.default;
    function r() {
      t.exports = r = function() {
        return a;
      }, t.exports.__esModule = !0, t.exports.default = t.exports;
      var n, a = {}, o = Object.prototype, s = o.hasOwnProperty, c = Object.defineProperty || function(f, i, u) {
        f[i] = u.value;
      }, l = typeof Symbol == "function" ? Symbol : {}, g = l.iterator || "@@iterator", m = l.asyncIterator || "@@asyncIterator", v = l.toStringTag || "@@toStringTag";
      function y(f, i, u) {
        return Object.defineProperty(f, i, {
          value: u,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }), f[i];
      }
      try {
        y({}, "");
      } catch {
        y = function(u, h, d) {
          return u[h] = d;
        };
      }
      function F(f, i, u, h) {
        var d = i && i.prototype instanceof it ? i : it, p = Object.create(d.prototype), b = new ct(h || []);
        return c(p, "_invoke", {
          value: ge(f, u, b)
        }), p;
      }
      function ot(f, i, u) {
        try {
          return {
            type: "normal",
            arg: f.call(i, u)
          };
        } catch (h) {
          return {
            type: "throw",
            arg: h
          };
        }
      }
      a.wrap = F;
      var Mt = "suspendedStart", ve = "suspendedYield", St = "executing", $ = "completed", E = {};
      function it() {
      }
      function U() {
      }
      function I() {
      }
      var ut = {};
      y(ut, g, function() {
        return this;
      });
      var ft = Object.getPrototypeOf, z = ft && ft(ft(ht([])));
      z && z !== o && s.call(z, g) && (ut = z);
      var B = I.prototype = it.prototype = Object.create(ut);
      function jt(f) {
        ["next", "throw", "return"].forEach(function(i) {
          y(f, i, function(u) {
            return this._invoke(i, u);
          });
        });
      }
      function J(f, i) {
        function u(d, p, b, M) {
          var S = ot(f[d], f, p);
          if (S.type !== "throw") {
            var q = S.arg, P = q.value;
            return P && e(P) == "object" && s.call(P, "__await") ? i.resolve(P.__await).then(function(C) {
              u("next", C, b, M);
            }, function(C) {
              u("throw", C, b, M);
            }) : i.resolve(P).then(function(C) {
              q.value = C, b(q);
            }, function(C) {
              return u("throw", C, b, M);
            });
          }
          M(S.arg);
        }
        var h;
        c(this, "_invoke", {
          value: function(p, b) {
            function M() {
              return new i(function(S, q) {
                u(p, b, S, q);
              });
            }
            return h = h ? h.then(M, M) : M();
          }
        });
      }
      function ge(f, i, u) {
        var h = Mt;
        return function(d, p) {
          if (h === St)
            throw new Error("Generator is already running");
          if (h === $) {
            if (d === "throw")
              throw p;
            return {
              value: n,
              done: !0
            };
          }
          for (u.method = d, u.arg = p; ; ) {
            var b = u.delegate;
            if (b) {
              var M = kt(b, u);
              if (M) {
                if (M === E)
                  continue;
                return M;
              }
            }
            if (u.method === "next")
              u.sent = u._sent = u.arg;
            else if (u.method === "throw") {
              if (h === Mt)
                throw h = $, u.arg;
              u.dispatchException(u.arg);
            } else
              u.method === "return" && u.abrupt("return", u.arg);
            h = St;
            var S = ot(f, i, u);
            if (S.type === "normal") {
              if (h = u.done ? $ : ve, S.arg === E)
                continue;
              return {
                value: S.arg,
                done: u.done
              };
            }
            S.type === "throw" && (h = $, u.method = "throw", u.arg = S.arg);
          }
        };
      }
      function kt(f, i) {
        var u = i.method, h = f.iterator[u];
        if (h === n)
          return i.delegate = null, u === "throw" && f.iterator.return && (i.method = "return", i.arg = n, kt(f, i), i.method === "throw") || u !== "return" && (i.method = "throw", i.arg = new TypeError("The iterator does not provide a '" + u + "' method")), E;
        var d = ot(h, f.iterator, i.arg);
        if (d.type === "throw")
          return i.method = "throw", i.arg = d.arg, i.delegate = null, E;
        var p = d.arg;
        return p ? p.done ? (i[f.resultName] = p.value, i.next = f.nextLoc, i.method !== "return" && (i.method = "next", i.arg = n), i.delegate = null, E) : p : (i.method = "throw", i.arg = new TypeError("iterator result is not an object"), i.delegate = null, E);
      }
      function ye(f) {
        var i = {
          tryLoc: f[0]
        };
        1 in f && (i.catchLoc = f[1]), 2 in f && (i.finallyLoc = f[2], i.afterLoc = f[3]), this.tryEntries.push(i);
      }
      function st(f) {
        var i = f.completion || {};
        i.type = "normal", delete i.arg, f.completion = i;
      }
      function ct(f) {
        this.tryEntries = [{
          tryLoc: "root"
        }], f.forEach(ye, this), this.reset(!0);
      }
      function ht(f) {
        if (f || f === "") {
          var i = f[g];
          if (i)
            return i.call(f);
          if (typeof f.next == "function")
            return f;
          if (!isNaN(f.length)) {
            var u = -1, h = function d() {
              for (; ++u < f.length; )
                if (s.call(f, u))
                  return d.value = f[u], d.done = !1, d;
              return d.value = n, d.done = !0, d;
            };
            return h.next = h;
          }
        }
        throw new TypeError(e(f) + " is not iterable");
      }
      return U.prototype = I, c(B, "constructor", {
        value: I,
        configurable: !0
      }), c(I, "constructor", {
        value: U,
        configurable: !0
      }), U.displayName = y(I, v, "GeneratorFunction"), a.isGeneratorFunction = function(f) {
        var i = typeof f == "function" && f.constructor;
        return !!i && (i === U || (i.displayName || i.name) === "GeneratorFunction");
      }, a.mark = function(f) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(f, I) : (f.__proto__ = I, y(f, v, "GeneratorFunction")), f.prototype = Object.create(B), f;
      }, a.awrap = function(f) {
        return {
          __await: f
        };
      }, jt(J.prototype), y(J.prototype, m, function() {
        return this;
      }), a.AsyncIterator = J, a.async = function(f, i, u, h, d) {
        d === void 0 && (d = Promise);
        var p = new J(F(f, i, u, h), d);
        return a.isGeneratorFunction(i) ? p : p.next().then(function(b) {
          return b.done ? b.value : p.next();
        });
      }, jt(B), y(B, v, "Generator"), y(B, g, function() {
        return this;
      }), y(B, "toString", function() {
        return "[object Generator]";
      }), a.keys = function(f) {
        var i = Object(f), u = [];
        for (var h in i)
          u.push(h);
        return u.reverse(), function d() {
          for (; u.length; ) {
            var p = u.pop();
            if (p in i)
              return d.value = p, d.done = !1, d;
          }
          return d.done = !0, d;
        };
      }, a.values = ht, ct.prototype = {
        constructor: ct,
        reset: function(i) {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = n, this.done = !1, this.delegate = null, this.method = "next", this.arg = n, this.tryEntries.forEach(st), !i)
            for (var u in this)
              u.charAt(0) === "t" && s.call(this, u) && !isNaN(+u.slice(1)) && (this[u] = n);
        },
        stop: function() {
          this.done = !0;
          var i = this.tryEntries[0].completion;
          if (i.type === "throw")
            throw i.arg;
          return this.rval;
        },
        dispatchException: function(i) {
          if (this.done)
            throw i;
          var u = this;
          function h(q, P) {
            return b.type = "throw", b.arg = i, u.next = q, P && (u.method = "next", u.arg = n), !!P;
          }
          for (var d = this.tryEntries.length - 1; d >= 0; --d) {
            var p = this.tryEntries[d], b = p.completion;
            if (p.tryLoc === "root")
              return h("end");
            if (p.tryLoc <= this.prev) {
              var M = s.call(p, "catchLoc"), S = s.call(p, "finallyLoc");
              if (M && S) {
                if (this.prev < p.catchLoc)
                  return h(p.catchLoc, !0);
                if (this.prev < p.finallyLoc)
                  return h(p.finallyLoc);
              } else if (M) {
                if (this.prev < p.catchLoc)
                  return h(p.catchLoc, !0);
              } else {
                if (!S)
                  throw new Error("try statement without catch or finally");
                if (this.prev < p.finallyLoc)
                  return h(p.finallyLoc);
              }
            }
          }
        },
        abrupt: function(i, u) {
          for (var h = this.tryEntries.length - 1; h >= 0; --h) {
            var d = this.tryEntries[h];
            if (d.tryLoc <= this.prev && s.call(d, "finallyLoc") && this.prev < d.finallyLoc) {
              var p = d;
              break;
            }
          }
          p && (i === "break" || i === "continue") && p.tryLoc <= u && u <= p.finallyLoc && (p = null);
          var b = p ? p.completion : {};
          return b.type = i, b.arg = u, p ? (this.method = "next", this.next = p.finallyLoc, E) : this.complete(b);
        },
        complete: function(i, u) {
          if (i.type === "throw")
            throw i.arg;
          return i.type === "break" || i.type === "continue" ? this.next = i.arg : i.type === "return" ? (this.rval = this.arg = i.arg, this.method = "return", this.next = "end") : i.type === "normal" && u && (this.next = u), E;
        },
        finish: function(i) {
          for (var u = this.tryEntries.length - 1; u >= 0; --u) {
            var h = this.tryEntries[u];
            if (h.finallyLoc === i)
              return this.complete(h.completion, h.afterLoc), st(h), E;
          }
        },
        catch: function(i) {
          for (var u = this.tryEntries.length - 1; u >= 0; --u) {
            var h = this.tryEntries[u];
            if (h.tryLoc === i) {
              var d = h.completion;
              if (d.type === "throw") {
                var p = d.arg;
                st(h);
              }
              return p;
            }
          }
          throw new Error("illegal catch attempt");
        },
        delegateYield: function(i, u, h) {
          return this.delegate = {
            iterator: ht(i),
            resultName: u,
            nextLoc: h
          }, this.method === "next" && (this.arg = n), E;
        }
      }, a;
    }
    t.exports = r, t.exports.__esModule = !0, t.exports.default = t.exports;
  }(vt)), vt.exports;
}
var gt, qt;
function ir() {
  if (qt)
    return gt;
  qt = 1;
  var t = Qe()();
  gt = t;
  try {
    regeneratorRuntime = t;
  } catch {
    typeof globalThis == "object" ? globalThis.regeneratorRuntime = t : Function("r", "regeneratorRuntime = r")(t);
  }
  return gt;
}
export {
  He as T,
  be as _,
  er as a,
  wt as b,
  Xe as c,
  nr as d,
  K as e,
  le as f,
  tr as g,
  Rt as h,
  ke as i,
  _e as j,
  D as k,
  H as l,
  Ae as m,
  xt as n,
  mt as o,
  k as p,
  Et as q,
  ir as r,
  bt as s,
  ar as t,
  je as u,
  rr as v,
  Te as w,
  Fe as x,
  or as y,
  ce as z
};
