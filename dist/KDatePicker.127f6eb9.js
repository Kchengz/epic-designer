import { defineComponent as R, watch as W, h as D } from "vue";
import { a as q } from "./_commonjsHelpers.da91e947.js";
import { _ as w } from "./index.1fa3133f.js";
import { l as j, k as Q } from "./useConfigInject.fdc04e2e.js";
import { b, r as C } from "./dayjs.3edcdb27.js";
import "./index.1e43ecc1.js";
import "./_vue_commonjs-external.cdc460b2.js";
import "./index.ece5d132.js";
import "./wave.712e07cd.js";
import "./raf.f4e1fc4f.js";
import "./classCallCheck.fb739271.js";
import "./colors.6e77f922.js";
import "./useMergedState.94fe30d0.js";
import "./Portal.a423630d.js";
import "./vnode.716a0aad.js";
import "./ResizeObserver.es.f11dbe23.js";
import "./KeyCode.93922cee.js";
import "./useMemo.4b130cf0.js";
import "./shallowequal.ae22630f.js";
import "./useState.0fa93a30.js";
import "./FormItemContext.896a7bec.js";
import "./omit.ba8a174d.js";
import "./weekYear.7d67b0c3.js";
var M = {}, r = {}, O = Q.exports;
Object.defineProperty(r, "__esModule", {
  value: !0
});
r.default = r.WeekPicker = r.RangePicker = r.QuarterPicker = r.MonthPicker = void 0;
var T = O(j()), Y = O(b()), x = O(C()), c = (0, x.default)(Y.default), g = c.DatePicker, k = c.WeekPicker, s = c.MonthPicker, E = c.YearPicker, N = c.TimePicker, v = c.QuarterPicker, _ = c.RangePicker;
r.RangePicker = _;
r.QuarterPicker = v;
r.MonthPicker = s;
r.WeekPicker = k;
var U = (0, T.default)(g, {
  WeekPicker: k,
  MonthPicker: s,
  YearPicker: E,
  RangePicker: _,
  TimePicker: N,
  QuarterPicker: v,
  install: function(t) {
    return t.component(g.name, g), t.component(_.name, _), t.component(s.name, s), t.component(k.name, k), t.component(v.name, v), t;
  }
});
r.default = U;
(function(a) {
  var t = w.exports;
  Object.defineProperty(a, "__esModule", {
    value: !0
  });
  var p = {};
  a.default = void 0;
  var o = P(r);
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
    var m = /* @__PURE__ */ new WeakMap(), u = /* @__PURE__ */ new WeakMap();
    return (n = function(h) {
      return h ? u : m;
    })(e);
  }
  function P(e, m) {
    if (!m && e && e.__esModule)
      return e;
    if (e === null || t(e) !== "object" && typeof e != "function")
      return { default: e };
    var u = n(m);
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
const y = /* @__PURE__ */ q(M), ce = R({
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
      const P = p.type, i = {
        ...p,
        "onUpdate:value": o
      };
      return P === "daterange" ? (typeof i.value != "object" && i.value !== null && (i.value = null), n = y.RangePicker) : P === "month" ? (typeof i.value == "object" && (i.value = null), n = y.MonthPicker) : typeof i.value == "object" && (i.value = null), [D(n, i)];
    };
  }
});
export {
  ce as default
};
