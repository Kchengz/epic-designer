var _l = Object.defineProperty;
var Sl = (e, t, r) => t in e ? _l(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Xn = (e, t, r) => (Sl(e, typeof t != "symbol" ? t + "" : t, r), r);
import { Fragment as ze, Comment as Pl, Text as $l, defineComponent as ae, inject as Se, computed as j, unref as X, createVNode as $, reactive as je, provide as de, watch as ye, onMounted as Tt, onUnmounted as Tl, Teleport as Al, ref as ie, TransitionGroup as Si, render as Zn, h as Jn, nextTick as lr, watchEffect as At, getCurrentInstance as Pi, onBeforeUnmount as hn, cloneVNode as Fl, shallowRef as $i, toRaw as Lr, openBlock as vt, createBlock as Jt, mergeProps as Rr, withCtx as qr, renderSlot as Ti, resolveDynamicComponent as jl, createElementBlock as El, renderList as Il, createSlots as Ml, normalizeProps as Nl, guardReactiveProps as Ll } from "vue";
function B(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function Qn(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Z(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Qn(Object(r), !0).forEach(function(n) {
      B(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Qn(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function N() {
  return N = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, N.apply(this, arguments);
}
function me(e) {
  return me = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, me(e);
}
var Rl = Array.isArray, ql = function(t) {
  return typeof t == "string";
}, kl = function(t) {
  return t !== null && me(t) === "object";
};
function ft(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 ? arguments[2] : void 0;
  return typeof e == "function" ? e(t) : e != null ? e : r;
}
function be() {
  for (var e = [], t = 0; t < arguments.length; t++) {
    var r = t < 0 || arguments.length <= t ? void 0 : arguments[t];
    if (!!r) {
      if (ql(r))
        e.push(r);
      else if (Rl(r))
        for (var n = 0; n < r.length; n++) {
          var a = be(r[n]);
          a && e.push(a);
        }
      else if (kl(r))
        for (var i in r)
          r[i] && e.push(i);
    }
  }
  return e.join(" ");
}
function Ai(e) {
  if (Array.isArray(e))
    return e;
}
function Dl(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n = [], a = !0, i = !1, o, l;
    try {
      for (r = r.call(e); !(a = (o = r.next()).done) && (n.push(o.value), !(t && n.length === t)); a = !0)
        ;
    } catch (u) {
      i = !0, l = u;
    } finally {
      try {
        !a && r.return != null && r.return();
      } finally {
        if (i)
          throw l;
      }
    }
    return n;
  }
}
function kr(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function mn(e, t) {
  if (!!e) {
    if (typeof e == "string")
      return kr(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return kr(e, t);
  }
}
function Fi() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Dr(e, t) {
  return Ai(e) || Dl(e, t) || mn(e, t) || Fi();
}
function Bl(e) {
  if (Array.isArray(e))
    return kr(e);
}
function ji(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function Vl() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ve(e) {
  return Bl(e) || ji(e) || mn(e) || Vl();
}
var Hl = typeof global == "object" && global && global.Object === Object && global;
const Ei = Hl;
var Gl = typeof self == "object" && self && self.Object === Object && self, Ul = Ei || Gl || Function("return this")();
const xe = Ul;
var zl = xe.Symbol;
const pe = zl;
var Ii = Object.prototype, Wl = Ii.hasOwnProperty, Yl = Ii.toString, ut = pe ? pe.toStringTag : void 0;
function Kl(e) {
  var t = Wl.call(e, ut), r = e[ut];
  try {
    e[ut] = void 0;
    var n = !0;
  } catch {
  }
  var a = Yl.call(e);
  return n && (t ? e[ut] = r : delete e[ut]), a;
}
var Xl = Object.prototype, Zl = Xl.toString;
function Jl(e) {
  return Zl.call(e);
}
var Ql = "[object Null]", eu = "[object Undefined]", ea = pe ? pe.toStringTag : void 0;
function Ke(e) {
  return e == null ? e === void 0 ? eu : Ql : ea && ea in Object(e) ? Kl(e) : Jl(e);
}
function Mi(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var tu = Mi(Object.getPrototypeOf, Object);
const yn = tu;
function Pe(e) {
  return e != null && typeof e == "object";
}
var ru = "[object Object]", nu = Function.prototype, au = Object.prototype, Ni = nu.toString, iu = au.hasOwnProperty, ou = Ni.call(Object);
function lu(e) {
  if (!Pe(e) || Ke(e) != ru)
    return !1;
  var t = yn(e);
  if (t === null)
    return !0;
  var r = iu.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && Ni.call(r) == ou;
}
var uu = function(t, r) {
  var n = N({}, t);
  return Object.keys(r).forEach(function(a) {
    var i = n[a];
    if (i)
      i.type || i.default ? i.default = r[a] : i.def ? i.def(r[a]) : n[a] = {
        type: i,
        default: r[a]
      };
    else
      throw new Error("not have ".concat(a, " prop"));
  }), n;
};
const cu = uu;
function su(e) {
  return e && (e.type === Pl || e.type === ze && e.children.length === 0 || e.type === $l && e.children.trim() === "");
}
function bn() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = [];
  return e.forEach(function(r) {
    Array.isArray(r) ? t.push.apply(t, ve(r)) : (r == null ? void 0 : r.type) === ze ? t.push.apply(t, ve(bn(r.children))) : t.push(r);
  }), t.filter(function(r) {
    return !su(r);
  });
}
function fu(e) {
  return Array.isArray(e) && e.length === 1 && (e = e[0]), e && e.__v_isVNode && me(e.type) !== "symbol";
}
var qe = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  return r;
}, Li = function(t) {
  var r = t;
  return r.install = function(n) {
    n.component(r.displayName || r.name, t);
  }, t;
};
const du = {
  items_per_page: "/ page",
  jump_to: "Go to",
  jump_to_confirm: "confirm",
  page: "",
  prev_page: "Previous Page",
  next_page: "Next Page",
  prev_5: "Previous 5 Pages",
  next_5: "Next 5 Pages",
  prev_3: "Previous 3 Pages",
  next_3: "Next 3 Pages"
};
var vu = {
  locale: "en_US",
  today: "Today",
  now: "Now",
  backToToday: "Back to today",
  ok: "Ok",
  clear: "Clear",
  month: "Month",
  year: "Year",
  timeSelect: "select time",
  dateSelect: "select date",
  weekSelect: "Choose a week",
  monthSelect: "Choose a month",
  yearSelect: "Choose a year",
  decadeSelect: "Choose a decade",
  yearFormat: "YYYY",
  dateFormat: "M/D/YYYY",
  dayFormat: "D",
  dateTimeFormat: "M/D/YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "Previous month (PageUp)",
  nextMonth: "Next month (PageDown)",
  previousYear: "Last year (Control + left)",
  nextYear: "Next year (Control + right)",
  previousDecade: "Last decade",
  nextDecade: "Next decade",
  previousCentury: "Last century",
  nextCentury: "Next century"
};
const pu = vu;
var gu = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
};
const Ri = gu;
var hu = {
  lang: N({
    placeholder: "Select date",
    yearPlaceholder: "Select year",
    quarterPlaceholder: "Select quarter",
    monthPlaceholder: "Select month",
    weekPlaceholder: "Select week",
    rangePlaceholder: ["Start date", "End date"],
    rangeYearPlaceholder: ["Start year", "End year"],
    rangeQuarterPlaceholder: ["Start quarter", "End quarter"],
    rangeMonthPlaceholder: ["Start month", "End month"],
    rangeWeekPlaceholder: ["Start week", "End week"]
  }, pu),
  timePickerLocale: N({}, Ri)
};
const ta = hu;
var oe = "${label} is not a valid ${type}", mu = {
  locale: "en",
  Pagination: du,
  DatePicker: ta,
  TimePicker: Ri,
  Calendar: ta,
  global: {
    placeholder: "Please select"
  },
  Table: {
    filterTitle: "Filter menu",
    filterConfirm: "OK",
    filterReset: "Reset",
    filterEmptyText: "No filters",
    filterCheckall: "Select all items",
    filterSearchPlaceholder: "Search in filters",
    emptyText: "No data",
    selectAll: "Select current page",
    selectInvert: "Invert current page",
    selectNone: "Clear all data",
    selectionAll: "Select all data",
    sortTitle: "Sort",
    expand: "Expand row",
    collapse: "Collapse row",
    triggerDesc: "Click to sort descending",
    triggerAsc: "Click to sort ascending",
    cancelSort: "Click to cancel sorting"
  },
  Modal: {
    okText: "OK",
    cancelText: "Cancel",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Cancel"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Search here",
    itemUnit: "item",
    itemsUnit: "items",
    remove: "Remove",
    selectCurrent: "Select current page",
    removeCurrent: "Remove current page",
    selectAll: "Select all data",
    removeAll: "Remove all data",
    selectInvert: "Invert current page"
  },
  Upload: {
    uploading: "Uploading...",
    removeFile: "Remove file",
    uploadError: "Upload error",
    previewFile: "Preview file",
    downloadFile: "Download file"
  },
  Empty: {
    description: "No Data"
  },
  Icon: {
    icon: "icon"
  },
  Text: {
    edit: "Edit",
    copy: "Copy",
    copied: "Copied",
    expand: "Expand"
  },
  PageHeader: {
    back: "Back"
  },
  Form: {
    optional: "(optional)",
    defaultValidateMessages: {
      default: "Field validation error for ${label}",
      required: "Please enter ${label}",
      enum: "${label} must be one of [${enum}]",
      whitespace: "${label} cannot be a blank character",
      date: {
        format: "${label} date format is invalid",
        parse: "${label} cannot be converted to a date",
        invalid: "${label} is an invalid date"
      },
      types: {
        string: oe,
        method: oe,
        array: oe,
        object: oe,
        number: oe,
        date: oe,
        boolean: oe,
        integer: oe,
        float: oe,
        regexp: oe,
        email: oe,
        url: oe,
        hex: oe
      },
      string: {
        len: "${label} must be ${len} characters",
        min: "${label} must be at least ${min} characters",
        max: "${label} must be up to ${max} characters",
        range: "${label} must be between ${min}-${max} characters"
      },
      number: {
        len: "${label} must be equal to ${len}",
        min: "${label} must be minimum ${min}",
        max: "${label} must be maximum ${max}",
        range: "${label} must be between ${min}-${max}"
      },
      array: {
        len: "Must be ${len} ${label}",
        min: "At least ${min} ${label}",
        max: "At most ${max} ${label}",
        range: "The amount of ${label} must be between ${min}-${max}"
      },
      pattern: {
        mismatch: "${label} does not match the pattern ${pattern}"
      }
    }
  },
  Image: {
    preview: "Preview"
  }
};
const bt = mu, qi = ae({
  name: "LocaleReceiver",
  props: {
    componentName: String,
    defaultLocale: {
      type: [Object, Function]
    },
    children: {
      type: Function
    }
  },
  setup: function(t, r) {
    var n = r.slots, a = Se("localeData", {}), i = j(function() {
      var l = t.componentName, u = l === void 0 ? "global" : l, s = t.defaultLocale, d = s || bt[u || "global"], c = a.antLocale, v = u && c ? c[u] : {};
      return N(N({}, typeof d == "function" ? d() : d), v || {});
    }), o = j(function() {
      var l = a.antLocale, u = l && l.locale;
      return l && l.exist && !u ? bt.locale : u;
    });
    return function() {
      var l = t.children || n.default, u = a.antLocale;
      return l == null ? void 0 : l(i.value, o.value, u);
    };
  }
});
function yu(e, t, r) {
  var n = Se("localeData", {}), a = j(function() {
    var i = n.antLocale, o = X(t) || bt[e || "global"], l = e && i ? i[e] : {};
    return N(N(N({}, typeof o == "function" ? o() : o), l || {}), X(r) || {});
  });
  return [a];
}
var ki = function() {
  var t = Ee("empty", {}), r = t.getPrefixCls, n = r("empty-img-default");
  return $("svg", {
    class: n,
    width: "184",
    height: "152",
    viewBox: "0 0 184 152"
  }, [$("g", {
    fill: "none",
    "fill-rule": "evenodd"
  }, [$("g", {
    transform: "translate(24 31.67)"
  }, [$("ellipse", {
    class: "".concat(n, "-ellipse"),
    cx: "67.797",
    cy: "106.89",
    rx: "67.797",
    ry: "12.668"
  }, null), $("path", {
    class: "".concat(n, "-path-1"),
    d: "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"
  }, null), $("path", {
    class: "".concat(n, "-path-2"),
    d: "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",
    transform: "translate(13.56)"
  }, null), $("path", {
    class: "".concat(n, "-path-3"),
    d: "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
  }, null), $("path", {
    class: "".concat(n, "-path-4"),
    d: "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"
  }, null)]), $("path", {
    class: "".concat(n, "-path-5"),
    d: "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"
  }, null), $("g", {
    class: "".concat(n, "-g"),
    transform: "translate(149.65 15.383)"
  }, [$("ellipse", {
    cx: "20.654",
    cy: "3.167",
    rx: "2.849",
    ry: "2.815"
  }, null), $("path", {
    d: "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"
  }, null)])])]);
};
ki.PRESENTED_IMAGE_DEFAULT = !0;
const bu = ki;
var Di = function() {
  var t = Ee("empty", {}), r = t.getPrefixCls, n = r("empty-img-simple");
  return $("svg", {
    class: n,
    width: "64",
    height: "41",
    viewBox: "0 0 64 41"
  }, [$("g", {
    transform: "translate(0 1)",
    fill: "none",
    "fill-rule": "evenodd"
  }, [$("ellipse", {
    class: "".concat(n, "-ellipse"),
    fill: "#F5F5F5",
    cx: "32",
    cy: "33",
    rx: "32",
    ry: "7"
  }, null), $("g", {
    class: "".concat(n, "-g"),
    "fill-rule": "nonzero",
    stroke: "#D9D9D9"
  }, [$("path", {
    d: "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
  }, null), $("path", {
    d: "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",
    fill: "#FAFAFA",
    class: "".concat(n, "-path")
  }, null)])])]);
};
Di.PRESENTED_IMAGE_SIMPLE = !0;
const wu = Di;
function ra(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function Bi(e, t, r) {
  return t && ra(e.prototype, t), r && ra(e, r), e;
}
function Ut() {
  return (Ut = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }).apply(this, arguments);
}
function Vi(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t;
}
function Hi(e, t) {
  if (e == null)
    return {};
  var r, n, a = {}, i = Object.keys(e);
  for (n = 0; n < i.length; n++)
    t.indexOf(r = i[n]) >= 0 || (a[r] = e[r]);
  return a;
}
function na(e) {
  return ((t = e) != null && typeof t == "object" && Array.isArray(t) === !1) == 1 && Object.prototype.toString.call(e) === "[object Object]";
  var t;
}
var Gi = Object.prototype, Ui = Gi.toString, xu = Gi.hasOwnProperty, zi = /^\s*function (\w+)/;
function aa(e) {
  var t, r = (t = e == null ? void 0 : e.type) !== null && t !== void 0 ? t : e;
  if (r) {
    var n = r.toString().match(zi);
    return n ? n[1] : "";
  }
  return "";
}
var We = function(e) {
  var t, r;
  return na(e) !== !1 && typeof (t = e.constructor) == "function" && na(r = t.prototype) !== !1 && r.hasOwnProperty("isPrototypeOf") !== !1;
}, Wi = function(e) {
  return e;
}, re = Wi;
if (process.env.NODE_ENV !== "production") {
  var Cu = typeof console < "u";
  re = Cu ? function(e) {
    console.warn("[VueTypes warn]: " + e);
  } : Wi;
}
var wt = function(e, t) {
  return xu.call(e, t);
}, Ou = Number.isInteger || function(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
}, rt = Array.isArray || function(e) {
  return Ui.call(e) === "[object Array]";
}, nt = function(e) {
  return Ui.call(e) === "[object Function]";
}, Qt = function(e) {
  return We(e) && wt(e, "_vueTypes_name");
}, Yi = function(e) {
  return We(e) && (wt(e, "type") || ["_vueTypes_name", "validator", "default", "required"].some(function(t) {
    return wt(e, t);
  }));
};
function wn(e, t) {
  return Object.defineProperty(e.bind(t), "__original", { value: e });
}
function Xe(e, t, r) {
  var n;
  r === void 0 && (r = !1);
  var a = !0, i = "";
  n = We(e) ? e : { type: e };
  var o = Qt(n) ? n._vueTypes_name + " - " : "";
  if (Yi(n) && n.type !== null) {
    if (n.type === void 0 || n.type === !0 || !n.required && t === void 0)
      return a;
    rt(n.type) ? (a = n.type.some(function(c) {
      return Xe(c, t, !0) === !0;
    }), i = n.type.map(function(c) {
      return aa(c);
    }).join(" or ")) : a = (i = aa(n)) === "Array" ? rt(t) : i === "Object" ? We(t) : i === "String" || i === "Number" || i === "Boolean" || i === "Function" ? function(c) {
      if (c == null)
        return "";
      var v = c.constructor.toString().match(zi);
      return v ? v[1] : "";
    }(t) === i : t instanceof n.type;
  }
  if (!a) {
    var l = o + 'value "' + t + '" should be of type "' + i + '"';
    return r === !1 ? (re(l), !1) : l;
  }
  if (wt(n, "validator") && nt(n.validator)) {
    var u = re, s = [];
    if (re = function(c) {
      s.push(c);
    }, a = n.validator(t), re = u, !a) {
      var d = (s.length > 1 ? "* " : "") + s.join(`
* `);
      return s.length = 0, r === !1 ? (re(d), a) : d;
    }
  }
  return a;
}
function se(e, t) {
  var r = Object.defineProperties(t, { _vueTypes_name: { value: e, writable: !0 }, isRequired: { get: function() {
    return this.required = !0, this;
  } }, def: { value: function(a) {
    return a !== void 0 || this.default ? nt(a) || Xe(this, a, !0) === !0 ? (this.default = rt(a) ? function() {
      return [].concat(a);
    } : We(a) ? function() {
      return Object.assign({}, a);
    } : a, this) : (re(this._vueTypes_name + ' - invalid default value: "' + a + '"'), this) : this;
  } } }), n = r.validator;
  return nt(n) && (r.validator = wn(n, r)), r;
}
function $e(e, t) {
  var r = se(e, t);
  return Object.defineProperty(r, "validate", { value: function(n) {
    return nt(this.validator) && re(this._vueTypes_name + ` - calling .validate() will overwrite the current custom validator function. Validator info:
` + JSON.stringify(this)), this.validator = wn(n, this), this;
  } });
}
function ia(e, t, r) {
  var n, a, i = (n = t, a = {}, Object.getOwnPropertyNames(n).forEach(function(c) {
    a[c] = Object.getOwnPropertyDescriptor(n, c);
  }), Object.defineProperties({}, a));
  if (i._vueTypes_name = e, !We(r))
    return i;
  var o, l, u = r.validator, s = Hi(r, ["validator"]);
  if (nt(u)) {
    var d = i.validator;
    d && (d = (l = (o = d).__original) !== null && l !== void 0 ? l : o), i.validator = wn(d ? function(c) {
      return d.call(this, c) && u.call(this, c);
    } : u, i);
  }
  return Object.assign(i, s);
}
function ur(e) {
  return e.replace(/^(?!\s*$)/gm, "  ");
}
var _u = function() {
  return $e("any", {});
}, Su = function() {
  return $e("function", { type: Function });
}, Pu = function() {
  return $e("boolean", { type: Boolean });
}, $u = function() {
  return $e("string", { type: String });
}, Tu = function() {
  return $e("number", { type: Number });
}, Au = function() {
  return $e("array", { type: Array });
}, Fu = function() {
  return $e("object", { type: Object });
}, ju = function() {
  return se("integer", { type: Number, validator: function(e) {
    return Ou(e);
  } });
}, Eu = function() {
  return se("symbol", { validator: function(e) {
    return typeof e == "symbol";
  } });
};
function Iu(e, t) {
  if (t === void 0 && (t = "custom validation failed"), typeof e != "function")
    throw new TypeError("[VueTypes error]: You must provide a function as argument");
  return se(e.name || "<<anonymous function>>", { validator: function(r) {
    var n = e(r);
    return n || re(this._vueTypes_name + " - " + t), n;
  } });
}
function Mu(e) {
  if (!rt(e))
    throw new TypeError("[VueTypes error]: You must provide an array as argument.");
  var t = 'oneOf - value should be one of "' + e.join('", "') + '".', r = e.reduce(function(n, a) {
    if (a != null) {
      var i = a.constructor;
      n.indexOf(i) === -1 && n.push(i);
    }
    return n;
  }, []);
  return se("oneOf", { type: r.length > 0 ? r : void 0, validator: function(n) {
    var a = e.indexOf(n) !== -1;
    return a || re(t), a;
  } });
}
function Nu(e) {
  if (!rt(e))
    throw new TypeError("[VueTypes error]: You must provide an array as argument");
  for (var t = !1, r = [], n = 0; n < e.length; n += 1) {
    var a = e[n];
    if (Yi(a)) {
      if (Qt(a) && a._vueTypes_name === "oneOf") {
        r = r.concat(a.type);
        continue;
      }
      if (nt(a.validator) && (t = !0), a.type !== !0 && a.type) {
        r = r.concat(a.type);
        continue;
      }
    }
    r.push(a);
  }
  return r = r.filter(function(i, o) {
    return r.indexOf(i) === o;
  }), se("oneOfType", t ? { type: r, validator: function(i) {
    var o = [], l = e.some(function(u) {
      var s = Xe(Qt(u) && u._vueTypes_name === "oneOf" ? u.type || null : u, i, !0);
      return typeof s == "string" && o.push(s), s === !0;
    });
    return l || re("oneOfType - provided value does not match any of the " + o.length + ` passed-in validators:
` + ur(o.join(`
`))), l;
  } } : { type: r });
}
function Lu(e) {
  return se("arrayOf", { type: Array, validator: function(t) {
    var r, n = t.every(function(a) {
      return (r = Xe(e, a, !0)) === !0;
    });
    return n || re(`arrayOf - value validation error:
` + ur(r)), n;
  } });
}
function Ru(e) {
  return se("instanceOf", { type: e });
}
function qu(e) {
  return se("objectOf", { type: Object, validator: function(t) {
    var r, n = Object.keys(t).every(function(a) {
      return (r = Xe(e, t[a], !0)) === !0;
    });
    return n || re(`objectOf - value validation error:
` + ur(r)), n;
  } });
}
function ku(e) {
  var t = Object.keys(e), r = t.filter(function(a) {
    var i;
    return !!(!((i = e[a]) === null || i === void 0) && i.required);
  }), n = se("shape", { type: Object, validator: function(a) {
    var i = this;
    if (!We(a))
      return !1;
    var o = Object.keys(a);
    if (r.length > 0 && r.some(function(u) {
      return o.indexOf(u) === -1;
    })) {
      var l = r.filter(function(u) {
        return o.indexOf(u) === -1;
      });
      return re(l.length === 1 ? 'shape - required property "' + l[0] + '" is not defined.' : 'shape - required properties "' + l.join('", "') + '" are not defined.'), !1;
    }
    return o.every(function(u) {
      if (t.indexOf(u) === -1)
        return i._vueTypes_isLoose === !0 || (re('shape - shape definition does not include a "' + u + '" property. Allowed keys: "' + t.join('", "') + '".'), !1);
      var s = Xe(e[u], a[u], !0);
      return typeof s == "string" && re('shape - "' + u + `" property validation error:
 ` + ur(s)), s === !0;
    });
  } });
  return Object.defineProperty(n, "_vueTypes_isLoose", { writable: !0, value: !1 }), Object.defineProperty(n, "loose", { get: function() {
    return this._vueTypes_isLoose = !0, this;
  } }), n;
}
var Ce = function() {
  function e() {
  }
  return e.extend = function(t) {
    var r = this;
    if (rt(t))
      return t.forEach(function(c) {
        return r.extend(c);
      }), this;
    var n = t.name, a = t.validate, i = a !== void 0 && a, o = t.getter, l = o !== void 0 && o, u = Hi(t, ["name", "validate", "getter"]);
    if (wt(this, n))
      throw new TypeError('[VueTypes error]: Type "' + n + '" already defined');
    var s, d = u.type;
    return Qt(d) ? (delete u.type, Object.defineProperty(this, n, l ? { get: function() {
      return ia(n, d, u);
    } } : { value: function() {
      var c, v = ia(n, d, u);
      return v.validator && (v.validator = (c = v.validator).bind.apply(c, [v].concat([].slice.call(arguments)))), v;
    } })) : (s = l ? { get: function() {
      var c = Object.assign({}, u);
      return i ? $e(n, c) : se(n, c);
    }, enumerable: !0 } : { value: function() {
      var c, v, f = Object.assign({}, u);
      return c = i ? $e(n, f) : se(n, f), f.validator && (c.validator = (v = f.validator).bind.apply(v, [c].concat([].slice.call(arguments)))), c;
    }, enumerable: !0 }, Object.defineProperty(this, n, s));
  }, Bi(e, null, [{ key: "any", get: function() {
    return _u();
  } }, { key: "func", get: function() {
    return Su().def(this.defaults.func);
  } }, { key: "bool", get: function() {
    return Pu().def(this.defaults.bool);
  } }, { key: "string", get: function() {
    return $u().def(this.defaults.string);
  } }, { key: "number", get: function() {
    return Tu().def(this.defaults.number);
  } }, { key: "array", get: function() {
    return Au().def(this.defaults.array);
  } }, { key: "object", get: function() {
    return Fu().def(this.defaults.object);
  } }, { key: "integer", get: function() {
    return ju().def(this.defaults.integer);
  } }, { key: "symbol", get: function() {
    return Eu();
  } }]), e;
}();
function Ki(e) {
  var t;
  return e === void 0 && (e = { func: function() {
  }, bool: !0, string: "", number: 0, array: function() {
    return [];
  }, object: function() {
    return {};
  }, integer: 0 }), (t = function(r) {
    function n() {
      return r.apply(this, arguments) || this;
    }
    return Vi(n, r), Bi(n, null, [{ key: "sensibleDefaults", get: function() {
      return Ut({}, this.defaults);
    }, set: function(a) {
      this.defaults = a !== !1 ? Ut({}, a !== !0 ? a : e) : {};
    } }]), n;
  }(Ce)).defaults = Ut({}, e), t;
}
Ce.defaults = {}, Ce.custom = Iu, Ce.oneOf = Mu, Ce.instanceOf = Ru, Ce.oneOfType = Nu, Ce.arrayOf = Lu, Ce.objectOf = qu, Ce.shape = ku, Ce.utils = { validate: function(e, t) {
  return Xe(t, e, !0) === !0;
}, toType: function(e, t, r) {
  return r === void 0 && (r = !1), r ? $e(e, t) : se(e, t);
} };
(function(e) {
  function t() {
    return e.apply(this, arguments) || this;
  }
  return Vi(t, e), t;
})(Ki());
var Xi = Ki({
  func: void 0,
  bool: void 0,
  string: void 0,
  number: void 0,
  array: void 0,
  object: void 0,
  integer: void 0
});
Xi.extend([{
  name: "looseBool",
  getter: !0,
  type: Boolean,
  default: void 0
}, {
  name: "style",
  getter: !0,
  type: [String, Object],
  default: void 0
}, {
  name: "VueNode",
  getter: !0,
  type: null
}]);
const Oe = Xi;
var Du = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
}, Zi = $(bu, null, null), Ji = $(wu, null, null), it = function(t, r) {
  var n = r.slots, a = n === void 0 ? {} : n, i = r.attrs, o, l = Ee("empty", t), u = l.direction, s = l.prefixCls, d = s.value, c = N(N({}, t), i), v = c.image, f = v === void 0 ? Zi : v, g = c.description, p = g === void 0 ? ((o = a.description) === null || o === void 0 ? void 0 : o.call(a)) || void 0 : g, y = c.imageStyle, h = c.class, w = h === void 0 ? "" : h, x = Du(c, ["image", "description", "imageStyle", "class"]);
  return $(qi, {
    componentName: "Empty",
    children: function(S) {
      var C, O = typeof p < "u" ? p : S.description, T = typeof O == "string" ? O : "empty", L = null;
      return typeof f == "string" ? L = $("img", {
        alt: T,
        src: f
      }, null) : L = f, $("div", Z({
        class: be(d, w, (C = {}, B(C, "".concat(d, "-normal"), f === Ji), B(C, "".concat(d, "-rtl"), u.value === "rtl"), C))
      }, x), [$("div", {
        class: "".concat(d, "-image"),
        style: y
      }, [L]), O && $("p", {
        class: "".concat(d, "-description")
      }, [O]), a.default && $("div", {
        class: "".concat(d, "-footer")
      }, [bn(a.default())])]);
    }
  }, null);
};
it.displayName = "AEmpty";
it.PRESENTED_IMAGE_DEFAULT = Zi;
it.PRESENTED_IMAGE_SIMPLE = Ji;
it.inheritAttrs = !1;
it.props = {
  prefixCls: String,
  image: Oe.any,
  description: Oe.any,
  imageStyle: {
    type: Object,
    default: void 0
  }
};
const ct = Li(it);
var Bu = function(t) {
  var r = Ee("empty", t), n = r.prefixCls, a = function(o) {
    switch (o) {
      case "Table":
      case "List":
        return $(ct, {
          image: ct.PRESENTED_IMAGE_SIMPLE
        }, null);
      case "Select":
      case "TreeSelect":
      case "Cascader":
      case "Transfer":
      case "Mentions":
        return $(ct, {
          image: ct.PRESENTED_IMAGE_SIMPLE,
          class: "".concat(n.value, "-small")
        }, null);
      default:
        return $(ct, null, null);
    }
  };
  return a(t.componentName);
};
function Qi(e) {
  return $(Bu, {
    componentName: e
  }, null);
}
var oa = {};
function er(e, t) {
  process.env.NODE_ENV !== "production" && !e && console !== void 0 && console.error("Warning: ".concat(t));
}
function Vu(e, t, r) {
  !t && !oa[r] && (e(!1, r), oa[r] = !0);
}
function eo(e, t) {
  Vu(er, e, t);
}
const zt = function(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
  eo(e, "[antdv: ".concat(t, "] ").concat(r));
};
var Br = "internalMark", Wt = ae({
  name: "ALocaleProvider",
  props: {
    locale: {
      type: Object
    },
    ANT_MARK__: String
  },
  setup: function(t, r) {
    var n = r.slots;
    zt(t.ANT_MARK__ === Br, "LocaleProvider", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead");
    var a = je({
      antLocale: N(N({}, t.locale), {
        exist: !0
      }),
      ANT_MARK__: Br
    });
    return de("localeData", a), ye(function() {
      return t.locale;
    }, function() {
      a.antLocale = N(N({}, t.locale), {
        exist: !0
      });
    }, {
      immediate: !0
    }), function() {
      var i;
      return (i = n.default) === null || i === void 0 ? void 0 : i.call(n);
    };
  }
});
Wt.install = function(e) {
  return e.component(Wt.name, Wt), e;
};
const Hu = Li(Wt);
qe("bottomLeft", "bottomRight", "topLeft", "topRight");
var to = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = N(t ? {
    name: t,
    appear: !0,
    appearActiveClass: "".concat(t),
    appearToClass: "".concat(t, "-appear ").concat(t, "-appear-active"),
    enterFromClass: "".concat(t, "-appear ").concat(t, "-enter ").concat(t, "-appear-prepare ").concat(t, "-enter-prepare"),
    enterActiveClass: "".concat(t),
    enterToClass: "".concat(t, "-enter ").concat(t, "-appear ").concat(t, "-appear-active ").concat(t, "-enter-active"),
    leaveActiveClass: "".concat(t, " ").concat(t, "-leave"),
    leaveToClass: "".concat(t, "-leave-active")
  } : {
    css: !1
  }, r);
  return n;
};
const Gu = ae({
  name: "Notice",
  inheritAttrs: !1,
  props: ["prefixCls", "duration", "updateMark", "noticeKey", "closeIcon", "closable", "props", "onClick", "onClose", "holder", "visible"],
  setup: function(t, r) {
    var n = r.attrs, a = r.slots, i, o = j(function() {
      return t.duration === void 0 ? 1.5 : t.duration;
    }), l = function() {
      o.value && (i = setTimeout(function() {
        s();
      }, o.value * 1e3));
    }, u = function() {
      i && (clearTimeout(i), i = null);
    }, s = function(v) {
      v && v.stopPropagation(), u();
      var f = t.onClose, g = t.noticeKey;
      f && f(g);
    }, d = function() {
      u(), l();
    };
    return Tt(function() {
      l();
    }), Tl(function() {
      u();
    }), ye([o, function() {
      return t.updateMark;
    }, function() {
      return t.visible;
    }], function(c, v) {
      var f = Dr(c, 3), g = f[0], p = f[1], y = f[2], h = Dr(v, 3), w = h[0], x = h[1], m = h[2];
      (g !== w || p !== x || y !== m && m) && d();
    }, {
      flush: "post"
    }), function() {
      var c, v, f = t.prefixCls, g = t.closable, p = t.closeIcon, y = p === void 0 ? (c = a.closeIcon) === null || c === void 0 ? void 0 : c.call(a) : p, h = t.onClick, w = t.holder, x = n.class, m = n.style, S = "".concat(f, "-notice"), C = Object.keys(n).reduce(function(T, L) {
        return (L.substr(0, 5) === "data-" || L.substr(0, 5) === "aria-" || L === "role") && (T[L] = n[L]), T;
      }, {}), O = $("div", Z({
        class: be(S, x, B({}, "".concat(S, "-closable"), g)),
        style: m,
        onMouseenter: u,
        onMouseleave: l,
        onClick: h
      }, C), [$("div", {
        class: "".concat(S, "-content")
      }, [(v = a.default) === null || v === void 0 ? void 0 : v.call(a)]), g ? $("a", {
        tabindex: 0,
        onClick: s,
        class: "".concat(S, "-close")
      }, [y || $("span", {
        class: "".concat(S, "-close-x")
      }, null)]) : null]);
      return w ? $(Al, {
        to: w
      }, {
        default: function() {
          return O;
        }
      }) : O;
    };
  }
});
var Uu = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
}, la = 0, zu = Date.now();
function ua() {
  var e = la;
  return la += 1, "rcNotification_".concat(zu, "_").concat(e);
}
var Vr = ae({
  name: "Notification",
  inheritAttrs: !1,
  props: ["prefixCls", "transitionName", "animation", "maxCount", "closeIcon"],
  setup: function(t, r) {
    var n = r.attrs, a = r.expose, i = r.slots, o = /* @__PURE__ */ new Map(), l = ie([]), u = j(function() {
      var c = t.prefixCls, v = t.animation, f = v === void 0 ? "fade" : v, g = t.transitionName;
      return !g && f && (g = "".concat(c, "-").concat(f)), to(g);
    }), s = function(v, f) {
      var g = v.key || ua(), p = N(N({}, v), {
        key: g
      }), y = t.maxCount, h = l.value.map(function(x) {
        return x.notice.key;
      }).indexOf(g), w = l.value.concat();
      h !== -1 ? w.splice(h, 1, {
        notice: p,
        holderCallback: f
      }) : (y && l.value.length >= y && (p.key = w[0].notice.key, p.updateMark = ua(), p.userPassKey = g, w.shift()), w.push({
        notice: p,
        holderCallback: f
      })), l.value = w;
    }, d = function(v) {
      l.value = l.value.filter(function(f) {
        var g = f.notice, p = g.key, y = g.userPassKey, h = y || p;
        return h !== v;
      });
    };
    return a({
      add: s,
      remove: d,
      notices: l
    }), function() {
      var c, v, f = t.prefixCls, g = t.closeIcon, p = g === void 0 ? (v = i.closeIcon) === null || v === void 0 ? void 0 : v.call(i, {
        prefixCls: f
      }) : g, y = l.value.map(function(w, x) {
        var m = w.notice, S = w.holderCallback, C = x === l.value.length - 1 ? m.updateMark : void 0, O = m.key, T = m.userPassKey, L = m.content, U = N(N(N({
          prefixCls: f,
          closeIcon: typeof p == "function" ? p({
            prefixCls: f
          }) : p
        }, m), m.props), {
          key: O,
          noticeKey: T || O,
          updateMark: C,
          onClose: function(k) {
            var P;
            d(k), (P = m.onClose) === null || P === void 0 || P.call(m);
          },
          onClick: m.onClick
        });
        return S ? $("div", {
          key: O,
          class: "".concat(f, "-hook-holder"),
          ref: function(k) {
            typeof O > "u" || (k ? (o.set(O, k), S(k, U)) : o.delete(O));
          }
        }, null) : $(Gu, U, {
          default: function() {
            return [typeof L == "function" ? L({
              prefixCls: f
            }) : L];
          }
        });
      }), h = (c = {}, B(c, f, 1), B(c, n.class, !!n.class), c);
      return $("div", {
        class: h,
        style: n.style || {
          top: "65px",
          left: "50%"
        }
      }, [$(Si, Z({
        tag: "div"
      }, u.value), {
        default: function() {
          return [y];
        }
      })]);
    };
  }
});
Vr.newInstance = function(t, r) {
  var n = t || {}, a = n.name, i = a === void 0 ? "notification" : a, o = n.getContainer, l = n.appContext, u = n.prefixCls, s = n.rootPrefixCls, d = n.transitionName, c = n.hasTransitionName, v = Uu(n, ["name", "getContainer", "appContext", "prefixCls", "rootPrefixCls", "transitionName", "hasTransitionName"]), f = document.createElement("div");
  if (o) {
    var g = o();
    g.appendChild(f);
  } else
    document.body.appendChild(f);
  var p = ae({
    name: "NotificationWrapper",
    setup: function(w, x) {
      var m = x.attrs, S = ie();
      return Tt(function() {
        r({
          notice: function(O) {
            var T;
            (T = S.value) === null || T === void 0 || T.add(O);
          },
          removeNotice: function(O) {
            var T;
            (T = S.value) === null || T === void 0 || T.remove(O);
          },
          destroy: function() {
            Zn(null, f), f.parentNode && f.parentNode.removeChild(f);
          },
          component: S
        });
      }), function() {
        var C = fe, O = C.getPrefixCls(i, u), T = C.getRootPrefixCls(s, O), L = c ? d : "".concat(T, "-").concat(d);
        return $(gt, Z(Z({}, C), {}, {
          notUpdateGlobalConfig: !0,
          prefixCls: T
        }), {
          default: function() {
            return [$(Vr, Z(Z({
              ref: S
            }, m), {}, {
              prefixCls: O,
              transitionName: L
            }), null)];
          }
        });
      };
    }
  }), y = $(p, v);
  y.appContext = l || y.appContext, Zn(y, f);
};
const ro = Vr;
var Wu = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, name: "loading", theme: "outlined" };
const Yu = Wu;
function ee(e, t) {
  Ku(e) && (e = "100%");
  var r = Xu(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), r && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function Nt(e) {
  return Math.min(1, Math.max(0, e));
}
function Ku(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function Xu(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function no(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function Lt(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function Ge(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function Zu(e, t, r) {
  return {
    r: ee(e, 255) * 255,
    g: ee(t, 255) * 255,
    b: ee(r, 255) * 255
  };
}
function ca(e, t, r) {
  e = ee(e, 255), t = ee(t, 255), r = ee(r, 255);
  var n = Math.max(e, t, r), a = Math.min(e, t, r), i = 0, o = 0, l = (n + a) / 2;
  if (n === a)
    o = 0, i = 0;
  else {
    var u = n - a;
    switch (o = l > 0.5 ? u / (2 - n - a) : u / (n + a), n) {
      case e:
        i = (t - r) / u + (t < r ? 6 : 0);
        break;
      case t:
        i = (r - e) / u + 2;
        break;
      case r:
        i = (e - t) / u + 4;
        break;
    }
    i /= 6;
  }
  return { h: i, s: o, l };
}
function br(e, t, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * (6 * r) : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e;
}
function Ju(e, t, r) {
  var n, a, i;
  if (e = ee(e, 360), t = ee(t, 100), r = ee(r, 100), t === 0)
    a = r, i = r, n = r;
  else {
    var o = r < 0.5 ? r * (1 + t) : r + t - r * t, l = 2 * r - o;
    n = br(l, o, e + 1 / 3), a = br(l, o, e), i = br(l, o, e - 1 / 3);
  }
  return { r: n * 255, g: a * 255, b: i * 255 };
}
function Hr(e, t, r) {
  e = ee(e, 255), t = ee(t, 255), r = ee(r, 255);
  var n = Math.max(e, t, r), a = Math.min(e, t, r), i = 0, o = n, l = n - a, u = n === 0 ? 0 : l / n;
  if (n === a)
    i = 0;
  else {
    switch (n) {
      case e:
        i = (t - r) / l + (t < r ? 6 : 0);
        break;
      case t:
        i = (r - e) / l + 2;
        break;
      case r:
        i = (e - t) / l + 4;
        break;
    }
    i /= 6;
  }
  return { h: i, s: u, v: o };
}
function Qu(e, t, r) {
  e = ee(e, 360) * 6, t = ee(t, 100), r = ee(r, 100);
  var n = Math.floor(e), a = e - n, i = r * (1 - t), o = r * (1 - a * t), l = r * (1 - (1 - a) * t), u = n % 6, s = [r, o, i, i, l, r][u], d = [l, r, r, o, i, i][u], c = [i, i, l, r, r, o][u];
  return { r: s * 255, g: d * 255, b: c * 255 };
}
function Gr(e, t, r, n) {
  var a = [
    Ge(Math.round(e).toString(16)),
    Ge(Math.round(t).toString(16)),
    Ge(Math.round(r).toString(16))
  ];
  return n && a[0].startsWith(a[0].charAt(1)) && a[1].startsWith(a[1].charAt(1)) && a[2].startsWith(a[2].charAt(1)) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) : a.join("");
}
function ec(e, t, r, n, a) {
  var i = [
    Ge(Math.round(e).toString(16)),
    Ge(Math.round(t).toString(16)),
    Ge(Math.round(r).toString(16)),
    Ge(tc(n))
  ];
  return a && i[0].startsWith(i[0].charAt(1)) && i[1].startsWith(i[1].charAt(1)) && i[2].startsWith(i[2].charAt(1)) && i[3].startsWith(i[3].charAt(1)) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) + i[3].charAt(0) : i.join("");
}
function tc(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function sa(e) {
  return ue(e) / 255;
}
function ue(e) {
  return parseInt(e, 16);
}
function rc(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var Ur = {
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
function et(e) {
  var t = { r: 0, g: 0, b: 0 }, r = 1, n = null, a = null, i = null, o = !1, l = !1;
  return typeof e == "string" && (e = ic(e)), typeof e == "object" && (Ae(e.r) && Ae(e.g) && Ae(e.b) ? (t = Zu(e.r, e.g, e.b), o = !0, l = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : Ae(e.h) && Ae(e.s) && Ae(e.v) ? (n = Lt(e.s), a = Lt(e.v), t = Qu(e.h, n, a), o = !0, l = "hsv") : Ae(e.h) && Ae(e.s) && Ae(e.l) && (n = Lt(e.s), i = Lt(e.l), t = Ju(e.h, n, i), o = !0, l = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (r = e.a)), r = no(r), {
    ok: o,
    format: e.format || l,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: r
  };
}
var nc = "[-\\+]?\\d+%?", ac = "[-\\+]?\\d*\\.\\d+%?", Le = "(?:".concat(ac, ")|(?:").concat(nc, ")"), wr = "[\\s|\\(]+(".concat(Le, ")[,|\\s]+(").concat(Le, ")[,|\\s]+(").concat(Le, ")\\s*\\)?"), xr = "[\\s|\\(]+(".concat(Le, ")[,|\\s]+(").concat(Le, ")[,|\\s]+(").concat(Le, ")[,|\\s]+(").concat(Le, ")\\s*\\)?"), he = {
  CSS_UNIT: new RegExp(Le),
  rgb: new RegExp("rgb" + wr),
  rgba: new RegExp("rgba" + xr),
  hsl: new RegExp("hsl" + wr),
  hsla: new RegExp("hsla" + xr),
  hsv: new RegExp("hsv" + wr),
  hsva: new RegExp("hsva" + xr),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function ic(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (Ur[e])
    e = Ur[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var r = he.rgb.exec(e);
  return r ? { r: r[1], g: r[2], b: r[3] } : (r = he.rgba.exec(e), r ? { r: r[1], g: r[2], b: r[3], a: r[4] } : (r = he.hsl.exec(e), r ? { h: r[1], s: r[2], l: r[3] } : (r = he.hsla.exec(e), r ? { h: r[1], s: r[2], l: r[3], a: r[4] } : (r = he.hsv.exec(e), r ? { h: r[1], s: r[2], v: r[3] } : (r = he.hsva.exec(e), r ? { h: r[1], s: r[2], v: r[3], a: r[4] } : (r = he.hex8.exec(e), r ? {
    r: ue(r[1]),
    g: ue(r[2]),
    b: ue(r[3]),
    a: sa(r[4]),
    format: t ? "name" : "hex8"
  } : (r = he.hex6.exec(e), r ? {
    r: ue(r[1]),
    g: ue(r[2]),
    b: ue(r[3]),
    format: t ? "name" : "hex"
  } : (r = he.hex4.exec(e), r ? {
    r: ue(r[1] + r[1]),
    g: ue(r[2] + r[2]),
    b: ue(r[3] + r[3]),
    a: sa(r[4] + r[4]),
    format: t ? "name" : "hex8"
  } : (r = he.hex3.exec(e), r ? {
    r: ue(r[1] + r[1]),
    g: ue(r[2] + r[2]),
    b: ue(r[3] + r[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function Ae(e) {
  return Boolean(he.CSS_UNIT.exec(String(e)));
}
var Cr = function() {
  function e(t, r) {
    t === void 0 && (t = ""), r === void 0 && (r = {});
    var n;
    if (t instanceof e)
      return t;
    typeof t == "number" && (t = rc(t)), this.originalInput = t;
    var a = et(t);
    this.originalInput = t, this.r = a.r, this.g = a.g, this.b = a.b, this.a = a.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (n = r.format) !== null && n !== void 0 ? n : a.format, this.gradientType = r.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = a.ok;
  }
  return e.prototype.isDark = function() {
    return this.getBrightness() < 128;
  }, e.prototype.isLight = function() {
    return !this.isDark();
  }, e.prototype.getBrightness = function() {
    var t = this.toRgb();
    return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
  }, e.prototype.getLuminance = function() {
    var t = this.toRgb(), r, n, a, i = t.r / 255, o = t.g / 255, l = t.b / 255;
    return i <= 0.03928 ? r = i / 12.92 : r = Math.pow((i + 0.055) / 1.055, 2.4), o <= 0.03928 ? n = o / 12.92 : n = Math.pow((o + 0.055) / 1.055, 2.4), l <= 0.03928 ? a = l / 12.92 : a = Math.pow((l + 0.055) / 1.055, 2.4), 0.2126 * r + 0.7152 * n + 0.0722 * a;
  }, e.prototype.getAlpha = function() {
    return this.a;
  }, e.prototype.setAlpha = function(t) {
    return this.a = no(t), this.roundA = Math.round(100 * this.a) / 100, this;
  }, e.prototype.toHsv = function() {
    var t = Hr(this.r, this.g, this.b);
    return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
  }, e.prototype.toHsvString = function() {
    var t = Hr(this.r, this.g, this.b), r = Math.round(t.h * 360), n = Math.round(t.s * 100), a = Math.round(t.v * 100);
    return this.a === 1 ? "hsv(".concat(r, ", ").concat(n, "%, ").concat(a, "%)") : "hsva(".concat(r, ", ").concat(n, "%, ").concat(a, "%, ").concat(this.roundA, ")");
  }, e.prototype.toHsl = function() {
    var t = ca(this.r, this.g, this.b);
    return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
  }, e.prototype.toHslString = function() {
    var t = ca(this.r, this.g, this.b), r = Math.round(t.h * 360), n = Math.round(t.s * 100), a = Math.round(t.l * 100);
    return this.a === 1 ? "hsl(".concat(r, ", ").concat(n, "%, ").concat(a, "%)") : "hsla(".concat(r, ", ").concat(n, "%, ").concat(a, "%, ").concat(this.roundA, ")");
  }, e.prototype.toHex = function(t) {
    return t === void 0 && (t = !1), Gr(this.r, this.g, this.b, t);
  }, e.prototype.toHexString = function(t) {
    return t === void 0 && (t = !1), "#" + this.toHex(t);
  }, e.prototype.toHex8 = function(t) {
    return t === void 0 && (t = !1), ec(this.r, this.g, this.b, this.a, t);
  }, e.prototype.toHex8String = function(t) {
    return t === void 0 && (t = !1), "#" + this.toHex8(t);
  }, e.prototype.toRgb = function() {
    return {
      r: Math.round(this.r),
      g: Math.round(this.g),
      b: Math.round(this.b),
      a: this.a
    };
  }, e.prototype.toRgbString = function() {
    var t = Math.round(this.r), r = Math.round(this.g), n = Math.round(this.b);
    return this.a === 1 ? "rgb(".concat(t, ", ").concat(r, ", ").concat(n, ")") : "rgba(".concat(t, ", ").concat(r, ", ").concat(n, ", ").concat(this.roundA, ")");
  }, e.prototype.toPercentageRgb = function() {
    var t = function(r) {
      return "".concat(Math.round(ee(r, 255) * 100), "%");
    };
    return {
      r: t(this.r),
      g: t(this.g),
      b: t(this.b),
      a: this.a
    };
  }, e.prototype.toPercentageRgbString = function() {
    var t = function(r) {
      return Math.round(ee(r, 255) * 100);
    };
    return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")");
  }, e.prototype.toName = function() {
    if (this.a === 0)
      return "transparent";
    if (this.a < 1)
      return !1;
    for (var t = "#" + Gr(this.r, this.g, this.b, !1), r = 0, n = Object.entries(Ur); r < n.length; r++) {
      var a = n[r], i = a[0], o = a[1];
      if (t === o)
        return i;
    }
    return !1;
  }, e.prototype.toString = function(t) {
    var r = Boolean(t);
    t = t != null ? t : this.format;
    var n = !1, a = this.a < 1 && this.a >= 0, i = !r && a && (t.startsWith("hex") || t === "name");
    return i ? t === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (t === "rgb" && (n = this.toRgbString()), t === "prgb" && (n = this.toPercentageRgbString()), (t === "hex" || t === "hex6") && (n = this.toHexString()), t === "hex3" && (n = this.toHexString(!0)), t === "hex4" && (n = this.toHex8String(!0)), t === "hex8" && (n = this.toHex8String()), t === "name" && (n = this.toName()), t === "hsl" && (n = this.toHslString()), t === "hsv" && (n = this.toHsvString()), n || this.toHexString());
  }, e.prototype.toNumber = function() {
    return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
  }, e.prototype.clone = function() {
    return new e(this.toString());
  }, e.prototype.lighten = function(t) {
    t === void 0 && (t = 10);
    var r = this.toHsl();
    return r.l += t / 100, r.l = Nt(r.l), new e(r);
  }, e.prototype.brighten = function(t) {
    t === void 0 && (t = 10);
    var r = this.toRgb();
    return r.r = Math.max(0, Math.min(255, r.r - Math.round(255 * -(t / 100)))), r.g = Math.max(0, Math.min(255, r.g - Math.round(255 * -(t / 100)))), r.b = Math.max(0, Math.min(255, r.b - Math.round(255 * -(t / 100)))), new e(r);
  }, e.prototype.darken = function(t) {
    t === void 0 && (t = 10);
    var r = this.toHsl();
    return r.l -= t / 100, r.l = Nt(r.l), new e(r);
  }, e.prototype.tint = function(t) {
    return t === void 0 && (t = 10), this.mix("white", t);
  }, e.prototype.shade = function(t) {
    return t === void 0 && (t = 10), this.mix("black", t);
  }, e.prototype.desaturate = function(t) {
    t === void 0 && (t = 10);
    var r = this.toHsl();
    return r.s -= t / 100, r.s = Nt(r.s), new e(r);
  }, e.prototype.saturate = function(t) {
    t === void 0 && (t = 10);
    var r = this.toHsl();
    return r.s += t / 100, r.s = Nt(r.s), new e(r);
  }, e.prototype.greyscale = function() {
    return this.desaturate(100);
  }, e.prototype.spin = function(t) {
    var r = this.toHsl(), n = (r.h + t) % 360;
    return r.h = n < 0 ? 360 + n : n, new e(r);
  }, e.prototype.mix = function(t, r) {
    r === void 0 && (r = 50);
    var n = this.toRgb(), a = new e(t).toRgb(), i = r / 100, o = {
      r: (a.r - n.r) * i + n.r,
      g: (a.g - n.g) * i + n.g,
      b: (a.b - n.b) * i + n.b,
      a: (a.a - n.a) * i + n.a
    };
    return new e(o);
  }, e.prototype.analogous = function(t, r) {
    t === void 0 && (t = 6), r === void 0 && (r = 30);
    var n = this.toHsl(), a = 360 / r, i = [this];
    for (n.h = (n.h - (a * t >> 1) + 720) % 360; --t; )
      n.h = (n.h + a) % 360, i.push(new e(n));
    return i;
  }, e.prototype.complement = function() {
    var t = this.toHsl();
    return t.h = (t.h + 180) % 360, new e(t);
  }, e.prototype.monochromatic = function(t) {
    t === void 0 && (t = 6);
    for (var r = this.toHsv(), n = r.h, a = r.s, i = r.v, o = [], l = 1 / t; t--; )
      o.push(new e({ h: n, s: a, v: i })), i = (i + l) % 1;
    return o;
  }, e.prototype.splitcomplement = function() {
    var t = this.toHsl(), r = t.h;
    return [
      this,
      new e({ h: (r + 72) % 360, s: t.s, l: t.l }),
      new e({ h: (r + 216) % 360, s: t.s, l: t.l })
    ];
  }, e.prototype.onBackground = function(t) {
    var r = this.toRgb(), n = new e(t).toRgb();
    return new e({
      r: n.r + (r.r - n.r) * r.a,
      g: n.g + (r.g - n.g) * r.a,
      b: n.b + (r.b - n.b) * r.a
    });
  }, e.prototype.triad = function() {
    return this.polyad(3);
  }, e.prototype.tetrad = function() {
    return this.polyad(4);
  }, e.prototype.polyad = function(t) {
    for (var r = this.toHsl(), n = r.h, a = [this], i = 360 / t, o = 1; o < t; o++)
      a.push(new e({ h: (n + o * i) % 360, s: r.s, l: r.l }));
    return a;
  }, e.prototype.equals = function(t) {
    return this.toRgbString() === new e(t).toRgbString();
  }, e;
}(), Rt = 2, fa = 0.16, oc = 0.05, lc = 0.05, uc = 0.15, ao = 5, io = 4, cc = [{
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
function da(e) {
  var t = e.r, r = e.g, n = e.b, a = Hr(t, r, n);
  return {
    h: a.h * 360,
    s: a.s,
    v: a.v
  };
}
function qt(e) {
  var t = e.r, r = e.g, n = e.b;
  return "#".concat(Gr(t, r, n, !1));
}
function sc(e, t, r) {
  var n = r / 100, a = {
    r: (t.r - e.r) * n + e.r,
    g: (t.g - e.g) * n + e.g,
    b: (t.b - e.b) * n + e.b
  };
  return a;
}
function va(e, t, r) {
  var n;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? n = r ? Math.round(e.h) - Rt * t : Math.round(e.h) + Rt * t : n = r ? Math.round(e.h) + Rt * t : Math.round(e.h) - Rt * t, n < 0 ? n += 360 : n >= 360 && (n -= 360), n;
}
function pa(e, t, r) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var n;
  return r ? n = e.s - fa * t : t === io ? n = e.s + fa : n = e.s + oc * t, n > 1 && (n = 1), r && t === ao && n > 0.1 && (n = 0.1), n < 0.06 && (n = 0.06), Number(n.toFixed(2));
}
function ga(e, t, r) {
  var n;
  return r ? n = e.v + lc * t : n = e.v - uc * t, n > 1 && (n = 1), Number(n.toFixed(2));
}
function xt(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = [], n = et(e), a = ao; a > 0; a -= 1) {
    var i = da(n), o = qt(et({
      h: va(i, a, !0),
      s: pa(i, a, !0),
      v: ga(i, a, !0)
    }));
    r.push(o);
  }
  r.push(qt(n));
  for (var l = 1; l <= io; l += 1) {
    var u = da(n), s = qt(et({
      h: va(u, l),
      s: pa(u, l),
      v: ga(u, l)
    }));
    r.push(s);
  }
  return t.theme === "dark" ? cc.map(function(d) {
    var c = d.index, v = d.opacity, f = qt(sc(et(t.backgroundColor || "#141414"), et(r[c]), v * 100));
    return f;
  }) : r;
}
var Or = {
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
}, _r = {}, Sr = {};
Object.keys(Or).forEach(function(e) {
  _r[e] = xt(Or[e]), _r[e].primary = _r[e][5], Sr[e] = xt(Or[e], {
    theme: "dark",
    backgroundColor: "#141414"
  }), Sr[e].primary = Sr[e][5];
});
var ha = [], st = [], fc = "insert-css: You need to provide a CSS string. Usage: insertCss(cssString[, options]).";
function dc() {
  var e = document.createElement("style");
  return e.setAttribute("type", "text/css"), e;
}
function vc(e, t) {
  if (t = t || {}, e === void 0)
    throw new Error(fc);
  var r = t.prepend === !0 ? "prepend" : "append", n = t.container !== void 0 ? t.container : document.querySelector("head"), a = ha.indexOf(n);
  a === -1 && (a = ha.push(n) - 1, st[a] = {});
  var i;
  return st[a] !== void 0 && st[a][r] !== void 0 ? i = st[a][r] : (i = st[a][r] = dc(), r === "prepend" ? n.insertBefore(i, n.childNodes[0]) : n.appendChild(i)), e.charCodeAt(0) === 65279 && (e = e.substr(1, e.length)), i.styleSheet ? i.styleSheet.cssText += e : i.textContent += e, i;
}
function ma(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? Object(arguments[t]) : {}, n = Object.keys(r);
    typeof Object.getOwnPropertySymbols == "function" && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(a) {
      return Object.getOwnPropertyDescriptor(r, a).enumerable;
    }))), n.forEach(function(a) {
      pc(e, a, r[a]);
    });
  }
  return e;
}
function pc(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function gc(e, t) {
  process.env.NODE_ENV !== "production" && !e && console !== void 0 && console.error("Warning: ".concat(t));
}
function hc(e, t) {
  gc(e, "[@ant-design/icons-vue] ".concat(t));
}
function ya(e) {
  return typeof e == "object" && typeof e.name == "string" && typeof e.theme == "string" && (typeof e.icon == "object" || typeof e.icon == "function");
}
function zr(e, t, r) {
  return r ? Jn(e.tag, ma({
    key: t
  }, r, e.attrs), (e.children || []).map(function(n, a) {
    return zr(n, "".concat(t, "-").concat(e.tag, "-").concat(a));
  })) : Jn(e.tag, ma({
    key: t
  }, e.attrs), (e.children || []).map(function(n, a) {
    return zr(n, "".concat(t, "-").concat(e.tag, "-").concat(a));
  }));
}
function oo(e) {
  return xt(e)[0];
}
function lo(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
var mc = `
.anticon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`, ba = !1, yc = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : mc;
  lr(function() {
    ba || (typeof window < "u" && window.document && window.document.documentElement && vc(t, {
      prepend: !0
    }), ba = !0);
  });
}, bc = ["icon", "primaryColor", "secondaryColor"];
function wc(e, t) {
  if (e == null)
    return {};
  var r = xc(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]));
  }
  return r;
}
function xc(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, i;
  for (i = 0; i < n.length; i++)
    a = n[i], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function Yt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? Object(arguments[t]) : {}, n = Object.keys(r);
    typeof Object.getOwnPropertySymbols == "function" && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(a) {
      return Object.getOwnPropertyDescriptor(r, a).enumerable;
    }))), n.forEach(function(a) {
      Cc(e, a, r[a]);
    });
  }
  return e;
}
function Cc(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var pt = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function Oc(e) {
  var t = e.primaryColor, r = e.secondaryColor;
  pt.primaryColor = t, pt.secondaryColor = r || oo(t), pt.calculated = !!r;
}
function _c() {
  return Yt({}, pt);
}
var ot = function(t, r) {
  var n = Yt({}, t, r.attrs), a = n.icon, i = n.primaryColor, o = n.secondaryColor, l = wc(n, bc), u = pt;
  if (i && (u = {
    primaryColor: i,
    secondaryColor: o || oo(i)
  }), yc(), hc(ya(a), "icon should be icon definiton, but got ".concat(a)), !ya(a))
    return null;
  var s = a;
  return s && typeof s.icon == "function" && (s = Yt({}, s, {
    icon: s.icon(u.primaryColor, u.secondaryColor)
  })), zr(s.icon, "svg-".concat(s.name), Yt({}, l, {
    "data-icon": s.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }));
};
ot.props = {
  icon: Object,
  primaryColor: String,
  secondaryColor: String,
  focusable: String
};
ot.inheritAttrs = !1;
ot.displayName = "IconBase";
ot.getTwoToneColors = _c;
ot.setTwoToneColors = Oc;
const xn = ot;
function Sc(e, t) {
  return Ac(e) || Tc(e, t) || $c(e, t) || Pc();
}
function Pc() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function $c(e, t) {
  if (!!e) {
    if (typeof e == "string")
      return wa(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return wa(e, t);
  }
}
function wa(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function Tc(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n = [], a = !0, i = !1, o, l;
    try {
      for (r = r.call(e); !(a = (o = r.next()).done) && (n.push(o.value), !(t && n.length === t)); a = !0)
        ;
    } catch (u) {
      i = !0, l = u;
    } finally {
      try {
        !a && r.return != null && r.return();
      } finally {
        if (i)
          throw l;
      }
    }
    return n;
  }
}
function Ac(e) {
  if (Array.isArray(e))
    return e;
}
function uo(e) {
  var t = lo(e), r = Sc(t, 2), n = r[0], a = r[1];
  return xn.setTwoToneColors({
    primaryColor: n,
    secondaryColor: a
  });
}
function Fc() {
  var e = xn.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var jc = ["class", "icon", "spin", "rotate", "tabindex", "twoToneColor", "onClick"];
function Ec(e, t) {
  return Lc(e) || Nc(e, t) || Mc(e, t) || Ic();
}
function Ic() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Mc(e, t) {
  if (!!e) {
    if (typeof e == "string")
      return xa(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return xa(e, t);
  }
}
function xa(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function Nc(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n = [], a = !0, i = !1, o, l;
    try {
      for (r = r.call(e); !(a = (o = r.next()).done) && (n.push(o.value), !(t && n.length === t)); a = !0)
        ;
    } catch (u) {
      i = !0, l = u;
    } finally {
      try {
        !a && r.return != null && r.return();
      } finally {
        if (i)
          throw l;
      }
    }
    return n;
  }
}
function Lc(e) {
  if (Array.isArray(e))
    return e;
}
function Ca(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? Object(arguments[t]) : {}, n = Object.keys(r);
    typeof Object.getOwnPropertySymbols == "function" && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(a) {
      return Object.getOwnPropertyDescriptor(r, a).enumerable;
    }))), n.forEach(function(a) {
      Wr(e, a, r[a]);
    });
  }
  return e;
}
function Wr(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Rc(e, t) {
  if (e == null)
    return {};
  var r = qc(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]));
  }
  return r;
}
function qc(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, i;
  for (i = 0; i < n.length; i++)
    a = n[i], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
uo("#1890ff");
var lt = function(t, r) {
  var n, a = Ca({}, t, r.attrs), i = a.class, o = a.icon, l = a.spin, u = a.rotate, s = a.tabindex, d = a.twoToneColor, c = a.onClick, v = Rc(a, jc), f = (n = {
    anticon: !0
  }, Wr(n, "anticon-".concat(o.name), Boolean(o.name)), Wr(n, i, i), n), g = l === "" || !!l || o.name === "loading" ? "anticon-spin" : "", p = s;
  p === void 0 && c && (p = -1, v.tabindex = p);
  var y = u ? {
    msTransform: "rotate(".concat(u, "deg)"),
    transform: "rotate(".concat(u, "deg)")
  } : void 0, h = lo(d), w = Ec(h, 2), x = w[0], m = w[1];
  return $("span", Ca({
    role: "img",
    "aria-label": o.name
  }, v, {
    onClick: c,
    class: f
  }), [$(xn, {
    class: g,
    icon: o,
    primaryColor: x,
    secondaryColor: m,
    style: y
  }, null)]);
};
lt.props = {
  spin: Boolean,
  rotate: Number,
  icon: Object,
  twoToneColor: String
};
lt.displayName = "AntdIcon";
lt.inheritAttrs = !1;
lt.getTwoToneColor = Fc;
lt.setTwoToneColor = uo;
const Te = lt;
function Oa(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? Object(arguments[t]) : {}, n = Object.keys(r);
    typeof Object.getOwnPropertySymbols == "function" && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(a) {
      return Object.getOwnPropertyDescriptor(r, a).enumerable;
    }))), n.forEach(function(a) {
      kc(e, a, r[a]);
    });
  }
  return e;
}
function kc(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var Cn = function(t, r) {
  var n = Oa({}, t, r.attrs);
  return $(Te, Oa({}, n, {
    icon: Yu
  }), null);
};
Cn.displayName = "LoadingOutlined";
Cn.inheritAttrs = !1;
const co = Cn;
var Dc = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "exclamation-circle", theme: "filled" };
const Bc = Dc;
function _a(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? Object(arguments[t]) : {}, n = Object.keys(r);
    typeof Object.getOwnPropertySymbols == "function" && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(a) {
      return Object.getOwnPropertyDescriptor(r, a).enumerable;
    }))), n.forEach(function(a) {
      Vc(e, a, r[a]);
    });
  }
  return e;
}
function Vc(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var On = function(t, r) {
  var n = _a({}, t, r.attrs);
  return $(Te, _a({}, n, {
    icon: Bc
  }), null);
};
On.displayName = "ExclamationCircleFilled";
On.inheritAttrs = !1;
const so = On;
var Hc = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z" } }] }, name: "close-circle", theme: "filled" };
const Gc = Hc;
function Sa(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? Object(arguments[t]) : {}, n = Object.keys(r);
    typeof Object.getOwnPropertySymbols == "function" && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(a) {
      return Object.getOwnPropertyDescriptor(r, a).enumerable;
    }))), n.forEach(function(a) {
      Uc(e, a, r[a]);
    });
  }
  return e;
}
function Uc(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var _n = function(t, r) {
  var n = Sa({}, t, r.attrs);
  return $(Te, Sa({}, n, {
    icon: Gc
  }), null);
};
_n.displayName = "CloseCircleFilled";
_n.inheritAttrs = !1;
const fo = _n;
var zc = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" } }] }, name: "check-circle", theme: "filled" };
const Wc = zc;
function Pa(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? Object(arguments[t]) : {}, n = Object.keys(r);
    typeof Object.getOwnPropertySymbols == "function" && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(a) {
      return Object.getOwnPropertyDescriptor(r, a).enumerable;
    }))), n.forEach(function(a) {
      Yc(e, a, r[a]);
    });
  }
  return e;
}
function Yc(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var Sn = function(t, r) {
  var n = Pa({}, t, r.attrs);
  return $(Te, Pa({}, n, {
    icon: Wc
  }), null);
};
Sn.displayName = "CheckCircleFilled";
Sn.inheritAttrs = !1;
const vo = Sn;
var Kc = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "info-circle", theme: "filled" };
const Xc = Kc;
function $a(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? Object(arguments[t]) : {}, n = Object.keys(r);
    typeof Object.getOwnPropertySymbols == "function" && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(a) {
      return Object.getOwnPropertyDescriptor(r, a).enumerable;
    }))), n.forEach(function(a) {
      Zc(e, a, r[a]);
    });
  }
  return e;
}
function Zc(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var Pn = function(t, r) {
  var n = $a({}, t, r.attrs);
  return $(Te, $a({}, n, {
    icon: Xc
  }), null);
};
Pn.displayName = "InfoCircleFilled";
Pn.inheritAttrs = !1;
const Jc = Pn;
var po = 3, go, ne, Qc = 1, ho = "", mo = "move-up", yo = !1, bo = function() {
  return document.body;
}, wo, xo = !1;
function es() {
  return Qc++;
}
function ts(e) {
  e.top !== void 0 && (go = e.top, ne = null), e.duration !== void 0 && (po = e.duration), e.prefixCls !== void 0 && (ho = e.prefixCls), e.getContainer !== void 0 && (bo = e.getContainer, ne = null), e.transitionName !== void 0 && (mo = e.transitionName, ne = null, yo = !0), e.maxCount !== void 0 && (wo = e.maxCount, ne = null), e.rtl !== void 0 && (xo = e.rtl);
}
function rs(e, t) {
  if (ne) {
    t(ne);
    return;
  }
  ro.newInstance({
    appContext: e.appContext,
    prefixCls: e.prefixCls || ho,
    rootPrefixCls: e.rootPrefixCls,
    transitionName: mo,
    hasTransitionName: yo,
    style: {
      top: go
    },
    getContainer: bo || e.getPopupContainer,
    maxCount: wo,
    name: "message"
  }, function(r) {
    if (ne) {
      t(ne);
      return;
    }
    ne = r, t(r);
  });
}
var ns = {
  info: Jc,
  success: vo,
  error: fo,
  warning: so,
  loading: co
};
function as(e) {
  var t = e.duration !== void 0 ? e.duration : po, r = e.key || es(), n = new Promise(function(i) {
    var o = function() {
      return typeof e.onClose == "function" && e.onClose(), i(!0);
    };
    rs(e, function(l) {
      l.notice({
        key: r,
        duration: t,
        style: e.style || {},
        class: e.class,
        content: function(s) {
          var d, c = s.prefixCls, v = ns[e.type], f = v ? $(v, null, null) : "", g = be("".concat(c, "-custom-content"), (d = {}, B(d, "".concat(c, "-").concat(e.type), e.type), B(d, "".concat(c, "-rtl"), xo === !0), d));
          return $("div", {
            class: g
          }, [typeof e.icon == "function" ? e.icon() : e.icon || f, $("span", null, [typeof e.content == "function" ? e.content() : e.content])]);
        },
        onClose: o,
        onClick: e.onClick
      });
    });
  }), a = function() {
    ne && ne.removeNotice(r);
  };
  return a.then = function(i, o) {
    return n.then(i, o);
  }, a.promise = n, a;
}
function is(e) {
  return Object.prototype.toString.call(e) === "[object Object]" && !!e.content;
}
var tr = {
  open: as,
  config: ts,
  destroy: function(t) {
    if (ne)
      if (t) {
        var r = ne, n = r.removeNotice;
        n(t);
      } else {
        var a = ne, i = a.destroy;
        i(), ne = null;
      }
  }
};
function os(e, t) {
  e[t] = function(r, n, a) {
    return is(r) ? e.open(N(N({}, r), {
      type: t
    })) : (typeof n == "function" && (a = n, n = void 0), e.open({
      content: r,
      duration: n,
      type: t,
      onClose: a
    }));
  };
}
["success", "info", "warning", "error", "loading"].forEach(function(e) {
  return os(tr, e);
});
tr.warn = tr.warning;
const ls = tr;
var Co = { exports: {} }, Oo = { exports: {} };
(function(e) {
  function t(r) {
    return e.exports = t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
      return typeof n;
    } : function(n) {
      return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
    }, e.exports.__esModule = !0, e.exports.default = e.exports, t(r);
  }
  e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
})(Oo);
(function(e) {
  var t = Oo.exports.default;
  function r() {
    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
    e.exports = r = function() {
      return n;
    }, e.exports.__esModule = !0, e.exports.default = e.exports;
    var n = {}, a = Object.prototype, i = a.hasOwnProperty, o = typeof Symbol == "function" ? Symbol : {}, l = o.iterator || "@@iterator", u = o.asyncIterator || "@@asyncIterator", s = o.toStringTag || "@@toStringTag";
    function d(P, b, I) {
      return Object.defineProperty(P, b, {
        value: I,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }), P[b];
    }
    try {
      d({}, "");
    } catch {
      d = function(I, E, A) {
        return I[E] = A;
      };
    }
    function c(P, b, I, E) {
      var A = b && b.prototype instanceof g ? b : g, F = Object.create(A.prototype), _ = new U(E || []);
      return F._invoke = function(M, q, R) {
        var V = "suspendedStart";
        return function(G, z) {
          if (V === "executing")
            throw new Error("Generator is already running");
          if (V === "completed") {
            if (G === "throw")
              throw z;
            return k();
          }
          for (R.method = G, R.arg = z; ; ) {
            var J = R.delegate;
            if (J) {
              var K = O(J, R);
              if (K) {
                if (K === f)
                  continue;
                return K;
              }
            }
            if (R.method === "next")
              R.sent = R._sent = R.arg;
            else if (R.method === "throw") {
              if (V === "suspendedStart")
                throw V = "completed", R.arg;
              R.dispatchException(R.arg);
            } else
              R.method === "return" && R.abrupt("return", R.arg);
            V = "executing";
            var te = v(M, q, R);
            if (te.type === "normal") {
              if (V = R.done ? "completed" : "suspendedYield", te.arg === f)
                continue;
              return {
                value: te.arg,
                done: R.done
              };
            }
            te.type === "throw" && (V = "completed", R.method = "throw", R.arg = te.arg);
          }
        };
      }(P, I, _), F;
    }
    function v(P, b, I) {
      try {
        return {
          type: "normal",
          arg: P.call(b, I)
        };
      } catch (E) {
        return {
          type: "throw",
          arg: E
        };
      }
    }
    n.wrap = c;
    var f = {};
    function g() {
    }
    function p() {
    }
    function y() {
    }
    var h = {};
    d(h, l, function() {
      return this;
    });
    var w = Object.getPrototypeOf, x = w && w(w(D([])));
    x && x !== a && i.call(x, l) && (h = x);
    var m = y.prototype = g.prototype = Object.create(h);
    function S(P) {
      ["next", "throw", "return"].forEach(function(b) {
        d(P, b, function(I) {
          return this._invoke(b, I);
        });
      });
    }
    function C(P, b) {
      function I(A, F, _, M) {
        var q = v(P[A], P, F);
        if (q.type !== "throw") {
          var R = q.arg, V = R.value;
          return V && t(V) == "object" && i.call(V, "__await") ? b.resolve(V.__await).then(function(G) {
            I("next", G, _, M);
          }, function(G) {
            I("throw", G, _, M);
          }) : b.resolve(V).then(function(G) {
            R.value = G, _(R);
          }, function(G) {
            return I("throw", G, _, M);
          });
        }
        M(q.arg);
      }
      var E;
      this._invoke = function(A, F) {
        function _() {
          return new b(function(M, q) {
            I(A, F, M, q);
          });
        }
        return E = E ? E.then(_, _) : _();
      };
    }
    function O(P, b) {
      var I = P.iterator[b.method];
      if (I === void 0) {
        if (b.delegate = null, b.method === "throw") {
          if (P.iterator.return && (b.method = "return", b.arg = void 0, O(P, b), b.method === "throw"))
            return f;
          b.method = "throw", b.arg = new TypeError("The iterator does not provide a 'throw' method");
        }
        return f;
      }
      var E = v(I, P.iterator, b.arg);
      if (E.type === "throw")
        return b.method = "throw", b.arg = E.arg, b.delegate = null, f;
      var A = E.arg;
      return A ? A.done ? (b[P.resultName] = A.value, b.next = P.nextLoc, b.method !== "return" && (b.method = "next", b.arg = void 0), b.delegate = null, f) : A : (b.method = "throw", b.arg = new TypeError("iterator result is not an object"), b.delegate = null, f);
    }
    function T(P) {
      var b = {
        tryLoc: P[0]
      };
      1 in P && (b.catchLoc = P[1]), 2 in P && (b.finallyLoc = P[2], b.afterLoc = P[3]), this.tryEntries.push(b);
    }
    function L(P) {
      var b = P.completion || {};
      b.type = "normal", delete b.arg, P.completion = b;
    }
    function U(P) {
      this.tryEntries = [{
        tryLoc: "root"
      }], P.forEach(T, this), this.reset(!0);
    }
    function D(P) {
      if (P) {
        var b = P[l];
        if (b)
          return b.call(P);
        if (typeof P.next == "function")
          return P;
        if (!isNaN(P.length)) {
          var I = -1, E = function A() {
            for (; ++I < P.length; )
              if (i.call(P, I))
                return A.value = P[I], A.done = !1, A;
            return A.value = void 0, A.done = !0, A;
          };
          return E.next = E;
        }
      }
      return {
        next: k
      };
    }
    function k() {
      return {
        value: void 0,
        done: !0
      };
    }
    return p.prototype = y, d(m, "constructor", y), d(y, "constructor", p), p.displayName = d(y, s, "GeneratorFunction"), n.isGeneratorFunction = function(P) {
      var b = typeof P == "function" && P.constructor;
      return !!b && (b === p || (b.displayName || b.name) === "GeneratorFunction");
    }, n.mark = function(P) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(P, y) : (P.__proto__ = y, d(P, s, "GeneratorFunction")), P.prototype = Object.create(m), P;
    }, n.awrap = function(P) {
      return {
        __await: P
      };
    }, S(C.prototype), d(C.prototype, u, function() {
      return this;
    }), n.AsyncIterator = C, n.async = function(P, b, I, E, A) {
      A === void 0 && (A = Promise);
      var F = new C(c(P, b, I, E), A);
      return n.isGeneratorFunction(b) ? F : F.next().then(function(_) {
        return _.done ? _.value : F.next();
      });
    }, S(m), d(m, s, "Generator"), d(m, l, function() {
      return this;
    }), d(m, "toString", function() {
      return "[object Generator]";
    }), n.keys = function(P) {
      var b = [];
      for (var I in P)
        b.push(I);
      return b.reverse(), function E() {
        for (; b.length; ) {
          var A = b.pop();
          if (A in P)
            return E.value = A, E.done = !1, E;
        }
        return E.done = !0, E;
      };
    }, n.values = D, U.prototype = {
      constructor: U,
      reset: function(b) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(L), !b)
          for (var I in this)
            I.charAt(0) === "t" && i.call(this, I) && !isNaN(+I.slice(1)) && (this[I] = void 0);
      },
      stop: function() {
        this.done = !0;
        var b = this.tryEntries[0].completion;
        if (b.type === "throw")
          throw b.arg;
        return this.rval;
      },
      dispatchException: function(b) {
        if (this.done)
          throw b;
        var I = this;
        function E(R, V) {
          return _.type = "throw", _.arg = b, I.next = R, V && (I.method = "next", I.arg = void 0), !!V;
        }
        for (var A = this.tryEntries.length - 1; A >= 0; --A) {
          var F = this.tryEntries[A], _ = F.completion;
          if (F.tryLoc === "root")
            return E("end");
          if (F.tryLoc <= this.prev) {
            var M = i.call(F, "catchLoc"), q = i.call(F, "finallyLoc");
            if (M && q) {
              if (this.prev < F.catchLoc)
                return E(F.catchLoc, !0);
              if (this.prev < F.finallyLoc)
                return E(F.finallyLoc);
            } else if (M) {
              if (this.prev < F.catchLoc)
                return E(F.catchLoc, !0);
            } else {
              if (!q)
                throw new Error("try statement without catch or finally");
              if (this.prev < F.finallyLoc)
                return E(F.finallyLoc);
            }
          }
        }
      },
      abrupt: function(b, I) {
        for (var E = this.tryEntries.length - 1; E >= 0; --E) {
          var A = this.tryEntries[E];
          if (A.tryLoc <= this.prev && i.call(A, "finallyLoc") && this.prev < A.finallyLoc) {
            var F = A;
            break;
          }
        }
        F && (b === "break" || b === "continue") && F.tryLoc <= I && I <= F.finallyLoc && (F = null);
        var _ = F ? F.completion : {};
        return _.type = b, _.arg = I, F ? (this.method = "next", this.next = F.finallyLoc, f) : this.complete(_);
      },
      complete: function(b, I) {
        if (b.type === "throw")
          throw b.arg;
        return b.type === "break" || b.type === "continue" ? this.next = b.arg : b.type === "return" ? (this.rval = this.arg = b.arg, this.method = "return", this.next = "end") : b.type === "normal" && I && (this.next = I), f;
      },
      finish: function(b) {
        for (var I = this.tryEntries.length - 1; I >= 0; --I) {
          var E = this.tryEntries[I];
          if (E.finallyLoc === b)
            return this.complete(E.completion, E.afterLoc), L(E), f;
        }
      },
      catch: function(b) {
        for (var I = this.tryEntries.length - 1; I >= 0; --I) {
          var E = this.tryEntries[I];
          if (E.tryLoc === b) {
            var A = E.completion;
            if (A.type === "throw") {
              var F = A.arg;
              L(E);
            }
            return F;
          }
        }
        throw new Error("illegal catch attempt");
      },
      delegateYield: function(b, I, E) {
        return this.delegate = {
          iterator: D(b),
          resultName: I,
          nextLoc: E
        }, this.method === "next" && (this.arg = void 0), f;
      }
    }, n;
  }
  e.exports = r, e.exports.__esModule = !0, e.exports.default = e.exports;
})(Co);
var Kt = Co.exports(), ke = Kt;
try {
  regeneratorRuntime = Kt;
} catch {
  typeof globalThis == "object" ? globalThis.regeneratorRuntime = Kt : Function("r", "regeneratorRuntime = r")(Kt);
}
var us = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z" } }, { tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }] }, name: "check-circle", theme: "outlined" };
const cs = us;
function Ta(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? Object(arguments[t]) : {}, n = Object.keys(r);
    typeof Object.getOwnPropertySymbols == "function" && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(a) {
      return Object.getOwnPropertyDescriptor(r, a).enumerable;
    }))), n.forEach(function(a) {
      ss(e, a, r[a]);
    });
  }
  return e;
}
function ss(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var $n = function(t, r) {
  var n = Ta({}, t, r.attrs);
  return $(Te, Ta({}, n, {
    icon: cs
  }), null);
};
$n.displayName = "CheckCircleOutlined";
$n.inheritAttrs = !1;
const fs = $n;
var ds = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }, { tag: "path", attrs: { d: "M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z" } }] }, name: "info-circle", theme: "outlined" };
const vs = ds;
function Aa(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? Object(arguments[t]) : {}, n = Object.keys(r);
    typeof Object.getOwnPropertySymbols == "function" && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(a) {
      return Object.getOwnPropertyDescriptor(r, a).enumerable;
    }))), n.forEach(function(a) {
      ps(e, a, r[a]);
    });
  }
  return e;
}
function ps(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var Tn = function(t, r) {
  var n = Aa({}, t, r.attrs);
  return $(Te, Aa({}, n, {
    icon: vs
  }), null);
};
Tn.displayName = "InfoCircleOutlined";
Tn.inheritAttrs = !1;
const gs = Tn;
var hs = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 00-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z" } }, { tag: "path", attrs: { d: "M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }] }, name: "close-circle", theme: "outlined" };
const ms = hs;
function Fa(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? Object(arguments[t]) : {}, n = Object.keys(r);
    typeof Object.getOwnPropertySymbols == "function" && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(a) {
      return Object.getOwnPropertyDescriptor(r, a).enumerable;
    }))), n.forEach(function(a) {
      ys(e, a, r[a]);
    });
  }
  return e;
}
function ys(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var An = function(t, r) {
  var n = Fa({}, t, r.attrs);
  return $(Te, Fa({}, n, {
    icon: ms
  }), null);
};
An.displayName = "CloseCircleOutlined";
An.inheritAttrs = !1;
const bs = An;
var ws = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }, { tag: "path", attrs: { d: "M464 688a48 48 0 1096 0 48 48 0 10-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z" } }] }, name: "exclamation-circle", theme: "outlined" };
const xs = ws;
function ja(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? Object(arguments[t]) : {}, n = Object.keys(r);
    typeof Object.getOwnPropertySymbols == "function" && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(a) {
      return Object.getOwnPropertyDescriptor(r, a).enumerable;
    }))), n.forEach(function(a) {
      Cs(e, a, r[a]);
    });
  }
  return e;
}
function Cs(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var Fn = function(t, r) {
  var n = ja({}, t, r.attrs);
  return $(Te, ja({}, n, {
    icon: xs
  }), null);
};
Fn.displayName = "ExclamationCircleOutlined";
Fn.inheritAttrs = !1;
const Os = Fn;
var _s = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" } }] }, name: "close", theme: "outlined" };
const Ss = _s;
function Ea(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? Object(arguments[t]) : {}, n = Object.keys(r);
    typeof Object.getOwnPropertySymbols == "function" && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(a) {
      return Object.getOwnPropertyDescriptor(r, a).enumerable;
    }))), n.forEach(function(a) {
      Ps(e, a, r[a]);
    });
  }
  return e;
}
function Ps(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var jn = function(t, r) {
  var n = Ea({}, t, r.attrs);
  return $(Te, Ea({}, n, {
    icon: Ss
  }), null);
};
jn.displayName = "CloseOutlined";
jn.inheritAttrs = !1;
const $s = jn;
globalThis && globalThis.__awaiter;
var He = {}, _o = 4.5, So = "24px", Po = "24px", Yr = "", $o = "topRight", To = function() {
  return document.body;
}, Ao = null, Kr = !1, Fo;
function Ts(e) {
  var t = e.duration, r = e.placement, n = e.bottom, a = e.top, i = e.getContainer, o = e.closeIcon, l = e.prefixCls;
  l !== void 0 && (Yr = l), t !== void 0 && (_o = t), r !== void 0 && ($o = r), n !== void 0 && (Po = typeof n == "number" ? "".concat(n, "px") : n), a !== void 0 && (So = typeof a == "number" ? "".concat(a, "px") : a), i !== void 0 && (To = i), o !== void 0 && (Ao = o), e.rtl !== void 0 && (Kr = e.rtl), e.maxCount !== void 0 && (Fo = e.maxCount);
}
function As(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : So, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Po, n;
  switch (e) {
    case "topLeft":
      n = {
        left: "0px",
        top: t,
        bottom: "auto"
      };
      break;
    case "topRight":
      n = {
        right: "0px",
        top: t,
        bottom: "auto"
      };
      break;
    case "bottomLeft":
      n = {
        left: "0px",
        top: "auto",
        bottom: r
      };
      break;
    default:
      n = {
        right: "0px",
        top: "auto",
        bottom: r
      };
      break;
  }
  return n;
}
function Fs(e, t) {
  var r = e.prefixCls, n = e.placement, a = n === void 0 ? $o : n, i = e.getContainer, o = i === void 0 ? To : i, l = e.top, u = e.bottom, s = e.closeIcon, d = s === void 0 ? Ao : s, c = e.appContext, v = Us(), f = v.getPrefixCls, g = f("notification", r || Yr), p = "".concat(g, "-").concat(a, "-").concat(Kr), y = He[p];
  if (y) {
    Promise.resolve(y).then(function(w) {
      t(w);
    });
    return;
  }
  var h = be("".concat(g, "-").concat(a), B({}, "".concat(g, "-rtl"), Kr === !0));
  ro.newInstance({
    name: "notification",
    prefixCls: r || Yr,
    class: h,
    style: As(a, l, u),
    appContext: c,
    getContainer: o,
    closeIcon: function(x) {
      var m = x.prefixCls, S = $("span", {
        class: "".concat(m, "-close-x")
      }, [ft(d, {}, $($s, {
        class: "".concat(m, "-close-icon")
      }, null))]);
      return S;
    },
    maxCount: Fo,
    hasTransitionName: !0
  }, function(w) {
    He[p] = w, t(w);
  });
}
var js = {
  success: fs,
  info: gs,
  error: bs,
  warning: Os
};
function Es(e) {
  var t = e.icon, r = e.type, n = e.description, a = e.message, i = e.btn, o = e.duration === void 0 ? _o : e.duration;
  Fs(e, function(l) {
    l.notice({
      content: function(s) {
        var d = s.prefixCls, c = "".concat(d, "-notice"), v = null;
        if (t)
          v = function() {
            return $("span", {
              class: "".concat(c, "-icon")
            }, [ft(t)]);
          };
        else if (r) {
          var f = js[r];
          v = function() {
            return $(f, {
              class: "".concat(c, "-icon ").concat(c, "-icon-").concat(r)
            }, null);
          };
        }
        return $("div", {
          class: v ? "".concat(c, "-with-icon") : ""
        }, [v && v(), $("div", {
          class: "".concat(c, "-message")
        }, [!n && v ? $("span", {
          class: "".concat(c, "-message-single-line-auto-margin")
        }, null) : null, ft(a)]), $("div", {
          class: "".concat(c, "-description")
        }, [ft(n)]), i ? $("span", {
          class: "".concat(c, "-btn")
        }, [ft(i)]) : null]);
      },
      duration: o,
      closable: !0,
      onClose: e.onClose,
      onClick: e.onClick,
      key: e.key,
      style: e.style || {},
      class: e.class
    });
  });
}
var Ct = {
  open: Es,
  close: function(t) {
    Object.keys(He).forEach(function(r) {
      return Promise.resolve(He[r]).then(function(n) {
        n.removeNotice(t);
      });
    });
  },
  config: Ts,
  destroy: function() {
    Object.keys(He).forEach(function(t) {
      Promise.resolve(He[t]).then(function(r) {
        r.destroy();
      }), delete He[t];
    });
  }
}, Is = ["success", "info", "warning", "error"];
Is.forEach(function(e) {
  Ct[e] = function(t) {
    return Ct.open(N(N({}, t), {
      type: e
    }));
  };
});
Ct.warn = Ct.warning;
const Ms = Ct;
function En() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var Ns = "vc-util-key";
function jo() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : Ns;
}
function In(e) {
  if (e.attachTo)
    return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function Ia(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r, n;
  if (!En())
    return null;
  var a = document.createElement("style");
  !((r = t.csp) === null || r === void 0) && r.nonce && (a.nonce = (n = t.csp) === null || n === void 0 ? void 0 : n.nonce), a.innerHTML = e;
  var i = In(t), o = i.firstChild;
  return t.prepend && i.prepend ? i.prepend(a) : t.prepend && o ? i.insertBefore(a, o) : i.appendChild(a), a;
}
var Xr = /* @__PURE__ */ new Map();
function Ls(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = In(t);
  return Array.from(Xr.get(r).children).find(function(n) {
    return n.tagName === "STYLE" && n.getAttribute(jo(t)) === e;
  });
}
function Rs(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n, a, i, o = In(r);
  if (!Xr.has(o)) {
    var l = Ia("", r), u = l.parentNode;
    Xr.set(o, u), u.removeChild(l);
  }
  var s = Ls(t, r);
  if (s)
    return ((n = r.csp) === null || n === void 0 ? void 0 : n.nonce) && s.nonce !== ((a = r.csp) === null || a === void 0 ? void 0 : a.nonce) && (s.nonce = (i = r.csp) === null || i === void 0 ? void 0 : i.nonce), s.innerHTML !== e && (s.innerHTML = e), s;
  var d = Ia(e, r);
  return d.setAttribute(jo(r), t), d;
}
const Eo = function(e, t, r) {
  eo(e, "[ant-design-vue: ".concat(t, "] ").concat(r));
};
var qs = "-ant-".concat(Date.now(), "-").concat(Math.random());
function ks(e, t) {
  var r = {}, n = function(d, c) {
    var v = d.clone();
    return v = (c == null ? void 0 : c(v)) || v, v.toRgbString();
  }, a = function(d, c) {
    var v = new Cr(d), f = xt(v.toRgbString());
    r["".concat(c, "-color")] = n(v), r["".concat(c, "-color-disabled")] = f[1], r["".concat(c, "-color-hover")] = f[4], r["".concat(c, "-color-active")] = f[6], r["".concat(c, "-color-outline")] = v.clone().setAlpha(0.2).toRgbString(), r["".concat(c, "-color-deprecated-bg")] = f[1], r["".concat(c, "-color-deprecated-border")] = f[3];
  };
  if (t.primaryColor) {
    a(t.primaryColor, "primary");
    var i = new Cr(t.primaryColor), o = xt(i.toRgbString());
    o.forEach(function(s, d) {
      r["primary-".concat(d + 1)] = s;
    }), r["primary-color-deprecated-l-35"] = n(i, function(s) {
      return s.lighten(35);
    }), r["primary-color-deprecated-l-20"] = n(i, function(s) {
      return s.lighten(20);
    }), r["primary-color-deprecated-t-20"] = n(i, function(s) {
      return s.tint(20);
    }), r["primary-color-deprecated-t-50"] = n(i, function(s) {
      return s.tint(50);
    }), r["primary-color-deprecated-f-12"] = n(i, function(s) {
      return s.setAlpha(s.getAlpha() * 0.12);
    });
    var l = new Cr(o[0]);
    r["primary-color-active-deprecated-f-30"] = n(l, function(s) {
      return s.setAlpha(s.getAlpha() * 0.3);
    }), r["primary-color-active-deprecated-d-02"] = n(l, function(s) {
      return s.darken(2);
    });
  }
  t.successColor && a(t.successColor, "success"), t.warningColor && a(t.warningColor, "warning"), t.errorColor && a(t.errorColor, "error"), t.infoColor && a(t.infoColor, "info");
  var u = Object.keys(r).map(function(s) {
    return "--".concat(e, "-").concat(s, ": ").concat(r[s], ";");
  });
  En() ? Rs(`
  :root {
    `.concat(u.join(`
`), `
  }
  `), "".concat(qs, "-dynamic-theme")) : Eo(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
var Io = Symbol("GlobalFormContextKey"), Ds = function(t) {
  de(Io, t);
}, Bs = function() {
  return Se(Io, {
    validateMessages: j(function() {
    })
  });
}, Vs = function() {
  return {
    getTargetContainer: {
      type: Function
    },
    getPopupContainer: {
      type: Function
    },
    prefixCls: String,
    getPrefixCls: {
      type: Function
    },
    renderEmpty: {
      type: Function
    },
    transformCellText: {
      type: Function
    },
    csp: {
      type: Object,
      default: void 0
    },
    input: {
      type: Object
    },
    autoInsertSpaceInButton: {
      type: Boolean,
      default: void 0
    },
    locale: {
      type: Object,
      default: void 0
    },
    pageHeader: {
      type: Object
    },
    componentSize: {
      type: String
    },
    direction: {
      type: String
    },
    space: {
      type: Object
    },
    virtual: {
      type: Boolean,
      default: void 0
    },
    dropdownMatchSelectWidth: {
      type: [Number, Boolean],
      default: !0
    },
    form: {
      type: Object,
      default: void 0
    },
    notUpdateGlobalConfig: Boolean
  };
}, Hs = "ant";
function tt() {
  return fe.prefixCls || Hs;
}
var Zr = je({}), Mo = je({}), fe = je({});
At(function() {
  N(fe, Zr, Mo), fe.prefixCls = tt(), fe.getPrefixCls = function(e, t) {
    return t || (e ? "".concat(fe.prefixCls, "-").concat(e) : fe.prefixCls);
  }, fe.getRootPrefixCls = function(e, t) {
    return e || (fe.prefixCls ? fe.prefixCls : t && t.includes("-") ? t.replace(/^(.*)-[^-]*$/, "$1") : tt());
  };
});
var Pr, Gs = function(t) {
  Pr && Pr(), Pr = At(function() {
    N(Mo, je(t));
  }), t.theme && ks(tt(), t.theme);
}, Us = function() {
  return {
    getPrefixCls: function(r, n) {
      return n || (r ? "".concat(tt(), "-").concat(r) : tt());
    },
    getRootPrefixCls: function(r, n) {
      return r || (fe.prefixCls ? fe.prefixCls : n && n.includes("-") ? n.replace(/^(.*)-[^-]*$/, "$1") : tt());
    }
  };
}, gt = ae({
  name: "AConfigProvider",
  inheritAttrs: !1,
  props: Vs(),
  setup: function(t, r) {
    var n = r.slots, a = function(c, v) {
      var f = t.prefixCls, g = f === void 0 ? "ant" : f;
      return v || (c ? "".concat(g, "-").concat(c) : g);
    }, i = function(c) {
      var v = t.renderEmpty || n.renderEmpty || Qi;
      return v(c);
    }, o = function(c, v) {
      var f = t.prefixCls;
      if (v)
        return v;
      var g = f || a("");
      return c ? "".concat(g, "-").concat(c) : g;
    }, l = je(N(N({}, t), {
      getPrefixCls: o,
      renderEmpty: i
    }));
    Object.keys(t).forEach(function(d) {
      ye(function() {
        return t[d];
      }, function() {
        l[d] = t[d];
      });
    }), t.notUpdateGlobalConfig || (N(Zr, l), ye(l, function() {
      N(Zr, l);
    }));
    var u = j(function() {
      var d, c, v = {};
      return t.locale && (v = ((d = t.locale.Form) === null || d === void 0 ? void 0 : d.defaultValidateMessages) || ((c = bt.Form) === null || c === void 0 ? void 0 : c.defaultValidateMessages) || {}), t.form && t.form.validateMessages && (v = N(N({}, v), t.form.validateMessages)), v;
    });
    Ds({
      validateMessages: u
    }), de("configProvider", l);
    var s = function(c) {
      var v;
      return $(Hu, {
        locale: t.locale || c,
        ANT_MARK__: Br
      }, {
        default: function() {
          return [(v = n.default) === null || v === void 0 ? void 0 : v.call(n)];
        }
      });
    };
    return At(function() {
      t.direction && (ls.config({
        rtl: t.direction === "rtl"
      }), Ms.config({
        rtl: t.direction === "rtl"
      }));
    }), function() {
      return $(qi, {
        children: function(c, v, f) {
          return s(f);
        }
      }, null);
    };
  }
}), zs = je({
  getPrefixCls: function(t, r) {
    return r || (t ? "ant-".concat(t) : "ant");
  },
  renderEmpty: Qi,
  direction: "ltr"
});
gt.config = Gs;
gt.install = function(e) {
  e.component(gt.name, gt);
};
const Ee = function(e, t) {
  var r = Se("configProvider", zs), n = j(function() {
    return r.getPrefixCls(e, t.prefixCls);
  }), a = j(function() {
    var w;
    return (w = t.direction) !== null && w !== void 0 ? w : r.direction;
  }), i = j(function() {
    return r.getPrefixCls();
  }), o = j(function() {
    return r.autoInsertSpaceInButton;
  }), l = j(function() {
    return r.renderEmpty;
  }), u = j(function() {
    return r.space;
  }), s = j(function() {
    return r.pageHeader;
  }), d = j(function() {
    return r.form;
  }), c = j(function() {
    return t.getTargetContainer || r.getTargetContainer;
  }), v = j(function() {
    return t.getPopupContainer || r.getPopupContainer;
  }), f = j(function() {
    var w;
    return (w = t.dropdownMatchSelectWidth) !== null && w !== void 0 ? w : r.dropdownMatchSelectWidth;
  }), g = j(function() {
    return (t.virtual === void 0 ? r.virtual !== !1 : t.virtual !== !1) && f.value !== !1;
  }), p = j(function() {
    return t.size || r.componentSize;
  }), y = j(function() {
    var w;
    return t.autocomplete || ((w = r.input) === null || w === void 0 ? void 0 : w.autocomplete);
  }), h = j(function() {
    return r.csp;
  });
  return {
    configProvider: r,
    prefixCls: n,
    direction: a,
    size: p,
    getTargetContainer: c,
    getPopupContainer: v,
    space: u,
    pageHeader: s,
    form: d,
    autoInsertSpaceInButton: o,
    renderEmpty: l,
    virtual: g,
    dropdownMatchSelectWidth: f,
    rootPrefixCls: i,
    getPrefixCls: r.getPrefixCls,
    autocomplete: y,
    csp: h
  };
};
function Ws(e) {
  return Ai(e) || ji(e) || mn(e) || Fi();
}
function Ys() {
  this.__data__ = [], this.size = 0;
}
function Mn(e, t) {
  return e === t || e !== e && t !== t;
}
function cr(e, t) {
  for (var r = e.length; r--; )
    if (Mn(e[r][0], t))
      return r;
  return -1;
}
var Ks = Array.prototype, Xs = Ks.splice;
function Zs(e) {
  var t = this.__data__, r = cr(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : Xs.call(t, r, 1), --this.size, !0;
}
function Js(e) {
  var t = this.__data__, r = cr(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function Qs(e) {
  return cr(this.__data__, e) > -1;
}
function ef(e, t) {
  var r = this.__data__, n = cr(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
function Ie(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Ie.prototype.clear = Ys;
Ie.prototype.delete = Zs;
Ie.prototype.get = Js;
Ie.prototype.has = Qs;
Ie.prototype.set = ef;
function tf() {
  this.__data__ = new Ie(), this.size = 0;
}
function rf(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function nf(e) {
  return this.__data__.get(e);
}
function af(e) {
  return this.__data__.has(e);
}
function Fe(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var of = "[object AsyncFunction]", lf = "[object Function]", uf = "[object GeneratorFunction]", cf = "[object Proxy]";
function No(e) {
  if (!Fe(e))
    return !1;
  var t = Ke(e);
  return t == lf || t == uf || t == of || t == cf;
}
var sf = xe["__core-js_shared__"];
const $r = sf;
var Ma = function() {
  var e = /[^.]+$/.exec($r && $r.keys && $r.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function ff(e) {
  return !!Ma && Ma in e;
}
var df = Function.prototype, vf = df.toString;
function Ze(e) {
  if (e != null) {
    try {
      return vf.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var pf = /[\\^$.*+?()[\]{}|]/g, gf = /^\[object .+?Constructor\]$/, hf = Function.prototype, mf = Object.prototype, yf = hf.toString, bf = mf.hasOwnProperty, wf = RegExp(
  "^" + yf.call(bf).replace(pf, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function xf(e) {
  if (!Fe(e) || ff(e))
    return !1;
  var t = No(e) ? wf : gf;
  return t.test(Ze(e));
}
function Cf(e, t) {
  return e == null ? void 0 : e[t];
}
function Je(e, t) {
  var r = Cf(e, t);
  return xf(r) ? r : void 0;
}
var Of = Je(xe, "Map");
const Ot = Of;
var _f = Je(Object, "create");
const _t = _f;
function Sf() {
  this.__data__ = _t ? _t(null) : {}, this.size = 0;
}
function Pf(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var $f = "__lodash_hash_undefined__", Tf = Object.prototype, Af = Tf.hasOwnProperty;
function Ff(e) {
  var t = this.__data__;
  if (_t) {
    var r = t[e];
    return r === $f ? void 0 : r;
  }
  return Af.call(t, e) ? t[e] : void 0;
}
var jf = Object.prototype, Ef = jf.hasOwnProperty;
function If(e) {
  var t = this.__data__;
  return _t ? t[e] !== void 0 : Ef.call(t, e);
}
var Mf = "__lodash_hash_undefined__";
function Nf(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = _t && t === void 0 ? Mf : t, this;
}
function Ye(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Ye.prototype.clear = Sf;
Ye.prototype.delete = Pf;
Ye.prototype.get = Ff;
Ye.prototype.has = If;
Ye.prototype.set = Nf;
function Lf() {
  this.size = 0, this.__data__ = {
    hash: new Ye(),
    map: new (Ot || Ie)(),
    string: new Ye()
  };
}
function Rf(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function sr(e, t) {
  var r = e.__data__;
  return Rf(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function qf(e) {
  var t = sr(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function kf(e) {
  return sr(this, e).get(e);
}
function Df(e) {
  return sr(this, e).has(e);
}
function Bf(e, t) {
  var r = sr(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
function Me(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Me.prototype.clear = Lf;
Me.prototype.delete = qf;
Me.prototype.get = kf;
Me.prototype.has = Df;
Me.prototype.set = Bf;
var Vf = 200;
function Hf(e, t) {
  var r = this.__data__;
  if (r instanceof Ie) {
    var n = r.__data__;
    if (!Ot || n.length < Vf - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new Me(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function _e(e) {
  var t = this.__data__ = new Ie(e);
  this.size = t.size;
}
_e.prototype.clear = tf;
_e.prototype.delete = rf;
_e.prototype.get = nf;
_e.prototype.has = af;
_e.prototype.set = Hf;
var Gf = "__lodash_hash_undefined__";
function Uf(e) {
  return this.__data__.set(e, Gf), this;
}
function zf(e) {
  return this.__data__.has(e);
}
function St(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new Me(); ++t < r; )
    this.add(e[t]);
}
St.prototype.add = St.prototype.push = Uf;
St.prototype.has = zf;
function Wf(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
function Jr(e, t) {
  return e.has(t);
}
var Yf = 1, Kf = 2;
function Lo(e, t, r, n, a, i) {
  var o = r & Yf, l = e.length, u = t.length;
  if (l != u && !(o && u > l))
    return !1;
  var s = i.get(e), d = i.get(t);
  if (s && d)
    return s == t && d == e;
  var c = -1, v = !0, f = r & Kf ? new St() : void 0;
  for (i.set(e, t), i.set(t, e); ++c < l; ) {
    var g = e[c], p = t[c];
    if (n)
      var y = o ? n(p, g, c, t, e, i) : n(g, p, c, e, t, i);
    if (y !== void 0) {
      if (y)
        continue;
      v = !1;
      break;
    }
    if (f) {
      if (!Wf(t, function(h, w) {
        if (!Jr(f, w) && (g === h || a(g, h, r, n, i)))
          return f.push(w);
      })) {
        v = !1;
        break;
      }
    } else if (!(g === p || a(g, p, r, n, i))) {
      v = !1;
      break;
    }
  }
  return i.delete(e), i.delete(t), v;
}
var Xf = xe.Uint8Array;
const rr = Xf;
function Zf(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, a) {
    r[++t] = [a, n];
  }), r;
}
function Jf(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var Qf = 1, ed = 2, td = "[object Boolean]", rd = "[object Date]", nd = "[object Error]", ad = "[object Map]", id = "[object Number]", od = "[object RegExp]", ld = "[object Set]", ud = "[object String]", cd = "[object Symbol]", sd = "[object ArrayBuffer]", fd = "[object DataView]", Na = pe ? pe.prototype : void 0, Tr = Na ? Na.valueOf : void 0;
function dd(e, t, r, n, a, i, o) {
  switch (r) {
    case fd:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case sd:
      return !(e.byteLength != t.byteLength || !i(new rr(e), new rr(t)));
    case td:
    case rd:
    case id:
      return Mn(+e, +t);
    case nd:
      return e.name == t.name && e.message == t.message;
    case od:
    case ud:
      return e == t + "";
    case ad:
      var l = Zf;
    case ld:
      var u = n & Qf;
      if (l || (l = Jf), e.size != t.size && !u)
        return !1;
      var s = o.get(e);
      if (s)
        return s == t;
      n |= ed, o.set(e, t);
      var d = Lo(l(e), l(t), n, a, i, o);
      return o.delete(e), d;
    case cd:
      if (Tr)
        return Tr.call(e) == Tr.call(t);
  }
  return !1;
}
function Nn(e, t) {
  for (var r = -1, n = t.length, a = e.length; ++r < n; )
    e[a + r] = t[r];
  return e;
}
var vd = Array.isArray;
const we = vd;
function Ro(e, t, r) {
  var n = t(e);
  return we(e) ? n : Nn(n, r(e));
}
function pd(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = 0, i = []; ++r < n; ) {
    var o = e[r];
    t(o, r, e) && (i[a++] = o);
  }
  return i;
}
function qo() {
  return [];
}
var gd = Object.prototype, hd = gd.propertyIsEnumerable, La = Object.getOwnPropertySymbols, md = La ? function(e) {
  return e == null ? [] : (e = Object(e), pd(La(e), function(t) {
    return hd.call(e, t);
  }));
} : qo;
const Ln = md;
function yd(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var bd = "[object Arguments]";
function Ra(e) {
  return Pe(e) && Ke(e) == bd;
}
var ko = Object.prototype, wd = ko.hasOwnProperty, xd = ko.propertyIsEnumerable, Cd = Ra(function() {
  return arguments;
}()) ? Ra : function(e) {
  return Pe(e) && wd.call(e, "callee") && !xd.call(e, "callee");
};
const Rn = Cd;
function Od() {
  return !1;
}
var Do = typeof exports == "object" && exports && !exports.nodeType && exports, qa = Do && typeof module == "object" && module && !module.nodeType && module, _d = qa && qa.exports === Do, ka = _d ? xe.Buffer : void 0, Sd = ka ? ka.isBuffer : void 0, Pd = Sd || Od;
const nr = Pd;
var $d = 9007199254740991, Td = /^(?:0|[1-9]\d*)$/;
function Bo(e, t) {
  var r = typeof e;
  return t = t == null ? $d : t, !!t && (r == "number" || r != "symbol" && Td.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var Ad = 9007199254740991;
function qn(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Ad;
}
var Fd = "[object Arguments]", jd = "[object Array]", Ed = "[object Boolean]", Id = "[object Date]", Md = "[object Error]", Nd = "[object Function]", Ld = "[object Map]", Rd = "[object Number]", qd = "[object Object]", kd = "[object RegExp]", Dd = "[object Set]", Bd = "[object String]", Vd = "[object WeakMap]", Hd = "[object ArrayBuffer]", Gd = "[object DataView]", Ud = "[object Float32Array]", zd = "[object Float64Array]", Wd = "[object Int8Array]", Yd = "[object Int16Array]", Kd = "[object Int32Array]", Xd = "[object Uint8Array]", Zd = "[object Uint8ClampedArray]", Jd = "[object Uint16Array]", Qd = "[object Uint32Array]", Y = {};
Y[Ud] = Y[zd] = Y[Wd] = Y[Yd] = Y[Kd] = Y[Xd] = Y[Zd] = Y[Jd] = Y[Qd] = !0;
Y[Fd] = Y[jd] = Y[Hd] = Y[Ed] = Y[Gd] = Y[Id] = Y[Md] = Y[Nd] = Y[Ld] = Y[Rd] = Y[qd] = Y[kd] = Y[Dd] = Y[Bd] = Y[Vd] = !1;
function ev(e) {
  return Pe(e) && qn(e.length) && !!Y[Ke(e)];
}
function fr(e) {
  return function(t) {
    return e(t);
  };
}
var Vo = typeof exports == "object" && exports && !exports.nodeType && exports, ht = Vo && typeof module == "object" && module && !module.nodeType && module, tv = ht && ht.exports === Vo, Ar = tv && Ei.process, rv = function() {
  try {
    var e = ht && ht.require && ht.require("util").types;
    return e || Ar && Ar.binding && Ar.binding("util");
  } catch {
  }
}();
const at = rv;
var Da = at && at.isTypedArray, nv = Da ? fr(Da) : ev;
const Ho = nv;
var av = Object.prototype, iv = av.hasOwnProperty;
function Go(e, t) {
  var r = we(e), n = !r && Rn(e), a = !r && !n && nr(e), i = !r && !n && !a && Ho(e), o = r || n || a || i, l = o ? yd(e.length, String) : [], u = l.length;
  for (var s in e)
    (t || iv.call(e, s)) && !(o && (s == "length" || a && (s == "offset" || s == "parent") || i && (s == "buffer" || s == "byteLength" || s == "byteOffset") || Bo(s, u))) && l.push(s);
  return l;
}
var ov = Object.prototype;
function kn(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || ov;
  return e === r;
}
var lv = Mi(Object.keys, Object);
const uv = lv;
var cv = Object.prototype, sv = cv.hasOwnProperty;
function fv(e) {
  if (!kn(e))
    return uv(e);
  var t = [];
  for (var r in Object(e))
    sv.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function dr(e) {
  return e != null && qn(e.length) && !No(e);
}
function Ft(e) {
  return dr(e) ? Go(e) : fv(e);
}
function Qr(e) {
  return Ro(e, Ft, Ln);
}
var dv = 1, vv = Object.prototype, pv = vv.hasOwnProperty;
function gv(e, t, r, n, a, i) {
  var o = r & dv, l = Qr(e), u = l.length, s = Qr(t), d = s.length;
  if (u != d && !o)
    return !1;
  for (var c = u; c--; ) {
    var v = l[c];
    if (!(o ? v in t : pv.call(t, v)))
      return !1;
  }
  var f = i.get(e), g = i.get(t);
  if (f && g)
    return f == t && g == e;
  var p = !0;
  i.set(e, t), i.set(t, e);
  for (var y = o; ++c < u; ) {
    v = l[c];
    var h = e[v], w = t[v];
    if (n)
      var x = o ? n(w, h, v, t, e, i) : n(h, w, v, e, t, i);
    if (!(x === void 0 ? h === w || a(h, w, r, n, i) : x)) {
      p = !1;
      break;
    }
    y || (y = v == "constructor");
  }
  if (p && !y) {
    var m = e.constructor, S = t.constructor;
    m != S && "constructor" in e && "constructor" in t && !(typeof m == "function" && m instanceof m && typeof S == "function" && S instanceof S) && (p = !1);
  }
  return i.delete(e), i.delete(t), p;
}
var hv = Je(xe, "DataView");
const en = hv;
var mv = Je(xe, "Promise");
const tn = mv;
var yv = Je(xe, "Set");
const rn = yv;
var bv = Je(xe, "WeakMap");
const nn = bv;
var Ba = "[object Map]", wv = "[object Object]", Va = "[object Promise]", Ha = "[object Set]", Ga = "[object WeakMap]", Ua = "[object DataView]", xv = Ze(en), Cv = Ze(Ot), Ov = Ze(tn), _v = Ze(rn), Sv = Ze(nn), Ve = Ke;
(en && Ve(new en(new ArrayBuffer(1))) != Ua || Ot && Ve(new Ot()) != Ba || tn && Ve(tn.resolve()) != Va || rn && Ve(new rn()) != Ha || nn && Ve(new nn()) != Ga) && (Ve = function(e) {
  var t = Ke(e), r = t == wv ? e.constructor : void 0, n = r ? Ze(r) : "";
  if (n)
    switch (n) {
      case xv:
        return Ua;
      case Cv:
        return Ba;
      case Ov:
        return Va;
      case _v:
        return Ha;
      case Sv:
        return Ga;
    }
  return t;
});
const Pt = Ve;
var Pv = 1, za = "[object Arguments]", Wa = "[object Array]", kt = "[object Object]", $v = Object.prototype, Ya = $v.hasOwnProperty;
function Tv(e, t, r, n, a, i) {
  var o = we(e), l = we(t), u = o ? Wa : Pt(e), s = l ? Wa : Pt(t);
  u = u == za ? kt : u, s = s == za ? kt : s;
  var d = u == kt, c = s == kt, v = u == s;
  if (v && nr(e)) {
    if (!nr(t))
      return !1;
    o = !0, d = !1;
  }
  if (v && !d)
    return i || (i = new _e()), o || Ho(e) ? Lo(e, t, r, n, a, i) : dd(e, t, u, r, n, a, i);
  if (!(r & Pv)) {
    var f = d && Ya.call(e, "__wrapped__"), g = c && Ya.call(t, "__wrapped__");
    if (f || g) {
      var p = f ? e.value() : e, y = g ? t.value() : t;
      return i || (i = new _e()), a(p, y, r, n, i);
    }
  }
  return v ? (i || (i = new _e()), gv(e, t, r, n, a, i)) : !1;
}
function vr(e, t, r, n, a) {
  return e === t ? !0 : e == null || t == null || !Pe(e) && !Pe(t) ? e !== e && t !== t : Tv(e, t, r, n, vr, a);
}
function Uo(e, t) {
  return vr(e, t);
}
var ar = Symbol("ContextProps"), ir = Symbol("InternalContextProps"), Av = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : j(function() {
    return !0;
  }), n = ie(/* @__PURE__ */ new Map()), a = function(u, s) {
    n.value.set(u, s), n.value = new Map(n.value);
  }, i = function(u) {
    n.value.delete(u), n.value = new Map(n.value);
  }, o = Pi();
  ye([r, n], function() {
    if (process.env.NODE_ENV !== "production" && r.value && n.value.size > 1) {
      Eo(!1, "Form.Item", "FormItem can only collect one field item, you haved set ".concat(ve(n.value.values()).map(function(u) {
        return "`".concat(u.name, "`");
      }).join(", "), " ").concat(n.value.size, " field items.\n        You can set not need to be collected fields into `a-form-item-rest`"));
      for (var l = o; l.parent; )
        console.warn("at", l.type), l = l.parent;
    }
  }), de(ar, t), de(ir, {
    addFormItemField: a,
    removeFormItemField: i
  });
}, an = {
  id: j(function() {
  }),
  onFieldBlur: function() {
  },
  onFieldChange: function() {
  },
  clearValidate: function() {
  }
}, on = {
  addFormItemField: function() {
  },
  removeFormItemField: function() {
  }
}, Fv = function() {
  var t = Se(ir, on), r = Symbol("FormItemFieldKey"), n = Pi();
  return t.addFormItemField(r, n.type), hn(function() {
    t.removeFormItemField(r);
  }), de(ir, on), de(ar, an), Se(ar, an);
};
const ln = ae({
  name: "AFormItemRest",
  setup: function(t, r) {
    var n = r.slots;
    return de(ir, on), de(ar, an), function() {
      var a;
      return (a = n.default) === null || a === void 0 ? void 0 : a.call(n);
    };
  }
});
var Ka = ["xxxl", "xxl", "xl", "lg", "md", "sm", "xs"], Dt = {
  xs: "(max-width: 575px)",
  sm: "(min-width: 576px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 992px)",
  xl: "(min-width: 1200px)",
  xxl: "(min-width: 1600px)",
  xxxl: "(min-width: 2000px)"
}, Be = /* @__PURE__ */ new Map(), Fr = -1, Bt = {}, jv = {
  matchHandlers: {},
  dispatch: function(t) {
    return Bt = t, Be.forEach(function(r) {
      return r(Bt);
    }), Be.size >= 1;
  },
  subscribe: function(t) {
    return Be.size || this.register(), Fr += 1, Be.set(Fr, t), t(Bt), Fr;
  },
  unsubscribe: function(t) {
    Be.delete(t), Be.size || this.unregister();
  },
  unregister: function() {
    var t = this;
    Object.keys(Dt).forEach(function(r) {
      var n = Dt[r], a = t.matchHandlers[n];
      a == null || a.mql.removeListener(a == null ? void 0 : a.listener);
    }), Be.clear();
  },
  register: function() {
    var t = this;
    Object.keys(Dt).forEach(function(r) {
      var n = Dt[r], a = function(l) {
        var u = l.matches;
        t.dispatch(N(N({}, Bt), B({}, r, u)));
      }, i = window.matchMedia(n);
      i.addListener(a), t.matchHandlers[n] = {
        mql: i,
        listener: a
      }, a(i);
    });
  }
};
const Xa = jv;
var Ev = Symbol("SizeProvider"), Iv = function(t) {
  var r = t ? j(function() {
    return t.size;
  }) : Se(Ev, j(function() {
    return "default";
  }));
  return r;
};
function zo(e, t, r, n) {
  for (var a = e.length, i = r + (n ? 1 : -1); n ? i-- : ++i < a; )
    if (t(e[i], i, e))
      return i;
  return -1;
}
function Mv(e) {
  return e !== e;
}
function Nv(e, t, r) {
  for (var n = r - 1, a = e.length; ++n < a; )
    if (e[n] === t)
      return n;
  return -1;
}
function Lv(e, t, r) {
  return t === t ? Nv(e, t, r) : zo(e, Mv, r);
}
function Rv(e, t) {
  var r = e == null ? 0 : e.length;
  return !!r && Lv(e, t, 0) > -1;
}
function qv(e, t, r) {
  for (var n = -1, a = e == null ? 0 : e.length; ++n < a; )
    if (r(t, e[n]))
      return !0;
  return !1;
}
function Wo(e, t) {
  if (e.classList)
    return e.classList.contains(t);
  var r = e.className;
  return " ".concat(r, " ").indexOf(" ".concat(t, " ")) > -1;
}
function Za(e, t) {
  e.classList ? e.classList.add(t) : Wo(e, t) || (e.className = "".concat(e.className, " ").concat(t));
}
function Ja(e, t) {
  if (e.classList)
    e.classList.remove(t);
  else if (Wo(e, t)) {
    var r = e.className;
    e.className = " ".concat(r, " ").replace(" ".concat(t, " "), " ");
  }
}
var kv = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "ant-motion-collapse", r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return {
    name: t,
    appear: r,
    css: !0,
    onBeforeEnter: function(a) {
      a.style.height = "0px", a.style.opacity = "0", Za(a, t);
    },
    onEnter: function(a) {
      lr(function() {
        a.style.height = "".concat(a.scrollHeight, "px"), a.style.opacity = "1";
      });
    },
    onAfterEnter: function(a) {
      a && (Ja(a, t), a.style.height = null, a.style.opacity = null);
    },
    onBeforeLeave: function(a) {
      Za(a, t), a.style.height = "".concat(a.offsetHeight, "px"), a.style.opacity = null;
    },
    onLeave: function(a) {
      setTimeout(function() {
        a.style.height = "0px", a.style.opacity = "0";
      });
    },
    onAfterLeave: function(a) {
      a && (Ja(a, t), a.style && (a.style.height = null, a.style.opacity = null));
    }
  };
};
const Dv = kv;
function pr(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = Array(n); ++r < n; )
    a[r] = t(e[r], r, e);
  return a;
}
var Bv = "[object Symbol]";
function gr(e) {
  return typeof e == "symbol" || Pe(e) && Ke(e) == Bv;
}
var Vv = 1 / 0, Qa = pe ? pe.prototype : void 0, ei = Qa ? Qa.toString : void 0;
function Yo(e) {
  if (typeof e == "string")
    return e;
  if (we(e))
    return pr(e, Yo) + "";
  if (gr(e))
    return ei ? ei.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Vv ? "-0" : t;
}
function Hv(e, t, r) {
  var n = -1, a = e.length;
  t < 0 && (t = -t > a ? 0 : a + t), r = r > a ? a : r, r < 0 && (r += a), a = t > r ? 0 : r - t >>> 0, t >>>= 0;
  for (var i = Array(a); ++n < a; )
    i[n] = e[n + t];
  return i;
}
function Gv(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
var Uv = /\s/;
function zv(e) {
  for (var t = e.length; t-- && Uv.test(e.charAt(t)); )
    ;
  return t;
}
var Wv = /^\s+/;
function Yv(e) {
  return e && e.slice(0, zv(e) + 1).replace(Wv, "");
}
var ti = 0 / 0, Kv = /^[-+]0x[0-9a-f]+$/i, Xv = /^0b[01]+$/i, Zv = /^0o[0-7]+$/i, Jv = parseInt;
function un(e) {
  if (typeof e == "number")
    return e;
  if (gr(e))
    return ti;
  if (Fe(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Fe(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Yv(e);
  var r = Xv.test(e);
  return r || Zv.test(e) ? Jv(e.slice(2), r ? 2 : 8) : Kv.test(e) ? ti : +e;
}
var ri = 1 / 0, Qv = 17976931348623157e292;
function ep(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = un(e), e === ri || e === -ri) {
    var t = e < 0 ? -1 : 1;
    return t * Qv;
  }
  return e === e ? e : 0;
}
function tp(e) {
  var t = ep(e), r = t % 1;
  return t === t ? r ? t - r : t : 0;
}
function rp(e) {
  return e == null ? "" : Yo(e);
}
var np = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ap = /^\w*$/;
function Dn(e, t) {
  if (we(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || gr(e) ? !0 : ap.test(e) || !np.test(e) || t != null && e in Object(t);
}
var ip = "Expected a function";
function Bn(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(ip);
  var r = function() {
    var n = arguments, a = t ? t.apply(this, n) : n[0], i = r.cache;
    if (i.has(a))
      return i.get(a);
    var o = e.apply(this, n);
    return r.cache = i.set(a, o) || i, o;
  };
  return r.cache = new (Bn.Cache || Me)(), r;
}
Bn.Cache = Me;
var op = 500;
function lp(e) {
  var t = Bn(e, function(n) {
    return r.size === op && r.clear(), n;
  }), r = t.cache;
  return t;
}
var up = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, cp = /\\(\\)?/g, sp = lp(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(up, function(r, n, a, i) {
    t.push(a ? i.replace(cp, "$1") : n || r);
  }), t;
});
const fp = sp;
function hr(e, t) {
  return we(e) ? e : Dn(e, t) ? [e] : fp(rp(e));
}
var dp = 1 / 0;
function jt(e) {
  if (typeof e == "string" || gr(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -dp ? "-0" : t;
}
function Vn(e, t) {
  t = hr(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[jt(t[r++])];
  return r && r == n ? e : void 0;
}
var vp = function() {
  try {
    var e = Je(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const or = vp;
function Ko(e, t, r) {
  t == "__proto__" && or ? or(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var pp = Object.prototype, gp = pp.hasOwnProperty;
function Xo(e, t, r) {
  var n = e[t];
  (!(gp.call(e, t) && Mn(n, r)) || r === void 0 && !(t in e)) && Ko(e, t, r);
}
function hp(e, t) {
  return e != null && t in Object(e);
}
function mp(e, t, r) {
  t = hr(t, e);
  for (var n = -1, a = t.length, i = !1; ++n < a; ) {
    var o = jt(t[n]);
    if (!(i = e != null && r(e, o)))
      break;
    e = e[o];
  }
  return i || ++n != a ? i : (a = e == null ? 0 : e.length, !!a && qn(a) && Bo(o, a) && (we(e) || Rn(e)));
}
function yp(e, t) {
  return e != null && mp(e, t, hp);
}
var ni = pe ? pe.isConcatSpreadable : void 0;
function bp(e) {
  return we(e) || Rn(e) || !!(ni && e && e[ni]);
}
function Zo(e, t, r, n, a) {
  var i = -1, o = e.length;
  for (r || (r = bp), a || (a = []); ++i < o; ) {
    var l = e[i];
    t > 0 && r(l) ? t > 1 ? Zo(l, t - 1, r, n, a) : Nn(a, l) : n || (a[a.length] = l);
  }
  return a;
}
function wp(e) {
  var t = e == null ? 0 : e.length;
  return t ? Zo(e, 1) : [];
}
function xp(e, t, r) {
  switch (r.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, r[0]);
    case 2:
      return e.call(t, r[0], r[1]);
    case 3:
      return e.call(t, r[0], r[1], r[2]);
  }
  return e.apply(t, r);
}
var ai = Math.max;
function Jo(e, t, r) {
  return t = ai(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, a = -1, i = ai(n.length - t, 0), o = Array(i); ++a < i; )
      o[a] = n[t + a];
    a = -1;
    for (var l = Array(t + 1); ++a < t; )
      l[a] = n[a];
    return l[t] = r(o), xp(e, this, l);
  };
}
function Cp(e) {
  return function() {
    return e;
  };
}
function Hn(e) {
  return e;
}
var Op = or ? function(e, t) {
  return or(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Cp(t),
    writable: !0
  });
} : Hn;
const _p = Op;
var Sp = 800, Pp = 16, $p = Date.now;
function Tp(e) {
  var t = 0, r = 0;
  return function() {
    var n = $p(), a = Pp - (n - r);
    if (r = n, a > 0) {
      if (++t >= Sp)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var Ap = Tp(_p);
const Qo = Ap;
function Fp(e) {
  return Qo(Jo(e, void 0, wp), e + "");
}
var jp = function() {
  return En() && window.document.documentElement;
}, Vt, Ep = function() {
  if (!jp())
    return !1;
  if (Vt !== void 0)
    return Vt;
  var t = document.createElement("div");
  return t.style.display = "flex", t.style.flexDirection = "column", t.style.rowGap = "1px", t.appendChild(document.createElement("div")), t.appendChild(document.createElement("div")), document.body.appendChild(t), Vt = t.scrollHeight === 1, document.body.removeChild(t), Vt;
};
const Ip = function() {
  var e = ie(!1);
  return Tt(function() {
    e.value = Ep();
  }), e;
};
var el = Symbol("rowContextKey"), Mp = function(t) {
  de(el, t);
}, Np = function() {
  return Se(el, {
    gutter: j(function() {
    }),
    wrap: j(function() {
    }),
    supportFlexGap: j(function() {
    })
  });
};
const Lp = Mp;
qe("top", "middle", "bottom", "stretch");
qe("start", "end", "center", "space-around", "space-between");
var Rp = function() {
  return {
    align: String,
    justify: String,
    prefixCls: String,
    gutter: {
      type: [Number, Array, Object],
      default: 0
    },
    wrap: {
      type: Boolean,
      default: void 0
    }
  };
}, qp = ae({
  name: "ARow",
  props: Rp(),
  setup: function(t, r) {
    var n = r.slots, a = Ee("row", t), i = a.prefixCls, o = a.direction, l, u = ie({
      xs: !0,
      sm: !0,
      md: !0,
      lg: !0,
      xl: !0,
      xxl: !0,
      xxxl: !0
    }), s = Ip();
    Tt(function() {
      l = Xa.subscribe(function(f) {
        var g = t.gutter || 0;
        (!Array.isArray(g) && me(g) === "object" || Array.isArray(g) && (me(g[0]) === "object" || me(g[1]) === "object")) && (u.value = f);
      });
    }), hn(function() {
      Xa.unsubscribe(l);
    });
    var d = j(function() {
      var f = [0, 0], g = t.gutter, p = g === void 0 ? 0 : g, y = Array.isArray(p) ? p : [p, 0];
      return y.forEach(function(h, w) {
        if (me(h) === "object")
          for (var x = 0; x < Ka.length; x++) {
            var m = Ka[x];
            if (u.value[m] && h[m] !== void 0) {
              f[w] = h[m];
              break;
            }
          }
        else
          f[w] = h || 0;
      }), f;
    });
    Lp({
      gutter: d,
      supportFlexGap: s,
      wrap: j(function() {
        return t.wrap;
      })
    });
    var c = j(function() {
      var f;
      return be(i.value, (f = {}, B(f, "".concat(i.value, "-no-wrap"), t.wrap === !1), B(f, "".concat(i.value, "-").concat(t.justify), t.justify), B(f, "".concat(i.value, "-").concat(t.align), t.align), B(f, "".concat(i.value, "-rtl"), o.value === "rtl"), f));
    }), v = j(function() {
      var f = d.value, g = {}, p = f[0] > 0 ? "".concat(f[0] / -2, "px") : void 0, y = f[1] > 0 ? "".concat(f[1] / -2, "px") : void 0;
      return p && (g.marginLeft = p, g.marginRight = p), s.value ? g.rowGap = "".concat(f[1], "px") : y && (g.marginTop = y, g.marginBottom = y), g;
    });
    return function() {
      var f;
      return $("div", {
        class: c.value,
        style: v.value
      }, [(f = n.default) === null || f === void 0 ? void 0 : f.call(n)]);
    };
  }
});
const kp = qp;
function Dp(e) {
  return typeof e == "number" ? "".concat(e, " ").concat(e, " auto") : /^\d+(\.\d+)?(px|em|rem|%)$/.test(e) ? "0 0 ".concat(e) : e;
}
var Bp = function() {
  return {
    span: [String, Number],
    order: [String, Number],
    offset: [String, Number],
    push: [String, Number],
    pull: [String, Number],
    xs: {
      type: [String, Number, Object],
      default: void 0
    },
    sm: {
      type: [String, Number, Object],
      default: void 0
    },
    md: {
      type: [String, Number, Object],
      default: void 0
    },
    lg: {
      type: [String, Number, Object],
      default: void 0
    },
    xl: {
      type: [String, Number, Object],
      default: void 0
    },
    xxl: {
      type: [String, Number, Object],
      default: void 0
    },
    xxxl: {
      type: [String, Number, Object],
      default: void 0
    },
    prefixCls: String,
    flex: [String, Number]
  };
};
const tl = ae({
  name: "ACol",
  props: Bp(),
  setup: function(t, r) {
    var n = r.slots, a = Np(), i = a.gutter, o = a.supportFlexGap, l = a.wrap, u = Ee("col", t), s = u.prefixCls, d = u.direction, c = j(function() {
      var f, g = t.span, p = t.order, y = t.offset, h = t.push, w = t.pull, x = s.value, m = {};
      return ["xs", "sm", "md", "lg", "xl", "xxl", "xxxl"].forEach(function(S) {
        var C, O = {}, T = t[S];
        typeof T == "number" ? O.span = T : me(T) === "object" && (O = T || {}), m = N(N({}, m), (C = {}, B(C, "".concat(x, "-").concat(S, "-").concat(O.span), O.span !== void 0), B(C, "".concat(x, "-").concat(S, "-order-").concat(O.order), O.order || O.order === 0), B(C, "".concat(x, "-").concat(S, "-offset-").concat(O.offset), O.offset || O.offset === 0), B(C, "".concat(x, "-").concat(S, "-push-").concat(O.push), O.push || O.push === 0), B(C, "".concat(x, "-").concat(S, "-pull-").concat(O.pull), O.pull || O.pull === 0), B(C, "".concat(x, "-rtl"), d.value === "rtl"), C));
      }), be(x, (f = {}, B(f, "".concat(x, "-").concat(g), g !== void 0), B(f, "".concat(x, "-order-").concat(p), p), B(f, "".concat(x, "-offset-").concat(y), y), B(f, "".concat(x, "-push-").concat(h), h), B(f, "".concat(x, "-pull-").concat(w), w), f), m);
    }), v = j(function() {
      var f = t.flex, g = i.value, p = {};
      if (g && g[0] > 0) {
        var y = "".concat(g[0] / 2, "px");
        p.paddingLeft = y, p.paddingRight = y;
      }
      if (g && g[1] > 0 && !o.value) {
        var h = "".concat(g[1] / 2, "px");
        p.paddingTop = h, p.paddingBottom = h;
      }
      return f && (p.flex = Dp(f), l.value === !1 && !p.minWidth && (p.minWidth = 0)), p;
    });
    return function() {
      var f;
      return $("div", {
        class: c.value,
        style: v.value
      }, [(f = n.default) === null || f === void 0 ? void 0 : f.call(n)]);
    };
  }
});
var Vp = function() {
  return xe.Date.now();
};
const jr = Vp;
var Hp = "Expected a function", Gp = Math.max, Up = Math.min;
function zp(e, t, r) {
  var n, a, i, o, l, u, s = 0, d = !1, c = !1, v = !0;
  if (typeof e != "function")
    throw new TypeError(Hp);
  t = un(t) || 0, Fe(r) && (d = !!r.leading, c = "maxWait" in r, i = c ? Gp(un(r.maxWait) || 0, t) : i, v = "trailing" in r ? !!r.trailing : v);
  function f(C) {
    var O = n, T = a;
    return n = a = void 0, s = C, o = e.apply(T, O), o;
  }
  function g(C) {
    return s = C, l = setTimeout(h, t), d ? f(C) : o;
  }
  function p(C) {
    var O = C - u, T = C - s, L = t - O;
    return c ? Up(L, i - T) : L;
  }
  function y(C) {
    var O = C - u, T = C - s;
    return u === void 0 || O >= t || O < 0 || c && T >= i;
  }
  function h() {
    var C = jr();
    if (y(C))
      return w(C);
    l = setTimeout(h, p(C));
  }
  function w(C) {
    return l = void 0, v && n ? f(C) : (n = a = void 0, o);
  }
  function x() {
    l !== void 0 && clearTimeout(l), s = 0, n = u = a = l = void 0;
  }
  function m() {
    return l === void 0 ? o : w(jr());
  }
  function S() {
    var C = jr(), O = y(C);
    if (n = arguments, a = this, u = C, O) {
      if (l === void 0)
        return g(u);
      if (c)
        return clearTimeout(l), l = setTimeout(h, t), f(u);
    }
    return l === void 0 && (l = setTimeout(h, t)), o;
  }
  return S.cancel = x, S.flush = m, S;
}
function Wp(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
function Et(e, t, r, n) {
  var a = !r;
  r || (r = {});
  for (var i = -1, o = t.length; ++i < o; ) {
    var l = t[i], u = n ? n(r[l], e[l], l, r, e) : void 0;
    u === void 0 && (u = e[l]), a ? Ko(r, l, u) : Xo(r, l, u);
  }
  return r;
}
function Yp(e, t) {
  return e && Et(t, Ft(t), e);
}
function Kp(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var Xp = Object.prototype, Zp = Xp.hasOwnProperty;
function Jp(e) {
  if (!Fe(e))
    return Kp(e);
  var t = kn(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !Zp.call(e, n)) || r.push(n);
  return r;
}
function Gn(e) {
  return dr(e) ? Go(e, !0) : Jp(e);
}
function Qp(e, t) {
  return e && Et(t, Gn(t), e);
}
var rl = typeof exports == "object" && exports && !exports.nodeType && exports, ii = rl && typeof module == "object" && module && !module.nodeType && module, eg = ii && ii.exports === rl, oi = eg ? xe.Buffer : void 0, li = oi ? oi.allocUnsafe : void 0;
function tg(e, t) {
  if (t)
    return e.slice();
  var r = e.length, n = li ? li(r) : new e.constructor(r);
  return e.copy(n), n;
}
function rg(e, t) {
  var r = -1, n = e.length;
  for (t || (t = Array(n)); ++r < n; )
    t[r] = e[r];
  return t;
}
function ng(e, t) {
  return Et(e, Ln(e), t);
}
var ag = Object.getOwnPropertySymbols, ig = ag ? function(e) {
  for (var t = []; e; )
    Nn(t, Ln(e)), e = yn(e);
  return t;
} : qo;
const nl = ig;
function og(e, t) {
  return Et(e, nl(e), t);
}
function al(e) {
  return Ro(e, Gn, nl);
}
var lg = Object.prototype, ug = lg.hasOwnProperty;
function cg(e) {
  var t = e.length, r = new e.constructor(t);
  return t && typeof e[0] == "string" && ug.call(e, "index") && (r.index = e.index, r.input = e.input), r;
}
function Un(e) {
  var t = new e.constructor(e.byteLength);
  return new rr(t).set(new rr(e)), t;
}
function sg(e, t) {
  var r = t ? Un(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.byteLength);
}
var fg = /\w*$/;
function dg(e) {
  var t = new e.constructor(e.source, fg.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var ui = pe ? pe.prototype : void 0, ci = ui ? ui.valueOf : void 0;
function vg(e) {
  return ci ? Object(ci.call(e)) : {};
}
function pg(e, t) {
  var r = t ? Un(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var gg = "[object Boolean]", hg = "[object Date]", mg = "[object Map]", yg = "[object Number]", bg = "[object RegExp]", wg = "[object Set]", xg = "[object String]", Cg = "[object Symbol]", Og = "[object ArrayBuffer]", _g = "[object DataView]", Sg = "[object Float32Array]", Pg = "[object Float64Array]", $g = "[object Int8Array]", Tg = "[object Int16Array]", Ag = "[object Int32Array]", Fg = "[object Uint8Array]", jg = "[object Uint8ClampedArray]", Eg = "[object Uint16Array]", Ig = "[object Uint32Array]";
function Mg(e, t, r) {
  var n = e.constructor;
  switch (t) {
    case Og:
      return Un(e);
    case gg:
    case hg:
      return new n(+e);
    case _g:
      return sg(e, r);
    case Sg:
    case Pg:
    case $g:
    case Tg:
    case Ag:
    case Fg:
    case jg:
    case Eg:
    case Ig:
      return pg(e, r);
    case mg:
      return new n();
    case yg:
    case xg:
      return new n(e);
    case bg:
      return dg(e);
    case wg:
      return new n();
    case Cg:
      return vg(e);
  }
}
var si = Object.create, Ng = function() {
  function e() {
  }
  return function(t) {
    if (!Fe(t))
      return {};
    if (si)
      return si(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}();
const Lg = Ng;
function Rg(e) {
  return typeof e.constructor == "function" && !kn(e) ? Lg(yn(e)) : {};
}
var qg = "[object Map]";
function kg(e) {
  return Pe(e) && Pt(e) == qg;
}
var fi = at && at.isMap, Dg = fi ? fr(fi) : kg;
const Bg = Dg;
var Vg = "[object Set]";
function Hg(e) {
  return Pe(e) && Pt(e) == Vg;
}
var di = at && at.isSet, Gg = di ? fr(di) : Hg;
const Ug = Gg;
var zg = 1, Wg = 2, Yg = 4, il = "[object Arguments]", Kg = "[object Array]", Xg = "[object Boolean]", Zg = "[object Date]", Jg = "[object Error]", ol = "[object Function]", Qg = "[object GeneratorFunction]", eh = "[object Map]", th = "[object Number]", ll = "[object Object]", rh = "[object RegExp]", nh = "[object Set]", ah = "[object String]", ih = "[object Symbol]", oh = "[object WeakMap]", lh = "[object ArrayBuffer]", uh = "[object DataView]", ch = "[object Float32Array]", sh = "[object Float64Array]", fh = "[object Int8Array]", dh = "[object Int16Array]", vh = "[object Int32Array]", ph = "[object Uint8Array]", gh = "[object Uint8ClampedArray]", hh = "[object Uint16Array]", mh = "[object Uint32Array]", W = {};
W[il] = W[Kg] = W[lh] = W[uh] = W[Xg] = W[Zg] = W[ch] = W[sh] = W[fh] = W[dh] = W[vh] = W[eh] = W[th] = W[ll] = W[rh] = W[nh] = W[ah] = W[ih] = W[ph] = W[gh] = W[hh] = W[mh] = !0;
W[Jg] = W[ol] = W[oh] = !1;
function mt(e, t, r, n, a, i) {
  var o, l = t & zg, u = t & Wg, s = t & Yg;
  if (r && (o = a ? r(e, n, a, i) : r(e)), o !== void 0)
    return o;
  if (!Fe(e))
    return e;
  var d = we(e);
  if (d) {
    if (o = cg(e), !l)
      return rg(e, o);
  } else {
    var c = Pt(e), v = c == ol || c == Qg;
    if (nr(e))
      return tg(e, l);
    if (c == ll || c == il || v && !a) {
      if (o = u || v ? {} : Rg(e), !l)
        return u ? og(e, Qp(o, e)) : ng(e, Yp(o, e));
    } else {
      if (!W[c])
        return a ? e : {};
      o = Mg(e, c, l);
    }
  }
  i || (i = new _e());
  var f = i.get(e);
  if (f)
    return f;
  i.set(e, o), Ug(e) ? e.forEach(function(y) {
    o.add(mt(y, t, r, y, e, i));
  }) : Bg(e) && e.forEach(function(y, h) {
    o.set(h, mt(y, t, r, h, e, i));
  });
  var g = s ? u ? al : Qr : u ? Gn : Ft, p = d ? void 0 : g(e);
  return Wp(p || e, function(y, h) {
    p && (h = y, y = e[h]), Xo(o, h, mt(y, t, r, h, e, i));
  }), o;
}
var yh = 1, bh = 4;
function Xt(e) {
  return mt(e, yh | bh);
}
function Ue() {
  return Ue = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ue.apply(this, arguments);
}
function wh(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, $t(e, t);
}
function cn(e) {
  return cn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, cn(e);
}
function $t(e, t) {
  return $t = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, $t(e, t);
}
function xh() {
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
function Zt(e, t, r) {
  return xh() ? Zt = Reflect.construct.bind() : Zt = function(a, i, o) {
    var l = [null];
    l.push.apply(l, i);
    var u = Function.bind.apply(a, l), s = new u();
    return o && $t(s, o.prototype), s;
  }, Zt.apply(null, arguments);
}
function Ch(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function sn(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return sn = function(n) {
    if (n === null || !Ch(n))
      return n;
    if (typeof n != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof t < "u") {
      if (t.has(n))
        return t.get(n);
      t.set(n, a);
    }
    function a() {
      return Zt(n, arguments, cn(this).constructor);
    }
    return a.prototype = Object.create(n.prototype, {
      constructor: {
        value: a,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), $t(a, n);
  }, sn(e);
}
var Oh = /%[sdj%]/g, ul = function() {
};
typeof process < "u" && process.env && process.env.NODE_ENV !== "production" && typeof window < "u" && typeof document < "u" && (ul = function(t, r) {
  typeof console < "u" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING > "u" && r.every(function(n) {
    return typeof n == "string";
  }) && console.warn(t, r);
});
function fn(e) {
  if (!e || !e.length)
    return null;
  var t = {};
  return e.forEach(function(r) {
    var n = r.field;
    t[n] = t[n] || [], t[n].push(r);
  }), t;
}
function ce(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  var a = 0, i = r.length;
  if (typeof e == "function")
    return e.apply(null, r);
  if (typeof e == "string") {
    var o = e.replace(Oh, function(l) {
      if (l === "%%")
        return "%";
      if (a >= i)
        return l;
      switch (l) {
        case "%s":
          return String(r[a++]);
        case "%d":
          return Number(r[a++]);
        case "%j":
          try {
            return JSON.stringify(r[a++]);
          } catch {
            return "[Circular]";
          }
          break;
        default:
          return l;
      }
    });
    return o;
  }
  return e;
}
function _h(e) {
  return e === "string" || e === "url" || e === "hex" || e === "email" || e === "date" || e === "pattern";
}
function Q(e, t) {
  return !!(e == null || t === "array" && Array.isArray(e) && !e.length || _h(t) && typeof e == "string" && !e);
}
function Sh(e, t, r) {
  var n = [], a = 0, i = e.length;
  function o(l) {
    n.push.apply(n, l || []), a++, a === i && r(n);
  }
  e.forEach(function(l) {
    t(l, o);
  });
}
function vi(e, t, r) {
  var n = 0, a = e.length;
  function i(o) {
    if (o && o.length) {
      r(o);
      return;
    }
    var l = n;
    n = n + 1, l < a ? t(e[l], i) : r([]);
  }
  i([]);
}
function Ph(e) {
  var t = [];
  return Object.keys(e).forEach(function(r) {
    t.push.apply(t, e[r] || []);
  }), t;
}
var pi = /* @__PURE__ */ function(e) {
  wh(t, e);
  function t(r, n) {
    var a;
    return a = e.call(this, "Async Validation Error") || this, a.errors = r, a.fields = n, a;
  }
  return t;
}(/* @__PURE__ */ sn(Error));
function $h(e, t, r, n, a) {
  if (t.first) {
    var i = new Promise(function(v, f) {
      var g = function(h) {
        return n(h), h.length ? f(new pi(h, fn(h))) : v(a);
      }, p = Ph(e);
      vi(p, r, g);
    });
    return i.catch(function(v) {
      return v;
    }), i;
  }
  var o = t.firstFields === !0 ? Object.keys(e) : t.firstFields || [], l = Object.keys(e), u = l.length, s = 0, d = [], c = new Promise(function(v, f) {
    var g = function(y) {
      if (d.push.apply(d, y), s++, s === u)
        return n(d), d.length ? f(new pi(d, fn(d))) : v(a);
    };
    l.length || (n(d), v(a)), l.forEach(function(p) {
      var y = e[p];
      o.indexOf(p) !== -1 ? vi(y, r, g) : Sh(y, r, g);
    });
  });
  return c.catch(function(v) {
    return v;
  }), c;
}
function Th(e) {
  return !!(e && e.message !== void 0);
}
function Ah(e, t) {
  for (var r = e, n = 0; n < t.length; n++) {
    if (r == null)
      return r;
    r = r[t[n]];
  }
  return r;
}
function gi(e, t) {
  return function(r) {
    var n;
    return e.fullFields ? n = Ah(t, e.fullFields) : n = t[r.field || e.fullField], Th(r) ? (r.field = r.field || e.fullField, r.fieldValue = n, r) : {
      message: typeof r == "function" ? r() : r,
      fieldValue: n,
      field: r.field || e.fullField
    };
  };
}
function hi(e, t) {
  if (t) {
    for (var r in t)
      if (t.hasOwnProperty(r)) {
        var n = t[r];
        typeof n == "object" && typeof e[r] == "object" ? e[r] = Ue({}, e[r], n) : e[r] = n;
      }
  }
  return e;
}
var cl = function(t, r, n, a, i, o) {
  t.required && (!n.hasOwnProperty(t.field) || Q(r, o || t.type)) && a.push(ce(i.messages.required, t.fullField));
}, Fh = function(t, r, n, a, i) {
  (/^\s+$/.test(r) || r === "") && a.push(ce(i.messages.whitespace, t.fullField));
}, Ht, jh = function() {
  if (Ht)
    return Ht;
  var e = "[a-fA-F\\d:]", t = function(m) {
    return m && m.includeBoundaries ? "(?:(?<=\\s|^)(?=" + e + ")|(?<=" + e + ")(?=\\s|$))" : "";
  }, r = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}", n = "[a-fA-F\\d]{1,4}", a = (`
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
`).replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim(), i = new RegExp("(?:^" + r + "$)|(?:^" + a + "$)"), o = new RegExp("^" + r + "$"), l = new RegExp("^" + a + "$"), u = function(m) {
    return m && m.exact ? i : new RegExp("(?:" + t(m) + r + t(m) + ")|(?:" + t(m) + a + t(m) + ")", "g");
  };
  u.v4 = function(x) {
    return x && x.exact ? o : new RegExp("" + t(x) + r + t(x), "g");
  }, u.v6 = function(x) {
    return x && x.exact ? l : new RegExp("" + t(x) + a + t(x), "g");
  };
  var s = "(?:(?:[a-z]+:)?//)", d = "(?:\\S+(?::\\S*)?@)?", c = u.v4().source, v = u.v6().source, f = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", g = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", p = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", y = "(?::\\d{2,5})?", h = '(?:[/?#][^\\s"]*)?', w = "(?:" + s + "|www\\.)" + d + "(?:localhost|" + c + "|" + v + "|" + f + g + p + ")" + y + h;
  return Ht = new RegExp("(?:^" + w + "$)", "i"), Ht;
}, mi = {
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, dt = {
  integer: function(t) {
    return dt.number(t) && parseInt(t, 10) === t;
  },
  float: function(t) {
    return dt.number(t) && !dt.integer(t);
  },
  array: function(t) {
    return Array.isArray(t);
  },
  regexp: function(t) {
    if (t instanceof RegExp)
      return !0;
    try {
      return !!new RegExp(t);
    } catch {
      return !1;
    }
  },
  date: function(t) {
    return typeof t.getTime == "function" && typeof t.getMonth == "function" && typeof t.getYear == "function" && !isNaN(t.getTime());
  },
  number: function(t) {
    return isNaN(t) ? !1 : typeof t == "number";
  },
  object: function(t) {
    return typeof t == "object" && !dt.array(t);
  },
  method: function(t) {
    return typeof t == "function";
  },
  email: function(t) {
    return typeof t == "string" && t.length <= 320 && !!t.match(mi.email);
  },
  url: function(t) {
    return typeof t == "string" && t.length <= 2048 && !!t.match(jh());
  },
  hex: function(t) {
    return typeof t == "string" && !!t.match(mi.hex);
  }
}, Eh = function(t, r, n, a, i) {
  if (t.required && r === void 0) {
    cl(t, r, n, a, i);
    return;
  }
  var o = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], l = t.type;
  o.indexOf(l) > -1 ? dt[l](r) || a.push(ce(i.messages.types[l], t.fullField, t.type)) : l && typeof r !== t.type && a.push(ce(i.messages.types[l], t.fullField, t.type));
}, Ih = function(t, r, n, a, i) {
  var o = typeof t.len == "number", l = typeof t.min == "number", u = typeof t.max == "number", s = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, d = r, c = null, v = typeof r == "number", f = typeof r == "string", g = Array.isArray(r);
  if (v ? c = "number" : f ? c = "string" : g && (c = "array"), !c)
    return !1;
  g && (d = r.length), f && (d = r.replace(s, "_").length), o ? d !== t.len && a.push(ce(i.messages[c].len, t.fullField, t.len)) : l && !u && d < t.min ? a.push(ce(i.messages[c].min, t.fullField, t.min)) : u && !l && d > t.max ? a.push(ce(i.messages[c].max, t.fullField, t.max)) : l && u && (d < t.min || d > t.max) && a.push(ce(i.messages[c].range, t.fullField, t.min, t.max));
}, Qe = "enum", Mh = function(t, r, n, a, i) {
  t[Qe] = Array.isArray(t[Qe]) ? t[Qe] : [], t[Qe].indexOf(r) === -1 && a.push(ce(i.messages[Qe], t.fullField, t[Qe].join(", ")));
}, Nh = function(t, r, n, a, i) {
  if (t.pattern) {
    if (t.pattern instanceof RegExp)
      t.pattern.lastIndex = 0, t.pattern.test(r) || a.push(ce(i.messages.pattern.mismatch, t.fullField, r, t.pattern));
    else if (typeof t.pattern == "string") {
      var o = new RegExp(t.pattern);
      o.test(r) || a.push(ce(i.messages.pattern.mismatch, t.fullField, r, t.pattern));
    }
  }
}, H = {
  required: cl,
  whitespace: Fh,
  type: Eh,
  range: Ih,
  enum: Mh,
  pattern: Nh
}, Lh = function(t, r, n, a, i) {
  var o = [], l = t.required || !t.required && a.hasOwnProperty(t.field);
  if (l) {
    if (Q(r, "string") && !t.required)
      return n();
    H.required(t, r, a, o, i, "string"), Q(r, "string") || (H.type(t, r, a, o, i), H.range(t, r, a, o, i), H.pattern(t, r, a, o, i), t.whitespace === !0 && H.whitespace(t, r, a, o, i));
  }
  n(o);
}, Rh = function(t, r, n, a, i) {
  var o = [], l = t.required || !t.required && a.hasOwnProperty(t.field);
  if (l) {
    if (Q(r) && !t.required)
      return n();
    H.required(t, r, a, o, i), r !== void 0 && H.type(t, r, a, o, i);
  }
  n(o);
}, qh = function(t, r, n, a, i) {
  var o = [], l = t.required || !t.required && a.hasOwnProperty(t.field);
  if (l) {
    if (r === "" && (r = void 0), Q(r) && !t.required)
      return n();
    H.required(t, r, a, o, i), r !== void 0 && (H.type(t, r, a, o, i), H.range(t, r, a, o, i));
  }
  n(o);
}, kh = function(t, r, n, a, i) {
  var o = [], l = t.required || !t.required && a.hasOwnProperty(t.field);
  if (l) {
    if (Q(r) && !t.required)
      return n();
    H.required(t, r, a, o, i), r !== void 0 && H.type(t, r, a, o, i);
  }
  n(o);
}, Dh = function(t, r, n, a, i) {
  var o = [], l = t.required || !t.required && a.hasOwnProperty(t.field);
  if (l) {
    if (Q(r) && !t.required)
      return n();
    H.required(t, r, a, o, i), Q(r) || H.type(t, r, a, o, i);
  }
  n(o);
}, Bh = function(t, r, n, a, i) {
  var o = [], l = t.required || !t.required && a.hasOwnProperty(t.field);
  if (l) {
    if (Q(r) && !t.required)
      return n();
    H.required(t, r, a, o, i), r !== void 0 && (H.type(t, r, a, o, i), H.range(t, r, a, o, i));
  }
  n(o);
}, Vh = function(t, r, n, a, i) {
  var o = [], l = t.required || !t.required && a.hasOwnProperty(t.field);
  if (l) {
    if (Q(r) && !t.required)
      return n();
    H.required(t, r, a, o, i), r !== void 0 && (H.type(t, r, a, o, i), H.range(t, r, a, o, i));
  }
  n(o);
}, Hh = function(t, r, n, a, i) {
  var o = [], l = t.required || !t.required && a.hasOwnProperty(t.field);
  if (l) {
    if (r == null && !t.required)
      return n();
    H.required(t, r, a, o, i, "array"), r != null && (H.type(t, r, a, o, i), H.range(t, r, a, o, i));
  }
  n(o);
}, Gh = function(t, r, n, a, i) {
  var o = [], l = t.required || !t.required && a.hasOwnProperty(t.field);
  if (l) {
    if (Q(r) && !t.required)
      return n();
    H.required(t, r, a, o, i), r !== void 0 && H.type(t, r, a, o, i);
  }
  n(o);
}, Uh = "enum", zh = function(t, r, n, a, i) {
  var o = [], l = t.required || !t.required && a.hasOwnProperty(t.field);
  if (l) {
    if (Q(r) && !t.required)
      return n();
    H.required(t, r, a, o, i), r !== void 0 && H[Uh](t, r, a, o, i);
  }
  n(o);
}, Wh = function(t, r, n, a, i) {
  var o = [], l = t.required || !t.required && a.hasOwnProperty(t.field);
  if (l) {
    if (Q(r, "string") && !t.required)
      return n();
    H.required(t, r, a, o, i), Q(r, "string") || H.pattern(t, r, a, o, i);
  }
  n(o);
}, Yh = function(t, r, n, a, i) {
  var o = [], l = t.required || !t.required && a.hasOwnProperty(t.field);
  if (l) {
    if (Q(r, "date") && !t.required)
      return n();
    if (H.required(t, r, a, o, i), !Q(r, "date")) {
      var u;
      r instanceof Date ? u = r : u = new Date(r), H.type(t, u, a, o, i), u && H.range(t, u.getTime(), a, o, i);
    }
  }
  n(o);
}, Kh = function(t, r, n, a, i) {
  var o = [], l = Array.isArray(r) ? "array" : typeof r;
  H.required(t, r, a, o, i, l), n(o);
}, Er = function(t, r, n, a, i) {
  var o = t.type, l = [], u = t.required || !t.required && a.hasOwnProperty(t.field);
  if (u) {
    if (Q(r, o) && !t.required)
      return n();
    H.required(t, r, a, l, i, o), Q(r, o) || H.type(t, r, a, l, i);
  }
  n(l);
}, Xh = function(t, r, n, a, i) {
  var o = [], l = t.required || !t.required && a.hasOwnProperty(t.field);
  if (l) {
    if (Q(r) && !t.required)
      return n();
    H.required(t, r, a, o, i);
  }
  n(o);
}, yt = {
  string: Lh,
  method: Rh,
  number: qh,
  boolean: kh,
  regexp: Dh,
  integer: Bh,
  float: Vh,
  array: Hh,
  object: Gh,
  enum: zh,
  pattern: Wh,
  date: Yh,
  url: Er,
  hex: Er,
  email: Er,
  required: Kh,
  any: Xh
};
function dn() {
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
      var t = JSON.parse(JSON.stringify(this));
      return t.clone = this.clone, t;
    }
  };
}
var vn = dn(), It = /* @__PURE__ */ function() {
  function e(r) {
    this.rules = null, this._messages = vn, this.define(r);
  }
  var t = e.prototype;
  return t.define = function(n) {
    var a = this;
    if (!n)
      throw new Error("Cannot configure a schema with no rules");
    if (typeof n != "object" || Array.isArray(n))
      throw new Error("Rules must be an object");
    this.rules = {}, Object.keys(n).forEach(function(i) {
      var o = n[i];
      a.rules[i] = Array.isArray(o) ? o : [o];
    });
  }, t.messages = function(n) {
    return n && (this._messages = hi(dn(), n)), this._messages;
  }, t.validate = function(n, a, i) {
    var o = this;
    a === void 0 && (a = {}), i === void 0 && (i = function() {
    });
    var l = n, u = a, s = i;
    if (typeof u == "function" && (s = u, u = {}), !this.rules || Object.keys(this.rules).length === 0)
      return s && s(null, l), Promise.resolve(l);
    function d(p) {
      var y = [], h = {};
      function w(m) {
        if (Array.isArray(m)) {
          var S;
          y = (S = y).concat.apply(S, m);
        } else
          y.push(m);
      }
      for (var x = 0; x < p.length; x++)
        w(p[x]);
      y.length ? (h = fn(y), s(y, h)) : s(null, l);
    }
    if (u.messages) {
      var c = this.messages();
      c === vn && (c = dn()), hi(c, u.messages), u.messages = c;
    } else
      u.messages = this.messages();
    var v = {}, f = u.keys || Object.keys(this.rules);
    f.forEach(function(p) {
      var y = o.rules[p], h = l[p];
      y.forEach(function(w) {
        var x = w;
        typeof x.transform == "function" && (l === n && (l = Ue({}, l)), h = l[p] = x.transform(h)), typeof x == "function" ? x = {
          validator: x
        } : x = Ue({}, x), x.validator = o.getValidationMethod(x), x.validator && (x.field = p, x.fullField = x.fullField || p, x.type = o.getType(x), v[p] = v[p] || [], v[p].push({
          rule: x,
          value: h,
          source: l,
          field: p
        }));
      });
    });
    var g = {};
    return $h(v, u, function(p, y) {
      var h = p.rule, w = (h.type === "object" || h.type === "array") && (typeof h.fields == "object" || typeof h.defaultField == "object");
      w = w && (h.required || !h.required && p.value), h.field = p.field;
      function x(C, O) {
        return Ue({}, O, {
          fullField: h.fullField + "." + C,
          fullFields: h.fullFields ? [].concat(h.fullFields, [C]) : [C]
        });
      }
      function m(C) {
        C === void 0 && (C = []);
        var O = Array.isArray(C) ? C : [C];
        !u.suppressWarning && O.length && e.warning("async-validator:", O), O.length && h.message !== void 0 && (O = [].concat(h.message));
        var T = O.map(gi(h, l));
        if (u.first && T.length)
          return g[h.field] = 1, y(T);
        if (!w)
          y(T);
        else {
          if (h.required && !p.value)
            return h.message !== void 0 ? T = [].concat(h.message).map(gi(h, l)) : u.error && (T = [u.error(h, ce(u.messages.required, h.field))]), y(T);
          var L = {};
          h.defaultField && Object.keys(p.value).map(function(k) {
            L[k] = h.defaultField;
          }), L = Ue({}, L, p.rule.fields);
          var U = {};
          Object.keys(L).forEach(function(k) {
            var P = L[k], b = Array.isArray(P) ? P : [P];
            U[k] = b.map(x.bind(null, k));
          });
          var D = new e(U);
          D.messages(u.messages), p.rule.options && (p.rule.options.messages = u.messages, p.rule.options.error = u.error), D.validate(p.value, p.rule.options || u, function(k) {
            var P = [];
            T && T.length && P.push.apply(P, T), k && k.length && P.push.apply(P, k), y(P.length ? P : null);
          });
        }
      }
      var S;
      if (h.asyncValidator)
        S = h.asyncValidator(h, p.value, m, p.source, u);
      else if (h.validator) {
        try {
          S = h.validator(h, p.value, m, p.source, u);
        } catch (C) {
          console.error == null || console.error(C), u.suppressValidatorError || setTimeout(function() {
            throw C;
          }, 0), m(C.message);
        }
        S === !0 ? m() : S === !1 ? m(typeof h.message == "function" ? h.message(h.fullField || h.field) : h.message || (h.fullField || h.field) + " fails") : S instanceof Array ? m(S) : S instanceof Error && m(S.message);
      }
      S && S.then && S.then(function() {
        return m();
      }, function(C) {
        return m(C);
      });
    }, function(p) {
      d(p);
    }, l);
  }, t.getType = function(n) {
    if (n.type === void 0 && n.pattern instanceof RegExp && (n.type = "pattern"), typeof n.validator != "function" && n.type && !yt.hasOwnProperty(n.type))
      throw new Error(ce("Unknown rule type %s", n.type));
    return n.type || "string";
  }, t.getValidationMethod = function(n) {
    if (typeof n.validator == "function")
      return n.validator;
    var a = Object.keys(n), i = a.indexOf("message");
    return i !== -1 && a.splice(i, 1), a.length === 1 && a[0] === "required" ? yt.required : yt[this.getType(n)] || void 0;
  }, e;
}();
It.register = function(t, r) {
  if (typeof r != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  yt[t] = r;
};
It.warning = ul;
It.messages = vn;
It.validators = yt;
function Re(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function sl(e, t) {
  for (var r = e, n = 0; n < t.length; n += 1) {
    if (r == null)
      return;
    r = r[t[n]];
  }
  return r;
}
function fl(e, t, r, n) {
  if (!t.length)
    return r;
  var a = Ws(t), i = a[0], o = a.slice(1), l;
  return !e && typeof i == "number" ? l = [] : Array.isArray(e) ? l = ve(e) : l = N({}, e), n && r === void 0 && o.length === 1 ? delete l[i][o[0]] : l[i] = fl(l[i], o, r, n), l;
}
function Zh(e, t, r) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return t.length && n && r === void 0 && !sl(e, t.slice(0, -1)) ? e : fl(e, t, r, n);
}
function pn(e) {
  return Re(e);
}
function Jh(e, t) {
  var r = sl(e, t);
  return r;
}
function Qh(e, t, r) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1, a = Zh(e, t, r, n);
  return a;
}
function em(e, t) {
  return e && e.some(function(r) {
    return rm(r, t);
  });
}
function yi(e) {
  return me(e) === "object" && e !== null && Object.getPrototypeOf(e) === Object.prototype;
}
function dl(e, t) {
  var r = Array.isArray(e) ? ve(e) : N({}, e);
  return t && Object.keys(t).forEach(function(n) {
    var a = r[n], i = t[n], o = yi(a) && yi(i);
    r[n] = o ? dl(a, i || {}) : i;
  }), r;
}
function tm(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  return r.reduce(function(a, i) {
    return dl(a, i);
  }, e);
}
function bi(e, t) {
  var r = {};
  return t.forEach(function(n) {
    var a = Jh(e, n);
    r = Qh(r, n, a);
  }), r;
}
function rm(e, t) {
  return !e || !t || e.length !== t.length ? !1 : e.every(function(r, n) {
    return t[n] === r;
  });
}
var le = "'${name}' is not a valid ${type}", mr = {
  default: "Validation error on field '${name}'",
  required: "'${name}' is required",
  enum: "'${name}' must be one of [${enum}]",
  whitespace: "'${name}' cannot be empty",
  date: {
    format: "'${name}' is invalid for format date",
    parse: "'${name}' could not be parsed as date",
    invalid: "'${name}' is invalid date"
  },
  types: {
    string: le,
    method: le,
    array: le,
    object: le,
    number: le,
    date: le,
    boolean: le,
    integer: le,
    float: le,
    regexp: le,
    email: le,
    url: le,
    hex: le
  },
  string: {
    len: "'${name}' must be exactly ${len} characters",
    min: "'${name}' must be at least ${min} characters",
    max: "'${name}' cannot be longer than ${max} characters",
    range: "'${name}' must be between ${min} and ${max} characters"
  },
  number: {
    len: "'${name}' must equal ${len}",
    min: "'${name}' cannot be less than ${min}",
    max: "'${name}' cannot be greater than ${max}",
    range: "'${name}' must be between ${min} and ${max}"
  },
  array: {
    len: "'${name}' must be exactly ${len} in length",
    min: "'${name}' cannot be less than ${min} in length",
    max: "'${name}' cannot be greater than ${max} in length",
    range: "'${name}' must be between ${min} and ${max} in length"
  },
  pattern: {
    mismatch: "'${name}' does not match pattern ${pattern}"
  }
}, yr = globalThis && globalThis.__awaiter || function(e, t, r, n) {
  function a(i) {
    return i instanceof r ? i : new r(function(o) {
      o(i);
    });
  }
  return new (r || (r = Promise))(function(i, o) {
    function l(d) {
      try {
        s(n.next(d));
      } catch (c) {
        o(c);
      }
    }
    function u(d) {
      try {
        s(n.throw(d));
      } catch (c) {
        o(c);
      }
    }
    function s(d) {
      d.done ? i(d.value) : a(d.value).then(l, u);
    }
    s((n = n.apply(e, t || [])).next());
  });
}, nm = It;
function am(e, t) {
  return e.replace(/\$\{\w+\}/g, function(r) {
    var n = r.slice(2, -1);
    return t[n];
  });
}
function gn(e, t, r, n, a) {
  return yr(this, void 0, void 0, /* @__PURE__ */ ke.mark(function i() {
    var o, l, u, s, d, c, v, f;
    return ke.wrap(function(p) {
      for (; ; )
        switch (p.prev = p.next) {
          case 0:
            return o = N({}, r), delete o.ruleIndex, delete o.trigger, l = null, o && o.type === "array" && o.defaultField && (l = o.defaultField, delete o.defaultField), u = new nm(B({}, e, [o])), s = tm({}, mr, n.validateMessages), u.messages(s), d = [], p.prev = 9, p.next = 12, Promise.resolve(u.validate(B({}, e, t), N({}, n)));
          case 12:
            p.next = 17;
            break;
          case 14:
            p.prev = 14, p.t0 = p.catch(9), p.t0.errors ? d = p.t0.errors.map(function(y, h) {
              var w = y.message;
              return fu(w) ? Fl(w, {
                key: "error_".concat(h)
              }) : w;
            }) : (console.error(p.t0), d = [s.default()]);
          case 17:
            if (!(!d.length && l)) {
              p.next = 22;
              break;
            }
            return p.next = 20, Promise.all(t.map(function(y, h) {
              return gn("".concat(e, ".").concat(h), y, l, n, a);
            }));
          case 20:
            return c = p.sent, p.abrupt("return", c.reduce(function(y, h) {
              return [].concat(ve(y), ve(h));
            }, []));
          case 22:
            return v = N(N(N({}, r), {
              name: e,
              enum: (r.enum || []).join(", ")
            }), a), f = d.map(function(y) {
              return typeof y == "string" ? am(y, v) : y;
            }), p.abrupt("return", f);
          case 25:
          case "end":
            return p.stop();
        }
    }, i, null, [[9, 14]]);
  }));
}
function vl(e, t, r, n, a, i) {
  var o = this, l = e.join("."), u = r.map(function(c, v) {
    var f = c.validator, g = N(N({}, c), {
      ruleIndex: v
    });
    return f && (g.validator = function(p, y, h) {
      var w = !1, x = function() {
        for (var C = arguments.length, O = new Array(C), T = 0; T < C; T++)
          O[T] = arguments[T];
        Promise.resolve().then(function() {
          er(!w, "Your validator function has already return a promise. `callback` will be ignored."), w || h.apply(void 0, O);
        });
      }, m = f(p, y, x);
      w = m && typeof m.then == "function" && typeof m.catch == "function", er(w, "`callback` is deprecated. Please return a promise instead."), w && m.then(function() {
        h();
      }).catch(function(S) {
        h(S || " ");
      });
    }), g;
  }).sort(function(c, v) {
    var f = c.warningOnly, g = c.ruleIndex, p = v.warningOnly, y = v.ruleIndex;
    return !!f == !!p ? g - y : f ? 1 : -1;
  }), s;
  if (a === !0)
    s = new Promise(function(c, v) {
      return yr(o, void 0, void 0, /* @__PURE__ */ ke.mark(function f() {
        var g, p, y;
        return ke.wrap(function(w) {
          for (; ; )
            switch (w.prev = w.next) {
              case 0:
                g = 0;
              case 1:
                if (!(g < u.length)) {
                  w.next = 12;
                  break;
                }
                return p = u[g], w.next = 5, gn(l, t, p, n, i);
              case 5:
                if (y = w.sent, !y.length) {
                  w.next = 9;
                  break;
                }
                return v([{
                  errors: y,
                  rule: p
                }]), w.abrupt("return");
              case 9:
                g += 1, w.next = 1;
                break;
              case 12:
                c([]);
              case 13:
              case "end":
                return w.stop();
            }
        }, f);
      }));
    });
  else {
    var d = u.map(function(c) {
      return gn(l, t, c, n, i).then(function(v) {
        return {
          errors: v,
          rule: c
        };
      });
    });
    s = (a ? om(d) : im(d)).then(function(c) {
      return Promise.reject(c);
    });
  }
  return s.catch(function(c) {
    return c;
  }), s;
}
function im(e) {
  return yr(this, void 0, void 0, /* @__PURE__ */ ke.mark(function t() {
    return ke.wrap(function(n) {
      for (; ; )
        switch (n.prev = n.next) {
          case 0:
            return n.abrupt("return", Promise.all(e).then(function(a) {
              var i, o = (i = []).concat.apply(i, ve(a));
              return o;
            }));
          case 1:
          case "end":
            return n.stop();
        }
    }, t);
  }));
}
function om(e) {
  return yr(this, void 0, void 0, /* @__PURE__ */ ke.mark(function t() {
    var r;
    return ke.wrap(function(a) {
      for (; ; )
        switch (a.prev = a.next) {
          case 0:
            return r = 0, a.abrupt("return", new Promise(function(i) {
              e.forEach(function(o) {
                o.then(function(l) {
                  l.errors.length && i([l]), r += 1, r === e.length && i([]);
                });
              });
            }));
          case 2:
          case "end":
            return a.stop();
        }
    }, t);
  }));
}
var lm = 1, um = 2;
function cm(e, t, r, n) {
  var a = r.length, i = a, o = !n;
  if (e == null)
    return !i;
  for (e = Object(e); a--; ) {
    var l = r[a];
    if (o && l[2] ? l[1] !== e[l[0]] : !(l[0] in e))
      return !1;
  }
  for (; ++a < i; ) {
    l = r[a];
    var u = l[0], s = e[u], d = l[1];
    if (o && l[2]) {
      if (s === void 0 && !(u in e))
        return !1;
    } else {
      var c = new _e();
      if (n)
        var v = n(s, d, u, e, t, c);
      if (!(v === void 0 ? vr(d, s, lm | um, n, c) : v))
        return !1;
    }
  }
  return !0;
}
function pl(e) {
  return e === e && !Fe(e);
}
function sm(e) {
  for (var t = Ft(e), r = t.length; r--; ) {
    var n = t[r], a = e[n];
    t[r] = [n, a, pl(a)];
  }
  return t;
}
function gl(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
function fm(e) {
  var t = sm(e);
  return t.length == 1 && t[0][2] ? gl(t[0][0], t[0][1]) : function(r) {
    return r === e || cm(r, e, t);
  };
}
function dm(e, t, r) {
  var n = e == null ? void 0 : Vn(e, t);
  return n === void 0 ? r : n;
}
var vm = 1, pm = 2;
function gm(e, t) {
  return Dn(e) && pl(t) ? gl(jt(e), t) : function(r) {
    var n = dm(r, e);
    return n === void 0 && n === t ? yp(r, e) : vr(t, n, vm | pm);
  };
}
function hm(e) {
  return function(t) {
    return Vn(t, e);
  };
}
function mm(e) {
  return Dn(e) ? Gv(jt(e)) : hm(e);
}
function hl(e) {
  return typeof e == "function" ? e : e == null ? Hn : typeof e == "object" ? we(e) ? gm(e[0], e[1]) : fm(e) : mm(e);
}
function ym(e) {
  return function(t, r, n) {
    var a = Object(t);
    if (!dr(t)) {
      var i = hl(r);
      t = Ft(t), r = function(l) {
        return i(a[l], l, a);
      };
    }
    var o = e(t, r, n);
    return o > -1 ? a[i ? t[o] : o] : void 0;
  };
}
var bm = Math.max;
function wm(e, t, r) {
  var n = e == null ? 0 : e.length;
  if (!n)
    return -1;
  var a = r == null ? 0 : tp(r);
  return a < 0 && (a = bm(n + a, 0)), zo(e, hl(t), a);
}
var xm = ym(wm);
const Cm = xm;
var ml = Symbol("formContextKey"), yl = function(t) {
  de(ml, t);
}, zn = function() {
  return Se(ml, {
    name: j(function() {
    }),
    labelAlign: j(function() {
      return "right";
    }),
    vertical: j(function() {
      return !1;
    }),
    addField: function(r, n) {
    },
    removeField: function(r) {
    },
    model: j(function() {
    }),
    rules: j(function() {
    }),
    colon: j(function() {
    }),
    labelWrap: j(function() {
    }),
    labelCol: j(function() {
    }),
    requiredMark: j(function() {
      return !1;
    }),
    validateTrigger: j(function() {
    }),
    onValidate: function() {
    },
    validateMessages: j(function() {
      return mr;
    })
  });
}, bl = Symbol("formItemPrefixContextKey"), Om = function(t) {
  de(bl, t);
}, _m = function() {
  return Se(bl, {
    prefixCls: j(function() {
      return "";
    })
  });
}, Wn = function(t, r) {
  var n, a = r.slots, i = r.emit, o = r.attrs, l, u, s, d, c, v = N(N({}, t), o), f = v.prefixCls, g = v.htmlFor, p = v.labelCol, y = v.labelAlign, h = v.colon, w = v.required, x = v.requiredMark, m = yu("Form"), S = Dr(m, 1), C = S[0], O = (l = t.label) !== null && l !== void 0 ? l : (u = a.label) === null || u === void 0 ? void 0 : u.call(a);
  if (!O)
    return null;
  var T = zn(), L = T.vertical, U = T.labelAlign, D = T.labelCol, k = T.labelWrap, P = T.colon, b = p || (D == null ? void 0 : D.value) || {}, I = y || (U == null ? void 0 : U.value), E = "".concat(f, "-item-label"), A = be(E, I === "left" && "".concat(E, "-left"), b.class, B({}, "".concat(E, "-wrap"), !!k.value)), F = O, _ = h === !0 || (P == null ? void 0 : P.value) !== !1 && h !== !1, M = _ && !L.value;
  M && typeof O == "string" && O.trim() !== "" && (F = O.replace(/[:|：]\s*$/, "")), F = $(ze, null, [F, (s = a.tooltip) === null || s === void 0 ? void 0 : s.call(a, {
    class: "".concat(f, "-item-tooltip")
  })]), x === "optional" && !w && (F = $(ze, null, [F, $("span", {
    class: "".concat(f, "-item-optional")
  }, [((d = C.value) === null || d === void 0 ? void 0 : d.optional) || ((c = bt.Form) === null || c === void 0 ? void 0 : c.optional)])]));
  var q = be((n = {}, B(n, "".concat(f, "-item-required"), w), B(n, "".concat(f, "-item-required-mark-optional"), x === "optional"), B(n, "".concat(f, "-item-no-colon"), !_), n));
  return $(tl, Z(Z({}, b), {}, {
    class: A
  }), {
    default: function() {
      return [$("label", {
        for: g,
        class: q,
        title: typeof O == "string" ? O : "",
        onClick: function(G) {
          return i("click", G);
        }
      }, [F])];
    }
  });
};
Wn.displayName = "FormItemLabel";
Wn.inheritAttrs = !1;
const Sm = Wn, Pm = ae({
  name: "ErrorList",
  props: ["errors", "help", "onDomErrorVisibleChange", "helpStatus", "warnings"],
  setup: function(t) {
    var r = Ee("", t), n = r.prefixCls, a = _m(), i = a.prefixCls, o = a.status, l = j(function() {
      return "".concat(i.value, "-item-explain");
    }), u = j(function() {
      return !!(t.errors && t.errors.length);
    }), s = ie(o.value);
    return ye([u, o], function() {
      u.value && (s.value = o.value);
    }), function() {
      var d, c, v = Dv("".concat(n.value, "-show-help-item")), f = to("".concat(n.value, "-show-help-item"), v);
      return f.class = l.value, !((d = t.errors) === null || d === void 0) && d.length ? $(Si, Z(Z({}, f), {}, {
        tag: "div"
      }), {
        default: function() {
          return [(c = t.errors) === null || c === void 0 ? void 0 : c.map(function(p, y) {
            return $("div", {
              key: y,
              role: "alert",
              class: s.value ? "".concat(l.value, "-").concat(s.value) : ""
            }, [p]);
          })];
        }
      }) : null;
    };
  }
});
var $m = {
  success: vo,
  warning: so,
  error: fo,
  validating: co
}, Tm = ae({
  slots: ["help", "extra", "errors"],
  inheritAttrs: !1,
  props: ["prefixCls", "errors", "hasFeedback", "onDomErrorVisibleChange", "wrapperCol", "help", "extra", "status"],
  setup: function(t, r) {
    var n = r.slots, a = zn(), i = a.wrapperCol, o = N({}, a);
    return delete o.labelCol, delete o.wrapperCol, yl(o), Om({
      prefixCls: j(function() {
        return t.prefixCls;
      }),
      status: j(function() {
        return t.status;
      })
    }), function() {
      var l, u, s, d = t.prefixCls, c = t.wrapperCol, v = t.help, f = v === void 0 ? (l = n.help) === null || l === void 0 ? void 0 : l.call(n) : v, g = t.errors, p = g === void 0 ? (u = n.errors) === null || u === void 0 ? void 0 : u.call(n) : g, y = t.hasFeedback, h = t.status, w = t.extra, x = w === void 0 ? (s = n.extra) === null || s === void 0 ? void 0 : s.call(n) : w, m = "".concat(d, "-item"), S = c || (i == null ? void 0 : i.value) || {}, C = be("".concat(m, "-control"), S.class), O = h && $m[h];
      return $(tl, Z(Z({}, S), {}, {
        class: C
      }), {
        default: function() {
          var L;
          return $(ze, null, [$("div", {
            class: "".concat(m, "-control-input")
          }, [$("div", {
            class: "".concat(m, "-control-input-content")
          }, [(L = n.default) === null || L === void 0 ? void 0 : L.call(n)]), y && O ? $("span", {
            class: "".concat(m, "-children-icon")
          }, [$(O, null, null)]) : null]), $(Pm, {
            errors: p,
            help: f,
            class: "".concat(m, "-explain-connected")
          }, null), x ? $("div", {
            class: "".concat(m, "-extra")
          }, [x]) : null]);
        }
      });
    };
  }
});
const Am = Tm;
function Fm(e) {
  var t = $i(e.value.slice()), r = null;
  return At(function() {
    clearTimeout(r), r = setTimeout(function() {
      t.value = e.value;
    }, e.value.length ? 0 : 10);
  }), t;
}
qe("success", "warning", "error", "validating", "");
function Ir(e, t, r) {
  var n = e, a = t, i = 0;
  try {
    for (var o = a.length; i < o - 1 && !(!n && !r); ++i) {
      var l = a[i];
      if (l in n)
        n = n[l];
      else {
        if (r)
          throw Error("please transfer a valid name path to form item!");
        break;
      }
    }
    if (r && !n)
      throw Error("please transfer a valid name path to form item!");
  } catch {
    console.error("please transfer a valid name path to form item!");
  }
  return {
    o: n,
    k: a[i],
    v: n ? n[a[i]] : void 0
  };
}
var jm = function() {
  return {
    htmlFor: String,
    prefixCls: String,
    label: Oe.any,
    help: Oe.any,
    extra: Oe.any,
    labelCol: {
      type: Object
    },
    wrapperCol: {
      type: Object
    },
    hasFeedback: {
      type: Boolean,
      default: !1
    },
    colon: {
      type: Boolean,
      default: void 0
    },
    labelAlign: Oe.oneOf(qe("left", "right")),
    prop: {
      type: [String, Number, Array]
    },
    name: {
      type: [String, Number, Array]
    },
    rules: [Array, Object],
    autoLink: {
      type: Boolean,
      default: !0
    },
    required: {
      type: Boolean,
      default: void 0
    },
    validateFirst: {
      type: Boolean,
      default: void 0
    },
    validateStatus: Oe.oneOf(qe("", "success", "warning", "error", "validating")),
    validateTrigger: {
      type: [String, Array]
    },
    messageVariables: {
      type: Object
    },
    hidden: Boolean,
    noStyle: Boolean
  };
}, Em = 0, Im = "form_item";
const wl = ae({
  name: "AFormItem",
  inheritAttrs: !1,
  __ANT_NEW_FORM_ITEM: !0,
  props: jm(),
  slots: ["help", "label", "extra"],
  setup: function(t, r) {
    var n = r.slots, a = r.attrs, i = r.expose;
    er(t.prop === void 0, "`prop` is deprecated. Please use `name` instead.");
    var o = "form-item-".concat(++Em), l = Ee("form", t), u = l.prefixCls, s = zn(), d = j(function() {
      return t.name || t.prop;
    }), c = ie([]), v = ie(!1), f = ie(), g = j(function() {
      var _ = d.value;
      return pn(_);
    }), p = j(function() {
      if (g.value.length) {
        var _ = s.name.value, M = g.value.join("_");
        return _ ? "".concat(_, "_").concat(M) : "".concat(Im, "_").concat(M);
      } else
        return;
    }), y = function() {
      var M = s.model.value;
      if (!(!M || !d.value))
        return Ir(M, g.value, !0).v;
    }, h = j(function() {
      return y();
    }), w = ie(Xt(h.value)), x = j(function() {
      var _ = t.validateTrigger !== void 0 ? t.validateTrigger : s.validateTrigger.value;
      return _ = _ === void 0 ? "change" : _, Re(_);
    }), m = j(function() {
      var _ = s.rules.value, M = t.rules, q = t.required !== void 0 ? {
        required: !!t.required,
        trigger: x.value
      } : [], R = Ir(_, g.value);
      _ = _ ? R.o[R.k] || R.v : [];
      var V = [].concat(M || _ || []);
      return Cm(V, function(G) {
        return G.required;
      }) ? V : V.concat(q);
    }), S = j(function() {
      var _ = m.value, M = !1;
      return _ && _.length && _.every(function(q) {
        return q.required ? (M = !0, !1) : !0;
      }), M || t.required;
    }), C = ie();
    At(function() {
      C.value = t.validateStatus;
    });
    var O = j(function() {
      var _ = {};
      return typeof t.label == "string" ? _.label = t.label : t.name && (_.label = String(name)), t.messageVariables && (_ = N(N({}, _), t.messageVariables)), _;
    }), T = function(M) {
      if (g.value.length !== 0) {
        var q = t.validateFirst, R = q === void 0 ? !1 : q, V = M || {}, G = V.triggerName, z = m.value;
        if (G && (z = z.filter(function(K) {
          var te = K.trigger;
          if (!te && !x.value.length)
            return !0;
          var ge = Re(te || x.value);
          return ge.includes(G);
        })), !z.length)
          return Promise.resolve();
        var J = vl(g.value, h.value, z, N({
          validateMessages: s.validateMessages.value
        }, M), R, O.value);
        return C.value = "validating", c.value = [], J.catch(function(K) {
          return K;
        }).then(function() {
          var K = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
          if (C.value === "validating") {
            var te = K.filter(function(ge) {
              return ge && ge.errors.length;
            });
            C.value = te.length ? "error" : "success", c.value = te.map(function(ge) {
              return ge.errors;
            }), s.onValidate(d.value, !c.value.length, c.value.length ? Lr(c.value[0]) : null);
          }
        }), J;
      }
    }, L = function() {
      T({
        triggerName: "blur"
      });
    }, U = function() {
      if (v.value) {
        v.value = !1;
        return;
      }
      T({
        triggerName: "change"
      });
    }, D = function() {
      C.value = t.validateStatus, v.value = !1, c.value = [];
    }, k = function() {
      C.value = t.validateStatus, v.value = !0, c.value = [];
      var M = s.model.value || {}, q = h.value, R = Ir(M, g.value, !0);
      Array.isArray(q) ? R.o[R.k] = [].concat(w.value) : R.o[R.k] = w.value, lr(function() {
        v.value = !1;
      });
    }, P = j(function() {
      return t.htmlFor === void 0 ? p.value : t.htmlFor;
    }), b = function() {
      var M = P.value;
      if (!(!M || !f.value)) {
        var q = f.value.$el.querySelector('[id="'.concat(M, '"]'));
        q && q.focus && q.focus();
      }
    };
    i({
      onFieldBlur: L,
      onFieldChange: U,
      clearValidate: D,
      resetField: k
    }), Av({
      id: p,
      onFieldBlur: function() {
        t.autoLink && L();
      },
      onFieldChange: function() {
        t.autoLink && U();
      },
      clearValidate: D
    }, j(function() {
      return !!(t.autoLink && s.model.value && d.value);
    }));
    var I = !1;
    ye(d, function(_) {
      _ ? I || (I = !0, s.addField(o, {
        fieldValue: h,
        fieldId: p,
        fieldName: d,
        resetField: k,
        clearValidate: D,
        namePath: g,
        validateRules: T,
        rules: m
      })) : (I = !1, s.removeField(o));
    }, {
      immediate: !0
    }), hn(function() {
      s.removeField(o);
    });
    var E = Fm(c), A = j(function() {
      return t.validateStatus !== void 0 ? t.validateStatus : E.value.length ? "error" : C.value;
    }), F = j(function() {
      var _;
      return _ = {}, B(_, "".concat(u.value, "-item"), !0), B(_, "".concat(u.value, "-item-has-feedback"), A.value && t.hasFeedback), B(_, "".concat(u.value, "-item-has-success"), A.value === "success"), B(_, "".concat(u.value, "-item-has-warning"), A.value === "warning"), B(_, "".concat(u.value, "-item-has-error"), A.value === "error"), B(_, "".concat(u.value, "-item-is-validating"), A.value === "validating"), B(_, "".concat(u.value, "-item-hidden"), t.hidden), _;
    });
    return function() {
      var _, M;
      if (t.noStyle)
        return (_ = n.default) === null || _ === void 0 ? void 0 : _.call(n);
      var q = (M = t.help) !== null && M !== void 0 ? M : n.help ? bn(n.help()) : null;
      return $(kp, Z(Z({}, a), {}, {
        class: [F.value, q != null || E.value.length ? "".concat(u.value, "-item-with-help") : "", a.class],
        key: "row"
      }), {
        default: function() {
          var V, G, z, J;
          return $(ze, null, [$(Sm, Z(Z({}, t), {}, {
            htmlFor: P.value,
            required: S.value,
            requiredMark: s.requiredMark.value,
            prefixCls: u.value,
            onClick: b,
            label: (V = t.label) !== null && V !== void 0 ? V : (G = n.label) === null || G === void 0 ? void 0 : G.call(n)
          }), null), $(Am, Z(Z({}, t), {}, {
            errors: q != null ? Re(q) : E.value,
            prefixCls: u.value,
            status: A.value,
            ref: f,
            help: q,
            extra: (z = t.extra) !== null && z !== void 0 ? z : (J = n.extra) === null || J === void 0 ? void 0 : J.call(n)
          }), {
            default: n.default
          })]);
        }
      });
    };
  }
});
function xl(e) {
  var t = !1, r = e.length, n = [];
  return e.length ? new Promise(function(a, i) {
    e.forEach(function(o, l) {
      o.catch(function(u) {
        return t = !0, u;
      }).then(function(u) {
        r -= 1, n[l] = u, !(r > 0) && (t && i(n), a(n));
      });
    });
  }) : Promise.resolve([]);
}
function wi(e) {
  return typeof e == "object" && e != null && e.nodeType === 1;
}
function xi(e, t) {
  return (!t || e !== "hidden") && e !== "visible" && e !== "clip";
}
function Mr(e, t) {
  if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
    var r = getComputedStyle(e, null);
    return xi(r.overflowY, t) || xi(r.overflowX, t) || function(n) {
      var a = function(i) {
        if (!i.ownerDocument || !i.ownerDocument.defaultView)
          return null;
        try {
          return i.ownerDocument.defaultView.frameElement;
        } catch {
          return null;
        }
      }(n);
      return !!a && (a.clientHeight < n.scrollHeight || a.clientWidth < n.scrollWidth);
    }(e);
  }
  return !1;
}
function Gt(e, t, r, n, a, i, o, l) {
  return i < e && o > t || i > e && o < t ? 0 : i <= e && l <= r || o >= t && l >= r ? i - e - n : o > t && l < r || i < e && l > r ? o - t + a : 0;
}
function Ci(e, t) {
  var r = window, n = t.scrollMode, a = t.block, i = t.inline, o = t.boundary, l = t.skipOverflowHiddenElements, u = typeof o == "function" ? o : function(De) {
    return De !== o;
  };
  if (!wi(e))
    throw new TypeError("Invalid target");
  for (var s = document.scrollingElement || document.documentElement, d = [], c = e; wi(c) && u(c); ) {
    if ((c = c.parentElement) === s) {
      d.push(c);
      break;
    }
    c != null && c === document.body && Mr(c) && !Mr(document.documentElement) || c != null && Mr(c, l) && d.push(c);
  }
  for (var v = r.visualViewport ? r.visualViewport.width : innerWidth, f = r.visualViewport ? r.visualViewport.height : innerHeight, g = window.scrollX || pageXOffset, p = window.scrollY || pageYOffset, y = e.getBoundingClientRect(), h = y.height, w = y.width, x = y.top, m = y.right, S = y.bottom, C = y.left, O = a === "start" || a === "nearest" ? x : a === "end" ? S : x + h / 2, T = i === "center" ? C + w / 2 : i === "end" ? m : C, L = [], U = 0; U < d.length; U++) {
    var D = d[U], k = D.getBoundingClientRect(), P = k.height, b = k.width, I = k.top, E = k.right, A = k.bottom, F = k.left;
    if (n === "if-needed" && x >= 0 && C >= 0 && S <= f && m <= v && x >= I && S <= A && C >= F && m <= E)
      return L;
    var _ = getComputedStyle(D), M = parseInt(_.borderLeftWidth, 10), q = parseInt(_.borderTopWidth, 10), R = parseInt(_.borderRightWidth, 10), V = parseInt(_.borderBottomWidth, 10), G = 0, z = 0, J = "offsetWidth" in D ? D.offsetWidth - D.clientWidth - M - R : 0, K = "offsetHeight" in D ? D.offsetHeight - D.clientHeight - q - V : 0;
    if (s === D)
      G = a === "start" ? O : a === "end" ? O - f : a === "nearest" ? Gt(p, p + f, f, q, V, p + O, p + O + h, h) : O - f / 2, z = i === "start" ? T : i === "center" ? T - v / 2 : i === "end" ? T - v : Gt(g, g + v, v, M, R, g + T, g + T + w, w), G = Math.max(0, G + p), z = Math.max(0, z + g);
    else {
      G = a === "start" ? O - I - q : a === "end" ? O - A + V + K : a === "nearest" ? Gt(I, A, P, q, V + K, O, O + h, h) : O - (I + P / 2) + K / 2, z = i === "start" ? T - F - M : i === "center" ? T - (F + b / 2) + J / 2 : i === "end" ? T - E + R + J : Gt(F, E, b, M, R + J, T, T + w, w);
      var te = D.scrollLeft, ge = D.scrollTop;
      O += ge - (G = Math.max(0, Math.min(ge + G, D.scrollHeight - P + K))), T += te - (z = Math.max(0, Math.min(te + z, D.scrollWidth - b + J)));
    }
    L.push({ el: D, top: G, left: z });
  }
  return L;
}
function Cl(e) {
  return e === Object(e) && Object.keys(e).length !== 0;
}
function Mm(e, t) {
  t === void 0 && (t = "auto");
  var r = "scrollBehavior" in document.body.style;
  e.forEach(function(n) {
    var a = n.el, i = n.top, o = n.left;
    a.scroll && r ? a.scroll({
      top: i,
      left: o,
      behavior: t
    }) : (a.scrollTop = i, a.scrollLeft = o);
  });
}
function Nm(e) {
  return e === !1 ? {
    block: "end",
    inline: "nearest"
  } : Cl(e) ? e : {
    block: "start",
    inline: "nearest"
  };
}
function Lm(e, t) {
  var r = e.isConnected || e.ownerDocument.documentElement.contains(e);
  if (Cl(t) && typeof t.behavior == "function")
    return t.behavior(r ? Ci(e, t) : []);
  if (!!r) {
    var n = Nm(t);
    return Mm(Ci(e, n), n.behavior);
  }
}
var Rm = Math.min;
function qm(e, t, r) {
  for (var n = r ? qv : Rv, a = e[0].length, i = e.length, o = i, l = Array(i), u = 1 / 0, s = []; o--; ) {
    var d = e[o];
    o && t && (d = pr(d, fr(t))), u = Rm(d.length, u), l[o] = !r && (t || a >= 120 && d.length >= 120) ? new St(o && d) : void 0;
  }
  d = e[0];
  var c = -1, v = l[0];
  e:
    for (; ++c < a && s.length < u; ) {
      var f = d[c], g = t ? t(f) : f;
      if (f = r || f !== 0 ? f : 0, !(v ? Jr(v, g) : n(s, g, r))) {
        for (o = i; --o; ) {
          var p = l[o];
          if (!(p ? Jr(p, g) : n(e[o], g, r)))
            continue e;
        }
        v && v.push(g), s.push(f);
      }
    }
  return s;
}
function km(e, t) {
  return Qo(Jo(e, t, Hn), e + "");
}
function Dm(e) {
  return Pe(e) && dr(e);
}
function Bm(e) {
  return Dm(e) ? e : [];
}
var Vm = km(function(e) {
  var t = pr(e, Bm);
  return t.length && t[0] === e[0] ? qm(t) : [];
});
const Hm = Vm;
function Gm(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function Um(e, t) {
  return t.length < 2 ? e : Vn(e, Hv(t, 0, -1));
}
function zm(e, t) {
  return t = hr(t, e), e = Um(e, t), e == null || delete e[jt(Gm(t))];
}
function Wm(e) {
  return lu(e) ? void 0 : e;
}
var Ym = 1, Km = 2, Xm = 4, Zm = Fp(function(e, t) {
  var r = {};
  if (e == null)
    return r;
  var n = !1;
  t = pr(t, function(i) {
    return i = hr(i, e), n || (n = i.length > 1), i;
  }), Et(e, al(e), r), n && (r = mt(r, Ym | Km | Xm, Wm));
  for (var a = t.length; a--; )
    zm(r, t[a]);
  return r;
});
const Jm = Zm;
function Oi(e) {
  var t = !1;
  return e && e.length && e.every(function(r) {
    return r.required ? (t = !0, !1) : !0;
  }), t;
}
function _i(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function Nr(e, t, r) {
  var n = e;
  t = t.replace(/\[(\w+)\]/g, ".$1"), t = t.replace(/^\./, "");
  for (var a = t.split("."), i = 0, o = a.length; i < o - 1 && !(!n && !r); ++i) {
    var l = a[i];
    if (l in n)
      n = n[l];
    else {
      if (r)
        throw new Error("please transfer a valid name path to validate!");
      break;
    }
  }
  return {
    o: n,
    k: a[i],
    v: n ? n[a[i]] : null,
    isValid: n && a[i] in n
  };
}
function Qm(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ie({}), r = arguments.length > 2 ? arguments[2] : void 0, n = Xt(X(e)), a = je({}), i = $i([]), o = function(m) {
    N(X(e), N(N({}, Xt(n)), m)), lr(function() {
      Object.keys(a).forEach(function(S) {
        a[S] = {
          autoLink: !1,
          required: Oi(X(t)[S])
        };
      });
    });
  }, l = function() {
    var m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], S = arguments.length > 1 ? arguments[1] : void 0;
    return S.length ? m.filter(function(C) {
      var O = _i(C.trigger || "change");
      return Hm(O, S).length;
    }) : m;
  }, u = null, s = function(m) {
    for (var S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, C = arguments.length > 2 ? arguments[2] : void 0, O = [], T = {}, L = function(I) {
      var E = m[I], A = Nr(X(e), E, C);
      if (!A.isValid)
        return "continue";
      T[E] = A.v;
      var F = l(X(t)[E], _i(S && S.trigger));
      F.length && O.push(d(E, A.v, F, S || {}).then(function() {
        return {
          name: E,
          errors: [],
          warnings: []
        };
      }).catch(function(_) {
        var M = [], q = [];
        return _.forEach(function(R) {
          var V = R.rule.warningOnly, G = R.errors;
          V ? q.push.apply(q, ve(G)) : M.push.apply(M, ve(G));
        }), M.length ? Promise.reject({
          name: E,
          errors: M,
          warnings: q
        }) : {
          name: E,
          errors: M,
          warnings: q
        };
      }));
    }, U = 0; U < m.length; U++)
      var D = L(U);
    var k = xl(O);
    u = k;
    var P = k.then(function() {
      return u === k ? Promise.resolve(T) : Promise.reject([]);
    }).catch(function(b) {
      var I = b.filter(function(E) {
        return E && E.errors.length;
      });
      return Promise.reject({
        values: T,
        errorFields: I,
        outOfDate: u !== k
      });
    });
    return P.catch(function(b) {
      return b;
    }), P;
  }, d = function(m, S, C) {
    var O = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, T = vl([m], S, C, N({
      validateMessages: mr
    }, O), !!O.validateFirst);
    return a[m] ? (a[m].validateStatus = "validating", T.catch(function(L) {
      return L;
    }).then(function() {
      var L = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], U;
      if (a[m].validateStatus === "validating") {
        var D = L.filter(function(k) {
          return k && k.errors.length;
        });
        a[m].validateStatus = D.length ? "error" : "success", a[m].help = D.length ? D.map(function(k) {
          return k.errors;
        }) : null, (U = r == null ? void 0 : r.onValidate) === null || U === void 0 || U.call(r, m, !D.length, D.length ? Lr(a[m].help[0]) : null);
      }
    }), T) : T.catch(function(L) {
      return L;
    });
  }, c = function(m, S) {
    var C = [], O = !0;
    m ? Array.isArray(m) ? C = m : C = [m] : (O = !1, C = i.value);
    var T = s(C, S || {}, O);
    return T.catch(function(L) {
      return L;
    }), T;
  }, v = function(m) {
    var S = [];
    m ? Array.isArray(m) ? S = m : S = [m] : S = i.value, S.forEach(function(C) {
      a[C] && N(a[C], {
        validateStatus: "",
        help: null
      });
    });
  }, f = function(m) {
    for (var S = {
      autoLink: !1
    }, C = [], O = Array.isArray(m) ? m : [m], T = 0; T < O.length; T++) {
      var L = O[T];
      (L == null ? void 0 : L.validateStatus) === "error" && (S.validateStatus = "error", L.help && C.push(L.help)), S.required = S.required || (L == null ? void 0 : L.required);
    }
    return S.help = C, S;
  }, g = n, p = !0, y = function(m) {
    var S = [];
    i.value.forEach(function(C) {
      var O = Nr(m, C, !1), T = Nr(g, C, !1), L = p && (r == null ? void 0 : r.immediate) && O.isValid;
      (L || !Uo(O.v, T.v)) && S.push(C);
    }), c(S, {
      trigger: "change"
    }), p = !1, g = Xt(Lr(m));
  }, h = r == null ? void 0 : r.debounce, w = !0;
  return ye(t, function() {
    i.value = t ? Object.keys(X(t)) : [], !w && r && r.validateOnRuleChange && c(), w = !1;
  }, {
    deep: !0,
    immediate: !0
  }), ye(i, function() {
    var x = {};
    i.value.forEach(function(S) {
      x[S] = N({}, a[S], {
        autoLink: !1,
        required: Oi(X(t)[S])
      }), delete a[S];
    });
    for (var m in a)
      Object.prototype.hasOwnProperty.call(a, m) && delete a[m];
    N(a, x);
  }, {
    immediate: !0
  }), ye(e, h && h.wait ? zp(y, h.wait, Jm(h, ["wait"])) : y, {
    immediate: r && !!r.immediate,
    deep: !0
  }), {
    modelRef: e,
    rulesRef: t,
    initialModel: n,
    validateInfos: a,
    resetFields: o,
    validate: c,
    validateField: d,
    mergeValidateInfo: f,
    clearValidate: v
  };
}
var ey = function() {
  return {
    layout: Oe.oneOf(qe("horizontal", "inline", "vertical")),
    labelCol: {
      type: Object
    },
    wrapperCol: {
      type: Object
    },
    colon: {
      type: Boolean,
      default: void 0
    },
    labelAlign: Oe.oneOf(qe("left", "right")),
    labelWrap: {
      type: Boolean,
      default: void 0
    },
    prefixCls: String,
    requiredMark: {
      type: [String, Boolean],
      default: void 0
    },
    hideRequiredMark: {
      type: Boolean,
      default: void 0
    },
    model: Oe.object,
    rules: {
      type: Object
    },
    validateMessages: {
      type: Object,
      default: void 0
    },
    validateOnRuleChange: {
      type: Boolean,
      default: void 0
    },
    scrollToFirstError: {
      type: [Boolean, Object]
    },
    onSubmit: Function,
    name: String,
    validateTrigger: {
      type: [String, Array]
    },
    size: {
      type: String
    },
    onValuesChange: {
      type: Function
    },
    onFieldsChange: {
      type: Function
    },
    onFinish: {
      type: Function
    },
    onFinishFailed: {
      type: Function
    },
    onValidate: {
      type: Function
    }
  };
};
function ty(e, t) {
  return Uo(Re(e), Re(t));
}
var ry = ae({
  name: "AForm",
  inheritAttrs: !1,
  props: cu(ey(), {
    layout: "horizontal",
    hideRequiredMark: !1,
    colon: !0
  }),
  Item: wl,
  useForm: Qm,
  setup: function(t, r) {
    var n = r.emit, a = r.slots, i = r.expose, o = r.attrs, l = Iv(t), u = Ee("form", t), s = u.prefixCls, d = u.direction, c = u.form, v = j(function() {
      return t.requiredMark === "" || t.requiredMark;
    }), f = j(function() {
      var A;
      return v.value !== void 0 ? v.value : c && ((A = c.value) === null || A === void 0 ? void 0 : A.requiredMark) !== void 0 ? c.value.requiredMark : !t.hideRequiredMark;
    }), g = j(function() {
      var A, F;
      return (A = t.colon) !== null && A !== void 0 ? A : (F = c.value) === null || F === void 0 ? void 0 : F.colon;
    }), p = Bs(), y = p.validateMessages, h = j(function() {
      return N(N(N({}, mr), y.value), t.validateMessages);
    }), w = j(function() {
      var A;
      return be(s.value, (A = {}, B(A, "".concat(s.value, "-").concat(t.layout), !0), B(A, "".concat(s.value, "-hide-required-mark"), f.value === !1), B(A, "".concat(s.value, "-rtl"), d.value === "rtl"), B(A, "".concat(s.value, "-").concat(l.value), l.value), A));
    }), x = ie(), m = {}, S = function(F, _) {
      m[F] = _;
    }, C = function(F) {
      delete m[F];
    }, O = function(F) {
      var _ = !!F, M = _ ? Re(F).map(pn) : [];
      return _ ? Object.values(m).filter(function(q) {
        return M.findIndex(function(R) {
          return ty(R, q.fieldName.value);
        }) > -1;
      }) : Object.values(m);
    }, T = function(F) {
      if (!t.model) {
        zt(!1, "Form", "model is required for resetFields to work.");
        return;
      }
      O(F).forEach(function(_) {
        _.resetField();
      });
    }, L = function(F) {
      O(F).forEach(function(_) {
        _.clearValidate();
      });
    }, U = function(F) {
      var _ = t.scrollToFirstError;
      if (n("finishFailed", F), _ && F.errorFields.length) {
        var M = {};
        me(_) === "object" && (M = _), k(F.errorFields[0].name, M);
      }
    }, D = function() {
      return I.apply(void 0, arguments);
    }, k = function(F) {
      var _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, M = O(F ? [F] : void 0);
      if (M.length) {
        var q = M[0].fieldId.value, R = q ? document.getElementById(q) : null;
        R && Lm(R, N({
          scrollMode: "if-needed",
          block: "nearest"
        }, _));
      }
    }, P = function() {
      var F = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
      if (F === !0) {
        var _ = [];
        return Object.values(m).forEach(function(M) {
          var q = M.namePath;
          _.push(q.value);
        }), bi(t.model, _);
      } else
        return bi(t.model, F);
    }, b = function(F, _) {
      if (zt(!(F instanceof Function), "Form", "validateFields/validateField/validate not support callback, please use promise instead"), !t.model)
        return zt(!1, "Form", "model is required for validateFields to work."), Promise.reject("Form `model` is required for validateFields to work.");
      var M = !!F, q = M ? Re(F).map(pn) : [], R = [];
      Object.values(m).forEach(function(z) {
        var J;
        if (M || q.push(z.namePath.value), !!(!((J = z.rules) === null || J === void 0) && J.value.length)) {
          var K = z.namePath.value;
          if (!M || em(q, K)) {
            var te = z.validateRules(N({
              validateMessages: h.value
            }, _));
            R.push(te.then(function() {
              return {
                name: K,
                errors: [],
                warnings: []
              };
            }).catch(function(ge) {
              var De = [], Mt = [];
              return ge.forEach(function(Yn) {
                var Ol = Yn.rule.warningOnly, Kn = Yn.errors;
                Ol ? Mt.push.apply(Mt, ve(Kn)) : De.push.apply(De, ve(Kn));
              }), De.length ? Promise.reject({
                name: K,
                errors: De,
                warnings: Mt
              }) : {
                name: K,
                errors: De,
                warnings: Mt
              };
            }));
          }
        }
      });
      var V = xl(R);
      x.value = V;
      var G = V.then(function() {
        return x.value === V ? Promise.resolve(P(q)) : Promise.reject([]);
      }).catch(function(z) {
        var J = z.filter(function(K) {
          return K && K.errors.length;
        });
        return Promise.reject({
          values: P(q),
          errorFields: J,
          outOfDate: x.value !== V
        });
      });
      return G.catch(function(z) {
        return z;
      }), G;
    }, I = function() {
      return b.apply(void 0, arguments);
    }, E = function(F) {
      if (F.preventDefault(), F.stopPropagation(), n("submit", F), t.model) {
        var _ = b();
        _.then(function(M) {
          n("finish", M);
        }).catch(function(M) {
          U(M);
        });
      }
    };
    return i({
      resetFields: T,
      clearValidate: L,
      validateFields: b,
      getFieldsValue: P,
      validate: D,
      scrollToField: k
    }), yl({
      model: j(function() {
        return t.model;
      }),
      name: j(function() {
        return t.name;
      }),
      labelAlign: j(function() {
        return t.labelAlign;
      }),
      labelCol: j(function() {
        return t.labelCol;
      }),
      labelWrap: j(function() {
        return t.labelWrap;
      }),
      wrapperCol: j(function() {
        return t.wrapperCol;
      }),
      vertical: j(function() {
        return t.layout === "vertical";
      }),
      colon: g,
      requiredMark: f,
      validateTrigger: j(function() {
        return t.validateTrigger;
      }),
      rules: j(function() {
        return t.rules;
      }),
      addField: S,
      removeField: C,
      onValidate: function(F, _, M) {
        n("validate", F, _, M);
      },
      validateMessages: h
    }), ye(function() {
      return t.rules;
    }, function() {
      t.validateOnRuleChange && b();
    }), function() {
      var A;
      return $("form", Z(Z({}, o), {}, {
        onSubmit: E,
        class: [w.value, o.class]
      }), [(A = a.default) === null || A === void 0 ? void 0 : A.call(a)]);
    };
  }
});
const Ne = ry;
Ne.useInjectFormItemContext = Fv;
Ne.ItemRest = ln;
Ne.install = function(e) {
  return e.component(Ne.name, Ne), e.component(Ne.Item.name, Ne.Item), e.component(ln.name, ln), e;
};
class ny {
  constructor() {
    Xn(this, "components", {});
  }
  addComponent(t, r) {
    this.components[t] = r;
  }
  getComponents() {
    return this.components;
  }
}
const ay = new ny(), iy = ay, oy = /* @__PURE__ */ ae({
  __name: "KFormItem",
  props: {
    record: {
      type: Object,
      require: !0
    },
    model: {
      type: Object
    },
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const r = e, { record: n } = r, a = n.componentProps, o = iy.getComponents()[n.component];
    function l(u) {
      t("update:modelValue", u);
    }
    return Tt(() => {
      a.defaultValue && l(a.defaultValue);
    }), (u, s) => {
      const d = wl;
      return vt(), Jt(d, Rr(X(n), {
        name: X(n).field
      }), {
        default: qr(() => [
          Ti(u.$slots, X(n).slot, {
            value: r.modelValue,
            model: r.model,
            record: X(n)
          }, () => [
            (vt(), Jt(jl(X(o)), Rr({
              style: { width: "100%" },
              value: r.model[X(n).field],
              "onUpdate:value": s[0] || (s[0] = (c) => r.model[X(n).field] = c)
            }, X(a)), null, 16, ["value"]))
          ])
        ]),
        _: 3
      }, 16, ["name"]);
    };
  }
}), ly = /* @__PURE__ */ ae({
  __name: "KFormBuild",
  props: {
    formSchema: {
      type: Object
    }
  },
  setup(e, { expose: t }) {
    const r = e;
    let n = je({});
    const a = ie(null), i = j(() => {
      var s;
      return {
        ...(s = r.formSchema) == null ? void 0 : s.config
      };
    });
    function o() {
      return new Promise(async (s, d) => {
        var c;
        try {
          await ((c = a.value) == null ? void 0 : c.validateFields()), s(n);
        } catch (v) {
          d(v);
        }
      });
    }
    function l(s) {
      Object.assign(n, s);
    }
    function u(s) {
      return s || "";
    }
    return t({
      getData: o,
      setData: l
    }), (s, d) => {
      const c = Ne;
      return vt(), Jt(c, Rr({
        ref_key: "form",
        ref: a,
        model: X(n)
      }, X(i)), {
        default: qr(() => {
          var v;
          return [
            (vt(!0), El(ze, null, Il((v = r.formSchema) == null ? void 0 : v.nodes, (f, g) => (vt(), Jt(oy, {
              modelValue: X(n)[f.field],
              "onUpdate:modelValue": (p) => X(n)[f.field] = p,
              model: X(n),
              key: g,
              record: f
            }, Ml({ _: 2 }, [
              f.slot ? {
                name: u(f.slot),
                fn: qr((p) => [
                  Ti(s.$slots, f.slot, Nl(Ll(p || {})))
                ]),
                key: "0"
              } : void 0
            ]), 1032, ["modelValue", "onUpdate:modelValue", "model", "record"]))), 128))
          ];
        }),
        _: 3
      }, 16, ["model"]);
    };
  }
}), uy = [ly], fy = {
  install(e) {
    uy.forEach((t) => {
      e.component(t.__name, t);
    });
  }
};
export {
  ly as KFormBuild,
  fy as default,
  iy as pluginManager
};
