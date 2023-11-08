var Jr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Zr(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function Kr(t) {
  if (t.__esModule)
    return t;
  var r = t.default;
  if (typeof r == "function") {
    var e = function n() {
      return this instanceof n ? Reflect.construct(r, arguments, this.constructor) : r.apply(this, arguments);
    };
    e.prototype = r.prototype;
  } else
    e = {};
  return Object.defineProperty(e, "__esModule", { value: !0 }), Object.keys(t).forEach(function(n) {
    var a = Object.getOwnPropertyDescriptor(t, n);
    Object.defineProperty(e, n, a.get ? a : {
      enumerable: !0,
      get: function() {
        return t[n];
      }
    });
  }), e;
}
var Nt = { exports: {} };
(function(t) {
  function r(e) {
    "@babel/helpers - typeof";
    return t.exports = r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
      return typeof n;
    } : function(n) {
      return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
    }, t.exports.__esModule = !0, t.exports.default = t.exports, r(e);
  }
  t.exports = r, t.exports.__esModule = !0, t.exports.default = t.exports;
})(Nt);
var dr = Nt.exports;
function Mt(t, r) {
  for (var e = 0; e < r.length; e++) {
    var n = r[e];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
  }
}
function It(t, r, e) {
  return r && Mt(t.prototype, r), e && Mt(t, e), t;
}
function X() {
  return (X = Object.assign || function(t) {
    for (var r = 1; r < arguments.length; r++) {
      var e = arguments[r];
      for (var n in e)
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    }
    return t;
  }).apply(this, arguments);
}
function Gt(t, r) {
  t.prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r;
}
function qt(t, r) {
  if (t == null)
    return {};
  var e, n, a = {}, i = Object.keys(t);
  for (n = 0; n < i.length; n++)
    r.indexOf(e = i[n]) >= 0 || (a[e] = t[e]);
  return a;
}
function kt(t) {
  return ((r = t) != null && typeof r == "object" && Array.isArray(r) === !1) == 1 && Object.prototype.toString.call(t) === "[object Object]";
  var r;
}
var Ct = Object.prototype, Bt = Ct.toString, vr = Ct.hasOwnProperty, Dt = /^\s*function (\w+)/;
function jt(t) {
  var r, e = (r = t == null ? void 0 : t.type) !== null && r !== void 0 ? r : t;
  if (e) {
    var n = e.toString().match(Dt);
    return n ? n[1] : "";
  }
  return "";
}
var C = function(t) {
  var r, e;
  return kt(t) !== !1 && typeof (r = t.constructor) == "function" && kt(e = r.prototype) !== !1 && e.hasOwnProperty("isPrototypeOf") !== !1;
}, Vt = function(t) {
  return t;
}, O = Vt;
if (process.env.NODE_ENV !== "production") {
  var gr = typeof console < "u";
  O = gr ? function(t) {
    console.warn("[VueTypes warn]: " + t);
  } : Vt;
}
var $ = function(t, r) {
  return vr.call(t, r);
}, yr = Number.isInteger || function(t) {
  return typeof t == "number" && isFinite(t) && Math.floor(t) === t;
}, V = Array.isArray || function(t) {
  return Bt.call(t) === "[object Array]";
}, W = function(t) {
  return Bt.call(t) === "[object Function]";
}, et = function(t) {
  return C(t) && $(t, "_vueTypes_name");
}, Wt = function(t) {
  return C(t) && ($(t, "type") || ["_vueTypes_name", "validator", "default", "required"].some(function(r) {
    return $(t, r);
  }));
};
function wt(t, r) {
  return Object.defineProperty(t.bind(r), "__original", { value: t });
}
function N(t, r, e) {
  var n;
  e === void 0 && (e = !1);
  var a = !0, i = "";
  n = C(t) ? t : { type: t };
  var s = et(n) ? n._vueTypes_name + " - " : "";
  if (Wt(n) && n.type !== null) {
    if (n.type === void 0 || n.type === !0 || !n.required && r === void 0)
      return a;
    V(n.type) ? (a = n.type.some(function(d) {
      return N(d, r, !0) === !0;
    }), i = n.type.map(function(d) {
      return jt(d);
    }).join(" or ")) : a = (i = jt(n)) === "Array" ? V(r) : i === "Object" ? C(r) : i === "String" || i === "Number" || i === "Boolean" || i === "Function" ? function(d) {
      if (d == null)
        return "";
      var x = d.constructor.toString().match(Dt);
      return x ? x[1] : "";
    }(r) === i : r instanceof n.type;
  }
  if (!a) {
    var c = s + 'value "' + r + '" should be of type "' + i + '"';
    return e === !1 ? (O(c), !1) : c;
  }
  if ($(n, "validator") && W(n.validator)) {
    var h = O, g = [];
    if (O = function(d) {
      g.push(d);
    }, a = n.validator(r), O = h, !a) {
      var y = (g.length > 1 ? "* " : "") + g.join(`
* `);
      return g.length = 0, e === !1 ? (O(y), a) : y;
    }
  }
  return a;
}
function k(t, r) {
  var e = Object.defineProperties(r, { _vueTypes_name: { value: t, writable: !0 }, isRequired: { get: function() {
    return this.required = !0, this;
  } }, def: { value: function(a) {
    return a !== void 0 || this.default ? W(a) || N(this, a, !0) === !0 ? (this.default = V(a) ? function() {
      return [].concat(a);
    } : C(a) ? function() {
      return Object.assign({}, a);
    } : a, this) : (O(this._vueTypes_name + ' - invalid default value: "' + a + '"'), this) : this;
  } } }), n = e.validator;
  return W(n) && (e.validator = wt(n, e)), e;
}
function A(t, r) {
  var e = k(t, r);
  return Object.defineProperty(e, "validate", { value: function(n) {
    return W(this.validator) && O(this._vueTypes_name + ` - calling .validate() will overwrite the current custom validator function. Validator info:
` + JSON.stringify(this)), this.validator = wt(n, this), this;
  } });
}
function vt(t, r, e) {
  var n, a, i = (n = r, a = {}, Object.getOwnPropertyNames(n).forEach(function(d) {
    a[d] = Object.getOwnPropertyDescriptor(n, d);
  }), Object.defineProperties({}, a));
  if (i._vueTypes_name = t, !C(e))
    return i;
  var s, c, h = e.validator, g = qt(e, ["validator"]);
  if (W(h)) {
    var y = i.validator;
    y && (y = (c = (s = y).__original) !== null && c !== void 0 ? c : s), i.validator = wt(y ? function(d) {
      return y.call(this, d) && h.call(this, d);
    } : h, i);
  }
  return Object.assign(i, g);
}
function nt(t) {
  return t.replace(/^(?!\s*$)/gm, "  ");
}
var $t = function() {
  return A("any", {});
}, Yt = function() {
  return A("function", { type: Function });
}, Ut = function() {
  return A("boolean", { type: Boolean });
}, zt = function() {
  return A("string", { type: String });
}, Jt = function() {
  return A("number", { type: Number });
}, Zt = function() {
  return A("array", { type: Array });
}, Kt = function() {
  return A("object", { type: Object });
}, Qt = function() {
  return k("integer", { type: Number, validator: function(t) {
    return yr(t);
  } });
}, Xt = function() {
  return k("symbol", { validator: function(t) {
    return typeof t == "symbol";
  } });
};
function tr(t, r) {
  if (r === void 0 && (r = "custom validation failed"), typeof t != "function")
    throw new TypeError("[VueTypes error]: You must provide a function as argument");
  return k(t.name || "<<anonymous function>>", { validator: function(e) {
    var n = t(e);
    return n || O(this._vueTypes_name + " - " + r), n;
  } });
}
function rr(t) {
  if (!V(t))
    throw new TypeError("[VueTypes error]: You must provide an array as argument.");
  var r = 'oneOf - value should be one of "' + t.join('", "') + '".', e = t.reduce(function(n, a) {
    if (a != null) {
      var i = a.constructor;
      n.indexOf(i) === -1 && n.push(i);
    }
    return n;
  }, []);
  return k("oneOf", { type: e.length > 0 ? e : void 0, validator: function(n) {
    var a = t.indexOf(n) !== -1;
    return a || O(r), a;
  } });
}
function er(t) {
  if (!V(t))
    throw new TypeError("[VueTypes error]: You must provide an array as argument");
  for (var r = !1, e = [], n = 0; n < t.length; n += 1) {
    var a = t[n];
    if (Wt(a)) {
      if (et(a) && a._vueTypes_name === "oneOf") {
        e = e.concat(a.type);
        continue;
      }
      if (W(a.validator) && (r = !0), a.type !== !0 && a.type) {
        e = e.concat(a.type);
        continue;
      }
    }
    e.push(a);
  }
  return e = e.filter(function(i, s) {
    return e.indexOf(i) === s;
  }), k("oneOfType", r ? { type: e, validator: function(i) {
    var s = [], c = t.some(function(h) {
      var g = N(et(h) && h._vueTypes_name === "oneOf" ? h.type || null : h, i, !0);
      return typeof g == "string" && s.push(g), g === !0;
    });
    return c || O("oneOfType - provided value does not match any of the " + s.length + ` passed-in validators:
` + nt(s.join(`
`))), c;
  } } : { type: e });
}
function nr(t) {
  return k("arrayOf", { type: Array, validator: function(r) {
    var e, n = r.every(function(a) {
      return (e = N(t, a, !0)) === !0;
    });
    return n || O(`arrayOf - value validation error:
` + nt(e)), n;
  } });
}
function ar(t) {
  return k("instanceOf", { type: t });
}
function ir(t) {
  return k("objectOf", { type: Object, validator: function(r) {
    var e, n = Object.keys(r).every(function(a) {
      return (e = N(t, r[a], !0)) === !0;
    });
    return n || O(`objectOf - value validation error:
` + nt(e)), n;
  } });
}
function or(t) {
  var r = Object.keys(t), e = r.filter(function(a) {
    var i;
    return !!(!((i = t[a]) === null || i === void 0) && i.required);
  }), n = k("shape", { type: Object, validator: function(a) {
    var i = this;
    if (!C(a))
      return !1;
    var s = Object.keys(a);
    if (e.length > 0 && e.some(function(h) {
      return s.indexOf(h) === -1;
    })) {
      var c = e.filter(function(h) {
        return s.indexOf(h) === -1;
      });
      return O(c.length === 1 ? 'shape - required property "' + c[0] + '" is not defined.' : 'shape - required properties "' + c.join('", "') + '" are not defined.'), !1;
    }
    return s.every(function(h) {
      if (r.indexOf(h) === -1)
        return i._vueTypes_isLoose === !0 || (O('shape - shape definition does not include a "' + h + '" property. Allowed keys: "' + r.join('", "') + '".'), !1);
      var g = N(t[h], a[h], !0);
      return typeof g == "string" && O('shape - "' + h + `" property validation error:
 ` + nt(g)), g === !0;
    });
  } });
  return Object.defineProperty(n, "_vueTypes_isLoose", { writable: !0, value: !1 }), Object.defineProperty(n, "loose", { get: function() {
    return this._vueTypes_isLoose = !0, this;
  } }), n;
}
var H = function() {
  function t() {
  }
  return t.extend = function(r) {
    var e = this;
    if (V(r))
      return r.forEach(function(d) {
        return e.extend(d);
      }), this;
    var n = r.name, a = r.validate, i = a !== void 0 && a, s = r.getter, c = s !== void 0 && s, h = qt(r, ["name", "validate", "getter"]);
    if ($(this, n))
      throw new TypeError('[VueTypes error]: Type "' + n + '" already defined');
    var g, y = h.type;
    return et(y) ? (delete h.type, Object.defineProperty(this, n, c ? { get: function() {
      return vt(n, y, h);
    } } : { value: function() {
      var d, x = vt(n, y, h);
      return x.validator && (x.validator = (d = x.validator).bind.apply(d, [x].concat([].slice.call(arguments)))), x;
    } })) : (g = c ? { get: function() {
      var d = Object.assign({}, h);
      return i ? A(n, d) : k(n, d);
    }, enumerable: !0 } : { value: function() {
      var d, x, R = Object.assign({}, h);
      return d = i ? A(n, R) : k(n, R), R.validator && (d.validator = (x = R.validator).bind.apply(x, [d].concat([].slice.call(arguments)))), d;
    }, enumerable: !0 }, Object.defineProperty(this, n, g));
  }, It(t, null, [{ key: "any", get: function() {
    return $t();
  } }, { key: "func", get: function() {
    return Yt().def(this.defaults.func);
  } }, { key: "bool", get: function() {
    return Ut().def(this.defaults.bool);
  } }, { key: "string", get: function() {
    return zt().def(this.defaults.string);
  } }, { key: "number", get: function() {
    return Jt().def(this.defaults.number);
  } }, { key: "array", get: function() {
    return Zt().def(this.defaults.array);
  } }, { key: "object", get: function() {
    return Kt().def(this.defaults.object);
  } }, { key: "integer", get: function() {
    return Qt().def(this.defaults.integer);
  } }, { key: "symbol", get: function() {
    return Xt();
  } }]), t;
}();
function ur(t) {
  var r;
  return t === void 0 && (t = { func: function() {
  }, bool: !0, string: "", number: 0, array: function() {
    return [];
  }, object: function() {
    return {};
  }, integer: 0 }), (r = function(e) {
    function n() {
      return e.apply(this, arguments) || this;
    }
    return Gt(n, e), It(n, null, [{ key: "sensibleDefaults", get: function() {
      return X({}, this.defaults);
    }, set: function(a) {
      this.defaults = a !== !1 ? X({}, a !== !0 ? a : t) : {};
    } }]), n;
  }(H)).defaults = X({}, t), r;
}
H.defaults = {}, H.custom = tr, H.oneOf = rr, H.instanceOf = ar, H.oneOfType = er, H.arrayOf = nr, H.objectOf = ir, H.shape = or, H.utils = { validate: function(t, r) {
  return N(r, t, !0) === !0;
}, toType: function(t, r, e) {
  return e === void 0 && (e = !1), e ? A(t, r) : k(t, r);
} };
var br = function(t) {
  function r() {
    return t.apply(this, arguments) || this;
  }
  return Gt(r, t), r;
}(ur());
const Qr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  any: $t,
  array: Zt,
  arrayOf: nr,
  bool: Ut,
  createTypes: ur,
  custom: tr,
  default: br,
  fromType: vt,
  func: Yt,
  instanceOf: ar,
  integer: Qt,
  number: Jt,
  object: Kt,
  objectOf: ir,
  oneOf: rr,
  oneOfType: er,
  shape: or,
  string: zt,
  symbol: Xt,
  toType: k,
  toValidableType: A,
  validateType: N
}, Symbol.toStringTag, { value: "Module" }));
function m(t, r) {
  mr(t) && (t = "100%");
  var e = wr(t);
  return t = r === 360 ? t : Math.min(r, Math.max(0, parseFloat(t))), e && (t = parseInt(String(t * r), 10) / 100), Math.abs(t - r) < 1e-6 ? 1 : (r === 360 ? t = (t < 0 ? t % r + r : t % r) / parseFloat(String(r)) : t = t % r / parseFloat(String(r)), t);
}
function J(t) {
  return Math.min(1, Math.max(0, t));
}
function mr(t) {
  return typeof t == "string" && t.indexOf(".") !== -1 && parseFloat(t) === 1;
}
function wr(t) {
  return typeof t == "string" && t.indexOf("%") !== -1;
}
function fr(t) {
  return t = parseFloat(t), (isNaN(t) || t < 0 || t > 1) && (t = 1), t;
}
function Z(t) {
  return t <= 1 ? "".concat(Number(t) * 100, "%") : t;
}
function T(t) {
  return t.length === 1 ? "0" + t : String(t);
}
function xr(t, r, e) {
  return {
    r: m(t, 255) * 255,
    g: m(r, 255) * 255,
    b: m(e, 255) * 255
  };
}
function _t(t, r, e) {
  t = m(t, 255), r = m(r, 255), e = m(e, 255);
  var n = Math.max(t, r, e), a = Math.min(t, r, e), i = 0, s = 0, c = (n + a) / 2;
  if (n === a)
    s = 0, i = 0;
  else {
    var h = n - a;
    switch (s = c > 0.5 ? h / (2 - n - a) : h / (n + a), n) {
      case t:
        i = (r - e) / h + (r < e ? 6 : 0);
        break;
      case r:
        i = (e - t) / h + 2;
        break;
      case e:
        i = (t - r) / h + 4;
        break;
    }
    i /= 6;
  }
  return { h: i, s, l: c };
}
function ct(t, r, e) {
  return e < 0 && (e += 1), e > 1 && (e -= 1), e < 1 / 6 ? t + (r - t) * (6 * e) : e < 1 / 2 ? r : e < 2 / 3 ? t + (r - t) * (2 / 3 - e) * 6 : t;
}
function Or(t, r, e) {
  var n, a, i;
  if (t = m(t, 360), r = m(r, 100), e = m(e, 100), r === 0)
    a = e, i = e, n = e;
  else {
    var s = e < 0.5 ? e * (1 + r) : e + r - e * r, c = 2 * e - s;
    n = ct(c, s, t + 1 / 3), a = ct(c, s, t), i = ct(c, s, t - 1 / 3);
  }
  return { r: n * 255, g: a * 255, b: i * 255 };
}
function gt(t, r, e) {
  t = m(t, 255), r = m(r, 255), e = m(e, 255);
  var n = Math.max(t, r, e), a = Math.min(t, r, e), i = 0, s = n, c = n - a, h = n === 0 ? 0 : c / n;
  if (n === a)
    i = 0;
  else {
    switch (n) {
      case t:
        i = (r - e) / c + (r < e ? 6 : 0);
        break;
      case r:
        i = (e - t) / c + 2;
        break;
      case e:
        i = (t - r) / c + 4;
        break;
    }
    i /= 6;
  }
  return { h: i, s: h, v: s };
}
function Sr(t, r, e) {
  t = m(t, 360) * 6, r = m(r, 100), e = m(e, 100);
  var n = Math.floor(t), a = t - n, i = e * (1 - r), s = e * (1 - a * r), c = e * (1 - (1 - a) * r), h = n % 6, g = [e, s, i, i, c, e][h], y = [c, e, e, s, i, i][h], d = [i, i, c, e, e, s][h];
  return { r: g * 255, g: y * 255, b: d * 255 };
}
function yt(t, r, e, n) {
  var a = [
    T(Math.round(t).toString(16)),
    T(Math.round(r).toString(16)),
    T(Math.round(e).toString(16))
  ];
  return n && a[0].startsWith(a[0].charAt(1)) && a[1].startsWith(a[1].charAt(1)) && a[2].startsWith(a[2].charAt(1)) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) : a.join("");
}
function Mr(t, r, e, n, a) {
  var i = [
    T(Math.round(t).toString(16)),
    T(Math.round(r).toString(16)),
    T(Math.round(e).toString(16)),
    T(sr(n))
  ];
  return a && i[0].startsWith(i[0].charAt(1)) && i[1].startsWith(i[1].charAt(1)) && i[2].startsWith(i[2].charAt(1)) && i[3].startsWith(i[3].charAt(1)) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) + i[3].charAt(0) : i.join("");
}
function Xr(t, r, e, n) {
  var a = [
    T(sr(n)),
    T(Math.round(t).toString(16)),
    T(Math.round(r).toString(16)),
    T(Math.round(e).toString(16))
  ];
  return a.join("");
}
function sr(t) {
  return Math.round(parseFloat(t) * 255).toString(16);
}
function Tt(t) {
  return j(t) / 255;
}
function j(t) {
  return parseInt(t, 16);
}
function kr(t) {
  return {
    r: t >> 16,
    g: (t & 65280) >> 8,
    b: t & 255
  };
}
var bt = {
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
  var r = { r: 0, g: 0, b: 0 }, e = 1, n = null, a = null, i = null, s = !1, c = !1;
  return typeof t == "string" && (t = Tr(t)), typeof t == "object" && (P(t.r) && P(t.g) && P(t.b) ? (r = xr(t.r, t.g, t.b), s = !0, c = String(t.r).substr(-1) === "%" ? "prgb" : "rgb") : P(t.h) && P(t.s) && P(t.v) ? (n = Z(t.s), a = Z(t.v), r = Sr(t.h, n, a), s = !0, c = "hsv") : P(t.h) && P(t.s) && P(t.l) && (n = Z(t.s), i = Z(t.l), r = Or(t.h, n, i), s = !0, c = "hsl"), Object.prototype.hasOwnProperty.call(t, "a") && (e = t.a)), e = fr(e), {
    ok: s,
    format: t.format || c,
    r: Math.min(255, Math.max(r.r, 0)),
    g: Math.min(255, Math.max(r.g, 0)),
    b: Math.min(255, Math.max(r.b, 0)),
    a: e
  };
}
var jr = "[-\\+]?\\d+%?", _r = "[-\\+]?\\d*\\.\\d+%?", L = "(?:".concat(_r, ")|(?:").concat(jr, ")"), ht = "[\\s|\\(]+(".concat(L, ")[,|\\s]+(").concat(L, ")[,|\\s]+(").concat(L, ")\\s*\\)?"), lt = "[\\s|\\(]+(".concat(L, ")[,|\\s]+(").concat(L, ")[,|\\s]+(").concat(L, ")[,|\\s]+(").concat(L, ")\\s*\\)?"), _ = {
  CSS_UNIT: new RegExp(L),
  rgb: new RegExp("rgb" + ht),
  rgba: new RegExp("rgba" + lt),
  hsl: new RegExp("hsl" + ht),
  hsla: new RegExp("hsla" + lt),
  hsv: new RegExp("hsv" + ht),
  hsva: new RegExp("hsva" + lt),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function Tr(t) {
  if (t = t.trim().toLowerCase(), t.length === 0)
    return !1;
  var r = !1;
  if (bt[t])
    t = bt[t], r = !0;
  else if (t === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var e = _.rgb.exec(t);
  return e ? { r: e[1], g: e[2], b: e[3] } : (e = _.rgba.exec(t), e ? { r: e[1], g: e[2], b: e[3], a: e[4] } : (e = _.hsl.exec(t), e ? { h: e[1], s: e[2], l: e[3] } : (e = _.hsla.exec(t), e ? { h: e[1], s: e[2], l: e[3], a: e[4] } : (e = _.hsv.exec(t), e ? { h: e[1], s: e[2], v: e[3] } : (e = _.hsva.exec(t), e ? { h: e[1], s: e[2], v: e[3], a: e[4] } : (e = _.hex8.exec(t), e ? {
    r: j(e[1]),
    g: j(e[2]),
    b: j(e[3]),
    a: Tt(e[4]),
    format: r ? "name" : "hex8"
  } : (e = _.hex6.exec(t), e ? {
    r: j(e[1]),
    g: j(e[2]),
    b: j(e[3]),
    format: r ? "name" : "hex"
  } : (e = _.hex4.exec(t), e ? {
    r: j(e[1] + e[1]),
    g: j(e[2] + e[2]),
    b: j(e[3] + e[3]),
    a: Tt(e[4] + e[4]),
    format: r ? "name" : "hex8"
  } : (e = _.hex3.exec(t), e ? {
    r: j(e[1] + e[1]),
    g: j(e[2] + e[2]),
    b: j(e[3] + e[3]),
    format: r ? "name" : "hex"
  } : !1)))))))));
}
function P(t) {
  return !!_.CSS_UNIT.exec(String(t));
}
var Ar = (
  /** @class */
  function() {
    function t(r, e) {
      r === void 0 && (r = ""), e === void 0 && (e = {});
      var n;
      if (r instanceof t)
        return r;
      typeof r == "number" && (r = kr(r)), this.originalInput = r;
      var a = D(r);
      this.originalInput = r, this.r = a.r, this.g = a.g, this.b = a.b, this.a = a.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (n = e.format) !== null && n !== void 0 ? n : a.format, this.gradientType = e.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = a.ok;
    }
    return t.prototype.isDark = function() {
      return this.getBrightness() < 128;
    }, t.prototype.isLight = function() {
      return !this.isDark();
    }, t.prototype.getBrightness = function() {
      var r = this.toRgb();
      return (r.r * 299 + r.g * 587 + r.b * 114) / 1e3;
    }, t.prototype.getLuminance = function() {
      var r = this.toRgb(), e, n, a, i = r.r / 255, s = r.g / 255, c = r.b / 255;
      return i <= 0.03928 ? e = i / 12.92 : e = Math.pow((i + 0.055) / 1.055, 2.4), s <= 0.03928 ? n = s / 12.92 : n = Math.pow((s + 0.055) / 1.055, 2.4), c <= 0.03928 ? a = c / 12.92 : a = Math.pow((c + 0.055) / 1.055, 2.4), 0.2126 * e + 0.7152 * n + 0.0722 * a;
    }, t.prototype.getAlpha = function() {
      return this.a;
    }, t.prototype.setAlpha = function(r) {
      return this.a = fr(r), this.roundA = Math.round(100 * this.a) / 100, this;
    }, t.prototype.isMonochrome = function() {
      var r = this.toHsl().s;
      return r === 0;
    }, t.prototype.toHsv = function() {
      var r = gt(this.r, this.g, this.b);
      return { h: r.h * 360, s: r.s, v: r.v, a: this.a };
    }, t.prototype.toHsvString = function() {
      var r = gt(this.r, this.g, this.b), e = Math.round(r.h * 360), n = Math.round(r.s * 100), a = Math.round(r.v * 100);
      return this.a === 1 ? "hsv(".concat(e, ", ").concat(n, "%, ").concat(a, "%)") : "hsva(".concat(e, ", ").concat(n, "%, ").concat(a, "%, ").concat(this.roundA, ")");
    }, t.prototype.toHsl = function() {
      var r = _t(this.r, this.g, this.b);
      return { h: r.h * 360, s: r.s, l: r.l, a: this.a };
    }, t.prototype.toHslString = function() {
      var r = _t(this.r, this.g, this.b), e = Math.round(r.h * 360), n = Math.round(r.s * 100), a = Math.round(r.l * 100);
      return this.a === 1 ? "hsl(".concat(e, ", ").concat(n, "%, ").concat(a, "%)") : "hsla(".concat(e, ", ").concat(n, "%, ").concat(a, "%, ").concat(this.roundA, ")");
    }, t.prototype.toHex = function(r) {
      return r === void 0 && (r = !1), yt(this.r, this.g, this.b, r);
    }, t.prototype.toHexString = function(r) {
      return r === void 0 && (r = !1), "#" + this.toHex(r);
    }, t.prototype.toHex8 = function(r) {
      return r === void 0 && (r = !1), Mr(this.r, this.g, this.b, this.a, r);
    }, t.prototype.toHex8String = function(r) {
      return r === void 0 && (r = !1), "#" + this.toHex8(r);
    }, t.prototype.toHexShortString = function(r) {
      return r === void 0 && (r = !1), this.a === 1 ? this.toHexString(r) : this.toHex8String(r);
    }, t.prototype.toRgb = function() {
      return {
        r: Math.round(this.r),
        g: Math.round(this.g),
        b: Math.round(this.b),
        a: this.a
      };
    }, t.prototype.toRgbString = function() {
      var r = Math.round(this.r), e = Math.round(this.g), n = Math.round(this.b);
      return this.a === 1 ? "rgb(".concat(r, ", ").concat(e, ", ").concat(n, ")") : "rgba(".concat(r, ", ").concat(e, ", ").concat(n, ", ").concat(this.roundA, ")");
    }, t.prototype.toPercentageRgb = function() {
      var r = function(e) {
        return "".concat(Math.round(m(e, 255) * 100), "%");
      };
      return {
        r: r(this.r),
        g: r(this.g),
        b: r(this.b),
        a: this.a
      };
    }, t.prototype.toPercentageRgbString = function() {
      var r = function(e) {
        return Math.round(m(e, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(r(this.r), "%, ").concat(r(this.g), "%, ").concat(r(this.b), "%)") : "rgba(".concat(r(this.r), "%, ").concat(r(this.g), "%, ").concat(r(this.b), "%, ").concat(this.roundA, ")");
    }, t.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var r = "#" + yt(this.r, this.g, this.b, !1), e = 0, n = Object.entries(bt); e < n.length; e++) {
        var a = n[e], i = a[0], s = a[1];
        if (r === s)
          return i;
      }
      return !1;
    }, t.prototype.toString = function(r) {
      var e = !!r;
      r = r ?? this.format;
      var n = !1, a = this.a < 1 && this.a >= 0, i = !e && a && (r.startsWith("hex") || r === "name");
      return i ? r === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (r === "rgb" && (n = this.toRgbString()), r === "prgb" && (n = this.toPercentageRgbString()), (r === "hex" || r === "hex6") && (n = this.toHexString()), r === "hex3" && (n = this.toHexString(!0)), r === "hex4" && (n = this.toHex8String(!0)), r === "hex8" && (n = this.toHex8String()), r === "name" && (n = this.toName()), r === "hsl" && (n = this.toHslString()), r === "hsv" && (n = this.toHsvString()), n || this.toHexString());
    }, t.prototype.toNumber = function() {
      return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    }, t.prototype.clone = function() {
      return new t(this.toString());
    }, t.prototype.lighten = function(r) {
      r === void 0 && (r = 10);
      var e = this.toHsl();
      return e.l += r / 100, e.l = J(e.l), new t(e);
    }, t.prototype.brighten = function(r) {
      r === void 0 && (r = 10);
      var e = this.toRgb();
      return e.r = Math.max(0, Math.min(255, e.r - Math.round(255 * -(r / 100)))), e.g = Math.max(0, Math.min(255, e.g - Math.round(255 * -(r / 100)))), e.b = Math.max(0, Math.min(255, e.b - Math.round(255 * -(r / 100)))), new t(e);
    }, t.prototype.darken = function(r) {
      r === void 0 && (r = 10);
      var e = this.toHsl();
      return e.l -= r / 100, e.l = J(e.l), new t(e);
    }, t.prototype.tint = function(r) {
      return r === void 0 && (r = 10), this.mix("white", r);
    }, t.prototype.shade = function(r) {
      return r === void 0 && (r = 10), this.mix("black", r);
    }, t.prototype.desaturate = function(r) {
      r === void 0 && (r = 10);
      var e = this.toHsl();
      return e.s -= r / 100, e.s = J(e.s), new t(e);
    }, t.prototype.saturate = function(r) {
      r === void 0 && (r = 10);
      var e = this.toHsl();
      return e.s += r / 100, e.s = J(e.s), new t(e);
    }, t.prototype.greyscale = function() {
      return this.desaturate(100);
    }, t.prototype.spin = function(r) {
      var e = this.toHsl(), n = (e.h + r) % 360;
      return e.h = n < 0 ? 360 + n : n, new t(e);
    }, t.prototype.mix = function(r, e) {
      e === void 0 && (e = 50);
      var n = this.toRgb(), a = new t(r).toRgb(), i = e / 100, s = {
        r: (a.r - n.r) * i + n.r,
        g: (a.g - n.g) * i + n.g,
        b: (a.b - n.b) * i + n.b,
        a: (a.a - n.a) * i + n.a
      };
      return new t(s);
    }, t.prototype.analogous = function(r, e) {
      r === void 0 && (r = 6), e === void 0 && (e = 30);
      var n = this.toHsl(), a = 360 / e, i = [this];
      for (n.h = (n.h - (a * r >> 1) + 720) % 360; --r; )
        n.h = (n.h + a) % 360, i.push(new t(n));
      return i;
    }, t.prototype.complement = function() {
      var r = this.toHsl();
      return r.h = (r.h + 180) % 360, new t(r);
    }, t.prototype.monochromatic = function(r) {
      r === void 0 && (r = 6);
      for (var e = this.toHsv(), n = e.h, a = e.s, i = e.v, s = [], c = 1 / r; r--; )
        s.push(new t({ h: n, s: a, v: i })), i = (i + c) % 1;
      return s;
    }, t.prototype.splitcomplement = function() {
      var r = this.toHsl(), e = r.h;
      return [
        this,
        new t({ h: (e + 72) % 360, s: r.s, l: r.l }),
        new t({ h: (e + 216) % 360, s: r.s, l: r.l })
      ];
    }, t.prototype.onBackground = function(r) {
      var e = this.toRgb(), n = new t(r).toRgb(), a = e.a + n.a * (1 - e.a);
      return new t({
        r: (e.r * e.a + n.r * n.a * (1 - e.a)) / a,
        g: (e.g * e.a + n.g * n.a * (1 - e.a)) / a,
        b: (e.b * e.a + n.b * n.a * (1 - e.a)) / a,
        a
      });
    }, t.prototype.triad = function() {
      return this.polyad(3);
    }, t.prototype.tetrad = function() {
      return this.polyad(4);
    }, t.prototype.polyad = function(r) {
      for (var e = this.toHsl(), n = e.h, a = [this], i = 360 / r, s = 1; s < r; s++)
        a.push(new t({ h: (n + s * i) % 360, s: e.s, l: e.l }));
      return a;
    }, t.prototype.equals = function(r) {
      return this.toRgbString() === new t(r).toRgbString();
    }, t;
  }()
);
function te(t, r) {
  return t === void 0 && (t = ""), r === void 0 && (r = {}), new Ar(t, r);
}
var K = 2, At = 0.16, Rr = 0.05, Er = 0.05, Hr = 0.15, cr = 5, hr = 4, Pr = [{
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
function Rt(t) {
  var r = t.r, e = t.g, n = t.b, a = gt(r, e, n);
  return {
    h: a.h * 360,
    s: a.s,
    v: a.v
  };
}
function Q(t) {
  var r = t.r, e = t.g, n = t.b;
  return "#".concat(yt(r, e, n, !1));
}
function Fr(t, r, e) {
  var n = e / 100, a = {
    r: (r.r - t.r) * n + t.r,
    g: (r.g - t.g) * n + t.g,
    b: (r.b - t.b) * n + t.b
  };
  return a;
}
function Et(t, r, e) {
  var n;
  return Math.round(t.h) >= 60 && Math.round(t.h) <= 240 ? n = e ? Math.round(t.h) - K * r : Math.round(t.h) + K * r : n = e ? Math.round(t.h) + K * r : Math.round(t.h) - K * r, n < 0 ? n += 360 : n >= 360 && (n -= 360), n;
}
function Ht(t, r, e) {
  if (t.h === 0 && t.s === 0)
    return t.s;
  var n;
  return e ? n = t.s - At * r : r === hr ? n = t.s + At : n = t.s + Rr * r, n > 1 && (n = 1), e && r === cr && n > 0.1 && (n = 0.1), n < 0.06 && (n = 0.06), Number(n.toFixed(2));
}
function Pt(t, r, e) {
  var n;
  return e ? n = t.v + Er * r : n = t.v - Hr * r, n > 1 && (n = 1), Number(n.toFixed(2));
}
function mt(t) {
  for (var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, e = [], n = D(t), a = cr; a > 0; a -= 1) {
    var i = Rt(n), s = Q(D({
      h: Et(i, a, !0),
      s: Ht(i, a, !0),
      v: Pt(i, a, !0)
    }));
    e.push(s);
  }
  e.push(Q(n));
  for (var c = 1; c <= hr; c += 1) {
    var h = Rt(n), g = Q(D({
      h: Et(h, c),
      s: Ht(h, c),
      v: Pt(h, c)
    }));
    e.push(g);
  }
  return r.theme === "dark" ? Pr.map(function(y) {
    var d = y.index, x = y.opacity, R = Q(Fr(D(r.backgroundColor || "#141414"), D(e[d]), x * 100));
    return R;
  }) : e;
}
var tt = {
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
Object.keys(tt).forEach(function(t) {
  w[t] = mt(tt[t]), w[t].primary = w[t][5], rt[t] = mt(tt[t], {
    theme: "dark",
    backgroundColor: "#141414"
  }), rt[t].primary = rt[t][5];
});
var Lr = w.red, Nr = w.volcano, Ir = w.gold, Gr = w.orange, qr = w.yellow, Cr = w.lime, Br = w.green, Dr = w.cyan, Vr = w.blue, Wr = w.geekblue, $r = w.purple, Yr = w.magenta, Ur = w.grey;
const re = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  blue: Vr,
  cyan: Dr,
  geekblue: Wr,
  generate: mt,
  gold: Ir,
  green: Br,
  grey: Ur,
  lime: Cr,
  magenta: Yr,
  orange: Gr,
  presetDarkPalettes: rt,
  presetPalettes: w,
  presetPrimaryColors: tt,
  purple: $r,
  red: Lr,
  volcano: Nr,
  yellow: qr
}, Symbol.toStringTag, { value: "Module" }));
var pt = { exports: {} }, Ft;
function zr() {
  return Ft || (Ft = 1, function(t) {
    var r = dr.default;
    function e() {
      t.exports = e = function() {
        return n;
      }, t.exports.__esModule = !0, t.exports.default = t.exports;
      var n = {}, a = Object.prototype, i = a.hasOwnProperty, s = Object.defineProperty || function(f, o, u) {
        f[o] = u.value;
      }, c = typeof Symbol == "function" ? Symbol : {}, h = c.iterator || "@@iterator", g = c.asyncIterator || "@@asyncIterator", y = c.toStringTag || "@@toStringTag";
      function d(f, o, u) {
        return Object.defineProperty(f, o, {
          value: u,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }), f[o];
      }
      try {
        d({}, "");
      } catch {
        d = function(u, l, v) {
          return u[l] = v;
        };
      }
      function x(f, o, u, l) {
        var v = o && o.prototype instanceof at ? o : at, p = Object.create(v.prototype), b = new ft(l || []);
        return s(p, "_invoke", {
          value: lr(f, u, b)
        }), p;
      }
      function R(f, o, u) {
        try {
          return {
            type: "normal",
            arg: f.call(o, u)
          };
        } catch (l) {
          return {
            type: "throw",
            arg: l
          };
        }
      }
      n.wrap = x;
      var E = {};
      function at() {
      }
      function Y() {
      }
      function I() {
      }
      var it = {};
      d(it, h, function() {
        return this;
      });
      var ot = Object.getPrototypeOf, U = ot && ot(ot(st([])));
      U && U !== a && i.call(U, h) && (it = U);
      var B = I.prototype = at.prototype = Object.create(it);
      function xt(f) {
        ["next", "throw", "return"].forEach(function(o) {
          d(f, o, function(u) {
            return this._invoke(o, u);
          });
        });
      }
      function z(f, o) {
        function u(v, p, b, S) {
          var M = R(f[v], f, p);
          if (M.type !== "throw") {
            var G = M.arg, F = G.value;
            return F && r(F) == "object" && i.call(F, "__await") ? o.resolve(F.__await).then(function(q) {
              u("next", q, b, S);
            }, function(q) {
              u("throw", q, b, S);
            }) : o.resolve(F).then(function(q) {
              G.value = q, b(G);
            }, function(q) {
              return u("throw", q, b, S);
            });
          }
          S(M.arg);
        }
        var l;
        s(this, "_invoke", {
          value: function(p, b) {
            function S() {
              return new o(function(M, G) {
                u(p, b, M, G);
              });
            }
            return l = l ? l.then(S, S) : S();
          }
        });
      }
      function lr(f, o, u) {
        var l = "suspendedStart";
        return function(v, p) {
          if (l === "executing")
            throw new Error("Generator is already running");
          if (l === "completed") {
            if (v === "throw")
              throw p;
            return St();
          }
          for (u.method = v, u.arg = p; ; ) {
            var b = u.delegate;
            if (b) {
              var S = Ot(b, u);
              if (S) {
                if (S === E)
                  continue;
                return S;
              }
            }
            if (u.method === "next")
              u.sent = u._sent = u.arg;
            else if (u.method === "throw") {
              if (l === "suspendedStart")
                throw l = "completed", u.arg;
              u.dispatchException(u.arg);
            } else
              u.method === "return" && u.abrupt("return", u.arg);
            l = "executing";
            var M = R(f, o, u);
            if (M.type === "normal") {
              if (l = u.done ? "completed" : "suspendedYield", M.arg === E)
                continue;
              return {
                value: M.arg,
                done: u.done
              };
            }
            M.type === "throw" && (l = "completed", u.method = "throw", u.arg = M.arg);
          }
        };
      }
      function Ot(f, o) {
        var u = o.method, l = f.iterator[u];
        if (l === void 0)
          return o.delegate = null, u === "throw" && f.iterator.return && (o.method = "return", o.arg = void 0, Ot(f, o), o.method === "throw") || u !== "return" && (o.method = "throw", o.arg = new TypeError("The iterator does not provide a '" + u + "' method")), E;
        var v = R(l, f.iterator, o.arg);
        if (v.type === "throw")
          return o.method = "throw", o.arg = v.arg, o.delegate = null, E;
        var p = v.arg;
        return p ? p.done ? (o[f.resultName] = p.value, o.next = f.nextLoc, o.method !== "return" && (o.method = "next", o.arg = void 0), o.delegate = null, E) : p : (o.method = "throw", o.arg = new TypeError("iterator result is not an object"), o.delegate = null, E);
      }
      function pr(f) {
        var o = {
          tryLoc: f[0]
        };
        1 in f && (o.catchLoc = f[1]), 2 in f && (o.finallyLoc = f[2], o.afterLoc = f[3]), this.tryEntries.push(o);
      }
      function ut(f) {
        var o = f.completion || {};
        o.type = "normal", delete o.arg, f.completion = o;
      }
      function ft(f) {
        this.tryEntries = [{
          tryLoc: "root"
        }], f.forEach(pr, this), this.reset(!0);
      }
      function st(f) {
        if (f) {
          var o = f[h];
          if (o)
            return o.call(f);
          if (typeof f.next == "function")
            return f;
          if (!isNaN(f.length)) {
            var u = -1, l = function v() {
              for (; ++u < f.length; )
                if (i.call(f, u))
                  return v.value = f[u], v.done = !1, v;
              return v.value = void 0, v.done = !0, v;
            };
            return l.next = l;
          }
        }
        return {
          next: St
        };
      }
      function St() {
        return {
          value: void 0,
          done: !0
        };
      }
      return Y.prototype = I, s(B, "constructor", {
        value: I,
        configurable: !0
      }), s(I, "constructor", {
        value: Y,
        configurable: !0
      }), Y.displayName = d(I, y, "GeneratorFunction"), n.isGeneratorFunction = function(f) {
        var o = typeof f == "function" && f.constructor;
        return !!o && (o === Y || (o.displayName || o.name) === "GeneratorFunction");
      }, n.mark = function(f) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(f, I) : (f.__proto__ = I, d(f, y, "GeneratorFunction")), f.prototype = Object.create(B), f;
      }, n.awrap = function(f) {
        return {
          __await: f
        };
      }, xt(z.prototype), d(z.prototype, g, function() {
        return this;
      }), n.AsyncIterator = z, n.async = function(f, o, u, l, v) {
        v === void 0 && (v = Promise);
        var p = new z(x(f, o, u, l), v);
        return n.isGeneratorFunction(o) ? p : p.next().then(function(b) {
          return b.done ? b.value : p.next();
        });
      }, xt(B), d(B, y, "Generator"), d(B, h, function() {
        return this;
      }), d(B, "toString", function() {
        return "[object Generator]";
      }), n.keys = function(f) {
        var o = Object(f), u = [];
        for (var l in o)
          u.push(l);
        return u.reverse(), function v() {
          for (; u.length; ) {
            var p = u.pop();
            if (p in o)
              return v.value = p, v.done = !1, v;
          }
          return v.done = !0, v;
        };
      }, n.values = st, ft.prototype = {
        constructor: ft,
        reset: function(o) {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(ut), !o)
            for (var u in this)
              u.charAt(0) === "t" && i.call(this, u) && !isNaN(+u.slice(1)) && (this[u] = void 0);
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
          var u = this;
          function l(G, F) {
            return b.type = "throw", b.arg = o, u.next = G, F && (u.method = "next", u.arg = void 0), !!F;
          }
          for (var v = this.tryEntries.length - 1; v >= 0; --v) {
            var p = this.tryEntries[v], b = p.completion;
            if (p.tryLoc === "root")
              return l("end");
            if (p.tryLoc <= this.prev) {
              var S = i.call(p, "catchLoc"), M = i.call(p, "finallyLoc");
              if (S && M) {
                if (this.prev < p.catchLoc)
                  return l(p.catchLoc, !0);
                if (this.prev < p.finallyLoc)
                  return l(p.finallyLoc);
              } else if (S) {
                if (this.prev < p.catchLoc)
                  return l(p.catchLoc, !0);
              } else {
                if (!M)
                  throw new Error("try statement without catch or finally");
                if (this.prev < p.finallyLoc)
                  return l(p.finallyLoc);
              }
            }
          }
        },
        abrupt: function(o, u) {
          for (var l = this.tryEntries.length - 1; l >= 0; --l) {
            var v = this.tryEntries[l];
            if (v.tryLoc <= this.prev && i.call(v, "finallyLoc") && this.prev < v.finallyLoc) {
              var p = v;
              break;
            }
          }
          p && (o === "break" || o === "continue") && p.tryLoc <= u && u <= p.finallyLoc && (p = null);
          var b = p ? p.completion : {};
          return b.type = o, b.arg = u, p ? (this.method = "next", this.next = p.finallyLoc, E) : this.complete(b);
        },
        complete: function(o, u) {
          if (o.type === "throw")
            throw o.arg;
          return o.type === "break" || o.type === "continue" ? this.next = o.arg : o.type === "return" ? (this.rval = this.arg = o.arg, this.method = "return", this.next = "end") : o.type === "normal" && u && (this.next = u), E;
        },
        finish: function(o) {
          for (var u = this.tryEntries.length - 1; u >= 0; --u) {
            var l = this.tryEntries[u];
            if (l.finallyLoc === o)
              return this.complete(l.completion, l.afterLoc), ut(l), E;
          }
        },
        catch: function(o) {
          for (var u = this.tryEntries.length - 1; u >= 0; --u) {
            var l = this.tryEntries[u];
            if (l.tryLoc === o) {
              var v = l.completion;
              if (v.type === "throw") {
                var p = v.arg;
                ut(l);
              }
              return p;
            }
          }
          throw new Error("illegal catch attempt");
        },
        delegateYield: function(o, u, l) {
          return this.delegate = {
            iterator: st(o),
            resultName: u,
            nextLoc: l
          }, this.method === "next" && (this.arg = void 0), E;
        }
      }, n;
    }
    t.exports = e, t.exports.__esModule = !0, t.exports.default = t.exports;
  }(pt)), pt.exports;
}
var dt, Lt;
function ee() {
  if (Lt)
    return dt;
  Lt = 1;
  var t = zr()();
  dt = t;
  try {
    regeneratorRuntime = t;
  } catch {
    typeof globalThis == "object" ? globalThis.regeneratorRuntime = t : Function("r", "regeneratorRuntime = r")(t);
  }
  return dt;
}
export {
  Ar as T,
  dr as _,
  Kr as a,
  mt as b,
  Jr as c,
  Xr as d,
  Z as e,
  sr as f,
  Zr as g,
  Tt as h,
  Or as i,
  Sr as j,
  D as k,
  P as l,
  kr as m,
  bt as n,
  yt as o,
  j as p,
  _t as q,
  ee as r,
  gt as s,
  te as t,
  xr as u,
  Qr as v,
  Mr as w,
  Tr as x,
  re as y,
  ur as z
};
