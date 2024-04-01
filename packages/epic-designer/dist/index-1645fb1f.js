import { c as _, a as bt } from "./_commonjsHelpers-c5d32002.js";
import { r as G } from "./_vue_commonjs-external-eb7fec7f.js";
import { c as Ye, a as ve, _ as K, b as Fe, l as Ue, d as yt, r as Je, u as _t, e as wt } from "./index-815197f3.js";
function Pt(t, e) {
  for (var r = 0; r < e.length; r++) {
    const n = e[r];
    if (typeof n != "string" && !Array.isArray(n)) {
      for (const i in n)
        if (i !== "default" && !(i in t)) {
          const o = Object.getOwnPropertyDescriptor(n, i);
          o && Object.defineProperty(t, i, o.get ? o : {
            enumerable: !0,
            get: () => n[i]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }));
}
var Xe = {}, Ze = {}, Me = {}, ke = {}, xe = {}, qe = {};
Object.defineProperty(qe, "__esModule", { value: !0 });
qe.default = {
  feedbackPadding: "4px 0 0 2px",
  feedbackHeightSmall: "24px",
  feedbackHeightMedium: "24px",
  feedbackHeightLarge: "26px",
  feedbackFontSizeSmall: "13px",
  feedbackFontSizeMedium: "14px",
  feedbackFontSizeLarge: "14px",
  labelFontSizeLeftSmall: "14px",
  labelFontSizeLeftMedium: "14px",
  labelFontSizeLeftLarge: "15px",
  labelFontSizeTopSmall: "13px",
  labelFontSizeTopMedium: "14px",
  labelFontSizeTopLarge: "14px",
  labelHeightSmall: "24px",
  labelHeightMedium: "26px",
  labelHeightLarge: "28px",
  labelPaddingVertical: "0 0 6px 2px",
  labelPaddingHorizontal: "0 12px 0 0",
  labelTextAlignVertical: "left",
  labelTextAlignHorizontal: "right",
  labelFontWeight: "400"
};
(function(t) {
  var e = _ && _.__importDefault || function(a) {
    return a && a.__esModule ? a : { default: a };
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), t.self = void 0;
  const r = Ye, n = e(qe), i = (a) => {
    const { heightSmall: f, heightMedium: s, heightLarge: l, textColor1: d, errorColor: u, warningColor: g, lineHeight: h, textColor3: P } = a;
    return Object.assign(Object.assign({}, n.default), { blankHeightSmall: f, blankHeightMedium: s, blankHeightLarge: l, lineHeight: h, labelTextColor: d, asteriskColor: u, feedbackTextColorError: u, feedbackTextColorWarning: g, feedbackTextColor: P });
  };
  t.self = i;
  const o = {
    name: "Form",
    common: r.commonLight,
    self: t.self
  };
  t.default = o;
})(xe);
Object.defineProperty(ke, "__esModule", { value: !0 });
const It = Ye, Ot = xe, jt = {
  name: "Form",
  common: It.commonDark,
  self: Ot.self
};
ke.default = jt;
(function(t) {
  var e = _ && _.__importDefault || function(i) {
    return i && i.__esModule ? i : { default: i };
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), t.formLight = t.formDark = void 0;
  var r = ke;
  Object.defineProperty(t, "formDark", { enumerable: !0, get: function() {
    return e(r).default;
  } });
  var n = xe;
  Object.defineProperty(t, "formLight", { enumerable: !0, get: function() {
    return e(n).default;
  } });
})(Me);
var Ae = {};
Object.defineProperty(Ae, "__esModule", {
  value: !0
});
const me = ve;
Ae.default = (0, me.cB)("form", [(0, me.cM)("inline", `
 width: 100%;
 display: inline-flex;
 align-items: flex-start;
 align-content: space-around;
 `, [(0, me.cB)("form-item", {
  width: "auto",
  marginRight: "18px"
}, [(0, me.c)("&:last-child", {
  marginRight: 0
})])])]);
var Y = {};
Object.defineProperty(Y, "__esModule", { value: !0 });
Y.formItemInstsInjectionKey = Y.formInjectionKey = void 0;
const Qe = K;
Y.formInjectionKey = (0, Qe.createInjectionKey)("n-form");
Y.formItemInstsInjectionKey = (0, Qe.createInjectionKey)("n-form-item-insts");
(function(t) {
  var e = _ && _.__awaiter || function(l, d, u, g) {
    function h(P) {
      return P instanceof u ? P : new u(function(c) {
        c(P);
      });
    }
    return new (u || (u = Promise))(function(P, c) {
      function p(v) {
        try {
          b(g.next(v));
        } catch (y) {
          c(y);
        }
      }
      function m(v) {
        try {
          b(g.throw(v));
        } catch (y) {
          c(y);
        }
      }
      function b(v) {
        v.done ? P(v.value) : h(v.value).then(p, m);
      }
      b((g = g.apply(l, d || [])).next());
    });
  }, r = _ && _.__importDefault || function(l) {
    return l && l.__esModule ? l : { default: l };
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), t.formProps = void 0;
  const n = G, i = Fe, o = Me, a = r(Ae), f = K, s = Y;
  t.formProps = Object.assign(Object.assign({}, i.useTheme.props), { inline: Boolean, labelWidth: [Number, String], labelAlign: String, labelPlacement: {
    type: String,
    default: "top"
  }, model: {
    type: Object,
    default: () => {
    }
  }, rules: Object, disabled: Boolean, size: String, showRequireMark: {
    type: Boolean,
    default: void 0
  }, requireMarkPlacement: String, showFeedback: {
    type: Boolean,
    default: !0
  }, onSubmit: {
    type: Function,
    default: (l) => {
      l.preventDefault();
    }
  }, showLabel: {
    type: Boolean,
    default: void 0
  }, validateMessages: Object }), t.default = (0, n.defineComponent)({
    name: "Form",
    props: t.formProps,
    setup(l) {
      const { mergedClsPrefixRef: d } = (0, i.useConfig)(l);
      (0, i.useTheme)("Form", "-form", a.default, o.formLight, l, d);
      const u = {}, g = (0, n.ref)(void 0), h = (m) => {
        const b = g.value;
        (b === void 0 || m >= b) && (g.value = m);
      };
      function P(m, b = () => !0) {
        return e(this, void 0, void 0, function* () {
          yield new Promise((v, y) => {
            const O = [];
            for (const R of (0, f.keysOf)(u)) {
              const S = u[R];
              for (const I of S)
                I.path && O.push(I.internalValidate(null, b));
            }
            Promise.all(O).then((R) => {
              if (R.some((S) => !S.valid)) {
                const S = R.filter((I) => I.errors).map((I) => I.errors);
                m && m(S), y(S);
              } else
                m && m(), v();
            });
          });
        });
      }
      function c() {
        for (const m of (0, f.keysOf)(u)) {
          const b = u[m];
          for (const v of b)
            v.restoreValidation();
        }
      }
      return (0, n.provide)(s.formInjectionKey, {
        props: l,
        maxChildLabelWidthRef: g,
        deriveMaxChildLabelWidth: h
      }), (0, n.provide)(s.formItemInstsInjectionKey, { formItems: u }), Object.assign({
        validate: P,
        restoreValidation: c
      }, {
        mergedClsPrefix: d
      });
    },
    render() {
      const { mergedClsPrefix: l } = this;
      return (0, n.h)("form", { class: [
        `${l}-form`,
        this.inline && `${l}-form--inline`
      ], onSubmit: this.onSubmit }, this.$slots);
    }
  });
})(Ze);
var be = {};
function X() {
  return X = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
    }
    return t;
  }, X.apply(this, arguments);
}
function Rt(t, e) {
  t.prototype = Object.create(e.prototype), t.prototype.constructor = t, fe(t, e);
}
function Oe(t) {
  return Oe = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Oe(t);
}
function fe(t, e) {
  return fe = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, fe(t, e);
}
function St() {
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
function he(t, e, r) {
  return St() ? he = Reflect.construct.bind() : he = function(i, o, a) {
    var f = [null];
    f.push.apply(f, o);
    var s = Function.bind.apply(i, f), l = new s();
    return a && fe(l, a.prototype), l;
  }, he.apply(null, arguments);
}
function $t(t) {
  return Function.toString.call(t).indexOf("[native code]") !== -1;
}
function je(t) {
  var e = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return je = function(n) {
    if (n === null || !$t(n))
      return n;
    if (typeof n != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof e < "u") {
      if (e.has(n))
        return e.get(n);
      e.set(n, i);
    }
    function i() {
      return he(n, arguments, Oe(this).constructor);
    }
    return i.prototype = Object.create(n.prototype, {
      constructor: {
        value: i,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), fe(i, n);
  }, je(t);
}
var Ft = /%[sdj%]/g, et = function() {
};
typeof process < "u" && process.env && process.env.NODE_ENV !== "production" && typeof window < "u" && typeof document < "u" && (et = function(e, r) {
  typeof console < "u" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING > "u" && r.every(function(n) {
    return typeof n == "string";
  }) && console.warn(e, r);
});
function Re(t) {
  if (!t || !t.length)
    return null;
  var e = {};
  return t.forEach(function(r) {
    var n = r.field;
    e[n] = e[n] || [], e[n].push(r);
  }), e;
}
function z(t) {
  for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
    r[n - 1] = arguments[n];
  var i = 0, o = r.length;
  if (typeof t == "function")
    return t.apply(null, r);
  if (typeof t == "string") {
    var a = t.replace(Ft, function(f) {
      if (f === "%%")
        return "%";
      if (i >= o)
        return f;
      switch (f) {
        case "%s":
          return String(r[i++]);
        case "%d":
          return Number(r[i++]);
        case "%j":
          try {
            return JSON.stringify(r[i++]);
          } catch {
            return "[Circular]";
          }
          break;
        default:
          return f;
      }
    });
    return a;
  }
  return t;
}
function Mt(t) {
  return t === "string" || t === "url" || t === "hex" || t === "email" || t === "date" || t === "pattern";
}
function x(t, e) {
  return !!(t == null || e === "array" && Array.isArray(t) && !t.length || Mt(e) && typeof t == "string" && !t);
}
function kt(t, e, r) {
  var n = [], i = 0, o = t.length;
  function a(f) {
    n.push.apply(n, f || []), i++, i === o && r(n);
  }
  t.forEach(function(f) {
    e(f, a);
  });
}
function Ve(t, e, r) {
  var n = 0, i = t.length;
  function o(a) {
    if (a && a.length) {
      r(a);
      return;
    }
    var f = n;
    n = n + 1, f < i ? e(t[f], o) : r([]);
  }
  o([]);
}
function xt(t) {
  var e = [];
  return Object.keys(t).forEach(function(r) {
    e.push.apply(e, t[r] || []);
  }), e;
}
var Te = /* @__PURE__ */ function(t) {
  Rt(e, t);
  function e(r, n) {
    var i;
    return i = t.call(this, "Async Validation Error") || this, i.errors = r, i.fields = n, i;
  }
  return e;
}(/* @__PURE__ */ je(Error));
function qt(t, e, r, n, i) {
  if (e.first) {
    var o = new Promise(function(g, h) {
      var P = function(m) {
        return n(m), m.length ? h(new Te(m, Re(m))) : g(i);
      }, c = xt(t);
      Ve(c, r, P);
    });
    return o.catch(function(g) {
      return g;
    }), o;
  }
  var a = e.firstFields === !0 ? Object.keys(t) : e.firstFields || [], f = Object.keys(t), s = f.length, l = 0, d = [], u = new Promise(function(g, h) {
    var P = function(p) {
      if (d.push.apply(d, p), l++, l === s)
        return n(d), d.length ? h(new Te(d, Re(d))) : g(i);
    };
    f.length || (n(d), g(i)), f.forEach(function(c) {
      var p = t[c];
      a.indexOf(c) !== -1 ? Ve(p, r, P) : kt(p, r, P);
    });
  });
  return u.catch(function(g) {
    return g;
  }), u;
}
function At(t) {
  return !!(t && t.message !== void 0);
}
function Ct(t, e) {
  for (var r = t, n = 0; n < e.length; n++) {
    if (r == null)
      return r;
    r = r[e[n]];
  }
  return r;
}
function Be(t, e) {
  return function(r) {
    var n;
    return t.fullFields ? n = Ct(e, t.fullFields) : n = e[r.field || t.fullField], At(r) ? (r.field = r.field || t.fullField, r.fieldValue = n, r) : {
      message: typeof r == "function" ? r() : r,
      fieldValue: n,
      field: r.field || t.fullField
    };
  };
}
function Ge(t, e) {
  if (e) {
    for (var r in e)
      if (e.hasOwnProperty(r)) {
        var n = e[r];
        typeof n == "object" && typeof t[r] == "object" ? t[r] = X({}, t[r], n) : t[r] = n;
      }
  }
  return t;
}
var tt = function(e, r, n, i, o, a) {
  e.required && (!n.hasOwnProperty(e.field) || x(r, a || e.type)) && i.push(z(o.messages.required, e.fullField));
}, Et = function(e, r, n, i, o) {
  (/^\s+$/.test(r) || r === "") && i.push(z(o.messages.whitespace, e.fullField));
}, ge, Lt = function() {
  if (ge)
    return ge;
  var t = "[a-fA-F\\d:]", e = function(y) {
    return y && y.includeBoundaries ? "(?:(?<=\\s|^)(?=" + t + ")|(?<=" + t + ")(?=\\s|$))" : "";
  }, r = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}", n = "[a-fA-F\\d]{1,4}", i = (`
(?:
(?:` + n + ":){7}(?:" + n + `|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:` + n + ":){6}(?:" + r + "|:" + n + `|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:` + n + ":){5}(?::" + r + "|(?::" + n + `){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:` + n + ":){4}(?:(?::" + n + "){0,1}:" + r + "|(?::" + n + `){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:` + n + ":){3}(?:(?::" + n + "){0,2}:" + r + "|(?::" + n + `){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:` + n + ":){2}(?:(?::" + n + "){0,3}:" + r + "|(?::" + n + `){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:` + n + ":){1}(?:(?::" + n + "){0,4}:" + r + "|(?::" + n + `){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::` + n + "){0,5}:" + r + "|(?::" + n + `){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`).replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim(), o = new RegExp("(?:^" + r + "$)|(?:^" + i + "$)"), a = new RegExp("^" + r + "$"), f = new RegExp("^" + i + "$"), s = function(y) {
    return y && y.exact ? o : new RegExp("(?:" + e(y) + r + e(y) + ")|(?:" + e(y) + i + e(y) + ")", "g");
  };
  s.v4 = function(v) {
    return v && v.exact ? a : new RegExp("" + e(v) + r + e(v), "g");
  }, s.v6 = function(v) {
    return v && v.exact ? f : new RegExp("" + e(v) + i + e(v), "g");
  };
  var l = "(?:(?:[a-z]+:)?//)", d = "(?:\\S+(?::\\S*)?@)?", u = s.v4().source, g = s.v6().source, h = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", P = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", c = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", p = "(?::\\d{2,5})?", m = '(?:[/?#][^\\s"]*)?', b = "(?:" + l + "|www\\.)" + d + "(?:localhost|" + u + "|" + g + "|" + h + P + c + ")" + p + m;
  return ge = new RegExp("(?:^" + b + "$)", "i"), ge;
}, We = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, oe = {
  integer: function(e) {
    return oe.number(e) && parseInt(e, 10) === e;
  },
  float: function(e) {
    return oe.number(e) && !oe.integer(e);
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
    return typeof e == "object" && !oe.array(e);
  },
  method: function(e) {
    return typeof e == "function";
  },
  email: function(e) {
    return typeof e == "string" && e.length <= 320 && !!e.match(We.email);
  },
  url: function(e) {
    return typeof e == "string" && e.length <= 2048 && !!e.match(Lt());
  },
  hex: function(e) {
    return typeof e == "string" && !!e.match(We.hex);
  }
}, Nt = function(e, r, n, i, o) {
  if (e.required && r === void 0) {
    tt(e, r, n, i, o);
    return;
  }
  var a = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], f = e.type;
  a.indexOf(f) > -1 ? oe[f](r) || i.push(z(o.messages.types[f], e.fullField, e.type)) : f && typeof r !== e.type && i.push(z(o.messages.types[f], e.fullField, e.type));
}, zt = function(e, r, n, i, o) {
  var a = typeof e.len == "number", f = typeof e.min == "number", s = typeof e.max == "number", l = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, d = r, u = null, g = typeof r == "number", h = typeof r == "string", P = Array.isArray(r);
  if (g ? u = "number" : h ? u = "string" : P && (u = "array"), !u)
    return !1;
  P && (d = r.length), h && (d = r.replace(l, "_").length), a ? d !== e.len && i.push(z(o.messages[u].len, e.fullField, e.len)) : f && !s && d < e.min ? i.push(z(o.messages[u].min, e.fullField, e.min)) : s && !f && d > e.max ? i.push(z(o.messages[u].max, e.fullField, e.max)) : f && s && (d < e.min || d > e.max) && i.push(z(o.messages[u].range, e.fullField, e.min, e.max));
}, ie = "enum", Dt = function(e, r, n, i, o) {
  e[ie] = Array.isArray(e[ie]) ? e[ie] : [], e[ie].indexOf(r) === -1 && i.push(z(o.messages[ie], e.fullField, e[ie].join(", ")));
}, Kt = function(e, r, n, i, o) {
  if (e.pattern) {
    if (e.pattern instanceof RegExp)
      e.pattern.lastIndex = 0, e.pattern.test(r) || i.push(z(o.messages.pattern.mismatch, e.fullField, r, e.pattern));
    else if (typeof e.pattern == "string") {
      var a = new RegExp(e.pattern);
      a.test(r) || i.push(z(o.messages.pattern.mismatch, e.fullField, r, e.pattern));
    }
  }
}, w = {
  required: tt,
  whitespace: Et,
  type: Nt,
  range: zt,
  enum: Dt,
  pattern: Kt
}, Vt = function(e, r, n, i, o) {
  var a = [], f = e.required || !e.required && i.hasOwnProperty(e.field);
  if (f) {
    if (x(r, "string") && !e.required)
      return n();
    w.required(e, r, i, a, o, "string"), x(r, "string") || (w.type(e, r, i, a, o), w.range(e, r, i, a, o), w.pattern(e, r, i, a, o), e.whitespace === !0 && w.whitespace(e, r, i, a, o));
  }
  n(a);
}, Tt = function(e, r, n, i, o) {
  var a = [], f = e.required || !e.required && i.hasOwnProperty(e.field);
  if (f) {
    if (x(r) && !e.required)
      return n();
    w.required(e, r, i, a, o), r !== void 0 && w.type(e, r, i, a, o);
  }
  n(a);
}, Bt = function(e, r, n, i, o) {
  var a = [], f = e.required || !e.required && i.hasOwnProperty(e.field);
  if (f) {
    if (r === "" && (r = void 0), x(r) && !e.required)
      return n();
    w.required(e, r, i, a, o), r !== void 0 && (w.type(e, r, i, a, o), w.range(e, r, i, a, o));
  }
  n(a);
}, Gt = function(e, r, n, i, o) {
  var a = [], f = e.required || !e.required && i.hasOwnProperty(e.field);
  if (f) {
    if (x(r) && !e.required)
      return n();
    w.required(e, r, i, a, o), r !== void 0 && w.type(e, r, i, a, o);
  }
  n(a);
}, Wt = function(e, r, n, i, o) {
  var a = [], f = e.required || !e.required && i.hasOwnProperty(e.field);
  if (f) {
    if (x(r) && !e.required)
      return n();
    w.required(e, r, i, a, o), x(r) || w.type(e, r, i, a, o);
  }
  n(a);
}, Ht = function(e, r, n, i, o) {
  var a = [], f = e.required || !e.required && i.hasOwnProperty(e.field);
  if (f) {
    if (x(r) && !e.required)
      return n();
    w.required(e, r, i, a, o), r !== void 0 && (w.type(e, r, i, a, o), w.range(e, r, i, a, o));
  }
  n(a);
}, Yt = function(e, r, n, i, o) {
  var a = [], f = e.required || !e.required && i.hasOwnProperty(e.field);
  if (f) {
    if (x(r) && !e.required)
      return n();
    w.required(e, r, i, a, o), r !== void 0 && (w.type(e, r, i, a, o), w.range(e, r, i, a, o));
  }
  n(a);
}, Ut = function(e, r, n, i, o) {
  var a = [], f = e.required || !e.required && i.hasOwnProperty(e.field);
  if (f) {
    if (r == null && !e.required)
      return n();
    w.required(e, r, i, a, o, "array"), r != null && (w.type(e, r, i, a, o), w.range(e, r, i, a, o));
  }
  n(a);
}, Jt = function(e, r, n, i, o) {
  var a = [], f = e.required || !e.required && i.hasOwnProperty(e.field);
  if (f) {
    if (x(r) && !e.required)
      return n();
    w.required(e, r, i, a, o), r !== void 0 && w.type(e, r, i, a, o);
  }
  n(a);
}, Xt = "enum", Zt = function(e, r, n, i, o) {
  var a = [], f = e.required || !e.required && i.hasOwnProperty(e.field);
  if (f) {
    if (x(r) && !e.required)
      return n();
    w.required(e, r, i, a, o), r !== void 0 && w[Xt](e, r, i, a, o);
  }
  n(a);
}, Qt = function(e, r, n, i, o) {
  var a = [], f = e.required || !e.required && i.hasOwnProperty(e.field);
  if (f) {
    if (x(r, "string") && !e.required)
      return n();
    w.required(e, r, i, a, o), x(r, "string") || w.pattern(e, r, i, a, o);
  }
  n(a);
}, er = function(e, r, n, i, o) {
  var a = [], f = e.required || !e.required && i.hasOwnProperty(e.field);
  if (f) {
    if (x(r, "date") && !e.required)
      return n();
    if (w.required(e, r, i, a, o), !x(r, "date")) {
      var s;
      r instanceof Date ? s = r : s = new Date(r), w.type(e, s, i, a, o), s && w.range(e, s.getTime(), i, a, o);
    }
  }
  n(a);
}, tr = function(e, r, n, i, o) {
  var a = [], f = Array.isArray(r) ? "array" : typeof r;
  w.required(e, r, i, a, o, f), n(a);
}, Pe = function(e, r, n, i, o) {
  var a = e.type, f = [], s = e.required || !e.required && i.hasOwnProperty(e.field);
  if (s) {
    if (x(r, a) && !e.required)
      return n();
    w.required(e, r, i, f, o, a), x(r, a) || w.type(e, r, i, f, o);
  }
  n(f);
}, rr = function(e, r, n, i, o) {
  var a = [], f = e.required || !e.required && i.hasOwnProperty(e.field);
  if (f) {
    if (x(r) && !e.required)
      return n();
    w.required(e, r, i, a, o);
  }
  n(a);
}, se = {
  string: Vt,
  method: Tt,
  number: Bt,
  boolean: Gt,
  regexp: Wt,
  integer: Ht,
  float: Yt,
  array: Ut,
  object: Jt,
  enum: Zt,
  pattern: Qt,
  date: er,
  url: Pe,
  hex: Pe,
  email: Pe,
  required: tr,
  any: rr
};
function Se() {
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
var $e = Se(), le = /* @__PURE__ */ function() {
  function t(r) {
    this.rules = null, this._messages = $e, this.define(r);
  }
  var e = t.prototype;
  return e.define = function(n) {
    var i = this;
    if (!n)
      throw new Error("Cannot configure a schema with no rules");
    if (typeof n != "object" || Array.isArray(n))
      throw new Error("Rules must be an object");
    this.rules = {}, Object.keys(n).forEach(function(o) {
      var a = n[o];
      i.rules[o] = Array.isArray(a) ? a : [a];
    });
  }, e.messages = function(n) {
    return n && (this._messages = Ge(Se(), n)), this._messages;
  }, e.validate = function(n, i, o) {
    var a = this;
    i === void 0 && (i = {}), o === void 0 && (o = function() {
    });
    var f = n, s = i, l = o;
    if (typeof s == "function" && (l = s, s = {}), !this.rules || Object.keys(this.rules).length === 0)
      return l && l(null, f), Promise.resolve(f);
    function d(c) {
      var p = [], m = {};
      function b(y) {
        if (Array.isArray(y)) {
          var O;
          p = (O = p).concat.apply(O, y);
        } else
          p.push(y);
      }
      for (var v = 0; v < c.length; v++)
        b(c[v]);
      p.length ? (m = Re(p), l(p, m)) : l(null, f);
    }
    if (s.messages) {
      var u = this.messages();
      u === $e && (u = Se()), Ge(u, s.messages), s.messages = u;
    } else
      s.messages = this.messages();
    var g = {}, h = s.keys || Object.keys(this.rules);
    h.forEach(function(c) {
      var p = a.rules[c], m = f[c];
      p.forEach(function(b) {
        var v = b;
        typeof v.transform == "function" && (f === n && (f = X({}, f)), m = f[c] = v.transform(m)), typeof v == "function" ? v = {
          validator: v
        } : v = X({}, v), v.validator = a.getValidationMethod(v), v.validator && (v.field = c, v.fullField = v.fullField || c, v.type = a.getType(v), g[c] = g[c] || [], g[c].push({
          rule: v,
          value: m,
          source: f,
          field: c
        }));
      });
    });
    var P = {};
    return qt(g, s, function(c, p) {
      var m = c.rule, b = (m.type === "object" || m.type === "array") && (typeof m.fields == "object" || typeof m.defaultField == "object");
      b = b && (m.required || !m.required && c.value), m.field = c.field;
      function v(R, S) {
        return X({}, S, {
          fullField: m.fullField + "." + R,
          fullFields: m.fullFields ? [].concat(m.fullFields, [R]) : [R]
        });
      }
      function y(R) {
        R === void 0 && (R = []);
        var S = Array.isArray(R) ? R : [R];
        !s.suppressWarning && S.length && t.warning("async-validator:", S), S.length && m.message !== void 0 && (S = [].concat(m.message));
        var I = S.map(Be(m, f));
        if (s.first && I.length)
          return P[m.field] = 1, p(I);
        if (!b)
          p(I);
        else {
          if (m.required && !c.value)
            return m.message !== void 0 ? I = [].concat(m.message).map(Be(m, f)) : s.error && (I = [s.error(m, z(s.messages.required, m.field))]), p(I);
          var $ = {};
          m.defaultField && Object.keys(c.value).map(function(A) {
            $[A] = m.defaultField;
          }), $ = X({}, $, c.rule.fields);
          var q = {};
          Object.keys($).forEach(function(A) {
            var C = $[A], _e = Array.isArray(C) ? C : [C];
            q[A] = _e.map(v.bind(null, A));
          });
          var V = new t(q);
          V.messages(s.messages), c.rule.options && (c.rule.options.messages = s.messages, c.rule.options.error = s.error), V.validate(c.value, c.rule.options || s, function(A) {
            var C = [];
            I && I.length && C.push.apply(C, I), A && A.length && C.push.apply(C, A), p(C.length ? C : null);
          });
        }
      }
      var O;
      if (m.asyncValidator)
        O = m.asyncValidator(m, c.value, y, c.source, s);
      else if (m.validator) {
        try {
          O = m.validator(m, c.value, y, c.source, s);
        } catch (R) {
          console.error == null || console.error(R), s.suppressValidatorError || setTimeout(function() {
            throw R;
          }, 0), y(R.message);
        }
        O === !0 ? y() : O === !1 ? y(typeof m.message == "function" ? m.message(m.fullField || m.field) : m.message || (m.fullField || m.field) + " fails") : O instanceof Array ? y(O) : O instanceof Error && y(O.message);
      }
      O && O.then && O.then(function() {
        return y();
      }, function(R) {
        return y(R);
      });
    }, function(c) {
      d(c);
    }, f);
  }, e.getType = function(n) {
    if (n.type === void 0 && n.pattern instanceof RegExp && (n.type = "pattern"), typeof n.validator != "function" && n.type && !se.hasOwnProperty(n.type))
      throw new Error(z("Unknown rule type %s", n.type));
    return n.type || "string";
  }, e.getValidationMethod = function(n) {
    if (typeof n.validator == "function")
      return n.validator;
    var i = Object.keys(n), o = i.indexOf("message");
    return o !== -1 && i.splice(o, 1), i.length === 1 && i[0] === "required" ? se.required : se[this.getType(n)] || void 0;
  }, t;
}();
le.register = function(e, r) {
  if (typeof r != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  se[e] = r;
};
le.warning = et;
le.messages = $e;
le.validators = se;
const nr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: le
}, Symbol.toStringTag, { value: "Module" })), ir = /* @__PURE__ */ bt(nr);
var H = {};
Object.defineProperty(H, "__esModule", { value: !0 });
H.formItemRule = H.formItemMisc = H.formItemSize = void 0;
const k = G, ar = Ue, Ce = Y, Ie = K;
function or(t) {
  const e = (0, k.inject)(Ce.formInjectionKey, null);
  return {
    mergedSize: (0, k.computed)(() => t.size !== void 0 ? t.size : (e == null ? void 0 : e.props.size) !== void 0 ? e.props.size : "medium")
  };
}
H.formItemSize = or;
function sr(t) {
  const e = (0, k.inject)(Ce.formInjectionKey, null), r = (0, k.computed)(() => {
    const { labelPlacement: h } = t;
    return h !== void 0 ? h : e != null && e.props.labelPlacement ? e.props.labelPlacement : "top";
  }), n = (0, k.computed)(() => r.value === "left" && (t.labelWidth === "auto" || (e == null ? void 0 : e.props.labelWidth) === "auto")), i = (0, k.computed)(() => {
    if (r.value === "top")
      return;
    const { labelWidth: h } = t;
    if (h !== void 0 && h !== "auto")
      return (0, Ie.formatLength)(h);
    if (n.value) {
      const P = e == null ? void 0 : e.maxChildLabelWidthRef.value;
      return P !== void 0 ? (0, Ie.formatLength)(P) : void 0;
    }
    if ((e == null ? void 0 : e.props.labelWidth) !== void 0)
      return (0, Ie.formatLength)(e.props.labelWidth);
  }), o = (0, k.computed)(() => {
    const { labelAlign: h } = t;
    if (h)
      return h;
    if (e != null && e.props.labelAlign)
      return e.props.labelAlign;
  }), a = (0, k.computed)(() => {
    var h;
    return [
      (h = t.labelProps) === null || h === void 0 ? void 0 : h.style,
      t.labelStyle,
      {
        width: i.value
      }
    ];
  }), f = (0, k.computed)(() => {
    const { showRequireMark: h } = t;
    return h !== void 0 ? h : e == null ? void 0 : e.props.showRequireMark;
  }), s = (0, k.computed)(() => {
    const { requireMarkPlacement: h } = t;
    return h !== void 0 ? h : (e == null ? void 0 : e.props.requireMarkPlacement) || "right";
  }), l = (0, k.ref)(!1), d = (0, k.computed)(() => {
    const { validationStatus: h } = t;
    if (h !== void 0)
      return h;
    if (l.value)
      return "error";
  }), u = (0, k.computed)(() => {
    const { showFeedback: h } = t;
    return h !== void 0 ? h : (e == null ? void 0 : e.props.showFeedback) !== void 0 ? e.props.showFeedback : !0;
  }), g = (0, k.computed)(() => {
    const { showLabel: h } = t;
    return h !== void 0 ? h : (e == null ? void 0 : e.props.showLabel) !== void 0 ? e.props.showLabel : !0;
  });
  return {
    validationErrored: l,
    mergedLabelStyle: a,
    mergedLabelPlacement: r,
    mergedLabelAlign: o,
    mergedShowRequireMark: f,
    mergedRequireMarkPlacement: s,
    mergedValidationStatus: d,
    mergedShowFeedback: u,
    mergedShowLabel: g,
    isAutoLabelWidth: n
  };
}
H.formItemMisc = sr;
function fr(t) {
  const e = (0, k.inject)(Ce.formInjectionKey, null), r = (0, k.computed)(() => {
    const { rulePath: a } = t;
    if (a !== void 0)
      return a;
    const { path: f } = t;
    if (f !== void 0)
      return f;
  }), n = (0, k.computed)(() => {
    const a = [], { rule: f } = t;
    if (f !== void 0 && (Array.isArray(f) ? a.push(...f) : a.push(f)), e) {
      const { rules: s } = e.props, { value: l } = r;
      if (s !== void 0 && l !== void 0) {
        const d = (0, ar.get)(s, l);
        d !== void 0 && (Array.isArray(d) ? a.push(...d) : a.push(d));
      }
    }
    return a;
  }), i = (0, k.computed)(() => n.value.some((a) => a.required)), o = (0, k.computed)(() => i.value || t.required);
  return {
    mergedRules: n,
    mergedRequired: o
  };
}
H.formItemRule = fr;
var Ee = {}, ye = {}, lr = _ && _.__importDefault || function(t) {
  return t && t.__esModule ? t : {
    default: t
  };
};
Object.defineProperty(ye, "__esModule", {
  value: !0
});
ye.fadeDownTransition = void 0;
const pe = ve, ur = lr(yt), {
  cubicBezierEaseInOut: He
} = ur.default;
function dr({
  name: t = "fade-down",
  fromOffset: e = "-4px",
  enterDuration: r = ".3s",
  leaveDuration: n = ".3s",
  enterCubicBezier: i = He,
  leaveCubicBezier: o = He
} = {}) {
  return [(0, pe.c)(`&.${t}-transition-enter-from, &.${t}-transition-leave-to`, {
    opacity: 0,
    transform: `translateY(${e})`
  }), (0, pe.c)(`&.${t}-transition-enter-to, &.${t}-transition-leave-from`, {
    opacity: 1,
    transform: "translateY(0)"
  }), (0, pe.c)(`&.${t}-transition-leave-active`, {
    transition: `opacity ${n} ${o}, transform ${n} ${o}`
  }), (0, pe.c)(`&.${t}-transition-enter-active`, {
    transition: `opacity ${r} ${i}, transform ${r} ${i}`
  })];
}
ye.fadeDownTransition = dr;
Object.defineProperty(Ee, "__esModule", {
  value: !0
});
const F = ve, cr = ye;
Ee.default = (0, F.cB)("form-item", `
 display: grid;
 line-height: var(--n-line-height);
`, [(0, F.cB)("form-item-label", `
 grid-area: label;
 align-items: center;
 line-height: 1.25;
 text-align: var(--n-label-text-align);
 font-size: var(--n-label-font-size);
 min-height: var(--n-label-height);
 padding: var(--n-label-padding);
 color: var(--n-label-text-color);
 transition: color .3s var(--n-bezier);
 box-sizing: border-box;
 font-weight: var(--n-label-font-weight);
 `, [(0, F.cE)("asterisk", `
 white-space: nowrap;
 user-select: none;
 -webkit-user-select: none;
 color: var(--n-asterisk-color);
 transition: color .3s var(--n-bezier);
 `), (0, F.cE)("asterisk-placeholder", `
 grid-area: mark;
 user-select: none;
 -webkit-user-select: none;
 visibility: hidden; 
 `)]), (0, F.cB)("form-item-blank", `
 grid-area: blank;
 min-height: var(--n-blank-height);
 `), (0, F.cM)("auto-label-width", [(0, F.cB)("form-item-label", "white-space: nowrap;")]), (0, F.cM)("left-labelled", `
 grid-template-areas:
 "label blank"
 "label feedback";
 grid-template-columns: auto minmax(0, 1fr);
 grid-template-rows: auto 1fr;
 align-items: start;
 `, [(0, F.cB)("form-item-label", `
 display: grid;
 grid-template-columns: 1fr auto;
 min-height: var(--n-blank-height);
 height: auto;
 box-sizing: border-box;
 flex-shrink: 0;
 flex-grow: 0;
 `, [(0, F.cM)("reverse-columns-space", `
 grid-template-columns: auto 1fr;
 `), (0, F.cM)("left-mark", `
 grid-template-areas:
 "mark text"
 ". text";
 `), (0, F.cM)("right-mark", `
 grid-template-areas: 
 "text mark"
 "text .";
 `), (0, F.cM)("right-hanging-mark", `
 grid-template-areas: 
 "text mark"
 "text .";
 `), (0, F.cE)("text", `
 grid-area: text; 
 `), (0, F.cE)("asterisk", `
 grid-area: mark; 
 align-self: end;
 `)])]), (0, F.cM)("top-labelled", `
 grid-template-areas:
 "label"
 "blank"
 "feedback";
 grid-template-rows: minmax(var(--n-label-height), auto) 1fr;
 grid-template-columns: minmax(0, 100%);
 `, [(0, F.cM)("no-label", `
 grid-template-areas:
 "blank"
 "feedback";
 grid-template-rows: 1fr;
 `), (0, F.cB)("form-item-label", `
 display: flex;
 align-items: flex-start;
 justify-content: var(--n-label-text-align);
 `)]), (0, F.cB)("form-item-blank", `
 box-sizing: border-box;
 display: flex;
 align-items: center;
 position: relative;
 `), (0, F.cB)("form-item-feedback-wrapper", `
 grid-area: feedback;
 box-sizing: border-box;
 min-height: var(--n-feedback-height);
 font-size: var(--n-feedback-font-size);
 line-height: 1.25;
 transform-origin: top left;
 `, [(0, F.c)("&:not(:empty)", `
 padding: var(--n-feedback-padding);
 `), (0, F.cB)("form-item-feedback", {
  transition: "color .3s var(--n-bezier)",
  color: "var(--n-feedback-text-color)"
}, [(0, F.cM)("warning", {
  color: "var(--n-feedback-text-color-warning)"
}), (0, F.cM)("error", {
  color: "var(--n-feedback-text-color-error)"
}), (0, cr.fadeDownTransition)({
  fromOffset: "-3px",
  enterDuration: ".3s",
  leaveDuration: ".2s"
})])])]);
(function(t) {
  var e = _ && _.__awaiter || function(c, p, m, b) {
    function v(y) {
      return y instanceof m ? y : new m(function(O) {
        O(y);
      });
    }
    return new (m || (m = Promise))(function(y, O) {
      function R($) {
        try {
          I(b.next($));
        } catch (q) {
          O(q);
        }
      }
      function S($) {
        try {
          I(b.throw($));
        } catch (q) {
          O(q);
        }
      }
      function I($) {
        $.done ? y($.value) : v($.value).then(R, S);
      }
      I((b = b.apply(c, p || [])).next());
    });
  }, r = _ && _.__importDefault || function(c) {
    return c && c.__esModule ? c : { default: c };
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), t.formItemPropKeys = t.formItemProps = void 0;
  const n = G, i = r(ir), o = Ue, a = Je, f = _t, s = Fe, l = K, d = Me, u = H, g = Y, h = r(Ee);
  t.formItemProps = Object.assign(Object.assign({}, s.useTheme.props), { label: String, labelWidth: [Number, String], labelStyle: [String, Object], labelAlign: String, labelPlacement: String, path: String, first: Boolean, rulePath: String, required: Boolean, showRequireMark: {
    type: Boolean,
    default: void 0
  }, requireMarkPlacement: String, showFeedback: {
    type: Boolean,
    default: void 0
  }, rule: [Object, Array], size: String, ignorePathChange: Boolean, validationStatus: String, feedback: String, showLabel: {
    type: Boolean,
    default: void 0
  }, labelProps: Object }), t.formItemPropKeys = (0, l.keysOf)(t.formItemProps);
  function P(c, p) {
    return (...m) => {
      try {
        const b = c(...m);
        return !p && (typeof b == "boolean" || b instanceof Error || Array.isArray(b)) || // Error[]
        b != null && b.then ? b : (b === void 0 || (0, l.warn)("form-item/validate", `You return a ${typeof b} typed value in the validator method, which is not recommended. Please use ` + (p ? "`Promise`" : "`boolean`, `Error` or `Promise`") + " typed value instead."), !0);
      } catch (b) {
        (0, l.warn)("form-item/validate", "An error is catched in the validation, so the validation won't be done. Your callback in `validate` method of `n-form` or `n-form-item` won't be called in this validation."), console.error(b);
        return;
      }
    };
  }
  t.default = (0, n.defineComponent)({
    name: "FormItem",
    props: t.formItemProps,
    setup(c) {
      (0, l.useInjectionInstanceCollection)(g.formItemInstsInjectionKey, "formItems", (0, n.toRef)(c, "path"));
      const { mergedClsPrefixRef: p, inlineThemeDisabled: m } = (0, s.useConfig)(c), b = (0, n.inject)(g.formInjectionKey, null), v = (0, u.formItemSize)(c), y = (0, u.formItemMisc)(c), { validationErrored: O } = y, { mergedRequired: R, mergedRules: S } = (0, u.formItemRule)(c), { mergedSize: I } = v, { mergedLabelPlacement: $, mergedLabelAlign: q, mergedRequireMarkPlacement: V } = y, A = (0, n.ref)([]), C = (0, n.ref)((0, a.createId)()), _e = b ? (0, n.toRef)(b.props, "disabled") : (0, n.ref)(!1), ot = (0, s.useTheme)("Form", "-form-item", h.default, d.formLight, c, p);
      (0, n.watch)((0, n.toRef)(c, "path"), () => {
        c.ignorePathChange || ue();
      });
      function ue() {
        A.value = [], O.value = !1, c.feedback && (C.value = (0, a.createId)());
      }
      function st() {
        Z("blur");
      }
      function ft() {
        Z("change");
      }
      function lt() {
        Z("focus");
      }
      function ut() {
        Z("input");
      }
      function dt(j, D) {
        return e(this, void 0, void 0, function* () {
          let N, E, U, ee;
          typeof j == "string" ? (N = j, E = D) : j !== null && typeof j == "object" && (N = j.trigger, E = j.callback, U = j.shouldRuleBeApplied, ee = j.options), yield new Promise((te, re) => {
            Z(N, U, ee).then(({ valid: ne, errors: J }) => {
              ne ? (E && E(), te()) : (E && E(J), re(J));
            });
          });
        });
      }
      const Z = (j = null, D = () => !0, N = {
        suppressWarning: !0
      }) => e(this, void 0, void 0, function* () {
        const { path: E } = c;
        N ? N.first || (N.first = c.first) : N = {};
        const { value: U } = S, ee = b ? (0, o.get)(b.props.model, E || "") : void 0, te = {}, re = {}, ne = (j ? U.filter((T) => Array.isArray(T.trigger) ? T.trigger.includes(j) : T.trigger === j) : U).filter(D).map((T, B) => {
          const M = Object.assign({}, T);
          if (M.validator && (M.validator = P(M.validator, !1)), M.asyncValidator && (M.asyncValidator = P(M.asyncValidator, !0)), M.renderMessage) {
            const L = `__renderMessage__${B}`;
            re[L] = M.message, M.message = L, te[L] = M.renderMessage;
          }
          return M;
        });
        if (!ne.length)
          return {
            valid: !0
          };
        const J = E ?? "__n_no_path__", de = new i.default({ [J]: ne }), { validateMessages: ce } = (b == null ? void 0 : b.props) || {};
        return ce && de.messages(ce), yield new Promise((T) => {
          de.validate({ [J]: ee }, N, (B) => {
            B != null && B.length ? (A.value = B.map((M) => {
              const L = (M == null ? void 0 : M.message) || "";
              return {
                key: L,
                render: () => L.startsWith("__renderMessage__") ? te[L]() : L
              };
            }), B.forEach((M) => {
              var L;
              !((L = M.message) === null || L === void 0) && L.startsWith("__renderMessage__") && (M.message = re[M.message]);
            }), O.value = !0, T({
              valid: !1,
              errors: B
            })) : (ue(), T({
              valid: !0
            }));
          });
        });
      });
      (0, n.provide)(f.formItemInjectionKey, {
        path: (0, n.toRef)(c, "path"),
        disabled: _e,
        mergedSize: v.mergedSize,
        mergedValidationStatus: y.mergedValidationStatus,
        restoreValidation: ue,
        handleContentBlur: st,
        handleContentChange: ft,
        handleContentFocus: lt,
        handleContentInput: ut
      });
      const ct = {
        validate: dt,
        restoreValidation: ue,
        internalValidate: Z
      }, De = (0, n.ref)(null);
      (0, n.onMounted)(() => {
        if (!y.isAutoLabelWidth.value)
          return;
        const j = De.value;
        if (j !== null) {
          const D = j.style.whiteSpace;
          j.style.whiteSpace = "nowrap", j.style.width = "", b == null || b.deriveMaxChildLabelWidth(Number(getComputedStyle(j).width.slice(0, -2))), j.style.whiteSpace = D;
        }
      });
      const Ke = (0, n.computed)(() => {
        var j;
        const { value: D } = I, { value: N } = $, E = N === "top" ? "vertical" : "horizontal", { common: { cubicBezierEaseInOut: U }, self: { labelTextColor: ee, asteriskColor: te, lineHeight: re, feedbackTextColor: ne, feedbackTextColorWarning: J, feedbackTextColorError: de, feedbackPadding: ce, labelFontWeight: T, [(0, l.createKey)("labelHeight", D)]: B, [(0, l.createKey)("blankHeight", D)]: M, [(0, l.createKey)("feedbackFontSize", D)]: L, [(0, l.createKey)("feedbackHeight", D)]: gt, [(0, l.createKey)("labelPadding", E)]: pt, [(0, l.createKey)("labelTextAlign", E)]: ht, [(0, l.createKey)((0, l.createKey)("labelFontSize", N), D)]: vt } } = ot.value;
        let we = (j = q.value) !== null && j !== void 0 ? j : ht;
        return N === "top" && (we = we === "right" ? "flex-end" : "flex-start"), {
          "--n-bezier": U,
          "--n-line-height": re,
          "--n-blank-height": M,
          "--n-label-font-size": vt,
          "--n-label-text-align": we,
          "--n-label-height": B,
          "--n-label-padding": pt,
          "--n-label-font-weight": T,
          "--n-asterisk-color": te,
          "--n-label-text-color": ee,
          "--n-feedback-padding": ce,
          "--n-feedback-font-size": L,
          "--n-feedback-height": gt,
          "--n-feedback-text-color": ne,
          "--n-feedback-text-color-warning": J,
          "--n-feedback-text-color-error": de
        };
      }), Q = m ? (0, s.useThemeClass)("form-item", (0, n.computed)(() => {
        var j;
        return `${I.value[0]}${$.value[0]}${((j = q.value) === null || j === void 0 ? void 0 : j[0]) || ""}`;
      }), Ke, c) : void 0, mt = (0, n.computed)(() => $.value === "left" && V.value === "left" && q.value === "left");
      return Object.assign(Object.assign(Object.assign(Object.assign({ labelElementRef: De, mergedClsPrefix: p, mergedRequired: R, feedbackId: C, renderExplains: A, reverseColSpace: mt }, y), v), ct), { cssVars: m ? void 0 : Ke, themeClass: Q == null ? void 0 : Q.themeClass, onRender: Q == null ? void 0 : Q.onRender });
    },
    render() {
      const { $slots: c, mergedClsPrefix: p, mergedShowLabel: m, mergedShowRequireMark: b, mergedRequireMarkPlacement: v, onRender: y } = this, O = b !== void 0 ? b : this.mergedRequired;
      y == null || y();
      const R = () => {
        const S = this.$slots.label ? this.$slots.label() : this.label;
        if (!S)
          return null;
        const I = (0, n.h)("span", { class: `${p}-form-item-label__text` }, S), $ = O ? (0, n.h)("span", { class: `${p}-form-item-label__asterisk` }, v !== "left" ? " *" : "* ") : v === "right-hanging" && (0, n.h)("span", { class: `${p}-form-item-label__asterisk-placeholder` }, " *"), { labelProps: q } = this;
        return (0, n.h)("label", Object.assign({}, q, { class: [
          q == null ? void 0 : q.class,
          `${p}-form-item-label`,
          `${p}-form-item-label--${v}-mark`,
          this.reverseColSpace && `${p}-form-item-label--reverse-columns-space`
        ], style: this.mergedLabelStyle, ref: "labelElementRef" }), v === "left" ? [$, I] : [I, $]);
      };
      return (0, n.h)(
        "div",
        { class: [
          `${p}-form-item`,
          this.themeClass,
          `${p}-form-item--${this.mergedSize}-size`,
          `${p}-form-item--${this.mergedLabelPlacement}-labelled`,
          this.isAutoLabelWidth && `${p}-form-item--auto-label-width`,
          !m && `${p}-form-item--no-label`
        ], style: this.cssVars },
        m && R(),
        (0, n.h)("div", { class: [
          `${p}-form-item-blank`,
          this.mergedValidationStatus && `${p}-form-item-blank--${this.mergedValidationStatus}`
        ] }, c),
        this.mergedShowFeedback ? (0, n.h)(
          "div",
          { key: this.feedbackId, class: `${p}-form-item-feedback-wrapper` },
          (0, n.h)(n.Transition, { name: "fade-down-transition", mode: "out-in" }, {
            default: () => {
              const { mergedValidationStatus: S } = this;
              return (0, l.resolveWrappedSlot)(c.feedback, (I) => {
                var $;
                const { feedback: q } = this, V = I || q ? (0, n.h)("div", { key: "__feedback__", class: `${p}-form-item-feedback__line` }, I || q) : this.renderExplains.length ? ($ = this.renderExplains) === null || $ === void 0 ? void 0 : $.map(({ key: A, render: C }) => (0, n.h)("div", { key: A, class: `${p}-form-item-feedback__line` }, C())) : null;
                return V ? S === "warning" ? (0, n.h)("div", { key: "controlled-warning", class: `${p}-form-item-feedback ${p}-form-item-feedback--warning` }, V) : S === "error" ? (0, n.h)("div", { key: "controlled-error", class: `${p}-form-item-feedback ${p}-form-item-feedback--error` }, V) : S === "success" ? (0, n.h)("div", { key: "controlled-success", class: `${p}-form-item-feedback ${p}-form-item-feedback--success` }, V) : (0, n.h)("div", { key: "controlled-default", class: `${p}-form-item-feedback` }, V) : null;
              });
            }
          })
        ) : null
      );
    }
  });
})(be);
var rt = {}, nt = {}, ae = {};
Object.defineProperty(ae, "__esModule", { value: !0 });
ae.gridInjectionKey = ae.defaultSpan = void 0;
const mr = K;
ae.defaultSpan = 1;
ae.gridInjectionKey = (0, mr.createInjectionKey)("n-grid");
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.gridItemPropKeys = t.gridItemProps = t.defaultSpan = void 0;
  const e = G, r = Je, n = K, i = ae;
  t.defaultSpan = 1, t.gridItemProps = {
    span: {
      type: [Number, String],
      default: t.defaultSpan
    },
    offset: {
      type: [Number, String],
      default: 0
    },
    suffix: Boolean,
    // private props
    privateOffset: Number,
    privateSpan: Number,
    privateColStart: Number,
    privateShow: {
      type: Boolean,
      default: !0
    }
  }, t.gridItemPropKeys = (0, n.keysOf)(t.gridItemProps), t.default = (0, e.defineComponent)({
    __GRID_ITEM__: !0,
    name: "GridItem",
    alias: ["Gi"],
    props: t.gridItemProps,
    setup() {
      const {
        isSsrRef: o,
        xGapRef: a,
        itemStyleRef: f,
        overflowRef: s,
        layoutShiftDisabledRef: l
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      } = (0, e.inject)(i.gridInjectionKey), d = (0, e.getCurrentInstance)();
      return {
        overflow: s,
        itemStyle: f,
        layoutShiftDisabled: l,
        mergedXGap: (0, e.computed)(() => (0, r.pxfy)(a.value || 0)),
        deriveStyle: () => {
          o.value;
          const {
            privateSpan: u = t.defaultSpan,
            privateShow: g = !0,
            privateColStart: h = void 0,
            privateOffset: P = 0
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          } = d.vnode.props, { value: c } = a, p = (0, r.pxfy)(c || 0);
          return {
            display: g ? "" : "none",
            gridColumn: `${h ?? `span ${u}`} / span ${u}`,
            marginLeft: P ? `calc((100% - (${u} - 1) * ${p}) / ${u} * ${P} + ${p} * ${P})` : ""
          };
        }
      };
    },
    render() {
      var o, a;
      if (this.layoutShiftDisabled) {
        const { span: f, offset: s, mergedXGap: l } = this;
        return (0, e.h)("div", { style: {
          gridColumn: `span ${f} / span ${f}`,
          marginLeft: s ? `calc((100% - (${f} - 1) * ${l}) / ${f} * ${s} + ${l} * ${s})` : ""
        } }, this.$slots);
      }
      return (0, e.h)("div", { style: [this.itemStyle, this.deriveStyle()] }, (a = (o = this.$slots).default) === null || a === void 0 ? void 0 : a.call(o, { overflow: this.overflow }));
    }
  });
})(nt);
(function(t) {
  var e = _ && _.__createBinding || (Object.create ? function(s, l, d, u) {
    u === void 0 && (u = d);
    var g = Object.getOwnPropertyDescriptor(l, d);
    (!g || ("get" in g ? !l.__esModule : g.writable || g.configurable)) && (g = { enumerable: !0, get: function() {
      return l[d];
    } }), Object.defineProperty(s, u, g);
  } : function(s, l, d, u) {
    u === void 0 && (u = d), s[u] = l[d];
  }), r = _ && _.__setModuleDefault || (Object.create ? function(s, l) {
    Object.defineProperty(s, "default", { enumerable: !0, value: l });
  } : function(s, l) {
    s.default = l;
  }), n = _ && _.__importStar || function(s) {
    if (s && s.__esModule)
      return s;
    var l = {};
    if (s != null)
      for (var d in s)
        d !== "default" && Object.prototype.hasOwnProperty.call(s, d) && e(l, s, d);
    return r(l, s), l;
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), t.formItemGiPropKeys = t.formItemGiProps = void 0;
  const i = G, o = n(nt), a = K, f = n(be);
  t.formItemGiProps = Object.assign(Object.assign({}, o.gridItemProps), f.formItemProps), t.formItemGiPropKeys = (0, a.keysOf)(t.formItemGiProps), t.default = (0, i.defineComponent)({
    __GRID_ITEM__: !0,
    name: "FormItemGridItem",
    alias: ["FormItemGi"],
    props: t.formItemGiProps,
    setup() {
      const s = (0, i.ref)(null);
      return {
        formItemInstRef: s,
        validate: (...u) => {
          const { value: g } = s;
          if (g)
            return g.validate(...u);
        },
        restoreValidation: () => {
          const { value: u } = s;
          u && u.restoreValidation();
        }
      };
    },
    render() {
      return (0, i.h)(o.default, (0, a.keep)(this.$.vnode.props || {}, o.gridItemPropKeys), {
        default: () => {
          const s = (0, a.keep)(this.$props, f.formItemPropKeys);
          return (0, i.h)(f.default, Object.assign({ ref: "formItemInstRef" }, s), this.$slots);
        }
      });
    }
  });
})(rt);
var Le = {}, it = {}, Ne = {}, ze = {};
Object.defineProperty(ze, "__esModule", {
  value: !0
});
const W = ve, gr = Array.apply(null, {
  length: 24
}).map((t, e) => {
  const r = e + 1, n = `calc(100% / 24 * ${r})`;
  return [(0, W.cM)(`${r}-span`, {
    width: n
  }), (0, W.cM)(`${r}-offset`, {
    marginLeft: n
  }), (0, W.cM)(`${r}-push`, {
    left: n
  }), (0, W.cM)(`${r}-pull`, {
    right: n
  })];
});
ze.default = (0, W.c)([(0, W.cB)("row", {
  width: "100%",
  display: "flex",
  flexWrap: "wrap"
}), (0, W.cB)("col", {
  verticalAlign: "top",
  boxSizing: "border-box",
  display: "inline-block",
  position: "relative",
  zIndex: "auto"
}, [(0, W.cE)("box", {
  position: "relative",
  zIndex: "auto",
  width: "100%",
  height: "100%"
}), gr])]);
(function(t) {
  var e = _ && _.__importDefault || function(f) {
    return f && f.__esModule ? f : { default: f };
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), t.rowPropKeys = t.rowProps = t.rowInjectionKey = void 0;
  const r = G, n = wt, i = K, o = Fe, a = e(ze);
  t.rowInjectionKey = (0, i.createInjectionKey)("n-row"), t.rowProps = {
    gutter: {
      type: [Array, Number, String],
      default: 0
    },
    alignItems: String,
    justifyContent: String
  }, t.rowPropKeys = (0, i.keysOf)(t.rowProps), t.default = (0, r.defineComponent)({
    name: "Row",
    props: t.rowProps,
    setup(f) {
      const { mergedClsPrefixRef: s, mergedRtlRef: l } = (0, o.useConfig)(f);
      (0, o.useStyle)("-legacy-grid", a.default, s);
      const d = (0, o.useRtl)("Row", l, s), u = (0, n.useMemo)(() => {
        const { gutter: h } = f;
        return Array.isArray(h) && h[1] || 0;
      }), g = (0, n.useMemo)(() => {
        const { gutter: h } = f;
        return Array.isArray(h) ? h[0] : Number(h);
      });
      return (0, r.provide)(t.rowInjectionKey, {
        mergedClsPrefixRef: s,
        gutterRef: (0, r.toRef)(f, "gutter"),
        verticalGutterRef: u,
        horizontalGutterRef: g
      }), {
        mergedClsPrefix: s,
        rtlEnabled: d,
        styleMargin: (0, n.useMemo)(() => `-${(0, i.formatLength)(u.value, {
          c: 0.5
        })} -${(0, i.formatLength)(g.value, { c: 0.5 })}`),
        styleWidth: (0, n.useMemo)(() => `calc(100% + ${(0, i.formatLength)(g.value)})`)
      };
    },
    render() {
      return (0, r.h)("div", { class: [
        `${this.mergedClsPrefix}-row`,
        this.rtlEnabled && `${this.mergedClsPrefix}-row--rtl`
      ], style: {
        margin: this.styleMargin,
        width: this.styleWidth,
        alignItems: this.alignItems,
        justifyContent: this.justifyContent
      } }, this.$slots);
    }
  });
})(Ne);
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.colPropKeys = t.colProps = void 0;
  const e = G, r = K, n = Ne;
  t.colProps = {
    span: {
      type: [String, Number],
      default: 1
    },
    push: {
      type: [String, Number],
      default: 0
    },
    pull: {
      type: [String, Number],
      default: 0
    },
    offset: {
      type: [String, Number],
      default: 0
    }
  }, t.colPropKeys = (0, r.keysOf)(t.colProps), t.default = (0, e.defineComponent)({
    name: "Col",
    props: t.colProps,
    setup(i) {
      const o = (0, e.inject)(n.rowInjectionKey, null);
      return o || (0, r.throwError)("col", "`n-col` must be placed inside `n-row`."), {
        mergedClsPrefix: o.mergedClsPrefixRef,
        gutter: o.gutterRef,
        stylePadding: (0, e.computed)(() => `${(0, r.formatLength)(o.verticalGutterRef.value, {
          c: 0.5
        })} ${(0, r.formatLength)(o.horizontalGutterRef.value, { c: 0.5 })}`),
        mergedPush: (0, e.computed)(() => Number(i.push) - Number(i.pull))
      };
    },
    render() {
      const { $slots: i, span: o, mergedPush: a, offset: f, stylePadding: s, gutter: l, mergedClsPrefix: d } = this;
      return (0, e.h)("div", { class: [
        `${d}-col`,
        {
          [`${d}-col--${o}-span`]: !0,
          [`${d}-col--${a}-push`]: a > 0,
          [`${d}-col--${-a}-pull`]: a < 0,
          [`${d}-col--${f}-offset`]: f
        }
      ], style: {
        padding: s
      } }, l ? (0, e.h)("div", null, i) : i);
    }
  });
})(it);
(function(t) {
  var e = _ && _.__createBinding || (Object.create ? function(s, l, d, u) {
    u === void 0 && (u = d);
    var g = Object.getOwnPropertyDescriptor(l, d);
    (!g || ("get" in g ? !l.__esModule : g.writable || g.configurable)) && (g = { enumerable: !0, get: function() {
      return l[d];
    } }), Object.defineProperty(s, u, g);
  } : function(s, l, d, u) {
    u === void 0 && (u = d), s[u] = l[d];
  }), r = _ && _.__setModuleDefault || (Object.create ? function(s, l) {
    Object.defineProperty(s, "default", { enumerable: !0, value: l });
  } : function(s, l) {
    s.default = l;
  }), n = _ && _.__importStar || function(s) {
    if (s && s.__esModule)
      return s;
    var l = {};
    if (s != null)
      for (var d in s)
        d !== "default" && Object.prototype.hasOwnProperty.call(s, d) && e(l, s, d);
    return r(l, s), l;
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), t.formItemColPropKeys = t.formItemColProps = void 0;
  const i = G, o = n(it), a = K, f = n(be);
  t.formItemColProps = Object.assign(Object.assign({}, o.colProps), f.formItemProps), t.formItemColPropKeys = (0, a.keysOf)(t.formItemColProps), t.default = (0, i.defineComponent)({
    name: "FormItemCol",
    props: t.formItemColProps,
    setup() {
      const s = (0, i.ref)(null);
      return {
        formItemInstRef: s,
        validate: (...u) => {
          const { value: g } = s;
          if (g)
            return g.validate(...u);
        },
        restoreValidation: () => {
          const { value: u } = s;
          u && u.restoreValidation();
        }
      };
    },
    render() {
      return (0, i.h)(o.default, (0, a.keep)(this.$props, o.colPropKeys), {
        default: () => {
          const s = (0, a.keep)(this.$props, f.formItemPropKeys);
          return (0, i.h)(f.default, Object.assign({ ref: "formItemInstRef" }, s), this.$slots);
        }
      });
    }
  });
})(Le);
var at = {};
(function(t) {
  var e = _ && _.__createBinding || (Object.create ? function(s, l, d, u) {
    u === void 0 && (u = d);
    var g = Object.getOwnPropertyDescriptor(l, d);
    (!g || ("get" in g ? !l.__esModule : g.writable || g.configurable)) && (g = { enumerable: !0, get: function() {
      return l[d];
    } }), Object.defineProperty(s, u, g);
  } : function(s, l, d, u) {
    u === void 0 && (u = d), s[u] = l[d];
  }), r = _ && _.__setModuleDefault || (Object.create ? function(s, l) {
    Object.defineProperty(s, "default", { enumerable: !0, value: l });
  } : function(s, l) {
    s.default = l;
  }), n = _ && _.__importStar || function(s) {
    if (s && s.__esModule)
      return s;
    var l = {};
    if (s != null)
      for (var d in s)
        d !== "default" && Object.prototype.hasOwnProperty.call(s, d) && e(l, s, d);
    return r(l, s), l;
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), t.formItemRowProps = void 0;
  const i = G, o = n(Ne), a = K, f = n(Le);
  t.formItemRowProps = Object.assign(Object.assign({}, o.rowProps), f.formItemColProps), t.default = (0, i.defineComponent)({
    name: "FormItemRow",
    props: t.formItemRowProps,
    setup() {
      const s = (0, i.ref)(null);
      return {
        formItemColInstRef: s,
        validate: (...u) => {
          const { value: g } = s;
          if (g)
            return g.validate(...u);
        },
        restoreValidation: () => {
          const { value: u } = s;
          u && u.restoreValidation();
        }
      };
    },
    render() {
      return (0, i.h)(o.default, (0, a.keep)(this.$props, o.rowPropKeys), {
        default: () => {
          const s = (0, a.keep)(this.$props, f.formItemColPropKeys);
          return (0, i.h)(f.default, Object.assign(Object.assign({ ref: "formItemColInstRef" }, s), { span: 24 }), this.$slots);
        }
      });
    }
  });
})(at);
(function(t) {
  var e = _ && _.__importDefault || function(f) {
    return f && f.__esModule ? f : { default: f };
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), t.NFormItemRow = t.NFormItemCol = t.formItemGridItemProps = t.formItemGiProps = t.NFormItemGi = t.NFormItemGridItem = t.formItemProps = t.NFormItem = t.formProps = t.NForm = void 0;
  var r = Ze;
  Object.defineProperty(t, "NForm", { enumerable: !0, get: function() {
    return e(r).default;
  } }), Object.defineProperty(t, "formProps", { enumerable: !0, get: function() {
    return r.formProps;
  } });
  var n = be;
  Object.defineProperty(t, "NFormItem", { enumerable: !0, get: function() {
    return e(n).default;
  } }), Object.defineProperty(t, "formItemProps", { enumerable: !0, get: function() {
    return n.formItemProps;
  } });
  var i = rt;
  Object.defineProperty(t, "NFormItemGridItem", { enumerable: !0, get: function() {
    return e(i).default;
  } }), Object.defineProperty(t, "NFormItemGi", { enumerable: !0, get: function() {
    return e(i).default;
  } }), Object.defineProperty(t, "formItemGiProps", { enumerable: !0, get: function() {
    return i.formItemGiProps;
  } }), Object.defineProperty(t, "formItemGridItemProps", { enumerable: !0, get: function() {
    return i.formItemGiProps;
  } });
  var o = Le;
  Object.defineProperty(t, "NFormItemCol", { enumerable: !0, get: function() {
    return e(o).default;
  } });
  var a = at;
  Object.defineProperty(t, "NFormItemRow", { enumerable: !0, get: function() {
    return e(a).default;
  } });
})(Xe);
const yr = /* @__PURE__ */ Pt({
  __proto__: null
}, [Xe]);
export {
  Xe as f,
  yr as i
};
