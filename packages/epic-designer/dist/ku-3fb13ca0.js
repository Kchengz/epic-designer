import { c as _ } from "./_commonjsHelpers-c5d32002.js";
import { r as c } from "./index-db7dae58.js";
var i = { exports: {} };
(function(f, m) {
  (function(t, r) {
    r(m, c());
  })(_, function(t, r) {
    function d(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var l = d(r), o = { 1: "١", 2: "٢", 3: "٣", 4: "٤", 5: "٥", 6: "٦", 7: "٧", 8: "٨", 9: "٩", 0: "٠" }, s = { "١": "1", "٢": "2", "٣": "3", "٤": "4", "٥": "5", "٦": "6", "٧": "7", "٨": "8", "٩": "9", "٠": "0" }, u = ["کانوونی دووەم", "شوبات", "ئادار", "نیسان", "ئایار", "حوزەیران", "تەممووز", "ئاب", "ئەیلوول", "تشرینی یەکەم", "تشرینی دووەم", "کانوونی یەکەم"], a = { name: "ku", months: u, monthsShort: u, weekdays: "یەکشەممە_دووشەممە_سێشەممە_چوارشەممە_پێنجشەممە_هەینی_شەممە".split("_"), weekdaysShort: "یەکشەم_دووشەم_سێشەم_چوارشەم_پێنجشەم_هەینی_شەممە".split("_"), weekStart: 6, weekdaysMin: "ی_د_س_چ_پ_هـ_ش".split("_"), preparse: function(e) {
      return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function(n) {
        return s[n];
      }).replace(/،/g, ",");
    }, postformat: function(e) {
      return e.replace(/\d/g, function(n) {
        return o[n];
      }).replace(/,/g, "،");
    }, ordinal: function(e) {
      return e;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, meridiem: function(e) {
      return e < 12 ? "پ.ن" : "د.ن";
    }, relativeTime: { future: "لە %s", past: "لەمەوپێش %s", s: "چەند چرکەیەک", m: "یەک خولەک", mm: "%d خولەک", h: "یەک کاتژمێر", hh: "%d کاتژمێر", d: "یەک ڕۆژ", dd: "%d ڕۆژ", M: "یەک مانگ", MM: "%d مانگ", y: "یەک ساڵ", yy: "%d ساڵ" } };
    l.default.locale(a, null, !0), t.default = a, t.englishToArabicNumbersMap = o, Object.defineProperty(t, "__esModule", { value: !0 });
  });
})(i, i.exports);
const Y = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
export {
  Y as k
};
