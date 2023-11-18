import { Fragment as Le, Comment as Vi, Text as Gi, defineComponent as te, inject as de, computed as P, unref as me, createVNode as y, reactive as he, provide as re, watch as le, onMounted as Ot, onUnmounted as zi, Teleport as qi, ref as ee, TransitionGroup as oa, render as Xn, h as Qn, nextTick as wt, watchEffect as nt, getCurrentInstance as la, onBeforeUnmount as hn, cloneVNode as Ui, shallowRef as ua, toRaw as zt } from "vue";
import { z as Hi, b as qt, r as Wi, g as ca, T as Mt } from "./index-5fc6c346.mjs";
import { S as Yi, r as Ki } from "./index-ae81290b.mjs";
function Y(e) {
  "@babel/helpers - typeof";
  return Y = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Y(e);
}
function Xi(e, t) {
  if (Y(e) !== "object" || e === null)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Y(r) !== "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Qi(e) {
  var t = Xi(e, "string");
  return Y(t) === "symbol" ? t : String(t);
}
function E(e, t, n) {
  return t = Qi(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Zn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function S(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Zn(Object(n), !0).forEach(function(r) {
      E(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Zn(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function oe() {
  return oe = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, oe.apply(this, arguments);
}
var Zi = Array.isArray, Ji = function(t) {
  return typeof t == "string";
}, eo = function(t) {
  return t !== null && Y(t) === "object";
};
function Ue(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0;
  return typeof e == "function" ? e(t) : e ?? n;
}
function ue() {
  for (var e = [], t = 0; t < arguments.length; t++) {
    var n = t < 0 || arguments.length <= t ? void 0 : arguments[t];
    if (n) {
      if (Ji(n))
        e.push(n);
      else if (Zi(n))
        for (var r = 0; r < n.length; r++) {
          var a = ue(n[r]);
          a && e.push(a);
        }
      else if (eo(n))
        for (var i in n)
          n[i] && e.push(i);
    }
  }
  return e.join(" ");
}
function sa(e) {
  if (Array.isArray(e))
    return e;
}
function to(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, a, i, l, o = [], u = !0, c = !1;
    try {
      if (i = (n = n.call(e)).next, t === 0) {
        if (Object(n) !== n)
          return;
        u = !1;
      } else
        for (; !(u = (r = i.call(n)).done) && (o.push(r.value), o.length !== t); u = !0)
          ;
    } catch (v) {
      c = !0, a = v;
    } finally {
      try {
        if (!u && n.return != null && (l = n.return(), Object(l) !== l))
          return;
      } finally {
        if (c)
          throw a;
      }
    }
    return o;
  }
}
function Ut(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function yn(e, t) {
  if (e) {
    if (typeof e == "string")
      return Ut(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Ut(e, t);
  }
}
function fa() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ht(e, t) {
  return sa(e) || to(e, t) || yn(e, t) || fa();
}
function no(e) {
  if (Array.isArray(e))
    return Ut(e);
}
function da(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function ro() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ae(e) {
  return no(e) || da(e) || yn(e) || ro();
}
var ao = typeof global == "object" && global && global.Object === Object && global;
const va = ao;
var io = typeof self == "object" && self && self.Object === Object && self, oo = va || io || Function("return this")();
const se = oo;
var lo = se.Symbol;
const ie = lo;
var pa = Object.prototype, uo = pa.hasOwnProperty, co = pa.toString, Ge = ie ? ie.toStringTag : void 0;
function so(e) {
  var t = uo.call(e, Ge), n = e[Ge];
  try {
    e[Ge] = void 0;
    var r = !0;
  } catch {
  }
  var a = co.call(e);
  return r && (t ? e[Ge] = n : delete e[Ge]), a;
}
var fo = Object.prototype, vo = fo.toString;
function po(e) {
  return vo.call(e);
}
var mo = "[object Null]", go = "[object Undefined]", Jn = ie ? ie.toStringTag : void 0;
function Ee(e) {
  return e == null ? e === void 0 ? go : mo : Jn && Jn in Object(e) ? so(e) : po(e);
}
function ma(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var ho = ma(Object.getPrototypeOf, Object);
const bn = ho;
function ve(e) {
  return e != null && typeof e == "object";
}
var yo = "[object Object]", bo = Function.prototype, Co = Object.prototype, ga = bo.toString, xo = Co.hasOwnProperty, Oo = ga.call(Object);
function wo(e) {
  if (!ve(e) || Ee(e) != yo)
    return !1;
  var t = bn(e);
  if (t === null)
    return !0;
  var n = xo.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && ga.call(n) == Oo;
}
var $o = function(t, n) {
  var r = S({}, t);
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
const Po = $o;
function So(e) {
  return e && (e.type === Vi || e.type === Le && e.children.length === 0 || e.type === Gi && e.children.trim() === "");
}
function Cn() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = [];
  return e.forEach(function(n) {
    Array.isArray(n) ? t.push.apply(t, ae(n)) : (n == null ? void 0 : n.type) === Le ? t.push.apply(t, ae(Cn(n.children))) : t.push(n);
  }), t.filter(function(n) {
    return !So(n);
  });
}
function _o(e) {
  return Array.isArray(e) && e.length === 1 && (e = e[0]), e && e.__v_isVNode && Y(e.type) !== "symbol";
}
var Fe = function() {
  for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  return n;
}, ha = function(t) {
  var n = t;
  return n.install = function(r) {
    r.component(n.displayName || n.name, t);
  }, t;
};
function To(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, i;
  for (i = 0; i < r.length; i++)
    a = r[i], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function ya(e, t) {
  if (e == null)
    return {};
  var n = To(e, t), r, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      r = i[a], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
const Ao = {
  // Options.jsx
  items_per_page: "/ page",
  jump_to: "Go to",
  jump_to_confirm: "confirm",
  page: "",
  // Pagination.jsx
  prev_page: "Previous Page",
  next_page: "Next Page",
  prev_5: "Previous 5 Pages",
  next_5: "Next 5 Pages",
  prev_3: "Previous 3 Pages",
  next_3: "Next 3 Pages"
};
var Fo = {
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
const Io = Fo;
var Eo = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
};
const ba = Eo;
var jo = {
  lang: S({
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
  }, Io),
  timePickerLocale: S({}, ba)
};
const er = jo;
var Q = "${label} is not a valid ${type}", Mo = {
  locale: "en",
  Pagination: Ao,
  DatePicker: er,
  TimePicker: ba,
  Calendar: er,
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
    icon: "epic-icon"
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
const Xe = Mo, Ca = te({
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
  setup: function(t, n) {
    var r = n.slots, a = de("localeData", {}), i = P(function() {
      var o = t.componentName, u = o === void 0 ? "global" : o, c = t.defaultLocale, v = c || Xe[u || "global"], f = a.antLocale, d = u && f ? f[u] : {};
      return S(S({}, typeof v == "function" ? v() : v), d || {});
    }), l = P(function() {
      var o = a.antLocale, u = o && o.locale;
      return o && o.exist && !u ? Xe.locale : u;
    });
    return function() {
      var o = t.children || r.default, u = a.antLocale;
      return o == null ? void 0 : o(i.value, l.value, u);
    };
  }
});
function No(e, t, n) {
  var r = de("localeData", {}), a = P(function() {
    var i = r.antLocale, l = me(t) || Xe[e || "global"], o = e && i ? i[e] : {};
    return S(S(S({}, typeof l == "function" ? l() : l), o || {}), me(n) || {});
  });
  return [a];
}
var xa = function() {
  var t = be("empty", {}), n = t.getPrefixCls, r = n("empty-img-default");
  return y("svg", {
    class: r,
    width: "184",
    height: "152",
    viewBox: "0 0 184 152"
  }, [y("g", {
    fill: "none",
    "fill-rule": "evenodd"
  }, [y("g", {
    transform: "translate(24 31.67)"
  }, [y("ellipse", {
    class: "".concat(r, "-ellipse"),
    cx: "67.797",
    cy: "106.89",
    rx: "67.797",
    ry: "12.668"
  }, null), y("path", {
    class: "".concat(r, "-path-1"),
    d: "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"
  }, null), y("path", {
    class: "".concat(r, "-path-2"),
    d: "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",
    transform: "translate(13.56)"
  }, null), y("path", {
    class: "".concat(r, "-path-3"),
    d: "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
  }, null), y("path", {
    class: "".concat(r, "-path-4"),
    d: "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"
  }, null)]), y("path", {
    class: "".concat(r, "-path-5"),
    d: "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"
  }, null), y("g", {
    class: "".concat(r, "-g"),
    transform: "translate(149.65 15.383)"
  }, [y("ellipse", {
    cx: "20.654",
    cy: "3.167",
    rx: "2.849",
    ry: "2.815"
  }, null), y("path", {
    d: "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"
  }, null)])])]);
};
xa.PRESENTED_IMAGE_DEFAULT = !0;
const Lo = xa;
var Oa = function() {
  var t = be("empty", {}), n = t.getPrefixCls, r = n("empty-img-simple");
  return y("svg", {
    class: r,
    width: "64",
    height: "41",
    viewBox: "0 0 64 41"
  }, [y("g", {
    transform: "translate(0 1)",
    fill: "none",
    "fill-rule": "evenodd"
  }, [y("ellipse", {
    class: "".concat(r, "-ellipse"),
    fill: "#F5F5F5",
    cx: "32",
    cy: "33",
    rx: "32",
    ry: "7"
  }, null), y("g", {
    class: "".concat(r, "-g"),
    "fill-rule": "nonzero",
    stroke: "#D9D9D9"
  }, [y("path", {
    d: "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
  }, null), y("path", {
    d: "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",
    fill: "#FAFAFA",
    class: "".concat(r, "-path")
  }, null)])])]);
};
Oa.PRESENTED_IMAGE_SIMPLE = !0;
const Ro = Oa;
var wa = Hi({
  func: void 0,
  bool: void 0,
  string: void 0,
  number: void 0,
  array: void 0,
  object: void 0,
  integer: void 0
});
wa.extend([{
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
const ge = wa;
var Do = ["image", "description", "imageStyle", "class"], $a = y(Lo, null, null), Pa = y(Ro, null, null), De = function(t, n) {
  var r, a = n.slots, i = a === void 0 ? {} : a, l = n.attrs, o = be("empty", t), u = o.direction, c = o.prefixCls, v = c.value, f = S(S({}, t), l), d = f.image, s = d === void 0 ? $a : d, p = f.description, m = p === void 0 ? ((r = i.description) === null || r === void 0 ? void 0 : r.call(i)) || void 0 : p, b = f.imageStyle, x = f.class, C = x === void 0 ? "" : x, _ = ya(f, Do);
  return y(Ca, {
    componentName: "Empty",
    children: function(O) {
      var h, $ = typeof m < "u" ? m : O.description, T = typeof $ == "string" ? $ : "empty", F = null;
      return typeof s == "string" ? F = y("img", {
        alt: T,
        src: s
      }, null) : F = s, y("div", S({
        class: ue(v, C, (h = {}, E(h, "".concat(v, "-normal"), s === Pa), E(h, "".concat(v, "-rtl"), u.value === "rtl"), h))
      }, _), [y("div", {
        class: "".concat(v, "-image"),
        style: b
      }, [F]), $ && y("p", {
        class: "".concat(v, "-description")
      }, [$]), i.default && y("div", {
        class: "".concat(v, "-footer")
      }, [Cn(i.default())])]);
    }
  }, null);
};
De.displayName = "AEmpty";
De.PRESENTED_IMAGE_DEFAULT = $a;
De.PRESENTED_IMAGE_SIMPLE = Pa;
De.inheritAttrs = !1;
De.props = {
  prefixCls: String,
  image: ge.any,
  description: ge.any,
  imageStyle: {
    type: Object,
    default: void 0
  }
};
const ze = ha(De);
var Bo = function(t) {
  var n = be("empty", t), r = n.prefixCls, a = function(l) {
    switch (l) {
      case "Table":
      case "List":
        return y(ze, {
          image: ze.PRESENTED_IMAGE_SIMPLE
        }, null);
      case "Select":
      case "TreeSelect":
      case "Cascader":
      case "Transfer":
      case "Mentions":
        return y(ze, {
          image: ze.PRESENTED_IMAGE_SIMPLE,
          class: "".concat(r.value, "-small")
        }, null);
      default:
        return y(ze, null, null);
    }
  };
  return a(t.componentName);
};
function Sa(e) {
  return y(Bo, {
    componentName: e
  }, null);
}
var tr = {};
function mt(e, t) {
  process.env.NODE_ENV !== "production" && !e && console !== void 0 && console.error("Warning: ".concat(t));
}
function ko(e, t, n) {
  !t && !tr[n] && (e(!1, n), tr[n] = !0);
}
function _a(e, t) {
  ko(mt, e, t);
}
const ft = function(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
  _a(e, "[antdv: ".concat(t, "] ").concat(n));
};
var Wt = "internalMark", dt = te({
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
  setup: function(t, n) {
    var r = n.slots;
    ft(t.ANT_MARK__ === Wt, "LocaleProvider", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead");
    var a = he({
      antLocale: S(S({}, t.locale), {}, {
        exist: !0
      }),
      ANT_MARK__: Wt
    });
    return re("localeData", a), le(function() {
      return t.locale;
    }, function() {
      a.antLocale = S(S({}, t.locale), {}, {
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
dt.install = function(e) {
  return e.component(dt.name, dt), e;
};
const Vo = ha(dt);
Fe("bottomLeft", "bottomRight", "topLeft", "topRight");
var Ta = function(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = S(t ? {
    name: t,
    appear: !0,
    // appearFromClass: `${transitionName}-appear ${transitionName}-appear-prepare`,
    appearActiveClass: "".concat(t),
    appearToClass: "".concat(t, "-appear ").concat(t, "-appear-active"),
    enterFromClass: "".concat(t, "-appear ").concat(t, "-enter ").concat(t, "-appear-prepare ").concat(t, "-enter-prepare"),
    enterActiveClass: "".concat(t),
    enterToClass: "".concat(t, "-enter ").concat(t, "-appear ").concat(t, "-appear-active ").concat(t, "-enter-active"),
    leaveActiveClass: "".concat(t, " ").concat(t, "-leave"),
    leaveToClass: "".concat(t, "-leave-active")
  } : {
    css: !1
  }, n);
  return r;
};
const Go = te({
  name: "Notice",
  inheritAttrs: !1,
  props: ["prefixCls", "duration", "updateMark", "noticeKey", "closeIcon", "closable", "props", "onClick", "onClose", "holder", "visible"],
  setup: function(t, n) {
    var r = n.attrs, a = n.slots, i, l = !1, o = P(function() {
      return t.duration === void 0 ? 4.5 : t.duration;
    }), u = function() {
      o.value && !l && (i = setTimeout(function() {
        v();
      }, o.value * 1e3));
    }, c = function() {
      i && (clearTimeout(i), i = null);
    }, v = function(s) {
      s && s.stopPropagation(), c();
      var p = t.onClose, m = t.noticeKey;
      p && p(m);
    }, f = function() {
      c(), u();
    };
    return Ot(function() {
      u();
    }), zi(function() {
      l = !0, c();
    }), le([o, function() {
      return t.updateMark;
    }, function() {
      return t.visible;
    }], function(d, s) {
      var p = Ht(d, 3), m = p[0], b = p[1], x = p[2], C = Ht(s, 3), _ = C[0], g = C[1], O = C[2];
      (m !== _ || b !== g || x !== O && O) && f();
    }, {
      flush: "post"
    }), function() {
      var d, s, p = t.prefixCls, m = t.closable, b = t.closeIcon, x = b === void 0 ? (d = a.closeIcon) === null || d === void 0 ? void 0 : d.call(a) : b, C = t.onClick, _ = t.holder, g = r.class, O = r.style, h = "".concat(p, "-notice"), $ = Object.keys(r).reduce(function(F, R) {
        return (R.substr(0, 5) === "data-" || R.substr(0, 5) === "aria-" || R === "role") && (F[R] = r[R]), F;
      }, {}), T = y("div", S({
        class: ue(h, g, E({}, "".concat(h, "-closable"), m)),
        style: O,
        onMouseenter: c,
        onMouseleave: u,
        onClick: C
      }, $), [y("div", {
        class: "".concat(h, "-content")
      }, [(s = a.default) === null || s === void 0 ? void 0 : s.call(a)]), m ? y("a", {
        tabindex: 0,
        onClick: v,
        class: "".concat(h, "-close")
      }, [x || y("span", {
        class: "".concat(h, "-close-x")
      }, null)]) : null]);
      return _ ? y(qi, {
        to: _
      }, {
        default: function() {
          return T;
        }
      }) : T;
    };
  }
});
var zo = ["name", "getContainer", "appContext", "prefixCls", "rootPrefixCls", "transitionName", "hasTransitionName"], nr = 0, qo = Date.now();
function rr() {
  var e = nr;
  return nr += 1, "rcNotification_".concat(qo, "_").concat(e);
}
var Yt = te({
  name: "Notification",
  inheritAttrs: !1,
  props: ["prefixCls", "transitionName", "animation", "maxCount", "closeIcon"],
  setup: function(t, n) {
    var r = n.attrs, a = n.expose, i = n.slots, l = /* @__PURE__ */ new Map(), o = ee([]), u = P(function() {
      var f = t.prefixCls, d = t.animation, s = d === void 0 ? "fade" : d, p = t.transitionName;
      return !p && s && (p = "".concat(f, "-").concat(s)), Ta(p);
    }), c = function(d, s) {
      var p = d.key || rr(), m = S(S({}, d), {}, {
        key: p
      }), b = t.maxCount, x = o.value.map(function(_) {
        return _.notice.key;
      }).indexOf(p), C = o.value.concat();
      x !== -1 ? C.splice(x, 1, {
        notice: m,
        holderCallback: s
      }) : (b && o.value.length >= b && (m.key = C[0].notice.key, m.updateMark = rr(), m.userPassKey = p, C.shift()), C.push({
        notice: m,
        holderCallback: s
      })), o.value = C;
    }, v = function(d) {
      o.value = o.value.filter(function(s) {
        var p = s.notice, m = p.key, b = p.userPassKey, x = b || m;
        return x !== d;
      });
    };
    return a({
      add: c,
      remove: v,
      notices: o
    }), function() {
      var f, d, s = t.prefixCls, p = t.closeIcon, m = p === void 0 ? (f = i.closeIcon) === null || f === void 0 ? void 0 : f.call(i, {
        prefixCls: s
      }) : p, b = o.value.map(function(C, _) {
        var g = C.notice, O = C.holderCallback, h = _ === o.value.length - 1 ? g.updateMark : void 0, $ = g.key, T = g.userPassKey, F = g.content, R = S(S(S({
          prefixCls: s,
          closeIcon: typeof m == "function" ? m({
            prefixCls: s
          }) : m
        }, g), g.props), {}, {
          key: $,
          noticeKey: T || $,
          updateMark: h,
          onClose: function(D) {
            var U;
            v(D), (U = g.onClose) === null || U === void 0 || U.call(g);
          },
          onClick: g.onClick
        });
        return O ? y("div", {
          key: $,
          class: "".concat(s, "-hook-holder"),
          ref: function(D) {
            typeof $ > "u" || (D ? (l.set($, D), O(D, R)) : l.delete($));
          }
        }, null) : y(Go, R, {
          default: function() {
            return [typeof F == "function" ? F({
              prefixCls: s
            }) : F];
          }
        });
      }), x = (d = {}, E(d, s, 1), E(d, r.class, !!r.class), d);
      return y("div", {
        class: x,
        style: r.style || {
          top: "65px",
          left: "50%"
        }
      }, [y(oa, S({
        tag: "div"
      }, u.value), {
        default: function() {
          return [b];
        }
      })]);
    };
  }
});
Yt.newInstance = function(t, n) {
  var r = t || {}, a = r.name, i = a === void 0 ? "notification" : a, l = r.getContainer, o = r.appContext, u = r.prefixCls, c = r.rootPrefixCls, v = r.transitionName, f = r.hasTransitionName, d = ya(r, zo), s = document.createElement("div");
  if (l) {
    var p = l();
    p.appendChild(s);
  } else
    document.body.appendChild(s);
  var m = te({
    compatConfig: {
      MODE: 3
    },
    name: "NotificationWrapper",
    setup: function(C, _) {
      var g = _.attrs, O = ee();
      return Ot(function() {
        n({
          notice: function($) {
            var T;
            (T = O.value) === null || T === void 0 || T.add($);
          },
          removeNotice: function($) {
            var T;
            (T = O.value) === null || T === void 0 || T.remove($);
          },
          destroy: function() {
            Xn(null, s), s.parentNode && s.parentNode.removeChild(s);
          },
          component: O
        });
      }), function() {
        var h = J, $ = h.getPrefixCls(i, u), T = h.getRootPrefixCls(c, $), F = f ? v : "".concat(T, "-").concat(v);
        return y(We, S(S({}, h), {}, {
          notUpdateGlobalConfig: !0,
          prefixCls: T
        }), {
          default: function() {
            return [y(Yt, S(S({
              ref: O
            }, g), {}, {
              prefixCls: $,
              transitionName: F
            }), null)];
          }
        });
      };
    }
  }), b = y(m, d);
  b.appContext = o || b.appContext, Xn(b, s);
};
const Aa = Yt;
var Uo = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, name: "loading", theme: "outlined" };
const Ho = Uo;
var ar = [], qe = [], Wo = "insert-css: You need to provide a CSS string. Usage: insertCss(cssString[, options]).";
function Yo() {
  var e = document.createElement("style");
  return e.setAttribute("type", "text/css"), e;
}
function Ko(e, t) {
  if (t = t || {}, e === void 0)
    throw new Error(Wo);
  var n = t.prepend === !0 ? "prepend" : "append", r = t.container !== void 0 ? t.container : document.querySelector("head"), a = ar.indexOf(r);
  a === -1 && (a = ar.push(r) - 1, qe[a] = {});
  var i;
  return qe[a] !== void 0 && qe[a][n] !== void 0 ? i = qe[a][n] : (i = qe[a][n] = Yo(), n === "prepend" ? r.insertBefore(i, r.childNodes[0]) : r.appendChild(i)), e.charCodeAt(0) === 65279 && (e = e.substr(1, e.length)), i.styleSheet ? i.styleSheet.cssText += e : i.textContent += e, i;
}
function ir(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      Xo(e, a, n[a]);
    });
  }
  return e;
}
function Xo(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Qo(e, t) {
  process.env.NODE_ENV !== "production" && !e && console !== void 0 && console.error("Warning: ".concat(t));
}
function Zo(e, t) {
  Qo(e, "[@ant-design/icons-vue] ".concat(t));
}
function or(e) {
  return typeof e == "object" && typeof e.name == "string" && typeof e.theme == "string" && (typeof e.icon == "object" || typeof e.icon == "function");
}
function Kt(e, t, n) {
  return n ? Qn(e.tag, ir({
    key: t
  }, n, e.attrs), (e.children || []).map(function(r, a) {
    return Kt(r, "".concat(t, "-").concat(e.tag, "-").concat(a));
  })) : Qn(e.tag, ir({
    key: t
  }, e.attrs), (e.children || []).map(function(r, a) {
    return Kt(r, "".concat(t, "-").concat(e.tag, "-").concat(a));
  }));
}
function Fa(e) {
  return qt(e)[0];
}
function Ia(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
var Jo = `
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
`, lr = !1, el = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Jo;
  wt(function() {
    lr || (typeof window < "u" && window.document && window.document.documentElement && Ko(t, {
      prepend: !0
    }), lr = !0);
  });
}, tl = ["icon", "primaryColor", "secondaryColor"];
function nl(e, t) {
  if (e == null)
    return {};
  var n = rl(e, t), r, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      r = i[a], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function rl(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, i;
  for (i = 0; i < r.length; i++)
    a = r[i], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function vt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      al(e, a, n[a]);
    });
  }
  return e;
}
function al(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var He = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function il(e) {
  var t = e.primaryColor, n = e.secondaryColor;
  He.primaryColor = t, He.secondaryColor = n || Fa(t), He.calculated = !!n;
}
function ol() {
  return vt({}, He);
}
var Be = function(t, n) {
  var r = vt({}, t, n.attrs), a = r.icon, i = r.primaryColor, l = r.secondaryColor, o = nl(r, tl), u = He;
  if (i && (u = {
    primaryColor: i,
    secondaryColor: l || Fa(i)
  }), el(), Zo(or(a), "icon should be icon definiton, but got ".concat(a)), !or(a))
    return null;
  var c = a;
  return c && typeof c.icon == "function" && (c = vt({}, c, {
    icon: c.icon(u.primaryColor, u.secondaryColor)
  })), Kt(c.icon, "svg-".concat(c.name), vt({}, o, {
    "data-icon": c.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }));
};
Be.props = {
  icon: Object,
  primaryColor: String,
  secondaryColor: String,
  focusable: String
};
Be.inheritAttrs = !1;
Be.displayName = "IconBase";
Be.getTwoToneColors = ol;
Be.setTwoToneColors = il;
const xn = Be;
function ll(e, t) {
  return fl(e) || sl(e, t) || cl(e, t) || ul();
}
function ul() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function cl(e, t) {
  if (e) {
    if (typeof e == "string")
      return ur(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return ur(e, t);
  }
}
function ur(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function sl(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r = [], a = !0, i = !1, l, o;
    try {
      for (n = n.call(e); !(a = (l = n.next()).done) && (r.push(l.value), !(t && r.length === t)); a = !0)
        ;
    } catch (u) {
      i = !0, o = u;
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
function fl(e) {
  if (Array.isArray(e))
    return e;
}
function Ea(e) {
  var t = Ia(e), n = ll(t, 2), r = n[0], a = n[1];
  return xn.setTwoToneColors({
    primaryColor: r,
    secondaryColor: a
  });
}
function dl() {
  var e = xn.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var vl = ["class", "icon", "spin", "rotate", "tabindex", "twoToneColor", "onClick"];
function pl(e, t) {
  return yl(e) || hl(e, t) || gl(e, t) || ml();
}
function ml() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function gl(e, t) {
  if (e) {
    if (typeof e == "string")
      return cr(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return cr(e, t);
  }
}
function cr(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function hl(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r = [], a = !0, i = !1, l, o;
    try {
      for (n = n.call(e); !(a = (l = n.next()).done) && (r.push(l.value), !(t && r.length === t)); a = !0)
        ;
    } catch (u) {
      i = !0, o = u;
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
function yl(e) {
  if (Array.isArray(e))
    return e;
}
function sr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      Xt(e, a, n[a]);
    });
  }
  return e;
}
function Xt(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function bl(e, t) {
  if (e == null)
    return {};
  var n = Cl(e, t), r, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      r = i[a], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Cl(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, i;
  for (i = 0; i < r.length; i++)
    a = r[i], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
Ea("#1890ff");
var ke = function(t, n) {
  var r, a = sr({}, t, n.attrs), i = a.class, l = a.icon, o = a.spin, u = a.rotate, c = a.tabindex, v = a.twoToneColor, f = a.onClick, d = bl(a, vl), s = (r = {
    anticon: !0
  }, Xt(r, "anticon-".concat(l.name), !!l.name), Xt(r, i, i), r), p = o === "" || o || l.name === "loading" ? "anticon-spin" : "", m = c;
  m === void 0 && f && (m = -1, d.tabindex = m);
  var b = u ? {
    msTransform: "rotate(".concat(u, "deg)"),
    transform: "rotate(".concat(u, "deg)")
  } : void 0, x = Ia(v), C = pl(x, 2), _ = C[0], g = C[1];
  return y("span", sr({
    role: "img",
    "aria-label": l.name
  }, d, {
    onClick: f,
    class: s
  }), [y(xn, {
    class: p,
    icon: l,
    primaryColor: _,
    secondaryColor: g,
    style: b
  }, null)]);
};
ke.props = {
  spin: Boolean,
  rotate: Number,
  icon: Object,
  twoToneColor: String
};
ke.displayName = "AntdIcon";
ke.inheritAttrs = !1;
ke.getTwoToneColor = dl;
ke.setTwoToneColor = Ea;
const pe = ke;
function fr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      xl(e, a, n[a]);
    });
  }
  return e;
}
function xl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var On = function(t, n) {
  var r = fr({}, t, n.attrs);
  return y(pe, fr({}, r, {
    icon: Ho
  }), null);
};
On.displayName = "LoadingOutlined";
On.inheritAttrs = !1;
const ja = On;
var Ol = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "exclamation-circle", theme: "filled" };
const wl = Ol;
function dr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      $l(e, a, n[a]);
    });
  }
  return e;
}
function $l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var wn = function(t, n) {
  var r = dr({}, t, n.attrs);
  return y(pe, dr({}, r, {
    icon: wl
  }), null);
};
wn.displayName = "ExclamationCircleFilled";
wn.inheritAttrs = !1;
const Ma = wn;
var Pl = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z" } }] }, name: "close-circle", theme: "filled" };
const Sl = Pl;
function vr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      _l(e, a, n[a]);
    });
  }
  return e;
}
function _l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var $n = function(t, n) {
  var r = vr({}, t, n.attrs);
  return y(pe, vr({}, r, {
    icon: Sl
  }), null);
};
$n.displayName = "CloseCircleFilled";
$n.inheritAttrs = !1;
const Na = $n;
var Tl = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" } }] }, name: "check-circle", theme: "filled" };
const Al = Tl;
function pr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      Fl(e, a, n[a]);
    });
  }
  return e;
}
function Fl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Pn = function(t, n) {
  var r = pr({}, t, n.attrs);
  return y(pe, pr({}, r, {
    icon: Al
  }), null);
};
Pn.displayName = "CheckCircleFilled";
Pn.inheritAttrs = !1;
const La = Pn;
var Il = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "info-circle", theme: "filled" };
const El = Il;
function mr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      jl(e, a, n[a]);
    });
  }
  return e;
}
function jl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Sn = function(t, n) {
  var r = mr({}, t, n.attrs);
  return y(pe, mr({}, r, {
    icon: El
  }), null);
};
Sn.displayName = "InfoCircleFilled";
Sn.inheritAttrs = !1;
const Ml = Sn;
var Ra = 3, Da, W, Nl = 1, Ba = "", ka = "move-up", Va = !1, Ga = function() {
  return document.body;
}, za, qa = !1;
function Ll() {
  return Nl++;
}
function Rl(e) {
  e.top !== void 0 && (Da = e.top, W = null), e.duration !== void 0 && (Ra = e.duration), e.prefixCls !== void 0 && (Ba = e.prefixCls), e.getContainer !== void 0 && (Ga = e.getContainer, W = null), e.transitionName !== void 0 && (ka = e.transitionName, W = null, Va = !0), e.maxCount !== void 0 && (za = e.maxCount, W = null), e.rtl !== void 0 && (qa = e.rtl);
}
function Dl(e, t) {
  if (W) {
    t(W);
    return;
  }
  Aa.newInstance({
    appContext: e.appContext,
    prefixCls: e.prefixCls || Ba,
    rootPrefixCls: e.rootPrefixCls,
    transitionName: ka,
    hasTransitionName: Va,
    style: {
      top: Da
    },
    getContainer: Ga || e.getPopupContainer,
    maxCount: za,
    name: "message"
  }, function(n) {
    if (W) {
      t(W);
      return;
    }
    W = n, t(n);
  });
}
var Bl = {
  info: Ml,
  success: La,
  error: Na,
  warning: Ma,
  loading: ja
};
function kl(e) {
  var t = e.duration !== void 0 ? e.duration : Ra, n = e.key || Ll(), r = new Promise(function(i) {
    var l = function() {
      return typeof e.onClose == "function" && e.onClose(), i(!0);
    };
    Dl(e, function(o) {
      o.notice({
        key: n,
        duration: t,
        style: e.style || {},
        class: e.class,
        content: function(c) {
          var v, f = c.prefixCls, d = Bl[e.type], s = d ? y(d, null, null) : "", p = ue("".concat(f, "-custom-content"), (v = {}, E(v, "".concat(f, "-").concat(e.type), e.type), E(v, "".concat(f, "-rtl"), qa === !0), v));
          return y("div", {
            class: p
          }, [typeof e.icon == "function" ? e.icon() : e.icon || s, y("span", null, [typeof e.content == "function" ? e.content() : e.content])]);
        },
        onClose: l,
        onClick: e.onClick
      });
    });
  }), a = function() {
    W && W.removeNotice(n);
  };
  return a.then = function(i, l) {
    return r.then(i, l);
  }, a.promise = r, a;
}
function Vl(e) {
  return Object.prototype.toString.call(e) === "[object Object]" && !!e.content;
}
var gt = {
  open: kl,
  config: Rl,
  destroy: function(t) {
    if (W)
      if (t) {
        var n = W, r = n.removeNotice;
        r(t);
      } else {
        var a = W, i = a.destroy;
        i(), W = null;
      }
  }
};
function Gl(e, t) {
  e[t] = function(n, r, a) {
    return Vl(n) ? e.open(S(S({}, n), {}, {
      type: t
    })) : (typeof r == "function" && (a = r, r = void 0), e.open({
      content: n,
      duration: r,
      type: t,
      onClose: a
    }));
  };
}
["success", "info", "warning", "error", "loading"].forEach(function(e) {
  return Gl(gt, e);
});
gt.warn = gt.warning;
const zl = gt;
function gr(e, t, n, r, a, i, l) {
  try {
    var o = e[i](l), u = o.value;
  } catch (c) {
    n(c);
    return;
  }
  o.done ? t(u) : Promise.resolve(u).then(r, a);
}
function $t(e) {
  return function() {
    var t = this, n = arguments;
    return new Promise(function(r, a) {
      var i = e.apply(t, n);
      function l(u) {
        gr(i, r, a, l, o, "next", u);
      }
      function o(u) {
        gr(i, r, a, l, o, "throw", u);
      }
      l(void 0);
    });
  };
}
var ql = Wi();
const $e = /* @__PURE__ */ ca(ql);
var Ul = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z" } }, { tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }] }, name: "check-circle", theme: "outlined" };
const Hl = Ul;
function hr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      Wl(e, a, n[a]);
    });
  }
  return e;
}
function Wl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var _n = function(t, n) {
  var r = hr({}, t, n.attrs);
  return y(pe, hr({}, r, {
    icon: Hl
  }), null);
};
_n.displayName = "CheckCircleOutlined";
_n.inheritAttrs = !1;
const Yl = _n;
var Kl = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }, { tag: "path", attrs: { d: "M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z" } }] }, name: "info-circle", theme: "outlined" };
const Xl = Kl;
function yr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      Ql(e, a, n[a]);
    });
  }
  return e;
}
function Ql(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Tn = function(t, n) {
  var r = yr({}, t, n.attrs);
  return y(pe, yr({}, r, {
    icon: Xl
  }), null);
};
Tn.displayName = "InfoCircleOutlined";
Tn.inheritAttrs = !1;
const Zl = Tn;
var Jl = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 00-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z" } }, { tag: "path", attrs: { d: "M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }] }, name: "close-circle", theme: "outlined" };
const eu = Jl;
function br(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      tu(e, a, n[a]);
    });
  }
  return e;
}
function tu(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var An = function(t, n) {
  var r = br({}, t, n.attrs);
  return y(pe, br({}, r, {
    icon: eu
  }), null);
};
An.displayName = "CloseCircleOutlined";
An.inheritAttrs = !1;
const nu = An;
var ru = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }, { tag: "path", attrs: { d: "M464 688a48 48 0 1096 0 48 48 0 10-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z" } }] }, name: "exclamation-circle", theme: "outlined" };
const au = ru;
function Cr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      iu(e, a, n[a]);
    });
  }
  return e;
}
function iu(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Fn = function(t, n) {
  var r = Cr({}, t, n.attrs);
  return y(pe, Cr({}, r, {
    icon: au
  }), null);
};
Fn.displayName = "ExclamationCircleOutlined";
Fn.inheritAttrs = !1;
const ou = Fn;
var lu = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" } }] }, name: "close", theme: "outlined" };
const uu = lu;
function xr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      cu(e, a, n[a]);
    });
  }
  return e;
}
function cu(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var In = function(t, n) {
  var r = xr({}, t, n.attrs);
  return y(pe, xr({}, r, {
    icon: uu
  }), null);
};
In.displayName = "CloseOutlined";
In.inheritAttrs = !1;
const su = In;
var Te = {}, Ua = 4.5, Ha = "24px", Wa = "24px", Qt = "", Ya = "topRight", Ka = function() {
  return document.body;
}, Xa = null, Zt = !1, Qa;
function fu(e) {
  var t = e.duration, n = e.placement, r = e.bottom, a = e.top, i = e.getContainer, l = e.closeIcon, o = e.prefixCls;
  o !== void 0 && (Qt = o), t !== void 0 && (Ua = t), n !== void 0 && (Ya = n), r !== void 0 && (Wa = typeof r == "number" ? "".concat(r, "px") : r), a !== void 0 && (Ha = typeof a == "number" ? "".concat(a, "px") : a), i !== void 0 && (Ka = i), l !== void 0 && (Xa = l), e.rtl !== void 0 && (Zt = e.rtl), e.maxCount !== void 0 && (Qa = e.maxCount);
}
function du(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ha, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Wa, r;
  switch (e) {
    case "topLeft":
      r = {
        left: "0px",
        top: t,
        bottom: "auto"
      };
      break;
    case "topRight":
      r = {
        right: "0px",
        top: t,
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
function vu(e, t) {
  var n = e.prefixCls, r = e.placement, a = r === void 0 ? Ya : r, i = e.getContainer, l = i === void 0 ? Ka : i, o = e.top, u = e.bottom, c = e.closeIcon, v = c === void 0 ? Xa : c, f = e.appContext, d = Tu(), s = d.getPrefixCls, p = s("notification", n || Qt), m = "".concat(p, "-").concat(a, "-").concat(Zt), b = Te[m];
  if (b) {
    Promise.resolve(b).then(function(C) {
      t(C);
    });
    return;
  }
  var x = ue("".concat(p, "-").concat(a), E({}, "".concat(p, "-rtl"), Zt === !0));
  Aa.newInstance({
    name: "notification",
    prefixCls: n || Qt,
    class: x,
    style: du(a, o, u),
    appContext: f,
    getContainer: l,
    closeIcon: function(_) {
      var g = _.prefixCls, O = y("span", {
        class: "".concat(g, "-close-x")
      }, [Ue(v, {}, y(su, {
        class: "".concat(g, "-close-icon")
      }, null))]);
      return O;
    },
    maxCount: Qa,
    hasTransitionName: !0
  }, function(C) {
    Te[m] = C, t(C);
  });
}
var pu = {
  success: Yl,
  info: Zl,
  error: nu,
  warning: ou
};
function mu(e) {
  var t = e.icon, n = e.type, r = e.description, a = e.message, i = e.btn, l = e.duration === void 0 ? Ua : e.duration;
  vu(e, function(o) {
    o.notice({
      content: function(c) {
        var v = c.prefixCls, f = "".concat(v, "-notice"), d = null;
        if (t)
          d = function() {
            return y("span", {
              class: "".concat(f, "-icon")
            }, [Ue(t)]);
          };
        else if (n) {
          var s = pu[n];
          d = function() {
            return y(s, {
              class: "".concat(f, "-icon ").concat(f, "-icon-").concat(n)
            }, null);
          };
        }
        return y("div", {
          class: d ? "".concat(f, "-with-icon") : ""
        }, [d && d(), y("div", {
          class: "".concat(f, "-message")
        }, [!r && d ? y("span", {
          class: "".concat(f, "-message-single-line-auto-margin")
        }, null) : null, Ue(a)]), y("div", {
          class: "".concat(f, "-description")
        }, [Ue(r)]), i ? y("span", {
          class: "".concat(f, "-btn")
        }, [Ue(i)]) : null]);
      },
      duration: l,
      closable: !0,
      onClose: e.onClose,
      onClick: e.onClick,
      key: e.key,
      style: e.style || {},
      class: e.class
    });
  });
}
var Qe = {
  open: mu,
  close: function(t) {
    Object.keys(Te).forEach(function(n) {
      return Promise.resolve(Te[n]).then(function(r) {
        r.removeNotice(t);
      });
    });
  },
  config: fu,
  destroy: function() {
    Object.keys(Te).forEach(function(t) {
      Promise.resolve(Te[t]).then(function(n) {
        n.destroy();
      }), delete Te[t];
    });
  }
}, gu = ["success", "info", "warning", "error"];
gu.forEach(function(e) {
  Qe[e] = function(t) {
    return Qe.open(S(S({}, t), {}, {
      type: e
    }));
  };
});
Qe.warn = Qe.warning;
const hu = Qe;
function En() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var yu = "vc-util-key";
function Za() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : yu;
}
function jn(e) {
  if (e.attachTo)
    return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function Or(e) {
  var t, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!En())
    return null;
  var r = document.createElement("style");
  if ((t = n.csp) !== null && t !== void 0 && t.nonce) {
    var a;
    r.nonce = (a = n.csp) === null || a === void 0 ? void 0 : a.nonce;
  }
  r.innerHTML = e;
  var i = jn(n), l = i.firstChild;
  return n.prepend && i.prepend ? i.prepend(r) : n.prepend && l ? i.insertBefore(r, l) : i.appendChild(r), r;
}
var Jt = /* @__PURE__ */ new Map();
function bu(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = jn(t);
  return Array.from(Jt.get(n).children).find(function(r) {
    return r.tagName === "STYLE" && r.getAttribute(Za(t)) === e;
  });
}
function Cu(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = jn(n);
  if (!Jt.has(r)) {
    var a = Or("", n), i = a.parentNode;
    Jt.set(r, i), i.removeChild(a);
  }
  var l = bu(t, n);
  if (l) {
    var o, u;
    if ((o = n.csp) !== null && o !== void 0 && o.nonce && l.nonce !== ((u = n.csp) === null || u === void 0 ? void 0 : u.nonce)) {
      var c;
      l.nonce = (c = n.csp) === null || c === void 0 ? void 0 : c.nonce;
    }
    return l.innerHTML !== e && (l.innerHTML = e), l;
  }
  var v = Or(e, n);
  return v.setAttribute(Za(n), t), v;
}
const Ja = function(e, t, n) {
  _a(e, "[ant-design-vue: ".concat(t, "] ").concat(n));
};
var xu = "-ant-".concat(Date.now(), "-").concat(Math.random());
function Ou(e, t) {
  var n = {}, r = function(v, f) {
    var d = v.clone();
    return d = (f == null ? void 0 : f(d)) || d, d.toRgbString();
  }, a = function(v, f) {
    var d = new Mt(v), s = qt(d.toRgbString());
    n["".concat(f, "-color")] = r(d), n["".concat(f, "-color-disabled")] = s[1], n["".concat(f, "-color-hover")] = s[4], n["".concat(f, "-color-active")] = s[6], n["".concat(f, "-color-outline")] = d.clone().setAlpha(0.2).toRgbString(), n["".concat(f, "-color-deprecated-bg")] = s[1], n["".concat(f, "-color-deprecated-border")] = s[3];
  };
  if (t.primaryColor) {
    a(t.primaryColor, "primary");
    var i = new Mt(t.primaryColor), l = qt(i.toRgbString());
    l.forEach(function(c, v) {
      n["primary-".concat(v + 1)] = c;
    }), n["primary-color-deprecated-l-35"] = r(i, function(c) {
      return c.lighten(35);
    }), n["primary-color-deprecated-l-20"] = r(i, function(c) {
      return c.lighten(20);
    }), n["primary-color-deprecated-t-20"] = r(i, function(c) {
      return c.tint(20);
    }), n["primary-color-deprecated-t-50"] = r(i, function(c) {
      return c.tint(50);
    }), n["primary-color-deprecated-f-12"] = r(i, function(c) {
      return c.setAlpha(c.getAlpha() * 0.12);
    });
    var o = new Mt(l[0]);
    n["primary-color-active-deprecated-f-30"] = r(o, function(c) {
      return c.setAlpha(c.getAlpha() * 0.3);
    }), n["primary-color-active-deprecated-d-02"] = r(o, function(c) {
      return c.darken(2);
    });
  }
  t.successColor && a(t.successColor, "success"), t.warningColor && a(t.warningColor, "warning"), t.errorColor && a(t.errorColor, "error"), t.infoColor && a(t.infoColor, "info");
  var u = Object.keys(n).map(function(c) {
    return "--".concat(e, "-").concat(c, ": ").concat(n[c], ";");
  });
  En() ? Cu(`
  :root {
    `.concat(u.join(`
`), `
  }
  `), "".concat(xu, "-dynamic-theme")) : Ja(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
var ei = Symbol("GlobalFormContextKey"), wu = function(t) {
  re(ei, t);
}, $u = function() {
  return de(ei, {
    validateMessages: P(function() {
    })
  });
}, Pu = function() {
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
    // internal use
    notUpdateGlobalConfig: Boolean
  };
}, Su = "ant";
function Ne() {
  return J.prefixCls || Su;
}
var en = he({}), ti = he({}), J = he({});
nt(function() {
  oe(J, en, ti), J.prefixCls = Ne(), J.getPrefixCls = function(e, t) {
    return t || (e ? "".concat(J.prefixCls, "-").concat(e) : J.prefixCls);
  }, J.getRootPrefixCls = function(e, t) {
    return e || (J.prefixCls ? J.prefixCls : t && t.includes("-") ? t.replace(/^(.*)-[^-]*$/, "$1") : Ne());
  };
});
var Nt, _u = function(t) {
  Nt && Nt(), Nt = nt(function() {
    oe(ti, he(t)), oe(J, he(t));
  }), t.theme && Ou(Ne(), t.theme);
}, Tu = function() {
  return {
    getPrefixCls: function(n, r) {
      return r || (n ? "".concat(Ne(), "-").concat(n) : Ne());
    },
    getRootPrefixCls: function(n, r) {
      return n || (J.prefixCls ? J.prefixCls : r && r.includes("-") ? r.replace(/^(.*)-[^-]*$/, "$1") : Ne());
    }
  };
}, We = te({
  compatConfig: {
    MODE: 3
  },
  name: "AConfigProvider",
  inheritAttrs: !1,
  props: Pu(),
  setup: function(t, n) {
    var r = n.slots, a = function(f, d) {
      var s = t.prefixCls, p = s === void 0 ? "ant" : s;
      return d || (f ? "".concat(p, "-").concat(f) : p);
    }, i = function(f) {
      var d = t.renderEmpty || r.renderEmpty || Sa;
      return d(f);
    }, l = function(f, d) {
      var s = t.prefixCls;
      if (d)
        return d;
      var p = s || a("");
      return f ? "".concat(p, "-").concat(f) : p;
    }, o = he(S(S({}, t), {}, {
      getPrefixCls: l,
      renderEmpty: i
    }));
    Object.keys(t).forEach(function(v) {
      le(function() {
        return t[v];
      }, function() {
        o[v] = t[v];
      });
    }), t.notUpdateGlobalConfig || (oe(en, o), le(o, function() {
      oe(en, o);
    }));
    var u = P(function() {
      var v = {};
      if (t.locale) {
        var f, d;
        v = ((f = t.locale.Form) === null || f === void 0 ? void 0 : f.defaultValidateMessages) || ((d = Xe.Form) === null || d === void 0 ? void 0 : d.defaultValidateMessages) || {};
      }
      return t.form && t.form.validateMessages && (v = S(S({}, v), t.form.validateMessages)), v;
    });
    wu({
      validateMessages: u
    }), re("configProvider", o);
    var c = function(f) {
      var d;
      return y(Vo, {
        locale: t.locale || f,
        ANT_MARK__: Wt
      }, {
        default: function() {
          return [(d = r.default) === null || d === void 0 ? void 0 : d.call(r)];
        }
      });
    };
    return nt(function() {
      t.direction && (zl.config({
        rtl: t.direction === "rtl"
      }), hu.config({
        rtl: t.direction === "rtl"
      }));
    }), function() {
      return y(Ca, {
        children: function(f, d, s) {
          return c(s);
        }
      }, null);
    };
  }
}), Au = he({
  getPrefixCls: function(t, n) {
    return n || (t ? "ant-".concat(t) : "ant");
  },
  renderEmpty: Sa,
  direction: "ltr"
});
We.config = _u;
We.install = function(e) {
  e.component(We.name, We);
};
const be = function(e, t) {
  var n = de("configProvider", Au), r = P(function() {
    return n.getPrefixCls(e, t.prefixCls);
  }), a = P(function() {
    var C;
    return (C = t.direction) !== null && C !== void 0 ? C : n.direction;
  }), i = P(function() {
    return n.getPrefixCls();
  }), l = P(function() {
    return n.autoInsertSpaceInButton;
  }), o = P(function() {
    return n.renderEmpty;
  }), u = P(function() {
    return n.space;
  }), c = P(function() {
    return n.pageHeader;
  }), v = P(function() {
    return n.form;
  }), f = P(function() {
    return t.getTargetContainer || n.getTargetContainer;
  }), d = P(function() {
    return t.getPopupContainer || n.getPopupContainer;
  }), s = P(function() {
    var C;
    return (C = t.dropdownMatchSelectWidth) !== null && C !== void 0 ? C : n.dropdownMatchSelectWidth;
  }), p = P(function() {
    return (t.virtual === void 0 ? n.virtual !== !1 : t.virtual !== !1) && s.value !== !1;
  }), m = P(function() {
    return t.size || n.componentSize;
  }), b = P(function() {
    var C;
    return t.autocomplete || ((C = n.input) === null || C === void 0 ? void 0 : C.autocomplete);
  }), x = P(function() {
    return n.csp;
  });
  return {
    configProvider: n,
    prefixCls: r,
    direction: a,
    size: m,
    getTargetContainer: f,
    getPopupContainer: d,
    space: u,
    pageHeader: c,
    form: v,
    autoInsertSpaceInButton: l,
    renderEmpty: o,
    virtual: p,
    dropdownMatchSelectWidth: s,
    rootPrefixCls: i,
    getPrefixCls: n.getPrefixCls,
    autocomplete: b,
    csp: x
  };
};
function Fu(e) {
  return sa(e) || da(e) || yn(e) || fa();
}
function Iu() {
  this.__data__ = [], this.size = 0;
}
function Mn(e, t) {
  return e === t || e !== e && t !== t;
}
function Pt(e, t) {
  for (var n = e.length; n--; )
    if (Mn(e[n][0], t))
      return n;
  return -1;
}
var Eu = Array.prototype, ju = Eu.splice;
function Mu(e) {
  var t = this.__data__, n = Pt(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : ju.call(t, n, 1), --this.size, !0;
}
function Nu(e) {
  var t = this.__data__, n = Pt(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Lu(e) {
  return Pt(this.__data__, e) > -1;
}
function Ru(e, t) {
  var n = this.__data__, r = Pt(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function Ce(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Ce.prototype.clear = Iu;
Ce.prototype.delete = Mu;
Ce.prototype.get = Nu;
Ce.prototype.has = Lu;
Ce.prototype.set = Ru;
function Du() {
  this.__data__ = new Ce(), this.size = 0;
}
function Bu(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function ku(e) {
  return this.__data__.get(e);
}
function Vu(e) {
  return this.__data__.has(e);
}
function ye(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Gu = "[object AsyncFunction]", zu = "[object Function]", qu = "[object GeneratorFunction]", Uu = "[object Proxy]";
function ni(e) {
  if (!ye(e))
    return !1;
  var t = Ee(e);
  return t == zu || t == qu || t == Gu || t == Uu;
}
var Hu = se["__core-js_shared__"];
const Lt = Hu;
var wr = function() {
  var e = /[^.]+$/.exec(Lt && Lt.keys && Lt.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Wu(e) {
  return !!wr && wr in e;
}
var Yu = Function.prototype, Ku = Yu.toString;
function je(e) {
  if (e != null) {
    try {
      return Ku.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Xu = /[\\^$.*+?()[\]{}|]/g, Qu = /^\[object .+?Constructor\]$/, Zu = Function.prototype, Ju = Object.prototype, ec = Zu.toString, tc = Ju.hasOwnProperty, nc = RegExp(
  "^" + ec.call(tc).replace(Xu, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function rc(e) {
  if (!ye(e) || Wu(e))
    return !1;
  var t = ni(e) ? nc : Qu;
  return t.test(je(e));
}
function ac(e, t) {
  return e == null ? void 0 : e[t];
}
function Me(e, t) {
  var n = ac(e, t);
  return rc(n) ? n : void 0;
}
var ic = Me(se, "Map");
const Ze = ic;
var oc = Me(Object, "create");
const Je = oc;
function lc() {
  this.__data__ = Je ? Je(null) : {}, this.size = 0;
}
function uc(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var cc = "__lodash_hash_undefined__", sc = Object.prototype, fc = sc.hasOwnProperty;
function dc(e) {
  var t = this.__data__;
  if (Je) {
    var n = t[e];
    return n === cc ? void 0 : n;
  }
  return fc.call(t, e) ? t[e] : void 0;
}
var vc = Object.prototype, pc = vc.hasOwnProperty;
function mc(e) {
  var t = this.__data__;
  return Je ? t[e] !== void 0 : pc.call(t, e);
}
var gc = "__lodash_hash_undefined__";
function hc(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Je && t === void 0 ? gc : t, this;
}
function Ie(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Ie.prototype.clear = lc;
Ie.prototype.delete = uc;
Ie.prototype.get = dc;
Ie.prototype.has = mc;
Ie.prototype.set = hc;
function yc() {
  this.size = 0, this.__data__ = {
    hash: new Ie(),
    map: new (Ze || Ce)(),
    string: new Ie()
  };
}
function bc(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function St(e, t) {
  var n = e.__data__;
  return bc(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Cc(e) {
  var t = St(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function xc(e) {
  return St(this, e).get(e);
}
function Oc(e) {
  return St(this, e).has(e);
}
function wc(e, t) {
  var n = St(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function xe(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
xe.prototype.clear = yc;
xe.prototype.delete = Cc;
xe.prototype.get = xc;
xe.prototype.has = Oc;
xe.prototype.set = wc;
var $c = 200;
function Pc(e, t) {
  var n = this.__data__;
  if (n instanceof Ce) {
    var r = n.__data__;
    if (!Ze || r.length < $c - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new xe(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function fe(e) {
  var t = this.__data__ = new Ce(e);
  this.size = t.size;
}
fe.prototype.clear = Du;
fe.prototype.delete = Bu;
fe.prototype.get = ku;
fe.prototype.has = Vu;
fe.prototype.set = Pc;
var Sc = "__lodash_hash_undefined__";
function _c(e) {
  return this.__data__.set(e, Sc), this;
}
function Tc(e) {
  return this.__data__.has(e);
}
function et(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new xe(); ++t < n; )
    this.add(e[t]);
}
et.prototype.add = et.prototype.push = _c;
et.prototype.has = Tc;
function Ac(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function tn(e, t) {
  return e.has(t);
}
var Fc = 1, Ic = 2;
function ri(e, t, n, r, a, i) {
  var l = n & Fc, o = e.length, u = t.length;
  if (o != u && !(l && u > o))
    return !1;
  var c = i.get(e), v = i.get(t);
  if (c && v)
    return c == t && v == e;
  var f = -1, d = !0, s = n & Ic ? new et() : void 0;
  for (i.set(e, t), i.set(t, e); ++f < o; ) {
    var p = e[f], m = t[f];
    if (r)
      var b = l ? r(m, p, f, t, e, i) : r(p, m, f, e, t, i);
    if (b !== void 0) {
      if (b)
        continue;
      d = !1;
      break;
    }
    if (s) {
      if (!Ac(t, function(x, C) {
        if (!tn(s, C) && (p === x || a(p, x, n, r, i)))
          return s.push(C);
      })) {
        d = !1;
        break;
      }
    } else if (!(p === m || a(p, m, n, r, i))) {
      d = !1;
      break;
    }
  }
  return i.delete(e), i.delete(t), d;
}
var Ec = se.Uint8Array;
const ht = Ec;
function jc(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, a) {
    n[++t] = [a, r];
  }), n;
}
function Mc(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var Nc = 1, Lc = 2, Rc = "[object Boolean]", Dc = "[object Date]", Bc = "[object Error]", kc = "[object Map]", Vc = "[object Number]", Gc = "[object RegExp]", zc = "[object Set]", qc = "[object String]", Uc = "[object Symbol]", Hc = "[object ArrayBuffer]", Wc = "[object DataView]", $r = ie ? ie.prototype : void 0, Rt = $r ? $r.valueOf : void 0;
function Yc(e, t, n, r, a, i, l) {
  switch (n) {
    case Wc:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Hc:
      return !(e.byteLength != t.byteLength || !i(new ht(e), new ht(t)));
    case Rc:
    case Dc:
    case Vc:
      return Mn(+e, +t);
    case Bc:
      return e.name == t.name && e.message == t.message;
    case Gc:
    case qc:
      return e == t + "";
    case kc:
      var o = jc;
    case zc:
      var u = r & Nc;
      if (o || (o = Mc), e.size != t.size && !u)
        return !1;
      var c = l.get(e);
      if (c)
        return c == t;
      r |= Lc, l.set(e, t);
      var v = ri(o(e), o(t), r, a, i, l);
      return l.delete(e), v;
    case Uc:
      if (Rt)
        return Rt.call(e) == Rt.call(t);
  }
  return !1;
}
function Nn(e, t) {
  for (var n = -1, r = t.length, a = e.length; ++n < r; )
    e[a + n] = t[n];
  return e;
}
var Kc = Array.isArray;
const ce = Kc;
function ai(e, t, n) {
  var r = t(e);
  return ce(e) ? r : Nn(r, n(e));
}
function Xc(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, a = 0, i = []; ++n < r; ) {
    var l = e[n];
    t(l, n, e) && (i[a++] = l);
  }
  return i;
}
function ii() {
  return [];
}
var Qc = Object.prototype, Zc = Qc.propertyIsEnumerable, Pr = Object.getOwnPropertySymbols, Jc = Pr ? function(e) {
  return e == null ? [] : (e = Object(e), Xc(Pr(e), function(t) {
    return Zc.call(e, t);
  }));
} : ii;
const Ln = Jc;
function es(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var ts = "[object Arguments]";
function Sr(e) {
  return ve(e) && Ee(e) == ts;
}
var oi = Object.prototype, ns = oi.hasOwnProperty, rs = oi.propertyIsEnumerable, as = Sr(function() {
  return arguments;
}()) ? Sr : function(e) {
  return ve(e) && ns.call(e, "callee") && !rs.call(e, "callee");
};
const Rn = as;
function is() {
  return !1;
}
var li = typeof exports == "object" && exports && !exports.nodeType && exports, _r = li && typeof module == "object" && module && !module.nodeType && module, os = _r && _r.exports === li, Tr = os ? se.Buffer : void 0, ls = Tr ? Tr.isBuffer : void 0, us = ls || is;
const yt = us;
var cs = 9007199254740991, ss = /^(?:0|[1-9]\d*)$/;
function ui(e, t) {
  var n = typeof e;
  return t = t ?? cs, !!t && (n == "number" || n != "symbol" && ss.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var fs = 9007199254740991;
function Dn(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= fs;
}
var ds = "[object Arguments]", vs = "[object Array]", ps = "[object Boolean]", ms = "[object Date]", gs = "[object Error]", hs = "[object Function]", ys = "[object Map]", bs = "[object Number]", Cs = "[object Object]", xs = "[object RegExp]", Os = "[object Set]", ws = "[object String]", $s = "[object WeakMap]", Ps = "[object ArrayBuffer]", Ss = "[object DataView]", _s = "[object Float32Array]", Ts = "[object Float64Array]", As = "[object Int8Array]", Fs = "[object Int16Array]", Is = "[object Int32Array]", Es = "[object Uint8Array]", js = "[object Uint8ClampedArray]", Ms = "[object Uint16Array]", Ns = "[object Uint32Array]", L = {};
L[_s] = L[Ts] = L[As] = L[Fs] = L[Is] = L[Es] = L[js] = L[Ms] = L[Ns] = !0;
L[ds] = L[vs] = L[Ps] = L[ps] = L[Ss] = L[ms] = L[gs] = L[hs] = L[ys] = L[bs] = L[Cs] = L[xs] = L[Os] = L[ws] = L[$s] = !1;
function Ls(e) {
  return ve(e) && Dn(e.length) && !!L[Ee(e)];
}
function _t(e) {
  return function(t) {
    return e(t);
  };
}
var ci = typeof exports == "object" && exports && !exports.nodeType && exports, Ye = ci && typeof module == "object" && module && !module.nodeType && module, Rs = Ye && Ye.exports === ci, Dt = Rs && va.process, Ds = function() {
  try {
    var e = Ye && Ye.require && Ye.require("util").types;
    return e || Dt && Dt.binding && Dt.binding("util");
  } catch {
  }
}();
const Re = Ds;
var Ar = Re && Re.isTypedArray, Bs = Ar ? _t(Ar) : Ls;
const si = Bs;
var ks = Object.prototype, Vs = ks.hasOwnProperty;
function fi(e, t) {
  var n = ce(e), r = !n && Rn(e), a = !n && !r && yt(e), i = !n && !r && !a && si(e), l = n || r || a || i, o = l ? es(e.length, String) : [], u = o.length;
  for (var c in e)
    (t || Vs.call(e, c)) && !(l && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    ui(c, u))) && o.push(c);
  return o;
}
var Gs = Object.prototype;
function Bn(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || Gs;
  return e === n;
}
var zs = ma(Object.keys, Object);
const qs = zs;
var Us = Object.prototype, Hs = Us.hasOwnProperty;
function Ws(e) {
  if (!Bn(e))
    return qs(e);
  var t = [];
  for (var n in Object(e))
    Hs.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function Tt(e) {
  return e != null && Dn(e.length) && !ni(e);
}
function rt(e) {
  return Tt(e) ? fi(e) : Ws(e);
}
function nn(e) {
  return ai(e, rt, Ln);
}
var Ys = 1, Ks = Object.prototype, Xs = Ks.hasOwnProperty;
function Qs(e, t, n, r, a, i) {
  var l = n & Ys, o = nn(e), u = o.length, c = nn(t), v = c.length;
  if (u != v && !l)
    return !1;
  for (var f = u; f--; ) {
    var d = o[f];
    if (!(l ? d in t : Xs.call(t, d)))
      return !1;
  }
  var s = i.get(e), p = i.get(t);
  if (s && p)
    return s == t && p == e;
  var m = !0;
  i.set(e, t), i.set(t, e);
  for (var b = l; ++f < u; ) {
    d = o[f];
    var x = e[d], C = t[d];
    if (r)
      var _ = l ? r(C, x, d, t, e, i) : r(x, C, d, e, t, i);
    if (!(_ === void 0 ? x === C || a(x, C, n, r, i) : _)) {
      m = !1;
      break;
    }
    b || (b = d == "constructor");
  }
  if (m && !b) {
    var g = e.constructor, O = t.constructor;
    g != O && "constructor" in e && "constructor" in t && !(typeof g == "function" && g instanceof g && typeof O == "function" && O instanceof O) && (m = !1);
  }
  return i.delete(e), i.delete(t), m;
}
var Zs = Me(se, "DataView");
const rn = Zs;
var Js = Me(se, "Promise");
const an = Js;
var ef = Me(se, "Set");
const on = ef;
var tf = Me(se, "WeakMap");
const ln = tf;
var Fr = "[object Map]", nf = "[object Object]", Ir = "[object Promise]", Er = "[object Set]", jr = "[object WeakMap]", Mr = "[object DataView]", rf = je(rn), af = je(Ze), of = je(an), lf = je(on), uf = je(ln), _e = Ee;
(rn && _e(new rn(new ArrayBuffer(1))) != Mr || Ze && _e(new Ze()) != Fr || an && _e(an.resolve()) != Ir || on && _e(new on()) != Er || ln && _e(new ln()) != jr) && (_e = function(e) {
  var t = Ee(e), n = t == nf ? e.constructor : void 0, r = n ? je(n) : "";
  if (r)
    switch (r) {
      case rf:
        return Mr;
      case af:
        return Fr;
      case of:
        return Ir;
      case lf:
        return Er;
      case uf:
        return jr;
    }
  return t;
});
const tt = _e;
var cf = 1, Nr = "[object Arguments]", Lr = "[object Array]", lt = "[object Object]", sf = Object.prototype, Rr = sf.hasOwnProperty;
function ff(e, t, n, r, a, i) {
  var l = ce(e), o = ce(t), u = l ? Lr : tt(e), c = o ? Lr : tt(t);
  u = u == Nr ? lt : u, c = c == Nr ? lt : c;
  var v = u == lt, f = c == lt, d = u == c;
  if (d && yt(e)) {
    if (!yt(t))
      return !1;
    l = !0, v = !1;
  }
  if (d && !v)
    return i || (i = new fe()), l || si(e) ? ri(e, t, n, r, a, i) : Yc(e, t, u, n, r, a, i);
  if (!(n & cf)) {
    var s = v && Rr.call(e, "__wrapped__"), p = f && Rr.call(t, "__wrapped__");
    if (s || p) {
      var m = s ? e.value() : e, b = p ? t.value() : t;
      return i || (i = new fe()), a(m, b, n, r, i);
    }
  }
  return d ? (i || (i = new fe()), Qs(e, t, n, r, a, i)) : !1;
}
function At(e, t, n, r, a) {
  return e === t ? !0 : e == null || t == null || !ve(e) && !ve(t) ? e !== e && t !== t : ff(e, t, n, r, At, a);
}
function di(e, t) {
  return At(e, t);
}
var bt = Symbol("ContextProps"), Ct = Symbol("InternalContextProps"), df = function(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : P(function() {
    return !0;
  }), r = ee(/* @__PURE__ */ new Map()), a = function(u, c) {
    r.value.set(u, c), r.value = new Map(r.value);
  }, i = function(u) {
    r.value.delete(u), r.value = new Map(r.value);
  }, l = la();
  le([n, r], function() {
    if (process.env.NODE_ENV !== "production" && n.value && r.value.size > 1) {
      Ja(!1, "Form.Item", "FormItem can only collect one field item, you haved set ".concat(ae(r.value.values()).map(function(u) {
        return "`".concat(u.name, "`");
      }).join(", "), " ").concat(r.value.size, " field items.\n        You can set not need to be collected fields into `a-form-item-rest`"));
      for (var o = l; o.parent; )
        console.warn("at", o.type), o = o.parent;
    }
  }), re(bt, t), re(Ct, {
    addFormItemField: a,
    removeFormItemField: i
  });
}, un = {
  id: P(function() {
  }),
  onFieldBlur: function() {
  },
  onFieldChange: function() {
  },
  clearValidate: function() {
  }
}, cn = {
  addFormItemField: function() {
  },
  removeFormItemField: function() {
  }
}, vf = function() {
  var t = de(Ct, cn), n = Symbol("FormItemFieldKey"), r = la();
  return t.addFormItemField(n, r.type), hn(function() {
    t.removeFormItemField(n);
  }), re(Ct, cn), re(bt, un), de(bt, un);
};
const sn = te({
  compatConfig: {
    MODE: 3
  },
  name: "AFormItemRest",
  setup: function(t, n) {
    var r = n.slots;
    return re(Ct, cn), re(bt, un), function() {
      var a;
      return (a = r.default) === null || a === void 0 ? void 0 : a.call(r);
    };
  }
});
var Dr = ["xxxl", "xxl", "xl", "lg", "md", "sm", "xs"], ut = {
  xs: "(max-width: 575px)",
  sm: "(min-width: 576px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 992px)",
  xl: "(min-width: 1200px)",
  xxl: "(min-width: 1600px)",
  xxxl: "(min-width: 2000px)"
}, Se = /* @__PURE__ */ new Map(), Bt = -1, ct = {}, pf = {
  matchHandlers: {},
  dispatch: function(t) {
    return ct = t, Se.forEach(function(n) {
      return n(ct);
    }), Se.size >= 1;
  },
  subscribe: function(t) {
    return Se.size || this.register(), Bt += 1, Se.set(Bt, t), t(ct), Bt;
  },
  unsubscribe: function(t) {
    Se.delete(t), Se.size || this.unregister();
  },
  unregister: function() {
    var t = this;
    Object.keys(ut).forEach(function(n) {
      var r = ut[n], a = t.matchHandlers[r];
      a == null || a.mql.removeListener(a == null ? void 0 : a.listener);
    }), Se.clear();
  },
  register: function() {
    var t = this;
    Object.keys(ut).forEach(function(n) {
      var r = ut[n], a = function(o) {
        var u = o.matches;
        t.dispatch(S(S({}, ct), {}, E({}, n, u)));
      }, i = window.matchMedia(r);
      i.addListener(a), t.matchHandlers[r] = {
        mql: i,
        listener: a
      }, a(i);
    });
  }
};
const Br = pf;
var mf = Symbol("SizeProvider"), gf = function(t) {
  var n = t ? P(function() {
    return t.size;
  }) : de(mf, P(function() {
    return "default";
  }));
  return n;
};
function vi(e, t, n, r) {
  for (var a = e.length, i = n + (r ? 1 : -1); r ? i-- : ++i < a; )
    if (t(e[i], i, e))
      return i;
  return -1;
}
function hf(e) {
  return e !== e;
}
function yf(e, t, n) {
  for (var r = n - 1, a = e.length; ++r < a; )
    if (e[r] === t)
      return r;
  return -1;
}
function bf(e, t, n) {
  return t === t ? yf(e, t, n) : vi(e, hf, n);
}
function Cf(e, t) {
  var n = e == null ? 0 : e.length;
  return !!n && bf(e, t, 0) > -1;
}
function xf(e, t, n) {
  for (var r = -1, a = e == null ? 0 : e.length; ++r < a; )
    if (n(t, e[r]))
      return !0;
  return !1;
}
function pi(e, t) {
  if (e.classList)
    return e.classList.contains(t);
  var n = e.className;
  return " ".concat(n, " ").indexOf(" ".concat(t, " ")) > -1;
}
function kr(e, t) {
  e.classList ? e.classList.add(t) : pi(e, t) || (e.className = "".concat(e.className, " ").concat(t));
}
function Vr(e, t) {
  if (e.classList)
    e.classList.remove(t);
  else if (pi(e, t)) {
    var n = e.className;
    e.className = " ".concat(n, " ").replace(" ".concat(t, " "), " ");
  }
}
var Of = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "ant-motion-collapse", n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return {
    name: t,
    appear: n,
    css: !0,
    onBeforeEnter: function(a) {
      a.style.height = "0px", a.style.opacity = "0", kr(a, t);
    },
    onEnter: function(a) {
      wt(function() {
        a.style.height = "".concat(a.scrollHeight, "px"), a.style.opacity = "1";
      });
    },
    onAfterEnter: function(a) {
      a && (Vr(a, t), a.style.height = null, a.style.opacity = null);
    },
    onBeforeLeave: function(a) {
      kr(a, t), a.style.height = "".concat(a.offsetHeight, "px"), a.style.opacity = null;
    },
    onLeave: function(a) {
      setTimeout(function() {
        a.style.height = "0px", a.style.opacity = "0";
      });
    },
    onAfterLeave: function(a) {
      a && (Vr(a, t), a.style && (a.style.height = null, a.style.opacity = null));
    }
  };
};
const wf = Of;
function Ft(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, a = Array(r); ++n < r; )
    a[n] = t(e[n], n, e);
  return a;
}
var $f = "[object Symbol]";
function It(e) {
  return typeof e == "symbol" || ve(e) && Ee(e) == $f;
}
var Pf = 1 / 0, Gr = ie ? ie.prototype : void 0, zr = Gr ? Gr.toString : void 0;
function mi(e) {
  if (typeof e == "string")
    return e;
  if (ce(e))
    return Ft(e, mi) + "";
  if (It(e))
    return zr ? zr.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Pf ? "-0" : t;
}
function Sf(e, t, n) {
  var r = -1, a = e.length;
  t < 0 && (t = -t > a ? 0 : a + t), n = n > a ? a : n, n < 0 && (n += a), a = t > n ? 0 : n - t >>> 0, t >>>= 0;
  for (var i = Array(a); ++r < a; )
    i[r] = e[r + t];
  return i;
}
function _f(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
var Tf = /\s/;
function Af(e) {
  for (var t = e.length; t-- && Tf.test(e.charAt(t)); )
    ;
  return t;
}
var Ff = /^\s+/;
function If(e) {
  return e && e.slice(0, Af(e) + 1).replace(Ff, "");
}
var qr = 0 / 0, Ef = /^[-+]0x[0-9a-f]+$/i, jf = /^0b[01]+$/i, Mf = /^0o[0-7]+$/i, Nf = parseInt;
function fn(e) {
  if (typeof e == "number")
    return e;
  if (It(e))
    return qr;
  if (ye(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = ye(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = If(e);
  var n = jf.test(e);
  return n || Mf.test(e) ? Nf(e.slice(2), n ? 2 : 8) : Ef.test(e) ? qr : +e;
}
var Ur = 1 / 0, Lf = 17976931348623157e292;
function Rf(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = fn(e), e === Ur || e === -Ur) {
    var t = e < 0 ? -1 : 1;
    return t * Lf;
  }
  return e === e ? e : 0;
}
function Df(e) {
  var t = Rf(e), n = t % 1;
  return t === t ? n ? t - n : t : 0;
}
function Bf(e) {
  return e == null ? "" : mi(e);
}
var kf = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Vf = /^\w*$/;
function kn(e, t) {
  if (ce(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || It(e) ? !0 : Vf.test(e) || !kf.test(e) || t != null && e in Object(t);
}
var Gf = "Expected a function";
function Vn(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Gf);
  var n = function() {
    var r = arguments, a = t ? t.apply(this, r) : r[0], i = n.cache;
    if (i.has(a))
      return i.get(a);
    var l = e.apply(this, r);
    return n.cache = i.set(a, l) || i, l;
  };
  return n.cache = new (Vn.Cache || xe)(), n;
}
Vn.Cache = xe;
var zf = 500;
function qf(e) {
  var t = Vn(e, function(r) {
    return n.size === zf && n.clear(), r;
  }), n = t.cache;
  return t;
}
var Uf = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Hf = /\\(\\)?/g, Wf = qf(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Uf, function(n, r, a, i) {
    t.push(a ? i.replace(Hf, "$1") : r || n);
  }), t;
});
const Yf = Wf;
function Et(e, t) {
  return ce(e) ? e : kn(e, t) ? [e] : Yf(Bf(e));
}
var Kf = 1 / 0;
function at(e) {
  if (typeof e == "string" || It(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -Kf ? "-0" : t;
}
function Gn(e, t) {
  t = Et(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[at(t[n++])];
  return n && n == r ? e : void 0;
}
var Xf = function() {
  try {
    var e = Me(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const xt = Xf;
function gi(e, t, n) {
  t == "__proto__" && xt ? xt(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
var Qf = Object.prototype, Zf = Qf.hasOwnProperty;
function hi(e, t, n) {
  var r = e[t];
  (!(Zf.call(e, t) && Mn(r, n)) || n === void 0 && !(t in e)) && gi(e, t, n);
}
function Jf(e, t) {
  return e != null && t in Object(e);
}
function ed(e, t, n) {
  t = Et(t, e);
  for (var r = -1, a = t.length, i = !1; ++r < a; ) {
    var l = at(t[r]);
    if (!(i = e != null && n(e, l)))
      break;
    e = e[l];
  }
  return i || ++r != a ? i : (a = e == null ? 0 : e.length, !!a && Dn(a) && ui(l, a) && (ce(e) || Rn(e)));
}
function td(e, t) {
  return e != null && ed(e, t, Jf);
}
var Hr = ie ? ie.isConcatSpreadable : void 0;
function nd(e) {
  return ce(e) || Rn(e) || !!(Hr && e && e[Hr]);
}
function yi(e, t, n, r, a) {
  var i = -1, l = e.length;
  for (n || (n = nd), a || (a = []); ++i < l; ) {
    var o = e[i];
    t > 0 && n(o) ? t > 1 ? yi(o, t - 1, n, r, a) : Nn(a, o) : r || (a[a.length] = o);
  }
  return a;
}
function rd(e) {
  var t = e == null ? 0 : e.length;
  return t ? yi(e, 1) : [];
}
function ad(e, t, n) {
  switch (n.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, n[0]);
    case 2:
      return e.call(t, n[0], n[1]);
    case 3:
      return e.call(t, n[0], n[1], n[2]);
  }
  return e.apply(t, n);
}
var Wr = Math.max;
function bi(e, t, n) {
  return t = Wr(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, a = -1, i = Wr(r.length - t, 0), l = Array(i); ++a < i; )
      l[a] = r[t + a];
    a = -1;
    for (var o = Array(t + 1); ++a < t; )
      o[a] = r[a];
    return o[t] = n(l), ad(e, this, o);
  };
}
function id(e) {
  return function() {
    return e;
  };
}
function zn(e) {
  return e;
}
var od = xt ? function(e, t) {
  return xt(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: id(t),
    writable: !0
  });
} : zn;
const ld = od;
var ud = 800, cd = 16, sd = Date.now;
function fd(e) {
  var t = 0, n = 0;
  return function() {
    var r = sd(), a = cd - (r - n);
    if (n = r, a > 0) {
      if (++t >= ud)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var dd = fd(ld);
const Ci = dd;
function vd(e) {
  return Ci(bi(e, void 0, rd), e + "");
}
var pd = function() {
  return En() && window.document.documentElement;
}, st, md = function() {
  if (!pd())
    return !1;
  if (st !== void 0)
    return st;
  var t = document.createElement("div");
  return t.style.display = "flex", t.style.flexDirection = "column", t.style.rowGap = "1px", t.appendChild(document.createElement("div")), t.appendChild(document.createElement("div")), document.body.appendChild(t), st = t.scrollHeight === 1, document.body.removeChild(t), st;
};
const gd = function() {
  var e = ee(!1);
  return Ot(function() {
    e.value = md();
  }), e;
};
var xi = Symbol("rowContextKey"), hd = function(t) {
  re(xi, t);
}, yd = function() {
  return de(xi, {
    gutter: P(function() {
    }),
    wrap: P(function() {
    }),
    supportFlexGap: P(function() {
    })
  });
};
const bd = hd;
Fe("top", "middle", "bottom", "stretch");
Fe("start", "end", "center", "space-around", "space-between");
var Cd = function() {
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
}, xd = te({
  compatConfig: {
    MODE: 3
  },
  name: "ARow",
  props: Cd(),
  setup: function(t, n) {
    var r = n.slots, a = be("row", t), i = a.prefixCls, l = a.direction, o, u = ee({
      xs: !0,
      sm: !0,
      md: !0,
      lg: !0,
      xl: !0,
      xxl: !0,
      xxxl: !0
    }), c = gd();
    Ot(function() {
      o = Br.subscribe(function(s) {
        var p = t.gutter || 0;
        (!Array.isArray(p) && Y(p) === "object" || Array.isArray(p) && (Y(p[0]) === "object" || Y(p[1]) === "object")) && (u.value = s);
      });
    }), hn(function() {
      Br.unsubscribe(o);
    });
    var v = P(function() {
      var s = [0, 0], p = t.gutter, m = p === void 0 ? 0 : p, b = Array.isArray(m) ? m : [m, 0];
      return b.forEach(function(x, C) {
        if (Y(x) === "object")
          for (var _ = 0; _ < Dr.length; _++) {
            var g = Dr[_];
            if (u.value[g] && x[g] !== void 0) {
              s[C] = x[g];
              break;
            }
          }
        else
          s[C] = x || 0;
      }), s;
    });
    bd({
      gutter: v,
      supportFlexGap: c,
      wrap: P(function() {
        return t.wrap;
      })
    });
    var f = P(function() {
      var s;
      return ue(i.value, (s = {}, E(s, "".concat(i.value, "-no-wrap"), t.wrap === !1), E(s, "".concat(i.value, "-").concat(t.justify), t.justify), E(s, "".concat(i.value, "-").concat(t.align), t.align), E(s, "".concat(i.value, "-rtl"), l.value === "rtl"), s));
    }), d = P(function() {
      var s = v.value, p = {}, m = s[0] > 0 ? "".concat(s[0] / -2, "px") : void 0, b = s[1] > 0 ? "".concat(s[1] / -2, "px") : void 0;
      return m && (p.marginLeft = m, p.marginRight = m), c.value ? p.rowGap = "".concat(s[1], "px") : b && (p.marginTop = b, p.marginBottom = b), p;
    });
    return function() {
      var s;
      return y("div", {
        class: f.value,
        style: d.value
      }, [(s = r.default) === null || s === void 0 ? void 0 : s.call(r)]);
    };
  }
});
const Od = xd;
function wd(e) {
  return typeof e == "number" ? "".concat(e, " ").concat(e, " auto") : /^\d+(\.\d+)?(px|em|rem|%)$/.test(e) ? "0 0 ".concat(e) : e;
}
var $d = function() {
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
const Oi = te({
  compatConfig: {
    MODE: 3
  },
  name: "ACol",
  props: $d(),
  setup: function(t, n) {
    var r = n.slots, a = yd(), i = a.gutter, l = a.supportFlexGap, o = a.wrap, u = be("col", t), c = u.prefixCls, v = u.direction, f = P(function() {
      var s, p = t.span, m = t.order, b = t.offset, x = t.push, C = t.pull, _ = c.value, g = {};
      return ["xs", "sm", "md", "lg", "xl", "xxl", "xxxl"].forEach(function(O) {
        var h, $ = {}, T = t[O];
        typeof T == "number" ? $.span = T : Y(T) === "object" && ($ = T || {}), g = S(S({}, g), {}, (h = {}, E(h, "".concat(_, "-").concat(O, "-").concat($.span), $.span !== void 0), E(h, "".concat(_, "-").concat(O, "-order-").concat($.order), $.order || $.order === 0), E(h, "".concat(_, "-").concat(O, "-offset-").concat($.offset), $.offset || $.offset === 0), E(h, "".concat(_, "-").concat(O, "-push-").concat($.push), $.push || $.push === 0), E(h, "".concat(_, "-").concat(O, "-pull-").concat($.pull), $.pull || $.pull === 0), E(h, "".concat(_, "-rtl"), v.value === "rtl"), h));
      }), ue(_, (s = {}, E(s, "".concat(_, "-").concat(p), p !== void 0), E(s, "".concat(_, "-order-").concat(m), m), E(s, "".concat(_, "-offset-").concat(b), b), E(s, "".concat(_, "-push-").concat(x), x), E(s, "".concat(_, "-pull-").concat(C), C), s), g);
    }), d = P(function() {
      var s = t.flex, p = i.value, m = {};
      if (p && p[0] > 0) {
        var b = "".concat(p[0] / 2, "px");
        m.paddingLeft = b, m.paddingRight = b;
      }
      if (p && p[1] > 0 && !l.value) {
        var x = "".concat(p[1] / 2, "px");
        m.paddingTop = x, m.paddingBottom = x;
      }
      return s && (m.flex = wd(s), o.value === !1 && !m.minWidth && (m.minWidth = 0)), m;
    });
    return function() {
      var s;
      return y("div", {
        class: f.value,
        style: d.value
      }, [(s = r.default) === null || s === void 0 ? void 0 : s.call(r)]);
    };
  }
});
var Pd = function() {
  return se.Date.now();
};
const kt = Pd;
var Sd = "Expected a function", _d = Math.max, Td = Math.min;
function Ad(e, t, n) {
  var r, a, i, l, o, u, c = 0, v = !1, f = !1, d = !0;
  if (typeof e != "function")
    throw new TypeError(Sd);
  t = fn(t) || 0, ye(n) && (v = !!n.leading, f = "maxWait" in n, i = f ? _d(fn(n.maxWait) || 0, t) : i, d = "trailing" in n ? !!n.trailing : d);
  function s(h) {
    var $ = r, T = a;
    return r = a = void 0, c = h, l = e.apply(T, $), l;
  }
  function p(h) {
    return c = h, o = setTimeout(x, t), v ? s(h) : l;
  }
  function m(h) {
    var $ = h - u, T = h - c, F = t - $;
    return f ? Td(F, i - T) : F;
  }
  function b(h) {
    var $ = h - u, T = h - c;
    return u === void 0 || $ >= t || $ < 0 || f && T >= i;
  }
  function x() {
    var h = kt();
    if (b(h))
      return C(h);
    o = setTimeout(x, m(h));
  }
  function C(h) {
    return o = void 0, d && r ? s(h) : (r = a = void 0, l);
  }
  function _() {
    o !== void 0 && clearTimeout(o), c = 0, r = u = a = o = void 0;
  }
  function g() {
    return o === void 0 ? l : C(kt());
  }
  function O() {
    var h = kt(), $ = b(h);
    if (r = arguments, a = this, u = h, $) {
      if (o === void 0)
        return p(u);
      if (f)
        return clearTimeout(o), o = setTimeout(x, t), s(u);
    }
    return o === void 0 && (o = setTimeout(x, t)), l;
  }
  return O.cancel = _, O.flush = g, O;
}
function Fd(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1; )
    ;
  return e;
}
function it(e, t, n, r) {
  var a = !n;
  n || (n = {});
  for (var i = -1, l = t.length; ++i < l; ) {
    var o = t[i], u = r ? r(n[o], e[o], o, n, e) : void 0;
    u === void 0 && (u = e[o]), a ? gi(n, o, u) : hi(n, o, u);
  }
  return n;
}
function Id(e, t) {
  return e && it(t, rt(t), e);
}
function Ed(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var jd = Object.prototype, Md = jd.hasOwnProperty;
function Nd(e) {
  if (!ye(e))
    return Ed(e);
  var t = Bn(e), n = [];
  for (var r in e)
    r == "constructor" && (t || !Md.call(e, r)) || n.push(r);
  return n;
}
function qn(e) {
  return Tt(e) ? fi(e, !0) : Nd(e);
}
function Ld(e, t) {
  return e && it(t, qn(t), e);
}
var wi = typeof exports == "object" && exports && !exports.nodeType && exports, Yr = wi && typeof module == "object" && module && !module.nodeType && module, Rd = Yr && Yr.exports === wi, Kr = Rd ? se.Buffer : void 0, Xr = Kr ? Kr.allocUnsafe : void 0;
function Dd(e, t) {
  if (t)
    return e.slice();
  var n = e.length, r = Xr ? Xr(n) : new e.constructor(n);
  return e.copy(r), r;
}
function Bd(e, t) {
  var n = -1, r = e.length;
  for (t || (t = Array(r)); ++n < r; )
    t[n] = e[n];
  return t;
}
function kd(e, t) {
  return it(e, Ln(e), t);
}
var Vd = Object.getOwnPropertySymbols, Gd = Vd ? function(e) {
  for (var t = []; e; )
    Nn(t, Ln(e)), e = bn(e);
  return t;
} : ii;
const $i = Gd;
function zd(e, t) {
  return it(e, $i(e), t);
}
function Pi(e) {
  return ai(e, qn, $i);
}
var qd = Object.prototype, Ud = qd.hasOwnProperty;
function Hd(e) {
  var t = e.length, n = new e.constructor(t);
  return t && typeof e[0] == "string" && Ud.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
function Un(e) {
  var t = new e.constructor(e.byteLength);
  return new ht(t).set(new ht(e)), t;
}
function Wd(e, t) {
  var n = t ? Un(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.byteLength);
}
var Yd = /\w*$/;
function Kd(e) {
  var t = new e.constructor(e.source, Yd.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var Qr = ie ? ie.prototype : void 0, Zr = Qr ? Qr.valueOf : void 0;
function Xd(e) {
  return Zr ? Object(Zr.call(e)) : {};
}
function Qd(e, t) {
  var n = t ? Un(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
var Zd = "[object Boolean]", Jd = "[object Date]", ev = "[object Map]", tv = "[object Number]", nv = "[object RegExp]", rv = "[object Set]", av = "[object String]", iv = "[object Symbol]", ov = "[object ArrayBuffer]", lv = "[object DataView]", uv = "[object Float32Array]", cv = "[object Float64Array]", sv = "[object Int8Array]", fv = "[object Int16Array]", dv = "[object Int32Array]", vv = "[object Uint8Array]", pv = "[object Uint8ClampedArray]", mv = "[object Uint16Array]", gv = "[object Uint32Array]";
function hv(e, t, n) {
  var r = e.constructor;
  switch (t) {
    case ov:
      return Un(e);
    case Zd:
    case Jd:
      return new r(+e);
    case lv:
      return Wd(e, n);
    case uv:
    case cv:
    case sv:
    case fv:
    case dv:
    case vv:
    case pv:
    case mv:
    case gv:
      return Qd(e, n);
    case ev:
      return new r();
    case tv:
    case av:
      return new r(e);
    case nv:
      return Kd(e);
    case rv:
      return new r();
    case iv:
      return Xd(e);
  }
}
var Jr = Object.create, yv = function() {
  function e() {
  }
  return function(t) {
    if (!ye(t))
      return {};
    if (Jr)
      return Jr(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
}();
const bv = yv;
function Cv(e) {
  return typeof e.constructor == "function" && !Bn(e) ? bv(bn(e)) : {};
}
var xv = "[object Map]";
function Ov(e) {
  return ve(e) && tt(e) == xv;
}
var ea = Re && Re.isMap, wv = ea ? _t(ea) : Ov;
const $v = wv;
var Pv = "[object Set]";
function Sv(e) {
  return ve(e) && tt(e) == Pv;
}
var ta = Re && Re.isSet, _v = ta ? _t(ta) : Sv;
const Tv = _v;
var Av = 1, Fv = 2, Iv = 4, Si = "[object Arguments]", Ev = "[object Array]", jv = "[object Boolean]", Mv = "[object Date]", Nv = "[object Error]", _i = "[object Function]", Lv = "[object GeneratorFunction]", Rv = "[object Map]", Dv = "[object Number]", Ti = "[object Object]", Bv = "[object RegExp]", kv = "[object Set]", Vv = "[object String]", Gv = "[object Symbol]", zv = "[object WeakMap]", qv = "[object ArrayBuffer]", Uv = "[object DataView]", Hv = "[object Float32Array]", Wv = "[object Float64Array]", Yv = "[object Int8Array]", Kv = "[object Int16Array]", Xv = "[object Int32Array]", Qv = "[object Uint8Array]", Zv = "[object Uint8ClampedArray]", Jv = "[object Uint16Array]", ep = "[object Uint32Array]", N = {};
N[Si] = N[Ev] = N[qv] = N[Uv] = N[jv] = N[Mv] = N[Hv] = N[Wv] = N[Yv] = N[Kv] = N[Xv] = N[Rv] = N[Dv] = N[Ti] = N[Bv] = N[kv] = N[Vv] = N[Gv] = N[Qv] = N[Zv] = N[Jv] = N[ep] = !0;
N[Nv] = N[_i] = N[zv] = !1;
function Ke(e, t, n, r, a, i) {
  var l, o = t & Av, u = t & Fv, c = t & Iv;
  if (n && (l = a ? n(e, r, a, i) : n(e)), l !== void 0)
    return l;
  if (!ye(e))
    return e;
  var v = ce(e);
  if (v) {
    if (l = Hd(e), !o)
      return Bd(e, l);
  } else {
    var f = tt(e), d = f == _i || f == Lv;
    if (yt(e))
      return Dd(e, o);
    if (f == Ti || f == Si || d && !a) {
      if (l = u || d ? {} : Cv(e), !o)
        return u ? zd(e, Ld(l, e)) : kd(e, Id(l, e));
    } else {
      if (!N[f])
        return a ? e : {};
      l = hv(e, f, o);
    }
  }
  i || (i = new fe());
  var s = i.get(e);
  if (s)
    return s;
  i.set(e, l), Tv(e) ? e.forEach(function(b) {
    l.add(Ke(b, t, n, b, e, i));
  }) : $v(e) && e.forEach(function(b, x) {
    l.set(x, Ke(b, t, n, x, e, i));
  });
  var p = c ? u ? Pi : nn : u ? qn : rt, m = v ? void 0 : p(e);
  return Fd(m || e, function(b, x) {
    m && (x = b, b = e[x]), hi(l, x, Ke(b, t, n, x, e, i));
  }), l;
}
var tp = 1, np = 4;
function pt(e) {
  return Ke(e, tp | np);
}
function we(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function Ai(e, t) {
  for (var n = e, r = 0; r < t.length; r += 1) {
    if (n == null)
      return;
    n = n[t[r]];
  }
  return n;
}
function Fi(e, t, n, r) {
  if (!t.length)
    return n;
  var a = Fu(t), i = a[0], l = a.slice(1), o;
  return !e && typeof i == "number" ? o = [] : Array.isArray(e) ? o = ae(e) : o = S({}, e), r && n === void 0 && l.length === 1 ? delete o[i][l[0]] : o[i] = Fi(o[i], l, n, r), o;
}
function rp(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return t.length && r && n === void 0 && !Ai(e, t.slice(0, -1)) ? e : Fi(e, t, n, r);
}
function dn(e) {
  return we(e);
}
function ap(e, t) {
  var n = Ai(e, t);
  return n;
}
function ip(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1, a = rp(e, t, n, r);
  return a;
}
function op(e, t) {
  return e && e.some(function(n) {
    return up(n, t);
  });
}
function na(e) {
  return Y(e) === "object" && e !== null && Object.getPrototypeOf(e) === Object.prototype;
}
function Ii(e, t) {
  var n = Array.isArray(e) ? ae(e) : S({}, e);
  return t && Object.keys(t).forEach(function(r) {
    var a = n[r], i = t[r], l = na(a) && na(i);
    n[r] = l ? Ii(a, i || {}) : i;
  }), n;
}
function lp(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  return n.reduce(function(a, i) {
    return Ii(a, i);
  }, e);
}
function ra(e, t) {
  var n = {};
  return t.forEach(function(r) {
    var a = ap(e, r);
    n = ip(n, r, a);
  }), n;
}
function up(e, t) {
  return !e || !t || e.length !== t.length ? !1 : e.every(function(n, r) {
    return t[r] === n;
  });
}
var Z = "'${name}' is not a valid ${type}", jt = {
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
    string: Z,
    method: Z,
    array: Z,
    object: Z,
    number: Z,
    date: Z,
    boolean: Z,
    integer: Z,
    float: Z,
    regexp: Z,
    email: Z,
    url: Z,
    hex: Z
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
}, cp = Yi;
function sp(e, t) {
  return e.replace(/\$\{\w+\}/g, function(n) {
    var r = n.slice(2, -1);
    return t[r];
  });
}
function vn(e, t, n, r, a) {
  return pn.apply(this, arguments);
}
function pn() {
  return pn = $t(/* @__PURE__ */ $e.mark(function e(t, n, r, a, i) {
    var l, o, u, c, v, f, d, s;
    return $e.wrap(function(m) {
      for (; ; )
        switch (m.prev = m.next) {
          case 0:
            return l = S({}, r), delete l.ruleIndex, delete l.trigger, o = null, l && l.type === "array" && l.defaultField && (o = l.defaultField, delete l.defaultField), u = new cp(E({}, t, [l])), c = lp({}, jt, a.validateMessages), u.messages(c), v = [], m.prev = 9, m.next = 12, Promise.resolve(u.validate(E({}, t, n), S({}, a)));
          case 12:
            m.next = 17;
            break;
          case 14:
            m.prev = 14, m.t0 = m.catch(9), m.t0.errors ? v = m.t0.errors.map(function(b, x) {
              var C = b.message;
              return (
                // Wrap VueNode with `key`
                _o(C) ? Ui(C, {
                  key: "error_".concat(x)
                }) : C
              );
            }) : (console.error(m.t0), v = [c.default()]);
          case 17:
            if (!(!v.length && o)) {
              m.next = 22;
              break;
            }
            return m.next = 20, Promise.all(n.map(function(b, x) {
              return vn("".concat(t, ".").concat(x), b, o, a, i);
            }));
          case 20:
            return f = m.sent, m.abrupt("return", f.reduce(function(b, x) {
              return [].concat(ae(b), ae(x));
            }, []));
          case 22:
            return d = S(S({}, r), {}, {
              name: t,
              enum: (r.enum || []).join(", ")
            }, i), s = v.map(function(b) {
              return typeof b == "string" ? sp(b, d) : b;
            }), m.abrupt("return", s);
          case 25:
          case "end":
            return m.stop();
        }
    }, e, null, [[9, 14]]);
  })), pn.apply(this, arguments);
}
function Ei(e, t, n, r, a, i) {
  var l = e.join("."), o = n.map(function(v, f) {
    var d = v.validator, s = S(S({}, v), {}, {
      ruleIndex: f
    });
    return d && (s.validator = function(p, m, b) {
      var x = !1, C = function() {
        for (var O = arguments.length, h = new Array(O), $ = 0; $ < O; $++)
          h[$] = arguments[$];
        Promise.resolve().then(function() {
          mt(!x, "Your validator function has already return a promise. `callback` will be ignored."), x || b.apply(void 0, h);
        });
      }, _ = d(p, m, C);
      x = _ && typeof _.then == "function" && typeof _.catch == "function", mt(x, "`callback` is deprecated. Please return a promise instead."), x && _.then(function() {
        b();
      }).catch(function(g) {
        b(g || " ");
      });
    }), s;
  }).sort(function(v, f) {
    var d = v.warningOnly, s = v.ruleIndex, p = f.warningOnly, m = f.ruleIndex;
    return !!d == !!p ? s - m : d ? 1 : -1;
  }), u;
  if (a === !0)
    u = new Promise(/* @__PURE__ */ function() {
      var v = $t(/* @__PURE__ */ $e.mark(function f(d, s) {
        var p, m, b;
        return $e.wrap(function(C) {
          for (; ; )
            switch (C.prev = C.next) {
              case 0:
                p = 0;
              case 1:
                if (!(p < o.length)) {
                  C.next = 12;
                  break;
                }
                return m = o[p], C.next = 5, vn(l, t, m, r, i);
              case 5:
                if (b = C.sent, !b.length) {
                  C.next = 9;
                  break;
                }
                return s([{
                  errors: b,
                  rule: m
                }]), C.abrupt("return");
              case 9:
                p += 1, C.next = 1;
                break;
              case 12:
                d([]);
              case 13:
              case "end":
                return C.stop();
            }
        }, f);
      }));
      return function(f, d) {
        return v.apply(this, arguments);
      };
    }());
  else {
    var c = o.map(function(v) {
      return vn(l, t, v, r, i).then(function(f) {
        return {
          errors: f,
          rule: v
        };
      });
    });
    u = (a ? dp(c) : fp(c)).then(function(v) {
      return Promise.reject(v);
    });
  }
  return u.catch(function(v) {
    return v;
  }), u;
}
function fp(e) {
  return mn.apply(this, arguments);
}
function mn() {
  return mn = $t(/* @__PURE__ */ $e.mark(function e(t) {
    return $e.wrap(function(r) {
      for (; ; )
        switch (r.prev = r.next) {
          case 0:
            return r.abrupt("return", Promise.all(t).then(function(a) {
              var i, l = (i = []).concat.apply(i, ae(a));
              return l;
            }));
          case 1:
          case "end":
            return r.stop();
        }
    }, e);
  })), mn.apply(this, arguments);
}
function dp(e) {
  return gn.apply(this, arguments);
}
function gn() {
  return gn = $t(/* @__PURE__ */ $e.mark(function e(t) {
    var n;
    return $e.wrap(function(a) {
      for (; ; )
        switch (a.prev = a.next) {
          case 0:
            return n = 0, a.abrupt("return", new Promise(function(i) {
              t.forEach(function(l) {
                l.then(function(o) {
                  o.errors.length && i([o]), n += 1, n === t.length && i([]);
                });
              });
            }));
          case 2:
          case "end":
            return a.stop();
        }
    }, e);
  })), gn.apply(this, arguments);
}
var vp = 1, pp = 2;
function mp(e, t, n, r) {
  var a = n.length, i = a, l = !r;
  if (e == null)
    return !i;
  for (e = Object(e); a--; ) {
    var o = n[a];
    if (l && o[2] ? o[1] !== e[o[0]] : !(o[0] in e))
      return !1;
  }
  for (; ++a < i; ) {
    o = n[a];
    var u = o[0], c = e[u], v = o[1];
    if (l && o[2]) {
      if (c === void 0 && !(u in e))
        return !1;
    } else {
      var f = new fe();
      if (r)
        var d = r(c, v, u, e, t, f);
      if (!(d === void 0 ? At(v, c, vp | pp, r, f) : d))
        return !1;
    }
  }
  return !0;
}
function ji(e) {
  return e === e && !ye(e);
}
function gp(e) {
  for (var t = rt(e), n = t.length; n--; ) {
    var r = t[n], a = e[r];
    t[n] = [r, a, ji(a)];
  }
  return t;
}
function Mi(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function hp(e) {
  var t = gp(e);
  return t.length == 1 && t[0][2] ? Mi(t[0][0], t[0][1]) : function(n) {
    return n === e || mp(n, e, t);
  };
}
function yp(e, t, n) {
  var r = e == null ? void 0 : Gn(e, t);
  return r === void 0 ? n : r;
}
var bp = 1, Cp = 2;
function xp(e, t) {
  return kn(e) && ji(t) ? Mi(at(e), t) : function(n) {
    var r = yp(n, e);
    return r === void 0 && r === t ? td(n, e) : At(t, r, bp | Cp);
  };
}
function Op(e) {
  return function(t) {
    return Gn(t, e);
  };
}
function wp(e) {
  return kn(e) ? _f(at(e)) : Op(e);
}
function Ni(e) {
  return typeof e == "function" ? e : e == null ? zn : typeof e == "object" ? ce(e) ? xp(e[0], e[1]) : hp(e) : wp(e);
}
function $p(e) {
  return function(t, n, r) {
    var a = Object(t);
    if (!Tt(t)) {
      var i = Ni(n);
      t = rt(t), n = function(o) {
        return i(a[o], o, a);
      };
    }
    var l = e(t, n, r);
    return l > -1 ? a[i ? t[l] : l] : void 0;
  };
}
var Pp = Math.max;
function Sp(e, t, n) {
  var r = e == null ? 0 : e.length;
  if (!r)
    return -1;
  var a = n == null ? 0 : Df(n);
  return a < 0 && (a = Pp(r + a, 0)), vi(e, Ni(t), a);
}
var _p = $p(Sp);
const Tp = _p;
var Li = Symbol("formContextKey"), Ri = function(t) {
  re(Li, t);
}, Hn = function() {
  return de(Li, {
    name: P(function() {
    }),
    labelAlign: P(function() {
      return "right";
    }),
    vertical: P(function() {
      return !1;
    }),
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    addField: function(n, r) {
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    removeField: function(n) {
    },
    model: P(function() {
    }),
    rules: P(function() {
    }),
    colon: P(function() {
    }),
    labelWrap: P(function() {
    }),
    labelCol: P(function() {
    }),
    requiredMark: P(function() {
      return !1;
    }),
    validateTrigger: P(function() {
    }),
    onValidate: function() {
    },
    validateMessages: P(function() {
      return jt;
    })
  });
}, Di = Symbol("formItemPrefixContextKey"), Ap = function(t) {
  re(Di, t);
}, Fp = function() {
  return de(Di, {
    prefixCls: P(function() {
      return "";
    })
  });
}, Wn = function(t, n) {
  var r, a, i, l, o = n.slots, u = n.emit, c = n.attrs, v = S(S({}, t), c), f = v.prefixCls, d = v.htmlFor, s = v.labelCol, p = v.labelAlign, m = v.colon, b = v.required, x = v.requiredMark, C = No("Form"), _ = Ht(C, 1), g = _[0], O = (r = t.label) !== null && r !== void 0 ? r : (a = o.label) === null || a === void 0 ? void 0 : a.call(o);
  if (!O)
    return null;
  var h = Hn(), $ = h.vertical, T = h.labelAlign, F = h.labelCol, R = h.labelWrap, k = h.colon, D = s || (F == null ? void 0 : F.value) || {}, U = p || (T == null ? void 0 : T.value), H = "".concat(f, "-item-label"), z = ue(H, U === "left" && "".concat(H, "-left"), D.class, E({}, "".concat(H, "-wrap"), !!R.value)), V = O, I = m === !0 || (k == null ? void 0 : k.value) !== !1 && m !== !1, j = I && !$.value;
  if (j && typeof O == "string" && O.trim() !== "" && (V = O.replace(/[:|：]\s*$/, "")), V = y(Le, null, [V, (i = o.tooltip) === null || i === void 0 ? void 0 : i.call(o, {
    class: "".concat(f, "-item-tooltip")
  })]), x === "optional" && !b) {
    var w, A;
    V = y(Le, null, [V, y("span", {
      class: "".concat(f, "-item-optional")
    }, [((w = g.value) === null || w === void 0 ? void 0 : w.optional) || ((A = Xe.Form) === null || A === void 0 ? void 0 : A.optional)])]);
  }
  var M = ue((l = {}, E(l, "".concat(f, "-item-required"), b), E(l, "".concat(f, "-item-required-mark-optional"), x === "optional"), E(l, "".concat(f, "-item-no-colon"), !I), l));
  return y(Oi, S(S({}, D), {}, {
    class: z
  }), {
    default: function() {
      return [y("label", {
        for: d,
        class: M,
        title: typeof O == "string" ? O : "",
        onClick: function(K) {
          return u("click", K);
        }
      }, [V])];
    }
  });
};
Wn.displayName = "FormItemLabel";
Wn.inheritAttrs = !1;
const Ip = Wn, Ep = te({
  compatConfig: {
    MODE: 3
  },
  name: "ErrorList",
  props: ["errors", "help", "onDomErrorVisibleChange", "helpStatus", "warnings"],
  setup: function(t) {
    var n = be("", t), r = n.prefixCls, a = Fp(), i = a.prefixCls, l = a.status, o = P(function() {
      return "".concat(i.value, "-item-explain");
    }), u = P(function() {
      return !!(t.errors && t.errors.length);
    }), c = ee(l.value);
    return le([u, l], function() {
      u.value && (c.value = l.value);
    }), function() {
      var v, f, d = wf("".concat(r.value, "-show-help-item")), s = Ta("".concat(r.value, "-show-help-item"), d);
      return s.class = o.value, (v = t.errors) !== null && v !== void 0 && v.length ? y(oa, S(S({}, s), {}, {
        tag: "div"
      }), {
        default: function() {
          return [(f = t.errors) === null || f === void 0 ? void 0 : f.map(function(m, b) {
            return y("div", {
              key: b,
              role: "alert",
              class: c.value ? "".concat(o.value, "-").concat(c.value) : ""
            }, [m]);
          })];
        }
      }) : null;
    };
  }
});
var jp = {
  success: La,
  warning: Ma,
  error: Na,
  validating: ja
}, Mp = te({
  compatConfig: {
    MODE: 3
  },
  slots: ["help", "extra", "errors"],
  inheritAttrs: !1,
  props: ["prefixCls", "errors", "hasFeedback", "onDomErrorVisibleChange", "wrapperCol", "help", "extra", "status"],
  setup: function(t, n) {
    var r = n.slots, a = Hn(), i = a.wrapperCol, l = S({}, a);
    return delete l.labelCol, delete l.wrapperCol, Ri(l), Ap({
      prefixCls: P(function() {
        return t.prefixCls;
      }),
      status: P(function() {
        return t.status;
      })
    }), function() {
      var o, u, c, v = t.prefixCls, f = t.wrapperCol, d = t.help, s = d === void 0 ? (o = r.help) === null || o === void 0 ? void 0 : o.call(r) : d, p = t.errors, m = p === void 0 ? (u = r.errors) === null || u === void 0 ? void 0 : u.call(r) : p, b = t.hasFeedback, x = t.status, C = t.extra, _ = C === void 0 ? (c = r.extra) === null || c === void 0 ? void 0 : c.call(r) : C, g = "".concat(v, "-item"), O = f || (i == null ? void 0 : i.value) || {}, h = ue("".concat(g, "-control"), O.class), $ = x && jp[x];
      return y(Oi, S(S({}, O), {}, {
        class: h
      }), {
        default: function() {
          var F;
          return y(Le, null, [y("div", {
            class: "".concat(g, "-control-input")
          }, [y("div", {
            class: "".concat(g, "-control-input-content")
          }, [(F = r.default) === null || F === void 0 ? void 0 : F.call(r)]), b && $ ? y("span", {
            class: "".concat(g, "-children-icon")
          }, [y($, null, null)]) : null]), y(Ep, {
            errors: m,
            help: s,
            class: "".concat(g, "-explain-connected")
          }, null), _ ? y("div", {
            class: "".concat(g, "-extra")
          }, [_]) : null]);
        }
      });
    };
  }
});
const Np = Mp;
function Lp(e) {
  var t = ua(e.value.slice()), n = null;
  return nt(function() {
    clearTimeout(n), n = setTimeout(function() {
      t.value = e.value;
    }, e.value.length ? 0 : 10);
  }), t;
}
Fe("success", "warning", "error", "validating", "");
function Vt(e, t, n) {
  var r = e, a = t, i = 0;
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
var Rp = function() {
  return {
    htmlFor: String,
    prefixCls: String,
    label: ge.any,
    help: ge.any,
    extra: ge.any,
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
    labelAlign: String,
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
    validateStatus: ge.oneOf(Fe("", "success", "warning", "error", "validating")),
    validateTrigger: {
      type: [String, Array]
    },
    messageVariables: {
      type: Object
    },
    hidden: Boolean,
    noStyle: Boolean
  };
}, Dp = 0, Bp = "form_item";
const kp = te({
  compatConfig: {
    MODE: 3
  },
  name: "AFormItem",
  inheritAttrs: !1,
  __ANT_NEW_FORM_ITEM: !0,
  props: Rp(),
  slots: ["help", "label", "extra"],
  setup: function(t, n) {
    var r = n.slots, a = n.attrs, i = n.expose;
    mt(t.prop === void 0, "`prop` is deprecated. Please use `name` instead.");
    var l = "form-item-".concat(++Dp), o = be("form", t), u = o.prefixCls, c = Hn(), v = P(function() {
      return t.name || t.prop;
    }), f = ee([]), d = ee(!1), s = ee(), p = P(function() {
      var w = v.value;
      return dn(w);
    }), m = P(function() {
      if (p.value.length) {
        var w = c.name.value, A = p.value.join("_");
        return w ? "".concat(w, "_").concat(A) : "".concat(Bp, "_").concat(A);
      } else
        return;
    }), b = function() {
      var A = c.model.value;
      if (!(!A || !v.value))
        return Vt(A, p.value, !0).v;
    }, x = P(function() {
      return b();
    }), C = ee(pt(x.value)), _ = P(function() {
      var w = t.validateTrigger !== void 0 ? t.validateTrigger : c.validateTrigger.value;
      return w = w === void 0 ? "change" : w, we(w);
    }), g = P(function() {
      var w = c.rules.value, A = t.rules, M = t.required !== void 0 ? {
        required: !!t.required,
        trigger: _.value
      } : [], B = Vt(w, p.value);
      w = w ? B.o[B.k] || B.v : [];
      var G = [].concat(A || w || []);
      return Tp(G, function(K) {
        return K.required;
      }) ? G : G.concat(M);
    }), O = P(function() {
      var w = g.value, A = !1;
      return w && w.length && w.every(function(M) {
        return M.required ? (A = !0, !1) : !0;
      }), A || t.required;
    }), h = ee();
    nt(function() {
      h.value = t.validateStatus;
    });
    var $ = P(function() {
      var w = {};
      return typeof t.label == "string" ? w.label = t.label : t.name && (w.label = String(t.name)), t.messageVariables && (w = S(S({}, w), t.messageVariables)), w;
    }), T = function(A) {
      if (p.value.length !== 0) {
        var M = t.validateFirst, B = M === void 0 ? !1 : M, G = A || {}, K = G.triggerName, q = g.value;
        if (K && (q = q.filter(function(X) {
          var Pe = X.trigger;
          if (!Pe && !_.value.length)
            return !0;
          var Oe = we(Pe || _.value);
          return Oe.includes(K);
        })), !q.length)
          return Promise.resolve();
        var ne = Ei(p.value, x.value, q, S({
          validateMessages: c.validateMessages.value
        }, A), B, $.value);
        return h.value = "validating", f.value = [], ne.catch(function(X) {
          return X;
        }).then(function() {
          var X = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
          if (h.value === "validating") {
            var Pe = X.filter(function(Oe) {
              return Oe && Oe.errors.length;
            });
            h.value = Pe.length ? "error" : "success", f.value = Pe.map(function(Oe) {
              return Oe.errors;
            }), c.onValidate(v.value, !f.value.length, f.value.length ? zt(f.value[0]) : null);
          }
        }), ne;
      }
    }, F = function() {
      T({
        triggerName: "blur"
      });
    }, R = function() {
      if (d.value) {
        d.value = !1;
        return;
      }
      T({
        triggerName: "change"
      });
    }, k = function() {
      h.value = t.validateStatus, d.value = !1, f.value = [];
    }, D = function() {
      h.value = t.validateStatus, d.value = !0, f.value = [];
      var A = c.model.value || {}, M = x.value, B = Vt(A, p.value, !0);
      Array.isArray(M) ? B.o[B.k] = [].concat(C.value) : B.o[B.k] = C.value, wt(function() {
        d.value = !1;
      });
    }, U = P(function() {
      return t.htmlFor === void 0 ? m.value : t.htmlFor;
    }), H = function() {
      var A = U.value;
      if (!(!A || !s.value)) {
        var M = s.value.$el.querySelector('[id="'.concat(A, '"]'));
        M && M.focus && M.focus();
      }
    };
    i({
      onFieldBlur: F,
      onFieldChange: R,
      clearValidate: k,
      resetField: D
    }), df({
      id: m,
      onFieldBlur: function() {
        t.autoLink && F();
      },
      onFieldChange: function() {
        t.autoLink && R();
      },
      clearValidate: k
    }, P(function() {
      return !!(t.autoLink && c.model.value && v.value);
    }));
    var z = !1;
    le(v, function(w) {
      w ? z || (z = !0, c.addField(l, {
        fieldValue: x,
        fieldId: m,
        fieldName: v,
        resetField: D,
        clearValidate: k,
        namePath: p,
        validateRules: T,
        rules: g
      })) : (z = !1, c.removeField(l));
    }, {
      immediate: !0
    }), hn(function() {
      c.removeField(l);
    });
    var V = Lp(f), I = P(function() {
      return t.validateStatus !== void 0 ? t.validateStatus : V.value.length ? "error" : h.value;
    }), j = P(function() {
      var w;
      return w = {}, E(w, "".concat(u.value, "-item"), !0), E(w, "".concat(u.value, "-item-has-feedback"), I.value && t.hasFeedback), E(w, "".concat(u.value, "-item-has-success"), I.value === "success"), E(w, "".concat(u.value, "-item-has-warning"), I.value === "warning"), E(w, "".concat(u.value, "-item-has-error"), I.value === "error"), E(w, "".concat(u.value, "-item-is-validating"), I.value === "validating"), E(w, "".concat(u.value, "-item-hidden"), t.hidden), w;
    });
    return function() {
      var w, A;
      if (t.noStyle)
        return (w = r.default) === null || w === void 0 ? void 0 : w.call(r);
      var M = (A = t.help) !== null && A !== void 0 ? A : r.help ? Cn(r.help()) : null;
      return y(Od, S(S({}, a), {}, {
        class: [j.value, M != null || V.value.length ? "".concat(u.value, "-item-with-help") : "", a.class],
        key: "row"
      }), {
        default: function() {
          var G, K, q, ne;
          return y(Le, null, [y(Ip, S(S({}, t), {}, {
            htmlFor: U.value,
            required: O.value,
            requiredMark: c.requiredMark.value,
            prefixCls: u.value,
            onClick: H,
            label: (G = t.label) !== null && G !== void 0 ? G : (K = r.label) === null || K === void 0 ? void 0 : K.call(r)
          }), null), y(Np, S(S({}, t), {}, {
            errors: M != null ? we(M) : V.value,
            prefixCls: u.value,
            status: I.value,
            ref: s,
            help: M,
            extra: (q = t.extra) !== null && q !== void 0 ? q : (ne = r.extra) === null || ne === void 0 ? void 0 : ne.call(r)
          }), {
            default: r.default
          })]);
        }
      });
    };
  }
});
function Bi(e) {
  var t = !1, n = e.length, r = [];
  return e.length ? new Promise(function(a, i) {
    e.forEach(function(l, o) {
      l.catch(function(u) {
        return t = !0, u;
      }).then(function(u) {
        n -= 1, r[o] = u, !(n > 0) && (t && i(r), a(r));
      });
    });
  }) : Promise.resolve([]);
}
var Vp = Ki();
const Gp = /* @__PURE__ */ ca(Vp);
var zp = Math.min;
function qp(e, t, n) {
  for (var r = n ? xf : Cf, a = e[0].length, i = e.length, l = i, o = Array(i), u = 1 / 0, c = []; l--; ) {
    var v = e[l];
    l && t && (v = Ft(v, _t(t))), u = zp(v.length, u), o[l] = !n && (t || a >= 120 && v.length >= 120) ? new et(l && v) : void 0;
  }
  v = e[0];
  var f = -1, d = o[0];
  e:
    for (; ++f < a && c.length < u; ) {
      var s = v[f], p = t ? t(s) : s;
      if (s = n || s !== 0 ? s : 0, !(d ? tn(d, p) : r(c, p, n))) {
        for (l = i; --l; ) {
          var m = o[l];
          if (!(m ? tn(m, p) : r(e[l], p, n)))
            continue e;
        }
        d && d.push(p), c.push(s);
      }
    }
  return c;
}
function Up(e, t) {
  return Ci(bi(e, t, zn), e + "");
}
function Hp(e) {
  return ve(e) && Tt(e);
}
function Wp(e) {
  return Hp(e) ? e : [];
}
var Yp = Up(function(e) {
  var t = Ft(e, Wp);
  return t.length && t[0] === e[0] ? qp(t) : [];
});
const Kp = Yp;
function Xp(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function Qp(e, t) {
  return t.length < 2 ? e : Gn(e, Sf(t, 0, -1));
}
function Zp(e, t) {
  return t = Et(t, e), e = Qp(e, t), e == null || delete e[at(Xp(t))];
}
function Jp(e) {
  return wo(e) ? void 0 : e;
}
var em = 1, tm = 2, nm = 4, rm = vd(function(e, t) {
  var n = {};
  if (e == null)
    return n;
  var r = !1;
  t = Ft(t, function(i) {
    return i = Et(i, e), r || (r = i.length > 1), i;
  }), it(e, Pi(e), n), r && (n = Ke(n, em | tm | nm, Jp));
  for (var a = t.length; a--; )
    Zp(n, t[a]);
  return n;
});
const am = rm;
function aa(e) {
  var t = !1;
  return e && e.length && e.every(function(n) {
    return n.required ? (t = !0, !1) : !0;
  }), t;
}
function ia(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function Gt(e, t, n) {
  var r = e;
  t = t.replace(/\[(\w+)\]/g, ".$1"), t = t.replace(/^\./, "");
  for (var a = t.split("."), i = 0, l = a.length; i < l - 1 && !(!r && !n); ++i) {
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
function im(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ee({}), n = arguments.length > 2 ? arguments[2] : void 0, r = pt(me(e)), a = he({}), i = ua([]), l = function(g) {
    oe(me(e), S(S({}, pt(r)), g)), wt(function() {
      Object.keys(a).forEach(function(O) {
        a[O] = {
          autoLink: !1,
          required: aa(me(t)[O])
        };
      });
    });
  }, o = function() {
    var g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], O = arguments.length > 1 ? arguments[1] : void 0;
    return O.length ? g.filter(function(h) {
      var $ = ia(h.trigger || "change");
      return Kp($, O).length;
    }) : g;
  }, u = null, c = function(g) {
    for (var O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, h = arguments.length > 2 ? arguments[2] : void 0, $ = [], T = {}, F = function() {
      var z = g[R], V = Gt(me(e), z, h);
      if (!V.isValid)
        return "continue";
      T[z] = V.v;
      var I = o(me(t)[z], ia(O && O.trigger));
      I.length && $.push(v(z, V.v, I, O || {}).then(function() {
        return {
          name: z,
          errors: [],
          warnings: []
        };
      }).catch(function(j) {
        var w = [], A = [];
        return j.forEach(function(M) {
          var B = M.rule.warningOnly, G = M.errors;
          B ? A.push.apply(A, ae(G)) : w.push.apply(w, ae(G));
        }), w.length ? Promise.reject({
          name: z,
          errors: w,
          warnings: A
        }) : {
          name: z,
          errors: w,
          warnings: A
        };
      }));
    }, R = 0; R < g.length; R++)
      var k = F();
    var D = Bi($);
    u = D;
    var U = D.then(function() {
      return u === D ? Promise.resolve(T) : Promise.reject([]);
    }).catch(function(H) {
      var z = H.filter(function(V) {
        return V && V.errors.length;
      });
      return Promise.reject({
        values: T,
        errorFields: z,
        outOfDate: u !== D
      });
    });
    return U.catch(function(H) {
      return H;
    }), U;
  }, v = function(g, O, h) {
    var $ = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, T = Ei([g], O, h, S({
      validateMessages: jt
    }, $), !!$.validateFirst);
    return a[g] ? (a[g].validateStatus = "validating", T.catch(function(F) {
      return F;
    }).then(function() {
      var F = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      if (a[g].validateStatus === "validating") {
        var R, k = F.filter(function(D) {
          return D && D.errors.length;
        });
        a[g].validateStatus = k.length ? "error" : "success", a[g].help = k.length ? k.map(function(D) {
          return D.errors;
        }) : null, n == null || (R = n.onValidate) === null || R === void 0 || R.call(n, g, !k.length, k.length ? zt(a[g].help[0]) : null);
      }
    }), T) : T.catch(function(F) {
      return F;
    });
  }, f = function(g, O) {
    var h = [], $ = !0;
    g ? Array.isArray(g) ? h = g : h = [g] : ($ = !1, h = i.value);
    var T = c(h, O || {}, $);
    return T.catch(function(F) {
      return F;
    }), T;
  }, d = function(g) {
    var O = [];
    g ? Array.isArray(g) ? O = g : O = [g] : O = i.value, O.forEach(function(h) {
      a[h] && oe(a[h], {
        validateStatus: "",
        help: null
      });
    });
  }, s = function(g) {
    for (var O = {
      autoLink: !1
    }, h = [], $ = Array.isArray(g) ? g : [g], T = 0; T < $.length; T++) {
      var F = $[T];
      (F == null ? void 0 : F.validateStatus) === "error" && (O.validateStatus = "error", F.help && h.push(F.help)), O.required = O.required || (F == null ? void 0 : F.required);
    }
    return O.help = h, O;
  }, p = r, m = !0, b = function(g) {
    var O = [];
    i.value.forEach(function(h) {
      var $ = Gt(g, h, !1), T = Gt(p, h, !1), F = m && (n == null ? void 0 : n.immediate) && $.isValid;
      (F || !di($.v, T.v)) && O.push(h);
    }), f(O, {
      trigger: "change"
    }), m = !1, p = pt(zt(g));
  }, x = n == null ? void 0 : n.debounce, C = !0;
  return le(t, function() {
    i.value = t ? Object.keys(me(t)) : [], !C && n && n.validateOnRuleChange && f(), C = !1;
  }, {
    deep: !0,
    immediate: !0
  }), le(i, function() {
    var _ = {};
    i.value.forEach(function(O) {
      _[O] = oe({}, a[O], {
        autoLink: !1,
        required: aa(me(t)[O])
      }), delete a[O];
    });
    for (var g in a)
      Object.prototype.hasOwnProperty.call(a, g) && delete a[g];
    oe(a, _);
  }, {
    immediate: !0
  }), le(e, x && x.wait ? Ad(b, x.wait, am(x, ["wait"])) : b, {
    immediate: n && !!n.immediate,
    deep: !0
  }), {
    modelRef: e,
    rulesRef: t,
    initialModel: r,
    validateInfos: a,
    resetFields: l,
    validate: f,
    validateField: v,
    mergeValidateInfo: s,
    clearValidate: d
  };
}
var om = function() {
  return {
    layout: ge.oneOf(Fe("horizontal", "inline", "vertical")),
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
    labelAlign: ge.oneOf(Fe("left", "right")),
    labelWrap: {
      type: Boolean,
      default: void 0
    },
    prefixCls: String,
    requiredMark: {
      type: [String, Boolean],
      default: void 0
    },
    /** @deprecated Will warning in future branch. Pls use `requiredMark` instead. */
    hideRequiredMark: {
      type: Boolean,
      default: void 0
    },
    model: ge.object,
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
    // 提交失败自动滚动到第一个错误字段
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
function lm(e, t) {
  return di(we(e), we(t));
}
var um = te({
  compatConfig: {
    MODE: 3
  },
  name: "AForm",
  inheritAttrs: !1,
  props: Po(om(), {
    layout: "horizontal",
    hideRequiredMark: !1,
    colon: !0
  }),
  Item: kp,
  useForm: im,
  // emits: ['finishFailed', 'submit', 'finish', 'validate'],
  setup: function(t, n) {
    var r = n.emit, a = n.slots, i = n.expose, l = n.attrs, o = gf(t), u = be("form", t), c = u.prefixCls, v = u.direction, f = u.form, d = P(function() {
      return t.requiredMark === "" || t.requiredMark;
    }), s = P(function() {
      var I;
      return d.value !== void 0 ? d.value : f && ((I = f.value) === null || I === void 0 ? void 0 : I.requiredMark) !== void 0 ? f.value.requiredMark : !t.hideRequiredMark;
    }), p = P(function() {
      var I, j;
      return (I = t.colon) !== null && I !== void 0 ? I : (j = f.value) === null || j === void 0 ? void 0 : j.colon;
    }), m = $u(), b = m.validateMessages, x = P(function() {
      return S(S(S({}, jt), b.value), t.validateMessages);
    }), C = P(function() {
      var I;
      return ue(c.value, (I = {}, E(I, "".concat(c.value, "-").concat(t.layout), !0), E(I, "".concat(c.value, "-hide-required-mark"), s.value === !1), E(I, "".concat(c.value, "-rtl"), v.value === "rtl"), E(I, "".concat(c.value, "-").concat(o.value), o.value), I));
    }), _ = ee(), g = {}, O = function(j, w) {
      g[j] = w;
    }, h = function(j) {
      delete g[j];
    }, $ = function(j) {
      var w = !!j, A = w ? we(j).map(dn) : [];
      return w ? Object.values(g).filter(function(M) {
        return A.findIndex(function(B) {
          return lm(B, M.fieldName.value);
        }) > -1;
      }) : Object.values(g);
    }, T = function(j) {
      if (!t.model) {
        ft(!1, "Form", "model is required for resetFields to work.");
        return;
      }
      $(j).forEach(function(w) {
        w.resetField();
      });
    }, F = function(j) {
      $(j).forEach(function(w) {
        w.clearValidate();
      });
    }, R = function(j) {
      var w = t.scrollToFirstError;
      if (r("finishFailed", j), w && j.errorFields.length) {
        var A = {};
        Y(w) === "object" && (A = w), D(j.errorFields[0].name, A);
      }
    }, k = function() {
      return z.apply(void 0, arguments);
    }, D = function(j) {
      var w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, A = $(j ? [j] : void 0);
      if (A.length) {
        var M = A[0].fieldId.value, B = M ? document.getElementById(M) : null;
        B && Gp(B, S({
          scrollMode: "if-needed",
          block: "nearest"
        }, w));
      }
    }, U = function() {
      var j = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
      if (j === !0) {
        var w = [];
        return Object.values(g).forEach(function(A) {
          var M = A.namePath;
          w.push(M.value);
        }), ra(t.model, w);
      } else
        return ra(t.model, j);
    }, H = function(j, w) {
      if (ft(!(j instanceof Function), "Form", "validateFields/validateField/validate not support callback, please use promise instead"), !t.model)
        return ft(!1, "Form", "model is required for validateFields to work."), Promise.reject("Form `model` is required for validateFields to work.");
      var A = !!j, M = A ? we(j).map(dn) : [], B = [];
      Object.values(g).forEach(function(q) {
        var ne;
        if (A || M.push(q.namePath.value), !!((ne = q.rules) !== null && ne !== void 0 && ne.value.length)) {
          var X = q.namePath.value;
          if (!A || op(M, X)) {
            var Pe = q.validateRules(S({
              validateMessages: x.value
            }, w));
            B.push(Pe.then(function() {
              return {
                name: X,
                errors: [],
                warnings: []
              };
            }).catch(function(Oe) {
              var Ve = [], ot = [];
              return Oe.forEach(function(Yn) {
                var ki = Yn.rule.warningOnly, Kn = Yn.errors;
                ki ? ot.push.apply(ot, ae(Kn)) : Ve.push.apply(Ve, ae(Kn));
              }), Ve.length ? Promise.reject({
                name: X,
                errors: Ve,
                warnings: ot
              }) : {
                name: X,
                errors: Ve,
                warnings: ot
              };
            }));
          }
        }
      });
      var G = Bi(B);
      _.value = G;
      var K = G.then(function() {
        return _.value === G ? Promise.resolve(U(M)) : Promise.reject([]);
      }).catch(function(q) {
        var ne = q.filter(function(X) {
          return X && X.errors.length;
        });
        return Promise.reject({
          values: U(M),
          errorFields: ne,
          outOfDate: _.value !== G
        });
      });
      return K.catch(function(q) {
        return q;
      }), K;
    }, z = function() {
      return H.apply(void 0, arguments);
    }, V = function(j) {
      if (j.preventDefault(), j.stopPropagation(), r("submit", j), t.model) {
        var w = H();
        w.then(function(A) {
          r("finish", A);
        }).catch(function(A) {
          R(A);
        });
      }
    };
    return i({
      resetFields: T,
      clearValidate: F,
      validateFields: H,
      getFieldsValue: U,
      validate: k,
      scrollToField: D
    }), Ri({
      model: P(function() {
        return t.model;
      }),
      name: P(function() {
        return t.name;
      }),
      labelAlign: P(function() {
        return t.labelAlign;
      }),
      labelCol: P(function() {
        return t.labelCol;
      }),
      labelWrap: P(function() {
        return t.labelWrap;
      }),
      wrapperCol: P(function() {
        return t.wrapperCol;
      }),
      vertical: P(function() {
        return t.layout === "vertical";
      }),
      colon: p,
      requiredMark: s,
      validateTrigger: P(function() {
        return t.validateTrigger;
      }),
      rules: P(function() {
        return t.rules;
      }),
      addField: O,
      removeField: h,
      onValidate: function(j, w, A) {
        r("validate", j, w, A);
      },
      validateMessages: x
    }), le(function() {
      return t.rules;
    }, function() {
      t.validateOnRuleChange && H();
    }), function() {
      var I;
      return y("form", S(S({}, l), {}, {
        onSubmit: V,
        class: [C.value, l.class]
      }), [(I = a.default) === null || I === void 0 ? void 0 : I.call(a)]);
    };
  }
});
const Ae = um;
Ae.useInjectFormItemContext = vf;
Ae.ItemRest = sn;
Ae.install = function(e) {
  return e.component(Ae.name, Ae), e.component(Ae.Item.name, Ae.Item), e.component(sn.name, sn), e;
};
export {
  Ae as F,
  kp as a
};
