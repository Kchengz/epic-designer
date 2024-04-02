import { c as m } from "./_commonjsHelpers-c5d32002.js";
import { r as d } from "./index-aea079b3.js";
var s = { exports: {} };
(function(Y, a) {
  (function(o, e) {
    Y.exports = e(d());
  })(m, function(o) {
    function e(_) {
      return _ && typeof _ == "object" && "default" in _ ? _ : { default: _ };
    }
    var l = e(o), n = { name: "zh-cn", weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"), weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"), weekdaysMin: "日_一_二_三_四_五_六".split("_"), months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"), monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"), ordinal: function(_, r) {
      return r === "W" ? _ + "周" : _ + "日";
    }, weekStart: 1, yearStart: 4, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYY年M月D日", LLL: "YYYY年M月D日Ah点mm分", LLLL: "YYYY年M月D日ddddAh点mm分", l: "YYYY/M/D", ll: "YYYY年M月D日", lll: "YYYY年M月D日 HH:mm", llll: "YYYY年M月D日dddd HH:mm" }, relativeTime: { future: "%s内", past: "%s前", s: "几秒", m: "1 分钟", mm: "%d 分钟", h: "1 小时", hh: "%d 小时", d: "1 天", dd: "%d 天", M: "1 个月", MM: "%d 个月", y: "1 年", yy: "%d 年" }, meridiem: function(_, r) {
      var t = 100 * _ + r;
      return t < 600 ? "凌晨" : t < 900 ? "早上" : t < 1100 ? "上午" : t < 1300 ? "中午" : t < 1800 ? "下午" : "晚上";
    } };
    return l.default.locale(n, null, !0), n;
  });
})(s);
const f = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
export {
  f as z
};
