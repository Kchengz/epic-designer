import { a as G } from "./_commonjsHelpers.da91e947.js";
import { _ as J } from "./index.1fa3133f.js";
import { b as K, w as L, k as E, l as Q } from "./useConfigInject.fdc04e2e.js";
import { r as X } from "./_vue_commonjs-external.cdc460b2.js";
import { r as Y, a as Z, b as ee } from "./dayjs.3edcdb27.js";
import { r as re } from "./FormItemContext.896a7bec.js";
import { r as ne } from "./omit.ba8a174d.js";
function te(o, i) {
  for (var t = 0; t < i.length; t++) {
    const l = i[t];
    if (typeof l != "string" && !Array.isArray(l)) {
      for (const u in l)
        if (u !== "default" && !(u in o)) {
          const h = Object.getOwnPropertyDescriptor(l, u);
          h && Object.defineProperty(o, u, h.get ? h : {
            enumerable: !0,
            get: () => l[u]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }));
}
var $ = {}, g = {}, _ = {}, S;
function ae() {
  if (S)
    return _;
  S = 1;
  var o = E.exports;
  Object.defineProperty(_, "__esModule", {
    value: !0
  }), _.timePickerProps = _.default = void 0;
  var i = X, t = o(K()), l = o(Y()), u = Z(), h = o(L()), R = re(), e = o(ne()), c = function() {
    return {
      format: String,
      showNow: {
        type: Boolean,
        default: void 0
      },
      showHour: {
        type: Boolean,
        default: void 0
      },
      showMinute: {
        type: Boolean,
        default: void 0
      },
      showSecond: {
        type: Boolean,
        default: void 0
      },
      use12Hours: {
        type: Boolean,
        default: void 0
      },
      hourStep: Number,
      minuteStep: Number,
      secondStep: Number,
      hideDisabledOptions: {
        type: Boolean,
        default: void 0
      },
      popupClassName: String
    };
  };
  _.timePickerProps = c;
  function p(O) {
    var m = (0, l.default)(O, (0, t.default)((0, t.default)({}, c()), {}, {
      order: {
        type: Boolean,
        default: !0
      }
    })), y = m.TimePicker, A = m.RangePicker, U = (0, i.defineComponent)({
      name: "ATimePicker",
      inheritAttrs: !1,
      props: (0, t.default)((0, t.default)((0, t.default)((0, t.default)({}, (0, u.commonProps)()), (0, u.datePickerProps)()), c()), {}, {
        addon: {
          type: Function
        }
      }),
      slot: ["addon", "renderExtraFooter", "suffixIcon", "clearIcon"],
      setup: function(s, v) {
        var T = v.slots, q = v.expose, a = v.emit, B = v.attrs, k = (0, R.useInjectFormItemContext)();
        (0, h.default)(!(T.addon || s.addon), "TimePicker", "`addon` is deprecated. Please use `v-slot:renderExtraFooter` instead.");
        var C = (0, i.ref)();
        q({
          focus: function() {
            var n;
            (n = C.value) === null || n === void 0 || n.focus();
          },
          blur: function() {
            var n;
            (n = C.value) === null || n === void 0 || n.blur();
          }
        });
        var w = function(n, d) {
          a("update:value", n), a("change", n, d), k.onFieldChange();
        }, I = function(n) {
          a("update:open", n), a("openChange", n);
        }, N = function(n) {
          a("focus", n);
        }, j = function(n) {
          a("blur", n), k.onFieldBlur();
        }, D = function(n) {
          a("ok", n);
        };
        return function() {
          var f = s.id, n = f === void 0 ? k.id.value : f;
          return (0, i.createVNode)(y, (0, t.default)((0, t.default)((0, t.default)({}, B), (0, e.default)(s, ["onUpdate:value", "onUpdate:open"])), {}, {
            id: n,
            dropdownClassName: s.popupClassName,
            mode: void 0,
            ref: C,
            renderExtraFooter: s.addon || T.addon || s.renderExtraFooter || T.renderExtraFooter,
            onChange: w,
            onOpenChange: I,
            onFocus: N,
            onBlur: j,
            onOk: D
          }), T);
        };
      }
    }), H = (0, i.defineComponent)({
      name: "ATimeRangePicker",
      inheritAttrs: !1,
      props: (0, t.default)((0, t.default)((0, t.default)((0, t.default)({}, (0, u.commonProps)()), (0, u.rangePickerProps)()), c()), {}, {
        order: {
          type: Boolean,
          default: !0
        }
      }),
      slot: ["renderExtraFooter", "suffixIcon", "clearIcon"],
      setup: function(s, v) {
        var T = v.slots, q = v.expose, a = v.emit, B = v.attrs, k = (0, i.ref)(), C = (0, R.useInjectFormItemContext)();
        q({
          focus: function() {
            var r;
            (r = k.value) === null || r === void 0 || r.focus();
          },
          blur: function() {
            var r;
            (r = k.value) === null || r === void 0 || r.blur();
          }
        });
        var w = function(r, b) {
          a("update:value", r), a("change", r, b), C.onFieldChange();
        }, I = function(r) {
          a("update:open", r), a("openChange", r);
        }, N = function(r) {
          a("focus", r);
        }, j = function(r) {
          a("blur", r), C.onFieldBlur();
        }, D = function(r, b) {
          a("panelChange", r, b);
        }, f = function(r) {
          a("ok", r);
        }, n = function(r, b, z) {
          a("calendarChange", r, b, z);
        };
        return function() {
          var d = s.id, r = d === void 0 ? C.id.value : d;
          return (0, i.createVNode)(A, (0, t.default)((0, t.default)((0, t.default)({}, B), (0, e.default)(s, ["onUpdate:open", "onUpdate:value"])), {}, {
            id: r,
            dropdownClassName: s.popupClassName,
            picker: "time",
            mode: void 0,
            ref: k,
            onChange: w,
            onOpenChange: I,
            onFocus: N,
            onBlur: j,
            onPanelChange: D,
            onOk: f,
            onCalendarChange: n
          }), T);
        };
      }
    });
    return {
      TimePicker: U,
      TimeRangePicker: H
    };
  }
  var P = p;
  return _.default = P, _;
}
var M = E.exports;
Object.defineProperty(g, "__esModule", {
  value: !0
});
g.default = g.TimeRangePicker = g.TimePicker = void 0;
var oe = M(Q()), ie = M(ae()), ue = M(ee()), W = (0, ie.default)(ue.default), x = W.TimePicker, F = W.TimeRangePicker;
g.TimeRangePicker = F;
g.TimePicker = x;
var de = (0, oe.default)(x, {
  TimePicker: x,
  TimeRangePicker: F,
  install: function(i) {
    return i.component(x.name, x), i.component(F.name, F), i;
  }
});
g.default = de;
(function(o) {
  var i = J.exports;
  Object.defineProperty(o, "__esModule", {
    value: !0
  });
  var t = {};
  o.default = void 0;
  var l = h(g);
  Object.keys(l).forEach(function(e) {
    e === "default" || e === "__esModule" || Object.prototype.hasOwnProperty.call(t, e) || e in o && o[e] === l[e] || Object.defineProperty(o, e, {
      enumerable: !0,
      get: function() {
        return l[e];
      }
    });
  });
  function u(e) {
    if (typeof WeakMap != "function")
      return null;
    var c = /* @__PURE__ */ new WeakMap(), p = /* @__PURE__ */ new WeakMap();
    return (u = function(O) {
      return O ? p : c;
    })(e);
  }
  function h(e, c) {
    if (!c && e && e.__esModule)
      return e;
    if (e === null || i(e) !== "object" && typeof e != "function")
      return { default: e };
    var p = u(c);
    if (p && p.has(e))
      return p.get(e);
    var P = {}, O = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var m in e)
      if (m !== "default" && Object.prototype.hasOwnProperty.call(e, m)) {
        var y = O ? Object.getOwnPropertyDescriptor(e, m) : null;
        y && (y.get || y.set) ? Object.defineProperty(P, m, y) : P[m] = e[m];
      }
    return P.default = e, p && p.set(e, P), P;
  }
  var R = l.default;
  o.default = R;
})($);
const le = /* @__PURE__ */ G($), ge = /* @__PURE__ */ te({
  __proto__: null,
  default: le
}, [$]);
export {
  ge as i
};
