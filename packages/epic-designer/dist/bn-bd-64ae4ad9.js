import { c as d } from "./_commonjsHelpers-c5d32002.js";
import { r as m } from "./index-aea079b3.js";
var l = { exports: {} };
(function(i, f) {
  (function(n, r) {
    i.exports = r(m());
  })(d, function(n) {
    function r(t) {
      return t && typeof t == "object" && "default" in t ? t : { default: t };
    }
    var s = r(n), u = { 1: "১", 2: "২", 3: "৩", 4: "৪", 5: "৫", 6: "৬", 7: "৭", 8: "৮", 9: "৯", 0: "০" }, a = { "১": "1", "২": "2", "৩": "3", "৪": "4", "৫": "5", "৬": "6", "৭": "7", "৮": "8", "৯": "9", "০": "0" }, e = { name: "bn-bd", weekdays: "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split("_"), months: "জানুয়ারি_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"), weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"), monthsShort: "জানু_ফেব্রু_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্ট_অক্টো_নভে_ডিসে".split("_"), weekdaysMin: "রবি_সোম_মঙ্গ_বুধ_বৃহঃ_শুক্র_শনি".split("_"), weekStart: 0, preparse: function(t) {
      return t.replace(/[১২৩৪৫৬৭৮৯০]/g, function(_) {
        return a[_];
      });
    }, postformat: function(t) {
      return t.replace(/\d/g, function(_) {
        return u[_];
      });
    }, ordinal: function(t) {
      var _ = ["ই", "লা", "রা", "ঠা", "শে"], o = t % 100;
      return "[" + t + (_[(o - 20) % 10] || _[o] || _[0]) + "]";
    }, formats: { LT: "A h:mm সময়", LTS: "A h:mm:ss সময়", L: "DD/MM/YYYY খ্রিস্টাব্দ", LL: "D MMMM YYYY খ্রিস্টাব্দ", LLL: "D MMMM YYYY খ্রিস্টাব্দ, A h:mm সময়", LLLL: "dddd, D MMMM YYYY খ্রিস্টাব্দ, A h:mm সময়" }, meridiem: function(t) {
      return t < 4 ? "রাত" : t < 6 ? "ভোর" : t < 12 ? "সকাল" : t < 15 ? "দুপুর" : t < 18 ? "বিকাল" : t < 20 ? "সন্ধ্যা" : "রাত";
    }, relativeTime: { future: "%s পরে", past: "%s আগে", s: "কয়েক সেকেন্ড", m: "এক মিনিট", mm: "%d মিনিট", h: "এক ঘন্টা", hh: "%d ঘন্টা", d: "এক দিন", dd: "%d দিন", M: "এক মাস", MM: "%d মাস", y: "এক বছর", yy: "%d বছর" } };
    return s.default.locale(e, null, !0), e;
  });
})(l);
const M = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
export {
  M as b
};
