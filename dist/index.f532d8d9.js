import { Fragment as xe, Comment as _r, Text as Ar, defineComponent as Z, inject as le, computed as b, unref as ce, createVNode as g, reactive as se, provide as te, watch as ae, onMounted as He, onUnmounted as Tr, Teleport as Mr, ref as J, TransitionGroup as Sn, render as qt, h as zt, nextTick as Ue, watchEffect as Te, getCurrentInstance as Fn, onBeforeUnmount as xt, cloneVNode as Nr, shallowRef as $n, toRaw as tt } from "vue";
import { z as kr, g as nt, r as Lr } from "./index.1fa3133f.js";
import { b as In, a as Rr, c as Vr, d as Dr, i as Br, e as qr, f as zr, g as Re } from "./_arrayIncludesWith.fc5f2209.js";
import { T as Qe } from "./index.1e43ecc1.js";
import { S as Gr } from "./index.f6071fa7.js";
import { j as Wr, k as Hr, l as Ur, m as Ot, n as Yr, S as Kr, o as Gt, p as Qr, c as jn, t as Xr, q as Jr, r as Zr, b as ea, h as ta, f as En } from "./isEqual.c2f76849.js";
import { r as na } from "./index.8e979d13.js";
import { f as ra } from "./hasIn.d68b1023.js";
var Wt = 1 / 0, aa = 17976931348623157e292;
function ia(t) {
  if (!t)
    return t === 0 ? t : 0;
  if (t = Wr(t), t === Wt || t === -Wt) {
    var e = t < 0 ? -1 : 1;
    return e * aa;
  }
  return t === t ? t : 0;
}
function oa(t) {
  var e = ia(t), n = e % 1;
  return e === e ? n ? e - n : e : 0;
}
function la(t, e, n) {
  var r = -1, a = t.length;
  e < 0 && (e = -e > a ? 0 : a + e), n = n > a ? a : n, n < 0 && (n += a), a = e > n ? 0 : n - e >>> 0, e >>>= 0;
  for (var i = Array(a); ++r < a; )
    i[r] = t[r + e];
  return i;
}
function ua(t) {
  var e = t == null ? 0 : t.length;
  return e ? t[e - 1] : void 0;
}
function ca(t) {
  return function(e, n, r) {
    var a = Object(e);
    if (!Hr(e)) {
      var i = In(n);
      e = Ur(e), n = function(o) {
        return i(a[o], o, a);
      };
    }
    var l = t(e, n, r);
    return l > -1 ? a[i ? e[l] : l] : void 0;
  };
}
var sa = Math.max;
function fa(t, e, n) {
  var r = t == null ? 0 : t.length;
  if (!r)
    return -1;
  var a = n == null ? 0 : oa(n);
  return a < 0 && (a = sa(r + a, 0)), Rr(t, In(e), a);
}
var da = ca(fa);
const va = da;
var ma = Math.min;
function pa(t, e, n) {
  for (var r = n ? Vr : Dr, a = t[0].length, i = t.length, l = i, o = Array(i), f = 1 / 0, d = []; l--; ) {
    var s = t[l];
    l && e && (s = Ot(s, Yr(e))), f = ma(s.length, f), o[l] = !n && (e || a >= 120 && s.length >= 120) ? new Kr(l && s) : void 0;
  }
  s = t[0];
  var c = -1, v = o[0];
  e:
    for (; ++c < a && d.length < f; ) {
      var u = s[c], m = e ? e(u) : u;
      if (u = n || u !== 0 ? u : 0, !(v ? Gt(v, m) : r(d, m, n))) {
        for (l = i; --l; ) {
          var p = o[l];
          if (!(p ? Gt(p, m) : r(t[l], m, n)))
            continue e;
        }
        v && v.push(m), d.push(u);
      }
    }
  return d;
}
function ga(t) {
  return Br(t) ? t : [];
}
var ha = qr(function(t) {
  var e = Ot(t, ga);
  return e.length && e[0] === t[0] ? pa(e) : [];
});
const ya = ha;
function ba(t, e) {
  return e.length < 2 ? t : Qr(t, la(e, 0, -1));
}
function Ca(t, e) {
  return e = jn(e, t), t = ba(t, e), t == null || delete t[Xr(ua(e))];
}
function xa(t) {
  return zr(t) ? void 0 : t;
}
var Oa = 1, wa = 2, Pa = 4, Sa = ra(function(t, e) {
  var n = {};
  if (t == null)
    return n;
  var r = !1;
  e = Ot(e, function(i) {
    return i = jn(i, t), r || (r = i.length > 1), i;
  }), Jr(t, Zr(t), n), r && (n = ea(n, Oa | wa | Pa, xa));
  for (var a = e.length; a--; )
    Ca(n, e[a]);
  return n;
});
const Fa = Sa;
function H(t) {
  return H = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, H(t);
}
function $a(t, e) {
  if (H(t) !== "object" || t === null)
    return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e || "default");
    if (H(r) !== "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function Ia(t) {
  var e = $a(t, "string");
  return H(e) === "symbol" ? e : String(e);
}
function A(t, e, n) {
  return e = Ia(e), e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
function Ht(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function C(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Ht(Object(n), !0).forEach(function(r) {
      A(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Ht(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function re() {
  return re = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, re.apply(this, arguments);
}
var ja = Array.isArray, Ea = function(e) {
  return typeof e == "string";
}, _a = function(e) {
  return e !== null && H(e) === "object";
};
function Ie(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0;
  return typeof t == "function" ? t(e) : t != null ? t : n;
}
function ie() {
  for (var t = [], e = 0; e < arguments.length; e++) {
    var n = e < 0 || arguments.length <= e ? void 0 : arguments[e];
    if (!!n) {
      if (Ea(n))
        t.push(n);
      else if (ja(n))
        for (var r = 0; r < n.length; r++) {
          var a = ie(n[r]);
          a && t.push(a);
        }
      else if (_a(n))
        for (var i in n)
          n[i] && t.push(i);
    }
  }
  return t.join(" ");
}
function _n(t) {
  if (Array.isArray(t))
    return t;
}
function Aa(t, e) {
  var n = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (n != null) {
    var r, a, i, l, o = [], f = !0, d = !1;
    try {
      if (i = (n = n.call(t)).next, e === 0) {
        if (Object(n) !== n)
          return;
        f = !1;
      } else
        for (; !(f = (r = i.call(n)).done) && (o.push(r.value), o.length !== e); f = !0)
          ;
    } catch (s) {
      d = !0, a = s;
    } finally {
      try {
        if (!f && n.return != null && (l = n.return(), Object(l) !== l))
          return;
      } finally {
        if (d)
          throw a;
      }
    }
    return o;
  }
}
function rt(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++)
    r[n] = t[n];
  return r;
}
function wt(t, e) {
  if (!!t) {
    if (typeof t == "string")
      return rt(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set")
      return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return rt(t, e);
  }
}
function An() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function at(t, e) {
  return _n(t) || Aa(t, e) || wt(t, e) || An();
}
function Ta(t) {
  if (Array.isArray(t))
    return rt(t);
}
function Tn(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
    return Array.from(t);
}
function Ma() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ne(t) {
  return Ta(t) || Tn(t) || wt(t) || Ma();
}
var Na = function(e, n) {
  var r = C({}, e);
  return Object.keys(n).forEach(function(a) {
    var i = r[a];
    if (i)
      i.type || i.default ? i.default = n[a] : i.def ? i.def(n[a]) : r[a] = {
        type: i,
        default: n[a]
      };
    else
      throw new Error("not have ".concat(a, " prop"));
  }), r;
};
const ka = Na;
function La(t) {
  return t && (t.type === _r || t.type === xe && t.children.length === 0 || t.type === Ar && t.children.trim() === "");
}
function Pt() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], e = [];
  return t.forEach(function(n) {
    Array.isArray(n) ? e.push.apply(e, ne(n)) : (n == null ? void 0 : n.type) === xe ? e.push.apply(e, ne(Pt(n.children))) : e.push(n);
  }), e.filter(function(n) {
    return !La(n);
  });
}
function Ra(t) {
  return Array.isArray(t) && t.length === 1 && (t = t[0]), t && t.__v_isVNode && H(t.type) !== "symbol";
}
var me = function() {
  for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
    n[r] = arguments[r];
  return n;
}, Mn = function(e) {
  var n = e;
  return n.install = function(r) {
    r.component(n.displayName || n.name, e);
  }, e;
};
function Va(t, e) {
  if (t == null)
    return {};
  var n = {}, r = Object.keys(t), a, i;
  for (i = 0; i < r.length; i++)
    a = r[i], !(e.indexOf(a) >= 0) && (n[a] = t[a]);
  return n;
}
function Nn(t, e) {
  if (t == null)
    return {};
  var n = Va(t, e), r, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (a = 0; a < i.length; a++)
      r = i[a], !(e.indexOf(r) >= 0) && (!Object.prototype.propertyIsEnumerable.call(t, r) || (n[r] = t[r]));
  }
  return n;
}
const Da = {
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
var Ba = {
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
const qa = Ba;
var za = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
};
const kn = za;
var Ga = {
  lang: C({
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
  }, qa),
  timePickerLocale: C({}, kn)
};
const Ut = Ga;
var K = "${label} is not a valid ${type}", Wa = {
  locale: "en",
  Pagination: Da,
  DatePicker: Ut,
  TimePicker: kn,
  Calendar: Ut,
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
        string: K,
        method: K,
        array: K,
        object: K,
        number: K,
        date: K,
        boolean: K,
        integer: K,
        float: K,
        regexp: K,
        email: K,
        url: K,
        hex: K
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
const _e = Wa, Ln = Z({
  compatConfig: {
    MODE: 3
  },
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
  setup: function(e, n) {
    var r = n.slots, a = le("localeData", {}), i = b(function() {
      var o = e.componentName, f = o === void 0 ? "global" : o, d = e.defaultLocale, s = d || _e[f || "global"], c = a.antLocale, v = f && c ? c[f] : {};
      return C(C({}, typeof s == "function" ? s() : s), v || {});
    }), l = b(function() {
      var o = a.antLocale, f = o && o.locale;
      return o && o.exist && !f ? _e.locale : f;
    });
    return function() {
      var o = e.children || r.default, f = a.antLocale;
      return o == null ? void 0 : o(i.value, l.value, f);
    };
  }
});
function Ha(t, e, n) {
  var r = le("localeData", {}), a = b(function() {
    var i = r.antLocale, l = ce(e) || _e[t || "global"], o = t && i ? i[t] : {};
    return C(C(C({}, typeof l == "function" ? l() : l), o || {}), ce(n) || {});
  });
  return [a];
}
var Rn = function() {
  var e = fe("empty", {}), n = e.getPrefixCls, r = n("empty-img-default");
  return g("svg", {
    class: r,
    width: "184",
    height: "152",
    viewBox: "0 0 184 152"
  }, [g("g", {
    fill: "none",
    "fill-rule": "evenodd"
  }, [g("g", {
    transform: "translate(24 31.67)"
  }, [g("ellipse", {
    class: "".concat(r, "-ellipse"),
    cx: "67.797",
    cy: "106.89",
    rx: "67.797",
    ry: "12.668"
  }, null), g("path", {
    class: "".concat(r, "-path-1"),
    d: "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"
  }, null), g("path", {
    class: "".concat(r, "-path-2"),
    d: "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",
    transform: "translate(13.56)"
  }, null), g("path", {
    class: "".concat(r, "-path-3"),
    d: "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
  }, null), g("path", {
    class: "".concat(r, "-path-4"),
    d: "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"
  }, null)]), g("path", {
    class: "".concat(r, "-path-5"),
    d: "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"
  }, null), g("g", {
    class: "".concat(r, "-g"),
    transform: "translate(149.65 15.383)"
  }, [g("ellipse", {
    cx: "20.654",
    cy: "3.167",
    rx: "2.849",
    ry: "2.815"
  }, null), g("path", {
    d: "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"
  }, null)])])]);
};
Rn.PRESENTED_IMAGE_DEFAULT = !0;
const Ua = Rn;
var Vn = function() {
  var e = fe("empty", {}), n = e.getPrefixCls, r = n("empty-img-simple");
  return g("svg", {
    class: r,
    width: "64",
    height: "41",
    viewBox: "0 0 64 41"
  }, [g("g", {
    transform: "translate(0 1)",
    fill: "none",
    "fill-rule": "evenodd"
  }, [g("ellipse", {
    class: "".concat(r, "-ellipse"),
    fill: "#F5F5F5",
    cx: "32",
    cy: "33",
    rx: "32",
    ry: "7"
  }, null), g("g", {
    class: "".concat(r, "-g"),
    "fill-rule": "nonzero",
    stroke: "#D9D9D9"
  }, [g("path", {
    d: "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
  }, null), g("path", {
    d: "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",
    fill: "#FAFAFA",
    class: "".concat(r, "-path")
  }, null)])])]);
};
Vn.PRESENTED_IMAGE_SIMPLE = !0;
const Ya = Vn;
var Dn = kr({
  func: void 0,
  bool: void 0,
  string: void 0,
  number: void 0,
  array: void 0,
  object: void 0,
  integer: void 0
});
Dn.extend([{
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
const oe = Dn;
var Ka = ["image", "description", "imageStyle", "class"], Bn = g(Ua, null, null), qn = g(Ya, null, null), Oe = function(e, n) {
  var r, a = n.slots, i = a === void 0 ? {} : a, l = n.attrs, o = fe("empty", e), f = o.direction, d = o.prefixCls, s = d.value, c = C(C({}, e), l), v = c.image, u = v === void 0 ? Bn : v, m = c.description, p = m === void 0 ? ((r = i.description) === null || r === void 0 ? void 0 : r.call(i)) || void 0 : m, S = c.imageStyle, F = c.class, x = F === void 0 ? "" : F, $ = Nn(c, Ka);
  return g(Ln, {
    componentName: "Empty",
    children: function(O) {
      var w, P = typeof p < "u" ? p : O.description, j = typeof P == "string" ? P : "empty", E = null;
      return typeof u == "string" ? E = g("img", {
        alt: j,
        src: u
      }, null) : E = u, g("div", C({
        class: ie(s, x, (w = {}, A(w, "".concat(s, "-normal"), u === qn), A(w, "".concat(s, "-rtl"), f.value === "rtl"), w))
      }, $), [g("div", {
        class: "".concat(s, "-image"),
        style: S
      }, [E]), P && g("p", {
        class: "".concat(s, "-description")
      }, [P]), i.default && g("div", {
        class: "".concat(s, "-footer")
      }, [Pt(i.default())])]);
    }
  }, null);
};
Oe.displayName = "AEmpty";
Oe.PRESENTED_IMAGE_DEFAULT = Bn;
Oe.PRESENTED_IMAGE_SIMPLE = qn;
Oe.inheritAttrs = !1;
Oe.props = {
  prefixCls: String,
  image: oe.any,
  description: oe.any,
  imageStyle: {
    type: Object,
    default: void 0
  }
};
const Fe = Mn(Oe);
var Qa = function(e) {
  var n = fe("empty", e), r = n.prefixCls, a = function(l) {
    switch (l) {
      case "Table":
      case "List":
        return g(Fe, {
          image: Fe.PRESENTED_IMAGE_SIMPLE
        }, null);
      case "Select":
      case "TreeSelect":
      case "Cascader":
      case "Transfer":
      case "Mentions":
        return g(Fe, {
          image: Fe.PRESENTED_IMAGE_SIMPLE,
          class: "".concat(r.value, "-small")
        }, null);
      default:
        return g(Fe, null, null);
    }
  };
  return a(e.componentName);
};
function zn(t) {
  return g(Qa, {
    componentName: t
  }, null);
}
var Yt = {};
function qe(t, e) {
  process.env.NODE_ENV !== "production" && !t && console !== void 0 && console.error("Warning: ".concat(e));
}
function Xa(t, e, n) {
  !e && !Yt[n] && (t(!1, n), Yt[n] = !0);
}
function Gn(t, e) {
  Xa(qe, t, e);
}
const Ve = function(t, e) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
  Gn(t, "[antdv: ".concat(e, "] ").concat(n));
};
var it = "internalMark", De = Z({
  compatConfig: {
    MODE: 3
  },
  name: "ALocaleProvider",
  props: {
    locale: {
      type: Object
    },
    ANT_MARK__: String
  },
  setup: function(e, n) {
    var r = n.slots;
    Ve(e.ANT_MARK__ === it, "LocaleProvider", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead");
    var a = se({
      antLocale: C(C({}, e.locale), {}, {
        exist: !0
      }),
      ANT_MARK__: it
    });
    return te("localeData", a), ae(function() {
      return e.locale;
    }, function() {
      a.antLocale = C(C({}, e.locale), {}, {
        exist: !0
      });
    }, {
      immediate: !0
    }), function() {
      var i;
      return (i = r.default) === null || i === void 0 ? void 0 : i.call(r);
    };
  }
});
De.install = function(t) {
  return t.component(De.name, De), t;
};
const Ja = Mn(De);
me("bottomLeft", "bottomRight", "topLeft", "topRight");
var Wn = function(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = C(e ? {
    name: e,
    appear: !0,
    appearActiveClass: "".concat(e),
    appearToClass: "".concat(e, "-appear ").concat(e, "-appear-active"),
    enterFromClass: "".concat(e, "-appear ").concat(e, "-enter ").concat(e, "-appear-prepare ").concat(e, "-enter-prepare"),
    enterActiveClass: "".concat(e),
    enterToClass: "".concat(e, "-enter ").concat(e, "-appear ").concat(e, "-appear-active ").concat(e, "-enter-active"),
    leaveActiveClass: "".concat(e, " ").concat(e, "-leave"),
    leaveToClass: "".concat(e, "-leave-active")
  } : {
    css: !1
  }, n);
  return r;
};
const Za = Z({
  name: "Notice",
  inheritAttrs: !1,
  props: ["prefixCls", "duration", "updateMark", "noticeKey", "closeIcon", "closable", "props", "onClick", "onClose", "holder", "visible"],
  setup: function(e, n) {
    var r = n.attrs, a = n.slots, i, l = !1, o = b(function() {
      return e.duration === void 0 ? 4.5 : e.duration;
    }), f = function() {
      o.value && !l && (i = setTimeout(function() {
        s();
      }, o.value * 1e3));
    }, d = function() {
      i && (clearTimeout(i), i = null);
    }, s = function(u) {
      u && u.stopPropagation(), d();
      var m = e.onClose, p = e.noticeKey;
      m && m(p);
    }, c = function() {
      d(), f();
    };
    return He(function() {
      f();
    }), Tr(function() {
      l = !0, d();
    }), ae([o, function() {
      return e.updateMark;
    }, function() {
      return e.visible;
    }], function(v, u) {
      var m = at(v, 3), p = m[0], S = m[1], F = m[2], x = at(u, 3), $ = x[0], h = x[1], O = x[2];
      (p !== $ || S !== h || F !== O && O) && c();
    }, {
      flush: "post"
    }), function() {
      var v, u, m = e.prefixCls, p = e.closable, S = e.closeIcon, F = S === void 0 ? (v = a.closeIcon) === null || v === void 0 ? void 0 : v.call(a) : S, x = e.onClick, $ = e.holder, h = r.class, O = r.style, w = "".concat(m, "-notice"), P = Object.keys(r).reduce(function(E, N) {
        return (N.substr(0, 5) === "data-" || N.substr(0, 5) === "aria-" || N === "role") && (E[N] = r[N]), E;
      }, {}), j = g("div", C({
        class: ie(w, h, A({}, "".concat(w, "-closable"), p)),
        style: O,
        onMouseenter: d,
        onMouseleave: f,
        onClick: x
      }, P), [g("div", {
        class: "".concat(w, "-content")
      }, [(u = a.default) === null || u === void 0 ? void 0 : u.call(a)]), p ? g("a", {
        tabindex: 0,
        onClick: s,
        class: "".concat(w, "-close")
      }, [F || g("span", {
        class: "".concat(w, "-close-x")
      }, null)]) : null]);
      return $ ? g(Mr, {
        to: $
      }, {
        default: function() {
          return j;
        }
      }) : j;
    };
  }
});
var ei = ["name", "getContainer", "appContext", "prefixCls", "rootPrefixCls", "transitionName", "hasTransitionName"], Kt = 0, ti = Date.now();
function Qt() {
  var t = Kt;
  return Kt += 1, "rcNotification_".concat(ti, "_").concat(t);
}
var ot = Z({
  name: "Notification",
  inheritAttrs: !1,
  props: ["prefixCls", "transitionName", "animation", "maxCount", "closeIcon"],
  setup: function(e, n) {
    var r = n.attrs, a = n.expose, i = n.slots, l = /* @__PURE__ */ new Map(), o = J([]), f = b(function() {
      var c = e.prefixCls, v = e.animation, u = v === void 0 ? "fade" : v, m = e.transitionName;
      return !m && u && (m = "".concat(c, "-").concat(u)), Wn(m);
    }), d = function(v, u) {
      var m = v.key || Qt(), p = C(C({}, v), {}, {
        key: m
      }), S = e.maxCount, F = o.value.map(function($) {
        return $.notice.key;
      }).indexOf(m), x = o.value.concat();
      F !== -1 ? x.splice(F, 1, {
        notice: p,
        holderCallback: u
      }) : (S && o.value.length >= S && (p.key = x[0].notice.key, p.updateMark = Qt(), p.userPassKey = m, x.shift()), x.push({
        notice: p,
        holderCallback: u
      })), o.value = x;
    }, s = function(v) {
      o.value = o.value.filter(function(u) {
        var m = u.notice, p = m.key, S = m.userPassKey, F = S || p;
        return F !== v;
      });
    };
    return a({
      add: d,
      remove: s,
      notices: o
    }), function() {
      var c, v, u = e.prefixCls, m = e.closeIcon, p = m === void 0 ? (c = i.closeIcon) === null || c === void 0 ? void 0 : c.call(i, {
        prefixCls: u
      }) : m, S = o.value.map(function(x, $) {
        var h = x.notice, O = x.holderCallback, w = $ === o.value.length - 1 ? h.updateMark : void 0, P = h.key, j = h.userPassKey, E = h.content, N = C(C(C({
          prefixCls: u,
          closeIcon: typeof p == "function" ? p({
            prefixCls: u
          }) : p
        }, h), h.props), {}, {
          key: P,
          noticeKey: j || P,
          updateMark: w,
          onClose: function(k) {
            var z;
            s(k), (z = h.onClose) === null || z === void 0 || z.call(h);
          },
          onClick: h.onClick
        });
        return O ? g("div", {
          key: P,
          class: "".concat(u, "-hook-holder"),
          ref: function(k) {
            typeof P > "u" || (k ? (l.set(P, k), O(k, N)) : l.delete(P));
          }
        }, null) : g(Za, N, {
          default: function() {
            return [typeof E == "function" ? E({
              prefixCls: u
            }) : E];
          }
        });
      }), F = (v = {}, A(v, u, 1), A(v, r.class, !!r.class), v);
      return g("div", {
        class: F,
        style: r.style || {
          top: "65px",
          left: "50%"
        }
      }, [g(Sn, C({
        tag: "div"
      }, f.value), {
        default: function() {
          return [S];
        }
      })]);
    };
  }
});
ot.newInstance = function(e, n) {
  var r = e || {}, a = r.name, i = a === void 0 ? "notification" : a, l = r.getContainer, o = r.appContext, f = r.prefixCls, d = r.rootPrefixCls, s = r.transitionName, c = r.hasTransitionName, v = Nn(r, ei), u = document.createElement("div");
  if (l) {
    var m = l();
    m.appendChild(u);
  } else
    document.body.appendChild(u);
  var p = Z({
    compatConfig: {
      MODE: 3
    },
    name: "NotificationWrapper",
    setup: function(x, $) {
      var h = $.attrs, O = J();
      return He(function() {
        n({
          notice: function(P) {
            var j;
            (j = O.value) === null || j === void 0 || j.add(P);
          },
          removeNotice: function(P) {
            var j;
            (j = O.value) === null || j === void 0 || j.remove(P);
          },
          destroy: function() {
            qt(null, u), u.parentNode && u.parentNode.removeChild(u);
          },
          component: O
        });
      }), function() {
        var w = X, P = w.getPrefixCls(i, f), j = w.getRootPrefixCls(d, P), E = c ? s : "".concat(j, "-").concat(s);
        return g(Ee, C(C({}, w), {}, {
          notUpdateGlobalConfig: !0,
          prefixCls: j
        }), {
          default: function() {
            return [g(ot, C(C({
              ref: O
            }, h), {}, {
              prefixCls: P,
              transitionName: E
            }), null)];
          }
        });
      };
    }
  }), S = g(p, v);
  S.appContext = o || S.appContext, qt(S, u);
};
const Hn = ot;
var ni = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, name: "loading", theme: "outlined" };
const ri = ni;
var Xt = [], $e = [], ai = "insert-css: You need to provide a CSS string. Usage: insertCss(cssString[, options]).";
function ii() {
  var t = document.createElement("style");
  return t.setAttribute("type", "text/css"), t;
}
function oi(t, e) {
  if (e = e || {}, t === void 0)
    throw new Error(ai);
  var n = e.prepend === !0 ? "prepend" : "append", r = e.container !== void 0 ? e.container : document.querySelector("head"), a = Xt.indexOf(r);
  a === -1 && (a = Xt.push(r) - 1, $e[a] = {});
  var i;
  return $e[a] !== void 0 && $e[a][n] !== void 0 ? i = $e[a][n] : (i = $e[a][n] = ii(), n === "prepend" ? r.insertBefore(i, r.childNodes[0]) : r.appendChild(i)), t.charCodeAt(0) === 65279 && (t = t.substr(1, t.length)), i.styleSheet ? i.styleSheet.cssText += t : i.textContent += t, i;
}
function Jt(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? Object(arguments[e]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      li(t, a, n[a]);
    });
  }
  return t;
}
function li(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function ui(t, e) {
  process.env.NODE_ENV !== "production" && !t && console !== void 0 && console.error("Warning: ".concat(e));
}
function ci(t, e) {
  ui(t, "[@ant-design/icons-vue] ".concat(e));
}
function Zt(t) {
  return typeof t == "object" && typeof t.name == "string" && typeof t.theme == "string" && (typeof t.icon == "object" || typeof t.icon == "function");
}
function lt(t, e, n) {
  return n ? zt(t.tag, Jt({
    key: e
  }, n, t.attrs), (t.children || []).map(function(r, a) {
    return lt(r, "".concat(e, "-").concat(t.tag, "-").concat(a));
  })) : zt(t.tag, Jt({
    key: e
  }, t.attrs), (t.children || []).map(function(r, a) {
    return lt(r, "".concat(e, "-").concat(t.tag, "-").concat(a));
  }));
}
function Un(t) {
  return nt(t)[0];
}
function Yn(t) {
  return t ? Array.isArray(t) ? t : [t] : [];
}
var si = `
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
`, en = !1, fi = function() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : si;
  Ue(function() {
    en || (typeof window < "u" && window.document && window.document.documentElement && oi(e, {
      prepend: !0
    }), en = !0);
  });
}, di = ["icon", "primaryColor", "secondaryColor"];
function vi(t, e) {
  if (t == null)
    return {};
  var n = mi(t, e), r, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (a = 0; a < i.length; a++)
      r = i[a], !(e.indexOf(r) >= 0) && (!Object.prototype.propertyIsEnumerable.call(t, r) || (n[r] = t[r]));
  }
  return n;
}
function mi(t, e) {
  if (t == null)
    return {};
  var n = {}, r = Object.keys(t), a, i;
  for (i = 0; i < r.length; i++)
    a = r[i], !(e.indexOf(a) >= 0) && (n[a] = t[a]);
  return n;
}
function Be(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? Object(arguments[e]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      pi(t, a, n[a]);
    });
  }
  return t;
}
function pi(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
var je = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function gi(t) {
  var e = t.primaryColor, n = t.secondaryColor;
  je.primaryColor = e, je.secondaryColor = n || Un(e), je.calculated = !!n;
}
function hi() {
  return Be({}, je);
}
var we = function(e, n) {
  var r = Be({}, e, n.attrs), a = r.icon, i = r.primaryColor, l = r.secondaryColor, o = vi(r, di), f = je;
  if (i && (f = {
    primaryColor: i,
    secondaryColor: l || Un(i)
  }), fi(), ci(Zt(a), "icon should be icon definiton, but got ".concat(a)), !Zt(a))
    return null;
  var d = a;
  return d && typeof d.icon == "function" && (d = Be({}, d, {
    icon: d.icon(f.primaryColor, f.secondaryColor)
  })), lt(d.icon, "svg-".concat(d.name), Be({}, o, {
    "data-icon": d.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }));
};
we.props = {
  icon: Object,
  primaryColor: String,
  secondaryColor: String,
  focusable: String
};
we.inheritAttrs = !1;
we.displayName = "IconBase";
we.getTwoToneColors = hi;
we.setTwoToneColors = gi;
const St = we;
function yi(t, e) {
  return Oi(t) || xi(t, e) || Ci(t, e) || bi();
}
function bi() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ci(t, e) {
  if (!!t) {
    if (typeof t == "string")
      return tn(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set")
      return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return tn(t, e);
  }
}
function tn(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++)
    r[n] = t[n];
  return r;
}
function xi(t, e) {
  var n = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (n != null) {
    var r = [], a = !0, i = !1, l, o;
    try {
      for (n = n.call(t); !(a = (l = n.next()).done) && (r.push(l.value), !(e && r.length === e)); a = !0)
        ;
    } catch (f) {
      i = !0, o = f;
    } finally {
      try {
        !a && n.return != null && n.return();
      } finally {
        if (i)
          throw o;
      }
    }
    return r;
  }
}
function Oi(t) {
  if (Array.isArray(t))
    return t;
}
function Kn(t) {
  var e = Yn(t), n = yi(e, 2), r = n[0], a = n[1];
  return St.setTwoToneColors({
    primaryColor: r,
    secondaryColor: a
  });
}
function wi() {
  var t = St.getTwoToneColors();
  return t.calculated ? [t.primaryColor, t.secondaryColor] : t.primaryColor;
}
var Pi = ["class", "icon", "spin", "rotate", "tabindex", "twoToneColor", "onClick"];
function Si(t, e) {
  return ji(t) || Ii(t, e) || $i(t, e) || Fi();
}
function Fi() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function $i(t, e) {
  if (!!t) {
    if (typeof t == "string")
      return nn(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set")
      return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return nn(t, e);
  }
}
function nn(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++)
    r[n] = t[n];
  return r;
}
function Ii(t, e) {
  var n = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (n != null) {
    var r = [], a = !0, i = !1, l, o;
    try {
      for (n = n.call(t); !(a = (l = n.next()).done) && (r.push(l.value), !(e && r.length === e)); a = !0)
        ;
    } catch (f) {
      i = !0, o = f;
    } finally {
      try {
        !a && n.return != null && n.return();
      } finally {
        if (i)
          throw o;
      }
    }
    return r;
  }
}
function ji(t) {
  if (Array.isArray(t))
    return t;
}
function rn(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? Object(arguments[e]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      ut(t, a, n[a]);
    });
  }
  return t;
}
function ut(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function Ei(t, e) {
  if (t == null)
    return {};
  var n = _i(t, e), r, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (a = 0; a < i.length; a++)
      r = i[a], !(e.indexOf(r) >= 0) && (!Object.prototype.propertyIsEnumerable.call(t, r) || (n[r] = t[r]));
  }
  return n;
}
function _i(t, e) {
  if (t == null)
    return {};
  var n = {}, r = Object.keys(t), a, i;
  for (i = 0; i < r.length; i++)
    a = r[i], !(e.indexOf(a) >= 0) && (n[a] = t[a]);
  return n;
}
Kn("#1890ff");
var Pe = function(e, n) {
  var r, a = rn({}, e, n.attrs), i = a.class, l = a.icon, o = a.spin, f = a.rotate, d = a.tabindex, s = a.twoToneColor, c = a.onClick, v = Ei(a, Pi), u = (r = {
    anticon: !0
  }, ut(r, "anticon-".concat(l.name), Boolean(l.name)), ut(r, i, i), r), m = o === "" || !!o || l.name === "loading" ? "anticon-spin" : "", p = d;
  p === void 0 && c && (p = -1, v.tabindex = p);
  var S = f ? {
    msTransform: "rotate(".concat(f, "deg)"),
    transform: "rotate(".concat(f, "deg)")
  } : void 0, F = Yn(s), x = Si(F, 2), $ = x[0], h = x[1];
  return g("span", rn({
    role: "img",
    "aria-label": l.name
  }, v, {
    onClick: c,
    class: u
  }), [g(St, {
    class: m,
    icon: l,
    primaryColor: $,
    secondaryColor: h,
    style: S
  }, null)]);
};
Pe.props = {
  spin: Boolean,
  rotate: Number,
  icon: Object,
  twoToneColor: String
};
Pe.displayName = "AntdIcon";
Pe.inheritAttrs = !1;
Pe.getTwoToneColor = wi;
Pe.setTwoToneColor = Kn;
const ue = Pe;
function an(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? Object(arguments[e]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      Ai(t, a, n[a]);
    });
  }
  return t;
}
function Ai(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
var Ft = function(e, n) {
  var r = an({}, e, n.attrs);
  return g(ue, an({}, r, {
    icon: ri
  }), null);
};
Ft.displayName = "LoadingOutlined";
Ft.inheritAttrs = !1;
const Qn = Ft;
var Ti = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "exclamation-circle", theme: "filled" };
const Mi = Ti;
function on(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? Object(arguments[e]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      Ni(t, a, n[a]);
    });
  }
  return t;
}
function Ni(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
var $t = function(e, n) {
  var r = on({}, e, n.attrs);
  return g(ue, on({}, r, {
    icon: Mi
  }), null);
};
$t.displayName = "ExclamationCircleFilled";
$t.inheritAttrs = !1;
const Xn = $t;
var ki = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z" } }] }, name: "close-circle", theme: "filled" };
const Li = ki;
function ln(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? Object(arguments[e]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      Ri(t, a, n[a]);
    });
  }
  return t;
}
function Ri(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
var It = function(e, n) {
  var r = ln({}, e, n.attrs);
  return g(ue, ln({}, r, {
    icon: Li
  }), null);
};
It.displayName = "CloseCircleFilled";
It.inheritAttrs = !1;
const Jn = It;
var Vi = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" } }] }, name: "check-circle", theme: "filled" };
const Di = Vi;
function un(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? Object(arguments[e]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      Bi(t, a, n[a]);
    });
  }
  return t;
}
function Bi(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
var jt = function(e, n) {
  var r = un({}, e, n.attrs);
  return g(ue, un({}, r, {
    icon: Di
  }), null);
};
jt.displayName = "CheckCircleFilled";
jt.inheritAttrs = !1;
const Zn = jt;
var qi = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "info-circle", theme: "filled" };
const zi = qi;
function cn(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? Object(arguments[e]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      Gi(t, a, n[a]);
    });
  }
  return t;
}
function Gi(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
var Et = function(e, n) {
  var r = cn({}, e, n.attrs);
  return g(ue, cn({}, r, {
    icon: zi
  }), null);
};
Et.displayName = "InfoCircleFilled";
Et.inheritAttrs = !1;
const Wi = Et;
var er = 3, tr, W, Hi = 1, nr = "", rr = "move-up", ar = !1, ir = function() {
  return document.body;
}, or, lr = !1;
function Ui() {
  return Hi++;
}
function Yi(t) {
  t.top !== void 0 && (tr = t.top, W = null), t.duration !== void 0 && (er = t.duration), t.prefixCls !== void 0 && (nr = t.prefixCls), t.getContainer !== void 0 && (ir = t.getContainer, W = null), t.transitionName !== void 0 && (rr = t.transitionName, W = null, ar = !0), t.maxCount !== void 0 && (or = t.maxCount, W = null), t.rtl !== void 0 && (lr = t.rtl);
}
function Ki(t, e) {
  if (W) {
    e(W);
    return;
  }
  Hn.newInstance({
    appContext: t.appContext,
    prefixCls: t.prefixCls || nr,
    rootPrefixCls: t.rootPrefixCls,
    transitionName: rr,
    hasTransitionName: ar,
    style: {
      top: tr
    },
    getContainer: ir || t.getPopupContainer,
    maxCount: or,
    name: "message"
  }, function(n) {
    if (W) {
      e(W);
      return;
    }
    W = n, e(n);
  });
}
var Qi = {
  info: Wi,
  success: Zn,
  error: Jn,
  warning: Xn,
  loading: Qn
};
function Xi(t) {
  var e = t.duration !== void 0 ? t.duration : er, n = t.key || Ui(), r = new Promise(function(i) {
    var l = function() {
      return typeof t.onClose == "function" && t.onClose(), i(!0);
    };
    Ki(t, function(o) {
      o.notice({
        key: n,
        duration: e,
        style: t.style || {},
        class: t.class,
        content: function(d) {
          var s, c = d.prefixCls, v = Qi[t.type], u = v ? g(v, null, null) : "", m = ie("".concat(c, "-custom-content"), (s = {}, A(s, "".concat(c, "-").concat(t.type), t.type), A(s, "".concat(c, "-rtl"), lr === !0), s));
          return g("div", {
            class: m
          }, [typeof t.icon == "function" ? t.icon() : t.icon || u, g("span", null, [typeof t.content == "function" ? t.content() : t.content])]);
        },
        onClose: l,
        onClick: t.onClick
      });
    });
  }), a = function() {
    W && W.removeNotice(n);
  };
  return a.then = function(i, l) {
    return r.then(i, l);
  }, a.promise = r, a;
}
function Ji(t) {
  return Object.prototype.toString.call(t) === "[object Object]" && !!t.content;
}
var ze = {
  open: Xi,
  config: Yi,
  destroy: function(e) {
    if (W)
      if (e) {
        var n = W, r = n.removeNotice;
        r(e);
      } else {
        var a = W, i = a.destroy;
        i(), W = null;
      }
  }
};
function Zi(t, e) {
  t[e] = function(n, r, a) {
    return Ji(n) ? t.open(C(C({}, n), {}, {
      type: e
    })) : (typeof r == "function" && (a = r, r = void 0), t.open({
      content: n,
      duration: r,
      type: e,
      onClose: a
    }));
  };
}
["success", "info", "warning", "error", "loading"].forEach(function(t) {
  return Zi(ze, t);
});
ze.warn = ze.warning;
const eo = ze;
function sn(t, e, n, r, a, i, l) {
  try {
    var o = t[i](l), f = o.value;
  } catch (d) {
    n(d);
    return;
  }
  o.done ? e(f) : Promise.resolve(f).then(r, a);
}
function Ye(t) {
  return function() {
    var e = this, n = arguments;
    return new Promise(function(r, a) {
      var i = t.apply(e, n);
      function l(f) {
        sn(i, r, a, l, o, "next", f);
      }
      function o(f) {
        sn(i, r, a, l, o, "throw", f);
      }
      l(void 0);
    });
  };
}
var pe = Lr(), to = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z" } }, { tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }] }, name: "check-circle", theme: "outlined" };
const no = to;
function fn(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? Object(arguments[e]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      ro(t, a, n[a]);
    });
  }
  return t;
}
function ro(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
var _t = function(e, n) {
  var r = fn({}, e, n.attrs);
  return g(ue, fn({}, r, {
    icon: no
  }), null);
};
_t.displayName = "CheckCircleOutlined";
_t.inheritAttrs = !1;
const ao = _t;
var io = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }, { tag: "path", attrs: { d: "M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z" } }] }, name: "info-circle", theme: "outlined" };
const oo = io;
function dn(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? Object(arguments[e]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      lo(t, a, n[a]);
    });
  }
  return t;
}
function lo(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
var At = function(e, n) {
  var r = dn({}, e, n.attrs);
  return g(ue, dn({}, r, {
    icon: oo
  }), null);
};
At.displayName = "InfoCircleOutlined";
At.inheritAttrs = !1;
const uo = At;
var co = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 00-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z" } }, { tag: "path", attrs: { d: "M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }] }, name: "close-circle", theme: "outlined" };
const so = co;
function vn(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? Object(arguments[e]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      fo(t, a, n[a]);
    });
  }
  return t;
}
function fo(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
var Tt = function(e, n) {
  var r = vn({}, e, n.attrs);
  return g(ue, vn({}, r, {
    icon: so
  }), null);
};
Tt.displayName = "CloseCircleOutlined";
Tt.inheritAttrs = !1;
const vo = Tt;
var mo = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }, { tag: "path", attrs: { d: "M464 688a48 48 0 1096 0 48 48 0 10-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z" } }] }, name: "exclamation-circle", theme: "outlined" };
const po = mo;
function mn(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? Object(arguments[e]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      go(t, a, n[a]);
    });
  }
  return t;
}
function go(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
var Mt = function(e, n) {
  var r = mn({}, e, n.attrs);
  return g(ue, mn({}, r, {
    icon: po
  }), null);
};
Mt.displayName = "ExclamationCircleOutlined";
Mt.inheritAttrs = !1;
const ho = Mt;
var yo = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" } }] }, name: "close", theme: "outlined" };
const bo = yo;
function pn(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? Object(arguments[e]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      Co(t, a, n[a]);
    });
  }
  return t;
}
function Co(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
var Nt = function(e, n) {
  var r = pn({}, e, n.attrs);
  return g(ue, pn({}, r, {
    icon: bo
  }), null);
};
Nt.displayName = "CloseOutlined";
Nt.inheritAttrs = !1;
const xo = Nt;
var ye = {}, ur = 4.5, cr = "24px", sr = "24px", ct = "", fr = "topRight", dr = function() {
  return document.body;
}, vr = null, st = !1, mr;
function Oo(t) {
  var e = t.duration, n = t.placement, r = t.bottom, a = t.top, i = t.getContainer, l = t.closeIcon, o = t.prefixCls;
  o !== void 0 && (ct = o), e !== void 0 && (ur = e), n !== void 0 && (fr = n), r !== void 0 && (sr = typeof r == "number" ? "".concat(r, "px") : r), a !== void 0 && (cr = typeof a == "number" ? "".concat(a, "px") : a), i !== void 0 && (dr = i), l !== void 0 && (vr = l), t.rtl !== void 0 && (st = t.rtl), t.maxCount !== void 0 && (mr = t.maxCount);
}
function wo(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : cr, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : sr, r;
  switch (t) {
    case "topLeft":
      r = {
        left: "0px",
        top: e,
        bottom: "auto"
      };
      break;
    case "topRight":
      r = {
        right: "0px",
        top: e,
        bottom: "auto"
      };
      break;
    case "bottomLeft":
      r = {
        left: "0px",
        top: "auto",
        bottom: n
      };
      break;
    default:
      r = {
        right: "0px",
        top: "auto",
        bottom: n
      };
      break;
  }
  return r;
}
function Po(t, e) {
  var n = t.prefixCls, r = t.placement, a = r === void 0 ? fr : r, i = t.getContainer, l = i === void 0 ? dr : i, o = t.top, f = t.bottom, d = t.closeIcon, s = d === void 0 ? vr : d, c = t.appContext, v = Vo(), u = v.getPrefixCls, m = u("notification", n || ct), p = "".concat(m, "-").concat(a, "-").concat(st), S = ye[p];
  if (S) {
    Promise.resolve(S).then(function(x) {
      e(x);
    });
    return;
  }
  var F = ie("".concat(m, "-").concat(a), A({}, "".concat(m, "-rtl"), st === !0));
  Hn.newInstance({
    name: "notification",
    prefixCls: n || ct,
    class: F,
    style: wo(a, o, f),
    appContext: c,
    getContainer: l,
    closeIcon: function($) {
      var h = $.prefixCls, O = g("span", {
        class: "".concat(h, "-close-x")
      }, [Ie(s, {}, g(xo, {
        class: "".concat(h, "-close-icon")
      }, null))]);
      return O;
    },
    maxCount: mr,
    hasTransitionName: !0
  }, function(x) {
    ye[p] = x, e(x);
  });
}
var So = {
  success: ao,
  info: uo,
  error: vo,
  warning: ho
};
function Fo(t) {
  var e = t.icon, n = t.type, r = t.description, a = t.message, i = t.btn, l = t.duration === void 0 ? ur : t.duration;
  Po(t, function(o) {
    o.notice({
      content: function(d) {
        var s = d.prefixCls, c = "".concat(s, "-notice"), v = null;
        if (e)
          v = function() {
            return g("span", {
              class: "".concat(c, "-icon")
            }, [Ie(e)]);
          };
        else if (n) {
          var u = So[n];
          v = function() {
            return g(u, {
              class: "".concat(c, "-icon ").concat(c, "-icon-").concat(n)
            }, null);
          };
        }
        return g("div", {
          class: v ? "".concat(c, "-with-icon") : ""
        }, [v && v(), g("div", {
          class: "".concat(c, "-message")
        }, [!r && v ? g("span", {
          class: "".concat(c, "-message-single-line-auto-margin")
        }, null) : null, Ie(a)]), g("div", {
          class: "".concat(c, "-description")
        }, [Ie(r)]), i ? g("span", {
          class: "".concat(c, "-btn")
        }, [Ie(i)]) : null]);
      },
      duration: l,
      closable: !0,
      onClose: t.onClose,
      onClick: t.onClick,
      key: t.key,
      style: t.style || {},
      class: t.class
    });
  });
}
var Ae = {
  open: Fo,
  close: function(e) {
    Object.keys(ye).forEach(function(n) {
      return Promise.resolve(ye[n]).then(function(r) {
        r.removeNotice(e);
      });
    });
  },
  config: Oo,
  destroy: function() {
    Object.keys(ye).forEach(function(e) {
      Promise.resolve(ye[e]).then(function(n) {
        n.destroy();
      }), delete ye[e];
    });
  }
}, $o = ["success", "info", "warning", "error"];
$o.forEach(function(t) {
  Ae[t] = function(e) {
    return Ae.open(C(C({}, e), {}, {
      type: t
    }));
  };
});
Ae.warn = Ae.warning;
const Io = Ae;
function kt() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var jo = "vc-util-key";
function pr() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = t.mark;
  return e ? e.startsWith("data-") ? e : "data-".concat(e) : jo;
}
function Lt(t) {
  if (t.attachTo)
    return t.attachTo;
  var e = document.querySelector("head");
  return e || document.body;
}
function gn(t) {
  var e, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!kt())
    return null;
  var r = document.createElement("style");
  if ((e = n.csp) !== null && e !== void 0 && e.nonce) {
    var a;
    r.nonce = (a = n.csp) === null || a === void 0 ? void 0 : a.nonce;
  }
  r.innerHTML = t;
  var i = Lt(n), l = i.firstChild;
  return n.prepend && i.prepend ? i.prepend(r) : n.prepend && l ? i.insertBefore(r, l) : i.appendChild(r), r;
}
var ft = /* @__PURE__ */ new Map();
function Eo(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = Lt(e);
  return Array.from(ft.get(n).children).find(function(r) {
    return r.tagName === "STYLE" && r.getAttribute(pr(e)) === t;
  });
}
function _o(t, e) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = Lt(n);
  if (!ft.has(r)) {
    var a = gn("", n), i = a.parentNode;
    ft.set(r, i), i.removeChild(a);
  }
  var l = Eo(e, n);
  if (l) {
    var o, f;
    if ((o = n.csp) !== null && o !== void 0 && o.nonce && l.nonce !== ((f = n.csp) === null || f === void 0 ? void 0 : f.nonce)) {
      var d;
      l.nonce = (d = n.csp) === null || d === void 0 ? void 0 : d.nonce;
    }
    return l.innerHTML !== t && (l.innerHTML = t), l;
  }
  var s = gn(t, n);
  return s.setAttribute(pr(n), e), s;
}
const gr = function(t, e, n) {
  Gn(t, "[ant-design-vue: ".concat(e, "] ").concat(n));
};
var Ao = "-ant-".concat(Date.now(), "-").concat(Math.random());
function To(t, e) {
  var n = {}, r = function(s, c) {
    var v = s.clone();
    return v = (c == null ? void 0 : c(v)) || v, v.toRgbString();
  }, a = function(s, c) {
    var v = new Qe(s), u = nt(v.toRgbString());
    n["".concat(c, "-color")] = r(v), n["".concat(c, "-color-disabled")] = u[1], n["".concat(c, "-color-hover")] = u[4], n["".concat(c, "-color-active")] = u[6], n["".concat(c, "-color-outline")] = v.clone().setAlpha(0.2).toRgbString(), n["".concat(c, "-color-deprecated-bg")] = u[1], n["".concat(c, "-color-deprecated-border")] = u[3];
  };
  if (e.primaryColor) {
    a(e.primaryColor, "primary");
    var i = new Qe(e.primaryColor), l = nt(i.toRgbString());
    l.forEach(function(d, s) {
      n["primary-".concat(s + 1)] = d;
    }), n["primary-color-deprecated-l-35"] = r(i, function(d) {
      return d.lighten(35);
    }), n["primary-color-deprecated-l-20"] = r(i, function(d) {
      return d.lighten(20);
    }), n["primary-color-deprecated-t-20"] = r(i, function(d) {
      return d.tint(20);
    }), n["primary-color-deprecated-t-50"] = r(i, function(d) {
      return d.tint(50);
    }), n["primary-color-deprecated-f-12"] = r(i, function(d) {
      return d.setAlpha(d.getAlpha() * 0.12);
    });
    var o = new Qe(l[0]);
    n["primary-color-active-deprecated-f-30"] = r(o, function(d) {
      return d.setAlpha(d.getAlpha() * 0.3);
    }), n["primary-color-active-deprecated-d-02"] = r(o, function(d) {
      return d.darken(2);
    });
  }
  e.successColor && a(e.successColor, "success"), e.warningColor && a(e.warningColor, "warning"), e.errorColor && a(e.errorColor, "error"), e.infoColor && a(e.infoColor, "info");
  var f = Object.keys(n).map(function(d) {
    return "--".concat(t, "-").concat(d, ": ").concat(n[d], ";");
  });
  kt() ? _o(`
  :root {
    `.concat(f.join(`
`), `
  }
  `), "".concat(Ao, "-dynamic-theme")) : gr(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
var hr = Symbol("GlobalFormContextKey"), Mo = function(e) {
  te(hr, e);
}, No = function() {
  return le(hr, {
    validateMessages: b(function() {
    })
  });
}, ko = function() {
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
}, Lo = "ant";
function Ce() {
  return X.prefixCls || Lo;
}
var dt = se({}), yr = se({}), X = se({});
Te(function() {
  re(X, dt, yr), X.prefixCls = Ce(), X.getPrefixCls = function(t, e) {
    return e || (t ? "".concat(X.prefixCls, "-").concat(t) : X.prefixCls);
  }, X.getRootPrefixCls = function(t, e) {
    return t || (X.prefixCls ? X.prefixCls : e && e.includes("-") ? e.replace(/^(.*)-[^-]*$/, "$1") : Ce());
  };
});
var Xe, Ro = function(e) {
  Xe && Xe(), Xe = Te(function() {
    re(yr, se(e)), re(X, se(e));
  }), e.theme && To(Ce(), e.theme);
}, Vo = function() {
  return {
    getPrefixCls: function(n, r) {
      return r || (n ? "".concat(Ce(), "-").concat(n) : Ce());
    },
    getRootPrefixCls: function(n, r) {
      return n || (X.prefixCls ? X.prefixCls : r && r.includes("-") ? r.replace(/^(.*)-[^-]*$/, "$1") : Ce());
    }
  };
}, Ee = Z({
  compatConfig: {
    MODE: 3
  },
  name: "AConfigProvider",
  inheritAttrs: !1,
  props: ko(),
  setup: function(e, n) {
    var r = n.slots, a = function(c, v) {
      var u = e.prefixCls, m = u === void 0 ? "ant" : u;
      return v || (c ? "".concat(m, "-").concat(c) : m);
    }, i = function(c) {
      var v = e.renderEmpty || r.renderEmpty || zn;
      return v(c);
    }, l = function(c, v) {
      var u = e.prefixCls;
      if (v)
        return v;
      var m = u || a("");
      return c ? "".concat(m, "-").concat(c) : m;
    }, o = se(C(C({}, e), {}, {
      getPrefixCls: l,
      renderEmpty: i
    }));
    Object.keys(e).forEach(function(s) {
      ae(function() {
        return e[s];
      }, function() {
        o[s] = e[s];
      });
    }), e.notUpdateGlobalConfig || (re(dt, o), ae(o, function() {
      re(dt, o);
    }));
    var f = b(function() {
      var s = {};
      if (e.locale) {
        var c, v;
        s = ((c = e.locale.Form) === null || c === void 0 ? void 0 : c.defaultValidateMessages) || ((v = _e.Form) === null || v === void 0 ? void 0 : v.defaultValidateMessages) || {};
      }
      return e.form && e.form.validateMessages && (s = C(C({}, s), e.form.validateMessages)), s;
    });
    Mo({
      validateMessages: f
    }), te("configProvider", o);
    var d = function(c) {
      var v;
      return g(Ja, {
        locale: e.locale || c,
        ANT_MARK__: it
      }, {
        default: function() {
          return [(v = r.default) === null || v === void 0 ? void 0 : v.call(r)];
        }
      });
    };
    return Te(function() {
      e.direction && (eo.config({
        rtl: e.direction === "rtl"
      }), Io.config({
        rtl: e.direction === "rtl"
      }));
    }), function() {
      return g(Ln, {
        children: function(c, v, u) {
          return d(u);
        }
      }, null);
    };
  }
}), Do = se({
  getPrefixCls: function(e, n) {
    return n || (e ? "ant-".concat(e) : "ant");
  },
  renderEmpty: zn,
  direction: "ltr"
});
Ee.config = Ro;
Ee.install = function(t) {
  t.component(Ee.name, Ee);
};
const fe = function(t, e) {
  var n = le("configProvider", Do), r = b(function() {
    return n.getPrefixCls(t, e.prefixCls);
  }), a = b(function() {
    var x;
    return (x = e.direction) !== null && x !== void 0 ? x : n.direction;
  }), i = b(function() {
    return n.getPrefixCls();
  }), l = b(function() {
    return n.autoInsertSpaceInButton;
  }), o = b(function() {
    return n.renderEmpty;
  }), f = b(function() {
    return n.space;
  }), d = b(function() {
    return n.pageHeader;
  }), s = b(function() {
    return n.form;
  }), c = b(function() {
    return e.getTargetContainer || n.getTargetContainer;
  }), v = b(function() {
    return e.getPopupContainer || n.getPopupContainer;
  }), u = b(function() {
    var x;
    return (x = e.dropdownMatchSelectWidth) !== null && x !== void 0 ? x : n.dropdownMatchSelectWidth;
  }), m = b(function() {
    return (e.virtual === void 0 ? n.virtual !== !1 : e.virtual !== !1) && u.value !== !1;
  }), p = b(function() {
    return e.size || n.componentSize;
  }), S = b(function() {
    var x;
    return e.autocomplete || ((x = n.input) === null || x === void 0 ? void 0 : x.autocomplete);
  }), F = b(function() {
    return n.csp;
  });
  return {
    configProvider: n,
    prefixCls: r,
    direction: a,
    size: p,
    getTargetContainer: c,
    getPopupContainer: v,
    space: f,
    pageHeader: d,
    form: s,
    autoInsertSpaceInButton: l,
    renderEmpty: o,
    virtual: m,
    dropdownMatchSelectWidth: u,
    rootPrefixCls: i,
    getPrefixCls: n.getPrefixCls,
    autocomplete: S,
    csp: F
  };
};
function Bo(t) {
  return _n(t) || Tn(t) || wt(t) || An();
}
var Ge = Symbol("ContextProps"), We = Symbol("InternalContextProps"), qo = function(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : b(function() {
    return !0;
  }), r = J(/* @__PURE__ */ new Map()), a = function(f, d) {
    r.value.set(f, d), r.value = new Map(r.value);
  }, i = function(f) {
    r.value.delete(f), r.value = new Map(r.value);
  }, l = Fn();
  ae([n, r], function() {
    if (process.env.NODE_ENV !== "production" && n.value && r.value.size > 1) {
      gr(!1, "Form.Item", "FormItem can only collect one field item, you haved set ".concat(ne(r.value.values()).map(function(f) {
        return "`".concat(f.name, "`");
      }).join(", "), " ").concat(r.value.size, " field items.\n        You can set not need to be collected fields into `a-form-item-rest`"));
      for (var o = l; o.parent; )
        console.warn("at", o.type), o = o.parent;
    }
  }), te(Ge, e), te(We, {
    addFormItemField: a,
    removeFormItemField: i
  });
}, vt = {
  id: b(function() {
  }),
  onFieldBlur: function() {
  },
  onFieldChange: function() {
  },
  clearValidate: function() {
  }
}, mt = {
  addFormItemField: function() {
  },
  removeFormItemField: function() {
  }
}, zo = function() {
  var e = le(We, mt), n = Symbol("FormItemFieldKey"), r = Fn();
  return e.addFormItemField(n, r.type), xt(function() {
    e.removeFormItemField(n);
  }), te(We, mt), te(Ge, vt), le(Ge, vt);
};
const pt = Z({
  compatConfig: {
    MODE: 3
  },
  name: "AFormItemRest",
  setup: function(e, n) {
    var r = n.slots;
    return te(We, mt), te(Ge, vt), function() {
      var a;
      return (a = r.default) === null || a === void 0 ? void 0 : a.call(r);
    };
  }
});
var hn = ["xxxl", "xxl", "xl", "lg", "md", "sm", "xs"], Ne = {
  xs: "(max-width: 575px)",
  sm: "(min-width: 576px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 992px)",
  xl: "(min-width: 1200px)",
  xxl: "(min-width: 1600px)",
  xxxl: "(min-width: 2000px)"
}, he = /* @__PURE__ */ new Map(), Je = -1, ke = {}, Go = {
  matchHandlers: {},
  dispatch: function(e) {
    return ke = e, he.forEach(function(n) {
      return n(ke);
    }), he.size >= 1;
  },
  subscribe: function(e) {
    return he.size || this.register(), Je += 1, he.set(Je, e), e(ke), Je;
  },
  unsubscribe: function(e) {
    he.delete(e), he.size || this.unregister();
  },
  unregister: function() {
    var e = this;
    Object.keys(Ne).forEach(function(n) {
      var r = Ne[n], a = e.matchHandlers[r];
      a == null || a.mql.removeListener(a == null ? void 0 : a.listener);
    }), he.clear();
  },
  register: function() {
    var e = this;
    Object.keys(Ne).forEach(function(n) {
      var r = Ne[n], a = function(o) {
        var f = o.matches;
        e.dispatch(C(C({}, ke), {}, A({}, n, f)));
      }, i = window.matchMedia(r);
      i.addListener(a), e.matchHandlers[r] = {
        mql: i,
        listener: a
      }, a(i);
    });
  }
};
const yn = Go;
var Wo = Symbol("SizeProvider"), Ho = function(e) {
  var n = e ? b(function() {
    return e.size;
  }) : le(Wo, b(function() {
    return "default";
  }));
  return n;
};
function br(t, e) {
  if (t.classList)
    return t.classList.contains(e);
  var n = t.className;
  return " ".concat(n, " ").indexOf(" ".concat(e, " ")) > -1;
}
function bn(t, e) {
  t.classList ? t.classList.add(e) : br(t, e) || (t.className = "".concat(t.className, " ").concat(e));
}
function Cn(t, e) {
  if (t.classList)
    t.classList.remove(e);
  else if (br(t, e)) {
    var n = t.className;
    t.className = " ".concat(n, " ").replace(" ".concat(e, " "), " ");
  }
}
var Uo = function() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "ant-motion-collapse", n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return {
    name: e,
    appear: n,
    css: !0,
    onBeforeEnter: function(a) {
      a.style.height = "0px", a.style.opacity = "0", bn(a, e);
    },
    onEnter: function(a) {
      Ue(function() {
        a.style.height = "".concat(a.scrollHeight, "px"), a.style.opacity = "1";
      });
    },
    onAfterEnter: function(a) {
      a && (Cn(a, e), a.style.height = null, a.style.opacity = null);
    },
    onBeforeLeave: function(a) {
      bn(a, e), a.style.height = "".concat(a.offsetHeight, "px"), a.style.opacity = null;
    },
    onLeave: function(a) {
      setTimeout(function() {
        a.style.height = "0px", a.style.opacity = "0";
      });
    },
    onAfterLeave: function(a) {
      a && (Cn(a, e), a.style && (a.style.height = null, a.style.opacity = null));
    }
  };
};
const Yo = Uo;
var Ko = function() {
  return kt() && window.document.documentElement;
}, Le, Qo = function() {
  if (!Ko())
    return !1;
  if (Le !== void 0)
    return Le;
  var e = document.createElement("div");
  return e.style.display = "flex", e.style.flexDirection = "column", e.style.rowGap = "1px", e.appendChild(document.createElement("div")), e.appendChild(document.createElement("div")), document.body.appendChild(e), Le = e.scrollHeight === 1, document.body.removeChild(e), Le;
};
const Xo = function() {
  var t = J(!1);
  return He(function() {
    t.value = Qo();
  }), t;
};
var Cr = Symbol("rowContextKey"), Jo = function(e) {
  te(Cr, e);
}, Zo = function() {
  return le(Cr, {
    gutter: b(function() {
    }),
    wrap: b(function() {
    }),
    supportFlexGap: b(function() {
    })
  });
};
const el = Jo;
me("top", "middle", "bottom", "stretch");
me("start", "end", "center", "space-around", "space-between");
var tl = function() {
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
}, nl = Z({
  compatConfig: {
    MODE: 3
  },
  name: "ARow",
  props: tl(),
  setup: function(e, n) {
    var r = n.slots, a = fe("row", e), i = a.prefixCls, l = a.direction, o, f = J({
      xs: !0,
      sm: !0,
      md: !0,
      lg: !0,
      xl: !0,
      xxl: !0,
      xxxl: !0
    }), d = Xo();
    He(function() {
      o = yn.subscribe(function(u) {
        var m = e.gutter || 0;
        (!Array.isArray(m) && H(m) === "object" || Array.isArray(m) && (H(m[0]) === "object" || H(m[1]) === "object")) && (f.value = u);
      });
    }), xt(function() {
      yn.unsubscribe(o);
    });
    var s = b(function() {
      var u = [0, 0], m = e.gutter, p = m === void 0 ? 0 : m, S = Array.isArray(p) ? p : [p, 0];
      return S.forEach(function(F, x) {
        if (H(F) === "object")
          for (var $ = 0; $ < hn.length; $++) {
            var h = hn[$];
            if (f.value[h] && F[h] !== void 0) {
              u[x] = F[h];
              break;
            }
          }
        else
          u[x] = F || 0;
      }), u;
    });
    el({
      gutter: s,
      supportFlexGap: d,
      wrap: b(function() {
        return e.wrap;
      })
    });
    var c = b(function() {
      var u;
      return ie(i.value, (u = {}, A(u, "".concat(i.value, "-no-wrap"), e.wrap === !1), A(u, "".concat(i.value, "-").concat(e.justify), e.justify), A(u, "".concat(i.value, "-").concat(e.align), e.align), A(u, "".concat(i.value, "-rtl"), l.value === "rtl"), u));
    }), v = b(function() {
      var u = s.value, m = {}, p = u[0] > 0 ? "".concat(u[0] / -2, "px") : void 0, S = u[1] > 0 ? "".concat(u[1] / -2, "px") : void 0;
      return p && (m.marginLeft = p, m.marginRight = p), d.value ? m.rowGap = "".concat(u[1], "px") : S && (m.marginTop = S, m.marginBottom = S), m;
    });
    return function() {
      var u;
      return g("div", {
        class: c.value,
        style: v.value
      }, [(u = r.default) === null || u === void 0 ? void 0 : u.call(r)]);
    };
  }
});
const rl = nl;
function al(t) {
  return typeof t == "number" ? "".concat(t, " ").concat(t, " auto") : /^\d+(\.\d+)?(px|em|rem|%)$/.test(t) ? "0 0 ".concat(t) : t;
}
var il = function() {
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
const xr = Z({
  compatConfig: {
    MODE: 3
  },
  name: "ACol",
  props: il(),
  setup: function(e, n) {
    var r = n.slots, a = Zo(), i = a.gutter, l = a.supportFlexGap, o = a.wrap, f = fe("col", e), d = f.prefixCls, s = f.direction, c = b(function() {
      var u, m = e.span, p = e.order, S = e.offset, F = e.push, x = e.pull, $ = d.value, h = {};
      return ["xs", "sm", "md", "lg", "xl", "xxl", "xxxl"].forEach(function(O) {
        var w, P = {}, j = e[O];
        typeof j == "number" ? P.span = j : H(j) === "object" && (P = j || {}), h = C(C({}, h), {}, (w = {}, A(w, "".concat($, "-").concat(O, "-").concat(P.span), P.span !== void 0), A(w, "".concat($, "-").concat(O, "-order-").concat(P.order), P.order || P.order === 0), A(w, "".concat($, "-").concat(O, "-offset-").concat(P.offset), P.offset || P.offset === 0), A(w, "".concat($, "-").concat(O, "-push-").concat(P.push), P.push || P.push === 0), A(w, "".concat($, "-").concat(O, "-pull-").concat(P.pull), P.pull || P.pull === 0), A(w, "".concat($, "-rtl"), s.value === "rtl"), w));
      }), ie($, (u = {}, A(u, "".concat($, "-").concat(m), m !== void 0), A(u, "".concat($, "-order-").concat(p), p), A(u, "".concat($, "-offset-").concat(S), S), A(u, "".concat($, "-push-").concat(F), F), A(u, "".concat($, "-pull-").concat(x), x), u), h);
    }), v = b(function() {
      var u = e.flex, m = i.value, p = {};
      if (m && m[0] > 0) {
        var S = "".concat(m[0] / 2, "px");
        p.paddingLeft = S, p.paddingRight = S;
      }
      if (m && m[1] > 0 && !l.value) {
        var F = "".concat(m[1] / 2, "px");
        p.paddingTop = F, p.paddingBottom = F;
      }
      return u && (p.flex = al(u), o.value === !1 && !p.minWidth && (p.minWidth = 0)), p;
    });
    return function() {
      var u;
      return g("div", {
        class: c.value,
        style: v.value
      }, [(u = r.default) === null || u === void 0 ? void 0 : u.call(r)]);
    };
  }
});
function ve(t) {
  return t == null ? [] : Array.isArray(t) ? t : [t];
}
function Or(t, e) {
  for (var n = t, r = 0; r < e.length; r += 1) {
    if (n == null)
      return;
    n = n[e[r]];
  }
  return n;
}
function wr(t, e, n, r) {
  if (!e.length)
    return n;
  var a = Bo(e), i = a[0], l = a.slice(1), o;
  return !t && typeof i == "number" ? o = [] : Array.isArray(t) ? o = ne(t) : o = C({}, t), r && n === void 0 && l.length === 1 ? delete o[i][l[0]] : o[i] = wr(o[i], l, n, r), o;
}
function ol(t, e, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return e.length && r && n === void 0 && !Or(t, e.slice(0, -1)) ? t : wr(t, e, n, r);
}
function gt(t) {
  return ve(t);
}
function ll(t, e) {
  var n = Or(t, e);
  return n;
}
function ul(t, e, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1, a = ol(t, e, n, r);
  return a;
}
function cl(t, e) {
  return t && t.some(function(n) {
    return fl(n, e);
  });
}
function xn(t) {
  return H(t) === "object" && t !== null && Object.getPrototypeOf(t) === Object.prototype;
}
function Pr(t, e) {
  var n = Array.isArray(t) ? ne(t) : C({}, t);
  return e && Object.keys(e).forEach(function(r) {
    var a = n[r], i = e[r], l = xn(a) && xn(i);
    n[r] = l ? Pr(a, i || {}) : i;
  }), n;
}
function sl(t) {
  for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
    n[r - 1] = arguments[r];
  return n.reduce(function(a, i) {
    return Pr(a, i);
  }, t);
}
function On(t, e) {
  var n = {};
  return e.forEach(function(r) {
    var a = ll(t, r);
    n = ul(n, r, a);
  }), n;
}
function fl(t, e) {
  return !t || !e || t.length !== e.length ? !1 : t.every(function(n, r) {
    return e[r] === n;
  });
}
var Q = "'${name}' is not a valid ${type}", Ke = {
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
    string: Q,
    method: Q,
    array: Q,
    object: Q,
    number: Q,
    date: Q,
    boolean: Q,
    integer: Q,
    float: Q,
    regexp: Q,
    email: Q,
    url: Q,
    hex: Q
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
}, dl = Gr;
function vl(t, e) {
  return t.replace(/\$\{\w+\}/g, function(n) {
    var r = n.slice(2, -1);
    return e[r];
  });
}
function ht(t, e, n, r, a) {
  return yt.apply(this, arguments);
}
function yt() {
  return yt = Ye(/* @__PURE__ */ pe.mark(function t(e, n, r, a, i) {
    var l, o, f, d, s, c, v, u;
    return pe.wrap(function(p) {
      for (; ; )
        switch (p.prev = p.next) {
          case 0:
            return l = C({}, r), delete l.ruleIndex, delete l.trigger, o = null, l && l.type === "array" && l.defaultField && (o = l.defaultField, delete l.defaultField), f = new dl(A({}, e, [l])), d = sl({}, Ke, a.validateMessages), f.messages(d), s = [], p.prev = 9, p.next = 12, Promise.resolve(f.validate(A({}, e, n), C({}, a)));
          case 12:
            p.next = 17;
            break;
          case 14:
            p.prev = 14, p.t0 = p.catch(9), p.t0.errors ? s = p.t0.errors.map(function(S, F) {
              var x = S.message;
              return Ra(x) ? Nr(x, {
                key: "error_".concat(F)
              }) : x;
            }) : (console.error(p.t0), s = [d.default()]);
          case 17:
            if (!(!s.length && o)) {
              p.next = 22;
              break;
            }
            return p.next = 20, Promise.all(n.map(function(S, F) {
              return ht("".concat(e, ".").concat(F), S, o, a, i);
            }));
          case 20:
            return c = p.sent, p.abrupt("return", c.reduce(function(S, F) {
              return [].concat(ne(S), ne(F));
            }, []));
          case 22:
            return v = C(C({}, r), {}, {
              name: e,
              enum: (r.enum || []).join(", ")
            }, i), u = s.map(function(S) {
              return typeof S == "string" ? vl(S, v) : S;
            }), p.abrupt("return", u);
          case 25:
          case "end":
            return p.stop();
        }
    }, t, null, [[9, 14]]);
  })), yt.apply(this, arguments);
}
function Sr(t, e, n, r, a, i) {
  var l = t.join("."), o = n.map(function(s, c) {
    var v = s.validator, u = C(C({}, s), {}, {
      ruleIndex: c
    });
    return v && (u.validator = function(m, p, S) {
      var F = !1, x = function() {
        for (var O = arguments.length, w = new Array(O), P = 0; P < O; P++)
          w[P] = arguments[P];
        Promise.resolve().then(function() {
          qe(!F, "Your validator function has already return a promise. `callback` will be ignored."), F || S.apply(void 0, w);
        });
      }, $ = v(m, p, x);
      F = $ && typeof $.then == "function" && typeof $.catch == "function", qe(F, "`callback` is deprecated. Please return a promise instead."), F && $.then(function() {
        S();
      }).catch(function(h) {
        S(h || " ");
      });
    }), u;
  }).sort(function(s, c) {
    var v = s.warningOnly, u = s.ruleIndex, m = c.warningOnly, p = c.ruleIndex;
    return !!v == !!m ? u - p : v ? 1 : -1;
  }), f;
  if (a === !0)
    f = new Promise(/* @__PURE__ */ function() {
      var s = Ye(/* @__PURE__ */ pe.mark(function c(v, u) {
        var m, p, S;
        return pe.wrap(function(x) {
          for (; ; )
            switch (x.prev = x.next) {
              case 0:
                m = 0;
              case 1:
                if (!(m < o.length)) {
                  x.next = 12;
                  break;
                }
                return p = o[m], x.next = 5, ht(l, e, p, r, i);
              case 5:
                if (S = x.sent, !S.length) {
                  x.next = 9;
                  break;
                }
                return u([{
                  errors: S,
                  rule: p
                }]), x.abrupt("return");
              case 9:
                m += 1, x.next = 1;
                break;
              case 12:
                v([]);
              case 13:
              case "end":
                return x.stop();
            }
        }, c);
      }));
      return function(c, v) {
        return s.apply(this, arguments);
      };
    }());
  else {
    var d = o.map(function(s) {
      return ht(l, e, s, r, i).then(function(c) {
        return {
          errors: c,
          rule: s
        };
      });
    });
    f = (a ? pl(d) : ml(d)).then(function(s) {
      return Promise.reject(s);
    });
  }
  return f.catch(function(s) {
    return s;
  }), f;
}
function ml(t) {
  return bt.apply(this, arguments);
}
function bt() {
  return bt = Ye(/* @__PURE__ */ pe.mark(function t(e) {
    return pe.wrap(function(r) {
      for (; ; )
        switch (r.prev = r.next) {
          case 0:
            return r.abrupt("return", Promise.all(e).then(function(a) {
              var i, l = (i = []).concat.apply(i, ne(a));
              return l;
            }));
          case 1:
          case "end":
            return r.stop();
        }
    }, t);
  })), bt.apply(this, arguments);
}
function pl(t) {
  return Ct.apply(this, arguments);
}
function Ct() {
  return Ct = Ye(/* @__PURE__ */ pe.mark(function t(e) {
    var n;
    return pe.wrap(function(a) {
      for (; ; )
        switch (a.prev = a.next) {
          case 0:
            return n = 0, a.abrupt("return", new Promise(function(i) {
              e.forEach(function(l) {
                l.then(function(o) {
                  o.errors.length && i([o]), n += 1, n === e.length && i([]);
                });
              });
            }));
          case 2:
          case "end":
            return a.stop();
        }
    }, t);
  })), Ct.apply(this, arguments);
}
var Fr = Symbol("formContextKey"), $r = function(e) {
  te(Fr, e);
}, Rt = function() {
  return le(Fr, {
    name: b(function() {
    }),
    labelAlign: b(function() {
      return "right";
    }),
    vertical: b(function() {
      return !1;
    }),
    addField: function(n, r) {
    },
    removeField: function(n) {
    },
    model: b(function() {
    }),
    rules: b(function() {
    }),
    colon: b(function() {
    }),
    labelWrap: b(function() {
    }),
    labelCol: b(function() {
    }),
    requiredMark: b(function() {
      return !1;
    }),
    validateTrigger: b(function() {
    }),
    onValidate: function() {
    },
    validateMessages: b(function() {
      return Ke;
    })
  });
}, Ir = Symbol("formItemPrefixContextKey"), gl = function(e) {
  te(Ir, e);
}, hl = function() {
  return le(Ir, {
    prefixCls: b(function() {
      return "";
    })
  });
}, Vt = function(e, n) {
  var r, a, i, l, o = n.slots, f = n.emit, d = n.attrs, s = C(C({}, e), d), c = s.prefixCls, v = s.htmlFor, u = s.labelCol, m = s.labelAlign, p = s.colon, S = s.required, F = s.requiredMark, x = Ha("Form"), $ = at(x, 1), h = $[0], O = (r = e.label) !== null && r !== void 0 ? r : (a = o.label) === null || a === void 0 ? void 0 : a.call(o);
  if (!O)
    return null;
  var w = Rt(), P = w.vertical, j = w.labelAlign, E = w.labelCol, N = w.labelWrap, R = w.colon, k = u || (E == null ? void 0 : E.value) || {}, z = m || (j == null ? void 0 : j.value), G = "".concat(c, "-item-label"), B = ie(G, z === "left" && "".concat(G, "-left"), k.class, A({}, "".concat(G, "-wrap"), !!N.value)), V = O, _ = p === !0 || (R == null ? void 0 : R.value) !== !1 && p !== !1, T = _ && !P.value;
  if (T && typeof O == "string" && O.trim() !== "" && (V = O.replace(/[:|：]\s*$/, "")), V = g(xe, null, [V, (i = o.tooltip) === null || i === void 0 ? void 0 : i.call(o, {
    class: "".concat(c, "-item-tooltip")
  })]), F === "optional" && !S) {
    var y, I;
    V = g(xe, null, [V, g("span", {
      class: "".concat(c, "-item-optional")
    }, [((y = h.value) === null || y === void 0 ? void 0 : y.optional) || ((I = _e.Form) === null || I === void 0 ? void 0 : I.optional)])]);
  }
  var M = ie((l = {}, A(l, "".concat(c, "-item-required"), S), A(l, "".concat(c, "-item-required-mark-optional"), F === "optional"), A(l, "".concat(c, "-item-no-colon"), !_), l));
  return g(xr, C(C({}, k), {}, {
    class: B
  }), {
    default: function() {
      return [g("label", {
        for: v,
        class: M,
        title: typeof O == "string" ? O : "",
        onClick: function(U) {
          return f("click", U);
        }
      }, [V])];
    }
  });
};
Vt.displayName = "FormItemLabel";
Vt.inheritAttrs = !1;
const yl = Vt, bl = Z({
  compatConfig: {
    MODE: 3
  },
  name: "ErrorList",
  props: ["errors", "help", "onDomErrorVisibleChange", "helpStatus", "warnings"],
  setup: function(e) {
    var n = fe("", e), r = n.prefixCls, a = hl(), i = a.prefixCls, l = a.status, o = b(function() {
      return "".concat(i.value, "-item-explain");
    }), f = b(function() {
      return !!(e.errors && e.errors.length);
    }), d = J(l.value);
    return ae([f, l], function() {
      f.value && (d.value = l.value);
    }), function() {
      var s, c, v = Yo("".concat(r.value, "-show-help-item")), u = Wn("".concat(r.value, "-show-help-item"), v);
      return u.class = o.value, (s = e.errors) !== null && s !== void 0 && s.length ? g(Sn, C(C({}, u), {}, {
        tag: "div"
      }), {
        default: function() {
          return [(c = e.errors) === null || c === void 0 ? void 0 : c.map(function(p, S) {
            return g("div", {
              key: S,
              role: "alert",
              class: d.value ? "".concat(o.value, "-").concat(d.value) : ""
            }, [p]);
          })];
        }
      }) : null;
    };
  }
});
var Cl = {
  success: Zn,
  warning: Xn,
  error: Jn,
  validating: Qn
}, xl = Z({
  compatConfig: {
    MODE: 3
  },
  slots: ["help", "extra", "errors"],
  inheritAttrs: !1,
  props: ["prefixCls", "errors", "hasFeedback", "onDomErrorVisibleChange", "wrapperCol", "help", "extra", "status"],
  setup: function(e, n) {
    var r = n.slots, a = Rt(), i = a.wrapperCol, l = C({}, a);
    return delete l.labelCol, delete l.wrapperCol, $r(l), gl({
      prefixCls: b(function() {
        return e.prefixCls;
      }),
      status: b(function() {
        return e.status;
      })
    }), function() {
      var o, f, d, s = e.prefixCls, c = e.wrapperCol, v = e.help, u = v === void 0 ? (o = r.help) === null || o === void 0 ? void 0 : o.call(r) : v, m = e.errors, p = m === void 0 ? (f = r.errors) === null || f === void 0 ? void 0 : f.call(r) : m, S = e.hasFeedback, F = e.status, x = e.extra, $ = x === void 0 ? (d = r.extra) === null || d === void 0 ? void 0 : d.call(r) : x, h = "".concat(s, "-item"), O = c || (i == null ? void 0 : i.value) || {}, w = ie("".concat(h, "-control"), O.class), P = F && Cl[F];
      return g(xr, C(C({}, O), {}, {
        class: w
      }), {
        default: function() {
          var E;
          return g(xe, null, [g("div", {
            class: "".concat(h, "-control-input")
          }, [g("div", {
            class: "".concat(h, "-control-input-content")
          }, [(E = r.default) === null || E === void 0 ? void 0 : E.call(r)]), S && P ? g("span", {
            class: "".concat(h, "-children-icon")
          }, [g(P, null, null)]) : null]), g(bl, {
            errors: p,
            help: u,
            class: "".concat(h, "-explain-connected")
          }, null), $ ? g("div", {
            class: "".concat(h, "-extra")
          }, [$]) : null]);
        }
      });
    };
  }
});
const Ol = xl;
function wl(t) {
  var e = $n(t.value.slice()), n = null;
  return Te(function() {
    clearTimeout(n), n = setTimeout(function() {
      e.value = t.value;
    }, t.value.length ? 0 : 10);
  }), e;
}
me("success", "warning", "error", "validating", "");
function Ze(t, e, n) {
  var r = t, a = e, i = 0;
  try {
    for (var l = a.length; i < l - 1 && !(!r && !n); ++i) {
      var o = a[i];
      if (o in r)
        r = r[o];
      else {
        if (n)
          throw Error("please transfer a valid name path to form item!");
        break;
      }
    }
    if (n && !r)
      throw Error("please transfer a valid name path to form item!");
  } catch {
    console.error("please transfer a valid name path to form item!");
  }
  return {
    o: r,
    k: a[i],
    v: r ? r[a[i]] : void 0
  };
}
var Pl = function() {
  return {
    htmlFor: String,
    prefixCls: String,
    label: oe.any,
    help: oe.any,
    extra: oe.any,
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
    labelAlign: oe.oneOf(me("left", "right")),
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
    validateStatus: oe.oneOf(me("", "success", "warning", "error", "validating")),
    validateTrigger: {
      type: [String, Array]
    },
    messageVariables: {
      type: Object
    },
    hidden: Boolean,
    noStyle: Boolean
  };
}, Sl = 0, Fl = "form_item";
const $l = Z({
  compatConfig: {
    MODE: 3
  },
  name: "AFormItem",
  inheritAttrs: !1,
  __ANT_NEW_FORM_ITEM: !0,
  props: Pl(),
  slots: ["help", "label", "extra"],
  setup: function(e, n) {
    var r = n.slots, a = n.attrs, i = n.expose;
    qe(e.prop === void 0, "`prop` is deprecated. Please use `name` instead.");
    var l = "form-item-".concat(++Sl), o = fe("form", e), f = o.prefixCls, d = Rt(), s = b(function() {
      return e.name || e.prop;
    }), c = J([]), v = J(!1), u = J(), m = b(function() {
      var y = s.value;
      return gt(y);
    }), p = b(function() {
      if (m.value.length) {
        var y = d.name.value, I = m.value.join("_");
        return y ? "".concat(y, "_").concat(I) : "".concat(Fl, "_").concat(I);
      } else
        return;
    }), S = function() {
      var I = d.model.value;
      if (!(!I || !s.value))
        return Ze(I, m.value, !0).v;
    }, F = b(function() {
      return S();
    }), x = J(Re(F.value)), $ = b(function() {
      var y = e.validateTrigger !== void 0 ? e.validateTrigger : d.validateTrigger.value;
      return y = y === void 0 ? "change" : y, ve(y);
    }), h = b(function() {
      var y = d.rules.value, I = e.rules, M = e.required !== void 0 ? {
        required: !!e.required,
        trigger: $.value
      } : [], L = Ze(y, m.value);
      y = y ? L.o[L.k] || L.v : [];
      var D = [].concat(I || y || []);
      return va(D, function(U) {
        return U.required;
      }) ? D : D.concat(M);
    }), O = b(function() {
      var y = h.value, I = !1;
      return y && y.length && y.every(function(M) {
        return M.required ? (I = !0, !1) : !0;
      }), I || e.required;
    }), w = J();
    Te(function() {
      w.value = e.validateStatus;
    });
    var P = b(function() {
      var y = {};
      return typeof e.label == "string" ? y.label = e.label : e.name && (y.label = String(name)), e.messageVariables && (y = C(C({}, y), e.messageVariables)), y;
    }), j = function(I) {
      if (m.value.length !== 0) {
        var M = e.validateFirst, L = M === void 0 ? !1 : M, D = I || {}, U = D.triggerName, q = h.value;
        if (U && (q = q.filter(function(Y) {
          var ge = Y.trigger;
          if (!ge && !$.value.length)
            return !0;
          var de = ve(ge || $.value);
          return de.includes(U);
        })), !q.length)
          return Promise.resolve();
        var ee = Sr(m.value, F.value, q, C({
          validateMessages: d.validateMessages.value
        }, I), L, P.value);
        return w.value = "validating", c.value = [], ee.catch(function(Y) {
          return Y;
        }).then(function() {
          var Y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
          if (w.value === "validating") {
            var ge = Y.filter(function(de) {
              return de && de.errors.length;
            });
            w.value = ge.length ? "error" : "success", c.value = ge.map(function(de) {
              return de.errors;
            }), d.onValidate(s.value, !c.value.length, c.value.length ? tt(c.value[0]) : null);
          }
        }), ee;
      }
    }, E = function() {
      j({
        triggerName: "blur"
      });
    }, N = function() {
      if (v.value) {
        v.value = !1;
        return;
      }
      j({
        triggerName: "change"
      });
    }, R = function() {
      w.value = e.validateStatus, v.value = !1, c.value = [];
    }, k = function() {
      w.value = e.validateStatus, v.value = !0, c.value = [];
      var I = d.model.value || {}, M = F.value, L = Ze(I, m.value, !0);
      Array.isArray(M) ? L.o[L.k] = [].concat(x.value) : L.o[L.k] = x.value, Ue(function() {
        v.value = !1;
      });
    }, z = b(function() {
      return e.htmlFor === void 0 ? p.value : e.htmlFor;
    }), G = function() {
      var I = z.value;
      if (!(!I || !u.value)) {
        var M = u.value.$el.querySelector('[id="'.concat(I, '"]'));
        M && M.focus && M.focus();
      }
    };
    i({
      onFieldBlur: E,
      onFieldChange: N,
      clearValidate: R,
      resetField: k
    }), qo({
      id: p,
      onFieldBlur: function() {
        e.autoLink && E();
      },
      onFieldChange: function() {
        e.autoLink && N();
      },
      clearValidate: R
    }, b(function() {
      return !!(e.autoLink && d.model.value && s.value);
    }));
    var B = !1;
    ae(s, function(y) {
      y ? B || (B = !0, d.addField(l, {
        fieldValue: F,
        fieldId: p,
        fieldName: s,
        resetField: k,
        clearValidate: R,
        namePath: m,
        validateRules: j,
        rules: h
      })) : (B = !1, d.removeField(l));
    }, {
      immediate: !0
    }), xt(function() {
      d.removeField(l);
    });
    var V = wl(c), _ = b(function() {
      return e.validateStatus !== void 0 ? e.validateStatus : V.value.length ? "error" : w.value;
    }), T = b(function() {
      var y;
      return y = {}, A(y, "".concat(f.value, "-item"), !0), A(y, "".concat(f.value, "-item-has-feedback"), _.value && e.hasFeedback), A(y, "".concat(f.value, "-item-has-success"), _.value === "success"), A(y, "".concat(f.value, "-item-has-warning"), _.value === "warning"), A(y, "".concat(f.value, "-item-has-error"), _.value === "error"), A(y, "".concat(f.value, "-item-is-validating"), _.value === "validating"), A(y, "".concat(f.value, "-item-hidden"), e.hidden), y;
    });
    return function() {
      var y, I;
      if (e.noStyle)
        return (y = r.default) === null || y === void 0 ? void 0 : y.call(r);
      var M = (I = e.help) !== null && I !== void 0 ? I : r.help ? Pt(r.help()) : null;
      return g(rl, C(C({}, a), {}, {
        class: [T.value, M != null || V.value.length ? "".concat(f.value, "-item-with-help") : "", a.class],
        key: "row"
      }), {
        default: function() {
          var D, U, q, ee;
          return g(xe, null, [g(yl, C(C({}, e), {}, {
            htmlFor: z.value,
            required: O.value,
            requiredMark: d.requiredMark.value,
            prefixCls: f.value,
            onClick: G,
            label: (D = e.label) !== null && D !== void 0 ? D : (U = r.label) === null || U === void 0 ? void 0 : U.call(r)
          }), null), g(Ol, C(C({}, e), {}, {
            errors: M != null ? ve(M) : V.value,
            prefixCls: f.value,
            status: _.value,
            ref: u,
            help: M,
            extra: (q = e.extra) !== null && q !== void 0 ? q : (ee = r.extra) === null || ee === void 0 ? void 0 : ee.call(r)
          }), {
            default: r.default
          })]);
        }
      });
    };
  }
});
function jr(t) {
  var e = !1, n = t.length, r = [];
  return t.length ? new Promise(function(a, i) {
    t.forEach(function(l, o) {
      l.catch(function(f) {
        return e = !0, f;
      }).then(function(f) {
        n -= 1, r[o] = f, !(n > 0) && (e && i(r), a(r));
      });
    });
  }) : Promise.resolve([]);
}
var Il = na();
function wn(t) {
  var e = !1;
  return t && t.length && t.every(function(n) {
    return n.required ? (e = !0, !1) : !0;
  }), e;
}
function Pn(t) {
  return t == null ? [] : Array.isArray(t) ? t : [t];
}
function et(t, e, n) {
  var r = t;
  e = e.replace(/\[(\w+)\]/g, ".$1"), e = e.replace(/^\./, "");
  for (var a = e.split("."), i = 0, l = a.length; i < l - 1 && !(!r && !n); ++i) {
    var o = a[i];
    if (o in r)
      r = r[o];
    else {
      if (n)
        throw new Error("please transfer a valid name path to validate!");
      break;
    }
  }
  return {
    o: r,
    k: a[i],
    v: r ? r[a[i]] : null,
    isValid: r && a[i] in r
  };
}
function jl(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : J({}), n = arguments.length > 2 ? arguments[2] : void 0, r = Re(ce(t)), a = se({}), i = $n([]), l = function(h) {
    re(ce(t), C(C({}, Re(r)), h)), Ue(function() {
      Object.keys(a).forEach(function(O) {
        a[O] = {
          autoLink: !1,
          required: wn(ce(e)[O])
        };
      });
    });
  }, o = function() {
    var h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], O = arguments.length > 1 ? arguments[1] : void 0;
    return O.length ? h.filter(function(w) {
      var P = Pn(w.trigger || "change");
      return ya(P, O).length;
    }) : h;
  }, f = null, d = function(h) {
    for (var O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, w = arguments.length > 2 ? arguments[2] : void 0, P = [], j = {}, E = function() {
      var B = h[N], V = et(ce(t), B, w);
      if (!V.isValid)
        return "continue";
      j[B] = V.v;
      var _ = o(ce(e)[B], Pn(O && O.trigger));
      _.length && P.push(s(B, V.v, _, O || {}).then(function() {
        return {
          name: B,
          errors: [],
          warnings: []
        };
      }).catch(function(T) {
        var y = [], I = [];
        return T.forEach(function(M) {
          var L = M.rule.warningOnly, D = M.errors;
          L ? I.push.apply(I, ne(D)) : y.push.apply(y, ne(D));
        }), y.length ? Promise.reject({
          name: B,
          errors: y,
          warnings: I
        }) : {
          name: B,
          errors: y,
          warnings: I
        };
      }));
    }, N = 0; N < h.length; N++)
      var R = E();
    var k = jr(P);
    f = k;
    var z = k.then(function() {
      return f === k ? Promise.resolve(j) : Promise.reject([]);
    }).catch(function(G) {
      var B = G.filter(function(V) {
        return V && V.errors.length;
      });
      return Promise.reject({
        values: j,
        errorFields: B,
        outOfDate: f !== k
      });
    });
    return z.catch(function(G) {
      return G;
    }), z;
  }, s = function(h, O, w) {
    var P = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, j = Sr([h], O, w, C({
      validateMessages: Ke
    }, P), !!P.validateFirst);
    return a[h] ? (a[h].validateStatus = "validating", j.catch(function(E) {
      return E;
    }).then(function() {
      var E = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      if (a[h].validateStatus === "validating") {
        var N, R = E.filter(function(k) {
          return k && k.errors.length;
        });
        a[h].validateStatus = R.length ? "error" : "success", a[h].help = R.length ? R.map(function(k) {
          return k.errors;
        }) : null, n == null || (N = n.onValidate) === null || N === void 0 || N.call(n, h, !R.length, R.length ? tt(a[h].help[0]) : null);
      }
    }), j) : j.catch(function(E) {
      return E;
    });
  }, c = function(h, O) {
    var w = [], P = !0;
    h ? Array.isArray(h) ? w = h : w = [h] : (P = !1, w = i.value);
    var j = d(w, O || {}, P);
    return j.catch(function(E) {
      return E;
    }), j;
  }, v = function(h) {
    var O = [];
    h ? Array.isArray(h) ? O = h : O = [h] : O = i.value, O.forEach(function(w) {
      a[w] && re(a[w], {
        validateStatus: "",
        help: null
      });
    });
  }, u = function(h) {
    for (var O = {
      autoLink: !1
    }, w = [], P = Array.isArray(h) ? h : [h], j = 0; j < P.length; j++) {
      var E = P[j];
      (E == null ? void 0 : E.validateStatus) === "error" && (O.validateStatus = "error", E.help && w.push(E.help)), O.required = O.required || (E == null ? void 0 : E.required);
    }
    return O.help = w, O;
  }, m = r, p = !0, S = function(h) {
    var O = [];
    i.value.forEach(function(w) {
      var P = et(h, w, !1), j = et(m, w, !1), E = p && (n == null ? void 0 : n.immediate) && P.isValid;
      (E || !En(P.v, j.v)) && O.push(w);
    }), c(O, {
      trigger: "change"
    }), p = !1, m = Re(tt(h));
  }, F = n == null ? void 0 : n.debounce, x = !0;
  return ae(e, function() {
    i.value = e ? Object.keys(ce(e)) : [], !x && n && n.validateOnRuleChange && c(), x = !1;
  }, {
    deep: !0,
    immediate: !0
  }), ae(i, function() {
    var $ = {};
    i.value.forEach(function(O) {
      $[O] = re({}, a[O], {
        autoLink: !1,
        required: wn(ce(e)[O])
      }), delete a[O];
    });
    for (var h in a)
      Object.prototype.hasOwnProperty.call(a, h) && delete a[h];
    re(a, $);
  }, {
    immediate: !0
  }), ae(t, F && F.wait ? ta(S, F.wait, Fa(F, ["wait"])) : S, {
    immediate: n && !!n.immediate,
    deep: !0
  }), {
    modelRef: t,
    rulesRef: e,
    initialModel: r,
    validateInfos: a,
    resetFields: l,
    validate: c,
    validateField: s,
    mergeValidateInfo: u,
    clearValidate: v
  };
}
var El = function() {
  return {
    layout: oe.oneOf(me("horizontal", "inline", "vertical")),
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
    labelAlign: oe.oneOf(me("left", "right")),
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
    model: oe.object,
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
function _l(t, e) {
  return En(ve(t), ve(e));
}
var Al = Z({
  compatConfig: {
    MODE: 3
  },
  name: "AForm",
  inheritAttrs: !1,
  props: ka(El(), {
    layout: "horizontal",
    hideRequiredMark: !1,
    colon: !0
  }),
  Item: $l,
  useForm: jl,
  setup: function(e, n) {
    var r = n.emit, a = n.slots, i = n.expose, l = n.attrs, o = Ho(e), f = fe("form", e), d = f.prefixCls, s = f.direction, c = f.form, v = b(function() {
      return e.requiredMark === "" || e.requiredMark;
    }), u = b(function() {
      var _;
      return v.value !== void 0 ? v.value : c && ((_ = c.value) === null || _ === void 0 ? void 0 : _.requiredMark) !== void 0 ? c.value.requiredMark : !e.hideRequiredMark;
    }), m = b(function() {
      var _, T;
      return (_ = e.colon) !== null && _ !== void 0 ? _ : (T = c.value) === null || T === void 0 ? void 0 : T.colon;
    }), p = No(), S = p.validateMessages, F = b(function() {
      return C(C(C({}, Ke), S.value), e.validateMessages);
    }), x = b(function() {
      var _;
      return ie(d.value, (_ = {}, A(_, "".concat(d.value, "-").concat(e.layout), !0), A(_, "".concat(d.value, "-hide-required-mark"), u.value === !1), A(_, "".concat(d.value, "-rtl"), s.value === "rtl"), A(_, "".concat(d.value, "-").concat(o.value), o.value), _));
    }), $ = J(), h = {}, O = function(T, y) {
      h[T] = y;
    }, w = function(T) {
      delete h[T];
    }, P = function(T) {
      var y = !!T, I = y ? ve(T).map(gt) : [];
      return y ? Object.values(h).filter(function(M) {
        return I.findIndex(function(L) {
          return _l(L, M.fieldName.value);
        }) > -1;
      }) : Object.values(h);
    }, j = function(T) {
      if (!e.model) {
        Ve(!1, "Form", "model is required for resetFields to work.");
        return;
      }
      P(T).forEach(function(y) {
        y.resetField();
      });
    }, E = function(T) {
      P(T).forEach(function(y) {
        y.clearValidate();
      });
    }, N = function(T) {
      var y = e.scrollToFirstError;
      if (r("finishFailed", T), y && T.errorFields.length) {
        var I = {};
        H(y) === "object" && (I = y), k(T.errorFields[0].name, I);
      }
    }, R = function() {
      return B.apply(void 0, arguments);
    }, k = function(T) {
      var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, I = P(T ? [T] : void 0);
      if (I.length) {
        var M = I[0].fieldId.value, L = M ? document.getElementById(M) : null;
        L && Il(L, C({
          scrollMode: "if-needed",
          block: "nearest"
        }, y));
      }
    }, z = function() {
      var T = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
      if (T === !0) {
        var y = [];
        return Object.values(h).forEach(function(I) {
          var M = I.namePath;
          y.push(M.value);
        }), On(e.model, y);
      } else
        return On(e.model, T);
    }, G = function(T, y) {
      if (Ve(!(T instanceof Function), "Form", "validateFields/validateField/validate not support callback, please use promise instead"), !e.model)
        return Ve(!1, "Form", "model is required for validateFields to work."), Promise.reject("Form `model` is required for validateFields to work.");
      var I = !!T, M = I ? ve(T).map(gt) : [], L = [];
      Object.values(h).forEach(function(q) {
        var ee;
        if (I || M.push(q.namePath.value), !!((ee = q.rules) !== null && ee !== void 0 && ee.value.length)) {
          var Y = q.namePath.value;
          if (!I || cl(M, Y)) {
            var ge = q.validateRules(C({
              validateMessages: F.value
            }, y));
            L.push(ge.then(function() {
              return {
                name: Y,
                errors: [],
                warnings: []
              };
            }).catch(function(de) {
              var Se = [], Me = [];
              return de.forEach(function(Dt) {
                var Er = Dt.rule.warningOnly, Bt = Dt.errors;
                Er ? Me.push.apply(Me, ne(Bt)) : Se.push.apply(Se, ne(Bt));
              }), Se.length ? Promise.reject({
                name: Y,
                errors: Se,
                warnings: Me
              }) : {
                name: Y,
                errors: Se,
                warnings: Me
              };
            }));
          }
        }
      });
      var D = jr(L);
      $.value = D;
      var U = D.then(function() {
        return $.value === D ? Promise.resolve(z(M)) : Promise.reject([]);
      }).catch(function(q) {
        var ee = q.filter(function(Y) {
          return Y && Y.errors.length;
        });
        return Promise.reject({
          values: z(M),
          errorFields: ee,
          outOfDate: $.value !== D
        });
      });
      return U.catch(function(q) {
        return q;
      }), U;
    }, B = function() {
      return G.apply(void 0, arguments);
    }, V = function(T) {
      if (T.preventDefault(), T.stopPropagation(), r("submit", T), e.model) {
        var y = G();
        y.then(function(I) {
          r("finish", I);
        }).catch(function(I) {
          N(I);
        });
      }
    };
    return i({
      resetFields: j,
      clearValidate: E,
      validateFields: G,
      getFieldsValue: z,
      validate: R,
      scrollToField: k
    }), $r({
      model: b(function() {
        return e.model;
      }),
      name: b(function() {
        return e.name;
      }),
      labelAlign: b(function() {
        return e.labelAlign;
      }),
      labelCol: b(function() {
        return e.labelCol;
      }),
      labelWrap: b(function() {
        return e.labelWrap;
      }),
      wrapperCol: b(function() {
        return e.wrapperCol;
      }),
      vertical: b(function() {
        return e.layout === "vertical";
      }),
      colon: m,
      requiredMark: u,
      validateTrigger: b(function() {
        return e.validateTrigger;
      }),
      rules: b(function() {
        return e.rules;
      }),
      addField: O,
      removeField: w,
      onValidate: function(T, y, I) {
        r("validate", T, y, I);
      },
      validateMessages: F
    }), ae(function() {
      return e.rules;
    }, function() {
      e.validateOnRuleChange && G();
    }), function() {
      var _;
      return g("form", C(C({}, l), {}, {
        onSubmit: V,
        class: [x.value, l.class]
      }), [(_ = a.default) === null || _ === void 0 ? void 0 : _.call(a)]);
    };
  }
});
const be = Al;
be.useInjectFormItemContext = zo;
be.ItemRest = pt;
be.install = function(t) {
  return t.component(be.name, be), t.component(be.Item.name, be.Item), t.component(pt.name, pt), t;
};
export {
  be as F,
  $l as a
};
