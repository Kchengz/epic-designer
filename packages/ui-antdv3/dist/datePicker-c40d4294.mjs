import { defineComponent as R, watch as W, h as D } from "vue";
import { g as q, _ as w } from "./index-5fc6c346.mjs";
import { u as j, i as Q } from "./useConfigInject-f0dbb416.mjs";
import { b, r as C } from "./dayjs-2c7d1d12.mjs";
import "./index-6ded6d59.mjs";
import "./wave-7581548b.mjs";
import "./raf-09a8b76f.mjs";
import "./classCallCheck-7491e821.mjs";
import "./colors-049dd05b.mjs";
import "./index-d3f861e4.mjs";
import "./Portal-f8d09ab1.mjs";
import "./vnode-1aa65f32.mjs";
import "./ResizeObserver.es-aa1c2e0c.mjs";
import "./KeyCode-8a26b842.mjs";
import "./useMergedState-dbb38782.mjs";
import "./useMemo-338dbc47.mjs";
import "./shallowequal-01dcd160.mjs";
import "./useState-d62b7544.mjs";
import "./FormItemContext-f32a9c9f.mjs";
import "./omit-d14a337a.mjs";
import "./createForOfIteratorHelper-4ad6b42a.mjs";
var M = {}, r = {}, O = Q;
Object.defineProperty(r, "__esModule", {
  value: !0
});
r.default = r.WeekPicker = r.RangePicker = r.QuarterPicker = r.MonthPicker = void 0;
var E = O(j()), T = O(b()), Y = O(C()), c = (0, Y.default)(T.default), g = c.DatePicker, k = c.WeekPicker, s = c.MonthPicker, x = c.YearPicker, N = c.TimePicker, v = c.QuarterPicker, _ = c.RangePicker;
r.RangePicker = _;
r.QuarterPicker = v;
r.MonthPicker = s;
r.WeekPicker = k;
var U = (0, E.default)(g, {
  WeekPicker: k,
  MonthPicker: s,
  YearPicker: x,
  RangePicker: _,
  TimePicker: N,
  QuarterPicker: v,
  install: function(t) {
    return t.component(g.name, g), t.component(_.name, _), t.component(s.name, s), t.component(k.name, k), t.component(v.name, v), t;
  }
});
r.default = U;
(function(a) {
  var t = w;
  Object.defineProperty(a, "__esModule", {
    value: !0
  });
  var p = {};
  a.default = void 0;
  var o = m(r);
  Object.keys(o).forEach(function(e) {
    e === "default" || e === "__esModule" || Object.prototype.hasOwnProperty.call(p, e) || e in a && a[e] === o[e] || Object.defineProperty(a, e, {
      enumerable: !0,
      get: function() {
        return o[e];
      }
    });
  });
  function n(e) {
    if (typeof WeakMap != "function")
      return null;
    var P = /* @__PURE__ */ new WeakMap(), u = /* @__PURE__ */ new WeakMap();
    return (n = function(h) {
      return h ? u : P;
    })(e);
  }
  function m(e, P) {
    if (!P && e && e.__esModule)
      return e;
    if (e === null || t(e) !== "object" && typeof e != "function")
      return { default: e };
    var u = n(P);
    if (u && u.has(e))
      return u.get(e);
    var l = {}, h = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var f in e)
      if (f !== "default" && Object.prototype.hasOwnProperty.call(e, f)) {
        var d = h ? Object.getOwnPropertyDescriptor(e, f) : null;
        d && (d.get || d.set) ? Object.defineProperty(l, f, d) : l[f] = e[f];
      }
    return l.default = e, u && u.set(e, l), l;
  }
  var i = o.default;
  a.default = i;
})(M);
const y = /* @__PURE__ */ q(M), oe = R({
  emits: ["update:value"],
  setup(a, { emit: t, attrs: p }) {
    W(
      () => p.type,
      () => {
        o();
      }
    );
    function o(n = null) {
      t("update:value", n);
    }
    return () => {
      let n = y;
      const m = p.type, i = {
        ...p,
        "onUpdate:value": o
      };
      return m === "daterange" ? (typeof i.value != "object" && i.value !== null && (i.value = null), n = y.RangePicker) : m === "month" ? (typeof i.value == "object" && (i.value = null), n = y.MonthPicker) : typeof i.value == "object" && (i.value = null), [D(n, i)];
    };
  }
});
export {
  oe as default
};
