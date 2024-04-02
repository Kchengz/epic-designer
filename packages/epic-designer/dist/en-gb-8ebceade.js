import { c as s } from "./_commonjsHelpers-c5d32002.js";
import { r as d } from "./index-aea079b3.js";
var m = { exports: {} };
(function(o, i) {
  (function(r, t) {
    o.exports = t(d());
  })(s, function(r) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var u = t(r), _ = { name: "en-gb", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekStart: 1, yearStart: 4, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, ordinal: function(e) {
      var a = ["th", "st", "nd", "rd"], n = e % 100;
      return "[" + e + (a[(n - 20) % 10] || a[n] || a[0]) + "]";
    } };
    return u.default.locale(_, null, !0), _;
  });
})(m);
const l = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
export {
  l as e
};
