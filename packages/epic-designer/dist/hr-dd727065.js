import { c as d } from "./_commonjsHelpers-c5d32002.js";
import { r as j } from "./index-aea079b3.js";
var p = { exports: {} };
(function(r, m) {
  (function(_, a) {
    r.exports = a(j());
  })(d, function(_) {
    function a(t) {
      return t && typeof t == "object" && "default" in t ? t : { default: t };
    }
    var i = a(_), o = "siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"), n = "siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_"), u = /D[oD]?(\[[^[\]]*\]|\s)+MMMM?/, e = function(t, l) {
      return u.test(l) ? o[t.month()] : n[t.month()];
    };
    e.s = n, e.f = o;
    var s = { name: "hr", weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"), weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"), weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"), months: e, monthsShort: "sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"), weekStart: 1, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" }, relativeTime: { future: "za %s", past: "prije %s", s: "sekunda", m: "minuta", mm: "%d minuta", h: "sat", hh: "%d sati", d: "dan", dd: "%d dana", M: "mjesec", MM: "%d mjeseci", y: "godina", yy: "%d godine" }, ordinal: function(t) {
      return t + ".";
    } };
    return i.default.locale(s, null, !0), s;
  });
})(p);
const f = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
export {
  f as h
};
